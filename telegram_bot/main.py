
import os, sqlite3, json, time, uuid, threading, asyncio, html, secrets
from datetime import datetime
from decimal import Decimal, ROUND_UP

import requests
import telebot
from telebot import types
from fastapi import FastAPI, Request, Form, HTTPException
from fastapi.responses import HTMLResponse, RedirectResponse, JSONResponse
import qrcode
from io import BytesIO
import base64

TOKEN = os.getenv("TELEGRAM_TOKEN", "")
ASAAS_API_KEY = os.getenv("ASAAS_API_KEY", "")
ASAAS_WEBHOOK_TOKEN = os.getenv("ASAAS_WEBHOOK_TOKEN", "")
PARTNER_API_URL = os.getenv("PARTNER_API_URL", "")
PARTNER_API_USER = os.getenv("PARTNER_API_USER", "")
PARTNER_API_KEY = os.getenv("PARTNER_API_KEY", "")
DB = os.getenv("BOT_DATABASE_PATH", os.getenv("DATABASE_PATH", "/application/data/kvcell_bot.db"))
TELEGRAM_GROUP_ID = os.getenv("TELEGRAM_LOG_CHAT_ID") or os.getenv("TELEGRAM_GROUP_ID", "")

app = FastAPI(title="KV CELL Unlocker")
bot = telebot.TeleBot(TOKEN, parse_mode="HTML") if TOKEN else None
pending = {}

def conn():
    os.makedirs(os.path.dirname(os.path.abspath(DB)),exist_ok=True)
    c = sqlite3.connect(DB, check_same_thread=False)
    c.row_factory = sqlite3.Row
    c.execute("PRAGMA busy_timeout=12000")
    c.execute("PRAGMA journal_mode=WAL")
    return c

def init_db():
    c=conn()
    c.executescript("""
    CREATE TABLE IF NOT EXISTS users(
      telegram_id INTEGER PRIMARY KEY, username TEXT, name TEXT,
      role TEXT DEFAULT 'CLIENTE_FIXO', balance REAL DEFAULT 0,
      blocked INTEGER DEFAULT 0, created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE IF NOT EXISTS categories(
      id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT UNIQUE, parent_id INTEGER
    );
    CREATE TABLE IF NOT EXISTS services(
      id INTEGER PRIMARY KEY AUTOINCREMENT, category_id INTEGER, name TEXT,
      description TEXT, provider_service_id TEXT, kind TEXT DEFAULT 'REGISTRO',
      cost_usd REAL DEFAULT 0, min_add REAL DEFAULT 0, margin_logista REAL DEFAULT 40,
      margin_unlocker REAL DEFAULT 30, margin_cliente REAL DEFAULT 30,
      fields_json TEXT DEFAULT '[]', active INTEGER DEFAULT 1,
      tutorial_url TEXT, download_url TEXT, before_message TEXT
    );
    CREATE TABLE IF NOT EXISTS orders(
      id INTEGER PRIMARY KEY AUTOINCREMENT, telegram_id INTEGER, service_id INTEGER,
      data_json TEXT, external_id TEXT, status TEXT DEFAULT 'PENDENTE',
      result TEXT, price REAL DEFAULT 0, created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE IF NOT EXISTS payments(
      id INTEGER PRIMARY KEY AUTOINCREMENT, telegram_id INTEGER, payment_id TEXT UNIQUE,
      amount REAL, credits REAL, status TEXT DEFAULT 'PENDING',
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE IF NOT EXISTS content(
      id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, body TEXT, price REAL DEFAULT 0,
      url TEXT, active INTEGER DEFAULT 1
    );
    CREATE TABLE IF NOT EXISTS settings(key TEXT PRIMARY KEY, value TEXT);
    CREATE TABLE IF NOT EXISTS notices(id INTEGER PRIMARY KEY AUTOINCREMENT,title TEXT,body TEXT,created_at TEXT DEFAULT CURRENT_TIMESTAMP);
    CREATE TABLE IF NOT EXISTS credit_ledger(id INTEGER PRIMARY KEY AUTOINCREMENT,telegram_id INTEGER,amount REAL,balance_after REAL,note TEXT,actor TEXT,created_at TEXT DEFAULT CURRENT_TIMESTAMP);
    CREATE TABLE IF NOT EXISTS audit_logs(id INTEGER PRIMARY KEY AUTOINCREMENT,event TEXT,telegram_id INTEGER,details TEXT,created_at TEXT DEFAULT CURRENT_TIMESTAMP);
    """)
    c.commit(); c.close()

