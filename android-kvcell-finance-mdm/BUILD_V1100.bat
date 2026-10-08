@echo off
setlocal
cd /d "%~dp0"
if not exist gradlew.bat (
  echo Gradle wrapper not present. Install Gradle 8.x and run: gradle wrapper --gradle-version 8.7
  exit /b 1
)
call gradlew.bat :app:assembleDebug
if errorlevel 1 exit /b 1
copy /Y app\build\outputs\apk\debug\app-debug.apk ..\tools\mdm\KV_CELL_MDM.apk
if errorlevel 1 exit /b 1
echo KV CELL MDM V1100.0 built successfully.
endlocal
