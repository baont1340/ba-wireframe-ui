// COMPONENT DATA
const COMPONENTS=[
{cat:'Primitives',id:'prim-rectangle',name:'Rectangle',file:'components/prim-rectangle.html',icon:'M4 4h16v16H4z',isPrim:true},
{cat:'Primitives',id:'prim-circle',name:'Circle',file:'components/prim-circle.html',icon:'M12 2a10 10 0 100 20 10 10 0 000-20z',isPrim:true},
{cat:'Primitives',id:'prim-text',name:'Text Block',file:'components/prim-text.html',icon:'M4 7V4h16v3M9 20h6M12 4v16',isPrim:true},
{cat:'Primitives',id:'prim-heading',name:'Heading',file:'components/prim-heading.html',icon:'M4 12h8m-8-4v8m8-8v8M16 6v12',isPrim:true},
{cat:'Primitives',id:'prim-button',name:'Button',file:'components/prim-button.html',icon:'M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5',isPrim:true},
{cat:'Primitives',id:'prim-input',name:'Input Field',file:'components/prim-input.html',icon:'M4 7h16v10H4zM7 12h3',isPrim:true},
{cat:'Primitives',id:'prim-image',name:'Image',file:'components/prim-image.html',icon:'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586',isPrim:true},
{cat:'Primitives',id:'prim-video',name:'Video',file:'components/prim-video.html',icon:'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764',isPrim:true},
{cat:'Primitives',id:'prim-map',name:'Map',file:'components/prim-map.html',icon:'M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z',isPrim:true},
{cat:'Primitives',id:'prim-icon',name:'Icon',file:'components/prim-icon.html',icon:'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77',isPrim:true},
{cat:'Primitives',id:'prim-line',name:'Line / Divider',file:'components/prim-line.html',icon:'M5 12h14',isPrim:true},
{cat:'Primitives',id:'prim-container',name:'Container (Flex)',file:'components/prim-container.html',icon:'M4 4h16v16H4zM4 8h16',isPrim:true},
{cat:'Primitives',id:'prim-iframe',name:'Iframe / Embed',file:'components/prim-iframe.html',icon:'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',isPrim:true},
{cat:'Primitives',id:'prim-table',name:'Table (Custom)',file:'components/prim-table.html',icon:'M3 10h18M3 14h18M3 6h18v12H3z',isPrim:true,isTable:true},
{cat:'General',id:'accordion',name:'Accordion',file:'components/accordion.html',icon:'M19 9l-7 7-7-7'},
{cat:'General',id:'alert',name:'Alert',file:'components/alert.html',icon:'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'},
{cat:'General',id:'avatar',name:'Avatar',file:'components/avatar.html',icon:'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'},
{cat:'General',id:'badge',name:'Badge',file:'components/badge.html',icon:'M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7'},
{cat:'General',id:'button',name:'Button Group',file:'components/button.html',icon:'M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5'},
{cat:'General',id:'card',name:'Card',file:'components/card.html',icon:'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5z'},
{cat:'General',id:'carousel',name:'Carousel',file:'components/carousel.html',icon:'M4 16l4.586-4.586a2 2 0 012.828 0L16 16'},
{cat:'General',id:'chat',name:'Chat',file:'components/chat.html',icon:'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6'},
{cat:'General',id:'collapse',name:'Collapse',file:'components/collapse.html',icon:'M19 13l-7 7-7-7m14-8l-7 7-7-7'},
{cat:'General',id:'datepicker',name:'Datepicker',file:'components/datepicker.html',icon:'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7'},
{cat:'General',id:'divider',name:'Divider',file:'components/divider.html',icon:'M5 12h14'},
{cat:'General',id:'list',name:'List Group',file:'components/list.html',icon:'M4 6h16M4 10h16M4 14h16M4 18h16'},
{cat:'General',id:'progress',name:'Progress',file:'components/progress.html',icon:'M13 10V3L4 14h7v7l9-11h-7z'},
{cat:'General',id:'skeleton',name:'Skeleton',file:'components/skeleton.html',icon:'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7'},
{cat:'General',id:'spinner',name:'Spinner',file:'components/spinner.html',icon:'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9'},
{cat:'General',id:'stepper',name:'Stepper',file:'components/stepper.html',icon:'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10'},
{cat:'General',id:'timeline',name:'Timeline',file:'components/timeline.html',icon:'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'},
{cat:'General',id:'typography',name:'Typography',file:'components/typography.html',icon:'M4 6h16M4 12h16m-7 6h7'},
{cat:'Navigation',id:'breadcrumb',name:'Breadcrumb',file:'components/breadcrumb.html',icon:'M9 5l7 7-7 7'},
{cat:'Navigation',id:'navbar',name:'Navbar',file:'components/navbar.html',icon:'M4 6h16M4 12h16M4 18h16'},
{cat:'Navigation',id:'tabs',name:'Tabs',file:'components/tabs.html',icon:'M5 12h14M5 12a2 2 0 01-2-2V6'},
{cat:'Navigation',id:'pagination',name:'Pagination',file:'components/pagination.html',icon:'M7 16l-4-4m0 0l4-4m-4 4h18'},
{cat:'Navigation',id:'sidebar-c',name:'Sidebar',file:'components/sidebar.html',icon:'M9 17V7m0 10a2 2 0 01-2 2H5'},
{cat:'Forms',id:'checkbox',name:'Checkbox/Radio',file:'components/checkbox.html',icon:'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'},
{cat:'Forms',id:'input',name:'Input',file:'components/input.html',icon:'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11'},
{cat:'Forms',id:'select',name:'Select',file:'components/select.html',icon:'M19 9l-7 7-7-7'},
{cat:'Forms',id:'switch',name:'Switch',file:'components/switch.html',icon:'M8 7h8a4 4 0 110 8H8a4 4 0 110-8z'},
{cat:'Forms',id:'form-full',name:'Form',file:'components/form.html',icon:'M3 8l7.89 5.26a2 2 0 002.22 0L21 8'},
{cat:'Overlays',id:'dropdown',name:'Dropdown',file:'components/dropdown.html',icon:'M19 9l-7 7-7-7'},
{cat:'Overlays',id:'modal',name:'Modal',file:'components/modal.html',icon:'M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M3 19v-8a2 2 0 012-2h14'},
{cat:'Overlays',id:'tooltip',name:'Tooltip',file:'components/tooltip.html',icon:'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0'},
{cat:'Data',id:'table',name:'Table',file:'components/table.html',icon:'M3 10h18M3 14h18m-9-4v8'},
{cat:'Data',id:'charts',name:'Charts',file:'components/charts.html',icon:'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2z'},
{cat:'Sections',id:'hero',name:'Hero',file:'components/hero.html',icon:'M4 16l4.586-4.586a2 2 0 012.828 0L16 16'},
{cat:'Sections',id:'features',name:'Features',file:'components/features.html',icon:'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z'},
{cat:'Sections',id:'pricing',name:'Pricing',file:'components/pricing.html',icon:'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2'},
{cat:'Sections',id:'footer',name:'Footer',file:'components/footer.html',icon:'M3 12l2-2m0 0l7-7 7 7'},
];