def audit_event(event, uid=None, details="", notify=False):
    c=conn()
    try:
        c.execute("INSERT INTO audit_logs(event,telegram_id,details) VALUES(?,?,?)",(str(event)[:80],uid,str(details)[:500]))
        c.commit()
    finally:
        c.close()
    if notify and bot and TELEGRAM_GROUP_ID:
        try:
            identity=f"\nTelegram ID: {uid}" if uid is not None else ""
            bot.send_message(TELEGRAM_GROUP_ID,f"📋 <b>KV CELL • {html.escape(str(event))}</b>{identity}\n{html.escape(str(details))}"[:3900])
        except Exception as error:
            print("TELEGRAM AUDIT DELIVERY FAILED:",type(error).__name__)

def setting(key, default=""):
    c=conn(); r=c.execute("SELECT value FROM settings WHERE key=?",(key,)).fetchone(); c.close()
    return r["value"] if r else default

def set_setting(key,val):
    c=conn(); c.execute("INSERT INTO settings(key,value) VALUES(?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value",(key,str(val))); c.commit(); c.close()

def get_user(uid, username="", name=""):
    c=conn(); r=c.execute("SELECT * FROM users WHERE telegram_id=?",(uid,)).fetchone()
    created=False
    if not r:
        c.execute("INSERT INTO users(telegram_id,username,name) VALUES(?,?,?)",(uid,username,name)); c.commit()
        r=c.execute("SELECT * FROM users WHERE telegram_id=?",(uid,)).fetchone()
        created=True
    c.close()
    if created:
        audit_event("Novo cadastro",uid,f"Nome: {name or 'Não informado'}; usuário: @{username}" if username else f"Nome: {name or 'Não informado'}",notify=True)
    return dict(r)

def credit_price(service, role):
    rate=float(setting("usd_rate","5.40"))
    fee=float(setting("payment_fee","0.99"))
    cost=float(service["cost_usd"] or 0)*rate
    margin={"LOGISTA":service["margin_logista"],"UNLOCKER":service["margin_unlocker"],"CLIENTE_FIXO":service["margin_cliente"]}.get(role,service["margin_cliente"])
    price=max(cost*(1+float(margin)/100), cost+float(service["min_add"] or 0))+fee
    # CRD is internal unit: 1 CRD nominally equals R$1 before service pricing
    return round(price,2)

def add_balance(uid, amount):
    c=conn()
    try:
        c.execute("BEGIN IMMEDIATE")
        row=c.execute("SELECT balance FROM users WHERE telegram_id=?",(uid,)).fetchone()
        if not row: raise ValueError("Usuário do Telegram não encontrado.")
        balance=round(float(row["balance"] or 0)+float(amount),2)
        if balance<0: raise ValueError("Saldo insuficiente.")
        c.execute("UPDATE users SET balance=? WHERE telegram_id=?",(balance,uid))
        c.execute("INSERT INTO credit_ledger(telegram_id,amount,balance_after,note,actor) VALUES(?,?,?,?,?)",(uid,amount,balance,"Crédito recebido","Sistema"))
        c.commit()
    except Exception:
        c.rollback()
        raise
    finally:
        c.close()

def debit(uid, amount):
    c=conn()
    try:
        c.execute("BEGIN IMMEDIATE")
        row=c.execute("SELECT balance,blocked FROM users WHERE telegram_id=?",(uid,)).fetchone()
        if not row or row["blocked"] or float(row["balance"] or 0)+1e-9<float(amount):
            c.rollback()
            return False
        balance=round(float(row["balance"] or 0)-float(amount),2)
        c.execute("UPDATE users SET balance=? WHERE telegram_id=?",(balance,uid))
        c.execute("INSERT INTO credit_ledger(telegram_id,amount,balance_after,note,actor) VALUES(?,?,?,?,?)",(uid,-float(amount),balance,"Débito por serviço","Bot"))
        c.commit()
        return True
    except Exception:
        c.rollback()
        raise
    finally:
        c.close()

def menu():
    kb=types.InlineKeyboardMarkup()
    kb.add(types.InlineKeyboardButton("🛠 Serviços",callback_data="services"))
    kb.add(types.InlineKeyboardButton("💳 Recarregar CRD",callback_data="recharge"))
    kb.add(types.InlineKeyboardButton("📦 Meus pedidos",callback_data="orders"),
           types.InlineKeyboardButton("🆘 Suporte",url=setting("support_url","https://t.me/")))
    return kb

