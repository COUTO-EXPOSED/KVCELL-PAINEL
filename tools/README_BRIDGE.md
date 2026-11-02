# KV CELL ADB + MDM Bridge

A aba ADB do painel hospedado no Square Cloud **não consegue acessar o USB diretamente**. O computador da bancada precisa executar esta ponte local em `127.0.0.1:17321`.

## ADB
1. Instale Android SDK Platform Tools.
2. Confirme `adb devices` no CMD.
3. Conecte o Android por USB, ative Depuração USB e aceite a chave RSA.
4. Execute `tools\INICIAR_KV_CELL_BRIDGE.bat`.
5. Deixe a janela aberta enquanto usa o painel.

## MDM por ADB
A ponte agora possui rotas locais para **instalar o APK e tentar o provisionamento como Device Owner** em um aparelho autorizado. Isso não burla o Android: `dpm set-device-owner` é usado apenas quando o próprio Android permite o provisionamento. Em aparelhos já provisionados, pode ser necessário restaurar o aparelho antes do Device Owner.

Comandos suportados pela ponte:
- `GET /health`
- `GET /devices`
- `GET /mdm/status`
- `POST /mdm/install`
- `POST /mdm/provision` com `{"token":"TOKEN"}`

O APK esperado é `tools\mdm\KV_CELL_MDM.apk`, ou pode ser definido por `KVCELL_MDM_APK_PATH`.

A documentação oficial do Android confirma `adb shell dpm set-device-owner COMPONENT` para testes/provisionamento e que Device Owner é o nível de administração mais forte; o usuário não pode simplesmente desativá-lo como um administrador comum. citeturn0search0turn0search2
