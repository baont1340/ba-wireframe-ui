// BA Wireframe Kit — Figma Plugin (code.js)
// This runs in Figma's sandbox. It receives messages from ui.html and creates nodes.

figma.showUI(__html__, { width: 280, height: 560, themeColors: true });

// ─── HELPERS ────────────────────────────────────────────────
function createText(text, size, bold) {
  const t = figma.createText();
  t.characters = text;
  t.fontSize = size || 14;
  t.fontName = { family: "Inter", style: bold ? "Bold" : "Regular" };
  return t;
}

async function loadFonts() {
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  await figma.loadFontAsync({ family: "Inter", style: "Bold" });
  await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
}

function setFill(node, hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  node.fills = [{ type: "SOLID", color: { r, g, b } }];
}

function setStroke(node, hex, weight) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  node.strokes = [{ type: "SOLID", color: { r, g, b } }];
  node.strokeWeight = weight || 2;
}

async function genericBuilder(id) {
  await loadFonts();
  const f = figma.createFrame();
  f.name = "Component: " + id;
  f.resize(300, 100);
  setFill(f, "#F8FAFC");
  setStroke(f, "#CBD5E1", 2);
  f.strokeDashes = [6, 4];
  f.cornerRadius = 8;
  f.layoutMode = "VERTICAL";
  f.primaryAxisAlignItems = "CENTER";
  f.counterAxisAlignItems = "CENTER";
  const t = figma.createText();
  t.characters = id.toUpperCase();
  t.fontSize = 12;
  t.fontName = { family: "Inter", style: "Bold" };
  t.fills = [{ type: "SOLID", color: { r: 0.58, g: 0.64, b: 0.68 } }];
  f.appendChild(t);
  return f;
}

