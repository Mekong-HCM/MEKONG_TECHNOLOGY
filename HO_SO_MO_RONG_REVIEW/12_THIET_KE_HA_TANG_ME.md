# THIẾT KẾ HẠ TẦNG CƠ ĐIỆN (M&E) — TỔ HỢP 3 KHỐI
## Mekong Technology — Lô E2-03, KCNC TP.HCM

**Ngày lập:** 03/03/2026  
**Phân loại:** CONFIDENTIAL — Tài liệu kỹ thuật hạ tầng  
**Phiên bản:** V1.0  
**Người lập:** Kỹ sư Thiết kế Hạ tầng MEP — CDCDP, PE (M&E)  
**Phạm vi:** Toàn bộ hệ thống cơ điện cho 3 Khối (Datacenter + CNC + SMT) trên diện tích 10.000 m²  
**Tham chiếu:**  
- [P2] Mô hình Tài chính: `08_MO_HINH_TAI_CHINH_MO_RONG.md`  
- [P3] Báo cáo EIA V2.0: `09_BAO_CAO_EIA_TONG_HOP_3_KHOI.md`  
- [P7] PCCC & An toàn Lao động: `10_PCCC_AN_TOAN_LAO_DONG.md`

---

# MỤC LỤC

1. [Chương I: Master Layout (10.000 m²)](#chương-i-master-layout)
2. [Chương II: Thiết Kế Khối A — Datacenter (3.000 m²)](#chương-ii-thiết-kế-khối-a--datacenter)
3. [Chương III: Thiết Kế Khối B — Nhà Máy CNC (4.000 m²)](#chương-iii-thiết-kế-khối-b--nhà-máy-cnc)
4. [Chương IV: Thiết Kế Khối C — Nhà Máy SMT (3.000 m²)](#chương-iv-thiết-kế-khối-c--nhà-máy-smt)
5. [Chương V: Hệ Thống Điện Tổng Hợp](#chương-v-hệ-thống-điện-tổng-hợp)
6. [Chương VI: Hệ Thống Nước](#chương-vi-hệ-thống-nước)
7. [Chương VII: BOQ & Dự Toán M&E](#chương-vii-boq--dự-toán-me)
8. [Chương VIII: Timeline Thi Công M&E](#chương-viii-timeline-thi-công-me)

---

# QUY ƯỚC PHÂN LOẠI SỐ LIỆU

| Ký hiệu | Ý nghĩa | Mô tả |
|---|---|---|
| **[A]** | **Assumption** | Giả định thiết kế, chưa có bản vẽ chi tiết |
| **[B]** | **Benchmark** | Tham chiếu tiêu chuẩn ngành / nhà sản xuất |
| **[C]** | **Committed** | Đã xác nhận / có báo giá / theo quy chuẩn bắt buộc |

---

# CHƯƠNG I: MASTER LAYOUT (10.000 m²)

## 1.1. Thông Tin Khu Đất

| Thông tin | Giá trị | Phân loại |
|-----------|---------|-----------|
| Vị trí | Lô E2-03, KCNC TP.HCM, Quận 9 | [C] |
| Tổng diện tích đất | ~15.000 m² (bao gồm sân bãi) | [C] |
| Diện tích xây dựng | 10.000 m² (3 Khối + khu kỹ thuật) | [C] |
| Mật độ xây dựng | ~65% | [A] |
| Số tầng | 1 tầng (Khối B, C) + 2 tầng (Khối A) | [A] |
| Chiều cao tối đa | 12 m (Khối B — crane clearance) | [A] |
| Hướng gió chủ đạo | Đông Nam → Tây Bắc (mùa khô), Tây Nam → Đông Bắc (mùa mưa) | [B] |
| Cấp động đất | Cấp VII (theo TCVN 9386:2012) | [C] |

## 1.2. Nguyên Tắc Phân Vùng

### Yêu cầu cách ly (từ P3 EIA + P7 PCCC):

| Cặp khối | Khoảng cách tối thiểu | Lý do | Nguồn |
|-----------|----------------------|-------|-------|
| Khối A ↔ Khối B | ≥ 25 m | Rung CNC → DC (12,4× ngưỡng trước cách ly) [P3 Mục 4.3.4] | [C] |
| Khối B ↔ Khối C | ≥ 10 m | Bụi kim loại CNC → Clean Room SMT [P3 Mục 4.5.2] | [C] |
| Khối A ↔ Khối C | ≥ 15 m | Nhiệt DC → SMT temperature control [P3 Mục 4.5.3] | [A] |
| Generator Farm ↔ Khối A | ≥ 15 m | Tiếng ồn + rung (95–105 dB(A) tại 1m) [P3 Mục 4.2.3] | [B] |
| IPA Storage ↔ Tòa nhà | ≥ 8 m | Flash point 12°C, ATEX Zone 1 [P7 Chương IV] | [C] |
| Cooling Tower ↔ Ranh giới | ≥ 10 m | Tiếng ồn 85–90 dB(A) tại 1m [P3 Mục 4.2.3] | [B] |
| Bể PCCC ↔ Khối gần nhất | ≤ 50 m | Pipe run length tối đa cho áp lực bơm [P7 Chương V] | [C] |

### Đường xe cứu hỏa (theo QCVN 06:2022/BXD + P7):

- Rộng mặt đường: ≥ 3,5 m [C]
- Bán kính quay tối thiểu: ≥ 12 m [C]
- Bao quanh toàn bộ 3 Khối → Tiếp cận 4 mặt [C]
- Bãi đỗ xe cứu hỏa: 2 vị trí (trước Khối A + giữa Khối B/C) [A]
- Tải trọng đường: ≥ 16 tấn (xe cứu hỏa nặng) [B]

## 1.3. Bản Mô Tả Mặt Bằng Tổng Thể

```
                    ĐƯỜNG NỘI BỘ KCNC (PHÍA BẮC)
    ═══════════════════════════════════════════════════════════
    ║                                                         ║
    ║   ┌─────────┐    25m    ┌──────────────┐   10m  ┌─────────────┐
    ║   │         │  ←─────→  │              │ ←────→ │             │
    ║   │ KHỐI A  │           │   KHỐI B     │        │  KHỐI C     │
    ║   │ DATA-   │           │   NHÀ MÁY   │        │  NHÀ MÁY   │
    ║   │ CENTER  │           │   CNC        │        │  SMT &      │
    ║   │ 3.000m² │           │   4.000 m²   │        │  ROBOT      │
    ║   │ (2 tầng)│           │   (1 tầng    │        │  3.000 m²   │
    ║   │         │           │    cao 12m)  │        │  (1 tầng)   │
    ║   └─────────┘           └──────────────┘        └─────────────┘
    ║        │                       │                       │
    ║   ─ ─ ─│─ ─ ─ ĐƯỜNG XE CỨU HỎA (≥ 3,5m) ─ ─ ─ ─ ─ ─│─ ─ ─
    ║        │                       │                       │
    ║   ┌────┴────┐           ┌──────┴───────┐        ┌─────┴───────┐
    ║   │GENERATOR│           │ KHU KỸ THUẬT │        │ IPA Storage │
    ║   │  FARM   │           │    CHUNG     │        │ (ATEX Zone) │
    ║   │ 3×Gen   │           │ Transformer  │        │    8m min   │
    ║   │ 3×Fuel  │           │ Chiller Plt  │        │  from bldg  │
    ║   │  15m    │           │ Fire Pump    │        └─────────────┘
    ║   │from DC  │           │ Water Tank   │
    ║   └─────────┘           │ 750 m³       │    ┌─────────────────┐
    ║                         └──────────────┘    │   VĂN PHÒNG     │
    ║                                             │   ĐIỀU HÀNH     │
    ║   ┌─────────────────────────┐               │   + SHOWROOM    │
    ║   │     COOLING TOWER       │               │   280 m²        │
    ║   │   4 × Cell (N+1)       │               └─────────────────┘
    ║   │   10m from boundary    │
    ║   └─────────────────────────┘    ┌───────────────────────────┐
    ║                                  │      SOLAR PV 500 kWp     │
    ║   ┌────────────────────────┐     │   (trên mái Khối B + C)  │
    ║   │    BÃI XE (60 chỗ)    │     │   ~3.000 m² mái          │
    ║   │    + XE TẢI (5 chỗ)   │     └───────────────────────────┘
    ║   └────────────────────────┘
    ║                                                         ║
    ═══════════════════════════════════════════════════════════
                    ĐƯỜNG NỘI BỘ KCNC (PHÍA NAM)
```

## 1.4. Bảng Tổng Hợp Diện Tích

| Khu vực | Diện tích (m²) | Ghi chú |
|---------|---------------:|---------|
| **Khối A — Datacenter** | 3.000 | 2 tầng (footprint ~1.500 m²) |
| — Tầng 1: Data Hall + NOC/SOC | 1.500 | |
| — Tầng 2: UPS Room + Battery + Office | 1.500 | |
| **Khối B — CNC** | 4.000 | 1 tầng, cao trần 12m (crane) |
| — Machine Shop | 2.800 | 25 vị trí CNC |
| — CMM Room | 200 | Clean Room Class 1000 |
| — Tool Storage + Fixture Area | 400 | |
| — Chip Collection + Coolant System | 300 | |
| — Office + Locker | 300 | |
| **Khối C — SMT** | 3.000 | 1 tầng |
| — Clean Room ISO 7 | 600 | FFU + HEPA H14 |
| — SMT Production Line | 800 | |
| — Robot Assembly Area | 800 | |
| — IPA Storage (ATEX) | 50 | Tách biệt, tường chống cháy |
| — QC Lab + warehouse | 450 | |
| — Office + giao nhận | 300 | |
| **Khu Kỹ thuật Chung** | ~800 | Transformer, Chiller, Fire Pump |
| **Generator Farm** | ~300 | 3 Generator + 3 bồn diesel |
| **Cooling Tower Area** | ~200 | 4 cell + đường ống |
| **Văn phòng Điều hành + Showroom** | 280 | |
| **Bãi xe + Sân bãi** | ~2.420 | 60 ô tô + 5 xe tải |
| **Đường nội bộ + Green** | ~1.000 | Xe cứu hỏa, landscaping |
| **TỔNG MẶT BẰNG** | **~15.000** | |

---

# CHƯƠNG II: THIẾT KẾ KHỐI A — DATACENTER (3.000 m²)

## 2.1. Thông Số Thiết Kế Tổng Quát

| Thông số | Giá trị | Tiêu chuẩn | Phân loại |
|----------|---------|-------------|-----------|
| Tier Design | Tier III (Concurrently Maintainable) | Uptime Institute | [C] |
| Total IT Load (Phase 1) | 1.500 kW (50 Racks × 30 kW avg) | — | [A] |
| Total IT Load (Phase 2) | 3.000 kW (100 Racks × 30 kW avg) | — | [A] |
| PUE Target | ≤ 1,35 | ASHRAE 90.4 | [A] |
| Total Power (Phase 1) | ~2.025 kW (IT × PUE) | — | [A] |
| Total Power (Phase 2) | ~4.050 kW (IT × PUE) | — | [A] |
| Availability Target | 99,982% (≤ 1,6h downtime/năm) | Tier III | [B] |
| Rack Density (Colo Zone 1) | 8–15 kW/rack | Industry standard | [B] |
| Rack Density (AI/HPC Zone 2) | 30–80 kW/rack | NVIDIA DGX benchmark | [B] |
| Operating Temperature | 18–27°C (ASHRAE A1) | ASHRAE TC 9.9 | [C] |
| Humidity | 20–80% RH (non-condensing) | ASHRAE TC 9.9 | [C] |
| Seismic Zone | Zone 2 (Richter 5–6 equivalent) | TCVN 9386:2012 | [C] |

## 2.2. Data Hall Layout

### Zone 1 — Colocation (30 Racks Phase 1, 60 Racks Full Build)

| Thông số | Giá trị | Phân loại |
|----------|---------|-----------|
| Diện tích Zone 1 | 800 m² (Phase 1: 400 m²) | [A] |
| Rack layout | Hot Aisle Containment (HAC) — 2 rows × 15 racks | [B] |
| Cold aisle width | 1.200 mm [B] | [B] |
| Hot aisle width | 1.000 mm (contained) [B] | [B] |
| Rack pitch | 600 mm tile = 1 rack position [B] | [B] |
| Rack size | 42U, 600W × 1.100D × 2.000H mm | [B] |
| Net usable U per rack | 40U (2U reserved for PDU) | [A] |
| Power per rack | 8–15 kW [A] | [A] |
| Cooling | In-row cooling unit (chilled water) + Rear-door HEX | [A] |
| Floor loading | ≥ 12 kPa (concentrated load) | [C] |

### Zone 2 — AI/HPC (20 Racks Phase 1, 40 Racks Full Build)

| Thông số | Giá trị | Phân loại |
|----------|---------|-----------|
| Diện tích Zone 2 | 700 m² (Phase 1: 350 m²) | [A] |
| Rack layout | Hot Aisle Containment — 2 rows × 10 racks (Phase 1) | [B] |
| Rack size | 42U, 600W × 1.200D × 2.200H mm (deep rack for GPU servers) | [B] |
| Power per rack | 30–80 kW [A] | [A] |
| **Cooling** | **Direct-to-Chip Liquid Cooling (CDU-based)** + Rear-door HEX | [A] |
| CDU (Coolant Distribution Unit) | 2 × 250 kW CDU per row (N+1) | [A] |
| Coolant | Propylene glycol 30% solution, closed-loop | [B] |
| Floor loading | ≥ 15 kPa (GPU servers heavier) | [A] |

### Khu vực Phụ trợ — Tầng 1

| Phòng | Diện tích | Chức năng |
|-------|-----------|-----------|
| NOC (Network Operations Center) | 80 m² | Giám sát 24/7, 6 workstation + video wall |
| SOC (Security Operations Center) | 40 m² | CCTV monitoring, access control |
| Meet-me Room (MMR) | 30 m² | Fiber patching, carrier entry |
| Staging Area | 50 m² | Equipment receiving, burn-in test |
| Loading Dock | 30 m² | Cửa 3m × 3m, dock leveler |

### Khu vực Phụ trợ — Tầng 2

| Phòng | Diện tích | Chức năng |
|-------|-----------|-----------|
| UPS Room A | 120 m² | UPS Path A (2 × 1.000 kVA) |
| UPS Room B | 120 m² | UPS Path B (2 × 1.000 kVA) |
| Battery Room A | 100 m² | LiFePO4 battery string A |
| Battery Room B | 100 m² | LiFePO4 battery string B |
| MDB + Switchgear Room | 80 m² | Main Distribution Board |
| ATS Room | 40 m² | Automatic Transfer Switch |
| IT Office | 60 m² | DC operations team |

## 2.3. Raised Floor Design

| Thông số | Giá trị | Tiêu chuẩn | Phân loại |
|----------|---------|-------------|-----------|
| **Hệ thống** | Steel pedestal + calcium sulphate panel | EN 12825 | [B] |
| **Chiều cao sàn nâng** | 800 mm (dưới panel đến structural slab) | Uptime Tier III | [A] |
| **Tải trọng tập trung** | ≥ 12 kPa (Colo), ≥ 15 kPa (AI/HPC) | EN 12825 Grade 5/6 | [C] |
| **Tải trọng phân bố** | ≥ 35 kN/m² | EN 12825 | [B] |
| **Panel kích thước** | 600 × 600 mm | Industry standard | [B] |
| **Perforated tiles** | 25% open area (cold aisle) | ASHRAE best practice | [B] |
| **Sealing** | Air dam dưới rack + blanking panel cho U trống | Best practice | [A] |
| **Grounding** | Mỗi pedestal nối đất, tổng trở ≤ 1 Ohm | IEC 61000-5-2 | [C] |
| **Chống tĩnh điện** | Vinyl conductive flooring (ESD < 10⁶ Ω) | EN 14041 | [B] |
| **Cable management** | Under-floor cable tray (chống cháy) + overhead ladder rack | TIA-942 | [B] |

> **Chi phí ước tính Raised Floor:** 180–220 USD/m² × 1.500 m² (Data Hall) = **270.000–330.000 USD** [B]

## 2.4. Cooling Architecture

### 2.4.1. Tổng Quan Cooling Hierarchy

```
                    ┌──────────────────┐
                    │   COOLING TOWER  │
                    │  4 Cell (N+1)    │
                    │  Evaporative     │
                    │  + Free Cooling  │
                    └────────┬─────────┘
                             │ Condenser Water (32/37°C)
                    ┌────────┴─────────┐
                    │   CHILLER PLANT  │
                    │  3 × 500 kW     │
                    │  Water-cooled    │
                    │  (N+1 config)   │
                    └────────┬─────────┘
                             │ Chilled Water (7/12°C)
                    ┌────────┴─────────────────┐
                    │                          │
          ┌─────────┴──────┐        ┌──────────┴─────────┐
          │  ZONE 1 (Colo) │        │  ZONE 2 (AI/HPC)   │
          │  In-Row CRAH   │        │  CDU Liquid Cooling │
          │  + Rear-Door   │        │  + Rear-Door HEX    │
          │  HEX           │        │  Direct-to-Chip     │
          └────────────────┘        └────────────────────┘
```

### 2.4.2. Zone 1 — Colocation Cooling

| Thông số | Giá trị | Phân loại |
|----------|---------|-----------|
| Cooling Type | Chilled Water In-Row CRAH + Rear-Door Heat Exchanger | [A] |
| In-Row CRAH units | 6 × 80 kW per row (N+1) — Phase 1: 12 units | [A] |
| Supply Air Temp | 18°C ± 2°C | [B] |
| Return Air Temp | 35°C (HAC contained) | [B] |
| Airflow per CRAH | 5.500 m³/h | [B] |
| Chilled Water Supply | 7°C (ΔT = 5°C) | [B] |
| Rear-Door HEX | Passive, chilled water — supplements 30% cooling per rack | [A] |
| Redundancy | N+1 per row | [C] |

### 2.4.3. Zone 2 — AI/HPC Liquid Cooling

| Thông số | Giá trị | Phân loại |
|----------|---------|-----------|
| Cooling Type | **Direct-to-Chip Liquid Cooling** (CDU-based) + Rear-Door HEX | [A] |
| CDU (Coolant Distribution Unit) | 2 × 250 kW per row (N+1) — Phase 1: 4 CDU | [A] |
| Chip-level coolant | Propylene glycol 30%, inlet 30°C, outlet 45°C | [B] |
| CDU → Chiller loop | Chilled water 12°C → CDU heat exchanger → return 22°C | [A] |
| Rear-Door HEX | Active (pumped) — handles residual air-cooled heat (20%) | [A] |
| Quick-disconnect manifold | Per rack, drip-free, for hot-swap maintenance | [B] |
| Leak detection | Rope-type sensor under every rack row + CDU area | [C] |

> **Lợi ích Liquid Cooling:** Giảm 60–70% lượng không khí cần làm lạnh → PUE cải thiện 0,15–0,20 so với air-cooled thuần túy. Đây là yêu cầu bắt buộc cho GPU rack >40 kW [B].

### 2.4.4. Chiller Plant

| Thông số | Giá trị | Phân loại |
|----------|---------|-----------|
| Chiller Type | Water-cooled screw chiller | [A] |
| Capacity | 3 × 500 kW (N+1) — Phase 1: 2 units | [A] |
| COP (Coefficient of Performance) | ≥ 5,5 (full load), ≥ 6,0 (IPLV) | [B] ASHRAE 90.1 |
| Refrigerant | R-515B (low-GWP) hoặc R-1234ze | [B] |
| Chilled Water | Supply 7°C / Return 12°C (ΔT = 5°C) | [B] |
| Condenser Water | Supply 32°C / Return 37°C | [B] |
| VFD (Variable Frequency Drive) | Trên tất cả compressor + pump | [A] |
| Control | BMS integration, demand-based staging | [A] |

### 2.4.5. Cooling Tower

| Thông số | Giá trị | Phân loại |
|----------|---------|-----------|
| Type | Counter-flow evaporative (FRP housing) | [A] |
| Capacity | 4 × 400 kW (N+1) — Phase 1: 3 cells | [A] |
| Approach temperature | 5°C (wet bulb TPHCM ~27°C → CW 32°C) | [B] |
| Water make-up | 60–80 m³/ngày sau hybrid cooling [P3 Mục 4.2.2] | [C] |
| Drift eliminator | ≤ 0,001% (low-drift design) | [B] |
| Cycles of concentration | 5–7 (water treatment optimized) | [A] |
| Water treatment | Auto-dosing: Biocide + Anti-scale + pH control | [A] |
| Noise | 85 dB(A) at 1m, 52–58 dB(A) at boundary [P3 Mục 4.2.3] | [C] |
| Distance from boundary | ≥ 10 m | [C] |

### 2.4.6. Free Cooling Economizer

| Thông số | Giá trị | Phân loại |
|----------|---------|-----------|
| Mode | Waterside economizer (plate heat exchanger) | [A] |
| Activation | Khi T_outdoor_wetbulb < 18°C (CW có thể cung cấp ≤ 15°C) | [A] |
| Số giờ khả dụng | ~700–1.000 h/năm (TPHCM) [B] — khoảng 8–11% thời gian | [B] |
| Tiết kiệm điện chiller | ~8% annual chiller energy [A] | [A] |
| Partial free cooling | Khi T_wb 18–24°C → Chiller chạy bổ sung, COP tăng | [A] |
| Tổng giờ partial + full | ~2.500 h/năm (~29% thời gian) [B] | [B] |

### 2.4.7. PUE Calculation

| Thành phần | Load (kW) — Phase 2 Full | % of IT Load | Ghi chú |
|------------|-------------------------:|-------------:|---------|
| IT Load | 3.000 | 100,0% | Base |
| Cooling (Chiller + CT + Pump) | 600 | 20,0% | COP 5,5 + VFD + free cooling credit |
| UPS Loss | 120 | 4,0% | Efficiency 96% (double conversion) |
| Lighting + Misc | 45 | 1,5% | LED + BMS |
| PDU Loss | 60 | 2,0% | Transformer loss |
| Liquid Cooling Pump (Zone 2) | 90 | 3,0% | CDU pumps |
| Building HVAC (non-IT) | 30 | 1,0% | Office, NOC |
| Security + Fire | 15 | 0,5% | CCTV, VESDA, etc. |
| **Total Facility** | **3.960** | | |
| **PUE** | | | **3.960 / 3.000 = 1,32** ✅ |

> **PUE 1,32** đạt target < 1,35 [A]. Các yếu tố chính: Liquid cooling Zone 2 (giảm 25% cooling load), VFD trên tất cả pump/fan, free cooling ~8% tiết kiệm, high-efficiency UPS 96%.

## 2.5. Electrical Architecture — 2N Distribution

### 2.5.1. Power Path Design

```
    EVN 22kV                          EVN 22kV
    (Feed 1)                          (Feed 2 — Future/Backup)
       │                                  │
  ┌────┴────┐                       ┌────┴────┐
  │ TX-A1   │                       │ TX-A2   │
  │2.500 kVA│                       │2.500 kVA│
  │22/0,4kV │                       │22/0,4kV │
  └────┬────┘                       └────┬────┘
       │                                  │
  ┌────┴────┐                       ┌────┴────┐
  │  ATS-A  │←── Generator 1 ──→   │  ATS-B  │←── Generator 2
  │  Path A │    2.500 kVA         │  Path B │    2.500 kVA
  └────┬────┘                       └────┬────┘
       │                                  │
  ┌────┴────┐                       ┌────┴────┐
  │ UPS-A   │                       │ UPS-B   │
  │2×1000kVA│                       │2×1000kVA│
  │LiFePO4  │                       │ LiFePO4 │
  │15 min   │                       │ 15 min  │
  └────┬────┘                       └────┬────┘
       │                                  │
  ┌────┴────┐                       ┌────┴────┐
  │ PDU-A   │                       │ PDU-B   │
  │Per rack │                       │Per rack │
  │Metered  │                       │Metered  │
  └────┬────┘                       └────┬────┘
       │              ┌──┐                │
       └──────────────┤IT├────────────────┘
                      │HW│  (Dual-corded servers)
                      └──┘
```

### 2.5.2. UPS Specifications

| Thông số | Giá trị | Phân loại |
|----------|---------|-----------|
| Configuration | 2N (2 × (2 × 1.000 kVA parallel)) | [A] |
| UPS Type | Online Double Conversion (VFI-SS-111) | [B] IEC 62040-3 |
| Input | 3-phase 400V, 50Hz | [C] |
| Output | 3-phase 400V, 50Hz, THD ≤ 3% | [B] |
| Efficiency | ≥ 96% (double conversion), ≥ 99% (eco mode — NOT for DC) | [B] |
| Battery Type | LiFePO4 (Lithium Iron Phosphate) | [A] |
| Battery Runtime | 15 phút @ full load (per UPS path) | [C] Tier III |
| Battery Life | 15+ năm (compared to 5–7 năm VRLA) | [B] |
| Battery Footprint | ~60% smaller than equivalent VRLA | [B] |
| Monitoring | Per-cell BMS, temperature + voltage + SOC | [B] |
| Bypass | Static bypass + Manual maintenance bypass | [C] |

> **Chi phí UPS (ước tính):** 4 × 1.000 kVA UPS = ~**800.000 USD** [B]. LiFePO4 battery = ~**400.000 USD** [B]. Tổng UPS system ~**1.200.000 USD**.

### 2.5.3. PDU Specifications

| Thông số | Giá trị | Phân loại |
|----------|---------|-----------|
| Type | Rack-mount, Intelligent Metered + Switched | [A] |
| Input | 3-phase 63A (Colo) / 125A (AI/HPC) | [A] |
| Outlets per PDU | 24 × C13 + 12 × C19 (Colo), 12 × C19 + 6 × 3-phase (AI) | [B] |
| Per-outlet metering | Voltage, Current, Power, Energy (kWh) | [A] |
| Remote switching | Per outlet, SNMP/SSH/Web | [A] |
| Dual PDU per rack | PDU-A (Path A) + PDU-B (Path B) | [C] |
| Environmental sensors | Temperature + Humidity per PDU | [A] |

## 2.6. Physical Security

| Layer | Giải pháp | Tiêu chuẩn | Phân loại |
|-------|-----------|-------------|-----------|
| **Perimeter** | Hàng rào 2,4m + CCTV PTZ (4 vị trí) | EN 50131-1 | [A] |
| **Building entry** | Card access (Kaba/HID) + Guard 24/7 | — | [A] |
| **Data Hall entry** | **Mantrap** (2 cửa interlocked) + Biometric (fingerprint + iris) | TIA-942 | [A] |
| **Rack access** | Electronic rack lock + audit trail | ISO 27001 | [A] |
| **CCTV** | 32 camera (IP, 4K, 90-day retention) — Data Hall, MMR, Staging, Perimeter | — | [A] |
| **Intrusion detection** | PIR sensors + door contacts — all sensitive areas | EN 50131 | [A] |
| **Visitor management** | Badge system + escort required in Data Hall | ISO 27001 | [A] |

---

# CHƯƠNG III: THIẾT KẾ KHỐI B — NHÀ MÁY CNC (4.000 m²)

## 3.1. Thông Số Thiết Kế Tổng Quát

| Thông số | Giá trị | Phân loại |
|----------|---------|-----------|
| Diện tích tổng | 4.000 m² | [C] |
| Chiều cao trần | 12 m (clearance cho crane 5T EOT) | [A] |
| Tải trọng sàn | ≥ 20 kPa (concentrated, CNC machines ~8–15 tấn) | [B] |
| Tải điện Phase 1 | 700 kW (15 máy CNC + phụ trợ) | [A] |
| Tải điện Phase 2 | 1.600 kW (25 máy CNC + phụ trợ) | [A] |
| Nhiệt độ xưởng | 20 ± 2°C [B] (CNC precision machining) | [B] |
| Rung nền mục tiêu Khối A | v < 0,1 mm/s [C] (theo P3 EIA Mục 4.3.4) | [C] |
| CNC machines Phase 1 | 15: 8 × DMG MORI DMU 65, 5 × Doosan DVF 5000, 2 × Makino D500 | [C] |
| CNC machines Phase 2 | 10: TBD (tương tự mix Phase 1) | [A] |

## 3.2. Machine Shop Layout

### Bố trí 25 Vị Trí Máy CNC

```
    ═════════════════════════════════ Tường Phía Bắc ═══════════════
    │                                                              │
    │  [1] DMG  [2] DMG  [3] DMG  [4] DMG  [5] DMG  [6] DMG      │
    │  MORI    MORI    MORI    MORI    MORI    MORI               │
    │  DMU65   DMU65   DMU65   DMU65   DMU65   DMU65              │
    │   ↕ 3.5m  ↕ 3.5m  ↕ 3.5m  ↕ 3.5m  ↕ 3.5m                │
    │  ──────── CRANE TRACK 5T (EOT) ─── 50m span ────────────── │
    │   ↕ 3.5m  ↕ 3.5m  ↕ 3.5m  ↕ 3.5m  ↕ 3.5m                │
    │  [7] DMG  [8] DMG  [9] Doosan [10]Doosan [11]Doosan        │
    │  MORI    MORI    DVF5000  DVF5000  DVF5000                  │
    │  DMU65   DMU65                                              │
    │                                                              │
    │  ═══════════ ĐƯỜNG ĐI CHÍNH 3m ══════════════════          │
    │                                                              │
    │  [12]Doosan [13]Doosan [14]Makino [15]Makino                │
    │  DVF5000   DVF5000   D500     D500                          │
    │                                                              │
    │  ──────── P2 EXPANSION AREA (10 machines) ──────────────── │
    │  [16]    [17]    [18]    [19]    [20]                       │
    │  [21]    [22]    [23]    [24]    [25]                       │
    │                                                              │
    ├──────────┬────────────────────────────────────┬──────────────┤
    │   CMM    │     TOOL STORAGE + FIXTURES       │ CHIP COLLECT │
    │   ROOM   │          400 m²                    │ + COOLANT    │
    │  200 m²  │                                    │   300 m²     │
    │Class1000 │                                    │              │
    └──────────┴────────────────────────────────────┴──────────────┘
```

### Khoảng cách Tối thiểu Giữa Máy

| Yếu tố | Khoảng cách | Tiêu chuẩn | Phân loại |
|---------|-------------|-------------|-----------|
| Máy — Máy (cùng hàng) | ≥ 2,5 m | OSHA 1910 | [B] |
| Máy — Tường | ≥ 1,5 m | OSHA 1910 | [B] |
| Hàng — Hàng (qua crane track) | ≥ 3,5 m | Crane clearance | [A] |
| Đường đi chính | ≥ 3,0 m | Fork lift access | [B] |
| Đường đi phụ | ≥ 1,2 m | Personnel access | [B] |

## 3.3. Vibration Isolation Foundation

### 3.3.1. Thiết kế Móng Cách Ly Rung cho CNC

Theo tính toán trong P3 EIA (Mục 4.3.4), máy CNC 5 trục tạo rung **1,24 mm/s** tại nền — vượt ngưỡng DC Tier III (0,1 mm/s) **12,4 lần**. Cần giảm ≥ 92,3% để đạt target.

| Giải pháp | Chi tiết | Hiệu quả giảm rung | Chi phí | Phân loại |
|-----------|----------|--------------------:|---------|-----------|
| **Spring Isolator** | Gerb/Bilz spring mount dưới mỗi máy CNC | 85–95% | 8.000–12.000 USD/máy | [B] |
| **Rubber Pad** | Sylomer SR-55 pad (50mm) dưới isolator | 60–80% (bổ trợ) | 1.500–2.500 USD/máy | [B] |
| **Inertia Block** | Bệ bê tông 300–500mm dưới mỗi máy (2× trọng lượng máy) | Giảm amplitude 50% | 3.000–5.000 USD/máy | [B] |
| **Isolation Trench** | Rãnh sâu 2m × rộng 1m × dài 60m giữa Khối A & B | 70–85% surface wave | 120.000 USD | [A] |
| **Vibration Sensor** | 3 sensor (Khối A, B, rãnh) — monitoring real-time | Cảnh báo ≥ 0,08 mm/s | 15.000 USD | [A] |

### 3.3.2. Hệ Thống Cách Ly Kết Hợp

| Cấp | Mô tả | Giảm rung lũy kế |
|-----|-------|------------------:|
| **Cấp 1** | Inertia block (bệ bê tông) dưới mỗi máy CNC | 50% → 0,62 mm/s |
| **Cấp 2** | Spring isolator + rubber pad trên inertia block | 90% → **0,062 mm/s** |
| **Cấp 3** | Isolation trench giữa Khối A và B | 80% → **0,012 mm/s** |
| **Kết quả tại Khối A** | Khoảng cách 25m thêm suy giảm ~60% | → **~0,005 mm/s** ✅ |
| **Target** | v < 0,1 mm/s tại Khối A | **ĐẠT — dư 20×** |

> **Tổng chi phí cách ly rung:** ~**520.000 USD** [C] (đã tham chiếu P3 EIA Mục 4.3.4, Chương VII). Bao gồm: 25 bệ bê tông (125K) + 25 spring isolator (250K) + Rãnh cách ly (120K) + Sensor (15K) + Lắp đặt (10K).

## 3.4. Chip Conveyor System

| Thông số | Giá trị | Phân loại |
|----------|---------|-----------|
| Type | Magnetic + Auger conveyor (ngầm dưới nền) | [A] |
| Lý do ngầm | Giữ sàn sạch, tránh dầu/chip rơi, an toàn di chuyển | — |
| Channel size | 300W × 250H mm (bê tông hoặc SS316) | [A] |
| Tốc độ chip removal | ≥ 0,5 m/s | [B] |
| Capacity | ~500 kg/h (đủ cho 25 máy CNC, ước tính 20 kg chip/máy/h) | [A] |
| Central collection | 1 bể thu chip 5 m³ (chip sắt, nhôm, inox — tách riêng) | [A] |
| Coolant separator | Tại bể thu — tách coolant khỏi chip, tái sử dụng coolant | [A] |
| Chin type handling | Ferrous: magnetic conveyor. Non-ferrous: auger conveyor | [B] |
| Class D fire risk | Chip kim loại nhẹ (Ti, Mg) → KHÔNG dùng nước [P7 Chương III] | [C] |

> **Chi phí Chip Conveyor:** ~**85.000 USD** [A] (Underground system cho 25 stations + central collection)

## 3.5. Compressed Air System

| Thông số | Giá trị | Phân loại |
|----------|---------|-----------|
| Áp suất công tác | 8 bar (tại điểm sử dụng — sau lọc) | [C] |
| Áp suất đầu nén | 10 bar (trước dryer + filter) | [A] |
| Loại máy nén | **Oil-free scroll/screw** (Class 0 theo ISO 8573-1) | [C] |
| Số lượng | 3 × 55 kW (N+1) — Phase 1: 2 units | [A] |
| Lưu lượng mỗi máy | ~8,5 m³/min @ 10 bar | [B] |
| Tổng lưu lượng (Phase 2) | ~17 m³/min (2 máy chạy + 1 standby) | [A] |
| Air Receiver | 2 × 3.000 L (tổng 6.000 L) | [B] |
| Dryer | 2 × Refrigerant dryer + 1 × Desiccant dryer (for CMM room) | [A] |
| Dew point | ≤ -20°C (general), ≤ -40°C (CMM room) | [B] |
| Filtration | 3-stage: Particulate (1µm) → Coalescing (0,01µm) → Carbon (odor) | [B] |
| Distribution | Ring main (loop) — SS316 pipe, DN50 | [A] |
| Monitoring | Flow meter + pressure sensor tại mỗi drop point | [A] |

> **Chi phí Compressed Air:** ~**195.000 USD** [A] (3 compressor + dryers + receiver + ring main + installation)

## 3.6. Coolant Management System

| Thông số | Giá trị | Phân loại |
|----------|---------|-----------|
| Type | **Central coolant supply system** (vs distributed per-machine) | [A] |
| Lý do | Tiết kiệm 30% coolant, kiểm soát chất lượng tập trung, dễ ZLD | — |
| Central tank | 10.000 L (insulated stainless steel) + mixing | [A] |
| Coolant type | Water-soluble semi-synthetic (5–8% concentration) | [B] |
| Coolant flow | Loop: Central tank → Pump → Per-machine manifold → Return → Filter → Tank | — |
| Filtration | Paper band filter (20µm) + Magnetic separator + Oil skimmer | [B] |
| Temperature | 20 ± 2°C (controlled — prevent thermal drift on workpiece) | [B] |
| Coolant life | 6–12 tháng (với proper maintenance) → ZLD xử lý spent coolant [P3] | [B] |
| Monitoring | Concentration (refractometer), pH, bacteria (dipslide) | [B] |

> **Chi phí Central Coolant:** ~**65.000 USD** [A] (Tank + pumps + piping + filtration + controls)

## 3.7. Overhead Crane

| Thông số | Giá trị | Phân loại |
|----------|---------|-----------|
| Type | EOT (Electric Overhead Travelling) — Double Girder | [A] |
| Capacity | 5 tấn (SWL) | [B] — CNC máy nặng nhất ~8T (tháo lắp từng phần) |
| Span | 20 m (qua 2 hàng máy chính) | [A] |
| Travelling length | 50 m (toàn Machine Shop dọc theo) | [A] |
| Hook height | 9 m (under crane = 10m, crane = 1m, trần = 12m) | [A] |
| Hoist speed | 0,5–5 m/min (variable) | [B] |
| Travel speed | 5–20 m/min (variable) | [B] |
| Control | Pendant + Radio remote (for rigger below) | [A] |
| Safety | Overload protection, anti-collision, limit switches, warning beacon | [C] |

> **Chi phí Crane 5T × 50m:** ~**95.000 USD** [B] (supply + install + testing + runways)

## 3.8. CMM Room (Coordinate Measuring Machine)

| Thông số | Giá trị | Tiêu chuẩn | Phân loại |
|----------|---------|-------------|-----------|
| Diện tích | 200 m² | — | [A] |
| Clean Room Class | ISO 8 (Class 100.000) → mục tiêu Class 1.000 cục bộ | ISO 14644-1 | [A] |
| Temperature | **20,0 ± 0,5°C** (precision metrology requirement) | ISO 1:2016 | [C] |
| Humidity | 45 ± 10% RH | — | [B] |
| Vibration | **< 0,05 mm/s** (stricter than DC — VC-D vibration criteria) | IEST-RP-CC012 | [C] |
| Foundation | Separate isolated slab (dầy 400mm, 4 spring mount) | — | [A] |
| Wall | Tường cách âm STC 50 (double gypsum + insulation) | — | [A] |
| Airlock | 1 airlock entry (phòng đệm thay đồ) | — | [A] |
| HVAC | Dedicated CRAH, 100% recirculation (no outside air mixing) | — | [A] |
| CMM equipment | 1 × Bridge CMM (Zeiss/Hexagon), 1 × Vision System | — | [A] |
| Lighting | 500–750 lux, non-flickering LED, no UV | — | [B] |
| ESD flooring | Conductive vinyl, < 10⁶ Ω | IEC 61340 | [B] |

> **Chi phí CMM Room:** ~**180.000 USD** [A] (Clean room build + HVAC + isolation foundation + ESD floor)

## 3.9. HVAC — Khối B

| Hệ thống | Khu vực | Thiết kế | Phân loại |
|-----------|---------|----------|-----------|
| **LEV (Local Exhaust Ventilation)** | Mỗi CNC machine | Hood tại spindle area → Ducting → Cyclone separator → HEPA → Exhaust | [A] |
| LEV flow rate | 1.500–2.000 m³/h per machine | [B] |
| Total LEV exhaust | ~37.500 m³/h (25 machines) | [A] |
| **Make-up Air** | Machine Shop | AHU (Air Handling Unit) — filtered outside air, heated/cooled | [A] |
| Make-up air flow | ~40.000 m³/h (1,1× exhaust to maintain slight positive pressure) | [A] |
| **Temperature Control** | Machine Shop | 20 ± 2°C — split type AC + AHU | [B] |
| AC capacity | 12 × 5TR split AC (tổng 60 TR ≈ 211 kW) | [A] |
| **Mist collector** | High-speed machining | Electrostatic mist collector tại mỗi máy (where cutting fluid mist heavy) | [B] |
| Mist collector quantity | 10 units (for high-RPM machines) | [A] |

> **Chi phí HVAC Khối B:** ~**320.000 USD** [A] (LEV system + AHU + Split AC + ducting + installation)

---

# CHƯƠNG IV: THIẾT KẾ KHỐI C — NHÀ MÁY SMT (3.000 m²)

## 4.1. Thông Số Thiết Kế Tổng Quát

| Thông số | Giá trị | Phân loại |
|----------|---------|-----------|
| Diện tích tổng | 3.000 m² | [C] |
| Chiều cao trần | 5 m (standard industrial) | [A] |
| Tải điện Phase 1 | 400 kW | [A] |
| Tải điện Phase 2 | 800 kW | [A] |
| Clean Room area | 600 m² (ISO 7 / Class 10.000) | [A] |
| Robot Assembly area | 800 m² | [A] |
| Temperature (Clean Room) | 22 ± 2°C | [B] IPC-A-610 |
| Humidity (Clean Room) | 40–60% RH | [B] IPC-A-610 |
| ESD control | Toàn bộ production area | [C] IPC-A-610 |

## 4.2. Clean Room ISO 7 (600 m²)

### 4.2.1. Thiết kế Clean Room

| Thông số | Giá trị | Tiêu chuẩn | Phân loại |
|----------|---------|-------------|-----------|
| ISO Class | ISO 7 (tương đương FED-STD Class 10.000) | ISO 14644-1 | [C] |
| Max particles ≥0,5µm | ≤ 352.000/m³ | ISO 14644-1 | [C] |
| Air changes per hour | 30–60 ACH (target 45 ACH) | ISO 14644-4 | [B] |
| **FFU (Fan Filter Unit)** | 120 units (600 × 600 mm, 0,35 m/s face velocity) | — | [A] |
| FFU coverage | ~70% ceiling area = hoàn toàn đủ cho ISO 7 | [B] |
| Filter grade | **HEPA H14** (99,995% @ 0,3µm) — EN 1822 | EN 1822 | [C] |
| Pre-filter | G4 (coarse) + F9 (fine) trước AHU | EN 779 | [B] |
| Positive pressure | +12,5 Pa so với hành lang (cascading) | ISO 14644-4 | [C] |
| Airlock | 2 airlocks (personnel + material) | ISO 14644-4 | [A] |
| Wall & ceiling | Sandwich panel (PIR core, 50mm, color-coated steel) | — | [B] |
| Floor | ESD epoxy, seamless, < 10⁶ Ω surface resistance | IEC 61340-5-1 | [C] |
| Lighting | 500 lux, IP65, LED cleanroom luminaire | — | [B] |

### 4.2.2. HVAC cho Clean Room

| Thông số | Giá trị | Phân loại |
|----------|---------|-----------|
| AHU (Air Handling Unit) | 2 × 25.000 m³/h (N+1) | [A] |
| Supply air temperature | 16°C | [B] |
| Return air | 70% recirculation + 30% fresh air | [A] |
| Chiller cho Clean Room | 1 × 150 kW air-cooled chiller (dedicated) | [A] |
| Humidification | Steam humidifier (2 × 30 kg/h) — for dry season | [A] |
| Dehumidification | Via AHU cooling coil | — |
| Ductwork | Galvanized steel, internally sealed, leakage class D | EN 1507/EN 12237 | [B] |
| Differential pressure monitoring | Magnesense dP sensor + alarm at BMS | [A] |

> **Chi phí Clean Room ISO 7:** ~**450.000 USD** [A] (120 FFU + panels + AHU + chiller + floor + install)

## 4.3. SMT Production Line Layout

### Dây chuyền SMT (1 line Phase 1, 2 lines Phase 2)

```
  ┌──────┐  ┌────────┐  ┌─────┐  ┌─────────┐  ┌────────┐  ┌─────┐  ┌────────┐
  │LOADER│→ │SOLDER  │→ │ SPI │→ │ CHIP    │→ │REFLOW  │→ │ AOI │→ │UNLOADER│
  │      │  │PASTE   │  │     │  │MOUNTER  │  │ OVEN   │  │     │  │        │
  │      │  │PRINTER │  │     │  │(H+F)    │  │10-zone │  │     │  │        │
  └──────┘  └────────┘  └─────┘  └─────────┘  └────────┘  └─────┘  └────────┘
                                                    │
                                              EXHAUST LEV
                                              + Act.Carbon
```

| Thiết bị | Qty P1 | Qty P2 | Kích thước | Điện (kW) | Phân loại |
|----------|-------:|-------:|-----------|----------:|-----------|
| PCB Loader | 1 | 2 | 1,2 × 0,8m | 0,5 | [A] |
| Solder Paste Printer | 1 | 2 | 1,5 × 1,2m | 2 | [A] |
| SPI (Solder Paste Inspection) | 1 | 2 | 1,3 × 1,0m | 1 | [A] |
| Chip Mounter (High-speed) | 1 | 2 | 2,5 × 1,5m | 5 | [A] |
| Chip Mounter (Flexible) | 1 | 2 | 2,5 × 1,5m | 5 | [A] |
| Reflow Oven (10-zone) | 1 | 2 | 5,0 × 1,2m | 25 | [A] |
| AOI (Automated Optical Inspection) | 1 | 2 | 1,5 × 1,2m | 2 | [A] |
| PCB Unloader | 1 | 2 | 1,2 × 0,8m | 0,5 | [A] |
| **Total per line** | | | ~16m length | ~41 kW | |

### Reflow Oven Exhaust

| Thông số | Giá trị | Phân loại |
|----------|---------|-----------|
| Exhaust type | LEV (Local Exhaust Ventilation) kết nối trực tiếp oven | [A] |
| Exhaust flow | 800–1.200 m³/h per oven | [B] |
| Treatment | Condenser (cooling trap) → Activated Carbon adsorber | [A] |
| Pollutants | Flux fumes (rosin acids, aldehydes), low-concentration VOCs | [B] |
| Emission limit | Tổng VOC ≤ 20 mg/m³ (QCVN 20:2009/BTNMT) | [C] |
| Stack height | 12 m (above roofline) | [A] |

## 4.4. IPA Storage (ATEX Zone)

| Thông số | Giá trị | Tiêu chuẩn | Phân loại |
|----------|---------|-------------|-----------|
| Chemical | IPA (Isopropyl Alcohol), CH₃CHOHCH₃ | — | [C] |
| Flash point | 12°C — **Extremely Flammable** | — | [C] |
| Storage volume | 200 L drums × 10 = 2.000 L max on-site | — | [A] |
| ATEX Classification | **Zone 1** (bên trong phòng), **Zone 2** (1m bên ngoài cửa) | IEC 60079-10-1 | [C] |
| Room size | 50 m² (tách biệt, tường REI 120) | QCVN 06:2022 | [C] |
| Ventilation | **≥ 15 ACH** (continuous, explosion-proof fan) | IEC 60079-14 | [C] |
| LEL monitoring | 2 sensors (0–100% LEL), alarm at 20% LEL, shutdown at 40% LEL | IEC 60079-29-1 | [C] |
| Electrical | ALL Ex-rated: Ex d (flameproof) lighting + switches + fan | IEC 60079-1 | [C] |
| Spill containment | Bund wall 150mm → capacity ≥ 110% largest container | TCVN 5507:2002 | [C] |
| Fire suppression | FM-200 gas suppression (NO water — IPA is water-miscible) [P7 Ch.IV] | [C] |
| Distance from buildings | ≥ 8 m | QCVN 06:2022 | [C] |

## 4.5. Robot Assembly Area (800 m²)

| Thông số | Giá trị | Phân loại |
|----------|---------|-----------|
| Area | 800 m² | [A] |
| Robot cells | 6 cells Phase 1, 12 cells Phase 2 | [A] |
| Robot type | SCARA (4-axis) + 6-axis articulated (assembly + soldering) | [A] |
| Safety cage | Light curtain (Type 4, SIL 3) + Safety fence 1.4m | ISO 13849 / IEC 62443 | [C] |
| Emergency stop | Per cell (Category 0) + Area E-stop (Category 1) | IEC 60204-1 | [C] |
| Floor marking | Yellow safety zone, blue material zone, green walkway | OSHA + TCVN | [B] |
| Compressed air | 6 bar, filtered oil-free (from Khối B ring main extension) | [A] |
| Vision system | 1 per cell (camera + lighting for inspection) | [A] |
| Conveyor | Modular belt conveyor linking cells (speed adjustable 0,5–3 m/min) | [A] |

## 4.6. ESD Control (Toàn Khối C)

| Thành phần | Giải pháp | Tiêu chuẩn | Phân loại |
|------------|-----------|-------------|-----------|
| **Flooring** | ESD epoxy (10⁵–10⁹ Ω surface to ground) | IEC 61340-5-1 | [C] |
| **Grounding** | All workstation grounded via wrist strap + table mat | IEC 61340-5-1 | [C] |
| **Wrist strap** | Single-wire with 1MΩ resistor + continuous monitor | IEC 61340-5-1 | [C] |
| **Ionizer** | Overhead ionizer bar at each workstation | IEC 61340-5-1 | [B] |
| **Humidity** | ≥ 40% RH (maintained by AHU humidifier) | IPC-A-610 | [C] |
| **Packaging** | ESD shielding bags (pink poly + metallized) | ANSI/ESD S541 | [B] |
| **Personal grounding** | ESD shoes or heel strap + periodic tester at entry | IEC 61340-5-1 | [B] |
| **Audit** | Weekly ESD audit (flooring, wrist strap, equipment) | ANSI/ESD S20.20 | [A] |

> **Chi phí ESD toàn Khối C:** ~**45.000 USD** [A] (ESD floor + grounding + wrist strap + ionizer + audit tools)

---

# CHƯƠNG V: HỆ THỐNG ĐIỆN TỔNG HỢP

## 5.1. Single Line Diagram (SLD) — Toàn Tổ Hợp

### 5.1.1. Sơ Đồ Nguyên Lý

```
                         EVN 22kV (KCNC Feeder)
                                │
                    ┌───────────┴───────────┐
                    │                       │
              ┌─────┴─────┐           ┌─────┴─────┐
              │   TX-1    │           │   TX-2    │
              │ 2.500 kVA │           │ 2.500 kVA │
              │ 22/0,4 kV │           │ 22/0,4 kV │
              │(Dyn11,Imp6%)│          │(Dyn11,Imp6%)│
              └─────┬─────┘           └─────┬─────┘
                    │                       │
              ┌─────┴─────┐           ┌─────┴─────┐
              │  MDB-1    │           │  MDB-2    │
              │  Main DB  │───Bus-tie─│  Main DB  │
              │  (Normal) │  (N/O)    │ (Reserve) │
              └──┬──┬──┬──┘           └──┬──┬──┬──┘
                 │  │  │                 │  │  │
         ┌───────┘  │  └───────┐  ┌─────┘  │  └─────┐
         │          │          │  │         │        │
    ┌────┴───┐ ┌────┴───┐ ┌───┴──┴──┐ ┌────┴───┐ ┌──┴─────┐
    │Sub-MDB │ │Sub-MDB │ │Sub-MDB  │ │Emerg.  │ │Solar   │
    │Khối A  │ │Khối B  │ │Khối C   │ │Panel   │ │Inverter│
    │(DC)    │ │(CNC)   │ │(SMT)    │ │(PCCC)  │ │500kWp  │
    └────┬───┘ └────┬───┘ └────┬────┘ └────┬───┘ └────┬───┘
         │          │          │           │          │
      UPS 2N    CNC DB     SMT DB     Fire Pump   Behind
      → PDU    + MCC      + MCC     + Emergency   Meter
      → Racks  25 máy    CR + Robot  Lighting
```

### 5.1.2. Thông Số Transformer

| Thông số | TX-1 | TX-2 | Phân loại |
|----------|------|------|-----------|
| Capacity | 2.500 kVA | 2.500 kVA | [A] |
| Primary | 22 kV, 3-phase | 22 kV | [C] |
| Secondary | 400V, 3-phase, 50Hz | 400V | [C] |
| Vector group | Dyn11 | Dyn11 | [B] |
| Impedance | 6% | 6% | [B] |
| Cooling | ONAN (Oil Natural, Air Natural) | ONAN | [B] |
| Tap changer | ± 2 × 2,5% OLTC (On-Load) | OLTC | [A] |
| Efficiency | ≥ 99,0% at 75% load | — | [B] |
| Installation | Outdoor, concrete pad, oil containment bund | TCVN | [C] |
| Protection | Buchholz relay + OTI + WTI + Pressure relief | IEC 60076 | [B] |

> **Chi phí 2 × Transformer 2.500 kVA:** ~**280.000 USD** [B] (supply + install + testing + oil)

### 5.1.3. Load Summary

| Khối | Phase 1 (kW) | Phase 2 (kW) | Power Factor | kVA (Phase 2) | % Tổng |
|------|-------------:|-------------:|-------------:|---------------:|-------:|
| **Khối A (DC)** | 2.025 | 4.050 | 0,95 | 4.263 | 60% |
| **Khối B (CNC)** | 700 | 1.600 | 0,85 | 1.882 | 27% |
| **Khối C (SMT)** | 400 | 800 | 0,90 | 889 | 13% |
| **Chung** (Pump, Light, HVAC) | 150 | 250 | 0,85 | 294 | 4% |
| **TỔNG** | **3.275** | **6.700** | **0,92** | **7.328** | 100% |
| **Diversity (0,8)** | **2.620** | **5.360** | — | **5.826** | |
| **Transformer Capacity** | — | — | — | **5.000** (2×2.500) | |
| **Utilization** | **52%** | **107%** → Cần TX-2 | — | — | |

> **⚠️ Lưu ý:** Phase 2 full load (5.826 kVA) vượt 1 transformer (2.500 kVA). Thiết kế 2 transformer đảm bảo (a) N+1 redundancy Phase 1, và (b) đủ tải Phase 2. Phase 2 cần cả 2 TX hoạt động song song → Bus-tie đóng.

## 5.2. Generator Farm

### 5.2.1. Generator Configuration

| Generator | Công suất | Phục vụ | Nhiên liệu | Phân loại |
|-----------|-----------|---------|-------------|-----------|
| **GEN-1 (DC Primary)** | 2.500 kVA / 2.000 kW | Khối A — Path A | Diesel | [A] |
| **GEN-2 (DC Backup)** | 2.500 kVA / 2.000 kW | Khối A — Path B (N+1) | Diesel | [A] |
| **GEN-3 (Factory)** | 1.000 kVA / 800 kW | Khối B + C + Chung | Diesel | [A] |

### 5.2.2. Generator Specifications

| Thông số | GEN-1 & GEN-2 | GEN-3 | Phân loại |
|----------|----------------|-------|-----------|
| Rating | 2.500 kVA (Standby) | 1.000 kVA (Standby) | [A] |
| Engine | MTU/Cummins QSK60 or equiv. | Cummins QST30 or equiv. | [B] |
| Alternator | Stamford/Leroy-Somer | Stamford | [B] |
| Output | 400V, 3-phase, 50Hz | 400V, 3-phase, 50Hz | [C] |
| Start time | ≤ 10 seconds (Tier III) | ≤ 15 seconds | [C] |
| Transfer time | ≤ 10 seconds via ATS | ≤ 12 seconds via ATS | [C] |
| Runtime @ full load | 24h (from on-site fuel) | 48h (from on-site fuel) | [A] |
| Noise | 95 dB(A) @ 1m (with attenuator: 75 dB(A)) | 90 dB(A) @ 1m | [B] |
| Enclosure | Weatherproof canopy + acoustic enclosure | Weatherproof canopy | [A] |
| Emission | Tier 4 Final / Stage V (SCR + DPF) [P3 Mục 4.2.5] | Tier 4 Final | [C] |

### 5.2.3. Fuel Storage

| Bồn | Dung tích (L) | Runtime (h) | Phục vụ | Phân loại |
|-----|---------------:|------------:|---------|-----------|
| **Fuel Tank DC-1** | 10.000 | 24h @ full load GEN-1 | GEN-1 | [A] |
| **Fuel Tank DC-2** | 10.000 | 24h @ full load GEN-2 | GEN-2 | [A] |
| **Fuel Tank Factory** | 5.000 | 48h @ full load GEN-3 | GEN-3 | [A] |
| **Day Tank (DC)** | 2 × 1.000 | 4–5h per Gen | Auto-fill from main tank | [B] |

- **Bund containment:** 110% dung tích bồn lớn nhất — bê tông + lớp lót HDPE [C]
- **Leak detection:** Double-wall tank + interstitial monitoring [A]
- **Fire safety:** CO2 suppression cho khu bồn diesel [P7 Chương V] [C]

### 5.2.4. ATS (Automatic Transfer Switch)

| ATS | Rating | Sources | Priority | Phân loại |
|-----|--------|---------|----------|-----------|
| **ATS-A (DC Path A)** | 4.000A | EVN (TX-1) → GEN-1 | EVN > GEN | [A] |
| **ATS-B (DC Path B)** | 4.000A | EVN (TX-2) → GEN-2 | EVN > GEN | [A] |
| **ATS-C (Factory)** | 1.600A | EVN (MDB-1/2) → GEN-3 | EVN > GEN | [A] |
| Transfer time | ≤ 10s (DC) / ≤ 12s (Factory) | — | [C] |
| Retransfer | With delay 5 min (EVN stable check) | — | [B] |

> **Chi phí Generator Farm:** GEN-1 + GEN-2 = ~**900.000 USD** [B], GEN-3 = ~**180.000 USD** [B], Fuel Tanks = ~**45.000 USD** [A], ATS (3 units) = ~**60.000 USD** [A]. **Tổng: ~1.185.000 USD**.

## 5.3. Solar PV 500 kWp

| Thông số | Giá trị | Phân loại |
|----------|---------|-----------|
| Capacity | 500 kWp (DC) | [C] |
| Location | Mái Khối B + Khối C (~3.000 m² mái khả dụng) | [A] |
| Panel type | Bi-facial monocrystalline 550Wp | [B] |
| Number of panels | ~910 panels | [A] |
| Panel area | ~2.000 m² (chiếm ~67% mái) | [A] |
| Mounting | Aluminum rail, ballasted (flat roof) + tilted 10° South | [B] |
| Wind rating | ≥ 120 km/h (typhoon region) | [C] |
| Inverter | 5 × 100 kW string inverter (SMA/Huawei/Sungrow) | [A] |
| Connection | **Behind-the-meter** — self-consumption priority | [C] |
| Annual generation | **700–750 MWh/năm** (1.400–1.500 kWh/kWp, TPHCM solar resource) | [B] |
| Self-consumption ratio | ~95% (industrial load profile matches solar) | [A] |
| Net savings | ~700 MWh × 0,082 USD/kWh × 95% = **~54.500 USD/năm** | [A] |
| Payback | 500.000 / 54.500 = **~9,2 năm** | [A] |
| Metering | Net metering hoặc self-consumption only (theo QĐ 13/2020/QĐ-TTg) | [C] |
| Monitoring | Per-string monitoring, cloud-based portal | [A] |

> **Chi phí Solar PV 500 kWp:** ~**500.000 USD** [B] (1.000 USD/kWp — panels + inverters + mounting + BOS + install). Đã tham chiếu P3 EIA Chương VII — Solar PV nằm trong CAPEX Môi trường.

## 5.4. Lightning Protection

| Thông số | Giá trị | Tiêu chuẩn | Phân loại |
|----------|---------|-------------|-----------|
| System | ESE (Early Streamer Emission) | NFC 17-102 | [A] |
| Kim thu sét | 2 units (1 trên Khối A, 1 trên Khối B/C) | — | [A] |
| Protection radius | 80–100 m per rod (level III) | NFC 17-102 | [B] |
| Down conductor | 2 per rod, copper tape 30×2mm | IEC 62305 | [B] |
| Earth electrode | Copper-bonded rod 3m × 4 points per building | IEC 62305-3 | [B] |
| Earth resistance | ≤ 10 Ohm (lightning) | IEC 62305-3 | [C] |
| SPD (Surge Protection) | Type 1+2+3 cascade at MDB → Sub-MDB → PDU | IEC 61643-11 | [B] |

## 5.5. Grounding System

| Thông số | Giá trị | Tiêu chuẩn | Phân loại |
|----------|---------|-------------|-----------|
| System | **TN-S** (neutral and PE separate throughout) | IEC 60364 | [C] |
| Main earth resistance | **≤ 1 Ohm** (DC Tier III requirement) | Uptime Institute | [C] |
| Earth electrode | Ring earth (copper strip 25×3mm) + Rod earth (3m Cu-bonded, 12 points) | IEC 62305 | [B] |
| Equipotential bonding | Main bonding bar per building + Supplementary bonding in DC | IEC 60364-5-54 | [C] |
| DC rack grounding | Each rack bonded to supplementary bonding bar via 16mm² Cu | TIA-942 | [C] |
| CNC machine grounding | Each machine bonded individually, ≤ 0,5 Ohm | IEC 60204-1 | [C] |
| Clean room grounding | ESD ground bus + Building ground (separated at main bonding bar) | IEC 61340-5-1 | [C] |
| Testing | Annual earth resistance test + thermographic scan | — | [A] |

> **Chi phí Lightning + Grounding:** ~**85.000 USD** [A] (ESE rods + down conductors + earth grid + SPD + bonding)

---

# CHƯƠNG VI: HỆ THỐNG NƯỚC

## 6.1. Cấp Nước

### 6.1.1. Nguồn và Đấu Nối

| Thông số | Giá trị | Phân loại |
|----------|---------|-----------|
| Nguồn | Hệ thống cấp nước KCNC TP.HCM | [C] |
| Đấu nối | DN100 (4") — tại ranh giới lô đất | [C] |
| Áp lực cấp | 2–3 bar (từ mạng KCNC) | [B] |
| Quota cấp nước | **150 m³/ngày** (cần đàm phán tăng lên 200 m³/ngày) [P3] | [C] |
| Đồng hồ | DN100, electromagnetic flow meter + KCNC meter | [A] |

### 6.1.2. Bể Chứa Nước Sạch

| Thông số | Giá trị | Phân loại |
|----------|---------|-----------|
| Dung tích | **100 m³** (dự trữ ~2 ngày nước sinh hoạt + process) | [A] |
| Vật liệu | Bê tông cốt thép, chống thấm epoxy | [B] |
| Vị trí | Cạnh khu kỹ thuật chung, gần Khối A (shortest pipe to chiller) | [A] |
| Water level | Float valve + Solenoid valve + Level transmitter → BMS | [A] |
| Chlorination | Auto-dosing NaOCl (0,2–0,5 mg/L residual) | QCVN 01:2009/BYT | [B] |

### 6.1.3. Bơm Tăng Áp

| Bơm | Lưu lượng | Cột áp | Công suất | Mode | Phân loại |
|-----|-----------|--------|-----------|------|-----------|
| Pump 1 (Duty) | 15 m³/h | 40 m | 5,5 kW | Auto (VFD) | [A] |
| Pump 2 (Standby) | 15 m³/h | 40 m | 5,5 kW | Auto standby | [A] |
| Jockey pump | 2 m³/h | 45 m | 1,5 kW | Pressure maintain | [A] |

### 6.1.4. Phân Phối Nước

| Tuyến | Đường ống | Phục vụ | Phân loại |
|-------|-----------|---------|-----------|
| Chính | DN80 (PE HDPE PN16) | Từ bể → Khu phân phối | [A] |
| Khối A (DC) | DN50 | Chiller make-up + Sinh hoạt | [A] |
| Khối B (CNC) | DN50 | Coolant make-up + Sinh hoạt + ZLD input | [A] |
| Khối C (SMT) | DN40 | Process water + Sinh hoạt | [A] |
| PCCC | DN150 | Từ bể PCCC 750 m³ → Bơm PCCC → Sprinkler/Hydrant [P7] | [C] |

## 6.2. Cooling Water Loop (Datacenter)

### 6.2.1. Closed-Loop Chilled Water

```
  ┌──────────┐     7°C      ┌───────────────────┐
  │  CHILLER │─────────────→│   DATA HALL       │
  │  PLANT   │              │  CRAH + CDU       │
  │ 3×500kW  │←─────────────│  (heat absorbed)  │
  └──────────┘     12°C     └───────────────────┘
       │ Condenser side
       │ 37°C
  ┌────┴─────┐
  │ COOLING  │  32°C
  │  TOWER   │──→ Return to Chiller condenser
  │ 4×400kW  │
  └──────────┘
       │ Evaporation + Blowdown + Drift
       ↓
  Make-up water: 60–80 m³/ngày [P3 after hybrid]
```

### 6.2.2. Water Treatment (Cooling Tower)

| Thông số | Giá trị | Phân loại |
|----------|---------|-----------|
| Cycles of concentration | 5–7 (optimized to minimize water use) | [A] |
| Biocide | Auto-dosing oxidizing biocide (NaOCl) + Non-oxidizing quarterly | [B] |
| Anti-scale | Phosphonate-based, auto-dosing | [B] |
| pH control | Target 7,0–8,5 (acid dosing if needed) | [B] |
| Conductivity | Auto-blowdown when conductivity > 2.000 µS/cm | [A] |
| Blowdown water | Discharge to general wastewater treatment [P3 Mục 5.2] | [C] |
| Monitoring | Online: pH, Conductivity, ORP, Temperature → BMS | [A] |

### 6.2.3. Water Conservation Measures

| Biện pháp | Tiết kiệm | Chi phí | Phân loại |
|-----------|-----------|---------|-----------|
| Hybrid cooling (liquid + air-cooled backup) | 40% nước CT | Đã tính trong CAPEX DC | [A] |
| High cycles of concentration (5–7) | 20% vs CoC 3 | 15.000 USD (controller) | [A] |
| Blowdown water reuse (tưới cây, rửa sàn) | 10% recovery | 5.000 USD (piping) | [A] |
| Rainwater harvesting (optional P2) | 10–20 m³/ngày mùa mưa | 25.000 USD (tank + filter) | [A] |
| **Tổng tiết kiệm** | **~55–60%** vs baseline | | |

> **Kết quả:** Từ baseline 133 m³/ngày (full evaporative, 100% load) → **60–80 m³/ngày** sau hybrid + water conservation. Cộng các khối khác (~25 m³/ngày) + sinh hoạt (~15 m³/ngày) = **~100–120 m³/ngày**. Nằm trong quota 150 m³/ngày nhưng **KHÔNG có margin**. Cần đàm phán quota 200 m³/ngày hoặc triển khai Plan B (Air-cooled chiller) — xem P3 EIA V2.1 bổ sung.

## 6.3. Thoát Nước

| Loại | Lưu lượng | Nơi xả | Xử lý | Phân loại |
|------|-----------|--------|-------|-----------|
| Nước mưa | ~450 m³/ngày (max) | Cống KCNC riêng (tách biệt) | Lắng sơ bộ (oil trap) | [B] |
| Nước thải sinh hoạt | ~15 m³/ngày | XLNT tập trung KCNC | Bể tự hoại 3 ngăn → Cống | [C] |
| Nước thải CNC (coolant) | ~5 m³/ngày | **ZLD (Zero Liquid Discharge)** | 7 bước xử lý [P3 Mục 5.2.2] | [C] |
| Blowdown cooling tower | ~15–25 m³/ngày | XLNT chung | Trung hòa + lắng | [A] |
| Nước thải SMT | ~3 m³/ngày | XLNT chung | DI water rinse → recycled | [A] |

## 6.4. Water Balance Diagram

```
                        INPUT (150 m³/ngày quota)
                              │
                    ┌─────────┴─────────┐
                    │                   │
            ┌───────┴──────┐    ┌───────┴──────┐
            │  NƯỚC PROCESS│    │ NƯỚC SINH HOẠT│
            │  ~120 m³/ngày│    │   ~15 m³/ngày │
            └──────┬───────┘    └───────┬───────┘
                   │                    │
        ┌──────────┼──────────┐         │
        │          │          │         │
   ┌────┴───┐ ┌───┴────┐ ┌───┴───┐ ┌───┴───┐
   │Cooling │ │ CNC    │ │ SMT   │ │Sanitary│
   │Tower   │ │Coolant │ │Process│ │       │
   │80m³/d  │ │20m³/d  │ │10m³/d │ │15m³/d │
   └────┬───┘ └───┬────┘ └───┬───┘ └───┬───┘
        │         │          │         │
   ┌────┴───┐ ┌───┴────┐ ┌───┴───┐ ┌───┴───┐
   │Evapora-│ │  ZLD   │ │Recycle│ │Septic │
   │tion    │ │95% rcvr│ │  80%  │ │ tank  │
   │60m³/d  │ │→19m³/d │ │→8m³/d │ │       │
   └────┬───┘ └───┬────┘ └───┬───┘ └───┬───┘
        │         │          │         │
    ┌───┴───┐  ┌──┴──┐   ┌──┴──┐   ┌──┴──┐
    │Blow-  │  │Solid│   │XLNT │   │XLNT │
    │down   │  │waste│   │chung│   │KCNC │
    │20m³/d │  │1m³/d│   │2m³/d│   │15m³/│
    └───┬───┘  └─────┘   └──┬──┘   └──┬──┘
        │                   │         │
        └───────────────────┴─────────┘
                    │
             XLNT Chung → Cống KCNC
             (~37 m³/ngày nước thải)

    TỔNG INPUT:  ~135 m³/ngày (typical) — trong quota 150 m³/ngày
    TỔNG EVAP:   ~60 m³/ngày (cooling tower)
    TỔNG THẢI:   ~37 m³/ngày (các nguồn → XLNT)
    RECYCLED:    ~27 m³/ngày (ZLD + SMT recirculation)
    SOLID WASTE: ~1 m³/ngày (ZLD concentrate)
    BALANCE:     135 = 60 + 37 + 27 + 1 + 10 (losses) ✓
```

---

# CHƯƠNG VII: BOQ & DỰ TOÁN M&E

## 7.1. BOQ Tổng Hợp Theo Hệ Thống

### 7.1.1. Hệ Thống Điện

| # | Hạng mục | Qty | Đơn giá (USD) | Tổng (USD) | Phase | Phân loại |
|---|----------|----:|---------------:|-----------:|-------|-----------|
| 1 | Transformer 2.500 kVA (22/0,4kV) | 2 | 120.000 | 240.000 | P1: 1, P2: 1 | [B] |
| 2 | MDB + Sub-MDB + Distribution Boards | 1 lot | — | 180.000 | P1 | [A] |
| 3 | Generator 2.500 kVA (DC) | 2 | 380.000 | 760.000 | P1: 1, P2: 1 | [B] |
| 4 | Generator 1.000 kVA (Factory) | 1 | 180.000 | 180.000 | P1 | [B] |
| 5 | Fuel Storage (3 tanks + day tanks) | 1 lot | — | 45.000 | P1 | [A] |
| 6 | ATS (3 units) | 3 | 20.000 | 60.000 | P1 | [A] |
| 7 | UPS 1.000 kVA (DC) — LiFePO4 | 4 | 300.000 | 1.200.000 | P1: 2, P2: 2 | [B] |
| 8 | PDU (per rack — 100 racks) | 200 | 2.500 | 500.000 | P1: 100, P2: 100 | [B] |
| 9 | Cable + Cable tray + Containment | 1 lot | — | 350.000 | P1+P2 | [A] |
| 10 | Solar PV 500 kWp | 1 | 500.000 | 500.000 | P1: 300kWp, P2: 200kWp | [B] |
| 11 | Lightning + Grounding | 1 lot | — | 85.000 | P1 | [A] |
| 12 | Switchgear + Protection relays | 1 lot | — | 120.000 | P1 | [A] |
| 13 | BMS (Building Management System) | 1 lot | — | 150.000 | P1 | [A] |
| | **SUBTOTAL ĐIỆN** | | | **4.370.000** | | |

### 7.1.2. Hệ Thống Cooling (DC)

| # | Hạng mục | Qty | Đơn giá (USD) | Tổng (USD) | Phase | Phân loại |
|---|----------|----:|---------------:|-----------:|-------|-----------|
| 1 | Water-cooled screw Chiller 500 kW | 3 | 120.000 | 360.000 | P1: 2, P2: 1 | [B] |
| 2 | Cooling Tower Cell 400 kW | 4 | 30.000 | 120.000 | P1: 3, P2: 1 | [B] |
| 3 | In-Row CRAH (Zone 1) | 24 | 12.000 | 288.000 | P1: 12, P2: 12 | [B] |
| 4 | CDU 250 kW (Zone 2 — Liquid Cooling) | 8 | 45.000 | 360.000 | P1: 4, P2: 4 | [A] |
| 5 | Rear-Door HEX (passive + active) | 100 | 3.500 | 350.000 | P1: 50, P2: 50 | [B] |
| 6 | Chilled Water Piping + Pump + Valve | 1 lot | — | 180.000 | P1+P2 | [A] |
| 7 | Water Treatment System (CT) | 1 | 35.000 | 35.000 | P1 | [A] |
| 8 | Free Cooling Economizer (Plate HEX) | 1 | 40.000 | 40.000 | P1 | [A] |
| 9 | Leak Detection System (Zone 2) | 1 lot | — | 25.000 | P1 | [A] |
| | **SUBTOTAL COOLING** | | | **1.758.000** | | |

### 7.1.3. Hệ Thống HVAC (CNC + SMT)

| # | Hạng mục | Qty | Đơn giá (USD) | Tổng (USD) | Phase | Phân loại |
|---|----------|----:|---------------:|-----------:|-------|-----------|
| 1 | LEV System (CNC — 25 hoods + ducting) | 1 lot | — | 120.000 | P1+P2 | [A] |
| 2 | AHU Make-up Air (CNC) | 1 | 45.000 | 45.000 | P1 | [A] |
| 3 | Split AC (CNC — 12 × 5TR) | 12 | 5.000 | 60.000 | P1: 8, P2: 4 | [A] |
| 4 | Mist Collector (CNC — 10 units) | 10 | 4.500 | 45.000 | P1: 6, P2: 4 | [A] |
| 5 | Ducting (CNC) | 1 lot | — | 50.000 | P1+P2 | [A] |
| 6 | Clean Room ISO 7 (SMT — 600 m²) | 1 lot | — | 350.000 | P1 | [A] |
| 7 | AHU Clean Room (2 × 25.000 m³/h) | 2 | 35.000 | 70.000 | P1 | [A] |
| 8 | Air-cooled Chiller (SMT dedicated) | 1 | 55.000 | 55.000 | P1 | [A] |
| 9 | Steam Humidifier (Clean Room) | 2 | 8.000 | 16.000 | P1 | [A] |
| 10 | Reflow LEV + Activated Carbon | 2 | 15.000 | 30.000 | P1: 1, P2: 1 | [A] |
| | **SUBTOTAL HVAC** | | | **841.000** | | |

### 7.1.4. Hệ Thống CNC Chuyên Dụng

| # | Hạng mục | Qty | Đơn giá (USD) | Tổng (USD) | Phase | Phân loại |
|---|----------|----:|---------------:|-----------:|-------|-----------|
| 1 | Vibration Isolation (Inertia + Spring + Rubber) | 25 sets | 15.000 | 375.000 | P1: 15, P2: 10 | [B] |
| 2 | Isolation Trench (2m × 1m × 60m) | 1 | 120.000 | 120.000 | P1 | [A] |
| 3 | Vibration Sensors (real-time) | 3 | 5.000 | 15.000 | P1 | [A] |
| 4 | Chip Conveyor System (underground) | 1 lot | — | 85.000 | P1 | [A] |
| 5 | Compressed Air System (3 × 55kW + dryer) | 1 lot | — | 195.000 | P1: 2, P2: 1 | [A] |
| 6 | Central Coolant System | 1 lot | — | 65.000 | P1 | [A] |
| 7 | Overhead Crane 5T × 50m | 1 | 95.000 | 95.000 | P1 | [B] |
| 8 | CMM Room (Class 1000 + isolation) | 1 lot | — | 180.000 | P1 | [A] |
| | **SUBTOTAL CNC CHUYÊN DỤNG** | | | **1.130.000** | | |

### 7.1.5. Hệ Thống Nước

| # | Hạng mục | Qty | Đơn giá (USD) | Tổng (USD) | Phase | Phân loại |
|---|----------|----:|---------------:|-----------:|-------|-----------|
| 1 | Bể nước sạch 100 m³ | 1 | 25.000 | 25.000 | P1 | [A] |
| 2 | Bơm tăng áp (2 duty + 1 jockey) | 3 | 3.500 | 10.500 | P1 | [A] |
| 3 | Đường ống cấp nước (PE HDPE) | 1 lot | — | 35.000 | P1 | [A] |
| 4 | Water Treatment (Cooling Tower) | 1 lot | — | 35.000 | P1 | [A] |
| 5 | Đường ống thoát nước (mưa + sinh hoạt) | 1 lot | — | 45.000 | P1 | [A] |
| 6 | Bể tự hoại 3 ngăn | 1 | 8.000 | 8.000 | P1 | [A] |
| 7 | XLNT chung (40 m³/ngày) [P3] | 1 lot | — | 250.000 | P1 | [C] |
| 8 | ZLD System (CNC wastewater) [P3] | 1 lot | — | 450.000 | P1 | [C] |
| 9 | Rainwater harvesting (optional) | 1 lot | — | 25.000 | P2 | [A] |
| | **SUBTOTAL NƯỚC** | | | **883.500** | | |

### 7.1.6. Hạ Tầng Khác

| # | Hạng mục | Qty | Đơn giá (USD) | Tổng (USD) | Phase | Phân loại |
|---|----------|----:|---------------:|-----------:|-------|-----------|
| 1 | Raised Floor (1.500 m²) | 1.500 m² | 200 | 300.000 | P1: 750m², P2: 750m² | [B] |
| 2 | ESD Flooring (Khối C toàn bộ) | 3.000 m² | 15 | 45.000 | P1 | [A] |
| 3 | Physical Security (DC — CCTV, mantrap, biometric) | 1 lot | — | 120.000 | P1 | [A] |
| 4 | IPA Storage Room (ATEX) | 1 | 35.000 | 35.000 | P1 | [A] |
| 5 | ESD Control System (Khối C) | 1 lot | — | 45.000 | P1 | [A] |
| 6 | Robot Safety System (light curtain + cage) | 12 cells | 5.000 | 60.000 | P1: 6, P2: 6 | [A] |
| | **SUBTOTAL KHÁC** | | | **605.000** | | |

## 7.2. Tổng Hợp BOQ M&E

| Hệ thống | CAPEX (USD) | % Tổng |
|-----------|------------:|-------:|
| Điện (Transformer, Generator, UPS, PDU, Solar, Cable) | 4.370.000 | 44,7% |
| Cooling DC (Chiller, CT, CRAH, CDU, HEX) | 1.758.000 | 18,0% |
| HVAC CNC + SMT (LEV, AHU, Clean Room, AC) | 841.000 | 8,6% |
| CNC Chuyên dụng (Isolation, Conveyor, Air, Coolant, Crane, CMM) | 1.130.000 | 11,6% |
| Nước (Cấp, Thoát, ZLD, XLNT, CT treatment) | 883.500 | 9,0% |
| Khác (Raised floor, ESD, Security, ATEX, Robot safety) | 605.000 | 6,2% |
| **SUBTOTAL** | **9.587.500** | **98,1%** |
| **Dự phòng 5%** | 479.375 | 4,9% |
| **Design + Supervision fee (3%)** | 287.625 | 2,9% |
| **GRAND TOTAL M&E** | **~10.354.500** | **100%** |

## 7.3. Phân Bổ Theo Phase

| Phase | CAPEX M&E (USD) | % |
|-------|----------------:|---:|
| **Phase 1 (2025–2027)** | ~6.800.000 | 66% |
| **Phase 2 (2028–2030)** | ~3.554.500 | 34% |
| **TỔNG** | **~10.354.500** | 100% |

## 7.4. So Sánh Với P2 CAPEX Breakdown

| Hạng mục P2 (Mục 2) | P2 Budget (M USD) | P4 BOQ (M USD) | Chênh lệch | Ghi chú |
|----------------------|-------------------:|----------------:|:----------:|---------|
| **DC Infrastructure** (P2 Mục 2.2) | ~6,50 (Phase 1 DC equipment) | 3.728 (Cooling + UPS + PDU + Security) | **+2,77M trong P2** | P2 bao gồm cả Server/GPU rack |
| **CNC Equipment** (P2 Mục 2.1) | ~9,80 (15 máy P1) | 1.130 (CNC chuyên dụng — không tính máy CNC) | **P2 bao gồm CNC machines** | Machine cost ≠ M&E |
| **Hạ tầng chung** (P2 Mục 2.5) | 5,90 | 4.370 (Điện) + 883 (Nước) = 5.253 | **~0,65M surplus in P2** | P2 common infra covers electrical + water |
| **PCCC** (P7 tổng) | 0,80 (P2 ghi) vs 2,08 (P7 tính) | **Không trong BOQ M&E** (riêng P7) | **-1,28M thiếu** | Cần bổ sung P2 |
| **Môi trường** (P3 tổng) | Chưa tách rõ | **Không trong BOQ M&E** (riêng P3) | Cần xác nhận | P3: 2,87M |

> **⚠️ PHÁT HIỆN QUAN TRỌNG:** BOQ M&E = **~10,35M USD**. Khi cộng PCCC (~2,08M) + Môi trường (~2,87M) = **~15,30M** cho toàn bộ hạ tầng kỹ thuật. P2 CAPEX cho hạ tầng (DC Infra + Common Infra + PCCC stated) ≈ **13,20M**. Chênh lệch **~2,10M** cần được giải quyết trong P2 V1.1.

> **Khuyến nghị:** CAPEX 47,5M HIỆN TẠI đã bao gồm phần lớn M&E trong các hạng mục DC Infrastructure, CNC Equipment, và Common Infrastructure. Tuy nhiên, PCCC thiếu ~1,28M và một số hạng mục M&E chuyên dụng (vibration isolation, CMM room, chip conveyor) có thể chưa nằm đầy đủ trong P2 line items. **Cần P2 V1.1 xác nhận mapping chi tiết.**

---

# CHƯƠNG VIII: TIMELINE THI CÔNG M&E

## 8.1. Gantt Chart (Text-based)

```
==========================================================================
HẠNG MỤC                    | 2025                    | 2026                    | 2027
                             | Q1  Q2  Q3  Q4         | Q1  Q2  Q3  Q4         | Q1  Q2
==========================================================================
PHASE 1 - DESIGN & PROCUREMENT
─────────────────────────────┼─────────────────────────┼─────────────────────────┼──────
M&E Detail Design            | ████████                |                         |
Equipment Tender             |     ████████            |                         |
Long-lead Procurement        |         ████████████████|██                       |
                             |                         |                         |
PHASE 1 - ELECTRICAL         |                         |                         |
─────────────────────────────┼─────────────────────────┼─────────────────────────┼──────
TX-1 Install + Commission    |             ████████    |                         |
MDB + Sub-MDB Install        |             ████████    |                         |
GEN-1 Install                |             ████████    |                         |
GEN-3 Install                |             ████████    |                         |
UPS Path A (2×1000kVA)       |                 ████████|██                       |
Cable + Tray                 |             ████████████|██                       |
Solar PV 300kWp              |                         |     ████████            |
Lightning + Grounding        |         ████████        |                         |
BMS Installation             |                     ████|████████                 |
                             |                         |                         |
PHASE 1 - COOLING (DC)      |                         |                         |
─────────────────────────────┼─────────────────────────┼─────────────────────────┼──────
Chiller (2 units) Install    |                 ████████|██                       |
Cooling Tower (3 cells)      |                 ████████|██                       |
Chilled Water Piping         |                     ████|████                     |
CRAH Install (Zone 1)        |                         |████████                 |
CDU Install (Zone 2)         |                         |████████                 |
Rear-Door HEX (50 racks)     |                         |    ████████             |
Water Treatment System       |                         |████                     |
Free Cooling Econ.           |                         |    ████                 |
                             |                         |                         |
PHASE 1 - CNC SPECIFIC      |                         |                         |
─────────────────────────────┼─────────────────────────┼─────────────────────────┼──────
Isolation Trench             |     ████████            |                         |
Inertia Blocks (15)          |         ████████████    |                         |
Spring Isolators (15)        |                 ████████|                         |
Crane Install                |             ████████    |                         |
Compressed Air System        |                 ████████|                         |
Coolant System Central       |                     ████|████                     |
Chip Conveyor Underground    |         ████████████    |                         |
CMM Room Build               |                         |████████████             |
LEV + AHU Install            |                     ████|████████                 |
                             |                         |                         |
PHASE 1 - SMT                |                         |                         |
─────────────────────────────┼─────────────────────────┼─────────────────────────┼──────
Clean Room Build             |                 ████████|████████                 |
AHU + FFU Install            |                         |████████                 |
Reflow LEV                   |                         |    ████                 |
IPA Storage Room             |                 ████████|                         |
ESD System                   |                         |████████                 |
Robot Safety System          |                         |    ████████             |
                             |                         |                         |
PHASE 1 - WATER              |                         |                         |
─────────────────────────────┼─────────────────────────┼─────────────────────────┼──────
Water Tank 100m³             |         ████████        |                         |
Pump Station                 |             ████████    |                         |
Piping (Supply + Drain)      |             ████████████|                         |
XLNT Chung                   |                 ████████|████████                 |
ZLD System                   |                     ████|████████████             |
                             |                         |                         |
COMMISSIONING                |                         |                         |
─────────────────────────────┼─────────────────────────┼─────────────────────────┼──────
Electrical Test + Commission |                         |        ████████         |
Cooling Test + Balance       |                         |        ████████         |
HVAC Test + Balance          |                         |        ████████         |
Water Test + Flush           |                         |        ████████         |
Integrated System Test       |                         |            ████████     |
BMS Integration Test         |                         |            ████████     |
PCCC Nghiệm Thu [P7]        |                         |                ████████ |
Handover Phase 1             |                         |                    ████ |
==========================================================================
PHASE 2 (2028-2030) — Mirrored schedule, compressed 18 months
- TX-2, GEN-2, UPS Path B: Q1-Q2/2028
- Chiller #3, CT #4: Q2-Q3/2028
- 50 additional Racks + CRAH + CDU: Q3-Q4/2028
- CNC machines 16-25 + isolators: Q1-Q3/2029
- Solar PV Phase 2 (200kWp): Q2/2029
- Robot cells 7-12: Q3-Q4/2029
- Commissioning Phase 2: Q4/2029-Q1/2030
==========================================================================
```

## 8.2. Long-Lead Items — Procurement Timeline

| Item | Lead Time | Order By | Delivery | Critical Path? |
|------|----------:|----------|----------|:-----------:|
| **Water-cooled Chiller 500kW** | 16–20 tuần | Q1/2025 | Q2/2025 | **CÓ** |
| **Transformer 2.500 kVA** | 12–16 tuần | Q1/2025 | Q2/2025 | **CÓ** |
| **Generator 2.500 kVA** | 14–18 tuần | Q1/2025 | Q2/2025 | **CÓ** |
| **UPS 1.000 kVA + LiFePO4** | 16–22 tuần | Q1/2025 | Q3/2025 | **CÓ** |
| **CNC Machines (DMG MORI)** | 24–30 tuần | Q4/2024 (!) | Q2/2025 | **CÓ — cần PO sớm** |
| **CDU Liquid Cooling** | 12–16 tuần | Q2/2025 | Q3/2025 | Trung bình |
| In-Row CRAH | 8–12 tuần | Q3/2025 | Q4/2025 | Không |
| Cooling Tower | 10–14 tuần | Q2/2025 | Q3/2025 | Trung bình |
| FFU (Fan Filter Unit) | 8–10 tuần | Q3/2025 | Q4/2025 | Không |
| Solar PV Panels | 6–8 tuần | Q4/2025 | Q1/2026 | Không |
| Crane 5T EOT | 10–14 tuần | Q2/2025 | Q3/2025 | Trung bình |
| Spring Isolators (Gerb/Bilz) | 12–16 tuần | Q2/2025 | Q3/2025 | Trung bình |

> **⚠️ CRITICAL:** CNC machines có lead time dài nhất (24–30 tuần). Nếu mục tiêu delivery Q2/2025, **Purchase Order phải ký Q4/2024** — tức trước khi dự án chính thức khởi công. Cần early commitment từ Board.

## 8.3. Commissioning Sequence

| Bước | Hệ thống | Duration | Prerequisite | Phân loại |
|------|----------|----------|-------------|-----------|
| **1** | **Điện** — Transformer, MDB, ATS, Generator energize | 2 tuần | Building structure complete | [A] |
| **2** | **UPS** — UPS commissioning, battery charge, load bank test | 2 tuần | Step 1 complete | [A] |
| **3** | **Nước** — Tank fill, pump test, piping flush, water quality | 1 tuần | Piping complete | [A] |
| **4** | **Cooling** — Chiller start, CT fill + Commission, piping balance | 3 tuần | Steps 1+3 complete | [A] |
| **5** | **HVAC** — AHU start, Clean Room particle count, temp/humidity | 2 tuần | Step 4 complete | [A] |
| **6** | **CNC Specific** — Compressed air, Coolant, Crane load test | 2 tuần | Step 1 complete | [A] |
| **7** | **IT Infrastructure** — Raised floor, Cable, Rack install, PDU power | 4 tuần | Steps 2+4 complete | [A] |
| **8** | **BMS Integration** — All sensors → BMS, alarm test, trending | 2 tuần | All systems running | [A] |
| **9** | **PCCC** — Nghiệm thu với Cảnh sát PCCC [P7 Chương VII] | 4 tuần | All systems, fire alarm test | [C] |
| **10** | **Soak Test** — 72h continuous operation under load | 1 tuần | Steps 1–9 complete | [A] |
| **11** | **Handover** — Documentation, training, warranty start | 1 tuần | Step 10 pass | [A] |

> **Tổng commissioning Phase 1:** ~**14–16 tuần** (3,5–4 tháng). Plan: Q2–Q3/2026.

## 8.4. Risk Register — M&E Specific

| # | Rủi ro | Xác suất | Tác động | Biện pháp | Phân loại |
|---|--------|----------|----------|-----------|-----------|
| 1 | CNC machine delivery trễ | 30% | Critical path delay 2–3 tháng | Early PO, Buffer 6 tuần, Alternate supplier | [A] |
| 2 | Chiller capacity không đủ | 15% | DC không đạt PUE target | Over-size 10%, modular design | [A] |
| 3 | Water quota không tăng | 25% | DC cooling bị giới hạn ở 50% load | Plan B: Air-cooled backup [P3] | [A] |
| 4 | Vibration isolation không đạt | 10% | DC Tier III không đạt | Add active vibration damper ($50K) | [A] |
| 5 | Clean room ISO 7 fail test | 20% | SMT production delay | Extra FFU, re-seal panels | [A] |
| 6 | EVN supply interruption during commissioning | 15% | Generator dependency | Generator ready before commissioning | [A] |
| 7 | CAPEX overrun > 10% | 25% | NPV âm [P2] | Value engineering, phased procurement | [A] |

---

# TỔNG KẾT & KHUYẾN NGHỊ

## Tổng Kết Thiết Kế

| Khối | Hệ thống chính | Điểm đặc biệt |
|------|----------------|----------------|
| **Khối A (DC)** | 2N Power, Liquid Cooling, Raised Floor, PUE 1,32 | Tier III Concurrently Maintainable |
| **Khối B (CNC)** | 3-layer Vibration Isolation, 5T Crane, CMM Room | Rung giảm 99,6% (0,005 mm/s tại DC) |
| **Khối C (SMT)** | ISO 7 Clean Room, ATEX IPA Storage, ESD Full | Dual compliance IPC + ISO |
| **Điện** | 2 × 2.500 kVA TX, 3 Gen, 4 UPS, 500 kWp Solar | Total capacity 5 MVA |
| **Nước** | 100 m³ storage, Hybrid Cooling, ZLD for CNC | Water balance 135 m³/ngày < 150 quota |

## Khuyến Nghị Cho P8 (Master Document)

1. **CAPEX:** Xác nhận PCCC (~2,08M) + MT (~2,87M) nằm trong 47,5M hay cần điều chỉnh → **Tham chiếu P2 V1.1**
2. **Nước:** Ưu tiên đàm phán tăng quota lên 200 m³/ngày với BQL KCNC → **Điều kiện tiên quyết cho DC Full Build**
3. **CNC Machines:** Ký PO sớm nhất có thể (trước Q1/2025) → **Lead time 24–30 tuần là critical path**
4. **Commissioning:** Lập kế hoạch commissioning chi tiết 16 tuần trước ngày target operational (Q3/2026)
5. **Cross-reference:** Tài liệu P4 này cần được tích hợp với P2 (BOQ mapping), P3 (environmental requirements), và P7 (PCCC requirements) trong P8 Master Document

---

**Người lập:**  
Kỹ sư Thiết kế Hạ tầng MEP — CDCDP, PE (M&E)

**Ngày:** 03/03/2026  
**Phiên bản:** V1.0  
**Bảo mật:** CONFIDENTIAL
