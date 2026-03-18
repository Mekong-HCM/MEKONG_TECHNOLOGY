# DE_AN_MEKONG_V3 — FOLDER CHÍNH THỨC PHƯƠNG ÁN 22M USD

> Đây là folder CHÍNH THỨC chứa toàn bộ tài liệu Phương án V3 (22M USD) của Dự án Mekong Technology Hub.
> KHÔNG được để file V3 trong folder `DE_AN_MEKONG_V2/` — hai phương án phải tách biệt hoàn toàn.
> Cập nhật: 2026-03-16

---

## THÔNG TIN DỰ ÁN

| Thông tin | Giá trị |
|---|---|
| Tên | Mekong Technology Hub — Phương án 22M |
| Địa điểm | Lô E2-03, Đường D1, KCNC TP.HCM |
| Diện tích | 1 ha (10.000 m2) |
| CAPEX | 22.000.000 USD (4 phases / 7 năm) |
| 2 Trụ cột | Điện tử Thông minh (IoT/BMS/Robot) + CNC/MPMC |
| Nhà đầu tư | Công ty TNHH Mekong Technology |
| Thời gian | 50 năm (01/2025 — 12/2075) |

---

## CẤU TRÚC FOLDER

```
DE_AN_MEKONG_V3/
  MEKONG_DE_AN_V3_22M_MASTER.md   — File MASTER chính thức (958+ dòng)
  README.md                         — File này — hướng dẫn folder
  YEU_CAU_GOC_V3.md                — Yêu cầu gốc của CEO (không được sửa)
  SO_LIEU_CO_DINH_V3.md            — Số liệu cố định (canonical data)
  SO_SANH_V2_V3.md                 — Bảng so sánh V2 (32M) vs V3 (22M)
  DANH_MUC_THIEU_V3.md             — Danh mục các phần còn thiếu cần bổ sung
  KE_HOACH_V3_IMPLEMENTATION.md    — Kế hoạch triển khai chi tiết
  CAP_NHAT_THONG_BAO_SHTP_2026.md  — Phân tích Thông báo KCNC 2026 & gap analysis
```

---

## QUY TẮC LÀM VIỆC VỚI FOLDER NÀY

### File MASTER chính thức (CANONICAL SOURCE)
- **ĐÚNG:** `DE_AN_MEKONG_V3/MEKONG_DE_AN_V3_22M_MASTER.md`
- **SAI:** Bất kỳ file V3 nào nằm ngoài folder này

### Thứ tự ưu tiên đọc file
1. `DE_AN_MEKONG_V3/MEKONG_DE_AN_V3_22M_MASTER.md` — Nguồn sự thật duy nhất
2. `DE_AN_MEKONG_V3/SO_LIEU_CO_DINH_V3.md` — Cross-reference số liệu
3. `DE_AN_MEKONG_V3/YEU_CAU_GOC_V3.md` — Ràng buộc của CEO
4. `DE_AN_MEKONG_V2/MEKONG_DE_AN_V2_MASTER.md` — Chỉ tham khảo (KHÔNG phải nguồn V3)

### Quy tắc sửa file
1. Chỉ sửa file `.md` trong folder này
2. Số liệu cố định (SO_LIEU_CO_DINH_V3.md) chỉ được sửa khi có sự đồng ý của CEO
3. Yêu cầu gốc (YEU_CAU_GOC_V3.md) TUYỆT ĐỐI KHÔNG SỬA
4. Sau mỗi thay đổi MASTER, kiểm tra nhất quán với SO_LIEU_CO_DINH_V3.md
5. Ghi log thay đổi vào cuối SO_LIEU_CO_DINH_V3.md (mục 8. LỊCH SỬ THAY ĐỔI)

---

## TRẠNG THÁI HIỆN TẠI

| Phần | Trạng thái | Ghi chú |
|---|---|---|
| Trang bìa + Thông tin Dự án | ĐÃ CÓ | Hoàn thành |
| Tóm tắt Điều hành | ĐÃ CÓ | Hoàn thành |
| Phần IV: Hạ tầng Kỹ thuật | ĐÃ CÓ | Hoàn thành (layout, CNC, SMT, DC, M&E, PCCC) |
| Phần V: Tài chính và Đầu tư | ĐÃ CÓ | Hoàn thành (CAPEX, Revenue, OPEX, P&L, CF, NPV/IRR) |
| Phần VII: Nhân sự và Tổ chức | ĐÃ CÓ | Hoàn thành (sơ đồ, kế hoạch) |
| Phần VIII: Kế hoạch Triển khai | XƯƠNG SỐNG | Cần bổ sung chi tiết |
| Phần IX: Kết luận | XƯƠNG SỐNG | Cần bổ sung chi tiết |
| Net Zero 2045 + NLTT 20% | ĐÃ CÓ | Cam kết #10, #11 trong MASTER (cập nhật 03/2026) |
| Công trình xanh EDGE | ĐÃ CÓ | Cam kết #12, tham chiếu trong layout Tòa nhà VP + NX |
| Nộp hồ sơ điện tử | ĐÃ CÓ | Cam kết #13 — dichvucong.gov.vn |
| Phần I: Bối cảnh và Thị trường | CHƯA CÓ | Cần viết mới |
| Phần II: Sản phẩm và Công nghệ | CHƯA CÓ | Cần viết mới |
| Phần III: Mô hình Kinh doanh | CHƯA CÓ | Cần viết mới |
| Phần VI: Pháp lý và Môi trường | CHƯA CÓ | Cần viết mới |
| Cơ sở Pháp lý | CHƯA CÓ | Cần viết mới |
| Phụ lục A, B, C | ĐÃ CÓ | Hoàn thành (CAPEX, thiết bị, layout) |
| Phụ lục D+ | CHƯA CÓ | Cần phát triển |

---

## LIÊN QUAN

| Folder | Nội dung | Mục đích |
|---|---|---|
| `DE_AN_MEKONG_V2/` | Phương án cũ 32M USD | Tham khảo cấu trúc, KHÔNG đọc làm nguồn V3 |
| `TAI_LIEU_GOC/` | Tài liệu gốc theo danh mục | Tham khảo |
| `HO_SO_MO_RONG_REVIEW/` | File phân tích mở rộng | Tham khảo |
| `TRINH_BAY_KCNC/` | Tài liệu trình bày KCNC | Cần cập nhật cho V3 |

---

*Cập nhật: 2026-03-17*
*Tạo bởi: Agent Giám Đốc Dự Án*
