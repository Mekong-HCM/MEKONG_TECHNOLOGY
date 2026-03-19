---
name: v3-mermaid-inventory
description: Kiểm kê biểu đồ Mermaid hiện có và thiếu trong DE_AN_MEKONG_V3 sections.
argument-hint: "[duong-dan-thu-muc-sections]"
---

# V3 Mermaid Inventory

## Khi nào dùng

- Trước khi bổ sung biểu đồ vào sections.
- Khi kiểm tra coverage biểu đồ toàn đề án.

## Danh sách biểu đồ chuẩn (19 biểu đồ)

| # | File | Biểu đồ | Loại |
|---|------|---------|------|
| 1 | P2 | Sơ đồ cây sản phẩm 2 trụ cột | flowchart TD |
| 2 | P2 | Lộ trình sản phẩm theo năm | gantt |
| 3 | P3 | Mô hình kinh doanh tổng quan | flowchart LR |
| 4 | P3 | Chuỗi giá trị doanh nghiệp | flowchart LR |
| 5 | P4 | Quy trình CNC (QC gates) | flowchart TD |
| 6 | P4 | Quy trình SMT (QC gates) | flowchart TD |
| 7 | P4 | Sơ đồ hệ thống điện 1-line | flowchart TD |
| 8 | P4 | Kiến trúc BMS | flowchart TD |
| 9 | P5 | Cơ cấu CAPEX | pie |
| 10 | P5 | Doanh thu theo năm | xychart-beta |
| 11 | P5 | Dòng tiền lũy kế | xychart-beta |
| 12 | P6 | Tác động kinh tế xã hội | mindmap |
| 13 | P7 | Ma trận rủi ro | quadrantChart |
| 14 | P8 | Sơ đồ tổ chức | flowchart TD |
| 15 | P8 | Lộ trình tuyển dụng | gantt |
| 16 | P9 | Gantt tổng tiến độ | gantt |
| 17 | TOM_TAT | Infographic tổng quan | flowchart LR |
| 18 | P4 | Quy trình lắp ráp Robot | flowchart TD |
| 19 | P5 | Biểu đồ điểm hòa vốn | xychart-beta |

## Quy tắc

- Kiểm đếm code block ` ```mermaid ` trong từng file.
- So khớp với danh sách chuẩn, đánh dấu CÓ/THIẾU.
- Phát hiện ASCII art (box drawing characters) cần chuyển đổi.
