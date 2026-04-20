@echo off
cls
echo ╔═══════════════════════════════════════════╗
echo ║     SEMAFORO ROSSI - SERVIDOR WEB         ║
echo ╚═══════════════════════════════════════════╝
echo.

REM Obtener IP local
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /i "IPv4" ^| findstr /v "127.0.0.1"') do set LOCAL_IP=%%a
set LOCAL_IP=%LOCAL_IP: =%

echo 🌐 DIRECCIONES DE ACCESO:
echo ════════════════════════════════════════════
echo.
echo 📍 Local (solo esta PC):
echo    http://localhost:8000/index-firebase.html
echo.
echo 📱 Desde otros dispositivos (misma WiFi):
echo    http://%LOCAL_IP%:8000/index-firebase.html
echo.
echo ════════════════════════════════════════════
echo.
echo 🚀 Iniciando servidor en puerto 8000...
echo.
echo ⚠️  MANTÉN ESTA VENTANA ABIERTA
echo    Presiona Ctrl+C para detener el servidor
echo.

REM Intentar abrir navegador
start http://localhost:8000/index-firebase.html

REM Iniciar servidor Python
python -m http.server 8000

pause



