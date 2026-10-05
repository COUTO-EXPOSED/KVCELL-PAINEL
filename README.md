# KV CELL OS PREMIUM — V20 ULTIMATE

Backend/frontend preparado para Square Cloud.

## V20
- Custos de material, mão de obra e extras em OS e desbloqueios.
- Custo total e lucro calculados automaticamente.
- Entradas e custos vinculados ao Financeiro sem duplicidade ao editar.
- Status operacionais para OS e desbloqueios.
- Acompanhamento público por link com linha do tempo.
- Botões de visualização, edição, impressão/PDF, link, 2ª via térmica, WhatsApp, garantia, finalizar e excluir.
- Garantia vinculada à OS/desbloqueio original.
- Chat normal não chama IA.
- IA somente quando a mensagem começa com `/bot`.
- BOT e LOG são identificadores de mensagens/eventos, não botões do topo.
- Undo de exclusão restaura o registro quando possível e recompõe os lançamentos financeiros vinculados.
- Facebook/Messenger permanece preparado como recurso futuro.

## Segurança
As chaves Gemini são lidas exclusivamente das variáveis de ambiente `GEMINI_API_KEY` ou `GOOGLE_API_KEY`.


## V21 — persistência e canais
- Cliente: busca por início do nome ou telefone; nenhum ID de cliente/aparelho é exigido ao usuário.
- Chat Unidades: comunicação LAGOS ↔ MAGÉ separada.
- Perguntar à I.A.: canal exclusivo; somente perguntas explícitas recebem Gemini.
- Logs: canal separado de auditoria/eventos.
- Persistência: SQLite criptografado sincronizado com Square Cloud Blob quando `SQUARE_BLOB_API_KEY`, `SQUARE_BLOB_ACCOUNT_ID` e `KVCELL_DB_ENCRYPTION_KEY` estão configurados. O Blob Storage da Square Cloud suporta SQLite leve como armazenamento persistente.
- Gemini padrão: `gemini-2.5-flash`; mantenha a chave somente nas variáveis de ambiente do Square Cloud.
