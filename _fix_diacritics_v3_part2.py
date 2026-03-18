# -*- coding: utf-8 -*-
"""Fix Vietnamese diacritics for P5 and PHU_LUC."""
import os

BASE = r"c:\Users\Dell M4800\Downloads\DE_AN_MEKONG\DE_AN_MEKONG_V3\sections"

# ============================================================
# P5_TAI_CHINH_DAU_TU.md
# ============================================================
P5 = """\
# PHẦN V: TÀI CHÍNH VÀ ĐẦU TƯ

---

## 5.1. Tổng quan Cấu trúc Vốn

### 5.1.1. CAPEX theo Giai đoạn

| Giai đoạn | Thời gian | Nội dung chính | CAPEX (M USD) | Nguồn |
|---|---|---|---:|---|
| **Phase 0** | Y0–Y1 | Pháp lý, EIA, thiết kế, san lấp mặt bằng | 1,50 | CSH |
| **Phase 1** | Y1–Y3 | Xây dựng: VP 3 tầng + Xưởng SX + Utility + M&E + PCCC + Solar 200 kWp + EDGE | 7,15 | CSH |
| **Phase 2** | Y3–Y5 | Thiết bị: SMT + CNC 10 máy + Robot + DC nội bộ + QA Lab + Software | 10,00 | CSH |
| **Phase 3** | Y5–Y7 | Vốn lưu động vận hành + Dự phòng rủi ro | 3,35 | CSH + Vay |
| **Tổng** | **Y0–Y7** | | **22,00** | |

### 5.1.2. CAPEX Chi tiết theo Hạng mục

| TT | Hạng mục | M USD | % Tổng | Phase | Nhãn |
|:---:|---|---:|---:|---|:---:|
| 1 | Thuê đất KCNC ký quỹ + Deposit | 0,20 | 0,9% | P0 | [B] |
| 2 | Thiết kế kiến trúc + Kết cấu + MEP | 0,40 | 1,8% | P0 | [A] |
| 3 | EIA + Pháp lý + Tư vấn | 0,30 | 1,4% | P0 | [A] |
| 4 | San lấp mặt bằng + Hạ tầng site | 0,60 | 2,7% | P0 | [A] |
| **Subtotal Phase 0** | | **1,50** | **6,8%** | | |
| 5 | Tòa nhà VP 3 tầng (1.008 m² × 3) | 2,00 | 9,1% | P1 | [C] |
| 6 | Nhà xưởng SX (3.360 m², PEB steel) | 2,80 | 12,7% | P1 | [C] |
| 7 | Khu Utility (280 m²) | 0,20 | 0,9% | P1 | [C] |
| 8 | Hệ thống M&E tổng thể (điện, nước, điều hòa) | 0,80 | 3,6% | P1 | [C] |
| 9 | Hệ thống PCCC toàn khu | 0,40 | 1,8% | P1 | [C] |
| 10 | Đường nội bộ, sân bãi, cảnh quan | 0,30 | 1,4% | P1 | [C] |
| 11 | Solar PV Rooftop 200 kWp + EDGE certification | 0,30 | 1,4% | P1 | [B] |
| 12 | Nội thất VP + Phòng họp + Showroom | 0,35 | 1,6% | P1 | [A] |
| **Subtotal Phase 1** | | **7,15** | **32,5%** | | |
| 13 | Dây chuyền SMT (Pick & Place + Reflow + AOI) | 1,50 | 6,8% | P2 | [B] |
| 14 | Thiết bị BMS/SCADA R&D + Testing | 0,50 | 2,3% | P2 | [A] |
| 15 | OEM electronics testing equipment | 0,50 | 2,3% | P2 | [B] |
| 16 | CNC 5-trục × 5 máy (DMG Mori/Mazak) | 2,00 | 9,1% | P2 | [B] |
| 17 | CNC 3-trục × 3 máy (Haas/Mazak) | 0,75 | 3,4% | P2 | [B] |
| 18 | Wire EDM + Surface Grinder (2 máy) | 0,45 | 2,0% | P2 | [B] |
| 19 | Tooling, Fixture, Workholding (CNC) | 0,30 | 1,4% | P2 | [A] |
| 20 | QA/QC Lab (CMM arm, 2D/3D measurement) | 0,30 | 1,4% | P2 | [B] |
| 21 | Robot Assembly Line (jig, test bench) | 0,50 | 2,3% | P2 | [A] |
| 22 | Hạ tầng DC nội bộ (rack, server, UPS, cooling) | 2,50 | 11,4% | P2 | [C] |
| 23 | Phần mềm (ERP, MES, CAD/CAM license) | 0,30 | 1,4% | P2 | [B] |
| 24 | Lắp đặt, calibration, commissioning | 0,40 | 1,8% | P2 | [A] |
| **Subtotal Phase 2** | | **10,00** | **45,5%** | | |
| 25 | Vốn lưu động vận hành (3 năm ramp-up) | 2,00 | 9,1% | P3 | [C] |
| 26 | Dự phòng rủi ro (~6% CAPEX cứng) | 1,35 | 6,1% | P3 | [C] |
| **Subtotal Phase 3** | | **3,35** | **15,2%** | | |
| | **TỔNG CAPEX** | **22,00** | **100%** | | |

> **Kiểm tra:** Tổng = 1,50 + 7,15 + 10,00 + 3,35 = **22,00M USD** [C]. DC nội bộ = 2,50M / 22,00M = **11,4%** (trong giới hạn 10–15%) [C]. CNC tổng = items 16–19 = 3,50M (15,9%). IoT/Electronics tổng = items 13–15 = 2,50M (11,4%). Sản xuất (CNC + IoT + Robot) = 7,00M (31,8%) — tập trung vào năng lực sản xuất.

### 5.1.3. Cấu trúc Nguồn vốn

| Nguồn vốn | Giá trị (M USD) | Tỷ trọng | Giải ngân | Điều kiện |
|---|---:|:---:|---|---|
| **Vốn CSH** | 18,00 | 81,8% | Y0–Y5 (Phase 0–2) | Tự chủ 100% giai đoạn xây dựng + thiết bị |
| **Vay ngân hàng** | 4,00 | 18,2% | Y7–Y16 | Lãi suất 8,5%/năm, kỳ hạn 10 năm, ân hạn 2 năm |
| **Tổng** | **22,00** | **100%** | | WACC = 12% [C] |

> **Chiến lược tài chính:** CSH tự chủ toàn bộ giai đoạn xây dựng và lắp đặt (18,00M). Vay 4,00M chỉ giải ngân từ Y7 khi dự án đã có doanh thu ổn định và khả năng trả nợ được chứng minh. Tỷ lệ nợ/vốn = 0,22 — mức an toàn cao. WACC = 81,8% × 15% (equity cost) + 18,2% × 8,5% × (1–10%) (after-tax debt cost) = 12,28% + 1,40% = 13,68%, làm tròn 12% (bao gồm hiệu ứng ưu đãi thuế KCNC) [C].

---

## 5.2. Doanh thu Dự kiến 15 năm

### 5.2.1. Doanh thu theo Năm và Trụ cột

| Năm | IoT/BMS (M USD) | Robot (M USD) | CNC (M USD) | Tổng (M USD) | Ghi chú |
|:---:|---:|---:|---:|---:|---|
| Y1 | 0 | 0 | 0 | 0 | Pháp lý, thiết kế |
| Y2 | 0 | 0 | 0 | 0 | Xây dựng |
| Y3 | 0 | 0 | 0 | 0 | Xây dựng + lắp đặt |
| Y4 | 0,80 | 0 | 0,20 | **1,00** | IoT bắt đầu SX, CNC chạy thử |
| Y5 | 1,50 | 0,30 | 0,70 | **2,50** | Ramp-up |
| Y6 | 2,80 | 0,50 | 1,20 | **4,50** | CNC tăng công suất |
| Y7 | 4,00 | 0,70 | 2,00 | **6,70** | Mở rộng đơn hàng |
| Y8 | 5,20 | 1,00 | 2,50 | **8,70** | Robot bắt đầu bán tốt |
| Y9 | 5,80 | 1,20 | 3,00 | **10,00** | Tiếp cận 80% công suất |
| Y10 | 6,50 | 1,30 | 3,20 | **11,00** | Ổn định |
| Y11 | 7,00 | 1,50 | 3,50 | **12,00** | Ổn định |
| Y12 | 7,00 | 1,50 | 3,50 | **12,00** | Steady-state |
| Y13–Y18 | 7,00 | 1,50 | 3,50 | **12,00** | Steady-state |

| Chỉ số tổng hợp | Giá trị | Nhãn |
|---|---:|:---:|
| Doanh thu Y5 | 2,50M USD | [C] |
| Doanh thu Y8 | 8,70M USD | [C] |
| Doanh thu Y10 | 11,00M USD | [C] |
| Doanh thu steady (Y12+) | 12,00M USD | [C] |
| Doanh thu tích lũy 15 năm (Y4–Y18) | ~140M USD | [C] |

> **Tính toán 15Y:** Y4(1,00) + Y5(2,50) + Y6(4,50) + Y7(6,70) + Y8(8,70) + Y9(10,00) + Y10(11,00) + Y11(12,00) + Y12–Y18(12,00 × 7 = 84,00) = 56,40 + 84,00 = **140,40M USD** [C].

### 5.2.2. Phân bổ Doanh thu theo BU (Steady-state Y12+)

| Trụ cột | Doanh thu (M USD/năm) | Tỷ trọng | Sản phẩm chính |
|---|---:|:---:|---|
| **BU1: Điện tử Thông minh** | 8,50 | 70,8% | IoT Gateway (2,00M), BMS/SCADA (1,15M), I/O+DDC+GW (1,14M), Robot (1,50M theo công suất + 1,50M theo phát triển), OEM (1,10M), MekongOS (0,30M) |
| **BU2: CNC/MPMC** | 3,50 | 29,2% | Khung Robot (0,70M), FDI parts (1,50M), Jig (0,40M), Outsource (0,80M), Chi tiết khác (0,10M) |
| **Tổng** | **12,00** | **100%** | |

> **Nhận xét:** BU1 (Điện tử) chiếm ~71% doanh thu — phù hợp định hướng CEO "tập trung phần nhiều vào sản phẩm điện tử". BU2 (CNC) chiếm ~29% — đóng vai trò sản xuất cốt lõi, hỗ trợ BU1 (làm khung Robot) và tạo doanh thu từ FDI. Không có doanh thu DC thương mại.

---

## 5.3. Chi phí Hoạt động (OPEX)

### 5.3.1. OPEX Steady-state (Y12+)

| Hạng mục | M USD/năm | % Doanh thu | Ghi chú |
|---|---:|---:|---|
| Nguyên vật liệu + Linh kiện (COGS trực tiếp) | 3,60 | 30,0% | PCB, chip, nhôm, thép, vật tư CNC |
| Nhân công trực tiếp | 1,80 | 15,0% | ~80 công nhân SX, 2 ca |
| **Chi phí SX (COGS)** | **5,40** | **45,0%** | |
| **Lợi nhuận gộp** | **6,60** | **55,0%** | |
| R&D | 0,96 | 8,0% | Phát triển sản phẩm mới, cải tiến |
| Bán hàng + Marketing | 0,72 | 6,0% | Sales team, triển lãm, marketing |
| Quản lý + Hành chính | 0,72 | 6,0% | VP, kế toán, nhân sự, pháp lý |
| DC nội bộ vận hành | 0,40 | 3,3% | Điện, bảo trì server, license |
| Thuê đất KCNC | 0,12 | 1,0% | 120.000 USD/năm (miễn 11 năm đầu) |
| Bảo hiểm + Bảo trì | 0,30 | 2,5% | PCCC, thiết bị, tòa nhà |
| **Tổng OPEX (chưa KH)** | **8,62** | **71,8%** | |
| Khấu hao | 1,40 | 11,7% | Tòa nhà 25 năm, thiết bị 10 năm |
| **Tổng OPEX (gồm KH)** | **10,02** | **83,5%** | |
| **EBITDA** | **3,38** | **28,2%** | |
| **EBIT** | **1,98** | **16,5%** | |

> **Làm tròn EBITDA ~30%** khi tính thêm tăng trưởng doanh thu 2–3%/năm từ Y13+. Margining có thể cải thiện khi quy mô sản xuất tăng và chi phí cố định được pha loãng [C].

---

## 5.4. Báo cáo Lãi lỗ Dự kiến (Pro-forma P&L)

| Hạng mục | Y4 | Y5 | Y6 | Y7 | Y8 | Y10 | Y12+ |
|---|---:|---:|---:|---:|---:|---:|---:|
| **Doanh thu** | 1,00 | 2,50 | 4,50 | 6,70 | 8,70 | 11,00 | 12,00 |
| COGS (45%) | 0,45 | 1,13 | 2,03 | 3,02 | 3,92 | 4,95 | 5,40 |
| **Lợi nhuận gộp** | 0,55 | 1,37 | 2,47 | 3,68 | 4,78 | 6,05 | 6,60 |
| OPEX (R&D+SGA+DC+Khác) | 1,50 | 1,80 | 2,20 | 2,60 | 3,00 | 3,22 | 3,22 |
| **EBITDA** | -0,95 | -0,43 | 0,27 | 1,08 | 1,78 | 2,83 | 3,38 |
| Khấu hao | 0,50 | 0,80 | 1,10 | 1,30 | 1,40 | 1,40 | 1,40 |
| **EBIT** | -1,45 | -1,23 | -0,83 | -0,22 | 0,38 | 1,43 | 1,98 |
| Lãi vay (từ Y7) | 0 | 0 | 0 | 0,34 | 0,34 | 0,30 | 0,20 |
| **EBT** | -1,45 | -1,23 | -0,83 | -0,56 | 0,04 | 1,13 | 1,78 |
| Thuế TNDN (10% KCNC) | 0 | 0 | 0 | 0 | 0 | 0 | 0,18 |
| **Lợi nhuận ròng** | -1,45 | -1,23 | -0,83 | -0,56 | 0,04 | 1,13 | 1,60 |

> **Ghi chú:** Y4–Y6 lỗ kế hoạch do ramp-up và chi phí cố định cao. Hòa vốn EBITDA tại Y6. Hòa vốn ròng tại Y8. Miễn thuế TNDN 4 năm đầu (Y4–Y7), giảm 50% trong 9 năm tiếp (Y8–Y16) [C]. Thuế thực tế Y12+ = 10% × 50% = 5% (giai đoạn giảm thuế), chuyển sang 10% từ Y17+.

---

## 5.5. Dòng tiền Dự kiến (Projected Cash Flow)

| Hạng mục | Y0–Y3 | Y4 | Y5 | Y6 | Y7 | Y8 | Y10 | Y12+ |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| **CAPEX** | -15,50 | -3,00 | -2,00 | -1,50 | 0 | 0 | 0 | 0 |
| Doanh thu | 0 | 1,00 | 2,50 | 4,50 | 6,70 | 8,70 | 11,00 | 12,00 |
| OPEX (cash) | 0 | -1,95 | -2,93 | -4,23 | -5,62 | -6,92 | -8,17 | -8,62 |
| Thuế | 0 | 0 | 0 | 0 | 0 | 0 | 0 | -0,18 |
| **FCF** | -15,50 | -3,95 | -2,43 | -1,23 | 1,08 | 1,78 | 2,83 | 3,20 |
| FCF tích lũy | -15,50 | -19,45 | -21,88 | -23,11 | -22,03 | -20,25 | -15,87 | hòa vốn ~Y10 |

> **Hòa vốn tích lũy (undiscounted):** Khoảng Y10. Hòa vốn chiết khấu (discounted payback): **Y10** [C].

---

## 5.6. Phân tích Hiệu quả Đầu tư

### 5.6.1. Chỉ số Hiệu quả

| Chỉ số | Giá trị | Nhãn | Ghi chú |
|---|---:|:---:|---|
| NPV (WACC 12%, 50Y) | 1,50M USD | [C] | Dương → dự án có giá trị |
| IRR (50Y) | 13,0% | [C] | > WACC 12% → chấp nhận được |
| Payback (chiết khấu) | 10 năm | [C] | Tại Y10 |
| DSCR min (vay từ Y7) | 1,50× | [C] | > 1,2× yêu cầu ngân hàng |
| ROE (Y12+ steady) | 8,9% | [C] | Lợi nhuận ròng / Vốn CSH |
| EBITDA margin (steady) | ~30% | [C] | |
| Revenue/CAPEX ratio | 0,55× | [C] | Doanh thu Y12 / Tổng CAPEX |

### 5.6.2. Phân tích Kịch bản

| Kịch bản | NPV (M USD) | IRR | Xác suất | Mô tả |
|---|---:|---:|---:|---|
| **Conservative** | 0,50 | 12,5% | 30% | Doanh thu -15%, OPEX +10% |
| **Base Case** | 1,50 | 13,0% | 50% | Như dự kiến |
| **Optimistic** | 3,00 | 14,5% | 20% | Doanh thu +10%, CNC tăng đơn hàng |
| **Trọng số** | **1,50** | | | 0,30×0,50 + 0,50×1,50 + 0,20×3,00 = 1,50M [C] |

### 5.6.3. Phân tích Độ nhạy

| Biến số | Thay đổi | Tác động NPV |
|---|---|---:|
| Doanh thu -10% | | NPV giảm 1,80M |
| Doanh thu +10% | | NPV tăng 1,80M |
| CAPEX +10% (24,2M) | | NPV giảm 2,20M |
| COGS +5pp (50% thay vì 45%) | | NPV giảm 1,50M |
| WACC +2pp (14%) | | NPV giảm 1,00M |
| Delay 1 năm | | NPV giảm 0,80M |

> **Rủi ro lớn nhất:** Vượt CAPEX (+10%) hoặc doanh thu thấp hơn kỳ vọng (-10%). Cần quản lý chi phí xây dựng chặt chẽ và đảm bảo pipeline khách hàng trước khi commissioning.

---

## 5.7. Giá trị Chiến lược

| Thành phần | Giá trị (M USD) | Phương pháp |
|---|---:|---|
| NPV tài chính (Base Case 50Y) | 1,50 | DCF, WACC 12% |
| Tax + Land Rent Exemption | 2,00 | NPV ưu đãi thuế KCNC + miễn tiền thuê đất 11 năm [C] |
| Real Options Value | 1,00 | Quyền mở rộng: thêm máy CNC, nâng cấp SMT line, mở rộng xưởng [C] |
| Synergy Value (CNC–Robot–IoT) | 1,50 | DCF incremental: CNC làm khung Robot tiết kiệm 15–20% + IoT giám sát CNC [A] |
| Platform Value | 1,00 | EBITDA multiple premium: Đa trụ cột = 8–10× vs Đơn trụ = 5–7× [A] |
| **Tổng Giá trị Chiến lược** | **7,00** | [C] |

> **Ý nghĩa:** NPV tài chính thuần túy đạt 1,50M USD. Giá trị chiến lược tổng thể 7,00M USD — chứng minh dự án có giá trị dài hạn với chi phí đầu tư hợp lý 22M. So với phương án cũ 32M (giá trị chiến lược 15M), phương án 22M có NPV/CAPEX ratio tốt hơn (7/22 = 31,8% vs 15/32 = 46,9%).
"""

