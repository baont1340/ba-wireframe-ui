# Development Plan & Technical Documentation

Tài liệu này ghi lại quá trình phát triển, các quyết định kiến trúc và lộ trình tương lai của **BA Wireframe Builder**.

## 📅 Lịch sử Phiên bản

### v1.0 - v2.0: Nền tảng cơ bản
- Xây dựng hệ thống kéo thả (Drag-and-Drop) cơ bản dùng HTML5 Drag API.
- Thư viện 60+ components mẫu dạng tĩnh.
- Chụp ảnh màn hình bằng `dom-to-image`.

### v3.0: Whimsical Redesign & Multi-Platform
- Thay đổi UI/UX theo phong cách Whimsical (Modern, Clean).
- Giới thiệu **Multi-platform Perspective**: Web, Mobile, App hiển thị đồng thời.
- Chuyển sang dùng `html2canvas` để tăng độ ổn định khi chụp ảnh với CSS phức tạp.
- Cải thiện hệ thống zoom dựa trên thuộc tính `zoom` của CSS.

### v4.0: Primitives & Multi-Screen Project
- **Primitive Elements:** Giới thiệu các hình khối cơ bản có khả năng "biến hình" (transform) thành các thẻ HTML thực tế (`img`, `button`, `input`...).
- **Multi-Screen:** Khả năng quản lý nhiều màn hình/trang trong một file project.
- **Draw Tool:** Hiện thực hóa công cụ vẽ Rectangle/Circle bằng chuột ngay trên canvas.
- **Save/Load:** Chuẩn hóa định dạng định dạng `.bnt` (JSON) để lưu trữ dự án.

### v5.0: Synchronization & Figma Integration (Hiện tại)
- **Automatic Frame Sync:** Đây là thay đổi kiến trúc lớn nhất. Tất cả các Frame trong một Screen chia sẻ chung một "nguồn sự thật" (Source of Truth). Mọi thay đổi ở bất kỳ Frame nào (thêm, xóa, kéo thả, edit text) đều được clone sang các Frame còn lại.
- **Separate Screen State:** Custom HTML và Zoom được quản lý riêng cho từng screen để không gây xung đột không gian làm việc.
- **Figma SVG Export:** Tạo wrapper SVG chứa Base64 image để Figma có thể import trực tiếp đúng kích thước.

---

## 🏗️ Kiến trúc Kỹ thuật

### 1. Cơ chế Đồng bộ (Synchronization Engine)
Hệ thống không đồng bộ từng phần tử nhỏ mà đồng bộ theo khối (Fragment synchronization).
- Khi có bất kỳ sự thay đổi (`mutation`) nào trên Frame nguồn (thêm component, drop, edit nội dung):
  1. Lấy toàn bộ `innerHTML` của `drop-zone` nguồn.
  2. Ghi đè vào `innerHTML` của tất cả các `drop-zone` đồng cấp khác.
  3. Gọi hàm `reattachAllListeners()` để gắn lại toàn bộ sự kiện (click, drag, dblclick) cho các DOM node vừa được tạo mới.

### 2. Định dạng Lưu trữ (.bnt)
Dữ liệu là một đối tượng JSON chứa:
- `version`: Phiên bản cấu trúc.
- `screens`: Danh sách ID và Tên các màn hình.
- `screenData`: Map chứa HTML canonical và chiều cao của từng màn hình.
- `screenZoom`: Map chứa mức độ zoom của từng màn hình.
- `frameVisibility`: Trạng thái ẩn/hiện của các nền tảng (Web desktop, Mobile...).

### 3. Hệ thống Zoom
Sử dụng thuộc tính `zoom` của CSS (non-standard nhưng hoạt động hoàn hảo trên Chrome/Edge). Ưu điểm so với `transform: scale` là không làm thay đổi flow của layout và không gây lỗi khi tính toán tọa độ chuột trong các thư viện screenshot.

---

## 🚀 Lộ trình Tương lai (Roadmap)

1. **Undo/Redo System:** Hiện thực hóa mảng `history` để lưu lại trạng thái `screenData` sau mỗi lần sync.
2. **Connector Lines:** Thêm công cụ vẽ đường nối (arrows) giữa các component để mô tả luồng dữ liệu hoặc sự kiện.
3. **Smart Guides:** Hiển thị đường gióng (alignment guides) khi kéo thả phần tử.
4. **Cloud Save:** Tích hợp Firebase hoặc LocalStorage để tự động lưu dự án, phòng trường hợp người dùng quên download file `.bnt`.
5. **Component Customization:** Cho phép chỉnh sửa màu sắc, border radius, font-size chuyên sâu hơn thông qua bảng Properties.
6. **AI Mockup Generator:** Tích hợp API để sinh wireframe tự động từ mô tả bằng lời nói.

---

## 👨‍💻 Hướng dẫn cho Nhà phát triển tiếp theo
- **Logic chính:** Nằm trong hàm `addComponentFromHTML` và `reattachAllListeners`. Mọi component mới thêm vào cần đảm bảo có `ci-content` để hệ thống hiểu được cấu trúc lồng nhau.
- **Style:** Sử dụng Tailwind CSS nhưng ưu tiên các utility classes tự định nghĩa (ở đầu file `index.html`) như `.wf-border`, `.wf-button` để giữ phong cách Wireframe nhất quán.
- **Sync:** Nếu bạn thêm một tính năng làm thay đổi DOM, hãy luôn gọi `syncFrames(parentDZ)` ở cuối để đảm bảo tính đồng bộ.
