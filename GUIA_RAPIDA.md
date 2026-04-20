# ⚡ Guía Rápida de Instalación

## 🎯 Pasos Simples para Comenzar

### **1. Requisitos**
- Tener instalado Node.js (descargar de: https://nodejs.org/)

### **2. Instalación (Primera vez)**

Abre la terminal/consola en esta carpeta y ejecuta:

```bash
npm install
```

### **3. Iniciar el Servidor**

**Windows (PowerShell/CMD):**
```bash
npm start
```

**Mac/Linux:**
```bash
chmod +x start.sh
./start.sh
```

O simplemente:
```bash
npm start
```

### **4. Acceder a la Aplicación**

Abre tu navegador en:
```
http://localhost:3000
```

### **5. Acceso desde Otros Dispositivos (Misma Red)**

#### **Encuentra tu IP:**

**Windows:**
```bash
ipconfig
```
Busca "IPv4 Address" (ejemplo: 192.168.1.100)

**Mac:**
```bash
ifconfig | grep "inet "
```

**Linux:**
```bash
hostname -I
```

#### **Accede desde otros dispositivos:**
```
http://TU_IP:3000
```
Ejemplo: `http://192.168.1.100:3000`

---

## 🌐 Para Deployment en Internet

### **Opción Más Fácil: Railway.app**

1. Crear cuenta en https://railway.app
2. Click en "New Project" → "Deploy from GitHub"
3. Conectar tu repositorio
4. Railway detecta automáticamente y despliega
5. Te da una URL pública tipo: `https://tu-app.railway.app`

### **Opción con VPS (DigitalOcean, etc.)**

1. Subir archivos al servidor
2. Instalar dependencias: `npm install`
3. Instalar PM2: `npm install -g pm2`
4. Iniciar: `pm2 start server.js --name cobas`
5. Acceder via IP o dominio

---

## ✅ Verificación

Cuando el servidor está corriendo verás:

```
═══════════════════════════════════════════
🚀 SERVIDOR SEMÁFORO COBAS 8000
═══════════════════════════════════════════
📡 Escuchando en puerto: 3000
🌐 Acceso local: http://localhost:3000
🌐 Acceso red: http://<TU_IP>:3000
═══════════════════════════════════════════
```

---

## 🔄 Sincronización en Tiempo Real

✨ **Todos los cambios se sincronizan automáticamente entre todos los usuarios conectados**

- Usuario 1 cambia un estado → Usuario 2 lo ve instantáneamente
- Usuario 2 agrega una nota → Usuario 1 la recibe al momento
- El indicador verde arriba a la derecha muestra "Conectado" ✅

---

## 🛠️ Comandos Útiles

| Comando | Descripción |
|---------|-------------|
| `npm start` | Iniciar servidor |
| `npm run dev` | Iniciar con auto-restart |
| `pm2 start server.js` | Iniciar con PM2 (mantiene corriendo) |
| `pm2 logs` | Ver logs |
| `pm2 restart all` | Reiniciar |
| `pm2 stop all` | Detener |

---

## ❓ Problemas Comunes

### "Puerto 3000 ya en uso"
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <numero> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

### "No puedo conectarme desde otro dispositivo"
- Verifica que ambos estén en la misma red WiFi
- Verifica el firewall de Windows/Mac
- Usa la IP correcta (no 127.0.0.1)

### "Error: Cannot find module"
```bash
rm -rf node_modules
npm install
```

---

## 📞 ¿Necesitas Ayuda?

Revisa el archivo `README.md` completo para instrucciones detalladas.



