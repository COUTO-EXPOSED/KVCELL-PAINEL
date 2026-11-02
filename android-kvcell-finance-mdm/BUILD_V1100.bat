@echo off
setlocal
cd /d "%~dp0"
if exist gradlew.bat (
  call gradlew.bat :app:assembleDebug
) else (
  where gradle >nul 2>nul
  if errorlevel 1 (
    echo ERRO: Gradle nao encontrado e este pacote nao inclui gradlew.
    echo Instale o Gradle 8.x e o Android SDK, configure ANDROID_HOME e execute novamente.
    exit /b 1
  )
  call gradle :app:assembleDebug
)
if errorlevel 1 exit /b 1
if not exist app\build\outputs\apk\debug\app-debug.apk (
  echo ERRO: APK nao foi gerado. Confira as mensagens do Gradle.
  exit /b 1
)
if not exist ..\tools\mdm mkdir ..\tools\mdm
copy /Y app\build\outputs\apk\debug\app-debug.apk ..\tools\mdm\KV_CELL_MDM.apk
if errorlevel 1 exit /b 1
echo APK gerado em tools\mdm\KV_CELL_MDM.apk
endlocal
