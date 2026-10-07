# KV CELL OS ULTIMATE SUPREME V600.1

## Correção real ADB / USB
- Restaurada a seleção USB via WebUSB.
- Restaurada a listagem de aparelhos ADB reais via ponte local.
- Removido o aparelho Redmi fictício do fluxo real de conexão.
- A aba ADB agora mostra estado offline/online e aparelhos retornados por `adb devices -l`.
- Bridge /health agora inclui lista de dispositivos e autodetecta ADB em caminhos comuns do Windows.
- BAT da bridge localiza Platform-Tools automaticamente.

## MDM
- Mantido o fluxo existente de Crediário/MDM.
- Instalação por ADB usa APK local configurado na bridge.
- Provisionamento Device Owner continua sujeito às regras do Android; não há bypass de proteção.
- App MDM abre o link de pagamento quando fornecido pelo servidor.
- App continua mostrando saldo, vencimento, dias e parcelas restantes e sincronizando a política.

## Integridade
- Nenhum módulo fora de ADB/Antivírus/MDM foi removido.
