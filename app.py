import os, json, sqlite3, hashlib, secrets, base64, zipfile, io, csv, html, urllib.request, urllib.parse, urllib.error, time, re, threading, shutil, queue, math
from datetime import datetime, date, timedelta
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
import qrcode
from io import BytesIO
from urllib.parse import urlparse, parse_qs

BASE=os.path.dirname(os.path.abspath(__file__))
DATA_DIR=os.environ.get('KVCELL_DATA_DIR','/application/data')
try: os.makedirs(DATA_DIR,exist_ok=True)
except Exception: DATA_DIR=BASE
DB=os.path.join(DATA_DIR,'kvcell.db')
PORT=int(os.environ.get('PORT','80'))
SESSIONS={}
SESSION_LAST_ACTIVITY={}
SESSION_IDLE_SECONDS=30*60
DB_SYNC_LOCK=threading.Lock()
DB_SYNC_TIMER=None
BLOB_KEY=os.environ.get('SQUARE_BLOB_API_KEY','').strip()
BLOB_ACCOUNT=os.environ.get('SQUARE_BLOB_ACCOUNT_ID','').strip()
BLOB_NAME=os.environ.get('SQUARE_BLOB_DB_NAME','kvcell_database').strip() or 'kvcell_database'
BLOB_PREFIX=os.environ.get('SQUARE_BLOB_PREFIX','kvcell').strip(' /') or 'kvcell'
BLOB_PUBLIC_URL=os.environ.get('SQUARE_BLOB_PUBLIC_URL','').strip()
BLOB_ENABLED=bool(BLOB_KEY and (BLOB_PUBLIC_URL or BLOB_ACCOUNT))
FERNET_KEY=os.environ.get('KVCELL_DB_ENCRYPTION_KEY','').strip()
TELEGRAM_QUEUE=queue.Queue(maxsize=500)
TELEGRAM_WORKER_LOCK=threading.Lock()
TELEGRAM_WORKER_STARTED=False
TELEGRAM_FAILED_LOGIN_LAST={}

def _telegram_send(text,timeout=8):
    bot_token=os.environ.get('TELEGRAM_BOT_TOKEN','').strip()
    chat_id=os.environ.get('TELEGRAM_CHAT_ID','').strip()
    if not bot_token or not chat_id:return False
    url=f'https://api.telegram.org/bot{bot_token}/sendMessage'
    payload=json.dumps({'chat_id':chat_id,'text':str(text)[:4000],'disable_web_page_preview':True},ensure_ascii=False).encode()
    request=urllib.request.Request(url,data=payload,headers={'Content-Type':'application/json'},method='POST')
    try:
        with urllib.request.urlopen(request,timeout=timeout) as response:
            result=json.loads(response.read(65536).decode('utf-8'))
        if response.status!=200 or not result.get('ok'):
            raise RuntimeError('Telegram rejeitou o envio.')
    except json.JSONDecodeError:
        raise RuntimeError('Telegram retornou uma resposta inválida.') from None
    except urllib.error.HTTPError as error:
        raise RuntimeError(f'Telegram respondeu HTTP {error.code}.') from None
    except (urllib.error.URLError,TimeoutError) as error:
        raise RuntimeError(f'Falha de conexão com Telegram ({type(error).__name__}).') from None
    return True

def _telegram_worker():
    while True:
        text=TELEGRAM_QUEUE.get()
        try:
            _telegram_send(text)
        except Exception as error:
            print('KV CELL TELEGRAM AUDIT DELIVERY FAILED:',type(error).__name__,flush=True)
        finally:
            TELEGRAM_QUEUE.task_done()

def telegram_notify(text):
    global TELEGRAM_WORKER_STARTED
    if not os.environ.get('TELEGRAM_BOT_TOKEN','').strip() or not os.environ.get('TELEGRAM_CHAT_ID','').strip():
        return False
    with TELEGRAM_WORKER_LOCK:
        if not TELEGRAM_WORKER_STARTED:
            threading.Thread(target=_telegram_worker,name='kv-telegram-audit',daemon=True).start()
            TELEGRAM_WORKER_STARTED=True
    try:
        TELEGRAM_QUEUE.put_nowait(str(text)[:4000])
        return True
    except queue.Full:
        print('KV CELL TELEGRAM AUDIT QUEUE FULL',flush=True)
        return False

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
            c=sqlite3.connect(DB); c.execute('PRAGMA wal_checkpoint(PASSIVE)'); c.close()
            raw=open(DB,'rb').read(); enc=f.encrypt(raw)
            _multipart_upload(enc)
            print('KV CELL BLOB SYNC: banco persistido na Square Cloud.',flush=True)
    except Exception as e: print('KV CELL BLOB SYNC:',e,flush=True)

def schedule_blob_sync():
    global DB_SYNC_TIMER
    if not BLOB_ENABLED: return
    try:
        if DB_SYNC_TIMER and DB_SYNC_TIMER.is_alive(): return
        DB_SYNC_TIMER=threading.Timer(4.0,sync_db_to_blob); DB_SYNC_TIMER.daemon=True; DB_SYNC_TIMER.start()
    except Exception: pass


SCHEMA='''
CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,email TEXT UNIQUE,password_hash TEXT,role TEXT,unit TEXT,permissions TEXT,active INTEGER DEFAULT 1,created_at TEXT);
CREATE TABLE IF NOT EXISTS customers(id INTEGER PRIMARY KEY AUTOINCREMENT,type TEXT,name TEXT,document_type TEXT,document TEXT,phone_type TEXT,phone TEXT,email TEXT,address TEXT,city TEXT,birth_date TEXT,balance REAL DEFAULT 0,observations TEXT,latitude REAL,longitude REAL,created_at TEXT);
CREATE TABLE IF NOT EXISTS devices(id INTEGER PRIMARY KEY AUTOINCREMENT,unit TEXT,customer_id INTEGER,brand TEXT,model TEXT,imei TEXT,serial TEXT,color TEXT,storage TEXT,status TEXT,photos TEXT DEFAULT '[]',notes TEXT,created_at TEXT);
CREATE TABLE IF NOT EXISTS services(id INTEGER PRIMARY KEY AUTOINCREMENT,unit TEXT,customer_id INTEGER,device_id INTEGER,kind TEXT,description TEXT,checklist TEXT,diagnosis TEXT,status TEXT,technician TEXT,price REAL,warranty TEXT,photos TEXT DEFAULT '[]',notes TEXT,public_token TEXT,created_at TEXT,updated_at TEXT,cost_material REAL DEFAULT 0,cost_labor REAL DEFAULT 0,cost_extra REAL DEFAULT 0,cost_total REAL DEFAULT 0,profit REAL DEFAULT 0,warranty_of_id INTEGER DEFAULT NULL,details_json TEXT DEFAULT '{}',technician_id INTEGER DEFAULT NULL);
CREATE TABLE IF NOT EXISTS service_devices(service_id INTEGER NOT NULL,device_id INTEGER NOT NULL,created_at TEXT,PRIMARY KEY(service_id,device_id));
CREATE INDEX IF NOT EXISTS idx_service_devices_device ON service_devices(device_id,service_id);
CREATE TABLE IF NOT EXISTS service_status_history(id INTEGER PRIMARY KEY AUTOINCREMENT,service_id INTEGER NOT NULL,status TEXT NOT NULL,changed_at TEXT NOT NULL,user_id INTEGER,source TEXT);
CREATE INDEX IF NOT EXISTS idx_service_status_history_service ON service_status_history(service_id,id);
CREATE TABLE IF NOT EXISTS unlocks(id INTEGER PRIMARY KEY AUTOINCREMENT,unit TEXT,customer_id INTEGER,device_id INTEGER,brand TEXT,model TEXT,imei TEXT,kind TEXT,checklist TEXT,status TEXT,operator TEXT,price REAL,photos TEXT DEFAULT '[]',notes TEXT,public_token TEXT,created_at TEXT,cost_material REAL DEFAULT 0,cost_labor REAL DEFAULT 0,cost_extra REAL DEFAULT 0,cost_total REAL DEFAULT 0,profit REAL DEFAULT 0,warranty_of_id INTEGER DEFAULT NULL,details_json TEXT DEFAULT '{}',technician_id INTEGER DEFAULT NULL);
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
CREATE TABLE IF NOT EXISTS film_compat(id INTEGER PRIMARY KEY AUTOINCREMENT,brand TEXT,model TEXT,aliases TEXT,master_code TEXT,group_name TEXT,screen_size TEXT,fit_notes TEXT,source_note TEXT,confidence TEXT DEFAULT 'manual',kind TEXT DEFAULT 'pelicula',created_at TEXT);
CREATE TABLE IF NOT EXISTS diagnostics(id INTEGER PRIMARY KEY AUTOINCREMENT,unit TEXT NOT NULL,customer_id INTEGER,device_id INTEGER,brand TEXT NOT NULL,model TEXT NOT NULL,imei TEXT,symptoms TEXT NOT NULL,tests TEXT NOT NULL DEFAULT '[]',findings TEXT,recommendation TEXT,status TEXT NOT NULL DEFAULT 'aberto',estimate REAL NOT NULL DEFAULT 0,notes TEXT,created_by INTEGER,created_at TEXT NOT NULL,updated_at TEXT NOT NULL);
CREATE INDEX IF NOT EXISTS idx_diagnostics_unit_status ON diagnostics(unit,status,id);
CREATE INDEX IF NOT EXISTS idx_diagnostics_customer ON diagnostics(customer_id,id);
CREATE TABLE IF NOT EXISTS ai_chat(id INTEGER PRIMARY KEY AUTOINCREMENT,unit TEXT,user_id INTEGER,user_name TEXT,role TEXT,message TEXT,reply TEXT,created_at TEXT);
CREATE TABLE IF NOT EXISTS activity_log(id INTEGER PRIMARY KEY AUTOINCREMENT,unit TEXT,tag TEXT,user_id INTEGER,user_name TEXT,action TEXT,entity TEXT,entity_id INTEGER,details TEXT,created_at TEXT);
CREATE TABLE IF NOT EXISTS undo_stack(id INTEGER PRIMARY KEY AUTOINCREMENT,unit TEXT,user_id INTEGER,action TEXT,table_name TEXT,row_id INTEGER,before_json TEXT,after_json TEXT,undone INTEGER DEFAULT 0,created_at TEXT,undone_at TEXT);
CREATE TABLE IF NOT EXISTS appointments(id INTEGER PRIMARY KEY AUTOINCREMENT,unit TEXT,customer_id INTEGER,title TEXT,service_type TEXT,start_at TEXT,end_at TEXT,status TEXT,technician TEXT,notes TEXT,created_at TEXT);
CREATE TABLE IF NOT EXISTS technicians(id INTEGER PRIMARY KEY AUTOINCREMENT,unit TEXT,name TEXT,phone TEXT,email TEXT,specialties TEXT,active INTEGER DEFAULT 1,created_at TEXT);
CREATE TABLE IF NOT EXISTS suppliers(id INTEGER PRIMARY KEY AUTOINCREMENT,unit TEXT,name TEXT,document TEXT,phone TEXT,email TEXT,address TEXT,neighborhood TEXT,postal_code TEXT,city TEXT,latitude REAL,longitude REAL,notes TEXT,created_at TEXT);
CREATE TABLE IF NOT EXISTS guarantees(id INTEGER PRIMARY KEY AUTOINCREMENT,unit TEXT,customer_id INTEGER,source_type TEXT,source_id INTEGER,device TEXT,description TEXT,start_date TEXT,end_date TEXT,status TEXT,notes TEXT,created_at TEXT);
CREATE TABLE IF NOT EXISTS community_posts(id INTEGER PRIMARY KEY AUTOINCREMENT,unit TEXT,user_name TEXT,title TEXT,message TEXT,type TEXT,status TEXT,created_at TEXT);
CREATE TABLE IF NOT EXISTS referrals(id INTEGER PRIMARY KEY AUTOINCREMENT,unit TEXT,customer_id INTEGER,service_name TEXT,commission REAL DEFAULT 0,referrer TEXT,link TEXT,status TEXT,created_at TEXT);
CREATE TABLE IF NOT EXISTS catalog_products(id INTEGER PRIMARY KEY AUTOINCREMENT,unit TEXT,name TEXT,category TEXT,price REAL DEFAULT 0,stock REAL DEFAULT 0,image TEXT,active INTEGER DEFAULT 1,created_at TEXT);
CREATE TABLE IF NOT EXISTS fiado_accounts(id INTEGER PRIMARY KEY AUTOINCREMENT,unit TEXT,customer_id INTEGER,source_type TEXT,source_id INTEGER,description TEXT,total REAL DEFAULT 0,down_payment REAL DEFAULT 0,balance REAL DEFAULT 0,due_date TEXT,status TEXT DEFAULT 'aberto',notes TEXT,installments INTEGER DEFAULT 1,installment_value REAL DEFAULT 0,frequency TEXT DEFAULT 'Mensal (30 dias)',created_at TEXT);
CREATE TABLE IF NOT EXISTS fiado_payments(id INTEGER PRIMARY KEY AUTOINCREMENT,account_id INTEGER,amount REAL,payment TEXT,paid_at TEXT,notes TEXT,created_at TEXT);
CREATE TABLE IF NOT EXISTS mdm_devices(id INTEGER PRIMARY KEY AUTOINCREMENT,unit TEXT,customer_id INTEGER,purchase_id INTEGER,fiado_id INTEGER,brand TEXT,model TEXT,imei TEXT,serial TEXT,android_version TEXT,device_name TEXT,enrollment_token TEXT UNIQUE,qr_payload TEXT,status TEXT DEFAULT 'aguardando',policy_state TEXT DEFAULT 'normal',custom_message TEXT,installment_total REAL DEFAULT 0,installment_paid REAL DEFAULT 0,next_due TEXT,app_version TEXT,last_seen TEXT,battery INTEGER,installment_count INTEGER DEFAULT 1,installment_value REAL DEFAULT 0,paid_installments INTEGER DEFAULT 0,payment_url TEXT,pix_copy_paste TEXT,created_at TEXT,updated_at TEXT);
CREATE TABLE IF NOT EXISTS mdm_events(id INTEGER PRIMARY KEY AUTOINCREMENT,device_id INTEGER,action TEXT,message TEXT,created_at TEXT);
CREATE TABLE IF NOT EXISTS mdm_installments(id INTEGER PRIMARY KEY AUTOINCREMENT,device_id INTEGER,number INTEGER,amount REAL,due_date TEXT,status TEXT DEFAULT 'pendente',paid_at TEXT,payment_method TEXT,created_at TEXT);

'''

def now(): return datetime.now().strftime('%Y-%m-%d %H:%M:%S')
def db():
    c=sqlite3.connect(DB,timeout=15,check_same_thread=False); c.row_factory=sqlite3.Row
    c.execute('PRAGMA busy_timeout=12000'); c.execute('PRAGMA journal_mode=WAL'); c.execute('PRAGMA synchronous=NORMAL'); c.executescript(SCHEMA); return c
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
        if 'details_json' not in cols: c.execute("ALTER TABLE "+table+" ADD COLUMN details_json TEXT DEFAULT '{}'")
        if 'technician_id' not in cols: c.execute("ALTER TABLE "+table+" ADD COLUMN technician_id INTEGER DEFAULT NULL")
    cols={r[1] for r in c.execute('PRAGMA table_info(fiado_accounts)').fetchall()}
    for name,typ in [('installments','INTEGER DEFAULT 1'),('installment_value','REAL DEFAULT 0'),('frequency',"TEXT DEFAULT 'Mensal (30 dias)'")]:
        if name not in cols: c.execute('ALTER TABLE fiado_accounts ADD COLUMN '+name+' '+typ)
    cols={r[1] for r in c.execute('PRAGMA table_info(purchases)').fetchall()}
    for name,typ in [('device_id','INTEGER DEFAULT NULL'),('details_json',"TEXT DEFAULT '{}'")]:
        if name not in cols: c.execute('ALTER TABLE purchases ADD COLUMN '+name+' '+typ)
    cols={r[1] for r in c.execute('PRAGMA table_info(sales)').fetchall()}
    if 'purchase_id' not in cols: c.execute('ALTER TABLE sales ADD COLUMN purchase_id INTEGER DEFAULT NULL')
    cols={r[1] for r in c.execute('PRAGMA table_info(forgotten)').fetchall()}
    if 'customer_id' not in cols: c.execute('ALTER TABLE forgotten ADD COLUMN customer_id INTEGER DEFAULT NULL')
    cols={r[1] for r in c.execute('PRAGMA table_info(inventory)').fetchall()}
    for name,typ in [('source_type','TEXT'),('source_id','INTEGER DEFAULT NULL')]:
        if name not in cols: c.execute('ALTER TABLE inventory ADD COLUMN '+name+' '+typ)
    # MDM schema repair: older V500/V520 databases may have mdm_events without device_id.
    # Never create an index before the legacy table has been upgraded.
    cols={r[1] for r in c.execute('PRAGMA table_info(mdm_events)').fetchall()}
    for name,typ in [('device_id','INTEGER'),('action','TEXT'),('message','TEXT'),('created_at','TEXT')]:
        if name not in cols: c.execute('ALTER TABLE mdm_events ADD COLUMN '+name+' '+typ)
    cols={r[1] for r in c.execute('PRAGMA table_info(mdm_installments)').fetchall()}
    if not cols:
        c.execute("CREATE TABLE IF NOT EXISTS mdm_installments(id INTEGER PRIMARY KEY AUTOINCREMENT,device_id INTEGER,number INTEGER,amount REAL,due_date TEXT,status TEXT DEFAULT 'pendente',paid_at TEXT,payment_method TEXT,created_at TEXT)")
    else:
        for name,typ in [('device_id','INTEGER'),('number','INTEGER'),('amount','REAL'),('due_date','TEXT'),('status',"TEXT DEFAULT 'pendente'"),('paid_at','TEXT'),('payment_method','TEXT'),('created_at','TEXT')]:
            if name not in cols: c.execute('ALTER TABLE mdm_installments ADD COLUMN '+name+' '+typ)

    cols={r[1] for r in c.execute('PRAGMA table_info(mdm_devices)').fetchall()}
    for name,typ in [('unit','TEXT'),('customer_id','INTEGER'),('purchase_id','INTEGER'),('fiado_id','INTEGER'),('brand','TEXT'),('model','TEXT'),('imei','TEXT'),('serial','TEXT'),('android_version','TEXT'),('device_name','TEXT'),('enrollment_token','TEXT'),('qr_payload','TEXT'),('status',"TEXT DEFAULT 'aguardando'"),('policy_state',"TEXT DEFAULT 'normal'"),('custom_message','TEXT'),('installment_total','REAL DEFAULT 0'),('installment_paid','REAL DEFAULT 0'),('next_due','TEXT'),('app_version','TEXT'),('last_seen','TEXT'),('battery','INTEGER'),('created_at','TEXT'),('updated_at','TEXT')]:
        if name not in cols: c.execute('ALTER TABLE mdm_devices ADD COLUMN '+name+' '+typ)
    cols={r[1] for r in c.execute('PRAGMA table_info(mdm_devices)').fetchall()}
    if 'fiado_id' not in cols: c.execute('ALTER TABLE mdm_devices ADD COLUMN fiado_id INTEGER DEFAULT NULL')
    for name,typ in [('installment_count','INTEGER DEFAULT 1'),('installment_value','REAL DEFAULT 0'),('paid_installments','INTEGER DEFAULT 0'),('payment_url','TEXT'),('pix_copy_paste','TEXT'),('auto_lock_enabled','INTEGER DEFAULT 1'),('grace_days','INTEGER DEFAULT 0'),('enrolled_at','TEXT'),('last_policy_sync','TEXT'),('last_error','TEXT')]:
        if name not in cols: c.execute('ALTER TABLE mdm_devices ADD COLUMN '+name+' '+typ)
    c.execute('CREATE INDEX IF NOT EXISTS idx_mdm_events_device ON mdm_events(device_id,id)')
    c.execute('CREATE INDEX IF NOT EXISTS idx_mdm_installments_device ON mdm_installments(device_id,number)')
    c.execute('CREATE INDEX IF NOT EXISTS idx_mdm_token ON mdm_devices(enrollment_token)')
    c.execute('CREATE INDEX IF NOT EXISTS idx_mdm_customer ON mdm_devices(customer_id)')
    c.execute('INSERT OR IGNORE INTO service_devices(service_id,device_id,created_at) SELECT id,device_id,COALESCE(created_at,?) FROM services WHERE device_id IS NOT NULL',(now(),))
    c.execute("""INSERT INTO service_status_history(service_id,status,changed_at,source)
                 SELECT s.id,s.status,COALESCE(NULLIF(s.updated_at,''),s.created_at,?),'migration'
                 FROM services s
                 WHERE COALESCE(s.status,'')<>''
                   AND NOT EXISTS(SELECT 1 FROM service_status_history h WHERE h.service_id=s.id)""",(now(),))
    c.commit();c.close()
migrate_v10()

def activity(u,tag,action,entity='',entity_id=None,details=''):
    stamp=now()
    try:
        write('INSERT INTO activity_log(unit,tag,user_id,user_name,action,entity,entity_id,details,created_at) VALUES(?,?,?,?,?,?,?,?,?)',(u.get('unit','TODOS'),tag,u.get('id'),u.get('name'),action,entity,entity_id,details,stamp))
    except Exception as error:
        print('KV CELL ACTIVITY LOG FAILED:',type(error).__name__,flush=True)
    parts=[
        'KV CELL • EVENTO DO PAINEL',
        f'Data: {stamp}',
        f'Unidade: {str(u.get("unit") or "TODOS")[:40]}',
        f'Usuário: {str(u.get("name") or "Sistema")[:80]}',
        f'Ação: {str(action)[:120]}',
    ]
    if entity:parts.append(f'Módulo: {str(entity)[:60]}')
    if entity_id is not None:parts.append(f'Registro: #{str(entity_id)[:30]}')
    telegram_notify('\n'.join(parts))

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
    defaults={'company_name':'KV CELL OS PRO','tagline':'OS PREMIUM • Laboratório avançado • Desde 2023','phone':'(21) 98042-1531','instagram':'@KV._CELL','units':'LAGOS,MAGÉ','currency':'BRL','theme':'black-yellow','catalog_slug':'kvcell','catalog_title':'KV CELL OS PRO','catalog_message':'Produtos, acessórios e serviços atualizados.','catalog_whatsapp':'(21) 98042-1531'}
    for k,v in defaults.items(): c.execute('INSERT OR IGNORE INTO settings(k,v) VALUES(?,?)',(k,v))
    legacy_name=c.execute("SELECT v FROM settings WHERE k='company_name'").fetchone()
    if legacy_name and str(legacy_name[0]).strip().upper() in ('KV CELL','KV CELL OS PREMIUM'):
        c.execute("UPDATE settings SET v='KV CELL OS PRO' WHERE k='company_name'")
    legacy_theme=c.execute("SELECT v FROM settings WHERE k='theme'").fetchone()
    if legacy_theme and str(legacy_theme[0]).strip().lower() in ('yellow-black','amoled-neon'):
        c.execute("UPDATE settings SET v='black-yellow' WHERE k='theme'")
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
        'forgotten':["checklist TEXT DEFAULT '{}'"],
        'film_compat':["kind TEXT DEFAULT 'pelicula'"],
        'customers':['latitude REAL','longitude REAL'],
        'suppliers':['address TEXT','neighborhood TEXT','postal_code TEXT','latitude REAL','longitude REAL']
    }
    for table,cols in migrations.items():
        existing={r['name'] for r in c.execute(f'PRAGMA table_info({table})').fetchall()}
        for col in cols:
            name=col.split()[0]
            if name not in existing:
                try:c.execute(f'ALTER TABLE {table} ADD COLUMN {col}')
                except Exception:pass
    # V500.2: repair missing public tokens from older versions.
    for table in ('services','unlocks','quotes'):
        try:
            missing=c.execute(f"SELECT id FROM {table} WHERE public_token IS NULL OR TRIM(public_token)=''").fetchall()
            for rr in missing:
                c.execute(f"UPDATE {table} SET public_token=? WHERE id=?",(secrets.token_urlsafe(18).replace('-','').replace('_',''),rr[0]))
        except Exception:
            pass
    c.commit();c.close()

seed(); migrate()

def seed_films_v502():
    c=db()
    groups={
      'SAM-A02-A03-LEGACY':[('Samsung','Galaxy A02'),('Samsung','Galaxy A02s'),('Samsung','Galaxy A03'),('Samsung','Galaxy A03s'),('Samsung','Galaxy A03 Core'),('Samsung','Galaxy A04'),('Samsung','Galaxy A04s'),('Samsung','Galaxy A04e'),('Samsung','Galaxy A12'),('Samsung','Galaxy A13'),('Samsung','Galaxy M12')],
      'SAM-A13-M12':[('Samsung','Galaxy A13'),('Samsung','Galaxy M12'),('Samsung','Galaxy A12')],
      'SAM-A15-A25-REFERENCE':[('Samsung','Galaxy A15'),('Samsung','Galaxy A15 5G')],
      'SAM-A16':[('Samsung','Galaxy A16'),('Samsung','Galaxy A16 5G')],
      'SAM-A24':[('Samsung','Galaxy A24'),('Samsung','Galaxy A24 4G')],
      'SAM-A25':[('Samsung','Galaxy A25 5G')],
      'SAM-A26':[('Samsung','Galaxy A26 5G')],
      'SAM-A34':[('Samsung','Galaxy A34 5G')],
      'SAM-A35':[('Samsung','Galaxy A35 5G')],
      'SAM-A54':[('Samsung','Galaxy A54 5G')],
      'SAM-A55':[('Samsung','Galaxy A55 5G')],
      'SAM-S23':[('Samsung','Galaxy S23')],
      'SAM-S24':[('Samsung','Galaxy S24')],
      'SAM-S25':[('Samsung','Galaxy S25')],
      'MOT-G04-G05-REF':[('Motorola','Moto G04'),('Motorola','Moto G04s'),('Motorola','Moto G05')],
      'MOT-G14':[('Motorola','Moto G14')],
      'MOT-G23-G53-REF':[('Motorola','Moto G23'),('Motorola','Moto G53 5G')],
      'MOT-G24-G04-REF':[('Motorola','Moto G24'),('Motorola','Moto G04')],
      'MOT-G34-G54-REF':[('Motorola','Moto G34 5G'),('Motorola','Moto G54 5G')],
      'MOT-G35':[('Motorola','Moto G35 5G')],
      'MOT-G55':[('Motorola','Moto G55 5G')],
      'MOT-G84':[('Motorola','Moto G84 5G')],
      'MOT-G85':[('Motorola','Moto G85 5G')],
      'MOT-G75':[('Motorola','Moto G75 5G')],
      'MOT-EDGE50':[('Motorola','Edge 50 Fusion')],
      'XIA-REDMI-NOTE12':[('Xiaomi','Redmi Note 12'),('Xiaomi','Redmi Note 12 4G'),('Xiaomi','Redmi Note 12 5G')],
      'XIA-REDMI-NOTE13':[('Xiaomi','Redmi Note 13'),('Xiaomi','Redmi Note 13 4G')],
      'XIA-REDMI-NOTE13-5G':[('Xiaomi','Redmi Note 13 5G')],
      'XIA-REDMI-NOTE13-PRO':[('Xiaomi','Redmi Note 13 Pro')],
      'XIA-REDMI-NOTE14':[('Xiaomi','Redmi Note 14'),('Xiaomi','Redmi Note 14 4G')],
      'XIA-REDMI-NOTE14-5G':[('Xiaomi','Redmi Note 14 5G')],
      'XIA-REDMI-13':[('Xiaomi','Redmi 13'),('Xiaomi','Redmi 13 4G')],
      'XIA-POCO-X6':[('Xiaomi','POCO X6 5G')],
      'XIA-POCO-X6-PRO':[('Xiaomi','POCO X6 Pro 5G')],
      'XIA-POCO-X5-PRO':[('Xiaomi','POCO X5 Pro 5G')],
      'APPLE-IP11':[('Apple','iPhone 11')],
      'APPLE-IP12':[('Apple','iPhone 12'),('Apple','iPhone 12 Pro')],
      'APPLE-IP13':[('Apple','iPhone 13'),('Apple','iPhone 13 Pro')],
      'APPLE-IP14':[('Apple','iPhone 14'),('Apple','iPhone 14 Plus')],
      'APPLE-IP15':[('Apple','iPhone 15'),('Apple','iPhone 15 Plus')],
      'APPLE-IP16':[('Apple','iPhone 16'),('Apple','iPhone 16 Plus')],
      'REALME-C55':[('Realme','C55')],
      'REALME-C53-C51-REF':[('Realme','C53'),('Realme','C51')],
      'INFINIX-HOT40':[('Infinix','Hot 40'),('Infinix','Hot 40i')],
    }
    for group,pairs in groups.items():
        for brand,model in pairs:
            exists=c.execute('SELECT 1 FROM film_compat WHERE brand=? AND model=? LIMIT 1',(brand,model)).fetchone()
            if exists: continue
            c.execute('INSERT INTO film_compat(brand,model,aliases,master_code,group_name,screen_size,fit_notes,source_note,confidence,created_at) VALUES(?,?,?,?,?,?,?,?,?,?)',(brand,model,model,group,group,'','Relação de catálogo/referência; confirmar recorte, borda e sensores antes da aplicação.','Pesquisa web: VivaCell, Tabela Películas, Ordita/FilmFinder; relação não tratada como garantia universal.','referencia-web',now()))
    c.commit();c.close()

