@echo off
set PACKAGE=br.com.kvcell.finance.mdm
set RECEIVER=br.com.kvcell.mdmd.KVCellDeviceAdminReceiver

echo KV CELL MDM - provisionamento Device Owner
adb devices
adb shell dpm set-device-owner %PACKAGE%/%RECEIVER%
if errorlevel 1 (
  echo.
  echo Falha. O Android normalmente exige aparelho novo/factory reset e o agente previamente instalado.
  exit /b 1
)
echo Device Owner configurado com sucesso.
