# KV CELL ULTIMATE SUPREME V300

Atualização do KV CELL OS PREMIUM com foco em fidelidade operacional às telas de referência enviadas pelo cliente, analytics e vínculo real entre Técnicos e Ordens de Serviço.

## V300 — principais mudanças

- Remove da navegação lateral: Meu Plano, Catálogo Digital e Serviços e Indicações.
- Controle de Fiado remodelado no padrão da referência:
  - Promissórias / CRM + Cobrança;
  - Total Geral, A Receber, Recebido e Vencido;
  - gráfico de distribuição por status;
  - evolução mensal;
  - busca de promissórias;
  - Nova Promissória com cliente, total, entrada, parcelas, frequência, primeiro vencimento, descrição e produtos;
  - detalhes e histórico de pagamentos;
  - relatório CSV e impressão.
- Clientes agora possui contadores, ticket médio, distribuição por recorrência e ranking visual.
- Financeiro agora possui KPIs de entradas, saídas, lucro e saldo, evolução de 14 dias e distribuição por categoria.
- Radar de Recompra agora possui segmentação, contadores, distribuição visual e ranking de potencial de recompra.
- Técnicos agora possuem score, serviços efetuados, ganhos totais, lucro, concluídos e ranking.
- Ao cadastrar um técnico, a Nova OS permite selecionar o técnico cadastrado. A OS grava `technician_id` e o nome; os indicadores são calculados pelo vínculo real. Registros antigos também podem ser reconhecidos pelo nome.
- ADB & Antivírus deixou de ser uma tela vazia e ganhou três áreas de bancada:
  - Ant Virus;
  - ADB & Diagnóstico Android;
  - iPhone / iPad;
  com conexão USB, instruções de preparo e status.
- Desbloqueio continua sem checklist de entrada e sem garantia, conforme solicitado.
- Cliente na OS continua sendo selecionado pelo início do nome ou telefone, sem exibir ID interno.

## Persistência / Square Cloud

O projeto mantém o SQLite em `KVCELL_DATA_DIR` (padrão `/application/data`) e a estrutura de sincronização opcional com Square Cloud Blob.

## Variáveis de ambiente

```text
PORT=80
ADMIN_EMAIL=admin@kvcell.local
ADMIN_PASSWORD=troque-esta-senha
OPENROUTER_API_KEY=
OPENROUTER_MODEL=openrouter/free
OPENROUTER_HTTP_REFERER=https://kvcell.squareweb.app/
GEMINI_API_KEY=
GEMINI_MODEL=gemini-2.5-flash
SQUARE_BLOB_API_KEY=
SQUARE_BLOB_ACCOUNT_ID=
SQUARE_BLOB_DB_NAME=kvcell_database
SQUARE_BLOB_PREFIX=kvcell
SQUARE_BLOB_PUBLIC_URL=
KVCELL_DB_ENCRYPTION_KEY=
KVCELL_DATA_DIR=/application/data
```

## Validação

- Python `py_compile`: OK
- JavaScript `node --check`: OK
- API smoke V300: OK
- ZIP integrity: verificar antes do deploy

Não coloque chaves de API reais no GitHub nem no frontend.


## V300 — restauração operacional
- OS técnica voltou a ter botões de status na própria listagem; cada alteração atualiza o mesmo link público do cliente.
- Botão direto de Garantia em cada OS técnica.
- OS de desbloqueio separada, sem IMEI, número de série, operadora original, credenciais de conta, PIN/padrão ou fotos no formulário.
- OS técnica mantém fotos e ganhou seleção de senha por Desenho ou PIN de 4–6 dígitos com grade de 9 bolinhas.
- Técnico continua vindo do cadastro de Técnicos e fica vinculado por `technician_id`.
- Aparelhos e Abandonados foram unificados em uma única central, com estados rápidos na própria tabela.
- As demais funções V101 foram preservadas; V300 adiciona os fluxos acima em vez de remover recursos úteis.