if bot:
    @bot.message_handler(commands=["start","menu"])
    def start(m):
        u=get_user(m.from_user.id,m.from_user.username or "",m.from_user.first_name or "")
        if u["blocked"]:
            return bot.reply_to(m,"⛔ Seu acesso está bloqueado. Entre em contato com o suporte.")
        audit_event("Login no bot",m.from_user.id,f"Nome: {m.from_user.first_name or 'Não informado'}; usuário: @{m.from_user.username}" if m.from_user.username else f"Nome: {m.from_user.first_name or 'Não informado'}",notify=True)
        bot.send_message(m.chat.id,f"⚡ <b>KV CELL UNLOCKER</b>\n\n👤 {html.escape(m.from_user.first_name or 'Cliente')}\n💎 Saldo: <b>{u['balance']:.2f} CRD</b>",reply_markup=menu())

    @bot.callback_query_handler(func=lambda q: q.data=="home")
    def home(q):
        u=get_user(q.from_user.id,q.from_user.username or "",q.from_user.first_name or "")
        if u["blocked"]:
            bot.answer_callback_query(q.id,"Acesso bloqueado.",show_alert=True)
            return
        bot.edit_message_text(f"⚡ <b>KV CELL UNLOCKER</b>\n\n👤 {html.escape(u['name'] or 'Cliente')}\n💎 Saldo: <b>{u['balance']:.2f} CRD</b>",q.message.chat.id,q.message.message_id,reply_markup=menu())
        bot.answer_callback_query(q.id)

    @bot.callback_query_handler(func=lambda q: q.data=="services")
    def services(q):
        c=conn(); cats=c.execute("SELECT * FROM categories WHERE parent_id IS NULL ORDER BY name").fetchall(); c.close()
        kb=types.InlineKeyboardMarkup()
        for x in cats: kb.add(types.InlineKeyboardButton("📂 "+x["name"],callback_data=f"cat:{x['id']}"))
        kb.add(types.InlineKeyboardButton("⬅️ Voltar",callback_data="home"))
        bot.edit_message_text("🛠 <b>SERVIÇOS KV CELL</b>\nEscolha uma categoria:",q.message.chat.id,q.message.message_id,reply_markup=kb)

    @bot.callback_query_handler(func=lambda q: q.data=="orders")
    def user_orders(q):
        c=conn()
        orders=c.execute("SELECT o.id,o.status,o.price,o.created_at,s.name service_name FROM orders o LEFT JOIN services s ON s.id=o.service_id WHERE o.telegram_id=? ORDER BY o.id DESC LIMIT 10",(q.from_user.id,)).fetchall()
        c.close()
        text="📦 <b>MEUS PEDIDOS</b>\n\n"+("\n".join(f"#{row['id']} • {row['service_name'] or 'Serviço'} • {row['status']} • {row['price']:.2f} CRD" for row in orders) if orders else "Você ainda não tem pedidos.")
        kb=types.InlineKeyboardMarkup()
        kb.add(types.InlineKeyboardButton("⬅️ Voltar",callback_data="home"))
        bot.edit_message_text(text,q.message.chat.id,q.message.message_id,reply_markup=kb)

    @bot.callback_query_handler(func=lambda q: q.data.startswith("cat:"))
    def category(q):
        cid=int(q.data.split(":")[1]); c=conn()
        subs=c.execute("SELECT * FROM categories WHERE parent_id=? ORDER BY name",(cid,)).fetchall()
        sv=c.execute("SELECT * FROM services WHERE category_id=? AND active=1 ORDER BY name",(cid,)).fetchall(); c.close()
        kb=types.InlineKeyboardMarkup()
        for x in subs: kb.add(types.InlineKeyboardButton("📁 "+x["name"],callback_data=f"cat:{x['id']}"))
        for x in sv: kb.add(types.InlineKeyboardButton("🛠 "+x["name"],callback_data=f"svc:{x['id']}"))
        kb.add(types.InlineKeyboardButton("⬅️ Categorias",callback_data="services"))
        bot.edit_message_text("📂 Escolha uma opção:",q.message.chat.id,q.message.message_id,reply_markup=kb)

    @bot.callback_query_handler(func=lambda q: q.data.startswith("svc:"))
    def svc(q):
        sid=int(q.data.split(":")[1]); c=conn(); s=c.execute("SELECT * FROM services WHERE id=?",(sid,)).fetchone(); c.close()
        if not s or not s["active"]:
            return bot.answer_callback_query(q.id,"Serviço indisponível.",show_alert=True)
        u=get_user(q.from_user.id)
        if u["blocked"]:
            return bot.answer_callback_query(q.id,"Acesso bloqueado.",show_alert=True)
        p=credit_price(s,u["role"])
        before=html.escape(s["before_message"] or "")
        text=f"🛠 <b>{html.escape(s['name'])}</b>\n\n{html.escape(s['description'] or '')}"
        if before:text+=f"\n\n{before}"
        text+=f"\n\n💎 Valor: <b>{p:.2f} CRD</b>"
        kb=types.InlineKeyboardMarkup(); kb.add(types.InlineKeyboardButton("🚀 Solicitar",callback_data=f"buy:{sid}"))
        if s["tutorial_url"]: kb.add(types.InlineKeyboardButton("📖 Tutorial",url=s["tutorial_url"]))
        if s["download_url"]: kb.add(types.InlineKeyboardButton("⬇️ Download",url=s["download_url"]))
        bot.edit_message_text(text,q.message.chat.id,q.message.message_id,reply_markup=kb)

    @bot.callback_query_handler(func=lambda q: q.data.startswith("buy:"))
    def buy(q):
        sid=int(q.data.split(":")[1]); c=conn(); s=c.execute("SELECT * FROM services WHERE id=?",(sid,)).fetchone(); c.close()
        u=get_user(q.from_user.id)
        if u["blocked"]:
            return bot.answer_callback_query(q.id,"Acesso bloqueado.",show_alert=True)
        if not s or not s["active"]:
            return bot.answer_callback_query(q.id,"Serviço indisponível.",show_alert=True)
        fields=json.loads(s["fields_json"] or "[]")
        # Rental services with no requested fields go directly to order creation.
        pending[q.from_user.id]={"service_id":sid,"fields":fields,"data":{},"chat_id":q.message.chat.id,"index":0}
        if not fields:
            finalize_order(q.from_user.id)
            bot.answer_callback_query(q.id,"Pedido criado.")
        else:
            f=fields[0]
            notice=html.escape(s["before_message"] or "")
            text=(notice+"\n\n" if notice else "")+f"📝 <b>{html.escape(str(f.get('label',f.get('name','Dado'))))}</b>\nEnvie o valor solicitado:"
            bot.send_message(q.message.chat.id,text)
            bot.answer_callback_query(q.id)

    @bot.message_handler(func=lambda m: m.from_user.id in pending)
    def collect(m):
        if not m.text:
            return bot.reply_to(m,"Envie o dado solicitado em texto para continuar.")
        st=pending[m.from_user.id]; fields=st["fields"]; i=st["index"]; f=fields[i]
        st["data"][f.get("name",f"field{i}")]=m.text.strip(); st["index"]+=1
        if st["index"]<len(fields):
            nf=fields[st["index"]]; bot.reply_to(m,f"📝 Envie <b>{html.escape(str(nf.get('label',nf.get('name'))))}</b>:")
        else: finalize_order(m.from_user.id)

    def finalize_order(uid):
        st=pending.get(uid)
        if not st:return
        c=conn(); s=c.execute("SELECT * FROM services WHERE id=?",(st["service_id"],)).fetchone(); c.close()
        if not s or not s["active"]:
            bot.send_message(st["chat_id"],"⚠️ Este serviço não está mais disponível. Nenhum crédito foi debitado.")
            pending.pop(uid,None); return
        u=get_user(uid); price=credit_price(s,u["role"])
        c=conn()
        try:
            c.execute("BEGIN IMMEDIATE")
            account=c.execute("SELECT balance,blocked FROM users WHERE telegram_id=?",(uid,)).fetchone()
            if not account or account["blocked"] or float(account["balance"] or 0)+1e-9<price:
                c.rollback()
                bot.send_message(st["chat_id"],f"❌ Saldo insuficiente ou acesso bloqueado. Valor do serviço: <b>{price:.2f} CRD</b>.")
                pending.pop(uid,None); return
            balance=round(float(account["balance"] or 0)-price,2)
            c.execute("UPDATE users SET balance=? WHERE telegram_id=?",(balance,uid))
            c.execute("INSERT INTO credit_ledger(telegram_id,amount,balance_after,note,actor) VALUES(?,?,?,?,?)",(uid,-price,balance,"Débito por serviço","Bot"))
            cur=c.execute("INSERT INTO orders(telegram_id,service_id,data_json,price,status) VALUES(?,?,?,?,?)",(uid,s["id"],json.dumps(st["data"],ensure_ascii=False),price,"PENDENTE"))
            oid=cur.lastrowid
            c.commit()
        except Exception as error:
            c.rollback()
            print("ORDER CREATION FAILED:",type(error).__name__)
            bot.send_message(st["chat_id"],"❌ Não consegui registrar o pedido. Nenhum crédito foi debitado; tente novamente.")
            pending.pop(uid,None); return
        finally:
            c.close()
        bot.send_message(st["chat_id"],f"✅ <b>PEDIDO #{oid} CRIADO</b>\n🛠 {html.escape(s['name'])}\n💎 {price:.2f} CRD\n📌 PENDENTE · aguardando processamento")
        audit_event("Pedido recebido",uid,f"Pedido #{oid}; serviço: {s['name']}; valor: {price:.2f} CRD. Dados do formulário mantidos fora do grupo.",notify=True)
        # Provider requests stay disabled until the vendor's request format is verified.
        pending.pop(uid,None)

    @bot.callback_query_handler(func=lambda q: q.data=="recharge")
    def recharge(q):
        pending[q.from_user.id]={"recharge":True,"chat_id":q.message.chat.id}
        bot.send_message(q.message.chat.id,"💳 Quantos <b>CRD</b> você deseja comprar?\n\nMínimo: <b>5 CRD</b>\nDigite somente a quantidade.")

    @bot.message_handler(func=lambda m: pending.get(m.from_user.id,{}).get("recharge"))
    def recharge_amount(m):
        try: amount=round(float(m.text.replace(",",".")),2)
        except: return bot.reply_to(m,"Digite uma quantidade válida.")
        if amount<5:return bot.reply_to(m,"O mínimo é 5 CRD.")
        pending.pop(m.from_user.id,None)
        if not ASAAS_API_KEY:return bot.reply_to(m,"⚠️ Pagamento ainda não está configurado.")
        try:
            headers={"access_token":ASAAS_API_KEY,"Content-Type":"application/json"}
            payload={"customer":None,"billingType":"PIX","value":amount,"dueDate":datetime.now().strftime("%Y-%m-%d"),"externalReference":str(m.from_user.id)}
            # Create/find customer
            customer={"name":m.from_user.first_name or "Cliente Telegram","externalReference":str(m.from_user.id)}
            cr=requests.post("https://api.asaas.com/v3/customers",headers=headers,json=customer,timeout=30)
            cr.raise_for_status(); cid=cr.json()["id"]; payload["customer"]=cid
            pr=requests.post("https://api.asaas.com/v3/payments",headers=headers,json=payload,timeout=30); pr.raise_for_status()
            pay=pr.json(); pix=requests.get(f"https://api.asaas.com/v3/payments/{pay['id']}/pixQrCode",headers=headers,timeout=30); pix.raise_for_status()
            pdata=pix.json(); c=conn(); c.execute("INSERT OR IGNORE INTO payments(telegram_id,payment_id,amount,credits,status) VALUES(?,?,?,?,?)",(m.from_user.id,pay["id"],amount,amount,"PENDING")); c.commit(); c.close()
            img=qrcode.make(pdata["payload"]); bio=BytesIO(); img.save(bio,"PNG"); bio.seek(0)
            bot.send_photo(m.chat.id,bio,caption=f"💳 <b>RECARGA DE {amount:.2f} CRD</b>\n\n💰 Pague R$ {amount:.2f} via PIX.\n📋 Copia e cola:\n<code>{html.escape(pdata['payload'])}</code>\n\nOs créditos são liberados automaticamente após confirmação.")
        except Exception as e:
            bot.reply_to(m,"❌ Não consegui gerar o PIX agora. Tente novamente em alguns instantes.")
            print("ASAAS",repr(e))

