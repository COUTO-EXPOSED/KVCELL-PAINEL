"""KV CELL Telegram commerce module, integrated into the KV CELL OS process.

Secrets are read exclusively from environment variables. This module intentionally
never sends customer-supplied identifiers to the audit Telegram group.
"""
from __future__ import annotations

import base64
import json
import os
import re
import sqlite3
import threading
import time
import urllib.error
import urllib.parse
import urllib.request
from datetime import datetime
from decimal import Decimal, ROUND_HALF_UP
from html import escape
from io import BytesIO

try:
    import qrcode
except Exception:  # The main OS already declares qrcode as a dependency.
    qrcode = None

DATA_DIR = os.environ.get("KVCELL_DATA_DIR", "/application/data")
try:
    os.makedirs(DATA_DIR, exist_ok=True)
except Exception:
    DATA_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.environ.get("KVCELL_BOT_DATABASE_PATH", os.path.join(DATA_DIR, "kvcell.db"))
BOT_TOKEN = (os.environ.get("TELEGRAM_BOT_TOKEN") or os.environ.get("TELEGRAM_TOKEN") or "").strip()
BOT_GROUP_ID = (os.environ.get("KVCELL_BOT_LOG_CHAT_ID") or os.environ.get("TELEGRAM_CHAT_ID") or "").strip()
ASAAS_KEY = os.environ.get("ASAAS_API_KEY", "").strip()
ASAAS_WEBHOOK_TOKEN = os.environ.get("ASAAS_WEBHOOK_TOKEN", "").strip()
PARTNER_URL = os.environ.get("PARTNER_API_URL", "").strip()
PARTNER_USER = os.environ.get("PARTNER_API_USER", "").strip()
PARTNER_KEY = os.environ.get("PARTNER_API_KEY", "").strip()

_LOCK = threading.RLock()
_STARTED = False
_STOP = threading.Event()
_PENDING: dict[int, dict] = {}
_OFFSET = 0
_LAST_TELEGRAM_OK = None
_LAST_TELEGRAM_ERROR = ""
_LAST_PARTNER_OK = None
_LAST_PARTNER_ERROR = ""
_LAST_ASAAS_OK = None
_LAST_ASAAS_ERROR = ""
_LAST_PARTNER_CHECK = 0.0
_PARTNER_ACCOUNT_INFO = {}
_PERSIST_CALLBACK = None


class _PersistentConnection(sqlite3.Connection):
    def commit(self):
        super().commit()
        callback = _PERSIST_CALLBACK
        if callback:
            try:
                callback()
            except Exception:
                pass


def set_persist_callback(callback):
    global _PERSIST_CALLBACK
    _PERSIST_CALLBACK = callback


class BotError(Exception):
    def __init__(self, message: str, status: int = 400):
        super().__init__(message)
        self.status = status


def _now() -> str:
    return datetime.now().strftime("%Y-%m-%d %H:%M:%S")


def _conn():
    c = sqlite3.connect(DB_PATH, timeout=20, check_same_thread=False, factory=_PersistentConnection)
    c.row_factory = sqlite3.Row
    c.execute("PRAGMA busy_timeout=15000")
    c.execute("PRAGMA journal_mode=WAL")
    c.execute("PRAGMA synchronous=NORMAL")
    return c


def _init_db():
    os.makedirs(os.path.dirname(DB_PATH) or ".", exist_ok=True)
    c = _conn()
    c.executescript("""
    CREATE TABLE IF NOT EXISTS bot_users(
      telegram_id INTEGER PRIMARY KEY, username TEXT, first_name TEXT, last_name TEXT,
      role TEXT NOT NULL DEFAULT 'CLIENTE_FIXO', balance REAL NOT NULL DEFAULT 0,
      blocked INTEGER NOT NULL DEFAULT 0, created_at TEXT NOT NULL, updated_at TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS bot_categories(
      id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, group_type TEXT DEFAULT 'GERAL',
      parent_id INTEGER, active INTEGER NOT NULL DEFAULT 1, created_at TEXT NOT NULL,
      UNIQUE(name, group_type)
    );
    CREATE TABLE IF NOT EXISTS bot_services(
      id INTEGER PRIMARY KEY AUTOINCREMENT, category_id INTEGER, name TEXT NOT NULL,
      description TEXT DEFAULT '', provider_service_id TEXT, kind TEXT NOT NULL DEFAULT 'REGISTRO',
      provider_cost REAL NOT NULL DEFAULT 0, provider_currency TEXT NOT NULL DEFAULT 'USD',
      min_add REAL NOT NULL DEFAULT 0, margin_logista REAL NOT NULL DEFAULT 40,
      margin_unlocker REAL NOT NULL DEFAULT 30, margin_cliente REAL NOT NULL DEFAULT 30,
      price_override REAL, fields_json TEXT NOT NULL DEFAULT '[]', active INTEGER NOT NULL DEFAULT 1,
      tutorial_url TEXT DEFAULT '', download_url TEXT DEFAULT '', before_message TEXT DEFAULT '',
      updated_at TEXT NOT NULL
    );
    CREATE UNIQUE INDEX IF NOT EXISTS idx_bot_service_provider ON bot_services(provider_service_id,kind) WHERE provider_service_id IS NOT NULL AND provider_service_id<>'';
    CREATE TABLE IF NOT EXISTS bot_orders(
      id INTEGER PRIMARY KEY AUTOINCREMENT, telegram_id INTEGER NOT NULL, service_id INTEGER NOT NULL,
      data_json TEXT NOT NULL DEFAULT '{}', provider_ref TEXT, status TEXT NOT NULL DEFAULT 'PENDENTE',
      result TEXT DEFAULT '', price REAL NOT NULL DEFAULT 0, provider_cost REAL NOT NULL DEFAULT 0,
      refunded INTEGER NOT NULL DEFAULT 0, created_at TEXT NOT NULL, updated_at TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS bot_payments(
      id INTEGER PRIMARY KEY AUTOINCREMENT, telegram_id INTEGER NOT NULL, payment_id TEXT UNIQUE,
      amount REAL NOT NULL, credits REAL NOT NULL, status TEXT NOT NULL DEFAULT 'PENDING',
      pix_payload TEXT DEFAULT '', created_at TEXT NOT NULL, updated_at TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS bot_ledger(
      id INTEGER PRIMARY KEY AUTOINCREMENT, telegram_id INTEGER NOT NULL, direction TEXT NOT NULL,
      amount REAL NOT NULL, balance_after REAL NOT NULL, event TEXT NOT NULL, reference TEXT DEFAULT '',
      actor TEXT DEFAULT '', created_at TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS bot_logs(
      id INTEGER PRIMARY KEY AUTOINCREMENT, level TEXT NOT NULL, event TEXT NOT NULL,
      details TEXT DEFAULT '', telegram_id INTEGER, created_at TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS bot_settings(key TEXT PRIMARY KEY, value TEXT NOT NULL);
    CREATE INDEX IF NOT EXISTS idx_bot_orders_user ON bot_orders(telegram_id,id DESC);
    CREATE INDEX IF NOT EXISTS idx_bot_orders_status ON bot_orders(status,id DESC);
    CREATE INDEX IF NOT EXISTS idx_bot_logs_id ON bot_logs(id DESC);
    CREATE INDEX IF NOT EXISTS idx_bot_ledger_user ON bot_ledger(telegram_id,id DESC);
    """)
    defaults = {
        "usd_rate": "5.40", "minimum_pix": "5.00", "support_url": "",
        "payment_fee": "0.99", "welcome_text": "Bem-vindo ao KV CELL! Escolha uma opção abaixo.",
        "brand_name": "KV CELL UNLOCKER"
    }
    for k, v in defaults.items():
        c.execute("INSERT OR IGNORE INTO bot_settings(key,value) VALUES(?,?)", (k, v))
    c.commit()
    c.close()


def _setting(key: str, default: str = "") -> str:
    c = _conn()
    row = c.execute("SELECT value FROM bot_settings WHERE key=?", (key,)).fetchone()
    c.close()
    return str(row["value"]) if row else default


