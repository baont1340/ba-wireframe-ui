const componentData = [
    // Application UI / General
    { category: 'General', id: 'accordion', name: 'Accordion', file: 'components/accordion.html', icon: 'M19 9l-7 7-7-7' },
    { category: 'General', id: 'alert', name: 'Alert', file: 'components/alert.html', icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' },
    { category: 'General', id: 'avatar', name: 'Avatar Group', file: 'components/avatar.html', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { category: 'General', id: 'badge', name: 'Badge', file: 'components/badge.html', icon: 'M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z' },
    { category: 'General', id: 'blockquote', name: 'Blockquote', file: 'components/blockquote.html', icon: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z' },
    { category: 'General', id: 'button', name: 'Button Group', file: 'components/button.html', icon: 'M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5' },
    { category: 'General', id: 'card', name: 'Card', file: 'components/card.html', icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5z' },
    { category: 'General', id: 'carousel', name: 'Carousel', file: 'components/carousel.html', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16' },
    { category: 'General', id: 'chat', name: 'Chat Bubbles', file: 'components/chat.html', icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6' },
    { category: 'General', id: 'collapse', name: 'Collapse', file: 'components/collapse.html', icon: 'M19 13l-7 7-7-7m14-8l-7 7-7-7' },
    { category: 'General', id: 'datepicker', name: 'Datepicker', file: 'components/datepicker.html', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { category: 'General', id: 'devices', name: 'Devices', file: 'components/devices.html', icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' },
    { category: 'General', id: 'divider', name: 'Divider', file: 'components/divider.html', icon: 'M5 12h14' },
    { category: 'General', id: 'file-progress', name: 'File Progress', file: 'components/file-progress.html', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
    { category: 'General', id: 'kbd', name: 'KBD (Keyboard)', file: 'components/kbd.html', icon: 'M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' },
    { category: 'General', id: 'legend', name: 'Legend Indicator', file: 'components/legend.html', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' },
    { category: 'General', id: 'link', name: 'Link', file: 'components/link.html', icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1' },
    { category: 'General', id: 'list', name: 'List Group', file: 'components/list.html', icon: 'M4 6h16M4 10h16M4 14h16M4 18h16' },
    { category: 'General', id: 'progress', name: 'Progress', file: 'components/progress.html', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { category: 'General', id: 'ratings', name: 'Ratings', file: 'components/ratings.html', icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' },
    { category: 'General', id: 'skeleton', name: 'Skeleton', file: 'components/skeleton.html', icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4' },
    { category: 'General', id: 'spinner', name: 'Spinner', file: 'components/spinner.html', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' },
    { category: 'General', id: 'static-icons', name: 'Static Icons', file: 'components/icons.html', icon: 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z' },
    { category: 'General', id: 'stepper', name: 'Stepper', file: 'components/stepper.html', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
    { category: 'General', id: 'timeline', name: 'Timeline', file: 'components/timeline.html', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    { category: 'General', id: 'toasts', name: 'Toasts', file: 'components/toasts.html', icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' },
    { category: 'General', id: 'tree-view', name: 'Tree View', file: 'components/tree-view.html', icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z' },
    { category: 'General', id: 'typography', name: 'Typography', file: 'components/typography.html', icon: 'M4 6h16M4 12h16m-7 6h7' },

    // Navigation
    { category: 'Navigation', id: 'breadcrumb', name: 'Breadcrumb', file: 'components/breadcrumb.html', icon: 'M9 5l7 7-7 7' },
    { category: 'Navigation', id: 'mega-menu', name: 'Mega Menu', file: 'components/mega-menu.html', icon: 'M4 6h16M4 12h16M4 18h7' },
    { category: 'Navigation', id: 'navbar', name: 'Navbar', file: 'components/navbar.html', icon: 'M4 6h16M4 12h16M4 18h16' },
    { category: 'Navigation', id: 'tabs', name: 'Tabs / Navs', file: 'components/tabs.html', icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2' },
    { category: 'Navigation', id: 'pagination', name: 'Pagination', file: 'components/pagination.html', icon: 'M7 16l-4-4m0 0l4-4m-4 4h18' },
    { category: 'Navigation', id: 'scrollspy', name: 'Scrollspy', file: 'components/scrollspy.html', icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' },
    { category: 'Navigation', id: 'sidebar', name: 'Sidebar', file: 'components/sidebar.html', icon: 'M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7' },

    // Forms
    { category: 'Forms', id: 'checkbox', name: 'Checkbox / Radio', file: 'components/checkbox.html', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
    { category: 'Forms', id: 'color-picker', name: 'Color Picker', file: 'components/color-picker.html', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' },
    { category: 'Forms', id: 'combobox', name: 'ComboBox', file: 'components/combobox.html', icon: 'M8 9l4-4 4 4m0 6l-4 4-4-4' },
    { category: 'Forms', id: 'file-input', name: 'File Input', file: 'components/file-input.html', icon: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12' },
    { category: 'Forms', id: 'input', name: 'Input Support', file: 'components/input.html', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' },
    { category: 'Forms', id: 'pin-input', name: 'PIN Input', file: 'components/pin-input.html', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
    { category: 'Forms', id: 'range', name: 'Range Slider', file: 'components/range.html', icon: 'M3 10h18M7 15h1m4 0h1m4 0h1' },
    { category: 'Forms', id: 'searchbox', name: 'SearchBox', file: 'components/searchbox.html', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
    { category: 'Forms', id: 'select', name: 'Select', file: 'components/select.html', icon: 'M19 9l-7 7-7-7' },
    { category: 'Forms', id: 'password', name: 'Strong Password', file: 'components/password.html', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
    { category: 'Forms', id: 'switch', name: 'Switch', file: 'components/switch.html', icon: 'M8 7h8a4 4 0 110 8H8a4 4 0 110-8zm0 2a2 2 0 100 4 2 2 0 000-4z' },
    { category: 'Forms', id: 'textarea', name: 'Textarea', file: 'components/textarea.html', icon: 'M4 6h16M4 12h16M4 18h7' },
    { category: 'Forms', id: 'toggle-count', name: 'Toggle Count', file: 'components/toggle-count.html', icon: 'M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z' },
    { category: 'Forms', id: 'toggle-password', name: 'Toggle Password', file: 'components/toggle-password.html', icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z' },

    // Overlays
    { category: 'Overlays', id: 'context-menu', name: 'Context Menu', file: 'components/context-menu.html', icon: 'M4 6h16M4 12h16M4 18h16' },
    { category: 'Overlays', id: 'dropdown', name: 'Dropdown', file: 'components/dropdown.html', icon: 'M19 9l-7 7-7-7' },
    { category: 'Overlays', id: 'modal', name: 'Modal', file: 'components/modal.html', icon: 'M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M3 19v-8a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z' },
    { category: 'Overlays', id: 'offcanvas', name: 'Offcanvas', file: 'components/offcanvas.html', icon: 'M4 6h16M4 12h16M4 18h16' },
    { category: 'Overlays', id: 'popover', name: 'Popover', file: 'components/popover.html', icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z' },
    { category: 'Overlays', id: 'tooltip', name: 'Tooltip', file: 'components/tooltip.html', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },

    // Data Display
    { category: 'Data', id: 'charts', name: 'Charts', file: 'components/charts.html', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
    { category: 'Data', id: 'table', name: 'Table', file: 'components/table.html', icon: 'M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' },
    { category: 'Data', id: 'confetti', name: 'Confetti', file: 'components/confetti.html', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2 2m-2 2l2-2m2 15l2 2m-2 2l2-2' },
    { category: 'Data', id: 'map', name: 'Leaflet (Maps)', file: 'components/map.html', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' },
    { category: 'Data', id: 'clipboard', name: 'Clipboard', file: 'components/clipboard.html', icon: 'M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3' },
    { category: 'Data', id: 'datamaps', name: 'Datamaps', file: 'components/datamaps.html', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },

    // Sections
    { category: 'Sections', id: 'hero', name: 'Hero Section', file: 'components/hero.html', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { category: 'Sections', id: 'features', name: 'Features Grid', file: 'components/features.html', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z' },
    { category: 'Sections', id: 'pricing', name: 'Pricing Plans', file: 'components/pricing.html', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { category: 'Sections', id: 'footer', name: 'Footer', file: 'components/footer.html', icon: 'M3 12l2-2m0 0l7-7 7 7' },

    // Advanced
    { category: 'Advanced', id: 'copy-markup', name: 'Copy Markup', file: 'components/copy-markup.html', icon: 'M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3' },
    { category: 'Advanced', id: 'splitter', name: 'Layout Splitter', file: 'components/splitter.html', icon: 'M8 7v10m8-10v10M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z' },
    { category: 'Advanced', id: 'editor', name: 'WYSIWYG Editor', file: 'components/editor.html', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' },
    { category: 'Advanced', id: 'file-upload', name: 'File Upload', file: 'components/file-upload.html', icon: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12' },
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