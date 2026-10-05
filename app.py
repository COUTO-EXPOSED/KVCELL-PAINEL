import os, json, sqlite3, hashlib, secrets, base64, zipfile, io, csv, html, urllib.request, urllib.parse, urllib.error, time, re, threading, shutil
from datetime import datetime, date, timedelta
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlparse, parse_qs

BASE=os.path.dirname(os.path.abspath(__file__))
DATA_DIR=os.environ.get('KVCELL_DATA_DIR','/application/data')
try: os.makedirs(DATA_DIR,exist_ok=True)
except Exception: DATA_DIR=BASE
DB=os.path.join(DATA_DIR,'kvcell.db')
PORT=int(os.environ.get('PORT','80'))
SESSIONS={}
DB_SYNC_LOCK=threading.Lock()
DB_SYNC_TIMER=None
BLOB_KEY=os.environ.get('SQUARE_BLOB_API_KEY','').strip()
BLOB_ACCOUNT=os.environ.get('SQUARE_BLOB_ACCOUNT_ID','').strip()
BLOB_NAME=os.environ.get('SQUARE_BLOB_DB_NAME','kvcell_database').strip() or 'kvcell_database'
BLOB_PREFIX=os.environ.get('SQUARE_BLOB_PREFIX','kvcell').strip(' /') or 'kvcell'
BLOB_PUBLIC_URL=os.environ.get('SQUARE_BLOB_PUBLIC_URL','').strip()
BLOB_ENABLED=bool(BLOB_KEY and (BLOB_PUBLIC_URL or BLOB_ACCOUNT))
FERNET_KEY=os.environ.get('KVCELL_DB_ENCRYPTION_KEY','').strip()

def _blob_url():
    if BLOB_PUBLIC_URL: return BLOB_PUBLIC_URL.rstrip('/')
    return f'https://public-blob.squarecloud.dev/{BLOB_ACCOUNT}/{BLOB_PREFIX}/{BLOB_NAME}.enc'

def _fernet():
    if not FERNET_KEY: return None
    try:
        from cryptography.fernet import Fernet
        return Fernet(FERNET_KEY.encode())
    except Exception: return None

def _blob_download():
    if not BLOB_ENABLED: return False
    try:
        url=_blob_url()+('?v='+str(int(time.time())) if '?' not in _blob_url() else '&v='+str(int(time.time())))
        req=urllib.request.Request(url,headers={'Cache-Control':'no-cache'})
        with urllib.request.urlopen(req,timeout=20) as r: data=r.read()
        f=_fernet()
        if not f: raise RuntimeError('KVCELL_DB_ENCRYPTION_KEY ausente/inválida')
        raw=f.decrypt(data)
        tmp=DB+'.restore'
        open(tmp,'wb').write(raw)
        if os.path.exists(DB): shutil.copy2(DB,DB+'.pre_restore')
        os.replace(tmp,DB)
        return True
    except Exception as e:
        print('KV CELL BLOB RESTORE:',e,flush=True)
        return False

def _multipart_upload(data):
    boundary='----KVCellBlobBoundary'+secrets.token_hex(8)
    body=(f'--{boundary}\r\nContent-Disposition: form-data; name="file"; filename="{BLOB_NAME}.enc"\r\nContent-Type: application/octet-stream\r\n\r\n').encode()+data+f'\r\n--{boundary}--\r\n'.encode()
    qs=urllib.parse.urlencode({'name':BLOB_NAME,'prefix':BLOB_PREFIX})
    req=urllib.request.Request('https://blob.squarecloud.app/v1/objects?'+qs,data=body,headers={'Authorization':BLOB_KEY,'Content-Type':f'multipart/form-data; boundary={boundary}'},method='POST')
    with urllib.request.urlopen(req,timeout=30) as r: return r.read()

def sync_db_to_blob():
    if not BLOB_ENABLED: return
    f=_fernet()
    if not f:
        print('KV CELL BLOB SYNC: defina KVCELL_DB_ENCRYPTION_KEY (Fernet) para sincronizar o SQLite.',flush=True); return
    try:
        with DB_SYNC_LOCK:
            if not os.path.exists(DB): return
            c=sqlite3.connect(DB); c.execute('PRAGMA wal_checkpoint(TRUNCATE)'); c.close()
            raw=open(DB,'rb').read(); enc=f.encrypt(raw)
            _multipart_upload(enc)
            print('KV CELL BLOB SYNC: banco persistido na Square Cloud.',flush=True)
    except Exception as e: print('KV CELL BLOB SYNC:',e,flush=True)

def schedule_blob_sync():
    global DB_SYNC_TIMER
    if not BLOB_ENABLED: return
    try:
        if DB_SYNC_TIMER and DB_SYNC_TIMER.is_alive(): return
        DB_SYNC_TIMER=threading.Timer(1.0,sync_db_to_blob); DB_SYNC_TIMER.daemon=True; DB_SYNC_TIMER.start()
    except Exception: pass


SCHEMA='''
CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,email TEXT UNIQUE,password_hash TEXT,role TEXT,unit TEXT,permissions TEXT,active INTEGER DEFAULT 1,created_at TEXT);
CREATE TABLE IF NOT EXISTS customers(id INTEGER PRIMARY KEY AUTOINCREMENT,type TEXT,name TEXT,document_type TEXT,document TEXT,phone_type TEXT,phone TEXT,email TEXT,address TEXT,city TEXT,birth_date TEXT,balance REAL DEFAULT 0,observations TEXT,created_at TEXT);
CREATE TABLE IF NOT EXISTS devices(id INTEGER PRIMARY KEY AUTOINCREMENT,unit TEXT,customer_id INTEGER,brand TEXT,model TEXT,imei TEXT,serial TEXT,color TEXT,storage TEXT,status TEXT,photos TEXT DEFAULT '[]',notes TEXT,created_at TEXT);
CREATE TABLE IF NOT EXISTS services(id INTEGER PRIMARY KEY AUTOINCREMENT,unit TEXT,customer_id INTEGER,device_id INTEGER,kind TEXT,description TEXT,checklist TEXT,diagnosis TEXT,status TEXT,technician TEXT,price REAL,warranty TEXT,photos TEXT DEFAULT '[]',notes TEXT,public_token TEXT,created_at TEXT,updated_at TEXT,cost_material REAL DEFAULT 0,cost_labor REAL DEFAULT 0,cost_extra REAL DEFAULT 0,cost_total REAL DEFAULT 0,profit REAL DEFAULT 0,warranty_of_id INTEGER DEFAULT NULL);
CREATE TABLE IF NOT EXISTS unlocks(id INTEGER PRIMARY KEY AUTOINCREMENT,unit TEXT,customer_id INTEGER,device_id INTEGER,brand TEXT,model TEXT,imei TEXT,kind TEXT,checklist TEXT,status TEXT,operator TEXT,price REAL,photos TEXT DEFAULT '[]',notes TEXT,public_token TEXT,created_at TEXT,cost_material REAL DEFAULT 0,cost_labor REAL DEFAULT 0,cost_extra REAL DEFAULT 0,cost_total REAL DEFAULT 0,profit REAL DEFAULT 0,warranty_of_id INTEGER DEFAULT NULL);
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
CREATE TABLE IF NOT EXISTS film_compat(id INTEGER PRIMARY KEY AUTOINCREMENT,brand TEXT,model TEXT,aliases TEXT,master_code TEXT,group_name TEXT,screen_size TEXT,fit_notes TEXT,source_note TEXT,confidence TEXT DEFAULT 'manual',created_at TEXT);
CREATE TABLE IF NOT EXISTS ai_chat(id INTEGER PRIMARY KEY AUTOINCREMENT,unit TEXT,user_id INTEGER,user_name TEXT,role TEXT,message TEXT,reply TEXT,created_at TEXT);
CREATE TABLE IF NOT EXISTS activity_log(id INTEGER PRIMARY KEY AUTOINCREMENT,unit TEXT,tag TEXT,user_id INTEGER,user_name TEXT,action TEXT,entity TEXT,entity_id INTEGER,details TEXT,created_at TEXT);
CREATE TABLE IF NOT EXISTS undo_stack(id INTEGER PRIMARY KEY AUTOINCREMENT,unit TEXT,user_id INTEGER,action TEXT,table_name TEXT,row_id INTEGER,before_json TEXT,after_json TEXT,undone INTEGER DEFAULT 0,created_at TEXT,undone_at TEXT);
'''

