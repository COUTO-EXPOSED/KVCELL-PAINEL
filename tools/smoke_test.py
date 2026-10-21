import json
import os
import secrets
import socket
import sqlite3
import subprocess
import sys
import tempfile
import time
from http.cookiejar import CookieJar
from urllib.error import HTTPError
from urllib.parse import urlparse
from urllib.request import HTTPCookieProcessor, build_opener, Request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PYTHON = sys.executable
ADMIN_EMAIL = "admin@kvcell.local"
ADMIN_PASSWORD = secrets.token_urlsafe(24)
TECHNICIAN_PASSWORD = secrets.token_urlsafe(24)


def free_port():
    with socket.socket() as sock:
        sock.bind(("127.0.0.1", 0))
        return sock.getsockname()[1]


def request(opener, base, path, method="GET", data=None):
    body = json.dumps(data).encode() if data is not None else None
    headers = {"Content-Type": "application/json"} if data is not None else {}
    req = Request(base + path, data=body, headers=headers, method=method)
    try:
        with opener.open(req, timeout=5) as response:
            payload = response.read()
            status = response.status
            content_type = response.headers.get("Content-Type", "")
    except HTTPError as error:
        payload = error.read()
        status = error.code
        content_type = error.headers.get("Content-Type", "")
    text = payload.decode("utf-8", "replace")
    if "json" in content_type:
        try:
            return status, json.loads(text)
        except json.JSONDecodeError:
            raise AssertionError(f"Expected JSON from {path}, got {text[:200]!r}")
    return status, text


