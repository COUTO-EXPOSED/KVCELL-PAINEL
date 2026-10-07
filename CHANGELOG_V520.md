# KV CELL OS PREMIUM — V520 Crediário MDM / Bloqueio

Intervenção exclusiva no módulo Crediário / MDM. Os demais módulos do V502 foram preservados.

## Correções
- Corrigido o cadastro MDM que podia retornar “Não foi possível criar o crediário MDM agora”.
- Validação de cliente, unidade, valores, parcelas e vencimento antes do INSERT.
- Transação única para dispositivo + evento + cronograma de parcelas.
- SQLite com timeout/WAL/busy_timeout para reduzir falhas concorrentes.

## Novo núcleo MDM
- Cronograma individual em `mdm_installments`.
- Saldo, parcelas restantes, vencimento e atraso calculados pelo servidor.
- Tolerância configurável após vencimento.
- Bloqueio automático por atraso quando `auto_lock_enabled=1`.
- Ações manuais: bloquear, liberar e pausar.
- Recebimento de pagamento pelo painel.
- Sincronização opcional com `fiado_accounts` quando o aparelho estiver vinculado a um fiado.
- Histórico de eventos por aparelho.
- Heartbeat real do agente com bateria, versão e política retornada.
- QR de aplicativo e QR de provisionamento legítimo.

## Agente Android
- Versão 1.1.0.
- Heartbeat POST real a cada sincronização.
- Primeira sincronização imediata ao abrir o aplicativo.
- Device Owner aplica bloqueio com `lockNow()`, impede desinstalação do agente e configura informação de proprietário na tela de bloqueio.
- Pagamento/regularização remove a política de bloqueio no próximo heartbeat.
- Manifest usa explicitamente `br.com.kvcell.mdmd.KVCellDeviceAdminReceiver`.

## Limite técnico importante
O painel não contorna FRP, senha, bootloader, Secure Lock ou outras proteções do Android. O bloqueio físico depende de provisionamento legítimo como Device Owner e das APIs oficiais do Android.

## V520.5 — MDM SQLite migration hotfix
- Corrigida falha de boot `sqlite3.OperationalError: no such column: device_id` causada por bancos V500/V520 antigos com `mdm_events` sem `device_id`.
- Índices MDM não são mais criados durante o `SCHEMA` antes da migração.
- `migrate_v10()` agora repara incrementalmente `mdm_events`, `mdm_installments` e colunas essenciais de `mdm_devices` antes de criar índices.
- Mantido o restante do sistema intacto.
