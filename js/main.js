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

// ============================================================
// STATE
// ============================================================
let currentZoom = 1;
let itemUID = 0;
let dragSrcEl = null;
let selectedEl = null;
let selectedComp = null;
let dropIndicator = null;

// ============================================================
// DOM REFS
// ============================================================
const dropZone      = document.getElementById('drop-zone');
const canvas        = document.getElementById('canvas');
const viewport      = document.getElementById('viewport');
const compList      = document.getElementById('component-list');
const searchInput   = document.getElementById('component-search');
const statusEl      = document.getElementById('canvas-status');
const toastEl       = document.getElementById('toast');
const emptyState    = document.getElementById('empty-state');
const canvasLabel   = document.getElementById('canvas-label-text');
const canvasDims    = document.getElementById('canvas-dimensions');
const qbZoomVal     = document.getElementById('qb-zoom-val');
const rpWidth       = document.getElementById('rp-width');
const rpHeight      = document.getElementById('rp-height');
const rpSelectedSec = document.getElementById('rp-selected-section');
const rpSelectedName= document.getElementById('rp-selected-name');
const rpNoSelection = document.getElementById('rp-no-selection');
const shortcutsModal= document.getElementById('shortcuts-modal');
const rightPanel    = document.getElementById('right-panel');

// ============================================================
// SIDEBAR
// ============================================================
function renderSidebar(filter = '') {
    compList.innerHTML = '';
    const terms = filter.toLowerCase().trim().split(/\s+/).filter(Boolean);
    const cats = [...new Set(COMPONENTS.map(c => c.cat))];
    let totalVisible = 0;

    cats.forEach(cat => {
        const items = COMPONENTS.filter(c => {
            if (c.cat !== cat) return false;
            if (!terms.length) return true;
            return terms.every(t => c.name.toLowerCase().includes(t) || cat.toLowerCase().includes(t));
        });
        if (!items.length) return;

        const section = document.createElement('div');
        section.className = 'cat-section';

        const h = document.createElement('div');
        h.className = 'cat-header';
        h.textContent = cat;
        section.appendChild(h);

        items.forEach(comp => {
            totalVisible++;
            const el = document.createElement('div');
            el.className = 'comp-item';
            el.dataset.tooltip = comp.name;
            el.innerHTML = `
                <div class="comp-icon">
                    <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${comp.icon}"/></svg>
                </div>
                <span class="comp-name">${comp.name}</span>
            `;
            el.addEventListener('click', () => addComponent(comp, dropZone));
            section.appendChild(el);
        });

        compList.appendChild(section);
    });

    if (!totalVisible) {
        compList.innerHTML = '<div style="padding:32px 16px;text-align:center;font-size:12px;color:var(--text-muted);">No components found</div>';
    }

    // Update count
    const countEl = document.getElementById('panel-count');
    if (countEl) countEl.textContent = `${totalVisible} component${totalVisible !== 1 ? 's' : ''}`;
}

searchInput.addEventListener('input', e => renderSidebar(e.target.value));
renderSidebar();

