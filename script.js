class SWARossiSystem {
    constructor() {
        this.cores = {
            'core1': {
                name: 'Core Línea 1',
                type: 'Sistema ISE + C702 + C502 + e801',
                status: 'operational',
                lastChange: '15:30 - 15/01/2024',
                comments: []
            },
            'core2': {
                name: 'Core Línea 2',
                type: 'Sistema ISE + C702 + e801 + e801',
                status: 'operational',
                lastChange: '15:30 - 15/01/2024',
                comments: []
            },
            'core3': {
                name: 'Core Línea 4',
                type: 'Sistema ISE + C702 + e801 + e801',
                status: 'operational',
                lastChange: '15:30 - 15/01/2024',
                comments: []
            },
            'core4': {
                name: 'Core Línea 5',
                type: 'Sistema ISE + C702 + e801 + e801',
                status: 'operational',
                lastChange: '15:30 - 15/01/2024',
                comments: []
            }
        };
        
        this.modules = {
            // Core 1 modules
            'core1-ise': {
                name: 'ISE',
                type: 'Electrolitos',
                status: 'operational',
                lastChange: '15:30 - 15/01/2024',
                comments: [],
                icon: 'fas fa-flask',
                dependsOnCore: 'core1'
            },
            'core1-c702': {
                name: 'C702',
                type: 'Química Clínica',
                status: 'operational',
                lastChange: '15:28 - 15/01/2024',
                comments: [],
                icon: 'fas fa-vial',
                dependsOnCore: 'core1'
            },
            'core1-e801-1': {
                name: 'e801 #1',
                type: 'Inmunoensayos',
                status: 'operational',
                lastChange: '15:25 - 15/01/2024',
                comments: [],
                icon: 'fas fa-dna',
                dependsOnCore: 'core1'
            },
            'core1-c502': {
                name: 'C502',
                type: 'Química Clínica',
                status: 'operational',
                lastChange: '15:32 - 15/01/2024',
                comments: [],
                icon: 'fas fa-vial',
                dependsOnCore: 'core1'
            },
            // Core 2 modules
            'core2-ise': {
                name: 'ISE',
                type: 'Electrolitos',
                status: 'operational',
                lastChange: '15:30 - 15/01/2024',
                comments: [],
                icon: 'fas fa-flask',
                dependsOnCore: 'core2'
            },
            'core2-c702': {
                name: 'C702',
                type: 'Química Clínica',
                status: 'operational',
                lastChange: '15:28 - 15/01/2024',
                comments: [],
                icon: 'fas fa-vial',
                dependsOnCore: 'core2'
            },
            'core2-e801-1': {
                name: 'e801 #1',
                type: 'Inmunoensayos',
                status: 'operational',
                lastChange: '15:25 - 15/01/2024',
                comments: [],
                icon: 'fas fa-dna',
                dependsOnCore: 'core2'
            },
            'core2-e801-2': {
                name: 'e801 #2',
                type: 'Inmunoensayos',
                status: 'operational',
                lastChange: '15:32 - 15/01/2024',
                comments: [],
                icon: 'fas fa-dna',
                dependsOnCore: 'core2'
            },
            // Core 3 modules
            'core3-ise': {
                name: 'ISE',
                type: 'Electrolitos',
                status: 'operational',
                lastChange: '15:30 - 15/01/2024',
                comments: [],
                icon: 'fas fa-flask',
                dependsOnCore: 'core3'
            },
            'core3-c702': {
                name: 'C702',
                type: 'Química Clínica',
                status: 'operational',
                lastChange: '15:28 - 15/01/2024',
                comments: [],
                icon: 'fas fa-vial',
                dependsOnCore: 'core3'
            },
            'core3-e801-1': {
                name: 'e801 #1',
                type: 'Inmunoensayos',
                status: 'operational',
                lastChange: '15:25 - 15/01/2024',
                comments: [],
                icon: 'fas fa-dna',
                dependsOnCore: 'core3'
            },
            'core3-e801-2': {
                name: 'e801 #2',
                type: 'Inmunoensayos',
                status: 'operational',
                lastChange: '15:32 - 15/01/2024',
                comments: [],
                icon: 'fas fa-dna',
                dependsOnCore: 'core3'
            },
            // Core 4 modules
            'core4-ise': {
                name: 'ISE',
                type: 'Electrolitos',
                status: 'operational',
                lastChange: '15:30 - 15/01/2024',
                comments: [],
                icon: 'fas fa-flask',
                dependsOnCore: 'core4'
            },
            'core4-c702': {
                name: 'C702',
                type: 'Química Clínica',
                status: 'operational',
                lastChange: '15:28 - 15/01/2024',
                comments: [],
                icon: 'fas fa-vial',
                dependsOnCore: 'core4'
            },
            'core4-e801-1': {
                name: 'e801 #1',
                type: 'Inmunoensayos',
                status: 'operational',
                lastChange: '15:25 - 15/01/2024',
                comments: [],
                icon: 'fas fa-dna',
                dependsOnCore: 'core4'
            },
            'core4-e801-2': {
                name: 'e801 #2',
                type: 'Inmunoensayos',
                status: 'operational',
                lastChange: '15:32 - 15/01/2024',
                comments: [],
                icon: 'fas fa-dna',
                dependsOnCore: 'core4'
            }
        };
        
        this.currentModalTargetId = null;
        this.isCoreModal = false;
        this.isCommentModal = false;
        this.updateInterval = null;
        this.init();
    }

    init() {
        this.updateAllDisplays();
        this.startAutoUpdate();
    }

    updateAllDisplays() {
        // Update all cores
        Object.keys(this.cores).forEach(coreId => {
            this.updateCoreDisplay(coreId);
        });
        
        // Update all modules
        Object.keys(this.modules).forEach(moduleId => {
            this.updateModuleDisplay(moduleId);
        });
        
        // Update overview
        this.updateOverview();
    }

    updateCoreDisplay(coreId) {
        const core = this.cores[coreId];
        const coreSystem = document.querySelector(`[data-core="${coreId}"]`);
        
        // Update status dot
        const statusDot = document.getElementById(`${coreId}-status`).querySelector('.status-dot');
        statusDot.className = `status-dot ${core.status}`;
        
        // Update status text
        const statusText = document.getElementById(`${coreId}-state`);
        const statusMap = {
            'operational': 'Operativo',
            'standby': 'Stand By',
            'maintenance': 'Mantenimiento'
        };
        statusText.textContent = statusMap[core.status];
        
        // Update last change
        document.getElementById(`${coreId}-last-change`).textContent = core.lastChange;
        
        // Update core system styling
        coreSystem.setAttribute('data-status', core.status);
        
        // Update comments display
        this.updateCoreCommentsDisplay(coreId);
    }

    updateModuleDisplay(moduleId) {
        const module = this.modules[moduleId];
        const moduleCard = document.querySelector(`[data-module="${moduleId}"]`);
        
        // Determine effective status based on core dependency
        let effectiveStatus = module.status;
        let displayStatus = effectiveStatus; // Status to show in UI
        
        if (module.dependsOnCore && this.cores[module.dependsOnCore]) {
            const coreStatus = this.cores[module.dependsOnCore].status;
            if (coreStatus === 'standby' || coreStatus === 'maintenance') {
                effectiveStatus = 'standby';
                displayStatus = 'standby';
            }
        }
        
        // Update status dot
        const statusDot = document.getElementById(`${moduleId}-status`).querySelector('.status-dot');
        statusDot.className = `status-dot ${effectiveStatus}`;
        
        // Update status text
        const statusText = document.getElementById(`${moduleId}-state`);
        const statusMap = {
            'operational': 'Operativo',
            'standby': 'Stand By',
            'maintenance': 'Mantenimiento'
        };
        statusText.textContent = statusMap[effectiveStatus];
        
        // Update last change
        document.getElementById(`${moduleId}-last-change`).textContent = module.lastChange;
        
        // Update module card styling with effective status
        moduleCard.setAttribute('data-status', effectiveStatus);
        
        // Update comments display
        this.updateCommentsDisplay(moduleId);
    }

    updateCoreCommentsDisplay(coreId) {
        const commentsListElement = document.getElementById(`${coreId}-comments`);
        const commentsArray = this.cores[coreId].comments;
        
        commentsListElement.innerHTML = '';
        
        // Show only the last comment
        if (commentsArray.length > 0) {
            const lastComment = commentsArray[0]; // Most recent comment
            const commentElement = document.createElement('div');
            commentElement.className = 'comment-item';
            commentElement.innerHTML = `
                <div class="comment-text">${lastComment.text}</div>
                <div class="comment-meta">${lastComment.timestamp}</div>
            `;
            commentsListElement.appendChild(commentElement);
        }
    }

    updateCommentsDisplay(targetId) {
        let commentsListElement;
        let commentsArray;

        if (this.cores[targetId]) { // It's a core
            commentsListElement = document.getElementById(`${targetId}-comments`);
            commentsArray = this.cores[targetId].comments;
        } else if (this.modules[targetId]) { // It's a module
            commentsListElement = document.getElementById(`${targetId}-comments`);
            commentsArray = this.modules[targetId].comments;
        } else {
            console.error(`Invalid targetId: ${targetId}`);
            return;
        }
        
        commentsListElement.innerHTML = '';
        
        // Show only the last comment
        if (commentsArray.length > 0) {
            const lastComment = commentsArray[0]; // Most recent comment
            const commentElement = document.createElement('div');
            commentElement.className = 'comment-item';
            commentElement.innerHTML = `
                <div class="comment-text">${lastComment.text}</div>
                <div class="comment-meta">${lastComment.timestamp}</div>
            `;
            commentsListElement.appendChild(commentElement);
        }
    }

    updateOverview() {
        const counts = this.getStatusCounts();
        
        document.getElementById('operationalCount').textContent = counts.operational;
        document.getElementById('maintenanceCount').textContent = counts.maintenance;
        document.getElementById('standbyCount').textContent = counts.standby;
        
        // Update system status
        const systemStatusDot = document.querySelector('#systemStatus .status-dot');
        const systemStatusText = document.querySelector('#systemStatus .status-text');
        
        if (counts.maintenance > 0) {
            systemStatusDot.className = 'status-dot maintenance';
            systemStatusText.textContent = 'Sistema en Mantenimiento';
        } else if (counts.standby > 0) {
            systemStatusDot.className = 'status-dot standby';
            systemStatusText.textContent = 'Sistema en Stand By';
        } else {
            systemStatusDot.className = 'status-dot operational';
            systemStatusText.textContent = 'Sistema Operativo';
        }
        
        // Update timestamp
        const now = new Date();
        const timeString = now.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
        const dateString = now.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
        document.getElementById('updateTime').textContent = `${timeString} - ${dateString}`;
    }

    getStatusCounts() {
        let counts = { operational: 0, maintenance: 0, standby: 0 };
        
        Object.values(this.modules).forEach(module => {
            let effectiveStatus = module.status;
            
            // Apply core dependency logic
            if (module.dependsOnCore && this.cores[module.dependsOnCore]) {
                const coreStatus = this.cores[module.dependsOnCore].status;
                if (coreStatus === 'standby' || coreStatus === 'maintenance') {
                    effectiveStatus = 'standby';
                }
            }
            
            counts[effectiveStatus]++;
        });
        
        return counts;
    }

    changeCoreStatus(coreId) {
        this.currentModalTargetId = coreId;
        this.isCoreModal = true;
        this.isCommentModal = false;
        
        const core = this.cores[coreId];
        document.getElementById('modalTitle').textContent = 'Cambiar Estado del Core';
        document.getElementById('modalModuleName').textContent = core.name;
        document.getElementById('modalModuleType').textContent = core.type;
        
        // Set current status as selected
        const radioButtons = document.querySelectorAll('input[name="newStatus"]');
        radioButtons.forEach(radio => {
            radio.checked = radio.value === core.status;
        });
        
        document.getElementById('statusModal').style.display = 'block';
    }

    changeModuleStatus(moduleId) {
        this.currentModalTargetId = moduleId;
        this.isCoreModal = false;
        this.isCommentModal = false;
        
        const module = this.modules[moduleId];
        document.getElementById('modalTitle').textContent = 'Cambiar Estado del Módulo';
        document.getElementById('modalModuleName').textContent = module.name;
        document.getElementById('modalModuleType').textContent = module.type;
        
        // Set current status as selected
        const radioButtons = document.querySelectorAll('input[name="newStatus"]');
        radioButtons.forEach(radio => {
            radio.checked = radio.value === module.status;
        });
        
        document.getElementById('statusModal').style.display = 'block';
    }

    confirmStatusChange() {
        const selectedStatus = document.querySelector('input[name="newStatus"]:checked');
        if (!selectedStatus) {
            alert('Por favor seleccione un estado');
            return;
        }
        
        const newStatus = selectedStatus.value;
        const now = new Date();
        const timeString = now.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
        const dateString = now.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
        const timestamp = `${timeString} - ${dateString}`;
        
        if (this.isCoreModal) {
            // Update core
            this.cores[this.currentModalTargetId].status = newStatus;
            this.cores[this.currentModalTargetId].lastChange = timestamp;
            this.updateCoreDisplay(this.currentModalTargetId);
            
            // Update all modules that depend on this core
            Object.keys(this.modules).forEach(moduleId => {
                const module = this.modules[moduleId];
                if (module.dependsOnCore === this.currentModalTargetId) {
                    this.updateModuleDisplay(moduleId);
                }
            });
        } else {
            // Update module
            this.modules[this.currentModalTargetId].status = newStatus;
            this.modules[this.currentModalTargetId].lastChange = timestamp;
            this.updateModuleDisplay(this.currentModalTargetId);
        }
        
        this.updateOverview();
        this.closeModal();
        
        // Show notification
        this.showNotification('Estado actualizado correctamente');
    }

    addCoreComment(coreId) {
        this.currentModalTargetId = coreId;
        this.isCommentModal = true;
        
        const core = this.cores[coreId];
        document.getElementById('commentModalTitle').textContent = 'Agregar Comentario al Core';
        document.getElementById('commentModalModuleName').textContent = core.name;
        document.getElementById('commentModalModuleType').textContent = core.type;
        
        document.getElementById('commentText').value = '';
        document.getElementById('commentModal').style.display = 'block';
    }

    addComment(moduleId) {
        this.currentModalTargetId = moduleId;
        this.isCommentModal = true;
        
        const module = this.modules[moduleId];
        document.getElementById('commentModalTitle').textContent = 'Agregar Comentario al Módulo';
        document.getElementById('commentModalModuleName').textContent = module.name;
        document.getElementById('commentModalModuleType').textContent = module.type;
        
        document.getElementById('commentText').value = '';
        document.getElementById('commentModal').style.display = 'block';
    }

    saveComment() {
        const commentText = document.getElementById('commentText').value.trim();
        if (!commentText) {
            alert('Por favor escriba un comentario');
            return;
        }
        
        const now = new Date();
        const timeString = now.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
        const dateString = now.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
        const timestamp = `${timeString} - ${dateString}`;
        
        const newComment = {
            text: commentText,
            timestamp: timestamp
        };
        
        if (this.cores[this.currentModalTargetId]) {
            // Add to core comments
            this.cores[this.currentModalTargetId].comments.unshift(newComment);
            this.updateCoreCommentsDisplay(this.currentModalTargetId);
        } else if (this.modules[this.currentModalTargetId]) {
            // Add to module comments
            this.modules[this.currentModalTargetId].comments.unshift(newComment);
            this.updateCommentsDisplay(this.currentModalTargetId);
        }
        
        this.closeCommentModal();
        this.showNotification('Comentario agregado correctamente');
    }

    closeModal() {
        document.getElementById('statusModal').style.display = 'none';
        this.currentModalTargetId = null;
        this.isCoreModal = false;
        this.isCommentModal = false;
    }

    closeCommentModal() {
        document.getElementById('commentModal').style.display = 'none';
        this.currentModalTargetId = null;
        this.isCommentModal = false;
    }

    showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #48bb78, #38a169);
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            z-index: 1001;
            font-weight: 600;
            animation: slideInRight 0.3s ease;
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    simulateRandomStates() {
        const statuses = ['operational', 'standby', 'maintenance'];
        const now = new Date();
        const timeString = now.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
        const dateString = now.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
        const timestamp = `${timeString} - ${dateString}`;
        
        // Simulate core statuses first
        Object.keys(this.cores).forEach(coreId => {
            const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
            this.cores[coreId].status = randomStatus;
            this.cores[coreId].lastChange = timestamp;
        });
        
        // Then simulate module statuses
        Object.keys(this.modules).forEach(moduleId => {
            const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
            this.modules[moduleId].status = randomStatus;
            this.modules[moduleId].lastChange = timestamp;
        });
        
        this.updateAllDisplays();
        this.showNotification('Estados simulados correctamente');
    }

    startAutoUpdate() {
        // Update every 30 seconds
        this.updateInterval = setInterval(() => {
            this.updateOverview();
        }, 30000);
    }

    stopAutoUpdate() {
        if (this.updateInterval) {
            clearInterval(this.updateInterval);
            this.updateInterval = null;
        }
    }
}

