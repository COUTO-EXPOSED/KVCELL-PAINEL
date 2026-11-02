@echo off
setlocal
cd /d "%~dp0.."
echo ================================================
echo       KV CELL MDM - INSTALACAO ADB
echo ================================================
where adb >nul 2>&1 || (echo [ERRO] adb nao encontrado no PATH.&pause&exit /b 1)
adb devices -l
echo.
if not exist "%~dp0KV_CELL_MDM.apk" (echo [ERRO] Coloque o APK em tools\mdm\KV_CELL_MDM.apk ou defina KVCELL_MDM_APK_PATH.&pause&exit /b 2)
adb install -r "%~dp0KV_CELL_MDM.apk" || (echo [ERRO] Falha ao instalar o APK.&pause&exit /b 3)
echo.
echo Instalado. Agora o Android precisa aceitar o Device Owner.
adb shell dpm set-device-owner br.com.kvcell.finance.mdm/br.com.kvcell.mdmd.KVCellDeviceAdminReceiver
if errorlevel 1 (
 echo [ATENCAO] O Android recusou o Device Owner.
 echo Em muitos aparelhos isso exige dispositivo ainda nao provisionado/sem contas; nao ha bypass seguro.
 pause
 exit /b 4
)
echo.
echo Device Owner configurado com sucesso.
adb shell am start -a android.intent.action.VIEW -d "kvcellmdm://enroll/COLOQUE_O_TOKEN_AQUI"
echo Substitua o token pelo token gerado no painel MDM se necessario.
pause