@app.post("/webhooks/asaas")
async def asaas_webhook(request: Request):
    token=(request.headers.get("asaas-access-token") or request.headers.get("x-webhook-token","")).strip()
    if not ASAAS_WEBHOOK_TOKEN:
        return JSONResponse({"ok":False,"error":"webhook_not_configured"},status_code=503)
    if not secrets.compare_digest(ASAAS_WEBHOOK_TOKEN,token):
        return JSONResponse({"ok":False,"error":"unauthorized"},status_code=401)
    data=await request.json(); event=data.get("event",""); payment=data.get("payment",{}); pid=payment.get("id")
    print(f"📥 Asaas webhook: evento={event} payment={pid}")
    if event in ("PAYMENT_RECEIVED","PAYMENT_CONFIRMED") and pid:
        c=conn()
        try:
            c.execute("BEGIN IMMEDIATE")
            row=c.execute("SELECT * FROM payments WHERE payment_id=?",(pid,)).fetchone()
            if row and row["status"]!="RECEIVED":
                user=c.execute("SELECT balance FROM users WHERE telegram_id=?",(row["telegram_id"],)).fetchone()
                if not user:
                    c.rollback()
                    return JSONResponse({"ok":False,"error":"payment_user_not_found"},status_code=409)
                balance=round(float(user["balance"] or 0)+float(row["credits"] or 0),2)
                c.execute("UPDATE payments SET status='RECEIVED' WHERE payment_id=?",(pid,))
                c.execute("UPDATE users SET balance=? WHERE telegram_id=?",(balance,row["telegram_id"]))
                c.execute("INSERT INTO credit_ledger(telegram_id,amount,balance_after,note,actor) VALUES(?,?,?,?,?)",(row["telegram_id"],row["credits"],balance,"Recarga PIX confirmada pelo Asaas","Asaas"))
                c.execute("INSERT INTO audit_logs(event,telegram_id,details) VALUES(?,?,?)",("Pagamento confirmado",row["telegram_id"],f"PIX {pid}; +{row['credits']:.2f} CRD"))
                c.commit()
                if bot:
                    try: bot.send_message(row["telegram_id"],f"✅ <b>RECARGA CONFIRMADA</b>\n💎 +{row['credits']:.2f} CRD")
                    except Exception as error: print("TELEGRAM PAYMENT NOTICE FAILED:",type(error).__name__)
                audit_event("Pagamento PIX confirmado",row["telegram_id"],f"Pagamento {pid}; +{row['credits']:.2f} CRD",notify=True)
            else:
                c.commit()
        except Exception as error:
            c.rollback()
            print("ASAAS WEBHOOK PROCESSING FAILED:",type(error).__name__)
            return JSONResponse({"ok":False,"error":"payment_processing_failed"},status_code=500)
        finally:
            c.close()
    return {"ok":True}