def now(): return datetime.now().strftime('%Y-%m-%d %H:%M:%S')
def db():
    c=sqlite3.connect(DB); c.row_factory=sqlite3.Row; c.executescript(SCHEMA); return c
def migrate_v10():
    if BLOB_ENABLED and not os.path.exists(DB): _blob_download()
    c=db()
    cols={r[1] for r in c.execute("PRAGMA table_info(purchases)").fetchall()}
    for name,typ in [("sold","INTEGER DEFAULT 0"),("sale_date","TEXT"),("sale_place","TEXT"),("sale_price","REAL DEFAULT 0"),("sale_payment","TEXT"),("sale_installments","INTEGER DEFAULT 1"),("sale_fee","REAL DEFAULT 0"),("sale_notes","TEXT")]:
        if name not in cols: c.execute("ALTER TABLE purchases ADD COLUMN "+name+" "+typ)
    cols={r[1] for r in c.execute("PRAGMA table_info(sales)").fetchall()}
    for name,typ in [("payment_fee","REAL DEFAULT 0"),("net_total","REAL DEFAULT 0"),("payment_details","TEXT")]:
        if name not in cols: c.execute("ALTER TABLE sales ADD COLUMN "+name+" "+typ)
    for table in ('services','unlocks'):
        cols={r[1] for r in c.execute(f'PRAGMA table_info({table})').fetchall()}
        for name,typ in [('cost_material','REAL DEFAULT 0'),('cost_labor','REAL DEFAULT 0'),('cost_extra','REAL DEFAULT 0'),('cost_total','REAL DEFAULT 0'),('profit','REAL DEFAULT 0'),('warranty_of_id','INTEGER DEFAULT NULL')]:
            if name not in cols: c.execute(f'ALTER TABLE {table} ADD COLUMN {name} {typ}')
    c.commit();c.close()
migrate_v10()

def activity(u,tag,action,entity='',entity_id=None,details=''):
    try: write('INSERT INTO activity_log(unit,tag,user_id,user_name,action,entity,entity_id,details,created_at) VALUES(?,?,?,?,?,?,?,?,?)',(u.get('unit','TODOS'),tag,u.get('id'),u.get('name'),action,entity,entity_id,details,now()))
    except Exception: pass

def push_undo(u,action,table,row_id,before,after):
    try: write('INSERT INTO undo_stack(unit,user_id,action,table_name,row_id,before_json,after_json,created_at) VALUES(?,?,?,?,?,?,?,?)',(u.get('unit','TODOS'),u.get('id'),action,table,row_id,js(before or {}),js(after or {}),now()))
    except Exception: pass