// Global functions for HTML onclick handlers
function changeCoreStatus(coreId) {
    swaRossiSystem.changeCoreStatus(coreId);
}

function changeModuleStatus(moduleId) {
    swaRossiSystem.changeModuleStatus(moduleId);
}

function addCoreComment(coreId) {
    swaRossiSystem.addCoreComment(coreId);
}

function addComment(moduleId) {
    swaRossiSystem.addComment(moduleId);
}

function closeModal() {
    swaRossiSystem.closeModal();
}

function closeCommentModal() {
    swaRossiSystem.closeCommentModal();
}

function confirmStatusChange() {
    swaRossiSystem.confirmStatusChange();
}

function saveComment() {
    swaRossiSystem.saveComment();
}

function simulateRandomStates() {
    swaRossiSystem.simulateRandomStates();
}

function setCoreOperational() {
    Object.keys(swaRossiSystem.cores).forEach(coreId => {
        swaRossiSystem.cores[coreId].status = 'operational';
        const now = new Date();
        const timeString = now.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
        const dateString = now.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
        swaRossiSystem.cores[coreId].lastChange = `${timeString} - ${dateString}`;
    });
    
    // Update all displays to reflect the changes
    swaRossiSystem.updateAllDisplays();
    swaRossiSystem.showNotification('Todos los cores activados');
}

