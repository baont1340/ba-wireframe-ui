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

### v5.0: Synchronization & Figma Integration
- **Automatic Frame Sync:** Tất cả các Frame trong một Screen chia sẻ chung một "nguồn sự thật" (Source of Truth). 
- **Figma SVG Export:** Tạo wrapper SVG chứa Base64 image để Figma có thể import trực tiếp đúng kích thước.

### v6.0: UX Refinement & Export Dashboard
- **Custom HTML Pre-fill:** Tự động trích xuất mã HTML khi chuyển sang Custom.
- **Improved Export Dashboard:** Hợp nhất PNG, SVG, Figma SVG vào một menu.

### v7.0: Figma Bridge & HTML Export
- **Export as HTML:** Xuất mã nguồn sạch để dùng với Plugin Figma `html.to.design` nhằm tạo editable layers.

### v8.0: Flex Layout & Manual Resize
- **Flexbox Containers:** Thay đổi flow sắp xếp linh kiện (Ngang/Dọc). Giải quyết bài toán "Label bên trái, Input bên phải".
- **Visual Resizer:** Thêm handle ở góc linh kiện để BA có thể "co giãn" tự do bằng chuột.

### v9.0: Absolute Positioning & Free Drag
- **Free Canvas Mode:** Cho phép kéo thả linh kiện tới bất kỳ vị trí X/Y nào trên màn hình.
- **Coordinate Sync:** Đồng bộ vị trí `left/top` giữa các Frame.

### v10.0: Unified Design Engine
- **Consolidated Component Logic:** Hợp nhất xử lý sự kiện (kéo thả, resize, edit) vào một engine duy nhất.
- **Perfect Inner Scaling:** Linh kiện tự động lấp đầy khung khi co giãn.

### v11.0: Anti-Cache & PHP Migration
- **PHP Transition:** Chuyển đổi toàn bộ mã nguồn từ HTML sang PHP để kiểm soát cache ở mức server.
- **Anti-Cache Engine:** Sử dụng PHP Headers và Resource Fingerprinting (`?v=<?php echo time(); ?>`) để đảm bảo người dùng luôn nhận được bản code mới nhất, không bị lỗi cache trình duyệt.
- **PHP Fragments:** Chuyển đổi 80+ component fragments sang định dạng `.php` giúp việc nạp linh kiện nhanh và linh hoạt hơn.

### v12.0: Pro Designer Upgrade (Hiện tại)
- **Layers Panel:** Quản lý danh sách linh kiện theo cấu trúc cây (Left Panel Tabs). Giúp chọn nhanh linh kiện bị che khuất.
- **Prototyping Engine:** Khả năng liên kết linh kiện với các màn hình khác nhau (Interactions).
- **Play Mode:** Chế độ trình chiếu Prototype tương tác thực tế, ẩn toàn bộ UI chỉnh sửa.
- **Stability Fixes:** Fix lỗi mất tham chiếu DOM và khôi phục các hàm utility quan trọng (`updateStatus`, `showEmpty`).

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

### 4. Hệ thống Chống Cache (Anti-Cache)
- **Server Headers:** Ép trình duyệt không lưu cache tệp `index.php`.
- **Resource Versioning:** File `js/main.js` và các tệp CSS được gắn mã timestamp của server mỗi khi nạp lại trang.
- **Fragment Cache Busting:** Khi nạp linh kiện qua `fetch`, JavaScript tự động thêm tham số `?v=timestamp` để bỏ qua cache tệp fragment.

### 5. Prototyping & Layers
- **Interactions:** Sử dụng `data-link-target` để lưu trữ ID màn hình đích.
- **Layer Mapping:** Hàm `renderLayers()` duyệt qua DOM của Frame hiện tại để xây dựng sơ đồ các phần tử, ánh xạ qua `data-uid` để tương tác ngược lại canvas.

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
- **Cấu trúc tệp:** Ứng dụng hiện chạy trên nền tảng PHP. Để chạy cục bộ, cần dùng XAMPP/Laragon hoặc lệnh `php -S localhost:8000`.
- **Logic chính:** Nằm trong hàm `addComponentFromHTML` và `reattachAllListeners`. Mọi component mới cần có `ci-content`.
- **Sync:** Nếu bạn thêm một tính năng làm thay đổi DOM, hãy luôn gọi `syncFrames(parentDZ)` ở cuối để đảm bảo tính đồng bộ giữa các platform.
- **Layers:** Đảm bảo gọi `renderLayers()` sau mỗi lần thay đổi số lượng hoặc thứ tự linh kiện (thường đã được tích hợp trong `updateStatus`).
- **Prototype:** Khi ở chế độ `isPlaying`, các sự kiện chỉnh sửa bị vô hiệu hóa để ưu tiên sự kiện điều hướng màn hình.
