# -csn---dx24tt8---nguyentuhai---webgioithieudacsanvietnam-
# Đặc sản Việt Nam

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
