# Website giới thiệu món ăn đặc sản Việt Nam

Website đơn trang giới thiệu các món ăn đặc sản của ba miền Việt Nam. Bài được xây dựng bằng HTML, CSS và JavaScript thuần, không dùng framework hoặc cơ sở dữ liệu.

## Mục tiêu bài

- Giới thiệu món ăn tiêu biểu của miền Bắc, miền Trung và miền Nam.
- Cho phép người dùng tìm kiếm món ăn hoặc địa danh.
- Lọc món ăn theo vùng miền.
- Hiển thị thông tin chi tiết, câu chuyện và nguyên liệu của từng món.
- Tổ chức nội dung trên một trang SPA, không tải lại toàn bộ trang khi chuyển nội dung.

## Chức năng chính

### Trang chủ

Trang chủ có phần giới thiệu ẩm thực Việt Nam, ô tìm kiếm, bộ lọc vùng miền và danh sách món ăn. Danh sách được chia thành 8 món trên mỗi trang.

### Tìm kiếm

Từ khóa được chuẩn hóa bằng Unicode NFD nên có thể tìm kiếm tiếng Việt không dấu. Kết quả được đối chiếu với tên món, địa điểm, vùng miền và phần mô tả.

### Lọc theo vùng miền

Người dùng có thể xem toàn bộ món ăn hoặc chỉ xem món thuộc miền Bắc, miền Trung hay miền Nam.

### Trang chi tiết

Mỗi món ăn có một đường dẫn riêng dạng `#/mon/ten-mon`. Trang chi tiết hiển thị hình ảnh lớn, tên món, đánh giá, địa điểm, mô tả, câu chuyện và nguyên liệu nổi bật.

### Điều hướng SPA

Ứng dụng dùng hash routing:

| Đường dẫn | Nội dung |
|---|---|
| `#/` | Trang chủ, tìm kiếm, lọc và phân trang |
| `#/mien-bac` | Danh sách đặc sản miền Bắc |
| `#/mien-trung` | Danh sách đặc sản miền Trung |
| `#/mien-nam` | Danh sách đặc sản miền Nam |
| `#/mon/<id>` | Chi tiết một món ăn |

## Cấu trúc thư mục

```text
webmonanvn/
├── index.html   # Khung HTML chính của website
├── style.css    # Toàn bộ giao diện desktop
├── app.js       # Router, render giao diện, tìm kiếm, lọc và phân trang
├── data.js      # Dữ liệu 18 món đặc sản ba miền
└── README.md    # Tài liệu của bài
```

## Công nghệ sử dụng

- **HTML5**: xây dựng cấu trúc ngữ nghĩa gồm header, main, article và footer.
- **CSS3**: thiết kế giao diện desktop bằng Flexbox, Grid, biến CSS và hiệu ứng hover.
- **JavaScript thuần**: xử lý DOM, sự kiện, hash routing, tìm kiếm, lọc và phân trang.
- **Dữ liệu JavaScript**: danh sách món ăn được khai báo trong `data.js` dưới dạng mảng object.
- **Google Fonts**: sử dụng Be Vietnam Pro và Playfair Display cho nội dung tiếng Việt.

## Cách chạy

### Mở trực tiếp

Nháy đúp vào file `index.html` để mở website trên trình duyệt.

### Dùng Live Server trong VS Code

1. Mở thư mục `webmonanvn` bằng VS Code.
2. Nhấn chuột phải vào `index.html`.
3. Chọn **Open with Live Server**.

### Dùng máy chủ tĩnh bằng Python

Mở Terminal tại thư mục dự án và chạy:

```bash
python -m http.server 8000
```

Sau đó truy cập `http://localhost:8000`.

## Luồng hoạt động

1. Trình duyệt tải `index.html`, `style.css`, `data.js` và `app.js`.
2. `app.js` đọc hash hiện tại để xác định nội dung cần hiển thị.
3. Các hàm render ghi giao diện vào vùng `<main id="app">`.
4. Khi người dùng tìm kiếm, lọc, chuyển trang hoặc mở món ăn, JavaScript cập nhật nội dung mà không tải lại tài liệu HTML.

## Phạm vi giao diện

Phiên bản hiện tại được tối ưu cho màn hình desktop: menu điều hướng luôn hiển thị, danh sách món ăn dùng bố cục 4 cột và trang chi tiết dùng bố cục hai cột với hình ảnh lớn. Giao diện mobile không nằm trong phạm vi của bài.

## Hướng phát triển

- Bổ sung giá tham khảo và địa chỉ quán ăn.
- Thêm chức năng yêu thích món ăn bằng Local Storage.
- Bổ sung dữ liệu JSON riêng hoặc kết nối API.
- Thêm sắp xếp theo tên và đánh giá.
- Bổ sung hình ảnh cục bộ để website hoạt động ổn định khi không có Internet.