def admin_guard(password):
    raise HTTPException(410,"Painel legado desativado. Use o painel autenticado do KV CELL em /bot_kv.")

STYLE="""<style>body{font-family:Arial;background:#0d0d0d;color:#eee;margin:0}main{max-width:1100px;margin:auto;padding:20px}.card{background:#181818;border:1px solid #333;padding:16px;margin:12px 0;border-radius:10px}input,textarea,select{width:100%;padding:9px;margin:5px 0;background:#111;color:#fff;border:1px solid #555;border-radius:6px}button,a.btn{background:#f4c400;color:#111;padding:9px 14px;border:0;border-radius:6px;font-weight:bold;text-decoration:none;display:inline-block}table{width:100%;border-collapse:collapse}td,th{padding:8px;border-bottom:1px solid #333;text-align:left}</style>"""

@app.get("/admin",response_class=HTMLResponse)
def admin(p:str=""):
    admin_guard(p)
    c=conn(); users=c.execute("SELECT COUNT(*) n FROM users").fetchone()["n"]; services=c.execute("SELECT COUNT(*) n FROM services").fetchone()["n"]; orders=c.execute("SELECT COUNT(*) n FROM orders").fetchone()["n"]; c.close()
    nav=f'<p><a class="btn" href="/admin/services?p={p}">Serviços</a> <a class="btn" href="/admin/categories?p={p}">Categorias</a> <a class="btn" href="/admin/users?p={p}">Clientes</a> <a class="btn" href="/admin/content?p={p}">Conteúdos</a> <a class="btn" href="/admin/notices?p={p}">Avisos</a> <a class="btn" href="/admin/settings?p={p}">Configurações</a></p>'
    return f"<html><head>{STYLE}</head><body><main><h1>⚡ KV CELL UNLOCKER</h1>{nav}<div class=card>👤 Clientes: {users} | 🛠 Serviços: {services} | 📦 Pedidos: {orders}</div></main></body></html>"