// PLATFORM CONFIGS
const PLATFORMS={
web:[{key:'web-desktop',label:'Web Desktop',width:1440,svg:'<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>'},
{key:'web-tablet',label:'Web Tablet',width:768,svg:'<rect x="4" y="2" width="16" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18"/>'},
{key:'web-mobile',label:'Web Mobile',width:375,svg:'<rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18"/>'}],
app:[{key:'app-mobile',label:'App Mobile',width:375,svg:'<rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18"/>'},
{key:'app-tablet',label:'App Tablet',width:768,svg:'<rect x="4" y="2" width="16" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18"/>'}],
desktop:[{key:'desktop-app',label:'Desktop App',width:1280,svg:'<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>'}]
};

const TYPE_VISUALS={
div:{html:'<div class="ci-content flex-col" style="width:100%;min-height:80px;border:2px solid #0f172a;background:#fff;display:flex;align-items:center;justify-content:center;"><span style="font-size:11px;color:#94a3b8;font-weight:600;">BOX / CONTAINER</span></div>'},
container:{html:'<div class="ci-content flex-row" style="width:100%;min-height:100px;border:2px dashed #94a3b8;padding:16px;display:flex;gap:16px;"></div>'},
img:{html:'<div style="width:100%;min-height:120px;border:2px dashed #94a3b8;background:#f8fafc;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;"><svg width="40" height="40" viewBox="0 0 48 48" fill="none"><rect x="4" y="8" width="40" height="32" rx="2" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4 3"/><circle cx="16" cy="20" r="4" stroke="#94a3b8" stroke-width="2"/><path d="M4 34L16 24L24 30L32 22L44 32" stroke="#94a3b8" stroke-width="2" fill="none"/></svg><span style="font-size:10px;color:#94a3b8;font-weight:600;">IMAGE</span></div>'},
button:{html:'<div style="padding:12px 16px;"><button style="padding:10px 24px;border:2px solid #0f172a;background:#fff;font-weight:700;font-size:13px;cursor:pointer;font-family:inherit;">Button Label</button></div>'},
input:{html:'<div style="padding:12px 16px;"><label style="display:block;font-size:12px;font-weight:700;margin-bottom:6px;">Label</label><input type="text" placeholder="Placeholder..." style="width:100%;padding:8px 12px;border:2px solid #0f172a;font-size:13px;font-family:inherit;outline:none;"></div>'},
textarea:{html:'<div style="padding:12px 16px;"><label style="display:block;font-size:12px;font-weight:700;margin-bottom:6px;">Label</label><textarea placeholder="Type here..." style="width:100%;min-height:80px;padding:8px 12px;border:2px solid #0f172a;font-size:13px;font-family:inherit;outline:none;resize:vertical;"></textarea></div>'},
a:{html:'<div style="padding:12px 16px;"><a href="#" style="color:#7c3aed;font-size:14px;font-weight:600;text-decoration:underline;">Link Text →</a></div>'},
video:{html:'<div style="width:100%;min-height:160px;border:2px solid #0f172a;background:#0f172a;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;"><div style="width:48px;height:48px;border:3px solid #fff;border-radius:50%;display:flex;align-items:center;justify-content:center;"><svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><polygon points="10,8 16,12 10,16"/></svg></div><span style="font-size:10px;color:#94a3b8;font-weight:600;">VIDEO</span></div>'},
iframe:{html:'<div style="width:100%;min-height:160px;border:2px solid #0f172a;background:#f1f5f9;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4M8 9l3 3-3 3"/><line x1="14" y1="15" x2="18" y2="15"/></svg><span style="font-size:10px;color:#64748b;font-weight:600;">IFRAME</span></div>'},
map:{html:'<div style="width:100%;min-height:160px;border:2px solid #0f172a;background:#e8f4f8;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0f172a" stroke-width="1.5"><path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg><span style="font-size:10px;color:#64748b;font-weight:600;">MAP</span></div>'},
nav:{html:'<div style="padding:12px 16px;border:2px solid #0f172a;display:flex;gap:16px;align-items:center;"><span style="font-weight:700;">Logo</span><span style="color:#64748b;">Home</span><span style="color:#64748b;">About</span><span style="color:#64748b;">Contact</span></div>'},
header:{html:'<div style="padding:16px;border:2px solid #0f172a;background:#f8fafc;"><span style="font-size:10px;color:#94a3b8;font-weight:700;text-transform:uppercase;">HEADER</span><h2 style="font-size:20px;font-weight:800;margin-top:4px;">Page Header</h2></div>'},
footer:{html:'<div style="padding:16px;border:2px solid #0f172a;background:#1e293b;color:#94a3b8;font-size:12px;"><span style="font-weight:700;color:#fff;">Footer</span> · Links · © 2026</div>'},
section:{html:'<div style="width:100%;min-height:100px;border:2px dashed #94a3b8;padding:16px;"><span style="font-size:10px;color:#94a3b8;font-weight:700;text-transform:uppercase;">SECTION</span></div>'},
form:{html:'<div style="padding:16px;border:2px solid #0f172a;"><span style="font-size:10px;color:#94a3b8;font-weight:700;text-transform:uppercase;display:block;margin-bottom:8px;">FORM</span><input placeholder="Name" style="width:100%;padding:6px 10px;border:1px solid #cbd5e1;margin-bottom:6px;font-family:inherit;"><input placeholder="Email" style="width:100%;padding:6px 10px;border:1px solid #cbd5e1;margin-bottom:6px;font-family:inherit;"><button style="padding:6px 16px;background:#0f172a;color:#fff;border:none;font-weight:700;cursor:pointer;">Submit</button></div>'},
table:{html:'<table style="width:100%;border-collapse:collapse;border:2px solid #0f172a;"><tr style="background:#f8fafc;border-bottom:2px solid #0f172a;"><th style="padding:8px 12px;text-align:left;">Col 1</th><th style="padding:8px 12px;text-align:left;">Col 2</th><th style="padding:8px 12px;text-align:left;">Col 3</th></tr><tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:8px 12px;">Cell</td><td style="padding:8px 12px;">Cell</td><td style="padding:8px 12px;">Cell</td></tr><tr><td style="padding:8px 12px;">Cell</td><td style="padding:8px 12px;">Cell</td><td style="padding:8px 12px;">Cell</td></tr></table>'},
};

// STATE
let currentZoom=1,itemUID=0,dragSrcEl=null,selectedEl=null,selectedComp=null,dropIndicator=null;
let currentPlatform='web',frameVisibility={},drawMode=null,projectDirty=false;
let screens=[{id:1,name:'Screen 1'}],activeScreenId=1,screenData={};
let screenUID=1,screenZoom={};

// DOM REFS
const viewport=document.getElementById('viewport'),compList=document.getElementById('component-list');
const searchInput=document.getElementById('component-search'),statusEl=document.getElementById('canvas-status');
const toastEl=document.getElementById('toast'),qbZoomVal=document.getElementById('qb-zoom-val');
const shortcutsModal=document.getElementById('shortcuts-modal'),rightPanel=document.getElementById('right-panel');
const rpLayoutSec=document.getElementById('rp-layout-section');
const rpWidth=document.getElementById('rp-width'),rpHeight=document.getElementById('rp-height');
const rpLeft=document.getElementById('rp-left'),rpTop=document.getElementById('rp-top');
const screenTabsEl=document.getElementById('screen-tabs');

