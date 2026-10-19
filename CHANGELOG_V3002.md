# KV CELL OS PREMIUM V3002

- Atualizada a navegação principal para remover Precificação, Funcionários, IA, Crediário/MDM e a aba digital de indicação/comunidade da interface.
- Preservados esquema e registros históricos do banco; não há reset de banco na inicialização.
- Atualizada a versão reportada pelo endpoint de saúde.
- Adicionados controles de editar/excluir em Agenda, Técnicos, Fornecedores e lançamentos do Financeiro; confirmação antes da exclusão.
- Mantidos os fluxos existentes de editar OS, editar desbloqueio e atualizar status; incluída ação de excluir em desbloqueios e OS onde os controles de origem já existem.
- Aplicado polimento visual OLED preto/amarelo, hover, foco, transições, animação de modais/toasts e respeito a prefers-reduced-motion.

## Validação feita
- `node --check static/app.js`
- `python -m py_compile app.py`
- Integridade do ZIP após empacotamento.

## Limites
- Não foi possível testar no ambiente Square Cloud publicado nem em aparelho físico ADB.
- O código preserva endpoints e tabelas históricos de IA/MDM para evitar uma migração destrutiva; a navegação e os atalhos solicitados são removidos da interface, mas isso não equivale à remoção integral do backend.
- A edição de cada recurso depende dos campos permitidos pela API existente. Faça backup do banco antes da implantação.
