# Semáforo SWA Rossi - Gemelo Digital

## 📋 Descripción

Sistema de semáforo digital para laboratorio clínico que simula el estado operativo de plataformas de diagnóstico in vitro Roche Cobas 8000. El sistema proporciona una interfaz visual intuitiva para monitorear el estado de múltiples líneas de equipos en tiempo real.

## 🏥 Configuración del Sistema

### Líneas Configuradas:
- **Línea 1**: ISE + C702 + C502 + e801
- **Línea 2**: ISE + C702 + e801 + e801  
- **Línea 4**: ISE + C702 + e801 + e801
- **Línea 5**: ISE + C702 + e801 + e801

### Estados Disponibles:
- 🟢 **Operativo**: Sistema funcionando normalmente
- 🟡 **Stand By**: Sistema en espera o pausado
- 🔴 **Mantenimiento**: Sistema en mantenimiento correctivo/preventivo

## 🎯 Características Principales

### ✨ Funcionalidades Core:
- **Monitoreo en Tiempo Real**: Visualización del estado actual de todos los sistemas
- **Jerarquía Inteligente**: El estado del Core controla automáticamente los módulos dependientes
- **Sistema de Comentarios**: Registro de observaciones y modificaciones por módulo
- **Interfaz Responsive**: Optimizado para web, tablet y dispositivos móviles
- **Indicadores Visuales**: Luces de estado y colores dinámicos en recuadros

### 📱 Compatibilidad:
- **Desktop**: Experiencia completa con todas las funciones
- **Tablet**: Layout adaptado para pantallas medianas
- **Mobile**: Interfaz optimizada para dispositivos táctiles
- **TV Display**: Diseñado para visualización en pantallas grandes

## 🚀 Instalación y Uso

### Requisitos:
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- No requiere servidor web (funciona localmente)

### Instalación:
1. Clona o descarga el repositorio
2. Abre `index.html` en tu navegador
3. ¡Listo para usar!

### Uso Básico:
1. **Ver Estado**: Observa las luces de estado y colores de los recuadros
2. **Cambiar Estado**: Haz clic en "Cambiar Estado" en cualquier módulo o core
3. **Agregar Comentarios**: Usa el botón "Agregar" en la sección de comentarios
4. **Monitoreo**: El sistema actualiza automáticamente los timestamps

## 🏗️ Arquitectura Técnica

### Estructura del Proyecto:
```
├── index.html          # Interfaz principal
├── styles.css          # Estilos y diseño responsive
├── script.js           # Lógica del sistema y funcionalidades
├── .gitignore          # Archivos excluidos del control de versiones
└── README.md           # Documentación del proyecto
```

### Tecnologías Utilizadas:
- **HTML5**: Estructura semántica y accesible
- **CSS3**: Diseño moderno con glassmorphism y responsive design
- **JavaScript ES6+**: Lógica del sistema y manejo de estados
- **Font Awesome**: Iconografía profesional
- **Google Fonts**: Tipografía Inter para mejor legibilidad

## 🎨 Diseño y UX

### Principios de Diseño:
- **Glassmorphism**: Efectos de vidrio esmerilado para modernidad
- **Color Coding**: Sistema de colores intuitivo para estados
- **Responsive Design**: Adaptación automática a cualquier dispositivo
- **Touch-Friendly**: Optimizado para interacción táctil
- **Accessibility**: Cumple estándares de accesibilidad web

### Paleta de Colores:
- **Operativo**: Verde (#48bb78)
- **Stand By**: Naranja (#ed8936)  
- **Mantenimiento**: Rojo (#e53e3e)
- **Fondo**: Gradiente azul-púrpura (#667eea → #764ba2)

## 📊 Funcionalidades Avanzadas

### Lógica Jerárquica:
- Cuando un Core está en "Stand By" o "Mantenimiento", todos sus módulos se muestran como "Stand By"
- Los módulos mantienen su estado individual solo cuando el Core está "Operativo"
- Actualización automática de timestamps al cambiar estados

### Sistema de Comentarios:
- Comentarios por módulo y por core
- Solo se muestra el comentario más reciente
- Timestamps automáticos en formato español
- Interfaz modal para agregar comentarios

## 🔧 Personalización

### Modificar Configuraciones:
- **Líneas**: Editar el objeto `cores` en `script.js`
- **Módulos**: Modificar el objeto `modules` en `script.js`
- **Estilos**: Personalizar colores y tamaños en `styles.css`
- **Texto**: Cambiar etiquetas y mensajes en `index.html`

## 📱 Soporte Móvil

### Optimizaciones Móviles:
- **Touch Targets**: Botones de mínimo 44px para fácil toque
- **Responsive Breakpoints**: 768px (tablet) y 480px (móvil)
- **Landscape Mode**: Layout optimizado para orientación horizontal
- **Smooth Scrolling**: Desplazamiento suave en dispositivos táctiles

## 🚀 Despliegue

### Para Producción:
- El sistema está listo para producción
- No requiere compilación ni build process
- Funciona en cualquier servidor web estático
- Compatible con GitHub Pages, Netlify, Vercel, etc.

### GitHub Pages:
1. Sube el proyecto a GitHub
2. Ve a Settings > Pages
3. Selecciona la rama main
4. ¡Tu semáforo estará disponible públicamente!

## 📄 Licencia

Este proyecto está desarrollado para uso interno del laboratorio clínico SWA Rossi.

## 👥 Contribuciones

Para contribuir al proyecto:
1. Fork el repositorio
2. Crea una rama para tu feature
3. Realiza tus cambios
4. Envía un Pull Request

## 📞 Soporte

Para soporte técnico o consultas sobre el sistema, contacta al equipo de desarrollo.

---

**Desarrollado para Laboratorio Clínico SWA Rossi** 🏥
