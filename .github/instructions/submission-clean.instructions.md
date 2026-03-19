---
name: "V3 Submission Clean"
description: "Quy tắc nộp hồ sơ KCNC — cấm ngôn ngữ phiên bản, ghi chú nội bộ"
applyTo: "DE_AN_MEKONG_V3/sections/**/*.md,DE_AN_MEKONG_V3/**/*TOM_TAT*.md,DE_AN_MEKONG_V3/**/*MUC_LUC*.md,DE_AN_MEKONG_V3/**/*TRANG_BIA*.md"
---

# Submission Clean — Quy tắc nộp hồ sơ KCNC

## Cấm tuyệt đối trong nội dung chính thức

1. **Ngôn ngữ phiên bản**: Không sử dụng "V2", "V3", "phiên bản cũ", "phương án trước", "điều chỉnh từ", "tăng từ X lên Y", "trước đây", "ban đầu".
2. **Ghi chú nội bộ**: Không sử dụng `> **CEO**`, `> **Ghi chú nội bộ**`, ngày quyết định nội bộ, tên cá nhân ra quyết định.
3. **Changelog**: Không mô tả quá trình thay đổi. Chỉ trình bày trạng thái cuối cùng như một thiết kế hoàn chỉnh.
4. **So sánh trước/sau**: Không bảng so sánh V2 vs V3, không "cũ → mới", không dấu mũi tên so sánh phiên bản.
5. **Từ khóa cấm**: `tái phân bổ`, `refactor`, `rollback`, `changelog`, `sprint`, `backlog`, `session`, `phiên làm việc`.
6. **Câu lai ngôn ngữ**: Không chêm tiếng Anh vào câu tiếng Việt trong nội dung nộp chính thức, kể cả trong bảng, chú thích hình và gạch đầu dòng.

## Quy tắc trình bày

1. Trình bày như đề án được thiết kế từ đầu — không có dấu vết chỉnh sửa.
2. Mọi số liệu là số liệu chính thức, không kèm ghi chú "đã cập nhật" hay "mới".
3. Mọi quyết định kỹ thuật được trình bày như lựa chọn tối ưu, không phải kết quả đàm phán.
4. Ưu tiên tiếng Việt thuần nhất; thuật ngữ nước ngoài chỉ được giữ dưới dạng viết tắt, tên riêng, mã sản phẩm hoặc tiêu chuẩn/chứng nhận.
5. Nếu cần giữ thuật ngữ gốc để tránh sai nghĩa, đưa vào phụ lục giải nghĩa hoặc nêu một lần ở lần xuất hiện đầu tiên, sau đó dùng tiếng Việt nhất quán.

## Ngoại lệ — Tài liệu nội bộ (KHÔNG nộp KCNC)

- `BANG_DOI_CHIEU.md` — bảng đối chiếu QC nội bộ.
- `SO_LIEU_CO_DINH_V3.md` — canonical nội bộ.
- `KE_HOACH_V3_IMPLEMENTATION.md` — kế hoạch triển khai nội bộ.
- `SO_SANH_V2_V3.md` — tài liệu so sánh nội bộ.
