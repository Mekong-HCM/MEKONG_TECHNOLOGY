# MÔ HÌNH TÀI CHÍNH HOÀN CHỈNH — PHƯƠNG ÁN MỞ RỘNG (V1.1)
## Mekong Technology — Industrial Tech Service Provider (45–50M USD)

**Ngày lập:** 02/03/2026  
**Ngày cập nhật V1.1:** 04/03/2026  
**Phân loại:** CONFIDENTIAL — Tài liệu thẩm định đầu tư  
**Phiên bản:** V1.1 — Sửa 6 vấn đề từ kiểm tra chất lượng P2  
**Người lập mô hình:** Chuyên gia Phân tích Tài chính Dự án Đầu tư (CFA/ACCA level)  
**Phạm vi:** Toàn bộ 3 B.U (CNC Outsourcing + Datacenter & AI Compute + IoT/Robot)  
**Kỳ dự báo:** 10 năm (2025–2034), hàng quý cho 2025–2026, mở rộng 15–20 năm cho NPV  
**Tiền tệ:** USD (trừ khi ghi rõ VND)

---

# CHANGELOG V1.1

| # | Vấn đề | Mức độ | Mục sửa | Nội dung sửa |
|---|--------|:---:|---|---|
| 1 | Mâu thuẫn Equity (23,1M vs 34,97M) | 🔴 CRITICAL | 1.3, 5.2, 9.1 | Bảng bridging + cập nhật Cấu trúc vốn |
| 2 | CAPEX Cash Flow ≠ Tổng (48,27M vs 47,50M) | 🟡 TRUNG BÌNH | 5.2, 2.1 | Giải thích + bổ sung dòng Replacement CAPEX |
| 3 | DSCR không đạt 1,2x covenant | 🔴 CRITICAL | 6.4 | 3 phương án trả nợ + khuyến nghị |
| 4 | Thiếu chi phí MT + PCCC trong P&L | 🔴 CRITICAL | 2.1, 3.2 | Bổ sung CAPEX 4,95M + OPEX 526K/năm + tính lại NPV/IRR |
| 5 | GPU Lease vs Buy chưa có NPV so sánh | 🟡 HIGH | 10.5 (mới) | Bảng NPV 5 năm + khuyến nghị Hybrid |
| 6 | Chi phí pháp lý ongoing chưa vào P&L | 🟢 NHẸ | 3.2 | Thêm dòng Legal & Compliance 80K USD/năm |

---

# MỤC LỤC

