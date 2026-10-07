@echo off
cd /d "%~dp0"
where adb >nul 2>nul
if errorlevel 1 (
  echo [ERRO] adb nao encontrado no PATH.
  echo Instale Android SDK Platform Tools e abra este arquivo novamente.
  pause
  exit /b 1
)
echo.
echo ===== KV CELL ADB BRIDGE =====
adb devices
python kvcell_bridge.py
pause