// ============================================================
// ADD COMPONENT
// ============================================================
async function addComponent(comp, targetContainer, beforeEl = null) {
    let html = '';
    try {
        const res = await fetch(comp.file);
        if (!res.ok) throw new Error('not found');
        html = await res.text();
    } catch {
        html = `<div style="padding:16px;border:2px dashed #94a3b8;color:#94a3b8;font-size:11px;font-weight:600;border-radius:8px;">[${comp.name} — file not found]</div>`;
    }

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

    // SELECT on click
    ci.addEventListener('mousedown', (e) => {
        if (e.target.closest('.ci-btns')) return;
        selectItem(ci, comp);
    });

    // DELETE
    ci.querySelector('.del').addEventListener('click', (e) => {
        e.stopPropagation();
        ci.remove();
        if (selectedEl === ci) { selectedEl = null; selectedComp = null; }
        updateStatus();
        showEmptyIfNeeded();
        updateRightPanel();
    });

    // DUPLICATE
    ci.querySelector('.dup').addEventListener('click', (e) => {
        e.stopPropagation();
        addComponent(comp, ci.parentElement, ci.nextElementSibling);
    });

    // DRAG (from bar)
    const bar = ci.querySelector('.ci-bar');
    bar.addEventListener('dragstart', (e) => {
        if (e.target.closest('.ci-btns')) { e.preventDefault(); return; }
        dragSrcEl = ci;
        ci.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', ci.dataset.uid);
        requestAnimationFrame(() => ci.classList.add('dragging'));
    });
    bar.addEventListener('dragend', () => {
        ci.classList.remove('dragging');
        dragSrcEl = null;
        removeDropIndicator();
        clearAllHighlights();
    });

    // NEST TARGET
    const content = ci.querySelector('.ci-content');
    content.addEventListener('dragover', (e) => {
        if (!dragSrcEl || dragSrcEl === ci) return;
        if (dragSrcEl.contains(ci)) return;
        e.preventDefault();
        e.stopPropagation();
        e.dataTransfer.dropEffect = 'move';
        removeDropIndicator();
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
        content.appendChild(dragSrcEl);
        dragSrcEl.classList.remove('dragging');
        dragSrcEl = null;
        updateStatus();
        notify('Component nested!');
    });

    // REORDER TARGET
    ci.addEventListener('dragover', (e) => {
        if (!dragSrcEl || dragSrcEl === ci) return;
        if (dragSrcEl.contains(ci)) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        const rect = ci.getBoundingClientRect();
        const midY = rect.top + rect.height / 2;
        const parent = ci.parentElement;
        removeDropIndicator();
        clearAllHighlights();
        dropIndicator = document.createElement('div');
        dropIndicator.className = 'drop-line';
        if (e.clientY < midY) {
            parent.insertBefore(dropIndicator, ci);
        } else {
            parent.insertBefore(dropIndicator, ci.nextElementSibling);
        }
    });

    // DOUBLE-CLICK to edit text
    content.addEventListener('dblclick', (e) => {
        const el = e.target;
        const tags = ['P','SPAN','H1','H2','H3','H4','H5','H6','A','BUTTON','LI','TD','TH','LABEL'];
        if (tags.includes(el.tagName) && !el.querySelector('svg')) {
            e.stopPropagation();
            el.contentEditable = 'true';
            el.style.outline = '2px solid var(--accent)';
            el.style.outlineOffset = '2px';
            el.style.borderRadius = '2px';
            el.focus();
            el.addEventListener('blur', () => {
                el.contentEditable = 'false';
                el.style.outline = '';
                el.style.outlineOffset = '';
                el.style.borderRadius = '';
            }, { once: true });
        }
    });

    updateStatus();
    selectItem(ci, comp);
    return ci;
}

// ============================================================
// SELECTION
// ============================================================
function selectItem(el, comp = null) {
    if (selectedEl) selectedEl.classList.remove('selected');
    selectedEl = el;
    selectedComp = comp;
    if (el) el.classList.add('selected');
    updateRightPanel();
}

dropZone.addEventListener('mousedown', (e) => {
    if (e.target === dropZone || e.target === emptyState) selectItem(null);
});

// ============================================================
// RIGHT PANEL
// ============================================================
function updateRightPanel() {
    if (selectedEl && selectedComp) {
        rpSelectedSec.style.display = 'block';
        rpSelectedName.textContent = selectedComp.name;
        rpNoSelection.style.display = 'none';
    } else {
        rpSelectedSec.style.display = 'none';
        rpNoSelection.style.display = 'block';
    }
}