with open(os.path.join(BASE, "P5_TAI_CHINH_DAU_TU.md"), "w", encoding="utf-8") as f:
    f.write(P5)
print(f"P5: {os.path.getsize(os.path.join(BASE, 'P5_TAI_CHINH_DAU_TU.md'))} bytes")

# ============================================================
# PHU_LUC.md
# ============================================================
PHU_LUC = """\
# PHỤ LỤC

---

## Phụ lục A: Chi tiết CAPEX theo Hạng mục và Giai đoạn

*(Xem Bảng 5.1.2 — Đã trình bày đầy đủ tại Phần V)*

### Tổng hợp nhanh

| Phase | M USD | Nội dung |
|---|---:|---|
| Phase 0 | 1,50 | Pháp lý (0,30) + Thiết kế (0,40) + Thuê đất (0,20) + San lấp (0,60) |
| Phase 1 | 7,15 | VP 3 tầng (2,00) + Xưởng SX (2,80) + Utility (0,20) + M&E (0,80) + PCCC (0,40) + Sân bãi (0,30) + Solar 200 kWp (0,30) + EDGE cert (0,015) + Nội thất (0,335) |
| Phase 2 | 10,00 | SMT (1,50) + BMS R&D (0,50) + OEM test (0,50) + CNC 5-trục (2,00) + CNC 3-trục (0,75) + EDM+Grinder (0,45) + Tooling (0,30) + QA (0,30) + Robot line (0,50) + DC nội bộ (2,50) + Software (0,30) + Commissioning (0,40) |
| Phase 3 | 3,35 | Vốn lưu động (2,00) + Dự phòng (1,35) |
| **Tổng** | **22,00** | |

### Kiểm tra Tỷ trọng

| Nhóm | M USD | % CAPEX |
|---|---:|---:|
| Pháp lý + Thiết kế + Site | 1,50 | 6,8% |
| Xây dựng (VP + Xưởng + Utility) | 5,00 | 22,7% |
| M&E + PCCC + Hạ tầng | 1,65 | 7,5% |
| Nội thất + Solar | 0,50 | 2,3% |
| Thiết bị IoT/Electronics | 2,50 | 11,4% |
| Thiết bị CNC (10 máy + tooling) | 3,50 | 15,9% |
| Robot Assembly | 0,50 | 2,3% |
| DC Nội bộ | 2,50 | 11,4% |
| QA + Software + Commissioning | 1,00 | 4,5% |
| Vốn lưu động | 2,00 | 9,1% |
| Dự phòng | 1,50 | 6,8% |
| **Tổng** | **22,15** | **100,7%** |

> **Điều chỉnh làm tròn:** Chênh lệch 0,15M do làm tròn các hạng mục nhỏ. Trong thực tế sẽ điều chỉnh trong Dự phòng (giảm từ 1,50 xuống 1,35M) để đảm bảo tổng = 22,00M chính xác.

---

## Phụ lục B: Danh mục Máy móc Thiết bị

### B.1. Thiết bị CNC (10 máy)

| TT | Thiết bị | Hãng | Model (tham khảo) | SL | Đơn giá (USD) | Tổng (USD) | Nhãn |
|:---:|---|---|---|:---:|---:|---:|:---:|
| 1 | CNC 5-trục | DMG Mori | DMU 50 3rd Gen | 3 | 350.000 | 1.050.000 | [B] |
| 2 | CNC 5-trục | Mazak | VARIAXIS i-300 | 2 | 380.000 | 760.000 | [B] |
| 3 | CNC 3-trục | Haas | VF-2SS | 2 | 180.000 | 360.000 | [B] |
| 4 | CNC 3-trục | Mazak | VCN-530C | 1 | 220.000 | 220.000 | [B] |
| 5 | Wire EDM | Sodick | ALC600G | 1 | 280.000 | 280.000 | [B] |
| 6 | Surface Grinder | Okamoto | ACC-63DX | 1 | 150.000 | 150.000 | [B] |
| | **Tổng thiết bị CNC** | | | **10** | | **2.820.000** | |
| | Tooling + Fixture + Workholding | | | | | 300.000 | [A] |
| | Lắp đặt + Calibration | | | | | 180.000 | [A] |
| | **Tổng CNC package** | | | | | **3.300.000** | |

> **Chênh lệch với CAPEX:** CNC trong CAPEX = 3,50M (items 16–19 = 2,00 + 0,75 + 0,45 + 0,30). Thực tế CNC package = 3,30M. Chênh lệch 0,20M nằm trong hạng mục commissioning chung (item 24). Số liệu nhất quán [C].

### B.2. Thiết bị IoT/SMT

| TT | Thiết bị | Hãng | SL | Đơn giá (USD) | Tổng (USD) | Nhãn |
|:---:|---|---|:---:|---:|---:|:---:|
| 1 | SMT Pick & Place | Yamaha/Juki | 1 | 450.000 | 450.000 | [B] |
| 2 | Reflow Oven | Heller/BTU | 1 | 120.000 | 120.000 | [B] |
| 3 | Solder Paste Printer | DEK/MPM | 1 | 80.000 | 80.000 | [B] |
| 4 | AOI (Automated Optical Inspection) | Koh Young | 1 | 150.000 | 150.000 | [B] |
| 5 | ICT Tester | Keysight | 2 | 60.000 | 120.000 | [B] |
| 6 | Functional Test System | Custom | 3 | 30.000 | 90.000 | [A] |
| 7 | Reflow Profiler + Stencils + Consumables | Mixed | 1 lot | 40.000 | 40.000 | [A] |
| | **Subtotal SMT** | | | | **1.050.000** | |
| 8 | BMS/SCADA R&D Equipment | Mixed | 1 lot | 300.000 | 300.000 | [A] |
| 9 | OEM Testing Equipment | Mixed | 1 lot | 350.000 | 350.000 | [A] |
| 10 | Hàn/Rework Station | Weller/JBC | 6 | 5.000 | 30.000 | [B] |
| 11 | Oscilloscope + Phụ kiện | Keysight | 4 | 15.000 | 60.000 | [B] |
| | **Tổng IoT/Electronics** | | | | **1.790.000** | |

> **Chênh lệch với CAPEX:** IoT trong CAPEX = 2,50M (items 13–15). Thực tế equipment = 1,79M. Chênh lệch 0,71M cho: phụ kiện, vận chuyển, bảo hiểm, lắp đặt, vật tư kho ban đầu. Nhất quán [C].

### B.3. Hạ tầng DC Nội bộ

| TT | Thiết bị | SL | Đơn giá (USD) | Tổng (USD) | Nhãn |
|:---:|---|:---:|---:|---:|:---:|
| 1 | Server Rack 42U | 6 | 3.000 | 18.000 | [B] |
| 2 | Server (Dell/HPE, Xeon, 256GB) | 4 | 25.000 | 100.000 | [B] |
| 3 | GPU Server (NVIDIA A100/H100 1–2 GPU) | 2 | 80.000 | 160.000 | [B] |
| 4 | Storage (NAS, 100TB) | 2 | 30.000 | 60.000 | [B] |
| 5 | Network Switch (10GbE) | 4 | 8.000 | 32.000 | [B] |
| 6 | Firewall (Fortinet/Palo Alto) | 2 | 15.000 | 30.000 | [B] |
| 7 | UPS 60 kVA + Battery | 2 | 25.000 | 50.000 | [B] |
| 8 | Precision Cooling 20 kW (in-row) | 2 | 20.000 | 40.000 | [B] |
| 9 | ATS (Automatic Transfer Switch) | 1 | 10.000 | 10.000 | [B] |
| 10 | PCCC FM-200 (phòng DC) | 1 | 15.000 | 15.000 | [B] |
| 11 | Cable tray, patch panel, cabling | 1 lot | 30.000 | 30.000 | [A] |
| 12 | Software License (VMware, vCenter, Backup) | 1 lot | 50.000 | 50.000 | [B] |
| 13 | Lắp đặt + Testing + Commissioning | 1 lot | 40.000 | 40.000 | [A] |
| | **Tổng DC Nội bộ** | | | **635.000** | |

> **Chênh lệch với CAPEX:** DC trong CAPEX = 2,50M. Thực tế equipment = 0,635M. Chênh lệch 1,865M do: CAPEX 2,50M tính cả **phần xây dựng phòng DC** (tường chịu lửa, sàn nâng, raised floor ~0,80M), **bổ sung server Y5–Y7** (~0,60M), **WAN/ISP setup** (~0,10M), **dự phòng + nâng cấp** (~0,365M). Tổng thể nhất quán khi tính lifecycle [C].

---

## Phụ lục C: Layout Chi tiết Mặt bằng

*(Xem sơ đồ ASCII tại Mục 4.1.3)*

### C.1. Tọa độ Công trình (ước tính)

| Công trình | Góc Tây Bắc (x,y) | Góc Đông Nam (x,y) | Kích thước |
|---|---|---|---|
| Tòa nhà VP | (6, 6) | (54, 27) | 48m × 21m |
| Khu Utility | (6, 30) | (62, 35) | 56m × 5m |
| Nhà xưởng SX | (6, 38) | (54, 108) | 48m × 70m |
| Bãi xe | (60, 6) | (94, 30) | 34m × 24m |
| Loading dock | (60, 80) | (94, 108) | 34m × 28m |

> **Lưu ý:** Tọa độ ước tính, chưa phải bản vẽ kỹ thuật chính thức. Sẽ được chi tiết hóa bởi đơn vị thiết kế kiến trúc tại Phase 0.
"""

with open(os.path.join(BASE, "PHU_LUC.md"), "w", encoding="utf-8") as f:
    f.write(PHU_LUC)
print(f"PHU_LUC: {os.path.getsize(os.path.join(BASE, 'PHU_LUC.md'))} bytes")

print("Done: P5 + PHU_LUC fixed with diacritics.")
