KV CELL • BOT TELEGRAM

Este bot é iniciado em modo polling pelo aplicativo principal `app.py` quando
`TELEGRAM_TOKEN` está configurado. Publique o projeto completo do painel; não
publique esta pasta como um segundo serviço com um banco de dados diferente.

PAINEL ADMINISTRATIVO
- URL: https://kvcell.squareweb.app/bot_kv
- A autenticação usa a sessão de administrador do painel KV CELL.
- Configure os segredos nas variáveis do ambiente Square Cloud e mantenha
  BOT_DATABASE_PATH apontando para armazenamento persistente.
- O antigo painel web separado `/admin?p=...` foi desativado.

VARIÁVEIS
- TELEGRAM_TOKEN: token do BotFather.
- TELEGRAM_GROUP_ID: grupo de controle/auditoria.
- TELEGRAM_LOG_CHAT_ID: opcional, grupo de auditoria separado.
- MERCADOPAGO_ACCESS_TOKEN: Access Token privado da aplicação Mercado Pago.
- MERCADOPAGO_WEBHOOK_SECRET: chave secreta das notificações Webhooks do Mercado Pago.
- MERCADOPAGO_WEBHOOK_URL: URL pública de notificação do pagamento.
- PARTNER_API_URL, PARTNER_API_USER, PARTNER_API_KEY: acesso ao fornecedor.
- BOT_DATABASE_PATH: banco persistente exclusivo do bot.

Configure a notificação Webhooks de pagamentos do Mercado Pago em:
https://kvcell.squareweb.app/webhooks/mercadopago

O webhook valida a assinatura e consulta o status diretamente na API antes de liberar créditos. O bot solicita o e-mail do cliente para criar o Pix.

Os registros de pedidos permanecem pendentes até que o formato oficial da API
do parceiro seja documentado e validado. Não envie payloads experimentais. O
grupo recebe cadastros, logins, pedidos, pagamentos e movimentações de crédito,
mas nunca recebe os valores dos campos enviados pelo usuário no formulário.
Um administrador pode revelar os campos de um pedido individual no painel, e
essa consulta também fica registrada.

Instalação local:
  pip install -r requirements.txt
  python app.py
