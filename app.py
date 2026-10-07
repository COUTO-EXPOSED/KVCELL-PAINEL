import os, json, sqlite3, hashlib, secrets, base64, zipfile, io, csv, html, urllib.request, urllib.parse, urllib.error, time, re, threading, shutil
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
CREATE TABLE IF NOT EXISTS customers(id INTEGER PRIMARY KEY AUTOINCREMENT,type TEXT,name TEXT,document_type TEXT,document TEXT,phone_type TEXT,phone TEXT,email TEXT,address TEXT,city TEXT,birth_date TEXT,balance REAL DEFAULT 0,observations TEXT,created_at TEXT);
CREATE TABLE IF NOT EXISTS devices(id INTEGER PRIMARY KEY AUTOINCREMENT,unit TEXT,customer_id INTEGER,brand TEXT,model TEXT,imei TEXT,serial TEXT,color TEXT,storage TEXT,status TEXT,photos TEXT DEFAULT '[]',notes TEXT,created_at TEXT);
CREATE TABLE IF NOT EXISTS services(id INTEGER PRIMARY KEY AUTOINCREMENT,unit TEXT,customer_id INTEGER,device_id INTEGER,kind TEXT,description TEXT,checklist TEXT,diagnosis TEXT,status TEXT,technician TEXT,price REAL,warranty TEXT,photos TEXT DEFAULT '[]',notes TEXT,public_token TEXT,created_at TEXT,updated_at TEXT,cost_material REAL DEFAULT 0,cost_labor REAL DEFAULT 0,cost_extra REAL DEFAULT 0,cost_total REAL DEFAULT 0,profit REAL DEFAULT 0,warranty_of_id INTEGER DEFAULT NULL,details_json TEXT DEFAULT '{}',technician_id INTEGER DEFAULT NULL);
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
CREATE TABLE IF NOT EXISTS film_compat(id INTEGER PRIMARY KEY AUTOINCREMENT,brand TEXT,model TEXT,aliases TEXT,master_code TEXT,group_name TEXT,screen_size TEXT,fit_notes TEXT,source_note TEXT,confidence TEXT DEFAULT 'manual',created_at TEXT);
CREATE TABLE IF NOT EXISTS ai_chat(id INTEGER PRIMARY KEY AUTOINCREMENT,unit TEXT,user_id INTEGER,user_name TEXT,role TEXT,message TEXT,reply TEXT,created_at TEXT);
CREATE TABLE IF NOT EXISTS activity_log(id INTEGER PRIMARY KEY AUTOINCREMENT,unit TEXT,tag TEXT,user_id INTEGER,user_name TEXT,action TEXT,entity TEXT,entity_id INTEGER,details TEXT,created_at TEXT);
CREATE TABLE IF NOT EXISTS undo_stack(id INTEGER PRIMARY KEY AUTOINCREMENT,unit TEXT,user_id INTEGER,action TEXT,table_name TEXT,row_id INTEGER,before_json TEXT,after_json TEXT,undone INTEGER DEFAULT 0,created_at TEXT,undone_at TEXT);
CREATE TABLE IF NOT EXISTS appointments(id INTEGER PRIMARY KEY AUTOINCREMENT,unit TEXT,customer_id INTEGER,title TEXT,service_type TEXT,start_at TEXT,end_at TEXT,status TEXT,technician TEXT,notes TEXT,created_at TEXT);
CREATE TABLE IF NOT EXISTS technicians(id INTEGER PRIMARY KEY AUTOINCREMENT,unit TEXT,name TEXT,phone TEXT,email TEXT,specialties TEXT,active INTEGER DEFAULT 1,created_at TEXT);
CREATE TABLE IF NOT EXISTS suppliers(id INTEGER PRIMARY KEY AUTOINCREMENT,unit TEXT,name TEXT,document TEXT,phone TEXT,email TEXT,city TEXT,notes TEXT,created_at TEXT);
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
        if path=='/api/fiado': return self.fiado_api(qs)
        if path=='/api/fiado-payments': return self.json(rows('SELECT * FROM fiado_payments WHERE account_id=? ORDER BY id DESC',(int(qs.get('id',['0'])[0] or 0),)))
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
        if path=='/api/upload': return self.upload(data,u)
        if path=='/api/settings': return self.save_settings(data,u)
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
        maps={'customers':'customers','devices':'devices','services':'services','unlocks':'unlocks','purchases':'purchases','inventory':'inventory','models':'models','quotes':'quotes','sales':'sales','finance':'finance','forgotten':'forgotten','contracts':'contracts','users':'users','chat':'chat','audit':'audit','appointments':'appointments','technicians':'technicians','suppliers':'suppliers','guarantees':'guarantees','community':'community_posts','referrals':'referrals','catalog-products':'catalog_products'}
        if resource not in maps:return self.json({'error':'Recurso inválido'},404)
        table=maps[resource]; unit=qs.get('unit',['TODOS'])[0]
        wh=[]; args=[]
        if unit!='TODOS' and table not in ('customers','users','models','audit'): wh.append('unit=?');args.append(unit)
        if resource=='services' and qs.get('kind',[''])[0]:wh.append('kind=?');args.append(qs['kind'][0])
        if qs.get('customer_id',[''])[0] and table in ('customers','devices','services','unlocks','purchases','quotes','sales','contracts'):
            wh.append('customer_id=?');args.append(int(qs['customer_id'][0]))
        sql='SELECT * FROM '+table+(' WHERE '+' AND '.join(wh) if wh else '')+' ORDER BY id DESC LIMIT 500'
        data=rows(sql,args)
        if resource in ('services','unlocks','quotes'):
            for x in data:
                if not str(x.get('public_token') or '').strip():
                    t=secrets.token_urlsafe(18).replace('-','').replace('_','')
                    try:
                        write(f"UPDATE {table} SET public_token=? WHERE id=?",(t,x['id']))
                        x['public_token']=t
                    except Exception:
                        pass
        if resource in ('services','unlocks'):
            for x in data:
                if x.get('customer_id'):
                    c=one('SELECT name,phone FROM customers WHERE id=?',(x['customer_id'],)); x['customer_name']=c['name'] if c else ''; x['customer_phone']=c['phone'] if c else ''
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

    def create_api(self,r,d,u):
        if r=='customers':
            rid=write('INSERT INTO customers(type,name,document_type,document,phone_type,phone,email,address,city,birth_date,balance,observations,created_at) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)',(d.get('type','PF'),d.get('name'),d.get('document_type','CPF'),d.get('document'),d.get('phone_type','Celular'),d.get('phone'),d.get('email'),d.get('address'),d.get('city'),d.get('birth_date'),float(d.get('balance') or 0),d.get('observations'),now()))
        elif r=='devices': rid=write('INSERT INTO devices(unit,customer_id,brand,model,imei,serial,color,storage,status,photos,notes,created_at) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),d.get('customer_id') or None,d.get('brand'),d.get('model'),d.get('imei'),d.get('serial'),d.get('color'),d.get('storage'),d.get('status','Em bancada'),js(d.get('photos',[])),d.get('notes'),now()))
        elif r=='services':
            t=token(); price=float(d.get('price') or 0); cm=float(d.get('cost_material') or 0); cl=float(d.get('cost_labor') or 0); ce=float(d.get('cost_extra') or 0); ct=cm+cl+ce; profit=price-ct
            rid=write('INSERT INTO services(unit,customer_id,device_id,kind,description,checklist,diagnosis,status,technician,technician_id,price,warranty,photos,notes,public_token,created_at,updated_at,cost_material,cost_labor,cost_extra,cost_total,profit,warranty_of_id,details_json) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),d.get('customer_id') or None,d.get('device_id') or None,d.get('kind','conserto'),d.get('description'),js(d.get('checklist',{})),d.get('diagnosis'),d.get('status','aberto'),d.get('technician'),d.get('technician_id') or None,price,d.get('warranty'),js(d.get('photos',[])),d.get('notes'),t,now(),now(),cm,cl,ce,ct,profit,d.get('warranty_of_id') or None,js(d.get('details',{}))))
            if d.get('status') in ('entregue',):
                if price>0: write('INSERT INTO finance(unit,type,category,description,amount,ref_type,ref_id,created_at) VALUES(?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),'entrada','Serviço',d.get('description') or 'Conserto',price,'service',rid,now()))
                if ct>0: write('INSERT INTO finance(unit,type,category,description,amount,ref_type,ref_id,created_at) VALUES(?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),'saida','Custo OS',d.get('description') or 'Custo de serviço',ct,'service_cost',rid,now()))
        elif r=='unlocks':
            t=token(); price=float(d.get('price') or 0); cm=float(d.get('cost_material') or 0); cl=float(d.get('cost_labor') or 0); ce=float(d.get('cost_extra') or 0); ct=cm+cl+ce; profit=price-ct
            rid=write('INSERT INTO unlocks(unit,customer_id,device_id,brand,model,imei,kind,checklist,status,operator,technician_id,price,photos,notes,public_token,created_at,cost_material,cost_labor,cost_extra,cost_total,profit,warranty_of_id,details_json) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),d.get('customer_id') or None,d.get('device_id') or None,d.get('brand'),d.get('model'),d.get('imei'),d.get('kind'),js(d.get('checklist',{})),d.get('status','aberto'),d.get('operator'),d.get('technician_id') or None,price,js(d.get('photos',[])),d.get('notes'),t,now(),cm,cl,ce,ct,profit,d.get('warranty_of_id') or None,js(d.get('details',{}))))
            write('UPDATE unlocks SET details_json=? WHERE id=?',(js(d.get('details',{})),rid))
            if price>0: write('INSERT INTO finance(unit,type,category,description,amount,ref_type,ref_id,created_at) VALUES(?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),'entrada','Desbloqueio',d.get('kind') or 'Desbloqueio',price,'unlock',rid,now()))
            if ct>0: write('INSERT INTO finance(unit,type,category,description,amount,ref_type,ref_id,created_at) VALUES(?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),'saida','Custo Desbloqueio',d.get('kind') or 'Custo de desbloqueio',ct,'unlock_cost',rid,now()))
        elif r=='purchases':
            total=float(d.get('amount') or 0)+float(d.get('expenses') or 0)+float(d.get('freight') or 0); sp=float(d.get('suggested_price') or 0); sold=1 if str(d.get('sold','')).lower() in ('1','true','sim','on') else 0
            status='vendido' if sold else d.get('status','vitrine')
            rid=write('INSERT INTO purchases(unit,customer_id,device_id,brand,model,imei,purchase_date,amount,expenses,freight,total_cost,suggested_price,expected_profit,photos,checklist,observations,status,created_at,sold,sale_date,sale_place,sale_price,sale_payment,sale_installments,sale_fee,sale_notes,details_json) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),d.get('customer_id') or None,d.get('device_id') or None,d.get('brand'),d.get('model'),d.get('imei'),d.get('purchase_date') or date.today().isoformat(),float(d.get('amount') or 0),float(d.get('expenses') or 0),float(d.get('freight') or 0),total,sp,sp-total,js(d.get('photos',[])),js(d.get('checklist',{})),d.get('observations'),status,now(),sold,d.get('sale_date'),d.get('sale_place'),float(d.get('sale_price') or 0),d.get('sale_payment'),int(d.get('sale_installments') or 1),float(d.get('sale_fee') or 0),d.get('sale_notes'),js(d.get('details',{}))))
            write('INSERT INTO finance(unit,type,category,description,amount,ref_type,ref_id,created_at) VALUES(?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),'saida','Compra de aparelho',f"{d.get('brand','')} {d.get('model','')}",total,'purchase',rid,now()))
            invname=f"{d.get('brand','')} {d.get('model','')}".strip(); code=d.get('imei') or ('PUR-'+str(rid)); write('INSERT INTO inventory(unit,code,name,type,category,qty,min_qty,cost,price,supplier,compatibility,notes,created_at,source_type,source_id) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),code,invname,'Aparelho','Vitrine',1,0,total,sp,d.get('supplier'),'IMEI: '+str(d.get('imei') or ''),(d.get('observations') or '')+' • Compra e Venda #'+str(rid),now(),'purchase',rid))
            if sold and float(d.get('sale_price') or 0)>0:
                net=float(d.get('sale_price') or 0)-float(d.get('sale_fee') or 0)
                write('INSERT INTO finance(unit,type,category,description,amount,ref_type,ref_id,created_at) VALUES(?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),'entrada','Venda de aparelho',f"{d.get('brand','')} {d.get('model','')}",net,'purchase_sale',rid,now()))
        elif r=='inventory': rid=write('INSERT INTO inventory(unit,code,name,type,category,qty,min_qty,cost,price,supplier,compatibility,notes,created_at) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),d.get('code'),d.get('name'),d.get('type','Peça'),d.get('category'),float(d.get('qty') or 0),float(d.get('min_qty') or 0),float(d.get('cost') or 0),float(d.get('price') or 0),d.get('supplier'),d.get('compatibility'),d.get('notes'),now()))
        elif r=='models': rid=write('INSERT INTO models(brand,model,service_prices,margin,warranty,notes,created_at) VALUES(?,?,?,?,?,?,?)',(d.get('brand'),d.get('model'),js(d.get('service_prices',{})),float(d.get('margin') or 0),d.get('warranty'),d.get('notes'),now()))
        elif r=='quotes':
            num='ORC-'+datetime.now().strftime('%Y%m')+'-'+str(secrets.randbelow(9000)+1000); t=token(); items=d.get('items',[]); total=float(d.get('total') or 0); auto_total=sum(float(x.get('total',x.get('price',0)) or 0) for x in (items or [])); travel_enabled=1 if str(d.get('travel_enabled','0')).lower() in ('1','true','sim','on') else 0; travel_fee=float(d.get('travel_fee') or 0) if travel_enabled else 0; total=(total if total>0 else auto_total+travel_fee); warranty_days=int(d.get('warranty_days') or 0); rid=write('INSERT INTO quotes(number,unit,customer_id,device_id,items,subtotal,total,warranty_type,warranty_days,travel_enabled,travel_fee,quote_type,conditions,observations,valid_until,status,public_token,created_at) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',(num,d.get('unit','TODOS'),d.get('customer_id') or None,d.get('device_id') or None,js(items),float(d.get('subtotal') or total),total,d.get('warranty_type','personalizada'),warranty_days,travel_enabled,travel_fee,d.get('quote_type','servico'),d.get('conditions'),d.get('observations'),d.get('valid_until'),d.get('status','aberto'),t,now()))
            return self.json({'ok':True,'id':rid,'number':num,'public_url':f'/public/quote/{t}'})
        elif r=='sales':
            total=float(d.get('total') or 0); fee=float(d.get('payment_fee') or 0); net=float(d.get('net_total') or (total-fee))
            rid=write('INSERT INTO sales(unit,customer_id,purchase_id,items,total,payment,created_at,payment_fee,net_total,payment_details) VALUES(?,?,?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),d.get('customer_id') or None,d.get('purchase_id') or None,d.get('items'),total,d.get('payment'),now(),fee,net,d.get('payment_details')))
            write('INSERT INTO finance(unit,type,category,description,amount,ref_type,ref_id,created_at) VALUES(?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),'entrada','Venda',d.get('items') or 'Venda',net,'sale',rid,now()))
            if d.get('purchase_id'):
                pid=int(d.get('purchase_id')); pp=one('SELECT * FROM purchases WHERE id=?',(pid,))
                if pp and pp.get('status')!='vendido':
                    write("UPDATE purchases SET sold=1,status='vendido',sale_date=?,sale_place='PDV',sale_price=?,sale_payment=?,sale_fee=? WHERE id=?",(date.today().isoformat(),total,d.get('payment'),fee,pid))
                    if pp.get('device_id'): write("UPDATE devices SET status='Vendido' WHERE id=?",(pp['device_id'],))
                    write("UPDATE inventory SET qty=0,notes=COALESCE(notes,'')||' • VENDIDO NO PDV' WHERE source_type='purchase' AND source_id=?",(pid,))
            if str(d.get('payment') or '').lower()=='fiado':
                due=d.get('due_date'); down=float(d.get('down_payment') or 0); balance=max(0,total-down); installments=max(1,int(d.get('installments') or 1)); inst_value=float(d.get('installment_value') or (balance/installments if installments else balance)); frequency=d.get('frequency') or 'Mensal (30 dias)'
                fid=write('INSERT INTO fiado_accounts(unit,customer_id,source_type,source_id,description,total,down_payment,balance,due_date,status,notes,installments,installment_value,frequency,created_at) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),d.get('customer_id') or None,'sale',rid,d.get('items') or 'Venda fiada',total,down,balance,due,'aberto',d.get('payment_details'),installments,inst_value,frequency,now()))
                if down>0: write('INSERT INTO finance(unit,type,category,description,amount,ref_type,ref_id,created_at) VALUES(?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),'entrada','Fiado / Entrada',d.get('items') or 'Venda fiada',down,'fiado',fid,now()))
        elif r=='finance': rid=write('INSERT INTO finance(unit,type,category,description,amount,due_date,paid,created_at) VALUES(?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),d.get('type','entrada'),d.get('category'),d.get('description'),float(d.get('amount') or 0),d.get('due_date'),1 if d.get('paid',True) else 0,now()))
        elif r=='forgotten': rid=write('INSERT INTO forgotten(unit,customer_id,brand,model,imei,possible_owner,phone,photos,checklist,notes,status,created_at) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),d.get('customer_id') or None,d.get('brand'),d.get('model'),d.get('imei'),d.get('possible_owner'),d.get('phone'),js(d.get('photos',[])),js(d.get('checklist',{})),d.get('notes'),d.get('status','aguardando identificação'),now()))
        elif r=='contracts': rid=write('INSERT INTO contracts(unit,type,customer_id,device_id,payload,customer_signature,store_signature,created_at) VALUES(?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),d.get('type'),d.get('customer_id') or None,d.get('device_id') or None,js(d.get('payload',{})),d.get('customer_signature'),d.get('store_signature'),now()))
        elif r=='users':
            if u['role']!='admin':return self.json({'error':'Somente administrador'},403)
            rid=write('INSERT INTO users(name,email,password_hash,role,unit,permissions,created_at) VALUES(?,?,?,?,?,?,?)',(d.get('name'),d.get('email'),ph(d.get('password','123456')),d.get('role','atendente'),d.get('unit','TODOS'),js(d.get('permissions',{'dashboard':True})),now()))
        elif r=='appointments':
            rid=write('INSERT INTO appointments(unit,customer_id,title,service_type,start_at,end_at,status,technician,notes,created_at) VALUES(?,?,?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),d.get('customer_id') or None,d.get('title'),d.get('service_type'),d.get('start_at'),d.get('end_at'),d.get('status','agendado'),d.get('technician'),d.get('notes'),now()))
        elif r=='technicians':
            rid=write('INSERT INTO technicians(unit,name,phone,email,specialties,active,created_at) VALUES(?,?,?,?,?,?,?)',(d.get('unit','TODOS'),d.get('name'),d.get('phone'),d.get('email'),d.get('specialties'),1 if d.get('active',True) else 0,now()))
        elif r=='suppliers':
            rid=write('INSERT INTO suppliers(unit,name,document,phone,email,city,notes,created_at) VALUES(?,?,?,?,?,?,?,?)',(d.get('unit','TODOS'),d.get('name'),d.get('document'),d.get('phone'),d.get('email'),d.get('city'),d.get('notes'),now()))
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
        elif r=='film_compat': rid=write('INSERT INTO film_compat(brand,model,aliases,master_code,group_name,screen_size,fit_notes,source_note,confidence,created_at) VALUES(?,?,?,?,?,?,?,?,?,?)',(d.get('brand'),d.get('model'),d.get('aliases'),d.get('master_code'),d.get('group_name'),d.get('screen_size'),d.get('fit_notes'),d.get('source_note','cadastro interno'),d.get('confidence','manual'),now()))
        elif r=='chat': rid=write('INSERT INTO chat(unit,user_name,message,created_at) VALUES(?,?,?,?)',(d.get('unit','TODOS'),u['name'],d.get('message'),now()))
        else:return self.json({'error':'Recurso não suportado'},404)
        audit(u['id'],'create',r,rid,js(d)); uu=dict(u); uu['unit']=d.get('unit',u.get('unit','TODOS')); activity(uu,'LOG',f'Criou {r}',r,rid,js(d)); push_undo(uu,f'Criou {r}',r,rid,{},d); return self.json({'ok':True,'id':rid})
    def update_api(self,r,d,u):
        table=r; rid=d.get('id')
        allowed={'customers':['type','name','document_type','document','phone_type','phone','email','address','city','birth_date','balance','observations'],'models':['brand','model','service_prices','margin','warranty','notes'],'users':['name','email','role','unit','permissions','active'],'services':['unit','customer_id','device_id','kind','description','status','diagnosis','technician','technician_id','price','warranty','notes','checklist','photos','cost_material','cost_labor','cost_extra','warranty_of_id','details_json'],'unlocks':['unit','customer_id','device_id','brand','model','kind','status','operator','technician_id','price','notes','checklist','photos','cost_material','cost_labor','cost_extra','warranty_of_id','details_json'],'devices':['unit','customer_id','brand','model','imei','serial','color','storage','status','notes','photos'],'forgotten':['unit','customer_id','brand','model','imei','possible_owner','phone','status','notes','photos','checklist'],'quotes':['unit','customer_id','device_id','status','valid_until','observations','conditions','warranty_type','warranty_days','travel_enabled','travel_fee','items','subtotal','total'],'inventory':['unit','code','name','type','category','qty','min_qty','price','cost','supplier','compatibility','notes'],'purchases':['unit','customer_id','device_id','brand','model','imei','purchase_date','amount','expenses','freight','total_cost','suggested_price','expected_profit','sold','sale_date','sale_place','sale_price','sale_payment','sale_installments','sale_fee','sale_notes','status','observations','photos','checklist','details_json'],'sales':['unit','customer_id','purchase_id','items','total','payment','payment_fee','net_total','payment_details'],'finance':['unit','type','category','description','amount','due_date','paid'],'appointments':['unit','customer_id','title','service_type','start_at','end_at','status','technician','notes'],'technicians':['unit','name','phone','email','specialties','active'],'suppliers':['unit','name','document','phone','email','city','notes'],'guarantees':['unit','customer_id','source_type','source_id','device','description','start_date','end_date','status','notes'],'community':['unit','title','message','type','status'],'referrals':['unit','customer_id','service_name','commission','referrer','link','status'],'catalog-products':['unit','name','category','price','stock','image','active'],'fiado':['unit','customer_id','source_type','source_id','description','total','down_payment','balance','due_date','status','notes','installments','installment_value','frequency']}
        if table not in allowed:return self.json({'error':'Atualização não permitida'},400)
        before=one('SELECT * FROM '+table+' WHERE id=?',(rid,))
        if not before:return self.json({'error':'Registro não encontrado'},404)
        fields=[f for f in allowed[table] if f in d]; vals=[]
        if not fields:return self.json({'error':'Nenhum campo'},400)
        for f in fields:
            v=d[f]; v=js(v) if f in ('checklist','photos','details_json','items','permissions','service_prices') and not isinstance(v,str) else v; vals.append(v)
        if table in ('services','unlocks'):
            price=float(d.get('price',before['price']) or 0); cm=float(d.get('cost_material',before['cost_material']) or 0); cl=float(d.get('cost_labor',before['cost_labor']) or 0); ce=float(d.get('cost_extra',before['cost_extra']) or 0);
            for k,v in [('cost_material',cm),('cost_labor',cl),('cost_extra',ce),('cost_total',cm+cl+ce),('profit',price-(cm+cl+ce))]:
                if k not in fields: fields.append(k); vals.append(v)
        if table=='services' and 'updated_at' not in fields: fields.append('updated_at'); vals.append(now())
        vals.append(rid); write('UPDATE '+table+' SET '+','.join(f+'=?' for f in fields)+' WHERE id=?',vals)
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
            write('DELETE FROM finance WHERE ref_type IN (?,?) AND ref_id=?',(rt,costrt,rid))
            finance_ok=(table=='unlocks' or str(after['status'] or '')=='entregue')
            if finance_ok:
                if float(after['price'] or 0)>0: write('INSERT INTO finance(unit,type,category,description,amount,ref_type,ref_id,created_at) VALUES(?,?,?,?,?,?,?,?)',(after['unit'],'entrada',label,after['description'] if table=='services' else after['kind'],float(after['price'] or 0),rt,rid,now()))
                if float(after['cost_total'] or 0)>0: write('INSERT INTO finance(unit,type,category,description,amount,ref_type,ref_id,created_at) VALUES(?,?,?,?,?,?,?,?)',(after['unit'],'saida','Custo '+('OS' if table=='services' else 'Desbloqueio'),after['description'] if table=='services' else after['kind'],float(after['cost_total'] or 0),costrt,rid,now()))
        if table=='sales':
            write("DELETE FROM finance WHERE ref_type='sale' AND ref_id=?",(rid,));
            net2=float(after['net_total'] or after['total'] or 0); 
            if net2>0: write('INSERT INTO finance(unit,type,category,description,amount,ref_type,ref_id,created_at) VALUES(?,?,?,?,?,?,?,?)',(after['unit'],'entrada','Venda',after['items'] or 'Venda',net2,'sale',rid,now()))
        if table=='purchases':
            write("DELETE FROM finance WHERE ref_type IN ('purchase','purchase_sale') AND ref_id=?",(rid,));
            if float(after['total_cost'] or 0)>0: write('INSERT INTO finance(unit,type,category,description,amount,ref_type,ref_id,created_at) VALUES(?,?,?,?,?,?,?,?)',(after['unit'],'saida','Compra de aparelho',f"{after['brand'] or ''} {after['model'] or ''}",float(after['total_cost'] or 0),'purchase',rid,now()))
            if int(after['sold'] or 0) and float(after['sale_price'] or 0)>0: write('INSERT INTO finance(unit,type,category,description,amount,ref_type,ref_id,created_at) VALUES(?,?,?,?,?,?,?,?)',(after['unit'],'entrada','Venda de aparelho',f"{after['brand'] or ''} {after['model'] or ''}",float(after['sale_price'] or 0)-float(after['sale_fee'] or 0),'purchase_sale',rid,now()))
        if table=='purchases':
            if str(after['status'] or '')=='vitrine' and not int(after['sold'] or 0): write("UPDATE inventory SET qty=1,price=?,cost=?,notes=REPLACE(COALESCE(notes,''),' • VENDIDO NO PDV','') WHERE source_type='purchase' AND source_id=?",(float(after['suggested_price'] or 0),float(after['total_cost'] or 0),rid))
            if str(after['status'] or '') in ('vendido','sucata') or int(after['sold'] or 0): write("UPDATE inventory SET qty=0 WHERE source_type='purchase' AND source_id=?",(rid,))
        if table=='fiado':
            paid=float(one('SELECT COALESCE(SUM(amount),0) n FROM fiado_payments WHERE account_id=?',(rid,))['n'] or 0); bal=max(0,float(after['total'] or 0)-float(after['down_payment'] or 0)-paid); write('UPDATE fiado_accounts SET balance=?,status=? WHERE id=?',(bal,'pago' if bal<=0 else ('atrasado' if after['due_date'] and after['due_date']<date.today().isoformat() else 'aberto'),rid))
        audit(u['id'],'update',table,rid,js(d)); uu=dict(u); uu['unit']=before['unit'] if 'unit' in before.keys() else u.get('unit','TODOS'); activity(uu,'LOG',f'Alterou {table}',table,rid,js(d)); push_undo(uu,f'Alterou {table}',table,rid,dict(before),dict(after)); return self.json({'ok':True,'profit':float(after.get('profit',0) or 0)})
    def do_DELETE(self):
        p=urlparse(self.path); u=self.require()
        if not u:return
        if not p.path.startswith('/api/'): return self.send(404,b'Not found','text/plain')
        resource=p.path[5:]; qs=parse_qs(p.query); rid=int(qs.get('id',['0'])[0] or 0)
        maps={'customers':'customers','devices':'devices','services':'services','unlocks':'unlocks','purchases':'purchases','inventory':'inventory','models':'models','quotes':'quotes','sales':'sales','finance':'finance','forgotten':'forgotten','film_compat':'film_compat','chat':'chat','appointments':'appointments','technicians':'technicians','suppliers':'suppliers','guarantees':'guarantees','community':'community_posts','referrals':'referrals','catalog-products':'catalog_products','fiado':'fiado_accounts','users':'users','mdm':'mdm_devices'}
        if resource not in maps:return self.json({'error':'Recurso inválido'},404)
        row=one('SELECT * FROM '+maps[resource]+' WHERE id=?',(rid,))
        if not row:return self.json({'error':'Registro não encontrado'},404)
        if u['role']!='admin' and resource in ('users','finance'):return self.json({'error':'Sem permissão'},403)
        if resource in ('services','unlocks','sales','purchases'):
            refs={'services':('service','service_cost'),'unlocks':('unlock','unlock_cost'),'sales':('sale',),'purchases':('purchase','purchase_sale')}[resource]
            for rt in refs: write('DELETE FROM finance WHERE ref_type=? AND ref_id=?',(rt,rid))
        if resource=='fiado': write("DELETE FROM fiado_payments WHERE account_id=?",(rid,)); write("DELETE FROM finance WHERE ref_type='fiado' AND ref_id=?",(rid,))
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
            payload=json.dumps({'android.app.extra.PROVISIONING_DEVICE_ADMIN_COMPONENT_NAME':'br.com.kvcell.finance.mdm/br.com.kvcell.mdmd.KVCellDeviceAdminReceiver','android.app.extra.PROVISIONING_DEVICE_ADMIN_PACKAGE_DOWNLOAD_LOCATION':apk_url,'android.app.extra.PROVISIONING_ADMIN_EXTRAS_BUNDLE':json.dumps({'enrollment_token':tokenv,'server':'https://'+host},ensure_ascii=False)},ensure_ascii=False,separators=(',',':'))
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
                payload=json.dumps({'android.app.extra.PROVISIONING_DEVICE_ADMIN_COMPONENT_NAME':'br.com.kvcell.finance.mdm/br.com.kvcell.mdmd.KVCellDeviceAdminReceiver','android.app.extra.PROVISIONING_DEVICE_ADMIN_PACKAGE_DOWNLOAD_LOCATION':apk_url,'android.app.extra.PROVISIONING_ADMIN_EXTRAS_BUNDLE':json.dumps({'enrollment_token':tokenv,'server':'https://'+host},ensure_ascii=False)},ensure_ascii=False,separators=(',',':'))
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
        write('UPDATE mdm_devices SET status=?,last_seen=?,battery=?,app_version=?,updated_at=?,last_error=NULL WHERE id=?',('online',stamp,battery,appv,stamp,dev['id']))
        fresh=one('SELECT * FROM mdm_devices WHERE id=?',(dev['id'],));
        balance=max(0,float(fresh['installment_total'] or 0)-float(fresh['installment_paid'] or 0)); days=None
        if fresh['next_due']:
            try:days=(date.fromisoformat(fresh['next_due'])-date.today()).days
            except:pass
        policy=fresh['policy_state']
        if fresh['auto_lock_enabled'] and balance>0 and days is not None and days<-(int(fresh['grace_days'] or 0)) and policy not in ('quitado','bloqueado'):
            policy='bloqueado'; write("UPDATE mdm_devices SET policy_state='bloqueado',status='bloqueio solicitado',last_policy_sync=?,updated_at=? WHERE id=?",(stamp,stamp,fresh['id']))
            write('INSERT INTO mdm_events(device_id,action,message,created_at) VALUES(?,?,?,?)',(fresh['id'],'auto_lock','Bloqueio automático por atraso.',stamp))
        return self.json({'ok':True,'policy_state':policy,'message':fresh['custom_message'],'next_due':fresh['next_due'],'balance':balance,'days_to_due':days,'installments_remaining':max(0,int(fresh['installment_count'] or 0)-int(fresh['paid_installments'] or 0)),'payment_url':fresh['payment_url'],'pix_copy_paste':fresh['pix_copy_paste'],'server_time':stamp})
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
        if not s:return self.json({'error':'OS não encontrada'},404)
        action=d.get('action')
        if action not in ('aprovado','recusado'):return self.json({'error':'Ação inválida'},400)
        status='aprovado pelo cliente' if action=='aprovado' else 'recusado pelo cliente'
        write('UPDATE services SET status=?,updated_at=? WHERE id=?',(status,now(),s['id']))
        write('INSERT INTO notifications(unit,title,message,created_at) VALUES(?,?,?,?)',(s['unit'],'Aprovação de OS',f'OS #{s["id"]} foi {status}.',now()))
        activity({'unit':s['unit'],'id':None,'name':'CLIENTE'},'LOG',f'Cliente {action} OS','services',s['id'],d.get('message',''))
        return self.json({'ok':True,'status':status})

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
        if path.startswith('/public/mdm/enroll/'):
            t=path.split('/')[-1]; d=one('SELECT * FROM mdm_devices WHERE enrollment_token=?',(t,))
            if not d:return self.send(404,'Convite MDM não encontrado','text/html')
            return self.send(200,public_mdm_enroll(d),'text/html')
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
        if path.startswith('/public/unlock/'):
            t=path.split('/')[-1]; x=one('SELECT * FROM unlocks WHERE public_token=?',(t,));
            if not x:return self.send(404,'OS de desbloqueio não encontrada','text/html')
            cust=one('SELECT * FROM customers WHERE id=?',(x['customer_id'],)) if x['customer_id'] else None
            return self.send(200,public_unlock(x,cust),'text/html')
        self.send(404,b'Not found','text/plain')

def public_mdm_enroll(d):
    return """<!doctype html><html lang="pt-BR"><meta name="viewport" content="width=device-width,initial-scale=1"><title>KV CELL • MDM</title><style>{css}.hero h1{{font-size:32px}}.warn{{border-color:#6b5b00;background:#171500}}</style><main><header><b>KV CELL</b><span>MDM • CREDIÁRIO ANDROID</span></header><section class="hero"><small>PROVISIONAMENTO</small><h1>{name}</h1><p>{brand} {model}</p><div class="status">Token de enrollment pronto</div></section><div class="box"><h2>Como conectar</h2><ol><li>Instale o agente MDM autorizado da KV CELL no Android.</li><li>Abra o leitor de QR do fluxo de provisionamento.</li><li>Leia este convite e confirme a política no aparelho.</li></ol><p>Este portal não instala software oculto nem remove proteções do Android; a aplicação da política depende de um agente MDM provisionado legitimamente.</p></div><div class="box warn"><b>Política atual</b><p>{policy}</p><p>{msg}</p></div><footer>KV CELL • Crediário Android</footer></main></html>""".format(css=PUBLIC_CSS,name=safe(d['device_name']),brand=safe(d['brand']),model=safe(d['model']),policy=safe(d['policy_state']),msg=safe(d['custom_message']))

def public_quote(q,c):
    items=json.loads(q['items'] or '[]'); rows=''.join(f"<tr><td>{safe(x.get('description',x.get('name','Serviço')))}</td><td>{safe(x.get('qty',1))}</td><td>R$ {float(x.get('total',x.get('price',0))):,.2f}</td></tr>" for x in items)
    buttons='' if q['status'] in ('aprovado','recusado','expirado') else '<div class="box"><h3>Responder orçamento</h3><div class="actions"><button class="ok" onclick="respond(\'aprovado\')">✓ Aceitar orçamento</button><button class="no" onclick="respond(\'recusado\')">✕ Recusar orçamento</button></div><p id="msg"></p></div>'
    return f'''<!doctype html><html lang="pt-BR"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{safe(q['number'])} • KV CELL</title><style>{PUBLIC_CSS}.actions{{display:flex;gap:10px;flex-wrap:wrap}}button{{border:0;border-radius:12px;padding:14px 20px;font-weight:800;cursor:pointer}}.ok{{background:#ffd400;color:#090909}}.no{{background:#2a2a2a;color:#fff}}</style><main><header><b>KV CELL</b><span>ORÇAMENTO • RESPOSTA ONLINE</span></header><section class="hero"><small>ORÇAMENTO</small><h1>{safe(q['number'])}</h1><p>{safe(c['name'] if c else 'Cliente')} • Unidade {safe(q['unit'])}</p></section><div class="grid"><div class="box"><b>Itens</b><table><tr><th>Serviço</th><th>Qtd.</th><th>Total</th></tr>{rows}</table></div><div class="box"><b>Status</b><div class="status" id="status">{safe(q['status'])}</div><p>Garantia: {int(q.get('warranty_days') or 0)} dias</p><p>Válido até: {safe(q['valid_until'])}</p><strong>Total: R$ {float(q['total'] or 0):,.2f}</strong></div></div><div class="box"><b>Condições</b><p>{safe(q['conditions'])}</p><p>{safe(q['observations'])}</p></div>{buttons}<footer>KV CELL • Lagos + Magé</footer></main><script>async function respond(a){{let msg=prompt(a==='aprovado'?'Mensagem opcional para a KV CELL:':'Motivo da recusa (opcional):','');let r=await fetch(location.pathname,{{method:'POST',headers:{{'Content-Type':'application/json'}},body:JSON.stringify({{action:a,message:msg||''}})}});let d=await r.json();document.getElementById('msg').textContent=d.ok?'Resposta enviada à KV CELL.':'Não foi possível enviar. Tente novamente.';if(d.ok)document.getElementById('status').textContent=a}}</script></html>'''
def public_os(s,c):
    ck=json.loads(s['checklist'] or '{}'); photos=json.loads(s['photos'] or '[]'); thumbs=''.join(f'<img src=\"{x}\" />' for x in photos[:8]); status=s.get('status') or 'aberto'
    timeline=[('Entrada Registrada',True,s.get('created_at')),('Diagnóstico / Reparo',status in ('em andamento','aguardando peça','pronto','entregue','aprovado pelo cliente'),s.get('updated_at') or 'Aguardando'),('Pronto para Retirada',status in ('pronto','entregue','aprovado pelo cliente'),s.get('updated_at') if status in ('pronto','entregue','aprovado pelo cliente') else 'Pendente'),('Aparelho Retirado',status=='entregue',s.get('updated_at') if status=='entregue' else 'Pendente')]
    tl=''.join('<div class=\"step '+('done' if ok else '')+'\"><b>'+('✓' if ok else '○')+' '+safe(label)+'</b><small>'+safe(val or 'Pendente')+'</small></div>' for label,ok,val in timeline)
    details=json.loads(s['details_json'] or '{}') if s.get('details_json') else {}
    approval='' if status in ('aprovado pelo cliente','recusado pelo cliente','entregue','cancelado') else '<div class=\"box\"><h3>Aprovação da OS</h3><p>Revise as informações e autorize o início do serviço.</p><div class=\"actions\"><button class=\"ok\" onclick=\"respond(\'aprovado\')\">✓ Aprovar OS</button><button class=\"no\" onclick=\"respond(\'recusado\')\">✕ Recusar</button></div><p id=\"msg\"></p></div>'
    return f'''<!doctype html><html lang="pt-BR"><meta name="viewport" content="width=device-width,initial-scale=1"><title>OS-{s['id']} • KV CELL</title><style>{PUBLIC_CSS}.actions{{display:flex;gap:10px;flex-wrap:wrap}}button{{border:0;border-radius:12px;padding:14px 20px;font-weight:800;cursor:pointer}}.ok{{background:#ffd400;color:#090909}}.no{{background:#2a2a2a;color:#fff}}.photos img{{width:100px;height:100px;object-fit:cover;border-radius:10px;margin:5px}}</style><main><header><b>KV CELL</b><span>PORTAL DO CLIENTE</span></header><section class="hero"><small>ORDEM DE SERVIÇO</small><h1>#OS-{s['id']}</h1><p>{safe(c['name'] if c else 'Cliente')} • {safe(s['unit'])}</p><div class="status">{safe(status)}</div></section><div class="grid"><div class="box"><h2>Serviço</h2><p>{safe(s['description'])}</p><p>Modelo: {safe(details.get('model',''))}</p><p>IMEI: {safe(details.get('imei',''))}</p></div><div class="box"><h2>Valor</h2><h1>R$ {float(s['price'] or 0):,.2f}</h1><p>Garantia: {safe(s.get('warranty'))}</p></div></div><div class="box"><h2>Linha do Tempo</h2><div class="timeline">{tl}</div></div>{approval}<div class="box"><b>Garantia Digital</b><p>OS #{s['id']} • Verificação oficial KV CELL</p></div><div class="box"><b>Fotos do aparelho</b><div class="photos">{thumbs or '<span>Sem fotos cadastradas.</span>'}</div></div><div class="box"><b>Cliente</b><p>{safe(c['name'] if c else 'Cliente')}</p><p>{safe(c.get('phone') if c else '')}</p><b>Técnico</b><p>{safe(s['technician'])}</p></div><footer>KV CELL • Link de acompanhamento</footer></main><script>async function respond(a){{let msg=prompt(a==='aprovado'?'Mensagem opcional para a KV CELL:':'Motivo da recusa (opcional):','');let r=await fetch(location.pathname,{{method:'POST',headers:{{'Content-Type':'application/json'}},body:JSON.stringify({{action:a,message:msg||''}})}});let d=await r.json();document.getElementById('msg').textContent=d.ok?'Resposta enviada à KV CELL.':'Não foi possível enviar.';if(d.ok)location.reload()}}</script></html>'''

def public_unlock(x,c):
    details=json.loads(x['details_json'] or '{}') if x.get('details_json') else {}; photos=json.loads(x['photos'] or '[]'); thumbs=''.join(f'<img src="{p}" />' for p in photos[:8])
    return f'''<!doctype html><html lang="pt-BR"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Desbloqueio #{x['id']} • KV CELL</title><style>{PUBLIC_CSS}.photos img{{width:100px;height:100px;object-fit:cover;border-radius:10px;margin:5px}}</style><main><header><b>KV CELL</b><span>UNLOCKER PRO</span></header><section class="hero"><small>OS DE DESBLOQUEIO</small><h1>#{x['id']}</h1><p>{safe(c['name'] if c else 'Cliente')} • {safe(x['unit'])}</p><div class="status">{safe(x['status'])}</div></section><div class="grid"><div class="box"><h2>Aparelho</h2><p>{safe(x['brand'])} {safe(x['model'])}</p><p>IMEI: {safe(x['imei'])}</p><p>Nº de série: {safe(details.get('serial',''))}</p></div><div class="box"><h2>Serviço</h2><p>{safe(x['kind'])}</p><h2>R$ {float(x['price'] or 0):,.2f}</h2></div></div><div class="box"><h2>Prazo</h2><p>{safe(details.get('expected_date','Não informado'))} · {safe(details.get('estimated_time',''))}</p><p>Prioridade: {safe(details.get('priority','Normal'))}</p></div><div class="box"><b>Fotos</b><div class="photos">{thumbs or '<span>Sem fotos.</span>'}</div></div><div class="box"><b>Política de Garantia</b><p>Esta OS de desbloqueio é finalizada SEM GARANTIA. Serviços de software podem ser revertidos por atualizações.</p></div><footer>KV CELL • Link de acompanhamento</footer></main></html>'''

PUBLIC_CSS='''*{box-sizing:border-box}body{margin:0;background:#070707;color:#f5f5f5;font-family:Inter,Arial,sans-serif}main{max-width:1000px;margin:0 auto;padding:25px}header{display:flex;justify-content:space-between;align-items:center;padding:14px 0;border-bottom:1px solid #2a2a2a}header b{font-size:24px;color:#ffd400}header span{font-size:11px;color:#aaa}.hero{margin:25px 0;padding:28px;border:1px solid #303030;border-radius:20px;background:linear-gradient(135deg,#171500,#101010)}h1{font-size:42px;margin:5px 0;color:#ffd400}.grid{display:grid;grid-template-columns:2fr 1fr;gap:15px}.box{background:#111;border:1px solid #292929;border-radius:16px;padding:18px;margin:15px 0}table{width:100%;border-collapse:collapse;margin-top:15px}td,th{padding:11px;border-bottom:1px solid #292929;text-align:left}.status{display:inline-block;padding:8px 12px;border-radius:999px;background:#332f00;color:#ffd400;margin:10px 0}footer{color:#888;text-align:center;padding:25px}@media(max-width:700px){.grid{grid-template-columns:1fr}main{padding:14px}h1{font-size:30px}}
'''

INDEX='''<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>KV CELL OS PREMIUM</title><link rel="stylesheet" href="/static/app.css"></head><body><div id="app"></div><script src="/static/app.js"></script></body></html>'''

# V400 public portal override
def public_quote(q,c):
    items=json.loads(q['items'] or '[]')
    rows_html=''.join(f"<tr><td>{safe(x.get('description',x.get('name','Serviço')))}</td><td>{safe(x.get('qty',1))}</td><td>R$ {float(x.get('total',x.get('price',0)) or 0):,.2f}</td></tr>" for x in items)
    status=q.get('status') or 'aberto'
    buttons='' if status in ('aprovado','recusado','expirado') else '<div class="actions"><button class="ok" onclick="respond(\'aprovado\')">✓ Aprovar Orçamento</button><button class="no" onclick="respond(\'recusado\')">✕ Recusar Orçamento</button></div>'
    return f'''<!doctype html><html lang="pt-BR"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{safe(q['number'])} • KV CELL</title><style>{PUBLIC_CSS}.hero{{background:linear-gradient(135deg,#171700,#0e0e0e)}}.hero h1{{font-size:46px}}.ok{{background:#ffd400;color:#070707}}.no{{background:#262626;color:#fff}}.actions{{display:flex;gap:10px;flex-wrap:wrap}}button{{border:0;border-radius:12px;padding:14px 18px;font-weight:900;cursor:pointer}}</style><main><header><b>KV CELL</b><span>ORÇAMENTO • RESPOSTA ONLINE</span></header><section class="hero"><small>ORÇAMENTO DIGITAL</small><h1>{safe(q['number'])}</h1><p>{safe(c['name'] if c else 'Cliente')} • Unidade {safe(q['unit'])}</p><div class="status">{safe(status)}</div></section><div class="grid"><div class="box"><h2>Serviços e peças</h2><table><tr><th>Descrição</th><th>Qtd.</th><th>Total</th></tr>{rows_html}</table><div style="text-align:right;margin-top:16px"><small>SUBTOTAL</small><h2>R$ {float(q['subtotal'] or 0):,.2f}</h2><strong style="color:#ffd400;font-size:24px">TOTAL R$ {float(q['total'] or 0):,.2f}</strong></div></div><div class="box"><h2>Resumo</h2><p>Status: <b>{safe(status)}</b></p><p>Garantia: <b>{int(q.get('warranty_days') or 0)} dias</b></p><p>Válido até: <b>{safe(q.get('valid_until'))}</b></p><p>Deslocamento: <b>{'Sim • R$ '+format(float(q.get('travel_fee') or 0),'.2f') if q.get('travel_enabled') else 'Não'}</b></p></div></div><div class="box"><h2>Condições</h2><p>{safe(q.get('conditions'))}</p><p>{safe(q.get('observations'))}</p></div>{buttons}<footer>KV CELL • Lagos + Magé • orçamento online</footer></main><script>async function respond(a){{let msg=prompt(a==='aprovado'?'Mensagem opcional para a KV CELL:':'Motivo da recusa (opcional):','');let r=await fetch(location.pathname,{{method:'POST',headers:{{'Content-Type':'application/json'}},body:JSON.stringify({{action:a,message:msg||''}})}});let d=await r.json();if(d.ok)location.reload();else alert(d.error||'Não foi possível enviar.')}}</script></html>'''

def public_os(s,c):
    photos=json.loads(s['photos'] or '[]')
    thumbs=''.join(f'<img src="{x}" />' for x in photos[:6])
    status=s.get('status') or 'aberto'
    det=json.loads(s.get('details_json') or '{}')
    states=[('Entrada registrada',True,s.get('created_at')),('Em diagnóstico / reparo',status in ('em andamento','aguardando peça','pronto','finalizado','entregue'),s.get('updated_at') or 'Aguardando'),('Pronto para retirada',status in ('finalizado','entregue'),s.get('updated_at') if status in ('finalizado','entregue') else 'Pendente'),('Aparelho entregue',status=='entregue',s.get('updated_at') if status=='entregue' else 'Pendente')]
    tl=''.join(f'<div class="step {"done" if ok else ""}"><b>{"✓" if ok else "○"} {safe(label)}</b><small>{safe(val or "Pendente")}</small></div>' for label,ok,val in states)
    status_msg={'aberto':'Sua OS foi recebida e aguarda atendimento.','aguardando peça':'Estamos aguardando peça/material.','em andamento':'Seu aparelho está em reparo.','pronto':'Seu aparelho está pronto para retirada.','finalizado':'Seu aparelho foi finalizado e está pronto para retirada.','entregue':'Seu aparelho foi entregue. Obrigado pela preferência!','cancelado':'Esta OS foi cancelada.','garantia':'Esta OS está em atendimento de garantia.'}.get(status,'Status atualizado pela KV CELL.')
    approval='' if status in ('entregue','cancelado') else '<div class="box"><h2>Aprovação</h2><p>Se a equipe solicitou aprovação, responda aqui.</p><div class="actions"><button class="ok" onclick="respond(\'aprovado\')">✓ Aprovar OS</button><button class="no" onclick="respond(\'recusado\')">✕ Recusar</button></div><p id="msg"></p></div>'
    return f'''<!doctype html><html lang="pt-BR"><meta name="viewport" content="width=device-width,initial-scale=1"><title>OS-{s['id']} • KV CELL</title><style>{PUBLIC_CSS}.hero{{background:linear-gradient(135deg,#171700,#0e0e0e)}}.hero h1{{font-size:44px}}.actions{{display:flex;gap:10px;flex-wrap:wrap}}button{{border:0;border-radius:12px;padding:14px 18px;font-weight:900;cursor:pointer}}.ok{{background:#ffd400;color:#070707}}.no{{background:#252525;color:#fff}}.step.done b{{color:#ffd400}}.photos img{{width:110px;height:110px;object-fit:cover;border-radius:12px;margin:5px}}</style><main><header><b>KV CELL</b><span>PORTAL DO CLIENTE • ACOMPANHAMENTO EM TEMPO REAL</span></header><section class="hero"><small>ORDEM DE SERVIÇO</small><h1>#OS-{s['id']}</h1><p>{safe(c['name'] if c else 'Cliente')} • Unidade {safe(s['unit'])}</p><div class="status">{safe(status)}</div><p>{safe(status_msg)}</p></section><div class="grid"><div class="box"><h2>Linha do tempo</h2><div class="timeline">{tl}</div></div><div class="box"><h2>Resumo financeiro</h2><h1>R$ {float(s['price'] or 0):,.2f}</h1><p>Garantia: <b>{safe(s.get('warranty') or 'Não informada')}</b></p><p>Técnico: <b>{safe(s.get('technician') or 'Equipe KV CELL')}</b></p></div></div><div class="grid"><div class="box"><h2>Cliente</h2><p><b>{safe(c['name'] if c else 'Cliente')}</b></p><p>{safe(c.get('phone') if c else '')}</p></div><div class="box"><h2>Equipamento</h2><p><b>{safe(det.get('brand',''))} {safe(det.get('model',''))}</b></p><p>IMEI: {safe(det.get('imei',''))}</p><p>Serial: {safe(det.get('serial',''))}</p></div></div><div class="box"><h2>Serviço / problema relatado</h2><p>{safe(s.get('description'))}</p><p>{safe(s.get('diagnosis'))}</p></div>{approval}<div class="box"><h2>Garantia Digital KV CELL</h2><p>Esta página é o acompanhamento oficial desta OS. Guarde o link para consultar o andamento e as condições da entrega.</p></div><div class="box"><h2>Fotos</h2><div class="photos">{thumbs or '<span>Fotos ainda não publicadas.</span>'}</div></div><footer>KV CELL • Laboratório avançado • Desde 2023</footer></main><script>async function respond(a){{let msg=prompt(a==='aprovado'?'Mensagem opcional para a KV CELL:':'Motivo da recusa (opcional):','');let r=await fetch(location.pathname,{{method:'POST',headers:{{'Content-Type':'application/json'}},body:JSON.stringify({{action:a,message:msg||''}})}});let d=await r.json();document.getElementById('msg').textContent=d.ok?'Resposta enviada à KV CELL.':(d.error||'Falha');if(d.ok)location.reload()}}</script></html>'''


# V500 public MDM portal override: financial status + payment options + enrollment instructions.
def public_mdm_enroll(d):
    balance=max(0,float(d['installment_total'] or 0)-float(d['installment_paid'] or 0))
    days='—'
    if d['next_due']:
        try: days=str((date.fromisoformat(d['next_due'])-date.today()).days)
        except: pass
    remaining=max(0,int(d['installment_count'] or 0)-int(d['paid_installments'] or 0))
    pay=d['payment_url'] or ''
    pix=d['pix_copy_paste'] or ''
    return f'''<!doctype html><html lang="pt-BR"><meta name="viewport" content="width=device-width,initial-scale=1"><title>KV CELL • Crediário</title><style>{PUBLIC_CSS}.hero h1{{font-size:34px}}.pay{{border-color:#5d5100;background:#151300}}code{{display:block;white-space:pre-wrap;word-break:break-all;background:#080808;padding:12px;border-radius:10px;color:#ffd400}}.ok{{display:inline-block;background:#ffd400;color:#080808;padding:12px 16px;border-radius:10px;text-decoration:none;font-weight:800}}</style><main><header><b>KV CELL</b><span>CREDIÁRIO ANDROID • MDM</span></header><section class="hero"><small>APARELHO GERENCIADO</small><h1>{safe(d['device_name'])}</h1><p>{safe(d['brand'])} {safe(d['model'])} • IMEI {safe(d['imei'] or '—')}</p><div class="status">Política: {safe(d['policy_state'])}</div></section><div class="grid"><div class="box"><h2>Parcelas</h2><p>Saldo: <strong>R$ {balance:,.2f}</strong></p><p>Próximo vencimento: <strong>{safe(d['next_due'] or '—')}</strong></p><p>Dias restantes: <strong>{days}</strong></p><p>Parcelas restantes: <strong>{remaining}</strong></p></div><div class="box pay"><h2>Pagamento</h2>{('<a class="ok" href="'+safe(pay)+'" target="_blank">Pagar parcela</a>') if pay else '<p>Forma de pagamento online ainda não configurada.</p>'}{('<p><b>PIX copia e cola</b></p><code>'+safe(pix)+'</code>') if pix else ''}</div></div><div class="box"><h2>Conexão do aplicativo</h2><ol><li>Instale o agente oficial da KV CELL.</li><li>Use o QR individual fornecido pelo painel para matrícula.</li><li>Confirme o gerenciamento do dispositivo.</li></ol><p>Em modo Device Owner, o agente pode aplicar as políticas autorizadas pelo contrato, inclusive impedir sua própria desinstalação. Sem Device Owner, o Android limita o nível de controle.</p></div><div class="box"><h2>Mensagem da KV CELL</h2><p>{safe(d['custom_message'] or '')}</p></div><footer>KV CELL • Crediário Android • gestão transparente do dispositivo</footer></main></html>'''

if __name__=='__main__':
    print(f'KV CELL OS PREMIUM on port {PORT}',flush=True)
    ThreadingHTTPServer(('0.0.0.0',PORT),Handler).serve_forever()
