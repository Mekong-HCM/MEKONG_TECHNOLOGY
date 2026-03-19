---
name: v3-final-qc-report
description: Tạo báo cáo QC cuối theo checklist V3 trước khi chốt bản trình duyệt.
argument-hint: "[duong-dan-master-v3]"
---

# V3 Final QC Report

## Khi nào dùng

- Ở cuối Phase D hoặc trước khi gửi bản chính thức.

## Nội dung báo cáo

1. Tình trạng nhất quán số liệu canonical.
2. Tình trạng loại bỏ nội dung DC thương mại.
3. Tình trạng định dạng số Việt, đơn vị, ngôn ngữ có dấu.
4. Tình trạng thuần Việt: không chêm tiếng Anh trong cùng câu, cùng bullet, cùng ô bảng; chỉ chấp nhận viết tắt, tên riêng, mã sản phẩm và thuật ngữ đã giải nghĩa ở phụ lục.
5. Tình trạng đủ các phần và phụ lục theo kế hoạch.
6. Kết luận PASS/FAIL và danh sách việc cần sửa.

## Kiểm tra bổ sung bắt buộc

- Rà các cụm lai như `steady-state`, `platform`, `fit-out`, `business model`, `pricing`, `roadmap`, `milestone`, `cash flow`, `payback`, `break-even`, `commitment`, `scenario`, `sensitivity`, `Monte Carlo`, `first revenue`, `gate` khi chúng xuất hiện trong câu tiếng Việt.
- Phân biệt ngoại lệ hợp lệ: `IoT`, `BMS`, `SCADA`, `CNC`, `ERP`, `MES`, `R&D`, `ISO 9001`, `EDGE`, `LOTUS`, `DSCR`, `NPV`, `IRR`.
