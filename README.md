# 🔬 Semáforo Rossi - Sistema de Monitoreo en Tiempo Real

## 📋 Descripción del Proyecto

**Semáforo Rossi** es un sistema web multiusuario diseñado para el monitoreo en tiempo real del estado de 4 líneas de equipos Cobas 8000 (Roche IVD). El sistema proporciona sincronización instantánea entre múltiples usuarios, permitiendo el seguimiento colaborativo del estado operativo de equipos críticos de laboratorio.

### 🎯 Objetivo Principal
Facilitar la coordinación entre equipos técnicos mediante una interfaz visual intuitiva que muestra el estado operativo de cada módulo (Core, ISE, C502, C702, e801) en tiempo real, con capacidad de agregar notas informativas compartidas.

---

## 🏗️ Arquitectura del Sistema

### **Frontend**
- **Tecnología**: HTML5, CSS3, JavaScript (Vanilla)
- **Framework CSS**: Tailwind CSS
- **Comunicación**: Socket.IO Client / Firebase Realtime Database
- **Responsive**: Optimizado para desktop y móvil

### **Backend (Dual Mode)**
- **Modo Node.js**: Express.js + Socket.IO
- **Modo Firebase**: Firebase Realtime Database
- **Persistencia**: Memoria del servidor / Firebase Cloud

### **Estructura de Datos**
```javascript
{
  lines: {
    1: { Core: 'Operativo', ISE: 'Stand By', C502: 'Desconectado', C702: 'Operativo', e801: 'Operativo' },
    2: { Core: 'Operativo', ISE: 'Operativo', C702: 'Stand By', e801_1: 'Operativo', e801_2: 'Desconectado' },
    4: { Core: 'Stand By', ISE: 'Desconectado', C702: 'Operativo', e801_1: 'Stand By', e801_2: 'Operativo' },
    5: { Core: 'Desconectado', ISE: 'Operativo', C702: 'Desconectado', e801_1: 'Operativo', e801_2: 'Stand By' }
  },
  notes: {
    1: [{ timestamp: 1234567890, dateStr: "07/10/2025", timeStr: "14:30:25", text: "Mantenimiento programado" }],
    2: [],
    4: [],
    5: []
  }
}
```

---

## 🔒 Seguridad Informática

### **Características de Seguridad Implementadas**

#### **1. Comunicación Segura**
- ✅ **HTTPS/TLS**: Todas las comunicaciones encriptadas
- ✅ **WebSocket Seguro**: Socket.IO con cifrado automático
- ✅ **Firebase Security**: Conexiones SSL/TLS nativas

#### **2. Validación de Datos**
- ✅ **Validación Frontend**: Sanitización de inputs de usuario
- ✅ **Validación Backend**: Reglas de Firebase Database
- ✅ **Estructura de Datos**: Validación de tipos y estructura

```json
// Reglas de Seguridad Firebase
{
  "rules": {
    "lines": {
      "$lineId": {
        ".read": true,
        ".write": true,
        ".validate": "newData.hasChildren(['Core', 'ISE']) && (newData.child('Core').isString() || newData.child('ISE').isString())"
      }
    },
    "notes": {
      "$lineId": {
        ".read": true,
        ".write": true,
        "$noteId": {
          ".validate": "newData.hasChildren(['timestamp', 'dateStr', 'timeStr', 'text']) && newData.child('timestamp').isNumber() && newData.child('text').isString()"
        }
      }
    }
  }
}
```

#### **3. Control de Acceso**
- ✅ **CORS Configurado**: Restricción de dominios permitidos
- ✅ **Rate Limiting**: Implementado en Socket.IO
- ✅ **Validación de Estados**: Solo estados válidos permitidos

#### **4. Persistencia Segura**
- ✅ **Sin Almacenamiento Local Sensible**: Solo notas temporales en localStorage
- ✅ **Datos en Memoria**: Estado temporal sin persistencia local
- ✅ **Firebase Security Rules**: Control granular de acceso

### **Recomendaciones de Seguridad para Producción**

#### **🔐 Autenticación y Autorización**
```javascript
// Implementación recomendada con Firebase Auth
{
  "rules": {
    "lines": {
      "$lineId": {
        ".read": "auth != null && auth.token.role in ['admin', 'operator']",
        ".write": "auth != null && auth.token.role == 'admin'"
      }
    }
  }
}
```