def _set_setting(key: str, value) -> None:
    c = _conn()
    c.execute("INSERT INTO bot_settings(key,value) VALUES(?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value", (key, str(value)))
    c.commit()
    c.close()


def _log(level: str, event: str, details: str = "", telegram_id=None, group: bool = False):
    details = str(details or "")[:1200]
    c = _conn()
    c.execute("INSERT INTO bot_logs(level,event,details,telegram_id,created_at) VALUES(?,?,?,?,?)",
              (level.upper(), str(event)[:120], details, telegram_id, _now()))
    c.commit()
    c.close()
    print(f"KV CELL BOT [{level.upper()}] {event}: {details[:240]}", flush=True)
    if group and BOT_TOKEN and BOT_GROUP_ID:
        body = f"<b>KV CELL • {escape(level.upper())}</b>\n{escape(str(event)[:120])}"
        if details:
            body += "\n" + escape(details[:1500])
        try:
            _tg_call("sendMessage", {"chat_id": BOT_GROUP_ID, "text": body, "parse_mode": "HTML", "disable_web_page_preview": True}, timeout=8)
        except Exception as ex:
            print("KV CELL BOT GROUP LOG FAILED:", type(ex).__name__, flush=True)


def _tg_call(method: str, payload=None, timeout=15):
    if not BOT_TOKEN:
        raise RuntimeError("TELEGRAM_BOT_TOKEN não configurado")
    url = f"https://api.telegram.org/bot{BOT_TOKEN}/{method}"
    data = urllib.parse.urlencode(payload or {}).encode() if payload is not None else None
    req = urllib.request.Request(url, data=data, headers={"Content-Type": "application/x-www-form-urlencoded"} if data else {}, method="POST" if data else "GET")
    with urllib.request.urlopen(req, timeout=timeout) as response:
        result = json.loads(response.read(2_000_000).decode("utf-8"))
    if not result.get("ok"):
        raise RuntimeError(str(result.get("description") or "Telegram recusou a operação")[:250])
    return result.get("result")


def _tg_photo(chat_id, photo_bytes: bytes, caption: str):
    boundary = "----KVCELL" + str(int(time.time() * 1000))
    parts = []
    def field(name, value):
        parts.append(f"--{boundary}\r\nContent-Disposition: form-data; name=\"{name}\"\r\n\r\n{value}\r\n".encode())
    field("chat_id", chat_id)
    field("caption", caption)
    field("parse_mode", "HTML")
    parts.append((f"--{boundary}\r\nContent-Disposition: form-data; name=\"photo\"; filename=\"pix.png\"\r\nContent-Type: image/png\r\n\r\n").encode() + photo_bytes + b"\r\n")
    parts.append(f"--{boundary}--\r\n".encode())
    body = b"".join(parts)
    req = urllib.request.Request(f"https://api.telegram.org/bot{BOT_TOKEN}/sendPhoto", data=body,
                                 headers={"Content-Type": f"multipart/form-data; boundary={boundary}"}, method="POST")
    with urllib.request.urlopen(req, timeout=25) as r:
        result = json.loads(r.read(1_000_000).decode())
    if not result.get("ok"):
        raise RuntimeError(str(result.get("description") or "Falha ao enviar QR PIX")[:250])


def _user(uid: int, username="", first="", last=""):
    c = _conn()
    old = c.execute("SELECT * FROM bot_users WHERE telegram_id=?", (int(uid),)).fetchone()
    created = not bool(old)
    if created:
        c.execute("INSERT INTO bot_users(telegram_id,username,first_name,last_name,created_at,updated_at) VALUES(?,?,?,?,?,?)",
                  (int(uid), str(username or "")[:80], str(first or "")[:100], str(last or "")[:100], _now(), _now()))
    else:
        c.execute("UPDATE bot_users SET username=?,first_name=?,last_name=?,updated_at=? WHERE telegram_id=?",
                  (str(username or old["username"] or "")[:80], str(first or old["first_name"] or "")[:100], str(last or old["last_name"] or "")[:100], _now(), int(uid)))
    row = c.execute("SELECT * FROM bot_users WHERE telegram_id=?", (int(uid),)).fetchone()
    c.commit(); c.close()
    if created:
        who = ("@" + username) if username else (first or "sem nome")
        _log("INFO", "Novo cadastro Telegram", f"Usuário: {who}\nTelegram ID: {uid}", int(uid), group=True)
    return dict(row)


def _money(value) -> float:
    try:
        return float(Decimal(str(value)).quantize(Decimal("0.01"), rounding=ROUND_HALF_UP))
    except Exception:
        return 0.0


def _service_price(service, role="CLIENTE_FIXO") -> float:
    if service["price_override"] is not None:
        return _money(service["price_override"])
    cost = float(service["provider_cost"] or 0)
    currency = str(service["provider_currency"] or "USD").upper()
    if currency in ("USD", "US$", "DOLLAR", "DÓLAR"):
        cost *= float(_setting("usd_rate", "5.40"))
    margin = {"LOGISTA": service["margin_logista"], "UNLOCKER": service["margin_unlocker"], "CLIENTE_FIXO": service["margin_cliente"]}.get(role, service["margin_cliente"])
    return _money(max(cost * (1 + float(margin or 0) / 100), cost + float(service["min_add"] or 0)))


def _menu_markup():
    support = _setting("support_url", "").strip()
    rows = [[{"text": "🛠 Serviços", "callback_data": "services"}],
            [{"text": "💳 Recarregar créditos", "callback_data": "recharge"}, {"text": "💎 Meu saldo", "callback_data": "balance"}],
            [{"text": "📦 Meus pedidos", "callback_data": "orders"}]]
    if support.startswith("https://t.me/"):
        rows.append([{"text": "🆘 Suporte", "url": support}])
    return {"inline_keyboard": rows}


def _send(chat_id, text, markup=None):
    payload = {"chat_id": chat_id, "text": str(text)[:4000], "parse_mode": "HTML", "disable_web_page_preview": True}
    if markup:
        payload["reply_markup"] = json.dumps(markup, ensure_ascii=False)
    return _tg_call("sendMessage", payload)


def _answer_callback(callback_id, text=""):
    try:
        _tg_call("answerCallbackQuery", {"callback_query_id": callback_id, "text": str(text)[:180]})
    except Exception:
        pass


def _categories_keyboard(parent_id=None):
    c = _conn()
    cats = c.execute("SELECT * FROM bot_categories WHERE active=1 AND parent_id IS ? ORDER BY name", (parent_id,)).fetchall()
    if parent_id is None:
        services = []
    else:
        services = c.execute("SELECT * FROM bot_services WHERE category_id=? AND active=1 ORDER BY name", (parent_id,)).fetchall()
    c.close()
    rows = [[{"text": "📂 " + str(x["name"])[:55], "callback_data": f"cat:{x['id']}"}] for x in cats]
    rows += [[{"text": "🛠 " + str(x["name"])[:48], "callback_data": f"svc:{x['id']}"}] for x in services]
    if parent_id is not None:
        rows.append([{"text": "⬅️ Voltar às categorias", "callback_data": "services"}])
    rows.append([{"text": "🏠 Menu", "callback_data": "home"}])
    return {"inline_keyboard": rows}


def _custom_fields(service):
    try:
        fields = json.loads(service["fields_json"] or "[]")
        if not isinstance(fields, list):
            fields = []
    except Exception:
        fields = []
    kind = str(service["kind"] or "").upper()
    if kind == "IMEI" and not any(str(f.get("name", "")).lower() == "imei" for f in fields if isinstance(f, dict)):
        fields.insert(0, {"name": "IMEI", "label": "IMEI do aparelho", "required": True, "type": "text"})
    return fields


