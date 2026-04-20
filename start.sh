#!/bin/bash

# ============================================
# SCRIPT DE INICIO - SEMÁFORO COBAS 8000
# ============================================

echo "╔═══════════════════════════════════════╗"
echo "║   SEMÁFORO COBAS 8000 - INICIO        ║"
echo "╚═══════════════════════════════════════╝"
echo ""

# Verificar si Node.js está instalado
if ! command -v node &> /dev/null
then
    echo "❌ Node.js no está instalado"
    echo "Por favor instala Node.js desde: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js encontrado: $(node --version)"
echo "✅ NPM encontrado: $(npm --version)"
echo ""

# Verificar si node_modules existe
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependencias..."
    npm install
    echo ""
fi

# Obtener IP local
echo "📍 Direcciones de acceso:"
echo "   Local: http://localhost:3000"

# Detectar SO y obtener IP
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    LOCAL_IP=$(ifconfig | grep "inet " | grep -v 127.0.0.1 | awk '{print $2}' | head -n 1)
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    # Linux
    LOCAL_IP=$(hostname -I | awk '{print $1}')
else
    # Windows (Git Bash)
    LOCAL_IP=$(ipconfig | grep "IPv4" | head -n 1 | awk '{print $NF}')
fi

if [ ! -z "$LOCAL_IP" ]; then
    echo "   Red local: http://$LOCAL_IP:3000"
fi

echo ""
echo "🚀 Iniciando servidor..."
echo "   (Presiona Ctrl+C para detener)"
echo ""

# Iniciar servidor
node server.js



