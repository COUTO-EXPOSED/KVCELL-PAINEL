# KV CELL OS PREMIUM — ULTIMATE SUPREME V500

## Base de evolução
V500 foi construída sobre a V300 como baseline funcional. O objetivo desta versão é avançar sem regressão de navegação: módulos removidos deliberadamente nas versões anteriores (como Plano e Serviços e Indicações) não foram recolocados no menu.

## V500 — adições/fixes principais
- Cliente: busca pelo início do nome ou telefone; seleção sem expor ID interno; Nome/CPF-CNPJ/Telefone preenchidos automaticamente.
- Score do cliente: considera OS técnicas + desbloqueios + vendas.
- OS: ações completas, editar, excluir, copiar link, garantia, finalizar, entregar e status sincronizado com portal público.
- Finalizar Serviço: status FINALIZADO + abertura do WhatsApp com link público.
- Serviço Entregue: checklist de saída em tela clara + status ENTREGUE + sincronização financeira.
- OS técnica: desenho de senha arrastável em 9 pontos e PIN de 4–6 dígitos.
- Desbloqueio: formulário simplificado, sem checklist, sem fotos e SEM GARANTIA.
- Aparelhos + Abandonados: central única, estado Sucata e criação de OS direta.
- Compra e Venda: conexão com aparelho, Vitrine, PDV e criação de OS direta.
- Orçamentos: edição real dos itens, cálculo automático, link público, excluir e aprovado → Gerar OS.
- Fiado: preservada a calculadora V300 de parcelas/frequência e adicionadas as áreas CRM & Cobrança e Crediário / MDM.
- Crediário MDM Android: contrato/aparelho/cliente, parcelas, saldo, vencimento, dias restantes, QR individual, token, eventos, status online e política remota.
- QR MDM: payload URL por padrão; se `MDM_AGENT_APK_URL` estiver configurado, o QR passa a usar o formato de provisionamento Android Device Owner com extras de enrollment.
- Aplicativo Android companion incluído em `android-kvcell-finance-mdm/`.
- ADB / Antivírus: hub profissional, diagnóstico, ficha técnica completa, laudo, controles, tela/segurança, terminal, galeria, recuperação, backup e ferramentas do técnico.
- Portal público de OS e orçamento: visual premium, linha do tempo, aprovação e acompanhamento.

## MDM — limite técnico importante
O painel não usa persistência oculta, bypass de Factory Reset, exploração de vulnerabilidades ou remoção de proteções Android. O bloqueio físico depende de um agente DPC/MDM legitimamente provisionado como Device Owner ou do nível de administração permitido pelo Android. O companion inclui Device Admin e preparação para Device Owner.

## Configuração Square Cloud
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
MDM_AGENT_APK_URL=
```

`MDM_AGENT_APK_URL` é opcional. Quando preenchido com uma URL HTTPS pública para o APK oficial, o QR pode carregar os dados de provisionamento Device Owner. Sem ele, o QR aponta para o portal de enrollment.

## Aplicativo Android
O projeto-fonte está em `android-kvcell-finance-mdm/`.

Fluxo previsto:
1. Instalar o agente oficial.
2. Ler o QR individual.
3. Vincular o token ao aparelho.
4. Sincronizar saldo, vencimento, parcelas e política.
5. Quando legitimamente provisionado como Device Owner, aplicar as políticas administrativas permitidas pelo Android.

O projeto não contém APK pré-compilado nem segredo de produção.

## Validação V500
- Python `py_compile` ✅
- JavaScript `node --check` ✅
- SQLite/migração V300 → V500 ✅
- Login/API local ✅
- Cliente + score OS/desbloqueio ✅
- OS entregue → Financeiro ✅
- Compra → Vitrine ✅
- Fiado com parcelas e cálculo ✅
- MDM → QR PNG → token → consulta financeira ✅
- ZIP íntegro será verificado antes da entrega.

## V500.2
Correções incrementais sobre a V500, sem remoção deliberada de módulos existentes. Inclui reparo de links públicos antigos, redução de contenção SQLite/Blob, MDM transacional com QR de aplicativo/provisionamento, picker de cliente sem sobreposição, PDV avançado e módulo de películas com busca reversa.

### MDM Android
- `MDM_AGENT_APK_URL` habilita QR de provisionamento Android completo.
- Sem essa variável, o QR do aplicativo usa `kvcellmdm://enroll/<token>` e o portal público permanece disponível.
- O agente deve ser provisionado legitimamente como Device Admin/Device Owner conforme as capacidades do Android; o painel não faz bypass de proteções.
