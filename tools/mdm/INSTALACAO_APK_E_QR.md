# KV CELL MDM — instalação por ADB ou QR

## Estado deste pacote
O projeto contém o código-fonte Android, mas não contém um APK compilado. O arquivo `KV_CELL_MDM.apk` só será criado após a compilação local com Android SDK e Gradle configurados.

## ADB
1. Instale Android SDK/Platform Tools e Gradle 8.x no computador.
2. Configure `ANDROID_HOME` para o Android SDK e aceite/instale o Android SDK Platform 35 e Build Tools compatíveis.
3. Ative Depuração USB no aparelho e autorize o computador.
4. Execute `tools/mdm/INSTALAR_VIA_ADB.bat`.

O ADB instala o aplicativo como app normal. `adb install` por si só não transforma o aplicativo em Device Owner.

## QR de provisionamento Android Enterprise
Um QR de provisionamento não transporta o APK inteiro dentro da imagem. Ele contém um payload com uma URL HTTPS de download do APK, dados do componente Device Admin e, conforme o fluxo, hashes de verificação. Portanto, antes de gerar o QR é necessário:
- compilar e assinar o APK;
- hospedar o APK em uma URL HTTPS acessível pelo aparelho durante a configuração inicial;
- gerar o payload de provisionamento com os valores e hashes reais do APK;
- usar um aparelho compatível, normalmente restaurado de fábrica, e concluir o fluxo Android Enterprise/Device Owner com autorização do responsável.

Não use um QR com URL/hash de exemplo: os valores devem corresponder ao APK real publicado. Não tente ativar Device Owner silenciosamente em um aparelho já configurado.