seed_films_v502()

def seed_films_reference_catalog():
    """Populate the internal compatibility catalog from the scanned reference text."""
    entries=[
      ('capa','Xiaomi','Redmi 9A / Redmi 9I','Redmi 9A, Redmi 9I','','XIA-CAPA-01','Capa compartilhada entre os modelos listados.'),
      ('capa','Xiaomi','Redmi 10C / POCO C40','Redmi 10C, POCO C40','','XIA-CAPA-02','Capa compartilhada entre os modelos listados.'),
      ('capa','Xiaomi','Redmi Note 14 Pro / POCO X7 / Redmi Note 15','Redmi Note 14 Pro, POCO X7, Redmi Note 15','','XIA-CAPA-03','A mesma capa e indicada para os modelos listados.'),
      ('capa','Motorola','Moto G6 Play / Moto E5','Moto G6 Play, Moto E5','','MOT-CAPA-01','Capa compartilhada entre os modelos listados.'),
      ('capa','LG','K22 / K22+','K22, K22+','','LG-CAPA-01','Capa compartilhada entre os modelos listados.'),
      ('capa','Xiaomi','POCO C61 / Redmi A3','POCO C61, Redmi A3','','XIA-CAPA-04','Capa compartilhada entre os modelos listados.'),
      ('capa','Motorola','Moto E15 / Moto G05','Moto E15, Moto G05','','MOT-CAPA-02','Capa compartilhada entre os modelos listados.'),
      ('capa','Motorola','Moto G52 / Moto G82','Moto G52, Moto G82','','MOT-CAPA-03','Capa compartilhada entre os modelos listados.'),
      ('capa','Xiaomi','Redmi Note 11 Pro / Note 11 5G','Redmi Note 11 Pro, Redmi Note 11 5G','','XIA-CAPA-05','Confirmar protecao das cameras antes da venda.'),
      ('capa','Xiaomi','POCO M6 Pro / Redmi 12 4G','POCO M6 Pro, Redmi 12 4G','','XIA-CAPA-06','A referencia indica uso da capa do Redmi 12 4G apenas.'),
      ('capa','Realme','C21Y / C25Y / C25','Realme C21Y, Realme C25Y, Realme C25','','REALME-CAPA-01','A referencia recomenda a capa C25 normal.'),
      ('capa','Samsung','A03s / A02s','Samsung A03s, Samsung A02s','','SAM-CAPA-01','Atencao: a biometria diferencia os modelos; confirmar fisicamente.'),
      ('capa','Samsung','J7 Prime / J7 Prime 2','J7 Prime, J7 Prime 2','','SAM-CAPA-02','Capa compartilhada entre os modelos listados.'),
      ('tela','Motorola','Moto G52 / G72 / G82 / G71s / Edge 30 / Edge 2022','Moto G52, Moto G72, Moto G82, Moto G71s, Edge 30, Edge 2022','','MOT-TELA-01','Referencia de tela sem aro; montagem interna pode variar.'),
      ('tela','Motorola','Moto G10 / G20 / G30','Moto G10, Moto G20, Moto G30','','MOT-TELA-02','Referencia de tela sem aro; confirmar recorte e conector.'),
      ('tela','Motorola','Moto G13 / G23','Moto G13, Moto G23','','MOT-TELA-03','Referencia de compatibilidade; confirmar lote.'),
      ('tela','Motorola','Moto G22 / Moto E32','Moto G22, Moto E32','','MOT-TELA-04','Referencia de compatibilidade; confirmar lote.'),
      ('tela','Motorola','Moto G31 / G41 / G71','Moto G31, Moto G41, Moto G71','','MOT-TELA-05','Referencia de compatibilidade; confirmar lote.'),
      ('tela','Motorola','Moto E7 / E7 Power','Moto E7, Moto E7 Power','','MOT-TELA-06','Referencia de compatibilidade; confirmar lote.'),
      ('tela','Motorola','Moto G9 Play / Moto E7 Plus','Moto G9 Play, Moto E7 Plus','','MOT-TELA-07','Referencia de compatibilidade; confirmar lote.'),
      ('tela','Motorola','Moto G60 / G60s / G51 5G / G40 Fusion','Moto G60, Moto G60s, Moto G51 5G, Moto G40 Fusion','','MOT-TELA-08','Referencia de compatibilidade; confirmar lote.'),
      ('tela','Samsung','A12 / A02 / A32 / M12','Samsung A12, A02, A32, M12','','SAM-TELA-01','Referencia de compatibilidade; confirmar aro.'),
      ('tela','Samsung','A02s / A03 / A03s / A04e','Samsung A02s, A03, A03s, A04e','','SAM-TELA-02','Referencia de compatibilidade; confirmar aro.'),
      ('tela','Samsung','A13 / M13','Samsung A13, M13','','SAM-TELA-03','Referencia de compatibilidade; confirmar aro.'),
      ('tela','Samsung','M21 / M21s / M30 / M30s / M31','Samsung M21, M21s, M30, M30s, M31','','SAM-TELA-04','Referencia de compatibilidade; confirmar aro.'),
      ('tela','Xiaomi','Redmi Note 11 4G / 11S 4G / 12S 4G / POCO M4 Pro','Redmi Note 11 4G, Redmi Note 11S 4G, Redmi Note 12S 4G, POCO M4 Pro','','XIA-TELA-01','Referencia de compatibilidade; confirmar aro e flex.'),
      ('tela','Xiaomi','Redmi Note 12 4G / 12 5G / POCO X5 4G / X5 5G','Redmi Note 12 4G, Redmi Note 12 5G, POCO X5 4G, POCO X5 5G','','XIA-TELA-02','Referencia de compatibilidade; confirmar aro e flex.'),
      ('tela','Xiaomi','Redmi 9A / 9C / 9i / 10A / POCO C3 / C31','Redmi 9A, 9C, 9i, 10A, POCO C3, POCO C31','','XIA-TELA-03','Referencia de compatibilidade; confirmar aro e flex.'),
      ('tela','Xiaomi','Redmi 12C / 11A / POCO C55','Redmi 12C, Redmi 11A, POCO C55','','XIA-TELA-04','Referencia de compatibilidade; confirmar aro e flex.'),
      ('tela','Xiaomi','Redmi Note 13 Pro 5G / POCO X6 Pro','Redmi Note 13 Pro 5G, POCO X6 Pro','','XIA-TELA-05','Referencia de compatibilidade; confirmar aro e flex.'),
      ('tela','LG','K12 / K12+ / K40','LG K12, K12+, K40','','LG-TELA-01','Referencia de compatibilidade; confirmar aro.'),
      ('tela','LG','K12 Prime / K12 Max / Q60 / K50','LG K12 Prime, K12 Max, Q60, K50','','LG-TELA-02','Referencia de compatibilidade; confirmar aro.'),
      ('tela','LG','K41S / K51 / K51S / K6','LG K41S, K51, K51S, K6','','LG-TELA-03','Referencia de compatibilidade; confirmar aro.'),
      ('bateria','Samsung','A10 / M10 / A7 2018','A10, M10, A7 2018','EB-BA750ABU','BAT-SAM-01','Codigo e modelos comerciais da tabela de baterias.'),
      ('bateria','Samsung','A20 / A30 / A50','A20, A30, A50','EB-BA5054BN','BAT-SAM-02','Codigo e modelos comerciais da tabela de baterias.'),
      ('bateria','Samsung','A10s / A20s','A10s, A20s','SCUD-WT-N6','BAT-SAM-03','Codigo e modelos comerciais da tabela de baterias.'),
      ('bateria','Samsung','A6 / A6 Plus / J6 / J8','A6, A6 Plus, J6, J8/J8 Plus','EB-BJ805ABE','BAT-SAM-04','Codigo e modelos comerciais da tabela de baterias.'),
      ('bateria','Samsung','Grand Prime / J2 Prime / J2 Pro / J2 Core / J3 / J5','Grand Prime, J2 Prime, J2 Pro, J2 Core, J3, J5','EB-BG530BBE','BAT-SAM-05','Codigo e modelos comerciais da tabela de baterias.'),
      ('bateria','Motorola','Moto E4 / Moto C / G4 Play / G5','Moto E4, Moto C, G4 Play, G5','GK40','BAT-MOT-01','Codigo e modelos comerciais da tabela de baterias.'),
      ('bateria','Motorola','Moto G4 / G4 Plus','Moto G4, Moto G4 Plus','GA40','BAT-MOT-02','Codigo e modelos comerciais da tabela de baterias.'),
      ('bateria','Motorola','Moto E4 Plus / Moto E5 Plus','Moto E4 Plus, Moto E5 Plus','HE50','BAT-MOT-03','Codigo e modelos comerciais da tabela de baterias.'),
      ('bateria','Xiaomi','Redmi S2 / Mi A1','Redmi S2, Mi A1','BN31','BAT-XIA-01','Codigo e modelos comerciais da tabela de baterias.'),
      ('bateria','Xiaomi','Redmi Note 5 / Note 5 Pro','Redmi Note 5, Redmi Note 5 Pro','BN45','BAT-XIA-02','Codigo e modelos comerciais da tabela de baterias.'),
      ('conector','Xiaomi/Samsung/LG','Redmi 12C / A1 / A2 / 9A / 9C / 9i / 10A / 8A / POCO C3 / Samsung A01 / A03 / LG K12 / K40 / K22','Redmi 12C, A1, A2, A1 Plus, A2 Plus, 9A, 9C, 9i, 10A, 8A, POCO C3, Samsung A01, A03, LG K12, K40, K22','','CON-V8-01','Grupo de conectores V8; confirmar pinagem antes da troca.'),
      ('conector','Motorola','Moto E6i / E6 / E4 / E4 Plus / E5 / E5 Plus / G4 Play / G8 Power Lite','Moto E6i, E6, E4, E4 Plus, E5, E5 Plus, G4 Play, G8 Power Lite','','CON-V8-02','Grupo de conectores V8; confirmar pinagem antes da troca.'),
      ('conector','Samsung','A02 / A01 / J8 / J6 / J4 / J7 / J5 / J1 / J2 / J3 / A10 / A10s','Samsung A02, A01, J8, J6, J4, J7, J5, J1, J2, J3, A10, A10s','','CON-V8-03','Grupo de conectores V8; confirmar pinagem antes da troca.'),
      ('conector','LG','K10 / K8 / K5 / K4 / D377 / H815 / H502 / K350ds / Nexus 4 / Nexus 5','LG K10, K8, K5, K4, D377, H815, H502, K350ds, Nexus 4, Nexus 5','','CON-V8-04','Grupo de conectores V8; confirmar pinagem antes da troca.'),
      ('conector','Samsung','S3 / I9300 / I9308 / I939 / T999 / I747 / I535 / L710','S3, I9300, I9308, I939, T999, I747, I535, L710','','CON-V8-05','Grupo de conectores V8; confirmar pinagem antes da troca.'),
      ('conector-type-c','Samsung','A20 / A21s / A30 / A40 / A50 / A60 / A70 / M20 / M30 / A31 / A51 / A71 / A22 / A13','Modelos Samsung Type-C listados na referencia','','CON-TC-01','Compatibilidade de conector Type-C; confirmar subplaca e pinagem.'),
      ('conector-type-c','LG/Motorola','A20s / A21 / LG K41s / K61s / K61 / Moto E7 / E7 Power / E20 / E30 / E22 / E32 / E40 / G50 5G','Modelos LG e Motorola Type-C listados na referencia','','CON-TC-02','Compatibilidade de conector Type-C; confirmar subplaca e pinagem.'),
      ('conector-type-c','Samsung','A52 / A72 / A52s / A82 / A33 / A73 / A54 / A34','Modelos Samsung Type-C listados na referencia','','CON-TC-03','Compatibilidade de conector Type-C; confirmar subplaca e pinagem.'),
      ('conector-type-c','Xiaomi','Redmi Note 11 4G / Note 11S / Note 11E / Redmi 10C / Note 12 5G / Note 12 Pro 5G / POCO X5 / X5 Pro','Modelos Xiaomi Type-C listados na referencia','','CON-TC-04','Compatibilidade de conector Type-C; confirmar subplaca e pinagem.')
    ]
    c=db()
    try:
        for kind,brand,model,aliases,master,group,notes in entries:
            if c.execute('SELECT 1 FROM film_compat WHERE kind=? AND brand=? AND model=? LIMIT 1',(kind,brand,model)).fetchone(): continue
            c.execute('INSERT INTO film_compat(brand,model,aliases,master_code,group_name,screen_size,fit_notes,source_note,confidence,kind,created_at) VALUES(?,?,?,?,?,?,?,?,?,?,?)',(brand,model,aliases,master,group,'',notes,'OfCell123: varredura textual de tabelas de compatibilidade; confirmar fisicamente antes da venda.','referencia-textual',kind,now()))
        c.commit()
    finally: c.close()

seed_films_reference_catalog()

def rowdict(r): return dict(r) if r else None
def rows(sql,args=()):
    c=db(); r=[dict(x) for x in c.execute(sql,args).fetchall()]; c.close(); return r
def one(sql,args=()):
    c=db(); r=c.execute(sql,args).fetchone(); c.close(); return dict(r) if r else None
def write(sql,args=()):
    c=db()
    try:
        cur=c.execute(sql,args); c.commit(); rid=cur.lastrowid
    except Exception:
        c.rollback()
        raise
    finally:
        c.close()
    schedule_blob_sync()
    return rid

def sync_reference_finance(c,ref_type,ref_id,unit,entry_type,category,description,amount):
    amount=float(amount or 0)
    existing=c.execute(
        'SELECT id FROM finance WHERE ref_type=? AND ref_id=? ORDER BY id LIMIT 1',
        (ref_type,ref_id),
    ).fetchone()
    if existing:
        c.execute(
            'UPDATE finance SET unit=?,type=?,category=?,description=?,amount=? WHERE id=?',
            (unit,entry_type,category,description,amount,existing['id']),
        )
    elif amount>0:
        c.execute(
            'INSERT INTO finance(unit,type,category,description,amount,ref_type,ref_id,created_at) VALUES(?,?,?,?,?,?,?,?)',
            (unit,entry_type,category,description,amount,ref_type,ref_id,now()),
        )

def audit(uid,action,entity,eid,details=''):
    try: write('INSERT INTO audit(user_id,action,entity,entity_id,details,created_at) VALUES(?,?,?,?,?,?)',(uid,action,entity,eid,details,now()))
    except: pass

def token(): return secrets.token_urlsafe(18).replace('-','').replace('_','')
def js(v):
    try:return json.dumps(v,ensure_ascii=False)
    except:return '{}'
def safe(s): return html.escape(str(s or ''))
def telegram_field(value):
    return re.sub(r'\s+',' ',re.sub(r'[\x00-\x1f\x7f]',' ',str(value or ''))).strip()
def money_br(value):
    return ('R$ '+f'{float(value or 0):,.2f}').replace(',','X').replace('.',',').replace('X','.')

def normalize_service_device_ids(value,primary=None):
    if value is None:
        values=[] if primary in (None,'') else [primary]
    elif isinstance(value,(list,tuple,set)):
        values=list(value)
    else:
        values=[value]
    ids=[]
    for item in values:
        if item in (None,''): continue
        try: device_id=int(item)
        except (TypeError,ValueError): raise ValueError('Identificador de aparelho inválido.')
        if device_id<=0: raise ValueError('Identificador de aparelho inválido.')
        if device_id not in ids: ids.append(device_id)
    return ids

def replace_service_devices(connection,service_id,device_ids,unit,customer_id):
    if device_ids:
        marks=','.join('?' for _ in device_ids)
        devices=connection.execute('SELECT id,unit,customer_id FROM devices WHERE id IN ('+marks+')',device_ids).fetchall()
        found={int(row['id']):row for row in devices}
        if len(found)!=len(device_ids): raise ValueError('Um ou mais aparelhos selecionados não existem.')
        for device_id in device_ids:
            device=found[device_id]
            if unit not in ('',None,'TODOS') and device['unit'] not in (None,'','TODOS',unit):
                raise ValueError('O aparelho selecionado pertence a outra unidade.')
            if customer_id and device['customer_id'] and int(device['customer_id'])!=int(customer_id):
                raise ValueError('O aparelho selecionado pertence a outro cliente.')
    connection.execute('DELETE FROM service_devices WHERE service_id=?',(service_id,))
    stamp=now()
    connection.executemany(
        'INSERT INTO service_devices(service_id,device_id,created_at) VALUES(?,?,?)',
        [(service_id,device_id,stamp) for device_id in device_ids]
    )

def service_devices_for(service_id,primary_device_id=None):
    linked=rows('SELECT d.id,d.brand,d.model,d.color,d.storage FROM service_devices sd JOIN devices d ON d.id=sd.device_id WHERE sd.service_id=? ORDER BY sd.device_id',(service_id,))
    if linked: return linked
    if primary_device_id:
        device=one('SELECT id,brand,model,color,storage FROM devices WHERE id=?',(primary_device_id,))
        if device: return [device]
    return []

def public_url(handler,path):
    base=(os.environ.get('PUBLIC_BASE_URL') or 'https://kvcell.squareweb.app').strip().rstrip('/')
    if base:
        parsed=urlparse(base)
        if parsed.scheme in ('http','https') and parsed.netloc and not parsed.username and not parsed.password:
            return base+path
        raise ValueError('PUBLIC_BASE_URL deve ser uma URL HTTP(S) válida.')
    host=(handler.headers.get('X-Forwarded-Host') or handler.headers.get('Host') or '').split(',')[0].strip()
    if not re.fullmatch(r'[A-Za-z0-9.-]+(?::[0-9]{1,5})?',host):
        host='localhost:'+str(PORT)
    proto=(handler.headers.get('X-Forwarded-Proto') or '').split(',')[0].strip().lower()
    if proto not in ('http','https'):
        proto='http' if host.startswith('localhost') or host.startswith('127.0.0.1') else 'https'
    return proto+'://'+host+path

def unit_filter(table,unit):
    return ('',[]) if not unit or unit=='TODOS' else (f' WHERE unit=?',[unit])

def dashboard(unit):
    svccond,sargs=unit_filter('services',unit); purcond,pargs=unit_filter('purchases',unit); invcond,iargs=unit_filter('inventory',unit); fincond,fargs=unit_filter('finance',unit)
    income=one('SELECT COALESCE(SUM(amount),0) n FROM finance'+fincond+' AND type="entrada"' if fincond else 'SELECT COALESCE(SUM(amount),0) n FROM finance WHERE type="entrada"',fargs)['n']
    expense=one('SELECT COALESCE(SUM(amount),0) n FROM finance'+fincond+' AND type="saida"' if fincond else 'SELECT COALESCE(SUM(amount),0) n FROM finance WHERE type="saida"',fargs)['n']
    q=lambda sql,a=(): one(sql,a)['n']
    customers=q('SELECT COUNT(*) n FROM customers')
    services=q('SELECT COUNT(*) n FROM services'+svccond+(' AND status NOT IN ("entregue","cancelado")' if svccond else ' WHERE status NOT IN ("entregue","cancelado")'),sargs)
    vitrine=q('SELECT COUNT(*) n FROM purchases'+purcond+(' AND status="vitrine"' if purcond else ' WHERE status="vitrine"'),pargs)
    low=q('SELECT COUNT(*) n FROM inventory'+invcond+(' AND qty<=min_qty' if invcond else ' WHERE qty<=min_qty'),iargs)
    sales=q('SELECT COUNT(*) n FROM sales'+unit_filter('sales',unit)[0],unit_filter('sales',unit)[1])
    status_counts={str(x['status'] or '').strip().lower():int(x['n']) for x in rows('SELECT status,COUNT(*) n FROM services'+svccond+' GROUP BY lower(trim(COALESCE(status,"")))',sargs)}
    service_total=sum(status_counts.values())
    quotecond,qargs=unit_filter('quotes',unit)
    pending_quotes=q('SELECT COUNT(*) n FROM quotes'+quotecond+(' AND lower(COALESCE(status,"")) NOT IN ("aprovado","recusado","expirado")' if quotecond else ' WHERE lower(COALESCE(status,"")) NOT IN ("aprovado","recusado","expirado")'),qargs)
    appcond,aargs=unit_filter('appointments',unit)
    appointments_today=q('SELECT COUNT(*) n FROM appointments'+appcond+(' AND substr(COALESCE(start_at,""),1,10)=?' if appcond else ' WHERE substr(COALESCE(start_at,""),1,10)=?'),aargs+[date.today().isoformat()])
    fiadocond,fiadoargs=unit_filter('fiado_accounts',unit)
    credit_outstanding=q('SELECT COALESCE(SUM(MAX(0,COALESCE(balance,0))),0) n FROM fiado_accounts'+fiadocond,fiadoargs)
    salescond,salesargs=unit_filter('sales',unit)
    recent_sales=rows('SELECT s.id,s.unit,s.items,s.total,s.created_at,c.name customer_name FROM sales s LEFT JOIN customers c ON c.id=s.customer_id'+(' WHERE s.unit=?' if unit and unit!='TODOS' else '')+' ORDER BY s.id DESC LIMIT 5',salesargs)
    recent_services=rows('SELECT s.id,s.unit,s.description,s.status,s.created_at,c.name customer_name FROM services s LEFT JOIN customers c ON c.id=s.customer_id'+(' WHERE s.unit=?' if unit and unit!='TODOS' else '')+' ORDER BY s.id DESC LIMIT 5',sargs)
    activity_rows=rows('SELECT tag,user_name,action,entity,entity_id,created_at FROM activity_log'+(' WHERE unit=?' if unit and unit!='TODOS' else '')+' ORDER BY id DESC LIMIT 8',unit_filter('activity_log',unit)[1])
    return {'customers':customers,'open_services':services,'vitrine':vitrine,'low_stock':low,'income':float(income or 0),'expense':float(expense or 0),'sales':sales,
            'service_total':service_total,'services_in_progress':status_counts.get('em andamento',0),
            'services_waiting_approval':status_counts.get('aguardando aprovação',0)+status_counts.get('aguardando aprovacao',0)+status_counts.get('pendente aprovação',0)+status_counts.get('pendente aprovacao',0),
            'services_waiting_parts':status_counts.get('aguardando peça',0)+status_counts.get('aguardando peças',0)+status_counts.get('aguardando pecas',0),
            'services_ready':status_counts.get('pronto',0),'services_completed':status_counts.get('finalizado',0)+status_counts.get('concluído',0)+status_counts.get('concluido',0),
            'services_delivered':status_counts.get('entregue',0),'pending_quotes':pending_quotes,'appointments_today':appointments_today,
            'credit_outstanding':float(credit_outstanding or 0),'recent_sales':recent_sales,'recent_services':recent_services,'recent_activity':activity_rows}