@app.get("/admin/categories",response_class=HTMLResponse)
def admin_categories(p:str=""):
    admin_guard(p); c=conn(); rows=c.execute("SELECT * FROM categories ORDER BY parent_id,name").fetchall(); c.close()
    opts='<option value="">Categoria principal</option>'+''.join(f'<option value="{x["id"]}">{x["name"]}</option>' for x in rows if x["parent_id"] is None)
    listing=''.join(f"<tr><td>{x['id']}</td><td>{x['name']}</td><td>{x['parent_id'] or '-'}</td></tr>" for x in rows)
    return f"<html><head>{STYLE}</head><body><main><h2>📂 Categorias</h2><div class=card><form method=post action='/admin/categories?p={p}'><input name=name placeholder='Nome'><select name=parent_id>{opts}</select><button>Adicionar</button></form></div><table>{listing}</table></main></body></html>"

@app.post("/admin/categories")
def add_category(p:str=Form(""),name:str=Form(...),parent_id:str=Form("")):
    admin_guard(p); c=conn(); c.execute("INSERT INTO categories(name,parent_id) VALUES(?,?)",(name.strip(),int(parent_id) if parent_id else None)); c.commit(); c.close(); return RedirectResponse(f"/admin/categories?p={p}",303)

@app.get("/admin/services",response_class=HTMLResponse)
def admin_services(p:str="",q:str=""):
    admin_guard(p); c=conn(); rows=c.execute("SELECT s.*,c.name category FROM services s LEFT JOIN categories c ON c.id=s.category_id WHERE s.name LIKE ? ORDER BY s.id DESC",('%'+q+'%',)).fetchall(); cats=c.execute("SELECT * FROM categories ORDER BY name").fetchall(); c.close()
    opts=''.join(f'<option value="{x["id"]}">{x["name"]}</option>' for x in cats)
    rows_html=''.join(f"<tr><td>{x['id']}</td><td>{x['name']}</td><td>{x['category'] or '-'}</td><td>{x['cost_usd']}</td><td><a class=btn href='/admin/services/{x['id']}/edit?p={p}'>Editar</a></td></tr>" for x in rows)
    return f"""<html><head>{STYLE}</head><body><main><h2>🛠 Serviços</h2>
    <form><input type=hidden name=p value='{p}'><input name=q value='{q}' placeholder='🔎 Pesquisar serviço'><button>Pesquisar</button></form>
    <div class=card><h3>Adicionar serviço</h3><form method=post action='/admin/services?p={p}'><select name=category_id>{opts}</select><input name=name placeholder='Nome'><textarea name=description placeholder='Descrição'></textarea><input name=cost_usd placeholder='Custo fornecedor USD'><select name=kind><option>REGISTRO</option><option>ALUGUEL</option><option>CREDITO</option></select><button>Salvar</button></form></div>
    <table>{rows_html}</table></main></body></html>"""

