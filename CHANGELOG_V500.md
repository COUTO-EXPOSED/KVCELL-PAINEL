# KV CELL ULTIMATE SUPREME V500 — CHANGELOG

## Regra de evolução
V300 é a base visual/funcional. V500 foi tratada como uma camada aditiva: não reintroduz Plano, Serviços e Indicações no menu e não troca a navegação V300 por uma estrutura anterior.

## Corrigido/adicionado
- Cliente sem ID interno visível.
- Score considera OS técnicas + desbloqueios + vendas.
- Ações de OS: visualizar, editar, excluir, link, garantia, finalizar, entregar e status.
- Finalização abre WhatsApp e atualiza portal.
- Entrega exige checklist e grava Financeiro.
- Senha da OS: desenho por ponteiro/touch e PIN 4–6.
- Desbloqueio sem checklist/fotos/garantia.
- OS direta de aparelho cadastrado, abandonado e compra.
- Sucata como estado real.
- Compra/Vitrine/PDV/OS conectados.
- Orçamento com itens editáveis, total automático e Gerar OS após aprovação.
- Fiado V300 preservado com calculadora de frequência/parcelas; CRM & Cobrança e MDM adicionados.
- Crediário MDM Android com QR/token/eventos/política/financeiro.
- QR pode ser portal ou Android Device Owner provisioning quando `MDM_AGENT_APK_URL` estiver configurado.
- Companion Android com Device Admin, preparação Device Owner e sincronização periódica.
- ADB/Antivírus ampliado com hub, ficha técnica, laudo e ferramentas.
- Portal público de OS/orçamento aprimorado.

## Segurança
Não implementa bypass de FRP, bootloader, Factory Reset Protection, persistência oculta ou exploração de vulnerabilidades. O bloqueio MDM real exige provisionamento administrativo legítimo compatível com o Android.

V500.2 — correções cirúrgicas e avanço sem regressão
- Corrigidos links públicos de OS/Orçamentos/Desbloqueios antigos sem public_token; a migração repara registros existentes e o listador faz recuperação automática.
- Reduzida a contenção do SQLite com busy_timeout e checkpoint WAL PASSIVE; sincronização Blob ficou mais espaçada para evitar timeouts intermitentes.
- Crediário/MDM: criação transacional, retry no frontend, QR do aplicativo, QR de provisionamento quando MDM_AGENT_APK_URL está configurado, ações de bloqueio/liberação/detalhes e vínculo ao Fiado.
- Customer picker deixou de sobrepor os campos seguintes; resultados passam a ocupar o fluxo normal do formulário.
- Corrigida a consistência visual de controles legados que apareciam como quadrados brancos isolados.
- PDV V500.2 com vitrine em cards, busca, carrinho, cliente, desconto, pagamento e sincronização Compra/Vitrine/Financeiro.
- Películas V500.2 com busca direta/reversa, grupos/master, confiança e base ampliada por pesquisa web (VivaCell, Tabela Películas, Ordita/FilmFinder), sempre exigindo confirmação física para relações não confirmadas.
- Sentry ERR_BLOCKED_BY_CLIENT não é gerado pelo KV CELL: é bloqueio do navegador/extensão sobre o endpoint de telemetria.
