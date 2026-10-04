import os, json, sqlite3, hashlib, secrets, base64, zipfile, io, csv, html
from datetime import datetime, date, timedelta
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlparse, parse_qs

BASE=os.path.dirname(os.path.abspath(__file__))
DB=os.path.join(BASE,'kvcell.db')
PORT=int(os.environ.get('PORT','80'))
SESSIONS={}

SCHEMA='''
CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,email TEXT UNIQUE,password_hash TEXT,role TEXT,unit TEXT,permissions TEXT,active INTEGER DEFAULT 1,created_at TEXT);
CREATE TABLE IF NOT EXISTS customers(id INTEGER PRIMARY KEY AUTOINCREMENT,type TEXT,name TEXT,document_type TEXT,document TEXT,phone_type TEXT,phone TEXT,email TEXT,address TEXT,city TEXT,birth_date TEXT,balance REAL DEFAULT 0,observations TEXT,created_at TEXT);
CREATE TABLE IF NOT EXISTS devices(id INTEGER PRIMARY KEY AUTOINCREMENT,unit TEXT,customer_id INTEGER,brand TEXT,model TEXT,imei TEXT,serial TEXT,color TEXT,storage TEXT,status TEXT,photos TEXT DEFAULT '[]',notes TEXT,created_at TEXT);
CREATE TABLE IF NOT EXISTS services(id INTEGER PRIMARY KEY AUTOINCREMENT,unit TEXT,customer_id INTEGER,device_id INTEGER,kind TEXT,description TEXT,checklist TEXT,diagnosis TEXT,status TEXT,technician TEXT,price REAL,warranty TEXT,photos TEXT DEFAULT '[]',notes TEXT,public_token TEXT,created_at TEXT,updated_at TEXT);
CREATE TABLE IF NOT EXISTS unlocks(id INTEGER PRIMARY KEY AUTOINCREMENT,unit TEXT,customer_id INTEGER,device_id INTEGER,brand TEXT,model TEXT,imei TEXT,kind TEXT,checklist TEXT,status TEXT,operator TEXT,price REAL,photos TEXT DEFAULT '[]',notes TEXT,public_token TEXT,created_at TEXT);
CREATE TABLE IF NOT EXISTS purchases(id INTEGER PRIMARY KEY AUTOINCREMENT,unit TEXT,customer_id INTEGER,brand TEXT,model TEXT,imei TEXT,purchase_date TEXT,amount REAL,expenses REAL,freight REAL,total_cost REAL,suggested_price REAL,expected_profit REAL,photos TEXT DEFAULT '[]',checklist TEXT,observations TEXT,status TEXT,created_at TEXT);
CREATE TABLE IF NOT EXISTS inventory(id INTEGER PRIMARY KEY AUTOINCREMENT,unit TEXT,code TEXT,name TEXT,type TEXT,category TEXT,qty REAL,min_qty REAL,cost REAL,price REAL,supplier TEXT,compatibility TEXT,notes TEXT,created_at TEXT);
CREATE TABLE IF NOT EXISTS models(id INTEGER PRIMARY KEY AUTOINCREMENT,brand TEXT,model TEXT,service_prices TEXT,margin REAL,warranty TEXT,notes TEXT,created_at TEXT);
CREATE TABLE IF NOT EXISTS quotes(id INTEGER PRIMARY KEY AUTOINCREMENT,number TEXT UNIQUE,unit TEXT,customer_id INTEGER,device_id INTEGER,items TEXT,subtotal REAL,total REAL,warranty_type TEXT,warranty_days INTEGER DEFAULT 0,travel_enabled INTEGER DEFAULT 0,travel_fee REAL DEFAULT 0,quote_type TEXT DEFAULT 'servico',conditions TEXT,observations TEXT,valid_until TEXT,status TEXT,public_token TEXT UNIQUE,created_at TEXT);
CREATE TABLE IF NOT EXISTS sales(id INTEGER PRIMARY KEY AUTOINCREMENT,unit TEXT,customer_id INTEGER,items TEXT,total REAL,payment TEXT,created_at TEXT);
CREATE TABLE IF NOT EXISTS finance(id INTEGER PRIMARY KEY AUTOINCREMENT,unit TEXT,type TEXT,category TEXT,description TEXT,amount REAL,ref_type TEXT,ref_id INTEGER,due_date TEXT,paid INTEGER DEFAULT 1,created_at TEXT);
CREATE TABLE IF NOT EXISTS forgotten(id INTEGER PRIMARY KEY AUTOINCREMENT,unit TEXT,brand TEXT,model TEXT,imei TEXT,possible_owner TEXT,phone TEXT,photos TEXT DEFAULT '[]',checklist TEXT DEFAULT '{}',notes TEXT,status TEXT,created_at TEXT);
CREATE TABLE IF NOT EXISTS contracts(id INTEGER PRIMARY KEY AUTOINCREMENT,unit TEXT,type TEXT,customer_id INTEGER,device_id INTEGER,payload TEXT,customer_signature TEXT,store_signature TEXT,created_at TEXT);
CREATE TABLE IF NOT EXISTS chat(id INTEGER PRIMARY KEY AUTOINCREMENT,unit TEXT,user_name TEXT,message TEXT,created_at TEXT);
CREATE TABLE IF NOT EXISTS audit(id INTEGER PRIMARY KEY AUTOINCREMENT,user_id INTEGER,action TEXT,entity TEXT,entity_id INTEGER,details TEXT,created_at TEXT);
CREATE TABLE IF NOT EXISTS settings(k TEXT PRIMARY KEY,v TEXT);
CREATE TABLE IF NOT EXISTS notifications(id INTEGER PRIMARY KEY AUTOINCREMENT,unit TEXT,title TEXT,message TEXT,read INTEGER DEFAULT 0,created_at TEXT);
'''

