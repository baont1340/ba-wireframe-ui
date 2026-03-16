const componentData = [
    // Application UI / General
    { category: 'General', id: 'accordion', name: 'Accordion', file: 'components/accordion.html', icon: 'M19 9l-7 7-7-7' },
    { category: 'General', id: 'alert', name: 'Alert', file: 'components/alert.html', icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' },
    { category: 'General', id: 'avatar', name: 'Avatar', file: 'components/avatar.html', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { category: 'General', id: 'badge', name: 'Badge', file: 'components/badge.html', icon: 'M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z' },
    { category: 'General', id: 'blockquote', name: 'Blockquote', file: 'components/blockquote.html', icon: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z' },
    { category: 'General', id: 'button', name: 'Button', file: 'components/button.html', icon: 'M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122' },
    { category: 'General', id: 'card', name: 'Card', file: 'components/card.html', icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z' },
    { category: 'General', id: 'carousel', name: 'Carousel', file: 'components/carousel.html', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { category: 'General', id: 'chat', name: 'Chat Bubbles', file: 'components/chat.html', icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z' },
    { category: 'General', id: 'devices', name: 'Devices Mockup', file: 'components/devices.html', icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' },
    { category: 'General', id: 'skeleton', name: 'Skeleton', file: 'components/skeleton.html', icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4' },
    
    // Navigation
    { category: 'Navigation', id: 'navbar', name: 'Navbar', file: 'components/navbar.html', icon: 'M4 6h16M4 12h16M4 18h16' },
    { category: 'Navigation', id: 'sidebar', name: 'Sidebar', file: 'components/sidebar.html', icon: 'M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7' },
    { category: 'Navigation', id: 'breadcrumb', name: 'Breadcrumb', file: 'components/breadcrumb.html', icon: 'M9 5l7 7-7 7' },
    { category: 'Navigation', id: 'pagination', name: 'Pagination', file: 'components/pagination.html', icon: 'M7 16l-4-4m0 0l4-4m-4 4h18' },
    { category: 'Navigation', id: 'tabs', name: 'Tabs', file: 'components/tabs.html', icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2' },

    // Forms
    { category: 'Forms', id: 'input', name: 'Input', file: 'components/input.html', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' },
    { category: 'Forms', id: 'checkbox', name: 'Checkbox/Radio', file: 'components/checkbox.html', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
    { category: 'Forms', id: 'toggle', name: 'Switch/Toggle', file: 'components/switch.html', icon: 'M8 7h8a4 4 0 110 8H8a4 4 0 110-8zm0 2a2 2 0 100 4 2 2 0 000-4z' },
    { category: 'Forms', id: 'form-full', name: 'Complete Form', file: 'components/form.html', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    
    // Data Display
    { category: 'Data', id: 'table', name: 'Data Table', file: 'components/table.html', icon: 'M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' },
    { category: 'Data', id: 'charts', name: 'Charts', file: 'components/charts.html', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
    { category: 'Data', id: 'timeline', name: 'Timeline', file: 'components/timeline.html', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },

    // Sections
    { category: 'Sections', id: 'hero', name: 'Hero Section', file: 'components/hero.html', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { category: 'Sections', id: 'features', name: 'Features Grid', file: 'components/features.html', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z' },
    { category: 'Sections', id: 'pricing', name: 'Pricing Plans', file: 'components/pricing.html', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { category: 'Sections', id: 'footer', name: 'Footer', file: 'components/footer.html', icon: 'M3 12l2-2m0 0l7-7 7 7' },
];

document.addEventListener('DOMContentLoaded', () => {
    const componentList = document.getElementById('component-list');
    const searchInput = document.getElementById('component-search');
    const dropZone = document.getElementById('drop-zone');
    const emptyState = document.getElementById('canvas-empty-state');
    const clearBtn = document.getElementById('clear-canvas');
    const downloadBtn = document.getElementById('download-screenshot');
    const canvasStatus = document.getElementById('canvas-status');
    const toast = document.getElementById('toast');

    // Categorization Logic
    function renderComponents(filter = '') {
        componentList.innerHTML = '';
        const searchTerms = filter.toLowerCase().split(' ').filter(t => t);
        
        const categories = [...new Set(componentData.map(c => c.category))];
        
        categories.forEach(cat => {
            const catComps = componentData.filter(c => {
                const matchesSearch = searchTerms.every(term => 
                    c.name.toLowerCase().includes(term) || 
                    c.category.toLowerCase().includes(term)
                );
                return c.category === cat && matchesSearch;
            });

            if (catComps.length > 0) {
                // Category Header
                const header = document.createElement('div');
                header.className = 'bg-slate-50 px-6 py-2 text-[10px] font-bold text-slate-400 uppercase border-y border-slate-100';
                header.textContent = cat;
                componentList.appendChild(header);

                catComps.forEach(comp => {
                    const item = document.createElement('div');
                    item.className = 'component-item group';
                    item.innerHTML = `
                        <div class="flex items-center gap-3">
                            <div class="w-8 h-8 wf-border flex items-center justify-center bg-white group-hover:bg-slate-900 group-hover:text-white transition-colors">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${comp.icon}"></path></svg>
                            </div>
                            <div>
                                <p class="font-bold text-sm">${comp.name}</p>
                            </div>
                        </div>
                    `;
                    item.addEventListener('click', () => addComponentToCanvas(comp));
                    componentList.appendChild(item);
                });
            }
        });

        if (componentList.innerHTML === '') {
            componentList.innerHTML = '<div class="p-8 text-center text-slate-400 text-sm">No components found</div>';
        }
    }

    // Search input event
    searchInput.addEventListener('input', (e) => renderComponents(e.target.value));

    // Initial render
    renderComponents();

    async function addComponentToCanvas(comp) {
        try {
            const response = await fetch(comp.file);
            if (!response.ok) throw new Error('File not found');
            let html = await response.text();
            
            // Remove empty state if present
            const currentEmptyState = document.getElementById('canvas-empty-state');
            if (currentEmptyState) currentEmptyState.remove();

            const wrapper = document.createElement('div');
            wrapper.className = 'canvas-item';
            wrapper.innerHTML = `
                ${html}
                <div class="canvas-item-controls no-print">
                    <button class="control-btn move-up" title="Move Up">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
                    </button>
                    <button class="control-btn move-down" title="Move Down">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <button class="control-btn delete text-red-500" title="Remove">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-.867 12.142A2 2 0 0117.138 21H6.862a2 2 0 01-1.995-1.858L4 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
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
            
            // Text Editing
            wrapper.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, label, span, button, li, th, td').forEach(el => {
                if (el.children.length === 0 || (el.children.length > 0 && el.innerText.trim() !== '')) {
                    el.setAttribute('contenteditable', 'true');
                    el.classList.add('hover:bg-slate-50', 'outline-none', 'focus:ring-2', 'focus:ring-slate-300', 'rounded', 'px-1');
                }
            });

        } catch (error) {
            console.error('Failed to load component:', error);
            showNotification(`Missing: ${comp.name}`);
        }
    }

    function updateCanvasState() {
        const items = dropZone.querySelectorAll('.canvas-item');
        canvasStatus.textContent = items.length === 0 ? 'Empty Canvas' : `${items.length} Component${items.length > 1 ? 's' : ''}`;
        
        if (items.length === 0 && !document.getElementById('canvas-empty-state')) {
            dropZone.innerHTML = `
                <div id="canvas-empty-state" class="flex-1 flex flex-col items-center justify-center p-20 text-center space-y-4">
                    <div class="w-24 h-24 wf-placeholder border-4 border-slate-200">
                        <svg class="w-12 h-12 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                    </div>
                    <div>
                        <h3 class="text-2xl text-slate-300">Start building your UI</h3>
                        <p class="text-slate-300">Click components on the left to add them here</p>
                    </div>
                </div>
            `;
        }
    }

    clearBtn.addEventListener('click', () => {
        if (confirm('Clear entire canvas?')) {
            dropZone.innerHTML = '';
            updateCanvasState();
        }
    });

    downloadBtn.addEventListener('click', async () => {
        const controls = document.querySelectorAll('.no-print');
        controls.forEach(c => c.style.opacity = '0');
        
        const active = document.activeElement;
        if (active) active.blur();

        try {
            const canvas = await html2canvas(dropZone, {
                useCORS: true,
                scale: 2,
                backgroundColor: '#ffffff'
            });
            
            const link = document.createElement('a');
            link.download = `wireframe-${Date.now()}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
            showNotification('Screenshot downloaded!');
        } catch (err) {
            console.error('Screenshot failed:', err);
            showNotification('Screenshot failed.');
        } finally {
            controls.forEach(c => c.style.opacity = '1');
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