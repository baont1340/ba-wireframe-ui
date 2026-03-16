# BA Wireframe Builder

Một công cụ xây dựng bản phác thảo giao diện (Wireframe) đơn giản, mạnh mẽ dành riêng cho Business Analysts. Giúp nhanh chóng hiện thực hóa các yêu cầu người dùng thành giao diện trực quan trước khi chuyển giao cho đội thiết kế UI/UX hoặc phát triển.

## 🚀 Tính năng chính

### 🏗️ Lắp ghép linh hoạt (Freeform Canvas)
- **Vùng làm việc vô hạn**: Không giới hạn không gian sáng tạo.
- **Kéo thả thành phần**: Chọn component từ sidebar hoặc kéo trực tiếp vào canvas.
- **Điều khiển chính xác**: Mỗi component có thanh kéo (drag handle) riêng biệt, tránh xung đột với việc chỉnh sửa nội dung bên trong.
- **Thay đổi kích thước**: Dễ dàng co dãn chiều rộng của các khối theo ý muốn.
- **Nhân bản nhanh**: Nút nhân bản (Duplicate) giúp tạo ra các danh sách hoặc khối lặp lại trong tích tắc.

### 🔍 Điều hướng & Xem (Navigation)
- **Zoom In/Out**: Sử dụng `Ctrl + Cuộn chuột` hoặc các nút trên toolbar để phóng to/thu nhỏ (15% - 300%).
- **Pan (Di chuyển màn hình)**: Giữ phím `Space + Kéo chuột` hoặc sử dụng **Chuột giữa** để di chuyển toàn bộ vùng làm việc.
- **Tương thích**: Hỗ trợ cuộn dọc/ngang thông qua touchpad hoặc chuột thông thường.

### 📝 Chỉnh sửa nội dung
- **Chỉnh sửa trực tiếp**: Nhấn đúp chuột (Double-click) vào văn bản bất kỳ (tiêu đề, nhãn nút, nội dung bảng...) để thay đổi nội dung ngay trên bản phác thảo.
- **Phong cách Wireframe**: Thiết kế trung tính (đen/trắng/xám) giúp người xem tập trung hoàn toàn vào cấu trúc và chức năng thay vì màu sắc.

### 🔎 Thư viện Component đồ sộ
Hơn 60+ thành phần được phân loại rõ ràng:
- **General**: Accordion, Alert, Badge, Card, Carousel, Chat...
- **Navigation**: Navbar, Mega Menu, Sidebar, Pagination, Tabs...
- **Forms**: Bất kỳ loại Input nào (Color Picker, Datepicker, Password, Toggle...).
- **Data**: Bảng (Table), Biểu đồ (Charts), Dòng thời gian (Timeline), Bản đồ (Maps).
- **Sections**: Hero Section, Pricing, Features grid, Footer.

### 📸 Xuất kết quả
- **Screenshot PNG**: Tải về bản thiết kế chất lượng cao với chỉ một click. Hệ thống tự động ẩn các công cụ điều khiển (nút xóa, thanh kéo) để ảnh sạch đẹp và chuyên nghiệp.

---

## 🛠️ Công nghệ sử dụng
- **HTML5 & Vanilla Javascript**: Không cần cài đặt phức tạp, chạy trực tiếp trên trình duyệt.
- **Tailwind CSS (CDN)**: Hệ thống styling hiện đại cho giao diện wireframe.
- **html2canvas**: Thư viện hỗ trợ chụp ảnh vùng làm việc.

## 📂 Cấu trúc thư mục
- `index.html`: Cấu trúc chính của ứng dụng.
- `js/main.js`: Xử lý logic kéo thả, zoom, pan và tương tác.
- `css/main.css`: Định nghĩa hệ thống thiết kế Wireframe (khung viền, bóng đổ, font chữ).
- `components/`: Chứa các mẫu mã nguồn HTML riêng lẻ của từng thành phần.

## 📖 Hướng dẫn sử dụng
1. Mở file `index.html` thông qua một Web Server (Ví dụ: Live Server trong VS Code).
2. Chọn thành phần từ Sidebar bên trái.
3. Sử dụng thanh màu đen phía trên mỗi khối để di chuyển chúng trên Canvas.
4. Chụp ảnh (Screenshot) khi hoàn tất để trình bày ý tưởng.

---
*Phát triển bởi đội ngũ BA tập trung vào sự tối giản và hiệu quả.*
