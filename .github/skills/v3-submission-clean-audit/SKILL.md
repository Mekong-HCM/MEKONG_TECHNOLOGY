---
name: v3-submission-clean-audit
description: Quét và sửa ngôn ngữ phiên bản, ghi chú nội bộ, changelog trong tài liệu V3 trước khi nộp KCNC.
argument-hint: "[duong-dan-file-hoac-thu-muc]"
---

# V3 Submission Clean Audit

## Khi nào dùng

- Trước khi chốt bản nộp KCNC.
- Sau mỗi đợt chỉnh sửa lớn (refactor, tái cấu trúc).

## Từ khóa rà soát

### Nhóm 1 — Phiên bản
- `V2`, `V3`, `phiên bản`, `version`
- `phương án cũ`, `phương án trước`, `phương án gốc`
- `trước đây`, `ban đầu`, `nguyên bản`

### Nhóm 2 — Changelog / So sánh
- `tăng từ`, `giảm từ`, `điều chỉnh từ`, `chuyển từ`
- `→` (mũi tên so sánh), `cũ → mới`
- `tái phân bổ`, `refactor`, `rollback`
- `đã cập nhật`, `đã sửa`, `đã thay đổi`

### Nhóm 3 — Ghi chú nội bộ
- `CEO 2026`, `sprint`, `backlog`, `session`
- `> **Tăng tầng`, `> **Ghi chú nội bộ**`
- Ngày quyết định cụ thể trong blockquote

### Nhóm 4 — Câu chêm Anh-Việt cần Việt hóa
- `steady-state`, `platform`, `fit-out`, `business model`, `pricing`, `market share`, `roadmap`, `milestone`, `gate`, `cash flow`, `payback`, `break-even`, `commitment`, `scenario`, `sensitivity`, `first revenue`, `pipeline`, `outsource`, `support team`
- Các cụm kỹ thuật phổ biến khi đứng trong câu tiếng Việt: `training`, `hosting`, `license`, `subscription`, `digital marketing`, `account manager`, `self-service`, `community`
- Các cấu trúc cần cảnh báo: câu tiếng Việt có trên 1 từ tiếng Anh thường liên tiếp; ô bảng tiếng Việt nhưng tiêu đề/cột hoặc mô tả dùng cụm Anh không phải viết tắt.

## Quy tắc xử lý

- Nếu xuất hiện trong sections/ → FAIL, phải viết lại câu.
- Viết lại thành mô tả trạng thái cuối cùng, không đề cập thay đổi.
- Giữ nguyên số liệu canonical, chỉ thay đổi cách diễn đạt.
- Ưu tiên thay bằng tiếng Việt: ví dụ `steady-state` → `ổn định`, `cash flow` → `dòng tiền`, `payback` → `thời gian hoàn vốn`, `break-even` → `điểm hòa vốn`, `milestone` → `mốc tiến độ`, `roadmap` → `lộ trình`.
- Không đánh dấu FAIL đối với viết tắt hợp lệ (`IoT`, `BMS`, `SCADA`, `CNC`, `ERP`, `MES`, `R&D`, `NPV`, `IRR`, `DSCR`) hoặc tên riêng/tiêu chuẩn quốc tế.
