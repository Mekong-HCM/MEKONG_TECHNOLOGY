# PROMPT TỔNG THỂ — TRIỂN KHAI ĐỀ ÁN V3 (22M USD)

> **Đây là LỆNH DUY NHẤT gửi đến toàn bộ đội ngũ Agent.**
> **Mỗi Agent đọc phần của mình, thực hiện đúng Sprint được giao, ghi kết quả vào MASTER V3.**
> Ngày phát lệnh: 2026-03-16
> Người phát lệnh: Giám Đốc Dự Án (Agent 1)

---

## MỤC TIÊU

Chuyển đổi Đề án Mekong Technology từ **Phương án Gốc (32M, 3 trụ cột)** sang **Phương án V3 (22M, 2 trụ cột)**. File output duy nhất:

```
DE_AN_MEKONG_V3/MEKONG_DE_AN_V3_22M_MASTER.md
```

**Trạng thái hiện tại:** 2.116 dòng (backbone). **Mục tiêu:** 10.000–12.000 dòng (~300 trang A4).

---

## FILE NGUỒN BẮT BUỘC ĐỌC (TẤT CẢ AGENT)

| File | Đường dẫn | Số dòng | Vai trò |
|---|---|---:|---|
| Đề án Gốc (32M) | `DE_AN_MEKONG_V3/MEKONG_DE_AN_Gốc.md` | 12.752 | **NGUỒN CHÍNH** — copy/chỉnh từ đây |
| V3 MASTER hiện tại | `DE_AN_MEKONG_V3/MEKONG_DE_AN_V3_22M_MASTER.md` | 2.116 | Xương sống — bổ sung vào đây |
| Số liệu Cố định V3 | `DE_AN_MEKONG_V3/SO_LIEU_CO_DINH_V3.md` | 137 | Số liệu canonical — KHÔNG sửa |
| Yêu cầu CEO | `DE_AN_MEKONG_V3/YEU_CAU_GOC_V3.md` | 102 | Ràng buộc — KHÔNG sửa |
| Kế hoạch Triển khai | `DE_AN_MEKONG_V3/KE_HOACH_V3_IMPLEMENTATION.md` | 554 | Bản đồ chi tiết từng Sprint |
| So sánh V2 vs V3 | `DE_AN_MEKONG_V3/SO_SANH_V2_V3.md` | 113 | Tham chiếu sự khác biệt |
| Quy tắc Trình bày | `DE_AN_MEKONG_V3/QUY_TAC_TRINH_BAY_V3.md` | 572 | Định dạng bắt buộc |

---

## SỐ LIỆU CỐ ĐỊNH V3 — TẤT CẢ AGENT PHẢI TUÂN THỦ

| Chỉ tiêu | Giá trị | Đơn vị |
|---|---:|---|
| Tổng CAPEX | 22.000.000 | USD |
| Vốn CSH | 18.000.000 | USD (81,8%) |
| Vốn vay | 4.000.000 | USD (18,2%, từ Y7, @ 8,5%) |
| NPV (50Y, WACC 12%) | 1.500.000 | USD |
| IRR (50Y) | 13,0 | % |
| Breakeven (chiết khấu) | 10 | năm |
| Doanh thu Y10 | 11.000.000 | USD |
| Doanh thu steady (Y12+) | 12.000.000 | USD/năm |
| Doanh thu 15Y tích lũy | ~140.000.000 | USD |
| EBITDA margin | ~30 | % |
| DSCR min | 1,50 | x |
| Giá trị Chiến lược | 7.000.000 | USD |
| Diện tích lô đất | 10.000 | m² |
| Tổng GFA | 6.664 | m² |
| Footprint | 4.648 | m² (46,5%) |
| DC nội bộ CAPEX | 2.500.000 | USD (11,4%) |
| Số máy CNC | 10 | máy |
| Nhân sự ổn định | 100–130 | người |
| Số trụ cột | 2 | (Điện tử + CNC) |
| BU1 Doanh thu steady | 8.500.000 | USD/năm (70,8%) |
| BU2 Doanh thu steady | 3.500.000 | USD/năm (29,2%) |

---

## NGUYÊN TẮC CHUNG — ÁP DỤNG TẤT CẢ AGENT

1. **TIẾNG VIỆT CÓ DẤU** — Toàn bộ nội dung phải viết tiếng Việt có dấu đầy đủ (Unicode). Phần V, VII, VIII, IX trong MASTER hiện tại KHÔNG CÓ DẤU → phải sửa lại khi viết.
2. **KHÔNG EMOJI** — Tuyệt đối không dùng emoji trong tài liệu.
3. **SỐ LIỆU NHẤT QUÁN** — Mọi con số PHẢI khớp với bảng Số liệu Cố định V3 ở trên. Dùng dấu phẩy thập phân kiểu Việt: `22,00M USD` (KHÔNG phải `22.00M`).
4. **NHÃN DỮ LIỆU** — Mọi số liệu tài chính gắn nhãn [C] (Calculated), [B] (Benchmarked), hoặc [A] (Assumed).
5. **QUY TẮC 70-20-10** — 70% giữ nguyên từ Gốc, 20% điều chỉnh, 10% viết mới. KHÔNG tự suy diễn thông tin không có trong nguồn.
6. **KHÔNG LƯỢC BỎ** — Mỗi section output >= 50% số dòng section gốc tương ứng.
7. **GHI NHẬN NGUỒN** — Khi viết xong, ghi rõ: "Nguồn: MEKONG_DE_AN_Goc.md dòng X–Y".
8. **CẤM LẬP TRÌNH** — Chỉ được tạo/sửa file `.md`. Không chạy code, script, runtime.