def now(): return datetime.now().strftime('%Y-%m-%d %H:%M:%S')
def db():
    c=sqlite3.connect(DB); c.row_factory=sqlite3.Row; c.executescript(SCHEMA); return c
def ph(p): return hashlib.sha256(p.encode()).hexdigest()
def seed():
    c=db();
    if c.execute('SELECT COUNT(*) FROM users').fetchone()[0]==0:
        c.execute('INSERT INTO users(name,email,password_hash,role,unit,permissions,created_at) VALUES(?,?,?,?,?,?,?)',('Administrador','admin@kvcell.local',ph('kvcell123'),'admin','TODOS',json.dumps({'all':True}),'2026-10-04 00:00:00'))
    defaults={'company_name':'KV CELL','tagline':'OS PREMIUM • Laboratório avançado • Desde 2023','phone':'(21) 98042-1531','instagram':'@KV._CELL','units':'LAGOS,MAGÉ','currency':'BRL','theme':'yellow-black'}
    for k,v in defaults.items(): c.execute('INSERT OR IGNORE INTO settings(k,v) VALUES(?,?)',(k,v))
    c.commit(); c.close()

def migrate():
    c=db()
    migrations={
        'quotes':['warranty_days INTEGER DEFAULT 0','travel_enabled INTEGER DEFAULT 0','travel_fee REAL DEFAULT 0',"quote_type TEXT DEFAULT 'servico'"],
        'forgotten':["checklist TEXT DEFAULT '{}'"]
    }
    for table,cols in migrations.items():
        existing={r['name'] for r in c.execute(f'PRAGMA table_info({table})').fetchall()}
        for col in cols:
            name=col.split()[0]
            if name not in existing:
                try:c.execute(f'ALTER TABLE {table} ADD COLUMN {col}')
                except Exception:pass
    c.commit();c.close()

seed(); migrate()

def rowdict(r): return dict(r) if r else None
def rows(sql,args=()):
    c=db(); r=[dict(x) for x in c.execute(sql,args).fetchall()]; c.close(); return r
def one(sql,args=()):
    c=db(); r=c.execute(sql,args).fetchone(); c.close(); return dict(r) if r else None
def write(sql,args=()):
    c=db(); cur=c.execute(sql,args); c.commit(); rid=cur.lastrowid; c.close(); return rid

def audit(uid,action,entity,eid,details=''):
    try: write('INSERT INTO audit(user_id,action,entity,entity_id,details,created_at) VALUES(?,?,?,?,?,?)',(uid,action,entity,eid,details,now()))
    except: pass

def token(): return secrets.token_urlsafe(18).replace('-','').replace('_','')
def js(v):
    try:return json.dumps(v,ensure_ascii=False)
    except:return '{}'
def safe(s): return html.escape(str(s or ''))

def unit_filter(table,unit):
    return ('',[]) if not unit or unit=='TODOS' else (f' WHERE unit=?',[unit])

