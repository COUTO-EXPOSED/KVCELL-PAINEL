@echo off
setlocal
cd /d "%~dp0"
title KV CELL ADB BRIDGE V600.1
set "ADB_FOUND="
where adb >nul 2>nul && set "ADB_FOUND=adb"
if not defined ADB_FOUND if exist "%LOCALAPPDATA%\Android\Sdk\platform-tools\adb.exe" set "ADB_FOUND=%LOCALAPPDATA%\Android\Sdk\platform-tools\adb.exe"
if not defined ADB_FOUND if exist "%USERPROFILE%\AppData\Local\Android\Sdk\platform-tools\adb.exe" set "ADB_FOUND=%USERPROFILE%\AppData\Local\Android\Sdk\platform-tools\adb.exe"
if not defined ADB_FOUND if exist "C:\platform-tools\adb.exe" set "ADB_FOUND=C:\platform-tools\adb.exe"
if not defined ADB_FOUND (
 echo.
 echo [ERRO] ADB nao encontrado.
 echo Instale Android SDK Platform-Tools ou coloque adb.exe no PATH.
 echo.
 pause
 exit /b 1
)
set "KVCELL_ADB_PATH=%ADB_FOUND%"
echo ADB: %KVCELL_ADB_PATH%
"%KVCELL_ADB_PATH%" start-server
"%KVCELL_ADB_PATH%" devices -l
python kvcell_bridge.py
pause
