@echo off
setlocal
cd /d "%~dp0..\..\android-kvcell-finance-mdm"
where gradlew >nul 2>nul
if errorlevel 1 (
 echo [INFO] Este projeto nao possui Gradle Wrapper embutido.
 echo Abra-o no Android Studio ou use Gradle 8.7+ com Android Gradle Plugin 8.7.3.
 echo Depois gere o APK release/debug e copie-o para tools\mdm\KV_CELL_MDM.apk.
 pause
 exit /b 2
)
gradlew.bat :app:assembleDebug
if errorlevel 1 pause & exit /b 1
copy /y app\build\outputs\apk\debug\app-debug.apk ..\..\tools\mdm\KV_CELL_MDM.apk
pause