// BEFOREUNLOAD WARNING
window.addEventListener('beforeunload',(e)=>{if(projectDirty){e.preventDefault();e.returnValue='You have unsaved changes. Download your .bnt file before leaving!';}});

// SIDEBAR
function renderSidebar(filter=''){
    compList.innerHTML='';
    const terms=filter.toLowerCase().trim().split(/\s+/).filter(Boolean);
    const cats=[...new Set(COMPONENTS.map(c=>c.cat))];
    let total=0;
    cats.forEach(cat=>{
        const items=COMPONENTS.filter(c=>{
            if(c.cat!==cat)return false;
            if(!terms.length)return true;
            return terms.every(t=>c.name.toLowerCase().includes(t)||cat.toLowerCase().includes(t));
        });
        if(!items.length)return;
        const sec=document.createElement('div');
        const h=document.createElement('div');h.className='cat-header';h.textContent=cat;sec.appendChild(h);
        items.forEach(comp=>{total++;
            const el=document.createElement('div');el.className='comp-item';
            el.innerHTML=`<div class="comp-icon"><svg width="11" height="11" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${comp.icon}"/></svg></div><span class="comp-name">${comp.name}</span>`;
            el.addEventListener('click',()=>{
                const firstDZ=viewport.querySelector('.canvas-frame .drop-zone');
                if(firstDZ)addComponent(comp,firstDZ);
            });
            sec.appendChild(el);
        });
        compList.appendChild(sec);
    });
    if(!total)compList.innerHTML='<div style="padding:24px;text-align:center;font-size:11px;color:var(--text-muted);">No results</div>';
    document.getElementById('panel-count').textContent=`${total} items`;
}
searchInput.addEventListener('input',e=>renderSidebar(e.target.value));
renderSidebar();

// SCREEN TABS
function renderScreenTabs(){
    screenTabsEl.innerHTML='';
    screens.forEach(s=>{
        const tab=document.createElement('button');tab.className='screen-tab'+(s.id===activeScreenId?' active':'');
        tab.innerHTML=`<span>${s.name}</span>${screens.length>1?'<span class="tab-close" data-sid="'+s.id+'">✕</span>':''}`;
        tab.addEventListener('click',(e)=>{
            if(e.target.classList.contains('tab-close')){
                if(screens.length<=1)return;
                if(!confirm(`Delete "${s.name}"?`))return;
                saveCurrentScreen();
                screens=screens.filter(x=>x.id!==s.id);
                delete screenData[s.id];
                if(activeScreenId===s.id)activeScreenId=screens[0].id;
                loadScreen(activeScreenId);renderScreenTabs();projectDirty=true;return;
            }
            if(activeScreenId!==s.id){saveCurrentScreen();activeScreenId=s.id;loadScreen(s.id);renderScreenTabs();}
        });
        tab.addEventListener('dblclick',()=>{
            const n=prompt('Rename screen:',s.name);
            if(n&&n.trim()){s.name=n.trim();renderScreenTabs();projectDirty=true;}
        });
        screenTabsEl.appendChild(tab);
    });
    const addBtn=document.createElement('button');addBtn.id='btn-add-screen';addBtn.textContent='+';addBtn.title='Add Screen';
    addBtn.addEventListener('click',()=>{
        saveCurrentScreen();
        const id=++screenUID;screens.push({id,name:`Screen ${id}`});
        activeScreenId=id;buildCanvases();renderScreenTabs();projectDirty=true;notify('New screen added');
    });
    screenTabsEl.appendChild(addBtn);
}

function saveCurrentScreen(){
    // Save the FIRST frame's content as canonical (all frames share same content)
    const firstDZ=viewport.querySelector('.canvas-frame .drop-zone');
    const firstFrame=viewport.querySelector('.canvas-frame');
    screenData[activeScreenId]={html:firstDZ?firstDZ.innerHTML:'',h:firstFrame?firstFrame.style.minHeight:'800px'};
    screenZoom[activeScreenId]=currentZoom;
}
function loadScreen(id){
    activeScreenId=id;buildCanvases();
    const data=screenData[id];
    if(data&&data.html){
        // Load same content into ALL frames
        viewport.querySelectorAll('.canvas-frame .drop-zone').forEach(dz=>{
            dz.innerHTML=data.html;
            reattachAllListeners(dz);
        });
        if(data.h)viewport.querySelectorAll('.canvas-frame').forEach(f=>{f.style.minHeight=data.h;});
    }
    // Restore zoom
    if(screenZoom[id]!==undefined)setZoom(screenZoom[id]);else setZoom(1);
    selectedEl=null;selectedComp=null;updateRightPanel();updateStatus();
    // Clear custom HTML textarea
    const cta=document.getElementById('rp-custom-html');if(cta)cta.value='';
}

// MULTI-PLATFORM CANVAS
function buildCanvases(){
    viewport.innerHTML='';
    (PLATFORMS[currentPlatform]||[]).forEach(cfg=>{
        const dimmed=frameVisibility[cfg.key]===false;
        const frame=document.createElement('div');
        frame.className='canvas-frame'+(dimmed?' dimmed-frame':'');
        frame.dataset.frameKey=cfg.key;frame.style.width=cfg.width+'px';frame.style.minHeight='800px';
        frame.innerHTML=`<div class="frame-header"><div class="frame-label"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${cfg.svg}</svg><span>${cfg.label} — ${cfg.width}px</span></div><div style="display:flex;align-items:center;gap:3px;"><span class="frame-dims">${cfg.width}×800</span><button class="frame-eye-btn${dimmed?' off':''}" data-fk="${cfg.key}" title="Toggle"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${dimmed?'<path d="M17.94 17.94A10 10 0 0112 20c-7 0-11-8-11-8a18 18 0 015.06-5.94M9.9 4.24A9 9 0 0112 4c7 0 11 8 11 8a18 18 0 01-2.16 3.19M1 1l22 22"/>':'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'}</svg></button></div></div><div class="drop-zone"><div class="empty-state"><div class="e-icon"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg></div><p class="e-title">${cfg.label}</p><p class="e-desc">Click components to add</p></div></div><div class="canvas-resizer"></div>`;
        viewport.appendChild(frame);
        // Eye toggle - dimmed in place
        frame.querySelector('.frame-eye-btn').addEventListener('click',e=>{
            e.stopPropagation();const isDimmed=frame.classList.contains('dimmed-frame');
            frame.classList.toggle('dimmed-frame');frameVisibility[cfg.key]=isDimmed;
            const btn=frame.querySelector('.frame-eye-btn');
            btn.classList.toggle('off');
            btn.innerHTML=isDimmed?'<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>':'<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10 10 0 0112 20c-7 0-11-8-11-8a18 18 0 015.06-5.94M9.9 4.24A9 9 0 0112 4c7 0 11 8 11 8a18 18 0 01-2.16 3.19M1 1l22 22"/></svg>';
            notify(isDimmed?cfg.label+' shown':cfg.label+' dimmed');
        });
        setupDropZone(frame.querySelector('.drop-zone'));
        // Resizer
        frame.querySelector('.canvas-resizer').addEventListener('mousedown',e=>{
            e.preventDefault();const startY=e.clientY,startH=frame.offsetHeight;
            const onM=ev=>{const h=Math.max(400,startH+(ev.clientY-startY)/currentZoom);frame.style.minHeight=h+'px';frame.querySelector('.frame-dims').textContent=cfg.width+'×'+Math.round(h);};
            const onU=()=>{document.removeEventListener('mousemove',onM);document.removeEventListener('mouseup',onU);projectDirty=true;};
            document.addEventListener('mousemove',onM);document.addEventListener('mouseup',onU);
        });
        // Draw mode support
        setupDrawOnFrame(frame.querySelector('.drop-zone'),cfg);
    });
    updateStatus();
}

