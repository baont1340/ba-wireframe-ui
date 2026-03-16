# BA Wireframe Builder

Công cụ lắp ghép wireframe trực quan cho Business Analyst. Kéo thả, lồng ghép, chỉnh sửa nội dung — rồi chụp ảnh trình bày ngay.

## 🚀 Tính năng

### 📐 Layout theo dòng (Flow-based)
- Các component xếp chồng tự nhiên theo chiều dọc — giống HTML thật.
- Kéo thanh đen (drag handle) để **sắp xếp lại thứ tự**.
- Kéo component **thả VÀO bên trong** component khác để **lồng ghép** (nesting). Ví dụ: kéo Input vào Form, kéo Title vào Card.

### 📱 Chuyển đổi kích thước thiết bị
| Thiết bị | Kích thước |
|---|---|
| 📱 Mobile | 375px |
| 📟 Tablet | 768px |
| 🖥️ Desktop | 1440px |
| 🖥️ Widescreen | 1920px |

Canvas tự động thay đổi chiều rộng — các component responsive theo Tailwind CSS sẽ hiển thị đúng trên từng kích thước.

### 🔍 Zoom
- `Ctrl + Scroll chuột`: Phóng to / thu nhỏ canvas.
- Nút `+` / `−` / `FIT` trên toolbar.

### ✏️ Chỉnh sửa nội dung
- **Double-click** vào text bất kỳ (tiêu đề, nhãn nút, nội dung bảng...) để thay đổi trực tiếp trên canvas.

### 📸 Screenshot
- Nhấn `📷 Screenshot` để tải ảnh PNG chất lượng cao.
- Hệ thống tự ẩn drag handle và nút điều khiển, reset zoom về 1:1 trước khi chụp → ảnh sạch, đúng tỷ lệ.

### 🖼️ Image Placeholder
- Các vùng ảnh hiển thị bằng SVG wireframe icon (landscape + sun) thay vì text thuần — dễ nhận biết hơn khi trình bày.

---

## 📂 Cấu trúc thư mục

```
ba-wireframe-ui/
├── index.html              # Giao diện chính
├── js/main.js              # Logic kéo thả, zoom, screenshot
├── css/main.css             # Design system wireframe
├── components/              # 60+ component HTML riêng lẻ
│   ├── accordion.html
│   ├── alert.html
│   ├── card.html
│   ├── hero.html
│   ├── navbar.html
│   ├── ...
│   └── file-upload.html
└── README.md
```

## 🛠️ Công nghệ
- **HTML5 + Vanilla JavaScript** — không framework, chạy trực tiếp.
- **Tailwind CSS (CDN)** — responsive utility classes.
- **html2canvas** — chụp ảnh canvas.
- **HTML5 Drag and Drop API** — kéo thả native, ổn định.

## 📖 Hướng dẫn sử dụng

1. Mở `index.html` qua **Live Server** (VS Code) hoặc bất kỳ web server nào.
2. **Chọn kích thước**: Click `📱 Mobile`, `📟 Tablet`, hoặc `🖥️ Desktop` trên toolbar.
3. **Thêm component**: Click tên component ở sidebar trái.
4. **Sắp xếp lại**: Kéo thanh đen ở đầu mỗi component.
5. **Lồng ghép**: Kéo component thả vào vùng nội dung của component khác.
6. **Sửa text**: Double-click vào text để chỉnh sửa.
7. **Chụp ảnh**: Nhấn `📷 Screenshot` để tải PNG.

---

## 🧩 Danh sách Component

### General (28)
Accordion, Alert, Avatar Group, Badge, Blockquote, Button Group, Card, Carousel, Chat Bubbles, Collapse, Datepicker, Devices, Divider, File Progress, KBD, Legend, Link, List Group, Progress, Ratings, Skeleton, Spinner, Static Icons, Stepper, Timeline, Toasts, Tree View, Typography.

### Navigation (7)
Breadcrumb, Mega Menu, Navbar, Tabs/Navs, Pagination, Scrollspy, Sidebar.

### Forms (15)
Checkbox/Radio, Color Picker, ComboBox, File Input, Input, PIN Input, Range Slider, SearchBox, Select, Strong Password, Switch, Textarea, Toggle Count, Toggle Password, Complete Form.

### Overlays (6)
Context Menu, Dropdown, Modal, Offcanvas, Popover, Tooltip.

### Data (6)
Charts, Table, Confetti, Maps, Clipboard, Datamaps.

### Sections (4)
Hero Section, Features Grid, Pricing Plans, Footer.

### Advanced (4)
WYSIWYG Editor, Layout Splitter, Copy Markup, File Upload.

---
*Designed for BA teams who value simplicity and speed.*
