# KV CELL ADB Bridge

A aba **ADB & Antivírus** do KV CELL OS PREMIUM roda hospedada no Square Cloud. Um servidor web remoto não consegue enxergar diretamente o USB do computador da bancada. Por isso esta versão inclui uma ponte local autorizada.

## Windows
1. Instale o **Android SDK Platform Tools** e confirme `adb devices` no Prompt de Comando.
2. Conecte o aparelho por USB, ative Depuração USB e aceite a autorização RSA.
3. Execute `INICIAR_KV_CELL_BRIDGE.bat`.
4. Deixe a janela da ponte aberta enquanto usa a aba ADB.
5. No painel KV CELL, clique em **Conectar aparelho** e selecione o dispositivo.

A documentação oficial do Android confirma que `adb devices` é usado para validar a conexão e que a depuração USB exige autorização do computador no aparelho.

## Segurança
A ponte escuta somente em `127.0.0.1:17321`. Ela não expõe uma porta ADB para a internet e possui uma lista fechada de comandos/ações. A análise de antivírus é uma **triagem heurística**, não uma certificação de malware.
