# KV CELL OS + Bot Telegram — implantação única

O bot está integrado ao mesmo processo Python do KV CELL OS. Não envie o ZIP antigo do bot como uma segunda aplicação. O painel do bot usa a autenticação administrativa existente e fica disponível em:

`https://kvcell.squareweb.app/bot_kv`

## 1. Variáveis necessárias no Square Cloud

Configure em **Environment Variables** da aplicação KV CELL OS:

| Variável | O que colocar |
|---|---|
| `TELEGRAM_BOT_TOKEN` | Token do bot criado no BotFather |
| `KVCELL_BOT_LOG_CHAT_ID` | ID do grupo privado de auditoria, normalmente começa com `-100` |
| `ASAAS_API_KEY` | Chave de API da conta Asaas que receberá os PIX |
| `ASAAS_WEBHOOK_TOKEN` | Segredo longo, aleatório, criado por você e igual ao configurado no webhook Asaas |
| `PARTNER_API_URL` | `https://server1.unlockingclean.com/api/index.php` (confirme com o parceiro) |
| `PARTNER_API_USER` | Usuário/e-mail de API fornecido pelo servidor parceiro |
| `PARTNER_API_KEY` | Chave DHRU/API fornecida pelo servidor parceiro |

Variáveis complementares já usadas pelo OS:

| Variável | Finalidade |
|---|---|
| `ADMIN_EMAIL` | E-mail de login do administrador do KV CELL OS |
| `ADMIN_PASSWORD` | Senha de login do administrador do KV CELL OS |
| `TELEGRAM_CHAT_ID` | Grupo de auditoria geral do OS; pode repetir o ID de `KVCELL_BOT_LOG_CHAT_ID` |
| `KVCELL_DATA_DIR` | Diretório persistente do banco; mantenha o valor já usado pela sua aplicação |
| `SQUARE_BLOB_API_KEY`, `SQUARE_BLOB_ACCOUNT_ID`, `SQUARE_BLOB_DB_NAME`, `SQUARE_BLOB_PREFIX`, `KVCELL_DB_ENCRYPTION_KEY` | Persistência criptografada existente do KV CELL OS, caso já esteja habilitada |

**Não publique o token do Telegram, a chave Asaas, o segredo do webhook ou a chave DHRU em mensagens, prints ou no JavaScript do site.** Este pacote só lê essas credenciais no servidor e o painel mostra apenas se estão configuradas.

## 2. Webhook Asaas

Cadastre na conta Asaas o webhook:

`https://kvcell.squareweb.app/webhooks/asaas`

Configure o mesmo valor secreto em `ASAAS_WEBHOOK_TOKEN` e no campo de autenticação do webhook Asaas. O endpoint rejeita chamadas se o segredo não estiver configurado ou não corresponder. Eventos `PAYMENT_RECEIVED` e `PAYMENT_CONFIRMED` creditam o usuário uma única vez.

## 3. Bot e grupo

1. Crie o bot no BotFather e configure o token em `TELEGRAM_BOT_TOKEN`.
2. Adicione o bot ao grupo privado de auditoria e permita que ele envie mensagens.
3. Coloque o ID do grupo em `KVCELL_BOT_LOG_CHAT_ID`.
4. Inicie o bot no Telegram com `/start` para testar o cadastro.
5. Entre no KV CELL OS como administrador e abra **Bot Telegram** ou acesse `/bot_kv`.
6. Use **Testar integrações** para validar token, grupo, Asaas e servidor parceiro.
7. Use **Sincronizar catálogo do servidor** para importar categorias e serviços do fornecedor.

Se havia outro processo/painel usando `getUpdates` com o mesmo token, desligue a instância antiga antes de ativar esta versão. O Telegram só permite um consumidor de polling por token.

## 4. Funções integradas

- Cadastro automático de usuários que iniciam o bot.
- Bloqueio/desbloqueio e perfil de preço por usuário.
- Categorias e serviços sincronizados pela API DHRU.
- Preço calculado por custo do fornecedor, câmbio USD/BRL e margem para Cliente Fixo, Unlocker e Logista; também aceita preço fixo manual.
- Coleta dos campos exigidos pelo serviço e envio de pedido DHRU para serviços mapeados.
- Acompanhamento de status do pedido no fornecedor; recusa gera estorno único.
- Serviços sem ID do fornecedor ficam em `AGUARDANDO_MANUAL`; podem ser concluídos ou estornados no painel.
- Recarga PIX Asaas, QR/copia-e-cola e crédito automático por webhook autenticado.
- Extrato imutável de lançamentos de créditos, histórico de pedidos, pagamentos, logs e notificações ao grupo.
- Logs operacionais atualizados no painel em intervalos de 5 segundos.

## 5. Limite de responsabilidade da integração parceira

A integração usa o formato público DHRU Fusion (`accountinfo`, `imeiservicelist`, `serverservicelist`, envio de pedido e consulta de status). A sincronização e a validação da conta são operações de leitura. Um pedido real enviado ao fornecedor pode consumir saldo da conta parceira. Faça a primeira validação em um serviço de baixo custo autorizado pelo parceiro e confirme os campos exigidos no cadastro daquele serviço.

O projeto fornecido não contém usuário/chave válidos do parceiro nem credenciais Asaas/Telegram. Portanto, o pacote entrega o fluxo implementado, mas a operação externa só ficará online depois que você inserir as credenciais reais e o parceiro confirmar acesso/serviços.

## 6. Atualização

1. Faça backup do KV CELL OS atual.
2. Pare a aplicação antes de substituir os arquivos.
3. Envie o ZIP integrado como atualização da aplicação que já atende `kvcell.squareweb.app` (não crie outro projeto Square Cloud).
4. Preserve as variáveis de ambiente que já estão configuradas.
5. Configure as novas variáveis listadas acima e reinicie.
6. Teste login do OS, `/bot_kv`, `/start`, teste das integrações e sincronização do catálogo.

O bot e o OS compartilham o mesmo arquivo SQLite persistente `kvcell.db`, então o backup e a rotina de persistência criptografada existentes do KV CELL OS também abrangem os dados do bot.
