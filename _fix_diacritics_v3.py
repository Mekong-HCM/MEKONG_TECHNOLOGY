# -*- coding: utf-8 -*-
"""Fix Vietnamese diacritics for 5 section files that were extracted without dấu."""
import os

BASE = r"c:\Users\Dell M4800\Downloads\DE_AN_MEKONG\DE_AN_MEKONG_V3\sections"

# ============================================================
# P7_NHAN_SU_TO_CHUC.md
# ============================================================
P7 = """\
# PHẦN VII: NHÂN SỰ VÀ TỔ CHỨC

---

## 7.1. Sơ đồ Tổ chức

```mermaid
graph TD
    CEO[Tổng Giám đốc<br/>CEO]
    
    CEO --> VP1[Phó GĐ Sản xuất<br/>VP Manufacturing]
    CEO --> VP2[Phó GĐ Kinh doanh<br/>VP Sales]
    CEO --> CFO[Giám đốc Tài chính<br/>CFO]
    
    VP1 --> D1[Trưởng phòng IoT/SMT]
    VP1 --> D2[Trưởng phòng CNC]
    VP1 --> D3[Trưởng phòng Robot]
    VP1 --> D4[Trưởng phòng QA/QC]
    
    VP2 --> S1[Kinh doanh IoT/BMS]
    VP2 --> S2[Kinh doanh CNC/FDI]
    VP2 --> S3[Marketing]
    
    CEO --> CTO[Giám đốc Công nghệ<br/>CTO/R&D]
    CTO --> R1[R&D IoT/Firmware]
    CTO --> R2[R&D Robot/AI]
    CTO --> R3[R&D BMS/Software]
    
    CEO --> ADM[Hành chính — Nhân sự<br/>HR & Admin]
    CEO --> IT[IT Nội bộ / DC]
```

## 7.2. Kế hoạch Nhân sự theo Giai đoạn

| Giai đoạn | Phòng ban | Số lượng | Ghi chú |
|---|---|---:|---|
| **Y0–Y1** | Ban Giám đốc + Pháp lý + Thiết kế | 8–10 | Core team |
| **Y1–Y3** | + Giám sát xây dựng + Mua sắm | 10–15 | Thêm 2–5 người |
| **Y3–Y4** | + IoT/SMT team + QA | 30–40 | Tuyển 20–25 kỹ sư + công nhân |
| **Y4–Y5** | + CNC operators + Robot team | 50–65 | Tuyển 20–25 thợ CNC + kỹ sư |
| **Y5–Y6** | + Sales + Marketing + Thêm SX | 65–80 | Mở rộng kinh doanh |
| **Y7–Y10** | + Mở rộng theo doanh thu | 85–105 | Tăng dần |
| **Y10+** | Ổn định | **100–130** | Bao gồm thời vụ |

### Nhân sự theo Bộ phận (Ổn định Y10+)

| Bộ phận | Số lượng | Tỷ lệ |
|---|---:|---:|
| Sản xuất IoT/SMT | 25–30 | 24% |
| Sản xuất CNC | 18–22 | 19% |
| Sản xuất Robot Assembly | 8–10 | 8% |
| QA/QC | 5–8 | 6% |
| R&D + Thiết kế | 12–15 | 12% |
| Bán hàng + Marketing | 8–10 | 8% |
| IT / DC nội bộ | 3–5 | 4% |
| Hành chính + Kế toán + Nhân sự | 8–10 | 8% |
| Ban Giám đốc + Quản lý | 6–8 | 6% |
| Kho + Logistics | 4–6 | 5% |
| **Tổng** | **97–124** | **100%** |

> **Chi phí nhân sự dự kiến (Y10+):** Lương bình quân 800–1.200 USD/người/tháng (tùy vị trí). Tổng quỹ lương: ~1,20–1,50M USD/năm. Tính vào OPEX mục 5.3 (nhân công trực tiếp + SGA) [A].
"""

# ============================================================
# P8_KE_HOACH_TRIEN_KHAI.md
# ============================================================
P8 = """\
# PHẦN VIII: KẾ HOẠCH TRIỂN KHAI

---

## 8.1. Phân kỳ Đầu tư 4 Giai đoạn

| Phase | Thời gian | CAPEX (M USD) | Mốc quan trọng | Nguồn vốn |
|---|---|---:|---|---|
| **Phase 0** | Q2/2026 — Q1/2027 | 1,50 | Mẫu 1.4 được duyệt, EIA hoàn thành, Giấy phép xây dựng | CSH |
| **Phase 1** | Q2/2027 — Q1/2029 | 7,15 | Hoàn công tòa nhà + nhà xưởng, Sổ đỏ | CSH |
| **Phase 2** | Q2/2029 — Q1/2031 | 10,00 | 10 máy CNC chạy, SMT line hoạt động, DC nội bộ online | CSH |
| **Phase 3** | Q2/2031 — Q1/2033 | 3,35 | Full operation 2 trụ cột, doanh thu ổn định | CSH + Vay |
| **Tổng** | **7 năm** | **22,00** | | |

## 8.2. Các mốc Quan trọng (Milestones)

| Mốc | Thời điểm | Nội dung |
|---|---|---|
| M1 | Q2/2026 | Nộp Mẫu 1.4 + Công văn đề xuất |
| M2 | Q4/2026 | Được duyệt, khởi công xây dựng |
| M3 | Q1/2029 | Hoàn công, nhận Sổ đỏ |
| M4 | Q3/2029 | Sản phẩm IoT đầu tiên xuất xưởng |
| M5 | Q1/2030 | CNC vận hành, nhận đơn hàng FDI đầu tiên |
| M6 | Q1/2031 | Robot AMR đầu tiên giao khách |
| M7 | Q1/2032 | Doanh thu đạt 8–9M USD/năm |
| M8 | Q1/2033 | Full operation, doanh thu 11–12M USD/năm |

---

## 8.3. Phân tích Rủi ro và Biện pháp Giảm thiểu

| TT | Rủi ro | Xác suất | Tác động | Biện pháp Giảm thiểu |
|:---:|---|:---:|:---:|---|
| 1 | Vượt CAPEX xây dựng | Trung bình | Cao | Hợp đồng trọn gói (lump-sum), dự phòng 7% |
| 2 | Chậm tiến độ | Trung bình | Cao | Quản lý dự án chuyên nghiệp, milestone tracking |
| 3 | Thiếu nhân sự CNC | Cao | Trung bình | Tuyển + đào tạo sớm 6 tháng trước commissioning |
| 4 | Doanh thu IoT thấp hơn kỳ vọng | Trung bình | Cao | Đa dạng hóa sản phẩm (BMS/SCADA/OEM), pipeline khách hàng |
| 5 | Cạnh tranh CNC từ Trung Quốc | Trung bình | Trung bình | Tập trung FDI cần chứng nhận ISO, local support |
| 6 | Thay đổi chính sách KCNC | Thấp | Cao | Quan hệ tốt với BQL, tuân thủ nghiêm ngặt |
| 7 | Biến động tỷ giá USD/VND | Trung bình | Trung bình | Hedge tự nhiên: doanh thu + chi phí đều USD-linked |
| 8 | Rủi ro công nghệ lỗi thời | Thấp | Trung bình | R&D liên tục (8% doanh thu), roadmap sản phẩm 3 năm |
"""

