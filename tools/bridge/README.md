# KV CELL ADB Bridge — V1000.0

O painel Square Cloud é hospedado na nuvem e **não pode iniciar um processo no Windows do técnico**. Por isso o ADB real usa uma pequena ponte local em `127.0.0.1:17321`.

## Primeira instalação
1. Tenha Python 3 e Android SDK Platform Tools (`adb`) instalados no PC.
2. Execute `INSTALAR_BRIDGE_AUTO.bat` uma vez.
3. Desbloqueie o Android, ative Depuração USB e aceite a chave RSA.
4. No painel KV CELL, abra **ADB & Antivírus → Testar ponte**.
5. Depois use **Conectar ADB**.

O instalador cria uma tarefa do Windows para iniciar a ponte no login. Se a política do Windows bloquear a tarefa, use `INICIAR_BRIDGE.bat` manualmente.

## Diagnóstico
`TESTAR_BRIDGE.bat` verifica a porta `17321` e executa `adb devices -l`.

A ponte não remove FRP, senha, bootloader ou outras proteções. Ela só opera sobre aparelhos que o ADB já autorizou.
