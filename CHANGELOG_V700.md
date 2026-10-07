# KV CELL OS PREMIUM — V700

## ADB & Antivírus
- Corrigido o fluxo do botão `FORÇAR ADB`: ele não chama mais `127.0.0.1:17321/health` imediatamente quando WebUSB está disponível.
- O primeiro caminho agora é o seletor USB nativo do Chrome/Edge.
- A ponte ADB local permanece como caminho opcional para comandos ADB reais, terminal, diagnóstico, screenshot e instalação do APK.
- Ponte offline não gera mais `Failed to fetch` como comportamento normal do botão USB.
- Ações que realmente precisam da ponte informam claramente que ela deve ser iniciada.

## MDM
- MDM agora aparece como módulo próprio na barra lateral: `Crediário / MDM`.
- Mantido o fluxo de parcelas, saldo, vencimentos, heartbeat e política remota autorizada.
- QR individual renomeado para `QR ADB FORCE APP` conforme solicitação visual, com explicação de que o QR é matrícula e não bypass.
- Criada/organizada a ação `INJETAR O APP MDM KV CELL PELO ADB DO CELULAR`.
- Mantido QR de provisionamento Android Enterprise quando `MDM_AGENT_APK_URL` estiver configurado.
- Nenhum fluxo tenta remover proteções do Android ou executar bypass de Device Owner.

## Compatibilidade
- Base preservada em cima da V600.2.
- Alterações concentradas em ADB/Antivírus/MDM/navegação do MDM.
