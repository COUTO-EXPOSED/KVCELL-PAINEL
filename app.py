```python
import os
import sys
import json
import sqlite3
import hashlib
import time
import datetime
import urllib.parse
import urllib.request
import zipfile
import re
from http.server import HTTPServer, BaseHTTPRequestHandler

# ==========================================
# CONFIGURAÇÃO E BANCO DE DADOS
# ==========================================

DB_PATH = "kvcell.db"

def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def query(sql, params=()):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute(sql, params)
    rows = cursor.fetchall()
    conn.close()
    return [dict(r) for r in rows]

def write(sql, params=()):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute(sql, params)
    conn.commit()
    last_id = cursor.lastrowid
    conn.close()
    return last_id

def write_tx(statements):
    """Executa múltiplas instruções SQL em uma única transação segura."""
    conn = get_db()
    cursor = conn.cursor()
    try:
        conn.execute("BEGIN TRANSACTION")
        for sql, params in statements:
            cursor.execute(sql, params)
        conn.commit()
        conn.close()
        return True
    except Exception as e:
        conn.rollback()
        conn.close()
        raise e

def now():
    return datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

def hash_pass(password):
    return hashlib.sha256(password.encode('utf-8')).hexdigest()

# ==========================================
# INICIALIZAÇÃO DO SCHEMA E MIGRAÇÕES
# ==========================================

def init_db():
    conn = get_db()
    cursor = conn.cursor()
    
    # Tabela de Usuários
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        login TEXT UNIQUE NOT NULL,
        pass TEXT NOT NULL,
        role TEXT NOT NULL DEFAULT 'tecnico',
        unit TEXT NOT NULL DEFAULT 'LAGOS',
        created_at TEXT
    )
    ''')

    # Tabela de Clientes
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS clients (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        phone TEXT,
        cpf TEXT,
        email TEXT,
        address TEXT,
        unit TEXT NOT NULL DEFAULT 'LAGOS',
        notes TEXT,
        created_at TEXT
    )
    ''')

    # Tabela de Aparelhos dos Clientes
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS devices (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        client_id INTEGER,
        model TEXT NOT NULL,
        serial TEXT,
        notes TEXT,
        unit TEXT NOT NULL DEFAULT 'LAGOS',
        created_at TEXT,
        FOREIGN KEY(client_id) REFERENCES clients(id)
    )
    ''')

    # Tabela de Ordens de Serviço (Serviços)
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS services (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        client_id INTEGER,
        device_id INTEGER,
        title TEXT NOT NULL,
        description TEXT,
        status TEXT NOT NULL DEFAULT 'Aberto',
        price REAL DEFAULT 0.0,
        cost REAL DEFAULT 0.0,
        unit TEXT NOT NULL DEFAULT 'LAGOS',
        technician TEXT,
        created_at TEXT,
        updated_at TEXT,
        FOREIGN KEY(client_id) REFERENCES clients(id),
        FOREIGN KEY(device_id) REFERENCES devices(id)
    )
    ''')

    # Tabela de Desbloqueios
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS unlocks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        client_id INTEGER,
        model TEXT NOT NULL,
        imei TEXT,
        type TEXT,
        price REAL DEFAULT 0.0,
        cost REAL DEFAULT 0.0,
        status TEXT DEFAULT 'Pendente',
        unit TEXT NOT NULL DEFAULT 'LAGOS',
        created_at TEXT
    )
    ''')

    # Tabela de Compras / Aparelhos da Loja
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS purchases (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        model TEXT NOT NULL,
        brand TEXT,
        imei TEXT,
        seller TEXT,
        buy_date TEXT,
        pay_price REAL DEFAULT 0.0,
        expenses REAL DEFAULT 0.0,
        shipping REAL DEFAULT 0.0,
        total_cost REAL DEFAULT 0.0,
        status TEXT DEFAULT 'Em Estoque',
        sold INTEGER DEFAULT 0,
        sale_date TEXT,
        sale_place TEXT,
        sale_price REAL DEFAULT 0.0,
        sale_payment TEXT,
        sale_installments INTEGER DEFAULT 1,
        sale_fee REAL DEFAULT 0.0,
        sale_notes TEXT,
        unit TEXT NOT NULL DEFAULT 'LAGOS',
        created_at TEXT
    )
    ''')

    # Tabela de Estoque de Peças/Acessórios
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS inventory (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        model TEXT,
        qty INTEGER DEFAULT 0,
        min_qty INTEGER DEFAULT 2,
        cost_price REAL DEFAULT 0.0,
        sell_price REAL DEFAULT 0.0,
        unit TEXT NOT NULL DEFAULT 'LAGOS',
        created_at TEXT
    )
    ''')

    # Tabela de Orçamentos
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS quotes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        client_id INTEGER,
        model TEXT,
        description TEXT,
        total REAL DEFAULT 0.0,
        valid_until TEXT,
        warranty TEXT,
        status TEXT DEFAULT 'Pendente',
        public_token TEXT UNIQUE,
        unit TEXT NOT NULL DEFAULT 'LAGOS',
        created_at TEXT
    )
    ''')

    # Itens do Orçamento
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS quote_items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        quote_id INTEGER,
        description TEXT,
        qty INTEGER DEFAULT 1,
        price REAL DEFAULT 0.0,
        FOREIGN KEY(quote_id) REFERENCES quotes(id)
    )
    ''')

    # Tabela de Vendas Rápidas / Balcão
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS sales (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        client_id INTEGER,
        items_json TEXT,
        total REAL DEFAULT 0.0,
        discount REAL DEFAULT 0.0,
        payment_method TEXT,
        unit TEXT NOT NULL DEFAULT 'LAGOS',
        user_name TEXT,
        created_at TEXT
    )
    ''')

    # Tabela Financeiro / Fluxo de Caixa
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS finances (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        type TEXT NOT NULL, -- 'receita' ou 'despesa'
        category TEXT NOT NULL,
        description TEXT,
        amount REAL DEFAULT 0.0,
        status TEXT DEFAULT 'Pago',
        due_date TEXT,
        paid_date TEXT,
        unit TEXT NOT NULL DEFAULT 'LAGOS',
        ref_type TEXT,
        ref_id INTEGER,
        created_at TEXT
    )
    ''')

    # Tabela de Películas e Compatibilidade
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS films (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        film_type TEXT NOT NULL,
        compatible_models TEXT,
        notes TEXT,
        created_at TEXT
    )
    ''')

    # Tabela de Chat Interno
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS chat (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        unit TEXT NOT NULL DEFAULT 'TODOS',
        user_name TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at TEXT
    )
    ''')

    # Tabela de Logs de Atividades (Audit / Activity)
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS activity_log (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        unit TEXT NOT NULL DEFAULT 'LAGOS',
        user_name TEXT NOT NULL,
        tag TEXT NOT NULL, -- 'LOG', 'BOT', etc.
        action TEXT NOT NULL,
        resource TEXT,
        resource_id INTEGER,
        details TEXT,
        created_at TEXT
    )
    ''')

    # Tabela de Desfazer (Undo Stack)
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS undo_stack (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_name TEXT NOT NULL,
        unit TEXT NOT NULL DEFAULT 'LAGOS',
        action TEXT NOT NULL, -- 'CREATE', 'UPDATE', 'DELETE'
        resource TEXT NOT NULL,
        resource_id INTEGER NOT NULL,
        data_before TEXT,
        data_after TEXT,
        created_at TEXT
    )
    ''')

    # Tabela de Aparelhos Esquecidos/Abandonados
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS forgotten_devices (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        service_id INTEGER,
        client_name TEXT,
        phone TEXT,
        model TEXT,
        entry_date TEXT,
        days_forgotten INTEGER DEFAULT 0,
        status TEXT DEFAULT 'Notificado',
        unit TEXT NOT NULL DEFAULT 'LAGOS',
        created_at TEXT
    )
    ''')

    # Tabela de Termos e Contratos
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS contracts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        unit TEXT NOT NULL DEFAULT 'LAGOS',
        created_at TEXT
    )
    ''')

    conn.commit()

    # Cria usuário admin padrão se não existir
    admin_exists = cursor.execute("SELECT id FROM users WHERE login = 'admin'").fetchone()
    if not admin_exists:
        cursor.execute(
            "INSERT INTO users (name, login, pass, role, unit, created_at) VALUES (?, ?, ?, ?, ?, ?)",
            ("Administrador", "admin", hash_pass("admin123"), "admin", "LAGOS", now())
        )
        conn.commit()

    conn.close()

def migrate():
    """Aplica atualizações estruturais sem perder dados existentes (ex: migrate_v10)."""
    conn = get_db()
    cursor = conn.cursor()
    
    # Verifica colunas na tabela purchases para gararantir campos sale_*
    cursor.execute("PRAGMA table_info(purchases)")
    cols = [col['name'] for col in cursor.fetchall()]
    
    new_cols = {
        'sold': 'INTEGER DEFAULT 0',
        'sale_date': 'TEXT',
        'sale_place': 'TEXT',
        'sale_price': 'REAL DEFAULT 0.0',
        'sale_payment': 'TEXT',
        'sale_installments': 'INTEGER DEFAULT 1',
        'sale_fee': 'REAL DEFAULT 0.0',
        'sale_notes': 'TEXT'
    }
    
    for col_name, col_type in new_cols.items():
        if col_name not in cols:
            try:
                cursor.execute(f"ALTER TABLE purchases ADD COLUMN {col_name} {col_type}")
            except Exception:
                pass

    conn.commit()
    conn.close()

# Executa inicialização
init_db()
migrate()

# ==========================================
# LOGS E AUDITORIA
# ==========================================

def audit(u, tag, action, resource=None, resource_id=None, details=""):
    """Registra uma ação no log do sistema (LOG / BOT)."""
    unit = u.get('unit', 'LAGOS') if u else 'LAGOS'
    user_name = u.get('name', 'Sistema') if u else 'Sistema'
    write(
        "INSERT INTO activity_log (unit, user_name, tag, action, resource, resource_id, details, created_at) "
        "VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        (unit, user_name, tag, action, resource, resource_id, str(details), now())
    )

def activity(u, tag, details):
    """Wrapper rápido para registrar atividades gerais."""
    audit(u, tag, 'ACTIVITY', None, None, details)

def push_undo(u, action, resource, resource_id, data_before=None, data_after=None):
    """Registra uma alteração na pilha de desfazer."""
    unit = u.get('unit', 'LAGOS') if u else 'LAGOS'
    user_name = u.get('name', 'Sistema') if u else 'Sistema'
    
    before_str = json.dumps(data_before, ensure_ascii=False) if data_before else None
    after_str = json.dumps(data_after, ensure_ascii=False) if data_after else None
    
    write(
        "INSERT INTO undo_stack (user_name, unit, action, resource, resource_id, data_before, data_after, created_at) "
        "VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        (user_name, unit, action, resource, resource_id, before_str, after_str, now())
    )

# ==========================================
# INTEGRAÇÃO GEMINI IA
# ==========================================

def gemini_call(prompt, system_instruction=None):
    """Chama a API do Google Gemini usando chaves de ambiente de forma segura."""
    api_key = os.environ.get("GEMINI_API_KEY") or os.environ.get("GOOGLE_API_KEY")
    if not api_key:
        return "Erro: Chave de API do Gemini não configurada no servidor (GEMINI_API_KEY / GOOGLE_API_KEY)."

    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={api_key}"
    
    contents = []
    if system_instruction:
        contents.append({"role": "user", "parts": [{"text": f"Instrução do Sistema: {system_instruction}"}]})
        contents.append({"role": "model", "parts": [{"text": "Entendido. Seguirei essas instruções."}]})

    contents.append({"role": "user", "parts": [{"text": prompt}]})

    payload = {"contents": contents}

    try:
        req = urllib.request.Request(
            url,
            data=json.dumps(payload).encode('utf-8'),
            headers={'Content-Type': 'application/json'},
            method='POST'
        )
        with urllib.request.urlopen(req, timeout=15) as response:
            res_data = json.loads(response.read().decode('utf-8'))
            candidates = res_data.get('candidates', [])
            if candidates:
                parts = candidates[0].get('content', {}).get('parts', [])
                if parts:
                    return parts[0].get('text', '')
            return "A IA não gerou resposta válida."
    except Exception as e:
        return f"Erro ao comunicar com a IA: {str(e)}"

def ai_chat(d, u):
    """Atende chamadas explícitas de IA enviadas via /bot."""
    message = d.get('message', '').strip()

    # A IA só pode ser acionada usando /bot
    if not message.lower().startswith('/bot'):
        return {'ok': False, 'error': 'A IA só pode ser acionada usando /bot.'}

    # Remove o prefixo /bot
    message = re.sub(r'^/bot\s*', '', message, flags=re.I).strip()

    if not message:
        return {
            'ok': False,
            'error': 'Digite uma pergunta após /bot.'
        }

    # NÃO receber/enviar o histórico do chat normal para a IA.
    history = []

    system_prompt = (
        "Você é o KV CELL BOT, o assistente virtual interno especialista da assistência técnica KV CELL. "
        "Você auxilia os técnicos e atendentes com precificação de serviços, compatibilidade de peças, "
        "dúvidas de bancada, diagnósticos técnicos e elaboração de orçamentos. Seja profissional, direto e conciso."
    )

    full_prompt = f"Unidade: {u.get('unit', 'LAGOS')} | Usuário: {u.get('name', 'Técnico')}\nPergunta: {message}"

    bot_reply = gemini_call(full_prompt, system_instruction=system_prompt)

    # Registra no log de atividades como BOT
    audit(u, 'BOT', 'CHAT_AI', 'chat', None, f"Pergunta: {message} | Resposta: {bot_reply[:100]}...")

    return {
        'ok': True,
        'response': bot_reply,
        'bot_name': 'KV CELL BOT'
    }

# ==========================================
# LÓGICA DE NEGÓCIO E CRUD AUTOMÁTICO
# ==========================================

ALLOWED_RESOURCES = [
    'clients', 'devices', 'services', 'unlocks', 'purchases',
    'inventory', 'quotes', 'sales', 'finances', 'films',
    'contracts', 'forgotten_devices', 'users'
]

def get_resource_table(resource):
    if resource in ALLOWED_RESOURCES:
        return resource
    raise ValueError("Recurso não permitido")

def fetch_record(resource, record_id):
    table = get_resource_table(resource)
    rows = query(f"SELECT * FROM {table} WHERE id = ?", (record_id,))
    return rows[0] if rows else None

def create_api(resource, d, u):
    table = get_resource_table(resource)
    
    # Define unidade padrão caso o recurso aceite
    if 'unit' not in d and resource not in ['films']:
        d['unit'] = u.get('unit', 'LAGOS')
        
    d['created_at'] = now()

    # Cálculo do custo total em compras
    if resource == 'purchases':
        pay = float(d.get('pay_price') or 0.0)
        exp = float(d.get('expenses') or 0.0)
        shp = float(d.get('shipping') or 0.0)
        d['total_cost'] = pay + exp + shp

    columns = list(d.keys())
    placeholders = ', '.join(['?'] * len(columns))
    col_str = ', '.join(columns)
    values = [d[c] for c in columns]

    sql = f"INSERT INTO {table} ({col_str}) VALUES ({placeholders})"
    rec_id = write(sql, values)

    new_record = fetch_record(resource, rec_id)
    push_undo(u, 'CREATE', resource, rec_id, data_before=None, data_after=new_record)

    # Automações Financeiras na criação
    if resource == 'services':
        price = float(d.get('price') or 0.0)
        if price > 0:
            write(
                "INSERT INTO finances (type, category, description, amount, status, due_date, paid_date, unit, ref_type, ref_id, created_at) "
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                ('receita', 'Serviço', f"OS #{rec_id} - {d.get('title')}", price, 'Pago', now()[:10], now()[:10], d.get('unit'), 'services', rec_id, now())
            )
    elif resource == 'unlocks':
        price = float(d.get('price') or 0.0)
        if price > 0:
            write(
                "INSERT INTO finances (type, category, description, amount, status, due_date, paid_date, unit, ref_type, ref_id, created_at) "
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                ('receita', 'Desbloqueio', f"Desbloqueio #{rec_id} - {d.get('model')}", price, 'Pago', now()[:10], now()[:10], d.get('unit'), 'unlocks', rec_id, now())
            )
    elif resource == 'purchases':
        total_cost = float(d.get('total_cost') or 0.0)
        if total_cost > 0:
            write(
                "INSERT INTO finances (type, category, description, amount, status, due_date, paid_date, unit, ref_type, ref_id, created_at) "
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                ('despesa', 'Compra de Aparelho', f"Compra #{rec_id} - {d.get('model')}", total_cost, 'Pago', now()[:10], now()[:10], d.get('unit'), 'purchases', rec_id, now())
            )
        # Se cadastrado já marcado como vendido na criação
        if int(d.get('sold') or 0) == 1:
            sale_price = float(d.get('sale_price') or 0.0)
            sale_fee = float(d.get('sale_fee') or 0.0)
            net_amount = max(0.0, sale_price - sale_fee)
            if net_amount > 0:
                write(
                    "INSERT INTO finances (type, category, description, amount, status, due_date, paid_date, unit, ref_type, ref_id, created_at) "
                    "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                    ('receita', 'Venda de Aparelho', f"Venda Aparelho #{rec_id} - {d.get('model')}", net_amount, 'Pago', now()[:10], now()[:10], d.get('unit'), 'purchases_sale', rec_id, now())
                )

    audit(u, 'LOG', 'CREATE', resource, rec_id, f"Criado registro em {resource}")
    return {'ok': True, 'id': rec_id, 'data': new_record}

def update_api(resource, rec_id, d, u):
    table = get_resource_table(resource)
    old_record = fetch_record(resource, rec_id)
    if not old_record:
        return {'ok': False, 'error': 'Registro não encontrado.'}

    # Tratamento específico para compras e alteração do status de venda
    if resource == 'purchases':
        pay = float(d.get('pay_price', old_record.get('pay_price') or 0.0))
        exp = float(d.get('expenses', old_record.get('expenses') or 0.0))
        shp = float(d.get('shipping', old_record.get('shipping') or 0.0))
        d['total_cost'] = pay + exp + shp

    fields = []
    values = []
    for k, v in d.items():
        if k != 'id':
            fields.append(f"{k} = ?")
            values.append(v)

    if not fields:
        return {'ok': False, 'error': 'Nenhum campo para atualizar.'}

    values.append(rec_id)
    sql = f"UPDATE {table} SET {', '.join(fields)} WHERE id = ?"
    write(sql, values)

    new_record = fetch_record(resource, rec_id)
    push_undo(u, 'UPDATE', resource, rec_id, data_before=old_record, data_after=new_record)

    # Tratamento financeiro de atualização de vendas em aparelhos/purchases
    if resource == 'purchases':
        was_sold = int(old_record.get('sold') or 0)
        is_sold = int(new_record.get('sold') or 0)

        # Transição: NÃO VENDIDO -> VENDIDO
        if was_sold == 0 and is_sold == 1:
            sale_price = float(new_record.get('sale_price') or 0.0)
            sale_fee = float(new_record.get('sale_fee') or 0.0)
            net_amount = max(0.0, sale_price - sale_fee)
            write(
                "INSERT INTO finances (type, category, description, amount, status, due_date, paid_date, unit, ref_type, ref_id, created_at) "
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                ('receita', 'Venda de Aparelho', f"Venda Aparelho #{rec_id} - {new_record.get('model')}", net_amount, 'Pago', now()[:10], now()[:10], new_record.get('unit'), 'purchases_sale', rec_id, now())
            )
        # Transição: VENDIDO -> NÃO VENDIDO (Cancelamento/Estorno da venda)
        elif was_sold == 1 and is_sold == 0:
            write("DELETE FROM finances WHERE ref_type = 'purchases_sale' AND ref_id = ?", (rec_id,))
        # Transição: VENDIDO -> VENDIDO (Atualização nos valores da venda)
        elif was_sold == 1 and is_sold == 1:
            sale_price = float(new_record.get('sale_price') or 0.0)
            sale_fee = float(new_record.get('sale_fee') or 0.0)
            net_amount = max(0.0, sale_price - sale_fee)
            fin_exists = query("SELECT id FROM finances WHERE ref_type = 'purchases_sale' AND ref_id = ?", (rec_id,))
            if fin_exists:
                write("UPDATE finances SET amount = ?, description = ? WHERE ref_type = 'purchases_sale' AND ref_id = ?", 
                      (net_amount, f"Venda Aparelho #{rec_id} - {new_record.get('model')}", rec_id))
            else:
                write(
                    "INSERT INTO finances (type, category, description, amount, status, due_date, paid_date, unit, ref_type, ref_id, created_at) "
                    "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                    ('receita', 'Venda de Aparelho', f"Venda Aparelho #{rec_id} - {new_record.get('model')}", net_amount, 'Pago', now()[:10], now()[:10], new_record.get('unit'), 'purchases_sale', rec_id, now())
                )

    audit(u, 'LOG', 'UPDATE', resource, rec_id, f"Atualizado registro em {resource}")
    return {'ok': True, 'data': new_record}

def delete_api(resource, rec_id, u):
    table = get_resource_table(resource)
    old_record = fetch_record(resource, rec_id)
    if not old_record:
        return {'ok': False, 'error': 'Registro não encontrado.'}

    write(f"DELETE FROM {table} WHERE id = ?", (rec_id,))
    push_undo(u, 'DELETE', resource, rec_id, data_before=old_record, data_after=None)

    # Remover lançamentos financeiros vinculados
    write("DELETE FROM finances WHERE (ref_type = ? OR ref_type = ?) AND ref_id = ?", (resource, f"{resource}_sale", rec_id))

    audit(u, 'LOG', 'DELETE', resource, rec_id, f"Removido registro de {resource}")
    return {'ok': True}

# ==========================================
# SISTEMA DESFAZER (UNDO ACTION)
# ==========================================

def undo_action(d, u):
    """Restaura completamente o estado de uma ação anterior (CREATE, UPDATE, DELETE)."""
    undo_id = int(d.get('id') or 0)
    
    if not undo_id:
        # Pega o último undo da pilha do usuário
        rows = query("SELECT * FROM undo_stack WHERE user_name = ? ORDER BY id DESC LIMIT 1", (u.get('name'),))
        if not rows:
            return {'ok': False, 'error': 'Nenhuma ação disponível para desfazer.'}
        undo_row = rows[0]
    else:
        rows = query("SELECT * FROM undo_stack WHERE id = ?", (undo_id,))
        if not rows:
            return {'ok': False, 'error': 'Ação de desfazer não encontrada.'}
        undo_row = rows[0]

    action = undo_row['action']
    resource = undo_row['resource']
    rec_id = undo_row['resource_id']
    table = get_resource_table(resource)

    data_before = json.loads(undo_row['data_before']) if undo_row['data_before'] else None
    data_after = json.loads(undo_row['data_after']) if undo_row['data_after'] else None

    if action == 'DELETE':
        # Restaura o registro que havia sido excluído (INSERT com os dados do snapshot)
        if not data_before:
            return {'ok': False, 'error': 'Sem dados anteriores para restaurar.'}
        
        cols = list(data_before.keys())
        placeholders = ', '.join(['?'] * len(cols))
        col_str = ', '.join(cols)
        vals = [data_before[c] for c in cols]
        
        write(f"INSERT INTO {table} ({col_str}) VALUES ({placeholders})", vals)
        audit(u, 'LOG', 'UNDO_DELETE', resource, rec_id, f"Registro restaurado em {resource}")

    elif action == 'UPDATE':
        # Restaura os valores anteriores
        if not data_before:
            return {'ok': False, 'error': 'Sem dados de origem para restauração.'}
        
        fields = [f"{k} = ?" for k in data_before.keys() if k != 'id']
        vals = [data_before[k] for k in data_before.keys() if k != 'id']
        vals.append(rec_id)
        
        write(f"UPDATE {table} SET {', '.join(fields)} WHERE id = ?", vals)
        audit(u, 'LOG', 'UNDO_UPDATE', resource, rec_id, f"Registro revertido em {resource}")

    elif action == 'CREATE':
        # Desfaz a criação (Exclui o registro criado)
        write(f"DELETE FROM {table} WHERE id = ?", (rec_id,))
        write("DELETE FROM finances WHERE (ref_type = ? OR ref_type = ?) AND ref_id = ?", (resource, f"{resource}_sale", rec_id))
        audit(u, 'LOG', 'UNDO_CREATE', resource, rec_id, f"Criação desfeita em {resource}")

    # Remove o item da pilha de undo após ser executado
    write("DELETE FROM undo_stack WHERE id = ?", (undo_row['id'],))

    return {'ok': True, 'message': 'Ação desfeita com sucesso!'}

# ==========================================
# INTERFACE HTML EMBUTIDA (SHELL APP)
# ==========================================

INDEX = '''<!doctype html>
<html lang="pt-BR">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KV CELL OS PREMIUM</title>
    <link rel="stylesheet" href="/static/app.css">
</head>
<body>
    <div id="app"></div>
    <script src="/static/app.js"></script>
</body>
</html>
'''

# ==========================================
# SERVIDOR HTTP E APIS RESTFUL
# ==========================================

SESSIONS = {}

class Handler(BaseHTTPRequestHandler):

    def send_json(self, data, status=200):
        body = json.dumps(data, ensure_ascii=False).encode('utf-8')
        self.send_response(status)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def send_html(self, html_content, status=200):
        body = html_content.encode('utf-8')
        self.send_response(status)
        self.send_header('Content-Type', 'text/html; charset=utf-8')
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def get_session_user(self):
        cookie = self.headers.get('Cookie', '')
        m = re.search(r'sid=([a-f0-9]+)', cookie)
        if m:
            sid = m.group(1)
            return SESSIONS.get(sid)
        return None

    def parse_body(self):
        length = int(self.headers.get('Content-Length', 0))
        if length == 0:
            return {}
        raw = self.rfile.read(length).decode('utf-8')
        try:
            return json.loads(raw)
        except Exception:
            return {}

    def do_GET(self):
        path = urllib.parse.urlparse(self.path).path

        # Arquivos estáticos
        if path.startswith('/static/'):
            filename = path.replace('/static/', '')
            file_path = os.path.join('static', filename)
            if os.path.exists(file_path) and os.path.isfile(file_path):
                self.send_response(200)
                if filename.endswith('.css'):
                    self.send_header('Content-Type', 'text/css; charset=utf-8')
                elif filename.endswith('.js'):
                    self.send_header('Content-Type', 'application/javascript; charset=utf-8')
                else:
                    self.send_header('Content-Type', 'application/octet-stream')
                self.end_headers()
                with open(file_path, 'rb') as f:
                    self.wfile.write(f.read())
                return
            else:
                self.send_response(404)
                self.end_headers()
                return

        # Rota pública de acompanhamento de OS
        if path.startswith('/public/os/'):
            os_id = path.replace('/public/os/', '').strip()
            rows = query("SELECT s.*, c.name as client_name, d.model as device_model FROM services s "
                         "LEFT JOIN clients c ON s.client_id = c.id "
                         "LEFT JOIN devices d ON s.device_id = d.id WHERE s.id = ?", (os_id,))
            if not rows:
                return self.send_html("<h2>Ordem de Serviço não encontrada.</h2>", 404)
            os_data = rows[0]
            html = f'''<!doctype html>
            <html lang="pt-BR">
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>Acompanhar OS #{os_data['id']} - KV CELL</title>
                <style>
                    body {{ font-family: sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }}
                    .card {{ max-width: 500px; margin: 0 auto; background: #1e293b; padding: 20px; border-radius: 12px; border: 1px solid #334155; }}
                    .status {{ display: inline-block; padding: 6px 12px; background: #0284c7; color: white; border-radius: 6px; font-weight: bold; }}
                </style>
            </head>
            <body>
                <div class="card">
                    <h2>KV CELL - Consulta de OS #{os_data['id']}</h2>
                    <p><strong>Cliente:</strong> {os_data['client_name'] or 'N/A'}</p>
                    <p><strong>Aparelho:</strong> {os_data['device_model'] or 'N/A'}</p>
                    <p><strong>Serviço:</strong> {os_data['title']}</p>
                    <p><strong>Status:</strong> <span class="status">{os_data['status']}</span></p>
                    <p><strong>Valor:</strong> R$ {os_data['price']:.2f}</p>
                    <p><strong>Unidade:</strong> {os_data['unit']}</p>
                </div>
            </body>
            </html>'''
            return self.send_html(html)

        # Rota pública de orçamento
        if path.startswith('/public/quote/'):
            token = path.replace('/public/quote/', '').strip()
            rows = query("SELECT * FROM quotes WHERE public_token = ?", (token,))
            if not rows:
                return self.send_html("<h2>Orçamento não encontrado.</h2>", 404)
            quote = rows[0]
            items = query("SELECT * FROM quote_items WHERE quote_id = ?", (quote['id'],))
            items_html = "".join([f"<li>{it['description']} (x{it['qty']}) - R$ {it['price']:.2f}</li>" for it in items])
            html = f'''<!doctype html>
            <html lang="pt-BR">
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>Orçamento #{quote['id']} - KV CELL</title>
                <style>
                    body {{ font-family: sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }}
                    .card {{ max-width: 500px; margin: 0 auto; background: #1e293b; padding: 20px; border-radius: 12px; border: 1px solid #334155; }}
                    .btn {{ display: inline-block; padding: 10px 18px; margin-top: 15px; border-radius: 6px; text-decoration: none; font-weight: bold; cursor: pointer; }}
                    .approve {{ background: #16a34a; color: white; }}
                    .reject {{ background: #dc2626; color: white; margin-left: 10px; }}
                </style>
            </head>
            <body>
                <div class="card">
                    <h2>Aprovação de Orçamento #{quote['id']}</h2>
                    <p><strong>Aparelho:</strong> {quote['model']}</p>
                    <p><strong>Descrição:</strong> {quote['description']}</p>
                    <p><strong>Itens:</strong></p>
                    <ul>{items_html}</ul>
                    <h3>Total: R$ {quote['total']:.2f}</h3>
                    <p><strong>Garantia:</strong> {quote['warranty']}</p>
                    <p><strong>Status Atual:</strong> {quote['status']}</p>
                </div>
            </body>
            </html>'''
            return self.send_html(html)

        # Rota Healthcheck
        if path == '/health':
            return self.send_json({'status': 'ok', 'time': now()})

        # Rotas autenticadas da API (GET)
        u = self.get_session_user()
        if path.startswith('/api/'):
            if not u and path != '/api/login':
                return self.send_json({'ok': False, 'error': 'Não autenticado'}, 401)

            if path == '/api/me':
                return self.send_json({'ok': True, 'user': u})

            elif path == '/api/chat':
                unit_filter = urllib.parse.parse_qs(urllib.parse.urlparse(self.path).query).get('unit', ['TODOS'])[0]
                if unit_filter == 'TODOS':
                    msgs = query("SELECT * FROM chat ORDER BY id DESC LIMIT 50")
                else:
                    msgs = query("SELECT * FROM chat WHERE unit = ? OR unit = 'TODOS' ORDER BY id DESC LIMIT 50", (unit_filter,))
                return self.send_json({'ok': True, 'messages': list(reversed(msgs))})

            elif path == '/api/activity':
                logs = query("SELECT * FROM activity_log ORDER BY id DESC LIMIT 100")
                return self.send_json({'ok': True, 'logs': logs})

            # Listagem de recursos CRUD
            resource_match = re.match(r'^/api/([a-z_]+)$', path)
            if resource_match:
                resource = resource_match.group(1)
                if resource in ALLOWED_RESOURCES:
                    table = get_resource_table(resource)
                    rows = query(f"SELECT * FROM {table} ORDER BY id DESC LIMIT 200")
                    return self.send_json({'ok': True, 'data': rows})

        # Fallback para renderizar o painel SPA
        return self.send_html(INDEX)

    def do_POST(self):
        path = urllib.parse.urlparse(self.path).path
        data = self.parse_body()

        if path == '/api/login':
            login = data.get('login', '').strip()
            password = data.get('pass', '').strip()
            hashed = hash_pass(password)

            rows = query("SELECT * FROM users WHERE login = ? AND pass = ?", (login, hashed))
            if rows:
                u = rows[0]
                sid = hashlib.sha256(f"{u['id']}-{time.time()}".encode('utf-8')).hexdigest()
                user_info = {'id': u['id'], 'name': u['name'], 'role': u['role'], 'unit': u['unit']}
                SESSIONS[sid] = user_info
                
                self.send_response(200)
                self.send_header('Set-Cookie', f'sid={sid}; Path=/; HttpOnly')
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.end_headers()
                self.wfile.write(json.dumps({'ok': True, 'user': user_info}).encode('utf-8'))
                audit(user_info, 'LOG', 'LOGIN', 'users', u['id'], 'Login efetuado')
                return
            else:
                return self.send_json({'ok': False, 'error': 'Usuário ou senha incorretos'}, 401)

        u = self.get_session_user()
        if not u:
            return self.send_json({'ok': False, 'error': 'Não autenticado'}, 401)

        # Chat Normal (Apenas grava a mensagem, SEM chamar IA)
        if path == '/api/chat':
            unit = data.get('unit', 'TODOS')
            msg = data.get('message', '').strip()
            if not msg:
                return self.send_json({'ok': False, 'error': 'Mensagem vazia.'})
            
            chat_id = write(
                'INSERT INTO chat (unit, user_name, message, created_at) VALUES (?, ?, ?, ?)',
                (unit, u['name'], msg, now())
            )
            audit(u, 'LOG', 'CHAT', 'chat', chat_id, f"Mensagem enviada no chat [{unit}]")
            return self.send_json({'ok': True, 'id': chat_id})

        # Chat da IA Gemini (Exige /bot explicitamente)
        elif path == '/api/ai/chat':
            res = ai_chat(data, u)
            return self.send_json(res)

        # Outras rotas de auxílio via IA
        elif path == '/api/ai/evaluate':
            device = data.get('device', '')
            details = data.get('details', '')
            prompt = f"Avalie o defeito do celular {device}. Detalhes: {details}. Dê um diagnóstico técnico preliminar e riscos no conserto."
            reply = gemini_call(prompt)
            return self.send_json({'ok': True, 'evaluation': reply})

        elif path == '/api/ai/price':
            service_title = data.get('service', '')
            cost = data.get('cost', 0)
            prompt = f"Sugira o preço ideal para o serviço '{service_title}' com custo de peça/insumo de R$ {cost:.2f}, para manter margem competitiva em assistência de celular."
            reply = gemini_call(prompt)
            return self.send_json({'ok': True, 'pricing_advice': reply})

        # Desfazer Ação (Undo)
        elif path == '/api/undo':
            res = undo_action(data, u)
            return self.send_json(res)

        # CRUD POST (Criação de Recurso)
        resource_match = re.match(r'^/api/([a-z_]+)$', path)
        if resource_match:
            resource = resource_match.group(1)
            if resource in ALLOWED_RESOURCES:
                res = create_api(resource, data, u)
                return self.send_json(res)

        return self.send_json({'ok': False, 'error': 'Rota não encontrada'}, 404)

    def do_PUT(self):
        path = urllib.parse.urlparse(self.path).path
        u = self.get_session_user()
        if not u:
            return self.send_json({'ok': False, 'error': 'Não autenticado'}, 401)

        data = self.parse_body()
        resource_match = re.match(r'^/api/([a-z_]+)/(\d+)$', path)
        if resource_match:
            resource = resource_match.group(1)
            rec_id = int(resource_match.group(2))
            if resource in ALLOWED_RESOURCES:
                res = update_api(resource, rec_id, data, u)
                return self.send_json(res)

        return self.send_json({'ok': False, 'error': 'Rota não encontrada'}, 404)

    def do_DELETE(self):
        path = urllib.parse.urlparse(self.path).path
        u = self.get_session_user()
        if not u:
            return self.send_json({'ok': False, 'error': 'Não autenticado'}, 401)

        resource_match = re.match(r'^/api/([a-z_]+)/(\d+)$', path)
        if resource_match:
            resource = resource_match.group(1)
            rec_id = int(resource_match.group(2))
            if resource in ALLOWED_RESOURCES:
                res = delete_api(resource, rec_id, u)
                return self.send_json(res)

        return self.send_json({'ok': False, 'error': 'Rota não encontrada'}, 404)


# ==========================================
# INICIALIZAÇÃO DO SERVIDOR WEB
# ==========================================

def run_server(port=8000):
    server_address = ('', port)
    httpd = HTTPServer(server_address, Handler)
    print(f"==================================================")
    print(f" SERVIDOR KV CELL OS PREMIUM INICIADO NA PORTA {port}")
    print(f" Acesse: http://localhost:{port}")
    print(f"==================================================")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nEncerrando servidor...")
        httpd.server_close()

if __name__ == '__main__':
    port = 8000
    if len(sys.argv) > 1 and sys.argv[1].isdigit():
        port = int(sys.argv[1])
    run_server(port)

```
