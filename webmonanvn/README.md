# Đồ án: Xây dựng ứng dụng web đơn trang giới thiệu món ăn đặc sản Việt Nam

## 1. Giới thiệu đề tài

Đề tài nghiên cứu và xây dựng ứng dụng web đơn trang (Single Page Application - SPA) giới thiệu các món ăn đặc sản nổi tiếng của Việt Nam. Ứng dụng này được phát triển bằng HTML, CSS và JavaScript thuần, không sử dụng framework hay cơ sở dữ liệu. Mục tiêu của đề tài là minh họa nguyên lý hoạt động của SPA, đồng thời xây dựng một sản phẩm demo có tính tương tác cao, thân thiện với người dùng và phù hợp với mục tiêu học tập, nghiên cứu và trình bày trong môi trường đại học.

## 2. Lý do chọn đề tài

Việt Nam là quốc gia có nền ẩm thực phong phú và đa dạng về vùng miền. Mỗi vùng miền đều sở hữu những món ăn đặc trưng mang bản sắc văn hóa riêng. Tuy nhiên, việc giới thiệu và tìm hiểu các món ăn đặc sản trên web thường bị giới hạn bởi cách trình bày chưa trực quan hoặc thiếu tính tương tác. Vì vậy, đề tài này nhằm xây dựng một ứng dụng web đơn trang cho phép người dùng dễ dàng quan sát, tìm kiếm và khám phá thông tin về các món ăn đặc sản của ba miền Bắc - Trung - Nam.

## 3. Tổng quan về ứng dụng web đơn trang (SPA)

### 3.1 Định nghĩa

Single Page Application (SPA) là kiểu ứng dụng web trong đó người dùng chỉ tương tác trên một trang HTML duy nhất. Khi thực hiện các hành động như tìm kiếm, lọc dữ liệu hoặc chuyển đổi nội dung, giao diện sẽ được cập nhật bằng JavaScript mà không cần tải lại toàn bộ trang.

### 3.2 Nguyên lý hoạt động

- Trình duyệt chỉ tải một trang HTML chính.
- JavaScript chịu trách nhiệm cập nhật DOM theo sự kiện người dùng.
- Dữ liệu có thể được lưu trong biến JavaScript hoặc file JSON.
- Hệ thống điều hướng được thực hiện qua hash URL như `#/mien-bac` hoặc `#/mon/pho-ha-noi`.
- Việc cập nhật nội dung diễn ra trên cùng một trang, giúp trải nghiệm nhanh hơn và mượt hơn.

### 3.3 Công nghệ sử dụng

- HTML5: xây dựng cấu trúc giao diện.
- CSS3: thiết kế bố cục, kiểu chữ, màu sắc, hiệu ứng và tương thích mobile.
- JavaScript: xử lý sự kiện, render dữ liệu, tìm kiếm, lọc, phân trang và routing.
- JavaScript Object / JSON: lưu trữ dữ liệu món ăn.

> Không sử dụng framework, không sử dụng cơ sở dữ liệu, không dùng backend, phù hợp với mục tiêu xây dựng demo web SPA thuần.

## 4. Mục tiêu của đề tài

- Nghiên cứu và ứng dụng nguyên lý hoạt động của một SPA.
- Xây dựng giao diện web đơn trang hiệu quả, dễ sử dụng và thân thiện với người dùng.
- Giới thiệu các món ăn đặc sản Việt Nam theo từng vùng miền.
- Hỗ trợ tìm kiếm, lọc dữ liệu và xem thông tin chi tiết từng món ăn.
- Tạo ra sản phẩm demo phù hợp để học tập, trình bày và đánh giá kỹ năng lập trình web.

## 5. Yêu cầu chức năng

Ứng dụng demo cần đảm bảo các chức năng chính sau:

- Trang chủ hiển thị danh sách món ăn nổi bật.
- Phân trang danh sách món ăn.
- Trang đặc sản theo từng vùng miền: Miền Bắc, Miền Trung, Miền Nam.
- Xem chi tiết thông tin từng món ăn.
- Tìm kiếm món ăn theo tên, địa điểm hoặc mô tả.
- Lọc dữ liệu theo vùng miền.
- Điều hướng giữa các màn hình trên cùng một trang mà không tải lại toàn bộ trang.

## 6. Phân tích chức năng hệ thống

### 6.1 Trang chủ

Trang chủ là nơi giới thiệu tổng quan về ẩm thực Việt Nam. Giao diện gồm banner chào mừng, ô tìm kiếm, bộ lọc vùng miền và danh sách món ăn. Mỗi trang hiển thị một số lượng món ăn nhất định để đảm bảo bố cục rõ ràng và dễ xem.

