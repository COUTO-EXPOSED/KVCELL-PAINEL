# KV CELL OS V1100.1 — correções ADB / diagnóstico

- Expõe o adaptador do bundle WebUSB/ADB para a aplicação vanilla, com handshake ADB autenticado.
- Captura de tela usa `screencap` via sessão ADB quando disponível.
- A varredura de segurança exibe triagem heurística explícita, sem afirmar que é antivírus certificado.
- Adiciona lista Debloat limitada a pacotes de terceiros (`pm list packages -3`) e remoção manual confirmada.
- Adiciona leitor orientativo de arquivos Apple panic-full `.ips`/`.txt` e exportação de relatório.

## Limitações

- WebUSB exige Chrome/Edge em contexto seguro e autorização de depuração USB no Android.
- Comandos de reinicialização, screenshot e package manager dependem do Android/ROM e do estado da sessão ADB.
- O analisador panic-full usa assinaturas textuais simples; não substitui diagnóstico forense.
- O APK KV CELL MDM não está incluído: o projeto Android precisa ser compilado com Android SDK/Gradle.