---
---

# PHASE A: NỀN TẢNG (4 Sprint song song)

> Bốn Agent thực hiện đồng thời — không phụ thuộc nhau.

---

## SPRINT T-1 — CHUYÊN GIA CÔNG NGHỆ (Agent 5)

### Nhiệm vụ: Viết lại Phần II — Sản phẩm và Công nghệ (3→2 trụ cột)

**Input:** Đọc Phần II trong `MEKONG_DE_AN_Goc.md` (Dòng 1347–2889, ~1.543 dòng)
**Output mục tiêu:** ~1.400 dòng, ghi vào MASTER V3 Phần II (thay thế nội dung hiện tại từ dòng heading `# PHẦN II` đến trước `# PHẦN III`)

**Cấu trúc bắt buộc:**

```
## 2.1. Tổng quan Hệ sinh thái Sản phẩm
  → Giữ 70% từ gốc, sửa "3 trụ cột" → "2 trụ cột"
  → Bỏ mọi đề cập DC thương mại, GPU-aaS, colocation
  → Bảng 14 sản phẩm (thay vì 18), xóa 6 SP Datacenter:
    XÓA: SaaS Cloud, PaaS, GPU-aaS, Colocation, MekongSoft, AI Training Service

## 2.2. Trụ cột 1 — Điện tử Thông minh (IoT/BMS/Robot)
  → GIỮ NGUYÊN 100% thông số kỹ thuật IoT từ gốc:
    - ARM Cortex-A78, 8GB RAM, 5G-ready
    - LiDAR 3D, SLAM, 500-1000 kg payload
  → TĂNG CƯỜNG BMS/SCADA — thêm bảng chi tiết:
    - MK-EIO: DI16/DO16/AI8/AO4, Modbus RTU, -20~70°C
    - MK-DDC: 24 điểm (basic) / 64 điểm (pro), BACnet/IP, PID loop
    - MK-GW: 4 loại (BACnet, Modbus, OPC-UA, LoRa)
    - MekongBMS: Web-based, 10.000 điểm, ASHRAE Guideline 36
  → Giữ nguyên MK-200, MK-300, Robot AMR, Robot AGV specs

## 2.3. Trụ cột 2 — Chế tạo Cơ khí Siêu Chính xác (CNC/MPMC)
  → GIỮ gốc + NÂNG CẤP 6 máy → 10 máy
  → Bảng 10 máy chi tiết:
    | # | Máy | Hãng | Trục | Hành trình | Dung sai | Tốc độ trục | Giá ước tính |
    5 x DMG Mori NLX/DMU (5-trục)
    3 x Haas VF-2SS/ST-20 (3-trục)
    1 x Sodick AQ325L (Wire EDM)
    1 x Okamoto ACC-63ST (Surface Grinder)
  → Diện tích CNC zone: 1.500 m² (thay vì 800 m²)
  → Bổ sung: CAD/CAM workflow, QC Zeiss CMM, Robot loading

## 2.4. Datacenter Nội bộ
  → VIẾT MỚI, TỐI ĐA 80 dòng
  → 5-8 rack 42U, 30-50 kW, UPS 60 kVA, FM-200
  → Chức năng: ERP (SAP B1), MES, AI training cho Robot, backup
  → KHÔNG đề cập: GPU-aaS, colocation, Tier III, giấy phép viễn thông

## 2.5. Hệ sinh thái Tích hợp 2 Trụ cột
  → Điều chỉnh sơ đồ synergy: CNC sản xuất khung cho Robot, IoT điều khiển CNC
  → Bỏ mọi synergy liên quan DC thương mại

## 2.6. Lộ trình Trưởng thành Công nghệ (TRL)
  → Bỏ TRL cho sản phẩm DC, giữ IoT/CNC TRL

## 2.7. R&D
  → Bỏ R&D AI/HPC/GPU, tăng R&D BMS firmware, embedded systems, CNC process
```

**Lưu ý quan trọng:**
- KHÔNG tự bịa thông số kỹ thuật — chỉ lấy từ Gốc hoặc ghi [A] nếu giả định
- Giữ nguyên mọi bảng Mermaid diagram nếu có, chỉ sửa nội dung
- CNC: Giữ nguyên tiêu chuẩn ISO 9001:2015, dung sai ≤5μm

---

## SPRINT M-1 — CHUYÊN GIA THỊ TRƯỜNG (Agent 6)

### Nhiệm vụ: Viết lại Phần I — Bối cảnh và Thị trường (bỏ DC market)

**Input:** Đọc Phần I trong `MEKONG_DE_AN_Goc.md` (Dòng 602–1346, ~745 dòng)
**Output mục tiêu:** ~600 dòng, ghi vào MASTER V3 Phần I

**Cấu trúc bắt buộc:**