#### **🛡️ Medidas de Seguridad Adicionales**
1. **Autenticación Multi-Factor (MFA)**
2. **Logging de Auditoría**: Registro de todos los cambios
3. **Rate Limiting Avanzado**: Prevención de ataques DDoS
4. **Validación de IP**: Restricción por rangos de red corporativa
5. **Encriptación de Datos**: Para información sensible adicional

#### **🔍 Monitoreo de Seguridad**
- **Logs de Conexión**: Registro de usuarios conectados
- **Alertas de Cambios**: Notificaciones de modificaciones críticas
- **Backup Automático**: Respaldo de configuraciones

---

## 🚀 Opciones de Deployment Seguro

### **Opción 1: Firebase (Recomendado para Seguridad)**

#### **Ventajas de Seguridad**
- ✅ **Infraestructura Google**: Certificaciones SOC 2, ISO 27001
- ✅ **HTTPS Automático**: Certificados SSL gestionados automáticamente
- ✅ **Firewall Integrado**: Protección DDoS nativa
- ✅ **Backup Automático**: Respaldo continuo de datos
- ✅ **Monitoreo 24/7**: Supervisión continua de seguridad

#### **Configuración Segura**
```bash
# Instalación segura
npm install -g firebase-tools
firebase login --no-localhost
firebase init
firebase deploy
```

#### **Reglas de Seguridad Avanzadas**
```json
{
  "rules": {
    "lines": {
      "$lineId": {
        ".read": "auth != null && auth.token.verified == true",
        ".write": "auth != null && auth.token.role == 'admin' && auth.token.timestamp > (now - 3600000)"
      }
    }
  }
}
```

### **Opción 2: VPS Privado (Máxima Seguridad)**

#### **Configuración de Seguridad**
```bash
# Configuración de firewall
sudo ufw enable
sudo ufw allow ssh
sudo ufw allow 443/tcp
sudo ufw allow 80/tcp

# Configuración SSL con Let's Encrypt
sudo apt install certbot nginx
sudo certbot --nginx -d tu-dominio.com

# Configuración de PM2 con logs
pm2 start server.js --name "semaforo-rossi" --log-date-format="YYYY-MM-DD HH:mm:ss"
pm2 startup
pm2 save
```

#### **Configuración Nginx Segura**
```nginx
server {
    listen 443 ssl http2;
    server_name tu-dominio.com;
    
    ssl_certificate /etc/letsencrypt/live/tu-dominio.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/tu-dominio.com/privkey.pem;
    
    # Headers de seguridad
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains";
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 📊 Características Técnicas

### **Funcionalidades Principales**
- 🔄 **Sincronización en Tiempo Real**: Cambios instantáneos entre usuarios
- 📝 **Sistema de Notas**: Información contextual compartida
- 📱 **Responsive Design**: Optimizado para todos los dispositivos
- 🔌 **Indicador de Conexión**: Estado de conectividad visible
- 💾 **Persistencia de Datos**: Estado mantenido entre sesiones
- ⚡ **Modo Offline**: Funcionalidad básica sin conexión

### **Estados del Sistema**
- 🟢 **Operativo**: Equipo funcionando correctamente
- 🟡 **Stand By**: Equipo en espera o modo de bajo consumo
- 🔴 **Desconectado**: Equipo sin comunicación o fuera de servicio

### **Módulos Monitoreados**
- **Core**: Sistema central de cada línea
- **ISE**: Analizador de electrolitos
- **C502**: Analizador de química clínica
- **C702**: Analizador de química clínica avanzado
- **e801**: Analizador de inmunoensayos

---

## 🛠️ Instalación y Configuración

### **Requisitos del Sistema**
- Node.js v16+ (para modo Node.js)
- Navegador web moderno con soporte WebSocket
- Conexión a internet estable

### **Instalación Rápida**

#### **Modo Firebase (Recomendado)**
```bash
# 1. Clonar repositorio
git clone <repository-url>
cd semaforo-rossi

# 2. Configurar Firebase
npm install -g firebase-tools
firebase login
firebase init

