@echo off
setlocal EnableExtensions
cd /d "%~dp0.."
title KV CELL - Instalar ADB Bridge
set "BRIDGE=%~dp0..\kvcell_bridge.py"
where py >nul 2>&1
if not errorlevel 1 (set "PY=py -3") else (
  where python >nul 2>&1
  if errorlevel 1 (
    echo [ERRO] Python 3 nao encontrado.
    echo Instale Python 3 e tente novamente.
    pause
    exit /b 1
  )
  set "PY=python"
)
%PY% -c "import sys; print('Python',sys.version)" || exit /b 1
%PY% -c "import urllib.request; print('Bridge: pronto')" >nul 2>&1
for /f "delims=" %%A in ('where pythonw 2^>nul') do set "PYW=%%A"
if not defined PYW set "PYW=%PY%"
set "TASK=KV CELL ADB Bridge"
schtasks /Create /TN "%TASK%" /TR "\"%PYW%\" \"%BRIDGE%\"" /SC ONLOGON /RL LIMITED /F >nul 2>&1
if errorlevel 1 (
  echo [AVISO] Nao foi possivel criar inicializacao automatica.
  echo O bridge ainda pode ser iniciado manualmente.
) else echo [OK] Bridge configurado para iniciar no login do Windows.
call "%~dp0INICIAR_BRIDGE.bat"
