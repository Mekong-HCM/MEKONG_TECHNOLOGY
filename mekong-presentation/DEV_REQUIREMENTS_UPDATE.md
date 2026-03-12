# YEU CAU CAP NHAT WEB PRESENTATION — MEKONG TECHNOLOGY

> **Ngay tao**: 2026-03-11
> **Nguon chinh thuc**: `DE_AN_MEKONG_V2/MEKONG_DE_AN_V2_MASTER.md` (32M CAPEX model)
> **Muc dich**: Cap nhat TOAN BO du lieu, noi dung web presentation cho dong bo voi tai lieu de an da cap nhat hoan toan tu model 47,50M xuong 32,00M USD.

---

## MUC LUC

1. [TONG QUAN THAY DOI](#1-tong-quan-thay-doi)
2. [BANG SO LIEU CHINH THUC (CANONICAL VALUES)](#2-bang-so-lieu-chinh-thuc)
3. [CHI TIET CAP NHAT TUNG FILE DATA](#3-chi-tiet-cap-nhat-tung-file-data)
4. [CHI TIET CAP NHAT TUNG COMPONENT TSX](#4-chi-tiet-cap-nhat-tung-component-tsx)
5. [THAY DOI CAU TRUC / LOGIC](#5-thay-doi-cau-truc--logic)
6. [QC CHECKLIST SAU KHI CAP NHAT](#6-qc-checklist-sau-khi-cap-nhat)

---

## 1. TONG QUAN THAY DOI

### 1.1 Ly do cap nhat

Tai lieu de an `MEKONG_DE_AN_V2_MASTER.md` da duoc cap nhat TOAN BO tu mo hinh 47,50M USD xuong **32,00M USD** (CAPEX moi). Tat ca chi so tai chinh, nhan su, thiet bi, timeline da thay doi. Web presentation hien tai van hien thi du lieu CU (47,50M model).

### 1.2 Pham vi thay doi

| Loai | So file | Muc do |
|------|---------|--------|
| Data files (`src/data/*.ts`) | **14 file** | 12 file can sua |
| Component TSX (`src/components/sections/*.tsx`) | **26 file** | 15+ file co hardcoded data can sua |
| Types (`src/types/`) | Co the can cap nhat interface | Kiem tra |
| Config | Khong doi | — |

### 1.3 Nguyen tac cap nhat

1. **MOI so lieu phai lay tu bang Canonical Values (Muc 2)**
2. **KHONG duoc de bat ky so lieu 47,50M / 47.5M nao con lai**
3. Kiem tra grep sau khi hoan thanh: `grep -rn "47.5\|47,50\|300 nhan\|300 viec\|28 may\|13,0%\|1,50M\|20,32\|165M\|12,53\|34,97\|73,6\|26,4\|AS9100\|IATF" src/`
4. So lieu Viet: dung dau phay thap phan (32,00M — KHONG phai 32.00M), nhung trong code TypeScript dung dot (32.00)
5. Display value trong UI dung format Viet (dau phay), value trong code dung dot (dau cham)

---

## 2. BANG SO LIEU CHINH THUC

> **DAY LA BANG DUY NHAT DE THAM CHIEU. Bat ky so nao khong khop = BUG.**

### 2.1 CAPEX & Von

| Chi tieu | GIA TRI MOI (32M) | Gia tri cu (47,5M) | Ghi chu |
|----------|-------------------|---------------------|---------|
| **CAPEX tong** | **32,00M USD** | 47,50M | Thay doi chinh |
| Von CSH (Equity) | **24,00M USD (75%)** | 34,97M (73,6%) | Ty le thay doi |
| Vay ngan hang | **8,00M USD (25%)** | 12,53M (26,4%) | Vay tu Y6 (KHONG phai Y10) |
| Von CSH giai doan pre-revenue | 24,00M | 34,97M | |

### 2.2 CAPEX theo Phase

| Phase | Thoi gian | **GIA TRI MOI** | Gia tri cu | Nguon |
|-------|-----------|-----------------|------------|-------|
| P0 — Phap ly & Thiet ke | Y0-Y1 | **1,50M** | 2,50M | CSH |
| P1 — Xay dung Shell & MEP | Y1-Y3 | **7,50M** | 8,50M | CSH |
| P2 — IoT/SMT Fit-out | Y3-Y5 | **7,00M** | 10,60M | CSH |
| P3 — CNC Full + DC Infra | Y5-Y8 | **8,00M** | 13,34M | CSH + Vay |
| P4 — DC Full + Steady-state | Y8-Y12 | **8,00M** | 12,53M | CSH + Vay |
| **TONG** | | **32,00M** | 47,47M | |

> **LUU Y**: Timeline dich sang trai: Xay dung Y0-Y3 (KHONG phai Y0-Y5). First revenue tu Y4-Y5.

### 2.3 Chi so Tai chinh

| Chi tieu | **GIA TRI MOI** | Gia tri cu | Ghi chu |
|----------|-----------------|------------|---------|
| NPV (50Y, WACC 12%) | **+2,50M USD** | +1,50M | |
| NPV (20Y, WACC 12%) | **-3,20M USD** | -5,30M | Van am — du an can horizon dai |
| IRR (50Y) | **14,5%** | 13,0% | |
| IRR (20Y) | **~10,5%** | 9,5% | |
| WACC | **12%** | 12% | Khong doi |
| Payback (Simple) | **~8 nam** | 12-13 nam | |
| Payback (Discounted) | **~10 nam** | 13 nam | |
| Hoa von (Breakeven) | **Y7-Y8** | Y8-Y9 | |
| DSCR Min | **1,42x** (tai Y7) | 4,91x | Thay doi lon |
| EBITDA Steady-state | **~25-28%** | 28-30% | |
| Monte Carlo P(NPV>0) | **72%** | 65% | |
| Monte Carlo P(IRR>WACC) | **68%** | 60% | |
| Strategic Value tong | **~14,00M USD** | 20,32M | |
| Revenue Y10 (per-year) | **~19,50M** | 14,50M | |
| Revenue Y15 (per-year) | **~21,00M** (steady-state) | 32,00M | |
| Revenue 15Y luy ke | **~180M USD** | ~165M | |
| Revenue steady-state | **~21M/nam tu Y12** | — | |
| Equity IRR (Leveraged) | **Bo/khong dung nua** | 18,5% | BO metric nay |

### 2.4 Doanh thu theo nam (Revenue 15Y Table)

> Can cap nhat lai TOAN BO bang revenue 15Y. So lieu chinh thuc lay tu Appendix A.1 cua Master file.
> Duoi day la cac moc chinh:

| Nam | IoT | CNC | DC | Tong |
|-----|-----|-----|----|------|
| Y1-Y3 | 0 | 0 | 0 | 0 (xay dung) |
| Y4 | ~0,5 | 0 | 0 | ~0,5 |
| Y5 | ~1,5 | ~1,0 | ~0,5 | ~3,0 |
| Y6 | ~2,5 | ~2,5 | ~1,5 | ~6,5 |
| Y7 | ~3,5 | ~4,0 | ~2,5 | ~10,0 |
| Y8 | ~4,5 | ~5,5 | ~5,0 | ~15,0 |
| Y10 | ~5,5 | ~7,0 | ~7,0 | ~19,5 |
| Y12+ | ~6,0 | ~7,0 | ~8,0 | ~21,0 (steady-state) |

> **GOC CHINH XAC**: Doc `MEKONG_DE_AN_V2_MASTER.md` Appendix A.1 (P&L Table) de lay so chinh xac tung nam.

### 2.5 Kich ban Dau tu (3 kich ban)

| Kich ban | DT 15Y Luy ke | NPV (50Y) | IRR (50Y) | Xac suat |
|----------|--------------|-----------|-----------|----------|
| Than trong | ~145M | -1,50M | 11,0% | 25% |
| Co so (Base) | ~180M | +2,50M | 14,5% | 50% |
| Lac quan | ~220M | +8,00M | 17,0% | 25% |

### 2.6 Sensitivity (NPV theo bien dong)

| Bien so | -20% | -10% | Base | +10% | +20% |
|---------|------|------|------|------|------|
| Doanh thu | -3,50 | -0,50 | 2,50 | 5,50 | 8,50 |
| CAPEX | 5,50 | 4,00 | 2,50 | 1,00 | -0,50 |
| Chi phi VH | 5,00 | 3,75 | 2,50 | 1,25 | 0,00 |
| WACC | 6,00 | 4,00 | 2,50 | 1,20 | 0,00 |

### 2.7 Strategic Value Breakdown

| Thanh phan | **GIA TRI MOI** | Gia tri cu |
|------------|-----------------|------------|
| NPV (50Y, Base) | 2,50M | 1,50M |
| Brand & IP | 2,00M | 3,20M |
| Ecosystem synergy | 1,50M | 2,80M |
| Tax incentives | 3,50M | 4,50M |
| Strategic location | 1,50M | 2,50M |
| Human capital | 2,00M | 3,82M |
| ESG premium | 1,00M | 2,00M |
| **TONG** | **~14,00M** | 20,32M |

### 2.8 Thiet bi & Nhan su

| Chi tieu | **GIA TRI MOI** | Gia tri cu |
|----------|-----------------|------------|
| CNC Machines | **6 may** | 28 may |
| CNC Area | **800 m2** | 3.000 m2 |
| CNC Cert | **ISO 9001 only** | ISO 9001 + IATF 16949 + AS9100 |
| IATF 16949 | **Option Y10+** (khong bat buoc) | Y2 (bat buoc) |
| AS9100 | **Option Y10+** (khong bat buoc) | Y3 (bat buoc) |
| DC Rack Phase 1 | **50 racks** | 50 racks (KHONG DOI) |
| DC Total | **100 racks** | 100 racks (KHONG DOI) |
| DC Tier | **Tier III** | Tier III (KHONG DOI) |
| Headcount steady-state | **200 nguoi** | 300 nguoi |
| Headcount Y15 | **200** | 300 |
| GFA | **~10.000 m2** (1 ha) | 21.000 m2 (3 tang) |
| Tang | **Dieu chinh theo thuc te** | 3 tang x 7.000 m2 |

### 2.9 Monte Carlo Percentiles (cap nhat)

| Metric | P10 | P25 | P50 | P75 | P90 |
|--------|-----|-----|-----|-----|-----|
| NPV 50Y (M USD) | -2,50 | 0,00 | 2,50 | 5,50 | 9,00 |
| IRR 50Y (%) | 10,5% | 12,5% | 14,5% | 16,5% | 18,5% |

### 2.10 Lo trinh Chung nhan (cap nhat)

| Chung nhan | **MOI** | Cu |
|------------|---------|-----|
| ISO 9001 | **Y4** (khi co san xuat) | Y1 / Y6 |
| ISO 27001 | **Y5** | Y2 / Y7 |
| IATF 16949 | **Option Y10+** | Y2 / Y9 |
| AS9100 | **Option Y10+** | Y3 / Y10 |
| Tier III | **Y8-Y9** | Y11 |
| SOC 2 Type II | **Y9-Y10** | Y11 |

### 2.11 Socio-economic (cap nhat)

| Chi tieu | **GIA TRI MOI** | Gia tri cu |
|----------|-----------------|------------|
| Direct jobs | **200** | 300 |
| Indirect jobs | **400 (he so 2x)** | 600 |
| Total jobs | **600** | 900 |
| ESOP pool | **3%** | 5% |
| ESOP value | **~0,96M USD** | ~1,75M USD |

### 2.12 CAPEX theo Block (cap nhat)

| Block | **GIA TRI MOI** | Gia tri cu |
|-------|-----------------|------------|
| Khoi A — DC/MACC | ~8,00M | 11,918M |
| Khoi B — CNC/MPMC | ~5,00M | 13,253M |
| Khoi C — IoT/Robot | ~3,00M | 3,071M |
| Chung (Shell, Infra) | ~16,00M | 2,1M (+ phases) |

### 2.13 Long-term Vision (cap nhat)

| Moc | Revenue | EV |
|-----|---------|-----|
| Y10 | ~19,5M/nam | 60-90M |
| Y15 | ~21M/nam (steady) | 80-120M |
| Y25+ | ~25M+ | 150M+ |

### 2.14 P&L Milestones (cap nhat)

| Nam | Revenue | Net Income | Margin |
|-----|---------|------------|--------|
| Y4 | ~0,5M | -2,0M | — |
| Y5 | ~3,0M | -1,5M | — |
| Y7-Y8 | ~10-15M | ~0 | 0% (Breakeven) |
| Y10 | ~19,5M | ~2,5M | ~13% |
| Y12+ | ~21M | ~5M | ~24% |

---

## 3. CHI TIET CAP NHAT TUNG FILE DATA

### 3.1 `src/data/financials.ts` — **THAY DOI LON NHAT**

#### a) CAPEX Section
```
CU:  total: 47.5, equity: 34.97 (73.6%), debt: 12.53 (26.4%)
MOI: total: 32.00, equity: 24.00 (75%), debt: 8.00 (25%)
```

#### b) Phases — cap nhat TOAN BO
```typescript
// MOI:
phases: [
  { id: 'P0', period: 'Y0-Y1', amount: 1.50, label: 'Pháp lý & Thiết kế', source: 'CSH' },
  { id: 'P1', period: 'Y1-Y3', amount: 7.50, label: 'Xây dựng Shell & MEP', source: 'CSH' },
  { id: 'P2', period: 'Y3-Y5', amount: 7.00, label: 'IoT/SMT Fit-out', source: 'CSH' },
  { id: 'P3', period: 'Y5-Y8', amount: 8.00, label: 'CNC Full + DC Infra', source: 'CSH + Vay' },
  { id: 'P4', period: 'Y8-Y12', amount: 8.00, label: 'DC Full + Steady-state', source: 'CSH + Vay' },
]
```

#### c) Revenue 15Y — cap nhat TOAN BO theo Appendix A.1
- Cot: year / iot / cnc / dc / total
- Doc `MEKONG_DE_AN_V2_MASTER.md` Appendix A.1 de lay bang P&L day du
- Luu y: Y1-Y3 = 0 (xay dung), first revenue Y4

#### d) P&L Milestones — cap nhat
```typescript
// MOI:
plMilestones: [
  { year: 'Y4',  revenue: 0.5,  netIncome: -2.0,  margin: '-' },
  { year: 'Y7',  revenue: 10.0, netIncome: 0.0,   margin: '0%' },
  { year: 'Y10', revenue: 19.5, netIncome: 2.5,   margin: '~13%' },
  { year: 'Y12', revenue: 21.0, netIncome: 5.0,   margin: '~24%' },
]
```

#### e) KPIs — cap nhat TOAN BO
```typescript
// MOI:
kpis: {
  npv50Y: 2.50,         // cu: 1.50
  npv20Y: -3.20,        // cu: -5.30
  irr50Y: 14.5,         // cu: 13.0
  irr20Y: 10.5,         // cu: 9.5
  paybackSimple: '~8',  // cu: '12-13'
  paybackDiscounted: '~10', // cu: '13'
  ebitdaSteady: '25-28%',   // cu: '28-30%'
  dscrMin: 1.42,            // cu: 4.91
  revenueY10: 19.50,        // cu: 30.50
  revenueY15: 21.00,        // cu: 43.00
  revenue10YCumulative: 120, // cu: 103.52 — can tinh lai
  revenue15Y: '~180M',      // cu: '165M'
  strategicValue: 14.00,    // cu: 20.32
  breakeven: 'Y7-Y8',       // cu: 'Y8-Y9'
  monteCarloPNPV: 72,       // cu: 65
}
```

#### f) Scenarios — cap nhat
```typescript
// MOI:
scenarios: [
  { name: 'Thận trọng', revenue15Y: '~145M', npv: -1.50, irr: 11.0, ... },
  { name: 'Cơ sở', revenue15Y: '~180M', npv: 2.50, irr: 14.5, ... },
  { name: 'Lạc quan', revenue15Y: '~220M', npv: 8.00, irr: 17.0, ... },
]
```

#### g) Sensitivity — cap nhat base NPV tu 1.5 -> 2.5, dieu chinh tat ca o
(Xem bang 2.6)

#### h) Strategic Breakdown — cap nhat TOAN BO
(Xem bang 2.7)

#### i) CAPEX by Block — cap nhat
(Xem bang 2.12)

#### j) Long-term Vision — cap nhat
(Xem bang 2.13)

#### k) **XOA** Equity IRR 18,5% — khong con dung trong model moi

---

### 3.2 `src/data/products.ts` — **THAY DOI LON**

#### a) CNC Section
```
CU:  28 máy DMG MORI, 5 trục, tolerance ±2 µm
MOI: 6 máy CNC (mixed brand), tolerance ±5 µm
     KHONG con "28 máy", KHONG con "5 trục" lam default
     ISO 9001 only (bo IATF, AS9100 khoi phan bat buoc)
```

#### b) CNC ASP, Margin — giu nguyen hoac dieu chinh theo Master
#### c) DC — GIU NGUYEN (50 racks Phase 1, 100 total, Tier III)
#### d) IoT products — GIU NGUYEN (MK-200, MK-300, AMR, MekongOS)

---

### 3.3 `src/data/productDetails.ts`

#### a) Gateway — kiem tra gia MK-200
```
products.ts:      MK-200 = 150-300 USD
productDetails.ts: MK-200 = 800-1,200 USD
→ THONG NHAT theo Master file
```

#### b) Robot capacity — giu nguyen
#### c) MekongOS — giu nguyen

---

### 3.4 `src/data/operations.ts` — **THAY DOI LON NHAT**

#### a) CNC Machines — VIET LAI TOAN BO
```
CU:  28 máy, danh sach 8 dong may, tong 7.000K USD
MOI: 6 máy CNC (doc Master file Appendix B de lay danh sach chinh xac)
     Dien tich 800 m2 (KHONG phai 3.000 m2)
```

#### b) CNC Capacity ramp — VIET LAI
```
CU:  Y1: 15 machines → Y10: 35+ machines
MOI: Y5: 6 machines → scale theo thuc te (doc Master)
```

#### c) CNC Specs
```
CU:  Tolerance ≤3 µm, 27.000 parts/year, staff 80-120
MOI: Tolerance ≤5 µm, capacity scale down tuong ung, staff ~40-60 (trong 200 tong)
```

#### d) Quality Certs — VIET LAI
```
CU:  ISO 9001 Y1, IATF Y2 (173-265K), AS9100 Y3 (175-268K)
MOI: ISO 9001 Y4, ISO 27001 Y5
     IATF 16949 = "Option Y10+" (KHONG phai bat buoc, KHONG gan timeline cu the)
     AS9100 = "Option Y10+" (tuong tu)
```

#### e) Market gaps table — bo dong "AS9100 (toan VN) = Blue Ocean"
→ Doi thanh: "AS9100 = Option dai han, can danh gia ROI"

#### f) as9100Note
```
CU:  "Viet Nam hien co ZERO nha may CNC dat AS9100 — Mekong se la DOANH NGHIEP DAU TIEN."
MOI: Bo cau nay HOAN TOAN hoac doi thanh:
     "AS9100 la muc tieu phat trien dai han (Y10+) khi da co nen tang ISO 9001 vung chac."
```

#### g) Target industries Aerospace spend
```
CU:  Aerospace: 15-25M USD/nam
MOI: Giu lam tham khao thi truong nhung KHONG con la target Y1-Y10
```

---

### 3.5 `src/data/infrastructure.ts` — **THAY DOI**

```
CU:  21.000 m2 GFA, 3 tang x 7.000 m2
     CNC 3.000 m2, DC 1.500 m2, IoT/SMT 2.000 m2
     Power 5.000 kVA, Water 150 m3/day

MOI: ~10.000 m2 (1 ha), dieu chinh tang/dien tich theo Master
     CNC 800 m2, DC giu nguyen hoac dieu chinh
     Power & Water scale tuong ung — doc Master Appendix D/E
```

---

### 3.6 `src/data/timeline.ts` — **THAY DOI LON**

#### a) Phases — VIET LAI theo bang 2.2
#### b) Milestones — cap nhat:
```
CU:  Y0 IRC, Y6 First Revenue, Y9 Breakeven, Y15 Revenue 32M
MOI: Y0 IRC, Y4-Y5 First Revenue, Y7-Y8 Breakeven, Y12+ Revenue ~21M (steady)
```

---

### 3.7 `src/data/team.ts` — **THAY DOI**

#### a) Headcount ramp — VIET LAI
```
CU:  Y0-Y4: 15 → Y5-Y6: 59 → Y7-Y9: 131 → Y10-Y13: 217 → Y15: 300
MOI: Y0-Y3: 10-15 → Y4-Y5: 40-60 → Y6-Y8: 100-130 → Y9-Y12: 170-200 → steady: 200
     (Doc Master Section 4.8 hoac Appendix H de lay bang chinh xac)
```

#### b) ESOP
```
CU:  pool 5%, value ~1,75M USD
MOI: pool 3%, value ~0,96M USD
```

#### c) C-Level — giu nguyen ten, dieu chinh salary neu Master co thay doi

---

### 3.8 `src/data/competitive.ts`

#### a) MOAT layers — bo/sua IATF+AS9100
```
CU:  "IATF+AS9100 (3-4 yr to replicate)"
MOI: "ISO 9001 + chuyen mon CNC 5-axis (Option IATF/AS9100 Y10+)"
     hoac: "Chung nhan chat luong: ISO 9001 nen tang, IATF/AS9100 option dai han"
```

#### b) Summary ">=100M USD and 5 years" — dieu chinh neu can
#### c) Export KPIs
```
CU:  export revenue 10Y: 41.9M USD
MOI: Dieu chinh theo revenue moi — can tinh lai
```

---

### 3.9 `src/data/legal.ts`

#### a) certPath — cap nhat theo bang 2.10
#### b) ESG items
```
CU:  "300 viec lam"
MOI: "200 viec lam"
```

---

### 3.10 `src/data/rdData.ts`

#### a) R&D Budget
```
CU:  Total 10Y: ~12.50M USD
MOI: Dieu chinh theo ty le CAPEX moi — doc Master
```

#### b) R&D Team
```
CU:  26 engineers (20% of staff)
MOI: ~20 engineers (hoac theo Master) — vi tong nhan su giam
```

#### c) Labs — co the can dieu chinh dien tich
```
CU:  IoT HW Lab 150 m2, AI 200 m2, CNC Materials 80 m2
MOI: Dieu chinh neu Master co thay doi
```

---

### 3.11 `src/data/riskEsg.ts` — **THAY DOI LON**

#### a) Monte Carlo
```
CU:  P(NPV>0) = 65%, P(IRR>WACC) = 60%
MOI: P(NPV>0) = 72%, P(IRR>WACC) = 68%
```

#### b) Monte Carlo percentiles — cap nhat theo bang 2.9

#### c) Scenario Analysis — cap nhat theo bang 2.5
- Luu y: model cu co 4 kich ban (them Bi quan 5%). Model moi co the chi co 3.
  Doc Master Section 5.6 de xac nhan.

#### d) Weighted scenario — tinh lai

#### e) Top Risks — review va dieu chinh score neu can

#### f) Socio-economic data — cap nhat theo bang 2.11
```
CU:  directJobs15Y: 300, indirectJobs: 600, totalJobs: 900
MOI: directJobs: 200, indirectJobs: 400, totalJobs: 600
```

#### g) Training — dieu chinh "300 nhan su x 60h" → "200 nhan su x 60h = 12.000h/nam"
#### h) "200+ CNC 5-axis engineers in 10 nam" → dieu chinh theo scale moi

---

### 3.12 `src/data/market.ts` — THAY DOI NHO

- Competitive positioning: Mekong description
```
CU:  "Gia cong 5 truc, IoT & Datacenter — do phuc tap cao nhat VN"
MOI: "IoT Gateway/Robot, CNC chinh xac (6 may), Datacenter AI — he sinh thai tich hop"
```

- SWOT Strength
```
CU:  "Tu chu von 73,6%"
MOI: "Tu chu von 75%"
```

---

### 3.13 `src/data/contact.ts` — KHONG DOI

### 3.14 `src/data/images.ts` — KHONG DOI

---

## 4. CHI TIET CAP NHAT TUNG COMPONENT TSX

### 4.1 `HeroSection.tsx` — **THAY DOI**

| Vi tri | CU | MOI |
|--------|-----|-----|
| Key fact "47,50M" | `47,50M` | `32,00M` |
| Key fact "300 Việc làm CNC" | `300` | `200` |
| Label "Việc làm CNC" | "Việc làm CNC" | "Việc làm" (bo "CNC") |

---

### 4.2 `ExecutiveSummary.tsx` — **THAY DOI LON**

| Vi tri | CU | MOI |
|--------|-----|-----|
| Subtitle "47,50M USD" | `47,50M` | `32,00M` |
| Subtitle "tu chu von 100% trong 10 nam dau" | Cau nay | "Tu chu von 75% — vay 25% tu Y6" |
| Equity IRR 18.5% (hardcoded) | `18.5` | **XOA HOAN TOAN** metric nay |
| Pie chart "73.6%" / "26.4%" | hardcoded | Doi thanh `75%` / `25%` |
| "28 máy DMG MORI 5 trục" | text | "6 máy CNC chính xác, ISO 9001" |
| "AS9100, Aerospace Grade" | text | Bo AS9100, doi: "ISO 9001, Precision Grade" |
| "100 Rack" | | "50 Rack Phase 1 (expand 100)" |
| "300+ viec lam chat luong" | | "200 viec lam chat luong" |

---

### 4.3 `FinancialOverview.tsx` — **THAY DOI LON NHAT**

| Vi tri | CU | MOI |
|--------|-----|-----|
| Subtitle "~165M USD" | `~165M` | `~180M` |
| Subtitle "NPV(50Y) duong" | ok | Giu nguyen |
| Subtitle "IRR 13%" | `13%` | `14,5%` |
| KPI "CAPEX Tong 47,50M" | `47,50M` | `32,00M` |
| KPI "Hoa von Y8-Y9" | `Y8-Y9` | `Y7-Y8` |
| KPI "DSCR Min 4,91x" | `4,91x` | `1,42x` |
| KPI "Monte Carlo 65%" | `65%` | `72%` |
| KPI "DT Luy ke 15Y ~165M" | `~165M` | `~180M` |
| KPI "Equity IRR ~18,5%" | `~18,5%` | **XOA** hoac doi thanh "IRR 50Y: 14,5%" |
| Per-BU IoT CAPEX 3,07M | `3,07M` | `~3,00M` |
| Per-BU CNC CAPEX 13,25M | `13,25M` | `~5,00M` |
| Per-BU DC CAPEX 11,92M | `11,92M` | `~8,00M` |
| Per-BU CNC breakeven Y10 | `Y10` | Dieu chinh |
| Per-BU DC breakeven Y14 | `Y14` | Dieu chinh |

---

### 4.4 `StrategicValue.tsx` — **THAY DOI LON**

| Vi tri | CU | MOI |
|--------|-----|-----|
| CAPEX literal `47.5` in calculation | `47.5` | `32.00` |
| Methodology "AS9100, IATF" | text | "ISO 9001 (IATF/AS9100 option Y10+)" |
| "Pool 300 nhân sự, ESOP 3%" | text | "Pool 200 nhân sự, ESOP 3%" |
| Exit M&A EV "120-160M" | | Dieu chinh neu can |
| Exit PE EV "80-120M" | | Dieu chinh neu can |
| "Mekong Y15 EBITDA ~9M x 15x = ~135M" | hardcoded | Dieu chinh EBITDA theo model moi — doc Master |

---

### 4.5 `ThreePillars.tsx` — **THAY DOI**

| Vi tri | CU | MOI |
|--------|-----|-----|
| CNC description | "28 máy DMG MORI 5 trục, AS9100" | "6 máy CNC chính xác, ISO 9001" |
| DC description | "100 Rack" | "50 Rack Phase 1 (100 Full)" |

---

### 4.6 `ProductionCapacity.tsx` — **THAY DOI LON**

| Vi tri | CU | MOI |
|--------|-----|-----|
| `{totalMachines} máy CNC` | 28 | 6 |
| `{designCapacity}` | 27.000 parts/year | Dieu chinh |
| `{tolerance}` | ≤3 µm | ≤5 µm |
| Toan bo bang danh sach 28 may | 8 dong may | Viet lai 6 may |

---

### 4.7 `QualityCerts.tsx` — **THAY DOI LON**

| Vi tri | CU | MOI |
|--------|-----|-----|
| Subtitle "3 năm — ISO 9001 đến AS9100D" | | "Lo trinh ISO 9001 + option IATF/AS9100 Y10+" |
| AS9100 note "DAU TIEN tai VN" | | **XOA** hoac doi: "Muc tieu dai han Y10+" |
| Cert timeline Y1/Y2/Y3 | | Y4/Y5 + option Y10+ |

---

### 4.8 `ImplementationRoadmap.tsx`

| Vi tri | CU | MOI |
|--------|-----|-----|
| Phase budgets | 2.50+8.50+10.60+13.00+10.90 | 1.50+7.50+7.00+8.00+8.00 |
| Phase periods | Y0-Y2, Y2-Y5, Y5-Y7, Y7-Y10, Y10-Y13 | Y0-Y1, Y1-Y3, Y3-Y5, Y5-Y8, Y8-Y12 |
| P1 "500 kWp" | giu | giu |
| P2 "15 máy CNC" | | "6 máy CNC" |
| P3 "28 máy CNC", "50 Rack" | | Bo "28 máy", dieu chinh |
| Milestone Y6 First Revenue | Y6 | Y4-Y5 |
| Milestone Y9 Breakeven | Y9 | Y7-Y8 |
| Milestone Y15 Revenue 32M | | Y12+ Revenue ~21M steady |

---

### 4.9 `Urgency.tsx`

| Vi tri | CU | MOI |
|--------|-----|-----|
| Subtitle "chua co nha may CNC dat AS9100" | | Doi: "chua co nha may CNC dat ISO 9001+ tai KCNC" hoac tuong tu |
| Market gaps "AS9100 Blue Ocean" | | Doi: "AS9100 = Muc tieu dai han" |

---

### 4.10 `RiskAnalysis.tsx`

| Vi tri | CU | MOI |
|--------|-----|-----|
| Subtitle P(NPV>0) = 65% | `65%` | `72%` |
| All Monte Carlo values | | Cap nhat theo data |

---

### 4.11 `SocioEconomic.tsx`

| Vi tri | CU | MOI |
|--------|-----|-----|
| "300 việc làm trực tiếp" | `300` | `200` |
| B/C Ratio, etc. | tu data | Data se cap nhat |

---

### 4.12 `TeamOrganization.tsx`

| Vi tri | CU | MOI |
|--------|-----|-----|
| Subtitle "300 nhân sự" / "15 người Y0" / "ESOP 5%" | | "200 nhân sự" / "10-15 người Y0" / "ESOP 3%" |
| Headcount table Y15: 300 | | 200 |

---

### 4.13 `LegalESG.tsx`

| Vi tri | CU | MOI |
|--------|-----|-----|
| "300 việc làm" | `300` | `200` |
| Cert path Y6/Y7/Y9/Y10 | | Y4/Y5/Option/Option |

---

### 4.14 `ESGEnvironment.tsx`

- Phan lon du lieu tu riskEsg.ts — se tu cap nhat khi data doi.
- Kiem tra co hardcoded text nao khong.

---

### 4.15 `MarketOpportunity.tsx`

| Vi tri | CU | MOI |
|--------|-----|-----|
| "Tu chu von 73,6%" | `73,6%` | `75%` |
| Mekong positioning description | | Dieu chinh |

---

### 4.16 `CompetitiveAnalysis.tsx`

| Vi tri | CU | MOI |
|--------|-----|-----|
| Subtitle ">=100M USD va 5 nam" | | Xem xet dieu chinh |
| MOAT IATF+AS9100 | | Doi thanh ISO 9001 + option |

---

### 4.17 `ExportStrategy.tsx`

- Kiem tra hardcoded values
- Export revenue 10Y: tinh lai theo revenue moi

---

### 4.18 `Infrastructure.tsx`

| Vi tri | CU | MOI |
|--------|-----|-----|
| "21.000 m² GFA" | | "~10.000 m² (1 ha)" |
| "3 tầng × 7.000 m²" | | Dieu chinh |
| "CNC 3.000 m²" | | "CNC 800 m²" |
| "5.000 kVA" | | Dieu chinh theo Master |

---

## 5. THAY DOI CAU TRUC / LOGIC

### 5.1 XOA Equity IRR metric
- File: `financials.ts`, `ExecutiveSummary.tsx`, `FinancialOverview.tsx`
- Metric "Equity IRR (Leveraged) 18,5%" KHONG con trong model moi
- Cach xu ly: XOA khoi data + XOA khoi UI. Thay bang IRR(50Y) = 14,5% neu can hien thi IRR

### 5.2 Vay tu Y6 (KHONG phai Y10)
- Tat ca noi dung noi "vay tu Y10" → doi thanh "vay tu Y6"
- Anh huong: `financials.ts`, `ExecutiveSummary.tsx`, co the `StrategicValue.tsx`

### 5.3 IATF/AS9100 = "Option Y10+" (KHONG phai bat buoc)
- Tat ca noi ghi IATF 16949 va AS9100 nhu timeline bat buoc → doi thanh "option phat trien dai han Y10+"
- Anh huong: `operations.ts`, `products.ts`, `legal.ts`, `competitive.ts`, `QualityCerts.tsx`, `ExecutiveSummary.tsx`, `ThreePillars.tsx`, `Urgency.tsx`
- **QUAN TRONG**: Khong xoa di — chi doi tu "bat buoc Y2-Y3" thanh "option Y10+"

### 5.4 Revenue steady-state ~21M (KHONG phai 32M)
- Tat ca noi ghi "Revenue Y15: 32M" → doi thanh "Revenue steady-state ~21M/nam tu Y12"

### 5.5 Construction Y0-Y3 (KHONG phai Y0-Y5)
- Xay dung hoan thanh Y3 (27 thang), KHONG phai Y5
- First revenue Y4-Y5

### 5.6 Type Interface — kiem tra `src/types/index.ts`
- Neu interface co field cu (vd: `equityIRR`), can them field moi hoac xoa field cu
- Ensure TypeScript compile OK sau khi thay doi

---

## 6. QC CHECKLIST SAU KHI CAP NHAT

### 6.1 Grep verification (BAT BUOC chay)

```bash
# Phai tra ve 0 ket qua cho tat ca:
grep -rn "47.5\|47,50" src/              # CAPEX cu
grep -rn "34.97\|34,97" src/             # Equity cu
grep -rn "12.53\|12,53" src/             # Debt cu
grep -rn "73.6\|73,6" src/              # Ty le equity cu (tru market SWOT)
grep -rn "26.4\|26,4" src/              # Ty le debt cu
grep -rn "300 nhan\|300 viec\|300 job" src/  # Headcount cu
grep -rn "28 may\|28 máy" src/          # So may cu
grep -rn "1,50M\b\|1.50M\b" src/        # NPV cu (can than — co the match khac)
grep -rn "20,32\|20.32" src/            # SV cu
grep -rn "13,0%\|13.0%" src/            # IRR cu (tru context khac)
grep -rn "18,5%\|18.5%" src/            # Equity IRR cu
grep -rn "4,91\|4.91" src/              # DSCR cu
grep -rn "165M" src/                     # Revenue 15Y cu
grep -rn "21.000\|21,000" src/           # GFA cu
grep -rn "3.000 m\|3,000 m\|3000 m" src/ # CNC area cu
```

### 6.2 Consistency check

- [ ] CAPEX = 32,00M xuat hien nhat quan
- [ ] NPV(50Y) = 2,50M xuat hien nhat quan
- [ ] IRR(50Y) = 14,5% xuat hien nhat quan
- [ ] Revenue steady = ~21M xuat hien nhat quan
- [ ] Headcount = 200 xuat hien nhat quan
- [ ] CNC = 6 may xuat hien nhat quan
- [ ] DSCR = 1,42x xuat hien nhat quan
- [ ] P(NPV>0) = 72% xuat hien nhat quan
- [ ] Equity 75% / Debt 25% xuat hien nhat quan
- [ ] Phases sum = 32,00M
- [ ] IATF/AS9100 chi xuat hien voi "option Y10+"

### 6.3 Build check

```bash
cd mekong-presentation
npm run build
# Phai ZERO errors, ZERO TypeScript errors
```

### 6.4 Visual check

```bash
npm run dev
# Mo browser, kiem tra tung slide:
# 1. HeroSection — 32M, 200 jobs
# 2. ExecutiveSummary — 32M, 75%/25%, ko co 18.5%
# 3. FinancialOverview — 14.5%, 2.50M NPV, 1.42x DSCR
# 4. StrategicValue — 14M, 32M trong phep tinh
# 5. Roadmap — 5 phases sum = 32M
# 6. ProductionCapacity — 6 may
# 7. QualityCerts — ISO 9001 Y4, option IATF/AS9100
# 8. Team — 200 nguoi, ESOP 3%
# 9. Risk — 72% P(NPV>0)
# 10. SocioEconomic — 200/400/600 jobs
```

---

## TOM TAT KHOI LUONG

| File type | Khong doi | Sua nho | Sua lon | Viet lai |
|-----------|-----------|---------|---------|----------|
| Data (.ts) | 2 | 3 | 6 | 3 |
| Component (.tsx) | ~10 | 6 | 8 | 2 |
| Types | 0 | 1 | 0 | 0 |
| **TONG** | ~12 | 10 | 14 | 5 |

**Uoc tinh**: ~40 file can kiem tra, ~29 file can sua, trong do 5 file can viet lai gan nhu toan bo (`financials.ts`, `operations.ts`, `timeline.ts`, `FinancialOverview.tsx`, `ProductionCapacity.tsx`).

---

*Tai lieu nay tao ngay 2026-03-11.*
*Nguon chinh thuc: DE_AN_MEKONG_V2/MEKONG_DE_AN_V2_MASTER.md (32M model, 100% hoan thanh).*
*Moi so lieu tham chieu bang Canonical Values (Muc 2).*
