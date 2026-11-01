import base64
import ipaddress
import json
import os
import urllib.error
import urllib.parse
import urllib.request


class PartnerAPIError(ValueError):
    def __init__(self, message, uncertain=False):
        super().__init__(message)
        self.uncertain = uncertain


def _encoded_parameters(parameters):
    if not parameters:
        return ""
    encoded = json.dumps(parameters, ensure_ascii=False, separators=(",", ":")).encode("utf-8")
    return base64.b64encode(encoded).decode("ascii")


def request(action, parameters=None, timeout=30):
    endpoint = os.environ.get("PARTNER_API_URL", "").strip()
    username = os.environ.get("PARTNER_API_USER", "").strip()
    access_key = os.environ.get("PARTNER_API_KEY", "").strip()
    if not endpoint or not username or not access_key:
        raise PartnerAPIError("Configure PARTNER_API_URL, PARTNER_API_USER e PARTNER_API_KEY no ambiente.")
    try:
        parsed_endpoint = urllib.parse.urlsplit(endpoint)
    except ValueError:
        raise PartnerAPIError("PARTNER_API_URL inválida.") from None
    hostname = (parsed_endpoint.hostname or "").lower()
    try:
        loopback = ipaddress.ip_address(hostname).is_loopback
    except ValueError:
        loopback = False
    if parsed_endpoint.username or parsed_endpoint.password or not hostname:
        raise PartnerAPIError("PARTNER_API_URL inválida.")
    if parsed_endpoint.scheme.lower() != "https" and not (parsed_endpoint.scheme.lower() == "http" and loopback):
        raise PartnerAPIError("PARTNER_API_URL deve usar HTTPS.")

    payload = {
        "username": username,
        "apiaccesskey": access_key,
        "requestformat": "JSON",
        "action": action,
    }
    encoded = _encoded_parameters(parameters)
    if encoded:
        payload["parameters"] = encoded
    body = urllib.parse.urlencode(payload).encode("utf-8")
    http_request = urllib.request.Request(
        endpoint,
        data=body,
        headers={
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        method="POST",
    )
    try:
        with urllib.request.urlopen(http_request, timeout=timeout) as response:
            result = json.loads(response.read(2 * 1024 * 1024).decode("utf-8"))
    except urllib.error.HTTPError as error:
        try:
            result = json.loads(error.read(2 * 1024 * 1024).decode("utf-8"))
        except (UnicodeDecodeError, json.JSONDecodeError):
            raise PartnerAPIError(f"API do parceiro respondeu HTTP {error.code}.", uncertain=action == "placeimeiorder") from None
    except (urllib.error.URLError, TimeoutError, UnicodeDecodeError, json.JSONDecodeError) as error:
        raise PartnerAPIError(
            f"Falha de comunicação com a API do parceiro ({type(error).__name__}).",
            uncertain=action == "placeimeiorder",
        ) from None
    if not isinstance(result, dict):
        raise PartnerAPIError("A API do parceiro retornou um formato inesperado.", uncertain=action == "placeimeiorder")
    errors = result.get("ERROR")
    if errors:
        message = errors[0].get("MESSAGE", "Operação recusada pelo parceiro.") if isinstance(errors, list) and errors and isinstance(errors[0], dict) else "Operação recusada pelo parceiro."
        raise PartnerAPIError(str(message)[:200])
    return result


def success_entries(result):
    entries = result.get("SUCCESS")
    if not isinstance(entries, list) or not entries or not all(isinstance(item, dict) for item in entries):
        raise PartnerAPIError("A API do parceiro não confirmou a operação.")
    return entries


def encode_custom_fields(values):
    body = json.dumps(values, ensure_ascii=False, separators=(",", ":")).encode("utf-8")
    return base64.b64encode(body).decode("ascii")


def submit_imei_order(service_id, quantity, fields):
    parameters = {
        "ID": service_id,
        "QNT": quantity,
        "customfield": encode_custom_fields(fields),
    }
    result = request("placeimeiorder", parameters, timeout=60)
    try:
        return success_entries(result)
    except PartnerAPIError as error:
        error.uncertain = True
        raise


def get_imei_order(order_id):
    entries = success_entries(request("getimeiorder", {"ID": order_id}))
    return entries[0]