def _create_pix(uid: int, amount: float, chat_id: int):
    if not ASAAS_KEY:
        _send(chat_id, "⚠️ O PIX ainda não está configurado. Avise o suporte.")
        _log("WARN", "Tentativa de recarga sem Asaas configurado", f"Telegram ID: {uid}", uid, group=True)
        return
    headers = {"access_token": ASAAS_KEY, "Content-Type": "application/json"}
    def call(path, payload=None):
        url = "https://api.asaas.com/v3" + path
        data = json.dumps(payload).encode() if payload is not None else None
        req = urllib.request.Request(url, data=data, headers=headers, method="POST" if data is not None else "GET")
        with urllib.request.urlopen(req, timeout=25) as r:
            return json.loads(r.read(2_000_000).decode())
    try:
        customer = call("/customers", {"name": "Cliente KV CELL Telegram", "externalReference": str(uid)})
        payment = call("/payments", {"customer": customer["id"], "billingType": "PIX", "value": amount,
                                      "dueDate": datetime.now().strftime("%Y-%m-%d"), "externalReference": str(uid),
                                      "description": f"KV CELL - {amount:.2f} créditos Telegram"})
        c = _conn()
        c.execute("INSERT INTO bot_payments(telegram_id,payment_id,amount,credits,status,created_at,updated_at) VALUES(?,?,?,?,?,?,?)",
                  (uid, payment["id"], amount, amount, "PENDING", _now(), _now()))
        c.commit(); c.close()
        pix = call(f"/payments/{payment['id']}/pixQrCode")
        c = _conn(); c.execute("UPDATE bot_payments SET pix_payload=?,updated_at=? WHERE payment_id=?", (pix.get("payload", ""), _now(), payment["id"])); c.commit(); c.close()
        caption = (f"💳 <b>RECARGA KV CELL</b>\n\nCréditos: <b>{amount:.2f} CRD</b>\n"
                   f"Valor PIX: <b>R$ {amount:.2f}</b>\n\nPague pelo QR ou use o copia e cola abaixo:\n<code>{escape(pix.get('payload',''))}</code>\n\n"
                   "Os créditos serão liberados após a confirmação do Asaas.")
        if qrcode:
            image = qrcode.make(pix.get("payload", "")); bio = BytesIO(); image.save(bio, format="PNG")
            _tg_photo(chat_id, bio.getvalue(), caption)
        else:
            _send(chat_id, caption)
        _log("INFO", "PIX gerado", f"Pagamento: {payment['id']}\nValor: R$ {amount:.2f}\nTelegram ID: {uid}", uid, group=True)
    except Exception as ex:
        _log("ERROR", "Falha ao gerar PIX", f"Tipo: {type(ex).__name__}\nTelegram ID: {uid}", uid, group=True)
        _send(chat_id, "❌ Não consegui gerar o PIX agora. Tente novamente mais tarde ou fale com o suporte.")


def _partner_call(action: str, parameters=None):
    if not (PARTNER_URL and PARTNER_USER and PARTNER_KEY):
        raise RuntimeError("API do servidor parceiro não configurada (URL, usuário ou chave ausente)")
    params_b64 = base64.b64encode(json.dumps(parameters or {}, ensure_ascii=False).encode()).decode() if parameters is not None else ""
    form = {"username": PARTNER_USER, "apiaccesskey": PARTNER_KEY, "action": action}
    if params_b64:
        form["parameters"] = params_b64
    req = urllib.request.Request(PARTNER_URL, data=urllib.parse.urlencode(form).encode(),
                                 headers={"Content-Type": "application/x-www-form-urlencoded", "User-Agent": "KV-CELL-OS/1.0"}, method="POST")
    with urllib.request.urlopen(req, timeout=25) as response:
        raw = response.read(4_000_000).decode("utf-8", "replace")
    try:
        data = json.loads(raw)
    except Exception:
        raise RuntimeError("API parceira respondeu conteúdo não JSON")
    errors = data.get("ERROR") or data.get("error")
    if errors:
        if isinstance(errors, list) and errors:
            msg = errors[0].get("MESSAGE") or errors[0].get("message") or str(errors[0])
        else:
            msg = str(errors)
        raise RuntimeError(str(msg)[:300])
    return data


def _first_success(data):
    success = data.get("SUCCESS") or data.get("success") or []
    if isinstance(success, dict):
        return success
    return success[0] if isinstance(success, list) and success else {}


def _partner_account():
    global _PARTNER_ACCOUNT_INFO
    data = _partner_call("accountinfo")
    row = _first_success(data)
    _PARTNER_ACCOUNT_INFO = row.get("AccoutInfo") or row.get("AccountInfo") or row
    return _PARTNER_ACCOUNT_INFO


def _partner_sync():
    account = _partner_account()
    currency = str(account.get("currency") or "USD").upper()
    gathered = []
    for action in ("imeiservicelist", "serverservicelist", "remoteservicelist"):
        try:
            data = _partner_call(action)
        except Exception as ex:
            # Dhru servers do not always expose a distinct remote list; SERVER list may include REMOTE.
            if action == "remoteservicelist":
                continue
            raise
        row = _first_success(data)
        listing = row.get("LIST") or row.get("list") or {}
        if not isinstance(listing, dict):
            continue
        for group_key, group in listing.items():
            if not isinstance(group, dict):
                continue
            group_name = str(group.get("GROUPNAME") or group_key or "Serviços")[:120]
            group_type = str(group.get("GROUPTYPE") or ("IMEI" if action == "imeiservicelist" else "SERVER")).upper()
            services = group.get("SERVICES") or {}
            if isinstance(services, list):
                iterator = [(str(x.get("SERVICEID") or i), x) for i, x in enumerate(services) if isinstance(x, dict)]
            elif isinstance(services, dict):
                iterator = list(services.items())
            else:
                iterator = []
            gathered.append((group_name, group_type, iterator))
    c = _conn(); inserted = 0; updated = 0
    for group_name, group_type, iterator in gathered:
        c.execute("INSERT OR IGNORE INTO bot_categories(name,group_type,parent_id,active,created_at) VALUES(?,?,NULL,1,?)", (group_name, group_type, _now()))
        cat = c.execute("SELECT id FROM bot_categories WHERE name=? AND group_type=?", (group_name, group_type)).fetchone()
        if not cat:
            continue
        for key, srv in iterator:
            provider_id = str(srv.get("SERVICEID") or key)
            name = str(srv.get("SERVICENAME") or srv.get("name") or f"Serviço {provider_id}")[:160]
            desc = str(srv.get("INFO") or srv.get("DESCRIPTION") or "")[:1000]
            kind = str(srv.get("SERVICETYPE") or group_type or "IMEI").upper()
            if kind not in ("IMEI", "SERVER", "REMOTE"):
                kind = group_type if group_type in ("IMEI", "SERVER", "REMOTE") else "IMEI"
            try:
                cost = float(srv.get("CREDIT") or srv.get("credit") or 0)
            except Exception:
                cost = 0
            custom = srv.get("Requires.Custom") or srv.get("REQUIRES.CUSTOM") or []
            fields = []
            if isinstance(custom, list):
                for f in custom:
                    if not isinstance(f, dict):
                        continue
                    fname = str(f.get("fieldname") or f.get("name") or "").strip()
                    if not fname:
                        continue
                    fields.append({"name": fname, "label": str(f.get("description") or fname),
                                   "required": bool(int(f.get("required", 1) or 0)),
                                   "type": str(f.get("fieldtype") or "text"),
                                   "options": str(f.get("fieldoptions") or "")})
            qty_options = str(srv.get("QNTOPTIONS") or "").strip()
            if qty_options and not any(str(f.get("name", "")).lower() in ("qnt", "quantity") for f in fields):
                fields.append({"name": "Qnt", "label": "Quantidade", "required": True, "type": "select", "options": qty_options})
            old = c.execute("SELECT id FROM bot_services WHERE provider_service_id=? AND kind=?", (provider_id, kind)).fetchone()
            if old:
                c.execute("UPDATE bot_services SET category_id=?,name=?,description=?,provider_cost=?,provider_currency=?,fields_json=?,active=1,updated_at=? WHERE id=?",
                          (cat["id"], name, desc, cost, currency, json.dumps(fields, ensure_ascii=False), _now(), old["id"]))
                updated += 1
            else:
                c.execute("INSERT INTO bot_services(category_id,name,description,provider_service_id,kind,provider_cost,provider_currency,fields_json,active,updated_at) VALUES(?,?,?,?,?,?,?,?,1,?)",
                          (cat["id"], name, desc, provider_id, kind, cost, currency, json.dumps(fields, ensure_ascii=False), _now()))
                inserted += 1
    c.commit(); c.close()
    _log("INFO", "Catálogo sincronizado com servidor parceiro", f"Novos: {inserted}\nAtualizados: {updated}\nMoeda: {currency}", group=True)
    return {"inserted": inserted, "updated": updated, "currency": currency, "credit": account.get("credit"), "email": account.get("mail") or account.get("email")}