```
## 1.1. Bối cảnh Kinh tế — Công nghệ Toàn cầu
  → GIỮ 90% từ gốc
  → Bỏ xu hướng cloud/DC/AI infrastructure, giữ Industry 4.0, IoT, smart manufacturing

## 1.2. Bối cảnh Việt Nam và Vai trò KCNC TP.HCM
  → GIỮ 95% — rất ít liên quan DC
  → Giữ nguyên: QĐ 10/2007, NQ 98/2023, chính sách KCNC

## 1.3. Thị trường IoT, BMS và Robot
  → GIỮ 100% gốc + TĂNG CƯỜNG
  → Thêm: Thị trường BMS Việt Nam (TAM, SAM, CAGR), SCADA trong công nghiệp
  → Thêm: Xu hướng smart building tại KCNC/KCN
  → Ghi nhãn [B] cho mọi số liệu thị trường, kèm nguồn

## 1.4. Thị trường Gia công Cơ khí Chính xác  
  → GIỮ 100% + TĂNG CƯỜNG
  → Thêm: Demand từ FDI (Samsung, Intel, Bosch) tại Việt Nam
  → Thêm: Benchmark 10 máy vs đối thủ (năng suất, tải)
  → Số liệu CNC outsourcing market Việt Nam

## 1.5. [XÓA TOÀN BỘ — Thị trường DC và AI]
  → KHÔNG viết section 1.5 về DC
  → Section 1.5 trong V3 = Định vị Cạnh tranh (đẩy lên)

## 1.5. Định vị Cạnh tranh Tổng thể (đánh số lại)
  → Điều chỉnh: So sánh với đối thủ trên 2 trụ cột (không phải 3)
  → Bỏ so sánh với CMC, FPT, Viettel IDC
  → Giữ so sánh CNC (Misumi, Thinksmart) và IoT (Vingroup, VNPT)
  → Ma trận cạnh tranh 2 chiều: IoT capability vs CNC precision
```

---

## SPRINT L-1 — CHUYÊN GIA PHÁP LÝ & MÔI TRƯỜNG (Agent 4)

### Nhiệm vụ: Điều chỉnh Phần VI — Pháp lý, Môi trường, An toàn

**Input:** Đọc Phần VI trong `MEKONG_DE_AN_Goc.md` (Dòng 5152–5558, ~407 dòng)
**Output mục tiêu:** ~350 dòng, ghi vào MASTER V3 Phần VI (thay thế nội dung hiện tại)

**Cấu trúc bắt buộc:**

```
## 6.1. Khung Pháp lý Áp dụng
  → Giữ 12/15 luật từ gốc
  → XÓA: Luật Viễn thông 2023, QCVN cho DC thương mại, QC IDC
  → Giữ: Luật Đầu tư 2020, Luật XD, Luật BVMT 2020, NĐ 31/2021, QĐ 38/2020

## 6.2. Chiến lược Pháp lý 2 Trụ cột
  → Điều chỉnh 3→2 trụ cột
  → Bỏ toàn bộ phần pháp lý DC thương mại (GP Viễn thông, GP vận hành DC)
  → Giữ: GP đầu tư, GP XD, GP PCCC, Chứng nhận ISO

## 6.3. Lộ trình Giấy phép
  → 18 GP gốc → ~12 GP
  → XÓA 5-6 GP liên quan DC: GP Viễn thông (Bộ TTTT), GP vận hành DC,
    GP cung cấp dịch vụ cloud, Chứng nhận Tier, GP phát xạ sóng

## 6.4. Đánh giá Tác động Môi trường (ĐTM) — V3
  → Theo NĐ 08/2022/NĐ-CP, Luật BVMT 2020
  → XÓA ĐTM phần DC: cooling tower 2-4 MW, GHG từ diesel backup lớn
  → GIỮ ĐTM CNC: kim loại nặng, bụi, dầu cắt gọt, ZLD (Zero Liquid Discharge)
  → GIỮ ĐTM chung: xây dựng, tiếng ồn, chất thải rắn

## 6.5. An toàn Lao động
  → GIỮ 90% từ gốc, bỏ phần an toàn DC (UPS phòng server lớn)

## 6.6. Net Zero 2045 và Năng lượng Tái tạo
  → XÓA cam kết PUE < 1,35 (không còn DC thương mại)
  → Giảm GHG target (bỏ phần DC 2-4 MW)
  → Giữ: Solar 100 kWp, LED, BMS tiết kiệm năng lượng
```

---

## SPRINT W-1 — CHUYÊN GIA TÀI LIỆU (Agent 3)

### Nhiệm vụ: Cập nhật Trang bìa + Mục lục + Thông tin Dự án + Cơ sở Pháp lý

**Input:** Đọc phần đầu `MEKONG_DE_AN_Goc.md` (Dòng 1–601, ~600 dòng) + MASTER V3 hiện tại (Dòng 1–540)
**Output mục tiêu:** ~300 dòng, cập nhật trực tiếp vào MASTER V3 từ đầu file đến hết Cơ sở Pháp lý

**Nhiệm vụ chi tiết:**

