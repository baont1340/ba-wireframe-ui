const components = [
    { id: 'navbar', name: 'Navigation Bar', file: 'components/navbar.html', icon: 'M4 6h16M4 12h16M4 18h16' },
    { id: 'hero', name: 'Hero Section', file: 'components/hero.html', icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z' },
    { id: 'features', name: 'Features Grid', file: 'components/features.html', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
    { id: 'pricing', name: 'Pricing Plans', file: 'components/pricing.html', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { id: 'table', name: 'Data Table', file: 'components/table.html', icon: 'M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' },
    { id: 'form', name: 'Contact Form', file: 'components/form.html', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { id: 'footer', name: 'Page Footer', file: 'components/footer.html', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
];

document.addEventListener('DOMContentLoaded', () => {
    const componentList = document.getElementById('component-list');
    const dropZone = document.getElementById('drop-zone');
    const emptyState = document.getElementById('canvas-empty-state');
    const clearBtn = document.getElementById('clear-canvas');
    const downloadBtn = document.getElementById('download-screenshot');
    const canvasStatus = document.getElementById('canvas-status');
    const toast = document.getElementById('toast');

    // Initialize Sidebar
    componentList.innerHTML = '';
    components.forEach(comp => {
        const item = document.createElement('div');
        item.className = 'component-item group';
        item.innerHTML = `
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 wf-border flex items-center justify-center bg-slate-50 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${comp.icon}"></path></svg>
                </div>
                <div>
                    <p class="font-bold text-sm">${comp.name}</p>
                    <p class="text-xs text-slate-400">Click to add</p>
                </div>
            </div>
        `;
        item.addEventListener('click', () => addComponentToCanvas(comp));
        componentList.appendChild(item);
    });

    async function addComponentToCanvas(comp) {
        try {
            const response = await fetch(comp.file);
            let html = await response.text();
            
            // Remove empty state if present
            if (emptyState) emptyState.remove();

            const wrapper = document.createElement('div');
            wrapper.className = 'canvas-item';
            wrapper.innerHTML = `
                ${html}
                <div class="canvas-item-controls">
                    <button class="control-btn move-up" title="Move Up">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
                    </button>
                    <button class="control-btn move-down" title="Move Down">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <button class="control-btn delete text-red-500" title="Remove">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    </button>
                </div>
            `;

            // Control events
            wrapper.querySelector('.move-up').addEventListener('click', () => {
                const prev = wrapper.previousElementSibling;
                if (prev) dropZone.insertBefore(wrapper, prev);
            });

            wrapper.querySelector('.move-down').addEventListener('click', () => {
                const next = wrapper.nextElementSibling;
                if (next) dropZone.insertBefore(next, wrapper);
            });

            wrapper.querySelector('.delete').addEventListener('click', () => {
                wrapper.remove();
                updateCanvasState();
            });

            dropZone.appendChild(wrapper);
            updateCanvasState();
            
            // Text Editing (Basic implementation)
            wrapper.querySelectorAll('h1, h2, h3, p, a, label, span, button, li').forEach(el => {
                if (el.children.length === 0) {
                    el.setAttribute('contenteditable', 'true');
                    el.classList.add('hover:bg-slate-50', 'outline-none', 'focus:ring-2', 'focus:ring-slate-300', 'rounded', 'px-1');
                }
            });

        } catch (error) {
            console.error('Failed to load component:', error);
            showNotification('Error loading component. Are you running a server?');
        }
    }

    function updateCanvasState() {
        const items = dropZone.querySelectorAll('.canvas-item');
        canvasStatus.textContent = items.length === 0 ? 'Empty Canvas' : `${items.length} Component${items.length > 1 ? 's' : ''}`;
        
        if (items.length === 0 && !document.getElementById('canvas-empty-state')) {
            dropZone.appendChild(emptyState);
        }
    }

    clearBtn.addEventListener('click', () => {
        if (confirm('Clear entire canvas?')) {
            dropZone.querySelectorAll('.canvas-item').forEach(item => item.remove());
            updateCanvasState();
        }
    });

    downloadBtn.addEventListener('click', async () => {
        // Hide controls before screenshot
        const controls = document.querySelectorAll('.canvas-item-controls');
        controls.forEach(c => c.style.display = 'none');
        
        // Remove contenteditable focus/highlights
        const active = document.activeElement;
        if (active) active.blur();

        try {
            const canvas = await html2canvas(dropZone, {
                useCORS: true,
                scale: 2, // Higher quality
                backgroundColor: '#ffffff'
            });
            
            const link = document.createElement('a');
            link.download = `wireframe-${Date.now()}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
            showNotification('Screenshot downloaded!');
        } catch (err) {
            console.error('Screenshot failed:', err);
            showNotification('Failed to captured screenshot.');
        } finally {
            controls.forEach(c => c.style.display = 'flex');
        }
    });

    function showNotification(msg) {
        toast.textContent = msg;
        toast.style.opacity = '1';
        setTimeout(() => {
            toast.style.opacity = '0';
        }, 3000);
    }
});