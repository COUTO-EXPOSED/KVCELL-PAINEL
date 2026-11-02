# KV CELL MDM V810

## Build
Use `BUILD_KV_CELL_MDM.bat` em uma máquina com Android SDK + Gradle/Android Studio.
O APK de debug será copiado para `tools/mdm/KV_CELL_MDM.apk`.

## Instalação
Com o celular autorizado no ADB:
1. Inicie `tools/INICIAR_KV_CELL_BRIDGE.bat`.
2. Abra a aba ADB & Antivírus.
3. Conecte o aparelho.
4. Em Crediário/MDM, use **Instalar MDM pelo ADB** ou selecione o APK.
5. Device Owner continua sujeito às regras oficiais do Android.

## QR de provisionamento
Depois de publicar o APK em uma URL HTTPS acessível pelo aparelho, configure:
`MDM_AGENT_APK_URL=https://SEU-DOMINIO/KV_CELL_MDM.apk`

O painel então consegue gerar o payload de provisionamento legítimo.