```
1. TRANG BÌA:
  → Sửa: 32M → 22M, 3 trụ cột → 2 trụ cột
  → Sửa: GFA 21.000 → 6.664 m², 7.000 m² footprint → 4.648 m²
  → Bỏ: "Điện toán Đám mây AI" khỏi tiêu đề phụ

2. MỤC LỤC:
  → Bỏ Section 1.5 (DC market) — đánh lại số
  → Bỏ Section 2.4 (DC MACC) — thay bằng DC nội bộ (ngắn)
  → Bỏ Section 4.2 (DC zone) — đánh lại số
  → Bỏ Phụ lục S (Vận hành DC MACC)
  → Cập nhật số lượng phụ lục: 44 → ~35

3. THÔNG TIN DỰ ÁN:
  → Cập nhật TOÀN BỘ số liệu theo SO_LIEU_CO_DINH_V3.md
  → Bảng 14 sản phẩm (thay vì 18)
  → 4 giai đoạn đầu tư (thay vì 5)

4. CƠ SỞ PHÁP LÝ:
  → Giữ 12 văn bản pháp lý, bỏ Luật Viễn thông 2023
  → Ma trận áp dụng: 2 trụ cột + DC nội bộ
```

**KIỂM TRA SAU KHI VIẾT:**
- Mục lục khớp 100% với heading thực tế
- Không emoji
- Tiếng Việt có dấu đầy đủ
- Số liệu khớp SO_LIEU_CO_DINH_V3.md

---

## KẾT THÚC PHASE A → QC BATCH 1
> Agent 7 (Kiểm Tra Chất Lượng) kiểm tra 4 sprint trên trước khi sang Phase B.

---
---

# PHASE B: HẠ TẦNG + TÀI CHÍNH (3 Sprint song song)

> Phụ thuộc Phase A: Agent 5 cần T-1 xong mới làm T-2. Agent 2 bắt đầu F-1 (song song với T-2).

---

## SPRINT T-2 — CHUYÊN GIA CÔNG NGHỆ (Agent 5)

### Nhiệm vụ: Viết lại Phần IV — Hạ tầng Kỹ thuật (layout mới, M&E tính lại)

**Input:** Đọc Phần IV trong `MEKONG_DE_AN_Goc.md` (Dòng 3601–4440, ~840 dòng) + MASTER V3 (Phần IV đã có backbone ~340 dòng)
**Output mục tiêu:** ~900 dòng (bổ sung ~560 dòng vào backbone)

**Cấu trúc bắt buộc:**

```
## 4.1. Quy hoạch Tổng mặt bằng
  → THIẾT KẾ MỚI hoàn toàn (V2 = 1 tòa, V3 = 3 công trình)
  → Bảng diện tích: VP 1.008 m² x 3 tầng, Xưởng 3.360 m², Utility 280 m²
  → Quy hoạch giao thông nội bộ, cây xanh 2.000 m² (20%)
  → Sơ đồ layout (ASCII hoặc Mermaid)

## 4.2. Tòa nhà Văn phòng 3 Tầng (21m x 48m)
  → Tầng 1: Sảnh, phòng họp, showroom
  → Tầng 2: R&D Lab IoT, R&D Lab BMS, phòng thí nghiệm
  → Tầng 3: Văn phòng, đào tạo, hội nghị

## 4.3. Nhà xưởng Sản xuất (48m x 70m)
  → CNC zone: 1.500 m², 10 máy, nền chịu lực 5 tấn/m²
  → IoT/SMT zone: 800 m², cleanroom ISO 8
  → Robot assembly: 400 m²
  → DC nội bộ: 160 m², CRAC, FM-200
  → QA Lab: 200 m², Zeiss CMM
  → Kho: 300 m²

## 4.4. Khu Utility (5m x 56m)
  → Xử lý nước CNC (ZLD), biến áp, tủ điện chính, máy nén khí

## 4.5. Hệ thống Điện Tổng hợp
  → Tổng tải: 550 kW (KHÔNG phải 3 MVA như V2)
  → Solar 100 kWp on-roof
  → UPS 60 kVA (cho DC + IT)
  → Máy phát diesel dự phòng 500 kVA
  → Bảng phân tải: CNC 250 kW, IoT/SMT 80 kW, DC 50 kW, VP 100 kW, Utility 70 kW

## 4.6. Hệ thống PCCC
  → QCVN 06:2022/BXD
  → FM-200 cho DC, sprinkler cho xưởng, hydrant ngoài trời
  → Bỏ PCCC DC lớn (gas suppression 50 rack)

## 4.7. Hệ thống Nước và Xử lý Chất thải
  → ZLD cho CNC (dầu cắt, kim loại nặng)
  → Bỏ cooling tower DC (tiết kiệm 200 m³/ngày)
  → Nước sinh hoạt, nước mưa tái sử dụng

## 4.8. An toàn Lao động Công trình
  → Giữ 90% từ gốc, bỏ phần an toàn DC lớn
```

---

## SPRINT F-1 — CHUYÊN GIA TÀI CHÍNH (Agent 2)

### Nhiệm vụ: Tính lại toàn bộ Phần V — Tài chính (5.1–5.9), thay thế bản không dấu hiện tại

**Input:** Đọc Phần V trong `MEKONG_DE_AN_Goc.md` (Dòng 4441–5151, ~711 dòng) + V3 MASTER (Phần V hiện tại ~220 dòng, KHÔNG DẤU)
**Output mục tiêu:** ~700 dòng TIẾNG VIỆT CÓ DẤU, thay thế toàn bộ Phần V hiện tại

**SỐ LIỆU BẮT BUỘC (từ SO_LIEU_CO_DINH_V3.md):**

