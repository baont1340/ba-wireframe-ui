<?php
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
?>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>BA Wireframe Builder — Multi-Screen Project</title>
    <meta name="description" content="Professional wireframe builder with multi-screen projects, draw tools, and .bnt file save/load." />
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-app:#f5f5f4;--bg-canvas:#fafaf9;--bg-panel:#ffffff;
            --bg-panel-hover:#f5f5f4;--bg-panel-active:#ede9fe;--bg-toolbar:#ffffff;--bg-dot:#d6d3d1;
            --border-light:#e7e5e4;--border-medium:#d6d3d1;--border-dark:#292524;
            --text-primary:#1c1917;--text-secondary:#57534e;--text-muted:#a8a29e;
            --accent:#7c3aed;--accent-light:#ede9fe;--accent-hover:#6d28d9;--accent-glow:rgba(124,58,237,0.12);
            --danger:#ef4444;--success:#22c55e;--warning:#f59e0b;--info:#3b82f6;
            --shadow-canvas:0 2px 24px rgba(0,0,0,0.08);--shadow-lg:0 12px 40px rgba(0,0,0,0.12);
            --radius-sm:6px;--radius-md:8px;--radius-lg:12px;--radius-xl:16px;
            --transition:0.15s cubic-bezier(0.4,0,0.2,1);
        }
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
        body{font-family:'Inter',system-ui,sans-serif;display:flex;height:100vh;overflow:hidden;background:var(--bg-app);color:var(--text-primary);-webkit-font-smoothing:antialiased;}

        /* LEFT PANEL */
        #left-panel{width:272px;flex-shrink:0;background:var(--bg-panel);border-right:1px solid var(--border-light);display:flex;flex-direction:column;z-index:30;}
        #panel-header{padding:14px 16px 10px;border-bottom:1px solid var(--border-light);flex-shrink:0;}
        #brand{display:flex;align-items:center;gap:10px;margin-bottom:12px;}
        #brand-logo{width:30px;height:30px;background:linear-gradient(135deg,var(--accent),#a855f7);border-radius:var(--radius-md);display:flex;align-items:center;justify-content:center;color:#fff;font-size:13px;font-weight:800;box-shadow:0 2px 8px rgba(124,58,237,0.3);}
        #brand-name{font-size:13px;font-weight:700;letter-spacing:-0.3px;}
        #brand-sub{font-size:9px;font-weight:500;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.5px;}
        #search-wrap{position:relative;}
        #search-icon{position:absolute;left:10px;top:50%;transform:translateY(-50%);width:14px;height:14px;color:var(--text-muted);pointer-events:none;}
        #component-search{width:100%;padding:7px 10px 7px 30px;border:1px solid var(--border-light);border-radius:var(--radius-md);font-size:12px;font-family:inherit;color:var(--text-primary);outline:none;background:var(--bg-canvas);transition:border-color var(--transition),box-shadow var(--transition);}
        #component-search::placeholder{color:var(--text-muted);}
        #component-search:focus{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-glow);}
        #component-list{flex:1;overflow-y:auto;scrollbar-width:thin;scrollbar-color:var(--border-medium) transparent;}
        #component-list::-webkit-scrollbar{width:5px;}
        #component-list::-webkit-scrollbar-thumb{background:var(--border-medium);border-radius:10px;}
        .cat-header{padding:9px 16px 5px;font-size:10px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--text-muted);background:var(--bg-panel);position:sticky;top:0;z-index:2;display:flex;align-items:center;gap:6px;}
        .cat-header::after{content:'';flex:1;height:1px;background:var(--border-light);}
        .comp-item{padding:5px 16px;display:flex;align-items:center;gap:10px;cursor:pointer;transition:background var(--transition);user-select:none;font-size:12px;font-weight:500;color:var(--text-secondary);}
        .comp-item:hover{background:var(--bg-panel-hover);color:var(--text-primary);}
        .comp-item:active{background:var(--accent-light);color:var(--accent);}
        .comp-icon{width:26px;height:26px;border:1.5px solid var(--border-medium);border-radius:var(--radius-sm);display:flex;align-items:center;justify-content:center;flex-shrink:0;background:var(--bg-canvas);color:var(--text-muted);transition:all var(--transition);}
        .comp-item:hover .comp-icon{border-color:var(--accent);color:var(--accent);background:var(--accent-light);}
        .comp-name{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
        #panel-footer{padding:10px 16px;border-top:1px solid var(--border-light);display:flex;align-items:center;justify-content:space-between;flex-shrink:0;}
        #panel-count{font-size:11px;font-weight:600;color:var(--text-muted);}
        .panel-footer-btn{padding:4px 8px;border:1px solid var(--border-light);border-radius:var(--radius-sm);background:var(--bg-canvas);font-size:10px;font-weight:600;color:var(--text-secondary);cursor:pointer;transition:all var(--transition);font-family:inherit;}
        .panel-footer-btn:hover{border-color:var(--accent);color:var(--accent);background:var(--accent-light);}

        /* MAIN */
        #main{flex:1;display:flex;flex-direction:column;min-width:0;}

        /* TOOLBAR */
        #toolbar{height:44px;background:var(--bg-toolbar);border-bottom:1px solid var(--border-light);display:flex;align-items:center;justify-content:space-between;padding:0 10px;flex-shrink:0;z-index:20;gap:4px;}
        .tb-group{display:flex;align-items:center;gap:3px;}
        .tb-sep{width:1px;height:18px;background:var(--border-light);margin:0 4px;}
        .tb-btn{padding:4px 8px;border:1px solid var(--border-light);border-radius:var(--radius-sm);background:var(--bg-panel);font-size:10px;font-weight:600;color:var(--text-secondary);cursor:pointer;font-family:inherit;transition:all var(--transition);display:flex;align-items:center;gap:3px;white-space:nowrap;}
        .tb-btn:hover{background:var(--bg-panel-hover);border-color:var(--border-medium);color:var(--text-primary);}
        .tb-btn.active{background:var(--accent-light);border-color:var(--accent);color:var(--accent);font-weight:700;}
        .tb-btn.danger:hover{background:#fef2f2;border-color:var(--danger);color:var(--danger);}
        .tb-btn.primary{background:var(--accent);border-color:var(--accent);color:#fff;}
        .tb-btn.primary:hover{background:var(--accent-hover);}
        .tb-btn.success{background:#dcfce7;border-color:#22c55e;color:#16a34a;}
        .tb-btn.success:hover{background:#bbf7d0;}
        .tb-label{font-size:9px;font-weight:600;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.05em;}
        #canvas-status{font-size:10px;font-weight:600;color:var(--text-muted);display:flex;align-items:center;gap:5px;}
        #canvas-status .status-dot{width:5px;height:5px;border-radius:50%;background:var(--success);}
        .tb-icon-btn{width:28px;height:28px;border:1px solid var(--border-light);border-radius:var(--radius-sm);background:var(--bg-panel);display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--text-secondary);transition:all var(--transition);font-family:inherit;}
        .tb-icon-btn:hover{background:var(--bg-panel-hover);border-color:var(--border-medium);color:var(--text-primary);}

        /* SCREEN TABS */
        #screen-tabs{height:34px;background:var(--bg-toolbar);border-bottom:1px solid var(--border-light);display:flex;align-items:center;padding:0 8px;gap:2px;flex-shrink:0;overflow-x:auto;scrollbar-width:none;}
        #screen-tabs::-webkit-scrollbar{display:none;}
        .screen-tab{padding:5px 12px;border:1px solid transparent;border-bottom:none;border-radius:var(--radius-sm) var(--radius-sm) 0 0;background:transparent;font-size:11px;font-weight:600;color:var(--text-muted);cursor:pointer;font-family:inherit;display:flex;align-items:center;gap:6px;white-space:nowrap;transition:all var(--transition);position:relative;}
        .screen-tab:hover{color:var(--text-primary);background:var(--bg-panel-hover);}
        .screen-tab.active{background:var(--bg-panel);color:var(--accent);border-color:var(--border-light);font-weight:700;}
        .screen-tab .tab-close{width:14px;height:14px;border:none;background:transparent;color:var(--text-muted);cursor:pointer;font-size:10px;display:flex;align-items:center;justify-content:center;border-radius:3px;transition:all var(--transition);font-family:inherit;}
        .screen-tab .tab-close:hover{background:var(--danger);color:#fff;}
        #btn-add-screen{width:28px;height:28px;border:1px dashed var(--border-medium);border-radius:var(--radius-sm);background:transparent;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--text-muted);transition:all var(--transition);font-family:inherit;flex-shrink:0;}
        #btn-add-screen:hover{border-color:var(--accent);color:var(--accent);background:var(--accent-light);}

        /* VIEWPORT */
        #viewport{flex:1;overflow:auto;display:flex;gap:24px;justify-content:center;align-items:flex-start;padding:40px 24px 120px;background:var(--bg-app);background-image:radial-gradient(circle,var(--bg-dot) 1px,transparent 1px);background-size:24px 24px;position:relative;flex-wrap:wrap;}

        /* CANVAS FRAME */
        .canvas-frame{background:#fff;border:1px solid var(--border-light);border-radius:var(--radius-lg);box-shadow:var(--shadow-canvas);flex-shrink:0;position:relative;transition:width 0.3s,min-height 0.3s,opacity 0.3s,filter 0.3s;display:flex;flex-direction:column;}
        .canvas-frame.dimmed-frame{opacity:0.3;filter:grayscale(0.5);pointer-events:none;}
        .frame-header{position:absolute;top:-28px;left:0;right:0;display:flex;align-items:center;justify-content:space-between;user-select:none;}
        .frame-label{font-size:10px;font-weight:600;color:var(--text-muted);display:flex;align-items:center;gap:5px;}
        .frame-label svg{width:12px;height:12px;}
        .frame-dims{font-size:9px;font-weight:600;color:var(--text-muted);background:var(--bg-panel);border:1px solid var(--border-light);border-radius:3px;padding:1px 5px;}
        .frame-eye-btn{width:20px;height:20px;border:1px solid var(--border-light);border-radius:3px;background:var(--bg-panel);cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--text-muted);transition:all var(--transition);margin-left:4px;pointer-events:auto;}
        .frame-eye-btn:hover{border-color:var(--accent);color:var(--accent);}
        .frame-eye-btn.off{color:var(--danger);}

        .drop-zone{min-height:400px;position:relative;padding:16px;border-radius:var(--radius-lg);overflow:hidden;flex:1;display:flex;flex-direction:row;flex-wrap:wrap;align-content:flex-start;gap:16px;}
        .drop-zone.absolute-mode { display: block; padding:0; }
        .canvas-resizer:hover::after{background:var(--accent);}
        
        .resizer { position:absolute; right:-3px; bottom:-3px; width:7px; height:7px; cursor:nwse-resize; z-index:10; background:#fff; border:1px solid var(--accent); border-radius:1px; display:none; }
        .ci.selected .resizer { display:block; }
        .resizer-r { position:absolute; right:-3px; top:0; bottom:0; width:6px; cursor:ew-resize; z-index:9; }
        .resizer-b { position:absolute; bottom:-3px; left:0; right:0; height:6px; cursor:ns-resize; z-index:9; }
        .ci.selected .resizer-r { border-right: 2px solid var(--accent); }
        .ci.selected .resizer-b { border-bottom: 2px solid var(--accent); }

        .drop-line{height:2px;background:var(--accent);margin:0;pointer-events:none;position:relative;border-radius:1px;}
        .drop-line::before{content:'';position:absolute;left:-4px;top:-3px;width:8px;height:8px;background:var(--accent);border-radius:50%;}

        /* CANVAS ITEMS */
        .ci{position:relative;display:flex;flex-direction:column;transition:outline-color var(--transition);outline:1px solid transparent;animation:fadeIn 0.2s ease-out;box-sizing:border-box;max-width:100%;}
        .drop-zone.absolute-mode .ci { position: absolute; margin: 0; max-width:none; }
        .ci:hover{outline-color:var(--border-medium);}
        .ci.selected{outline-color:var(--accent); z-index:15;}
        .ci.dragging{opacity:0.3;}
        .ci-bar{position:absolute; top:-20px; left:0; height:20px; opacity:0; pointer-events:none; background:var(--accent); display:flex; align-items:center; justify-content:space-between; padding:0 6px; cursor:grab; user-select:none; transition:opacity var(--transition); flex-shrink:0; z-index:16; border-radius:2px 2px 0 0; min-width:60px;}
        .ci.selected>.ci-bar{opacity:1; pointer-events:auto;}
        .ci-bar-left{display:flex;align-items:center;gap:4px;}
        .ci-bar-left .dots{display:none;}
        .ci-bar-label{font-size:9px;font-weight:700;color:#fff;text-transform:uppercase;letter-spacing:0.04em;}
        .ci-btns{display:flex;gap:3px;}
        .ci-btn{width:16px;height:16px;background:transparent;border:1px solid #44403c;color:#a8a29e;font-size:9px;cursor:pointer;display:flex;align-items:center;justify-content:center;border-radius:3px;font-family:inherit;transition:all var(--transition);}
        .ci-btn:hover{background:#44403c;color:#fff;}
        .ci-btn.del:hover{background:var(--danger);border-color:var(--danger);}
        .ci-content{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;}
        .ci-content.nest-target{outline:2px dashed var(--accent);outline-offset:-2px;background:var(--accent-glow);}

        .empty-state{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;pointer-events:none;}
        .empty-state .e-icon{width:40px;height:40px;border:2px dashed var(--border-medium);border-radius:var(--radius-lg);display:flex;align-items:center;justify-content:center;color:var(--text-muted);}
        .empty-state .e-title{font-size:12px;font-weight:700;color:var(--text-secondary);}
        .empty-state .e-desc{font-size:10px;color:var(--text-muted);text-align:center;line-height:1.4;max-width:180px;}

        /* RIGHT PANEL */
        #right-panel{width:260px;flex-shrink:0;background:var(--bg-panel);border-left:1px solid var(--border-light);display:flex;flex-direction:column;z-index:20;transition:width var(--transition),opacity var(--transition);overflow-y:auto;}
        #right-panel.collapsed{width:0;overflow:hidden;opacity:0;border-left:none;}
        #right-panel-header{padding:12px 14px;border-bottom:1px solid var(--border-light);display:flex;align-items:center;justify-content:space-between;flex-shrink:0;}
        #right-panel-title{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;}
        .rp-section{padding:12px 14px;border-bottom:1px solid var(--border-light);}
        .rp-label{font-size:9px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:8px;}
        .rp-row{display:flex;align-items:center;gap:6px;margin-bottom:6px;}
        .rp-row:last-child{margin-bottom:0;}
        .rp-input-label{font-size:10px;font-weight:600;color:var(--text-secondary);min-width:28px;}
        .rp-input{flex:1;min-width:0;padding:4px 7px;border:1px solid var(--border-light);border-radius:var(--radius-sm);font-size:11px;font-family:inherit;color:var(--text-primary);outline:none;background:var(--bg-canvas);transition:border-color var(--transition);}
        .rp-input:focus{border-color:var(--accent);}
        .rp-select{flex:1;min-width:0;padding:4px 7px;border:1px solid var(--border-light);border-radius:var(--radius-sm);font-size:11px;font-family:inherit;color:var(--text-primary);outline:none;background:var(--bg-canvas);cursor:pointer;}
        .rp-select:focus{border-color:var(--accent);}
        .rp-info{font-size:11px;color:var(--text-muted);padding:16px 14px;text-align:center;line-height:1.5;}
        .rp-actions{display:flex;flex-direction:column;gap:4px;}
        .rp-action-btn{width:100%;padding:5px 10px;border:1px solid var(--border-light);border-radius:var(--radius-sm);background:var(--bg-canvas);font-size:10px;font-weight:600;color:var(--text-secondary);cursor:pointer;font-family:inherit;transition:all var(--transition);display:flex;align-items:center;gap:6px;text-align:left;}
        .rp-action-btn:hover{border-color:var(--accent);color:var(--accent);background:var(--accent-light);}
        .rp-action-btn.danger:hover{border-color:var(--danger);color:var(--danger);background:#fef2f2;}
        .rp-textarea{width:100%;min-height:100px;padding:6px 8px;border:1px solid var(--border-light);border-radius:var(--radius-sm);font-size:11px;font-family:'Consolas','Courier New',monospace;color:var(--text-primary);outline:none;background:var(--bg-canvas);resize:vertical;}
        .rp-textarea:focus{border-color:var(--accent);}

        #btn-open-right{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:25;width:22px;height:44px;background:var(--bg-panel);border:1px solid var(--border-light);border-right:none;border-radius:var(--radius-sm) 0 0 var(--radius-sm);cursor:pointer;display:none;align-items:center;justify-content:center;color:var(--text-muted);transition:all var(--transition);box-shadow:-2px 0 8px rgba(0,0,0,0.05);}
        #btn-open-right:hover{color:var(--accent);background:var(--accent-light);}
        #btn-open-right.show{display:flex;}

        /* LAYOUT & FLEX */
        .ci-content.flex-row{display:flex;flex-direction:row;flex-wrap:wrap;gap:12px;align-items:center;}
        .ci-content.flex-col{display:flex;flex-direction:column;gap:12px;}
        .align-start{align-self:flex-start !important;}
        .align-center{align-self:center !important;}
        .align-end{align-self:flex-end !important;}
        .w-full{width:100% !important;}
        
        /* Inner components should fill the CI box when resized */
        .ci-content > *, .ci-content > * > * {
            width: 100% !important;
            height: 100% !important;
            box-sizing: border-box;
        }
        .ci-content img, .ci-content video, .ci-content iframe {
            object-fit: cover;
        }

        /* Absolute positioning support */
        .drop-zone.absolute-mode .ci .ci-bar { cursor: move; }

        /* QUICK BAR */
        #quick-bar{position:fixed;bottom:16px;left:50%;transform:translateX(-50%);background:var(--text-primary);border-radius:var(--radius-xl);padding:5px 7px;display:flex;align-items:center;gap:3px;z-index:100;box-shadow:0 8px 32px rgba(0,0,0,0.24);}
        .qb-btn{padding:6px 10px;border:none;border-radius:var(--radius-md);background:transparent;font-size:10px;font-weight:600;color:#a8a29e;cursor:pointer;font-family:inherit;transition:all var(--transition);display:flex;align-items:center;gap:5px;white-space:nowrap;}
        .qb-btn:hover{background:#292524;color:#fff;}
        .qb-btn.active{background:var(--accent);color:#fff;}
        .qb-sep{width:1px;height:18px;background:#44403c;margin:0 2px;}
        .qb-zoom{font-size:10px;font-weight:700;color:#a8a29e;min-width:36px;text-align:center;user-select:none;}

        /* TOAST */
        #toast{position:fixed;top:56px;right:16px;background:var(--text-primary);color:white;padding:8px 16px;font-size:11px;font-weight:600;border-radius:var(--radius-md);opacity:0;transition:opacity 0.2s,transform 0.2s;pointer-events:none;z-index:9999;transform:translateY(-4px);box-shadow:var(--shadow-lg);display:flex;align-items:center;gap:6px;}
        #toast.show{opacity:1;transform:translateY(0);}

        /* MODALS */
        .modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.4);backdrop-filter:blur(4px);display:none;align-items:center;justify-content:center;z-index:200;}
        .modal-overlay.open{display:flex;}
        .modal-box{background:var(--bg-panel);border-radius:var(--radius-xl);padding:28px;max-width:500px;width:92%;box-shadow:var(--shadow-lg);max-height:80vh;overflow-y:auto;}
        .sc-title{font-size:16px;font-weight:800;margin-bottom:16px;}
        .sc-group{margin-bottom:14px;}
        .sc-group-title{font-size:9px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:6px;}
        .sc-item{display:flex;align-items:center;justify-content:space-between;padding:4px 0;font-size:11px;color:var(--text-secondary);}
        .sc-item kbd{display:inline-flex;padding:2px 6px;background:var(--bg-canvas);border:1px solid var(--border-light);border-radius:4px;font-size:10px;font-weight:600;font-family:inherit;}

        /* WIREFRAME CLASSES */
        .wf-border{border:2px solid #0f172a;}.wf-shadow{box-shadow:4px 4px 0 rgba(15,23,42,1);}.wf-bg{background:white;}
        .wf-placeholder{background:#f1f5f9;border:2px dashed #94a3b8;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:500;}
        .wf-button{padding:8px 16px;border:2px solid #0f172a;background:white;font-weight:700;cursor:pointer;}
        .wf-input{padding:8px 16px;border:2px solid #0f172a;outline:none;width:100%;}

        /* SCREENSHOT */
        .screenshot-mode .ci-bar{display:none !important;}
        .screenshot-mode .ci{outline:none !important;box-shadow:none !important;}
        .screenshot-mode .frame-header{display:none !important;}
        .screenshot-mode .canvas-resizer{display:none !important;}

        /* DRAW MODE */
        .draw-mode .drop-zone{cursor:crosshair !important;}
        .draw-preview{position:absolute;border:2px dashed var(--accent);background:var(--accent-glow);z-index:10;pointer-events:none;}

        /* DROPDOWN MENU */
        .export-opt{width:100%;padding:8px 12px;text-align:left;background:transparent;border:none;border-bottom:1px solid var(--border-light);font-size:11px;font-weight:600;color:var(--text-secondary);cursor:pointer;transition:all var(--transition);}
        .export-opt:hover{background:var(--bg-panel-hover);color:var(--text-primary);}
        .export-opt:last-child{border-bottom:none;}

        /* PLATFORM SELECTOR */
        .platform-selector{display:flex;gap:1px;background:var(--bg-canvas);border:1px solid var(--border-light);border-radius:var(--radius-md);padding:2px;}
        .platform-opt{padding:3px 8px;border:none;border-radius:var(--radius-sm);background:transparent;font-size:10px;font-weight:600;color:var(--text-muted);cursor:pointer;font-family:inherit;transition:all var(--transition);}
        .platform-opt:hover{color:var(--text-primary);}
        .platform-opt.active{background:var(--accent);color:#fff;box-shadow:0 1px 4px rgba(124,58,237,0.3);}

        /* PLAY MODE */
        body.playing .ci-bar, body.playing .canvas-resizer, body.playing .resizer { display:none !important; }
        body.playing .ci { outline:none !important; cursor:default !important; }
        body.playing .ci[data-link-target]:not([data-link-target=""]) { cursor:pointer !important; }
        body.playing .drop-zone { background:white !important; }
        body.playing .frame-header { display:none !important; }
        body.playing #viewport { background: #f0f0f0 !important; cursor:default !important; }

        /* OVERLAY PREVIEW */
        #prototype-overlay-container { display:none; position:fixed; inset:0; z-index:999; background:rgba(0,0,0,0.5); backdrop-filter:blur(2px); align-items:center; justify-content:center; }
        #prototype-overlay-container.active { display:flex; }
        #prototype-overlay-content { background:white; border-radius:var(--radius-xl); box-shadow:var(--shadow-lg); position:relative; max-width:90%; max-height:90%; overflow:auto; }
        #btn-close-overlay { position:absolute; top:12px; right:12px; background:white; border:1px solid var(--border-light); width:32px; height:32px; border-radius:50%; cursor:pointer; display:flex; align-items:center; justify-content:center; font-weight:bold; z-index:10; }
        #btn-close-overlay:hover { background:var(--danger); color:white; }

        @keyframes fadeIn{from{opacity:0;transform:translateY(4px);}to{opacity:1;transform:translateY(0);}}
    </style>
</head>
<body>

<!-- LEFT PANEL -->
<div id="left-panel">
    <div id="panel-header">
        <div id="brand">
            <div id="brand-logo">W</div>
            <div><div id="brand-name">BA Wireframe</div><div id="brand-sub">Builder v4.0</div></div>
        </div>
        <div id="search-wrap">
            <svg id="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            <input id="component-search" type="text" placeholder="Search components..." />
        </div>
        <div id="left-tabs" class="flex border-b border-[var(--border-light)] mt-2">
            <button id="tab-btn-comp" class="flex-1 py-2 text-[10px] font-bold uppercase tracking-wider text-[var(--accent)] border-b-2 border-[var(--accent)]">Components</button>
            <button id="tab-btn-layers" class="flex-1 py-2 text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] hover:text-[var(--text-primary)]">Layers</button>
        </div>
    </div>
    <div id="component-list"></div>
    <div id="layers-list" style="display:none; flex:1; overflow-y:auto; padding:8px 0;"></div>
    <div id="panel-footer">
        <span id="panel-count">0</span>
        <button class="panel-footer-btn" id="btn-guide">📖 User Guide</button>
        <button class="panel-footer-btn" id="btn-shortcuts">⌨ Shortcuts</button>
    </div>
</div>

<!-- MAIN -->
<div id="main">
    <!-- TOOLBAR -->
    <div id="toolbar">
        <div class="tb-group">
            <button class="tb-btn primary" id="btn-play-mode" title="Preview Prototype">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                Play
            </button>
            <div class="tb-sep"></div>
            <span id="canvas-status"><span class="status-dot"></span> Ready</span>
            <div class="tb-sep"></div>
            <span class="tb-label">Platform</span>
            <div class="platform-selector">
                <button class="platform-opt active" data-platform="web">🌐 Web</button>
                <button class="platform-opt" data-platform="app">📱 App</button>
                <button class="platform-opt" data-platform="desktop">🖥️ Desktop</button>
            </div>
            <div class="tb-sep"></div>
            <span class="tb-label">Selection</span>
            <button class="tb-btn" id="btn-group" title="Group (Ctrl+G)">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6v6H9z"/></svg>
                Group
            </button>
            <button class="tb-btn" id="btn-ungroup" title="Ungroup (Ctrl+Shift+G)">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" stroke-dasharray="2 2"/><path d="M9 9l6 6m0-6l-6 6"/></svg>
                Ungroup
            </button>
            <div class="tb-sep"></div>

            <!-- DRAW TOOL -->
            <span class="tb-label">Draw</span>
            <button class="tb-btn" id="btn-draw-rect" title="Draw Rectangle">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="1"/></svg>
                ▭
            </button>
            <button class="tb-btn" id="btn-draw-circle" title="Draw Circle">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>
                ○
            </button>

            <div class="tb-sep"></div>
            <span class="tb-label">Height</span>
            <button class="tb-btn height-btn" data-h="800">S</button>
            <button class="tb-btn height-btn active" data-h="1600">M</button>
            <button class="tb-btn height-btn" data-h="3000">L</button>
            <button class="tb-btn height-btn" data-h="0">Auto</button>
        </div>
        <div class="tb-group">
            <button class="tb-btn success" id="btn-save" title="Save project (.bnt)">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/><path d="M17 21v-8H7v8"/><path d="M7 3v5h8"/></svg>
                Save
            </button>
            <button class="tb-btn" id="btn-load" title="Load project (.bnt)">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                Load
            </button>
            <input type="file" id="file-load" accept=".bnt" style="display:none;">
            <div class="tb-sep"></div>
            <button class="tb-btn danger" id="btn-clear" title="Clear canvas">Clear Project</button>
            <div id="export-dropdown-wrap" style="position:relative;">
                <button class="tb-btn primary" id="btn-export-main">
                    🚀 Export <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
                </button>
                <div id="export-menu" style="display:none;position:absolute;top:100%;right:0;margin-top:5px;background:var(--bg-panel);border:1px solid var(--border-light);border-radius:var(--radius-md);box-shadow:var(--shadow-lg);min-width:160px;z-index:100;">
                    <button class="export-opt" id="btn-export-png">📷 Export as PNG</button>
                    <button class="export-opt" id="btn-export-svg">🖼️ Export as SVG</button>
                    <button class="export-opt" id="btn-export-html">🌐 Export as HTML (Figma Link)</button>
                    <button class="export-opt" id="btn-export-figma" style="background:#1e1e1e;color:#fff;border-radius:0 0 var(--radius-md) var(--radius-md);">🎨 Figma SVG (Embedded)</button>
                </div>
            </div>
        </div>
    </div>

    <!-- SCREEN TABS -->
    <div id="screen-tabs"></div>

    <!-- VIEWPORT -->
    <div id="viewport"></div>
</div>

<!-- RIGHT PANEL -->
<div id="right-panel">
    <div id="right-panel-header">
        <span id="right-panel-title">Properties</span>
        <button class="tb-icon-btn" id="btn-toggle-right" title="Close panel">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
        </button>
    </div>
    <div id="right-panel-body">
        <!-- Element Type -->
        <div class="rp-section" id="rp-element-type-section" style="display:none;">
            <div class="rp-label">Element Type</div>
            <div class="rp-row">
                <span class="rp-input-label">Type</span>
                <select class="rp-select" id="rp-element-type">
                    <option value="div">Generic (div)</option>
                    <option value="img">Image (img)</option>
                    <option value="button">Button</option>
                    <option value="input">Input</option>
                    <option value="textarea">Textarea</option>
                    <option value="a">Link (a)</option>
                    <option value="video">Video</option>
                    <option value="iframe">Iframe / Embed</option>
                    <option value="map">Map</option>
                    <option value="nav">Navigation</option>
                    <option value="header">Header</option>
                    <option value="footer">Footer</option>
                    <option value="section">Section</option>
                    <option value="form">Form</option>
                    <option value="table">Table</option>
                    <option value="custom">✎ Custom HTML</option>
                </select>
            </div>
            <div id="rp-type-description" style="font-size:9px;color:var(--text-muted);margin-top:4px;line-height:1.3;"></div>
        </div>
        <!-- Custom HTML -->
        <div class="rp-section" id="rp-custom-html-section" style="display:none;">
            <div class="rp-label">Custom HTML</div>
            <textarea class="rp-textarea" id="rp-custom-html" placeholder="Paste your HTML code here..."></textarea>
            <button class="rp-action-btn" id="rp-apply-html" style="margin-top:6px;">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12l5 5L20 7"/></svg>
                Apply HTML
            </button>
        </div>
        <!-- Table config -->
        <div class="rp-section" id="rp-table-section" style="display:none;">
            <div class="rp-label">Table Config</div>
            <div class="rp-row">
                <span class="rp-input-label">Rows</span>
                <input class="rp-input" type="number" id="rp-table-rows" value="3" min="1" max="20" />
            </div>
            <div class="rp-row">
                <span class="rp-input-label">Cols</span>
                <input class="rp-input" type="number" id="rp-table-cols" value="4" min="1" max="12" />
            </div>
            <button class="rp-action-btn" id="rp-table-apply" style="margin-top:4px;">Apply Table</button>
        </div>
        <!-- Selected component -->
        <div class="rp-section" id="rp-selected-section" style="display:none;">
            <div class="rp-label">Selected Component</div>
            <div id="rp-selected-name" style="font-size:11px;font-weight:700;margin-bottom:6px;"></div>
            <div class="rp-actions">
                <button class="rp-action-btn" id="rp-duplicate">⎘ Duplicate</button>
                <button class="rp-action-btn" id="rp-move-up">↑ Move Up</button>
                <button class="rp-action-btn" id="rp-move-down">↓ Move Down</button>
                <button class="rp-action-btn danger" id="rp-delete">✕ Delete</button>
            </div>
        </div>
        <!-- LAYOUT & STYLE -->
        <div class="rp-section" id="rp-layout-section" style="display:none;">
            <div class="rp-label">Layout & Style</div>
            <div class="rp-row">
                <span class="rp-input-label">Canvas</span>
                <div class="flex gap-1 flex-1">
                    <button class="tb-btn flex-1 py-1" id="rp-pos-flow" title="Standard Flow">Flow</button>
                    <button class="tb-btn flex-1 py-1" id="rp-pos-free" title="Free Positioning">Free</button>
                </div>
            </div>
            <div class="rp-row">
                <span class="rp-input-label">Flow Dir</span>
                <div class="flex gap-1 flex-1">
                    <button class="tb-btn flex-1 py-1" id="rp-layout-row" title="Horizontal">Row</button>
                    <button class="tb-btn flex-1 py-1" id="rp-layout-col" title="Vertical">Col</button>
                </div>
            </div>
            <div class="rp-row">
                <span class="rp-input-label">Align</span>
                <div class="flex gap-1 flex-1">
                    <button class="tb-btn flex-1 py-1" id="rp-align-left">L</button>
                    <button class="tb-btn flex-1 py-1" id="rp-align-center">C</button>
                    <button class="tb-btn flex-1 py-1" id="rp-align-right">R</button>
                </div>
            </div>
            <div class="rp-row">
                <span class="rp-input-label">Pos</span>
                <div class="flex gap-1">
                    <input class="rp-input" style="max-width:60px;" type="text" id="rp-left" placeholder="X" />
                    <input class="rp-input" style="max-width:60px;" type="text" id="rp-top" placeholder="Y" />
                </div>
            </div>
            <div class="rp-row">
                <span class="rp-input-label">Size</span>
                <div class="flex gap-1">
                    <input class="rp-input" style="max-width:60px;" type="text" id="rp-width" placeholder="W" />
                    <input class="rp-input" style="max-width:60px;" type="text" id="rp-height" placeholder="H" />
                </div>
            </div>
        </div>

        <!-- Interactions -->
        <div class="rp-section" id="rp-interaction-section" style="display:none;">
            <div class="rp-label">Interactions (Prototype)</div>
            <div class="rp-row">
                <span class="rp-input-label">Action</span>
                <select class="rp-select" id="rp-link-type">
                    <option value="link">Jump to Screen</option>
                    <option value="overlay">Show as Overlay</option>
                </select>
            </div>
            <div class="rp-row">
                <span class="rp-input-label">Target</span>
                <select class="rp-select" id="rp-link-target">
                    <option value="">None</option>
                </select>
            </div>
            
            <div id="rp-overlay-settings" style="display:none; margin-top:8px; border-top:1px dashed var(--border-light); padding-top:8px;">
                <div class="rp-row">
                    <span class="rp-input-label">Position</span>
                    <select class="rp-select" id="rp-overlay-pos">
                        <option value="center">Center</option>
                        <option value="top">Top Center</option>
                        <option value="bottom">Bottom Center</option>
                    </select>
                </div>
                <div class="rp-row">
                    <span class="rp-input-label">Backdrop</span>
                    <label class="flex items-center gap-1 cursor-pointer" style="font-size:10px;">
                        <input type="checkbox" id="rp-overlay-backdrop" checked /> Dim background
                    </label>
                </div>
            </div>
            <div style="font-size:9px;color:var(--text-muted);margin-top:6px;">Define how the linked screen or hidden element behaves in Play mode.</div>
        </div>

        <!-- Hidden / Overlay State -->
        <div class="rp-section" id="rp-state-section" style="display:none;">
            <div class="rp-label">States & Behavior</div>
            <div class="rp-row">
                <label class="flex items-center gap-2 cursor-pointer" style="font-size:11px;font-weight:600;">
                    <input type="checkbox" id="rp-is-hidden" /> Treat as Overlay (Hide by default)
                </label>
            </div>
            <div style="font-size:9px;color:var(--text-muted);margin-top:4px;">When ON: This element is invisible in Play mode until triggered by another button.</div>
        </div>
        </div>

        <!-- Export -->
        <div class="rp-section">
            <div class="rp-label">Quick Export</div>
            <div class="rp-actions">
                <button class="rp-action-btn" id="rp-export-png">📷 Export as PNG</button>
            </div>
        </div>
        <div class="rp-info" id="rp-no-selection">Select a component to see properties.</div>
    </div>
</div>

<button id="btn-open-right" title="Open Properties">
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
</button>

<!-- QUICK BAR -->
<div id="quick-bar">
    <button class="qb-btn" id="qb-zout" title="Zoom Out">−</button>
    <span class="qb-zoom" id="qb-zoom-val">100%</span>
    <button class="qb-btn" id="qb-zin" title="Zoom In">+</button>
    <button class="qb-btn" id="qb-zfit">FIT</button>
    <div class="qb-sep"></div>
    <button class="qb-btn" id="qb-shortcuts" title="Shortcuts">⌨</button>
</div>

<div id="toast"></div>

<!-- SHORTCUTS MODAL -->
<!-- GUIDE MODAL -->
<div id="guide-modal" class="modal-overlay">
    <div class="modal-box" style="max-width:700px;">
        <div class="flex items-center justify-between border-b pb-4 mb-4">
            <h2 class="text-xl font-bold">📖 User Guide (Hướng dẫn sử dụng)</h2>
            <button class="p-1 hover:bg-gray-100 rounded" id="btn-close-guide">✕</button>
        </div>
        <div class="space-y-6 text-sm leading-relaxed" style="max-height:60vh; overflow-y:auto;">
            <div class="p-4 bg-purple-50 rounded-lg">
                <h3 class="font-bold text-purple-700 mb-2">1. 🏗️ Cách trình chiếu Prototype (Overlay)</h3>
                <p>Nút "Play" trên Toolbar giúp bạn demo cho khách: Gắn Link cho linh kiện ở bảng Properties bên phải (Action: Show as Overlay). Khi nhấn nút trong chế độ Play, một cửa sổ popup sẽ hiện ra.</p>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <div class="border p-3 rounded">
                    <h3 class="font-bold mb-1">🖱️ Kéo cạnh (Edge Resize)</h3>
                    <p>Đưa chuột vào mép phải hoặc cạnh dưới của linh kiện để thay đổi kích thước ngang/dọc nhanh.</p>
                </div>
                <div class="border p-3 rounded">
                    <h3 class="font-bold mb-1">📂 Layers Panel</h3>
                    <p>Tab "Layers" bên trái giúp quản lý các phần tử bị che khuất hoặc chồng đè.</p>
                </div>
            </div>
            <div class="border p-3 rounded">
                <h3 class="font-bold mb-1">🧘 Layout (Flow vs Free Drag)</h3>
                <p>Mặc định linh kiện sẽ dàn theo flow (tự động xuống dòng). Nếu muốn tự do kéo thả X/Y, hãy bật **Free Drag** ở bảng bên phải.</p>
            </div>
            <div class="border p-3 rounded bg-gray-50">
                <h3 class="font-bold mb-1">🎨 Primitive Shapes</h3>
                <p>Linh kiện "Rectangle", "Text" có thể đổi "Type" ở bảng phải để biến thành Nút, Input hoặc Ảnh mà không cần vẽ lại.</p>
            </div>
            <div class="border p-3 rounded">
                <h3 class="font-bold mb-1">⌨️ Phím tắt (Shortcuts)</h3>
                <p>Ctrl + S: Lưu dự án | Del: Xóa | Ctrl + D: Nhân bản | Ctrl + K: Tìm kiếm.</p>
            </div>
        </div>
        <div class="mt-6 flex justify-end">
            <button class="bg-purple-600 text-white px-6 py-2 rounded-lg font-bold" id="btn-read-full">Đã hiểu!</button>
        </div>
    </div>
</div>

<div id="shortcuts-modal" class="modal-overlay">
    <div class="modal-box">
        <h2 class="sc-title">⌨️ Keyboard Shortcuts</h2>
        <div class="sc-group"><div class="sc-group-title">Canvas</div>
            <div class="sc-item"><span>Zoom In / Out</span><kbd>Ctrl +/−</kbd></div>
            <div class="sc-item"><span>Zoom to Fit</span><kbd>Ctrl 0</kbd></div>
        </div>
        <div class="sc-group"><div class="sc-group-title">Components</div>
            <div class="sc-item"><span>Delete</span><kbd>Delete</kbd></div>
            <div class="sc-item"><span>Duplicate</span><kbd>Ctrl D</kbd></div>
            <div class="sc-item"><span>Deselect</span><kbd>Escape</kbd></div>
        </div>
        <div class="sc-group"><div class="sc-group-title">Project</div>
            <div class="sc-item"><span>Save .bnt</span><kbd>Ctrl S</kbd></div>
            <div class="sc-item"><span>Search</span><kbd>Ctrl K</kbd></div>
            <div class="sc-item"><span>Toggle Panel</span><kbd>Ctrl .</kbd></div>
        </div>
        <div style="margin-top:12px;text-align:center;"><button class="tb-btn" id="btn-close-shortcuts">Close</button></div>
    </div>
</div>

<button id="btn-exit-play" style="display:none; position:fixed; right:24px; top:24px; z-index:1000; background:var(--danger); color:white; padding:8px 16px; border-radius:var(--radius-md); font-weight:bold; box-shadow:var(--shadow-lg);">✕ Exit Preview</button>

<div id="prototype-overlay-container">
    <div id="prototype-overlay-content">
        <button id="btn-close-overlay">✕</button>
        <div id="overlay-dz-target" class="drop-zone"></div>
    </div>
</div>

<script src="js/main.js?v=<?php echo time(); ?>"></script>
</body>
</html>