def _place_partner_order(order_id: int, service, values: dict):
    if not service["provider_service_id"]:
        return None, "AGUARDANDO_MANUAL", "Serviço sem ID de fornecedor; encaminhado para operação manual."
    params = {"ID": str(service["provider_service_id"])}
    custom_fields = {}
    for key, value in values.items():
        upper = str(key).upper()
        if upper == "IMEI":
            params["IMEI"] = str(value)
        elif upper in ("QNT", "QUANTITY"):
            params["Qnt"] = str(value)
        else:
            custom_fields[str(key)] = str(value)
    if custom_fields:
        params["customfield"] = base64.b64encode(json.dumps(custom_fields, ensure_ascii=False).encode()).decode()
    kind = str(service["kind"] or "IMEI").upper()
    if kind == "SERVER":
        params["Qnt"] = str(params.get("Qnt") or "1")
        action = "placeserverorder"
    else:
        action = "placeimeiorder"
    data = _partner_call(action, params)
    row = _first_success(data)
    ref = row.get("REFERENCEID") or row.get("referenceid") or row.get("ID")
    if not ref:
        raise RuntimeError("Fornecedor não retornou REFERENCEID")
    return str(ref), "ENVIADO", str(row.get("MESSAGE") or row.get("message") or "Pedido aceito pelo fornecedor")[:500]


def _refund_order(c, order, actor="Sistema", reason="Estorno"):
    if order["refunded"]:
        return False
    user = c.execute("SELECT balance FROM bot_users WHERE telegram_id=?", (order["telegram_id"],)).fetchone()
    if not user:
        return False
    new_balance = _money(float(user["balance"]) + float(order["price"]))
    c.execute("UPDATE bot_users SET balance=?,updated_at=? WHERE telegram_id=?", (new_balance, _now(), order["telegram_id"]))
    c.execute("INSERT INTO bot_ledger(telegram_id,direction,amount,balance_after,event,reference,actor,created_at) VALUES(?,?,?,?,?,?,?,?)",
              (order["telegram_id"], "CREDITO", order["price"], new_balance, "ESTORNO_PEDIDO", f"Pedido #{order['id']}", actor, _now()))
    c.execute("UPDATE bot_orders SET refunded=1,status='ESTORNADO',result=?,updated_at=? WHERE id=?", (str(reason)[:500], _now(), order["id"]))
    return True


def _finalize_order(uid: int):
    state = _PENDING.pop(int(uid), None)
    if not state or state.get("type") != "service":
        return
    c = _conn()
    service = c.execute("SELECT * FROM bot_services WHERE id=? AND active=1", (state["service_id"],)).fetchone()
    user = c.execute("SELECT * FROM bot_users WHERE telegram_id=?", (int(uid),)).fetchone()
    if not service or not user or user["blocked"]:
        c.close(); return
    price = _service_price(service, user["role"])
    if float(user["balance"]) + 0.000001 < price:
        c.close()
        _send(state["chat_id"], f"❌ Saldo insuficiente. Você precisa de <b>{price:.2f} CRD</b>. Use Recarregar créditos.", _menu_markup())
        return
    new_balance = _money(float(user["balance"]) - price)
    cur = c.cursor()
    cur.execute("UPDATE bot_users SET balance=?,updated_at=? WHERE telegram_id=?", (new_balance, _now(), int(uid)))
    cur.execute("INSERT INTO bot_orders(telegram_id,service_id,data_json,status,price,provider_cost,created_at,updated_at) VALUES(?,?,?,?,?,?,?,?)",
                (int(uid), service["id"], json.dumps(state["data"], ensure_ascii=False), "PROCESSANDO", price, service["provider_cost"], _now(), _now()))
    oid = cur.lastrowid
    cur.execute("INSERT INTO bot_ledger(telegram_id,direction,amount,balance_after,event,reference,actor,created_at) VALUES(?,?,?,?,?,?,?,?)",
                (int(uid), "DEBITO", price, new_balance, "PEDIDO", f"Pedido #{oid}", "Telegram Bot", _now()))
    c.commit(); c.close()
    safe_name = str(service["name"])[:120]
    _log("INFO", "Pedido criado", f"Pedido: #{oid}\nServiço: {safe_name}\nValor: {price:.2f} CRD\nTelegram ID: {uid}", uid, group=True)
    try:
        ref, status, result = _place_partner_order(oid, service, state["data"])
        c = _conn(); c.execute("UPDATE bot_orders SET provider_ref=?,status=?,result=?,updated_at=? WHERE id=?", (ref, status, result, _now(), oid)); c.commit(); c.close()
        if status == "AGUARDANDO_MANUAL":
            _log("WARN", "Pedido aguardando operação manual", f"Pedido: #{oid}\nServiço: {safe_name}\nTelegram ID: {uid}", uid, group=True)
        _send(state["chat_id"], f"✅ <b>PEDIDO #{oid} REGISTRADO</b>\n🛠 {escape(safe_name)}\n💎 {price:.2f} CRD\n📌 {escape(status)}\n\nVocê pode acompanhar em <b>Meus pedidos</b>.", _menu_markup())
    except Exception as ex:
        c = _conn(); c.execute("UPDATE bot_orders SET status='FALHA_FORNECEDOR',result=?,updated_at=? WHERE id=?", (type(ex).__name__ + ": " + str(ex)[:220], _now(), oid)); c.commit(); c.close()
        c = _conn(); order = c.execute("SELECT * FROM bot_orders WHERE id=?", (oid,)).fetchone()
        _refund_order(c, order, "Sistema", "Falha no envio ao fornecedor")
        c.commit(); c.close()
        _log("ERROR", "Falha ao enviar pedido ao servidor parceiro", f"Pedido: #{oid}\nServiço: {safe_name}\nErro: {type(ex).__name__}\nCréditos devolvidos: {price:.2f}", uid, group=True)
        _send(state["chat_id"], f"⚠️ O fornecedor não aceitou o pedido #{oid}. Os <b>{price:.2f} CRD</b> foram devolvidos ao seu saldo. Tente novamente ou fale com o suporte.", _menu_markup())


def _update_order_status(order, data):
    row = _first_success(data)
    try:
        status_code = int(row.get("STATUS", row.get("status", -1)))
    except Exception:
        status_code = -1
    code = str(row.get("CODE") or row.get("code") or row.get("MESSAGE") or row.get("message") or "")[:700]
    mapping = {0: "NOVO", 1: "EM_PROCESSAMENTO", 3: "RECUSADO", 4: "CONCLUIDO"}
    status = mapping.get(status_code, "EM_PROCESSAMENTO")
    c = _conn(); current = c.execute("SELECT * FROM bot_orders WHERE id=?", (order["id"],)).fetchone()
    if not current:
        c.close(); return
    if status == "RECUSADO" and not current["refunded"]:
        _refund_order(c, current, "Servidor parceiro", "Fornecedor recusou o pedido: " + code)
    else:
        c.execute("UPDATE bot_orders SET status=?,result=?,updated_at=? WHERE id=?", (status, code, _now(), order["id"]))
    c.commit(); c.close()
    _log("INFO", "Status de pedido atualizado", f"Pedido: #{order['id']}\nStatus: {status}\nTelegram ID: {order['telegram_id']}", order["telegram_id"], group=True)
    if BOT_TOKEN:
        try:
            state = "seu pedido foi concluído" if status == "CONCLUIDO" else "o fornecedor recusou seu pedido e o saldo foi devolvido" if status == "RECUSADO" else "seu pedido continua em processamento"
            _send(order["telegram_id"], f"📦 Atualização do pedido <b>#{order['id']}</b>: {state}.")
        except Exception:
            pass