def dashboard(unit):
    cond,args=unit_filter('services',unit)
    def count(q,a=args): return one(q,a)['n']
    svccond,sargs=unit_filter('services',unit); purcond,pargs=unit_filter('purchases',unit); invcond,iargs=unit_filter('inventory',unit); fincond,fargs=unit_filter('finance',unit)
    income=one('SELECT COALESCE(SUM(amount),0) n FROM finance'+fincond+' AND type="entrada"' if fincond else 'SELECT COALESCE(SUM(amount),0) n FROM finance WHERE type="entrada"',fargs)['n']
    expense=one('SELECT COALESCE(SUM(amount),0) n FROM finance'+fincond+' AND type="saida"' if fincond else 'SELECT COALESCE(SUM(amount),0) n FROM finance WHERE type="saida"',fargs)['n']
    q=lambda sql,a=(): one(sql,a)['n']
    customers=q('SELECT COUNT(*) n FROM customers')
    services=q('SELECT COUNT(*) n FROM services'+svccond+(' AND status NOT IN ("entregue","cancelado")' if svccond else ' WHERE status NOT IN ("entregue","cancelado")'),sargs)
    vitrine=q('SELECT COUNT(*) n FROM purchases'+purcond+(' AND status="vitrine"' if purcond else ' WHERE status="vitrine"'),pargs)
    low=q('SELECT COUNT(*) n FROM inventory'+invcond+(' AND qty<=min_qty' if invcond else ' WHERE qty<=min_qty'),iargs)
    sales=q('SELECT COUNT(*) n FROM sales'+unit_filter('sales',unit)[0],unit_filter('sales',unit)[1])
    return {'customers':customers,'open_services':services,'vitrine':vitrine,'low_stock':low,'income':float(income or 0),'expense':float(expense or 0),'sales':sales}

