# 📖 CẨM NANG SỬ DỤNG BA WIREFRAME BUILDER PRO (v14.0)

Chào mừng bạn đến với công cụ thiết kế Wireframe chuyên dụng cho BA. Dưới đây là hướng dẫn toàn tập từ A-Z để bạn làm chủ phần mềm.

---

## 1. 🖼️ Giao diện chính (Workspace)
Giao diện được chia thành 3 khu vực chính:
*   **Cột Trái (Navigation & Assets):** Chứa danh sách linh kiện (Components) và Danh sách lớp (Layers).
*   **Khu vực Trung tâm (Multi-Platform Canvas):** Nơi bạn thiết kế. Bạn sẽ thấy bản vẽ hiển thị đồng thời trên Desktop, Tablet và Mobile.
*   **Cột Phải (Properties Panel):** Chỉnh sửa chi tiết thuộc tính của linh kiện đang chọn.

---

## 2. 🖱️ Thao tác Thiết kế cơ bản
### A. Thêm linh kiện
1.  Tìm linh kiện muốn dùng ở cột trái (Tab **Components**). Bạn có thể dùng ô Search để tìm nhanh.
2.  **Click** vào linh kiện: Nó sẽ tự động được thêm vào canvas.
3.  **Kéo thả (Drag & Drop):** Bạn có thể kéo linh kiện để thay đổi thứ tự (Flow mode) hoặc đặt vị trí tùy ý (Free mode).

### B. Thay đổi kích thước (Resize)
Bạn có 3 vùng tương tác trên mỗi linh kiện:
*   **Góc dưới-phải:** Co giãn cả 2 chiều (W & H).
*   **Cạnh phải:** Chỉ co giãn chiều rộng.
*   **Cạnh dưới:** Chỉ co giãn chiều cao.

---

## 3. ⚙️ Chế độ Bố cục (Layout Mode)
Bấm chọn một linh kiện và nhìn vào bảng **Properties**:
*   **Flow Mode (Mặc định):** Linh kiện tự sắp xếp nối đuôi nhau (giống văn bản). Phù hợp làm danh sách, bảng biểu.
*   **Free Drag (Tọa độ X/Y):** Cho phép bạn đặt linh kiện ở bất cứ đâu, đè lên nhau. Phù hợp làm banner, popup.
*   **Flex (Row/Col):** Sắp xếp linh kiện con bên trong theo chiều ngang hoặc dọc.

---

## 🎨 Primitive Elements (Linh kiện gốc)
Linh kiện "Rectangle", "Circle", "Text" là các linh kiện thông minh. Bạn có thể chọn chúng và đổi **Element Type** ở bảng phải để biến chúng thành `Image`, `Button`, `Input`,... mà không cần xóa đi vẽ lại.

---

## 🏗️ Prototyping & Interactions (Tương tác)
Đây là tính năng giúp bạn demo "luồng đi" của ứng dụng:
1.  **Chuyển trang (Jump to Screen):** Chọn linh kiện -> Action: `Jump to Screen` -> Chọn màn hình đích.
2.  **Hiện Popup (Show as Overlay):** Chọn linh kiện -> Action: `Show as Overlay` -> Chọn màn hình chứa nội dung popup.
3.  **Xem Demo:** Nhấn nút **🚀 Play**. Lúc này bạn có thể click vào các nút để chuyển trang hoặc hiện popup như thật.

---

## 🛠️ Công cụ Vẽ tay (Draw Tool)
Trên thanh Quick Bar (phía dưới màn hình):
*   Chọn biểu tượng **Rectangle** hoặc **Circle**.
*   Nhấn giữ và kéo trên Canvas để vẽ ngay một hình khối đúng kích thước bạn muốn.

---

## 📂 Quản lý Dự án
*   **Thêm màn hình:** Nhấn nút `+` ở thanh Tab Screen phía trên Canvas.
*   **Lưu dự án:** Bấm **Save Project** để tải file `.bnt` về máy.
*   **Mở dự án:** Bấm **Load** và chọn file `.bnt` bạn đã lưu trước đó.

---

## 📷 Xuất bản (Export)
Bạn có nhiều tùy chọn xuất dữ liệu:
*   **PNG:** Chụp ảnh màn hình chất lượng cao.
*   **Figma SVG:** Xuất tệp đặc biệt để kéo trực tiếp vào Figma (giữ nguyên kích thước).
*   **HTML:** Xuất file web tĩnh để gửi cho khách hàng xem trên trình duyệt.

---

## ⌨️ Phím tắt (Shortcuts)
*   `Ctrl + S`: Lưu nhanh.
*   `Ctrl + K`: Nhảy nhanh tới ô tìm kiếm.
*   `Del / Backspace`: Xóa linh kiện đang chọn.
*   `Ctrl + D`: Nhân bản linh kiện.
*   `?`: Mở bảng hướng dẫn phím tắt.

---

> [!IMPORTANT]
> **Lưu ý về Cache:** Nếu bạn thấy phần mềm không cập nhật tính năng mới, hãy nhấn **Ctrl + F5** để ép trình duyệt tải lại bản mới nhất từ server. Công cụ đã có hệ thống Anti-cache tự động hỗ trợ bạn!
