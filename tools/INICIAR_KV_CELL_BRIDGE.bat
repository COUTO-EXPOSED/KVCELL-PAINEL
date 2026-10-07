@echo off
setlocal
cd /d "%~dp0"
title KV CELL ADB BRIDGE - 127.0.0.1:17321
where adb >nul 2>nul
if errorlevel 1 (
  echo [ERRO] adb nao encontrado no PATH.
  echo Instale Android SDK Platform Tools e adicione a pasta platform-tools ao PATH.
  pause
  exit /b 1
)
where python >nul 2>nul
if errorlevel 1 (
  echo [ERRO] Python nao encontrado no PATH.
  pause
  exit /b 1
)
echo.
echo ===== KV CELL ADB BRIDGE V600 =====
echo URL: http://127.0.0.1:17321
 echo.
adb start-server >nul 2>nul
adb devices -l
echo.
echo Mantenha esta janela aberta enquanto usar ADB/MDM no KV CELL OS.
echo Pressione CTRL+C para encerrar a ponte.
echo.
python "%~dp0kvcell_bridge.py"
pause
