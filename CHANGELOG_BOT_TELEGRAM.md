# KV CELL OS 4000.1 — Bot Telegram integrado

- Bot Telegram executado no mesmo processo do KV CELL OS, com entrada administrativa em `/bot_kv`.
- Banco do bot integrado ao SQLite principal, aproveitando o backup e a persistência criptografada já configurados no OS.
- Registro de usuários, logins, eventos de grupo, gestão de perfis, bloqueios e créditos.
- Categorias e serviços sincronizados com API DHRU Fusion; cálculo de preço por câmbio e margens de perfil.
- Envio de pedidos a serviços do parceiro com referência, consulta de status e estorno local de recusas.
- PIX Asaas com QR Code, webhook autenticado e liberação idempotente de créditos.
- Painel de logs ao vivo, histórico de pedidos/pagamentos e status de integrações.
- Credenciais mantidas exclusivamente nas variáveis de ambiente do servidor.
