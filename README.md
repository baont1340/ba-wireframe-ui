# BA Wireframe Builder

Công cụ lắp ghép wireframe trực quan cho Business Analyst — kéo thả, lồng ghép, chỉnh sửa nội dung, chuyển đổi kích thước thiết bị, rồi chụp ảnh PNG đưa vào tài liệu.

## 🚀 Tính năng

### 📐 Flow-based Layout
- Component xếp theo chiều dọc tự nhiên (như HTML thật)
- Kéo thanh điều khiển (ẩn mặc định, hiện khi hover) để sắp xếp lại thứ tự
- Kéo component thả VÀO component khác để lồng ghép (nesting)

### 📱 Chuyển đổi kích thước thiết bị
| Nút | Kích thước | Auto-fit |
|---|---|---|
| 📱 Mobile | 375px | Tự zoom nếu vượt viewport |
| 📟 Tablet | 768px | ✓ |
| 🖥️ Desktop | 1440px | ✓ |
| 🖥️ Wide | 1920px | ✓ |

### 🔍 Zoom
- `Ctrl + Scroll`: Zoom canvas
- Nút `+` / `−` / `FIT` trên toolbar
- CSS `zoom` (không dùng `transform: scale`) → screenshot luôn đúng

### ✏️ Chỉnh sửa
- **Double-click** vào text để chỉnh sửa trực tiếp

### 📸 Screenshot PNG
- Dùng `dom-to-image-more` — inline computed styles tự động
- Tự ẩn thanh điều khiển, reset zoom trước khi chụp
- Kết quả: ảnh PNG sạch, đúng CSS, sẵn sàng đưa vào tài liệu

### 🧩 60+ Components
General · Navigation · Forms · Overlays · Data · Sections · Advanced

## 📂 Cấu trúc
```
├── index.html          # UI + styles
├── js/main.js          # Logic kéo thả, zoom, screenshot
├── css/main.css        # Design tokens (wf-border, wf-button...)
├── components/         # 60+ component HTML files
└── README.md
```

## 📖 Cách dùng
1. Mở `index.html` qua **Live Server**
2. Click component từ sidebar → tự động thêm vào canvas
3. **Hover** component → thanh điều khiển hiện ra (kéo / xóa / duplicate)
4. **Kéo thả bar** để sắp xếp hoặc lồng ghép vào component khác
5. Chọn kích thước thiết bị: Mobile / Tablet / Desktop / Wide
6. **Double-click** text để chỉnh sửa
7. Nhấn **📷 Screenshot** → tải PNG

## 🛠️ Công nghệ
- HTML5 + Vanilla JS · Tailwind CSS (CDN) · dom-to-image-more · HTML5 Drag API