// Right panel actions
document.getElementById('rp-duplicate')?.addEventListener('click', () => {
    if (selectedEl && selectedComp) {
        addComponent(selectedComp, selectedEl.parentElement, selectedEl.nextElementSibling);
    }
});
document.getElementById('rp-delete')?.addEventListener('click', () => {
    if (selectedEl) {
        selectedEl.remove();
        selectedEl = null;
        selectedComp = null;
        updateStatus();
        showEmptyIfNeeded();
        updateRightPanel();
    }
});
document.getElementById('rp-move-up')?.addEventListener('click', () => {
    if (selectedEl && selectedEl.previousElementSibling) {
        selectedEl.parentElement.insertBefore(selectedEl, selectedEl.previousElementSibling);
        notify('Moved up');
    }
});
document.getElementById('rp-move-down')?.addEventListener('click', () => {
    if (selectedEl && selectedEl.nextElementSibling) {
        selectedEl.parentElement.insertBefore(selectedEl.nextElementSibling, selectedEl);
        notify('Moved down');
    }
});

// Right panel canvas dimensions
rpWidth.addEventListener('change', () => {
    const w = parseInt(rpWidth.value);
    if (w >= 200 && w <= 3000) {
        canvas.style.width = w + 'px';
        document.querySelectorAll('.device-btn').forEach(b => b.classList.remove('active'));
        updateCanvasDimensions();
        notify(`Width: ${w}px`);
    }
});
rpHeight.addEventListener('change', () => {
    const h = parseInt(rpHeight.value);
    if (h >= 200 && h <= 10000) {
        canvas.style.minHeight = h + 'px';
        document.querySelectorAll('.height-btn').forEach(b => b.classList.remove('active'));
        updateCanvasDimensions();
        notify(`Height: ${h}px`);
    }
});

// Toggle right panel
document.getElementById('btn-toggle-right')?.addEventListener('click', () => {
    rightPanel.classList.toggle('collapsed');
});

document.getElementById('rp-export-png')?.addEventListener('click', () => {
    document.getElementById('btn-screenshot').click();
});

// ============================================================
// DROP ZONE
// ============================================================
dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    if (!dragSrcEl) return;
    if (!e.target.closest('.ci')) {
        removeDropIndicator();
        clearAllHighlights();
        dropIndicator = document.createElement('div');
        dropIndicator.className = 'drop-line';
        dropZone.appendChild(dropIndicator);
    }
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    clearAllHighlights();
    if (!dragSrcEl) return;
    if (dropIndicator && dropIndicator.parentElement) {
        dropIndicator.parentElement.insertBefore(dragSrcEl, dropIndicator);
    } else {
        dropZone.appendChild(dragSrcEl);
    }
    removeDropIndicator();
    dragSrcEl.classList.remove('dragging');
    dragSrcEl = null;
    updateStatus();
});

// ============================================================
// HELPERS
// ============================================================
function removeDropIndicator() {
    if (dropIndicator && dropIndicator.parentElement) {
        dropIndicator.remove();
    }
    dropIndicator = null;
}

function clearAllHighlights() {
    document.querySelectorAll('.nest-target').forEach(el => el.classList.remove('nest-target'));
}

function showEmptyIfNeeded() {
    if (emptyState && !dropZone.querySelector('.ci')) {
        emptyState.style.display = 'flex';
    }
}

function updateStatus() {
    const count = document.querySelectorAll('.ci').length;
    statusEl.innerHTML = count === 0
        ? '<span class="status-dot"></span> Ready'
        : `<span class="status-dot"></span> ${count} component${count > 1 ? 's' : ''}`;
}

function updateCanvasDimensions() {
    const w = parseInt(canvas.style.width) || 1440;
    const h = canvas.offsetHeight || 1600;
    canvasDims.textContent = `${w} × ${h}`;
    rpWidth.value = w;
    rpHeight.value = h;
}