// DRAW TOOL
function setupDrawOnFrame(dz){
    let drawing=false,startX,startY,preview;
    dz.addEventListener('mousedown',e=>{
        if(!drawMode||e.target.closest('.ci'))return;
        e.preventDefault();drawing=true;
        const r=dz.getBoundingClientRect();startX=e.clientX-r.left;startY=e.clientY-r.top;
        preview=document.createElement('div');preview.className='draw-preview';
        if(drawMode==='circle')preview.style.borderRadius='50%';
        preview.style.left=startX+'px';preview.style.top=startY+'px';preview.style.width='0';preview.style.height='0';
        dz.style.position='relative';dz.appendChild(preview);
    });
    document.addEventListener('mousemove',e=>{
        if(!drawing||!preview)return;
        const r=dz.getBoundingClientRect();const cx=e.clientX-r.left,cy=e.clientY-r.top;
        const x=Math.min(startX,cx),y=Math.min(startY,cy),w=Math.abs(cx-startX),h=Math.abs(cy-startY);
        preview.style.left=x+'px';preview.style.top=y+'px';preview.style.width=w+'px';preview.style.height=h+'px';
    });
    document.addEventListener('mouseup',e=>{
        if(!drawing||!preview)return;drawing=false;
        const w=parseInt(preview.style.width),h=parseInt(preview.style.height);
        preview.remove();preview=null;
        if(w<20||h<20)return;
        // Create drawn shape as a primitive
        const isCircle=drawMode==='circle';
        const shapeHtml=`<div class="prim-shape" data-prim="${drawMode}" style="width:${w}px;height:${h}px;border:2px solid #0f172a;background:#fff;display:flex;align-items:center;justify-content:center;${isCircle?'border-radius:50%;':''}"><span style="font-size:10px;color:#94a3b8;font-weight:600;text-transform:uppercase;">${isCircle?'Circle':'Rectangle'}</span></div>`;
        const comp={id:'drawn-'+Date.now(),name:isCircle?'Drawn Circle':'Drawn Rectangle',file:'',icon:'',isPrim:true,isDrawn:true};
        addComponentFromHTML(comp,shapeHtml,dz);
        exitDrawMode();projectDirty=true;
    });
}
function exitDrawMode(){drawMode=null;document.body.classList.remove('draw-mode');document.querySelectorAll('#btn-draw-rect,#btn-draw-circle').forEach(b=>b.classList.remove('active'));}
document.getElementById('btn-draw-rect').addEventListener('click',()=>{
    if(drawMode==='rect'){exitDrawMode();return;}drawMode='rect';document.body.classList.add('draw-mode');
    document.getElementById('btn-draw-rect').classList.add('active');document.getElementById('btn-draw-circle').classList.remove('active');notify('Draw rectangle on canvas');
});
document.getElementById('btn-draw-circle').addEventListener('click',()=>{
    if(drawMode==='circle'){exitDrawMode();return;}drawMode='circle';document.body.classList.add('draw-mode');
    document.getElementById('btn-draw-circle').classList.add('active');document.getElementById('btn-draw-rect').classList.remove('active');notify('Draw circle on canvas');
});

// DROP ZONE
function setupDropZone(dz){
    dz.addEventListener('dragover',e=>{e.preventDefault();e.dataTransfer.dropEffect='move';if(!dragSrcEl)return;if(!e.target.closest('.ci')){removeDropIndicator();clearHL();dropIndicator=document.createElement('div');dropIndicator.className='drop-line';dz.appendChild(dropIndicator);}});
    dz.addEventListener('drop',e=>{e.preventDefault();clearHL();if(!dragSrcEl)return;if(dropIndicator&&dropIndicator.parentElement)dropIndicator.parentElement.insertBefore(dragSrcEl,dropIndicator);else dz.appendChild(dragSrcEl);removeDropIndicator();dragSrcEl.classList.remove('dragging');dragSrcEl=null;updateStatus();projectDirty=true;syncFrames(dz);});
    dz.addEventListener('mousedown',e=>{if((e.target===dz||e.target.closest('.empty-state'))&&!drawMode)selectItem(null);});
}

// SYNC ALL FRAMES — copies content from sourceDZ to all other drop-zones
function syncFrames(sourceDZ){
    if(!sourceDZ)return;
    const allDZs=viewport.querySelectorAll('.canvas-frame .drop-zone');
    allDZs.forEach(dz=>{
        if(dz===sourceDZ)return;
        dz.innerHTML=sourceDZ.innerHTML;
        dz.className=sourceDZ.className; // Sync Flow/Absolute mode
        reattachAllListeners(dz);
    });
}
// Re-attach event listeners to all .ci elements in a drop-zone
function reattachAllListeners(dz){
    const es=dz.querySelector('.empty-state');
    if(es&&dz.querySelector('.ci'))es.style.display='none';
    dz.querySelectorAll('.ci').forEach(ci=>{
        const compId=ci.dataset.compId;
        const comp=COMPONENTS.find(c=>c.id===compId)||{id:compId,name:ci.querySelector('.ci-bar-label')?.textContent||'Element',file:'',isPrim:ci.dataset.isPrim==='1',isTable:ci.dataset.isTable==='1'};
        ci.addEventListener('mousedown',e=>{if(!e.target.closest('.ci-btns')&&!drawMode)selectItem(ci,comp);});
        ci.querySelector('.del')?.addEventListener('click',e=>{e.stopPropagation();ci.remove();if(selectedEl===ci){selectedEl=null;selectedComp=null;}updateStatus();showEmpty(dz);updateRightPanel();projectDirty=true;syncFrames(dz);});
        ci.querySelector('.dup')?.addEventListener('click',e=>{e.stopPropagation();addComponent(comp,dz,ci.nextElementSibling);});
        const bar=ci.querySelector('.ci-bar');
        if(bar){bar.addEventListener('dragstart',e=>{if(e.target.closest('.ci-btns')){e.preventDefault();return;}dragSrcEl=ci;ci.classList.add('dragging');e.dataTransfer.effectAllowed='move';e.dataTransfer.setData('text/plain',ci.dataset.uid);});
        bar.addEventListener('dragend',()=>{ci.classList.remove('dragging');dragSrcEl=null;removeDropIndicator();clearHL();syncFrames(dz);});}
        const content=ci.querySelector('.ci-content');
        if(content){
            content.addEventListener('dragover',e=>{if(!dragSrcEl||dragSrcEl===ci)return;e.preventDefault();e.stopPropagation();removeDropIndicator();clearHL();content.classList.add('nest-target');});
            content.addEventListener('dragleave',e=>{if(e.relatedTarget&&content.contains(e.relatedTarget))return;content.classList.remove('nest-target');});
            content.addEventListener('drop',e=>{e.preventDefault();e.stopPropagation();content.classList.remove('nest-target');if(!dragSrcEl||dragSrcEl===ci)return;content.appendChild(dragSrcEl);dragSrcEl.classList.remove('dragging');dragSrcEl=null;updateStatus();projectDirty=true;syncFrames(dz);});
            content.addEventListener('dblclick',e=>{const el=e.target;if(['P','SPAN','H1','H2','H3','H4','H5','H6','A','BUTTON','LI','TD','TH','LABEL'].includes(el.tagName)&&!el.querySelector('svg')){e.stopPropagation();el.contentEditable='true';el.style.outline='2px solid var(--accent)';el.focus();el.addEventListener('blur',()=>{el.contentEditable='false';el.style.outline='';projectDirty=true;syncFrames(dz);},{once:true});}});
        }
        ci.addEventListener('dragover',e=>{if(!dragSrcEl||dragSrcEl===ci)return;e.preventDefault();const rect=ci.getBoundingClientRect(),mid=rect.top+rect.height/2;removeDropIndicator();clearHL();dropIndicator=document.createElement('div');dropIndicator.className='drop-line';ci.parentElement.insertBefore(dropIndicator,e.clientY<mid?ci:ci.nextElementSibling);});
    });
}

