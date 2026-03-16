// ============================================================
// COMPONENT DATA
// ============================================================
const COMPONENTS = [
    { cat:'General', id:'accordion', name:'Accordion', file:'components/accordion.html', icon:'M19 9l-7 7-7-7' },
    { cat:'General', id:'alert', name:'Alert', file:'components/alert.html', icon:'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' },
    { cat:'General', id:'avatar', name:'Avatar Group', file:'components/avatar.html', icon:'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { cat:'General', id:'badge', name:'Badge', file:'components/badge.html', icon:'M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z' },
    { cat:'General', id:'blockquote', name:'Blockquote', file:'components/blockquote.html', icon:'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z' },
    { cat:'General', id:'button', name:'Button Group', file:'components/button.html', icon:'M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5' },
    { cat:'General', id:'card', name:'Card', file:'components/card.html', icon:'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5z' },
    { cat:'General', id:'carousel', name:'Carousel', file:'components/carousel.html', icon:'M4 16l4.586-4.586a2 2 0 012.828 0L16 16' },
    { cat:'General', id:'chat', name:'Chat Bubbles', file:'components/chat.html', icon:'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6' },
    { cat:'General', id:'collapse', name:'Collapse', file:'components/collapse.html', icon:'M19 13l-7 7-7-7m14-8l-7 7-7-7' },
    { cat:'General', id:'datepicker', name:'Datepicker', file:'components/datepicker.html', icon:'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { cat:'General', id:'devices', name:'Devices', file:'components/devices.html', icon:'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' },
    { cat:'General', id:'divider', name:'Divider', file:'components/divider.html', icon:'M5 12h14' },
    { cat:'General', id:'file-progress', name:'File Progress', file:'components/file-progress.html', icon:'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586' },
    { cat:'General', id:'kbd', name:'KBD Keyboard', file:'components/kbd.html', icon:'M3 10h18M3 14h18m-9-4v8' },
    { cat:'General', id:'legend', name:'Legend Indicator', file:'components/legend.html', icon:'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2' },
    { cat:'General', id:'link', name:'Link', file:'components/link.html', icon:'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101' },
    { cat:'General', id:'list', name:'List Group', file:'components/list.html', icon:'M4 6h16M4 10h16M4 14h16M4 18h16' },
    { cat:'General', id:'progress', name:'Progress', file:'components/progress.html', icon:'M13 10V3L4 14h7v7l9-11h-7z' },
    { cat:'General', id:'ratings', name:'Ratings', file:'components/ratings.html', icon:'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674' },
    { cat:'General', id:'skeleton', name:'Skeleton', file:'components/skeleton.html', icon:'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7' },
    { cat:'General', id:'spinner', name:'Spinner', file:'components/spinner.html', icon:'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9' },
    { cat:'General', id:'icons', name:'Static Icons', file:'components/icons.html', icon:'M4 6h16M4 12h16M4 18h16' },
    { cat:'General', id:'stepper', name:'Stepper', file:'components/stepper.html', icon:'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10' },
    { cat:'General', id:'timeline', name:'Timeline', file:'components/timeline.html', icon:'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    { cat:'General', id:'toasts', name:'Toasts', file:'components/toasts.html', icon:'M15 17h5l-1.405-1.405' },
    { cat:'General', id:'tree-view', name:'Tree View', file:'components/tree-view.html', icon:'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5' },
    { cat:'General', id:'typography', name:'Typography', file:'components/typography.html', icon:'M4 6h16M4 12h16m-7 6h7' },
    { cat:'Navigation', id:'breadcrumb', name:'Breadcrumb', file:'components/breadcrumb.html', icon:'M9 5l7 7-7 7' },
    { cat:'Navigation', id:'mega-menu', name:'Mega Menu', file:'components/mega-menu.html', icon:'M4 6h16M4 12h16M4 18h7' },
    { cat:'Navigation', id:'navbar', name:'Navbar', file:'components/navbar.html', icon:'M4 6h16M4 12h16M4 18h16' },
    { cat:'Navigation', id:'tabs', name:'Tabs / Navs', file:'components/tabs.html', icon:'M5 12h14M5 12a2 2 0 01-2-2V6' },
    { cat:'Navigation', id:'pagination', name:'Pagination', file:'components/pagination.html', icon:'M7 16l-4-4m0 0l4-4m-4 4h18' },
    { cat:'Navigation', id:'scrollspy', name:'Scrollspy', file:'components/scrollspy.html', icon:'M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
    { cat:'Navigation', id:'sidebar-c', name:'Sidebar', file:'components/sidebar.html', icon:'M9 17V7m0 10a2 2 0 01-2 2H5' },
    { cat:'Forms', id:'checkbox', name:'Checkbox/Radio', file:'components/checkbox.html', icon:'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
    { cat:'Forms', id:'color-picker', name:'Color Picker', file:'components/color-picker.html', icon:'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4z' },
    { cat:'Forms', id:'combobox', name:'ComboBox', file:'components/combobox.html', icon:'M8 9l4-4 4 4m0 6l-4 4-4-4' },
    { cat:'Forms', id:'file-input', name:'File Input', file:'components/file-input.html', icon:'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6' },
    { cat:'Forms', id:'input', name:'Input', file:'components/input.html', icon:'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11' },
    { cat:'Forms', id:'pin-input', name:'PIN Input', file:'components/pin-input.html', icon:'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6' },
    { cat:'Forms', id:'range', name:'Range Slider', file:'components/range.html', icon:'M3 10h18M7 15h1m4 0h1m4 0h1' },
    { cat:'Forms', id:'searchbox', name:'SearchBox', file:'components/searchbox.html', icon:'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
    { cat:'Forms', id:'select', name:'Select', file:'components/select.html', icon:'M19 9l-7 7-7-7' },
    { cat:'Forms', id:'password', name:'Strong Password', file:'components/password.html', icon:'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6' },
    { cat:'Forms', id:'switch', name:'Switch', file:'components/switch.html', icon:'M8 7h8a4 4 0 110 8H8a4 4 0 110-8z' },
    { cat:'Forms', id:'textarea', name:'Textarea', file:'components/textarea.html', icon:'M4 6h16M4 12h16M4 18h7' },
    { cat:'Forms', id:'toggle-count', name:'Toggle Count', file:'components/toggle-count.html', icon:'M12 9v3m0 0v3m0-3h3m-3 0H9' },
    { cat:'Forms', id:'toggle-password', name:'Toggle Password', file:'components/toggle-password.html', icon:'M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
    { cat:'Forms', id:'form-full', name:'Complete Form', file:'components/form.html', icon:'M3 8l7.89 5.26a2 2 0 002.22 0L21 8' },
    { cat:'Overlays', id:'context-menu', name:'Context Menu', file:'components/context-menu.html', icon:'M4 6h16M4 12h16M4 18h16' },
    { cat:'Overlays', id:'dropdown', name:'Dropdown', file:'components/dropdown.html', icon:'M19 9l-7 7-7-7' },
    { cat:'Overlays', id:'modal', name:'Modal', file:'components/modal.html', icon:'M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M3 19v-8a2 2 0 012-2h14' },
    { cat:'Overlays', id:'offcanvas', name:'Offcanvas', file:'components/offcanvas.html', icon:'M4 6h16M4 12h16M4 18h16' },
    { cat:'Overlays', id:'popover', name:'Popover', file:'components/popover.html', icon:'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6' },
    { cat:'Overlays', id:'tooltip', name:'Tooltip', file:'components/tooltip.html', icon:'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0' },
    { cat:'Data', id:'charts', name:'Charts', file:'components/charts.html', icon:'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2z' },
    { cat:'Data', id:'table', name:'Table', file:'components/table.html', icon:'M3 10h18M3 14h18m-9-4v8' },
    { cat:'Data', id:'confetti', name:'Confetti', file:'components/confetti.html', icon:'M5 3v4M3 5h4M6 17v4m-2-2h4' },
    { cat:'Data', id:'map', name:'Maps', file:'components/map.html', icon:'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' },
    { cat:'Data', id:'clipboard', name:'Clipboard', file:'components/clipboard.html', icon:'M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1' },
    { cat:'Data', id:'datamaps', name:'Datamaps', file:'components/datamaps.html', icon:'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2' },
    { cat:'Sections', id:'hero', name:'Hero Section', file:'components/hero.html', icon:'M4 16l4.586-4.586a2 2 0 012.828 0L16 16' },
    { cat:'Sections', id:'features', name:'Features Grid', file:'components/features.html', icon:'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z' },
    { cat:'Sections', id:'pricing', name:'Pricing Plans', file:'components/pricing.html', icon:'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2' },
    { cat:'Sections', id:'footer', name:'Footer', file:'components/footer.html', icon:'M3 12l2-2m0 0l7-7 7 7' },
    { cat:'Advanced', id:'editor', name:'WYSIWYG Editor', file:'components/editor.html', icon:'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5' },
    { cat:'Advanced', id:'splitter', name:'Layout Splitter', file:'components/splitter.html', icon:'M8 7v10m8-10v10' },
    { cat:'Advanced', id:'copy-markup', name:'Copy Markup', file:'components/copy-markup.html', icon:'M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1' },
    { cat:'Advanced', id:'file-upload', name:'File Upload', file:'components/file-upload.html', icon:'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6' },
];

// SVG placeholder for image areas
const IMG_PLACEHOLDER_SVG = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="4" y="8" width="40" height="32" rx="2" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4 3"/>
  <circle cx="16" cy="20" r="4" stroke="#94a3b8" stroke-width="2"/>
  <path d="M4 34 L16 24 L24 30 L32 22 L44 32" stroke="#94a3b8" stroke-width="2" fill="none" stroke-linejoin="round"/>
</svg>`;

// ============================================================
// STATE
// ============================================================
let canvasZoom = 1;
let itemUID = 0;
let dragSrcEl = null; // The .ci being dragged

// ============================================================
// DOM
// ============================================================
const dropZone    = document.getElementById('drop-zone');
const canvas      = document.getElementById('canvas');
const viewport    = document.getElementById('viewport');
const compList    = document.getElementById('component-list');
const searchInput = document.getElementById('component-search');
const statusEl    = document.getElementById('canvas-status');
const zoomValEl   = document.getElementById('zoom-val');
const toastEl     = document.getElementById('toast');
const emptyState  = document.getElementById('empty-state');

// ============================================================
// SIDEBAR — Render component list
// ============================================================
function renderSidebar(filter = '') {
    compList.innerHTML = '';
    const terms = filter.toLowerCase().trim().split(/\s+/).filter(Boolean);
    const cats = [...new Set(COMPONENTS.map(c => c.cat))];

    cats.forEach(cat => {
        const items = COMPONENTS.filter(c => {
            if (c.cat !== cat) return false;
            if (!terms.length) return true;
            return terms.every(t => c.name.toLowerCase().includes(t) || cat.toLowerCase().includes(t));
        });
        if (!items.length) return;

        const h = document.createElement('div');
        h.className = 'cat-header';
        h.textContent = cat;
        compList.appendChild(h);

        items.forEach(comp => {
            const el = document.createElement('div');
            el.className = 'comp-item';
            el.innerHTML = `
                <div class="comp-icon">
                    <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${comp.icon}"/></svg>
                </div>
                <span>${comp.name}</span>
            `;
            el.addEventListener('click', () => addComponent(comp, dropZone));
            compList.appendChild(el);
        });
    });

    if (!compList.children.length) {
        compList.innerHTML = '<div style="padding:20px;text-align:center;font-size:11px;color:#94a3b8;">No results</div>';
    }
}
searchInput.addEventListener('input', e => renderSidebar(e.target.value));
renderSidebar();

// ============================================================
// ADD COMPONENT — Creates a .ci element inside a target container
// ============================================================
async function addComponent(comp, targetContainer, beforeEl = null) {
    let html = '';
    try {
        const res = await fetch(comp.file);
        if (!res.ok) throw new Error('not found');
        html = await res.text();
    } catch {
        html = `<div style="padding:16px;border:2px dashed #94a3b8;color:#94a3b8;font-size:11px;font-weight:600;">[${comp.name} — not found]</div>`;
    }

    // Replace plain text IMAGE placeholders with proper SVG placeholders
    html = html.replace(
        /(<div[^>]*class="[^"]*wf-placeholder[^"]*"[^>]*>)\s*(IMAGE[^<]*)\s*(<\/div>)/gi,
        `$1<div class="wf-img">${IMG_PLACEHOLDER_SVG}<span>Image</span></div>$3`
    );
    // Also handle standalone text IMAGE placeholders
    html = html.replace(
        />(\s*IMAGE\s*(?:\/\s*ILLUSTRATION)?\s*PLACEHOLDER\s*)</gi,
        `><div class="wf-img">${IMG_PLACEHOLDER_SVG}<span>Image / Illustration</span></div><`
    );

    // Hide empty state
    if (emptyState) emptyState.style.display = 'none';

    const ci = document.createElement('div');
    ci.className = 'ci';
    ci.dataset.compId = comp.id;
    ci.dataset.uid = ++itemUID;

    ci.innerHTML = `
        <div class="ci-bar" draggable="true">
            <div class="ci-bar-left">
                <div class="dots"><span></span><span></span><span></span><span></span><span></span><span></span></div>
                <span class="ci-bar-label">${comp.name}</span>
            </div>
            <div class="ci-btns">
                <button class="ci-btn dup" title="Duplicate">⎘</button>
                <button class="ci-btn del" title="Delete">✕</button>
            </div>
        </div>
        <div class="ci-content">${html}</div>
    `;

    if (beforeEl) {
        targetContainer.insertBefore(ci, beforeEl);
    } else {
        targetContainer.appendChild(ci);
    }

    // ---- Delete ----
    ci.querySelector('.del').addEventListener('click', (e) => {
        e.stopPropagation();
        ci.remove();
        updateStatus();
        showEmptyIfNeeded();
    });

    // ---- Duplicate ----
    ci.querySelector('.dup').addEventListener('click', (e) => {
        e.stopPropagation();
        addComponent(comp, ci.parentElement, ci.nextElementSibling);
    });

    // ---- DRAG START (from bar handle) ----
    const bar = ci.querySelector('.ci-bar');
    bar.addEventListener('dragstart', (e) => {
        dragSrcEl = ci;
        ci.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', ci.dataset.uid);
    });
    bar.addEventListener('dragend', () => {
        ci.classList.remove('dragging');
        dragSrcEl = null;
        clearAllHighlights();
    });

    // ---- DROP TARGET: the content area allows nesting ----
    const content = ci.querySelector('.ci-content');
    content.addEventListener('dragover', (e) => {
        if (!dragSrcEl || dragSrcEl === ci) return;
        // Don't allow nesting into own children
        if (dragSrcEl.contains(ci)) return;
        e.preventDefault();
        e.stopPropagation();
        e.dataTransfer.dropEffect = 'move';
        clearAllHighlights();
        content.classList.add('nest-target');
    });
    content.addEventListener('dragleave', (e) => {
        if (e.relatedTarget && content.contains(e.relatedTarget)) return;
        content.classList.remove('nest-target');
    });
    content.addEventListener('drop', (e) => {
        e.preventDefault();
        e.stopPropagation();
        content.classList.remove('nest-target');
        if (!dragSrcEl || dragSrcEl === ci || dragSrcEl.contains(ci)) return;
        // Nest: move the dragged element inside this content
        content.appendChild(dragSrcEl);
        dragSrcEl.classList.remove('dragging');
        dragSrcEl = null;
        updateStatus();
    });

    // ---- DROP TARGET: the whole .ci for reordering (above/below) ----
    ci.addEventListener('dragover', (e) => {
        if (!dragSrcEl || dragSrcEl === ci) return;
        if (dragSrcEl.contains(ci)) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    });

    // ---- DOUBLE CLICK to edit text ----
    content.addEventListener('dblclick', (e) => {
        const el = e.target;
        const editable = ['P','SPAN','H1','H2','H3','H4','H5','H6','A','BUTTON','LI','TD','TH','LABEL'];
        if (editable.includes(el.tagName) && !el.querySelector('svg')) {
            e.stopPropagation();
            el.contentEditable = 'true';
            el.style.outline = '1px dashed #64748b';
            el.style.outlineOffset = '1px';
            el.focus();
            el.addEventListener('blur', () => {
                el.contentEditable = 'false';
                el.style.outline = '';
                el.style.outlineOffset = '';
            }, { once: true });
        }
    });

    updateStatus();
    return ci;
}

// ============================================================
// DROP-ZONE — accept reorder drops & sidebar drops
// ============================================================
dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';

    if (!dragSrcEl) return;

    // Find the closest .ci under cursor for insertion position (only direct children)
    const children = [...dropZone.querySelectorAll(':scope > .ci')];
    clearAllHighlights();

    let insertBefore = null;
    for (const child of children) {
        const rect = child.getBoundingClientRect();
        const midY = rect.top + rect.height / 2;
        if (e.clientY < midY) {
            insertBefore = child;
            break;
        }
    }
    // Visual indicator could be added here if needed
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    clearAllHighlights();

    if (!dragSrcEl) return;

    // Find insertion position among direct children
    const children = [...dropZone.querySelectorAll(':scope > .ci')];
    let insertBefore = null;
    for (const child of children) {
        if (child === dragSrcEl) continue;
        const rect = child.getBoundingClientRect();
        const midY = rect.top + rect.height / 2;
        if (e.clientY < midY) {
            insertBefore = child;
            break;
        }
    }

    if (insertBefore) {
        dropZone.insertBefore(dragSrcEl, insertBefore);
    } else {
        dropZone.appendChild(dragSrcEl);
    }

    dragSrcEl.classList.remove('dragging');
    dragSrcEl = null;
    updateStatus();
});

// ============================================================
// HELPERS
// ============================================================
function clearAllHighlights() {
    document.querySelectorAll('.nest-target').forEach(el => el.classList.remove('nest-target'));
    document.querySelectorAll('.drag-over-self').forEach(el => el.classList.remove('drag-over-self'));
}

function showEmptyIfNeeded() {
    if (emptyState && !dropZone.querySelector('.ci')) {
        emptyState.style.display = 'flex';
    }
}

function updateStatus() {
    const count = document.querySelectorAll('.ci').length;
    statusEl.textContent = count === 0 ? 'Empty' : `${count} component${count > 1 ? 's' : ''}`;
}

// ============================================================
// DEVICE PRESETS
// ============================================================
document.querySelectorAll('.device-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.device-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const w = parseInt(btn.dataset.w);
        const label = btn.dataset.label;
        canvas.style.width = w + 'px';
        canvas.dataset.label = label;
    });
});

// ============================================================
// ZOOM (CSS transform on #canvas — no layout break)
// ============================================================
function setZoom(z) {
    canvasZoom = Math.max(0.25, Math.min(2, z));
    canvas.style.transform = `scale(${canvasZoom})`;
    canvas.style.transformOrigin = 'top center';
    zoomValEl.textContent = Math.round(canvasZoom * 100) + '%';
}

document.getElementById('btn-zin').addEventListener('click', () => setZoom(canvasZoom + 0.1));
document.getElementById('btn-zout').addEventListener('click', () => setZoom(canvasZoom - 0.1));
document.getElementById('btn-zfit').addEventListener('click', () => {
    const vpW = viewport.clientWidth - 60;
    const cW = parseInt(canvas.style.width) || 1440;
    setZoom(Math.min(1, vpW / cW));
});

// Ctrl + Scroll to zoom canvas (prevent browser zoom)
document.addEventListener('wheel', (e) => {
    if (!e.ctrlKey && !e.metaKey) return;
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setZoom(canvasZoom + delta);
}, { passive: false });

// ============================================================
// CLEAR
// ============================================================
document.getElementById('btn-clear').addEventListener('click', () => {
    if (!confirm('Clear all components?')) return;
    dropZone.querySelectorAll('.ci').forEach(el => el.remove());
    itemUID = 0;
    updateStatus();
    showEmptyIfNeeded();
});

// ============================================================
// SCREENSHOT — temporarily reset zoom, hide controls, capture
// ============================================================
document.getElementById('btn-screenshot').addEventListener('click', async () => {
    // Save current zoom
    const savedZoom = canvasZoom;
    // Reset zoom to 1:1 for accurate capture
    canvas.style.transform = 'scale(1)';
    // Add screenshot mode class to hide bars
    canvas.classList.add('screenshot-mode');

    // Wait a frame for reflow
    await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));

    try {
        const cvs = await html2canvas(canvas, {
            useCORS: true,
            scale: 2,
            backgroundColor: '#ffffff',
            logging: false,
        });
        const link = document.createElement('a');
        link.download = `wireframe-${Date.now()}.png`;
        link.href = cvs.toDataURL('image/png');
        link.click();
        notify('Screenshot saved!');
    } catch (err) {
        notify('Screenshot failed');
        console.error(err);
    } finally {
        // Restore
        canvas.classList.remove('screenshot-mode');
        canvas.style.transform = `scale(${savedZoom})`;
    }
});

// ============================================================
// TOAST
// ============================================================
let toastTimer;
function notify(msg) {
    toastEl.textContent = msg;
    toastEl.style.opacity = '1';
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.style.opacity = '0', 2500);
}

// ============================================================
// INIT
// ============================================================
updateStatus();