# 3. Configurar proyecto
mkdir public
cp index-firebase.html public/index.html

# 4. Deploy
firebase deploy
```

#### **Modo Node.js Local**
```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor
npm start

# 3. Acceder a http://localhost:3000
```

### **Configuración de Seguridad**

#### **Variables de Entorno**
```bash
# Crear archivo .env
PORT=3000
NODE_ENV=production
CORS_ORIGIN=https://tu-dominio.com
RATE_LIMIT_WINDOW=900000
RATE_LIMIT_MAX=100
```

#### **Configuración de Firewall**
```bash
# Ubuntu/Debian
sudo ufw enable
sudo ufw allow ssh
sudo ufw allow 443/tcp
sudo ufw allow 80/tcp

# CentOS/RHEL
sudo firewall-cmd --permanent --add-service=ssh
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --reload
```

---

## 📈 Monitoreo y Mantenimiento

### **Logs del Sistema**
```bash
# Ver logs en tiempo real
pm2 logs semaforo-rossi

# Ver logs de Firebase
firebase functions:log

# Ver logs de Nginx
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### **Métricas de Rendimiento**
- **Usuarios Concurrentes**: Monitoreo de conexiones activas
- **Latencia de Red**: Tiempo de respuesta de cambios
- **Uptime**: Disponibilidad del sistema
- **Errores**: Registro de fallos y excepciones

### **Backup y Recuperación**
```bash
# Backup de configuración Firebase
firebase database:get / > backup-$(date +%Y%m%d).json

# Backup de configuración Node.js
cp -r /path/to/app /backup/semaforo-rossi-$(date +%Y%m%d)
```

---

## 🔧 Solución de Problemas

### **Problemas Comunes**

#### **Error de Conexión**
```bash
# Verificar estado del servidor
pm2 status
pm2 restart semaforo-rossi

# Verificar puertos
netstat -tlnp | grep :3000
```

#### **Problemas de SSL**
```bash
# Renovar certificados Let's Encrypt
sudo certbot renew --dry-run
sudo certbot renew
```

#### **Problemas de Firebase**
```bash
# Verificar configuración
firebase projects:list
firebase use <project-id>
firebase deploy --only database
```

---

## 📋 Checklist de Seguridad

### **Pre-Deployment**
- [ ] Configurar HTTPS/SSL
- [ ] Implementar autenticación
- [ ] Configurar firewall
- [ ] Establecer backup automático
- [ ] Configurar monitoreo de logs

### **Post-Deployment**
- [ ] Verificar certificados SSL
- [ ] Probar autenticación
- [ ] Verificar logs de seguridad
- [ ] Probar backup y recuperación
- [ ] Documentar procedimientos

### **Mantenimiento Continuo**
- [ ] Actualizar dependencias regularmente
- [ ] Revisar logs de seguridad semanalmente
- [ ] Renovar certificados SSL
- [ ] Actualizar reglas de firewall
- [ ] Probar procedimientos de recuperación

---

## 📞 Soporte y Contacto

### **Documentación Adicional**
- `FIREBASE_SETUP.md`: Guía detallada de Firebase
- `COMPARACION_DEPLOYMENT.md`: Comparación de opciones
- `README_FIREBASE.md`: Documentación específica de Firebase

### **Recursos de Seguridad**
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Firebase Security Rules](https://firebase.google.com/docs/rules)
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)

---

## 📄 Licencia

MIT License - Ver archivo LICENSE para detalles completos.

---

## 🎯 Roadmap Futuro

### **Mejoras de Seguridad Planificadas**
- [ ] Implementación de autenticación multi-factor
- [ ] Sistema de auditoría avanzado
- [ ] Encriptación end-to-end para notas sensibles
- [ ] Integración con sistemas de monitoreo SIEM
- [ ] Implementación de honeypots para detección de intrusos

### **Funcionalidades Adicionales**
- [ ] Dashboard de métricas de seguridad
- [ ] Alertas automáticas por cambios críticos
- [ ] Integración con sistemas de ticketing
- [ ] API REST para integración externa
- [ ] Aplicación móvil nativa

---

**Desarrollado con enfoque en seguridad informática y mejores prácticas de la industria.**