// ============================================================
// DEVICE SIZE PRESETS
// ============================================================
document.querySelectorAll('.device-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.device-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const w = parseInt(btn.dataset.w);
        canvas.style.width = w + 'px';
        canvasLabel.textContent = btn.dataset.label;
        const vpW = viewport.clientWidth - 60;
        if (w > vpW) {
            setZoom(Math.min(1, vpW / w));
        } else {
            setZoom(1);
        }
        updateCanvasDimensions();
        notify(btn.dataset.label);
    });
});

// ============================================================
// CANVAS HEIGHT PRESETS
// ============================================================
document.querySelectorAll('.height-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.height-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const h = parseInt(btn.dataset.h);
        if (h === 0) {
            canvas.style.minHeight = '800px';
            canvas.style.height = 'auto';
            notify('Height: Auto');
        } else {
            canvas.style.minHeight = h + 'px';
            canvas.style.height = 'auto';
            notify('Height: ' + h + 'px');
        }
        updateCanvasDimensions();
    });
});

// ============================================================
// MANUAL CANVAS RESIZE
// ============================================================
const resizer = document.getElementById('canvas-resizer');
resizer.addEventListener('mousedown', (e) => {
    e.preventDefault();
    const startY = e.clientY;
    const startH = canvas.offsetHeight;
    document.querySelectorAll('.height-btn').forEach(b => b.classList.remove('active'));

    const onMouseMove = (ev) => {
        const delta = (ev.clientY - startY) / currentZoom;
        const newH = Math.max(400, startH + delta);
        canvas.style.minHeight = newH + 'px';
        updateCanvasDimensions();
    };

    const onMouseUp = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        notify('Custom height set');
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});

// ============================================================
// ZOOM
// ============================================================
function setZoom(z) {
    currentZoom = Math.max(0.25, Math.min(2, Math.round(z * 100) / 100));
    canvas.style.zoom = currentZoom;
    const pct = Math.round(currentZoom * 100) + '%';
    qbZoomVal.textContent = pct;
}

// Quick bar zoom buttons
document.getElementById('qb-zin').addEventListener('click', () => setZoom(currentZoom + 0.1));
document.getElementById('qb-zout').addEventListener('click', () => setZoom(currentZoom - 0.1));
document.getElementById('qb-zfit').addEventListener('click', () => {
    const vpW = viewport.clientWidth - 60;
    const cW = parseInt(canvas.style.width) || 1440;
    setZoom(Math.min(1, vpW / cW));
});

// Ctrl+Scroll zoom
document.addEventListener('wheel', (e) => {
    if (!e.ctrlKey && !e.metaKey) return;
    e.preventDefault();
    setZoom(currentZoom + (e.deltaY > 0 ? -0.1 : 0.1));
}, { passive: false });

// ============================================================
// CLEAR
// ============================================================
document.getElementById('btn-clear').addEventListener('click', () => {
    if (!confirm('Clear all components?')) return;
    dropZone.querySelectorAll('.ci').forEach(el => el.remove());
    itemUID = 0;
    selectedEl = null;
    selectedComp = null;
    updateStatus();
    showEmptyIfNeeded();
    updateRightPanel();
});

