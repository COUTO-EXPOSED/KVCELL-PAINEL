@echo off
setlocal EnableExtensions
cd /d "%~dp0"
title KV CELL ADB BRIDGE V1000.0
set "ADB_FOUND="
where adb >nul 2>&1 && set "ADB_FOUND=adb"
if not defined ADB_FOUND if exist "%LOCALAPPDATA%\Android\Sdk\platform-tools\adb.exe" set "ADB_FOUND=%LOCALAPPDATA%\Android\Sdk\platform-tools\adb.exe"
if not defined ADB_FOUND if exist "%USERPROFILE%\AppData\Local\Android\Sdk\platform-tools\adb.exe" set "ADB_FOUND=%USERPROFILE%\AppData\Local\Android\Sdk\platform-tools\adb.exe"
if not defined ADB_FOUND if exist "C:\platform-tools\adb.exe" set "ADB_FOUND=C:\platform-tools\adb.exe"
if not defined ADB_FOUND (
 echo [ERRO] adb.exe nao encontrado.
 echo Instale Android SDK Platform-Tools ou coloque adb.exe no PATH.
 pause
 exit /b 1
)
set "PY_CMD="
where py >nul 2>&1 && set "PY_CMD=py -3"
if not defined PY_CMD where python >nul 2>&1 && set "PY_CMD=python"
if not defined PY_CMD (
 echo [ERRO] Python 3 nao encontrado.
 pause
 exit /b 2
)
set "KVCELL_ADB_PATH=%ADB_FOUND%"
echo ADB: %KVCELL_ADB_PATH%
"%ADB_FOUND%" start-server
"%ADB_FOUND%" devices -l
echo.
echo Bridge: http://127.0.0.1:17321
%PY_CMD% kvcell_bridge.py
pause