### 6.2 Trang vùng miền

Mỗi vùng miền có một màn hình riêng được định tuyến theo URL hash:

- `#/mien-bac`
- `#/mien-trung`
- `#/mien-nam`

Mỗi trang đều hiển thị các món ăn thuộc vùng tương ứng, giúp người dùng dễ dàng phân biệt đặc trưng ẩm thực của từng miền.

### 6.3 Trang chi tiết món ăn

Khi người dùng chọn một món ăn, ứng dụng chuyển đến địa chỉ dạng:

- `#/mon/<id>`

Trang chi tiết hiển thị các thông tin như: tên món, hình ảnh, vùng miền, địa điểm, mô tả, câu chuyện món ăn, nguyên liệu và đánh giá.

### 6.4 Tìm kiếm và lọc dữ liệu

- Tìm kiếm theo từ khóa tiếng Việt không dấu.
- Lọc theo vùng miền để giới hạn kết quả hiển thị.
- Có thể mở rộng thêm lọc theo loại món ăn hoặc tiêu chí khác trong tương lai.

## 7. Cấu trúc dự án

```text
webmonanvn/
├── index.html     # File HTML chứa cấu trúc giao diện chính
├── style.css      # File CSS định nghĩa giao diện và responsive
├── app.js         # Logic SPA: router, render, tìm kiếm, lọc, phân trang
├── data.js        # Dữ liệu món ăn được lưu dưới dạng JavaScript object
├── README.md      # Tài liệu mô tả đề tài và hướng dẫn sử dụng
└── assets/        # Thư mục bổ sung tài nguyên, hình ảnh hoặc tài liệu khác
```

## 8. Công nghệ và kỹ thuật triển khai

- **HTML5**: xây dựng cấu trúc giao diện.
- **CSS3**: định dạng layout, hiệu ứng, màu sắc và responsive design.
- **JavaScript**: xử lý logic, DOM, routing và tương tác người dùng.
- **JavaScript Object / JSON**: lưu trữ dữ liệu món ăn.
- **Google Fonts**: sử dụng font chữ phù hợp với giao diện ẩm thực.

## 9. Ưu điểm của giải pháp

- Không cần framework, dễ học và triển khai.
- Phù hợp với bài tập, đồ án và dự án cá nhân.
- Cho thấy rõ nguyên lý hoạt động của ứng dụng web đơn trang.
- Dễ mở rộng khi cần bổ sung dữ liệu hoặc chức năng mới.
- Không phụ thuộc vào backend hoặc cơ sở dữ liệu.

## 10. Hạn chế của demo

- Dữ liệu hiện đang được lưu cứng trong JavaScript, nên khó quản lý nếu số lượng món ăn tăng lên nhiều.
- Hình ảnh phụ thuộc vào URL bên ngoài, nên có thể bị ảnh hưởng bởi mạng hoặc sự thay đổi nguồn dữ liệu.
- Chưa tích hợp backend, không có quản trị dữ liệu động.

## 11. Hướng dẫn chạy dự án

### 11.1 Mở trực tiếp

Nhấp đúp chuột vào file `index.html` để mở ứng dụng trong trình duyệt.

### 11.2 Dùng Live Server trong VS Code

1. Mở thư mục dự án trong VS Code.
2. Nhấn chuột phải vào `index.html`.
3. Chọn **Open with Live Server**.

### 11.3 Chạy bằng máy chủ tĩnh Python

Mở Terminal trong thư mục dự án và chạy lệnh sau:

```bash
python -m http.server 8000
```

Sau đó truy cập địa chỉ:

```text
http://localhost:8000
```

## 12. Kết luận

Đề tài này đã xây dựng thành công một ứng dụng web đơn trang giới thiệu các món ăn đặc sản Việt Nam theo đúng nguyên lý của SPA thuần. Dự án không sử dụng framework hay cơ sở dữ liệu, mà tập trung vào việc ứng dụng HTML, CSS, JavaScript và dữ liệu dạng JavaScript Object/JSON để tạo ra một sản phẩm web tương tác, trực quan và phù hợp cho mục tiêu học tập và báo cáo đồ án đại học.

## 13. Tài liệu tham khảo

- W3Schools, HTML, CSS và JavaScript documentation.
- MDN Web Docs, JavaScript DOM and Event handling.
- Khái niệm về Single Page Application (SPA).
- Hash routing trong ứng dụng web đơn trang.
- Cách lưu trữ và xử lý dữ liệu tĩnh bằng JavaScript/JSON.
