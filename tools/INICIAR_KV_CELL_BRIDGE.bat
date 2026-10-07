@echo off
setlocal
cd /d "%~dp0"
title KV CELL ADB BRIDGE V810.0
set "ADB_FOUND="
where adb >nul 2>&1 && set "ADB_FOUND=adb"
if not defined ADB_FOUND if exist "%LOCALAPPDATA%\Android\Sdk\platform-tools\adb.exe" set "ADB_FOUND=%LOCALAPPDATA%\Android\Sdk\platform-tools\adb.exe"
if not defined ADB_FOUND if exist "%USERPROFILE%\AppData\Local\Android\Sdk\platform-tools\adb.exe" set "ADB_FOUND=%USERPROFILE%\AppData\Local\Android\Sdk\platform-tools\adb.exe"
if not defined ADB_FOUND if exist "C:\platform-tools\adb.exe" set "ADB_FOUND=C:\platform-tools\adb.exe"
if not defined ADB_FOUND (
 echo.
 echo [ERRO] adb.exe nao encontrado.
 echo Instale Android SDK Platform-Tools ou coloque adb.exe no PATH.
 echo.
 pause
 exit /b 1
)
where python >nul 2>&1 || (
 echo [ERRO] Python nao encontrado no PATH.
 pause
 exit /b 2
)
set "KVCELL_ADB_PATH=%ADB_FOUND%"
echo.
echo ADB: %KVCELL_ADB_PATH%
"%KVCELL_ADB_PATH%" start-server
echo.
echo ===== APARELHOS ADB =====
"%KVCELL_ADB_PATH%" devices -l
echo.
echo Bridge: http://127.0.0.1:17321
echo Mantenha esta janela aberta enquanto usar a aba ADB.
echo.
python kvcell_bridge.py
pause
