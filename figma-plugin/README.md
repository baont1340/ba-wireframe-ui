# BA Wireframe Kit — Figma Plugin

Plugin Figma cho phép chèn nhanh các Wireframe Component chuẩn hóa trực tiếp vào bản thiết kế Figma.

## 🚀 Cài đặt Plugin (Local Development)

### Bước 1: Mở Figma Desktop App
> ⚠️ Plugin chỉ hoạt động trên **Figma Desktop App**, không chạy trên trình duyệt.

### Bước 2: Import Plugin
1. Mở Figma Desktop
2. Vào **Menu > Plugins > Development > Import plugin from manifest...**
3. Chọn file `manifest.json` trong thư mục `figma-plugin/`
4. Plugin sẽ xuất hiện trong danh sách Development Plugins

### Bước 3: Sử dụng
1. Mở bất kỳ file thiết kế nào
2. **Right-click canvas > Plugins > Development > BA Wireframe Kit**
3. Panel sẽ hiện ra với danh sách component
4. Click vào component bạn muốn → nó sẽ được chèn vào chính giữa viewport

## 📦 Danh sách Component

| Category    | Components |
|-------------|------------|
| Primitives  | Rectangle, Circle, Text Block, Heading, Line, Image Placeholder, Container |
| Buttons     | Button (Outline), Button (Filled) |
| Forms       | Input Field, Textarea, Select, Checkbox, Toggle Switch, Complete Form |
| Navigation  | Navbar, Sidebar Menu, Breadcrumb, Tabs |
| Data        | Table, Card, Avatar, Badge |
| Sections    | Hero Section, Footer |
| Overlays    | Modal Dialog |

## 🎨 Đặc điểm

- **Auto-Layout**: Tất cả component sử dụng Figma Auto-Layout, có thể resize tự do
- **Font Inter**: Sử dụng font Inter (có sẵn trong Figma)
- **Wireframe Style**: Tông màu đen-trắng-xám chuẩn wireframe
- **Editable**: Mọi text đều có thể sửa trực tiếp sau khi chèn
- **Nestable**: Các component có thể kéo vào Container để tạo layout phức tạp

## 🔧 Cấu trúc file

```
figma-plugin/
├── manifest.json    ← Figma plugin manifest
├── code.js          ← Logic tạo node Figma (chạy trong sandbox)
├── ui.html          ← Giao diện panel người dùng
└── README.md        ← File này
```

## 📝 Phát triển thêm

Để thêm component mới:
1. Mở `code.js`, thêm builder function trong object `BUILDERS`
2. Mở `ui.html`, thêm entry vào array `COMPONENTS`
3. Reload plugin trong Figma (Right-click > Plugins > Development > BA Wireframe Kit)