// ADD COMPONENT
async function addComponent(comp,container,before=null){
    let html='';
    if(comp.file){try{const r=await fetch(comp.file);if(!r.ok)throw 0;html=await r.text();}catch{html=`<div style="padding:12px;border:2px dashed #94a3b8;color:#94a3b8;font-size:10px;">[${comp.name}]</div>`;}}
    addComponentFromHTML(comp,html,container,before);
}
function addComponentFromHTML(comp,html,container,before=null){
    const es=container.querySelector('.empty-state');if(es)es.style.display='none';
    const ci=document.createElement('div');ci.className='ci';ci.dataset.compId=comp.id;ci.dataset.uid=++itemUID;
    if(comp.isPrim)ci.dataset.isPrim='1';if(comp.isTable)ci.dataset.isTable='1';
    ci.innerHTML=`<div class="ci-bar" draggable="true"><div class="ci-bar-left"><div class="dots"><span></span><span></span><span></span><span></span><span></span><span></span></div><span class="ci-bar-label">${comp.name}</span></div><div class="ci-btns"><button class="ci-btn dup" title="Dup">⎘</button><button class="ci-btn del" title="Del">✕</button></div></div><div class="ci-content">${html}</div>`;
    if(before)container.insertBefore(ci,before);else container.appendChild(ci);
    ci.addEventListener('mousedown',e=>{if(!e.target.closest('.ci-btns')&&!drawMode)selectItem(ci,comp);});
    ci.querySelector('.del').addEventListener('click',e=>{e.stopPropagation();ci.remove();if(selectedEl===ci){selectedEl=null;selectedComp=null;}updateStatus();showEmpty(container);updateRightPanel();projectDirty=true;syncFrames(container);});
    ci.querySelector('.dup').addEventListener('click',e=>{e.stopPropagation();addComponent(comp,ci.parentElement,ci.nextElementSibling);});
    const bar=ci.querySelector('.ci-bar');
    bar.addEventListener('dragstart',e=>{const dz=ci.closest('.drop-zone');if(e.target.closest('.ci-btns')||dz?.classList.contains('absolute-mode')){e.preventDefault();return;}dragSrcEl=ci;ci.classList.add('dragging');e.dataTransfer.effectAllowed='move';e.dataTransfer.setData('text/plain',ci.dataset.uid);});
    // FREE DRAG (ABSOLUTE MODE)
    bar.addEventListener('mousedown',e=>{
        const dz=ci.closest('.drop-zone');if(!dz?.classList.contains('absolute-mode')||e.target.closest('.ci-btns')||drawMode)return;
        e.preventDefault();e.stopPropagation();
        const rect=ci.getBoundingClientRect(),dzRect=dz.getBoundingClientRect();
        const offX=(e.clientX-rect.left)/currentZoom,offY=(e.clientY-rect.top)/currentZoom;
        const move=(me)=>{
            const lx=(me.clientX-dzRect.left)/currentZoom-offX,ly=(me.clientY-dzRect.top)/currentZoom-offY;
            ci.style.left=lx+'px';ci.style.top=ly+'px';updateRightPanel();
        };
        const stop=()=>{window.removeEventListener('mousemove',move);window.removeEventListener('mouseup',stop);syncFrames(dz);};
        window.addEventListener('mousemove',move);window.addEventListener('mouseup',stop);
    });
    bar.addEventListener('dragend',()=>{ci.classList.remove('dragging');dragSrcEl=null;removeDropIndicator();clearHL();syncFrames(container);});
    const content=ci.querySelector('.ci-content');
    content.addEventListener('dragover',e=>{if(!dragSrcEl||dragSrcEl===ci)return;e.preventDefault();e.stopPropagation();removeDropIndicator();clearHL();content.classList.add('nest-target');});
    content.addEventListener('dragleave',e=>{if(e.relatedTarget&&content.contains(e.relatedTarget))return;content.classList.remove('nest-target');});
    content.addEventListener('drop',e=>{e.preventDefault();e.stopPropagation();content.classList.remove('nest-target');if(!dragSrcEl||dragSrcEl===ci)return;content.appendChild(dragSrcEl);dragSrcEl.classList.remove('dragging');dragSrcEl=null;updateStatus();projectDirty=true;syncFrames(container);});
    ci.addEventListener('dragover',e=>{if(!dragSrcEl||dragSrcEl===ci)return;e.preventDefault();const rect=ci.getBoundingClientRect(),mid=rect.top+rect.height/2;removeDropIndicator();clearHL();dropIndicator=document.createElement('div');dropIndicator.className='drop-line';ci.parentElement.insertBefore(dropIndicator,e.clientY<mid?ci:ci.nextElementSibling);});
    content.addEventListener('dblclick',e=>{const el=e.target;if(['P','SPAN','H1','H2','H3','H4','H5','H6','A','BUTTON','LI','TD','TH','LABEL'].includes(el.tagName)&&!el.querySelector('svg')){e.stopPropagation();el.contentEditable='true';el.style.outline='2px solid var(--accent)';el.focus();el.addEventListener('blur',()=>{el.contentEditable='false';el.style.outline='';projectDirty=true;syncFrames(container);},{once:true});}});
    // RESIZER
    const resizer=document.createElement('div');resizer.className='resizer';ci.appendChild(resizer);
    resizer.addEventListener('mousedown',e=>{
        e.preventDefault();e.stopPropagation();
        const startX=e.clientX,startY=e.clientY,startW=ci.offsetWidth,startH=ci.offsetHeight;
        const move=(me)=>{
            const nw=startW+(me.clientX-startX),nh=startH+(me.clientY-startY);
            ci.style.width=nw+'px';ci.style.height=nh+'px';
            rpWidth.value=ci.style.width;rpHeight.value=ci.style.height;
        };
        const stop=()=>{window.removeEventListener('mousemove',move);window.removeEventListener('mouseup',stop);projectDirty=true;syncFrames(container);};
        window.addEventListener('mousemove',move);window.addEventListener('mouseup',stop);
    });

    updateStatus();selectItem(ci,comp);projectDirty=true;
    // Sync to all other frames
    syncFrames(container);
    return ci;
}

