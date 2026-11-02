# KV CELL MDM V1100.0

## Provisionamento Android Enterprise / Device Owner

1. Gere o APK oficial `KV_CELL_MDM.apk`.
2. Publique-o em uma URL HTTPS pública e coloque essa URL em `MDM_AGENT_APK_URL`.
3. No painel, abra o Crediário / MDM e gere o QR de **Provisionamento Android Enterprise**.
4. Em um aparelho compatível e no fluxo de configuração inicial, leia o QR e confirme o gerenciamento.
5. O agente recebe `enrollment_token` e `server` pelo bundle oficial de provisioning e inicia o heartbeat.

O agente não tenta remover FRP, senha, bootloader ou Device Owner de terceiros. O Device Owner só é assumido pelo fluxo legítimo de provisionamento Android Enterprise.
