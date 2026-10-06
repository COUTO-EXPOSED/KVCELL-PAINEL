# KV CELL OS PREMIUM — ULTIMATE SUPREME V100

Versão V100 consolidada do KV CELL OS PREMIUM para Square Cloud.

## Principais módulos

- Dashboard com filtro global TODOS / LAGOS / MAGÉ
- Ordens de Serviço unificadas: assistência técnica + desbloqueios
- OS técnica completa com cliente, aparelho, IMEI/SN, PIN/padrão, checklist, mapa de avarias, fotos, peças, produtos, custos, técnico, bancada, previsão e aprovação pública
- OS de desbloqueio profissional sem checklist e sem garantia após finalização
- Busca de cliente por início do nome ou telefone; ao selecionar, o ID interno nunca é exibido ao usuário
- Agenda
- Orçamentos com link público e aprovação/recusa
- Precificação
- Garantias
- Controle de Fiado integrado a OS, desbloqueios e vendas, com parcelas e recebimento
- Clientes / CRM / Radar de Recompra
- Técnicos e fornecedores
- Compra e Venda / Vitrine
- Estoque
- Financeiro e lucro
- PDV / vendas
- Catálogo Digital
- Películas / compatibilidade
- Comunidade e área preparada para Messenger
- Serviços e Indicações
- Funcionários / permissões
- Administração / backup
- Chat entre unidades separado da I.A. e dos Logs
- I.A. separada: OpenRouter Free como principal e Gemini como fallback
- Persistência opcional do SQLite via Square Cloud Blob

## IA

Configure no Square Cloud:

```text
OPENROUTER_API_KEY=...
OPENROUTER_MODEL=openrouter/free
OPENROUTER_HTTP_REFERER=https://kvcell.squareweb.app/
```

Gemini fica somente como fallback:

```text
GEMINI_API_KEY=...
GEMINI_MODEL=gemini-2.5-flash
```

A IA continua exigindo `/bot` no endpoint técnico. O frontend da aba I.A. adiciona esse prefixo automaticamente.

## Banco persistente

Para não perder o banco ao publicar outro ZIP, configure:

```text
SQUARE_BLOB_API_KEY=...
SQUARE_BLOB_ACCOUNT_ID=...
SQUARE_BLOB_DB_NAME=kvcell_database
SQUARE_BLOB_PREFIX=kvcell
SQUARE_BLOB_PUBLIC_URL=
KVCELL_DB_ENCRYPTION_KEY=<Fernet key>
KVCELL_DATA_DIR=/application/data
```

Nunca coloque chaves reais no GitHub ou no ZIP.

## Square Cloud

- Porta: 80
- Bind: 0.0.0.0
- Publicação Web habilitada para o domínio squareweb.app

## Testes realizados

- `python -m py_compile app.py`
- `node --check static/app.js`
- health/login
- criação de cliente
- criação de OS técnica
- criação de OS de desbloqueio sem checklist
- busca/seleção de cliente
- fiado e recebimento
- agenda
- técnicos
- fornecedores
- garantias
- comunidade
- indicações
- catálogo
- aprovação pública de OS
- integridade do ZIP
