@echo off
setlocal
cd /d "%~dp0\..\.."
set "APK=%~dp0KV_CELL_MDM.apk"
if not exist "%APK%" (
  echo APK ainda nao existe. Tentando compilar o projeto Android...
  call android-kvcell-finance-mdm\BUILD_V1100.bat
  if errorlevel 1 (
    echo Nao foi possivel compilar. Instale/configure Gradle 8.x e Android SDK primeiro.
    exit /b 1
  )
)
where adb >nul 2>nul
if errorlevel 1 (
  echo ERRO: adb nao encontrado. Instale Android Platform Tools e configure PATH.
  exit /b 1
)
echo Verificando dispositivo USB com depuracao USB autorizada...
adb devices
 echo.
echo Se o aparelho aparecer como unauthorized, desbloqueie-o e aceite a chave RSA.
adb install -r "%APK%"
if errorlevel 1 exit /b 1
echo Instalacao concluida. O app foi instalado; isso NAO ativa automaticamente Device Owner.
echo Para provisionar Device Owner, o aparelho normalmente precisa estar restaurado de fabrica e usar o fluxo Android Enterprise.
endlocal
