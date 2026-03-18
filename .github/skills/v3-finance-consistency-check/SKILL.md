---
name: v3-finance-consistency-check
description: Kiểm tra nhất quán số liệu tài chính canonical của V3 trên toàn bộ tài liệu markdown.
argument-hint: "[duong-dan-file-hoac-thu-muc]"
---

# V3 Finance Consistency Check

## Khi nào dùng

- Sau khi chỉnh sửa phần tài chính hoặc trước khi chốt bản nháp.

## Danh sách kiểm tra trọng yếu

- CAPEX tổng: 22.000.000 USD.
- NPV (50Y, WACC 12%): 1.500.000 USD.
- IRR (50Y): 13,0%.
- Doanh thu steady: 12.000.000 USD/năm.
- CNC: 10 máy.
- DC nội bộ: 2.500.000 USD và tỷ trọng 11,4%.

## Kết quả đầu ra

- Bảng PASS/FAIL theo từng chỉ tiêu.
- Danh sách dòng hoặc mục có sai khác để sửa ngay.
