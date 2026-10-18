# KV CELL OS PREMIUM V2000.1 — pacote de atualização

Data: 18/10/2026

## Alterações desta entrega

- **OS com múltiplos aparelhos:** formulário de nova OS permite adicionar linhas de aparelhos extras (marca, modelo, IMEI e série) vinculadas ao mesmo cliente e ao mesmo número de OS.
- **Acompanhamento público:** o link existente da OS passa a exibir os aparelhos extras registrados em `details_json`; tokens, rotas e dados antigos continuam aceitos.
- **Técnicos no menu:** a tela de gestão de técnicos fica acessível no menu Gestão, mantendo o cadastro existente, seleção de técnico por registro e estatísticas de produtividade já presentes no projeto-base.
- **Layout responsivo:** estilos adicionais para o editor de aparelhos extras em desktop e celular, mantendo a paleta preta/amarela KV CELL.
- **Compatibilidade do banco:** nenhuma tabela foi apagada ou recriada; a lista adicional usa o campo JSON `details_json` já existente. Não há migração destrutiva.

## Arquivos alterados

- `static/app.js`
- `static/app.css`
- `app.py`
- `CHANGELOG_V2000.1.md`
- `README_V2000.1.md`

## Validações executadas

- `python -m py_compile app.py tools/kvcell_bridge.py` — PASSOU.
- `node --check static/app.js` — PASSOU.
- `python tools/smoke_test.py` — PASSOU.
- Integridade do ZIP de entrega — verificada após empacotamento.

## Importante

Esta versão é um pacote de atualização sobre o projeto-base fornecido, não uma garantia de que todos os serviços externos (Square Cloud Blob, APIs de IA, agente APK/MDM, USB/WebUSB/ADB e WhatsApp) estejam configurados no ambiente de produção. Esses serviços dependem das respectivas variáveis de ambiente, permissões, builds e dispositivos. Faça backup antes de substituir o deploy e teste em ambiente de homologação quando possível.