class Handler(BaseHTTPRequestHandler):
    server_version='KV-CELL-PREMIUM/4000.0'
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
        c=self.headers.get('Cookie',''); sid=''
        for part in c.split(';'):
            if part.strip().startswith('sid='): sid=part.strip()[4:]
        u=SESSIONS.get(sid)
        if not u:
            self.json({'error':'Não autenticado'},401); return None
        last=SESSION_LAST_ACTIVITY.get(sid,0)
        if not last or time.time()-last>=SESSION_IDLE_SECONDS:
            SESSIONS.pop(sid,None); SESSION_LAST_ACTIVITY.pop(sid,None)
            self.json({'error':'Sessão expirada após 30 minutos sem atividade'},401,headers={'Set-Cookie':'sid=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax'}); return None
        fresh=one('SELECT id,name,email,role,unit,permissions,active FROM users WHERE id=?',(u.get('id'),))
        if not fresh or not fresh.get('active'):
            SESSIONS.pop(sid,None); SESSION_LAST_ACTIVITY.pop(sid,None)
            self.json({'error':'Usuário inativo ou removido'},401,headers={'Set-Cookie':'sid=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax'}); return None
        u=fresh; SESSIONS[sid]=u
        SESSION_LAST_ACTIVITY[sid]=time.time()
        return u
    def authorize_module(self,u,path):
        if u.get('role')=='admin': return True
        route=path[5:].strip('/').split('/',1)[0] if path.startswith('/api/') else ''
        direct={
            'me':None,'dashboard':'dashboard','chart':'finance','profit':'finance',
            'settings':'settings','notifications':'dashboard','mark-notifications':'dashboard',
            'export':'admin','search':'search','customer-search':'customers',
            'customer-stats':'customers','films':'films','activity':'logs','audit':'logs',
            'undo':'admin','ai':'admin','fiado':'fiado','fiado-payments':'fiado',
            'appointments':'agenda','technicians':'technicians','technician-stats':'technicians',
            'suppliers':'suppliers','guarantees':'guarantees','community':'community',
            'referrals':'referrals','catalog-products':'catalog','catalog':'catalog',
            'services':'services','unlocks':'unlock','quotes':'quotes','sales':'pdv',
            'diagnostics':'diagnostics',
            'pdv':'pdv','finance':'finance','inventory':'inventory','purchases':'purchases',
            'customers':'customers','devices':'devices','forgotten':'forgotten',
            'contracts':'contracts','users':'users','chat':'chat_units','models':'pricing',
            'film_compat':'films','film-compat':'films',
            'upload':'uploads','adb':'adb','radar':'customers',
        }
        if route=='telegram':
            action=path[5:].strip('/').split('/')
            module={'service':'services','quote':'quotes'}.get(action[1] if len(action)>1 else '','admin')
        else:
            module=direct.get(route,'admin')
        if path=='/api/export/inventory.csv':module='inventory'
        if module is None:return True
        if module in ('users','admin','settings') and u.get('role')!='admin':
            self.json({'error':'Somente administrador pode acessar este módulo.'},403)
            return False
        if module=='finance' and u.get('role') not in ('admin','gerente'):
            self.json({'error':'Somente administrador ou gerente pode acessar o financeiro.'},403)
            return False
        try:
            permissions=u.get('permissions') or '{}'
            if isinstance(permissions,str):permissions=json.loads(permissions)
        except (TypeError,json.JSONDecodeError):
            permissions={}
        if not isinstance(permissions,dict):permissions={}
        if module=='search':
            return permissions.get('all') is True or any(permissions.get(key) is True for key in ('customers','devices','services','purchases'))
        if permissions.get('all') is True or permissions.get(module) is True:return True
        if module=='uploads':
            return any(permissions.get(key) is True for key in ('services','purchases','devices','forgotten','contracts','customers'))
        self.json({'error':f'Sem permissão para acessar o módulo {module}.'},403)
        return False
    def do_GET(self):
        p=urlparse(self.path); path=p.path; qs=parse_qs(p.query)
        if path=='/api/health': return self.json({'ok':True,'app':'KV CELL OS PRO','version':'4000.0','port':PORT,'time':now()})
        if path.startswith('/api/ai/') or path=='/api/mdm' or path.startswith('/api/mdm/'):
            return self.json({'error':'Este módulo foi removido da versão ativa.'},404)
        if path.startswith('/public/mdm/'):
            return self.json({'error':'Este módulo foi removido da versão ativa.'},404)
        if path.startswith('/public/'):
            return self.public(path,qs)
        if path.startswith('/catalog/'):
            return self.public('/public'+path,qs)
        if path=='/': return self.send(200,INDEX,'text/html')
        if path.startswith('/static/'):
            rel=urllib.parse.unquote(path[len('/static/'):]).lstrip('/')
            fp=os.path.abspath(os.path.join(BASE,'static',rel))
            static_root=os.path.abspath(os.path.join(BASE,'static'))
            if fp.startswith(static_root+os.sep) and os.path.isfile(fp):
                ext=os.path.splitext(fp)[1].lower()
                mime={
                    '.css':'text/css',
                    '.js':'application/javascript',
                    '.json':'application/json',
                    '.png':'image/png',
                    '.jpg':'image/jpeg',
                    '.jpeg':'image/jpeg',
                    '.svg':'image/svg+xml',
                    '.ico':'image/x-icon',
                    '.woff':'font/woff',
                    '.woff2':'font/woff2',
                    '.ttf':'font/ttf',
                    '.webp':'image/webp',
                }.get(ext,'application/octet-stream')
                return self.send(200,open(fp,'rb').read(),mime)
            return self.send(404,b'Not found','text/plain')
        u=self.require()
        if not u:return
        if not self.authorize_module(u,path):return
        if u.get('role')!='admin' and u.get('unit') not in (None,'','TODOS'):
            qs['unit']=[u['unit']]
        if path=='/api/me': return self.json({'user':u})
        if path=='/api/dashboard': return self.json(dashboard(qs.get('unit',['TODOS'])[0]))
        if path=='/api/chart': return self.chart(qs.get('unit',['TODOS'])[0])
        if path=='/api/profit': return self.profit_api(qs.get('unit',['TODOS'])[0])
        if path=='/api/settings': return self.json({r['k']:r['v'] for r in rows('SELECT k,v FROM settings')})
        if path=='/api/notifications': return self.json(rows('SELECT * FROM notifications ORDER BY id DESC LIMIT 30'))
        if path=='/api/invoices': return self.json([])
        if path=='/api/export/backup':
            if u.get('role')!='admin': return self.json({'error':'Somente administrador pode exportar o backup.'},403)
            return self.backup()
        if path=='/api/export/inventory.csv': return self.inventory_csv(qs.get('unit',['TODOS'])[0])
        if path=='/api/search': return self.search(qs.get('q',[''])[0],u)
        if path=='/api/customer-search': return self.customer_search(qs.get('q',[''])[0])
        if path=='/api/customer-stats': return self.customer_stats(int(qs.get('id',['0'])[0] or 0))
        if path=='/api/films/search': return self.film_search(qs.get('q',[''])[0])
        if path=='/api/films/external': return self.film_external_search(qs.get('q',[''])[0])
        if path=='/api/ai/status': return self.ai_status()
        if path=='/api/activity': return self.activity_api(qs)
        if path=='/api/undo': return self.undo_list()
        if path=='/api/ai/chat': return self.ai_chat_list()
        if path=='/api/fiado': return self.fiado_api(qs)
        if path=='/api/fiado-payments':
            account=one('SELECT unit FROM fiado_accounts WHERE id=?',(int(qs.get('id',['0'])[0] or 0),))
            if account and u.get('role')!='admin' and u.get('unit') not in (None,'','TODOS') and account.get('unit')!=u['unit']:
                return self.json({'error':'Este fiado pertence a outra unidade.'},403)
            return self.json(rows('SELECT * FROM fiado_payments WHERE account_id=? ORDER BY id DESC',(int(qs.get('id',['0'])[0] or 0),)))
        if path=='/api/appointments': return self.json(self.resource_with_customer('appointments',qs))
        if path=='/api/technicians': return self.json(rows('SELECT * FROM technicians ORDER BY id DESC LIMIT 500'))
        if path=='/api/technician-stats': return self.technician_stats(qs.get('unit',['TODOS'])[0])
        if path=='/api/suppliers': return self.json(rows('SELECT * FROM suppliers ORDER BY id DESC LIMIT 500'))
        if path=='/api/guarantees': return self.json(self.resource_with_customer('guarantees',qs))
        if path=='/api/community': return self.json(rows('SELECT * FROM community_posts ORDER BY id DESC LIMIT 200'))
        if path=='/api/referrals': return self.json(self.resource_with_customer('referrals',qs))
        if path=='/api/catalog-products': return self.json(rows('SELECT * FROM catalog_products ORDER BY id DESC LIMIT 500'))
        if path=='/api/mdm': return self.mdm_list(qs)
        if path=='/api/mdm/qr': return self.mdm_qr(qs)
        if path=='/api/mdm/device': return self.mdm_device(qs)
        if path=='/api/mdm/events': return self.mdm_events(qs)
        if path=='/api/mdm/installments': return self.mdm_installments(qs)
        if path.startswith('/api/'): return self.list_api(path[5:],qs)
        self.send(404,b'Not found','text/plain')
    def do_POST(self):
        p=urlparse(self.path); path=p.path; data=self.body()
        if path.startswith('/api/ai/') or path=='/api/mdm' or path.startswith('/api/mdm/'):
            return self.json({'error':'Este módulo foi removido da versão ativa.'},404)
        if path.startswith('/public/mdm/'):
            return self.json({'error':'Este módulo foi removido da versão ativa.'},404)
        if path=='/api/login': return self.login(data)
        if path=='/api/logout': return self.logout()
        if path.startswith('/public/quote/'):
            return self.public_quote_action(path.split('/')[-1], data)
        if path.startswith('/public/mdm/enroll/'):
            return self.mdm_enroll(path.split('/')[-1], data)
        if path.startswith('/public/mdm/heartbeat/'):
            return self.mdm_heartbeat(path.split('/')[-1], data)
        if path.startswith('/public/mdm/payment/'):
            return self.mdm_payment_request(path.split('/')[-1], data)
        if path.startswith('/public/os/'):
            return self.public_os_action(path.split('/')[-1], data)
        if path.startswith('/public/'): return self.send(405,b'','text/plain')
        u=self.require()
        if not u:return
        if not self.authorize_module(u,path):return
        if u.get('role')!='admin' and u.get('unit') not in (None,'','TODOS'):
            data['unit']=u['unit']
        telegram_match=re.fullmatch(r'/api/telegram/(service|quote)/([0-9]+)',path)
        if telegram_match:return self.telegram_client_message(telegram_match.group(1),telegram_match.group(2),u)
        if path=='/api/upload': return self.upload(data,u)
        if path=='/api/settings': return self.save_settings(data,u)
        if path=='/api/pdv/checkout': return self.pdv_checkout(data,u)
        if path=='/api/mark-notifications': return self.json({'ok':True})
        if path=='/api/ai/evaluate': return self.ai_evaluate(data,u)
        if path=='/api/ai/price': return self.ai_price(data,u)
        if path=='/api/ai/chat': return self.ai_chat(data,u)
        if path=='/api/undo': return self.undo_action(data,u)
        if path=='/api/fiado/payment': return self.fiado_payment(data,u)
        if path=='/api/mdm/action': return self.mdm_action(data,u)
        if path=='/api/mdm/receive': return self.mdm_receive(data,u)
        if path=='/api/mdm/create': return self.mdm_create(data,u)
        if path.startswith('/api/'):
            try:return self.create_api(path[5:],data,u)
            except sqlite3.IntegrityError as e:return self.json({'error':'Registro inválido ou duplicado: '+str(e)},400)
            except Exception as e:return self.json({'error':'Falha ao salvar: '+str(e)},500)
        self.send(404,b'Not found','text/plain')
    def do_PUT(self):
        p=urlparse(self.path); u=self.require()
        if not u:return
        if not self.authorize_module(u,p.path):return
        if p.path.startswith('/api/ai/') or p.path=='/api/mdm' or p.path.startswith('/api/mdm/'):
            return self.json({'error':'Este módulo foi removido da versão ativa.'},404)
        data=self.body(); path=p.path
        if path.startswith('/api/'):
            try:return self.update_api(path[5:],data,u)
            except sqlite3.IntegrityError as e:return self.json({'error':'Registro inválido ou duplicado: '+str(e)},400)
        self.send(404,b'Not found','text/plain')
    def login(self,d):
        cutoff=time.time()-SESSION_IDLE_SECONDS
        for old_sid,last_seen in list(SESSION_LAST_ACTIVITY.items()):
            if last_seen<cutoff:
                SESSIONS.pop(old_sid,None); SESSION_LAST_ACTIVITY.pop(old_sid,None)
        r=one('SELECT id,name,email,role,unit,permissions FROM users WHERE email=? AND password_hash=? AND active=1',(d.get('email','').strip().lower(),ph(d.get('password',''))))
        if not r:
            remote=self.client_address[0] if self.client_address else 'unknown'
            last=TELEGRAM_FAILED_LOGIN_LAST.get(remote,0)
            if time.time()-last>=60:
                TELEGRAM_FAILED_LOGIN_LAST[remote]=time.time()
                telegram_notify('KV CELL • TENTATIVA DE LOGIN NÃO VALIDADA\nNenhuma credencial ou dado pessoal foi incluído.')
            return self.json({'error':'E-mail ou senha inválidos'},401)
        sid=secrets.token_urlsafe(32); SESSIONS[sid]=r; SESSION_LAST_ACTIVITY[sid]=time.time(); audit(r['id'],'login','users',r['id'])
        activity(r,'LOGIN','Login realizado','users',r['id'])
        return self.json({'ok':True,'user':r},headers={'Set-Cookie':f'sid={sid}; Path=/; HttpOnly; SameSite=Lax'})
    def logout(self):
        u=self.user();
        if u:
            audit(u['id'],'logout','users',u['id'])
            activity(u,'LOGIN','Logout realizado','users',u['id'])
        c=self.headers.get('Cookie',''); sid=''
        for p in c.split(';'):
            if p.strip().startswith('sid='): sid=p.strip()[4:]
        SESSIONS.pop(sid,None); SESSION_LAST_ACTIVITY.pop(sid,None); return self.json({'ok':True},headers={'Set-Cookie':'sid=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax'})
    def telegram_client_message(self,kind,rid,u):
        try: rid=int(rid)
        except (TypeError,ValueError): return self.json({'error':'Identificador inválido.'},400)
        table='services' if kind=='service' else 'quotes' if kind=='quote' else None
        if not table:return self.json({'error':'Tipo de mensagem inválido.'},404)
        record=one('SELECT * FROM '+table+' WHERE id=?',(rid,))
        if not record:return self.json({'error':'Registro não encontrado.'},404)
        if u.get('role')!='admin' and u.get('unit') not in (None,'','TODOS') and record.get('unit') not in (None,u['unit']):
            return self.json({'error':'Este registro pertence a outra unidade.'},403)
        customer=one('SELECT name,phone FROM customers WHERE id=?',(record.get('customer_id'),)) if record.get('customer_id') else None
        customer=customer or {}
        name=telegram_field(customer.get('name') or 'Cliente')
        phone=telegram_field(customer.get('phone') or '—')
        if kind=='service':
            device_names=[]
            for device in service_devices_for(rid,record.get('device_id')):
                device_name=telegram_field(' '.join(str(device.get(field) or '').strip() for field in ('brand','model')))
                if device_name:device_names.append(device_name)
            model=telegram_field(', '.join(dict.fromkeys(device_names)) or 'Não informado')
            description=telegram_field(record.get('description') or 'Não informada')
            try:
                details=json.loads(record.get('details_json') or '{}')
            except (TypeError,json.JSONDecodeError):
                details={}
            items=details.get('items',[]) if isinstance(details,dict) else []
            item_lines=[]
            if isinstance(items,list):
                for item in items:
                    if not isinstance(item,dict):continue
                    label=telegram_field(item.get('description') or item.get('name') or item.get('label') or '')
                    if not label:continue
                    try:value=float(item.get('total',item.get('price',0)) or 0)
                    except (TypeError,ValueError):value=0
                    try:qty=float(item.get('qty',1) or 1)
                    except (TypeError,ValueError):qty=1
                    item_lines.append(f'• {label} ({qty:g}x): {money_br(value*qty)}')
            service=telegram_field(details.get('service') or (', '.join(
                telegram_field(item.get('description') or item.get('name') or '')
                for item in items if isinstance(item,dict) and (item.get('description') or item.get('name'))
            ) if isinstance(items,list) else '') or record.get('kind') or 'Conserto')
            if not item_lines:item_lines=[f'• {description}: {money_br(record.get("price"))}']
            text='\n'.join([
                f'OS#{rid}',f'MODELO: {model}',f'SERVIÇO: {service}',
                f'CLIENTE: {name} / {phone}',f'DESCRIÇÃO: {description}',
                'VALOR COMPLETO COM DESCRIÇÃO DE CADA ITEM E VALOR:',
                *item_lines,f'TOTAL: {money_br(record.get("price"))}',
                'Agradecemos pela confiança na KV CELL! Estamos à disposição.',
            ])
        else:
            try:items=json.loads(record.get('items') or '[]')
            except (TypeError,json.JSONDecodeError):items=[]
            device=one('SELECT brand,model FROM devices WHERE id=?',(record.get('device_id'),)) if record.get('device_id') else None
            model=telegram_field(' '.join(str((device or {}).get(field) or '').strip() for field in ('brand','model')) or 'Não informado')
            descriptions=[telegram_field(x.get('description') or x.get('name') or '') for x in items if isinstance(x,dict)]
            service=telegram_field(', '.join(filter(None,descriptions)) or record.get('quote_type') or 'Serviço técnico')
            item_lines=[]
            for item in items if isinstance(items,list) else []:
                if not isinstance(item,dict):continue
                label=telegram_field(item.get('description') or item.get('name') or 'Peça / serviço')
                quality=telegram_field(item.get('quality') or '')
                try:unit_price=float(item.get('total',item.get('price',0)) or 0)
                except (TypeError,ValueError):unit_price=0
                try:qty=float(item.get('qty',1) or 1)
                except (TypeError,ValueError):qty=1
                item_lines.append(f'• {label}'+(f' — Qualidade: {quality}' if quality else '')+f' — {money_br(unit_price)}'+(f' (quantidade: {qty:g})' if qty!=1 else ''))
            if not item_lines:item_lines=['• Nenhuma peça ou serviço detalhado.']
            description=str(record.get('observations') or record.get('conditions') or 'Conforme avaliação técnica.').strip()
            text='\n'.join([
                f'ORÇAMENTO#{record.get("number") or rid}',f'MODELO: {model}',f'SERVIÇO: {service}',
                f'CLIENTE: {name} / {phone}',f'DESCRIÇÃO: {description}',
                'QUALIDADES DISPONÍVEIS:',
                *item_lines,f'TOTAL: {money_br(record.get("total"))}',
                'GARANTIA: telas com aro têm 90 dias; telas sem aro têm 30 dias. Na troca de tela, película de brinde.',
                'Agradecemos por escolher a KV CELL! Ficamos à disposição.',
            ])
        message=text[:3800]
        if not os.environ.get('TELEGRAM_BOT_TOKEN','').strip() or not os.environ.get('TELEGRAM_CHAT_ID','').strip():
            return self.json({'ok':True,'sent':False,'configured':False,'message':message})
        try:
            _telegram_send(message)
        except RuntimeError as error:
            return self.json({'error':str(error),'sent':False,'configured':True,'message':message},502)
        activity(u,'TELEGRAM','Compartilhou mensagem de cliente no Telegram',table,rid)
        return self.json({'ok':True,'sent':True,'configured':True,'message':message})
    def list_api(self,resource,qs):
        maps={'customers':'customers','devices':'devices','services':'services','unlocks':'unlocks','diagnostics':'diagnostics','purchases':'purchases','inventory':'inventory','models':'models','quotes':'quotes','sales':'sales','finance':'finance','forgotten':'forgotten','contracts':'contracts','users':'users','chat':'chat','audit':'audit','appointments':'appointments','technicians':'technicians','suppliers':'suppliers','guarantees':'guarantees','community':'community_posts','referrals':'referrals','catalog-products':'catalog_products'}
        if resource not in maps:return self.json({'error':'Recurso inválido'},404)
        current=self.user() or {}
        if resource=='users' and current.get('role')!='admin': return self.json({'error':'Somente administrador pode consultar usuários.'},403)
        if resource=='finance' and current.get('role') not in ('admin','gerente'): return self.json({'error':'Sem permissão para consultar o financeiro.'},403)
        table=maps[resource]; unit=qs.get('unit',['TODOS'])[0]
        wh=[]; args=[]
        if unit!='TODOS' and table not in ('customers','users','models'): wh.append('unit=?');args.append(unit)
        if resource=='services' and qs.get('kind',[''])[0]:wh.append('kind=?');args.append(qs['kind'][0])
        if qs.get('customer_id',[''])[0] and table in ('customers','devices','services','unlocks','diagnostics','purchases','quotes','sales','contracts'):
            wh.append('customer_id=?');args.append(int(qs['customer_id'][0]))
        columns='id,name,email,role,unit,permissions,active,created_at' if resource=='users' else '*'
        sql='SELECT '+columns+' FROM '+table+(' WHERE '+' AND '.join(wh) if wh else '')+' ORDER BY id DESC LIMIT 500'
        data=rows(sql,args)
        if resource in ('services','unlocks','quotes'):
            for x in data:
                if not str(x.get('public_token') or '').strip():
                    t=secrets.token_urlsafe(18).replace('-','').replace('_','')
                    try:
                        write(f"UPDATE {table} SET public_token=? WHERE id=?",(t,x['id']))
                        x['public_token']=t
                    except Exception as e:
                        print('KV CELL PUBLIC TOKEN MIGRATION:',repr(e),flush=True)
                        return self.json({'error':'Não foi possível preparar o link público deste registro.'},500)
        if resource=='services':
            for x in data:
                devices=service_devices_for(x['id'],x.get('device_id'))
                x['device_ids']=[d['id'] for d in devices]
                x['devices']=devices
                x['public_url']=public_url(self,'/public/os/'+urllib.parse.quote(str(x.get('public_token') or ''),safe=''))
        if resource in ('services','unlocks'):
            for x in data:
                if x.get('customer_id'):
                    c=one('SELECT name,phone FROM customers WHERE id=?',(x['customer_id'],)); x['customer_name']=c['name'] if c else ''; x['customer_phone']=c['phone'] if c else ''
        if resource=='diagnostics':
            for x in data:
                if x.get('customer_id'):
                    c=one('SELECT name,phone FROM customers WHERE id=?',(x['customer_id'],))
                    x['customer_name']=c['name'] if c else ''
                    x['customer_phone']=c['phone'] if c else ''
                if x.get('device_id'):
                    device=one('SELECT brand,model,imei FROM devices WHERE id=?',(x['device_id'],))
                    x['device_label']=' '.join(str(device.get(k) or '') for k in ('brand','model')).strip() if device else ''
        return self.json(data)
    def resource_with_customer(self,table,qs):
        unit=qs.get('unit',['TODOS'])[0]
        wh=[]; args=[]
        if unit!='TODOS': wh.append('unit=?'); args.append(unit)
        sql='SELECT * FROM '+table+(' WHERE '+' AND '.join(wh) if wh else '')+' ORDER BY id DESC LIMIT 500'
        data=rows(sql,args)
        for x in data:
            cid=x.get('customer_id')
            if cid:
                c=one('SELECT name,phone,document FROM customers WHERE id=?',(cid,))
                x['customer_name']=c['name'] if c else ''; x['customer_phone']=c['phone'] if c else ''; x['customer_document']=c['document'] if c else ''
        return data

    def fiado_api(self,qs):
        unit=qs.get('unit',['TODOS'])[0]
        sql='SELECT f.*,c.name customer_name,c.phone customer_phone,COALESCE((SELECT SUM(p.amount) FROM fiado_payments p WHERE p.account_id=f.id),0) paid_total FROM fiado_accounts f LEFT JOIN customers c ON c.id=f.customer_id'
        args=[]
        if unit!='TODOS': sql+=' WHERE f.unit=?'; args.append(unit)
        sql+=' ORDER BY f.id DESC LIMIT 500'
        data=rows(sql,args); today=date.today().isoformat()
        for x in data:
            x['balance']=max(0,float(x.get('total') or 0)-float(x.get('down_payment') or 0)-float(x.get('paid_total') or 0))
            if x['balance']<=0: x['status']='pago'
            elif x.get('due_date') and x['due_date']<today: x['status']='atrasado'
        return self.json(data)

    def fiado_payment(self,d,u):
        aid=int(d.get('account_id') or 0); acc=one('SELECT * FROM fiado_accounts WHERE id=?',(aid,))
        if not acc:return self.json({'error':'Fiado não encontrado.'},404)
        if u.get('role')!='admin' and u.get('unit') not in (None,'','TODOS') and acc.get('unit')!=u['unit']:
            return self.json({'error':'Este fiado pertence a outra unidade.'},403)
        amount=float(d.get('amount') or 0)
        if amount<=0:return self.json({'error':'Informe um valor de pagamento maior que zero.'},400)
        paid=float(one('SELECT COALESCE(SUM(amount),0) n FROM fiado_payments WHERE account_id=?',(aid,))['n'] or 0)
        balance=max(0,float(acc['total'] or 0)-float(acc['down_payment'] or 0)-paid)
        if amount>balance+0.01: amount=balance
        if amount<=0:return self.json({'error':'Este fiado já está quitado.'},400)
        rid=write('INSERT INTO fiado_payments(account_id,amount,payment,paid_at,notes,created_at) VALUES(?,?,?,?,?,?)',(aid,amount,d.get('payment','PIX'),d.get('paid_at') or date.today().isoformat(),d.get('notes'),now()))
        write('INSERT INTO finance(unit,type,category,description,amount,ref_type,ref_id,created_at) VALUES(?,?,?,?,?,?,?,?)',(acc['unit'],'entrada','Fiado / Recebimento',acc['description'] or 'Recebimento de fiado',amount,'fiado_payment',rid,now()))
        newbal=max(0,balance-amount); status='pago' if newbal<=0.009 else ('atrasado' if acc['due_date'] and acc['due_date']<date.today().isoformat() else 'aberto')
        write('UPDATE fiado_accounts SET balance=?,status=? WHERE id=?',(newbal,status,aid))
        activity(u,'LOG','Recebeu parcela do fiado','fiado',aid,js({'amount':amount,'payment':d.get('payment','PIX')}))
        return self.json({'ok':True,'id':rid,'balance':newbal,'status':status})

    def pdv_checkout(self,d,u):
        items=d.get('items')
        if not isinstance(items,list) or not items:
            return self.json({'error':'O carrinho está vazio.'},400)
        try:
            purchase_ids=[int(item.get('purchase_id') or 0) for item in items]
            discount=float(d.get('discount') or 0)
            customer_id=int(d.get('customer_id') or 0) or None
        except (TypeError,ValueError):
            return self.json({'error':'Carrinho ou desconto inválido.'},400)
        if any(not pid for pid in purchase_ids) or len(set(purchase_ids))!=len(purchase_ids):
            return self.json({'error':'Cada aparelho deve aparecer uma única vez no carrinho.'},400)
        payment=str(d.get('payment') or 'PIX').strip()
        is_credit=payment.casefold() in ('fiado','fiado/crediário','fiado/crediario','crediário','crediario')
        unit=str(d.get('unit') or u.get('unit') or 'TODOS').strip().upper()
        if unit not in ('LAGOS','MAGÉ','TODOS'):
            return self.json({'error':'Unidade inválida para o PDV.'},400)
        if customer_id and not one('SELECT id FROM customers WHERE id=?',(customer_id,)):
            return self.json({'error':'Cliente selecionado não existe.'},400)

        c=db(); sale_ids=[]; fiado_ids=[]
        try:
            c.execute('BEGIN IMMEDIATE')
            purchases=[]
            for pid in purchase_ids:
                row=c.execute('SELECT * FROM purchases WHERE id=?',(pid,)).fetchone()
                if not row:
                    c.rollback()
                    return self.json({'error':f'Aparelho da compra #{pid} não encontrado.'},404)
                purchase=dict(row)
                if purchase.get('sold') or purchase.get('status')!='vitrine':
                    c.rollback()
                    return self.json({'error':f'O aparelho {purchase.get("brand","")} {purchase.get("model","")} não está mais disponível na vitrine.'},409)
                if unit!='TODOS' and purchase.get('unit')!=unit:
                    c.rollback()
                    return self.json({'error':'O carrinho contém aparelho de outra unidade.'},403)
                if c.execute('SELECT 1 FROM sales WHERE purchase_id=? LIMIT 1',(pid,)).fetchone():
                    c.rollback()
                    return self.json({'error':'Este aparelho já possui uma venda registrada.'},409)
                price=float(purchase.get('suggested_price') or 0)
                if price<=0:
                    c.rollback()
                    return self.json({'error':'O aparelho precisa ter preço de venda maior que zero.'},400)
                purchases.append((purchase,price))

            subtotal=sum(price for _,price in purchases)
            if not 0<=discount<=subtotal:
                c.rollback()
                return self.json({'error':'O desconto deve estar entre zero e o subtotal do carrinho.'},400)
            target_total=round(subtotal-discount,2)
            remaining=target_total
            stamp=now()
            for index,(purchase,price) in enumerate(purchases):
                amount=round(target_total*price/subtotal,2) if index<len(purchases)-1 else remaining
                remaining=round(remaining-amount,2)
                if amount<=0:
                    c.rollback()
                    return self.json({'error':'O desconto não pode zerar o valor de um aparelho.'},400)
                description=f"{purchase.get('brand') or ''} {purchase.get('model') or ''}".strip()
                cur=c.execute(
                    'INSERT INTO sales(unit,customer_id,purchase_id,items,total,payment,created_at,payment_fee,net_total,payment_details) VALUES(?,?,?,?,?,?,?,?,?,?)',
                    (purchase['unit'],customer_id,purchase['id'],description,amount,payment,stamp,0,amount,d.get('payment_details')),
                )
                sale_id=cur.lastrowid
                sale_ids.append(sale_id)
                c.execute(
                    "UPDATE purchases SET sold=1,status='vendido',sale_date=?,sale_place='PDV',sale_price=?,sale_payment=?,sale_fee=0 WHERE id=?",
                    (date.today().isoformat(),amount,payment,purchase['id']),
                )
                inv=c.execute("SELECT id FROM inventory WHERE source_type='purchase' AND source_id=?",(purchase['id'],)).fetchone()
                if inv:
                    c.execute("UPDATE inventory SET qty=0,notes=CASE WHEN instr(COALESCE(notes,''),' • VENDIDO NO PDV')>0 THEN notes ELSE COALESCE(notes,'')||' • VENDIDO NO PDV' END WHERE id=?",(inv['id'],))
                else:
                    c.execute(
                        'INSERT INTO inventory(unit,code,name,type,category,qty,min_qty,cost,price,supplier,compatibility,notes,created_at,source_type,source_id) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
                        (purchase['unit'],purchase.get('imei') or 'PUR-'+str(purchase['id']),description,'Aparelho','Vitrine',0,0,float(purchase.get('total_cost') or 0),price,None,'IMEI: '+str(purchase.get('imei') or ''),'Compra e Venda #'+str(purchase['id'])+' • VENDIDO NO PDV',stamp,'purchase',purchase['id']),
                    )
                if purchase.get('device_id'):
                    c.execute("UPDATE devices SET status='Vendido' WHERE id=?",(purchase['device_id'],))
                if not is_credit:
                    c.execute(
                        'INSERT INTO finance(unit,type,category,description,amount,ref_type,ref_id,created_at) VALUES(?,?,?,?,?,?,?,?)',
                        (purchase['unit'],'entrada','Venda',description,amount,'sale',sale_id,stamp),
                    )
                else:
                    due=d.get('due_date') or None
                    cur=c.execute(
                        'INSERT INTO fiado_accounts(unit,customer_id,source_type,source_id,description,total,down_payment,balance,due_date,status,notes,installments,installment_value,frequency,created_at) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
                        (purchase['unit'],customer_id,'sale',sale_id,description,amount,0,amount,due,'aberto',d.get('payment_details'),1,amount,'Mensal (30 dias)',stamp),
                    )
                    fiado_ids.append(cur.lastrowid)
            c.commit()
        except Exception:
            c.rollback()
            raise
        finally:
            c.close()
        schedule_blob_sync()
        for sale_id in sale_ids:
            audit(u['id'],'create','sales',sale_id,js({'pdv_checkout':True,'payment':payment}))
            activity(u,'LOG','Venda finalizada no PDV','sales',sale_id,js({'payment':payment}))
        return self.json({'ok':True,'sale_ids':sale_ids,'fiado_ids':fiado_ids,'total':target_total,'payment':payment})

    def create_api(self,r,d,u):
        if u.get('role')!='admin' and u.get('unit') not in (None,'','TODOS') and r in {
            'devices','services','unlocks','purchases','inventory','quotes','sales',
            'finance','forgotten','contracts','appointments','technicians','suppliers',
            'guarantees','community','referrals','catalog-products','fiado','chat','diagnostics',
        }:
            d['unit']=u['unit']
        if r=='customers':
            rid=write('INSERT INTO customers(type,name,document_type,document,phone_type,phone,email,address,city,birth_date,balance,observations,created_at) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)',(d.get('type','PF'),d.get('name'),d.get('document_type','CPF'),d.get('document'),d.get('phone_type','Celular'),d.get('phone'),d.get('email'),d.get('address'),d.get('city'),d.get('birth_date'),float(d.get('balance') or 0),d.get('observations'),now()))
        elif r=='devices': rid=write('INSERT INTO devices(unit,customer_id,brand,model,imei,serial,color,storage,status,photos,notes,created_at) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),d.get('customer_id') or None,d.get('brand'),d.get('model'),d.get('imei'),d.get('serial'),d.get('color'),d.get('storage'),d.get('status','Em bancada'),js(d.get('photos',[])),d.get('notes'),now()))
        elif r=='services':
            t=token(); price=float(d.get('price') or 0); cm=float(d.get('cost_material') or 0); cl=float(d.get('cost_labor') or 0); ce=float(d.get('cost_extra') or 0); ct=cm+cl+ce; profit=price-ct
            device_ids=normalize_service_device_ids(d.get('device_ids'),d.get('device_id'))
            stamp=now(); unit=d.get('unit','TODOS'); customer_id=d.get('customer_id') or None
            c=db()
            try:
                c.execute('BEGIN IMMEDIATE')
                cur=c.execute('INSERT INTO services(unit,customer_id,device_id,kind,description,checklist,diagnosis,status,technician,technician_id,price,warranty,photos,notes,public_token,created_at,updated_at,cost_material,cost_labor,cost_extra,cost_total,profit,warranty_of_id,details_json) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',(unit,customer_id,device_ids[0] if device_ids else None,d.get('kind','conserto'),d.get('description'),js(d.get('checklist',{})),d.get('diagnosis'),d.get('status','aberto'),d.get('technician'),d.get('technician_id') or None,price,d.get('warranty'),js(d.get('photos',[])),d.get('notes'),t,stamp,stamp,cm,cl,ce,ct,profit,d.get('warranty_of_id') or None,js(d.get('details',{}))))
                rid=cur.lastrowid
                replace_service_devices(c,rid,device_ids,unit,customer_id)
                c.execute('INSERT INTO service_status_history(service_id,status,changed_at,user_id,source) VALUES(?,?,?,?,?)',(rid,d.get('status','aberto'),stamp,u.get('id'),'staff'))
                if d.get('status')=='entregue':
                    if price>0: c.execute('INSERT INTO finance(unit,type,category,description,amount,ref_type,ref_id,created_at) VALUES(?,?,?,?,?,?,?,?)',(unit,'entrada','Serviço',d.get('description') or 'Conserto',price,'service',rid,stamp))
                    if ct>0: c.execute('INSERT INTO finance(unit,type,category,description,amount,ref_type,ref_id,created_at) VALUES(?,?,?,?,?,?,?,?)',(unit,'saida','Custo OS',d.get('description') or 'Custo de serviço',ct,'service_cost',rid,stamp))
                c.commit()
            except Exception:
                c.rollback()
                raise
            finally:
                c.close()
            schedule_blob_sync()
        elif r=='unlocks':
            t=token(); price=float(d.get('price') or 0); cm=float(d.get('cost_material') or 0); cl=float(d.get('cost_labor') or 0); ce=float(d.get('cost_extra') or 0); ct=cm+cl+ce; profit=price-ct
            rid=write('INSERT INTO unlocks(unit,customer_id,device_id,brand,model,imei,kind,checklist,status,operator,technician_id,price,photos,notes,public_token,created_at,cost_material,cost_labor,cost_extra,cost_total,profit,warranty_of_id,details_json) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),d.get('customer_id') or None,d.get('device_id') or None,d.get('brand'),d.get('model'),d.get('imei'),d.get('kind'),js(d.get('checklist',{})),d.get('status','aberto'),d.get('operator'),d.get('technician_id') or None,price,js(d.get('photos',[])),d.get('notes'),t,now(),cm,cl,ce,ct,profit,d.get('warranty_of_id') or None,js(d.get('details',{}))))
            write('UPDATE unlocks SET details_json=? WHERE id=?',(js(d.get('details',{})),rid))
            if price>0: write('INSERT INTO finance(unit,type,category,description,amount,ref_type,ref_id,created_at) VALUES(?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),'entrada','Desbloqueio',d.get('kind') or 'Desbloqueio',price,'unlock',rid,now()))
            if ct>0: write('INSERT INTO finance(unit,type,category,description,amount,ref_type,ref_id,created_at) VALUES(?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),'saida','Custo Desbloqueio',d.get('kind') or 'Custo de desbloqueio',ct,'unlock_cost',rid,now()))
        elif r=='purchases':
            try:
                amount=float(d.get('amount') or 0); expenses=float(d.get('expenses') or 0)
                freight=float(d.get('freight') or 0); sp=float(d.get('suggested_price') or 0)
                sale_price=float(d.get('sale_price') or 0); sale_fee=float(d.get('sale_fee') or 0)
            except (TypeError,ValueError):
                return self.json({'error':'Valores financeiros da compra inválidos.'},400)
            if not all(0<=value<1e12 for value in (amount,expenses,freight,sp,sale_price,sale_fee)):
                return self.json({'error':'Valores financeiros da compra devem ser positivos e finitos.'},400)
            total=amount+expenses+freight
            if sale_fee>sale_price:
                return self.json({'error':'A taxa de venda não pode superar o valor da venda.'},400)
            sold=1 if str(d.get('sold','')).lower() in ('1','true','sim','on') else 0
            status='vendido' if sold else d.get('status','vitrine')
            unit=d.get('unit','TODOS'); description=f"{d.get('brand','')} {d.get('model','')}".strip(); stamp=now()
            c=db()
            try:
                c.execute('BEGIN IMMEDIATE')
                cur=c.execute(
                    'INSERT INTO purchases(unit,customer_id,device_id,brand,model,imei,purchase_date,amount,expenses,freight,total_cost,suggested_price,expected_profit,photos,checklist,observations,status,created_at,sold,sale_date,sale_place,sale_price,sale_payment,sale_installments,sale_fee,sale_notes,details_json) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
                    (unit,d.get('customer_id') or None,d.get('device_id') or None,d.get('brand'),d.get('model'),d.get('imei'),d.get('purchase_date') or date.today().isoformat(),amount,expenses,freight,total,sp,sp-total,js(d.get('photos',[])),js(d.get('checklist',{})),d.get('observations'),status,stamp,sold,d.get('sale_date'),d.get('sale_place'),sale_price,d.get('sale_payment'),int(d.get('sale_installments') or 1),sale_fee,d.get('sale_notes'),js(d.get('details',{}))),
                )
                rid=cur.lastrowid
                c.execute('INSERT INTO finance(unit,type,category,description,amount,ref_type,ref_id,created_at) VALUES(?,?,?,?,?,?,?,?)',(unit,'saida','Compra de aparelho',description,total,'purchase',rid,stamp))
                inventory_name=description or f"Aparelho {rid}"
                c.execute(
                    'INSERT INTO inventory(unit,code,name,type,category,qty,min_qty,cost,price,supplier,compatibility,notes,created_at,source_type,source_id) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
                    (unit,d.get('imei') or ('PUR-'+str(rid)),inventory_name,'Aparelho','Vitrine',0 if sold else 1,0,total,sp,d.get('supplier'),'IMEI: '+str(d.get('imei') or ''),(d.get('observations') or '')+' • Compra e Venda #'+str(rid)+(' • VENDIDO NO PDV' if sold else ''),stamp,'purchase',rid),
                )
                if sold and sale_price>0:
                    c.execute('INSERT INTO finance(unit,type,category,description,amount,ref_type,ref_id,created_at) VALUES(?,?,?,?,?,?,?,?)',(unit,'entrada','Venda de aparelho',description,max(0,sale_price-sale_fee),'purchase_sale',rid,stamp))
                c.commit()
            except Exception:
                c.rollback()
                raise
            finally:
                c.close()
            schedule_blob_sync()
        elif r=='inventory': rid=write('INSERT INTO inventory(unit,code,name,type,category,qty,min_qty,cost,price,supplier,compatibility,notes,created_at) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),d.get('code'),d.get('name'),d.get('type','Peça'),d.get('category'),float(d.get('qty') or 0),float(d.get('min_qty') or 0),float(d.get('cost') or 0),float(d.get('price') or 0),d.get('supplier'),d.get('compatibility'),d.get('notes'),now()))
        elif r=='models': rid=write('INSERT INTO models(brand,model,service_prices,margin,warranty,notes,created_at) VALUES(?,?,?,?,?,?,?)',(d.get('brand'),d.get('model'),js(d.get('service_prices',{})),float(d.get('margin') or 0),d.get('warranty'),d.get('notes'),now()))
        elif r=='quotes':
            num='ORC-'+datetime.now().strftime('%Y%m')+'-'+str(secrets.randbelow(9000)+1000); t=token(); items=d.get('items',[]); total=float(d.get('total') or 0); auto_total=sum(float(x.get('total',x.get('price',0)) or 0) for x in (items or [])); travel_enabled=1 if str(d.get('travel_enabled','0')).lower() in ('1','true','sim','on') else 0; travel_fee=float(d.get('travel_fee') or 0) if travel_enabled else 0; total=(total if total>0 else auto_total+travel_fee); warranty_days=int(d.get('warranty_days') or 0); rid=write('INSERT INTO quotes(number,unit,customer_id,device_id,items,subtotal,total,warranty_type,warranty_days,travel_enabled,travel_fee,quote_type,conditions,observations,valid_until,status,public_token,created_at) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',(num,d.get('unit','TODOS'),d.get('customer_id') or None,d.get('device_id') or None,js(items),float(d.get('subtotal') or total),total,d.get('warranty_type','personalizada'),warranty_days,travel_enabled,travel_fee,d.get('quote_type','servico'),d.get('conditions'),d.get('observations'),d.get('valid_until'),d.get('status','aberto'),t,now()))
            return self.json({'ok':True,'id':rid,'number':num,'public_url':f'/public/quote/{t}'})
        elif r=='sales' and d.get('purchase_id'):
            try:
                item_total=float(d.get('total') or 0)
            except (TypeError,ValueError):
                return self.json({'error':'Valor da venda inválido.'},400)
            purchase=one('SELECT suggested_price FROM purchases WHERE id=?',(d.get('purchase_id'),))
            if not purchase:return self.json({'error':'Aparelho da compra não encontrado.'},404)
            price=float(purchase.get('suggested_price') or 0)
            if item_total<=0 or item_total>price:return self.json({'error':'Valor de venda inválido para o preço cadastrado.'},400)
            return self.pdv_checkout({
                'unit':d.get('unit'),'customer_id':d.get('customer_id'),
                'items':[{'purchase_id':d.get('purchase_id')}],
                'discount':round(price-item_total,2),'payment':d.get('payment'),
                'payment_details':d.get('payment_details'),'due_date':d.get('due_date'),
            },u)
        elif r=='sales':
            try:
                total=float(d.get('total') or 0); fee=float(d.get('payment_fee') or 0)
                net=float(d.get('net_total')) if d.get('net_total') is not None else total-fee
                down=float(d.get('down_payment') or 0)
            except (TypeError,ValueError):
                return self.json({'error':'Valores financeiros da venda inválidos.'},400)
            if not all(0<=value<1e12 for value in (total,fee,net,down)) or fee>total or net>total or down>total:
                return self.json({'error':'Total, taxa, líquido ou entrada da venda são inválidos.'},400)
            unit=d.get('unit','TODOS'); payment=str(d.get('payment') or '').strip()
            is_credit=payment.casefold() in ('fiado','fiado/crediário','fiado/crediario','crediário','crediario')
            stamp=now(); c=db()
            try:
                c.execute('BEGIN IMMEDIATE')
                cur=c.execute(
                    'INSERT INTO sales(unit,customer_id,purchase_id,items,total,payment,created_at,payment_fee,net_total,payment_details) VALUES(?,?,?,?,?,?,?,?,?,?)',
                    (unit,d.get('customer_id') or None,None,d.get('items'),total,payment,stamp,fee,net,d.get('payment_details')),
                )
                rid=cur.lastrowid
                if is_credit:
                    balance=max(0,total-down); installments=max(1,int(d.get('installments') or 1))
                    inst_value=float(d.get('installment_value') or (balance/installments if installments else balance))
                    due=d.get('due_date') or None
                    cur=c.execute(
                        'INSERT INTO fiado_accounts(unit,customer_id,source_type,source_id,description,total,down_payment,balance,due_date,status,notes,installments,installment_value,frequency,created_at) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
                        (unit,d.get('customer_id') or None,'sale',rid,d.get('items') or 'Venda fiada',total,down,balance,due,'pago' if balance<=0 else 'aberto',d.get('payment_details'),installments,inst_value,d.get('frequency') or 'Mensal (30 dias)',stamp),
                    )
                    if down>0:
                        c.execute('INSERT INTO finance(unit,type,category,description,amount,ref_type,ref_id,created_at) VALUES(?,?,?,?,?,?,?,?)',(unit,'entrada','Fiado / Entrada',d.get('items') or 'Venda fiada',down,'fiado',cur.lastrowid,stamp))
                else:
                    c.execute('INSERT INTO finance(unit,type,category,description,amount,ref_type,ref_id,created_at) VALUES(?,?,?,?,?,?,?,?)',(unit,'entrada','Venda',d.get('items') or 'Venda',net,'sale',rid,stamp))
                c.commit()
            except Exception:
                c.rollback()
                raise
            finally:
                c.close()
            schedule_blob_sync()
        elif r=='finance':
            if u.get('role') not in ('admin','gerente'): return self.json({'error':'Sem permissão para criar lançamentos financeiros.'},403)
            rid=write('INSERT INTO finance(unit,type,category,description,amount,due_date,paid,created_at) VALUES(?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),d.get('type','entrada'),d.get('category'),d.get('description'),float(d.get('amount') or 0),d.get('due_date'),1 if d.get('paid',True) else 0,now()))
        elif r=='forgotten': rid=write('INSERT INTO forgotten(unit,customer_id,brand,model,imei,possible_owner,phone,photos,checklist,notes,status,created_at) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),d.get('customer_id') or None,d.get('brand'),d.get('model'),d.get('imei'),d.get('possible_owner'),d.get('phone'),js(d.get('photos',[])),js(d.get('checklist',{})),d.get('notes'),d.get('status','aguardando identificação'),now()))
        elif r=='contracts': rid=write('INSERT INTO contracts(unit,type,customer_id,device_id,payload,customer_signature,store_signature,created_at) VALUES(?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),d.get('type'),d.get('customer_id') or None,d.get('device_id') or None,js(d.get('payload',{})),d.get('customer_signature'),d.get('store_signature'),now()))
        elif r=='users':
            if u['role']!='admin':return self.json({'error':'Somente administrador'},403)
            password=str(d.get('password') or '')
            if len(password)<8:return self.json({'error':'A senha inicial deve ter pelo menos 8 caracteres.'},400)
            name=str(d.get('name') or '').strip(); email=str(d.get('email') or '').strip().lower()
            if not name or not re.fullmatch(r'[^@\s]+@[^@\s]+\.[^@\s]+',email):
                return self.json({'error':'Informe um nome e um e-mail válido.'},400)
            role=str(d.get('role','atendente'))
            permissions=d.get('permissions',{'dashboard':True})
            if role not in ('admin','gerente','tecnico','atendente'):
                return self.json({'error':'Perfil de usuário inválido.'},400)
            if isinstance(permissions,str):
                try:permissions=json.loads(permissions)
                except json.JSONDecodeError:return self.json({'error':'Permissões inválidas.'},400)
            if not isinstance(permissions,dict) or any(not isinstance(value,bool) for value in permissions.values()):
                return self.json({'error':'Permissões devem ser uma lista de módulos booleanos.'},400)
            rid=write('INSERT INTO users(name,email,password_hash,role,unit,permissions,created_at) VALUES(?,?,?,?,?,?,?)',(name,email,ph(password),role,d.get('unit','TODOS'),js(permissions),now()))
        elif r=='appointments':
            rid=write('INSERT INTO appointments(unit,customer_id,title,service_type,start_at,end_at,status,technician,notes,created_at) VALUES(?,?,?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),d.get('customer_id') or None,d.get('title'),d.get('service_type'),d.get('start_at'),d.get('end_at'),d.get('status','agendado'),d.get('technician'),d.get('notes'),now()))
        elif r=='technicians':
            rid=write('INSERT INTO technicians(unit,name,phone,email,specialties,active,created_at) VALUES(?,?,?,?,?,?,?)',(d.get('unit','TODOS'),d.get('name'),d.get('phone'),d.get('email'),d.get('specialties'),1 if d.get('active',True) else 0,now()))
        elif r=='suppliers':
            rid=write('INSERT INTO suppliers(unit,name,document,phone,email,address,neighborhood,postal_code,city,latitude,longitude,notes,created_at) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),d.get('name'),d.get('document'),d.get('phone'),d.get('email'),d.get('address'),d.get('neighborhood'),d.get('postal_code'),d.get('city'),d.get('latitude'),d.get('longitude'),d.get('notes'),now()))
        elif r=='guarantees':
            rid=write('INSERT INTO guarantees(unit,customer_id,source_type,source_id,device,description,start_date,end_date,status,notes,created_at) VALUES(?,?,?,?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),d.get('customer_id') or None,d.get('source_type'),d.get('source_id') or None,d.get('device'),d.get('description'),d.get('start_date') or date.today().isoformat(),d.get('end_date'),d.get('status','ativa'),d.get('notes'),now()))
        elif r=='community':
            rid=write('INSERT INTO community_posts(unit,user_name,title,message,type,status,created_at) VALUES(?,?,?,?,?,?,?)',(d.get('unit','TODOS'),u['name'],d.get('title'),d.get('message'),d.get('type','comunicado'),d.get('status','publicado'),now()))
        elif r=='referrals':
            rid=write('INSERT INTO referrals(unit,customer_id,service_name,commission,referrer,link,status,created_at) VALUES(?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),d.get('customer_id') or None,d.get('service_name'),float(d.get('commission') or 0),d.get('referrer'),d.get('link'),d.get('status','ativo'),now()))
        elif r=='catalog-products':
            rid=write('INSERT INTO catalog_products(unit,name,category,price,stock,image,active,created_at) VALUES(?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),d.get('name'),d.get('category'),float(d.get('price') or 0),float(d.get('stock') or 0),d.get('image'),1 if d.get('active',True) else 0,now()))
        elif r=='fiado':
            total=float(d.get('total') or 0); down=float(d.get('down_payment') or 0); balance=max(0,total-down); due=d.get('due_date'); status='pago' if balance<=0 else ('atrasado' if due and due<date.today().isoformat() else 'aberto')
            installments=max(1,int(d.get('installments') or 1)); inst_value=float(d.get('installment_value') or (balance/installments if installments else balance)); frequency=d.get('frequency') or 'Mensal (30 dias)'
            rid=write('INSERT INTO fiado_accounts(unit,customer_id,source_type,source_id,description,total,down_payment,balance,due_date,status,notes,installments,installment_value,frequency,created_at) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),d.get('customer_id') or None,d.get('source_type'),d.get('source_id') or None,d.get('description'),total,down,balance,due,status,d.get('notes'),installments,inst_value,frequency,now()))
            if down>0: write('INSERT INTO finance(unit,type,category,description,amount,ref_type,ref_id,created_at) VALUES(?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),'entrada','Fiado / Entrada',d.get('description') or 'Entrada de fiado',down,'fiado',rid,now()))
        elif r=='film_compat': rid=write('INSERT INTO film_compat(brand,model,aliases,master_code,group_name,screen_size,fit_notes,source_note,confidence,kind,created_at) VALUES(?,?,?,?,?,?,?,?,?,?,?)',(d.get('brand'),d.get('model'),d.get('aliases'),d.get('master_code'),d.get('group_name'),d.get('screen_size'),d.get('fit_notes'),d.get('source_note','cadastro interno'),d.get('confidence','manual'),d.get('kind','pelicula'),now()))
        elif r=='diagnostics':
            brand=str(d.get('brand') or '').strip()
            model=str(d.get('model') or '').strip()
            symptoms=str(d.get('symptoms') or '').strip()
            status=str(d.get('status') or 'aberto').strip().lower()
            try:
                estimate=float(d.get('estimate') or 0)
                tests=d.get('tests') or []
                customer_id=int(d.get('customer_id') or 0) or None
                device_id=int(d.get('device_id') or 0) or None
            except (TypeError,ValueError):
                return self.json({'error':'Dados inválidos para o diagnóstico.'},400)
            if not brand or not model or not symptoms:
                return self.json({'error':'Marca, modelo e relato do problema são obrigatórios.'},400)
            if len(brand)>80 or len(model)>120 or len(symptoms)>4000:
                return self.json({'error':'Revise os limites dos campos do diagnóstico.'},400)
            if status not in ('aberto','em análise','concluído','convertido'):
                return self.json({'error':'Status inválido para o diagnóstico.'},400)
            if not math.isfinite(estimate) or estimate<0 or estimate>=1e12:
                return self.json({'error':'A estimativa deve ser um valor válido e não negativo.'},400)
            if not isinstance(tests,list) or len(tests)>40 or any(not isinstance(item,str) or len(item)>120 for item in tests):
                return self.json({'error':'A lista de testes está inválida.'},400)
            unit=d.get('unit','TODOS')
            if customer_id and not one('SELECT id FROM customers WHERE id=?',(customer_id,)):
                return self.json({'error':'Cliente não encontrado.'},400)
            if device_id:
                device=one('SELECT unit,customer_id FROM devices WHERE id=?',(device_id,))
                if not device:
                    return self.json({'error':'Aparelho não encontrado.'},400)
                if device.get('unit') not in (unit,'TODOS'):
                    return self.json({'error':'O aparelho pertence a outra unidade.'},400)
                if customer_id and device.get('customer_id') not in (None,customer_id):
                    return self.json({'error':'O aparelho selecionado não pertence ao cliente informado.'},400)
            stamp=now()
            rid=write('INSERT INTO diagnostics(unit,customer_id,device_id,brand,model,imei,symptoms,tests,findings,recommendation,status,estimate,notes,created_by,created_at,updated_at) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',(unit,customer_id,device_id,brand,model,str(d.get('imei') or '').strip(),symptoms,js(tests),str(d.get('findings') or '').strip(),str(d.get('recommendation') or '').strip(),status,estimate,str(d.get('notes') or '').strip(),u.get('id'),stamp,stamp))
        elif r=='chat': rid=write('INSERT INTO chat(unit,user_name,message,created_at) VALUES(?,?,?,?)',(d.get('unit','TODOS'),u['name'],d.get('message'),now()))
        else:return self.json({'error':'Recurso não suportado'},404)
        audit(u['id'],'create',r,rid,js(d)); uu=dict(u); uu['unit']=d.get('unit',u.get('unit','TODOS')); activity(uu,'LOG',f'Criou {r}',r,rid,js(d)); push_undo(uu,f'Criou {r}',r,rid,{},d)
        result={'ok':True,'id':rid}
        if r=='services':
            result['public_token']=t
            result['public_url']=public_url(self,'/public/os/'+urllib.parse.quote(t,safe=''))
        return self.json(result)
    def update_api(self,r,d,u):
        table=r; rid=d.get('id')
        if table=='users' and u.get('role')!='admin': return self.json({'error':'Somente administrador pode atualizar usuários.'},403)
        if table=='finance' and u.get('role') not in ('admin','gerente'): return self.json({'error':'Sem permissão para atualizar lançamentos financeiros.'},403)
        allowed={'customers':['type','name','document_type','document','phone_type','phone','email','address','city','birth_date','balance','observations','latitude','longitude'],'models':['brand','model','service_prices','margin','warranty','notes'],'users':['name','email','role','unit','permissions','active'],'services':['unit','customer_id','device_id','device_ids','kind','description','status','diagnosis','technician','technician_id','price','warranty','notes','checklist','photos','cost_material','cost_labor','cost_extra','warranty_of_id','details_json'],'unlocks':['unit','customer_id','device_id','brand','model','kind','status','operator','technician_id','price','notes','checklist','photos','cost_material','cost_labor','cost_extra','warranty_of_id','details_json'],'diagnostics':['unit','customer_id','device_id','brand','model','imei','symptoms','tests','findings','recommendation','status','estimate','notes'],'devices':['unit','customer_id','brand','model','imei','serial','color','storage','status','notes','photos'],'forgotten':['unit','customer_id','brand','model','imei','possible_owner','phone','status','notes','photos','checklist'],'quotes':['unit','customer_id','device_id','status','valid_until','observations','conditions','warranty_type','warranty_days','travel_enabled','travel_fee','items','subtotal','total'],'inventory':['unit','code','name','type','category','qty','min_qty','price','cost','supplier','compatibility','notes'],'purchases':['unit','customer_id','device_id','brand','model','imei','purchase_date','amount','expenses','freight','total_cost','suggested_price','expected_profit','sold','sale_date','sale_place','sale_price','sale_payment','sale_installments','sale_fee','sale_notes','status','observations','photos','checklist','details_json'],'sales':['unit','customer_id','purchase_id','items','total','payment','payment_fee','net_total','payment_details'],'finance':['unit','type','category','description','amount','due_date','paid'],'appointments':['unit','customer_id','title','service_type','start_at','end_at','status','technician','notes'],'technicians':['unit','name','phone','email','specialties','active'],'suppliers':['unit','name','document','phone','email','address','neighborhood','postal_code','city','latitude','longitude','notes'],'guarantees':['unit','customer_id','source_type','source_id','device','description','start_date','end_date','status','notes'],'community':['unit','title','message','type','status'],'referrals':['unit','customer_id','service_name','commission','referrer','link','status'],'catalog-products':['unit','name','category','price','stock','image','active'],'fiado':['unit','customer_id','source_type','source_id','description','total','down_payment','balance','due_date','status','notes','installments','installment_value','frequency']}
        if table not in allowed:return self.json({'error':'Atualização não permitida'},400)
        before=one('SELECT * FROM '+table+' WHERE id=?',(rid,))
        if not before:return self.json({'error':'Registro não encontrado'},404)
        if u.get('role')!='admin' and u.get('unit') not in (None,'','TODOS') and before.get('unit') not in (None,u['unit']):
            return self.json({'error':'Este registro pertence a outra unidade.'},403)
        if u.get('role')!='admin' and u.get('unit') not in (None,'','TODOS') and 'unit' in d and str(d['unit'])!=str(u['unit']):
            return self.json({'error':'Não é permitido mover registros para outra unidade.'},403)
        if table=='users':
            if 'role' in d and d['role'] not in ('admin','gerente','tecnico','atendente'):
                return self.json({'error':'Perfil de usuário inválido.'},400)
            if 'name' in d:
                d['name']=str(d['name'] or '').strip()
                if not d['name']:return self.json({'error':'O nome do usuário é obrigatório.'},400)
            if 'email' in d:
                d['email']=str(d['email'] or '').strip().lower()
                if not re.fullmatch(r'[^@\s]+@[^@\s]+\.[^@\s]+',d['email']):
                    return self.json({'error':'Informe um e-mail válido.'},400)
            if 'permissions' in d:
                permissions=d['permissions']
                if isinstance(permissions,str):
                    try:permissions=json.loads(permissions)
                    except json.JSONDecodeError:return self.json({'error':'Permissões inválidas.'},400)
                if not isinstance(permissions,dict) or any(not isinstance(value,bool) for value in permissions.values()):
                    return self.json({'error':'Permissões devem ser uma lista de módulos booleanos.'},400)
                d['permissions']=permissions
            if 'active' in d and str(d['active']).lower() not in ('0','1','false','true','off','on'):
                return self.json({'error':'Estado ativo inválido.'},400)
            target_role=d.get('role',before.get('role'))
            target_active=str(d.get('active',before.get('active',1))).lower() in ('1','true','on')
            if int(rid)==int(u.get('id') or 0) and (target_role!='admin' or not target_active):
                return self.json({'error':'Não é permitido desativar ou rebaixar a própria conta administrativa.'},409)
            if before.get('role')=='admin' and before.get('active') and (target_role!='admin' or not target_active):
                admins=one("SELECT COUNT(*) n FROM users WHERE role='admin' AND active=1")
                if int((admins or {}).get('n') or 0)<=1:
                    return self.json({'error':'O sistema precisa manter ao menos um administrador ativo.'},409)
        if table=='finance' and before.get('ref_type'):
            return self.json({'error':'Lançamentos vinculados devem ser alterados pelo registro de origem.'},409)
        numeric_fields={
            'sales':('total','payment_fee','net_total'),
            'purchases':('amount','expenses','freight','total_cost','suggested_price','expected_profit','sale_price','sale_fee'),
        }
        if table in numeric_fields:
            try:
                numeric={key:float(d[key]) for key in numeric_fields[table] if key in d and d[key] is not None}
            except (TypeError,ValueError):
                return self.json({'error':'Valores financeiros inválidos.'},400)
            if any(not 0<=value<1e12 for value in numeric.values()):
                return self.json({'error':'Valores financeiros devem ser positivos e finitos.'},400)
            if table=='sales' and numeric.get('payment_fee',float(before['payment_fee'] or 0))>numeric.get('total',float(before['total'] or 0)):
                return self.json({'error':'A taxa de pagamento não pode superar o valor da venda.'},400)
            if table=='sales':
                gross=numeric.get('total',float(before['total'] or 0))
                net=numeric.get('net_total',gross-numeric.get('payment_fee',float(before['payment_fee'] or 0)))
                if net>gross:
                    return self.json({'error':'O valor líquido não pode superar o total da venda.'},400)
            if table=='purchases' and numeric.get('sale_fee',float(before['sale_fee'] or 0))>numeric.get('sale_price',float(before['sale_price'] or 0)):
                return self.json({'error':'A taxa de venda não pode superar o valor da venda.'},400)
        if table=='sales' and any(k in d for k in ('total','payment_fee')) and 'net_total' not in d:
            d['net_total']=float(d.get('total',before['total']) or 0)-float(d.get('payment_fee',before['payment_fee']) or 0)
        if table=='purchases' and any(k in d for k in ('amount','expenses','freight','suggested_price')):
            total_cost=sum(float(d.get(k,before[k]) or 0) for k in ('amount','expenses','freight'))
            d['total_cost']=total_cost
            d['expected_profit']=float(d.get('suggested_price',before['suggested_price']) or 0)-total_cost
        status_values={
            'services':{'aberto','aguardando aprovação','aguardando peça','aguardando dados','em andamento','pronto','finalizado','entregue','cancelado','garantia','garantia em análise','garantia em reparo','aprovado pelo cliente','recusado pelo cliente'},
            'unlocks':{'aberto','em andamento','aguardando dados','pronto','entregue','pendente','cancelado','garantia'},
            'quotes':{'aberto','enviado','aguardando','aprovado','recusado','expirado','cancelado'},
            'appointments':{'agendado','confirmado','concluído','cancelado'},
            'guarantees':{'ativa','em análise','em reparo','encerrada'},
            'diagnostics':{'aberto','em análise','concluído','convertido'},
        }
        if table in status_values and 'status' in d:
            status=str(d.get('status') or '').strip().lower()
            if status not in status_values[table]:
                return self.json({'error':'Status inválido para este registro.'},400)
        fields=[f for f in allowed[table] if f in d and f!='device_ids']; vals=[]
        if not fields and not (table=='services' and 'device_ids' in d):return self.json({'error':'Nenhum campo'},400)
        if table=='diagnostics':
            diagnostic_status=str(d.get('status',before.get('status')) or '').strip().lower()
            if diagnostic_status not in status_values['diagnostics']:
                return self.json({'error':'Status inválido para o diagnóstico.'},400)
            try:
                estimate=float(d.get('estimate',before.get('estimate')) or 0)
                customer_id=int(d.get('customer_id',before.get('customer_id')) or 0) or None
                device_id=int(d.get('device_id',before.get('device_id')) or 0) or None
            except (TypeError,ValueError):
                return self.json({'error':'Os dados do diagnóstico são inválidos.'},400)
            if not math.isfinite(estimate) or estimate<0 or estimate>=1e12:
                return self.json({'error':'A estimativa deve ser um valor válido e não negativo.'},400)
            diagnostic_values={key:d.get(key,before.get(key)) for key in ('brand','model','symptoms')}
            if any(not str(value or '').strip() for value in diagnostic_values.values()):
                return self.json({'error':'Marca, modelo e relato do problema são obrigatórios.'},400)
            if len(str(diagnostic_values['brand']))>80 or len(str(diagnostic_values['model']))>120 or len(str(diagnostic_values['symptoms']))>4000:
                return self.json({'error':'Revise os limites dos campos do diagnóstico.'},400)
            if 'tests' in d and (not isinstance(d['tests'],list) or len(d['tests'])>40 or any(not isinstance(item,str) or len(item)>120 for item in d['tests'])):
                return self.json({'error':'A lista de testes está inválida.'},400)
            target_unit=str(d.get('unit',before.get('unit')) or '').strip()
            if not target_unit or len(target_unit)>80:
                return self.json({'error':'Informe uma unidade válida para o diagnóstico.'},400)
            if customer_id and not one('SELECT id FROM customers WHERE id=?',(customer_id,)):
                return self.json({'error':'Cliente não encontrado.'},400)
            if device_id:
                device=one('SELECT unit,customer_id FROM devices WHERE id=?',(device_id,))
                if not device:
                    return self.json({'error':'Aparelho não encontrado.'},400)
                if device.get('unit') not in (target_unit,'TODOS'):
                    return self.json({'error':'O aparelho pertence a outra unidade.'},400)
                if customer_id and device.get('customer_id') not in (None,customer_id):
                    return self.json({'error':'O aparelho selecionado não pertence ao cliente informado.'},400)
            d['customer_id']=customer_id
            d['device_id']=device_id
            d['estimate']=estimate
            if 'updated_at' not in fields:
                fields.append('updated_at')
                d['updated_at']=now()
        for f in fields:
            v=d[f]; v=js(v) if f in ('checklist','photos','details_json','items','permissions','service_prices','tests') and not isinstance(v,str) else v; vals.append(v)
        device_ids=None
        if table=='services' and 'device_ids' in d:
            device_ids=normalize_service_device_ids(d.get('device_ids'))
            if 'device_id' not in d:
                if 'device_id' in fields:
                    vals[fields.index('device_id')]=device_ids[0] if device_ids else None
                else:
                    fields.append('device_id'); vals.append(device_ids[0] if device_ids else None)
        if table in ('services','unlocks'):
            price=float(d.get('price',before['price']) or 0); cm=float(d.get('cost_material',before['cost_material']) or 0); cl=float(d.get('cost_labor',before['cost_labor']) or 0); ce=float(d.get('cost_extra',before['cost_extra']) or 0);
            for k,v in [('cost_material',cm),('cost_labor',cl),('cost_extra',ce),('cost_total',cm+cl+ce),('profit',price-(cm+cl+ce))]:
                if k not in fields: fields.append(k); vals.append(v)
        if table=='services' and 'updated_at' not in fields: fields.append('updated_at'); vals.append(now())
        vals.append(rid)
        if table=='services':
            c=db()
            try:
                c.execute('BEGIN IMMEDIATE')
                if fields: c.execute('UPDATE services SET '+','.join(f+'=?' for f in fields)+' WHERE id=?',vals)
                if device_ids is not None:
                    replace_service_devices(c,rid,device_ids,d.get('unit',before['unit']),d.get('customer_id',before['customer_id']))
                if 'status' in d and str(d.get('status') or '')!=str(before.get('status') or ''):
                    c.execute('INSERT INTO service_status_history(service_id,status,changed_at,user_id,source) VALUES(?,?,?,?,?)',(rid,str(d.get('status') or ''),now(),u.get('id'),'staff'))
                c.commit()
            except Exception:
                c.rollback()
                raise
            finally:
                c.close()
            schedule_blob_sync()
        elif fields:
            if table in ('sales','purchases'):
                c=db()
                try:
                    c.execute('BEGIN IMMEDIATE')
                    c.execute('UPDATE '+table+' SET '+','.join(f+'=?' for f in fields)+' WHERE id=?',vals)
                    updated=rowdict(c.execute('SELECT * FROM '+table+' WHERE id=?',(rid,)).fetchone())
                    if table=='sales':
                        net=float(updated.get('net_total') or updated.get('total') or 0)
                        sync_reference_finance(c,'sale',rid,updated['unit'],'entrada','Venda',updated.get('items') or 'Venda',net)
                    else:
                        purchase_description=f"{updated.get('brand') or ''} {updated.get('model') or ''}".strip()
                        sync_reference_finance(c,'purchase',rid,updated['unit'],'saida','Compra de aparelho',purchase_description,float(updated.get('total_cost') or 0))
                        has_pdv_sale=c.execute('SELECT 1 FROM sales WHERE purchase_id=? LIMIT 1',(rid,)).fetchone()
                        sale_amount=0 if has_pdv_sale else (max(0,float(updated.get('sale_price') or 0)-float(updated.get('sale_fee') or 0)) if int(updated.get('sold') or 0) else 0)
                        sync_reference_finance(c,'purchase_sale',rid,updated['unit'],'entrada','Venda de aparelho',purchase_description,sale_amount)
                        if str(updated.get('status') or '')=='vitrine' and not int(updated.get('sold') or 0):
                            c.execute("UPDATE inventory SET qty=1,price=?,cost=?,notes=REPLACE(COALESCE(notes,''),' • VENDIDO NO PDV','') WHERE source_type='purchase' AND source_id=?",(float(updated.get('suggested_price') or 0),float(updated.get('total_cost') or 0),rid))
                        if str(updated.get('status') or '') in ('vendido','sucata') or int(updated.get('sold') or 0):
                            c.execute("UPDATE inventory SET qty=0 WHERE source_type='purchase' AND source_id=?",(rid,))
                    c.commit()
                except Exception:
                    c.rollback()
                    raise
                finally:
                    c.close()
                schedule_blob_sync()
            else:
                write('UPDATE '+table+' SET '+','.join(f+'=?' for f in fields)+' WHERE id=?',vals)
        after=one('SELECT * FROM '+table+' WHERE id=?',(rid,))
        # V100: on finalization, process parts/products linked to the OS exactly once.
        if table=='services' and after and str(after['status'] or '')=='entregue' and str(before['status'] or '')!='entregue':
            try:
                det=json.loads(after['details_json'] or '{}')
                if not det.get('stock_processed'):
                    product_total=0.0; product_cost=0.0
                    for item in (det.get('parts') or []):
                        name=str(item.get('name') or '').strip(); qty=float(item.get('qty') or 0)
                        if name and qty>0:
                            inv=one("SELECT * FROM inventory WHERE lower(name)=lower(?) AND (unit=? OR unit='TODOS') ORDER BY CASE WHEN unit=? THEN 0 ELSE 1 END LIMIT 1",(name,after['unit'],after['unit']))
                            if inv: write('UPDATE inventory SET qty=MAX(0,qty-?) WHERE id=?',(qty,inv['id']))
                    for item in (det.get('products') or []):
                        name=str(item.get('name') or '').strip(); qty=float(item.get('qty') or 0); price=float(item.get('price') or 0)
                        if name and qty>0:
                            inv=one("SELECT * FROM inventory WHERE lower(name)=lower(?) AND (unit=? OR unit='TODOS') ORDER BY CASE WHEN unit=? THEN 0 ELSE 1 END LIMIT 1",(name,after['unit'],after['unit']))
                            if inv:
                                write('UPDATE inventory SET qty=MAX(0,qty-?) WHERE id=?',(qty,inv['id']))
                                product_total += price*qty
                                product_cost += float(inv['cost'] or 0)*qty
                    det['stock_processed']=True; det['products_total']=product_total; det['products_cost']=product_cost
                    newprice=float(after['price'] or 0)+product_total; newcost=float(after['cost_total'] or 0)+product_cost
                    write('UPDATE services SET price=?,cost_total=?,profit=?,details_json=? WHERE id=?',(newprice,newcost,newprice-newcost,js(det),rid))
                    after=one('SELECT * FROM services WHERE id=?',(rid,))
            except Exception as e: print('V100 STOCK FINALIZE:',e,flush=True)
        if table in ('services','unlocks'):
            rt='service' if table=='services' else 'unlock'; label='Serviço' if table=='services' else 'Desbloqueio'; costrt=rt+'_cost'
            finance_ok=(table=='unlocks' or str(after['status'] or '')=='entregue')
            if finance_ok:
                description=after['description'] if table=='services' else after['kind']
                for ref_type,entry_type,category,amount in (
                    (rt,'entrada',label,float(after['price'] or 0)),
                    (costrt,'saida','Custo '+('OS' if table=='services' else 'Desbloqueio'),float(after['cost_total'] or 0)),
                ):
                    if amount<=0: continue
                    existing=one('SELECT id FROM finance WHERE ref_type=? AND ref_id=? ORDER BY id LIMIT 1',(ref_type,rid))
                    if existing:
                        write('UPDATE finance SET unit=?,type=?,category=?,description=?,amount=? WHERE id=?',(after['unit'],entry_type,category,description,amount,existing['id']))
                    else:
                        write('INSERT INTO finance(unit,type,category,description,amount,ref_type,ref_id,created_at) VALUES(?,?,?,?,?,?,?,?)',(after['unit'],entry_type,category,description,amount,ref_type,rid,now()))
        if table=='fiado':
            paid=float(one('SELECT COALESCE(SUM(amount),0) n FROM fiado_payments WHERE account_id=?',(rid,))['n'] or 0); bal=max(0,float(after['total'] or 0)-float(after['down_payment'] or 0)-paid); write('UPDATE fiado_accounts SET balance=?,status=? WHERE id=?',(bal,'pago' if bal<=0 else ('atrasado' if after['due_date'] and after['due_date']<date.today().isoformat() else 'aberto'),rid))
        audit(u['id'],'update',table,rid,js(d)); uu=dict(u); uu['unit']=before['unit'] if 'unit' in before.keys() else u.get('unit','TODOS'); activity(uu,'LOG',f'Alterou {table}',table,rid,js(d)); push_undo(uu,f'Alterou {table}',table,rid,dict(before),dict(after)); return self.json({'ok':True,'profit':float(after.get('profit',0) or 0)})
    def do_DELETE(self):
        p=urlparse(self.path); u=self.require()
        if not u:return
        if p.path.startswith('/api/ai/') or p.path=='/api/mdm' or p.path.startswith('/api/mdm/'):
            return self.json({'error':'Este módulo foi removido da versão ativa.'},404)
        if not p.path.startswith('/api/'): return self.send(404,b'Not found','text/plain')
        resource=p.path[5:]; qs=parse_qs(p.query); rid=int(qs.get('id',['0'])[0] or 0)
        if not self.authorize_module(u,p.path):return
        maps={'customers':'customers','devices':'devices','services':'services','unlocks':'unlocks','diagnostics':'diagnostics','purchases':'purchases','inventory':'inventory','models':'models','quotes':'quotes','sales':'sales','finance':'finance','forgotten':'forgotten','film_compat':'film_compat','chat':'chat','appointments':'appointments','technicians':'technicians','suppliers':'suppliers','guarantees':'guarantees','community':'community_posts','referrals':'referrals','catalog-products':'catalog_products','fiado':'fiado_accounts','users':'users','mdm':'mdm_devices'}
        if resource not in maps:return self.json({'error':'Recurso inválido'},404)
        row=one('SELECT * FROM '+maps[resource]+' WHERE id=?',(rid,))
        if not row:return self.json({'error':'Registro não encontrado'},404)
        if u.get('role')!='admin' and u.get('unit') not in (None,'','TODOS') and row.get('unit') not in (None,u['unit']):
            return self.json({'error':'Este registro pertence a outra unidade.'},403)
        if resource=='users':
            if rid==int(u.get('id') or 0):
                return self.json({'error':'Não é permitido excluir a própria conta.'},409)
            if row.get('role')=='admin' and row.get('active'):
                admins=one("SELECT COUNT(*) n FROM users WHERE role='admin' AND active=1")
                if int((admins or {}).get('n') or 0)<=1:
                    return self.json({'error':'O sistema precisa manter ao menos um administrador ativo.'},409)
        if u['role']!='admin' and resource in ('users','finance'):return self.json({'error':'Sem permissão'},403)
        if resource=='finance' and row.get('ref_type'):
            return self.json({'error':'Lançamentos vinculados não podem ser excluídos diretamente.'},409)
        if resource=='sales':
            return self.json({'error':'Vendas não podem ser excluídas fisicamente; preserve o histórico e os lançamentos financeiros.'},409)
        if resource=='purchases' and (
            one('SELECT id FROM sales WHERE purchase_id=? LIMIT 1',(rid,))
            or one("SELECT id FROM finance WHERE ref_id=? AND ref_type IN ('purchase','purchase_sale') LIMIT 1",(rid,))
            or one('SELECT id FROM inventory WHERE source_type=? AND source_id=? LIMIT 1',('purchase',rid))
        ):
            return self.json({'error':'Esta compra possui estoque ou histórico financeiro vinculado e não pode ser excluída.'},409)
        if resource=='quotes':
            return self.json({
                'error':'Orçamentos não podem ser excluídos fisicamente. Atualize o status para cancelado para preservar o histórico.',
            },409)
        if resource=='customers':
            references=(
                ('devices','Aparelhos'),('services','Ordens de serviço'),
                ('unlocks','Desbloqueios'),('purchases','Compras'),
                ('quotes','Orçamentos'),('sales','Vendas'),
                ('contracts','Contratos'),('forgotten','Aparelhos esquecidos'),
                ('appointments','Agendamentos'),('guarantees','Garantias'),
                ('referrals','Indicações'),('fiado_accounts','Contas de fiado'),
                ('mdm_devices','Registros MDM históricos'),
            )
            linked=[label for table,label in references
                    if one(f'SELECT id FROM {table} WHERE customer_id=? LIMIT 1',(rid,))]
            if linked:
                return self.json({
                    'error':'Este cliente possui registros vinculados e não pode ser excluído.',
                    'references':linked,
                },409)
        if resource=='services':
            if u['role'] not in ('admin','gerente'):return self.json({'error':'Somente administrador ou gerente pode cancelar uma OS.'},403)
            if row.get('status')!='cancelado':
                stamp=now()
                write("UPDATE services SET status='cancelado',updated_at=? WHERE id=?",(stamp,rid))
                write('INSERT INTO service_status_history(service_id,status,changed_at,user_id,source) VALUES(?,?,?,?,?)',(rid,'cancelado',stamp,u.get('id'),'staff'))
                audit(u['id'],'cancel','services',rid,'OS cancelada; dados e histórico financeiro preservados.')
                activity(u,'LOG','Cancelou OS','services',rid,'Dados da OS e lançamentos financeiros preservados.')
            return self.json({'ok':True,'id':rid,'status':'cancelado','preserved':True})
        if resource=='fiado' and one('SELECT id FROM fiado_payments WHERE account_id=? LIMIT 1',(rid,)):
            return self.json({'error':'Este fiado possui pagamentos vinculados. Preserve o histórico e atualize o status em vez de excluí-lo.'},409)
        if resource=='fiado': write("DELETE FROM fiado_payments WHERE account_id=?",(rid,))
        write('DELETE FROM '+maps[resource]+' WHERE id=?',(rid,)); uu=dict(u); uu['unit']=row['unit'] if 'unit' in row.keys() else u.get('unit','TODOS'); activity(uu,'LOG',f'Excluiu {resource}',resource,rid,js(dict(row))); push_undo(uu,f'Excluiu {resource}',maps[resource],rid,dict(row),{}); return self.json({'ok':True})

    def mdm_list(self,qs):
        unit=qs.get('unit',['TODOS'])[0]; sql='SELECT m.*,c.name customer_name,c.phone customer_phone FROM mdm_devices m LEFT JOIN customers c ON c.id=m.customer_id'; args=[]
        if unit!='TODOS': sql+=' WHERE m.unit=?'; args.append(unit)
        sql+=' ORDER BY m.id DESC LIMIT 500'; rows_=rows(sql,args)
        today=date.today().isoformat()
        for x in rows_:
            total=float(x.get('installment_total') or 0); paid=float(x.get('installment_paid') or 0)
            x['balance']=max(0,total-paid); x['installments_remaining']=max(0,int(x.get('installment_count') or 0)-int(x.get('paid_installments') or 0))
            due=x.get('next_due') or ''
            x['days_to_due']=None
            if due:
                try:x['days_to_due']=(date.fromisoformat(due)-date.today()).days
                except:pass
            x['overdue']=bool(due and due<today and x['balance']>0)
        return self.json(rows_)
    def mdm_device(self,qs):
        t=qs.get('token',[''])[0].strip(); d=one('SELECT m.*,c.name customer_name,c.phone customer_phone FROM mdm_devices m LEFT JOIN customers c ON c.id=m.customer_id WHERE m.enrollment_token=?',(t,))
        if not d:return self.json({'error':'Token MDM inválido.'},404)
        balance=max(0,float(d['installment_total'] or 0)-float(d['installment_paid'] or 0))
        days=None
        if d['next_due']:
            try: days=(date.fromisoformat(d['next_due'])-date.today()).days
            except: pass
        # Automatic overdue policy is evaluated server-side, but only when enabled and a real due date exists.
        policy=d['policy_state']
        if d['auto_lock_enabled'] and balance>0 and days is not None and days < -(int(d['grace_days'] or 0)) and policy not in ('quitado','bloqueado'):
            policy='bloqueado'
            write("UPDATE mdm_devices SET policy_state='bloqueado',status='bloqueio solicitado',last_policy_sync=?,updated_at=? WHERE id=?",(now(),now(),d['id']))
            write('INSERT INTO mdm_events(device_id,action,message,created_at) VALUES(?,?,?,?)',(d['id'],'auto_lock','Vencimento ultrapassado; política de bloqueio emitida automaticamente.',now()))
        return self.json({'ok':True,'device':dict(d),'balance':balance,'days_to_due':days,'installments_remaining':max(0,int(d['installment_count'] or 0)-int(d['paid_installments'] or 0)),'payment_url':d['payment_url'],'pix_copy_paste':d['pix_copy_paste'],'server_time':now(),'policy_state':policy})

    def mdm_qr(self,qs):
        mid=int(qs.get('id',['0'])[0] or 0); mode=qs.get('mode',['app'])[0]
        d=one('SELECT * FROM mdm_devices WHERE id=?',(mid,))
        if not d:return self.json({'error':'MDM não encontrado'},404)
        host=self.headers.get('Host','kvcell.squareweb.app'); tokenv=d['enrollment_token']
        if mode=='provisioning':
            apk_url=(os.environ.get('MDM_AGENT_APK_URL') or '').strip()
            if not apk_url:return self.json({'error':'Defina MDM_AGENT_APK_URL para gerar QR de provisionamento Android.'},400)
            payload=json.dumps({'android.app.extra.PROVISIONING_DEVICE_ADMIN_COMPONENT_NAME':'br.com.kvcell.finance.mdm/br.com.kvcell.mdm.KVCellDeviceAdminReceiver','android.app.extra.PROVISIONING_DEVICE_ADMIN_PACKAGE_DOWNLOAD_LOCATION':apk_url,'android.app.extra.PROVISIONING_ADMIN_EXTRAS_BUNDLE':json.dumps({'enrollment_token':tokenv,'server':'https://'+host},ensure_ascii=False)},ensure_ascii=False,separators=(',',':'))
        else:
            payload='kvcellmdm://enroll/'+tokenv
        img=qrcode.make(payload); buf=BytesIO(); img.save(buf,format='PNG'); data='data:image/png;base64,'+base64.b64encode(buf.getvalue()).decode()
        return self.json({'ok':True,'mode':mode,'payload':payload,'data_url':data,'enroll_url':'https://'+host+'/public/mdm/enroll/'+tokenv})

    def mdm_create(self,d,u):
        # Strict validation + one transaction. Never creates a half-registered device.
        try:
            unit=str(d.get('unit') or u.get('unit') or 'TODOS').strip().upper()
            if unit not in ('LAGOS','MAGÉ','TODOS'): return self.json({'error':'Unidade MDM inválida.'},400)
            cid=int(d.get('customer_id') or 0)
            if not cid or not one('SELECT id FROM customers WHERE id=?',(cid,)): return self.json({'error':'Cliente selecionado não existe.'},400)
            brand=str(d.get('brand') or '').strip(); model=str(d.get('model') or '').strip()
            if not brand or not model:return self.json({'error':'Informe marca e modelo do aparelho.'},400)
            total=max(0,float(d.get('installment_total') or 0)); paid=max(0,float(d.get('installment_paid') or 0))
            if paid>total:return self.json({'error':'O valor pago não pode ser maior que o valor financiado.'},400)
            count=max(1,int(d.get('installment_count') or 1)); balance=max(0,total-paid); value=float(d.get('installment_value') or 0) or (balance/count if count else 0)
            if value<0:return self.json({'error':'Valor de parcela inválido.'},400)
            paid_installments=max(0,min(count,int(d.get('paid_installments') or 0)))
            next_due=str(d.get('next_due') or '').strip() or None
            if next_due:
                try:date.fromisoformat(next_due)
                except:return self.json({'error':'Data de vencimento inválida.'},400)
            tokenv=secrets.token_urlsafe(18).replace('-','').replace('_','')
            host=self.headers.get('Host','kvcell.squareweb.app')
            enroll_url='https://'+host+'/public/mdm/enroll/'+tokenv
            apk_url=(os.environ.get('MDM_AGENT_APK_URL') or '').strip(); payload=enroll_url
            if apk_url:
                payload=json.dumps({'android.app.extra.PROVISIONING_DEVICE_ADMIN_COMPONENT_NAME':'br.com.kvcell.finance.mdm/br.com.kvcell.mdm.KVCellDeviceAdminReceiver','android.app.extra.PROVISIONING_DEVICE_ADMIN_PACKAGE_DOWNLOAD_LOCATION':apk_url,'android.app.extra.PROVISIONING_ADMIN_EXTRAS_BUNDLE':json.dumps({'enrollment_token':tokenv,'server':'https://'+host},ensure_ascii=False)},ensure_ascii=False,separators=(',',':'))
            stamp=now(); device_name=str(d.get('device_name') or f'{brand} {model}').strip(); custom=str(d.get('custom_message') or 'Parcela em atraso. Regularize seu crediário com a KV CELL.')
            c=db()
            try:
                cur=c.execute("INSERT INTO mdm_devices(unit,customer_id,purchase_id,fiado_id,brand,model,imei,serial,android_version,device_name,enrollment_token,qr_payload,status,policy_state,custom_message,installment_total,installment_paid,next_due,app_version,last_seen,battery,installment_count,installment_value,paid_installments,payment_url,pix_copy_paste,created_at,updated_at,auto_lock_enabled,grace_days,last_policy_sync,last_error) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",(unit,cid,int(d.get('purchase_id') or 0) or None,int(d.get('fiado_id') or 0) or None,brand,model,str(d.get('imei') or '').strip() or None,str(d.get('serial') or '').strip() or None,str(d.get('android_version') or '').strip() or None,device_name,tokenv,payload,'aguardando','normal',custom,total,paid,next_due,str(d.get('app_version') or '').strip() or None,None,None,count,value,paid_installments,str(d.get('payment_url') or '').strip() or None,str(d.get('pix_copy_paste') or '').strip() or None,stamp,stamp,1,max(0,int(d.get('grace_days') or 0)),None,None))
                rid=cur.lastrowid
                c.execute("INSERT INTO mdm_events(device_id,action,message,created_at) VALUES(?,?,?,?)",(rid,'criado','Crediário MDM criado com política de bloqueio remoto habilitada.',stamp))
                # Generate the installment schedule now, so the panel has a real ledger instead of only totals.
                if count>0 and value>0:
                    base=date.fromisoformat(next_due) if next_due else date.today()
                    for n in range(1,count+1):
                        due=(base+timedelta(days=30*(n-1))).isoformat()
                        st='pago' if n<=paid_installments else 'pendente'
                        c.execute('INSERT INTO mdm_installments(device_id,number,amount,due_date,status,paid_at,created_at) VALUES(?,?,?,?,?,?,?)',(rid,n,value,due,st,stamp if st=='pago' else None,stamp))
                c.commit()
            finally:c.close()
            schedule_blob_sync()
            return self.json({'ok':True,'id':rid,'token':tokenv,'payload':payload,'enroll_url':enroll_url,'balance':balance,'installments_remaining':count-paid_installments})
        except sqlite3.IntegrityError as e:
            return self.json({'error':'Não foi possível criar o crediário MDM: registro duplicado ou inválido.','detail':str(e)},409)
        except Exception as e:
            print('KV CELL MDM CREATE ERROR:',repr(e),flush=True)
            return self.json({'error':'Não foi possível criar o crediário MDM agora. Tente novamente.','detail':str(e)},503)

    def mdm_action(self,d,u):
        mid=int(d.get('id') or 0); action=str(d.get('action') or '').strip(); dev=one('SELECT * FROM mdm_devices WHERE id=?',(mid,))
        if not dev:return self.json({'error':'Dispositivo MDM não encontrado.'},404)
        allowed={'lock':'bloqueado','unlock':'normal','pause':'pausado'}
        if action not in allowed:return self.json({'error':'Ação MDM inválida.'},400)
        state=allowed[action]; msg=str(d.get('message') or dev['custom_message'] or '')
        status='online' if action=='unlock' else ('bloqueio solicitado' if action=='lock' else 'pausado')
        write('UPDATE mdm_devices SET policy_state=?,status=?,custom_message=?,last_policy_sync=?,last_error=NULL,updated_at=? WHERE id=?',(state,status,msg,now(),now(),mid))
        write('INSERT INTO mdm_events(device_id,action,message,created_at) VALUES(?,?,?,?)',(mid,action,msg,now())); activity(u,'MDM',f'Ação MDM: {action}','mdm_devices',mid,msg)
        return self.json({'ok':True,'policy_state':state,'status':status,'note':'A política será aplicada pelo agente KV CELL legitimamente provisionado; o Android exige Device Owner para o nível máximo de controle.'})
    def mdm_receive(self,d,u):
        mid=int(d.get('id') or 0); amount=max(0,float(d.get('amount') or 0)); method=str(d.get('payment') or 'PIX')
        if amount<=0:return self.json({'error':'Informe um valor de pagamento maior que zero.'},400)
        dev=one('SELECT * FROM mdm_devices WHERE id=?',(mid,))
        if not dev:return self.json({'error':'Dispositivo MDM não encontrado.'},404)
        balance=max(0,float(dev['installment_total'] or 0)-float(dev['installment_paid'] or 0)); amount=min(amount,balance)
        new_paid=float(dev['installment_paid'] or 0)+amount
        paid_inst=min(int(dev['installment_count'] or 0),int(dev['paid_installments'] or 0)+max(1,round(amount/max(float(dev['installment_value'] or 1),0.01))))
        new_balance=max(0,float(dev['installment_total'] or 0)-new_paid); new_state='quitado' if new_balance<=0.009 else ('normal' if dev['policy_state']=='bloqueado' and amount>0 else dev['policy_state'])
        write('UPDATE mdm_devices SET installment_paid=?,paid_installments=?,policy_state=?,status=?,updated_at=?,last_policy_sync=? WHERE id=?',(new_paid,paid_inst,new_state,'quitado' if new_balance<=0.009 else 'online',now(),now(),mid))
        nxt=one("SELECT due_date FROM mdm_installments WHERE device_id=? AND status<>? ORDER BY number LIMIT 1",(mid,'pago'))
        if nxt: write('UPDATE mdm_devices SET next_due=?,updated_at=? WHERE id=?',(nxt['due_date'],now(),mid))
        elif new_balance<=0.009: write('UPDATE mdm_devices SET next_due=NULL,updated_at=? WHERE id=?',(now(),mid))
        # Mark earliest unpaid installments until the received amount is consumed.
        remain=amount
        for ins in rows('SELECT * FROM mdm_installments WHERE device_id=? AND status<>? ORDER BY number',(mid,'pago')):
            if remain<=0:break
            pay=min(remain,float(ins['amount'] or 0)); remain-=pay
            if pay>=float(ins['amount'] or 0)-0.009: write("UPDATE mdm_installments SET status='pago',paid_at=?,payment_method=? WHERE id=?",(now(),method,ins['id']))
        write('INSERT INTO mdm_events(device_id,action,message,created_at) VALUES(?,?,?,?)',(mid,'payment',f'Pagamento recebido: R$ {amount:.2f} via {method}. Saldo: R$ {new_balance:.2f}.',now()))
        if dev['fiado_id']:
            try:
                fid=int(dev['fiado_id']); write('INSERT INTO fiado_payments(account_id,amount,payment,paid_at,notes,created_at) VALUES(?,?,?,?,?,?)',(fid,amount,method,date.today().isoformat(),'Pagamento registrado pelo Crediário MDM',now()))
                acc=one('SELECT * FROM fiado_accounts WHERE id=?',(fid,));
                if acc:
                    bal=max(0,float(acc['balance'] or 0)-amount); st='pago' if bal<=0.009 else ('atrasado' if acc['due_date'] and acc['due_date']<date.today().isoformat() else 'aberto'); write('UPDATE fiado_accounts SET balance=?,status=? WHERE id=?',(bal,st,fid))
            except Exception as e: print('KV CELL MDM FIADO SYNC:',e,flush=True)
        activity(u,'MDM','Recebeu pagamento MDM','mdm_devices',mid,f'R$ {amount:.2f} • {method}')
        return self.json({'ok':True,'received':amount,'balance':new_balance,'policy_state':new_state,'paid_installments':paid_inst})
    def mdm_installments(self,qs):
        mid=int(qs.get('id',['0'])[0] or 0); return self.json(rows('SELECT * FROM mdm_installments WHERE device_id=? ORDER BY number',(mid,)))
    def mdm_events(self,qs):
        mid=int(qs.get('id',['0'])[0] or 0); return self.json(rows('SELECT * FROM mdm_events WHERE device_id=? ORDER BY id DESC LIMIT 200',(mid,)))
    def mdm_heartbeat(self,t,d):
        dev=one('SELECT * FROM mdm_devices WHERE enrollment_token=?',(t,))
        if not dev:return self.json({'error':'Token MDM inválido.'},404)
        stamp=now(); battery=max(0,min(100,int(d.get('battery') or 0))); appv=str(d.get('app_version') or '')
        brand=str(d.get('brand') or dev['brand'] or '').strip() or None
        model=str(d.get('model') or dev['model'] or '').strip() or None
        device_name=str(d.get('device_name') or dev['device_name'] or '').strip() or None
        android_version=str(d.get('android_version') or dev['android_version'] or '').strip() or None
        serial=str(d.get('serial') or dev['serial'] or '').strip() or None
        write('UPDATE mdm_devices SET status=?,last_seen=?,battery=?,app_version=?,brand=?,model=?,device_name=?,android_version=?,serial=?,updated_at=?,last_error=NULL WHERE id=?',('online',stamp,battery,appv,brand,model,device_name,android_version,serial,stamp,dev['id']))
        fresh=one('SELECT * FROM mdm_devices WHERE id=?',(dev['id'],));
        balance=max(0,float(fresh['installment_total'] or 0)-float(fresh['installment_paid'] or 0)); days=None
        if fresh['next_due']:
            try:days=(date.fromisoformat(fresh['next_due'])-date.today()).days
            except:pass
        policy=fresh['policy_state']
        if fresh['auto_lock_enabled'] and balance>0 and days is not None and days<-(int(fresh['grace_days'] or 0)) and policy not in ('quitado','bloqueado'):
            policy='bloqueado'; write("UPDATE mdm_devices SET policy_state='bloqueado',status='bloqueio solicitado',last_policy_sync=?,updated_at=? WHERE id=?",(stamp,stamp,fresh['id']))
            write('INSERT INTO mdm_events(device_id,action,message,created_at) VALUES(?,?,?,?)',(fresh['id'],'auto_lock','Bloqueio automático por atraso.',stamp))
        host=self.headers.get('Host','kvcell.squareweb.app')
        portal_url='https://'+host+'/public/mdm/portal/'+str(t)
        return self.json({'ok':True,'policy_state':policy,'message':fresh['custom_message'],'next_due':fresh['next_due'],'balance':balance,'days_to_due':days,'installments_remaining':max(0,int(fresh['installment_count'] or 0)-int(fresh['paid_installments'] or 0)),'payment_url':fresh['payment_url'],'portal_url':portal_url,'pix_copy_paste':fresh['pix_copy_paste'],'server_time':stamp})
    def mdm_payment_request(self,t,d):
        dev=one('SELECT * FROM mdm_devices WHERE enrollment_token=?',(t,))
        if not dev:return self.json({'error':'Token MDM inválido.'},404)
        msg='Solicitação de pagamento do crediário MDM'; write('INSERT INTO mdm_events(device_id,action,message,created_at) VALUES(?,?,?,?)',(dev['id'],'payment_request',msg,now()))
        return self.json({'ok':True,'payment_url':dev['payment_url'],'pix_copy_paste':dev['pix_copy_paste'],'message':'Solicitação registrada. A confirmação financeira é feita pela KV CELL após identificar o pagamento.'})
    def mdm_enroll(self,t,d):
        dev=one('SELECT * FROM mdm_devices WHERE enrollment_token=?',(t,))
        if not dev:return self.json({'error':'Token MDM inválido ou expirado.'},404)
        write("UPDATE mdm_devices SET status='online',last_seen=?,updated_at=? WHERE id=?",(now(),now(),dev['id'])); write('INSERT INTO mdm_events(device_id,action,message,created_at) VALUES(?,?,?,?)',(dev['id'],'enroll','Dispositivo entrou no fluxo de provisionamento.',now())); return self.json({'ok':True,'device_id':dev['id'],'device_name':dev['device_name'],'policy_state':dev['policy_state'],'message':dev['custom_message'],'next_due':dev['next_due']})
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

    def search(self,q,u):
        q='%'+q+'%'; out=[]; permissions=u.get('permissions') or '{}'
        if isinstance(permissions,str):
            try:permissions=json.loads(permissions)
            except json.JSONDecodeError:permissions={}
        if not isinstance(permissions,dict):permissions={}
        sources=[
            ('customers','customers',['name','phone','document']),
            ('devices','devices',['model','imei','brand']),
            ('services','services',['description','technician']),
            ('purchases','purchases',['model','imei','brand']),
        ]
        for module,t,cols in sources:
            if u.get('role')!='admin' and permissions.get('all') is not True and permissions.get(module) is not True:continue
            for col in cols:
                sql=f'SELECT "{t}" source,id,"{col}" value FROM {t} WHERE "{col}" LIKE ?'
                args=[q]
                if t!='customers' and u.get('role')!='admin' and u.get('unit') not in (None,'','TODOS'):
                    sql+=' AND unit=?'; args.append(u['unit'])
                out += rows(sql+' LIMIT 20',args)
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
            x['score']=min(100,int(x['service_count'])*10+int(one('SELECT COUNT(*) n FROM unlocks WHERE customer_id=?',(x['id'],))['n'] or 0)*10)
            x['inactive_days']=(today-date.fromisoformat(x['last_service'][:10])).days if x.get('last_service') else None
        return self.json(data)
    def customer_stats(self,cid):
        c=one('SELECT * FROM customers WHERE id=?',(cid,))
        if not c:return self.json({'error':'Cliente não encontrado'},404)
        svc=int(one('SELECT COUNT(*) n FROM services WHERE customer_id=?',(cid,))['n'] or 0)
        unl=int(one('SELECT COUNT(*) n FROM unlocks WHERE customer_id=?',(cid,))['n'] or 0)
        sales_count=int(one('SELECT COUNT(*) n FROM sales WHERE customer_id=?',(cid,))['n'] or 0)
        count=svc+unl; total=0.0
        for rt,table in [('service','services'),('unlock','unlocks'),('sale','sales')]:
            ids=[r['id'] for r in rows(f'SELECT id FROM {table} WHERE customer_id=?',(cid,))]
            if ids:
                marks=','.join('?' for _ in ids)
                total+=float(one(f'SELECT COALESCE(SUM(amount),0) n FROM finance WHERE ref_type=? AND ref_id IN ({marks})',(rt,*ids))['n'] or 0)
        last=one('SELECT MAX(v) v FROM (SELECT MAX(created_at) v FROM services WHERE customer_id=? UNION ALL SELECT MAX(created_at) v FROM unlocks WHERE customer_id=? UNION ALL SELECT MAX(created_at) v FROM sales WHERE customer_id=?)',(cid,cid,cid))['v']
        return self.json({'id':cid,'service_count':count,'technical_count':svc,'unlock_count':unl,'sales_count':sales_count,'score':min(100,count*10+sales_count*2),'last_service':last,'total_spent':float(total or 0)})

    def technician_stats(self,unit):
        cond=''; args=[]
        if unit!='TODOS': cond=' WHERE t.unit=?'; args=[unit]
        techs=rows('SELECT t.* FROM technicians t'+cond+' ORDER BY t.name COLLATE NOCASE',(args if args else ()))
        out=[]
        for t in techs:
            tid=t['id']; ucond=' AND s.unit=?' if unit!='TODOS' else ''; uargs=[tid]+([unit] if unit!='TODOS' else [])
            svc=one('SELECT COUNT(*) n, COALESCE(SUM(price),0) revenue, COALESCE(SUM(cost_total),0) costs FROM services s WHERE (s.technician_id=? OR (s.technician_id IS NULL AND s.technician=?))'+ucond,[tid,t['name']]+([unit] if unit!='TODOS' else []))
            unargs=[tid,t['name']]+([unit] if unit!='TODOS' else [])
            unl=one('SELECT COUNT(*) n, COALESCE(SUM(price),0) revenue FROM unlocks x WHERE (x.technician_id=? OR (x.technician_id IS NULL AND x.operator=?))'+(' AND x.unit=?' if unit!='TODOS' else ''),unargs)
            completed=one('SELECT COUNT(*) n FROM services s WHERE (s.technician_id=? OR (s.technician_id IS NULL AND s.technician=?)) AND s.status IN ("pronto","entregue","aprovado pelo cliente")'+ucond,[tid,t['name']]+([unit] if unit!='TODOS' else []))
            total=int(svc['n'] or 0)+int(unl['n'] or 0); revenue=float(svc['revenue'] or 0)+float(unl['revenue'] or 0); costs=float(svc['costs'] or 0); score=min(100,total*8+int(completed['n'] or 0)*2)
            out.append({**t,'service_count':total,'technical_count':int(svc['n'] or 0),'unlock_count':int(unl['n'] or 0),'completed_count':int(completed['n'] or 0),'earnings':revenue,'costs':costs,'profit':revenue-costs,'score':score})
        return self.json(out)

    def film_search(self,q):
        q=(q or '').strip()
        if not q: return self.json(rows('SELECT * FROM film_compat ORDER BY brand,model LIMIT 300'))
        like='%'+q+'%'
        return self.json(rows('SELECT * FROM film_compat WHERE brand LIKE ? OR model LIKE ? OR aliases LIKE ? OR master_code LIKE ? OR group_name LIKE ? ORDER BY brand,model LIMIT 300',(like,like,like,like,like)))
    def film_external_search(self,q):
        q=str(q or '').strip()[:100]
        if len(q)<2:return self.json({'success':False,'error':'Digite pelo menos 2 caracteres.','data':[]},400)
        # Public API documented by Tabela Películas; only a fixed trusted host is queried.
        query=urllib.parse.urlencode({'route':'api/sistemas','modelo':q})
        url='https://tabelapeliculas.com.br/index?'+query
        req=urllib.request.Request(url,headers={'User-Agent':'KV-CELL-OS/1101.2 (+compatibilidade de peliculas)','Accept':'application/json'})
        try:
            with urllib.request.urlopen(req,timeout=12) as resp:
                obj=json.loads(resp.read().decode('utf-8','replace') or '{}')
            data=obj.get('data') or []
            if not isinstance(data,list): data=[]
            clean=[]
            for item in data[:200]:
                if not isinstance(item,dict): continue
                model=str(item.get('modelo') or item.get('model') or '').strip()[:160]
                brand=str(item.get('marca') or item.get('brand') or '').strip()[:80]
                compatibles=item.get('compativeis') or item.get('compatíveis') or item.get('compatibles') or []
                if isinstance(compatibles,str): compatibles=[x.strip() for x in re.split(r'[,;|]',compatibles) if x.strip()]
                if not isinstance(compatibles,list): compatibles=[]
                compatibles=[str(x).strip()[:120] for x in compatibles[:80] if str(x).strip()]
                clean.append({'model':model,'brand':brand,'compatibles':compatibles,'source':'Tabela Películas API','source_url':'https://tabelapeliculas.com.br/'})
            return self.json({'success':bool(obj.get('success',True)),'query':q,'total':obj.get('total',len(clean)),'data':clean,'source':'Tabela Películas API','source_url':'https://tabelapeliculas.com.br/'})
        except Exception as e:
            return self.json({'success':False,'query':q,'data':[],'error':'A consulta online falhou. Confira a conexão do servidor e tente novamente.','source_url':'https://tabelapeliculas.com.br/'},502)
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
    def public_os_action(self,token,d):
        s=one('SELECT * FROM services WHERE public_token=?',(token,))
        if not s and str(token).isdigit(): s=one('SELECT * FROM services WHERE id=?',(int(token),))
        if not s:return self.json({'error':'OS não encontrada'},404)
        action=d.get('action')
        if action not in ('aprovado','recusado'):return self.json({'error':'Ação inválida'},400)
        if str(s.get('status') or '').lower() in ('entregue','cancelado','finalizado','aprovado pelo cliente','recusado pelo cliente'):
            return self.json({'error':'Esta OS não aceita mais respostas públicas.'},409)
        status='aprovado pelo cliente' if action=='aprovado' else 'recusado pelo cliente'
        write('UPDATE services SET status=?,updated_at=? WHERE id=?',(status,now(),s['id']))
        write('INSERT INTO service_status_history(service_id,status,changed_at,source) VALUES(?,?,?,?)',(s['id'],status,now(),'customer'))
        write('INSERT INTO notifications(unit,title,message,created_at) VALUES(?,?,?,?)',(s['unit'],'Aprovação de OS',f'OS #{s['id']} foi {status}.',now()))
        activity({'unit':s['unit'],'id':None,'name':'CLIENTE'},'LOG',f'Cliente {action} OS','services',s['id'],d.get('message',''))
        return self.json({'ok':True,'status':status})

    def public_quote_action(self,token,d):
        q=one('SELECT * FROM quotes WHERE public_token=?',(token,))
        if not q:return self.json({'error':'Orçamento não encontrado'},404)
        action=d.get('action')
        if action not in ('aprovado','recusado'):return self.json({'error':'Ação inválida'},400)
        if str(q.get('status') or '').lower() in ('aprovado','recusado','expirado','cancelado'):
            return self.json({'error':'Este orçamento já recebeu uma resposta ou expirou.'},409)
        valid_until=str(q.get('valid_until') or '').strip()
        if valid_until and valid_until[:10]<date.today().isoformat():
            return self.json({'error':'Este orçamento expirou.'},409)
        write('UPDATE quotes SET status=? WHERE id=?',(action,q['id']))
        unit=q['unit']; msg=f"Orçamento {q['number']} foi {action} pelo cliente."
        write('INSERT INTO notifications(unit,title,message,created_at) VALUES(?,?,?,?)',(unit,'Resposta de orçamento',msg,now()))
        write('INSERT INTO chat(unit,user_name,message,created_at) VALUES(?,?,?,?)',(unit,'CLIENTE',msg,now()))
        activity({'unit':unit,'id':None,'name':'CLIENTE'},'LOG',msg,'quotes',q['id'],d.get('message',''))
        return self.json({'ok':True,'status':action})

    def inventory_csv(self,unit='TODOS'):
        sql='SELECT * FROM inventory'; args=[]
        if unit and unit!='TODOS':sql+=' WHERE unit=?';args.append(unit)
        data=rows(sql+' ORDER BY id DESC',args); out=io.StringIO();w=csv.writer(out);w.writerow(data[0].keys() if data else ['id']);[w.writerow(x.values()) for x in data];return self.send(200,out.getvalue(),'text/csv')
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
    def public(self,path,qs=None):
        qs=qs or {}
        if path.startswith('/public/catalog/'):
            slug=urllib.parse.unquote(path.split('/')[-1]).strip()
            return self.send(200,public_catalog(slug,self),'text/html')
        if path.startswith('/public/mdm/'):
            return self.send(404,'Este portal não está disponível na versão ativa.','text/html')
        if path == '/public/mdm/apk':
            configured=(os.environ.get('MDM_AGENT_APK_PATH') or '').strip()
            candidates=[configured] if configured else []
            candidates += [
                os.path.join(BASE,'tools','mdm','KV_CELL_MDM.apk'),
                os.path.join(BASE,'android-kvcell-finance-mdm','app','build','outputs','apk','debug','app-debug.apk')
            ]
            apk=next((x for x in candidates if x and os.path.isfile(x)),None)
            if not apk:
                return self.send(404,'APK do agente MDM ainda não foi publicado. Gere o APK e coloque-o em tools/mdm/KV_CELL_MDM.apk ou configure MDM_AGENT_APK_PATH.','text/plain')
            raw=open(apk,'rb').read()
            return self.send(200,raw,'application/vnd.android.package-archive',{'Content-Disposition':'inline; filename=KV_CELL_MDM.apk','Cache-Control':'public, max-age=300'})
        if path.startswith('/public/mdm/portal/'):
            t=path.split('/')[-1]
            d=one('SELECT m.*,c.name customer_name,c.phone customer_phone FROM mdm_devices m LEFT JOIN customers c ON c.id=m.customer_id WHERE m.enrollment_token=?',(t,))
            if not d:return self.send(404,'Portal MDM não encontrado','text/html')
            ins=rows('SELECT number,amount,due_date,status,paid_at,payment_method FROM mdm_installments WHERE device_id=? ORDER BY number',(d['id'],))
            return self.send(200,public_mdm_portal(d,ins),'text/html')
        if path.startswith('/public/mdm/enroll/'):
            t=path.split('/')[-1]; d=one('SELECT * FROM mdm_devices WHERE enrollment_token=?',(t,))
            if not d:return self.send(404,'Convite MDM não encontrado','text/html')
            return self.send(200,public_mdm_enroll(d),'text/html')
        if path.startswith('/public/quote/'):
            t=path.split('/')[-1]; q=one('SELECT * FROM quotes WHERE public_token=?',(t,))
            if not q:return self.send(404,'Orçamento não encontrado','text/html')
            cust=one('SELECT * FROM customers WHERE id=?',(q['customer_id'],)) if q['customer_id'] else None
            store={r['k']:r['v'] for r in rows('SELECT k,v FROM settings')}
            return self.send(200,public_quote(q,cust,store),'text/html')
        if path.startswith('/public/os'):
            t=urllib.parse.unquote(path.split('/')[-1]).strip() if path.startswith('/public/os/') else ''
            if not t:
                for key in ('token','public_token','id','os_id','order_id'):
                    value=(qs.get(key) or [''])[0]
                    if value:
                        t=urllib.parse.unquote(str(value)).strip()
                        break
            # Compatibilidade: token atual, token legado com espaços/codificação e links antigos usando ID numérico.
            s=one('SELECT * FROM services WHERE public_token=?',(t,))
            if not s and t.isdigit(): s=one('SELECT * FROM services WHERE id=?',(int(t),))
            if not s and t: s=one("SELECT * FROM services WHERE lower(trim(COALESCE(public_token,'')))=lower(?)",(t,))
            # Older releases sometimes shared unlock tokens through /public/os/. Resolve those links too.
            if not s:
                x=one('SELECT * FROM unlocks WHERE public_token=?',(t,))
                if not x and t.isdigit(): x=one('SELECT * FROM unlocks WHERE id=?',(int(t),))
                if x:
                    cust=one('SELECT * FROM customers WHERE id=?',(x['customer_id'],)) if x['customer_id'] else None
                    return self.send(200,public_unlock(x,cust),'text/html')
            if not s:return self.send(404,'OS não encontrada. Confira o link ou solicite à KV CELL um novo acompanhamento.','text/html')
            if not str(s.get('public_token') or '').strip():
                new_token=secrets.token_urlsafe(18).replace('-','').replace('_','')
                write('UPDATE services SET public_token=? WHERE id=?',(new_token,s['id']))
                s=one('SELECT * FROM services WHERE id=?',(s['id'],))
            cust=one('SELECT * FROM customers WHERE id=?',(s['customer_id'],)) if s['customer_id'] else None
            store={r['k']:r['v'] for r in rows('SELECT k,v FROM settings')}
            devices=service_devices_for(s['id'],s.get('device_id'))
            history=rows('SELECT status,changed_at FROM service_status_history WHERE service_id=? ORDER BY id',(s['id'],))
            return self.send(200,public_os(s,cust,store,devices,history),'text/html')
        if path.startswith('/public/unlock/'):
            t=path.split('/')[-1]; x=one('SELECT * FROM unlocks WHERE public_token=?',(t,));
            if not x:return self.send(404,'OS de desbloqueio não encontrada','text/html')
            cust=one('SELECT * FROM customers WHERE id=?',(x['customer_id'],)) if x['customer_id'] else None
            return self.send(200,public_unlock(x,cust),'text/html')
        self.send(404,b'Not found','text/plain')

def public_catalog(slug,handler):
    settings={r['k']:r['v'] for r in rows('SELECT k,v FROM settings')}
    configured=str(settings.get('catalog_slug') or 'kvcell').strip().lower()
    if not slug or slug.lower()!=configured:
        return '<!doctype html><meta charset="utf-8"><title>Catálogo não encontrado</title><body style="font-family:Arial;background:#050505;color:#fff;padding:48px"><h1>Catálogo não encontrado</h1><p>Confira o link enviado pela loja.</p></body>'
    title=safe(settings.get('catalog_title') or settings.get('company_name') or 'KV CELL')
    message=safe(settings.get('catalog_message') or 'Produtos, acessórios e serviços atualizados.')
    phone=re.sub(r'\D','',str(settings.get('catalog_whatsapp') or settings.get('phone') or ''))
    products=rows("SELECT * FROM catalog_products WHERE active=1 AND (unit=? OR unit='TODOS') ORDER BY id DESC",(settings.get('catalog_unit') or 'TODOS',))
    cards=[]
    for item in products:
        name=safe(item.get('name') or 'Produto')
        category=safe(item.get('category') or 'Produto')
        price=float(item.get('price') or 0)
        price_text=('R$ '+format(price,'.2f')).replace('.',',')
        image=item.get('image') or ''
        visual=f'<img src="{safe(image)}" alt="{name}">' if image else '<div class="product-image">KV</div>'
        text=urllib.parse.quote(f'Olá! Tenho interesse em {item.get("name") or "um produto"}.')
        action=f'<a class="buy" href="https://wa.me/{phone}?text={text}" target="_blank" rel="noopener">Pedir pelo WhatsApp</a>' if phone else '<span class="buy disabled">Contato indisponível</span>'
        cards.append(f'<article class="product">{visual}<div class="category">{category}</div><h2>{name}</h2><strong>{price_text}</strong><small>{safe(item.get("stock") or 0)} disponível(is)</small>{action}</article>')
    return f'''<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{title} • Catálogo</title><style>
    :root{{color-scheme:dark}}*{{box-sizing:border-box}}body{{margin:0;background:#050505;color:#f4f4f4;font:15px Arial,sans-serif}}main{{max-width:1120px;margin:auto;padding:24px}}header{{border:1px solid #2d2700;background:#0b0b0b;border-radius:20px;padding:28px;margin-bottom:22px;box-shadow:0 0 42px #f5d00012}}.brand{{color:#ffd400;font-size:12px;font-weight:800;letter-spacing:.14em;text-transform:uppercase}}h1{{font-size:32px;margin:8px 0;color:#fff}}p{{color:#a9a9a9}}.share{{display:flex;gap:10px;flex-wrap:wrap;margin-top:20px}}.share a,.share button{{border:0;border-radius:10px;padding:12px 16px;background:#ffd400;color:#090909;font-weight:800;text-decoration:none;cursor:pointer}}.share .dark{{background:#171717;color:#ffd400;border:1px solid #665600}}.grid{{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:16px}}.product{{background:#101010;border:1px solid #302900;border-radius:16px;padding:14px;display:flex;flex-direction:column;gap:7px;min-height:320px}}.product img,.product-image{{width:100%;height:170px;object-fit:cover;border-radius:11px;background:#1c1c1c;display:grid;place-items:center;color:#ffd400;font-size:36px;font-weight:900}}.category{{color:#ffd400;font-size:11px;text-transform:uppercase;font-weight:800;letter-spacing:.08em}}.product h2{{font-size:17px;margin:0}}.product strong{{font-size:22px;color:#fff}}.product small{{color:#999}}.buy{{margin-top:auto;text-align:center;padding:11px;border-radius:9px;background:#ffd400;color:#080808;text-decoration:none;font-weight:800}}.disabled{{background:#2a2a2a;color:#777}}.empty{{border:1px dashed #554900;border-radius:14px;padding:40px;text-align:center;color:#aaa}}footer{{padding:28px 0;color:#777;font-size:12px}}@media(max-width:560px){{main{{padding:14px}}h1{{font-size:26px}}}}</style></head><body><main><header><div class="brand">KV CELL OS PRO • CATÁLOGO DIGITAL</div><h1>{title}</h1><p>{message}</p><div class="share"><a href="https://wa.me/{phone}?text={urllib.parse.quote("Olá! Quero conhecer o catálogo da KV CELL.")}" target="_blank" rel="noopener">Compartilhar no WhatsApp</a><button class="dark" onclick="navigator.clipboard?.writeText(location.href);this.textContent='Link copiado'">Copiar link</button></div></header><section class="grid">{''.join(cards) or '<div class="empty">Nenhum produto publicado no catálogo ainda.</div>'}</section><footer>Catálogo oficial da loja • atualizado pelo KV CELL OS PRO</footer></main></body></html>'''

def public_mdm_enroll(d):
    return """<!doctype html><html lang="pt-BR"><meta name="viewport" content="width=device-width,initial-scale=1"><title>KV CELL • MDM</title><style>{css}.hero h1{{font-size:32px}}.warn{{border-color:#6b5b00;background:#171500}}.portal{{display:inline-block;background:#ffd400;color:#080808;text-decoration:none;font-weight:900;padding:13px 18px;border-radius:12px;margin-top:8px}}</style><main><header><b>KV CELL</b><span>MDM • CREDIÁRIO ANDROID</span></header><section class="hero"><small>PROVISIONAMENTO</small><h1>{name}</h1><p>{brand} {model}</p><div class="status">Token de enrollment pronto</div><a class="portal" href="/public/mdm/portal/{token}">Abrir portal do aparelho</a></section><div class="box"><h2>Como conectar</h2><ol><li>Instale o agente MDM autorizado da KV CELL no Android.</li><li>Abra o leitor de QR do fluxo de provisionamento.</li><li>Leia este convite e confirme a política no aparelho.</li></ol><p>Este portal não instala software oculto nem remove proteções do Android; a aplicação da política depende de um agente MDM provisionado legitimamente.</p></div><div class="box warn"><b>Política atual</b><p>{policy}</p><p>{msg}</p></div><footer>KV CELL • Crediário Android</footer></main></html>""".format(css=PUBLIC_CSS,name=safe(d['device_name']),brand=safe(d['brand']),model=safe(d['model']),policy=safe(d['policy_state']),msg=safe(d['custom_message']),token=safe(d['enrollment_token']))

def public_mdm_portal(d,ins):
    balance=max(0,float(d['installment_total'] or 0)-float(d['installment_paid'] or 0))
    rows_html=''.join(
        '<tr><td>#%s</td><td>R$ %.2f</td><td>%s</td><td><span class="pill %s">%s</span></td></tr>' %
        (safe(x['number']),float(x['amount'] or 0),safe(x['due_date'] or '—'),
         'ok' if x['status']=='pago' else ('late' if x['due_date'] and x['due_date'] < date.today().isoformat() else ''),
         safe(x['status'] or 'pendente'))
        for x in ins
    ) or '<tr><td colspan="4">Nenhuma parcela detalhada.</td></tr>'
    payment=d['payment_url'] or ''
    pix=d['pix_copy_paste'] or ''
    phone=''.join(ch for ch in str(d['customer_phone'] or '') if ch.isdigit())
    wa_url=('https://wa.me/'+(phone if phone.startswith('55') else '55'+phone)+'?text='+urllib.parse.quote('Olá! Quero falar sobre meu crediário e meu aparelho na KV CELL.') if phone else '')
    wa_box=(f'<div class="actions"><a class="whatsapp" href="{safe(wa_url)}" target="_blank" rel="noopener">💬 Falar com a KV CELL pelo WhatsApp</a></div>' if phone else '')
    payment_box=(
        '<div class="actions"><a class="pay" href="'+safe(payment)+'" target="_blank" rel="noopener">Pagar / atualizar crediário</a></div>'
        if payment else
        '<div class="notice">O pagamento online ainda não foi configurado pela KV CELL. Se disponível, use o PIX abaixo.</div>'
    )
    pix_box=(
        '<div class="pix"><b>PIX copia e cola</b><textarea readonly onclick="this.select()">'+safe(pix)+'</textarea><button onclick="navigator.clipboard&&navigator.clipboard.writeText(this.previousElementSibling.value)">Copiar PIX</button></div>'
        if pix else ''
    )
    return """<!doctype html><html lang="pt-BR"><meta name="viewport" content="width=device-width,initial-scale=1"><title>KV CELL • Portal do aparelho</title>
<style>{css}
:root{{--accent:#ffd400;--bg:#080808;--panel:#111;--muted:#9b9b9b}}
body{{background:radial-gradient(circle at 50% -20%,#292400 0,#080808 48%);}}
.hero h1{{font-size:30px;margin-bottom:4px}} .hero p{{color:#bdbdbd}}
.grid4{{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}} .metric{{background:#101010;border:1px solid #292929;border-radius:16px;padding:16px}} .metric small{{color:#929292;display:block}} .metric b{{display:block;font-size:22px;margin-top:5px}}
.tablewrap{{overflow:auto}} table{{width:100%;border-collapse:collapse}} th,td{{padding:11px;border-bottom:1px solid #292929;text-align:left}} th{{color:#9b9b9b;font-size:12px}} .pill{{padding:5px 9px;border-radius:999px;background:#252525}} .pill.ok{{background:#123d24;color:#76f0a1}} .pill.late{{background:#4a1717;color:#ff9b9b}}
.pay{{display:inline-block;background:#ffd400;color:#070707;padding:13px 18px;border-radius:12px;font-weight:900;text-decoration:none}} .pix textarea{{width:100%;min-height:82px;margin-top:8px;background:#090909;color:#ddd;border:1px solid #333;border-radius:10px;padding:10px;box-sizing:border-box}} .pix button{{background:#242424;color:#fff;border:0;border-radius:10px;padding:10px 14px;margin-top:8px;cursor:pointer}} .notice{{padding:12px;border:1px solid #3a3a3a;border-radius:12px;color:#cfcfcf}} .devicegrid{{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}} .devicegrid div{{background:#0d0d0d;border:1px solid #252525;border-radius:12px;padding:12px}} .devicegrid small{{display:block;color:#888}} .devicegrid b{{display:block;margin-top:4px;word-break:break-word}} @media(max-width:760px){{.grid4,.devicegrid{{grid-template-columns:1fr 1fr}}}} @media(max-width:480px){{.grid4,.devicegrid{{grid-template-columns:1fr}}}}
</style><main><header><b>KV CELL</b><span>PORTAL DO APARELHO • CREDIÁRIO</span></header>
<section class="hero"><small>CLIENTE</small><h1>{customer}</h1><p>{device} • {unit}</p><div class="status">{policy} • {status}</div></section>
<div class="grid4"><div class="metric"><small>SALDO</small><b>R$ {balance:,.2f}</b></div><div class="metric"><small>FINANCIADO</small><b>R$ {total:,.2f}</b></div><div class="metric"><small>PAGO</small><b>R$ {paid:,.2f}</b></div><div class="metric"><small>PRÓXIMO VENC.</small><b>{due}</b></div></div>
<div class="box"><h2>Seu aparelho</h2><div class="devicegrid">
<div><small>Marca / modelo</small><b>{brand} {model}</b></div><div><small>Nome do aparelho</small><b>{device}</b></div>
<div><small>IMEI</small><b>{imei}</b></div><div><small>Número de série</small><b>{serial}</b></div>
<div><small>Android</small><b>{android}</b></div><div><small>Bateria / última conexão</small><b>{battery} • {last_seen}</b></div>
<div><small>Política KV CELL</small><b>{policy}</b></div><div><small>Mensagem</small><b>{message}</b></div>
</div></div>
<div class="box"><h2>Parcelas</h2><div class="tablewrap"><table><tr><th>Parcela</th><th>Valor</th><th>Vencimento</th><th>Status</th></tr>{rows}</table></div></div>
<div class="box"><h2>Pagamento</h2>{payment_box}{pix_box}{wa_box}</div>
<footer>KV CELL • Lagos + Magé • Portal protegido por token de matrícula</footer></main></html>""".format(
        css=PUBLIC_CSS,customer=safe(d['customer_name'] or 'Cliente'),
        device=safe(d['device_name'] or (d['brand']+' '+d['model'])),unit=safe(d['unit'] or 'KV CELL'),
        policy=safe(d['policy_state'] or 'normal'),status=safe(d['status'] or 'aguardando'),
        balance=balance,total=float(d['installment_total'] or 0),paid=float(d['installment_paid'] or 0),
        due=safe(d['next_due'] or '—'),brand=safe(d['brand']),model=safe(d['model']),
        imei=safe(d['imei'] or '—'),serial=safe(d['serial'] or '—'),android=safe(d['android_version'] or '—'),
        battery=safe(str(d['battery'])+'%' if d['battery'] is not None else '—'),last_seen=safe(d['last_seen'] or '—'),
        message=safe(d['custom_message'] or '—'),rows=rows_html,payment_box=payment_box,pix_box=pix_box,wa_box=wa_box)

def public_quote(q,c,store=None):
    store=store or {}
    items=json.loads(q['items'] or '[]')
    phone=''.join(ch for ch in str(store.get('phone','')) if ch.isdigit())
    if phone and not phone.startswith('55'): phone='55'+phone
    wa=('https://wa.me/'+phone+'?text='+urllib.parse.quote('Olá! Quero falar sobre o orçamento '+str(q['number'])+' da KV CELL.') if phone else '')
    status=str(q.get('status') or 'pendente').lower()
    status_map={'aprovado':('APROVADO','approved'),'recusado':('RECUSADO','rejected'),'expirado':('EXPIRADO','expired'),'cancelado':('CANCELADO','expired')}
    label,kind=status_map.get(status,('AGUARDANDO APROVAÇÃO','pending'))
    rows=[]
    for x in items:
        if not isinstance(x,dict):continue
        desc=safe(x.get('description',x.get('name','Serviço')))
        qty=safe(x.get('qty',1))
        unit=float(x.get('price',x.get('total',0)) or 0)
        quantity=float(x.get('qty',1) or 1)
        total=unit*quantity
        quality=safe(x.get('quality') or '')
        detail='Qualidade: '+quality if quality else 'Serviço / item do orçamento'
        rows.append(f'<tr><td><b>{desc}</b><small>{detail}</small></td><td>{qty}</td><td>{money_br(unit)}</td><td><strong>{money_br(total)}</strong></td></tr>')
    rows_html=''.join(rows) or '<tr><td colspan="4"><span class="muted">Nenhum item detalhado.</span></td></tr>'
    can_answer=status not in ('aprovado','recusado','expirado','cancelado')
    actions=''
    if can_answer:
        actions='''<section class="action-card"><div><span class="eyebrow">DECISÃO DO CLIENTE</span><h2>Está tudo certo com o orçamento?</h2><p>Revise os valores e condições. Você pode aprovar ou recusar diretamente por este link.</p></div><div class="action-row"><button class="btn primary" onclick="respond('aprovado')">✓ Aprovar orçamento</button><button class="btn secondary" onclick="respond('recusado')">✕ Recusar</button></div><p id="msg" class="feedback"></p></section>'''
    contact=(f'''<div class="action-row"><a class="btn whatsapp" href="{safe(wa)}" target="_blank" rel="noopener">💬 Falar com a KV CELL</a><button class="btn secondary" onclick="shareLink()">↗ Compartilhar link</button><button class="btn secondary" onclick="copyLink(this)">🔗 Copiar link</button><button class="btn secondary" onclick="window.print()">🖨 Imprimir / PDF</button></div>''' if wa else '''<div class="action-row"><button class="btn secondary" onclick="shareLink()">↗ Compartilhar link</button><button class="btn secondary" onclick="copyLink(this)">🔗 Copiar link</button><button class="btn secondary" onclick="window.print()">🖨 Imprimir / PDF</button></div>''')
    customer=safe(c['name'] if c else 'Cliente')
    client_phone=safe(c.get('phone') if c else '—')
    device=one('SELECT brand,model FROM devices WHERE id=?',(q.get('device_id'),)) if q.get('device_id') else None
    device_label=safe(' '.join(str((device or {}).get(key) or '').strip() for key in ('brand','model')).strip() or 'Não informado')
    item_count=len(items)
    return f'''<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#ffd400"><title>{safe(q['number'])} • KV CELL</title><style>{PUBLIC_CSS}
    .topbar{{display:flex;justify-content:space-between;align-items:center;gap:16px;margin-bottom:18px}}.brand{{display:flex;align-items:center;gap:11px}}.logo{{width:44px;height:44px;border-radius:13px;background:#ffd400;color:#070707;display:grid;place-items:center;font-weight:1000;box-shadow:0 0 24px #ffd40022}}.brand b{{font-size:17px;color:#fff}}.brand small{{display:block;color:#777;font-size:9px;font-weight:800;letter-spacing:1.2px}}.top-actions{{display:flex;gap:8px}}.mini{{border:1px solid #303030;background:#111;color:#ddd;border-radius:11px;padding:9px 12px;font-weight:800;cursor:pointer}}.status-wrap{{display:flex;align-items:center;gap:10px;flex-wrap:wrap}}.status.pending{{background:#332f00;color:#ffd400;border-color:#665b00}}.status.approved{{background:#0e3523;color:#6ff0a5;border-color:#1b6b43}}.status.rejected{{background:#3d1515;color:#ff9b9b;border-color:#6b2727}}.status.expired{{background:#2d2d2d;color:#aaa;border-color:#444}}.status-dot{{width:8px;height:8px;border-radius:50%;background:currentColor;box-shadow:0 0 12px currentColor}}.hero-meta{{display:flex;gap:22px;flex-wrap:wrap;margin-top:20px;color:#aaa;font-size:12px}}.hero-meta strong{{display:block;color:#fff;font-size:14px;margin-top:3px}}.eyebrow{{font-size:10px;font-weight:900;letter-spacing:1.7px;color:#ffd400}}.summary{{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:-4px 0 16px}}.summary .metric{{padding:17px;border-radius:17px}}.metric .accent{{color:#ffd400;font-size:26px}}.info-grid{{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}}.info{{padding:13px 14px;background:#0b0b0b;border:1px solid #252525;border-radius:13px}}.info small{{display:block;color:#777;text-transform:uppercase;font-size:9px;font-weight:800;letter-spacing:.7px}}.info b{{display:block;color:#eee;margin-top:4px;word-break:break-word}}.table-scroll{{overflow-x:auto}}.table-scroll table{{min-width:650px}}td small{{display:block;color:#686868;font-size:10px;margin-top:3px}}.total-card{{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:19px 20px;border-radius:18px;background:linear-gradient(135deg,#211d00,#111);border:1px solid #5a5000;margin-top:15px}}.total-card small{{display:block;color:#a59d65;font-size:10px;font-weight:800;text-transform:uppercase}}.total-card strong{{font-size:30px;color:#ffd400}}.action-card{{margin:18px 0;padding:21px;border:1px solid #4f4600;border-radius:20px;background:linear-gradient(135deg,#171500,#0d0d0d);box-shadow:0 18px 50px #0007}}.action-card h2{{margin:5px 0 5px;font-size:20px}}.action-card p{{color:#999;margin:0;line-height:1.6}}.action-row{{display:flex;gap:10px;flex-wrap:wrap;margin-top:16px}}.btn{{appearance:none;border:1px solid #333;border-radius:13px;padding:13px 17px;font:inherit;font-size:13px;font-weight:900;text-decoration:none;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:7px;transition:.18s transform,.18s border-color,.18s background}}.btn:hover{{transform:translateY(-1px);border-color:#665b00}}.btn.primary{{background:#ffd400;color:#070707;border-color:#ffd400}}.btn.secondary{{background:#191919;color:#f4f4f4}}.btn.whatsapp{{background:#142016;color:#8af2ad;border-color:#275b38}}.feedback{{margin-top:12px!important;color:#ffd400!important;font-weight:800}}.muted{{color:#777}}.legal{{font-size:10px;color:#666;line-height:1.6;margin-top:16px}}@media(max-width:700px){{.summary,.info-grid{{grid-template-columns:1fr}}.hero-meta{{gap:13px}}.top-actions .mini{{display:none}}.total-card{{align-items:flex-start;flex-direction:column}}.total-card strong{{font-size:26px}}.action-row>*{{width:100%}}}}
    @media print{{body{{background:#fff;color:#111}}main{{max-width:none;padding:12px}}.hero,.box,.metric,.action-card,.total-card{{box-shadow:none;background:#fff;border-color:#ddd;color:#111}}.hero h1,.brand b,.total-card strong,.box strong{{color:#111}}.hero p,.muted,.legal{{color:#555}}.action-card,.action-row,.top-actions{{display:none!important}}header{{border-color:#ddd}}}}
    </style></head><body><main>
    <div class="topbar"><div class="brand"><div class="logo">KV</div><div><b>{safe(store.get('company_name') or 'KV CELL')}</b><small>ORÇAMENTO DIGITAL • LINK DO CLIENTE</small></div></div><div class="top-actions"><button class="mini" onclick="copyLink(this)">🔗 Copiar</button><button class="mini" onclick="shareLink()">↗ Compartilhar</button></div></div>
    <section class="hero"><div class="status-wrap"><span class="eyebrow">ORÇAMENTO #{safe(q['number'])}</span><span class="status {kind}"><span class="status-dot"></span>{label}</span></div><h1>Seu orçamento está pronto</h1><p>{customer}, confira abaixo todos os detalhes do serviço antes de tomar sua decisão.</p><div class="hero-meta"><div><span>Cliente</span><strong>{customer}</strong></div><div><span>Unidade</span><strong>{safe(q['unit'] or 'KV CELL')}</strong></div><div><span>Válido até</span><strong>{safe(q['valid_until'] or 'Não informado')}</strong></div></div></section>
    <div class="summary"><div class="metric"><small>ITENS</small><b class="accent">{item_count}</b></div><div class="metric"><small>GARANTIA</small><b>{int(q.get('warranty_days') or 0)} dias</b></div><div class="metric"><small>STATUS</small><b>{label.title()}</b></div></div>
    <div class="box"><span class="eyebrow">DADOS DO CLIENTE E APARELHO</span><h2>Conferência</h2><div class="info-grid"><div class="info"><small>Cliente</small><b>{customer}</b></div><div class="info"><small>Telefone</small><b>{client_phone}</b></div><div class="info"><small>Aparelho</small><b>{device_label}</b></div><div class="info"><small>Orçamento</small><b>{safe(q['number'])}</b></div></div></div>
    <div class="box"><span class="eyebrow">SERVIÇOS E PRODUTOS</span><h2>Itens do orçamento</h2><div class="table-scroll"><table><thead><tr><th>Descrição</th><th>Qtd.</th><th>Unitário</th><th>Total</th></tr></thead><tbody>{rows_html}</tbody></table></div><div class="total-card"><div><small>Total geral</small><span>Valor apresentado neste orçamento</span></div><strong>{money_br(q.get('total'))}</strong></div></div>
    <div class="box"><span class="eyebrow">CONDIÇÕES</span><h2>Informações importantes</h2><div class="info-grid"><div class="info"><small>Garantia</small><b>{safe(q.get('warranty_type') or 'Conforme serviço')} • {int(q.get('warranty_days') or 0)} dias</b></div><div class="info"><small>Validade</small><b>{safe(q.get('valid_until') or 'Não informado')}</b></div></div><p>{safe(q.get('conditions') or 'As condições do serviço serão confirmadas no atendimento.')}</p><p>Em caso de troca de tela, a garantia é de 90 dias para tela com aro e 30 dias para tela sem aro. A película é brinde na troca de tela.</p><p>{safe(q.get('observations') or '')}</p></div>
    {actions}{contact}<p class="legal">Este link é exclusivo para consulta e resposta deste orçamento. Guarde o endereço para futuras consultas. Ao aprovar, você autoriza a KV CELL a seguir com o serviço descrito neste documento.</p><footer>{safe(store.get('company_name') or 'KV CELL')} • {safe(store.get('units') or 'LAGOS + MAGÉ')} • {safe(store.get('phone') or '')}</footer>
    </main><script>async function respond(a){{const msg=prompt(a==='aprovado'?'Mensagem opcional para a KV CELL:':'Motivo da recusa (opcional):','');try{{const r=await fetch(location.pathname,{{method:'POST',headers:{{'Content-Type':'application/json'}},body:JSON.stringify({{action:a,message:msg||''}})}});const d=await r.json();document.getElementById('msg').textContent=d.ok?'Resposta registrada com sucesso. Obrigado!':'Não foi possível registrar sua resposta.';if(d.ok)setTimeout(()=>location.reload(),700)}}catch{{document.getElementById('msg').textContent='Falha de conexão. Tente novamente.'}}}}async function copyLink(btn){{try{{await navigator.clipboard.writeText(location.href);if(btn){{const old=btn.textContent;btn.textContent='✓ Copiado';setTimeout(()=>btn.textContent=old,1400)}}}}catch{{prompt('Copie o link abaixo:',location.href)}}}}async function shareLink(){{try{{if(navigator.share)await navigator.share({{title:'Orçamento {safe(q["number"])} • KV CELL',text:'Confira seu orçamento da KV CELL',url:location.href}});else{{await navigator.clipboard.writeText(location.href);alert('Link copiado!')}}}}catch{{}}}}</script></body></html>'''

def public_os(s,c,store=None,devices=None,history=None):
    store=store or {}
    devices=devices or []
    history=history or []
    details=json.loads(s['details_json'] or '{}') if s.get('details_json') else {}
    photos=json.loads(s['photos'] or '[]')
    status=str(s.get('status') or 'aberto').lower()
    status_map={
        'aberto':('Aberta','1','Sua ordem de serviço foi recebida e está aguardando atendimento.'),
        'aguardando peça':('Aguardando peça','2','Estamos aguardando a chegada de uma peça necessária para o reparo.'),
        'em andamento':('Em andamento','2','Seu aparelho está sendo atendido pela nossa equipe técnica.'),
        'pronto':('Pronto para retirada','3','Seu aparelho está pronto para retirada.'),
        'finalizado':('Concluída','3','O serviço foi concluído.'),
        'entregue':('Entregue / Finalizada','4','Aparelho entregue. Obrigado pela preferência!'),
        'cancelado':('Cancelada','0','Esta ordem de serviço foi cancelada.'),
        'aprovado pelo cliente':('Aprovada','2','A OS foi aprovada pelo cliente e está liberada para atendimento.'),
        'recusado pelo cliente':('Recusada','0','A OS foi recusada pelo cliente.'),
    }
    label,step,message=status_map.get(status,(status.title(),'1','Acompanhe abaixo a evolução da sua ordem de serviço.'))
    stages=[('Entrada','Aparelho recebido',1),('Diagnóstico / Reparo','Equipe técnica',2),('Pronto','Pronto para retirada',3),('Entregue','Finalização',4)]
    try: current=int(step)
    except: current=1
    timeline=[]
    for title,sub,n in stages:
        done=current>=n and status not in ('cancelado','recusado pelo cliente')
        date_val='Concluído' if done else ('Em andamento' if n==current else 'Aguardando')
        timeline.append(f'<div class="timeline-step {"done" if done else ""}"><div class="timeline-dot">{"✓" if done else n}</div><div><b>{title}</b><small>{sub} • {date_val}</small></div></div>')
    timeline_html=''.join(timeline)
    phone=''.join(ch for ch in str(store.get('phone','')) if ch.isdigit())
    if phone and not phone.startswith('55'): phone='55'+phone
    wa=('https://wa.me/'+phone+'?text='+urllib.parse.quote('Olá! Sou '+str(c['name'] if c else 'cliente')+' e estou acompanhando a OS #'+str(s['id'])+' da KV CELL.') if phone else '')
    approval='' if status in ('aprovado pelo cliente','recusado pelo cliente','entregue','cancelado','finalizado') else '<section class="action-card"><span class="eyebrow">AUTORIZAÇÃO</span><h2>Autorizar execução do serviço</h2><p>Confira os dados da OS. Se estiver tudo certo, aprove diretamente por este link.</p><div class="action-row"><button class="btn primary" onclick="respond(\'aprovado\')">✓ Aprovar OS</button><button class="btn secondary" onclick="respond(\'recusado\')">✕ Recusar</button></div><p id="msg" class="feedback"></p></section>'
    contact=(f'<div class="action-row"><a class="btn whatsapp" href="{safe(wa)}" target="_blank" rel="noopener">💬 Falar com a KV CELL</a><button class="btn secondary" onclick="shareLink()">↗ Compartilhar acompanhamento</button><button class="btn secondary" onclick="copyLink(this)">🔗 Copiar link</button><button class="btn secondary" onclick="window.print()">🖨 Imprimir / PDF</button></div>' if wa else '<div class="action-row"><button class="btn secondary" onclick="shareLink()">↗ Compartilhar acompanhamento</button><button class="btn secondary" onclick="copyLink(this)">🔗 Copiar link</button><button class="btn secondary" onclick="window.print()">🖨 Imprimir / PDF</button></div>')
    thumbs=''.join(f'<img src="{safe(x)}" alt="Foto do aparelho" loading="lazy" onclick="openPhoto(this.src)">' for x in photos[:12])
    model=details.get('model') or details.get('device_model') or ''
    imei=details.get('imei') or ''
    serial=details.get('serial') or ''
    video=details.get('repair_video_url') or details.get('video_url') or ''
    # Only customer-facing item details are exposed; internal cost fields are never rendered here.
    used_parts=details.get('parts') or []
    used_products=details.get('products') or []
    customer_items=[]
    for item in used_parts:
        nm=safe(item.get('name') or 'Peça utilizada'); quality=safe(item.get('quality') or 'Não informada'); qty=max(1,int(item.get('qty') or 1)); unit=float(item.get('price') or 0)
        unit_br=(f'{unit:,.2f}'.replace(',', 'X').replace('.', ',').replace('X','.'))
        total_br=(f'{unit*qty:,.2f}'.replace(',', 'X').replace('.', ',').replace('X','.'))
        customer_items.append(f'<tr><td><b>{nm}</b><small>Qualidade: {quality}</small></td><td>{qty}</td><td>{(f"R$ {unit_br}" if unit>0 else 'Incluso no serviço')}</td><td><strong>{(f"R$ {total_br}" if unit>0 else 'Incluso no serviço')}</strong></td></tr>')
    for item in used_products:
        nm=safe(item.get('name') or 'Produto / acessório'); qty=max(1,int(item.get('qty') or 1)); unit=float(item.get('price') or 0)
        unit_br=(f'{unit:,.2f}'.replace(',', 'X').replace('.', ',').replace('X','.'))
        total_br=(f'{unit*qty:,.2f}'.replace(',', 'X').replace('.', ',').replace('X','.'))
        customer_items.append(f'<tr><td><b>{nm}</b><small>Produto / acessório</small></td><td>{qty}</td><td>{(f"R$ {unit_br}" if unit>0 else '—')}</td><td><strong>{(f"R$ {total_br}" if unit>0 else '—')}</strong></td></tr>')
    customer_items_html=('''<div class="box"><span class="eyebrow">PEÇAS E PRODUTOS</span><h2>O que foi substituído / utilizado</h2><div class="table-scroll"><table><thead><tr><th>Item e qualidade</th><th>Qtd.</th><th>Unitário</th><th>Total</th></tr></thead><tbody>'''+''.join(customer_items)+'''</tbody></table></div><p class="muted">Os valores dos itens são os registrados pela assistência nesta OS.</p></div>''') if customer_items else ''
    video_html=(f'<div class="box video-box"><span class="eyebrow">REGISTRO DO REPARO</span><h2>Vídeo do atendimento</h2><video controls preload="metadata" src="{safe(video)}"></video></div>') if video else '<div class="box video-box empty"><div class="video-icon">▶</div><b>Vídeo do reparo ainda não disponível</b><span>Quando a equipe publicar, ele aparecerá aqui.</span></div>'
    photo_box=f'<div class="box"><span class="eyebrow">EVIDÊNCIAS</span><h2>Fotos do aparelho</h2><div class="photo-grid">{thumbs or "<span class=\'muted\'>Nenhuma foto cadastrada.</span>"}</div></div>'
    customer=safe(c['name'] if c else 'Cliente')
    device_cards=''.join(
        '<div class="info"><small>Aparelho '+str(i+1)+'</small><b>'+safe(' '.join(part for part in (d.get('brand'),d.get('model')) if part) or 'Aparelho')+'</b>'
        +('<span>'+safe(' • '.join(part for part in (d.get('color'),d.get('storage')) if part))+'</span>' if d.get('color') or d.get('storage') else '')
        +'</div>'
        for i,d in enumerate(devices)
    )
    devices_html=('<div class="box"><span class="eyebrow">APARELHOS VINCULADOS</span><h2>Dispositivo(s) desta OS</h2><div class="info-grid">'+device_cards+'</div></div>' if device_cards else '')
    status_names={'aberto':'Aberta','aguardando peça':'Aguardando peça','em andamento':'Em andamento','pronto':'Pronto para retirada','finalizado':'Concluída','entregue':'Entregue','cancelado':'Cancelada','aprovado pelo cliente':'Aprovada pelo cliente','recusado pelo cliente':'Recusada pelo cliente'}
    history_items=''.join(
        '<div class="timeline-step"><div class="timeline-dot">•</div><div><b>'+safe(status_names.get(str(item.get('status') or '').lower(),str(item.get('status') or '').title()))+'</b><small>'+safe(item.get('changed_at') or '')+'</small></div></div>'
        for item in history
    )
    history_html=('<div class="box"><span class="eyebrow">HISTÓRICO</span><h2>Atualizações da ordem</h2><div class="timeline">'+history_items+'</div></div>' if history_items else '')
    return f'''<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#ffd400"><title>OS #{s['id']} • KV CELL</title><style>{PUBLIC_CSS}
    .topbar{{display:flex;justify-content:space-between;align-items:center;gap:16px;margin-bottom:18px}}.brand{{display:flex;align-items:center;gap:11px}}.logo{{width:44px;height:44px;border-radius:13px;background:#ffd400;color:#070707;display:grid;place-items:center;font-weight:1000;box-shadow:0 0 24px #ffd40022}}.brand b{{font-size:17px;color:#fff}}.brand small{{display:block;color:#777;font-size:9px;font-weight:800;letter-spacing:1.2px}}.top-actions{{display:flex;gap:8px}}.mini{{border:1px solid #303030;background:#111;color:#ddd;border-radius:11px;padding:9px 12px;font-weight:800;cursor:pointer}}.status-wrap{{display:flex;align-items:center;gap:10px;flex-wrap:wrap}}.status.pending{{background:#332f00;color:#ffd400;border-color:#665b00}}.status.done{{background:#0e3523;color:#6ff0a5;border-color:#1b6b43}}.status.warn{{background:#34230b;color:#ffbf65;border-color:#6b471b}}.status.bad{{background:#3d1515;color:#ff9b9b;border-color:#6b2727}}.status-dot{{width:8px;height:8px;border-radius:50%;background:currentColor;box-shadow:0 0 12px currentColor}}.hero-message{{max-width:700px;color:#aaa;line-height:1.65}}.hero-meta{{display:flex;gap:22px;flex-wrap:wrap;margin-top:20px;color:#aaa;font-size:12px}}.hero-meta strong{{display:block;color:#fff;font-size:14px;margin-top:3px}}.eyebrow{{font-size:10px;font-weight:900;letter-spacing:1.7px;color:#ffd400}}.info-grid{{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}}.info{{padding:13px 14px;background:#0b0b0b;border:1px solid #252525;border-radius:13px}}.info small{{display:block;color:#777;text-transform:uppercase;font-size:9px;font-weight:800;letter-spacing:.7px}}.info b{{display:block;color:#eee;margin-top:4px;word-break:break-word}}.timeline{{position:relative;display:grid;gap:0;margin-top:8px}}.timeline:before{{content:"";position:absolute;left:16px;top:15px;bottom:15px;width:2px;background:#292929}}.timeline-step{{position:relative;display:flex;gap:14px;padding:12px 0;color:#777}}.timeline-dot{{position:relative;z-index:1;width:34px;height:34px;min-width:34px;border-radius:50%;display:grid;place-items:center;background:#101010;border:1px solid #343434;font-size:11px;font-weight:900}}.timeline-step.done{{color:#fff}}.timeline-step.done .timeline-dot{{background:#ffd400;color:#080808;border-color:#ffd400;box-shadow:0 0 16px #ffd40022}}.timeline-step b{{display:block;font-size:14px}}.timeline-step small{{display:block;color:#777;margin-top:3px;font-size:11px}}.value-grid{{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}}.value-card{{padding:17px;border-radius:16px;background:#101010;border:1px solid #292929}}.value-card small{{display:block;color:#777;font-size:9px;font-weight:900;letter-spacing:1px}}.value-card strong{{display:block;color:#ffd400;font-size:22px;margin-top:5px}}.value-card span{{display:block;color:#999;font-size:11px;margin-top:4px}}.photo-grid{{display:grid;grid-template-columns:repeat(4,1fr);gap:9px}}.photo-grid img{{width:100%;height:130px;object-fit:cover;border-radius:13px;border:1px solid #292929;cursor:pointer;transition:.18s}}.photo-grid img:hover{{opacity:.82;transform:translateY(-1px)}}.video-box video{{width:100%;max-height:480px;border-radius:15px;background:#000;margin-top:10px}}.video-box.empty{{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;min-height:210px;color:#777}}.video-box.empty b{{color:#bbb;margin-top:8px}}.video-icon{{width:58px;height:58px;border-radius:50%;display:grid;place-items:center;background:#1b1b1b;border:1px solid #333;color:#ffd400}}.action-card{{margin:18px 0;padding:21px;border:1px solid #4f4600;border-radius:20px;background:linear-gradient(135deg,#171500,#0d0d0d);box-shadow:0 18px 50px #0007}}.action-card h2{{margin:5px 0 5px;font-size:20px}}.action-card p{{color:#999;margin:0;line-height:1.6}}.action-row{{display:flex;gap:10px;flex-wrap:wrap;margin-top:16px}}.btn{{appearance:none;border:1px solid #333;border-radius:13px;padding:13px 17px;font:inherit;font-size:13px;font-weight:900;text-decoration:none;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:7px;transition:.18s transform,.18s border-color,.18s background}}.btn:hover{{transform:translateY(-1px);border-color:#665b00}}.btn.primary{{background:#ffd400;color:#070707;border-color:#ffd400}}.btn.secondary{{background:#191919;color:#f4f4f4}}.btn.whatsapp{{background:#142016;color:#8af2ad;border-color:#275b38}}.feedback{{margin-top:12px!important;color:#ffd400!important;font-weight:800}}.legal{{font-size:10px;color:#666;line-height:1.6;margin-top:16px}}.lightbox{{position:fixed;inset:0;background:#000d;display:none;place-items:center;padding:20px;z-index:50}}.lightbox.open{{display:grid}}.lightbox img{{max-width:min(100%,1100px);max-height:90vh;border-radius:16px;box-shadow:0 30px 90px #000}}.lightbox button{{position:fixed;right:18px;top:18px;border:1px solid #555;background:#111;color:#fff;border-radius:10px;padding:10px 14px;cursor:pointer}}@media(max-width:700px){{.info-grid,.value-grid{{grid-template-columns:1fr 1fr}}.photo-grid{{grid-template-columns:repeat(2,1fr)}}.top-actions .mini{{display:none}}.action-row>*{{width:100%}}.hero-meta{{gap:13px}}}}@media(max-width:430px){{.info-grid,.value-grid{{grid-template-columns:1fr}}}}
    @media print{{body{{background:#fff;color:#111}}main{{max-width:none;padding:12px}}.hero,.box,.value-card,.action-card{{box-shadow:none;background:#fff;border-color:#ddd;color:#111}}.hero h1,.brand b,.value-card strong,.box strong{{color:#111}}.hero p,.muted,.legal{{color:#555}}.action-card,.action-row,.top-actions,.lightbox{{display:none!important}}header{{border-color:#ddd}}}}
    </style></head><body><main><div class="topbar"><div class="brand"><div class="logo">KV</div><div><b>{safe(store.get('company_name') or 'KV CELL')}</b><small>ACOMPANHAMENTO DIGITAL • ORDEM DE SERVIÇO</small></div></div><div class="top-actions"><button class="mini" onclick="copyLink(this)">🔗 Copiar</button><button class="mini" onclick="shareLink()">↗ Compartilhar</button></div></div>
    <section class="hero"><div class="status-wrap"><span class="eyebrow">ORDEM DE SERVIÇO #{s['id']}</span><span class="status {('done' if current>=3 else 'bad' if current==0 else 'warn' if current==2 else 'pending')}"><span class="status-dot"></span>{safe(label.upper())}</span></div><h1>Acompanhe seu aparelho</h1><p class="hero-message">{safe(message)}</p><div class="hero-meta"><div><span>Cliente</span><strong>{customer}</strong></div><div><span>Aparelho</span><strong>{safe(model or s.get('description') or 'Não informado')}</strong></div><div><span>Entrada</span><strong>{safe(s.get('created_at') or '—')}</strong></div><div><span>Previsão</span><strong>{safe(details.get('expected_date') or details.get('estimated_date') or 'A confirmar')}</strong></div></div></section>
    <div class="box"><span class="eyebrow">PROGRESSO DO SERVIÇO</span><h2>Linha do tempo</h2><div class="timeline">{timeline_html}</div></div>
    <div class="box"><span class="eyebrow">APARELHO</span><h2>Informações do dispositivo</h2><div class="info-grid"><div class="info"><small>Modelo</small><b>{safe(model or '—')}</b></div><div class="info"><small>IMEI</small><b>{safe(imei or '—')}</b></div><div class="info"><small>Nº de série</small><b>{safe(serial or '—')}</b></div><div class="info"><small>Técnico responsável</small><b>{safe(s.get('technician') or 'Não atribuído')}</b></div></div></div>
    {devices_html}{history_html}
    <div class="box"><span class="eyebrow">SERVIÇO</span><h2>O que está sendo feito</h2><p>{safe(s.get('description') or 'Serviço não detalhado.')}</p><p>{safe(s.get('diagnosis') or '')}</p></div>
    {customer_items_html}
    <div class="value-grid"><div class="value-card"><small>VALOR DO SERVIÇO</small><strong>{money_br(s.get('price'))}</strong><span>Valor registrado na OS</span></div><div class="value-card"><small>GARANTIA</small><strong>{safe(s.get('warranty') or '—')}</strong><span>Conforme condições da KV CELL</span></div><div class="value-card"><small>STATUS</small><strong>{safe(label)}</strong><span>Atualização pelo painel</span></div></div>
    {video_html}{photo_box}{approval}{contact}<div class="box"><span class="eyebrow">GARANTIA DIGITAL</span><h2>Verificação da OS</h2><p>Este link identifica a Ordem de Serviço #{s['id']} da KV CELL. Guarde o endereço para futuras consultas e conferência do atendimento.</p></div><p class="legal">{safe(store.get('company_name') or 'KV CELL')} • {safe(store.get('units') or 'LAGOS + MAGÉ')} • {safe(store.get('phone') or '')}</p><footer>KV CELL • Portal oficial do cliente</footer></main><div id="lightbox" class="lightbox" onclick="closePhoto()"><button onclick="event.stopPropagation();closePhoto()">Fechar</button><img id="lightboxImg" src="" alt="Foto ampliada" onclick="event.stopPropagation()"></div><script>async function respond(a){{const msg=prompt(a==='aprovado'?'Mensagem opcional para a KV CELL:':'Motivo da recusa (opcional):','');try{{const r=await fetch(location.pathname,{{method:'POST',headers:{{'Content-Type':'application/json'}},body:JSON.stringify({{action:a,message:msg||''}})}});const d=await r.json();document.getElementById('msg').textContent=d.ok?'Resposta registrada com sucesso. Obrigado!':'Não foi possível registrar sua resposta.';if(d.ok)setTimeout(()=>location.reload(),700)}}catch{{document.getElementById('msg').textContent='Falha de conexão. Tente novamente.'}}}}async function copyLink(btn){{try{{await navigator.clipboard.writeText(location.href);if(btn){{const old=btn.textContent;btn.textContent='✓ Copiado';setTimeout(()=>btn.textContent=old,1400)}}}}catch{{prompt('Copie o link abaixo:',location.href)}}}}async function shareLink(){{try{{if(navigator.share)await navigator.share({{title:'OS #{s["id"]} • KV CELL',text:'Acompanhe sua Ordem de Serviço',url:location.href}});else{{await navigator.clipboard.writeText(location.href);alert('Link copiado!')}}}}catch{{}}}}function openPhoto(src){{document.getElementById('lightboxImg').src=src;document.getElementById('lightbox').classList.add('open')}}function closePhoto(){{document.getElementById('lightbox').classList.remove('open')}}document.addEventListener('keydown',e=>{{if(e.key==='Escape')closePhoto()}})</script></body></html>'''

def public_unlock(x,c):
    details=json.loads(x['details_json'] or '{}') if x.get('details_json') else {}; photos=json.loads(x['photos'] or '[]'); thumbs=''.join(f'<img src="{p}" />' for p in photos[:8])
    return f"""<!doctype html><html lang="pt-BR"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Desbloqueio #{x['id']} • KV CELL</title><style>{PUBLIC_CSS}.photos img{{width:100px;height:100px;object-fit:cover;border-radius:10px;margin:5px}}</style><main><header><b>KV CELL</b><span>UNLOCKER PRO</span></header><section class="hero"><small>OS DE DESBLOQUEIO</small><h1>#{x['id']}</h1><p>{safe(c['name'] if c else 'Cliente')} • {safe(x['unit'])}</p><div class="status">{safe(x['status'])}</div></section><div class="grid"><div class="box"><h2>Aparelho</h2><p>{safe(x['brand'])} {safe(x['model'])}</p><p>IMEI: {safe(x['imei'])}</p><p>Nº de série: {safe(details.get('serial',''))}</p></div><div class="box"><h2>Serviço</h2><p>{safe(x['kind'])}</p><h2>R$ {float(x['price'] or 0):,.2f}</h2></div></div><div class="box"><h2>Prazo</h2><p>{safe(details.get('expected_date','Não informado'))} · {safe(details.get('estimated_time',''))}</p><p>Prioridade: {safe(details.get('priority','Normal'))}</p></div><div class="box"><b>Fotos</b><div class="photos">{thumbs or '<span>Sem fotos.</span>'}</div></div><div class="box"><b>Política de Garantia</b><p>Esta OS de desbloqueio é finalizada SEM GARANTIA. Serviços de software podem ser revertidos por atualizações.</p></div><footer>KV CELL • Link de acompanhamento</footer></main></html>"""

PUBLIC_CSS='''@font-face{font-family:Poppins;src:url('/static/fonts/pxiEyp8kv8JHgFVrJJfecg.woff2')}@font-face{font-family:Poppins;src:url('/static/fonts/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2');font-weight:600}@font-face{font-family:Poppins;src:url('/static/fonts/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2');font-weight:700}*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:radial-gradient(circle at 50% -18%,#292400 0,#0a0a0a 35%,#050505 75%);color:#f7f7f7;font-family:Poppins,Inter,Arial,sans-serif}main{max-width:1040px;margin:0 auto;padding:22px}header{display:flex;justify-content:space-between;align-items:center;padding:12px 0 16px;border-bottom:1px solid #292929}header b{font-size:25px;letter-spacing:-.5px;color:#ffd400}header span{font-size:10px;color:#9a9a9a;font-weight:700;letter-spacing:1.2px}.hero{position:relative;overflow:hidden;margin:24px 0;padding:30px;border:1px solid #3c3700;border-radius:24px;background:linear-gradient(135deg,#1b1800 0,#121212 48%,#0c0c0c 100%);box-shadow:0 20px 55px #0008}.hero:after{content:"";position:absolute;width:220px;height:220px;right:-90px;top:-100px;border-radius:50%;background:#ffd40012;filter:blur(5px)}.hero small{position:relative;z-index:1;color:#ffd400;font-size:10px;font-weight:800;letter-spacing:1.5px}.hero h1{position:relative;z-index:1;font-size:42px;line-height:1.1;margin:7px 0;color:#ffd400}.hero p{position:relative;z-index:1;color:#bdbdbd}.grid{display:grid;grid-template-columns:2fr 1fr;gap:16px}.box{background:linear-gradient(145deg,#151515,#0e0e0e);border:1px solid #292929;border-radius:19px;padding:20px;margin:14px 0;box-shadow:0 15px 40px #0006}.box h2,.box h3{margin:0 0 12px;font-size:17px}.box strong{color:#ffd400}table{width:100%;border-collapse:separate;border-spacing:0;margin-top:14px;overflow:hidden;border:1px solid #292929;border-radius:14px}td,th{padding:12px 13px;border-bottom:1px solid #262626;text-align:left}th{background:#1a1a1a;color:#a9a9a9;font-size:11px;text-transform:uppercase;letter-spacing:.6px}tr:last-child td{border-bottom:0}.status{display:inline-flex;align-items:center;gap:7px;padding:8px 12px;border-radius:999px;background:#332f00;color:#ffd400;border:1px solid #655900;font-weight:800;margin:10px 0}.status:before{content:"";width:7px;height:7px;border-radius:50%;background:#ffd400;box-shadow:0 0 10px #ffd400}.actions{display:flex;gap:10px;flex-wrap:wrap;margin:14px 0}.actions button,.actions a,button.pay{border:1px solid #343434;border-radius:13px;padding:13px 18px;font-weight:800;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;justify-content:center}.ok,.pay{background:#ffd400!important;color:#070707!important;border-color:#ffd400!important}.no{background:#222!important;color:#fff!important}.whatsapp{background:#151515;color:#ffd400;border-color:#4d4500!important}.timeline{display:grid;gap:10px}.step{position:relative;padding:14px 16px 14px 42px;background:#101010;border:1px solid #292929;border-radius:14px;color:#8f8f8f}.step:before{content:"";position:absolute;left:17px;top:18px;width:11px;height:11px;border:2px solid #555;border-radius:50%}.step.done{color:#f4f4f4;border-color:#4b4300;background:linear-gradient(90deg,#171500,#101010)}.step.done:before{background:#ffd400;border-color:#ffd400;box-shadow:0 0 12px #ffd40066}.step b{display:block}.step small{display:block;margin-top:4px;color:#777}.notice{padding:14px;border:1px solid #514900;background:#171500;border-radius:13px;color:#d9d9d9}.pix textarea{width:100%;min-height:82px;margin-top:8px;background:#090909;color:#ddd;border:1px solid #333;border-radius:12px;padding:10px}.pix button{margin-top:8px;background:#222;color:#fff;border:1px solid #333;border-radius:10px;padding:10px 14px;font-weight:700}.metric-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.metric{background:#101010;border:1px solid #292929;border-radius:16px;padding:15px}.metric small{display:block;color:#8e8e8e;font-size:10px;font-weight:700}.metric b{display:block;font-size:22px;margin-top:5px}.pill{display:inline-block;padding:5px 9px;border-radius:999px;background:#252525}.pill.ok{background:#123d24;color:#76f0a1}.pill.late{background:#4a1717;color:#ff9b9b}footer{color:#737373;text-align:center;padding:30px 10px;font-size:11px}@media(max-width:700px){.grid{grid-template-columns:1fr}.metric-grid{grid-template-columns:repeat(2,1fr)}main{padding:14px}.hero h1{font-size:30px}header{gap:10px}header span{font-size:8px}}@media(max-width:430px){.metric-grid{grid-template-columns:1fr 1fr}.actions>*{width:100%}}'''
PUBLIC_CSS+='''@keyframes publicRise{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}.hero{animation:publicRise .55s ease-out both}.box,.metric,.value-card{animation:publicRise .55s ease-out both}.box:nth-of-type(2){animation-delay:.06s}.box:nth-of-type(3){animation-delay:.12s}.box:nth-of-type(4){animation-delay:.18s}.hero:after{animation:publicGlow 7s ease-in-out infinite alternate}@keyframes publicGlow{from{transform:translate(-8px,0) scale(.92);opacity:.5}to{transform:translate(8px,8px) scale(1.08);opacity:1}}.actions a:hover,.actions button:hover{transform:translateY(-2px);box-shadow:0 10px 28px #ffd40020;transition:transform .2s,box-shadow .2s}@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important;transition-duration:.01ms!important}}@media print{.actions,.action-row,.top-actions,.action-card{display:none!important}body{background:#fff!important;color:#111!important}main{max-width:none;padding:8px}.hero,.box,.metric,.value-card{animation:none!important;box-shadow:none;background:#fff!important;border-color:#ddd;color:#111}.hero h1,.box strong,.value-card strong{color:#111!important}header{border-color:#ddd}}'''

INDEX='''<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>KV CELL OS PRO</title><link rel="stylesheet" href="/static/app.css"><link rel="stylesheet" href="/static/v4000.css"><link rel="stylesheet" href="/static/adapti.css"><link rel="stylesheet" href="/static/pro_neon.css"><link rel="stylesheet" href="/static/pro_ref.css"><link rel="stylesheet" href="/static/pro_support.css"><link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"><script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script></head><body><div id="app"></div><script src="/static/app.js"></script><script src="/static/adapti.js"></script><script src="/static/pro_neon.js"></script></body></html>'''

# KV CELL V810 runtime entrypoint — required by Square Cloud MAIN=app.py
if __name__ == '__main__':
    host = os.environ.get('HOST', '0.0.0.0')
    server = ThreadingHTTPServer((host, PORT), Handler)
    print(f'KV CELL OS PREMIUM V4000.0 listening on {host}:{PORT}', flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()