class Handler(BaseHTTPRequestHandler):
    server_version='KV-CELL-PREMIUM/2.0'
    def log_message(self,*a): pass
    def send(self,status,body,ctype='application/json',headers=None):
        if isinstance(body,str): body=body.encode()
        self.send_response(status); self.send_header('Content-Type',ctype+'; charset=utf-8'); self.send_header('Content-Length',str(len(body))); self.send_header('Cache-Control','no-store')
        for k,v in (headers or {}).items(): self.send_header(k,v)
        self.end_headers(); self.wfile.write(body)
    def json(self,obj,status=200,headers=None): self.send(status,json.dumps(obj,ensure_ascii=False).encode(),headers=headers)
    def body(self):
        n=int(self.headers.get('Content-Length','0')); raw=self.rfile.read(n) if n else b''
        try:return json.loads(raw or b'{}')
        except:return {}
    def user(self):
        c=self.headers.get('Cookie',''); sid=''
        for p in c.split(';'):
            if p.strip().startswith('sid='): sid=p.strip()[4:]
        return SESSIONS.get(sid)
    def require(self):
        u=self.user()
        if not u: self.json({'error':'Não autenticado'},401); return None
        return u
    def do_GET(self):
        p=urlparse(self.path); path=p.path; qs=parse_qs(p.query)
        if path=='/api/health': return self.json({'ok':True,'app':'KV CELL OS PREMIUM','port':PORT,'time':now()})
        if path.startswith('/public/'):
            return self.public(path)
        if path=='/': return self.send(200,INDEX,'text/html')
        if path.startswith('/static/'):
            name=path.split('/')[-1]; fp=os.path.join(BASE,'static',name)
            if os.path.exists(fp): return self.send(200,open(fp,'rb').read(),'text/css' if name.endswith('.css') else 'application/javascript')
            return self.send(404,b'Not found','text/plain')
        u=self.require()
        if not u:return
        if path=='/api/me': return self.json({'user':u})
        if path=='/api/dashboard': return self.json(dashboard(qs.get('unit',['TODOS'])[0]))
        if path=='/api/chart': return self.chart(qs.get('unit',['TODOS'])[0])
        if path=='/api/settings': return self.json({r['k']:r['v'] for r in rows('SELECT k,v FROM settings')})
        if path=='/api/notifications': return self.json(rows('SELECT * FROM notifications ORDER BY id DESC LIMIT 30'))
        if path=='/api/export/backup': return self.backup()
        if path=='/api/export/inventory.csv': return self.inventory_csv()
        if path=='/api/search': return self.search(qs.get('q',[''])[0])
        if path=='/api/customer-search': return self.customer_search(qs.get('q',[''])[0])
        if path=='/api/customer-stats': return self.customer_stats(int(qs.get('id',['0'])[0] or 0))
        if path.startswith('/api/'): return self.list_api(path[5:],qs)
        self.send(404,b'Not found','text/plain')
    def do_POST(self):
        p=urlparse(self.path); path=p.path; data=self.body()
        if path=='/api/login': return self.login(data)
        if path=='/api/logout': return self.logout()
        if path.startswith('/public/'): return self.send(405,b'','text/plain')
        u=self.require()
        if not u:return
        if path=='/api/upload': return self.upload(data,u)
        if path=='/api/settings': return self.save_settings(data,u)
        if path=='/api/mark-notifications': return self.json({'ok':True})
        if path.startswith('/api/'):
            try:return self.create_api(path[5:],data,u)
            except sqlite3.IntegrityError as e:return self.json({'error':'Registro inválido ou duplicado: '+str(e)},400)
            except Exception as e:return self.json({'error':'Falha ao salvar: '+str(e)},500)
        self.send(404,b'Not found','text/plain')
    def do_PUT(self):
        p=urlparse(self.path); u=self.require()
        if not u:return
        data=self.body(); path=p.path
        if path.startswith('/api/'): return self.update_api(path[5:],data,u)
        self.send(404,b'Not found','text/plain')
    def login(self,d):
        r=one('SELECT id,name,email,role,unit,permissions FROM users WHERE email=? AND password_hash=? AND active=1',(d.get('email','').strip().lower(),ph(d.get('password',''))))
        if not r:return self.json({'error':'E-mail ou senha inválidos'},401)
        sid=secrets.token_urlsafe(32); SESSIONS[sid]=r; audit(r['id'],'login','users',r['id'])
        return self.json({'ok':True,'user':r},headers={'Set-Cookie':f'sid={sid}; Path=/; HttpOnly; SameSite=Lax'})
    def logout(self):
        u=self.user();
        if u:audit(u['id'],'logout','users',u['id'])
        c=self.headers.get('Cookie',''); sid=''
        for p in c.split(';'):
            if p.strip().startswith('sid='): sid=p.strip()[4:]
        SESSIONS.pop(sid,None); return self.json({'ok':True},headers={'Set-Cookie':'sid=; Path=/; Max-Age=0'})
    def list_api(self,resource,qs):
        maps={'customers':'customers','devices':'devices','services':'services','unlocks':'unlocks','purchases':'purchases','inventory':'inventory','models':'models','quotes':'quotes','sales':'sales','finance':'finance','forgotten':'forgotten','contracts':'contracts','users':'users','chat':'chat','audit':'audit'}
        if resource not in maps:return self.json({'error':'Recurso inválido'},404)
        table=maps[resource]; unit=qs.get('unit',['TODOS'])[0]
        wh=[]; args=[]
        if unit!='TODOS' and table not in ('customers','users','models','audit'): wh.append('unit=?');args.append(unit)
        if resource=='services' and qs.get('kind',[''])[0]:wh.append('kind=?');args.append(qs['kind'][0])
        if qs.get('customer_id',[''])[0] and table in ('customers','devices','services','unlocks','purchases','quotes','sales','contracts'):
            wh.append('customer_id=?');args.append(int(qs['customer_id'][0]))
        sql='SELECT * FROM '+table+(' WHERE '+' AND '.join(wh) if wh else '')+' ORDER BY id DESC LIMIT 500'
        return self.json(rows(sql,args))
    def create_api(self,r,d,u):
        if r=='customers':
            rid=write('INSERT INTO customers(type,name,document_type,document,phone_type,phone,email,address,city,birth_date,balance,observations,created_at) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)',(d.get('type','PF'),d.get('name'),d.get('document_type','CPF'),d.get('document'),d.get('phone_type','Celular'),d.get('phone'),d.get('email'),d.get('address'),d.get('city'),d.get('birth_date'),float(d.get('balance') or 0),d.get('observations'),now()))
        elif r=='devices': rid=write('INSERT INTO devices(unit,customer_id,brand,model,imei,serial,color,storage,status,photos,notes,created_at) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),d.get('customer_id') or None,d.get('brand'),d.get('model'),d.get('imei'),d.get('serial'),d.get('color'),d.get('storage'),d.get('status','Em bancada'),js(d.get('photos',[])),d.get('notes'),now()))
        elif r=='services':
            t=token(); rid=write('INSERT INTO services(unit,customer_id,device_id,kind,description,checklist,diagnosis,status,technician,price,warranty,photos,notes,public_token,created_at,updated_at) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),d.get('customer_id') or None,d.get('device_id') or None,d.get('kind','conserto'),d.get('description'),js(d.get('checklist',{})),d.get('diagnosis'),d.get('status','aberto'),d.get('technician'),float(d.get('price') or 0),d.get('warranty'),js(d.get('photos',[])),d.get('notes'),t,now(),now()))
            if float(d.get('price') or 0)>0: write('INSERT INTO finance(unit,type,category,description,amount,ref_type,ref_id,created_at) VALUES(?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),'entrada','Serviço',d.get('description') or 'Conserto',float(d.get('price') or 0),'service',rid,now()))
        elif r=='unlocks':
            t=token(); rid=write('INSERT INTO unlocks(unit,customer_id,device_id,brand,model,imei,kind,checklist,status,operator,price,photos,notes,public_token,created_at) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),d.get('customer_id') or None,d.get('device_id') or None,d.get('brand'),d.get('model'),d.get('imei'),d.get('kind'),js(d.get('checklist',{})),d.get('status','aberto'),d.get('operator'),float(d.get('price') or 0),js(d.get('photos',[])),d.get('notes'),t,now()))
            if float(d.get('price') or 0)>0: write('INSERT INTO finance(unit,type,category,description,amount,ref_type,ref_id,created_at) VALUES(?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),'entrada','Desbloqueio',d.get('kind') or 'Desbloqueio',float(d.get('price') or 0),'unlock',rid,now()))
        elif r=='purchases':
            total=float(d.get('amount') or 0)+float(d.get('expenses') or 0)+float(d.get('freight') or 0); sp=float(d.get('suggested_price') or 0); rid=write('INSERT INTO purchases(unit,customer_id,brand,model,imei,purchase_date,amount,expenses,freight,total_cost,suggested_price,expected_profit,photos,checklist,observations,status,created_at) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),d.get('customer_id') or None,d.get('brand'),d.get('model'),d.get('imei'),d.get('purchase_date') or date.today().isoformat(),float(d.get('amount') or 0),float(d.get('expenses') or 0),float(d.get('freight') or 0),total,sp,sp-total,js(d.get('photos',[])),js(d.get('checklist',{})),d.get('observations'),'vitrine',now()))
            write('INSERT INTO finance(unit,type,category,description,amount,ref_type,ref_id,created_at) VALUES(?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),'saida','Compra de aparelho',f"{d.get('brand','')} {d.get('model','')}",total,'purchase',rid,now()))
        elif r=='inventory': rid=write('INSERT INTO inventory(unit,code,name,type,category,qty,min_qty,cost,price,supplier,compatibility,notes,created_at) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),d.get('code'),d.get('name'),d.get('type','Peça'),d.get('category'),float(d.get('qty') or 0),float(d.get('min_qty') or 0),float(d.get('cost') or 0),float(d.get('price') or 0),d.get('supplier'),d.get('compatibility'),d.get('notes'),now()))
        elif r=='models': rid=write('INSERT INTO models(brand,model,service_prices,margin,warranty,notes,created_at) VALUES(?,?,?,?,?,?,?)',(d.get('brand'),d.get('model'),js(d.get('service_prices',{})),float(d.get('margin') or 0),d.get('warranty'),d.get('notes'),now()))
        elif r=='quotes':
            num='ORC-'+datetime.now().strftime('%Y%m')+'-'+str(secrets.randbelow(9000)+1000); t=token(); items=d.get('items',[]); total=float(d.get('total') or 0); travel_enabled=1 if str(d.get('travel_enabled','0')).lower() in ('1','true','sim','on') else 0; travel_fee=float(d.get('travel_fee') or 0) if travel_enabled else 0; warranty_days=int(d.get('warranty_days') or 0); rid=write('INSERT INTO quotes(number,unit,customer_id,device_id,items,subtotal,total,warranty_type,warranty_days,travel_enabled,travel_fee,quote_type,conditions,observations,valid_until,status,public_token,created_at) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',(num,d.get('unit','TODOS'),d.get('customer_id') or None,d.get('device_id') or None,js(items),float(d.get('subtotal') or total),total,d.get('warranty_type','personalizada'),warranty_days,travel_enabled,travel_fee,d.get('quote_type','servico'),d.get('conditions'),d.get('observations'),d.get('valid_until'),d.get('status','aberto'),t,now()))
            return self.json({'ok':True,'id':rid,'number':num,'public_url':f'/public/quote/{t}'})
        elif r=='sales':
            rid=write('INSERT INTO sales(unit,customer_id,items,total,payment,created_at) VALUES(?,?,?,?,?,?)',(d.get('unit','TODOS'),d.get('customer_id') or None,d.get('items'),float(d.get('total') or 0),d.get('payment'),now())); write('INSERT INTO finance(unit,type,category,description,amount,ref_type,ref_id,created_at) VALUES(?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),'entrada','Venda',d.get('items') or 'Venda',float(d.get('total') or 0),'sale',rid,now()))
        elif r=='finance': rid=write('INSERT INTO finance(unit,type,category,description,amount,due_date,paid,created_at) VALUES(?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),d.get('type','entrada'),d.get('category'),d.get('description'),float(d.get('amount') or 0),d.get('due_date'),1 if d.get('paid',True) else 0,now()))
        elif r=='forgotten': rid=write('INSERT INTO forgotten(unit,brand,model,imei,possible_owner,phone,photos,checklist,notes,status,created_at) VALUES(?,?,?,?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),d.get('brand'),d.get('model'),d.get('imei'),d.get('possible_owner'),d.get('phone'),js(d.get('photos',[])),js(d.get('checklist',{})),d.get('notes'),d.get('status','aguardando identificação'),now()))
        elif r=='contracts': rid=write('INSERT INTO contracts(unit,type,customer_id,device_id,payload,customer_signature,store_signature,created_at) VALUES(?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),d.get('type'),d.get('customer_id') or None,d.get('device_id') or None,js(d.get('payload',{})),d.get('customer_signature'),d.get('store_signature'),now()))
        elif r=='users':
            if u['role']!='admin':return self.json({'error':'Somente administrador'},403)
            rid=write('INSERT INTO users(name,email,password_hash,role,unit,permissions,created_at) VALUES(?,?,?,?,?,?,?)',(d.get('name'),d.get('email'),ph(d.get('password','123456')),d.get('role','atendente'),d.get('unit','TODOS'),js(d.get('permissions',{'dashboard':True})),now()))
        elif r=='chat': rid=write('INSERT INTO chat(unit,user_name,message,created_at) VALUES(?,?,?,?)',(d.get('unit','TODOS'),u['name'],d.get('message'),now()))
        else:return self.json({'error':'Recurso não suportado'},404)
        audit(u['id'],'create',r,rid,js(d)); return self.json({'ok':True,'id':rid})
    def update_api(self,r,d,u):
        table=r; rid=d.get('id');
        allowed={'services':['status','diagnosis','technician','price','warranty','notes','checklist','photos'],'unlocks':['status','operator','price','notes','checklist','photos'],'devices':['status','notes','photos'],'forgotten':['status','notes','possible_owner','photos'],'quotes':['status','valid_until','observations'],'inventory':['qty','min_qty','price','cost','compatibility','notes']}
        if table not in allowed:return self.json({'error':'Atualização não permitida'},400)
        fields=[f for f in allowed[table] if f in d]; vals=[]
        if not fields:return self.json({'error':'Nenhum campo'},400)
        for f in fields:
            v=d[f]; v=js(v) if f in ('checklist','photos') and not isinstance(v,str) else v; vals.append(v)
        vals.append(rid); write('UPDATE '+table+' SET '+','.join(f+'=?' for f in fields)+' WHERE id=?',vals); audit(u['id'],'update',table,rid,js(d)); return self.json({'ok':True})
    def upload(self,d,u):
        # Images are data URLs stored in DB through caller; endpoint returns a compact data URL for the frontend.
        s=d.get('data','');
        if not s.startswith('data:image/'): return self.json({'error':'Imagem inválida'},400)
        if len(s)>6_000_000:return self.json({'error':'Imagem muito grande. Máximo ~6MB'},400)
        return self.json({'ok':True,'data':s})
    def save_settings(self,d,u):
        if u['role']!='admin':return self.json({'error':'Somente administrador'},403)
        c=db();
        for k,v in d.items(): c.execute('INSERT INTO settings(k,v) VALUES(?,?) ON CONFLICT(k) DO UPDATE SET v=excluded.v',(k,str(v)))
        c.commit();c.close();return self.json({'ok':True})
    def chart(self,unit):
        cond,args=unit_filter('finance',unit); where=(' WHERE '+cond[7:] if cond else '')
        # last 14 days
        data=[]
        for i in range(13,-1,-1):
            dt=(date.today()-timedelta(days=i)).isoformat(); a=args+[dt] if cond else [dt]
            sql='SELECT COALESCE(SUM(CASE WHEN type="entrada" THEN amount ELSE 0 END),0) inc, COALESCE(SUM(CASE WHEN type="saida" THEN amount ELSE 0 END),0) out FROM finance'+(' WHERE unit=? AND date(created_at)=?' if cond else ' WHERE date(created_at)=?')
            r=one(sql,a);data.append({'date':dt[5:],'income':float(r['inc']),'expense':float(r['out'])})
        return self.json(data)
    def search(self,q):
        q='%'+q+'%'; out=[]
        for t,cols in [('customers',['name','phone','document']),('devices',['model','imei','brand']),('services',['description','technician']),('purchases',['model','imei','brand'])]:
            for col in cols:
                out += rows(f'SELECT "{t}" source,id,"{col}" value FROM {t} WHERE "{col}" LIKE ? LIMIT 20',(q,))
        return self.json(out[:80])
    def customer_search(self,q):
        q=(q or '').strip()
        if not q:return self.json([])
        like=q+'%'
        digits=''.join(ch for ch in q if ch.isdigit())
        phone_like='%'+digits+'%' if digits else like
        data=rows('SELECT c.*, COALESCE((SELECT COUNT(*) FROM services s WHERE s.customer_id=c.id),0) service_count, (SELECT MAX(created_at) FROM services s WHERE s.customer_id=c.id) last_service FROM customers c WHERE c.name LIKE ? OR REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.phone,"(",""),")",""),"-","")," ",""),"+","") LIKE ? ORDER BY c.name LIMIT 20',(like,phone_like))
        today=date.today()
        for x in data:
            x['score']=min(100,int(x['service_count'])*10)
            x['inactive_days']=(today-date.fromisoformat(x['last_service'][:10])).days if x.get('last_service') else None
        return self.json(data)
    def customer_stats(self,cid):
        c=one('SELECT * FROM customers WHERE id=?',(cid,))
        if not c:return self.json({'error':'Cliente não encontrado'},404)
        count=one('SELECT COUNT(*) n FROM services WHERE customer_id=?',(cid,))['n']
        total=0.0
        for rt,table in [('service','services'),('unlock','unlocks'),('sale','sales')]:
            ids=[r['id'] for r in rows(f'SELECT id FROM {table} WHERE customer_id=?',(cid,))]
            if ids:
                marks=','.join('?' for _ in ids)
                total+=float(one(f'SELECT COALESCE(SUM(amount),0) n FROM finance WHERE ref_type=? AND ref_id IN ({marks})',(rt,*ids))['n'] or 0)
        last=one('SELECT MAX(created_at) v FROM services WHERE customer_id=?',(cid,))['v']
        return self.json({'id':cid,'service_count':count,'score':min(100,int(count)*10),'last_service':last,'total_spent':float(total or 0)})

    def inventory_csv(self):
        data=rows('SELECT * FROM inventory ORDER BY id DESC'); out=io.StringIO();w=csv.writer(out);w.writerow(data[0].keys() if data else ['id']);[w.writerow(x.values()) for x in data];return self.send(200,out.getvalue(),'text/csv')
    def backup(self):
        buf=io.BytesIO();
        with zipfile.ZipFile(buf,'w',zipfile.ZIP_DEFLATED) as z:
            c=db()
            tables=[r['name'] for r in c.execute("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'")]
            for t in tables:
                z.writestr('data/'+t+'.json',json.dumps([dict(r) for r in c.execute('SELECT * FROM '+t).fetchall()],ensure_ascii=False,indent=2))
            z.writestr('README_BACKUP.txt','Backup KV CELL OS PREMIUM\nGerado em '+now())
            c.close()
        return self.send(200,buf.getvalue(),'application/zip',{'Content-Disposition':'attachment; filename=kvcell-backup.zip'})
    def public(self,path):
        if path.startswith('/public/quote/'):
            t=path.split('/')[-1]; q=one('SELECT * FROM quotes WHERE public_token=?',(t,))
            if not q:return self.send(404,'Orçamento não encontrado','text/html')
            cust=one('SELECT * FROM customers WHERE id=?',(q['customer_id'],)) if q['customer_id'] else None
            return self.send(200,public_quote(q,cust),'text/html')
        if path.startswith('/public/os/'):
            t=path.split('/')[-1]; s=one('SELECT * FROM services WHERE public_token=?',(t,));
            if not s:return self.send(404,'OS não encontrada','text/html')
            cust=one('SELECT * FROM customers WHERE id=?',(s['customer_id'],)) if s['customer_id'] else None
            return self.send(200,public_os(s,cust),'text/html')
        self.send(404,b'Not found','text/plain')

def public_quote(q,c):
    items=json.loads(q['items'] or '[]'); rows=''.join(f"<tr><td>{safe(x.get('description',x.get('name','Serviço')))}</td><td>{safe(x.get('qty',1))}</td><td>R$ {float(x.get('total',x.get('price',0))):,.2f}</td></tr>" for x in items)
    return f'''<!doctype html><html lang="pt-BR"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{safe(q['number'])} • KV CELL</title><style>{PUBLIC_CSS}</style><main><header><b>KV CELL</b><span>ORÇAMENTO • ACOMPANHAMENTO</span></header><section class="hero"><small>ORÇAMENTO</small><h1>{safe(q['number'])}</h1><p>{safe(c['name'] if c else 'Cliente')} • Unidade {safe(q['unit'])}</p></section><div class="grid"><div class="box"><b>Itens</b><table><tr><th>Serviço</th><th>Qtd.</th><th>Total</th></tr>{rows}</table></div><div class="box"><b>Status</b><div class="status">{safe(q['status'])}</div><p>Tipo: {safe(q.get('quote_type','servico'))}</p><p>Garantia: {int(q.get('warranty_days') or 0)} dias</p><p>Deslocamento: {'R$ %.2f' % float(q.get('travel_fee') or 0) if q.get('travel_enabled') else 'Não'}</p><p>Válido até: {safe(q['valid_until'])}</p><strong>Total: R$ {float(q['total'] or 0):,.2f}</strong></div></div><div class="box"><b>Condições</b><p>{safe(q['conditions'])}</p><p>{safe(q['observations'])}</p></div><footer>KV CELL • Acompanhe este orçamento pelo celular</footer></main></html>'''

def public_os(s,c):
    ck=json.loads(s['checklist'] or '{}'); done=sum(1 for v in ck.values() if v); total=max(len(ck),1); photos=json.loads(s['photos'] or '[]'); thumbs=''.join(f'<img src="{x}" />' for x in photos[:8])
    return f'''<!doctype html><html lang="pt-BR"><meta name="viewport" content="width=device-width,initial-scale=1"><title>OS #{s['id']} • KV CELL</title><style>{PUBLIC_CSS}.check{{display:grid;grid-template-columns:repeat(2,1fr);gap:8px}}.check div{{padding:10px;background:#151515;border-radius:10px}}.photos img{{width:100px;height:100px;object-fit:cover;border-radius:10px;margin:5px}}</style><main><header><b>KV CELL</b><span>ACOMPANHAMENTO DA OS</span></header><section class="hero"><small>ORDEM DE SERVIÇO</small><h1>#{s['id']}</h1><p>{safe(c['name'] if c else 'Cliente')} • {safe(s['unit'])}</p></section><div class="box"><h2>{safe(s['status'])}</h2><p>{safe(s['description'])}</p><p>Garantia: {safe(s['warranty'])}</p></div><div class="box"><b>Checklist técnico</b><div class="check">{''.join(f'<div>{"☑" if v else "☐"} {safe(k)}</div>' for k,v in ck.items())}</div><p>{done}/{total} itens conferidos</p></div><div class="box photos"><b>Fotos do aparelho</b><div>{thumbs or '<span>Sem fotos cadastradas.</span>'}</div></div><footer>KV CELL • Link de acompanhamento</footer></main></html>'''

PUBLIC_CSS='''*{box-sizing:border-box}body{margin:0;background:#070707;color:#f5f5f5;font-family:Inter,Arial,sans-serif}main{max-width:1000px;margin:0 auto;padding:25px}header{display:flex;justify-content:space-between;align-items:center;padding:14px 0;border-bottom:1px solid #2a2a2a}header b{font-size:24px;color:#ffd400}header span{font-size:11px;color:#aaa}.hero{margin:25px 0;padding:28px;border:1px solid #303030;border-radius:20px;background:linear-gradient(135deg,#171500,#101010)}h1{font-size:42px;margin:5px 0;color:#ffd400}.grid{display:grid;grid-template-columns:2fr 1fr;gap:15px}.box{background:#111;border:1px solid #292929;border-radius:16px;padding:18px;margin:15px 0}table{width:100%;border-collapse:collapse;margin-top:15px}td,th{padding:11px;border-bottom:1px solid #292929;text-align:left}.status{display:inline-block;padding:8px 12px;border-radius:999px;background:#332f00;color:#ffd400;margin:10px 0}footer{color:#888;text-align:center;padding:25px}@media(max-width:700px){.grid{grid-template-columns:1fr}main{padding:14px}h1{font-size:30px}}
'''

INDEX='''<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>KV CELL OS PREMIUM</title><link rel="stylesheet" href="/static/app.css"></head><body><div id="app"></div><script src="/static/app.js"></script></body></html>'''

if __name__=='__main__':
    print(f'KV CELL OS PREMIUM on port {PORT}',flush=True)
    ThreadingHTTPServer(('0.0.0.0',PORT),Handler).serve_forever()
