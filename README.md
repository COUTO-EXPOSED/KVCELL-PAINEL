# KV CELL OS PREMIUM — ULTIMATE SUPREME V1100.0

> V1100.0 é uma evolução aditiva sobre a base V700. Nenhum módulo funcional existente foi removido.

## V810.0 — evolução aplicada
- **Crediário / MDM:** portal público individual por aparelho com saldo, parcelas, vencimentos, status, dados técnicos básicos e botão de pagamento/PIX.
- **Agente MDM:** heartbeat passa a atualizar marca, modelo, nome do aparelho, Android e serial quando o agente fornece esses dados.
- **ADB:** conexão prioriza a ponte ADB real; WebUSB continua como seletor/fallback. Isso evita o falso estado em que o USB é selecionado mas nenhuma sessão ADB existe.
- **ADB & Antivírus:** preservada a triagem heurística existente; a camada V810 deixa a análise dependente de um ADB autorizado e sem rotinas de bypass.
- **Visual:** camada adicional inspirada no estilo do Tech OS Pro fornecido, com Poppins e cartões/painéis de referência, sem substituir a identidade KV CELL preto/amarelo.
- **Compatibilidade:** camada JS V810 sobrescreve apenas pontos instáveis, mantendo as implementações V500/V520/V600/V700 no arquivo para evitar regressão.
- **Square Cloud:** `squarecloud.app`, `Procfile` e `start.sh` permanecem compatíveis.

## MDM / Portal do cliente
Cada crediário possui uma URL no formato `/public/mdm/portal/<token>`. O portal não exige conta e não executa pagamento diretamente: ele abre o link de pagamento configurado ou apresenta o PIX copia-e-cola. O token funciona como credencial de acesso e deve ser tratado como privado.

## Limites de segurança
O sistema não contorna FRP, senha, bootloader, Device Owner existente ou outras proteções do Android. O bloqueio remoto só é aplicado pelo agente legitimamente provisionado como Device Owner.

## Publicação
Suba o conteúdo deste ZIP no Square Cloud como o projeto V810.0. Configure `ADMIN_EMAIL`, `ADMIN_PASSWORD` e, se for usar QR de provisionamento, `MDM_AGENT_APK_URL`.

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

## ADB & Antivírus — ponte local V502
A aba ADB & Antivírus usa uma ponte local para transformar os controles de bancada em operações reais. O Square Cloud não consegue acessar o USB físico do PC da bancada diretamente.

Arquivos:
- `tools/kvcell_bridge.py`
- `tools/INICIAR_KV_CELL_BRIDGE.bat`
- `tools/README_BRIDGE.md`

Porta local padrão: `127.0.0.1:17321`.


## V520 — Crediário MDM / Bloqueio
A versão V520 concentra a evolução do Crediário MDM: cronograma de parcelas, recebimento, bloqueio automático por atraso, heartbeat do agente e histórico por aparelho. A intervenção é exclusiva do módulo MDM.


## V810.0 — UX premium + ADB/MDM
A V810.0 incorpora a linguagem visual do material Tech OS PRO fornecido, adaptada à identidade KV CELL preto/amarelo, sem substituir os módulos existentes.

Inclui:
- dashboard e componentes com Poppins local;
- ações de orçamento: abrir, copiar link e WhatsApp;
- links de acompanhamento público de OS;
- bridge ADB com suporte a Private Network Access;
- entrypoint do servidor compatível com `MAIN=app.py`;
- projeto-fonte do agente Android com correção de compilação;
- script de build do APK em `tools/mdm/BUILD_KV_CELL_MDM.bat`.

## V1000.0 — ADB e MDM
A V1000 adiciona uma camada de conexão ADB que não tenta repetidamente acessar o localhost quando a ponte ainda não foi verificada. No Windows, use `tools\INICIAR_KV_CELL_BRIDGE.bat` ou `tools\bridge\INSTALAR_BRIDGE_AUTO.bat`.

O painel Square Cloud não consegue iniciar o processo local por conta das restrições de segurança do navegador. A ponte é necessária para ADB real e instalação do APK via ADB.
