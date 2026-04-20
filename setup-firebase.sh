#!/bin/bash

# ============================================
# SCRIPT DE SETUP FIREBASE - SEMÁFORO COBAS
# ============================================

echo "╔═══════════════════════════════════════════╗"
echo "║  SEMÁFORO COBAS 8000 - SETUP FIREBASE     ║"
echo "╚═══════════════════════════════════════════╝"
echo ""

# Verificar si Firebase CLI está instalado
if ! command -v firebase &> /dev/null
then
    echo "❌ Firebase CLI no está instalado"
    echo ""
    echo "Instalando Firebase CLI..."
    npm install -g firebase-tools
    
    if [ $? -ne 0 ]; then
        echo "❌ Error instalando Firebase CLI"
        exit 1
    fi
    
    echo "✅ Firebase CLI instalado"
    echo ""
fi

echo "✅ Firebase CLI encontrado: $(firebase --version)"
echo ""

# Login en Firebase
echo "🔐 Iniciando sesión en Firebase..."
firebase login

if [ $? -ne 0 ]; then
    echo "❌ Error en login de Firebase"
    exit 1
fi

echo ""
echo "✅ Login exitoso"
echo ""

# Inicializar proyecto
echo "🎯 Inicializando proyecto Firebase..."
echo ""
echo "IMPORTANTE: Selecciona las siguientes opciones:"
echo "  1. Hosting"
echo "  2. Realtime Database"
echo ""
read -p "Presiona Enter para continuar..."

firebase init

echo ""
echo "📁 Preparando archivos..."

# Crear carpeta public si no existe
if [ ! -d "public" ]; then
    mkdir public
    echo "✅ Carpeta 'public' creada"
fi

# Copiar archivo HTML
if [ -f "index-firebase.html" ]; then
    cp index-firebase.html public/index.html
    echo "✅ Archivo copiado a public/index.html"
else
    echo "⚠️  index-firebase.html no encontrado"
fi

echo ""
echo "⚠️  IMPORTANTE: Antes de continuar..."
echo ""
echo "1. Ve a Firebase Console: https://console.firebase.google.com"
echo "2. Abre tu proyecto"
echo "3. Ve a Configuración del proyecto (⚙️)"
echo "4. Copia tu firebaseConfig"
echo "5. Pega la configuración en public/index.html (línea ~260)"
echo ""
read -p "¿Ya configuraste firebaseConfig? (y/n): " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    echo ""
    echo "⏸️  Setup pausado. Configura firebaseConfig y luego ejecuta:"
    echo "   firebase deploy"
    exit 0
fi

echo ""
echo "🚀 Desplegando a Firebase..."
firebase deploy

if [ $? -eq 0 ]; then
    echo ""
    echo "╔═══════════════════════════════════════════╗"
    echo "║       ✅ DEPLOYMENT EXITOSO!              ║"
    echo "╚═══════════════════════════════════════════╝"
    echo ""
    echo "Tu aplicación está en:"
    firebase hosting:sites:list
    echo ""
    echo "Abre Firebase Console para ver la URL completa:"
    echo "https://console.firebase.google.com"
else
    echo ""
    echo "❌ Error en deployment"
    echo ""
    echo "Intenta manualmente:"
    echo "  firebase deploy"
fi

echo ""
echo "📖 Para más ayuda, revisa: FIREBASE_SETUP.md"