// SELECTION
function selectItem(el,comp=null){if(selectedEl)selectedEl.classList.remove('selected');selectedEl=el;selectedComp=comp;if(el)el.classList.add('selected');updateRightPanel();}

// RIGHT PANEL
function updateRightPanel(){
    const has=selectedEl&&selectedComp;
    rpSelectedSec.style.display=has?'block':'none';
    rpNoSelection.style.display=has?'none':'block';
    if(has)rpSelectedName.textContent=selectedComp.name;
    const isPrim=selectedEl?.dataset?.isPrim==='1';
    rpElementTypeSec.style.display=isPrim?'block':'none';
    rpCustomSec.style.display='none';
    if(isPrim){const ps=selectedEl.querySelector('.prim-shape');if(ps){rpElementType.value=ps.dataset.assignedType||'div';rpTypeDesc.textContent='';}}
    const isTable=selectedEl?.dataset?.isTable==='1';
    rpTableSec.style.display=isTable?'block':'none';
    
    // Layout Section
    rpLayoutSec.style.display=has?'block':'none';
    if(has){
        const content=selectedEl.querySelector('.ci-content');
        rpWidth.value=selectedEl.style.width||'';
        rpHeight.value=selectedEl.style.height||'';
        rpLeft.value=selectedEl.style.left||'';
        rpTop.value=selectedEl.style.top||'';
        const dz=selectedEl.closest('.drop-zone');
        document.getElementById('rp-pos-flow').classList.toggle('active',!dz?.classList.contains('absolute-mode'));
        document.getElementById('rp-pos-free').classList.toggle('active',dz?.classList.contains('absolute-mode'));
        document.getElementById('rp-layout-row').classList.toggle('active',content?.classList.contains('flex-row'));
        document.getElementById('rp-layout-col').classList.toggle('active',content?.classList.contains('flex-col'));
        document.getElementById('rp-align-left').classList.toggle('active',selectedEl.classList.contains('align-start'));
        document.getElementById('rp-align-center').classList.toggle('active',selectedEl.classList.contains('align-center'));
        document.getElementById('rp-align-right').classList.toggle('active',selectedEl.classList.contains('align-end'));
    }
}

// ELEMENT TYPE CHANGE — VISUAL TRANSFORM
rpElementType.addEventListener('change',()=>{
    if(!selectedEl)return;
    const type=rpElementType.value;
    const content=selectedEl.querySelector('.ci-content');if(!content)return;

    if(type==='custom'){
        rpCustomSec.style.display='block';
        rpTypeDesc.textContent='Paste custom HTML below';
        // PRE-FILL: Grab current HTML automatically
        const ps=selectedEl.querySelector('.prim-shape');
        const currentHtml=ps ? ps.innerHTML : content.innerHTML;
        document.getElementById('rp-custom-html').value = currentHtml.trim();
        return;
    }
    rpCustomSec.style.display='none';
    const ps=selectedEl.querySelector('.prim-shape');if(ps)ps.dataset.assignedType=type;
    const visual=TYPE_VISUALS[type];
    if(visual){content.innerHTML=`<div class="prim-shape" data-prim="${type}" data-assigned-type="${type}">${visual.html}</div>`;}
    const label=selectedEl.querySelector('.ci-bar-label');if(label)label.textContent=type.toUpperCase();
    notify(`Shape → ${type}`);projectDirty=true;
    const parentDZ=selectedEl.closest('.drop-zone');if(parentDZ)syncFrames(parentDZ);
});

// CUSTOM HTML APPLY
document.getElementById('rp-apply-html')?.addEventListener('click',()=>{
    if(!selectedEl)return;
    const html=document.getElementById('rp-custom-html').value;if(!html.trim())return;
    const content=selectedEl.querySelector('.ci-content');if(!content)return;
    content.innerHTML=`<div class="prim-shape" data-prim="custom" data-assigned-type="custom">${html}</div>`;
    const label=selectedEl.querySelector('.ci-bar-label');if(label)label.textContent='CUSTOM';
    notify('Custom HTML applied');projectDirty=true;
    const parentDZ=selectedEl.closest('.drop-zone');if(parentDZ)syncFrames(parentDZ);
});

// TABLE
document.getElementById('rp-table-apply')?.addEventListener('click',()=>{
    if(!selectedEl)return;const tbl=selectedEl.querySelector('.prim-table-dynamic');if(!tbl)return;
    const rows=parseInt(document.getElementById('rp-table-rows').value)||3;
    const cols=parseInt(document.getElementById('rp-table-cols').value)||4;
    tbl.dataset.rows=rows;tbl.dataset.cols=cols;
    let h='<table style="width:100%;border-collapse:collapse;border:2px solid #0f172a;"><thead><tr style="border-bottom:2px solid #0f172a;background:#f8fafc;">';
    for(let c=0;c<cols;c++)h+=`<th style="padding:8px 12px;font-weight:700;text-align:left;font-size:12px;">Col ${c+1}</th>`;
    h+='</tr></thead><tbody>';
    for(let r=0;r<rows;r++){h+='<tr style="border-bottom:1px solid #e2e8f0;">';for(let c=0;c<cols;c++)h+='<td style="padding:8px 12px;font-size:12px;">Cell</td>';h+='</tr>';}
    h+='</tbody></table>';tbl.innerHTML=h;notify(`Table: ${rows}×${cols}`);projectDirty=true;
    const parentDZ=selectedEl.closest('.drop-zone');if(parentDZ)syncFrames(parentDZ);
});

// RIGHT PANEL ACTIONS
document.getElementById('rp-duplicate')?.addEventListener('click',()=>{if(selectedEl&&selectedComp)addComponent(selectedComp,selectedEl.parentElement,selectedEl.nextElementSibling);});
document.getElementById('rp-delete')?.addEventListener('click',()=>{if(!selectedEl)return;const p=selectedEl.parentElement;selectedEl.remove();selectedEl=null;selectedComp=null;updateStatus();showEmpty(p);updateRightPanel();projectDirty=true;syncFrames(p);});
document.getElementById('rp-move-up')?.addEventListener('click',()=>{if(selectedEl?.previousElementSibling){const dz=selectedEl.closest('.drop-zone');selectedEl.parentElement.insertBefore(selectedEl,selectedEl.previousElementSibling);projectDirty=true;if(dz)syncFrames(dz);}});
document.getElementById('rp-move-down')?.addEventListener('click',()=>{if(selectedEl?.nextElementSibling){const dz=selectedEl.closest('.drop-zone');selectedEl.parentElement.insertBefore(selectedEl.nextElementSibling,selectedEl);projectDirty=true;if(dz)syncFrames(dz);}});
document.getElementById('rp-export-png')?.addEventListener('click',()=>document.getElementById('btn-export-png').click());

// EXPORT DROPDOWN LOGIC
const btnExportMain=document.getElementById('btn-export-main'),exportMenu=document.getElementById('export-menu');
btnExportMain?.addEventListener('click',(e)=>{e.stopPropagation();exportMenu.style.display=exportMenu.style.display==='block'?'none':'block';});
document.addEventListener('click',()=>exportMenu&&(exportMenu.style.display='none'));