def ph(p): return hashlib.sha256(p.encode()).hexdigest()
def seed():
    c=db();
    if c.execute('SELECT COUNT(*) FROM users').fetchone()[0]==0:
        admin_email=os.environ.get('ADMIN_EMAIL','admin@kvcell.local').strip().lower()
        admin_password=os.environ.get('ADMIN_PASSWORD') or secrets.token_urlsafe(12)
        c.execute('INSERT INTO users(name,email,password_hash,role,unit,permissions,created_at) VALUES(?,?,?,?,?,?,?)',('Administrador',admin_email,ph(admin_password),'admin','TODOS',json.dumps({'all':True}),'2026-10-04 00:00:00'))
        print('KV CELL INITIAL ADMIN:',admin_email,flush=True)
        if not os.environ.get('ADMIN_PASSWORD'): print('KV CELL INITIAL ADMIN PASSWORD:',admin_password,flush=True)
    defaults={'company_name':'KV CELL','tagline':'OS PREMIUM • Laboratório avançado • Desde 2023','phone':'(21) 98042-1531','instagram':'@KV._CELL','units':'LAGOS,MAGÉ','currency':'BRL','theme':'yellow-black'}
    for k,v in defaults.items(): c.execute('INSERT OR IGNORE INTO settings(k,v) VALUES(?,?)',(k,v))
    film_count=c.execute('SELECT COUNT(*) FROM film_compat').fetchone()[0]
    if film_count==0:
        groups={
          'SAM-A15': [('Samsung','Galaxy A15'),('Samsung','Galaxy A15 5G'),('Samsung','Galaxy A15 LTE')],
          'SAM-A16': [('Samsung','Galaxy A16'),('Samsung','Galaxy A16 5G'),('Samsung','Galaxy A16 LTE')],
          'SAM-A24': [('Samsung','Galaxy A24'),('Samsung','Galaxy A24 4G')],
          'SAM-A25': [('Samsung','Galaxy A25 5G')], 'SAM-A26': [('Samsung','Galaxy A26 5G')],
          'SAM-A34': [('Samsung','Galaxy A34 5G')], 'SAM-A35': [('Samsung','Galaxy A35 5G')],
          'SAM-A54': [('Samsung','Galaxy A54 5G')], 'SAM-A55': [('Samsung','Galaxy A55 5G')],
          'SAM-S23': [('Samsung','Galaxy S23')], 'SAM-S24': [('Samsung','Galaxy S24')],
          'SAM-S24P': [('Samsung','Galaxy S24 Plus')], 'SAM-S24U': [('Samsung','Galaxy S24 Ultra')],
          'MOT-G14': [('Motorola','Moto G14')], 'MOT-G24': [('Motorola','Moto G24')],
          'MOT-G34': [('Motorola','Moto G34 5G')], 'MOT-G35': [('Motorola','Moto G35 5G')],
          'MOT-G54': [('Motorola','Moto G54 5G')], 'MOT-G55': [('Motorola','Moto G55 5G')],
          'MOT-G84': [('Motorola','Moto G84 5G')], 'MOT-G85': [('Motorola','Moto G85 5G')],
          'MOT-G75': [('Motorola','Moto G75 5G')], 'MOT-EDGE50': [('Motorola','Edge 50 Fusion')],
          'REDMI-NOTE13': [('Xiaomi','Redmi Note 13'),('Xiaomi','Redmi Note 13 4G')],
          'REDMI-NOTE13-5G': [('Xiaomi','Redmi Note 13 5G')], 'REDMI-NOTE13-PRO': [('Xiaomi','Redmi Note 13 Pro')],
          'REDMI-NOTE13-PRO5G': [('Xiaomi','Redmi Note 13 Pro 5G')], 'REDMI-NOTE14': [('Xiaomi','Redmi Note 14'),('Xiaomi','Redmi Note 14 4G')],
          'REDMI-NOTE14-5G': [('Xiaomi','Redmi Note 14 5G')], 'REDMI-13': [('Xiaomi','Redmi 13'),('Xiaomi','Redmi 13 4G')],
          'POCO-X6': [('Xiaomi','POCO X6 5G')], 'POCO-X6PRO': [('Xiaomi','POCO X6 Pro 5G')],
          'IPH-11': [('Apple','iPhone 11')], 'IPH-11PRO': [('Apple','iPhone 11 Pro')], 'IPH-11PROMAX': [('Apple','iPhone 11 Pro Max')],
          'IPH-12': [('Apple','iPhone 12')], 'IPH-12PRO': [('Apple','iPhone 12 Pro')], 'IPH-12PROMAX': [('Apple','iPhone 12 Pro Max')],
          'IPH-13': [('Apple','iPhone 13')], 'IPH-13PRO': [('Apple','iPhone 13 Pro')], 'IPH-13PROMAX': [('Apple','iPhone 13 Pro Max')],
          'IPH-14': [('Apple','iPhone 14')], 'IPH-14PLUS': [('Apple','iPhone 14 Plus')], 'IPH-14PRO': [('Apple','iPhone 14 Pro')], 'IPH-14PROMAX': [('Apple','iPhone 14 Pro Max')],
          'IPH-15': [('Apple','iPhone 15')], 'IPH-15PLUS': [('Apple','iPhone 15 Plus')], 'IPH-15PRO': [('Apple','iPhone 15 Pro')], 'IPH-15PROMAX': [('Apple','iPhone 15 Pro Max')],
          'IPH-16': [('Apple','iPhone 16')], 'IPH-16PLUS': [('Apple','iPhone 16 Plus')], 'IPH-16PRO': [('Apple','iPhone 16 Pro')], 'IPH-16PROMAX': [('Apple','iPhone 16 Pro Max')]
        }
        for group,pairs in groups.items():
            for brand,model in pairs:
                size=''
                if brand=='Samsung' and model.startswith('Galaxy A15'): size='6.5'
                if brand=='Samsung' and model.startswith('Galaxy A16'): size='6.7'
                c.execute('INSERT INTO film_compat(brand,model,aliases,master_code,group_name,screen_size,fit_notes,source_note,confidence,created_at) VALUES(?,?,?,?,?,?,?,?,?,?)',(brand,model,model,group,group,size,'Compatibilidade inicial; confirmar recorte e lote da película com o fornecedor.','base interna + conferência de especificações públicas','manual',now()))
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
    c=db(); cur=c.execute(sql,args); c.commit(); rid=cur.lastrowid; c.close(); schedule_blob_sync(); return rid

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
        if path=='/api/profit': return self.profit_api(qs.get('unit',['TODOS'])[0])
        if path=='/api/settings': return self.json({r['k']:r['v'] for r in rows('SELECT k,v FROM settings')})
        if path=='/api/notifications': return self.json(rows('SELECT * FROM notifications ORDER BY id DESC LIMIT 30'))
        if path=='/api/export/backup': return self.backup()
        if path=='/api/export/inventory.csv': return self.inventory_csv()
        if path=='/api/search': return self.search(qs.get('q',[''])[0])
        if path=='/api/customer-search': return self.customer_search(qs.get('q',[''])[0])
        if path=='/api/customer-stats': return self.customer_stats(int(qs.get('id',['0'])[0] or 0))
        if path=='/api/films/search': return self.film_search(qs.get('q',[''])[0])
        if path=='/api/ai/status': return self.ai_status()
        if path=='/api/activity': return self.activity_api(qs)
        if path=='/api/undo': return self.undo_list()
        if path=='/api/ai/chat': return self.ai_chat_list()
        if path.startswith('/api/'): return self.list_api(path[5:],qs)
        self.send(404,b'Not found','text/plain')
    def do_POST(self):
        p=urlparse(self.path); path=p.path; data=self.body()
        if path=='/api/login': return self.login(data)
        if path=='/api/logout': return self.logout()
        if path.startswith('/public/quote/'):
            return self.public_quote_action(path.split('/')[-1], data)
        if path.startswith('/public/'): return self.send(405,b'','text/plain')
        u=self.require()
        if not u:return
        if path=='/api/upload': return self.upload(data,u)
        if path=='/api/settings': return self.save_settings(data,u)
        if path=='/api/mark-notifications': return self.json({'ok':True})
        if path=='/api/ai/evaluate': return self.ai_evaluate(data,u)
        if path=='/api/ai/price': return self.ai_price(data,u)
        if path=='/api/ai/chat': return self.ai_chat(data,u)
        if path=='/api/undo': return self.undo_action(data,u)
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
        data=rows(sql,args)
        if resource in ('services','unlocks'):
            for x in data:
                if x.get('customer_id'):
                    c=one('SELECT name,phone FROM customers WHERE id=?',(x['customer_id'],)); x['customer_name']=c['name'] if c else ''; x['customer_phone']=c['phone'] if c else ''
        return self.json(data)
    def create_api(self,r,d,u):
        if r=='customers':
            rid=write('INSERT INTO customers(type,name,document_type,document,phone_type,phone,email,address,city,birth_date,balance,observations,created_at) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)',(d.get('type','PF'),d.get('name'),d.get('document_type','CPF'),d.get('document'),d.get('phone_type','Celular'),d.get('phone'),d.get('email'),d.get('address'),d.get('city'),d.get('birth_date'),float(d.get('balance') or 0),d.get('observations'),now()))
        elif r=='devices': rid=write('INSERT INTO devices(unit,customer_id,brand,model,imei,serial,color,storage,status,photos,notes,created_at) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),d.get('customer_id') or None,d.get('brand'),d.get('model'),d.get('imei'),d.get('serial'),d.get('color'),d.get('storage'),d.get('status','Em bancada'),js(d.get('photos',[])),d.get('notes'),now()))
        elif r=='services':
            t=token(); price=float(d.get('price') or 0); cm=float(d.get('cost_material') or 0); cl=float(d.get('cost_labor') or 0); ce=float(d.get('cost_extra') or 0); ct=cm+cl+ce; profit=price-ct
            rid=write('INSERT INTO services(unit,customer_id,device_id,kind,description,checklist,diagnosis,status,technician,price,warranty,photos,notes,public_token,created_at,updated_at,cost_material,cost_labor,cost_extra,cost_total,profit,warranty_of_id) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),d.get('customer_id') or None,d.get('device_id') or None,d.get('kind','conserto'),d.get('description'),js(d.get('checklist',{})),d.get('diagnosis'),d.get('status','aberto'),d.get('technician'),price,d.get('warranty'),js(d.get('photos',[])),d.get('notes'),t,now(),now(),cm,cl,ce,ct,profit,d.get('warranty_of_id') or None))
            if price>0: write('INSERT INTO finance(unit,type,category,description,amount,ref_type,ref_id,created_at) VALUES(?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),'entrada','Serviço',d.get('description') or 'Conserto',price,'service',rid,now()))
            if ct>0: write('INSERT INTO finance(unit,type,category,description,amount,ref_type,ref_id,created_at) VALUES(?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),'saida','Custo OS',d.get('description') or 'Custo de serviço',ct,'service_cost',rid,now()))
        elif r=='unlocks':
            t=token(); price=float(d.get('price') or 0); cm=float(d.get('cost_material') or 0); cl=float(d.get('cost_labor') or 0); ce=float(d.get('cost_extra') or 0); ct=cm+cl+ce; profit=price-ct
            rid=write('INSERT INTO unlocks(unit,customer_id,device_id,brand,model,imei,kind,checklist,status,operator,price,photos,notes,public_token,created_at,cost_material,cost_labor,cost_extra,cost_total,profit,warranty_of_id) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),d.get('customer_id') or None,d.get('device_id') or None,d.get('brand'),d.get('model'),d.get('imei'),d.get('kind'),js(d.get('checklist',{})),d.get('status','aberto'),d.get('operator'),price,js(d.get('photos',[])),d.get('notes'),t,now(),cm,cl,ce,ct,profit,d.get('warranty_of_id') or None))
            if price>0: write('INSERT INTO finance(unit,type,category,description,amount,ref_type,ref_id,created_at) VALUES(?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),'entrada','Desbloqueio',d.get('kind') or 'Desbloqueio',price,'unlock',rid,now()))
            if ct>0: write('INSERT INTO finance(unit,type,category,description,amount,ref_type,ref_id,created_at) VALUES(?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),'saida','Custo Desbloqueio',d.get('kind') or 'Custo de desbloqueio',ct,'unlock_cost',rid,now()))
        elif r=='purchases':
            total=float(d.get('amount') or 0)+float(d.get('expenses') or 0)+float(d.get('freight') or 0); sp=float(d.get('suggested_price') or 0); sold=1 if str(d.get('sold','')).lower() in ('1','true','sim','on') else 0
            status='vendido' if sold else d.get('status','vitrine')
            rid=write('INSERT INTO purchases(unit,customer_id,brand,model,imei,purchase_date,amount,expenses,freight,total_cost,suggested_price,expected_profit,photos,checklist,observations,status,created_at,sold,sale_date,sale_place,sale_price,sale_payment,sale_installments,sale_fee,sale_notes) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),d.get('customer_id') or None,d.get('brand'),d.get('model'),d.get('imei'),d.get('purchase_date') or date.today().isoformat(),float(d.get('amount') or 0),float(d.get('expenses') or 0),float(d.get('freight') or 0),total,sp,sp-total,js(d.get('photos',[])),js(d.get('checklist',{})),d.get('observations'),status,now(),sold,d.get('sale_date'),d.get('sale_place'),float(d.get('sale_price') or 0),d.get('sale_payment'),int(d.get('sale_installments') or 1),float(d.get('sale_fee') or 0),d.get('sale_notes')))
            write('INSERT INTO finance(unit,type,category,description,amount,ref_type,ref_id,created_at) VALUES(?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),'saida','Compra de aparelho',f"{d.get('brand','')} {d.get('model','')}",total,'purchase',rid,now()))
            if sold and float(d.get('sale_price') or 0)>0:
                net=float(d.get('sale_price') or 0)-float(d.get('sale_fee') or 0)
                write('INSERT INTO finance(unit,type,category,description,amount,ref_type,ref_id,created_at) VALUES(?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),'entrada','Venda de aparelho',f"{d.get('brand','')} {d.get('model','')}",net,'purchase_sale',rid,now()))
        elif r=='inventory': rid=write('INSERT INTO inventory(unit,code,name,type,category,qty,min_qty,cost,price,supplier,compatibility,notes,created_at) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),d.get('code'),d.get('name'),d.get('type','Peça'),d.get('category'),float(d.get('qty') or 0),float(d.get('min_qty') or 0),float(d.get('cost') or 0),float(d.get('price') or 0),d.get('supplier'),d.get('compatibility'),d.get('notes'),now()))
        elif r=='models': rid=write('INSERT INTO models(brand,model,service_prices,margin,warranty,notes,created_at) VALUES(?,?,?,?,?,?,?)',(d.get('brand'),d.get('model'),js(d.get('service_prices',{})),float(d.get('margin') or 0),d.get('warranty'),d.get('notes'),now()))
        elif r=='quotes':
            num='ORC-'+datetime.now().strftime('%Y%m')+'-'+str(secrets.randbelow(9000)+1000); t=token(); items=d.get('items',[]); total=float(d.get('total') or 0); travel_enabled=1 if str(d.get('travel_enabled','0')).lower() in ('1','true','sim','on') else 0; travel_fee=float(d.get('travel_fee') or 0) if travel_enabled else 0; warranty_days=int(d.get('warranty_days') or 0); rid=write('INSERT INTO quotes(number,unit,customer_id,device_id,items,subtotal,total,warranty_type,warranty_days,travel_enabled,travel_fee,quote_type,conditions,observations,valid_until,status,public_token,created_at) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',(num,d.get('unit','TODOS'),d.get('customer_id') or None,d.get('device_id') or None,js(items),float(d.get('subtotal') or total),total,d.get('warranty_type','personalizada'),warranty_days,travel_enabled,travel_fee,d.get('quote_type','servico'),d.get('conditions'),d.get('observations'),d.get('valid_until'),d.get('status','aberto'),t,now()))
            return self.json({'ok':True,'id':rid,'number':num,'public_url':f'/public/quote/{t}'})
        elif r=='sales':
            total=float(d.get('total') or 0); fee=float(d.get('payment_fee') or 0); net=float(d.get('net_total') or (total-fee))
            rid=write('INSERT INTO sales(unit,customer_id,items,total,payment,created_at,payment_fee,net_total,payment_details) VALUES(?,?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),d.get('customer_id') or None,d.get('items'),total,d.get('payment'),now(),fee,net,d.get('payment_details')))
            write('INSERT INTO finance(unit,type,category,description,amount,ref_type,ref_id,created_at) VALUES(?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),'entrada','Venda',d.get('items') or 'Venda',net,'sale',rid,now()))
        elif r=='finance': rid=write('INSERT INTO finance(unit,type,category,description,amount,due_date,paid,created_at) VALUES(?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),d.get('type','entrada'),d.get('category'),d.get('description'),float(d.get('amount') or 0),d.get('due_date'),1 if d.get('paid',True) else 0,now()))
        elif r=='forgotten': rid=write('INSERT INTO forgotten(unit,brand,model,imei,possible_owner,phone,photos,checklist,notes,status,created_at) VALUES(?,?,?,?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),d.get('brand'),d.get('model'),d.get('imei'),d.get('possible_owner'),d.get('phone'),js(d.get('photos',[])),js(d.get('checklist',{})),d.get('notes'),d.get('status','aguardando identificação'),now()))
        elif r=='contracts': rid=write('INSERT INTO contracts(unit,type,customer_id,device_id,payload,customer_signature,store_signature,created_at) VALUES(?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),d.get('type'),d.get('customer_id') or None,d.get('device_id') or None,js(d.get('payload',{})),d.get('customer_signature'),d.get('store_signature'),now()))
        elif r=='users':
            if u['role']!='admin':return self.json({'error':'Somente administrador'},403)
            rid=write('INSERT INTO users(name,email,password_hash,role,unit,permissions,created_at) VALUES(?,?,?,?,?,?,?)',(d.get('name'),d.get('email'),ph(d.get('password','123456')),d.get('role','atendente'),d.get('unit','TODOS'),js(d.get('permissions',{'dashboard':True})),now()))
        elif r=='film_compat': rid=write('INSERT INTO film_compat(brand,model,aliases,master_code,group_name,screen_size,fit_notes,source_note,confidence,created_at) VALUES(?,?,?,?,?,?,?,?,?,?)',(d.get('brand'),d.get('model'),d.get('aliases'),d.get('master_code'),d.get('group_name'),d.get('screen_size'),d.get('fit_notes'),d.get('source_note','cadastro interno'),d.get('confidence','manual'),now()))
        elif r=='chat': rid=write('INSERT INTO chat(unit,user_name,message,created_at) VALUES(?,?,?,?)',(d.get('unit','TODOS'),u['name'],d.get('message'),now()))
        else:return self.json({'error':'Recurso não suportado'},404)
        audit(u['id'],'create',r,rid,js(d)); uu=dict(u); uu['unit']=d.get('unit',u.get('unit','TODOS')); activity(uu,'LOG',f'Criou {r}',r,rid,js(d)); push_undo(uu,f'Criou {r}',r,rid,{},d); return self.json({'ok':True,'id':rid})
    def update_api(self,r,d,u):
        table=r; rid=d.get('id')
        allowed={'services':['status','diagnosis','technician','price','warranty','notes','checklist','photos','cost_material','cost_labor','cost_extra','warranty_of_id'],'unlocks':['status','operator','price','notes','checklist','photos','cost_material','cost_labor','cost_extra','warranty_of_id'],'devices':['status','notes','photos'],'forgotten':['status','notes','possible_owner','photos'],'quotes':['status','valid_until','observations'],'inventory':['qty','min_qty','price','cost','compatibility','notes'],'purchases':['sold','sale_date','sale_place','sale_price','sale_payment','sale_installments','sale_fee','sale_notes','status','suggested_price','observations']}
        if table not in allowed:return self.json({'error':'Atualização não permitida'},400)
        before=one('SELECT * FROM '+table+' WHERE id=?',(rid,))
        if not before:return self.json({'error':'Registro não encontrado'},404)
        fields=[f for f in allowed[table] if f in d]; vals=[]
        if not fields:return self.json({'error':'Nenhum campo'},400)
        for f in fields:
            v=d[f]; v=js(v) if f in ('checklist','photos') and not isinstance(v,str) else v; vals.append(v)
        if table in ('services','unlocks'):
            price=float(d.get('price',before['price']) or 0); cm=float(d.get('cost_material',before['cost_material']) or 0); cl=float(d.get('cost_labor',before['cost_labor']) or 0); ce=float(d.get('cost_extra',before['cost_extra']) or 0);
            for k,v in [('cost_material',cm),('cost_labor',cl),('cost_extra',ce),('cost_total',cm+cl+ce),('profit',price-(cm+cl+ce))]:
                if k not in fields: fields.append(k); vals.append(v)
        if table=='services' and 'updated_at' not in fields: fields.append('updated_at'); vals.append(now())
        vals.append(rid); write('UPDATE '+table+' SET '+','.join(f+'=?' for f in fields)+' WHERE id=?',vals)
        after=one('SELECT * FROM '+table+' WHERE id=?',(rid,))
        if table in ('services','unlocks'):
            rt='service' if table=='services' else 'unlock'; label='Serviço' if table=='services' else 'Desbloqueio'; costrt=rt+'_cost'
            write('DELETE FROM finance WHERE ref_type IN (?,?) AND ref_id=?',(rt,costrt,rid))
            if float(after['price'] or 0)>0: write('INSERT INTO finance(unit,type,category,description,amount,ref_type,ref_id,created_at) VALUES(?,?,?,?,?,?,?,?)',(after['unit'],'entrada',label,after['description'] if table=='services' else after['kind'],float(after['price'] or 0),rt,rid,now()))
            if float(after['cost_total'] or 0)>0: write('INSERT INTO finance(unit,type,category,description,amount,ref_type,ref_id,created_at) VALUES(?,?,?,?,?,?,?,?)',(after['unit'],'saida','Custo '+('OS' if table=='services' else 'Desbloqueio'),after['description'] if table=='services' else after['kind'],float(after['cost_total'] or 0),costrt,rid,now()))
        audit(u['id'],'update',table,rid,js(d)); uu=dict(u); uu['unit']=before['unit'] if 'unit' in before.keys() else u.get('unit','TODOS'); activity(uu,'LOG',f'Alterou {table}',table,rid,js(d)); push_undo(uu,f'Alterou {table}',table,rid,dict(before),dict(after)); return self.json({'ok':True,'profit':float(after.get('profit',0) or 0)})
    def do_DELETE(self):
        p=urlparse(self.path); u=self.require()
        if not u:return
        if not p.path.startswith('/api/'): return self.send(404,b'Not found','text/plain')
        resource=p.path[5:]; qs=parse_qs(p.query); rid=int(qs.get('id',['0'])[0] or 0)
        maps={'customers':'customers','devices':'devices','services':'services','unlocks':'unlocks','purchases':'purchases','inventory':'inventory','models':'models','quotes':'quotes','sales':'sales','finance':'finance','forgotten':'forgotten','film_compat':'film_compat','chat':'chat'}
        if resource not in maps:return self.json({'error':'Recurso inválido'},404)
        row=one('SELECT * FROM '+maps[resource]+' WHERE id=?',(rid,))
        if not row:return self.json({'error':'Registro não encontrado'},404)
        if u['role']!='admin' and resource in ('users','finance'):return self.json({'error':'Sem permissão'},403)
        write('DELETE FROM '+maps[resource]+' WHERE id=?',(rid,)); uu=dict(u); uu['unit']=row['unit'] if 'unit' in row.keys() else u.get('unit','TODOS'); activity(uu,'LOG',f'Excluiu {resource}',resource,rid,js(dict(row))); push_undo(uu,f'Excluiu {resource}',maps[resource],rid,dict(row),{}); return self.json({'ok':True})

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
    def profit_api(self,unit):
        cond=''; args=[]
        if unit!='TODOS': cond=' WHERE unit=?'; args=[unit]
        sv=one('SELECT COALESCE(SUM(price),0) revenue,COALESCE(SUM(cost_total),0) costs,COALESCE(SUM(profit),0) profit FROM services'+cond,args)
        un=one('SELECT COALESCE(SUM(price),0) revenue,COALESCE(SUM(cost_total),0) costs,COALESCE(SUM(profit),0) profit FROM unlocks'+cond,args)
        pu=one('SELECT COALESCE(SUM(total_cost),0) costs,COALESCE(SUM(CASE WHEN sold=1 THEN sale_price-sale_fee ELSE 0 END),0) revenue FROM purchases'+cond,args)
        revenue=float(sv['revenue'] or 0)+float(un['revenue'] or 0)+float(pu['revenue'] or 0); costs=float(sv['costs'] or 0)+float(un['costs'] or 0)+float(pu['costs'] or 0)
        return self.json({'services':sv,'unlocks':un,'purchases':pu,'revenue':revenue,'costs':costs,'profit':revenue-costs})

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

    def film_search(self,q):
        q=(q or '').strip()
        if not q: return self.json(rows('SELECT * FROM film_compat ORDER BY brand,model LIMIT 300'))
        like='%'+q+'%'
        return self.json(rows('SELECT * FROM film_compat WHERE brand LIKE ? OR model LIKE ? OR aliases LIKE ? OR master_code LIKE ? OR group_name LIKE ? ORDER BY brand,model LIMIT 300',(like,like,like,like,like)))
    def ai_status(self):
        or_key=(os.environ.get('OPENROUTER_API_KEY') or '').strip()
        gkey=(os.environ.get('GEMINI_API_KEY') or os.environ.get('GOOGLE_API_KEY') or '').strip()
        or_model=(os.environ.get('OPENROUTER_MODEL') or 'openrouter/free').strip() or 'openrouter/free'
        gmodel=(os.environ.get('GEMINI_MODEL') or 'gemini-2.5-flash').strip() or 'gemini-2.5-flash'
        return self.json({'configured':bool(or_key or gkey),'primary_configured':bool(or_key),'secondary_configured':bool(gkey),'provider':'OpenRouter Free','primary_model':or_model,'secondary_model':gmodel,'model':or_model if or_key else gmodel,'key_type':'openrouter' if or_key else ('gemini' if gkey else 'ausente'),'key_length':len(or_key) if or_key else len(gkey),'database_persistent':bool(BLOB_ENABLED and _fernet()),'transport':'OpenRouter Free -> Gemini fallback'})

    def _safe_ai_error(self,provider,status):
        try: status=int(status)
        except: status=0
        p='OpenRouter' if provider=='openrouter' else 'Gemini'
        messages={400:f'{p}: requisição inválida (HTTP 400).',401:f'{p}: chave inválida ou ausente (HTTP 401).',402:f'{p}: pagamento/crédito exigido (HTTP 402).',403:f'{p}: acesso negado (HTTP 403).',404:f'{p}: modelo ou endpoint não encontrado (HTTP 404).',408:f'{p}: tempo de resposta esgotado (HTTP 408).',409:f'{p}: conflito temporário (HTTP 409).',429:f'{p}: limite temporário atingido (HTTP 429). Tente novamente em instantes.'}
        if status in messages:return RuntimeError(messages[status])
        if status>=500:return RuntimeError(f'{p}: serviço temporariamente indisponível (HTTP {status}).')
        return RuntimeError(f'{p}: não foi possível obter resposta.')

    def _openrouter_request(self,prompt):
        key=(os.environ.get('OPENROUTER_API_KEY') or '').strip()
        if not key: raise RuntimeError('OpenRouter não configurado.')
        model=(os.environ.get('OPENROUTER_MODEL') or 'openrouter/free').strip() or 'openrouter/free'
        payload={'model':model,'messages':[{'role':'user','content':prompt}],'temperature':0.4,'max_tokens':1200}
        req=urllib.request.Request('https://openrouter.ai/api/v1/chat/completions',data=json.dumps(payload,ensure_ascii=False).encode('utf-8'),headers={'Content-Type':'application/json','Accept':'application/json','Authorization':'Bearer '+key,'HTTP-Referer':os.environ.get('OPENROUTER_HTTP_REFERER','https://kvcell.squareweb.app/'),'X-Title':'KV CELL OS PREMIUM'},method='POST')
        try:
            with urllib.request.urlopen(req,timeout=45) as resp:
                obj=json.loads(resp.read().decode('utf-8','replace') or '{}')
                choices=obj.get('choices') or []
                if not choices: raise self._safe_ai_error('openrouter',resp.status)
                content=(choices[0].get('message') or {}).get('content','')
                if isinstance(content,list): content=''.join((x.get('text','') if isinstance(x,dict) else str(x)) for x in content)
                if not str(content).strip(): raise self._safe_ai_error('openrouter',resp.status)
                return str(content).strip()
        except urllib.error.HTTPError as e:
            # Never return the provider body to the browser.
            raise self._safe_ai_error('openrouter',e.code)
        except urllib.error.URLError:
            raise RuntimeError('OpenRouter: falha de conexão com o provedor.')
        except TimeoutError:
            raise RuntimeError('OpenRouter: tempo de resposta esgotado.')

    def _gemini_request(self,url,payload,key):
        req=urllib.request.Request(url,data=json.dumps(payload,ensure_ascii=False).encode('utf-8'),headers={'Content-Type':'application/json','Accept':'application/json','x-goog-api-key':key},method='POST')
        try:
            with urllib.request.urlopen(req,timeout=45) as resp:
                return resp.status,json.loads(resp.read().decode('utf-8','replace') or '{}')
        except urllib.error.HTTPError as e:
            return e.code,{}
        except urllib.error.URLError:
            return 0,{}
        except TimeoutError:
            return 408,{}

    def _gemini(self,prompt):
        key=(os.environ.get('GEMINI_API_KEY') or os.environ.get('GOOGLE_API_KEY') or '').strip()
        if not key: raise RuntimeError('Gemini secundário não configurado.')
        model=(os.environ.get('GEMINI_MODEL') or 'gemini-2.5-flash').strip()
        status,obj=self._gemini_request('https://generativelanguage.googleapis.com/v1/interactions',{'model':model,'input':prompt,'store':False},key)
        if 200<=status<300:
            out=obj.get('output_text')
            if not out:
                for step in obj.get('steps') or []:
                    if step.get('type')=='model_output':
                        for part in step.get('content') or []:
                            if isinstance(part,dict) and part.get('type')=='text': out=(out or '')+part.get('text','')
            if str(out or '').strip():return str(out).strip()
        url='https://generativelanguage.googleapis.com/v1beta/models/'+urllib.parse.quote(model,safe='')+':generateContent'
        status,obj=self._gemini_request(url,{'contents':[{'parts':[{'text':prompt}]}],'generationConfig':{'temperature':0.4,'maxOutputTokens':1200}},key)
        if 200<=status<300:
            parts=(obj.get('candidates') or [{}])[0].get('content',{}).get('parts',[])
            out=''.join(x.get('text','') for x in parts if isinstance(x,dict)).strip()
            if out:return out
        raise self._safe_ai_error('gemini',status or 503)

    def _ai(self,prompt):
        primary_err=None
        if os.environ.get('OPENROUTER_API_KEY','').strip():
            try:return self._openrouter_request(prompt)
            except Exception as e: primary_err=e
        if os.environ.get('GEMINI_API_KEY','').strip() or os.environ.get('GOOGLE_API_KEY','').strip():
            try:return self._gemini(prompt)
            except Exception as e:
                if primary_err: raise RuntimeError('IA indisponível nos dois provedores. OpenRouter: '+str(primary_err)+' Gemini: '+str(e))
                raise
        if primary_err: raise RuntimeError(str(primary_err))
        raise RuntimeError('IA não configurada. Cadastre OPENROUTER_API_KEY no Square Cloud. O OpenRouter Free não exige cartão para começar.')

    def ai_evaluate(self,d,u):
        if u['role'] not in ('admin','gerente','tecnico'): return self.json({'error':'Sem permissão para IA'},403)
        prompt=('Você é o KV CELL BOT [I.A], assistente interno da KV CELL. Responda em português-BR. Seja prático, comercial e técnico. Nunca invente fatos ou compatibilidade física como certeza. Para preços, dê estimativa.\nTAREFA:\n')+json.dumps(d,ensure_ascii=False)
        try:return self.json({'ok':True,'result':self._ai(prompt)})
        except Exception as e:return self.json({'error':str(e),'retryable':True},503)
    def ai_price(self,d,u):
        if u['role'] not in ('admin','gerente','tecnico'): return self.json({'error':'Sem permissão para precificação por IA'},403)
        prompt=('Você é o KV CELL BOT [I.A]. Ajude a definir preço de serviço/aparelho. Calcule custo, margem, faixa conservadora, recomendada e agressiva quando houver dados. Se faltar informação, faça perguntas. Não apresente preço de mercado como fato.\nDADOS:\n')+json.dumps(d,ensure_ascii=False)
        try:return self.json({'ok':True,'result':self._ai(prompt)})
        except Exception as e:return self.json({'error':str(e),'retryable':True},503)
    def ai_chat(self,d,u):
        if u['role'] not in ('admin','gerente','tecnico','atendente'): return self.json({'error':'Sem permissão para o BOT'},403)
        msg=str(d.get('message','')).strip()
        if not re.match(r'^\s*/bot(?:\s|$)',msg,re.I): return self.json({'error':'A IA só pode ser acionada usando /bot.'},400)
        msg=re.sub(r'^\s*/bot\s*','',msg,flags=re.I).strip()
        if not msg:return self.json({'error':'Digite uma pergunta após /bot.'},400)
        prompt=('Você é o KV CELL BOT [I.A], assistente oficial interno da KV CELL. A plataforma possui unidades LAGOS e MAGÉ. Ajude com precificação, orçamento, textos para clientes, diagnóstico, gestão, vendas, películas, desbloqueios e dúvidas do sistema.\nRegras: responda em português-BR; seja claro; quando criar orçamento entregue texto pronto para WhatsApp; quando calcular preço mostre custo/margem e diga que é estimativa; nunca invente compatibilidade de película; nunca peça ou revele API keys; não execute alterações no banco pela conversa.\nHISTÓRICO:\n\nPERGUNTA:\n')+msg
        try:
            reply=self._ai(prompt)
            rid=write('INSERT INTO ai_chat(unit,user_id,user_name,role,message,reply,created_at) VALUES(?,?,?,?,?,?,?)',(u.get('unit','TODOS'),u['id'],u['name'],'user',msg,reply,now()))
            activity(u,'BOT','Perguntou à IA','ai_chat',rid,msg)
            return self.json({'ok':True,'reply':reply,'id':rid,'tag':'BOT'})
        except Exception as e:
            reply=str(e)
            for secret in (os.environ.get('OPENROUTER_API_KEY',''),os.environ.get('GEMINI_API_KEY',''),os.environ.get('GOOGLE_API_KEY','')):
                if secret: reply=reply.replace(secret,'[CHAVE_OCULTA]')
            rid=write('INSERT INTO ai_chat(unit,user_id,user_name,role,message,reply,created_at) VALUES(?,?,?,?,?,?,?)',(u.get('unit','TODOS'),u['id'],u['name'],'user',msg,reply,now()))
            activity(u,'BOT','Falha ao consultar IA','ai_chat',rid,'provider_error')
            return self.json({'ok':False,'reply':reply,'error':reply,'id':rid,'tag':'BOT','retryable':True,'code':'AI_PROVIDER_ERROR'},503)
    def ai_chat_list(self): return self.json(rows('SELECT * FROM ai_chat ORDER BY id DESC LIMIT 100'))
    def activity_api(self,qs):
        unit=qs.get('unit',['TODOS'])[0]
        if unit=='TODOS': return self.json(rows('SELECT * FROM activity_log ORDER BY id DESC LIMIT 200'))
        return self.json(rows('SELECT * FROM activity_log WHERE unit=? ORDER BY id DESC LIMIT 200',(unit,)))
    def undo_list(self): return self.json(rows('SELECT * FROM undo_stack WHERE undone=0 ORDER BY id DESC LIMIT 50'))
    def undo_action(self,d,u):
        uid=int(d.get('id') or 0); r=one('SELECT * FROM undo_stack WHERE id=? AND undone=0',(uid,))
        if not r:return self.json({'error':'Ação não encontrada ou já desfeita.'},404)
        if r['user_id']!=u['id'] and u['role']!='admin':return self.json({'error':'Somente o autor ou administrador pode desfazer.'},403)
        table=r['table_name']; rid=r['row_id']; before=json.loads(r['before_json'] or '{}'); after=json.loads(r['after_json'] or '{}')
        if r['action'].startswith('Criou '): write('DELETE FROM '+table+' WHERE id=?',(rid,))
        elif r['action'].startswith('Excluiu '):
            if before:
                cols=list(before.keys()); marks=','.join('?' for _ in cols); write('INSERT OR REPLACE INTO '+table+'('+','.join(cols)+') VALUES('+marks+')',[before[k] for k in cols])
        elif before:
            fields=[k for k in before if k!='id']
            if fields: write('UPDATE '+table+' SET '+','.join(k+'=?' for k in fields)+' WHERE id=?',[before[k] for k in fields]+[rid])
        if table in ('services','unlocks'):
            rt='service' if table=='services' else 'unlock'; costrt=rt+'_cost'; write('DELETE FROM finance WHERE ref_type IN (?,?) AND ref_id=?',(rt,costrt,rid))
            restored=one('SELECT * FROM '+table+' WHERE id=?',(rid,))
            if restored:
                if float(restored['price'] or 0)>0: write('INSERT INTO finance(unit,type,category,description,amount,ref_type,ref_id,created_at) VALUES(?,?,?,?,?,?,?,?)',(restored['unit'],'entrada','Serviço' if table=='services' else 'Desbloqueio',restored['description'] if table=='services' else restored['kind'],float(restored['price'] or 0),rt,rid,now()))
                if float(restored['cost_total'] or 0)>0: write('INSERT INTO finance(unit,type,category,description,amount,ref_type,ref_id,created_at) VALUES(?,?,?,?,?,?,?,?)',(restored['unit'],'saida','Custo OS' if table=='services' else 'Custo Desbloqueio',restored['description'] if table=='services' else restored['kind'],float(restored['cost_total'] or 0),costrt,rid,now()))
        write('UPDATE undo_stack SET undone=1,undone_at=? WHERE id=?',(now(),uid)); activity(u,'LOG','Desfez ação',table,rid,r['action']); return self.json({'ok':True})
    def public_quote_action(self,token,d):
        q=one('SELECT * FROM quotes WHERE public_token=?',(token,))
        if not q:return self.json({'error':'Orçamento não encontrado'},404)
        action=d.get('action')
        if action not in ('aprovado','recusado'):return self.json({'error':'Ação inválida'},400)
        write('UPDATE quotes SET status=? WHERE id=?',(action,q['id']))
        unit=q['unit']; msg=f"Orçamento {q['number']} foi {action} pelo cliente."
        write('INSERT INTO notifications(unit,title,message,created_at) VALUES(?,?,?,?)',(unit,'Resposta de orçamento',msg,now()))
        write('INSERT INTO chat(unit,user_name,message,created_at) VALUES(?,?,?,?)',(unit,'CLIENTE',msg,now()))
        activity({'unit':unit,'id':None,'name':'CLIENTE'},'LOG',msg,'quotes',q['id'],d.get('message',''))
        return self.json({'ok':True,'status':action})

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
    buttons='' if q['status'] in ('aprovado','recusado','expirado') else '<div class="box"><h3>Responder orçamento</h3><div class="actions"><button class="ok" onclick="respond(\'aprovado\')">✓ Aceitar orçamento</button><button class="no" onclick="respond(\'recusado\')">✕ Recusar orçamento</button></div><p id="msg"></p></div>'
    return f'''<!doctype html><html lang="pt-BR"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{safe(q['number'])} • KV CELL</title><style>{PUBLIC_CSS}.actions{{display:flex;gap:10px;flex-wrap:wrap}}button{{border:0;border-radius:12px;padding:14px 20px;font-weight:800;cursor:pointer}}.ok{{background:#ffd400;color:#090909}}.no{{background:#2a2a2a;color:#fff}}</style><main><header><b>KV CELL</b><span>ORÇAMENTO • RESPOSTA ONLINE</span></header><section class="hero"><small>ORÇAMENTO</small><h1>{safe(q['number'])}</h1><p>{safe(c['name'] if c else 'Cliente')} • Unidade {safe(q['unit'])}</p></section><div class="grid"><div class="box"><b>Itens</b><table><tr><th>Serviço</th><th>Qtd.</th><th>Total</th></tr>{rows}</table></div><div class="box"><b>Status</b><div class="status" id="status">{safe(q['status'])}</div><p>Garantia: {int(q.get('warranty_days') or 0)} dias</p><p>Válido até: {safe(q['valid_until'])}</p><strong>Total: R$ {float(q['total'] or 0):,.2f}</strong></div></div><div class="box"><b>Condições</b><p>{safe(q['conditions'])}</p><p>{safe(q['observations'])}</p></div>{buttons}<footer>KV CELL • Lagos + Magé</footer></main><script>async function respond(a){{let msg=prompt(a==='aprovado'?'Mensagem opcional para a KV CELL:':'Motivo da recusa (opcional):','');let r=await fetch(location.pathname,{{method:'POST',headers:{{'Content-Type':'application/json'}},body:JSON.stringify({{action:a,message:msg||''}})}});let d=await r.json();document.getElementById('msg').textContent=d.ok?'Resposta enviada à KV CELL.':'Não foi possível enviar. Tente novamente.';if(d.ok)document.getElementById('status').textContent=a}}</script></html>'''
def public_os(s,c):
    ck=json.loads(s['checklist'] or '{}'); done=sum(1 for v in ck.values() if v); total=max(len(ck),1); photos=json.loads(s['photos'] or '[]'); thumbs=''.join(f'<img src=\"{x}\" />' for x in photos[:8]); status=s.get('status') or 'aberto'
    timeline=[('Entrada Registrada',True,s.get('created_at')),('Em Reparo / Diagnóstico',status in ('em andamento','aguardando peça','pronto','entregue','garantia','garantia em análise','garantia em reparo'),s.get('updated_at') or 'Aguardando'),('Pronto para Retirada',status in ('pronto','entregue'),s.get('updated_at') if status in ('pronto','entregue') else 'Pendente'),('Aparelho Retirado',status=='entregue',s.get('updated_at') if status=='entregue' else 'Pendente')]
    tl=''.join('<div class=\"step '+('done' if ok else '')+'\"><b>'+('✓' if ok else '○')+' '+safe(label)+'</b><small>'+safe(val or 'Pendente')+'</small></div>' for label,ok,val in timeline)
    return f'''<!doctype html><html lang=\"pt-BR\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><title>OS-{s['id']} • KV CELL</title><style>{PUBLIC_CSS}.timeline{{display:grid;gap:10px}}.step{{padding:14px;border:1px solid #292929;border-radius:12px;background:#0d0d0d;display:flex;justify-content:space-between;gap:12px}}.step.done{{border-color:#6c5f00;background:#151300}}.step.done b{{color:#ffd400}}.step small{{color:#aaa}}.photos img{{width:100px;height:100px;object-fit:cover;border-radius:10px;margin:5px}}</style><main><header><b>KV CELL</b><span>PORTAL DO CLIENTE</span></header><section class=\"hero\"><small>ORDEM DE SERVIÇO</small><h1>#OS-{s['id']}</h1><p>{safe(c['name'] if c else 'Cliente')} • {safe(s['unit'])}</p><div class=\"status\">{safe(status)}</div></section><div class=\"box\"><h2>Valor do Serviço</h2><h1>R$ {float(s['price'] or 0):,.2f}</h1><p>Garantia: {safe(s.get('warranty'))}</p></div><div class=\"box\"><h2>Linha do Tempo</h2><div class=\"timeline\">{tl}</div></div><div class=\"box\"><b>Garantia Digital</b><p>OS #{s['id']} • Verificação oficial KV CELL</p></div><div class=\"box\"><b>Fotos do aparelho</b><div class=\"photos\">{thumbs or '<span>Sem fotos cadastradas.</span>'}</div></div><div class=\"box\"><b>Cliente</b><p>{safe(c['name'] if c else 'Cliente')}</p><p>{safe(c.get('phone') if c else '')}</p><b>Problema / Serviço</b><p>{safe(s['description'])}</p><b>Técnico</b><p>{safe(s['technician'])}</p></div><footer>KV CELL • Link de acompanhamento</footer></main></html>'''

PUBLIC_CSS='''*{box-sizing:border-box}body{margin:0;background:#070707;color:#f5f5f5;font-family:Inter,Arial,sans-serif}main{max-width:1000px;margin:0 auto;padding:25px}header{display:flex;justify-content:space-between;align-items:center;padding:14px 0;border-bottom:1px solid #2a2a2a}header b{font-size:24px;color:#ffd400}header span{font-size:11px;color:#aaa}.hero{margin:25px 0;padding:28px;border:1px solid #303030;border-radius:20px;background:linear-gradient(135deg,#171500,#101010)}h1{font-size:42px;margin:5px 0;color:#ffd400}.grid{display:grid;grid-template-columns:2fr 1fr;gap:15px}.box{background:#111;border:1px solid #292929;border-radius:16px;padding:18px;margin:15px 0}table{width:100%;border-collapse:collapse;margin-top:15px}td,th{padding:11px;border-bottom:1px solid #292929;text-align:left}.status{display:inline-block;padding:8px 12px;border-radius:999px;background:#332f00;color:#ffd400;margin:10px 0}footer{color:#888;text-align:center;padding:25px}@media(max-width:700px){.grid{grid-template-columns:1fr}main{padding:14px}h1{font-size:30px}}
'''

INDEX='''<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>KV CELL OS PREMIUM</title><link rel="stylesheet" href="/static/app.css"></head><body><div id="app"></div><script src="/static/app.js"></script></body></html>'''

if __name__=='__main__':
    print(f'KV CELL OS PREMIUM on port {PORT}',flush=True)
    ThreadingHTTPServer(('0.0.0.0',PORT),Handler).serve_forever()