// ============================================================
// SCREENSHOT
// ============================================================
document.getElementById('btn-screenshot').addEventListener('click', async () => {
    notify('Preparing screenshot...');
    canvas.classList.add('screenshot-mode');
    const savedZoom = canvas.style.zoom || '1';
    canvas.style.zoom = '1';

    await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));

    const clone = canvas.cloneNode(true);
    clone.style.position = 'absolute';
    clone.style.left = '-99999px';
    clone.style.top = '0';
    clone.style.zIndex = '-1';
    clone.style.zoom = '1';
    clone.style.boxShadow = 'none';
    clone.style.border = 'none';
    document.body.appendChild(clone);

    function inlineStyles(src, dest) {
        const srcStyle = window.getComputedStyle(src);
        let cssText = '';
        for (let i = 0; i < srcStyle.length; i++) {
            const prop = srcStyle[i];
            cssText += `${prop}:${srcStyle.getPropertyValue(prop)};`;
        }
        dest.style.cssText = cssText;
        const srcChildren = src.children;
        const destChildren = dest.children;
        for (let i = 0; i < srcChildren.length && i < destChildren.length; i++) {
            inlineStyles(srcChildren[i], destChildren[i]);
        }
    }
    inlineStyles(canvas, clone);

    clone.style.position = 'absolute';
    clone.style.left = '-99999px';
    clone.style.boxShadow = 'none';
    clone.style.border = 'none';
    clone.style.overflow = 'visible';

    try {
        const cvs = await html2canvas(clone, {
            useCORS: true,
            scale: 2,
            backgroundColor: '#ffffff',
            logging: false,
            windowWidth: parseInt(canvas.style.width) || 1440,
        });
        const link = document.createElement('a');
        link.download = `wireframe-${Date.now()}.png`;
        link.href = cvs.toDataURL('image/png');
        link.click();
        notify('✓ Screenshot saved!');
    } catch (err) {
        console.error('Screenshot failed:', err);
        notify('✕ Screenshot failed');
    } finally {
        clone.remove();
        canvas.classList.remove('screenshot-mode');
        canvas.style.zoom = savedZoom;
    }
});

// ============================================================
// TOAST
// ============================================================
let toastTimer;
function notify(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2500);
}

// ============================================================
// KEYBOARD SHORTCUTS
// ============================================================
function toggleShortcuts() {
    shortcutsModal.classList.toggle('open');
}

document.getElementById('btn-shortcuts')?.addEventListener('click', toggleShortcuts);
document.getElementById('qb-shortcuts')?.addEventListener('click', toggleShortcuts);
document.getElementById('btn-close-shortcuts')?.addEventListener('click', toggleShortcuts);
shortcutsModal.addEventListener('click', (e) => {
    if (e.target === shortcutsModal) toggleShortcuts();
});

// Global keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // ? = show shortcuts
    if (e.key === '?' && !e.ctrlKey && !e.altKey) {
        const active = document.activeElement;
        if (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA' || active.isContentEditable) return;
        toggleShortcuts();
    }

    // Delete = remove selected
    if ((e.key === 'Delete' || e.key === 'Backspace') && selectedEl) {
        const active = document.activeElement;
        if (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA' || active.isContentEditable) return;
        e.preventDefault();
        selectedEl.remove();
        selectedEl = null;
        selectedComp = null;
        updateStatus();
        showEmptyIfNeeded();
        updateRightPanel();
    }

    // Escape = deselect
    if (e.key === 'Escape') {
        if (shortcutsModal.classList.contains('open')) {
            toggleShortcuts();
            return;
        }
        selectItem(null);
    }

    // Ctrl+D = duplicate
    if (e.ctrlKey && e.key === 'd' && selectedEl && selectedComp) {
        e.preventDefault();
        addComponent(selectedComp, selectedEl.parentElement, selectedEl.nextElementSibling);
    }

    // Ctrl+K = focus search
    if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
        searchInput.select();
    }

    // Ctrl+. = toggle right panel
    if (e.ctrlKey && e.key === '.') {
        e.preventDefault();
        rightPanel.classList.toggle('collapsed');
    }

    // Ctrl+Shift+S = screenshot
    if (e.ctrlKey && e.shiftKey && e.key === 'S') {
        e.preventDefault();
        document.getElementById('btn-screenshot').click();
    }

    // Ctrl+0 = fit zoom
    if (e.ctrlKey && e.key === '0') {
        e.preventDefault();
        const vpW = viewport.clientWidth - 60;
        const cW = parseInt(canvas.style.width) || 1440;
        setZoom(Math.min(1, vpW / cW));
    }
});

// ============================================================
// INIT
// ============================================================
updateStatus();
updateRightPanel();
updateCanvasDimensions();