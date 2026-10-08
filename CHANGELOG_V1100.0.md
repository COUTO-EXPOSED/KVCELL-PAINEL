# KV CELL OS PREMIUM — V1100.0

## ADB WebUSB — caminho principal
- A conexão ADB agora usa WebUSB diretamente no navegador, seguindo a arquitetura técnica encontrada no artefato Tech OS Pro fornecido pelo usuário.
- O navegador abre o seletor USB, estabelece o transporte ADB e executa o handshake/autenticação ADB.
- A ponte `127.0.0.1:17321` permanece no projeto como compatibilidade/fallback, mas não é mais o caminho principal.
- Terminal e leituras diagnósticas básicas usam a sessão WebUSB quando disponível.
- Instalação de APK por ADB usa ADB Sync na sessão WebUSB.

## MDM / Android Enterprise
- Corrigido o namespace do aplicativo Android para coincidir com os arquivos Java e o `DeviceAdminReceiver`.
- QR de provisionamento agora usa o componente correto `br.com.kvcell.finance.mdm/br.com.kvcell.mdm.KVCellDeviceAdminReceiver`.
- O agente lê `enrollment_token` e `server` do bundle oficial de provisionamento Android Enterprise.
- `MDM_AGENT_APK_URL` continua sendo a URL pública HTTPS do APK para o QR de provisionamento.
- Mantido heartbeat, portal, parcelas, política e histórico existentes.

## Compatibilidade
- Nenhum módulo antigo de OS, orçamento, clientes, financeiro, PDV, fiado, login ou MDM foi removido.
- A camada V1100 foi adicionada ao final do JavaScript para preservar compatibilidade com V500/V520/V600/V700/V810/V1000.

## Validação
- JavaScript syntax: PASS
- Python syntax: PASS
- Smoke test HTTP/login/MDM/portal/orçamento/OS: PASS
- QR Device Owner payload: PASS
- Servidor de arquivos estáticos: PASS
- Build físico do APK: não executado neste ambiente por ausência de Android SDK/Gradle.
