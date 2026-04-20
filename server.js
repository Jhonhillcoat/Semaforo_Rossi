// ============================================
// SERVIDOR DE SINCRONIZACIÓN - SEMÁFORO COBAS
// ============================================

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

const PORT = process.env.PORT || 3000;

// ============ ESTADO GLOBAL DEL SERVIDOR ============
const serverState = {
    lines: {
        1: { Core: 'Desconectado', ISE: 'Desconectado', C502: 'Desconectado', C702: 'Desconectado', e801: 'Desconectado' },
        2: { Core: 'Desconectado', ISE: 'Desconectado', C702: 'Desconectado', e801_1: 'Desconectado', e801_2: 'Desconectado' },
        4: { Core: 'Desconectado', ISE: 'Desconectado', C702: 'Desconectado', e801_1: 'Desconectado', e801_2: 'Desconectado' },
        5: { Core: 'Desconectado', ISE: 'Desconectado', C702: 'Desconectado', e801_1: 'Desconectado', e801_2: 'Desconectado' }
    },
    notes: {
        1: [],
        2: [],
        4: [],
        5: []
    }
};

// Servir archivos estáticos
app.use(express.static(path.join(__dirname)));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// ============ CONEXIÓN DE CLIENTES ============
io.on('connection', (socket) => {
    const clientId = socket.id.substring(0, 6);
    console.log(`✅ Cliente conectado: ${clientId}`);
    
    // Enviar estado inicial al cliente
    socket.emit('initial_state', serverState);
    
    // ============ CAMBIO DE ESTADO DE MÓDULO ============
    socket.on('module_state_change', (data) => {
        const { lineId, moduleKey, newState } = data;
        
        // Actualizar estado en el servidor
        if (serverState.lines[lineId] && serverState.lines[lineId][moduleKey] !== undefined) {
            serverState.lines[lineId][moduleKey] = newState;
            
            console.log(`🔄 [${clientId}] Línea ${lineId} - ${moduleKey}: ${newState}`);
            
            // Broadcast a TODOS los clientes (incluyendo el emisor)
            io.emit('module_state_changed', {
                lineId,
                moduleKey,
                newState
            });
        }
    });
    
    // ============ AGREGAR NOTA ============
    socket.on('add_note', (data) => {
        const { lineId, note } = data;
        
        if (serverState.notes[lineId]) {
            serverState.notes[lineId].unshift(note);
            
            // Limitar a 20 notas por línea
            if (serverState.notes[lineId].length > 20) {
                serverState.notes[lineId] = serverState.notes[lineId].slice(0, 20);
            }
            
            console.log(`📝 [${clientId}] Nota agregada a Línea ${lineId}`);
            
            // Broadcast a todos los clientes
            io.emit('note_added', {
                lineId,
                note
            });
        }
    });
    
    // ============ DESCONEXIÓN ============
    socket.on('disconnect', () => {
        console.log(`❌ Cliente desconectado: ${clientId}`);
    });
});

// ============ INICIAR SERVIDOR ============
server.listen(PORT, () => {
    console.log('═══════════════════════════════════════════');
    console.log('🚀 SERVIDOR SEMÁFORO COBAS 8000');
    console.log('═══════════════════════════════════════════');
    console.log(`📡 Escuchando en puerto: ${PORT}`);
    console.log(`🌐 Acceso local: http://localhost:${PORT}`);
    console.log(`🌐 Acceso red: http://<TU_IP>:${PORT}`);
    console.log('═══════════════════════════════════════════');
});