def _poll_order_statuses():
    if not (PARTNER_URL and PARTNER_USER and PARTNER_KEY):
        return
    c = _conn(); orders = c.execute("""SELECT o.*,s.kind AS service_kind
        FROM bot_orders o LEFT JOIN bot_services s ON s.id=o.service_id
        WHERE o.provider_ref IS NOT NULL AND o.provider_ref<>''
          AND o.status IN ('ENVIADO','NOVO','EM_PROCESSAMENTO','PROCESSANDO')
        ORDER BY o.id ASC LIMIT 30""").fetchall(); c.close()
    for order in orders:
        try:
            action = "getserverorder" if str(order["service_kind"] or "").upper() in ("SERVER", "REMOTE") else "getimeiorder"
            data = _partner_call(action, {"ID": str(order["provider_ref"])})
            _update_order_status(order, data)
        except Exception as ex:
            _log("WARN", "Falha ao consultar status do pedido", f"Pedido: #{order['id']}\nTipo: {type(ex).__name__}", order["telegram_id"])


def _process_message(message):
    sender = message.get("from") or {}; uid = int(sender.get("id") or 0); chat_id = (message.get("chat") or {}).get("id", uid)
    if not uid:
        return
    user = _user(uid, sender.get("username", ""), sender.get("first_name", ""), sender.get("last_name", ""))
    if user["blocked"]:
        _send(chat_id, "⛔ Seu acesso está bloqueado. Procure o suporte."); return
    text = str(message.get("text") or "").strip()
    if text.startswith("/start") or text.startswith("/menu"):
        _PENDING.pop(uid, None)
        if text.startswith("/start"):
            who = ("@" + str(sender.get("username"))) if sender.get("username") else str(user.get("first_name") or "Cliente")
            _log("INFO", "Login Telegram", f"Usuário: {who}\nTelegram ID: {uid}", uid, group=True)
        welcome = _setting("welcome_text", "Bem-vindo ao KV CELL!")
        _send(chat_id, f"⚡ <b>{escape(_setting('brand_name','KV CELL UNLOCKER'))}</b>\n\n👤 {escape(user['first_name'] or 'Cliente')}\n💎 Saldo: <b>{float(user['balance']):.2f} CRD</b>\n\n{escape(welcome)}", _menu_markup()); return
    if text.startswith("/cancelar"):
        _PENDING.pop(uid, None); _send(chat_id, "Operação cancelada.", _menu_markup()); return
    if text.startswith("/saldo"):
        _send(chat_id, f"💎 Seu saldo atual: <b>{float(user['balance']):.2f} CRD</b>", _menu_markup()); return
    pending = _PENDING.get(uid)
    if pending and pending.get("type") == "recharge":
        try:
            amount = _money(text.replace(",", "."))
        except Exception:
            amount = 0
        minimum = float(_setting("minimum_pix", "5.00"))
        if amount < minimum or amount > 10000:
            _send(chat_id, f"Digite um valor entre R$ {minimum:.2f} e R$ 10.000,00."); return
        _PENDING.pop(uid, None)
        _create_pix(uid, amount, chat_id); return
    if pending and pending.get("type") == "service":
        fields = pending["fields"]; index = int(pending["index"])
        field = fields[index]; value = text[:500]
        if not value:
            _send(chat_id, "Esse campo é obrigatório. Envie um valor ou /cancelar."); return
        if str(field.get("name", "")).upper() == "IMEI" and (not value.isdigit() or len(value) not in (14, 15, 16)):
            _send(chat_id, "IMEI inválido. Envie 14, 15 ou 16 números, ou /cancelar."); return
        pending["data"][str(field.get("name") or f"field{index}")] = value
        pending["index"] += 1
        if pending["index"] < len(fields):
            nxt = fields[pending["index"]]
            label = str(nxt.get("label") or nxt.get("name") or "Dado")
            options = str(nxt.get("options") or "")
            suffix = "\nOpções: " + escape(options) if options else ""
            _send(chat_id, f"📝 <b>{escape(label)}</b>{suffix}\nEnvie o valor solicitado ou /cancelar.")
        else:
            _finalize_order(uid)
        return
    _send(chat_id, "Use /menu para ver as opções disponíveis.", _menu_markup())


def _process_callback(query):
    sender = query.get("from") or {}; uid = int(sender.get("id") or 0); data = str(query.get("data") or "")
    msg = query.get("message") or {}; chat_id = (msg.get("chat") or {}).get("id", uid); message_id = msg.get("message_id")
    user = _user(uid, sender.get("username", ""), sender.get("first_name", ""), sender.get("last_name", ""))
    if user["blocked"]:
        _answer_callback(query.get("id"), "Acesso bloqueado"); return
    try:
        if data == "home":
            _send(chat_id, "⚡ <b>KV CELL</b>\nEscolha uma opção:", _menu_markup())
        elif data == "services":
            c = _conn(); count = c.execute("SELECT COUNT(*) n FROM bot_categories WHERE active=1 AND parent_id IS NULL").fetchone()["n"]; c.close()
            _send(chat_id, "🛠 <b>SERVIÇOS KV CELL</b>\nEscolha uma categoria disponível:", _categories_keyboard(None) if count else _menu_markup())
        elif data.startswith("cat:"):
            cid = int(data.split(":", 1)[1]); _send(chat_id, "📂 <b>Categoria</b>\nEscolha um serviço ou subcategoria:", _categories_keyboard(cid))
        elif data.startswith("svc:"):
            sid = int(data.split(":", 1)[1]); c = _conn(); service = c.execute("SELECT * FROM bot_services WHERE id=? AND active=1", (sid,)).fetchone(); c.close()
            if not service:
                _send(chat_id, "Este serviço está indisponível."); return
            price = _service_price(service, user["role"])
            desc = escape(str(service["description"] or "")[:1000])
            body = f"🛠 <b>{escape(service['name'])}</b>\n\n{desc}\n\n💎 Valor: <b>{price:.2f} CRD</b>"
            keyboard = {"inline_keyboard": [[{"text": "🚀 Solicitar serviço", "callback_data": f"buy:{sid}"}], [{"text": "⬅️ Voltar", "callback_data": "services"}]]}
            _send(chat_id, body, keyboard)
        elif data.startswith("buy:"):
            sid = int(data.split(":", 1)[1]); c = _conn(); service = c.execute("SELECT * FROM bot_services WHERE id=? AND active=1", (sid,)).fetchone(); c.close()
            if not service:
                _send(chat_id, "Serviço indisponível."); return
            fields = _custom_fields(service)
            if not fields:
                _PENDING[uid] = {"type": "service", "service_id": sid, "fields": [], "data": {}, "chat_id": chat_id, "index": 0}
                _finalize_order(uid)
            else:
                _PENDING[uid] = {"type": "service", "service_id": sid, "fields": fields, "data": {}, "chat_id": chat_id, "index": 0}
                f = fields[0]; options = str(f.get("options") or "")
                suffix = "\nOpções: " + escape(options) if options else ""
                _send(chat_id, f"📝 <b>{escape(str(f.get('label') or f.get('name') or 'Dado'))}</b>{suffix}\nEnvie o valor solicitado ou /cancelar.")
        elif data == "recharge":
            _PENDING[uid] = {"type": "recharge", "chat_id": chat_id}
            _send(chat_id, f"💳 Quantos créditos deseja comprar?\nMínimo: <b>R$ {float(_setting('minimum_pix','5.00')):.2f}</b>\nDigite somente o valor.")
        elif data == "balance":
            _send(chat_id, f"💎 Saldo disponível: <b>{float(user['balance']):.2f} CRD</b>", _menu_markup())
        elif data == "orders":
            c = _conn(); orders = c.execute("SELECT o.*,s.name service_name FROM bot_orders o LEFT JOIN bot_services s ON s.id=o.service_id WHERE o.telegram_id=? ORDER BY o.id DESC LIMIT 10", (uid,)).fetchall(); c.close()
            if not orders:
                _send(chat_id, "Você ainda não possui pedidos.", _menu_markup())
            else:
                lines = [f"<b>#{o['id']}</b> • {escape(str(o['service_name'] or 'Serviço'))} • {escape(o['status'])} • {float(o['price']):.2f} CRD" for o in orders]
                _send(chat_id, "📦 <b>MEUS PEDIDOS</b>\n\n" + "\n".join(lines), _menu_markup())
        else:
            _send(chat_id, "Opção não reconhecida.", _menu_markup())
    except Exception as ex:
        _log("ERROR", "Erro no fluxo do bot Telegram", f"Ação: {data[:50]}\nTipo: {type(ex).__name__}", uid)
        try: _send(chat_id, "Não foi possível concluir esta ação agora. Tente novamente ou use /menu.")
        except Exception: pass
    finally:
        _answer_callback(query.get("id"))


