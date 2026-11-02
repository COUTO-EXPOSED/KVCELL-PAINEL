@echo off
setlocal
cd /d "%~dp0.."
title KV CELL ADB Bridge - 127.0.0.1:17321
set "BRIDGE=%~dp0..\kvcell_bridge.py"
where py >nul 2>&1
if not errorlevel 1 (py -3 "%BRIDGE%" & exit /b %errorlevel%)
where python >nul 2>&1
if not errorlevel 1 (python "%BRIDGE%" & exit /b %errorlevel%)
echo [ERRO] Python 3 nao encontrado.
pause