def start_server(data_dir):
    port = free_port()
    env = os.environ.copy()
    env.pop("TELEGRAM_BOT_TOKEN", None)
    env.pop("TELEGRAM_CHAT_ID", None)
    env.update({
        "PORT": str(port),
        "ADMIN_EMAIL": ADMIN_EMAIL,
        "ADMIN_PASSWORD": ADMIN_PASSWORD,
        "KVCELL_DATA_DIR": data_dir,
        "PUBLIC_BASE_URL": f"http://127.0.0.1:{port}",
    })
    process = subprocess.Popen(
        [PYTHON, os.path.join(ROOT, "app.py")],
        cwd=ROOT,
        env=env,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    base = f"http://127.0.0.1:{port}"
    opener = build_opener(HTTPCookieProcessor(CookieJar()))
    for _ in range(100):
        if process.poll() is not None:
            raise AssertionError(f"Application exited during startup: {process.returncode}")
        try:
            code, health = request(opener, base, "/api/health")
            if code == 200 and health.get("ok"):
                return process, opener, base
        except Exception:
            time.sleep(0.1)
    process.terminate()
    process.wait(timeout=5)
    raise AssertionError("Application health check did not become ready.")


def stop_server(process):
    process.terminate()
    process.wait(timeout=5)


def login(opener, base, email=ADMIN_EMAIL, password=ADMIN_PASSWORD):
    code, result = request(
        opener, base, "/api/login", "POST",
        {"email": email, "password": password},
    )
    assert code == 200 and result.get("ok"), f"Login failed: {result}"


def create_legacy_database(data_dir):
    os.makedirs(data_dir, exist_ok=True)
    db_path = os.path.join(data_dir, "kvcell.db")
    connection = sqlite3.connect(db_path)
    try:
        connection.executescript("""
            CREATE TABLE services(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                unit TEXT, customer_id INTEGER, device_id INTEGER, kind TEXT,
                description TEXT, checklist TEXT, diagnosis TEXT, status TEXT,
                technician TEXT, price REAL, warranty TEXT, photos TEXT,
                notes TEXT, public_token TEXT, created_at TEXT, updated_at TEXT
            );
            CREATE TABLE devices(
                id INTEGER PRIMARY KEY AUTOINCREMENT, unit TEXT, customer_id INTEGER,
                brand TEXT, model TEXT, imei TEXT, serial TEXT, color TEXT,
                storage TEXT, status TEXT, photos TEXT DEFAULT '[]', notes TEXT,
                created_at TEXT
            );
            INSERT INTO devices(id,unit,brand,model,status)
                VALUES(71,'LAGOS','Motorola','Moto G legacy','Em bancada');
            INSERT INTO services(
                id,unit,device_id,kind,description,checklist,diagnosis,status,
                price,photos,notes,public_token,created_at,updated_at
            ) VALUES(
                41,'LAGOS',71,'conserto','OS legada de migração','{}','',
                'em andamento',120,'[]','nota interna legada','legacy-token',
                '2025-01-02 10:00:00','2025-01-02 10:00:00'
            );
        """)
    finally:
        connection.close()
    return db_path


def run_main_flows(data_dir):
    process, opener, base = start_server(data_dir)
    try:
        code, health = request(opener, base, "/api/health")
        assert code == 200 and health["ok"] and health.get("version") == "4000.0"
        anonymous = build_opener()
        code, _ = request(anonymous, base, "/api/services")
        assert code == 401, "Protected API endpoint accepted an anonymous request."
        login(opener, base)
        code, current_user = request(opener, base, "/api/me")
        assert code == 200
        code, users = request(opener, base, "/api/users")
        assert code == 200 and users and all("password_hash" not in item for item in users)
        admin_id = current_user["user"]["id"]

        for path in ("/api/mdm", "/api/ai/status", "/public/mdm/portal/removed"):
            code, _ = request(opener, base, path)
            assert code == 404, f"Retired endpoint is still reachable: {path}"
        code, _ = request(opener, base, "/public/mdm/heartbeat/removed", "POST", {})
        assert code == 404, "Retired public MDM endpoint is still reachable."

        code, customer = request(opener, base, "/api/customers", "POST", {
            "name": "Smoke Cliente", "phone": "21999991234", "type": "PF",
        })
        assert code == 200, customer
        customer_id = customer["id"]
        code, _ = request(opener, base, "/api/customers", "PUT", {
            "id": customer_id, "city": "Magé",
        })
        assert code == 200
        code, customers = request(opener, base, "/api/customers?unit=TODOS")
        assert code == 200 and next(c for c in customers if c["id"] == customer_id)["city"] == "Magé"

        device_ids = []
        for model in ("Galaxy V4000-A", "Galaxy V4000-B"):
            code, device = request(opener, base, "/api/devices", "POST", {
                "unit": "LAGOS", "customer_id": customer_id,
                "brand": "Samsung", "model": model, "status": "Em bancada",
            })
            assert code == 200, device
            device_ids.append(device["id"])

        code, invalid_diagnostic = request(opener, base, "/api/diagnostics", "POST", {
            "unit": "LAGOS", "brand": "Samsung", "model": "Galaxy QA",
            "symptoms": "Não carrega", "estimate": float("nan"),
        })
        assert code == 400, invalid_diagnostic
        code, diagnostic = request(opener, base, "/api/diagnostics", "POST", {
            "unit": "LAGOS", "customer_id": customer_id, "device_id": device_ids[0],
            "brand": "Samsung", "model": "Galaxy V4000-A", "imei": "QA-IMEI-001",
            "symptoms": "Intermitência no carregamento", "tests": ["Carregamento", "Bateria"],
            "findings": "Conector com folga", "recommendation": "Inspecionar a placa",
            "status": "aberto", "estimate": 89.90, "notes": "Nota privada de diagnóstico",
        })
        assert code == 200, diagnostic
        diagnostic_id = diagnostic["id"]
        code, diagnostics = request(opener, base, "/api/diagnostics?unit=LAGOS")
        assert code == 200
        saved_diagnostic = next(item for item in diagnostics if item["id"] == diagnostic_id)
        assert saved_diagnostic["customer_name"] == "Smoke Cliente"
        assert saved_diagnostic["device_label"] == "Samsung Galaxy V4000-A"
        assert saved_diagnostic["status"] == "aberto"
        code, invalid_diagnostic_update = request(opener, base, "/api/diagnostics", "PUT", {
            "id": diagnostic_id, "unit": "MAGÉ",
        })
        assert code == 400, invalid_diagnostic_update
        code, updated_diagnostic = request(opener, base, "/api/diagnostics", "PUT", {
            "id": diagnostic_id, "status": "em análise",
            "findings": "Conector com folga após inspeção", "estimate": 99.50,
        })
        assert code == 200, updated_diagnostic
        code, diagnostics = request(opener, base, "/api/diagnostics?unit=LAGOS")
        assert code == 200
        assert len([item for item in diagnostics if item["id"] == diagnostic_id]) == 1
        saved_diagnostic = next(item for item in diagnostics if item["id"] == diagnostic_id)
        assert saved_diagnostic["status"] == "em análise"
        assert saved_diagnostic["findings"] == "Conector com folga após inspeção"
        assert saved_diagnostic["estimate"] == 99.5

        code, blocked_customer_delete = request(
            opener, base, f"/api/customers?id={customer_id}", "DELETE",
        )
        assert code == 409 and blocked_customer_delete.get("references"), blocked_customer_delete
        code, retained_customers = request(opener, base, "/api/customers?unit=TODOS")
        assert code == 200 and any(c["id"] == customer_id for c in retained_customers)

        code, disposable_customer = request(opener, base, "/api/customers", "POST", {
            "name": "Cliente removível sem vínculos", "type": "PF",
        })
        assert code == 200, disposable_customer
        code, deleted_customer = request(
            opener, base, f"/api/customers?id={disposable_customer['id']}", "DELETE",
        )
        assert code == 200 and deleted_customer.get("ok"), deleted_customer

        code, technician = request(opener, base, "/api/technicians", "POST", {
            "unit": "LAGOS", "name": "Técnico CRUD QA", "active": True,
        })
        assert code == 200, technician
        code, _ = request(opener, base, "/api/technicians", "PUT", {
            "id": technician["id"], "active": False,
        })
        assert code == 200
        code, technicians = request(opener, base, "/api/technicians?unit=TODOS")
        assert code == 200 and next(t for t in technicians if t["id"] == technician["id"])["active"] == 0

        code, supplier = request(opener, base, "/api/suppliers", "POST", {
            "unit": "LAGOS", "name": "Fornecedor CRUD QA", "email": "qa@example.invalid",
        })
        assert code == 200, supplier
        code, _ = request(opener, base, "/api/suppliers", "PUT", {
            "id": supplier["id"], "city": "Magé",
        })
        assert code == 200
        code, suppliers = request(opener, base, "/api/suppliers?unit=TODOS")
        assert code == 200 and next(s for s in suppliers if s["id"] == supplier["id"])["city"] == "Magé"

        code, appointment = request(opener, base, "/api/appointments", "POST", {
            "unit": "LAGOS", "customer_id": customer_id, "title": "Agendamento CRUD QA",
            "start_at": "2026-10-21T10:00", "status": "agendado",
        })
        assert code == 200, appointment
        code, _ = request(opener, base, "/api/appointments", "PUT", {
            "id": appointment["id"], "status": "concluído",
        })
        assert code == 200
        code, invalid_appointment = request(opener, base, "/api/appointments", "PUT", {
            "id": appointment["id"], "status": "nao-existe",
        })
        assert code == 400, invalid_appointment
        code, appointments = request(opener, base, "/api/appointments?unit=TODOS")
        assert code == 200 and next(a for a in appointments if a["id"] == appointment["id"])["status"] == "concluído"

        code, guarantee = request(opener, base, "/api/guarantees", "POST", {
            "unit": "LAGOS", "customer_id": customer_id, "device": "Galaxy QA",
            "description": "Garantia CRUD QA", "status": "ativa",
        })
        assert code == 200, guarantee
        code, _ = request(opener, base, "/api/guarantees", "PUT", {
            "id": guarantee["id"], "status": "encerrada",
        })
        assert code == 200
        code, guarantees = request(opener, base, "/api/guarantees?unit=TODOS")
        assert code == 200 and next(g for g in guarantees if g["id"] == guarantee["id"])["status"] == "encerrada"

        code, service = request(opener, base, "/api/services", "POST", {
            "unit": "LAGOS", "customer_id": customer_id, "device_ids": device_ids,
            "kind": "conserto", "description": "OS de smoke test",
            "status": "aberto", "price": 125, "cost_material": 20,
            "notes": "SEGREDO INTERNO DE TESTE",
            "details": {
                "items": [{"description": "Troca de tela", "qty": 1, "total": 125}],
                "parts": [{"name": "Tela QA", "quality": "Premium", "qty": 1, "price": 125}],
            },
        })
        assert code == 200 and service.get("public_token"), service
        service_id = service["id"]
        code, unauthenticated_message = request(
            anonymous, base, f"/api/telegram/service/{service_id}", "POST", {},
        )
        assert code == 401, "Telegram customer-message endpoint accepted an anonymous request."
        code, service_message = request(
            opener, base, f"/api/telegram/service/{service_id}", "POST", {},
        )
        assert code == 200 and not service_message["configured"] and not service_message["sent"]
        assert "OS#" in service_message["message"] and "CLIENTE: Smoke Cliente / 21999991234" in service_message["message"]
        assert "Galaxy V4000-A" in service_message["message"] and "R$ 125,00" in service_message["message"]
        assert "SEGREDO INTERNO DE TESTE" not in service_message["message"]
        public_path = urlparse(service["public_url"]).path
        code, public_html = request(anonymous, base, public_path)
        assert code == 200 and "Galaxy V4000-A" in public_html
        assert "Galaxy V4000-B" in public_html
        assert "SEGREDO INTERNO DE TESTE" not in public_html
        assert service["public_url"].startswith(base + "/public/os/")
        code, _ = request(anonymous, base, "/public/os/invalid-v5000-token")
        assert code == 404, "An invalid OS token resolved to a public record."

        code, _ = request(opener, base, "/api/devices", "PUT", {
            "id": device_ids[0], "model": "Galaxy V4000-A edited",
        })
        assert code == 200
        code, _ = request(opener, base, "/api/services", "PUT", {
            "id": service_id, "description": "OS editada sem duplicar",
        })
        assert code == 200
        code, services = request(opener, base, "/api/services?unit=LAGOS")
        assert code == 200
        current = [item for item in services if item["id"] == service_id]
        assert len(current) == 1 and current[0]["description"] == "OS editada sem duplicar"
        assert current[0]["device_ids"] == device_ids
        assert [d["model"] for d in current[0]["devices"]] == [
            "Galaxy V4000-A edited", "Galaxy V4000-B",
        ]
        assert current[0]["public_token"] == service["public_token"]
        code, public_html = request(anonymous, base, public_path)
        assert code == 200 and "Galaxy V4000-A edited" in public_html
        assert "Galaxy V4000-B" in public_html

        code, _ = request(opener, base, "/api/services", "PUT", {
            "id": service_id, "status": "Em andamento",
        })
        assert code == 200
        code, public_html = request(anonymous, base, public_path)
        assert code == 200 and "Em andamento" in public_html

        code, technician = request(opener, base, "/api/users", "POST", {
            "name": "Smoke Técnico", "email": "smoke-tech@kvcell.local",
            "password": TECHNICIAN_PASSWORD, "role": "tecnico",
            "unit": "LAGOS", "permissions": {"services": True},
        })
        assert code == 200, technician
        code, short_password = request(opener, base, "/api/users", "POST", {
            "name": "Senha curta", "email": "short-password@kvcell.local",
            "password": "short", "role": "atendente",
        })
        assert code == 400, short_password
        code, duplicate_email = request(opener, base, "/api/users", "PUT", {
            "id": technician["id"], "email": ADMIN_EMAIL,
        })
        assert code == 400 and "duplicado" in duplicate_email.get("error", "").lower(), duplicate_email
        technician_opener = build_opener(HTTPCookieProcessor(CookieJar()))
        login(technician_opener, base, "smoke-tech@kvcell.local", TECHNICIAN_PASSWORD)
        code, denied_diagnostics = request(technician_opener, base, "/api/diagnostics?unit=TODOS")
        assert code == 403, denied_diagnostics
        code, allowed_client_message = request(
            technician_opener, base, f"/api/telegram/service/{service_id}", "POST", {},
        )
        assert code == 200 and not allowed_client_message["configured"]
        code, technician_services = request(technician_opener, base, "/api/services?unit=TODOS")
        assert code == 200 and all(item["unit"] == "LAGOS" for item in technician_services)
        code, forged_service = request(technician_opener, base, "/api/services", "POST", {
            "unit": "MAGÉ", "description": "Unidade forjada", "status": "aberto",
        })
        assert code == 200, forged_service
        code, technician_services = request(technician_opener, base, "/api/services?unit=TODOS")
        scoped_service = next(item for item in technician_services if item["id"] == forged_service["id"])
        assert scoped_service["unit"] == "LAGOS", scoped_service
        code, move_unit = request(technician_opener, base, "/api/services", "PUT", {
            "id": forged_service["id"], "unit": "MAGÉ",
        })
        assert code == 403, move_unit
        code, cross_unit_service = request(opener, base, "/api/services", "POST", {
            "unit": "MAGÉ", "description": "OS de outra unidade", "status": "aberto",
        })
        assert code == 200, cross_unit_service
        code, cross_unit_update = request(technician_opener, base, "/api/services", "PUT", {
            "id": cross_unit_service["id"], "status": "em andamento",
        })
        assert code == 403, cross_unit_update
        code, cross_unit_message = request(
            technician_opener, base, f"/api/telegram/service/{cross_unit_service['id']}", "POST", {},
        )
        assert code == 403, cross_unit_message
        for path in ("/api/users", "/api/finance", "/api/export/backup"):
            code, _ = request(technician_opener, base, path)
            assert code == 403, f"Technician unexpectedly accessed restricted endpoint {path}."
        code, denied_create = request(technician_opener, base, "/api/users", "POST", {
            "name": "Não autorizado", "email": "not-authorized@kvcell.local",
            "password": TECHNICIAN_PASSWORD,
        })
        assert code == 403, denied_create
        code, denied_update = request(technician_opener, base, "/api/users", "PUT", {
            "id": admin_id, "role": "atendente",
        })
        assert code == 403, denied_update
        code, denied = request(technician_opener, base, f"/api/services?id={service_id}", "DELETE")
        assert code == 403 and "administrador" in denied.get("error", "").lower(), denied
        code, changed_permissions = request(opener, base, "/api/users", "PUT", {
            "id": technician["id"], "permissions": {"finance": True},
        })
        assert code == 200, changed_permissions
        for path in ("/api/finance", "/api/chart?unit=TODOS", "/api/profit?unit=TODOS"):
            code, _ = request(technician_opener, base, path)
            assert code == 403, f"Technician with explicit finance permission bypassed role restrictions at {path}."
        code, changed_permissions = request(opener, base, "/api/users", "PUT", {
            "id": technician["id"], "permissions": {"inventory": True, "diagnostics": True},
        })
        assert code == 200, changed_permissions
        code, _ = request(technician_opener, base, "/api/inventory?unit=TODOS")
        assert code == 200, "Permission grants should apply to the active session."
        code, technician_diagnostics = request(technician_opener, base, "/api/diagnostics?unit=TODOS")
        assert code == 200 and all(item["unit"] == "LAGOS" for item in technician_diagnostics)
        assert any(item["id"] == diagnostic_id for item in technician_diagnostics)
        code, _ = request(technician_opener, base, "/api/services?unit=TODOS")
        assert code == 403, "Permission revocations should apply to the active session."
        code, deleted_diagnostic = request(
            opener, base, f"/api/diagnostics?id={diagnostic_id}", "DELETE",
        )
        assert code == 200 and deleted_diagnostic.get("ok"), deleted_diagnostic
        code, diagnostics = request(opener, base, "/api/diagnostics?unit=LAGOS")
        assert code == 200 and all(item["id"] != diagnostic_id for item in diagnostics)
        code, self_delete = request(opener, base, f"/api/users?id={admin_id}", "DELETE")
        assert code == 409 and "própria conta" in self_delete.get("error", "").lower(), self_delete

        code, _ = request(opener, base, "/api/services", "PUT", {
            "id": service_id, "status": "entregue",
        })
        assert code == 200
        connection = sqlite3.connect(os.path.join(data_dir, "kvcell.db"))
        finance_before_ids = connection.execute(
            "SELECT id,amount FROM finance WHERE ref_id=? AND ref_type IN ('service','service_cost') ORDER BY id",
            (service_id,),
        ).fetchall()
        connection.close()
        assert finance_before_ids, "Delivered OS did not persist its financial entries."
        code, _ = request(opener, base, "/api/services", "PUT", {
            "id": service_id, "price": 140,
        })
        assert code == 200
        connection = sqlite3.connect(os.path.join(data_dir, "kvcell.db"))
        finance_edited_ids = connection.execute(
            "SELECT id,amount FROM finance WHERE ref_id=? AND ref_type IN ('service','service_cost') ORDER BY id",
            (service_id,),
        ).fetchall()
        connection.close()
        assert [row[0] for row in finance_edited_ids] == [row[0] for row in finance_before_ids]
        assert any(row[1] == 140 for row in finance_edited_ids)
        code, canceled = request(opener, base, f"/api/services?id={service_id}", "DELETE")
        assert code == 200 and canceled.get("preserved")
        code, services = request(opener, base, "/api/services?unit=LAGOS")
        retained = next(item for item in services if item["id"] == service_id)
        assert retained["status"] == "cancelado"
        connection = sqlite3.connect(os.path.join(data_dir, "kvcell.db"))
        finance_after_ids = connection.execute(
            "SELECT id,amount FROM finance WHERE ref_id=? AND ref_type IN ('service','service_cost') ORDER BY id",
            (service_id,),
        ).fetchall()
        history = connection.execute(
            "SELECT status FROM service_status_history WHERE service_id=? ORDER BY id",
            (service_id,),
        ).fetchall()
        connection.close()
        assert finance_after_ids == finance_edited_ids, "Canceling OS erased or recreated financial history."
        assert [row[0] for row in history][-2:] == ["entregue", "cancelado"]

        code, sale = request(opener, base, "/api/sales", "POST", {
            "unit": "LAGOS", "customer_id": customer_id,
            "items": "Venda de teste", "total": 200, "payment_fee": 10,
            "net_total": 190, "payment": "PIX",
        })
        assert code == 200, sale
        connection = sqlite3.connect(os.path.join(data_dir, "kvcell.db"))
        sale_finance_before = connection.execute(
            "SELECT id,amount FROM finance WHERE ref_type='sale' AND ref_id=?",
            (sale["id"],),
        ).fetchone()
        connection.close()
        assert sale_finance_before and sale_finance_before[1] == 190
        code, _ = request(opener, base, "/api/sales", "PUT", {
            "id": sale["id"], "total": 240, "payment_fee": 12,
        })
        assert code == 200
        connection = sqlite3.connect(os.path.join(data_dir, "kvcell.db"))
        sale_finance_after = connection.execute(
            "SELECT id,amount FROM finance WHERE ref_type='sale' AND ref_id=?",
            (sale["id"],),
        ).fetchone()
        connection.close()
        assert sale_finance_after == (sale_finance_before[0], 228)
        code, linked_finance_update = request(opener, base, "/api/finance", "PUT", {
            "id": sale_finance_after[0], "amount": 1,
        })
        assert code == 409, linked_finance_update
        code, linked_finance_delete = request(
            opener, base, f"/api/finance?id={sale_finance_after[0]}", "DELETE",
        )
        assert code == 409, linked_finance_delete
        code, invalid_fee_sale = request(opener, base, "/api/sales", "POST", {
            "unit": "LAGOS", "total": 10, "payment_fee": 11, "payment": "Crédito",
        })
        assert code == 400, invalid_fee_sale
        code, credit_sale = request(opener, base, "/api/sales", "POST", {
            "unit": "LAGOS", "customer_id": customer_id, "items": "Venda fiada QA",
            "total": 150, "payment": "Fiado/Crediário", "down_payment": 20,
        })
        assert code == 200, credit_sale
        connection = sqlite3.connect(os.path.join(data_dir, "kvcell.db"))
        credit_ledger = connection.execute(
            "SELECT f.total,f.down_payment,f.balance,"
            "(SELECT COUNT(*) FROM finance WHERE ref_type='sale' AND ref_id=s.id),"
            "(SELECT COALESCE(SUM(amount),0) FROM finance WHERE ref_type='fiado' AND ref_id=f.id) "
            "FROM sales s JOIN fiado_accounts f ON f.source_id=s.id "
            "WHERE s.id=? AND f.source_type='sale'",
            (credit_sale["id"],),
        ).fetchone()
        connection.close()
        assert credit_ledger == (150, 20, 130, 0, 20), credit_ledger

        code, manual_finance = request(opener, base, "/api/finance", "POST", {
            "unit": "LAGOS", "type": "saida", "category": "QA",
            "description": "Lançamento manual QA", "amount": 25,
        })
        assert code == 200, manual_finance
        code, _ = request(opener, base, "/api/finance", "PUT", {
            "id": manual_finance["id"], "amount": 30,
        })
        assert code == 200
        code, finance_rows = request(opener, base, "/api/finance?unit=LAGOS")
        assert code == 200 and next(f for f in finance_rows if f["id"] == manual_finance["id"])["amount"] == 30
        code, manual_deleted = request(
            opener, base, f"/api/finance?id={manual_finance['id']}", "DELETE",
        )
        assert code == 200 and manual_deleted.get("ok"), manual_deleted

        code, purchase = request(opener, base, "/api/purchases", "POST", {
            "unit": "LAGOS", "brand": "QA", "model": "Purchase",
            "amount": 100, "expenses": 10, "freight": 5,
            "suggested_price": 220,
        })
        assert code == 200, purchase
        connection = sqlite3.connect(os.path.join(data_dir, "kvcell.db"))
        purchase_finance_before = connection.execute(
            "SELECT id,amount FROM finance WHERE ref_type='purchase' AND ref_id=?",
            (purchase["id"],),
        ).fetchone()
        connection.close()
        assert purchase_finance_before and purchase_finance_before[1] == 115
        code, _ = request(opener, base, "/api/purchases", "PUT", {
            "id": purchase["id"], "amount": 120, "expenses": 15, "freight": 5,
        })
        assert code == 200
        connection = sqlite3.connect(os.path.join(data_dir, "kvcell.db"))
        purchase_finance_after = connection.execute(
            "SELECT id,amount FROM finance WHERE ref_type='purchase' AND ref_id=?",
            (purchase["id"],),
        ).fetchone()
        purchase_values = connection.execute(
            "SELECT total_cost,expected_profit FROM purchases WHERE id=?",
            (purchase["id"],),
        ).fetchone()
        connection.close()
        assert purchase_finance_after == (purchase_finance_before[0], 140)
        assert purchase_values == (140, 80)

        code, checkout = request(opener, base, "/api/pdv/checkout", "POST", {
            "unit": "LAGOS", "customer_id": customer_id,
            "items": [{"purchase_id": purchase["id"]}], "discount": 20, "payment": "PIX",
        })
        assert code == 200 and len(checkout["sale_ids"]) == 1 and checkout["total"] == 200, checkout
        sale_id = checkout["sale_ids"][0]
        connection = sqlite3.connect(os.path.join(data_dir, "kvcell.db"))
        sale_state = connection.execute(
            "SELECT p.status,p.sold,i.qty,s.total FROM purchases p "
            "JOIN inventory i ON i.source_type='purchase' AND i.source_id=p.id "
            "JOIN sales s ON s.purchase_id=p.id WHERE p.id=?",
            (purchase["id"],),
        ).fetchone()
        sale_finance_count = connection.execute(
            "SELECT COUNT(*) FROM finance WHERE ref_type='sale' AND ref_id=?",
            (sale_id,),
        ).fetchone()[0]
        connection.close()
        assert sale_state == ("vendido", 1, 0, 200), sale_state
        assert sale_finance_count == 1
        code, duplicate_checkout = request(opener, base, "/api/pdv/checkout", "POST", {
            "unit": "LAGOS", "items": [{"purchase_id": purchase["id"]}],
            "discount": 0, "payment": "PIX",
        })
        assert code == 409, duplicate_checkout
        code, blocked_sale_delete = request(opener, base, f"/api/sales?id={sale_id}", "DELETE")
        assert code == 409, blocked_sale_delete
        code, blocked_purchase_delete = request(
            opener, base, f"/api/purchases?id={purchase['id']}", "DELETE",
        )
        assert code == 409, blocked_purchase_delete
        code, _ = request(opener, base, "/api/purchases", "PUT", {
            "id": purchase["id"], "suggested_price": 230,
        })
        assert code == 200
        connection = sqlite3.connect(os.path.join(data_dir, "kvcell.db"))
        duplicated_income = connection.execute(
            "SELECT COALESCE(SUM(amount),0) FROM finance "
            "WHERE type='entrada' AND ((ref_type='sale' AND ref_id=?) "
            "OR (ref_type='purchase_sale' AND ref_id=?))",
            (sale_id, purchase["id"]),
        ).fetchone()[0]
        connection.close()
        assert duplicated_income == 200, duplicated_income

        code, rollback_first = request(opener, base, "/api/purchases", "POST", {
            "unit": "LAGOS", "brand": "QA", "model": "Atomic Checkout",
            "amount": 50, "suggested_price": 100,
        })
        assert code == 200, rollback_first
        code, failed_cart = request(opener, base, "/api/pdv/checkout", "POST", {
            "unit": "LAGOS",
            "items": [
                {"purchase_id": rollback_first["id"]},
                {"purchase_id": purchase["id"]},
            ],
            "discount": 0, "payment": "PIX",
        })
        assert code == 409, failed_cart
        connection = sqlite3.connect(os.path.join(data_dir, "kvcell.db"))
        rollback_state = connection.execute(
            "SELECT status,sold FROM purchases WHERE id=?",
            (rollback_first["id"],),
        ).fetchone()
        rollback_sales = connection.execute(
            "SELECT COUNT(*) FROM sales WHERE purchase_id=?",
            (rollback_first["id"],),
        ).fetchone()[0]
        connection.close()
        assert rollback_state == ("vitrine", 0) and rollback_sales == 0, (rollback_state, rollback_sales)

        code, credit_purchase = request(opener, base, "/api/purchases", "POST", {
            "unit": "LAGOS", "brand": "QA", "model": "Fiado Checkout",
            "amount": 60, "suggested_price": 120,
        })
        assert code == 200, credit_purchase
        code, credit_checkout = request(opener, base, "/api/pdv/checkout", "POST", {
            "unit": "LAGOS", "customer_id": customer_id,
            "items": [{"purchase_id": credit_purchase["id"]}],
            "discount": 0, "payment": "Fiado/Crediário",
        })
        assert code == 200 and len(credit_checkout["fiado_ids"]) == 1, credit_checkout
        connection = sqlite3.connect(os.path.join(data_dir, "kvcell.db"))
        credit_income = connection.execute(
            "SELECT COUNT(*) FROM finance WHERE ref_type='sale' AND ref_id=?",
            (credit_checkout["sale_ids"][0],),
        ).fetchone()[0]
        credit_account = connection.execute(
            "SELECT balance FROM fiado_accounts WHERE id=?",
            (credit_checkout["fiado_ids"][0],),
        ).fetchone()
        connection.close()
        assert credit_income == 0 and credit_account == (120,), (credit_income, credit_account)

        quote_results = []
        for action in ("aprovado", "recusado"):
            code, quote = request(opener, base, "/api/quotes", "POST", {
                "unit": "LAGOS", "customer_id": customer_id,
                "device_id": device_ids[0],
                "quote_type": "servico", "items": [{"description": "Troca de tela", "quality": "Premium com aro", "qty": 1, "total": 150}],
                "subtotal": 150, "total": 150, "valid_until": "2099-12-31",
            })
            assert code == 200 and quote.get("public_url"), quote
            quote_path = quote["public_url"]
            code, quote_html = request(anonymous, base, quote_path)
            assert code == 200 and "KV CELL" in quote_html
            assert "Qualidade: Premium com aro" in quote_html and "90 dias para tela com aro" in quote_html
            code, quote_message = request(
                opener, base, f"/api/telegram/quote/{quote['id']}", "POST", {},
            )
            assert code == 200 and not quote_message["configured"] and not quote_message["sent"]
            assert "ORÇAMENTO#" in quote_message["message"] and "QUALIDADES DISPONÍVEIS:" in quote_message["message"]
            assert "Premium com aro" in quote_message["message"] and "21999991234" in quote_message["message"]
            assert "90 dias" in quote_message["message"] and "30 dias" in quote_message["message"]
            token = quote_path.rsplit("/", 1)[-1]
            code, _ = request(anonymous, base, f"/public/quote/invalid-{token}")
            assert code == 404, "An invalid quote token resolved to a public record."
            code, result = request(anonymous, base, quote_path, "POST", {"action": action})
            assert code == 200 and result.get("status") == action
            code, response = request(anonymous, base, quote_path, "POST", {
                "action": "recusado" if action == "aprovado" else "aprovado",
            })
            assert code == 409, f"Quote {token} accepted a duplicate decision: {response}"
            code, quotes = request(opener, base, "/api/quotes?unit=LAGOS")
            assert code == 200 and next(q for q in quotes if q["id"] == quote["id"])["status"] == action
            quote_results.append(action)

        code, cancellable_quote = request(opener, base, "/api/quotes", "POST", {
            "unit": "LAGOS", "customer_id": customer_id,
            "items": [{"description": "Orçamento cancelável", "qty": 1, "total": 30}],
            "total": 30, "valid_until": "2099-12-31",
        })
        assert code == 200, cancellable_quote
        code, delete_quote = request(
            opener, base, f"/api/quotes?id={cancellable_quote['id']}", "DELETE",
        )
        assert code == 409 and "cancelado" in delete_quote.get("error", "").lower()
        code, _ = request(opener, base, "/api/quotes", "PUT", {
            "id": cancellable_quote["id"], "status": "cancelado",
        })
        assert code == 200
        code, canceled_quote_html = request(anonymous, base, cancellable_quote["public_url"])
        assert code == 200 and "CANCELADO" in canceled_quote_html
        assert "Aprovar orçamento" not in canceled_quote_html
        code, canceled_decision = request(
            anonymous, base, cancellable_quote["public_url"], "POST", {"action": "aprovado"},
        )
        assert code == 409, "A canceled quote accepted a public decision."

        code, expired = request(opener, base, "/api/quotes", "POST", {
            "unit": "LAGOS", "customer_id": customer_id,
            "items": [], "total": 20, "valid_until": "2000-01-01",
        })
        assert code == 200
        code, _ = request(anonymous, base, expired["public_url"], "POST", {"action": "aprovado"})
        assert code == 409, "An expired quote accepted a public decision."
        return service_id, quote_results
    finally:
        stop_server(process)


def run_legacy_migration(data_dir):
    db_path = create_legacy_database(data_dir)
    process, opener, base = start_server(data_dir)
    try:
        login(opener, base)
        code, services = request(opener, base, "/api/services?unit=LAGOS")
        assert code == 200
        legacy = next(item for item in services if item["id"] == 41)
        assert legacy["public_token"] == "legacy-token"
        assert legacy["device_ids"] == [71]
        code, public_html = request(build_opener(), base, "/public/os/legacy-token")
        assert code == 200 and "OS legada de migração" in public_html
        assert "Moto G legacy" in public_html
        assert "nota interna legada" not in public_html
        connection = sqlite3.connect(db_path)
        diagnostics_table = connection.execute(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='diagnostics'"
        ).fetchone()
        migrated_diagnostics = connection.execute(
            "SELECT COUNT(*) FROM diagnostics"
        ).fetchone()
        migrated = connection.execute(
            "SELECT device_id FROM service_devices WHERE service_id=41"
        ).fetchone()
        history = connection.execute(
            "SELECT status FROM service_status_history WHERE service_id=41"
        ).fetchone()
        connection.close()
        assert diagnostics_table == ("diagnostics",) and migrated_diagnostics == (0,)
        assert migrated == (71,) and history == ("em andamento",)
    finally:
        stop_server(process)

def run_telegram_sender_mock(data_dir):
    test_data = os.path.join(data_dir, "telegram_sender")
    os.makedirs(test_data, exist_ok=True)
    env = os.environ.copy()
    env.update({
        "KVCELL_DATA_DIR": test_data,
        "PORT": "0",
        "ADMIN_EMAIL": ADMIN_EMAIL,
        "ADMIN_PASSWORD": ADMIN_PASSWORD,
        "TELEGRAM_BOT_TOKEN": "unit-test-token-not-real",
        "TELEGRAM_CHAT_ID": "-1001234567890",
    })
    script = """
import json
import urllib.error
import app

class Response:
    status = 200
    def __enter__(self): return self
    def __exit__(self, *_args): return False
    def read(self, _limit): return b'{"ok":true}'

calls = []
def success(request, timeout):
    calls.append((request, timeout))
    return Response()

app.urllib.request.urlopen = success
assert app._telegram_send('Unit test only') is True
assert len(calls) == 1 and calls[0][1] == 8
assert json.loads(calls[0][0].data)['chat_id'] == '-1001234567890'

def forbidden(request, timeout):
    raise urllib.error.HTTPError(request.full_url, 403, 'Forbidden', {}, None)

app.urllib.request.urlopen = forbidden
try:
    app._telegram_send('Unit test failure')
except RuntimeError as error:
    assert '403' in str(error)
    assert 'unit-test-token-not-real' not in str(error)
else:
    raise AssertionError('Telegram HTTP failure was not reported.')
print('Telegram sender mock: PASS')
"""
    completed = subprocess.run(
        [PYTHON, "-c", script], cwd=ROOT, env=env, check=True,
        capture_output=True, text=True, timeout=30,
    )
    assert "Telegram sender mock: PASS" in completed.stdout, completed.stdout


def main():
    with tempfile.TemporaryDirectory(prefix="kvcell_v4000_smoke_") as temp:
        main_data = os.path.join(temp, "main")
        legacy_data = os.path.join(temp, "legacy")
        run_telegram_sender_mock(temp)
        service_id, quote_results = run_main_flows(main_data)
        run_legacy_migration(legacy_data)
    print(
        "KV CELL REGRESSION SMOKE TEST: PASS "
        f"(OS #{service_id}, multi-device/edit/status/cancel, "
        f"quotes={','.join(quote_results)}, customer CRUD/integrity, "
        "ledger IDs preserved, atomic PDV/stock/fiado, duplicate sale guards, "
        "legacy migration, auth, Telegram sender mock, retired routes)"
    )


if __name__ == "__main__":
    main()