def _poll_telegram():
    global _OFFSET, _LAST_TELEGRAM_OK, _LAST_TELEGRAM_ERROR, _LAST_PARTNER_CHECK
    if not BOT_TOKEN:
        _LAST_TELEGRAM_ERROR = "TELEGRAM_BOT_TOKEN ausente"
        _log("WARN", "Bot Telegram não iniciado", _LAST_TELEGRAM_ERROR)
        return
    while not _STOP.is_set():
        try:
            updates = _tg_call("getUpdates", {"offset": _OFFSET, "timeout": 25, "allowed_updates": json.dumps(["message", "callback_query"])}, timeout=35) or []
            _LAST_TELEGRAM_OK = _now(); _LAST_TELEGRAM_ERROR = ""
            for update in updates:
                _OFFSET = max(_OFFSET, int(update.get("update_id", 0)) + 1)
                if "message" in update:
                    _process_message(update["message"])
                elif "callback_query" in update:
                    _process_callback(update["callback_query"])
            if time.time() - _LAST_PARTNER_CHECK > 60:
                _LAST_PARTNER_CHECK = time.time()
                _poll_order_statuses()
        except Exception as ex:
            _LAST_TELEGRAM_ERROR = type(ex).__name__ + ": " + str(ex)[:180]
            _log("ERROR", "Falha no polling do Telegram", _LAST_TELEGRAM_ERROR)
            time.sleep(5)


def start():
    global _STARTED
    _init_db()
    with _LOCK:
        if _STARTED:
            return
        _STARTED = True
        threading.Thread(target=_poll_telegram, name="kv-cell-telegram-bot", daemon=True).start()
        _log("INFO", "Módulo Telegram integrado iniciado", f"Token configurado: {'sim' if BOT_TOKEN else 'não'}; Grupo configurado: {'sim' if BOT_GROUP_ID else 'não'}")


def _counts():
    c = _conn()
    out = {
        "users": c.execute("SELECT COUNT(*) n FROM bot_users").fetchone()["n"],
        "active_users": c.execute("SELECT COUNT(*) n FROM bot_users WHERE blocked=0").fetchone()["n"],
        "services": c.execute("SELECT COUNT(*) n FROM bot_services WHERE active=1").fetchone()["n"],
        "categories": c.execute("SELECT COUNT(*) n FROM bot_categories WHERE active=1").fetchone()["n"],
        "orders": c.execute("SELECT COUNT(*) n FROM bot_orders").fetchone()["n"],
        "pending_orders": c.execute("SELECT COUNT(*) n FROM bot_orders WHERE status IN ('PROCESSANDO','ENVIADO','NOVO','EM_PROCESSAMENTO','AGUARDANDO_MANUAL')").fetchone()["n"],
        "payments_pending": c.execute("SELECT COUNT(*) n FROM bot_payments WHERE status='PENDING'").fetchone()["n"],
        "payments_received": c.execute("SELECT COUNT(*) n FROM bot_payments WHERE status='RECEIVED'").fetchone()["n"],
        "credit_liability": c.execute("SELECT COALESCE(SUM(balance),0) n FROM bot_users").fetchone()["n"],
        "orders_revenue": c.execute("SELECT COALESCE(SUM(price),0) n FROM bot_orders WHERE refunded=0").fetchone()["n"],
    }
    c.close()
    return out


def _health():
    return {
        "telegram": {"configured": bool(BOT_TOKEN), "group_configured": bool(BOT_GROUP_ID), "ok": bool(_LAST_TELEGRAM_OK and not _LAST_TELEGRAM_ERROR), "last_ok": _LAST_TELEGRAM_OK, "error": _LAST_TELEGRAM_ERROR},
        "partner": {"configured": bool(PARTNER_URL and PARTNER_USER and PARTNER_KEY), "ok": bool(_LAST_PARTNER_OK and not _LAST_PARTNER_ERROR), "last_ok": _LAST_PARTNER_OK, "error": _LAST_PARTNER_ERROR,
                    "credit": _PARTNER_ACCOUNT_INFO.get("credit"), "currency": _PARTNER_ACCOUNT_INFO.get("currency"),
                    "account_email": _PARTNER_ACCOUNT_INFO.get("mail") or _PARTNER_ACCOUNT_INFO.get("email")},
        "asaas": {"configured": bool(ASAAS_KEY and ASAAS_WEBHOOK_TOKEN), "webhook_secure": bool(ASAAS_WEBHOOK_TOKEN), "ok": bool(_LAST_ASAAS_OK and not _LAST_ASAAS_ERROR), "last_ok": _LAST_ASAAS_OK, "error": _LAST_ASAAS_ERROR},
        "worker_started": _STARTED,
    }


def _test_connections():
    global _LAST_TELEGRAM_OK, _LAST_TELEGRAM_ERROR, _LAST_PARTNER_OK, _LAST_PARTNER_ERROR, _LAST_ASAAS_OK, _LAST_ASAAS_ERROR
    results = {}
    if BOT_TOKEN:
        try:
            me = _tg_call("getMe", timeout=10)
            _LAST_TELEGRAM_OK = _now(); _LAST_TELEGRAM_ERROR = ""
            results["telegram"] = {"ok": True, "bot": me.get("username", "")}
        except Exception as ex:
            _LAST_TELEGRAM_ERROR = type(ex).__name__ + ": " + str(ex)[:160]
            results["telegram"] = {"ok": False, "error": _LAST_TELEGRAM_ERROR}
    else:
        results["telegram"] = {"ok": False, "error": "Token ausente"}
    if BOT_GROUP_ID and BOT_TOKEN:
        try:
            _tg_call("sendMessage", {"chat_id": BOT_GROUP_ID, "text": "✅ KV CELL • teste de comunicação do painel administrativo."}, timeout=10)
            results["telegram_group"] = {"ok": True}
        except Exception as ex:
            results["telegram_group"] = {"ok": False, "error": type(ex).__name__ + ": " + str(ex)[:150]}
    else:
        results["telegram_group"] = {"ok": False, "error": "Grupo ou token ausente"}
    if PARTNER_URL and PARTNER_USER and PARTNER_KEY:
        try:
            account = _partner_account()
            _LAST_PARTNER_OK = _now(); _LAST_PARTNER_ERROR = ""
            results["partner"] = {"ok": True, "credit": account.get("credit"), "currency": account.get("currency"), "email": account.get("mail") or account.get("email")}
        except Exception as ex:
            _LAST_PARTNER_ERROR = type(ex).__name__ + ": " + str(ex)[:180]
            results["partner"] = {"ok": False, "error": _LAST_PARTNER_ERROR}
    else:
        results["partner"] = {"ok": False, "error": "URL, usuário ou chave ausente"}
    if ASAAS_KEY:
        try:
            req = urllib.request.Request("https://api.asaas.com/v3/myAccount", headers={"access_token": ASAAS_KEY}, method="GET")
            with urllib.request.urlopen(req, timeout=15) as r:
                data = json.loads(r.read(1_000_000).decode())
            _LAST_ASAAS_OK = _now(); _LAST_ASAAS_ERROR = ""
            results["asaas"] = {"ok": True, "name": data.get("name", "")}
        except Exception as ex:
            _LAST_ASAAS_ERROR = type(ex).__name__ + ": " + str(ex)[:160]
            results["asaas"] = {"ok": False, "error": _LAST_ASAAS_ERROR}
    else:
        results["asaas"] = {"ok": False, "error": "ASAAS_API_KEY ausente"}
    _log("INFO", "Teste de integrações executado", "Telegram, grupo, Asaas e servidor parceiro verificados")
    return results