// PANEL TOGGLE
document.getElementById('btn-toggle-right')?.addEventListener('click',()=>{rightPanel.classList.add('collapsed');btnOpenRight.classList.add('show');});
btnOpenRight.addEventListener('click',()=>{rightPanel.classList.remove('collapsed');btnOpenRight.classList.remove('show');});

// HELPERS
function removeDropIndicator(){if(dropIndicator?.parentElement)dropIndicator.remove();dropIndicator=null;}
function clearHL(){document.querySelectorAll('.nest-target').forEach(el=>el.classList.remove('nest-target'));}
function showEmpty(c){if(!c)return;const es=c.querySelector('.empty-state');if(es&&!c.querySelector('.ci'))es.style.display='flex';}
function updateStatus(){const n=document.querySelectorAll('.ci').length;statusEl.innerHTML=n?`<span class="status-dot"></span> ${n} items`:'<span class="status-dot"></span> Ready';}

// LAYOUT ACTIONS
document.getElementById('rp-layout-row')?.addEventListener('click',()=>{
    const content=selectedEl?.querySelector('.ci-content');if(!content)return;
    content.classList.remove('flex-col');content.classList.add('flex-row');
    projectDirty=true;updateRightPanel();syncFrames(selectedEl.closest('.drop-zone'));
});
document.getElementById('rp-layout-col')?.addEventListener('click',()=>{
    const content=selectedEl?.querySelector('.ci-content');if(!content)return;
    content.classList.remove('flex-row');content.classList.add('flex-col');
    projectDirty=true;updateRightPanel();syncFrames(selectedEl.closest('.drop-zone'));
});
document.getElementById('rp-align-left')?.addEventListener('click',()=>{
    selectedEl.classList.remove('align-center','align-end');selectedEl.classList.add('align-start');
    projectDirty=true;updateRightPanel();syncFrames(selectedEl.closest('.drop-zone'));
});
document.getElementById('rp-align-center')?.addEventListener('click',()=>{
    selectedEl.classList.remove('align-start','align-end');selectedEl.classList.add('align-center');
    projectDirty=true;updateRightPanel();syncFrames(selectedEl.closest('.drop-zone'));
});
document.getElementById('rp-align-right')?.addEventListener('click',()=>{
    selectedEl.classList.remove('align-start','align-center');selectedEl.classList.add('align-end');
    projectDirty=true;updateRightPanel();syncFrames(selectedEl.closest('.drop-zone'));
});
rpWidth?.addEventListener('input',()=>{if(selectedEl){selectedEl.style.width=rpWidth.value;projectDirty=true;syncFrames(selectedEl.closest('.drop-zone'));}});
rpHeight?.addEventListener('input',()=>{if(selectedEl){selectedEl.style.height=rpHeight.value;projectDirty=true;syncFrames(selectedEl.closest('.drop-zone'));}});
rpLeft?.addEventListener('input',()=>{if(selectedEl){selectedEl.style.left=rpLeft.value;projectDirty=true;syncFrames(selectedEl.closest('.drop-zone'));}});
rpTop?.addEventListener('input',()=>{if(selectedEl){selectedEl.style.top=rpTop.value;projectDirty=true;syncFrames(selectedEl.closest('.drop-zone'));}});

document.getElementById('rp-pos-flow')?.addEventListener('click',()=>{
    const dz=selectedEl.closest('.drop-zone');if(!dz)return;
    dz.classList.remove('absolute-mode');updateRightPanel();syncFrames(dz);
});
document.getElementById('rp-pos-free')?.addEventListener('click',()=>{
    const dz=selectedEl.closest('.drop-zone');if(!dz)return;
    dz.classList.add('absolute-mode');updateRightPanel();syncFrames(dz);
});

// PLATFORM
document.querySelectorAll('.platform-opt').forEach(b=>{b.addEventListener('click',()=>{document.querySelectorAll('.platform-opt').forEach(x=>x.classList.remove('active'));b.classList.add('active');saveCurrentScreen();currentPlatform=b.dataset.platform;loadScreen(activeScreenId);notify('Platform: '+b.textContent.trim());});});

// HEIGHT
document.querySelectorAll('.height-btn').forEach(b=>{b.addEventListener('click',()=>{document.querySelectorAll('.height-btn').forEach(x=>x.classList.remove('active'));b.classList.add('active');const h=parseInt(b.dataset.h);document.querySelectorAll('.canvas-frame').forEach(f=>{f.style.minHeight=(h||600)+'px';f.style.height='auto';});projectDirty=true;});});

// ZOOM
function setZoom(z){currentZoom=Math.max(0.25,Math.min(2,Math.round(z*100)/100));document.querySelectorAll('.canvas-frame').forEach(f=>f.style.zoom=currentZoom);qbZoomVal.textContent=Math.round(currentZoom*100)+'%';}
document.getElementById('qb-zin').addEventListener('click',()=>setZoom(currentZoom+0.1));
document.getElementById('qb-zout').addEventListener('click',()=>setZoom(currentZoom-0.1));
document.getElementById('qb-zfit').addEventListener('click',()=>{const vpW=viewport.clientWidth-60;const frames=viewport.querySelectorAll('.canvas-frame:not(.dimmed-frame)');let tw=0;frames.forEach(f=>tw+=parseInt(f.style.width)||400);tw+=(frames.length-1)*24;setZoom(Math.min(1,vpW/tw));});
document.addEventListener('wheel',e=>{if(!e.ctrlKey&&!e.metaKey)return;e.preventDefault();setZoom(currentZoom+(e.deltaY>0?-0.1:0.1));},{passive:false});

// CLEAR
document.getElementById('btn-clear').addEventListener('click',()=>{if(!confirm('Clear all?'))return;document.querySelectorAll('.ci').forEach(el=>el.remove());itemUID=0;selectedEl=null;selectedComp=null;updateStatus();updateRightPanel();document.querySelectorAll('.empty-state').forEach(es=>es.style.display='flex');projectDirty=true;});

// SAVE .bnt
document.getElementById('btn-save').addEventListener('click',saveProject);
function saveProject(){
    saveCurrentScreen();
    const project={version:9,platform:currentPlatform,screens,activeScreenId,screenData:{},frameVisibility,screenZoom};
    Object.keys(screenData).forEach(k=>{project.screenData[k]=screenData[k];});
    const blob=new Blob([JSON.stringify(project,null,2)],{type:'application/json'});
    const link=document.createElement('a');link.download=`wireframe-project-${Date.now()}.bnt`;
    link.href=URL.createObjectURL(blob);link.click();URL.revokeObjectURL(link.href);
    projectDirty=false;notify('✓ Project saved as .bnt!');
}

// LOAD .bnt
document.getElementById('btn-load').addEventListener('click',()=>document.getElementById('file-load').click());
document.getElementById('file-load').addEventListener('change',e=>{
    const file=e.target.files[0];if(!file)return;
    const reader=new FileReader();
    reader.onload=ev=>{
        try{
            const proj=JSON.parse(ev.target.result);
            if(!proj.screens)throw 'Invalid';
            screens=proj.screens;activeScreenId=proj.activeScreenId||screens[0].id;
            screenData=proj.screenData||{};frameVisibility=proj.frameVisibility||{};
            screenZoom=proj.screenZoom||{};
            currentPlatform=proj.platform||'web';
            document.querySelectorAll('.platform-opt').forEach(b=>{b.classList.toggle('active',b.dataset.platform===currentPlatform);});
            screenUID=Math.max(...screens.map(s=>s.id),0);
            loadScreen(activeScreenId);renderScreenTabs();
            projectDirty=false;notify('✓ Project loaded!');
        }catch(err){notify('✕ Invalid .bnt file');console.error(err);}
    };
    reader.readAsText(file);e.target.value='';
});

