# Hướng dẫn cấu hình GitHub Pages cho Mekong Technology

## Vấn đề đã sửa

✅ **Workflow đã được cập nhật** với:
- Sử dụng GitHub Pages Actions mới nhất (v4)
- Cấu hình permissions đúng cách
- Sử dụng environment `github-pages`
- Thêm file `.nojekyll` để tránh xử lý Jekyll

## Các bước cấu hình GitHub Pages

### 1. Cấu hình Repository Settings

1. Vào **Settings** của repository
2. Cuộn xuống phần **Pages** (bên trái)
3. Trong **Source**, chọn **GitHub Actions**
4. Lưu cài đặt

### 2. Kiểm tra Environment

1. Vào **Settings** → **Environments**
2. Đảm bảo có environment tên `github-pages`
3. Nếu chưa có, GitHub sẽ tự tạo khi workflow chạy lần đầu

### 3. Kiểm tra Permissions

1. Vào **Settings** → **Actions** → **General**
2. Trong **Workflow permissions**, chọn **Read and write permissions**
3. Đánh dấu **Allow GitHub Actions to create and approve pull requests**

### 4. Test Deployment

Sau khi cấu hình xong:

1. Commit và push code lên branch `main`
2. Vào **Actions** tab để xem workflow chạy
3. Nếu thành công, trang sẽ có sẵn tại: `https://[username].github.io/[repository-name]`

## Troubleshooting

### Lỗi 403 Forbidden
- ✅ **Đã sửa**: Sử dụng GitHub Pages Actions v4 thay vì peaceiris/actions-gh-pages
- ✅ **Đã sửa**: Cấu hình permissions đúng cách

### Lỗi Environment không tồn tại
- GitHub sẽ tự tạo environment `github-pages` khi workflow chạy lần đầu
- Hoặc có thể tạo thủ công trong Settings → Environments

### Lỗi Jekyll processing
- ✅ **Đã sửa**: Thêm file `.nojekyll` trong thư mục Presentation

## Cấu trúc thư mục sau khi deploy

```
https://[username].github.io/[repository-name]/
├── index.html          # Trang chủ
├── executive.html      # Executive presentation
├── full.html          # Full presentation
├── assets/            # Hình ảnh và tài nguyên
└── .nojekyll         # Tắt Jekyll processing
```

## Lưu ý quan trọng

1. **Domain tùy chỉnh**: Nếu muốn dùng domain `mekongtech.vn`, cần cấu hình DNS và thêm file `CNAME`
2. **HTTPS**: GitHub Pages tự động cung cấp HTTPS
3. **Custom 404**: Có thể thêm file `404.html` trong thư mục Presentation

## Kiểm tra sau khi deploy

1. Truy cập URL GitHub Pages
2. Kiểm tra cả 2 version: Executive và Full
3. Test các tính năng Reveal.js (phím tắt, overview mode, etc.)
4. Kiểm tra responsive trên mobile

## Liên hệ hỗ trợ

Nếu vẫn gặp lỗi, hãy kiểm tra:
- Repository settings → Pages → Source = "GitHub Actions"
- Actions → General → Workflow permissions = "Read and write"
- Environment `github-pages` đã được tạo