| Chỉ tiêu | Giá trị |
|---|---|
| CAPEX | 22,00M USD |
| Vốn CSH | 18,00M USD (81,8%) |
| Vay | 4,00M USD (từ Y7, @ 8,5%) |
| NPV (50Y, WACC 12%) | 1,50M USD |
| IRR (50Y) | 13,0% |
| Breakeven | 10 năm |
| Doanh thu Y10 | 11,00M USD |
| Doanh thu steady | 12,00M USD/năm |
| EBITDA margin | ~30% |
| DSCR min | 1,50x |
| Giá trị Chiến lược | 7,00M USD |

**Cấu trúc bắt buộc:**

```
## 5.1. Tổng quan Cấu trúc Vốn
  → CAPEX 22M: Phase 0 (1,50M) + Phase 1 (7,15M) + Phase 2 (10,00M) + Phase 3 (3,35M)
  → Bảng phân bổ CAPEX theo hạng mục: Xây dựng, M&E, Thiết bị CNC, Thiết bị IoT, DC nội bộ, Khác

## 5.2. Doanh thu Dự kiến 15 năm
  → Bảng doanh thu per-BU (BU1: Điện tử 8,50M, BU2: CNC 3,50M)
  → Bảng doanh thu Y1–Y15 chi tiết
  → Doanh thu 15Y tích lũy: ~140M USD

## 5.3. Chi phí Hoạt động (OPEX)
  → OPEX steady: ~8,40M USD/năm (EBITDA margin ~30%)
  → Bảng: Nhân sự, nguyên vật liệu, năng lượng, bảo trì, thuê đất (120K/năm), khác

## 5.4. Báo cáo Lãi lỗ Dự kiến (Pro-forma P&L)
  → Bảng P&L: Y1, Y3, Y5, Y8, Y10, Y15
  → Revenue - COGS - Gross Profit - OPEX - EBITDA - D&A - EBIT - Tax - Net Income

## 5.5. Dòng tiền Dự kiến (Projected Cash Flow)
  → Bảng CF: Operating CF, Investing CF, Financing CF, Net CF, Cumulative CF
  → Breakeven cumulatif tại Y10

## 5.6. Phân tích Hiệu quả Đầu tư
  → 5.6.1 NPV = 1,50M USD, IRR = 13,0%, Payback = 10 năm
  → 5.6.2 Phân tích Độ nhạy (NPV vs WACC, vs Revenue ±20%)
  → 5.6.3 Monte Carlo: P(NPV>0) = 65% [C]

## 5.7. Giá trị Chiến lược
  → Strategic Value = 7,00M USD
  → Phương pháp: Giá trị vượt NPV từ hệ sinh thái, thương hiệu, network effect

## 5.8. Cấu trúc Nợ và DSCR (VIẾT MỚI)
  → Vay 4,00M từ Y7, lãi 8,5%, kỳ hạn 10 năm
  → Bảng DSCR Y7–Y17, DSCR min = 1,50x

## 5.9. Phân tích Rủi ro Tài chính (VIẾT MỚI)
  → Top 5 rủi ro: Chậm doanh thu, vượt CAPEX, tỷ giá, lãi suất, thiếu đơn hàng
  → Ma trận rủi ro + biện pháp giảm thiểu
```

**LƯU Ý QUAN TRỌNG:**
- VIẾT TIẾNG VIỆT CÓ DẤU — phần V hiện tại không dấu, phải viết lại hoàn toàn
- Mọi số liệu phải gắn nhãn [C], [B], hoặc [A]
- Dấu phẩy thập phân: 22,00M (KHÔNG 22.00M)
- Sau khi viết, grep kiểm tra tất cả số liệu cố định

---

## SPRINT M-2 — CHUYÊN GIA THỊ TRƯỜNG (Agent 6)

### Nhiệm vụ: Viết lại Phần III — Mô hình Kinh doanh (3→2 trụ cột)

**Input:** Đọc Phần III trong `MEKONG_DE_AN_Goc.md` (Dòng 2890–3600, ~711 dòng) + MASTER V3 hiện tại
**Output mục tiêu:** ~550 dòng, ghi vào MASTER V3 Phần III (thay thế nội dung hiện tại)

**Cấu trúc bắt buộc:**

```
## 3.1. Tổng quan Mô hình Doanh thu
  → 2 trụ cột: BU1 (70,8%) + BU2 (29,2%) = 12M/năm steady
  → Bỏ BU3 DC (GPU-aaS, colocation, cloud)

## 3.2. Khách hàng Mục tiêu
  → Bỏ segment GPU/cloud customer
  → Tăng: FDI CNC customers (Samsung, Intel, Bosch, Continental)
  → Giữ: IoT integrator, BMS contractor, KCN/tòa nhà smart building

## 3.3. Chiến lược Phát triển Theo Giai đoạn
  → 3 giai đoạn (Build, Grow, Scale) — bỏ DC ramp-up

## 3.4. Đối tác Chiến lược và BMC
  → Giữ Business Model Canvas, sửa 3→2 trụ cột

## 3.5. Chiến lược Giá (Pricing)
  → Giữ IoT/BMS pricing, giữ CNC pricing
  → Bỏ DC pricing (rack/kW/month)

## 3.6–3.11. (Giữ cấu trúc V3 hiện tại)
  → Cập nhật số liệu nếu cần
  → Bảng Doanh thu 15 năm khớp với Phần V
```

