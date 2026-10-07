# KV CELL OS ULTIMATE SUPREME — V600

## ADB
- Restored the browser USB device selector behavior from the V400 line.
- Kept the real local ADB bridge from V500/V520 as the authoritative transport for commands.
- Added explicit USB selector + FORÇAR ADB flow.
- Bridge health now reports connected ADB devices.
- No Sentry dependency was added; `ERR_BLOCKED_BY_CLIENT` is external browser telemetry blocking.

## MDM
- Added ADB install/provision actions to the MDM workstation.
- Device Owner is requested only through Android's supported `dpm set-device-owner` flow.
- The MDM agent shows balance, due date, remaining installments and PIX copy/paste.
- When the server emits `bloqueado`, a legitimately provisioned Device Owner can apply the policy and prevent uninstall of the agent.
- Automatic policy evaluation remains server-side and is also checked during device heartbeat.

## Compatibility
The ZIP contains the complete Android project and the local ADB bridge. A production APK must be built/signed from that project; no fake APK is bundled. Device Owner cannot be legitimately forced onto an already provisioned device when Android rejects the operation.
