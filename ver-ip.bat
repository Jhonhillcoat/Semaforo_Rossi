@echo off
echo ╔═══════════════════════════════════════════╗
echo ║   TU IP LOCAL PARA ACCESO EN RED          ║
echo ╚═══════════════════════════════════════════╝
echo.
echo Buscando tu IP local...
echo.

ipconfig | findstr /i "IPv4"

echo.
echo ════════════════════════════════════════════
echo.
echo Usa la dirección que aparece arriba con el puerto del servidor:
echo.
echo Ejemplo:
echo   http://192.168.1.100:8000/index-firebase.html
echo.
echo Reemplaza:
echo   - 192.168.1.100 con TU IP (la que aparece arriba)
echo   - 8000 con el puerto de tu servidor (8000, 5500, etc)
echo.
pause