---

## KẾT THÚC PHASE B → QC BATCH 2
> Agent 7 kiểm tra 3 sprint (T-2, F-1, M-2) trước khi sang Phase C.

---
---

# PHASE C: PHỤ LỤC + BỔ SUNG (Sprint nặng)

> Phase dài nhất — bổ sung toàn bộ phụ lục và các phần còn thiếu.

---

## SPRINT F-2 — CHUYÊN GIA TÀI CHÍNH (Agent 2)

### Nhiệm vụ: Bổ sung Phần V (5.10–5.17) + Phần VII Nhân sự

**Output mục tiêu:** ~400 dòng bổ sung

```
## 5.10. Vốn Lưu động (Working Capital)
## 5.11. Lịch Trả nợ Chi tiết
## 5.12. Cân đối Kế toán Dự kiến (Balance Sheet Snapshot Y5, Y10, Y15)
## 5.13. Thuế và Ưu đãi (TNDN 10%/15 năm, miễn 4, giảm 9)
## 5.14. Định giá Doanh nghiệp (Valuation Y10, Y15)
## 5.15. Breakeven per-BU
## 5.16. Dashboard Chỉ số Tài chính
## 5.17. So sánh V2 (32M) vs V3 (22M) — Tài chính

Phần VII: Nhân sự (SỬA LẠI CÓ DẤU)
## 7.1. Sơ đồ Tổ chức — bỏ phòng DC Operations
## 7.2. Kế hoạch Nhân sự — 100-130 người, bỏ cột DC
```

---

## SPRINT F-3 — CHUYÊN GIA TÀI CHÍNH (Agent 2)

### Nhiệm vụ: Phụ lục Tài chính (A, F, G, I, J, N, O, EE, MM, U)

**Input:** Phụ lục tương ứng trong `MEKONG_DE_AN_Goc.md` (~2.200 dòng)
**Output mục tiêu:** ~1.800 dòng

```
Phụ lục A: CAPEX chi tiết theo hạng mục — TÍNH LẠI 22M
Phụ lục F: Bảng Đối chiếu Số liệu — TÍNH LẠI
Phụ lục G: Tài chính per-BU — 2 BU (bỏ DC P&L)
Phụ lục I: Bảng Giả định — V3
Phụ lục J: Chỉ số Đầu tư Tổng hợp — V3
Phụ lục N: DSCR và Cấu trúc Nợ — vay 4M thay vì 8M
Phụ lục O: Giá trị Chiến lược — 7M thay vì 15M
Phụ lục EE: Dòng tiền Chi tiết 50 năm — V3
Phụ lục MM: KPI Dashboard — V3
Phụ lục U: Monte Carlo — V3
```

---

## SPRINT T-3 — CHUYÊN GIA CÔNG NGHỆ (Agent 5)

### Nhiệm vụ: Phụ lục Kỹ thuật Nhóm 1 (D, L, Q, T, NN)

**Input:** Phụ lục tương ứng trong Gốc (~2.000 dòng)
**Output mục tiêu:** ~1.700 dòng

```
Phụ lục D: Danh mục Máy móc — 10 máy CNC, bỏ thiết bị DC lớn
Phụ lục L: Thiết kế M&E Chi tiết — bỏ M&E DC, giữ CNC + VP
Phụ lục Q: Thiết kế Xưởng CNC — 1.500 m², 10 máy, layout chi tiết
Phụ lục T: Sản phẩm IoT/Robot — GIỮ + thêm BMS/SCADA modules
Phụ lục NN: Kỹ thuật Thiết bị — bỏ datasheet DC, tăng CNC specs
```

---

## SPRINT T-4 — CHUYÊN GIA CÔNG NGHỆ (Agent 5)

### Nhiệm vụ: Phụ lục Kỹ thuật Nhóm 2 (Y, DD, HH) + DC nội bộ

**Output mục tiêu:** ~700 dòng

```
Phụ lục Y: Chi tiết Xây dựng — THIẾT KẾ MỚI 3 công trình
Phụ lục DD: Lộ trình Công nghiệp 4.0 — bỏ DC roadmap
Phụ lục HH: Vận hành Bảo trì — bỏ bảo trì DC lớn
DC nội bộ (bổ sung): Specs chi tiết 5-8 rack, ERP/MES, networking
```

---

## SPRINT M-3 — CHUYÊN GIA THỊ TRƯỜNG (Agent 6)

### Nhiệm vụ: Phụ lục Thị trường (B, H, M, P, W, X, GG, II, AA)

**Input:** Phụ lục tương ứng trong Gốc (~1.800 dòng)
**Output mục tiêu:** ~1.500 dòng

```
Phụ lục B: Phân tích Thị trường — bỏ DC market
Phụ lục H: Danh mục Sản phẩm — 14 SP (bỏ 6 SP DC)
Phụ lục M: Thị trường CNC — GIỮ + tăng benchmark 10 máy
Phụ lục P: Mô hình Doanh thu CNC — 10 máy thay vì 6
Phụ lục W: Benchmarking ASEAN — bỏ DC benchmark
Phụ lục X: Marketing — bỏ marketing DC
Phụ lục GG: Chiến lược CRM — bỏ khách hàng DC
Phụ lục II: Chiến lược Xuất khẩu — giữ 90%
Phụ lục AA: Chuỗi Cung ứng — bỏ supply chain DC
```

