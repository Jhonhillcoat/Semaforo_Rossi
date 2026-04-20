@echo off
echo ╔═══════════════════════════════════════════╗
echo ║   SEMAFORO ROSSI - FIREBASE LOCAL         ║
echo ╚═══════════════════════════════════════════╝
echo.

REM Verificar si Node.js está instalado
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js no está instalado
    echo.
    echo Por favor instala Node.js desde: https://nodejs.org/
    echo O usa Python con: python -m http.server 8000
    pause
    exit /b
)

echo ✅ Node.js encontrado
echo.
echo 📦 Instalando servidor HTTP...
call npm install -g http-server

echo.
echo 🚀 Iniciando servidor en puerto 8000...
echo.
echo 🌐 Abre tu navegador en:
echo    http://localhost:8000/index-firebase.html
echo.
echo Presiona Ctrl+C para detener el servidor
echo.

start http://localhost:8000/index-firebase.html

http-server -p 8000