@app.post("/admin/services")
def add_service(p:str=Form(""),category_id:int=Form(...),name:str=Form(...),description:str=Form(""),cost_usd:float=Form(0),kind:str=Form("REGISTRO")):
    admin_guard(p); c=conn(); c.execute("INSERT INTO services(category_id,name,description,cost_usd,kind) VALUES(?,?,?,?,?)",(category_id,name,description,cost_usd,kind)); c.commit(); c.close(); return RedirectResponse(f"/admin/services?p={p}",303)

@app.get("/admin/services/{sid}/edit",response_class=HTMLResponse)
def edit_service(sid:int,p:str=""):
    admin_guard(p); c=conn(); s=c.execute("SELECT * FROM services WHERE id=?",(sid,)).fetchone(); cats=c.execute("SELECT * FROM categories ORDER BY name").fetchall(); c.close()
    if not s: raise HTTPException(404)
    opts=''.join(f'<option value="{x["id"]}" {"selected" if x["id"]==s["category_id"] else ""}>{x["name"]}</option>' for x in cats)
    def esc(v): return str(v or "").replace("&","&amp;").replace("<","&lt;").replace(">","&gt;").replace('"',"&quot;")
    return f"""<html><head>{STYLE}</head><body><main><h2>✏️ Editar serviço #{sid}</h2><div class=card><form method=post>
    <select name=category_id>{opts}</select><input name=name value="{esc(s['name'])}"><textarea name=description>{esc(s['description'])}</textarea>
    <input name=cost_usd value="{s['cost_usd']}" placeholder="Custo USD"><input name=min_add value="{s['min_add']}" placeholder="Acréscimo mínimo">
    <input name=margin_logista value="{s['margin_logista']}"><input name=margin_unlocker value="{s['margin_unlocker']}"><input name=margin_cliente value="{s['margin_cliente']}">
    <textarea name=fields_json>{esc(s['fields_json'])}</textarea><input name=tutorial_url value="{esc(s['tutorial_url'])}" placeholder="Tutorial"><input name=download_url value="{esc(s['download_url'])}" placeholder="Download">
    <button>💾 Salvar serviço</button></form></div></main></body></html>"""