---

## SPRINT L-2 — CHUYÊN GIA PHÁP LÝ (Agent 4)

### Nhiệm vụ: Phụ lục Pháp lý/EIA (C, R, Z, KK, PP)

**Input:** Phụ lục tương ứng trong Gốc (~1.500 dòng)
**Output mục tiêu:** ~1.200 dòng

```
Phụ lục C: Mẫu Văn bản Pháp lý — bỏ GP Viễn thông template
Phụ lục R: Báo cáo EIA — bỏ EIA DC, giữ EIA CNC (ZLD, kim loại, bụi)
Phụ lục Z: Mẫu Hợp đồng — bỏ HĐ DC, giữ CNC/IoT
Phụ lục KK: Quản lý Nước/Chất thải — bỏ cooling tower DC
Phụ lục PP: An toàn Lao động — giữ 90%
```

---

## SPRINT W-2 — CHUYÊN GIA TÀI LIỆU (Agent 3)

### Nhiệm vụ: Phần VIII Kế hoạch + Phần IX Kết luận (SỬA LẠI CÓ DẤU)

**Input:** Phần VIII, IX trong Gốc (~523 dòng) + V3 MASTER (hiện không dấu ~150 dòng)
**Output mục tiêu:** ~470 dòng TIẾNG VIỆT CÓ DẤU

```
## Phần VIII: Kế hoạch Triển khai
  → 4 giai đoạn (Phase 0-3) thay vì 5
  → Gantt chart (Mermaid) — 4 phase
  → Milestones: XD Y1-Y3, SX Y3+, Vay Y7, Steady Y12
  → Rủi ro: bỏ rủi ro DC (latency, GPU supply), giữ CNC risk

## Phần IX: Kết luận và Kiến nghị
  → Giá trị tổng hợp: 7M USD strategic value
  → Bỏ cam kết GP Viễn thông, PUE, GHG DC
  → Kiến nghị BQL KCNC: ưu đãi 2 trụ cột
  → Bảng đối chiếu cuối cùng: tất cả số liệu V3
```

---

## KẾT THÚC PHASE C → QC BATCH 3
> Agent 7 kiểm tra tất cả sprint Phase C.

---
---

# PHASE D: TỔNG HỢP + FINAL QC

---

## SPRINT W-3 — CHUYÊN GIA TÀI LIỆU (Agent 3)

### Nhiệm vụ: Phụ lục còn lại + Review định dạng + Mục lục cuối

```
Phụ lục K: Tài liệu Tham khảo — bỏ tham khảo DC
Phụ lục V: Quản trị Doanh nghiệp — giữ 90%
Phụ lục FF: Quản lý PMO — giữ 90%
Phụ lục OO: Exit Strategy — bỏ giá trị DC
Phụ lục QQ: Succession Plan — giữ 90%
Phụ lục RR: Closing — giữ

→ Review toàn bộ MASTER: heading đúng, không lỗi format
→ Cập nhật Mục lục cuối cùng khớp 100% với heading
→ Cập nhật Bảng Đối chiếu cuối file
```

---

## SPRINT P-1 — TRÌNH BÀY KCNC (Agent 8)

### Nhiệm vụ: Tóm tắt Điều hành + Cập nhật Mẫu 1.4

**Thực hiện SAU khi MASTER V3 hoàn chỉnh.**

```
1. Tóm tắt Điều hành trong MASTER V3:
  → 250 dòng, đủ thông tin cho lãnh đạo BQL KCNC ra quyết định
  → Sơ đồ hệ sinh thái 2 trụ cột
  → Bảng tài chính tóm tắt: 22M, NPV 1,50M, IRR 13,0%
  → Gantt 4 phase
  → Cam kết: không DC thương mại, tập trung sản xuất

2. Cập nhật MAU_1.4_HOAN_TAT.md theo số liệu V3:
  → 22M USD, 2 trụ cột, 10 máy CNC, 100-130 nhân sự
  → Theo đúng format Mẫu số 1.4, Phụ lục I, NĐ 31/2021
```

---

## FINAL QC — KIỂM TRA CHẤT LƯỢNG (Agent 7)

### 7 Hạng mục Kiểm tra Bắt buộc

| # | Hạng mục | Phương pháp | Tiêu chí PASS |
|---|---|---|---|
| 1 | Số liệu nhất quán | `grep` 20 con số cố định | Mỗi số xuất hiện ĐÚNG tại mọi vị trí |
| 2 | Không emoji | `grep` emoji pattern | 0 emoji |
| 3 | Tỷ lệ output/input | `wc -l` | Output >= 10.000 dòng (>= 78% của 12.752 gốc) |
| 4 | Mục lục khớp nội dung | So sánh heading vs TOC | 100% heading có trong TOC |
| 5 | Định dạng số | `grep` pattern | `22,00M` KHÔNG phải `22.00M` |
| 6 | Tiếng Việt có dấu | `grep` từ không dấu | 0 từ không dấu (trừ ngoại lệ) |
| 7 | Cross-reference | Kiểm tra 6 vùng nguy hiểm | Nhất quán giữa các bảng liên quan |