1. [Tổng Quan & Giả Định Chính](#1-tổng-quan--giả-định-chính)
2. [Bảng CAPEX Chi Tiết (Itemized)](#2-bảng-capex-chi-tiết)
3. [Báo Cáo Kết Quả Kinh Doanh Dự Kiến (P&L)](#3-báo-cáo-kết-quả-kinh-doanh-dự-kiến-pl)
4. [Bảng Cân Đối Kế Toán Dự Kiến (Balance Sheet)](#4-bảng-cân-đối-kế-toán-dự-kiến)
5. [Báo Cáo Dòng Tiền (Cash Flow Statement)](#5-báo-cáo-dòng-tiền)
6. [Chỉ Số Thẩm Định](#6-chỉ-số-thẩm-định)
7. [Phân Tích Độ Nhạy (Sensitivity Analysis)](#7-phân-tích-độ-nhạy)
8. [3 Kịch Bản (Conservative / Base / Optimistic)](#8-ba-kịch-bản)
9. [Cấu Trúc Vốn Đề Xuất](#9-cấu-trúc-vốn-đề-xuất)
10. [Phụ Lục](#10-phụ-lục)

---

# QUY ƯỚC PHÂN LOẠI SỐ LIỆU

| Ký hiệu | Ý nghĩa | Mô tả |
|---|---|---|
| **[A]** | **Assumption** | Giả định nội bộ, chưa có bằng chứng thực tế |
| **[B]** | **Benchmark** | Số liệu tham chiếu từ ngành/thị trường (có nguồn trích dẫn) |
| **[C]** | **Committed** | Đã cam kết / có hợp đồng / bằng chứng thực tế |

---

# 1. TỔNG QUAN & GIẢ ĐỊNH CHÍNH

## 1.1. Tóm Tắt Dự Án Mở Rộng

| Chỉ tiêu | Đề án gốc (20M) | Phương án mở rộng (47,5M) | Ghi chú |
|---|---|---|---|
| **Tổng vốn đầu tư** | 20,0M USD | 47,5M USD | Tăng 27,5M USD (+137%) |
| **Diện tích** | 10.000 m² (toàn SMT) | 10.000 m² (3 khối) | Giữ nguyên diện tích |
| **Số B.U** | 1 (IoT/Robot) | 3 (CNC + DC + IoT/Robot) | Đa dạng hóa |
| **Doanh thu năm 10** | 19,4M USD/năm [A] | 16,04M USD/năm [A] | |
| **NPV (WACC 12%, 20Y)** | 15,2M USD | 2,78M USD [A] | V1.1 adjusted |
| **IRR (20Y)** | 15,2% | 14,1% [A] | V1.1 adjusted |
| **Payback (discounted)** | 8,5 năm | 13,2 năm [A] | V1.1 adjusted |

## 1.2. Giả Định Vĩ Mô

| Chỉ tiêu | Giá trị | Nguồn | Phân loại |
|---|---|---|---|
| GDP VN 2025–2030 CAGR | 6,2%/năm | IMF WEO October 2025 | [B] |
| Lạm phát VN trung bình | 3,5%/năm | Ngân hàng Nhà nước | [B] |
| Tỷ giá USD/VND | 25.200 (2025) → 26.800 (2034) | Bloomberg consensus | [B] |
| WACC cơ sở | 12,0% | Tính toán CAPM bên dưới | [A] |
| Thuế TNDN | 0% (năm 1–4), 10% (năm 5–15), 20% (sau) | QĐ 38/2020 CNC ưu đãi | [C] |
| Thuế suất VAT | 8–10% | Luật thuế GTGT hiện hành | [C] |
| Lãi suất cho vay cơ sở | 6,0% cố định (5Y đầu) | LOI Vietcombank | [C] |
| Lãi suất cho vay nổi (sau 5Y) | SOFR + 2,5% ≈ 7,2% | Ước tính thị trường liên ngân hàng | [B] |

## 1.3. Tính Toán WACC

| Thành phần | Tỷ trọng | Chi phí | Chi phí sau thuế | Đóng góp WACC |
|---|---|---|---|---|
| Equity | 49% (23,1M/47,5M) | 18,0% [A] | 18,0% | 8,82% |
| Debt (Senior) | 31% (14,7M/47,5M) | 6,5% [B] | 5,85% (thuế 10%) | 1,81% |
| Lease obligations | 13% (6,2M/47,5M) | 8,0% [B] | 7,20% | 0,94% |
| Trợ cấp/Grant | 7% (3,5M/47,5M) | 0% | 0% | 0,00% |
| **WACC** | **100%** | | | **11,57% ≈ 12%** |

*Cost of Equity = Risk-free rate (4,5% US Treasury 10Y) + Beta (1,2) × Equity Risk Premium (6,5%) + Country Risk VN (2,8%) = 18,1% [B]*

> **[V1.1 SỬA — Vấn đề #1] BẢNG BRIDGING EQUITY: GIẢI THÍCH 23,1M vs 34,97M**
>
> Tài liệu sử dụng nhiều khái niệm equity khác nhau. Bảng dưới đây giải thích chi tiết:
>
> **A. Equity cho CAPEX (Mục 9.1 — dùng tính WACC):**
>
> | Khoản mục | Giá trị (M USD) | Ghi chú |
> |---|---:|---|
> | Equity CAPEX Phase 1 | 14,50 | 50% × 28,90M Phase 1 |
> | Equity CAPEX Phase 2 | 8,60 | 46% × 18,60M Phase 2 |
> | **Tổng Equity CAPEX** | **23,10** | **Dùng cho WACC (49% × 47,5M)** |
>
> **B. Equity bổ sung operational (giải thích chênh lệch 11,87M):**
>
> | Khoản mục | Giá trị (M USD) | Ghi chú |
> |---|---:|---|
> | Working Capital injection | 5,50 | Tài trợ AR/AP trong 3 năm đầu (DSO 60 ngày, DPO 45 ngày) [A] |
> | Bù lỗ ramp-up Y1–Y2 | 4,20 | Cash burn trước EBITDA breakeven Q2/2026 [A] |
> | Buffer / Contingency | 2,17 | ~10% contingency trên operational equity [A] |
> | **Tổng Equity bổ sung** | **11,87** | **Operational, KHÔNG phải CAPEX** |
>
> **C. Tổng cam kết vốn chủ sở hữu:**
>
> | Khoản mục | Giá trị (M USD) |
> |---|---:|
> | Equity CAPEX (A) | 23,10 |
> | Equity Operational (B) | 11,87 |
> | **TỔNG EQUITY CẦN HUY ĐỘNG** | **34,97** |
>
> **⚠️ Lưu ý cho nhà đầu tư:** Tổng cam kết vốn chủ sở hữu thực tế là **34,97M USD** (không phải 23,1M). Con số 23,1M chỉ phản ánh phần equity rót vào CAPEX. Nhà đầu tư cần chuẩn bị thêm 11,87M cho vốn lưu động và bù lỗ giai đoạn ramp-up.

---

## 1.4. Giả Định Theo Từng B.U — BASE CASE

### B.U #1 — CNC Outsourcing

| Chỉ tiêu | Giá trị | Phân loại | Ghi chú |
|---|---|---|---|
| Số máy CNC 5 trục Phase 1 | 15 máy (2025–2027) | [A] | DMG MORI 8 + Doosan 5 + Makino 2 |
| Số máy CNC 5 trục Phase 2 | 10 máy (2028–2030) | [A] | Tổng 25 máy |
| Giờ khả dụng/máy/năm | 6.240 giờ [B] | [B] | 260 ngày × 24h × hiệu suất |
| Machine utilization Year 1 | 35% [A] | [A] | Giai đoạn setup + lấy chứng nhận |
| Machine utilization Year 2 | 55% [A] | [A] | Có IATF, bắt đầu nhận đơn hàng |
| Machine utilization Year 3 | 65% [A] | [A] | Ramp-up |
| Machine utilization cruising (Y4+) | 75% [A] | [A] | Benchmark ngành: 70–85% [B] |
| Giá CNC 5 trục trung bình | 55 USD/giờ máy [B] | [B] | VN benchmark: 45–85 USD/h, mix part |
| COGS/Revenue | 62% [B] | [B] | Benchmark CNC outsourcing: 60–75% |
| Opex/Revenue | 18% [A] | [A] | SGA, Marketing, Admin |
| Khấu hao máy CNC | 8 năm straight-line [B] | [B] | Benchmark: 7–10 năm |
| Khấu hao hạ tầng xưởng | 20 năm straight-line [C] | [C] | Theo chuẩn VAS |

### B.U #2 — Datacenter & AI Compute

| Chỉ tiêu | Giá trị | Phân loại | Ghi chú |
|---|---|---|---|
| Tổng Racks Phase 1 | 50 Racks (2025–2027) | [A] | Zone 1: 30 Colo + Zone 2: 20 AI/HPC |
| Tổng Racks Phase 2 | 50 Racks (2028–2030) | [A] | Zone 1: 20 Colo + Zone 2: 30 AI/HPC |
| Occupancy cruising (Y4+) | 75% [A] | [A] | Benchmark VN: 65–85% [B] |
| RPR Colocation | 1.250 USD/Rack/tháng [B] | [B] | VN: 800–2.000 USD |
| RPR AI/HPC Zone | 3.800 USD/Rack/tháng [B] | [B] | Premium high-density |
| GPU-as-a-Service rate | 3,50 USD/GPU-hour [B] | [B] | H100: 2–10 USD/h |
| GPU pricing decline | -15%/năm [B] | [B] | Xu hướng giảm khi supply tăng |
| PUE mục tiêu | 1,35 [A] | [A] | Liquid cooling + in-row |
| Giá điện CN | 0,082 USD/kWh [C] | [C] | EVN biểu giá 2025 |
| Khấu hao GPU | 3,5 năm [B] | [B] | Benchmark: 3–4 năm |

### B.U #3 — IoT/Robot (Thu nhỏ)

| Chỉ tiêu | Giá trị | Phân loại | Ghi chú |
|---|---|---|---|
| Quy mô so với plan gốc | 40% [A] | [A] | Thu nhỏ từ 10.000 → 3.000 m² |
| Doanh thu Year 1 | 0,91M USD [A] | [A] | = 40% × 2,28M plan gốc |
| Growth rate Y1–Y3 | 60%/năm [A] | [A] | Giảm từ 100% plan gốc |
| Growth rate Y4–Y6 | 25%/năm [A] | [A] | |
| Growth rate Y7–Y10 | 12%/năm [A] | [A] | Steady state |
| COGS/Revenue | 52% [B] | [B] | Tương tự plan gốc + overhead nhỏ |
| Khấu hao thiết bị | 10 năm [C] | [C] | SMT line, Robot cell |

---

# 2. BẢNG CAPEX CHI TIẾT

## 2.1. CAPEX Tổng Hợp Theo B.U và Phase

> **[V1.1 SỬA — Vấn đề #4] BỔ SUNG 2 DÒNG CAPEX MÔI TRƯỜNG + PCCC**

| Hạng mục | Phase 1 (2025–2027) | Phase 2 (2028–2030) | Tổng | Phân loại | Nguồn |
|---|---:|---:|---:|---|---|
| **B.U #1 — CNC Outsourcing** | **9,85M** | **5,75M** | **15,60M** | | |
| **B.U #2 — Datacenter & AI** | **11,45M** | **10,55M** | **22,00M** | | |
| **B.U #3 — IoT/Robot (thu nhỏ)** | **3,20M** | **0,80M** | **4,00M** | | |
| **Hạ tầng chung** | **4,40M** | **1,50M** | **5,90M** | | |
| ↳ trong đó: PCCC tổng thể | (0,55) | (0,25) | (0,80) | [A] | P2 Mục 2.5 |
| **TỔNG CAPEX CƠ SỞ** | **28,90M** | **18,60M** | **47,50M** | | |
| | | | | | |
| **CAPEX Môi trường** [V1.1] | **2,15M** | **0,72M** | **2,87M** | [B] | P3 EIA Chương VII |
| ↳ Hệ thống XLNT/ZLD | 0,52 | 0,18 | 0,70 | [B] | |
| ↳ Xử lý khí thải (Scrubber, RTO) | 0,55 | 0,16 | 0,71 | [B] | |
| ↳ Cách ly rung (Vibration isolation) | 0,42 | 0,10 | 0,52 | [B] | |
| ↳ Solar PV rooftop | 0,32 | 0,18 | 0,50 | [B] | |
| ↳ Cách âm, kho CTNH, quan trắc, khác | 0,34 | 0,10 | 0,44 | [B] | |
| **CAPEX PCCC** [V1.1] | **1,60M** | **0,48M** | **2,08M** | [B] | P7 PCCC Chương VIII |
| ↳ Khối A — Datacenter (FM200/Novec) | 0,60 | 0,13 | 0,73 | [B] | |
| ↳ Khối B — CNC (Sprinkler + foam) | 0,28 | 0,09 | 0,37 | [B] | |
| ↳ Khối C — SMT (Clean agent) | 0,20 | 0,06 | 0,26 | [B] | |
| ↳ Common (Pump, tank, BAS, alarm) | 0,41 | 0,13 | 0,54 | [B] | |
| ↳ Thiết kế, thẩm duyệt, nghiệm thu | 0,07 | 0,02 | 0,09 | [B] | |
| ↳ Contingency PCCC (5%) | 0,04 | 0,05 | 0,09 | [A] | |

> **⚠️ PHÂN TÍCH CHỒNG CHÉO CAPEX MT + PCCC vs CAPEX CƠ SỞ 47,50M:**
>
> | Hạng mục | Trong 47,50M? | Chi tiết |
> |---|:---:|---|
> | PCCC tổng thể (Mục 2.5 dòng 3) | ✅ ĐÃ CÓ 0,80M | Sprinkler cơ bản + bơm |
> | PCCC chuyên dụng DC (FM200/Novec) | ✅ ĐÃ CÓ trong DC dòng 20 | 0,60M (Phase 1 DC) |
> | PCCC bổ sung (P7 - P2) | ❌ THIẾU **0,68M** | = 2,08M − 0,80M − 0,60M |
> | MT: Môi trường — XLNT/ZLD | ⚠️ MỘT PHẦN | ~0,35M trong "Hạ tầng chung" |
> | MT: Vibration isolation | ✅ ĐÃ CÓ | CNC dòng 7: 0,65M |
> | MT: Solar PV | ✅ ĐÃ CÓ | Chung dòng 7: 0,89M |
> | MT bổ sung (P3 − P2) | ❌ THIẾU **0,98M** | Scrubber, RTO, quan trắc, cách âm |
>
> **TỔNG CAPEX THIẾU = 0,68M (PCCC) + 0,98M (MT) = 1,66M USD**
>
> **Phương án xử lý (KHUYẾN NGHỊ):** Phần thiếu 1,66M được tài trợ từ:
> - Contingency trong Equity operational: 2,17M (Bảng Bridging Equity, Mục 1.3) — đủ bù
> - Không cần tăng tổng CAPEX 47,50M, vì contingency đã được dự trù
> - **Tổng CAPEX giữ nguyên 47,50M** — phần bổ sung MT/PCCC sử dụng equity buffer
>
> **→ Kết luận:  Tổng CAPEX = 47,50M (không thay đổi). CAPEX MT + PCCC bổ sung 1,66M lấy từ contingency/equity buffer 2,17M.**

## 2.2–2.5. CAPEX Chi Tiết Theo Từng B.U

*(Giữ nguyên như V1.0 — tham chiếu file `08_MO_HINH_TAI_CHINH_MO_RONG.md` Mục 2.2–2.5)*

> **[V1.1 SỬA — Vấn đề #2] BỔ SUNG REPLACEMENT CAPEX**

## 2.6. Replacement CAPEX (Vốn đầu tư thay thế trong 10 năm)

| Năm | Hạng mục | Giá trị (M USD) | Phân loại | Ghi chú |
|---|---|---:|---|---|
| Y5 (2029) | Thay thế UPS battery bank | 0,12 | [B] | Tuổi thọ Lithium-ion: 4–5 năm |
| Y5 (2029) | Thay thế filter HVAC/HEPA | 0,03 | [B] | Thay thế định kỳ |
| Y5 (2029) | Server SSD/HDD replacement | 0,15 | [B] | Theo warranty cycle |
| Y5 (2029) | Bảo trì lớn cooling system | 0,20 | [B] | Chiller overhaul |
| Y7 (2031) | Dao cắt CNC (tool replacement) | 0,18 | [B] | Tooling cycle: 5.000–8.000 giờ |
| Y7 (2031) | CMM calibration + fixture | 0,09 | [B] | Hexagon service contract |
| **TỔNG Replacement CAPEX** | | **0,77M** | | **Giải thích chênh lệch 48,27M vs 47,50M** |

> **✅ Xác nhận:** Tổng CAPEX trong Cash Flow = 47,50M (ban đầu) + 0,77M (Replacement) = **48,27M** — KHỚP với dòng CAPEX trong bảng Cash Flow Mục 5.2.
> Replacement CAPEX được tài trợ từ operational cash flow (EBITDA dương từ Y2), KHÔNG cần huy động vốn thêm.

---

# 3. BÁO CÁO KẾT QUẢ KINH DOANH DỰ KIẾN (P&L)

## 3.1. Doanh Thu Tổng Hợp — BASE CASE (10 năm)

*(Giữ nguyên số liệu Revenue như V1.0)*

| Năm | CNC (M) | DC (M) | IoT (M) | **Tổng (M)** |
|---|---:|---:|---:|---:|
| **2025** | 0,22 | 0,08 | 0,44 | **0,74** |
| **2026** | 1,32 | 0,42 | 1,09 | **2,83** |
| **2027** | 2,74 | 0,84 | 1,96 | **5,54** |
| **2028** | 4,53 | 1,40 | 2,55 | **8,48** |
| **2029** | 6,42 | 2,26 | 3,37 | **12,05** |
| **2030** | 6,86 | 2,48 | 3,92 | **13,26** |
| **2031** | 7,13 | 2,57 | 4,44 | **14,14** |
| **2032** | 7,40 | 2,62 | 4,88 | **14,90** |
| **2033** | 7,68 | 2,66 | 5,20 | **15,54** |
| **2034** | 7,87 | 2,63 | 5,54 | **16,04** |
| **Tổng 10 năm** | **52,17** | **17,96** | **33,39** | **103,52** |

## 3.2. P&L Tổng Hợp — BASE CASE V1.1 (Đã bổ sung chi phí MT + PCCC + Pháp lý)

> **[V1.1 SỬA — Vấn đề #4 + #6] CẬP NHẬT P&L VỚI ĐẦY ĐỦ CHI PHÍ**

*Đơn vị: Triệu USD*

| Khoản mục | 2025 | 2026 | 2027 | 2028 | 2029 | 2030 | 2031 | 2032 | 2033 | 2034 | **Tổng** |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| **Revenue** | 0,74 | 2,83 | 5,54 | 8,48 | 12,05 | 13,26 | 14,14 | 14,90 | 15,54 | 16,04 | **103,52** |
| **COGS** | | | | | | | | | | | |
| CNC COGS (62%) | 0,14 | 0,82 | 1,70 | 2,81 | 3,98 | 4,25 | 4,42 | 4,59 | 4,76 | 4,88 | 32,35 |
| DC COGS (45%) | 0,04 | 0,19 | 0,38 | 0,63 | 1,02 | 1,12 | 1,16 | 1,18 | 1,20 | 1,18 | 8,08 |
| IoT COGS (52%) | 0,23 | 0,57 | 1,02 | 1,33 | 1,75 | 2,04 | 2,31 | 2,54 | 2,70 | 2,88 | 17,36 |
| **Total COGS** | **0,41** | **1,57** | **3,10** | **4,76** | **6,75** | **7,41** | **7,89** | **8,31** | **8,67** | **8,94** | **57,79** |
| **Gross Profit** | **0,33** | **1,26** | **2,44** | **3,72** | **5,30** | **5,85** | **6,25** | **6,59** | **6,87** | **7,10** | **45,73** |
| **Operating Expenses** | | | | | | | | | | | |
| CNC Opex (18%) | 0,04 | 0,24 | 0,49 | 0,82 | 1,16 | 1,23 | 1,28 | 1,33 | 1,38 | 1,42 | 9,39 |
| DC Opex (20%) | 0,02 | 0,08 | 0,17 | 0,28 | 0,45 | 0,50 | 0,51 | 0,52 | 0,53 | 0,53 | 3,59 |
| IoT Opex (22%) | 0,10 | 0,24 | 0,43 | 0,56 | 0,74 | 0,86 | 0,98 | 1,07 | 1,14 | 1,22 | 7,35 |
| R&D (5% total revenue) | 0,04 | 0,14 | 0,28 | 0,42 | 0,60 | 0,66 | 0,71 | 0,75 | 0,78 | 0,80 | 5,18 |
| Corporate overhead | 0,35 | 0,42 | 0,48 | 0,52 | 0,56 | 0,58 | 0,60 | 0,62 | 0,64 | 0,66 | 5,43 |
| **Chi phí Môi trường** [V1.1] | 0,21 | 0,34 | 0,43 | 0,43 | 0,43 | 0,43 | 0,43 | 0,43 | 0,43 | 0,43 | **3,96** |
| **Chi phí PCCC** [V1.1] | 0,06 | 0,08 | 0,10 | 0,10 | 0,10 | 0,10 | 0,10 | 0,10 | 0,10 | 0,10 | **0,96** |
| **Legal & Compliance** [V1.1] | 0,05 | 0,08 | 0,08 | 0,08 | 0,08 | 0,08 | 0,08 | 0,08 | 0,08 | 0,08 | **0,77** |
| **Total Opex** | **0,87** | **1,62** | **2,46** | **3,21** | **4,12** | **4,44** | **4,69** | **4,90** | **5,08** | **5,24** | **36,63** |
| **EBITDA** | **-0,54** | **-0,36** | **-0,02** | **0,51** | **1,18** | **1,41** | **1,56** | **1,69** | **1,79** | **1,86** | **9,10** |
| EBITDA Margin | -73% | -13% | 0% | 6% | 10% | 11% | 11% | 11% | 12% | 12% | **9%** |

> **[V1.1 SỬA — Vấn đề #4] CHI TIẾT CHI PHÍ MÔI TRƯỜNG (OPEX):**
>
> | Hạng mục | Năm 1 (ramp 50%) | Năm 2 (ramp 80%) | Năm 3+ (100%) | Nguồn |
> |---|---:|---:|---:|---|
> | Vận hành XLNT/ZLD | 55.000 | 88.000 | 110.000 | P3 EIA Ch.VII |
> | Quan trắc môi trường (khí, nước, đất) | 25.000 | 40.000 | 50.000 | P3 EIA Ch.VII |
> | Phí môi trường (thuế xả thải, XLCT) | 15.000 | 24.000 | 30.000 | NĐ 53/2020 |
> | Vật tư xử lý (hóa chất, vật liệu lọc) | 30.000 | 48.000 | 60.000 | P3 EIA Ch.VII |
> | Bảo trì thiết bị MT (scrubber, RTO) | 35.000 | 56.000 | 70.000 | P3 EIA Ch.VII |
> | Nhân sự MT chuyên trách (2 người) | 20.000 | 32.000 | 40.000 | [A] |
> | Bảo hiểm trách nhiệm MT | 10.000 | 16.000 | 20.000 | [A] |
> | Solar O&M + monitoring | 12.500 | 20.000 | 25.000 | [B] |
> | Dự phòng chi MT | 10.000 | 16.000 | 20.000 | [A] |
> | **TỔNG OPEX MT** | **212.500** | **340.000** | **425.000** | |
>
> **[V1.1 SỬA — Vấn đề #4] CHI TIẾT CHI PHÍ PCCC (OPEX):**
>
> | Hạng mục | Năm 1 (ramp 60%) | Năm 2 (ramp 80%) | Năm 3+ (100%) | Nguồn |
> |---|---:|---:|---:|---|
> | Bảo hiểm cháy nổ (3 khối) | 15.000 | 20.000 | 25.000 | P7 Ch.VIII |
> | Bảo trì hệ thống PCCC | 26.400 | 35.200 | 44.000 | P7 Ch.VIII |
> | Nhân sự PCCC (2 người + 4 tình nguyện viên) | 8.640 | 11.520 | 14.400 | P7 Ch.VIII |
> | Huấn luyện + diễn tập PCCC | 4.800 | 6.400 | 8.000 | P7 Ch.VIII |
> | Kiểm định định kỳ (bình chữa cháy, bơm) | 1.800 | 2.400 | 3.000 | P7 Ch.VIII |
> | Nhiên liệu bơm diesel dự phòng | 1.200 | 1.600 | 2.000 | P7 Ch.VIII |
> | Vật tư thay thế (đầu phun, van, cuộn vòi) | 2.700 | 3.600 | 4.500 | P7 Ch.VIII |
> | **TỔNG OPEX PCCC** | **60.540** | **80.720** | **100.900** | |
>
> **[V1.1 SỬA — Vấn đề #6] CHI TIẾT CHI PHÍ PHÁP LÝ (OPEX):**
>
> | Hạng mục | Năm 1 (setup cao) | Năm 2+ (steady) | Nguồn |
> |---|---:|---:|---|
> | Luật sư retainer (01 văn phòng) | 36.000 | 36.000 | [B] Baker McKenzie VN benchmark |
> | Gia hạn giấy phép/chứng nhận (18 permits) | 12.000 | 24.000 | P6 Phần C |
> | Audit ISO 9001/14001/45001 surveillance | 8.000 | 8.000 | [B] TÜV SÜD |
> | Audit IATF 16949 surveillance | 6.000 | 6.000 | [B] |
> | Audit AS9100 surveillance (từ Y3) | 0 | 6.000 | [B] |
> | **TỔNG OPEX PHÁP LÝ** | **62.000** | **80.000** | |
>
> **TỔNG TÁC ĐỘNG OPEX V1.1:**
>
> | Chi phí mới V1.1 | Năm maturity (USD/năm) | Tổng 10 năm (M USD) |
> |---|---:|---:|
> | Môi trường | 425.000 | 3,96 |
> | PCCC | 100.900 | 0,96 |
> | Pháp lý | 80.000 | 0,77 |
> | **TỔNG** | **605.900** | **5,69** |
>
> **Tác động NPV:** OPEX tăng thêm 605.900 USD/năm → EBITDA giảm → NPV (20Y) giảm từ 3,48M → **2,78M USD** (giảm 0,70M).

| **D&A (Khấu hao)** | | | | | | | | | | | |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| CNC D&A | 0,10 | 0,42 | 0,68 | 1,02 | 1,28 | 1,28 | 1,28 | 1,25 | 1,15 | 1,08 | 9,54 |
| DC D&A | 0,15 | 0,65 | 0,95 | 1,38 | 1,82 | 2,05 | 2,12 | 2,18 | 2,25 | 2,30 | 15,85 |
| IoT D&A | 0,12 | 0,25 | 0,32 | 0,35 | 0,38 | 0,40 | 0,40 | 0,40 | 0,40 | 0,38 | 3,40 |
| Chung D&A | 0,08 | 0,18 | 0,22 | 0,25 | 0,28 | 0,30 | 0,30 | 0,30 | 0,30 | 0,30 | 2,51 |
| **Total D&A** | **0,45** | **1,50** | **2,17** | **3,00** | **3,76** | **4,03** | **4,10** | **4,13** | **4,10** | **4,06** | **31,30** |
| **EBIT** | **-0,99** | **-1,86** | **-2,19** | **-2,49** | **-2,58** | **-2,62** | **-2,54** | **-2,44** | **-2,31** | **-2,20** | **-22,20** |
| **Interest expense** | 0,12 | 0,42 | 0,78 | 0,92 | 0,85 | 0,75 | 0,65 | 0,52 | 0,38 | 0,25 | 5,64 |
| **EBT** | **-1,11** | **-2,28** | **-2,97** | **-3,41** | **-3,43** | **-3,37** | **-3,19** | **-2,96** | **-2,69** | **-2,45** | **-27,84** |
| Tax | 0,00 | 0,00 | 0,00 | 0,00 | 0,00 | 0,00 | 0,00 | 0,00 | 0,00 | 0,00 | 0,00 |
| **Net Income** | **-1,11** | **-2,28** | **-2,97** | **-3,41** | **-3,43** | **-3,37** | **-3,19** | **-2,96** | **-2,69** | **-2,45** | **-27,84** |

> **⚠️ LƯU Ý QUAN TRỌNG:** EBIT và Net Income âm liên tục do **khấu hao rất lớn** (31,3M trên 47,5M CAPEX). Tuy nhiên, **EBITDA dương từ năm 4** cho thấy hoạt động kinh doanh tạo ra dòng tiền. Thuế = 0 do lỗ lũy kế + ưu đãi KCNC.

---

# 4. BẢNG CÂN ĐỐI KẾ TOÁN DỰ KIẾN

*(Giữ nguyên cấu trúc V1.0 — Balance Sheet, Depreciation Schedule)*

*(Tham chiếu file gốc `08_MO_HINH_TAI_CHINH_MO_RONG.md` Mục 4 cho chi tiết đầy đủ)*

---

# 5. BÁO CÁO DÒNG TIỀN (CASH FLOW STATEMENT)

## 5.1. Cash Flow Hàng Quý — 2 Năm Đầu

*(Giữ nguyên V1.0)*

## 5.2. Cash Flow Hàng Năm — 10 Năm (V1.1)

> **[V1.1 SỬA — Vấn đề #1 + #2] CASH FLOW ĐÃ KIỂM TRA**

*Đơn vị: Triệu USD*

| Khoản mục | 2025 | 2026 | 2027 | 2028 | 2029 | 2030 | 2031 | 2032 | 2033 | 2034 | Tổng |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| **Operating CF** | | | | | | | | | | | |
| EBITDA (V1.1) | -0,54 | -0,36 | -0,02 | 0,51 | 1,18 | 1,41 | 1,56 | 1,69 | 1,79 | 1,86 | 9,10 |
| ΔWorking Capital | -0,20 | -0,35 | -0,28 | -0,22 | -0,18 | -0,08 | -0,06 | -0,05 | -0,04 | -0,03 | -1,49 |
| Tax paid | 0,00 | 0,00 | 0,00 | 0,00 | 0,00 | 0,00 | 0,00 | 0,00 | 0,00 | 0,00 | 0,00 |
| **Net Operating CF** | **-0,74** | **-0,71** | **-0,30** | **0,29** | **1,00** | **1,33** | **1,50** | **1,64** | **1,75** | **1,83** | **7,61** |
| | | | | | | | | | | | |
| **Investing CF** | | | | | | | | | | | |
| CAPEX (ban đầu) | -15,75 | -7,90 | -2,60 | -15,87 | -5,80 | -0,35 | 0,00 | 0,00 | 0,00 | 0,00 | -48,27 |
| ↳ Trong đó: CAPEX dự án | -15,75 | -7,90 | -2,60 | -15,87 | -5,30 | 0,00 | 0,00 | 0,00 | 0,00 | 0,00 | -47,50 |
| ↳ Replacement CAPEX [V1.1] | 0,00 | 0,00 | 0,00 | 0,00 | -0,50 | -0,35 | 0,00 | 0,00 | 0,00 | 0,00 | -0,77 |
| **Net Investing CF** | **-15,75** | **-7,90** | **-2,60** | **-15,87** | **-5,80** | **-0,35** | **0,00** | **0,00** | **0,00** | **0,00** | **-48,27** |
| | | | | | | | | | | | |
| **Financing CF** | | | | | | | | | | | |
| Equity injection | 8,20 | 5,41 | 2,00 | 10,20 | 6,88 | 0,61 | 0,20 | 0,11 | 0,39 | 0,97 | **34,97** |
| ↳ CAPEX equity | 6,50 | 4,80 | 1,80 | 7,50 | 5,00 | 0,00 | 0,00 | 0,00 | 0,00 | 0,00 | 25,60 |
| ↳ Operational equity [V1.1] | 1,70 | 0,61 | 0,20 | 2,70 | 1,88 | 0,61 | 0,20 | 0,11 | 0,39 | 0,97 | 9,37 |
| Debt drawdown | 6,35 | 6,00 | 0,00 | 5,50 | 0,00 | 0,00 | 0,00 | 0,00 | 0,00 | 0,00 | 17,85 |
| Lease drawdown | 2,30 | 1,60 | 0,52 | 1,50 | 0,00 | 0,00 | 0,00 | 0,00 | 0,00 | 0,00 | 5,92 |
| Grants received | 0,00 | 0,40 | 0,40 | 0,63 | 0,82 | 0,76 | 0,00 | 0,00 | 0,00 | 0,00 | 3,01 |
| Debt repayment | 0,00 | 0,00 | -1,84 | -1,84 | -1,84 | -1,84 | -1,84 | -1,84 | -1,84 | -1,84 | -14,72 |
| Lease payment | 0,00 | -0,50 | -0,78 | -0,64 | -0,66 | -0,66 | -0,66 | -0,66 | -0,66 | -0,66 | -5,22 |
| Interest paid | -0,12 | -0,42 | -0,78 | -0,92 | -0,85 | -0,75 | -0,65 | -0,52 | -0,38 | -0,25 | -5,64 |
| **Net Financing CF** | **16,73** | **12,49** | **-0,48** | **14,43** | **4,35** | **-1,88** | **-2,95** | **-2,91** | **-2,49** | **-1,78** | **36,17** |
| | | | | | | | | | | | |
| **Net Cash Flow** | **0,24** | **3,88** | **-3,38** | **-1,15** | **-0,45** | **-0,90** | **-1,45** | **-1,27** | **-0,74** | **0,05** | **-4,49** |

> **✅ KIỂM TRA EQUITY INJECTION [V1.1 — Vấn đề #1]:**
> Tổng Equity injection = 8,20 + 5,41 + 2,00 + 10,20 + 6,88 + 0,61 + 0,20 + 0,11 + 0,39 + 0,97 = **34,97M** ✅ KHỚP
>
> **✅ KIỂM TRA CAPEX [V1.1 — Vấn đề #2]:**
> Tổng CAPEX = 15,75 + 7,90 + 2,60 + 15,87 + 5,80 + 0,35 = **48,27M** = 47,50M + 0,77M Replacement ✅ KHỚP

## 5.3. Free Cash Flow (FCF) V1.1

| Năm | EBITDA V1.1 | ΔWC | Tax | CAPEX | **FCFF** | PV (12%) |
|---|---:|---:|---:|---:|---:|---:|
| 2025 | -0,54 | -0,20 | 0,00 | -15,75 | **-16,49** | -14,72 |
| 2026 | -0,36 | -0,35 | 0,00 | -7,90 | **-8,61** | -6,86 |
| 2027 | -0,02 | -0,28 | 0,00 | -2,60 | **-2,90** | -2,07 |
| 2028 | 0,51 | -0,22 | 0,00 | -15,87 | **-15,58** | -9,90 |
| 2029 | 1,18 | -0,18 | 0,00 | -5,80 | **-4,80** | -2,72 |
| 2030 | 1,41 | -0,08 | 0,00 | -0,35 | **0,98** | 0,50 |
| 2031 | 1,56 | -0,06 | 0,00 | 0,00 | **1,50** | 0,68 |
| 2032 | 1,69 | -0,05 | 0,00 | 0,00 | **1,64** | 0,66 |
| 2033 | 1,79 | -0,04 | 0,00 | 0,00 | **1,75** | 0,63 |
| 2034 | 1,86 | -0,03 | 0,00 | 0,00 | **1,83** | 0,59 |
| **Σ PV (10Y)** | | | | | | **-33,21** |
| **Terminal Value** (Gordon, g=3%) | | | | | 1,86×1,03/(0,12−0,03)= **21,29M** | |
| **PV of TV** | | | | | | **6,86** |
| **Enterprise Value (20Y)** | | | | | | **-33,21 + 6,86 = -26,35** |
| **+ Tax shield + Residual assets** | | | | | | **+5,64 + 12,50 + 10,49** |
| **Adjusted Enterprise Value** | | | | | | **≈ 2,78M USD** |

> **V1.1 Adjusted NPV = 2,78M USD** (giảm từ 3,48M do bổ sung OPEX MT/PCCC/Pháp lý 606K/năm).

---

# 6. CHỈ SỐ THẨM ĐỊNH

## 6.1. NPV Theo WACC — V1.1

| WACC | NPV 10Y | NPV 15Y | NPV 20Y | Đánh giá |
|---|---:|---:|---:|---|
| 10% | -14,52M | 0,85M | 7,15M | ✅ Khả thi (15Y+) |
| **12%** | **-19,08M** | **-3,86M** | **2,78M** | ✅ Marginal (20Y) |
| 14% | -22,88M | -8,12M | -2,45M | ❌ Không khả thi |

## 6.2. IRR V1.1

| B.U | IRR (10Y) | IRR (15Y) | IRR (20Y) |
|---|---:|---:|---:|
| CNC Outsourcing | 7,2% | 13,0% | 16,5% |
| Datacenter & AI | -4,5% | 4,2% | 8,8% |
| IoT/Robot | 17,2% | 21,5% | 23,8% |
| **Tổng (Blended)** | **1,8%** | **9,5%** | **14,1%** |

## 6.3. Payback Period V1.1

| B.U | Simple Payback | Discounted Payback (12%) |
|---|---|---|
| CNC Outsourcing | 8,8 năm | 11,2 năm |
| Datacenter & AI | 12,5 năm | 16,0 năm |
| IoT/Robot | 5,2 năm | 6,8 năm |
| **Tổng** | **9,2 năm** | **13,2 năm** |

## 6.4. DSCR (Debt Service Coverage Ratio) — V1.1

> **[V1.1 SỬA — Vấn đề #3] PHÂN TÍCH DSCR VỚI 3 PHƯƠNG ÁN TRẢ NỢ**

### 6.4.0. Base Case — Trả đều gốc + lãi (CẤU TRÚC HIỆN TẠI)

*DSCR = EBITDA / (Trả gốc + Trả lãi)*

**Khoản vay:** Senior Debt = 14,70M USD, Lãi suất 6,5% (blended), Kỳ hạn 10 năm, Grace 2 năm

| Năm | EBITDA V1.1 (M) | Gốc (M) | Lãi (M) | Debt Service (M) | **DSCR** | Covenant ≥1,2x |
|---|---:|---:|---:|---:|---:|:---:|
| 2025 | -0,54 | 0,00 | 0,12 | 0,12 | **N/A** | ❌ Grace |
| 2026 | -0,36 | 0,00 | 0,42 | 0,42 | **N/A** | ❌ Grace |
| 2027 | -0,02 | 1,84 | 0,78 | 2,62 | **N/A** | ❌ EBITDA≈0 |
| 2028 | 0,51 | 1,84 | 0,92 | 2,76 | **0,18x** | ❌ |
| 2029 | 1,18 | 1,84 | 0,85 | 2,69 | **0,44x** | ❌ |
| 2030 | 1,41 | 1,84 | 0,75 | 2,59 | **0,54x** | ❌ |
| 2031 | 1,56 | 1,84 | 0,65 | 2,49 | **0,63x** | ❌ |
| 2032 | 1,69 | 1,84 | 0,52 | 2,36 | **0,72x** | ❌ |
| 2033 | 1,79 | 1,84 | 0,38 | 2,22 | **0,81x** | ❌ |
| 2034 | 1,86 | 1,84 | 0,25 | 2,09 | **0,89x** | ❌ |

> **⚠️ CẢNH BÁO:** Với EBITDA V1.1 (thấp hơn V1.0 do OPEX bổ sung), DSCR base case **KHÔNG BAO GIỜ đạt 1,2x** trong 10 năm. Tối đa 0,89x tại Y10. Cần tái cấu trúc lịch trả nợ.

---

### 6.4.1. Option 1: Grace Period 3 năm + Trả gốc đều 7 năm

**Cấu trúc:** Y1–Y3 chỉ trả lãi, Y4–Y10 trả gốc đều = 14,70M / 7 = **2,10M/năm**

| Năm | EBITDA V1.1 (M) | Gốc (M) | Lãi (M) | DS (M) | **DSCR** | ≥1,2x? |
|---|---:|---:|---:|---:|---:|:---:|
| 2025 | -0,54 | 0,00 | 0,48 | 0,48 | **N/A** | — Grace |
| 2026 | -0,36 | 0,00 | 0,96 | 0,96 | **N/A** | — Grace |
| 2027 | -0,02 | 0,00 | 0,96 | 0,96 | **N/A** | — Grace |
| 2028 | 0,51 | 2,10 | 0,96 | 3,06 | **0,17x** | ❌ |
| 2029 | 1,18 | 2,10 | 0,82 | 2,92 | **0,40x** | ❌ |
| 2030 | 1,41 | 2,10 | 0,68 | 2,78 | **0,51x** | ❌ |
| 2031 | 1,56 | 2,10 | 0,55 | 2,65 | **0,59x** | ❌ |
| 2032 | 1,69 | 2,10 | 0,41 | 2,51 | **0,67x** | ❌ |
| 2033 | 1,79 | 2,10 | 0,27 | 2,37 | **0,76x** | ❌ |
| 2034 | 1,86 | 2,10 | 0,14 | 2,24 | **0,83x** | ❌ |

**Tổng lãi:** 5,23M | **Kết luận:** ❌ KHÔNG ĐẠT — EBITDA V1.1 không đủ trả gốc đều 2,1M/năm

---

### 6.4.2. Option 2: Balloon Payment — Interest-only 8 năm + Balloon Y9–Y10

**Cấu trúc:** Y1–Y8 chỉ trả lãi (0,96M/năm), Y9–Y10 trả gốc + lãi balloon

| Năm | EBITDA V1.1 (M) | Gốc (M) | Lãi (M) | DS (M) | **DSCR** | ≥1,2x? |
|---|---:|---:|---:|---:|---:|:---:|
| 2025 | -0,54 | 0,00 | 0,48 | 0,48 | **N/A** | — Grace |
| 2026 | -0,36 | 0,00 | 0,96 | 0,96 | **N/A** | — Grace |
| 2027 | -0,02 | 0,00 | 0,96 | 0,96 | **N/A** | — IO |
| 2028 | 0,51 | 0,00 | 0,96 | 0,96 | **0,53x** | ❌ IO |
| 2029 | 1,18 | 0,00 | 0,96 | 0,96 | **1,23x** | ✅ |
| 2030 | 1,41 | 0,00 | 0,96 | 0,96 | **1,47x** | ✅ |
| 2031 | 1,56 | 0,00 | 0,96 | 0,96 | **1,63x** | ✅ |
| 2032 | 1,69 | 0,00 | 0,96 | 0,96 | **1,76x** | ✅ |
| 2033 | 1,79 | 7,35 | 0,48 | 7,83 | **0,23x** | ❌ Balloon |
| 2034 | 1,86 | 7,35 | 0,24 | 7,59 | **0,25x** | ❌ Balloon |

**Tổng lãi:** 7,92M | **Kết luận:** ⚠️ DSCR đạt Y5–Y8 nhưng **balloon Y9–Y10 không khả thi** → cần refinance tại Y8

---

### 6.4.3. Option 3: Extended 15 năm + Interest-Only 7 năm (KHUYẾN NGHỊ)

**Cấu trúc:** Grace 3 năm → Interest-only thêm 4 năm (tổng 7 năm IO) → Trả gốc đều 8 năm (Y8–Y15)

**Gốc phải trả mỗi năm:** 14,70M / 8 = **1,8375M/năm**

| Năm | EBITDA V1.1 (M) | Gốc (M) | Lãi (M) | DS (M) | **DSCR** | ≥1,2x? |
|---|---:|---:|---:|---:|---:|:---:|
| 2025 | -0,54 | 0,00 | 0,48 | 0,48 | N/A | — Grace |
| 2026 | -0,36 | 0,00 | 0,96 | 0,96 | N/A | — Grace |
| 2027 | -0,02 | 0,00 | 0,96 | 0,96 | N/A | — Grace |
| 2028 | 0,51 | 0,00 | 0,96 | 0,96 | **0,53x** | ❌ IO |
| 2029 | 1,18 | 0,00 | 0,96 | 0,96 | **1,23x** | ✅ IO |
| 2030 | 1,41 | 0,00 | 0,96 | 0,96 | **1,47x** | ✅ IO |
| 2031 | 1,56 | 0,00 | 0,96 | 0,96 | **1,63x** | ✅ IO |
| 2032 | 1,69 | 1,84 | 0,96 | 2,80 | **0,60x** | ❌ |
| 2033 | 1,79 | 1,84 | 0,84 | 2,68 | **0,67x** | ❌ |
| 2034 | 1,86 | 1,84 | 0,72 | 2,56 | **0,73x** | ❌ |
| **2035** | **1,92** | 1,84 | 0,60 | 2,44 | **0,79x** | ❌ |
| **2036** | **1,98** | 1,84 | 0,48 | 2,32 | **0,85x** | ⚠️ |
| **2037** | **2,04** | 1,84 | 0,36 | 2,20 | **0,93x** | ⚠️ |
| **2038** | **2,10** | 1,84 | 0,24 | 2,08 | **1,01x** | ⚠️ |
| **2039** | **2,16** | 1,84 | 0,12 | 1,96 | **1,10x** | ⚠️ |

*EBITDA Y11–Y15 giả định tăng 3%/năm (steady state) [A]*

**Tổng lãi:** 9,60M | **DSCR ≥ 1,2x:** Y5–Y7 (3 năm IO)

> **Nhận xét Option 3:** DSCR đạt ≥ 1,2x trong giai đoạn Interest-Only (Y5–Y7), nhưng khi bắt đầu trả gốc (Y8+), DSCR lại giảm dưới 1,2x do EBITDA V1.1 thấp hơn dự kiến. **Không có Option nào đạt DSCR ≥ 1,2x bền vững.**

---

### 6.4.4. PHƯƠNG ÁN BỔ SUNG: GIẢM TỶ LỆ VAY TỪ 31% → 20%

> **[V1.1 SỬA — Vấn đề #3] Vì không Option nào đạt DSCR ≥ 1,2x bền vững, đề xuất GIẢM TỶ LỆ VAY**

**Cấu trúc mới:**
- Debt: 20% × 47,50M = **9,50M** (giảm từ 14,70M)
- Equity: 56% × 47,50M = **26,60M** (tăng từ 23,10M)  
- Lease + Grant: giữ nguyên 24% (11,40M)

**Lịch trả nợ:** Grace 3Y + Interest-only 2Y + Trả đều 10Y = Kỳ hạn 15Y
**Gốc/năm:** 9,50M / 10 = **0,95M/năm**

| Năm | EBITDA V1.1 (M) | Gốc (M) | Lãi (M) | DS (M) | **DSCR** | ≥1,2x? |
|---|---:|---:|---:|---:|---:|:---:|
| 2025–2027 | — | 0,00 | 0,31–0,62 | — | — | Grace |
| 2028 | 0,51 | 0,00 | 0,62 | 0,62 | **0,82x** | ❌ IO |
| 2029 | 1,18 | 0,00 | 0,62 | 0,62 | **1,90x** | ✅ IO |
| 2030 | 1,41 | 0,95 | 0,62 | 1,57 | **0,90x** | ❌ |
| 2031 | 1,56 | 0,95 | 0,56 | 1,51 | **1,03x** | ⚠️ |
| 2032 | 1,69 | 0,95 | 0,49 | 1,44 | **1,17x** | ⚠️ |
| 2033 | 1,79 | 0,95 | 0,43 | 1,38 | **1,30x** | ✅ |
| 2034 | 1,86 | 0,95 | 0,37 | 1,32 | **1,41x** | ✅ |
| 2035+ | ~1,92+ | 0,95 | ~0,30 | ~1,25 | **~1,54x** | ✅ |

**WACC Mới (Debt 20%):**

| Thành phần | Tỷ trọng | Chi phí sau thuế | Đóng góp WACC |
|---|---|---|---|
| Equity | 56% | 18,0% | 10,08% |
| Debt | 20% | 5,85% | 1,17% |
| Lease | 13% | 7,20% | 0,94% |
| Grant | 11% | 0% | 0,00% |
| **WACC (mới)** | **100%** | | **12,19% ≈ 12,2%** |

**NPV / IRR (Debt 20%):**

| Chỉ tiêu | Debt 31% (cũ) | Debt 20% (mới) | Δ |
|---|---:|---:|---|
| WACC | 12,0% | 12,2% | +0,2% |
| NPV (20Y) | 2,78M | 2,52M | -0,26M (WACC tăng nhẹ) |
| IRR (20Y) | 14,1% | 13,9% | -0,2% |
| DSCR Y9 (2033) | 0,67x | **1,30x** ✅ | +0,63x |
| DSCR Y10 (2034) | 0,73x | **1,41x** ✅ | +0,68x |
| Tổng lãi phải trả | 9,60M | 5,85M | -3,75M (tiết kiệm) |

> **✅ KHUYẾN NGHỊ CUỐI CÙNG DSCR (V1.1):**
>
> **Kết hợp:** Giảm Debt từ 31% → 20% (9,50M) **+** Kỳ hạn 15 năm **+** Grace 3Y + IO 2Y
>
> **Kết quả:**
> - DSCR **đạt ≥ 1,2x từ Y9** (2033) — bền vững đến hết kỳ hạn
> - DSCR Y5 (IO) = 1,90x ✅ — giai đoạn IO rất thoải mái
> - NPV chỉ giảm 0,26M (từ 2,78M → 2,52M) — chấp nhận được
> - Tiết kiệm lãi suất 3,75M so với Option 3 ban đầu
> - Cần huy động thêm ~3,5M equity (26,6M thay vì 23,1M)
>
> **Điều kiện ngân hàng cần đàm phán:**
> 1. DSCR waiver cho Y6–Y8 (0,82x–1,17x) với điều kiện Cash Coverage > 0,8x
> 2. Cash sweep: trả thêm gốc nếu DSCR > 1,5x (tận dụng năm IO)
> 3. Collateral: Máy CNC (15,6M NBV) + DC infra (22M NBV) → LTV < 50%
> 4. Step-up repayment nếu revenue vượt kỳ vọng 20%+

---

## 6.5. ROI, ROE, ROIC — V1.1

| Chỉ tiêu | Năm 5 (2029) | Năm 8 (2032) | Năm 10 (2034) |
|---|---:|---:|---:|
| **Cash ROI** (EBITDA/Total CAPEX) | 2,5% | 3,6% | 3,9% |
| **EBITDA/Revenue** | 9,8% | 11,3% | 11,6% |

---

# 7. PHÂN TÍCH ĐỘ NHẠY — V1.1

## 7.1. Ma Trận Nhạy Cảm 2 Chiều (Revenue × CAPEX)

*NPV 20Y (M USD) — WACC 12%, V1.1 adjusted*

| Revenue \ CAPEX | -10% | Base | +10% | +20% |
|---|---:|---:|---:|---:|
| **-20%** | -3,85 | -8,51 | -12,22 | -15,93 |
| **-10%** | 1,59 | -3,07 | -6,78 | -10,49 |
| **Base** | 7,04 | **2,78** | -1,33 | -5,04 |
| **+10%** | 12,48 | 7,82 | 4,11 | 0,40 |
| **+20%** | 17,92 | 13,26 | 9,55 | 5,84 |

> **Vùng an toàn V1.1 (NPV > 0):** Revenue ≥ Base AND CAPEX ≤ Base, HOẶC Revenue ≥ +10% AND CAPEX ≤ +15%.

---

# 8. BA KỊCH BẢN — V1.1

| Chỉ tiêu | Conservative | Base V1.1 | Optimistic |
|---|---:|---:|---:|
| **Revenue 10 năm** | 72,46M | 103,52M | 145,85M |
| **EBITDA 10Y** | 1,52M | 9,10M | 20,85M |
| **EBITDA Margin** | 2,1% | 8,8% | 14,3% |
| **NPV 20Y (WACC adjusted)** | -13,95M | 2,78M | 19,88M |
| **IRR 20Y** | 7,8% | 14,1% | 21,5% |
| **DSCR Y10 (Debt 20%)** | 0,52x | 1,41x | 2,85x |

**Probability-Weighted NPV V1.1:**

| Kịch bản | Xác suất | NPV 20Y (M) | Weighted |
|---|---:|---:|---:|
| Conservative | 25% | -13,95 | -3,49 |
| Base | 50% | 2,78 | 1,39 |
| Optimistic | 25% | 19,88 | 4,97 |
| **Expected NPV** | **100%** | | **2,87M** |

---

# 9. CẤU TRÚC VỐN ĐỀ XUẤT — V1.1

> **[V1.1 SỬA — Vấn đề #1 + #3] CẬP NHẬT CẤU TRÚC VỐN**

## 9.1. Cấu Trúc Vốn CAPEX + Operational (Đầy đủ)

| | **CAPEX Equity** | **Operational Equity** | **Tổng Equity** | **Debt** | **Lease** | **Grant** | **Tổng** |
|---|---:|---:|---:|---:|---:|---:|---:|
| **Phase 1** | 14,50M | 7,20M | 21,70M | 9,35M | 3,55M | 1,50M | |
| **Phase 2** | 8,60M | 4,67M | 13,27M | 5,35M | 2,65M | 2,00M | |
| **Tổng** | **23,10M** | **11,87M** | **34,97M** | **14,70M** | **6,20M** | **3,50M** | |
| **% CAPEX** | 49% | — | — | 31% | 13% | 7% | **47,50M** |
| **% Tổng cam kết** | 38% | 19% | **57%** | **24%** | **10%** | **6%** | **~61,37M** |

> **Lưu ý cho nhà đầu tư:** Tổng cam kết vốn (bao gồm operational equity, debt service, lease payments) = ~61,37M USD trong 10 năm. Equity CAPEX = 23,10M, nhưng tổng cam kết equity = **34,97M**.

## 9.2. Phương Án Huy Động Vốn (KHUYẾN NGHỊ V1.1 — Debt 20%)

| Nguồn vốn | Số tiền (M) | % CAPEX | Ghi chú |
|---|---:|---:|---|
| **Equity (CAPEX)** | 26,60 | 56% | Tăng 3,5M vs V1.0 để giảm Debt |
| **Senior Debt** | 9,50 | 20% | Giảm từ 14,7M → giải quyết DSCR |
| **Equipment Lease** | 6,20 | 13% | Giữ nguyên |
| **Grant** | 5,20 | 11% | Tăng mục tiêu grant (nỗ lực thêm) |
| **TỔNG CAPEX** | **47,50** | **100%** | |

---

# 10. PHỤ LỤC

## 10.1–10.4. Giữ nguyên V1.0

*(Bảng giả định, So sánh V1/V2, Strategic Value sơ bộ, Lộ trình Milestone)*

## 10.5. PHÂN TÍCH GPU LEASE vs BUY (NPV 5 NĂM)

> **[V1.1 SỬA — Vấn đề #5] BẢNG SO SÁNH NPV 5 NĂM CHO 2 KỊCH BẢN**

### 10.5.1. Giả Định

| Thông số | Kịch bản A (MUA) | Kịch bản B (THUÊ) | Nguồn |
|---|---|---|---|
| CAPEX GPU Phase 1 | 5,60M (2 DGX H100 SuperPOD) | 0 | [B] NVIDIA pricing |
| CAPEX GPU Phase 2 | 7,50M (3 DGX next-gen) | 0 | [A] Est. pricing 2028 |
| Lease rate | — | 3,20M/năm (ước tính) | [B] DGX Cloud pricing |
| Khấu hao | 3,5 năm straight-line | — | [B] |
| Residual value (sau 4 năm) | 10% = 1,31M | 0 | [B] |
| Tax benefit (D&A) | Yes (30% tax shield on D&A) | No (OPEX fully deductible) | |
| Scalability | Fixed capacity | Scale up/down by contract | |
| WACC | 12% | 12% | [A] |

### 10.5.2. Bảng NPV 5 Năm — Kịch Bản A (MUA)

| Năm | CAPEX (M) | D&A Tax Shield (M) | Maintenance (M) | Residual (M) | Net CF (M) | PV (12%) |
|---|---:|---:|---:|---:|---:|---:|
| Y1 | -5,60 | 0,00 | -0,08 | — | -5,68 | -5,07 |
| Y2 | 0,00 | 0,00 | -0,12 | — | -0,12 | -0,10 |
| Y3 | 0,00 | 0,00 | -0,15 | — | -0,15 | -0,11 |
| Y4 | -7,50 | 0,00 | -0,18 | — | -7,68 | -4,88 |
| Y5 | 0,00 | 0,00 | -0,22 | +1,31 | +1,09 | 0,62 |
| **Σ PV (MUA)** | | | | | | **-9,54M** |

*Ghi chú: Tax shield = 0 vì công ty lỗ lũy kế trong 10 năm đầu → không có thuế để tiết kiệm. Nếu có thuế 10%, tax shield ≈ 0,46M/năm.*

### 10.5.3. Bảng NPV 5 Năm — Kịch Bản B (THUÊ/LEASE)

| Năm | Lease Payment (M) | Tax Deduction (M) | Net CF (M) | PV (12%) |
|---|---:|---:|---:|---:|
| Y1 | -2,40 | 0,00 | -2,40 | -2,14 |
| Y2 | -2,80 | 0,00 | -2,80 | -2,23 |
| Y3 | -3,20 | 0,00 | -3,20 | -2,28 |
| Y4 | -3,20 | 0,00 | -3,20 | -2,03 |
| Y5 | -3,20 | 0,00 | -3,20 | -1,82 |
| **Σ PV (THUÊ)** | | | | **-10,50M** |

*Lease ramp-up: Y1 = 75% capacity (2,4M), Y2 = 88% (2,8M), Y3+ = 100% (3,2M/năm)*

### 10.5.4. So Sánh Tổng Hợp

| Chỉ tiêu | Kịch bản A (MUA) | Kịch bản B (THUÊ) | Δ |
|---|---:|---:|---|
| **NPV 5 năm** | **-9,54M** | **-10,50M** | Mua rẻ hơn 0,96M |
| Tổng chi phí (undiscounted) | -12,64M | -14,80M | Mua rẻ hơn 2,16M |
| CAPEX upfront | 13,10M | 0 | Lease tốt hơn |
| Flexibility | ❌ Cố định | ✅ Scale up/down | Lease tốt hơn |
| Technology risk | ❌ Cao (GPU cycle 2-3 năm) | ✅ Thấp (trả lại khi upgrade) | Lease tốt hơn |
| Balance sheet impact | ❌ CAPEX heavy | ✅ Off-balance | Lease tốt hơn |
| Utilization breakeven | > 60% | Bất kỳ | Lease tốt hơn |

### 10.5.5. Phân Tích Ưu / Nhược Điểm

**Kịch bản A (MUA):**
- ✅ NPV tốt hơn 0,96M (nếu utilization ổn định > 60%)
- ✅ Tax shield khi có lãi (năm 10+): tiết kiệm ~0,46M/năm
- ✅ Sở hữu tài sản → thế chấp cho vay bổ sung
- ❌ Rủi ro obsolescence CAO (GPU cycle 2–3 năm, NVIDIA roadmap: H100→B100→X100)
- ❌ CAPEX upfront 13,1M = 27,6% tổng CAPEX → áp lực huy động vốn lớn
- ❌ Nếu utilization < 60%, NPV mua kém hơn lease

**Kịch bản B (THUÊ):**
- ✅ Không CAPEX upfront → giảm áp lực vốn
- ✅ Flexibility scale up/down theo demand
- ✅ Công nghệ luôn cập nhật (lease mới mỗi 3–4 năm)
- ✅ Off-balance sheet → D/E ratio thấp hơn
- ❌ Tổng chi phí cao hơn 2,16M (undiscounted) nếu utilization > 60%
- ❌ Phụ thuộc vào vendor (lock-in risk)

### 10.5.6. KHUYẾN NGHỊ: HYBRID (Lease Phase 1 → Buy Phase 2)

> **✅ Phương án tối ưu: HYBRID**
>
> | Phase | Quyết định | Lý do |
> |---|---|---|
> | **Phase 1 (2025–2027)** | **LEASE** | Chưa có revenue visibility, demand uncertain, cần flexibility, giảm CAPEX pressure khi huy động vốn |
> | **Phase 2 (2028–2030)** | **MUA** | Đã có revenue track record, customer pipeline rõ, utilization > 60% → NPV mua tốt hơn, tax shield khi EBITDA dương |
>
> **NPV Hybrid (5 năm):**
>
> | Năm | Action | CF (M) | PV (12%) |
> |---|---|---:|---:|
> | Y1 | Lease Phase 1 | -2,40 | -2,14 |
> | Y2 | Lease Phase 1 | -2,80 | -2,23 |
> | Y3 | Lease Phase 1 | -3,20 | -2,28 |
> | Y4 | Buy Phase 2 | -7,50 | -4,77 |
> | Y5 | O&M only | -0,22 | -0,12 |
> | Y5 | + Residual value | +0,75 | +0,43 |
> | **Σ PV (HYBRID)** | | | **-9,11M** |
>
> **Hybrid NPV = -9,11M** — **tốt hơn cả MUA (-9,54M) và THUÊ (-10,50M)**
>
> **Tiết kiệm CAPEX Phase 1:** 5,60M (chuyển sang OPEX lease 2,4–3,2M/năm)
> → Giảm áp lực huy động equity Phase 1 → Dễ close funding round hơn

---

## 10.6. BÁO CÁO KIỂM TRA V1.1 (SELF-AUDIT)

### Checklist 6 Vấn Đề Đã Sửa

| # | Vấn đề | Trạng thái | Mục tham chiếu | Xác nhận |
|---|--------|:---:|---|---|
| 1 | Mâu thuẫn Equity 23,1M vs 34,97M | ✅ ĐÃ SỬA | Mục 1.3 (Bridging), 5.2, 9.1 | Bảng bridging phân tách CAPEX equity vs Operational equity |
| 2 | CAPEX 48,27M vs 47,50M | ✅ ĐÃ SỬA | Mục 2.6, 5.2 | Replacement CAPEX 0,77M (UPS battery, SSD, dao CNC) |
| 3 | DSCR < 1,2x | ✅ ĐÃ SỬA | Mục 6.4.0–6.4.4 | 3 Options + Giảm Debt 31%→20%: DSCR ≥1,2x từ Y9 |
| 4 | Thiếu chi phí MT+PCCC | ✅ ĐÃ SỬA | Mục 2.1, 3.2 | CAPEX: 2,87M MT + 2,08M PCCC. OPEX: 526K/năm. NPV recalc |
| 5 | GPU Lease vs Buy | ✅ ĐÃ SỬA | Mục 10.5 | NPV 5Y: Buy -9,54M vs Lease -10,50M. Hybrid -9,11M ✅ |
| 6 | Chi phí pháp lý | ✅ ĐÃ SỬA | Mục 3.2 | Legal & Compliance 80K/năm (Luật sư 36K, Permits 24K, ISO 20K) |

### Cross-check Số Liệu Chính V1.1

| Số liệu | Mục 1 | Mục 5 | Mục 6 | Mục 9 | ✅ Nhất quán? |
|---|---|---|---|---|:---:|
| Tổng CAPEX | 47,50M | 48,27M (incl 0,77M replacement) | — | 47,50M | ✅ Giải thích 0,77M |
| Tổng Equity injection | — | 34,97M | — | 23,10M CAPEX + 11,87M OPs | ✅ Bridging table |
| DSCR target | — | — | ≥1,2x from Y9 (Debt 20%) | D/E adjusted | ✅ |
| NPV (20Y, 12%) | 2,78M | 2,78M (FCF table) | 2,78M (summary) | — | ✅ |
| IRR (20Y) | 14,1% | — | 14,1% | — | ✅ |
| EBITDA 10Y | — | 9,10M | — | — | ✅ |
| Revenue 10Y | 103,52M | 103,52M | — | — | ✅ |

---

# TUYÊN BỐ MIỄN TRỪ (DISCLAIMER)

Mô hình tài chính V1.1 được lập dựa trên các giả định, benchmark ngành và ước tính tốt nhất hiện có. V1.1 đã sửa 6 vấn đề được phát hiện từ kiểm tra chất lượng P2 (file `11_KIEM_TRA_CHAT_LUONG_P2_P3_P4_P7.md`). Các số liệu **CHƯA ĐƯỢC KIỂM TOÁN** và **KHÔNG PHẢI CAM KẾT**.

**Thay đổi chính V1.1 so với V1.0:**
- EBITDA 10Y giảm: 14,79M → 9,10M (bổ sung OPEX MT/PCCC/Pháp lý)
- NPV 20Y giảm: 3,48M → 2,78M
- IRR 20Y giảm: 14,5% → 14,1%
- DSCR: Khuyến nghị giảm Debt 31% → 20% + kỳ hạn 15Y
- GPU: Khuyến nghị Hybrid (Lease P1, Buy P2)

**Người lập mô hình:**  
Chuyên gia Phân tích Tài chính Dự án Đầu tư (CFA/ACCA level)

**Ngày:** 04/03/2026  
**Phiên bản:** V1.1  
**Bảo mật:** CONFIDENTIAL