@app.post("/admin/services/{sid}/edit")
def save_service(sid:int,p:str=Form(""),category_id:int=Form(...),name:str=Form(...),description:str=Form(""),cost_usd:float=Form(0),min_add:float=Form(0),margin_logista:float=Form(40),margin_unlocker:float=Form(30),margin_cliente:float=Form(30),fields_json:str=Form("[]"),tutorial_url:str=Form(""),download_url:str=Form("")):
    admin_guard(p)
    try: json.loads(fields_json or "[]")
    except: raise HTTPException(400,"JSON dos campos inválido")
    c=conn(); c.execute("""UPDATE services SET category_id=?,name=?,description=?,cost_usd=?,min_add=?,margin_logista=?,margin_unlocker=?,margin_cliente=?,fields_json=?,tutorial_url=?,download_url=? WHERE id=?""",(category_id,name,description,cost_usd,min_add,margin_logista,margin_unlocker,margin_cliente,fields_json,tutorial_url,download_url,sid)); c.commit(); c.close()
    return RedirectResponse(f"/admin/services?p={p}",303)

@app.get("/admin/users",response_class=HTMLResponse)
def admin_users(p:str=""):
    admin_guard(p); c=conn(); rows=c.execute("SELECT * FROM users ORDER BY created_at DESC LIMIT 500").fetchall(); c.close()
    html=''.join(f"<tr><td>{u['telegram_id']}</td><td>{u['username'] or u['name']}</td><td>{u['role']}</td><td>{u['balance']:.2f}</td><td>{'🔒' if u['blocked'] else '🟢'}</td></tr>" for u in rows)
    return f"<html><head>{STYLE}</head><body><main><h2>👥 Clientes</h2><table>{html}</table></main></body></html>"

@app.get("/admin/content",response_class=HTMLResponse)
def admin_content(p:str=""):
    admin_guard(p); return f"<html><head>{STYLE}</head><body><main><h2>📚 Conteúdos e Métodos Pagos</h2><div class=card>Cadastre título, descrição, preço em CRD e link. Estrutura de banco pronta para expansão.</div></main></body></html>"

@app.get("/admin/notices",response_class=HTMLResponse)
def admin_notices(p:str=""):
    admin_guard(p); return f"<html><head>{STYLE}</head><body><main><h2>📢 Avisos</h2><div class=card><form method=post><input name=title placeholder='Título'><textarea name=body placeholder='Corpo do aviso'></textarea><button>Enviar para usuários</button></form></div></main></body></html>"

@app.post("/admin/notices")
def send_notice(p:str=Form(""),title:str=Form(...),body:str=Form(...)):
    admin_guard(p); c=conn(); users=c.execute("SELECT telegram_id FROM users WHERE blocked=0").fetchall(); c.execute("INSERT INTO notices(title,body) VALUES(?,?)",(title,body)); c.commit(); c.close()
    if bot:
        for u in users:
            try: bot.send_message(u["telegram_id"],f"📢 <b>{title}</b>\n\n{body}")
            except: pass
    return RedirectResponse(f"/admin/notices?p={p}",303)

@app.get("/admin/settings",response_class=HTMLResponse)
def admin_settings(p:str=""):
    admin_guard(p)
    return f"""<html><head>{STYLE}</head><body><main><h2>⚙️ Configurações</h2><div class=card><form method=post>
    <label>USD → BRL</label><input name=usd_rate value="{setting('usd_rate','5.40')}">
    <label>Taxa fixa Asaas por cobrança</label><input name=payment_fee value="{setting('payment_fee','0.99')}">
    <label>Link do suporte</label><input name=support_url value="{setting('support_url','')}">
    <button>Salvar</button></form></div></main></body></html>"""

@app.post("/admin/settings")
def save_settings(p:str=Form(""),usd_rate:str=Form("5.40"),payment_fee:str=Form("0.99"),support_url:str=Form("")):
    admin_guard(p); set_setting("usd_rate",usd_rate); set_setting("payment_fee",payment_fee); set_setting("support_url",support_url); return RedirectResponse(f"/admin/settings?p={p}",303)

def bot_thread():
    if bot:
        bot.infinity_polling(skip_pending=True, timeout=30, long_polling_timeout=30)

init_db()
if __name__ == "__main__":
    if bot: threading.Thread(target=bot_thread,daemon=True).start()
    import uvicorn
    uvicorn.run(app,host="0.0.0.0",port=int(os.getenv("PORT","80")))
