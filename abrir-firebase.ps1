# ============================================
# SEMAFORO ROSSI - SERVIDOR LOCAL FIREBASE
# ============================================

Write-Host "╔═══════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║   SEMAFORO ROSSI - FIREBASE LOCAL         ║" -ForegroundColor Cyan
Write-Host "╚═══════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# Verificar si Python está instalado
$pythonPath = Get-Command python -ErrorAction SilentlyContinue

if ($pythonPath) {
    Write-Host "✅ Python encontrado" -ForegroundColor Green
    Write-Host ""
    Write-Host "🚀 Iniciando servidor en puerto 8000..." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "🌐 Abre tu navegador en:" -ForegroundColor Cyan
    Write-Host "   http://localhost:8000/index-firebase.html" -ForegroundColor White
    Write-Host ""
    Write-Host "Presiona Ctrl+C para detener el servidor" -ForegroundColor Gray
    Write-Host ""
    
    # Abrir navegador automáticamente
    Start-Process "http://localhost:8000/index-firebase.html"
    
    # Iniciar servidor Python
    python -m http.server 8000
}
else {
    Write-Host "❌ Python no encontrado" -ForegroundColor Red
    Write-Host ""
    Write-Host "Opciones:" -ForegroundColor Yellow
    Write-Host "1. Instalar Python: https://www.python.org/downloads/" -ForegroundColor White
    Write-Host "2. Usar Node.js: npm install -g http-server && http-server -p 8000" -ForegroundColor White
    Write-Host "3. Usar VS Code con extensión 'Live Server'" -ForegroundColor White
    Write-Host ""
    
    Read-Host "Presiona Enter para salir"
}