def api_get(path: str, qs: dict):
    if path.endswith("/overview"):
        c = _conn()
        recent = [dict(x) for x in c.execute("SELECT l.*,u.username FROM bot_logs l LEFT JOIN bot_users u ON u.telegram_id=l.telegram_id ORDER BY l.id DESC LIMIT 12")]
        c.close()
        return {"counts": _counts(), "health": _health(), "recent": recent, "settings": {k: _setting(k) for k in ("usd_rate", "minimum_pix", "support_url", "payment_fee", "welcome_text", "brand_name")}}
    if path.endswith("/health"):
        return _health()
    if path.endswith("/services"):
        c = _conn(); rows = [dict(x) for x in c.execute("SELECT s.*,c.name category_name FROM bot_services s LEFT JOIN bot_categories c ON c.id=s.category_id ORDER BY c.name,s.name")]; c.close()
        for row in rows:
            row["price_cliente"] = _service_price(row, "CLIENTE_FIXO")
            row["price_logista"] = _service_price(row, "LOGISTA")
            row["price_unlocker"] = _service_price(row, "UNLOCKER")
        return rows
    if path.endswith("/categories"):
        c = _conn(); rows = [dict(x) for x in c.execute("SELECT c.*,COUNT(s.id) service_count FROM bot_categories c LEFT JOIN bot_services s ON s.category_id=c.id GROUP BY c.id ORDER BY c.name")]; c.close(); return rows
    if path.endswith("/users"):
        c = _conn(); rows = [dict(x) for x in c.execute("SELECT u.*, (SELECT COUNT(*) FROM bot_orders o WHERE o.telegram_id=u.telegram_id) orders_count FROM bot_users u ORDER BY u.created_at DESC LIMIT 1000")]; c.close(); return rows
    if path.endswith("/orders"):
        c = _conn(); rows = [dict(x) for x in c.execute("SELECT o.*,u.username,u.first_name,s.name service_name FROM bot_orders o LEFT JOIN bot_users u ON u.telegram_id=o.telegram_id LEFT JOIN bot_services s ON s.id=o.service_id ORDER BY o.id DESC LIMIT 500")]; c.close(); return rows
    if path.endswith("/payments"):
        c = _conn(); rows = [dict(x) for x in c.execute("SELECT p.*,u.username,u.first_name FROM bot_payments p LEFT JOIN bot_users u ON u.telegram_id=p.telegram_id ORDER BY p.id DESC LIMIT 500")]; c.close(); return rows
    if path.endswith("/ledger"):
        c = _conn(); rows = [dict(x) for x in c.execute("SELECT l.*,u.username,u.first_name FROM bot_ledger l LEFT JOIN bot_users u ON u.telegram_id=l.telegram_id ORDER BY l.id DESC LIMIT 500")]; c.close(); return rows
    if path.endswith("/logs"):
        after = int((qs.get("after") or ["0"])[0] or 0)
        c = _conn(); rows = [dict(x) for x in c.execute("SELECT * FROM bot_logs WHERE id>? ORDER BY id DESC LIMIT 150", (after,))]; c.close(); return rows
    if path.endswith("/settings"):
        return {k: _setting(k) for k in ("usd_rate", "minimum_pix", "support_url", "payment_fee", "welcome_text", "brand_name")}
    raise BotError("Rota do módulo Bot não encontrada", 404)


