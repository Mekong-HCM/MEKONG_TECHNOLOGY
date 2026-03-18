# COPILOT INSTRUCTIONS — MEKONG V3 (22M)

> Mục tiêu: đảm bảo mọi nội dung AI tạo ra bám đúng phương án V3, số liệu nhất quán, và chất lượng tài liệu đạt chuẩn hồ sơ KCNC.

---

## 1) Phạm vi và nguồn chuẩn

- Nguồn triển khai chính: `DE_AN_MEKONG_V3/`.
- File master (hub/index): `DE_AN_MEKONG_V3/MEKONG_DE_AN_V3_22M_MASTER.md`.
- Nội dung chi tiết: `DE_AN_MEKONG_V3/sections/` — 16 file con theo từng phần.
- Kế hoạch điều phối: `DE_AN_MEKONG_V3/KE_HOACH_V3_IMPLEMENTATION.md`.
- Ràng buộc nghiệp vụ: `DE_AN_MEKONG_V3/YEU_CAU_GOC_V3.md`.
- Số liệu canonical: `DE_AN_MEKONG_V3/SO_LIEU_CO_DINH_V3.md`.
- Backup MASTER gốc: `DE_AN_MEKONG_V3/MEKONG_DE_AN_V3_22M_MASTER_BACKUP.md`.
- Không dùng V2 làm nguồn chính khi viết nội dung V3.

## 2) Quy tắc nội dung bắt buộc

- Chỉ chỉnh sửa/tạo file `.md` trong các tác vụ biên soạn đề án.
- Văn phong tiếng Việt trang trọng, rõ nghĩa, có dấu đầy đủ.
- Không dùng emoji trong tài liệu chính thức.
- Định dạng số theo chuẩn Việt: dùng dấu phẩy thập phân (ví dụ: `22,00M`).
- Mỗi số liệu tài chính/kỹ thuật quan trọng phải có đơn vị và nhãn `[C]`, `[B]`, hoặc `[A]` khi phù hợp.

## 3) Ràng buộc V3 không được vi phạm

- CAPEX tổng: `22.000.000 USD`.
- Cấu trúc 2 trụ cột: Điện tử thông minh + CNC/MPMC.
- CNC: `10 máy` (không quay lại 6 máy).
- Datacenter chỉ nội bộ, không thương mại hóa.
- Không giữ nội dung DC thương mại như `GPU-aaS`, `colocation`, `Tier III`, `GP Viễn thông` trừ trường hợp nêu rõ là “nội dung đã loại bỏ”.

## 4) Quy trình làm việc chuẩn

- Trước khi viết: kiểm kê nguồn vào theo sprint và xác nhận phạm vi section.
- Trong khi viết: bám mapping của kế hoạch V3, không bỏ section quan trọng.
- Sau khi viết: chạy QC nhất quán số liệu, thuật ngữ, định dạng số và đơn vị.
- Nếu phát hiện mâu thuẫn dữ liệu giữa các file nguồn, dừng và yêu cầu xác nhận.
- Khi chỉnh sửa nội dung: sửa trực tiếp file con trong `sections/`, không sửa MASTER hub.

## 5) Ưu tiên khi có xung đột chỉ dẫn

1. Chỉ đạo trực tiếp của người dùng trong phiên hiện tại.
2. File canonical trong `DE_AN_MEKONG_V3/SO_LIEU_CO_DINH_V3.md`.
3. Quy tắc tại `.github/instructions/*.instructions.md` theo `applyTo`.
4. Quy tắc chung tại file này.

---

## 6) Cấu trúc file đa module

Master file (`MEKONG_DE_AN_V3_22M_MASTER.md`) là hub/index liên kết đến 16 file con trong `sections/`:

| File | Nội dung |
|---|---|
| `00_TRANG_BIA.md` | Trang bìa |
| `00_MUC_LUC.md` | Mục lục chi tiết với liên kết |
| `00_THONG_TIN_DU_AN.md` | Thông tin dự án |
| `00_TOM_TAT_DIEU_HANH.md` | Tóm tắt điều hành |
| `00_CO_SO_PHAP_LY.md` | Cơ sở pháp lý |
| `P1` – `P9` | 9 phần chính |
| `PHU_LUC.md` | Phụ lục A–C |
| `BANG_DOI_CHIEU.md` | Bảng đối chiếu số liệu canonical |

---

*Cập nhật: 2026-03-17*
*Phiên bản: V3-22M — Cấu trúc đa module*