// ─── COMPONENT BUILDERS ────────────────────────────────────
const BUILDERS = {

  // PRIMITIVES
  "prim-rectangle": async () => {
    const r = figma.createRectangle();
    r.name = "Rectangle";
    r.resize(200, 120);
    setFill(r, "#FFFFFF");
    setStroke(r, "#0F172A", 2);
    return r;
  },

  "prim-circle": async () => {
    const e = figma.createEllipse();
    e.name = "Circle";
    e.resize(120, 120);
    setFill(e, "#FFFFFF");
    setStroke(e, "#0F172A", 2);
    return e;
  },

  "prim-text": async () => {
    await loadFonts();
    const t = figma.createText();
    t.name = "Text Block";
    t.characters = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    t.fontSize = 14;
    t.fontName = { family: "Inter", style: "Regular" };
    t.resize(300, 60);
    t.textAutoResize = "HEIGHT";
    return t;
  },

  "prim-heading": async () => {
    await loadFonts();
    const t = figma.createText();
    t.name = "Heading";
    t.characters = "Page Heading";
    t.fontSize = 28;
    t.fontName = { family: "Inter", style: "Bold" };
    t.textAutoResize = "WIDTH_AND_HEIGHT";
    return t;
  },

  "prim-line": async () => {
    const l = figma.createLine();
    l.name = "Divider";
    l.resize(400, 0);
    setStroke(l, "#CBD5E1", 1);
    return l;
  },

  "prim-image": async () => {
    await loadFonts();
    const f = figma.createFrame();
    f.name = "Image Placeholder";
    f.resize(320, 200);
    setFill(f, "#F8FAFC");
    setStroke(f, "#94A3B8", 2);
    f.strokeDashes = [6, 4];
    f.layoutMode = "VERTICAL";
    f.primaryAxisAlignItems = "CENTER";
    f.counterAxisAlignItems = "CENTER";
    f.itemSpacing = 8;
    const icon = figma.createRectangle();
    icon.name = "icon";
    icon.resize(40, 40);
    setFill(icon, "#E2E8F0");
    icon.cornerRadius = 4;
    f.appendChild(icon);
    const label = figma.createText();
    label.characters = "IMAGE";
    label.fontSize = 10;
    label.fontName = { family: "Inter", style: "Bold" };
    label.fills = [{ type: "SOLID", color: { r: 0.58, g: 0.64, b: 0.68 } }];
    f.appendChild(label);
    return f;
  },

  "prim-button": async () => {
    await loadFonts();
    const f = figma.createFrame();
    f.name = "Button";
    f.layoutMode = "HORIZONTAL";
    f.primaryAxisAlignItems = "CENTER";
    f.counterAxisAlignItems = "CENTER";
    f.paddingLeft = 24; f.paddingRight = 24;
    f.paddingTop = 12; f.paddingBottom = 12;
    setFill(f, "#FFFFFF");
    setStroke(f, "#0F172A", 2);
    f.cornerRadius = 0;
    f.primaryAxisSizingMode = "AUTO";
    f.counterAxisSizingMode = "AUTO";
    const t = figma.createText();
    t.characters = "Button Label";
    t.fontSize = 14;
    t.fontName = { family: "Inter", style: "Bold" };
    f.appendChild(t);
    return f;
  },

  "prim-input": async () => {
    await loadFonts();
    const f = figma.createFrame();
    f.name = "Input Box";
    f.resize(300, 40);
    f.paddingLeft = 12; f.paddingRight = 12;
    f.paddingTop = 8; f.paddingBottom = 8;
    setFill(f, "#FFFFFF");
    setStroke(f, "#0F172A", 2);
    const ph = figma.createText();
    ph.characters = "Input text...";
    ph.fontSize = 13;
    ph.fontName = { family: "Inter", style: "Regular" };
    ph.fills = [{ type: "SOLID", color: { r: 0.58, g: 0.64, b: 0.68 } }];
    f.appendChild(ph);
    return f;
  },

  "prim-video": async () => {
    const f = figma.createFrame();
    f.name = "Video Player";
    f.resize(400, 225);
    setFill(f, "#0F172A");
    f.cornerRadius = 8;
    return f;
  },

  "prim-container": async () => {
    const f = figma.createFrame();
    f.name = "Container";
    f.resize(400, 300);
    setFill(f, "#FFFFFF");
    setStroke(f, "#94A3B8", 2);
    f.strokeDashes = [6, 4];
    f.layoutMode = "VERTICAL";
    f.paddingLeft = 16; f.paddingRight = 16;
    f.paddingTop = 16; f.paddingBottom = 16;
    f.itemSpacing = 12;
    return f;
  },

  // BUTTONS
  "button": async () => {
    await loadFonts();
    const f = figma.createFrame();
    f.name = "Button";
    f.layoutMode = "HORIZONTAL";
    f.primaryAxisAlignItems = "CENTER";
    f.counterAxisAlignItems = "CENTER";
    f.paddingLeft = 24; f.paddingRight = 24;
    f.paddingTop = 12; f.paddingBottom = 12;
    setFill(f, "#FFFFFF");
    setStroke(f, "#0F172A", 2);
    f.cornerRadius = 0;
    f.primaryAxisSizingMode = "AUTO";
    f.counterAxisSizingMode = "AUTO";
    const t = figma.createText();
    t.characters = "Button Label";
    t.fontSize = 14;
    t.fontName = { family: "Inter", style: "Bold" };
    f.appendChild(t);
    return f;
  },

  "button-filled": async () => {
    await loadFonts();
    const f = figma.createFrame();
    f.name = "Button Filled";
    f.layoutMode = "HORIZONTAL";
    f.primaryAxisAlignItems = "CENTER";
    f.counterAxisAlignItems = "CENTER";
    f.paddingLeft = 24; f.paddingRight = 24;
    f.paddingTop = 12; f.paddingBottom = 12;
    setFill(f, "#0F172A");
    f.cornerRadius = 4;
    f.primaryAxisSizingMode = "AUTO";
    f.counterAxisSizingMode = "AUTO";
    const t = figma.createText();
    t.characters = "Submit";
    t.fontSize = 14;
    t.fontName = { family: "Inter", style: "Bold" };
    t.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
    f.appendChild(t);
    return f;
  },

  // FORMS
  "input": async () => {
    await loadFonts();
    const f = figma.createFrame();
    f.name = "Input Field";
    f.layoutMode = "VERTICAL";
    f.itemSpacing = 6;
    f.primaryAxisSizingMode = "AUTO";
    f.counterAxisSizingMode = "FIXED";
    f.resize(300, 1);
    f.fills = [];
    const label = figma.createText();
    label.characters = "Label";
    label.fontSize = 12;
    label.fontName = { family: "Inter", style: "Bold" };
    f.appendChild(label);
    const box = figma.createFrame();
    box.name = "input-box";
    box.layoutMode = "HORIZONTAL";
    box.counterAxisAlignItems = "CENTER";
    box.resize(300, 40);
    box.paddingLeft = 12; box.paddingRight = 12;
    box.paddingTop = 8; box.paddingBottom = 8;
    setFill(box, "#FFFFFF");
    setStroke(box, "#0F172A", 2);
    box.layoutAlign = "STRETCH";
    const ph = figma.createText();
    ph.characters = "Placeholder...";
    ph.fontSize = 13;
    ph.fontName = { family: "Inter", style: "Regular" };
    ph.fills = [{ type: "SOLID", color: { r: 0.58, g: 0.64, b: 0.68 } }];
    box.appendChild(ph);
    f.appendChild(box);
    return f;
  },

  "textarea": async () => {
    await loadFonts();
    const f = figma.createFrame();
    f.name = "Textarea";
    f.layoutMode = "VERTICAL";
    f.itemSpacing = 6;
    f.primaryAxisSizingMode = "AUTO";
    f.counterAxisSizingMode = "FIXED";
    f.resize(300, 1);
    f.fills = [];
    const label = figma.createText();
    label.characters = "Label";
    label.fontSize = 12;
    label.fontName = { family: "Inter", style: "Bold" };
    f.appendChild(label);
    const box = figma.createFrame();
    box.name = "textarea-box";
    box.resize(300, 100);
    box.paddingLeft = 12; box.paddingRight = 12;
    box.paddingTop = 8; box.paddingBottom = 8;
    setFill(box, "#FFFFFF");
    setStroke(box, "#0F172A", 2);
    box.layoutAlign = "STRETCH";
    f.appendChild(box);
    return f;
  },

  "checkbox": async () => {
    await loadFonts();
    const f = figma.createFrame();
    f.name = "Checkbox";
    f.layoutMode = "HORIZONTAL";
    f.itemSpacing = 8;
    f.counterAxisAlignItems = "CENTER";
    f.primaryAxisSizingMode = "AUTO";
    f.counterAxisSizingMode = "AUTO";
    f.fills = [];
    const box = figma.createRectangle();
    box.name = "check-box";
    box.resize(18, 18);
    setFill(box, "#FFFFFF");
    setStroke(box, "#0F172A", 2);
    box.cornerRadius = 3;
    f.appendChild(box);
    const label = figma.createText();
    label.characters = "Checkbox label";
    label.fontSize = 13;
    label.fontName = { family: "Inter", style: "Regular" };
    f.appendChild(label);
    return f;
  },

  "select": async () => {
    await loadFonts();
    const f = figma.createFrame();
    f.name = "Select Dropdown";
    f.layoutMode = "HORIZONTAL";
    f.counterAxisAlignItems = "CENTER";
    f.resize(300, 42);
    f.paddingLeft = 12; f.paddingRight = 12;
    setFill(f, "#FFFFFF");
    setStroke(f, "#0F172A", 2);
    const ph = figma.createText();
    ph.characters = "Select an option...";
    ph.fontSize = 13;
    ph.fontName = { family: "Inter", style: "Regular" };
    ph.fills = [{ type: "SOLID", color: { r: 0.58, g: 0.64, b: 0.68 } }];
    ph.layoutGrow = 1;
    f.appendChild(ph);
    const arrow = figma.createText();
    arrow.characters = "▼";
    arrow.fontSize = 10;
    arrow.fontName = { family: "Inter", style: "Regular" };
    f.appendChild(arrow);
    return f;
  },

  "switch": async () => {
    await loadFonts();
    const f = figma.createFrame();
    f.name = "Toggle Switch";
    f.layoutMode = "HORIZONTAL";
    f.itemSpacing = 10;
    f.counterAxisAlignItems = "CENTER";
    f.primaryAxisSizingMode = "AUTO";
    f.counterAxisSizingMode = "AUTO";
    f.fills = [];
    const track = figma.createRectangle();
    track.name = "track";
    track.resize(40, 22);
    setFill(track, "#CBD5E1");
    track.cornerRadius = 11;
    f.appendChild(track);
    const label = figma.createText();
    label.characters = "Toggle label";
    label.fontSize = 13;
    label.fontName = { family: "Inter", style: "Regular" };
    f.appendChild(label);
    return f;
  },

  // LAYOUT
  "container": async () => {
    const f = figma.createFrame();
    f.name = "Container";
    f.resize(400, 300);
    setFill(f, "#FFFFFF");
    setStroke(f, "#94A3B8", 2);
    f.strokeDashes = [6, 4];
    f.layoutMode = "VERTICAL";
    f.paddingLeft = 16; f.paddingRight = 16;
    f.paddingTop = 16; f.paddingBottom = 16;
    f.itemSpacing = 12;
    return f;
  },

  "card": async () => {
    await loadFonts();
    const f = figma.createFrame();
    f.name = "Card";
    f.resize(320, 1);
    f.layoutMode = "VERTICAL";
    f.primaryAxisSizingMode = "AUTO";
    f.itemSpacing = 0;
    setFill(f, "#FFFFFF");
    setStroke(f, "#E2E8F0", 1);
    f.cornerRadius = 8;
    // Image area
    const img = figma.createFrame();
    img.name = "card-image";
    img.resize(320, 160);
    img.layoutAlign = "STRETCH";
    setFill(img, "#F1F5F9");
    img.layoutMode = "VERTICAL";
    img.primaryAxisAlignItems = "CENTER";
    img.counterAxisAlignItems = "CENTER";
    const imgLabel = figma.createText();
    imgLabel.characters = "IMAGE";
    imgLabel.fontSize = 11;
    imgLabel.fontName = { family: "Inter", style: "Bold" };
    imgLabel.fills = [{ type: "SOLID", color: { r: 0.58, g: 0.64, b: 0.68 } }];
    img.appendChild(imgLabel);
    f.appendChild(img);
    // Content
    const body = figma.createFrame();
    body.name = "card-body";
    body.layoutMode = "VERTICAL";
    body.itemSpacing = 6;
    body.paddingLeft = 16; body.paddingRight = 16;
    body.paddingTop = 16; body.paddingBottom = 16;
    body.layoutAlign = "STRETCH";
    body.primaryAxisSizingMode = "AUTO";
    body.fills = [];
    const title = figma.createText();
    title.characters = "Card Title";
    title.fontSize = 16;
    title.fontName = { family: "Inter", style: "Bold" };
    body.appendChild(title);
    const desc = figma.createText();
    desc.characters = "Short description text goes here.";
    desc.fontSize = 13;
    desc.fontName = { family: "Inter", style: "Regular" };
    desc.fills = [{ type: "SOLID", color: { r: 0.4, g: 0.45, b: 0.5 } }];
    body.appendChild(desc);
    f.appendChild(body);
    return f;
  },

  // NAVIGATION
  "navbar": async () => {
    await loadFonts();
    const f = figma.createFrame();
    f.name = "Navbar";
    f.resize(1200, 56);
    f.layoutMode = "HORIZONTAL";
    f.counterAxisAlignItems = "CENTER";
    f.paddingLeft = 24; f.paddingRight = 24;
    f.itemSpacing = 32;
    setFill(f, "#FFFFFF");
    setStroke(f, "#E2E8F0", 1);
    const logo = figma.createText();
    logo.characters = "Logo";
    logo.fontSize = 16;
    logo.fontName = { family: "Inter", style: "Bold" };
    f.appendChild(logo);
    ["Home", "About", "Services", "Contact"].forEach(item => {
      const t = figma.createText();
      t.characters = item;
      t.fontSize = 14;
      t.fontName = { family: "Inter", style: "Regular" };
      t.fills = [{ type: "SOLID", color: { r: 0.4, g: 0.45, b: 0.5 } }];
      f.appendChild(t);
    });
    return f;
  },

  "sidebar": async () => {
    await loadFonts();
    const f = figma.createFrame();
    f.name = "Sidebar";
    f.resize(240, 600);
    f.layoutMode = "VERTICAL";
    f.paddingTop = 24; f.paddingBottom = 24;
    f.itemSpacing = 4;
    setFill(f, "#F8FAFC");
    setStroke(f, "#E2E8F0", 1);
    ["Dashboard", "Users", "Projects", "Settings", "Reports"].forEach(item => {
      const row = figma.createFrame();
      row.name = "menu-item";
      row.layoutMode = "HORIZONTAL";
      row.counterAxisAlignItems = "CENTER";
      row.resize(240, 40);
      row.paddingLeft = 20; row.paddingRight = 20;
      row.layoutAlign = "STRETCH";
      row.fills = [];
      const t = figma.createText();
      t.characters = item;
      t.fontSize = 13;
      t.fontName = { family: "Inter", style: "Regular" };
      row.appendChild(t);
      f.appendChild(row);
    });
    return f;
  },

  "breadcrumb": async () => {
    await loadFonts();
    const f = figma.createFrame();
    f.name = "Breadcrumb";
    f.layoutMode = "HORIZONTAL";
    f.itemSpacing = 8;
    f.counterAxisAlignItems = "CENTER";
    f.primaryAxisSizingMode = "AUTO";
    f.counterAxisSizingMode = "AUTO";
    f.fills = [];
    ["Home", "›", "Products", "›", "Category"].forEach(item => {
      const t = figma.createText();
      t.characters = item;
      t.fontSize = 13;
      t.fontName = { family: "Inter", style: item === "›" ? "Regular" : "Regular" };
      t.fills = [{ type: "SOLID", color: item === "Category" ? { r: 0.06, g: 0.09, b: 0.16 } : { r: 0.58, g: 0.64, b: 0.68 } }];
      f.appendChild(t);
    });
    return f;
  },

  "tabs": async () => {
    await loadFonts();
    const f = figma.createFrame();
    f.name = "Tabs";
    f.layoutMode = "HORIZONTAL";
    f.itemSpacing = 0;
    f.counterAxisAlignItems = "CENTER";
    f.primaryAxisSizingMode = "AUTO";
    f.counterAxisSizingMode = "AUTO";
    f.fills = [];
    ["Tab 1", "Tab 2", "Tab 3"].forEach((item, i) => {
      const tab = figma.createFrame();
      tab.name = item;
      tab.layoutMode = "HORIZONTAL";
      tab.primaryAxisAlignItems = "CENTER";
      tab.counterAxisAlignItems = "CENTER";
      tab.paddingLeft = 20; tab.paddingRight = 20;
      tab.paddingTop = 12; tab.paddingBottom = 12;
      tab.fills = [];
      if (i === 0) {
        tab.strokes = [{ type: "SOLID", color: { r: 0.06, g: 0.09, b: 0.16 } }];
        tab.strokeWeight = 2;
        tab.strokeAlign = "INSIDE";
      }
      const t = figma.createText();
      t.characters = item;
      t.fontSize = 13;
      t.fontName = { family: "Inter", style: i === 0 ? "Bold" : "Regular" };
      t.fills = [{ type: "SOLID", color: i === 0 ? { r: 0.06, g: 0.09, b: 0.16 } : { r: 0.58, g: 0.64, b: 0.68 } }];
      tab.appendChild(t);
      f.appendChild(tab);
    });
    return f;
  },

  // DATA
  "table": async () => {
    await loadFonts();
    const f = figma.createFrame();
    f.name = "Table";
    f.layoutMode = "VERTICAL";
    f.primaryAxisSizingMode = "AUTO";
    f.resize(600, 1);
    setFill(f, "#FFFFFF");
    setStroke(f, "#0F172A", 2);
    f.itemSpacing = 0;
    const cols = ["Name", "Email", "Role", "Status"];
    // Header
    const hRow = figma.createFrame();
    hRow.name = "header-row";
    hRow.layoutMode = "HORIZONTAL";
    hRow.counterAxisAlignItems = "CENTER";
    hRow.resize(600, 40);
    hRow.layoutAlign = "STRETCH";
    setFill(hRow, "#F8FAFC");
    hRow.strokes = [{ type: "SOLID", color: { r: 0.89, g: 0.91, b: 0.94 } }];
    hRow.strokeWeight = 1;
    hRow.strokeAlign = "INSIDE";
    cols.forEach(c => {
      const t = figma.createText();
      t.characters = c;
      t.fontSize = 12;
      t.fontName = { family: "Inter", style: "Bold" };
      t.resize(150, 20);
      t.textAlignHorizontal = "LEFT";
      hRow.appendChild(t);
    });
    f.appendChild(hRow);
    // Rows
    for (let r = 0; r < 3; r++) {
      const row = figma.createFrame();
      row.name = `row-${r}`;
      row.layoutMode = "HORIZONTAL";
      row.counterAxisAlignItems = "CENTER";
      row.resize(600, 40);
      row.layoutAlign = "STRETCH";
      row.fills = [];
      row.strokes = [{ type: "SOLID", color: { r: 0.89, g: 0.91, b: 0.94 } }];
      row.strokeWeight = 1;
      row.strokeAlign = "INSIDE";
      cols.forEach(c => {
        const t = figma.createText();
        t.characters = "Cell";
        t.fontSize = 12;
        t.fontName = { family: "Inter", style: "Regular" };
        t.fills = [{ type: "SOLID", color: { r: 0.4, g: 0.45, b: 0.5 } }];
        t.resize(150, 20);
        row.appendChild(t);
      });
      f.appendChild(row);
    }
    return f;
  },

  // SECTIONS
  "hero": async () => {
    await loadFonts();
    const f = figma.createFrame();
    f.name = "Hero Section";
    f.resize(1200, 400);
    f.layoutMode = "VERTICAL";
    f.primaryAxisAlignItems = "CENTER";
    f.counterAxisAlignItems = "CENTER";
    f.itemSpacing = 16;
    setFill(f, "#F8FAFC");
    const h1 = figma.createText();
    h1.characters = "Hero Headline";
    h1.fontSize = 40;
    h1.fontName = { family: "Inter", style: "Bold" };
    f.appendChild(h1);
    const sub = figma.createText();
    sub.characters = "Short description text goes here. Explain the value proposition.";
    sub.fontSize = 16;
    sub.fontName = { family: "Inter", style: "Regular" };
    sub.fills = [{ type: "SOLID", color: { r: 0.4, g: 0.45, b: 0.5 } }];
    f.appendChild(sub);
    // CTA
    const btn = figma.createFrame();
    btn.name = "CTA Button";
    btn.layoutMode = "HORIZONTAL";
    btn.primaryAxisAlignItems = "CENTER";
    btn.counterAxisAlignItems = "CENTER";
    btn.paddingLeft = 32; btn.paddingRight = 32;
    btn.paddingTop = 14; btn.paddingBottom = 14;
    setFill(btn, "#0F172A");
    btn.cornerRadius = 6;
    btn.primaryAxisSizingMode = "AUTO";
    btn.counterAxisSizingMode = "AUTO";
    const btnT = figma.createText();
    btnT.characters = "Get Started";
    btnT.fontSize = 16;
    btnT.fontName = { family: "Inter", style: "Bold" };
    btnT.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
    btn.appendChild(btnT);
    f.appendChild(btn);
    return f;
  },

  "footer": async () => {
    await loadFonts();
    const f = figma.createFrame();
    f.name = "Footer";
    f.resize(1200, 80);
    f.layoutMode = "HORIZONTAL";
    f.counterAxisAlignItems = "CENTER";
    f.paddingLeft = 24; f.paddingRight = 24;
    f.itemSpacing = 24;
    setFill(f, "#1E293B");
    const copy = figma.createText();
    copy.characters = "© 2026 Company Name";
    copy.fontSize = 12;
    copy.fontName = { family: "Inter", style: "Regular" };
    copy.fills = [{ type: "SOLID", color: { r: 0.58, g: 0.64, b: 0.68 } }];
    copy.layoutGrow = 1;
    f.appendChild(copy);
    ["Privacy", "Terms", "Contact"].forEach(item => {
      const t = figma.createText();
      t.characters = item;
      t.fontSize = 12;
      t.fontName = { family: "Inter", style: "Regular" };
      t.fills = [{ type: "SOLID", color: { r: 0.58, g: 0.64, b: 0.68 } }];
      f.appendChild(t);
    });
    return f;
  },

  // OVERLAYS
  "modal": async () => {
    await loadFonts();
    const f = figma.createFrame();
    f.name = "Modal";
    f.resize(480, 1);
    f.layoutMode = "VERTICAL";
    f.primaryAxisSizingMode = "AUTO";
    f.itemSpacing = 16;
    f.paddingLeft = 24; f.paddingRight = 24;
    f.paddingTop = 24; f.paddingBottom = 24;
    setFill(f, "#FFFFFF");
    f.cornerRadius = 12;
    f.effects = [{ type: "DROP_SHADOW", color: { r: 0, g: 0, b: 0, a: 0.15 }, offset: { x: 0, y: 8 }, radius: 32, visible: true, blendMode: "NORMAL", spread: 0 }];
    const title = figma.createText();
    title.characters = "Modal Title";
    title.fontSize = 18;
    title.fontName = { family: "Inter", style: "Bold" };
    f.appendChild(title);
    const body = figma.createText();
    body.characters = "Modal content goes here. You can add forms, confirmations, or any content.";
    body.fontSize = 14;
    body.fontName = { family: "Inter", style: "Regular" };
    body.fills = [{ type: "SOLID", color: { r: 0.4, g: 0.45, b: 0.5 } }];
    body.resize(432, 1);
    body.textAutoResize = "HEIGHT";
    f.appendChild(body);
    // Buttons row
    const btns = figma.createFrame();
    btns.name = "actions";
    btns.layoutMode = "HORIZONTAL";
    btns.itemSpacing = 12;
    btns.primaryAxisAlignItems = "MAX";
    btns.counterAxisAlignItems = "CENTER";
    btns.primaryAxisSizingMode = "AUTO";
    btns.counterAxisSizingMode = "AUTO";
    btns.fills = [];
    const cancelBtn = figma.createFrame();
    cancelBtn.name = "Cancel";
    cancelBtn.layoutMode = "HORIZONTAL";
    cancelBtn.primaryAxisAlignItems = "CENTER"; cancelBtn.counterAxisAlignItems = "CENTER";
    cancelBtn.paddingLeft = 20; cancelBtn.paddingRight = 20;
    cancelBtn.paddingTop = 10; cancelBtn.paddingBottom = 10;
    setFill(cancelBtn, "#FFFFFF");
    setStroke(cancelBtn, "#CBD5E1", 1);
    cancelBtn.cornerRadius = 6;
    cancelBtn.primaryAxisSizingMode = "AUTO"; cancelBtn.counterAxisSizingMode = "AUTO";
    const ct = figma.createText(); ct.characters = "Cancel"; ct.fontSize = 13; ct.fontName = { family: "Inter", style: "Semi Bold" };
    cancelBtn.appendChild(ct);
    btns.appendChild(cancelBtn);
    const confirmBtn = figma.createFrame();
    confirmBtn.name = "Confirm";
    confirmBtn.layoutMode = "HORIZONTAL";
    confirmBtn.primaryAxisAlignItems = "CENTER"; confirmBtn.counterAxisAlignItems = "CENTER";
    confirmBtn.paddingLeft = 20; confirmBtn.paddingRight = 20;
    confirmBtn.paddingTop = 10; confirmBtn.paddingBottom = 10;
    setFill(confirmBtn, "#0F172A");
    confirmBtn.cornerRadius = 6;
    confirmBtn.primaryAxisSizingMode = "AUTO"; confirmBtn.counterAxisSizingMode = "AUTO";
    const cft = figma.createText(); cft.characters = "Confirm"; cft.fontSize = 13; cft.fontName = { family: "Inter", style: "Semi Bold" };
    cft.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
    confirmBtn.appendChild(cft);
    btns.appendChild(confirmBtn);
    f.appendChild(btns);
    return f;
  },

  "avatar": async () => {
    const e = figma.createEllipse();
    e.name = "Avatar";
    e.resize(48, 48);
    setFill(e, "#E2E8F0");
    setStroke(e, "#CBD5E1", 1);
    return e;
  },

  "badge": async () => {
    await loadFonts();
    const f = figma.createFrame();
    f.name = "Badge";
    f.layoutMode = "HORIZONTAL";
    f.primaryAxisAlignItems = "CENTER";
    f.counterAxisAlignItems = "CENTER";
    f.paddingLeft = 10; f.paddingRight = 10;
    f.paddingTop = 4; f.paddingBottom = 4;
    setFill(f, "#EEF2FF");
    f.cornerRadius = 12;
    f.primaryAxisSizingMode = "AUTO";
    f.counterAxisSizingMode = "AUTO";
    const t = figma.createText();
    t.characters = "Badge";
    t.fontSize = 11;
    t.fontName = { family: "Inter", style: "Bold" };
    t.fills = [{ type: "SOLID", color: { r: 0.31, g: 0.27, b: 0.9 } }];
    f.appendChild(t);
    return f;
  },

  "accordion": async () => {
    await loadFonts();
    const f = figma.createFrame();
    f.name = "Accordion Item";
    f.resize(400, 1);
    f.layoutMode = "VERTICAL";
    f.primaryAxisSizingMode = "AUTO";
    setFill(f, "#FFFFFF");
    setStroke(f, "#E2E8F0", 1);
    const header = figma.createFrame();
    header.name = "header";
    header.layoutMode = "HORIZONTAL";
    header.counterAxisAlignItems = "CENTER";
    header.paddingLeft = 16; header.paddingRight = 16;
    header.paddingTop = 16; header.paddingBottom = 16;
    header.layoutAlign = "STRETCH";
    header.fills = [];
    const t = figma.createText();
    t.characters = "Accordion Title";
    t.fontSize = 14;
    t.fontName = { family: "Inter", style: "Semi Bold" };
    t.layoutGrow = 1;
    header.appendChild(t);
    const icon = figma.createText();
    icon.characters = "▼";
    icon.fontSize = 10;
    header.appendChild(icon);
    f.appendChild(header);
    return f;
  },

  "alert": async () => {
    await loadFonts();
    const f = figma.createFrame();
    f.name = "Alert";
    f.resize(400, 1);
    f.layoutMode = "HORIZONTAL";
    f.counterAxisAlignItems = "CENTER";
    f.paddingLeft = 16; f.paddingRight = 16;
    f.paddingTop = 14; f.paddingBottom = 14;
    f.itemSpacing = 12;
    setFill(f, "#FEF2F2");
    setStroke(f, "#FEE2E2", 1);
    f.cornerRadius = 6;
    const t = figma.createText();
    t.characters = "Warning: Something went wrong.";
    t.fontSize = 13;
    t.fontName = { family: "Inter", style: "Regular" };
    t.fills = [{ type: "SOLID", color: { r: 0.6, g: 0.1, b: 0.1 } }];
    f.appendChild(t);
    return f;
  },

  "progress": async () => {
    const f = figma.createFrame();
    f.name = "Progress Bar";
    f.resize(300, 8);
    setFill(f, "#E2E8F0");
    f.cornerRadius = 4;
    const bar = figma.createRectangle();
    bar.name = "fill";
    bar.resize(180, 8);
    setFill(bar, "#0F172A");
    bar.cornerRadius = 4;
    f.appendChild(bar);
    return f;
  },

  "skeleton": async () => {
    const r = figma.createRectangle();
    r.name = "Skeleton Loader";
    r.resize(200, 16);
    setFill(r, "#F1F5F9");
    r.cornerRadius = 4;
    return r;
  },

  "search": async () => {
    await loadFonts();
    const f = figma.createFrame();
    f.name = "Search Bar";
    f.resize(400, 40);
    f.layoutMode = "HORIZONTAL";
    f.counterAxisAlignItems = "CENTER";
    f.paddingLeft = 12; f.paddingRight = 12;
    f.itemSpacing = 8;
    setFill(f, "#FFFFFF");
    setStroke(f, "#E2E8F0", 1);
    f.cornerRadius = 20;
    const icon = figma.createRectangle();
    icon.resize(16, 16);
    setFill(icon, "#94A3B8");
    f.appendChild(icon);
    const ph = figma.createText();
    ph.characters = "Search everything...";
    ph.fontSize = 13;
    ph.fontName = { family: "Inter", style: "Regular" };
    ph.fills = [{ type: "SOLID", color: { r: 0.58, g: 0.64, b: 0.68 } }];
    f.appendChild(ph);
    return f;
  },

  "pagination": async () => {
    await loadFonts();
    const f = figma.createFrame();
    f.name = "Pagination";
    f.layoutMode = "HORIZONTAL";
    f.itemSpacing = 4;
    f.primaryAxisSizingMode = "AUTO";
    f.counterAxisSizingMode = "AUTO";
    f.fills = [];
    ["Prev", "1", "2", "3", "...", "Next"].forEach(item => {
      const b = figma.createFrame();
      b.layoutMode = "HORIZONTAL";
      b.primaryAxisAlignItems = "CENTER"; b.counterAxisAlignItems = "CENTER";
      b.resize(32, 32);
      if(item === "2") setFill(b, "#0F172A"); else setFill(b, "#FFFFFF");
      setStroke(b, "#E2E8F0", 1);
      b.cornerRadius = 4;
      const t = figma.createText();
      t.characters = item;
      t.fontSize = 12;
      t.fontName = { family: "Inter", style: item === "2" ? "Bold" : "Regular" };
      if(item === "2") t.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
      b.appendChild(t);
      f.appendChild(b);
    });
    return f;
  },

  "charts": async () => {
    const f = figma.createFrame();
    f.name = "Chart Placeholder";
    f.resize(400, 240);
    setFill(f, "#F8FAFC");
    setStroke(f, "#CBD5E1", 1);
    f.layoutMode = "HORIZONTAL";
    f.primaryAxisAlignItems = "CENTER";
    f.counterAxisAlignItems = "MAX";
    f.itemSpacing = 12;
    f.paddingBottom = 20;
    [100, 160, 120, 180, 140, 200, 150].forEach(h => {
       const bar = figma.createRectangle();
       bar.resize(24, h);
       setFill(bar, "#E2E8F0");
       bar.cornerRadius = 4;
       f.appendChild(bar);
    });
    return f;
  },

  "chat-bubble": async () => {
    await loadFonts();
    const f = figma.createFrame();
    f.name = "Chat Bubble";
    f.layoutMode = "VERTICAL";
    f.paddingLeft = 14; f.paddingRight = 14;
    f.paddingTop = 10; f.paddingBottom = 10;
    setFill(f, "#0F172A");
    f.cornerRadius = 16;
    f.primaryAxisSizingMode = "AUTO";
    f.counterAxisSizingMode = "AUTO";
    f.resize(240, 1);
    const t = figma.createText();
    t.characters = "Hey! How is the wireframing going? Let me know if you need help.";
    t.fontSize = 13;
    t.fontName = { family: "Inter", style: "Regular" };
    t.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
    t.layoutAlign = "STRETCH";
    f.appendChild(t);
    return f;
  },

  "timeline": async () => {
    await loadFonts();
    const f = figma.createFrame();
    f.name = "Timeline";
    f.layoutMode = "VERTICAL";
    f.itemSpacing = 0;
    f.fills = [];
    f.resize(300, 1);
    [1, 2, 3].forEach(i => {
      const item = figma.createFrame();
      item.layoutMode = "HORIZONTAL";
      item.itemSpacing = 16;
      item.fills = [];
      item.layoutAlign = "STRETCH";
      const lineCol = figma.createFrame();
      lineCol.resize(12, 60);
      lineCol.fills = [];
      const dot = figma.createEllipse();
      dot.resize(10, 10);
      setFill(dot, "#0F172A");
      lineCol.appendChild(dot);
      if(i < 3) {
        const line = figma.createRectangle();
        line.resize(2, 50);
        line.x = 4; line.y = 10;
        setFill(line, "#E2E8F0");
        lineCol.appendChild(line);
      }
      item.appendChild(lineCol);
      const text = figma.createText();
      text.characters = "Event " + i + "\nDescription of the event.";
      text.fontSize = 13;
      text.fontName = { family: "Inter", style: "Regular" };
      item.appendChild(text);
      f.appendChild(item);
    });
    return f;
  },

  "stat-card": async () => {
    await loadFonts();
    const f = figma.createFrame();
    f.name = "Stat Card";
    f.resize(200, 1);
    f.layoutMode = "VERTICAL";
    f.primaryAxisSizingMode = "AUTO";
    f.itemSpacing = 4;
    f.paddingLeft = 20; f.paddingRight = 20;
    f.paddingTop = 20; f.paddingBottom = 20;
    setFill(f, "#FFFFFF");
    setStroke(f, "#E2E8F0", 1);
    f.cornerRadius = 12;
    const label = figma.createText();
    label.characters = "TOTAL USERS";
    label.fontSize = 10;
    label.fontName = { family: "Inter", style: "Bold" };
    label.fills = [{ type: "SOLID", color: { r: 0.4, g: 0.45, b: 0.5 } }];
    f.appendChild(label);
    const valGroup = figma.createFrame();
    valGroup.layoutMode = "HORIZONTAL";
    valGroup.counterAxisAlignItems = "BASELINE";
    valGroup.itemSpacing = 8;
    valGroup.fills = [];
    const val = figma.createText();
    val.characters = "24,492";
    val.fontSize = 24;
    val.fontName = { family: "Inter", style: "Bold" };
    valGroup.appendChild(val);
    const trend = figma.createText();
    trend.characters = "+12% ↑";
    trend.fontSize = 12;
    trend.fontName = { family: "Inter", style: "Bold" };
    trend.fills = [{ type: "SOLID", color: { r: 0.06, g: 0.73, b: 0.51 } }];
    valGroup.appendChild(trend);
    f.appendChild(valGroup);
    return f;
  },

  "empty-state": async () => {
    await loadFonts();
    const f = figma.createFrame();
    f.name = "Empty State";
    f.resize(400, 1);
    f.layoutMode = "VERTICAL";
    f.primaryAxisAlignItems = "CENTER";
    f.counterAxisAlignItems = "CENTER";
    f.itemSpacing = 16;
    f.paddingLeft = 40; f.paddingRight = 40;
    f.paddingTop = 60; f.paddingBottom = 60;
    setFill(f, "#F8FAFC");
    setStroke(f, "#E2E8F0", 2);
    f.strokeDashes = [6, 4];
    f.cornerRadius = 16;
    const icon = figma.createEllipse();
    icon.resize(64, 64);
    setFill(icon, "#F1F5F9");
    f.appendChild(icon);
    const title = figma.createText();
    title.characters = "No items found";
    title.fontSize = 18;
    title.fontName = { family: "Inter", style: "Bold" };
    f.appendChild(title);
    const desc = figma.createText();
    desc.characters = "Get started by creating your first project in the settings panel.";
    desc.fontSize = 14;
    desc.textAlignHorizontal = "CENTER";
    desc.resize(300, 1);
    desc.textAutoResize = "HEIGHT";
    desc.fills = [{ type: "SOLID", color: { r: 0.4, g: 0.45, b: 0.5 } }];
    f.appendChild(desc);
    return f;
  },

  "steps": async () => {
    await loadFonts();
    const f = figma.createFrame();
    f.name = "Steps";
    f.layoutMode = "HORIZONTAL";
    f.itemSpacing = 24;
    f.fills = [];
    [1, 2, 3].forEach(i => {
      const step = figma.createFrame();
      step.layoutMode = "HORIZONTAL";
      step.counterAxisAlignItems = "CENTER";
      step.itemSpacing = 8;
      step.fills = [];
      const circle = figma.createEllipse();
      circle.resize(24, 24);
      if(i === 1) setFill(circle, "#0F172A"); else { setFill(circle, "#FFFFFF"); setStroke(circle, "#CBD5E1", 1); }
      step.appendChild(circle);
      const t = figma.createText();
      t.characters = "Step " + i;
      t.fontSize = 13;
      t.fontName = { family: "Inter", style: i === 1 ? "Bold" : "Regular" };
      step.appendChild(t);
      f.appendChild(step);
      if(i < 3) {
        const line = figma.createLine();
        line.resize(40, 0);
        setStroke(line, "#E2E8F0", 1);
        f.appendChild(line);
      }
    });
    return f;
  },

  "pricing-card": async () => {
    await loadFonts();
    const f = figma.createFrame();
    f.name = "Pricing Card";
    f.resize(280, 1);
    f.layoutMode = "VERTICAL";
    f.primaryAxisSizingMode = "AUTO";
    f.paddingLeft = 24; f.paddingRight = 24;
    f.paddingTop = 32; f.paddingBottom = 32;
    f.itemSpacing = 24;
    setFill(f, "#FFFFFF");
    setStroke(f, "#E2E8F0", 1);
    f.cornerRadius = 16;
    const header = figma.createFrame();
    header.layoutMode = "VERTICAL";
    header.itemSpacing = 4;
    header.fills = [];
    const name = figma.createText();
    name.characters = "PRO PLAN";
    name.fontSize = 11;
    name.fontName = { family: "Inter", style: "Bold" };
    header.appendChild(name);
    const price = figma.createText();
    price.characters = "$29/mo";
    price.fontSize = 32;
    price.fontName = { family: "Inter", style: "Bold" };
    header.appendChild(price);
    f.appendChild(header);
    const features = figma.createFrame();
    features.layoutMode = "VERTICAL";
    features.itemSpacing = 12;
    features.fills = [];
    ["Unlimited projects", "Team collaboration", "Advanced analytics", "24/7 Support"].forEach(text => {
       const row = figma.createFrame();
       row.layoutMode = "HORIZONTAL";
       row.itemSpacing = 8;
       row.fills = [];
       const dot = figma.createEllipse(); dot.resize(6, 6); setFill(dot, "#10B981");
       row.appendChild(dot);
       const t = figma.createText(); t.characters = text; t.fontSize = 13;
       row.appendChild(t);
       features.appendChild(row);
    });
    f.appendChild(features);
    const btn = figma.createFrame();
    btn.layoutMode = "HORIZONTAL";
    btn.primaryAxisAlignItems = "CENTER"; btn.counterAxisAlignItems = "CENTER";
    btn.resize(232, 44);
    setFill(btn, "#0F172A");
    btn.cornerRadius = 8;
    const btnT = figma.createText(); btnT.characters = "Get Started"; btnT.fontSize = 14; btnT.fontName = { family: "Inter", style: "Bold" };
    btnT.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
    btn.appendChild(btnT);
    f.appendChild(btn);
    return f;
  },

  "form": async () => {
    await loadFonts();
    const f = figma.createFrame();
    f.name = "Form";
    f.resize(400, 1);
    f.layoutMode = "VERTICAL";
    f.primaryAxisSizingMode = "AUTO";
    f.itemSpacing = 16;
    f.paddingLeft = 24; f.paddingRight = 24;
    f.paddingTop = 24; f.paddingBottom = 24;
    setFill(f, "#FFFFFF");
    setStroke(f, "#E2E8F0", 1);
    f.cornerRadius = 8;
    // Title
    const title = figma.createText();
    title.characters = "Form Title";
    title.fontSize = 18;
    title.fontName = { family: "Inter", style: "Bold" };
    f.appendChild(title);
    // Fields
    for (const label of ["Full Name", "Email Address"]) {
      const fieldGroup = figma.createFrame();
      fieldGroup.name = label;
      fieldGroup.layoutMode = "VERTICAL";
      fieldGroup.itemSpacing = 6;
      fieldGroup.fills = [];
      fieldGroup.layoutAlign = "STRETCH";
      fieldGroup.primaryAxisSizingMode = "AUTO";
      const lbl = figma.createText();
      lbl.characters = label;
      lbl.fontSize = 12;
      lbl.fontName = { family: "Inter", style: "Bold" };
      fieldGroup.appendChild(lbl);
      const input = figma.createFrame();
      input.name = "input";
      input.resize(352, 40);
      input.layoutAlign = "STRETCH";
      input.paddingLeft = 12; input.paddingRight = 12;
      input.paddingTop = 10; input.paddingBottom = 10;
      input.layoutMode = "HORIZONTAL";
      input.counterAxisAlignItems = "CENTER";
      setFill(input, "#FFFFFF");
      setStroke(input, "#CBD5E1", 1);
      const ph = figma.createText();
      ph.characters = `Enter ${label.toLowerCase()}...`;
      ph.fontSize = 13;
      ph.fontName = { family: "Inter", style: "Regular" };
      ph.fills = [{ type: "SOLID", color: { r: 0.58, g: 0.64, b: 0.68 } }];
      input.appendChild(ph);
      fieldGroup.appendChild(input);
      f.appendChild(fieldGroup);
    }
    // Submit
    const btn = figma.createFrame();
    btn.name = "Submit";
    btn.layoutMode = "HORIZONTAL";
    btn.primaryAxisAlignItems = "CENTER"; btn.counterAxisAlignItems = "CENTER";
    btn.paddingLeft = 24; btn.paddingRight = 24;
    btn.paddingTop = 12; btn.paddingBottom = 12;
    btn.layoutAlign = "STRETCH";
    setFill(btn, "#0F172A");
    btn.cornerRadius = 4;
    const btnT = figma.createText();
    btnT.characters = "Submit";
    btnT.fontSize = 14;
    btnT.fontName = { family: "Inter", style: "Bold" };
    btnT.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
    btn.appendChild(btnT);
    f.appendChild(btn);
    return f;
  },
};

function placeInCenter(node) {
  const vp = figma.viewport.center;
  node.x = Math.round(vp.x - node.width / 2);
  node.y = Math.round(vp.y - node.height / 2);
}

// ─── MESSAGE HANDLER ────────────────────────────────────────
figma.ui.onmessage = async (msg) => {
  if (msg.type === "insert-component") {
    let node;
    try {
      if (BUILDERS[msg.id]) {
        node = await BUILDERS[msg.id]();
      } else {
        node = await genericBuilder(msg.id);
      }
      figma.currentPage.appendChild(node);
      placeInCenter(node);
      figma.currentPage.selection = [node];
      figma.viewport.scrollAndZoomIntoView([node]);
      figma.notify("✓ Inserted: " + node.name);
    } catch (err) {
      figma.notify("Error: " + err.message);
      console.error(err);
    }
  }
  if (msg.type === "close") {
    figma.closePlugin();
  }
};