**6 vùng nguy hiểm cần kiểm tra chéo:**
1. CAPEX Thông tin DA ↔ Phần V ↔ Phụ lục A ↔ Bảng Đối chiếu
2. Doanh thu Tóm tắt ↔ Phần V ↔ Phụ lục G ↔ Phần III
3. NPV/IRR Tóm tắt ↔ Phần V ↔ Phụ lục J
4. Nhân sự Phần VII ↔ Tóm tắt ↔ Phụ lục
5. Layout Phần IV ↔ Thông tin DA ↔ Phụ lục Y
6. Số sản phẩm (14 SP) ↔ Phần II ↔ Phụ lục H ↔ Thông tin DA

**Danh sách 20 con số phải grep:**
```
22.000.000 USD (hoặc 22,00M USD)
18.000.000 USD (hoặc 18,00M USD)
4.000.000 USD (hoặc 4,00M USD)
81,8%
18,2%
1.500.000 USD (hoặc 1,50M USD) → NPV
13,0% → IRR
10 năm → Breakeven
12.000.000 USD (hoặc 12,00M USD) → Revenue steady
~140.000.000 USD → Revenue 15Y
~30% → EBITDA margin
1,50x → DSCR
7.000.000 USD (hoặc 7,00M USD) → Strategic Value
10.000 m² → Diện tích
6.664 m² → GFA
4.648 m² → Footprint
46,5% → Mật độ xây dựng
10 máy CNC
14 sản phẩm
100-130 nhân sự
```

---
---

# TỔNG HỢP OUTPUT DỰ KIẾN

| Phần | Sprint | Agent | Dòng mục tiêu |
|---|---|---|---:|
| Trang bìa + Mục lục + TT DA + CSPL | W-1 | Agent 3 | 300 |
| Tóm tắt Điều hành | P-1 | Agent 8 | 250 |
| Phần I: Thị trường | M-1 | Agent 6 | 600 |
| Phần II: Sản phẩm & CN | T-1 | Agent 5 | 1.400 |
| Phần III: Mô hình KD | M-2 | Agent 6 | 550 |
| Phần IV: Hạ tầng KT | T-2 | Agent 5 | 900 |
| Phần V: Tài chính | F-1 + F-2 | Agent 2 | 1.100 |
| Phần VI: Pháp lý & MT | L-1 | Agent 4 | 350 |
| Phần VII: Nhân sự | F-2 | Agent 2 | 200 |
| Phần VIII: Kế hoạch | W-2 | Agent 3 | 250 |
| Phần IX: Kết luận | W-2 | Agent 3 | 220 |
| Phụ lục Tài chính | F-3 | Agent 2 | 1.800 |
| Phụ lục Kỹ thuật | T-3 + T-4 | Agent 5 | 2.400 |
| Phụ lục Thị trường | M-3 | Agent 6 | 1.500 |
| Phụ lục Pháp lý | L-2 | Agent 4 | 1.200 |
| Phụ lục khác | W-3 | Agent 3 | 450 |
| **TỔNG** | **16 Sprint** | **6 Agent** | **~11.470** |

---

## THỨ TỰ THỰC HIỆN (TIMELINE)

```
═══════════════════════════════════════════════════════════════════
 PHASE A (Ngày 1-2)     │ PHASE B (Ngày 2-4)    │ PHASE C (Ngày 4-8)        │ PHASE D (Ngày 8-10)
═══════════════════════════════════════════════════════════════════
 T-1 (Sản phẩm) ───────→│ T-2 (Hạ tầng) ───────→│ T-3 + T-4 (PL KT) ───────→│
 M-1 (Thị trường) ─────→│ M-2 (Mô hình KD) ───→│ M-3 (PL Thị trường) ─────→│ Merge MASTER
 L-1 (Pháp lý) ────────→│                        │ L-2 (PL Pháp lý) ────────→│ W-3 (Format+TOC)
 W-1 (Trang bìa) ──────→│ F-1 (Tài chính) ─────→│ F-2 (TC bổ sung) ─────────→│ P-1 (Tóm tắt)
                         │                        │ F-3 (PL Tài chính) ───────→│ Final QC
                         │                        │ W-2 (KH + Kết luận) ──────→│
─────────────────────────┼────────────────────────┼───────────────────────────┼──────────────────
 QC-1 ──────────────────→│ QC-2 ─────────────────→│ QC-3 ───────────────────→│ QC FINAL
═══════════════════════════════════════════════════════════════════
```

---

## LỆNH CUỐI CÙNG

> **Tất cả Agent bắt đầu NGAY theo Phase A.**
> Mỗi Agent đọc đúng file nguồn, viết đúng số dòng mục tiêu, ghi vào MASTER V3.
> Sau mỗi Sprint, báo cáo: (1) Số dòng đã viết, (2) Section đã hoàn thành, (3) Vấn đề gặp phải.
> Agent 7 chạy QC sau mỗi Phase.
> KHÔNG tự ý thay đổi số liệu cố định.
> KHÔNG viết nội dung DC thương mại.
> Tất cả phải TIẾNG VIỆT CÓ DẤU.
> Mục tiêu tổng: **10.000–12.000 dòng MASTER V3 hoàn chỉnh.**

---

*Phát lệnh: 2026-03-16*
*Giám Đốc Dự Án — Mekong Technology Hub*
