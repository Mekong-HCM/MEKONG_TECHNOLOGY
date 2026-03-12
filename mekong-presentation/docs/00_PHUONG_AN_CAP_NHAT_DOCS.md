# PHUONG AN CAP NHAT TAI LIEU DOCS
# MEKONG TECHNOLOGY HUB — WEB PRESENTATION

**Ngay lap**: 2026-03-11  
**Can cu**: `DE_AN_MEKONG_V2/MEKONG_DE_AN_V2_MASTER_BACKUP_47M.md` (12.714 dong, 856 KB)  
**File docs hien tai**: `mekong-presentation/docs/` (9 file, 01–09)  
**Muc tieu**: Dong bo toan bo noi dung docs voi master moi nhat va bo sung phan con thieu

---

## MUC LUC

1. [Ket luan Kiem ke](#1-ket-luan-kiem-ke)
2. [Danh sach Sai lech — Uu tien CRITICAL](#2-danh-sach-sai-lech--critical)
3. [Danh sach Sai lech — Uu tien HIGH](#3-danh-sach-sai-lech--high)
4. [Danh sach Sai lech — Uu tien MEDIUM](#4-danh-sach-sai-lech--medium)
5. [Noi dung Con Thieu (Missing Content)](#5-noi-dung-con-thieu)
6. [Tai lieu Can Bo Sung (New Docs)](#6-tai-lieu-can-bo-sung)
7. [Ke hoach Thuc hien](#7-ke-hoach-thuc-hien)
8. [Bang Doi chieu So lieu Chuan](#8-bang-doi-chieu-so-lieu-chuan)

---

## 1. KET LUAN KIEM KE

### 1.1. Tinh trang Tong the

Sau khi doi chieu toan bo 9 file tai lieu docs voi `MEKONG_DE_AN_V2_MASTER_BACKUP_47M.md` (moi nhat), phat hien:

| Hang muc | So luong | Ghi chu |
|---|:---:|---|
| Sai lech so lieu CRITICAL | 8 | Anh huong den KPI hien thi tren slide |
| Sai lech so lieu HIGH | 7 | Anh huong den bieu do, kich ban, sensitivity |
| Noi dung thieu / con cap MEDIUM | 6 | Slide 9/10/11 trong, san pham moi, ref sai |
| Bug ticket can dong/sua | 4 | BUG-06, BUG-07 can dong; 2 bug moi them |
| File docs can tao moi | 2 | 10_CANONICAL_DATA_REFERENCE.md + 11_SLIDE_REVISION_HISTORY.md |

### 1.2. Nguyen nhan Goc Re

Docs hien tai duoc viet dua tren **hai nguon du lieu khac nhau trong cung 1 file master**:

- **Section 5.2** — Doanh thu theo nam DU AN (Y0 = 2025, Y5-Y15 co doanh thu) → **Day la so lieu dung cho slide**
- **Section 3.13** — Doanh thu theo nam VAN HANH (Y1 = nam dau van hanh, bo qua 5 nam xay dung)

| Chi tiet | Section 3.13 (VAN HANH) | Section 5.2 (DU AN) | Docs hien tai |
|---|---:|---:|---:|
| "Y10" | 30,50M (Nam 10 van hanh) | 14,50M (Nam 10 du an) | 30,50M ← SAI |
| "Y15" | 43,00M (Nam 15 van hanh) | 32,00M (Nam 15 du an) | 43,00M ← SAI |
| "Conservative NPV" | Khong co | 0,50M | -3,2M ← SAI |
| "Optimistic NPV" | Khong co | 4,0M | 8,5M ← SAI |

**Quy tac ap dung tu day tro di**: Moi "YX" tren slide = **NAM X TINH TU BAT DAU DU AN** (Y0 = Q1/2026). Luon lay so lieu tu **Section 5.2** cua master.

---

## 2. DANH SACH SAI LECH — CRITICAL

> Nhung sai lech nay hien thi truc tiep len slide trinh bay. Phai sua truoc khi demo.

---

### C-01 | doc 02, Slide 2 — Revenue Y10 va Y15 sai hoan toan

**File**: `02_SLIDE_CONTENT_SPEC.md`, Slide 2 (Executive Summary), bang "6 KPI Cards"

| KPI | Hien tai (SAI) | Chinh xac (theo master 5.2.2) |
|---|---|---|
| Revenue Y10 | 30,50 M USD | **14,50 M USD** |
| Nhan | Label: Appendix G | Label: IoT 6,0 + CNC 7,0 + DC 1,5 = 14,50 M [C] |
| Revenue Y15 | 43,00 M USD | **32,00 M USD** |
| Nhan | Label: Appendix G | Label: Steady-state 3 BU [C] |

**Nguon chinh xac**: MASTER_BACKUP_47M.md, Section 5.2.1 (bang doanh thu 15 nam) va 5.2.2 (Revenue milestones).

**Cach sua**: Trong `02_SLIDE_CONTENT_SPEC.md`, tim va thay the ca 2 dong trong bang KPI Cards.

---

### C-02 | doc 02, Slide 6 — Bang doanh thu 15 nam: 9 nam sai

**File**: `02_SLIDE_CONTENT_SPEC.md`, Slide 6 (Financial Overview), bang "Area Chart — Doanh thu 15 Nam"

| Nam | IoT (docs hien tai) | CNC (docs hien tai) | DC (docs hien tai) | Tong (docs) | CHINH XAC (master 5.2.1) | Sai lech |
|---:|---:|---:|---:|---:|---:|---|
| Y6 | 1,8 | 0,3 | 0 | 2,1 | **2,50** | Y: IoT san xuat day du, CNC chua bat dau |
| Y7 | 3,0 | 2,5 | 0 | 5,5 | **5,00** | Y: CNC chi bat dau Q3/Y7 (1,0M), khong phai 2,5M |
| Y8 | 3,5 | 4,5 | 0 | 8,5 | **8,00** | Y: IoT 5,0 + CNC 3,0 |
| Y9 | 3,8 | 5,5 | 2,0 | 11,3 | **11,50** | Y: DC chi pilot 0,5M (khong phai 2,0M) |
| Y10 | 3,5 | 6,5 | 4,5 | 14,5 | **14,50** | Tong dung nhung pha DC sai (1,5M, khong phai 4,5M) |
| Y11 | 3,8 | 7,0 | 6,5 | 17,3 | **18,00** | IoT tang len 6,5 va DC 3,0M |
| Y12 | 4,0 | 7,5 | 8,0 | 19,5 | **21,00** | DC 4,5M (khong phai 8,0M) |
| Y13 | 4,2 | 8,0 | 10,0 | 22,2 | **23,00** | DC 5,5M (khong phai 10,0M) |

**Bang chinh xac tu master 5.2.1**:

| Nam | IoT | CNC | DC | Tong | Ghi chu |
|---:|---:|---:|---:|---:|---|
| Y5 | 0,50 | — | — | 0,50 | IoT ramp-up Q3-Q4 |
| Y6 | 2,50 | — | — | 2,50 | Nam doanh thu dau tien day du |
| Y7 | 4,00 | 1,00 | — | 5,00 | CNC bat dau Q3/Y7 |
| Y8 | 5,00 | 3,00 | — | 8,00 | CNC ramp-up, 15 may |
| Y9 | 5,50 | 5,50 | 0,50 | 11,50 | 28 may, DC pilot |
| Y10 | 6,00 | 7,00 | 1,50 | 14,50 | Revenue Y10 [C] |
| Y11 | 6,50 | 8,50 | 3,00 | 18,00 | DC Zone 1 fully operational |
| Y12 | 7,00 | 9,50 | 4,50 | 21,00 | CNC + DC scale-up |
| Y13 | 7,50 | 10,00 | 5,50 | 23,00 | **Breakeven Year (discounted, WACC 12%)** |
| Y14 | 8,00 | 10,50 | 6,50 | 25,00 | |
| Y15 | 8,50 | 11,50 | 12,00 | 32,00 | Revenue Y15 [C] |
| **Tong 15Y** | **61,00** | **66,50** | **33,50** | **~165,00** | Tich luy [C] |

---

### C-03 | doc 02, Slide 6 — Bang 3 Kich ban: 4 chi so sai

**File**: `02_SLIDE_CONTENT_SPEC.md`, Slide 6, bang "Bang 3 Kich ban Dau tu"

| Chi so | Conservative (SAI) | Conservative (DUNG) | Optimistic (SAI) | Optimistic (DUNG) |
|---|---:|---:|---:|---:|
| NPV (50Y) | -3,2M USD | **+0,50M USD** | 8,5M USD | **4,00M USD** |
| IRR (50Y) | 11,2% | **12,3%** | 15,5% | **14,5%** |
| Payback | 16Y | **14-15Y** | 10Y | **10-11Y** |
| Xac suat | 25% | **30%** | 25% | **20%** |

> **Luu y**: NPV Conservative thay doi dau am (+) thanh duong (+) — day la sai lech nghiem trong nhat. Nguon: MASTER_BACKUP_47M.md, Section 5.6.2.

**Bang chinh xac**:

| Chi so | Conservative | Base Case | Optimistic |
|---|---:|---:|---:|
| Revenue 15Y | 130,00 M | 165,00 M | 210,00 M |
| NPV 50Y | **0,50 M** | 1,50 M | **4,00 M** |
| IRR 50Y | **12,3%** | 13,0% | **14,5%** |
| Payback (simple) | **14-15 nam** | 12-13 nam | **10-11 nam** |
| Xac suat | **30%** | 50% | **20%** |
| NPV trong so | | **1,70 M** (moi) | |

---

### C-04 | doc 02, Slide 6 — Sensitivity Analysis: CAPEX sai lon

**File**: `02_SLIDE_CONTENT_SPEC.md`, Slide 6, "Bieu do Sensitivity"

| Bien so | -20% (docs) | +20% (docs) | -20% (DUNG) | +20% (DUNG) |
|---|---:|---:|---:|---:|
| Doanh thu | -5,8M | 8,8M | **-5,5M** | **8,5M** |
| **CAPEX** | **5,2M** | **-2,2M** | **3,6M** | **-0,6M** |
| Chi phi VH (OPEX) | 4,1M | -1,1M | **4,8M** | **-1,8M** |
| WACC | 6,2M | -1,8M | N/A (thay bang lai suat vay ±2pp) | — |

**Nguon chinh xac**: MASTER_BACKUP_47M.md, Section 5.6.3.

---

### C-05 | doc 05 — Revenue Y10 "CAN XAC NHAN" → DA XAC NHAN, cap nhat

**File**: `05_DATA_LAYER_SPEC.md`, Section 3.2 bang "Luu y So lieu"

| Dong can sua | Hien tai | Chinh xac |
|---|---|---|
| Revenue Y10 single-year | `14.5M \| 30,50M \| CAN XAC NHAN` | `14,50M \| 14,50M \| KHOP (project-year Y10)` |
| Revenue Y15 | `32M \| 43,00M \| CAN XAC NHAN` | `32,00M \| 32,00M \| KHOP (project-year Y15)` |

**Them ghi chu giai thich** vao cuoi doc 05:
> "Y10 trong Section 5.2 master = nam thu 10 tinh tu Y0/2025. Y10 trong Section 3.13 master = nam thu 10 VAN HANH (bo qua 5 nam xay dung) = 30,5M. Toan bo slide dung Section 5.2 (project-year)."

---

### C-06 | doc 09 — Rule 2 table: Revenue 10Y cum 103,52M khong co trong backup

**File**: `09_DEV_REQUIREMENTS.md`, Section 2 "QUY TAC 2", bang so lieu chinh thuc

| Dong can xem xet | Hien tai | Can lam |
|---|---|---|
| "Revenue 10Y cong don \| 103,52M USD \| Appendix G" | 103,52M | **Xoa dong nay** — khong co trong backup (103,52M co the la tu V2.1 master cu, khong con chinh xac) |

**Them so lieu chinh xac**:

| Them dong moi | Gia tri |
|---|---|
| Revenue Y10 (nam 10 du an) | 14,50M USD |
| Revenue Y15 (nam 15 du an) | 32,00M USD |
| Revenue 15Y tich luy (Y5-Y15) | ~165M USD |
| NPV weighted (probability) | 1,70M USD |

---

### C-07 | doc 08 — BUG-06 va BUG-07 phai dong (CLOSE), khong sua code

**File**: `08_IMPLEMENTATION_PLAN.md`, Section 1.2, bang "Loi Can sua"

| Bug ID | Mo ta Hien tai | Hanh dong Can thuc hien |
|---|---|---|
| BUG-06 | "Revenue Y10 hien thi 14,5M nhung V2.1 ghi 30,50M" | **CLOSE** — 14,5M la DUNG (Section 5.2 project-year). 30,5M la Section 3.13 operational-year, KHONG dung cho slide. |
| BUG-07 | "Revenue Y15 hien thi 32M nhung V2.1 ghi 43,00M" | **CLOSE** — 32M la DUNG (Section 5.2). 43M la Section 3.13 operational-year. |

**Them 3 bug moi**:

| Bug ID | Mo ta | Muc do | File lien quan |
|---|---|---|---|
| BUG-09 | Doanh thu per year trong financials.ts: Y6-Y13 sai (phan BU breakdown) | HIGH | `src/data/financials.ts` |
| BUG-10 | Scenario table: Conservative NPV = -3,2M phai la +0,50M | CRITICAL | `src/data/financials.ts`, `FinancialOverview.tsx` |
| BUG-11 | Sensitivity: CAPEX ±20% hien 5,2M/-2,2M phai la 3,6M/-0,6M | HIGH | `src/data/financials.ts` |

---

### C-08 | doc 02, Slide 2 — Them KPI "NPV trong so" moi tu backup

**File**: `02_SLIDE_CONTENT_SPEC.md`, Slide 2, bang KPI Cards

Backup da bo sung chi so moi chua co trong docs:

| KPI moi | Gia tri | Nguon |
|---|---|---|
| NPV trong so xac suat | 1,70 M USD | Section 5.6.2: 30%×0,5 + 50%×1,5 + 20%×4,0 = 1,70M [C] |

**Ghi chu**: Co the thay the "EBITDA Margin 28%" bang "NPV trong so 1,70M" de tin hon, hoac them vao KPI Badge tren Slide 6.

---

## 3. DANH SACH SAI LECH — HIGH

---

### H-01 | doc 02, Slide 9 — Noi dung RONG, phai bo sung

**File**: `02_SLIDE_CONTENT_SPEC.md` — File ket thuc at header "## SLIDE 9: LO TRINH TRIEN KHAI" (dong 356), khong co noi dung.

**Slides 9, 10, 11 hoan toan TRONG** — can viet noi dung moi theo master:

**Slide 9 (Lo trinh Trien khai)**:

| Hang muc | Noi dung theo Backup Section 8.1-8.2 |
|---|---|
| 5 Phase Timeline | P0 Y0-Y2 (2,50M), P1 Y2-Y5 (8,50M), P2 Y5-Y7 (10,60M), P3 Y7-Y10 (19,01M), P4 Y10-Y13 (11,54M) |
| Milestones quan trong | 18 milestones tu Q1/2026 den 2038 |
| Nam bat dau | Y0 = Q1/2026 (IRC hoan tat) |
| First Revenue | Q3/2030 (Y6) — IoT soft open |
| Breakeven | Y13 (2038) — discounted |

**Slide 10 (Gia tri Chien luoc)**:

| Hang muc | Noi dung theo Backup Section 5.7 |
|---|---|
| Title | "Gia tri Chien luoc 20,32 M USD — Vuot xa NPV tai chinh" |
| 7 thanh phan gia tri | Xem bang chinh xac o Section 8 du lieu chuan |
| Chart de xuat | Waterfall chart hoac stacked bar |

**Slide 11 (Lien he & CTA)**:

| Hang muc | Noi dung |
|---|---|
| Chu dau tu | Cong ty TNHH Mekong Technology |
| Nguoi dai dien | Ong Pham Xuan Quoc — Tong Giam doc |
| Dia chi | Lo E2-03, KCN Cong nghe cao TP.HCM |
| Call to Action | "Yeu cau Gap mat / Xem HS Du an Day du" |

---

### H-02 | doc 02, Slide 4 — IoT san pham chi co 3 dong, thieu 7 dong moi

**File**: `02_SLIDE_CONTENT_SPEC.md`, Slide 4 (Three Pillars), Tab 1 (IoT & Robot)

Docs hien tai chi liet ke 3 san pham: MK-200, MK-300, AMR. **Backup master** (Section 2.2, 2.10) co 10 dong san pham IoT/Robot day du:

| San pham | Mo ta | Gia | Margin | Co trong docs hien tai |
|---|---|---|---|:---:|
| MK-200 Industrial Gateway | Edge AI Gateway | $150-300 | 65% | CO |
| MK-300 Vision Gateway | AI Vision + Edge | $500-800 | 58% | CO |
| **MK-EIO-16** | **Expansion I/O module** | **$80-150** | **60%** | **THIEU** |
| **MK-DDC-24** | **DDC BMS Controller 24-point** | **$200-400** | **55%** | **THIEU** |
| **MK-DDC-64** | **DDC BMS Controller 64-point** | **$450-800** | **55%** | **THIEU** |
| **MK-GW-4G** | **Specialized 4G/LTE Gateway** | **$120-250** | **62%** | **THIEU** |
| **MekongBMS** | **BMS Platform Software** | **$500-1.500/nam SaaS** | **75%** | **THIEU** |
| **MekongSCADA** | **SCADA Software** | **$1.000-5.000/nam** | **75%** | **THIEU** |
| AMR-500 | 500kg payload AMR | $15.000-30.000 | 35% | Gop chung voi "AMR" |
| AMR-1000 + AGV-500 + OHT-100 | Cac bien the Robot | $30.000-80.000 | 35% | THIEU |

**Thi truong muc tieu moi** (Section 1.3.5 backup): BMS/SCADA/DDC cho nganh toa nha va han dien → them 4,50M USD/nam tu Y10+.

---

### H-03 | doc 02, Slide 6 — DSCR: 4,91x can giai thich ro hon

**File**: `02_SLIDE_CONTENT_SPEC.md`, Slide 6, "5 KPI Badge"

Docs hien tai: "DSCR Min | 4,91x"

**Backup** (Section 5.5.2) giai thich:
- DSCR 4,91x la tai Y11 — nam dau tien tra lai vay (chi interest, chua tra goc)
- Tu Y13 tra goc + lai: DSCR = 5,12x (tot hon)
- "Min DSCR" = 4,91x (Y11) — van la rat tot

**Cap nhat trong docs**: Them annotation "Y11 — interest only" va "DSCR pattern 4,91x → 5,12x → 8,0x (Y15)".

---

### H-04 | doc 02, Slide 7 — Certification timeline can dieu chinh theo backup gantt

**File**: `02_SLIDE_CONTENT_SPEC.md`, Slide 7

| Chung nhan | Docs hien tai (project-year) | Backup 8.1 Gantt (actual year) | Ket luan |
|---|---|---|---|
| ISO 9001 | Y6 | Q1/2031 = Y6 | DUNG |
| ISO 27001 | Y7 | Q3/2032 = Y7 | DUNG |
| IATF 16949 | Y9 | Q1/2034 = Y9 | DUNG |
| AS9100 Rev D | Y10 | Q2/2035 = Y10 | DUNG |
| Uptime Tier III | Y10 | Q2/2035 = Y10 | DUNG |
| **SOC 2 Type II** | **Y11** | **Khong co trong backup gantt** | **CAN XAC NHAN** |

**Hanh dong**: Xac nhan hoac loai bo SOC 2 Type II.

---

### H-05 | doc 01, 02, 05 — Reference master file sai

**Files**: `01_PRD_PRODUCT_REQUIREMENTS.md`, `02_SLIDE_CONTENT_SPEC.md`, `05_DATA_LAYER_SPEC.md`

| Hien tai | Can doi | Ghi chu |
|---|---|---|
| `MEKONG_DE_AN_V2_MASTER.md` (V2.1, 15.946 dong) | `MEKONG_DE_AN_V2_MASTER_BACKUP_47M.md` (12.714 dong) | Hoac cap nhat ref ke thua |
| "44 phu luc A-RR" | **Kiem tra lai** — backup co bao nhieu phu luc | Backup khong co phu luc hien thi trong 12.714 dong |

**Khuyen nghi**: Them mot ghi chu vao cuoi moi file: "Nguon so lieu da duoc kiem tra doi chieu voi MASTER_BACKUP_47M.md (2026-03-11)."

---

### H-06 | doc 05 — TypeScript interfaces thieu cho san pham moi

**File**: `05_DATA_LAYER_SPEC.md`, Section 2 (TypeScript Interfaces)

Hien tai chi co: `IoTProduct` (MK-200/300), `IoTData`, `CNCData`, `DCData`.

**Can them** (dua tren backup Section 2.10):

```typescript
// San pham IoT mo rong
export interface IoTProductExpanded extends IoTProduct {
  productLine: 'MK-Gateway' | 'MK-EIO' | 'MK-DDC' | 'MK-GW' | 'Software' | 'Robot';
  targetMarket: string[];  // ['IoT', 'BMS', 'SCADA', 'Factory']
}

// Platform Software
export interface SoftwareProduct {
  name: string;            // 'MekongBMS', 'MekongSCADA', 'MekongOS'
  type: 'SaaS' | 'OnPrem' | 'Hybrid';
  pricing: {
    tier: string;
    pricePerMonth: number;
    targetDevices?: number;
  }[];
}

// Robot variants
export interface RobotProduct {
  name: string;            // 'AMR-500', 'AMR-1000', 'AGV-500', 'OHT-100'
  payload: string;         // '500kg', '1000kg'
  navigation: string;      // 'SLAM', 'QR-code'
  priceRange: [number, number]; // USD
}
```

---

## 4. DANH SACH SAI LECH — MEDIUM

---

### M-01 | doc 02, Slide 9 — Phase CAPEX theo pha chua dung

**File**: Du lieu pha trong docs (nhieu noi):

| Phase | CAPEX docs hien tai | CAPEX chinh xac (backup 5.1.1) |
|---|---:|---:|
| P0 (Y0-Y2) | 2,50M | **2,50M** (OK) |
| P1 (Y2-Y5) | 8,50M | **8,50M** (OK) |
| P2 (Y5-Y7) | 10,63M | **10,63M** (OK) |
| P3 (Y7-Y10) | **13,34M CSH** | **13,34M CSH + 5,67M loan = 19,01M tong** |
| P4 (Y10-Y13) | 12,53M | **12,53M** via vay ngan hang |

**Ghi chu quan trong**: Phase 3 co CAPEX tong = 19,01M (CSH 13,34M + tai su dung revenue tu Y9 = ~5,67M). Docs dang cham luoc dieu nay. Can them ghi chu.

---

### M-02 | doc 02, Slide 10 — Strategic Value breakdown khac nhau

**File**: `02_SLIDE_CONTENT_SPEC.md` — Docs dang neu "Phan tich Gia tri Chien luoc" nhung Slide 10 chua co noi dung.

**Backup Section 5.7.1** co bang day du 7 thanh phan = 20,32M:

| Thanh phan | Gia tri (M USD) | Phuong phap |
|---|---:|---|
| NPV tai chinh (DCF 50Y) | 1,50 | DCF, WACC 12% |
| Real Options Value | 3,50 | Black-Scholes |
| Barrier to Entry | 2,80 | Cost-to-replicate |
| Synergy Premium | 2,20 | NPV Synergy Cash Flow |
| Platform/Ecosystem Value | 4,50 | Revenue multiple |
| Uu dai thue KCNC | 4,50 | NPV thue tiet kiem |
| Mien thue dat 11Y | 1,32 | PV tiet kiem |
| **Tong** | **20,32** | [C] |

**Luu y**: Docs hien tai (08_IMPLEMENTATION_PLAN, phan tong quan) co version khac:  
Real Options 4,00 + Barrier 3,50 + Synergy 2,50 + Platform 5,00 + Tax 3,82 = 20,32.  
**Dung theo backup 5.7.1** (Real Options 3,50 + Barrier 2,80 + Synergy 2,20 + Platform 4,50 + Tax 4,50 + Land 1,32 = 20,32M).

---

### M-03 | doc 05 — "Revenue 10Y tich luy" khong ro nghia

**File**: `05_DATA_LAYER_SPEC.md`, Section 3 (financials.ts comment `revenue10YCumulative`)  
**Lien quan**: `09_DEV_REQUIREMENTS.md` co "Revenue 10Y cong don | 103,52M USD"

Theo backup, **15Y** tich luy = 165M. Khong co con so 103,52M trong backup.

Neu "10Y tich luy" = Y6 + … + Y15 (10 nam co doanh thu) = 2,5+5+8+11,5+14,5+18+21+23+25+32 = **~161M** (khong phai 103,52M).

Neu "10Y tich luy" = Y5 toi Y14 (10 nam tu Y5) = 0,5+2,5+5+8+11,5+14,5+18+21+23+25 = **~129,5M** (khong phai 103,52M).

**Can lam**: Xoa dong "Revenue 10Y cong don" khoi doc 09 QUY TAC 2. Thay bang cac con so da xac nhan tu backup.

---

### M-04 | doc 08 — Bug severity sai: BUG-06 la CRITICAL (phai close) nhung con mo

**File**: `08_IMPLEMENTATION_PLAN.md`

Hien tai BUG-06 va BUG-07 dang o trang thai "can sua". **Thuc te chung KHONG phai bug** — 14,5M va 32M la SO LIEU DUNG theo Section 5.2. Can doi trang thai sang "RESOLVED" va giai thich.

---

### M-05 | doc 04 — Component Architecture khong co note ve data moi

**File**: `04_COMPONENT_ARCHITECTURE.md`

Section 3.4 (ExecutiveSummary) hien viet "KPI Revenue Y10: kiem tra so lieu voi V2.1" — can update note nay thanh "Revenue Y10 = 14,50M USD (da xac nhan – Section 5.2 backup master)".

---

### M-06 | doc 07 — Setup Guide: "file MEKONG_DE_AN_V2_MASTER.md" → cap nhat ref

**File**: `07_DEVELOPER_SETUP_GUIDE.md`

Kiem tra tat ca cac tham chieu den "MEKONG_DE_AN_V2_MASTER.md" va "15.946 dong" → doi thanh master file moi.

---

## 5. NOI DUNG CON THIEU

### Gap-01 | doc 02 — Slides 9, 10, 11 TRONG hoan toan

**Chi tiet**: File `02_SLIDE_CONTENT_SPEC.md` co 427 dong, ket thuc o header "## SLIDE 9: LO TRINH TRIEN KHAI" ma khong co noi dung. Slides 10 va 11 hoan toan vang bong.

**Uoc tinh noi dung can them**: ~150 dong

**Noi dung Slide 9 lay tu**: Backup Section 8.1 (Gantt), 8.2 (Milestones)  
**Noi dung Slide 10 lay tu**: Backup Section 5.7 (Strategic Value Assessment)  
**Noi dung Slide 11**: Thong tin lien he, CTA, thong tin chu dau tu

---

### Gap-02 | src/data — financials.ts can cap nhat 11 gia tri

Developer can cap nhat cac gia tri trong `src/data/financials.ts`:

| Truong | Gia tri cu (can xoa/sua) | Gia tri moi (theo backup) |
|---|---|---|
| `revenueByYear[Y6].total` | 2,1 | **2,5** |
| `revenueByYear[Y7].total` | 5,5 | **5,0** |
| ...Y8, Y9, Y11, Y12, Y13... | Xem C-02 o tren | Xem bang C-02 |
| `scenarios.conservative.npv` | -3.2 | **0.5** |
| `scenarios.optimistic.npv` | 8.5 | **4.0** |
| `scenarios.conservative.irr` | 11.2 | **12.3** |
| `scenarios.optimistic.irr` | 15.5 | **14.5** |
| `sensitivity.capex.minus20` | 5.2 | **3.6** |
| `sensitivity.capex.plus20` | -2.2 | **-0.6** |
| `npvProbabilityWeighted` | khong co | **1.70** (them moi) |

---

### Gap-03 | src/data — products.ts thieu 7 san pham IoT moi

Hien tai `products.ts` chi co MK-200, MK-300, AMR (3 san pham). Can them:
- MK-EIO series (3 bien the)
- MK-DDC-24, MK-DDC-64
- MK-GW-4G
- MekongBMS, MekongSCADA (phan mem)
- AMR-500, AMR-1000, AGV-500, OHT-100 (robot bien the)

---

### Gap-04 | src/data — financials.ts thieu strategic value breakdown moi

Bang 7 thanh phan gia tri chien luoc theo backup Section 5.7.1 = 20,32M (khac voi docs hien tai co 6 thanh phan).

---

## 6. TAI LIEU CAN BO SUNG

### Doc moi 1: `10_CANONICAL_DATA_REFERENCE.md`

**Muc dich**: Nguon du lieu chinh thuc duy nhat cho developer. Tra cuu so lieu ma khong can doc 12.714 dong master file.

**Noi dung de xuat**:

**Section A — Financial KPIs**:
- Bang 20+ chi so tai chinh chinh thuc (WACC, NPV, IRR, Payback, DSCR...)
- Bang 3 kich ban day du
- Bang sensitivity ±10%/±20%

**Section B — Revenue Model**:
- Bang doanh thu 15 nam (project-year, per BU)
- Giai thich su khac biet giua Section 3.13 (operational-year) va Section 5.2 (project-year)
- Revenue 50Y note

**Section C — CAPEX Structure**:
- Bang 5 pha chi tiet
- Bang CAPEX theo 4 tru cot (CNC 15,60M / DC 22,00M / IoT 4,00M / HL 5,90M)
- Von CSH equity bridge

**Section D — Product Catalog**:
- Bang 10 san pham IoT day du voi gia, margin, tinh nang
- Bang 4 dich vu DC voi gia, SLA
- Bang CNC specs day du

**Section E — Timeline Milestones**:
- Bang 18 milestones voi nam du an + nam lich (2026-2038)
- Phase start/end dates

**Section F — Headcount**:
- Bang 5 giai doan nhan su voi so luong per BU

---

### Doc moi 2: `11_SLIDE_REVISION_LOG.md`

**Muc dich**: Ghi lai tai sao cac con so thay doi, cac nguon tham khao. Giup onboard developer moi, and giai thich cho stakeholder khi bi hoi "tai sao con so nay khac bai truoc?".

**Noi dung de xuat**:

```
## Phien ban 2.1 → 2.2 (2026-03-11)
Nguon moi: MASTER_BACKUP_47M.md

| Thay doi | Phien ban 2.1 | Phien ban 2.2 | Ly do |
|---|---|---|---|
| Revenue Y10 slide 2 | 30,50M | 14,50M | Dung Section 5.2 (project-year) |
| Revenue Y15 slide 2 | 43,00M | 32,00M | Dung Section 5.2 (project-year) |
| NPV Conservative | -3,2M | +0,50M | Kiem tra lai DCF model |
| Optimistic NPV | 8,5M | 4,0M | Kiem tra lai DCF model |
| Sensitivity CAPEX -20% | 5,2M | 3,6M | Cap nhat DCF inputs |
| San pham IoT | 3 dong | 10 dong | Them MK-EIO, MK-DDC, etc. |
```

---

## 7. KE HOACH THUC HIEN

### Sprint 1 (Ngay 1-2): Critical Fixes

| Task | File | Uoc tinh |
|---|---|:---:|
| Sua Revenue Y10/Y15 trong bang KPI Slide 2 | `02_SLIDE_CONTENT_SPEC.md` | 15 phut |
| Sua toan bo bang doanh thu 15 nam Slide 6 | `02_SLIDE_CONTENT_SPEC.md` | 30 phut |
| Sua bang 3 kich ban (NPV, IRR, probability) | `02_SLIDE_CONTENT_SPEC.md` | 20 phut |
| Sua sensitivity analysis | `02_SLIDE_CONTENT_SPEC.md` | 20 phut |
| Dong BUG-06, BUG-07; them BUG-09/10/11 | `08_IMPLEMENTATION_PLAN.md` | 30 phut |
| Sua bang so lieu chinh thuc Rule 2 | `09_DEV_REQUIREMENTS.md` | 20 phut |
| Xac nhan Revenue Y10 trong Data Layer Spec | `05_DATA_LAYER_SPEC.md` | 15 phut |
| Cap nhat financials.ts (11 gia tri) | `src/data/financials.ts` | 45 phut |

**Tong Sprint 1**: ~3 gio dev

---

### Sprint 2 (Ngay 3-4): Content Additions

| Task | File | Uoc tinh |
|---|---|:---:|
| Viet day du noi dung Slides 9, 10, 11 | `02_SLIDE_CONTENT_SPEC.md` | 2 gio |
| Them bang san pham IoT day du (10 sp) vao Slide 4 | `02_SLIDE_CONTENT_SPEC.md` | 45 phut |
| Them TypeScript interfaces moi vao Data Layer Spec | `05_DATA_LAYER_SPEC.md` | 1 gio |
| Cap nhat products.ts (7 san pham moi) | `src/data/products.ts` | 1,5 gio |
| Cap nhat strategic value breakdown | `src/data/financials.ts` | 30 phut |
| Cap nhat note NPV(20Y) = -5,3M va ly giai | `02_SLIDE_CONTENT_SPEC.md` + `05_DATA_LAYER_SPEC.md` | 20 phut |

**Tong Sprint 2**: ~6 gio dev

---

### Sprint 3 (Ngay 5-6): New Docs + Polish

| Task | File | Uoc tinh |
|---|---|:---:|
| Tao `10_CANONICAL_DATA_REFERENCE.md` | Tao file moi | 3 gio |
| Tao `11_SLIDE_REVISION_LOG.md` | Tao file moi | 1 gio |
| Cap nhat header reference toan bo 9 doc hien co | Tat ca docs | 30 phut |
| Cap nhat note trong `04_COMPONENT_ARCHITECTURE.md` | 1 dong | 5 phut |
| Cap nhat `07_DEVELOPER_SETUP_GUIDE.md` | Sua ref | 10 phut |
| Review toan bo lan cuoi | — | 1 gio |

**Tong Sprint 3**: ~5,5 gio dev

---

### Tong gio lam viec uoc tinh: ~14,5 gio (xap xi 2 ngay lam viec)

---

## 8. BANG DOI CHIEU SO LIEU CHUAN

> Day la bang so lieu DA XAC NHAN. Lay tu `MEKONG_DE_AN_V2_MASTER_BACKUP_47M.md`.
> Su dung bang nay khi viet bat ky dong code, comment, hay doc nao.

### 8.1. KPI Tai chinh Tong the

| Chi so | Gia tri | Don vi | Nhan | Nguon (Section) |
|---|---:|---|:---:|---|
| CAPEX | 47,50 | M USD | [C] | 5.1.1 |
| Von CSH | 34,97 | M USD (73,6%) | [C] | 5.1.2 |
| Vay ngan hang | 12,53 | M USD (26,4%) | [C] | 5.1.2 |
| Lai suat vay | 8,5 | %/nam | [B] | 5.1.2 |
| WACC | 12 | % | [C] | 5.6.1 |
| NPV (50Y, Base) | 1,50 | M USD | [C] | 5.6.1 |
| NPV (20Y) | -5,30 | M USD | [C] | 5.6.1 |
| NPV (probability-weighted) | 1,70 | M USD | [C] | 5.6.2 |
| IRR (50Y) | 13,0 | % | [C] | 5.6.1 |
| Payback (discounted) | 13 | nam | [C] | 5.6.1 |
| DSCR (Y11, min) | 4,91 | x | [C] | 5.5.2 |
| P(NPV>0) Monte Carlo | 65 | % | [C] | 5.8.2 |
| Revenue Y10 (project-year) | 14,50 | M USD | [C] | 5.2.2 |
| Revenue Y15 | 32,00 | M USD | [C] | 5.2.2 |
| Revenue 15Y tich luy | ~165 | M USD | [C] | 5.2.1 |
| EBITDA steady-state | 28-30 | % | [C] | 5.3.2 |
| Gia tri Chien luoc | 20,32 | M USD | [C] | 5.7.1 |

### 8.2. CAPEX Theo Tru cot

| Tru cot | CAPEX | Ty trong |
|---|---:|:---:|
| Datacenter / MACC | 22,00 M USD | 46% |
| CNC / MPMC | 15,60 M USD | 33% |
| Ha tang chung | 5,90 M USD | 12% |
| IoT / Robot | 4,00 M USD | 8% |
| **Tong** | **47,50 M USD** | **100%** |

### 8.3. Gia tri Chien luoc — 7 Thanh phan

| Thanh phan | Gia tri (M USD) | Phuong phap |
|---|---:|---|
| NPV tai chinh (DCF 50Y) | 1,50 | DCF, WACC 12% |
| Real Options Value | 3,50 | Black-Scholes |
| Barrier to Entry Premium | 2,80 | Cost-to-replicate |
| Synergy Premium (Cross-BU) | 2,20 | NPV Synergy CF |
| Platform/Ecosystem Value | 4,50 | Revenue multiple |
| Uu dai thue KCNC | 4,50 | NPV thue (CIT 10%, mien 4Y) |
| Mien thue dat 11Y | 1,32 | PV @ 120K/nam × 11Y |
| **Tong** | **20,32** | [C] |

### 8.4. 3 Kich ban Dau tu

| Chi so | Conservative | Base Case | Optimistic |
|---|---:|---:|---:|
| Revenue 15Y | 130 M | 165 M | 210 M |
| NPV 50Y | 0,50 M | 1,50 M | 4,00 M |
| IRR 50Y | 12,3% | 13,0% | 14,5% |
| Payback (simple) | 14-15 nam | 12-13 nam | 10-11 nam |
| Xac suat | 30% | 50% | 20% |
| NPV trong so | **1,70 M** (tong the) | | |

### 8.5. Milestones Chinh (Lich thuc — Y0 = Q1/2026)

| Milestone | Nam Du an | Quy/Nam Lich | Phase |
|---|:---:|---|:---:|
| IRC dieu chinh duoc duyet | Y0 | Q1/2026 | P0 |
| Hoan thanh nen mong | Y1 | Q4/2026 | P0 |
| Shell toa nha 3 tang hoan thanh | Y4 | Q4/2029 | P1 |
| IoT soft open — First Revenue | Y5 | Q3/2030 | P2 |
| ISO 9001 dat duoc | Y6 | Q1/2031 | P2 |
| CNC 15 may van hanh | Y6 | Q4/2031 | P2 |
| CNC full (28 may) | Y8 | Q2/2033 | P3 |
| DC Zone 1 (50 Rack) | Y8 | Q4/2033 | P3 |
| IATF 16949 | Y9 | Q1/2034 | P3 |
| Breakeven (EBIT > 0) | Y8-Y9 | 2033-2034 | P3 |
| AS9100 Rev D + Uptime Tier III | Y10 | Q2/2035 | P4 |
| DC Zone 2 (100 Rack full) | Y11 | Q1/2036 | P4 |
| Full 3 BU Steady-state | Y13 | 2038 | P4 |

---

*Ke hoach nay duoc lap boi: GitHub Copilot*  
*Ngay: 2026-03-11*  
*Can cu: MEKONG_DE_AN_V2_MASTER_BACKUP_47M.md (12.714 dong, doi chieu ngay 2026-03-11)*