function setCoreStandby() {
    Object.keys(swaRossiSystem.cores).forEach(coreId => {
        swaRossiSystem.cores[coreId].status = 'standby';
        const now = new Date();
        const timeString = now.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
        const dateString = now.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
        swaRossiSystem.cores[coreId].lastChange = `${timeString} - ${dateString}`;
    });
    
    // Update all displays to reflect the changes
    swaRossiSystem.updateAllDisplays();
    swaRossiSystem.showNotification('Todos los cores en Stand By');
}

function setCoreMaintenance() {
    Object.keys(swaRossiSystem.cores).forEach(coreId => {
        swaRossiSystem.cores[coreId].status = 'maintenance';
        const now = new Date();
        const timeString = now.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
        const dateString = now.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
        swaRossiSystem.cores[coreId].lastChange = `${timeString} - ${dateString}`;
    });
    
    // Update all displays to reflect the changes
    swaRossiSystem.updateAllDisplays();
    swaRossiSystem.showNotification('Todos los cores en Mantenimiento');
}

// Initialize system when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.swaRossiSystem = new SWARossiSystem();
    
    // Close modals when clicking outside
    window.onclick = function(event) {
        const statusModal = document.getElementById('statusModal');
        const commentModal = document.getElementById('commentModal');
        
        if (event.target === statusModal) {
            swaRossiSystem.closeModal();
        }
        if (event.target === commentModal) {
            swaRossiSystem.closeCommentModal();
        }
    };
    
    // Initialize comment displays for all cores and modules
    Object.keys(swaRossiSystem.cores).forEach(coreId => {
        swaRossiSystem.updateCoreCommentsDisplay(coreId);
    });
    
    Object.keys(swaRossiSystem.modules).forEach(moduleId => {
        swaRossiSystem.updateCommentsDisplay(moduleId);
    });
});

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
