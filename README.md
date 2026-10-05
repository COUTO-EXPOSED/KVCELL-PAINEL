# KV CELL OS PREMIUM — Ultimate V4

Sistema web próprio da KV CELL para LAGOS e MAGÉ.

## Segurança
- Nenhuma chave da IA fica no código ou no frontend.
- Configure `GEMINI_API_KEY` ou `GOOGLE_API_KEY` somente nas variáveis de ambiente da Square Cloud.
- Configure `ADMIN_EMAIL` e `ADMIN_PASSWORD` na Square Cloud.
- O `.env` real não deve ser enviado ao GitHub.

## IA
- Avaliação de aparelho usado.
- Sugestão de preço/margem.
- Sugestão assistiva para compatibilidade de películas.
- A IA nunca deve ser tratada como cotação oficial ou confirmação física de película.

## Películas
Módulo de compatibilidade pesquisável por marca, modelo, alias, código master e grupo. A base inicial é um catálogo interno; compatibilidade física deve ser confirmada com o lote/fornecedor.

## Square Cloud
- Publicação Web: ativada.
- `MAIN=app.py`.
- Porta: `PORT` (fallback 80).
- `0.0.0.0`.
- `AUTORESTART=true`.

## Primeiro acesso
Use as credenciais definidas nas variáveis `ADMIN_EMAIL` e `ADMIN_PASSWORD`.
