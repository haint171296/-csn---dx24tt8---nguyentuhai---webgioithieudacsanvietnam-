# -csn---dx24tt8---nguyentuhai---webgioithieudacsanvietnam-
# Website giới thiệu món ăn đặc sản Việt Nam

Website giới thiệu các món ăn đặc sản của ba miền Việt Nam. Bài được xây dựng bằng HTML, CSS và JavaScript thuần, không dùng framework hoặc cơ sở dữ liệu.

 **Đồ án học phần Thực tập Đồ án Cơ sở ngành**
 
 - Sinh viên: Nguyễn Tư Hải
 - MSSV: 170124879
 - Lớp: DX24TT8
 - Khoa: Công Nghệ Thông Tin
 - GVHD: Phạm Thị Trúc Mai
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