# ============================================================
# BANG_DOI_CHIEU.md
# ============================================================
BANG = """\
# BẢNG ĐỐI CHIẾU SỐ LIỆU CHÍNH THỨC — V3 (22M)

> Bảng này là **nguồn số liệu duy nhất (canonical source)** cho toàn bộ tài liệu V3. Mọi số liệu trong các mục khác PHẢI nhất quán với bảng này.

| STT | Chỉ số | Giá trị Chính thức | Đơn vị | Nhãn |
|:---:|---|---|---|:---:|
| 1 | Tổng CAPEX | 22,00 | M USD | [C] |
| 2 | Vốn CSH | 18,00 | M USD | [C] |
| 3 | Vốn vay | 4,00 | M USD | [C] |
| 4 | Tỷ lệ CSH | 81,8% | | [C] |
| 5 | Tỷ lệ vay | 18,2% | | [C] |
| 6 | Diện tích đất | 10.000 | m² | [B] |
| 7 | Tòa nhà VP | 21 × 48 m, 3 tầng | m | [C] |
| 8 | Nhà xưởng SX | 48 × 70 m | m | [C] |
| 9 | Khu Utility | 5 × 56 m | m | [C] |
| 10 | Tổng GFA | 6.664 | m² | [C] |
| 11 | Mật độ xây dựng | 46,5% | | [C] |
| 12 | DC CAPEX | 2,50 | M USD | [C] |
| 13 | DC tỷ trọng | 11,4% | | [C] |
| 14 | Số máy CNC | 10 | máy | [C] |
| 15 | Doanh thu Y5 | 2,50 | M USD | [C] |
| 16 | Doanh thu Y8 | 8,70 | M USD | [C] |
| 17 | Doanh thu Y10 | 11,00 | M USD | [C] |
| 18 | Doanh thu steady (Y12+) | 12,00 | M USD | [C] |
| 19 | Doanh thu 15Y tích lũy | ~140 | M USD | [C] |
| 20 | NPV (50Y, WACC 12%) | 1,50 | M USD | [C] |
| 21 | IRR (50Y) | 13,0% | | [C] |
| 22 | Payback (chiết khấu) | 10 | năm | [C] |
| 23 | EBITDA margin (steady) | ~30% | | [C] |
| 24 | WACC | 12% | | [C] |
| 25 | Nhân sự ổn định | 100–130 | người | [C] |
| 26 | Giá trị Chiến lược | 7,00 | M USD | [C] |
| 27 | BU1 Điện tử tỷ trọng DT | ~71% | | [C] |
| 28 | BU2 CNC tỷ trọng DT | ~29% | | [C] |
| 29 | Thuê đất KCNC | 120.000 | USD/năm | [B] |
| 30 | Miễn thuê đất | 11 | năm | [B] |
| 31 | Thuế TNDN KCNC | 10% | (chuẩn 20%) | [B] |
| 32 | Miễn thuế TNDN | 4 năm miễn + 9 năm giảm 50% | | [B] |
| 33 | Thời hạn dự án | 50 | năm | [C] |
| 34 | Thời gian đầu tư | 7 | năm (4 phase) | [C] |
| 35 | VA/Revenue | lớn hơn hoặc bằng 42% | | [C] |
| 36 | R&D/Revenue | lớn hơn hoặc bằng 8% | | [C] |

---

*File V3 Backbone — Cập nhật: 2026-03-16*
*Tác giả: Mekong Technology / CEO Review*
*Phiên bản: V3-22M-DRAFT-001*
*Nguồn gốc: Tái cấu trúc từ V2 (32M) theo định hướng CEO — giảm CAPEX, tập trung điện tử + CNC, DC nội bộ only*
"""

# ============================================================
# Write files
# ============================================================
files = {
    "P7_NHAN_SU_TO_CHUC.md": P7,
    "P8_KE_HOACH_TRIEN_KHAI.md": P8,
    "BANG_DOI_CHIEU.md": BANG,
}

for name, content in files.items():
    path = os.path.join(BASE, name)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    size = os.path.getsize(path)
    print(f"  {name}: {size} bytes")

print("Done: P7, P8, BANG_DOI_CHIEU fixed with diacritics.")
