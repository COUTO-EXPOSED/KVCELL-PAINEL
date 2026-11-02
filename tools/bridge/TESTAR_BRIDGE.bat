@echo off
setlocal
curl.exe -sS --max-time 3 http://127.0.0.1:17321/health
if errorlevel 1 echo.
if errorlevel 1 echo [ERRO] Bridge offline. Execute INICIAR_BRIDGE.bat.
echo.
where adb >nul 2>&1 && adb devices -l || echo [AVISO] adb nao encontrado no PATH.
pause
