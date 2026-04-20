@echo off
cls
echo ╔═══════════════════════════════════════════╗
echo ║   DEPLOY A FIREBASE HOSTING               ║
echo ╚═══════════════════════════════════════════╝
echo.

echo 📦 Verificando Firebase CLI...
where firebase >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Firebase CLI no instalado
    echo.
    echo Instalando Firebase CLI...
    call npm install -g firebase-tools
    if %ERRORLEVEL% NEQ 0 (
        echo.
        echo ❌ Error: Necesitas tener Node.js instalado
        echo    Descarga desde: https://nodejs.org/
        pause
        exit /b
    )
)

echo ✅ Firebase CLI encontrado
echo.

echo 🔐 Iniciando sesión en Firebase...
call firebase login

if %ERRORLEVEL% NEQ 0 (
    echo ❌ Error en login
    pause
    exit /b
)

echo.
echo ✅ Login exitoso
echo.

echo 📁 Preparando archivos para deploy...

REM Crear carpeta public si no existe
if not exist "public" mkdir public

REM Copiar archivo HTML
copy /Y index-firebase.html public\index.html >nul

echo ✅ Archivos preparados
echo.

REM Verificar si ya está inicializado
if not exist "firebase.json" (
    echo ⚙️  Inicializando Firebase...
    echo.
    echo IMPORTANTE: Cuando pregunte, selecciona:
    echo   - Hosting
    echo   - Use existing project: semaforo-rossi
    echo   - Public directory: public
    echo   - Single-page app: Yes
    echo   - Overwrite index.html: No
    echo.
    pause
    
    call firebase init
)

echo.
echo 🚀 Desplegando a Firebase Hosting...
echo.

call firebase deploy --only hosting

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ╔═══════════════════════════════════════════╗
    echo ║       ✅ DEPLOY EXITOSO!                  ║
    echo ╚═══════════════════════════════════════════╝
    echo.
    echo Tu aplicación está disponible en:
    echo https://semaforo-rossi.web.app
    echo.
    echo Comparte esta URL con quien quieras!
    echo.
    
    REM Intentar abrir en navegador
    start https://semaforo-rossi.web.app
) else (
    echo.
    echo ❌ Error en deployment
    echo.
)

pause