def api_post(path: str, data: dict, actor="Administrador"):
    global _LAST_PARTNER_OK, _LAST_PARTNER_ERROR
    if path.endswith("/test"):
        return {"results": _test_connections(), "health": _health()}
    if path.endswith("/sync"):
        try:
            result = _partner_sync()
            _LAST_PARTNER_OK = _now(); _LAST_PARTNER_ERROR = ""
            return {"ok": True, "result": result}
        except Exception as ex:
            _LAST_PARTNER_ERROR = type(ex).__name__ + ": " + str(ex)[:180]
            _log("ERROR", "Falha ao sincronizar catálogo parceiro", _LAST_PARTNER_ERROR, group=True)
            raise BotError(_LAST_PARTNER_ERROR, 502)
    if path.endswith("/category"):
        name = str(data.get("name") or "").strip()[:120]; group_type = str(data.get("group_type") or "GERAL").upper()[:20]
        if not name: raise BotError("Informe o nome da categoria")
        c = _conn()
        try:
            c.execute("INSERT INTO bot_categories(name,group_type,parent_id,active,created_at) VALUES(?,?,NULL,1,?)", (name, group_type, _now()))
        except sqlite3.IntegrityError:
            c.close(); raise BotError("Já existe uma categoria com esse nome e tipo", 409)
        c.commit(); c.close(); _log("INFO", "Categoria do bot cadastrada", f"Categoria: {name}\nPor: {actor}", group=True); return {"ok": True}
    if path.endswith("/service"):
        sid = int(data.get("id") or 0)
        category_id = int(data.get("category_id") or 0)
        name = str(data.get("name") or "").strip()[:160]
        if not name or not category_id: raise BotError("Categoria e nome são obrigatórios")
        try:
            fields = data.get("fields_json", "[]")
            if isinstance(fields, list): fields = json.dumps(fields, ensure_ascii=False)
            parsed = json.loads(fields or "[]")
            if not isinstance(parsed, list): raise ValueError()
        except Exception:
            raise BotError("Campos do serviço devem ser uma lista JSON válida")
        kind = str(data.get("kind") or "REGISTRO").upper()
        if kind not in ("IMEI", "SERVER", "REMOTE", "REGISTRO", "ALUGUEL", "CREDITO"): raise BotError("Tipo de serviço inválido")
        vals = (category_id, name, str(data.get("description") or "")[:1500], str(data.get("provider_service_id") or "").strip()[:80] or None,
                kind, float(data.get("provider_cost") or 0), str(data.get("provider_currency") or "USD").upper()[:8], float(data.get("min_add") or 0),
                float(data.get("margin_logista") if data.get("margin_logista") is not None else 40),
                float(data.get("margin_unlocker") if data.get("margin_unlocker") is not None else 30),
                float(data.get("margin_cliente") if data.get("margin_cliente") is not None else 30),
                (None if str(data.get("price_override", "")).strip() == "" else float(data.get("price_override"))),
                json.dumps(parsed, ensure_ascii=False), 1 if str(data.get("active", "1")).lower() not in ("0", "false", "não", "nao") else 0,
                str(data.get("tutorial_url") or "")[:500], str(data.get("download_url") or "")[:500], _now())
        c = _conn()
        try:
            if sid:
                c.execute("""UPDATE bot_services SET category_id=?,name=?,description=?,provider_service_id=?,kind=?,provider_cost=?,provider_currency=?,min_add=?,margin_logista=?,margin_unlocker=?,margin_cliente=?,price_override=?,fields_json=?,active=?,tutorial_url=?,download_url=?,updated_at=? WHERE id=?""", vals + (sid,))
            else:
                c.execute("""INSERT INTO bot_services(category_id,name,description,provider_service_id,kind,provider_cost,provider_currency,min_add,margin_logista,margin_unlocker,margin_cliente,price_override,fields_json,active,tutorial_url,download_url,updated_at) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)""", vals)
        except sqlite3.IntegrityError:
            c.close(); raise BotError("Esse ID de serviço do fornecedor já está cadastrado para esse tipo", 409)
        c.commit(); c.close(); _log("INFO", "Serviço do bot salvo", f"Serviço: {name}\nID: {sid or 'novo'}\nPor: {actor}", group=True); return {"ok": True}
    if path.endswith("/user/credit"):
        uid = int(data.get("telegram_id") or 0); amount = _money(data.get("amount") or 0); reason = str(data.get("reason") or "Ajuste administrativo")[:180]
        if uid <= 0 or amount <= 0 or amount > 1000000: raise BotError("Usuário e valor positivo válido são obrigatórios")
        c = _conn(); c.execute("BEGIN IMMEDIATE")
        user = c.execute("SELECT * FROM bot_users WHERE telegram_id=?", (uid,)).fetchone()
        if not user:
            c.close(); raise BotError("Usuário Telegram não encontrado", 404)
        balance = _money(float(user["balance"]) + amount)
        c.execute("UPDATE bot_users SET balance=?,updated_at=? WHERE telegram_id=?", (balance, _now(), uid))
        c.execute("INSERT INTO bot_ledger(telegram_id,direction,amount,balance_after,event,reference,actor,created_at) VALUES(?,?,?,?,?,?,?,?)", (uid, "CREDITO", amount, balance, "CARGA_ADMIN", reason, actor, _now()))
        c.commit(); c.close()
        _log("INFO", "Créditos adicionados pelo painel", f"Telegram ID: {uid}\nValor: {amount:.2f} CRD\nSaldo: {balance:.2f} CRD\nMotivo: {reason}\nAdmin OS: {actor}", uid, group=True)
        try: _send(uid, f"✅ O administrador adicionou <b>{amount:.2f} CRD</b> à sua conta.\nSaldo atual: <b>{balance:.2f} CRD</b>.")
        except Exception: pass
        return {"ok": True, "balance": balance}
    if path.endswith("/user/block"):
        uid = int(data.get("telegram_id") or 0); blocked = 1 if data.get("blocked") else 0
        c = _conn(); cur = c.execute("UPDATE bot_users SET blocked=?,updated_at=? WHERE telegram_id=?", (blocked, _now(), uid)); c.commit(); c.close()
        if not cur.rowcount: raise BotError("Usuário Telegram não encontrado", 404)
        _log("WARN" if blocked else "INFO", "Acesso Telegram atualizado", f"Telegram ID: {uid}\nBloqueado: {'sim' if blocked else 'não'}\nAdmin OS: {actor}", uid, group=True)
        return {"ok": True}
    if path.endswith("/user/role"):
        uid = int(data.get("telegram_id") or 0); role = str(data.get("role") or "CLIENTE_FIXO").upper()
        if role not in ("LOGISTA", "UNLOCKER", "CLIENTE_FIXO"): raise BotError("Perfil inválido")
        c = _conn(); cur = c.execute("UPDATE bot_users SET role=?,updated_at=? WHERE telegram_id=?", (role, _now(), uid)); c.commit(); c.close()
        if not cur.rowcount: raise BotError("Usuário Telegram não encontrado", 404)
        _log("INFO", "Perfil Telegram atualizado", f"Telegram ID: {uid}\nPerfil: {role}\nAdmin OS: {actor}", uid, group=True); return {"ok": True}
    if path.endswith("/order/status"):
        oid = int(data.get("id") or 0); status = str(data.get("status") or "").upper()[:40]; result = str(data.get("result") or "")[:700]
        allowed = ("AGUARDANDO_MANUAL", "EM_PROCESSAMENTO", "CONCLUIDO", "RECUSADO", "CANCELADO")
        if status not in allowed: raise BotError("Status inválido")
        c = _conn(); c.execute("BEGIN IMMEDIATE")
        order = c.execute("SELECT * FROM bot_orders WHERE id=?", (oid,)).fetchone()
        if not order: c.close(); raise BotError("Pedido não encontrado", 404)
        if status in ("RECUSADO", "CANCELADO"):
            _refund_order(c, order, actor, result or "Atualização administrativa")
        else:
            c.execute("UPDATE bot_orders SET status=?,result=?,updated_at=? WHERE id=?", (status, result, _now(), oid))
        c.commit(); c.close(); _log("INFO", "Pedido atualizado pelo painel", f"Pedido: #{oid}\nStatus: {status}\nPor: {actor}", order["telegram_id"], group=True)
        try: _send(order["telegram_id"], f"📦 Seu pedido <b>#{oid}</b> foi atualizado para <b>{escape(status)}</b>. " + ("Os créditos foram devolvidos." if status in ("RECUSADO", "CANCELADO") else ""))
        except Exception: pass
        return {"ok": True}
    if path.endswith("/settings"):
        allowed = {"usd_rate": (0.01, 100000), "minimum_pix": (1, 10000), "payment_fee": (0, 10000)}
        for key, (low, high) in allowed.items():
            if key in data:
                value = float(data[key])
                if not low <= value <= high: raise BotError(f"Valor inválido para {key}")
                _set_setting(key, _money(value))
        for key in ("support_url", "welcome_text", "brand_name"):
            if key in data:
                value = str(data[key])[:500]
                if key == "support_url" and value and not value.startswith("https://t.me/"):
                    raise BotError("O suporte deve usar um link https://t.me/")
                _set_setting(key, value)
        _log("INFO", "Configurações do bot atualizadas", f"Admin OS: {actor}", group=True); return {"ok": True}
    raise BotError("Ação do módulo Bot não encontrada", 404)


def handle_asaas_webhook(data: dict, headers: dict):
    token = headers.get("asaas-access-token") or headers.get("x-webhook-token") or ""
    if not ASAAS_WEBHOOK_TOKEN:
        return {"ok": False, "error": "webhook_not_configured"}, 503
    if token != ASAAS_WEBHOOK_TOKEN:
        _log("WARN", "Webhook Asaas recusado", "Token ausente ou inválido")
        return {"ok": False, "error": "unauthorized"}, 401
    event = str(data.get("event") or ""); payment = data.get("payment") or {}; pid = str(payment.get("id") or "")
    if event not in ("PAYMENT_RECEIVED", "PAYMENT_CONFIRMED") or not pid:
        return {"ok": True, "ignored": True}, 200
    c = _conn(); c.execute("BEGIN IMMEDIATE")
    row = c.execute("SELECT * FROM bot_payments WHERE payment_id=?", (pid,)).fetchone()
    if row and row["status"] != "RECEIVED":
        c.execute("UPDATE bot_payments SET status='RECEIVED',updated_at=? WHERE payment_id=?", (_now(), pid))
        user = c.execute("SELECT balance FROM bot_users WHERE telegram_id=?", (row["telegram_id"],)).fetchone()
        if user:
            balance = _money(float(user["balance"]) + float(row["credits"]))
            c.execute("UPDATE bot_users SET balance=?,updated_at=? WHERE telegram_id=?", (balance, _now(), row["telegram_id"]))
            c.execute("INSERT INTO bot_ledger(telegram_id,direction,amount,balance_after,event,reference,actor,created_at) VALUES(?,?,?,?,?,?,?,?)", (row["telegram_id"], "CREDITO", row["credits"], balance, "RECARGA_PIX", pid, "Asaas Webhook", _now()))
            uid = row["telegram_id"]; credits = row["credits"]
        else:
            uid = None; credits = 0
    else:
        uid = None; credits = 0
    c.commit(); c.close()
    if uid:
        _log("INFO", "PIX confirmado e créditos liberados", f"Pagamento: {pid}\nTelegram ID: {uid}\nCréditos: {float(credits):.2f} CRD", uid, group=True)
        try: _send(uid, f"✅ <b>RECARGA CONFIRMADA</b>\n💎 +{float(credits):.2f} CRD adicionados ao seu saldo.")
        except Exception: pass
    return {"ok": True}, 200