// SCREENSHOTS & EXPORTS
document.getElementById('btn-export-png')?.addEventListener('click',async()=>{
    notify('Exporting PNG...');
    for(const frame of viewport.querySelectorAll('.canvas-frame:not(.dimmed-frame)')){
        frame.classList.add('screenshot-mode');const sz=frame.style.zoom||'1';frame.style.zoom='1';
        await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));
        try{const cvs=await html2canvas(frame,{useCORS:true,scale:2,backgroundColor:'#fff',logging:false,windowWidth:parseInt(frame.style.width)||1440});
        const a=document.createElement('a');a.download=`${frame.dataset.frameKey}-${Date.now()}.png`;a.href=cvs.toDataURL('image/png');a.click();}catch(err){console.error(err);}
        frame.classList.remove('screenshot-mode');frame.style.zoom=sz;
    }
    notify('✓ PNG Exported!');
});

// EXPORT STANDARD SVG
document.getElementById('btn-export-svg')?.addEventListener('click',async()=>{
    notify('Exporting SVG...');
    for(const frame of viewport.querySelectorAll('.canvas-frame:not(.dimmed-frame)')){
        const sz=frame.style.zoom||'1';frame.style.zoom='1';
        const w=frame.offsetWidth,h=frame.offsetHeight;
        const html=frame.innerHTML.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
        const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><foreignObject width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml">${frame.innerHTML}</div></foreignObject></svg>`;
        const blob=new Blob([svg],{type:'image/svg+xml'});
        const a=document.createElement('a');a.download=`${frame.dataset.frameKey}.svg`;
        a.href=URL.createObjectURL(blob);a.click();URL.revokeObjectURL(a.href);
        frame.style.zoom=sz;
    }
    notify('✓ SVG Exported!');
});

// EXPORT SVG FOR FIGMA
document.getElementById('btn-export-figma')?.addEventListener('click',async()=>{
    notify('Generating Figma SVG...');
    for(const frame of viewport.querySelectorAll('.canvas-frame:not(.dimmed-frame)')){
        frame.classList.add('screenshot-mode');const sz=frame.style.zoom||'1';frame.style.zoom='1';
        await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));
        try{
            const cvs=await html2canvas(frame,{useCORS:true,scale:2,backgroundColor:'#fff',logging:false,windowWidth:parseInt(frame.style.width)||1440});
            const w=cvs.width,h=cvs.height,dataUrl=cvs.toDataURL('image/png');
            const svg=`<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${w/2}" height="${h/2}" viewBox="0 0 ${w/2} ${h/2}">\n  <title>${frame.dataset.frameKey}</title>\n  <image width="${w/2}" height="${h/2}" xlink:href="${dataUrl}"/>\n</svg>`;
            const blob=new Blob([svg],{type:'image/svg+xml'});
            const a=document.createElement('a');a.download=`${frame.dataset.frameKey}-figma.svg`;
            a.href=URL.createObjectURL(blob);a.click();URL.revokeObjectURL(a.href);
        }catch(err){console.error(err);}
        frame.classList.remove('screenshot-mode');frame.style.zoom=sz;
    }
    notify('✓ Figma SVG exported — drag into Figma!');
});

// EXPORT STANDALONE HTML
document.getElementById('btn-export-html')?.addEventListener('click',()=>{
    const firstDZ=viewport.querySelector('.canvas-frame .drop-zone');
    if(!firstDZ) return;
    const fullHtml=`<!DOCTYPE html><html><head><meta charset="utf-8"><title>${screens.find(s=>s.id===activeScreenId)?.name}</title><script src="https://cdn.tailwindcss.com"></script><style>body{background:#f5f5f4;padding:40px;display:flex;justify-content:center;} .canvas{background:#fff;border:1px solid #e7e5e4;box-shadow:0 2px 24px rgba(0,0,0,0.08);width:100%;max-width:1440px;min-height:800px;position:relative;}</style></head><body><div class="canvas">${firstDZ.innerHTML}</div></body></html>`;
    const blob=new Blob([fullHtml],{type:'text/html'});
    const a=document.createElement('a');a.download=`${screens.find(s=>s.id===activeScreenId)?.name}.html`;
    a.href=URL.createObjectURL(blob);a.click();URL.revokeObjectURL(a.href);
    notify('✓ HTML File Exported!');
});

// TOAST
let toastTimer;function notify(msg){toastEl.textContent=msg;toastEl.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toastEl.classList.remove('show'),2500);}

// SHORTCUTS
function toggleShortcuts(){shortcutsModal.classList.toggle('open');}
document.getElementById('btn-shortcuts')?.addEventListener('click',toggleShortcuts);
document.getElementById('qb-shortcuts')?.addEventListener('click',toggleShortcuts);
document.getElementById('btn-close-shortcuts')?.addEventListener('click',toggleShortcuts);
shortcutsModal.addEventListener('click',e=>{if(e.target===shortcutsModal)toggleShortcuts();});

document.addEventListener('keydown',e=>{
    const isEdit=document.activeElement.tagName==='INPUT'||document.activeElement.tagName==='TEXTAREA'||document.activeElement.isContentEditable;
    if(e.key==='?'&&!e.ctrlKey&&!isEdit)toggleShortcuts();
    if((e.key==='Delete'||e.key==='Backspace')&&selectedEl&&!isEdit){e.preventDefault();const p=selectedEl.parentElement;selectedEl.remove();selectedEl=null;selectedComp=null;updateStatus();showEmpty(p);updateRightPanel();projectDirty=true;syncFrames(p);}
    if(e.key==='Escape'){if(drawMode){exitDrawMode();return;}if(shortcutsModal.classList.contains('open')){toggleShortcuts();return;}selectItem(null);}
    if(e.ctrlKey&&e.key==='d'&&selectedEl&&selectedComp){e.preventDefault();addComponent(selectedComp,selectedEl.parentElement,selectedEl.nextElementSibling);}
    if(e.ctrlKey&&e.key==='k'){e.preventDefault();searchInput.focus();searchInput.select();}
    if(e.ctrlKey&&e.key==='.'){e.preventDefault();if(rightPanel.classList.contains('collapsed')){rightPanel.classList.remove('collapsed');btnOpenRight.classList.remove('show');}else{rightPanel.classList.add('collapsed');btnOpenRight.classList.add('show');}}
    if(e.ctrlKey&&e.key==='s'&&!e.shiftKey){e.preventDefault();saveProject();}
    if(e.ctrlKey&&e.shiftKey&&e.key==='S'){e.preventDefault();document.getElementById('btn-export-png').click();}
    if(e.ctrlKey&&e.key==='0'){e.preventDefault();document.getElementById('qb-zfit').click();}
});

// INIT
buildCanvases();renderScreenTabs();updateStatus();updateRightPanel();