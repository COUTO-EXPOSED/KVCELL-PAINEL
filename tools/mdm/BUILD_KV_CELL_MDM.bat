@echo off
setlocal
cd /d "%~dp0..\..\android-kvcell-finance-mdm"
title KV CELL MDM - BUILD
echo ================================================
echo          KV CELL MDM - BUILD APK
echo ================================================
where gradle >nul 2>&1
if errorlevel 1 (
  echo [ERRO] Gradle nao encontrado no PATH.
  echo Instale o Android Studio/Gradle e execute novamente.
  echo.
  echo O projeto foi deixado compilavel para Android SDK/Gradle.
  pause
  exit /b 1
)
gradle :app:assembleDebug
if errorlevel 1 (
  echo.
  echo [ERRO] Build falhou. Leia o erro acima.
  pause
  exit /b 2
)
if not exist "%~dp0KV_CELL_MDM.apk" copy /y "app\build\outputs\apk\debug\app-debug.apk" "%~dp0KV_CELL_MDM.apk" >nul
echo.
echo APK gerado em:
echo %~dp0KV_CELL_MDM.apk
pause
