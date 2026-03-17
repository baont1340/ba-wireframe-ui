# BA Wireframe Builder v5.0

Công cụ thiết kế Wireframe chuyên nghiệp dành cho Business Analyst. Hỗ trợ thiết kế đa quy trình (Multi-screen), đa nền tảng (Multi-perspective) và đồng bộ hóa thông minh.

## 🚀 Tính năng vượt trội

### 🛠️ Thiết kế Đa nền tảng (Multi-Platform View)
- Xem đồng thời thiết kế trên nhiều kích cỡ thiết bị: **Web** (Desktop, Tablet, Mobile), **App** (Phone, Tablet), và **Desktop App**.
- **Đồng bộ nội dung (Sync Engines):** Mọi thao tác thêm, xóa, sửa, kéo thả, và **căn chỉnh layout** trên một khung hình sẽ tự động cập nhật sang tất cả các khung hình khác.

### 🍱 Hệ thống Layout Linh hoạt (v8.0)
- **Flexbox Engine:** Container có thể chuyển đổi giữa `Row` (Ngang) và `Col` (Dọc). Cho phép đặt Label cạnh Input, hoặc Button cạnh nhau cực kỳ dễ dàng.
- **Self Alignment:** Căn chỉnh linh kiện sang Trái, Giữa, hoặc Phải so với cha.
- **Manual Resizing:** Kéo góc dưới bên phải của bất kỳ linh kiện nào để thay đổi kích thước (Width/Height) trực quan.
- **Dimension Controls:** Nhập chính xác thông số `100%`, `50px` hoặc `auto` trong bảng thuộc tính.

### 📄 Quản lý Dự án Đa màn hình (Multi-Screen)
- Thiết kế toàn bộ luồng nghiệp vụ (User Flow) trong một tab duy nhất.
- Thêm, xóa, đổi tên màn hình linh hoạt.
- **Trạng thái riêng biệt:** Mỗi màn hình lưu trữ riêng mã Custom HTML và mức độ Zoom (`screenZoom`) để tối ưu không gian làm việc.

### 🎨 Primitive & Visual Elements
- Hệ thống **Primitive Components** (Rectangle, Circle, Text...) linh hoạt.
- **Chuyển đổi Type (Semantic HTML):** Chuyển đổi một hình khối cơ bản thành: `Image`, `Button`, `Input`, `Video`, `Map`, `Nav`, `Form`, `Table`... với hình ảnh hiển thị thực tế tương ứng.

### ✍️ Nhúng Custom HTML & Draw Tool
- **Custom HTML (Auto-fill):** Tự do dán mã HTML/CSS cá nhân. Khi chuyển từ component có sẵn sang Custom, hệ thống tự động trích xuất code HTML hiện tại để bạn chỉnh sửa ngay lập tức.
- **Draw Tool:** Công cụ vẽ tự do Rectangle/Circle trực tiếp trên canvas bằng chuột (như các phần mềm thiết kế chuyên nghiệp).

### 💾 Công cụ Xuất bản & Lưu trữ
- **Export Dashboard:** Menu Export gọn gàng hỗ trợ xuất PNG, SVG chuẩn và Figma SVG.
- **Lưu dự án (`.bnt`):** Tải toàn bộ dự án dưới dạng file JSON v6.0.
- **Figma SVG Export:** Xuất thiết kế sang định dạng SVG đặc thù để kéo trực tiếp vào Figma. SVG này chứa ảnh nhúng để giữ nguyên 100% độ chính xác của CSS phức tạp.

## ⌨️ Phím tắt (Shortcuts)
- `Ctrl + S`: Lưu file dự án (.bnt)
- `Ctrl + Shift + S`: Chụp ảnh Frame
- `Ctrl + D`: Nhân bản Component đang chọn
- `Ctrl + K`: Tập trung vào ô tìm kiếm
- `Ctrl + .`: Ẩn/Hiện thanh thuộc tính (Properties)
- `Ctrl + 0`: Zoom Fit (Vừa khung hình)
- `Delete / Backspace`: Xóa component đang chọn
- `Escape`: Bỏ chọn hoặc thoát chế độ Vẽ
- `?`: Mở bảng hướng dẫn phím tắt

## 📂 Cấu trúc dự án
```
├── index.html          # Giao diện chính & System Design
├── js/main.js          # Core logic (Sync, Drag-drop, Save/Load, Zoom)
├── components/         # Thư viện 60+ thành phần mẫu
└── Plan.md             # Tài liệu lịch sử phát triển & Kế hoạch tương lai
```

## 🛠️ Công nghệ
- Core: Vanilla JS + HTML5 + CSS3
- Styling: Tailwind CSS (Aesthetics focused)
- Screenshot: html2canvas
- Fonts: Google Fonts (Inter)
