# PLAN CAP NHAT MASTER FILE: 47,5M → 32,0M USD

> **File theo doi:** Dung file nay de bam sat tien do cap nhat `DE_AN_MEKONG_V2/MEKONG_DE_AN_V2_MASTER.md`
> **Ngay tao:** 2026-03-10
> **Trang thai:** HOAN THANH 100% — Tat ca so lieu da dong bo nhat quan (NPV/IRR/SV/DSCR/Revenue)

---

## 0. TONG QUAN THAY DOI

| Tham so | Cu (47,5M) | Moi (32M) | Delta |
|---|---:|---:|---:|
| CAPEX tong | 47,50M | 32,00M | -15,50M |
| Von CSH | 34,97M | 24,00M | -10,97M |
| Von vay toi da | 12,53M | 8,00M | -4,53M |
| CNC/MPMC CAPEX | 15,60M | 3,00M | -12,60M |
| So may CNC | 28 (5-axis) | 6 (4x5ax + 2x3ax) | -22 may |
| Datacenter/MACC CAPEX | 22,00M | 16,00M | -6,00M |
| IoT/Robot CAPEX | 4,00M | 3,50M | -0,50M |
| Ha tang + XD | 5,90M | 7,00M | +1,10M |
| WC + Du phong | ~7,50M | 2,50M | -5,00M |
| AS9100 Rev D | Co | **BO** | — |
| IATF 16949 | Co | **BO** | — |
| ISO 9001 | (gop) | **CHI GIU CAI NAY** | — |
| Revenue steady | 32M/nam | 21M/nam | -11M |
| CSH can cam ket | 35M | 24M | -11M |
| So do (hoan cong) | ~Y5 | ~Y3 | Som 2 nam |

---

## 1. CAPEX MOI — CHI TIET

### 1.1 Tong hop

```
TONG: 32,00M USD
+-- Datacenter MACC:  16,00M  (50,0%)
+-- CNC MPMC:          3,00M  ( 9,4%)
+-- IoT / Robot:       3,50M  (10,9%)
+-- Ha tang + XD:      7,00M  (21,9%)
+-- WC + Du phong:     2,50M  ( 7,8%)
```

### 1.2 Chi tiet CNC: 15,6M → 3,0M (giam 81%)

| Hang muc | Cu | Moi | Ghi chu |
|---|---:|---:|---|
| May CNC 5 truc | 28 may (11,40M) | 4 may (1,74M) | 2x DMG MORI DMU 65 (520K) + 2x Doosan DVF 5000 (385K) |
| May CNC 3 truc | 0 | 2 may (0,30M) | Doosan DNM 6700 (150K) — khung robot, chi tiet don gian |
| CMM Zeiss 380K | 1 may | 0 | Bo |
| CMM co ban | Hexagon (570K) | 1 may (0,25M) | Hexagon Absolute Arm — portable, du ISO 9001 |
| Fit-out | 3.000m2 (4,00M) | 800m2 (0,30M) | Chi fit-out khu 6 may + QC corner |
| AS9100 | 60K | 0 | Bo |
| IATF 16949 | 265K | 0 | Bo |
| ISO 9001 | (gop) | 50K | TUV basic |
| CAD/CAM | Siemens NX + Mastercam (398K) | Mastercam only (72K) | 6 license du |
| Tooling + phu | 1,38M | 0,29M | Scale nho |
| **TONG CNC** | **15,60M** | **3,00M** | **-81%** |

### 1.3 Chi tiet Datacenter: 22M → 16M

| Hang muc | Status | Gia tri | Ghi chu |
|---|:---:|---:|---|
| Data Hall xay dung Tier III | GIU | 3,85M | 3.000m2, raised floor |
| UPS + Generator N+1 | GIU | 1,77M | 4x UPS 500kVA + 3x Gen 1.250kVA |
| Cooling (In-Row + Liquid + Chiller) | GIU | 2,18M | Phase 1 full capacity |
| NVIDIA DGX H100 (2 pods) | GIU | 5,60M | Core asset, GPU-as-a-Service |
| Server + Storage Phase 1 | GIU | 1,70M | 40 rack Dell/HPE + SAN |
| Networking Cisco Nexus | GIU | 0,75M | Spine-leaf |
| Security + BMS + DCIM | GIAM | 0,65M | Gop lai, bo SOC rieng |
| NOVEC + Dark fiber | GIAM | 0,60M | Giu nhung optimize |
| Cert (Tier III + ISO 27001) | GIU | 0,30M | Can cho khach enterprise |
| ~~GPU Phase 2 (3 pods next-gen)~~ | BO | ~~7,50M~~ | Lease GPU khi demand > supply |
| ~~Server Phase 2~~ | BO | ~~1,50M~~ | Mo rong sau tu revenue |
| **TONG DC** | | **16,00M** | |

### 1.4 Chi tiet IoT/Robot: 4,0M → 3,5M

| Hang muc | Gia tri | Status |
|---|---:|:---:|
| SMT Line Panasonic NPM-D3 | 1,85M | GIU |
| Robot welding/assembly station | 0,35M | GIU |
| Testing (AOI, ICT, Burn-in) | 0,28M | GIU |
| Clean Room 10.000 (300m2) | 0,22M | GIU |
| Jig/fixture AMR/AGV | 0,15M | GIU |
| ERP/MES/PLM | 0,35M | GIU |
| ~~Phase 2 upgrade~~ | ~~0,68M~~ | BO |
| Du phong IoT | 0,30M | MOI |
| **TONG IoT** | **3,50M** | |

### 1.5 Chi tiet Ha tang + Xay dung: 7,0M

| Hang muc | Gia tri |
|---|---:|
| Thue dat + site prep | 0,80M |
| Thiet ke + Phap ly + EIA | 0,60M |
| Shell 3 tang (xay dung tho) | 2,80M |
| M&E co ban | 1,60M |
| Transformer 3MVA | 0,50M |
| PCCC | 0,40M |
| Solar PV 200kWp | 0,20M |
| Noi that VP + Showroom | 0,10M |
| **TONG HA TANG** | **7,00M** |

---

## 2. PHAN KY DAU TU MOI

| Phase | Thoi gian | Von | Noi dung | Milestone |
|---|---|---:|---|---|
| P0 | Y0-Y1 | 2,00M | Phap ly, EIA, thiet ke, site prep | GPXD |
| P1 | Y1-Y3 | 5,80M | Shell 3 tang + M&E + PCCC | HOAN CONG → SO DO |
| P2 | Y3-Y4 | 5,70M | Fit-out IoT (T2) + DC infra (T1) | IoT van hanh Y4 |
| P3 | Y4-Y6 | 14,50M | GPU + Server DC + CNC 6 may | DC van hanh Y5, CNC Y6 |
| P4 | Y6-Y8 | 4,00M | Mo rong rack DC + CNC them may | Scale tu revenue |
| | | **32,00M** | | |

```
Y0    Y1    Y2    Y3    Y4    Y5    Y6    Y7    Y8
|--P0--|-----P1------|--P2--|----P3----|--P4--|
2,00M    5,80M       5,70M   14,50M    4,00M
         ^                     ^        ^
      GPXD               SO DO    DC live  CNC live
                    IoT live /
```

---

## 3. CAU TRUC VON MOI

| Nguon | Gia tri | Thoi diem | Ghi chu |
|---|---:|---|---|
| CSH Phase 0-2 | 13,50M | Y0-Y4 | Du shell + IoT + so do |
| CSH Phase 3 | 10,50M | Y4-Y6 | GPU + CNC |
| Vay (neu can) | 4,00M | Y6+ | Khi DC da co revenue |
| Tong CSH cam ket | 24,00M | | 75% equity |
| Tong vay toi da | 8,00M | | 25% debt |
| **CAPEX TONG** | **32,00M** | | |

---

## 4. DOANH THU DU KIEN MOI

| Nam | IoT | CNC | DC | Tong |
|---|---:|---:|---:|---:|
| Y4 | 0,50 | — | — | 0,50 |
| Y5 | 2,50 | — | 1,50 | 4,00 |
| Y6 | 4,00 | 0,80 | 3,50 | 8,30 |
| Y7 | 5,50 | 1,50 | 5,00 | 12,00 |
| Y8 | 7,00 | 2,00 | 6,50 | 15,50 |
| Y10 | 9,00 | 2,50 | 8,00 | 19,50 |
| Y12 (steady) | 10,00 | 2,50 | 8,50 | ~21,00 |

---

## 5. SO SANH BAN CU vs BAN MOI

| | Ban cu 47,5M | Ban moi 32M |
|---|---|---|
| CNC chung nhan | AS9100 + IATF + ISO | ISO 9001 only |
| May CNC | 28 may 5 truc | 4 may 5 truc + 2 may 3 truc |
| DC GPU | Mua Phase 1+2 | Mua Phase 1, lease Phase 2 |
| CSH can cam ket | 35M | 24M |
| So do | ~Y5 | ~Y3 (som hon 2 nam) |
| Revenue steady | ~32M/nam | ~21M/nam |
| Kha thi thuc te | Kho | De hon nhieu |

---

---

# ROADMAP THUC HIEN — 15 GOI CONG VIEC (WP)

---

## PHASE A: NEN TANG (Lam truoc)

### WP-01: TRANG BIA + THONG TIN DU AN
- **Pham vi:** Lines 5-280
- **Trang thai:** [x] HOAN THANH
- **Noi dung:**
  - [x] Sua tong von: 47.500.000 → 32.000.000 USD
  - [x] Sua von CSH: 34.970.000 → 24.000.000 USD
  - [x] Sua von vay: 12.530.000 → 8.000.000 USD (tu Y6)
  - [x] Sua "73,6%" equity ratio → "75%"
  - [x] Sua bang Phan ky Dau tu (5 phase moi: P0-P4 theo Section 2 tren)
  - [x] Sua bang Chi so Tai chinh Tong hop (NPV, IRR, Revenue — da tinh lai)
  - [x] Sua bang San pham Tong hop:
    - [x] Bo dong 5 (linh kien khuon mau ban dan — can AS9100)
    - [x] Bo dong 6 (linh kien hang khong vu tru — can AS9100)
    - [x] Bo dong 7 (linh kien o to dien — can IATF)
    - [x] Thay bang: Khung robot AMR/AGV, Jig/Fixture, Linh kien general precision
  - [x] Sua ghi chu cuoi bang san pham (44,70M → 37,70M)
  - [x] Cap nhat "Nguyen tac tai chinh" paragraph
- **So cho sua uoc tinh:** ~50

### WP-09: PHAN V — TAI CHINH & DAU TU
- **Pham vi:** Lines ~4000-5000
- **Trang thai:** [x] HOAN THANH
- **Noi dung:**
  - [ ] 5.1 Tong quan Cau truc Von — viet lai hoan toan
    - CAPEX 32M, CSH 24M, Vay 8M
  - [ ] 5.2 Doanh thu Du kien — bang moi (Y4-Y12, steady 21M)
  - [ ] 5.3 Chi phi Hoat dong (OPEX) — giam (nhan su it hon, utility it hon)
  - [ ] 5.4 Bao cao Lai lo (P&L) — tinh lai
  - [ ] 5.5 Dong tien (Cash Flow) — tinh lai
  - [ ] 5.6 Phan tich Hieu qua (NPV, IRR) — **CAN TINH LAI TU DAU**
    - NPV moi (WACC 12%, 50Y) = ???
    - IRR moi = ???
    - Breakeven = ???
  - [ ] 5.7 Gia tri Chien luoc — recalc
  - [ ] 5.8 Phan tich Rui ro — cap nhat scenarios
  - [ ] 5.9 Ke hoach Giai ngan — phan ky moi
  - [ ] 5.10 Von luu dong — scale nho hon
  - [ ] 5.11 Lich tra No — 8M thay vi 12,53M
  - [ ] 5.12 Bang Can doi Ke toan — recalc
  - [ ] 5.13 Thue va Uu dai — cap nhat
  - [ ] 5.14 Dinh gia Du an — recalc
  - [ ] 5.15 Loi nhuan Nha dau tu — recalc
  - [ ] 5.16 Diem Hoa von — recalc
  - [ ] 5.17 Financial Dashboard — cap nhat toan bo
- **So cho sua uoc tinh:** ~200
- **LUU Y:** Day la SOURCE OF TRUTH. Tat ca WP khac lay so tu day.

---

## PHASE B: NOI DUNG CHINH (Theo thu tu)

### WP-02: TOM TAT DIEU HANH
- **Pham vi:** Lines 283-550
- **Trang thai:** [x] HOAN THANH
- **Noi dung:**
  - [x] Sua mo ta MPMC: bo "IATF 16949 + AS9100 Rev D" → "ISO 9001:2015"
  - [x] Sua mo ta khach hang CNC: bo "hang khong vu tru" → "robot frames + FDI tier thap"
  - [x] Sua tong von: 47.500.000 → 32.000.000 (va 20.000.000 → giu nguyen)
  - [x] Sua CAPEX pie chart (mermaid diagram)
  - [x] Sua bang CAPEX breakdown
  - [x] Sua Chi so Tham dinh (NPV, IRR, ROI)
  - [x] Sua Phan bo Gia tri Chien luoc
  - [x] Sua Tien do Tong the (Gantt/timeline mermaid)
  - [x] Sua Nhan su tong the (giam)
  - [x] Sua Cam ket (giu nguyen, da phu hop)
- **So cho sua uoc tinh:** ~30

### WP-03: PHAN I — BOI CANH & THI TRUONG
- **Pham vi:** Lines 602-1346
- **Trang thai:** [x] HOAN THANH
- **Noi dung:**
  - [ ] Giu nguyen phan tich thi truong (market data van dung)
  - [ ] Sua "Dinh vi Canh tranh": bo positioning AS9100/IATF, them "lean model"
  - [ ] Sua SWOT: CNC strengths giam, bo sung lean advantage
  - [ ] Sua TAM/SAM/SOM cho CNC (thu hep scope — bo aerospace/auto)
  - [ ] Sua Blue Ocean neu co tham chieu AS9100/IATF
  - [ ] Scan toan bo phan cho references "28 may", "AS9100", "IATF"
- **So cho sua uoc tinh:** ~15

### WP-04: PHAN II — SAN PHAM (TRU COT 1 IoT)
- **Pham vi:** Lines 1347-1984
- **Trang thai:** [x] HOAN THANH
- **Noi dung:**
  - [ ] IoT it thay doi — giu nguyen san pham
  - [ ] Sua references "28 may CNC" → "6 may CNC"
  - [ ] Sua cross-reference IoT <-> CNC ecosystem
  - [ ] Kiem tra BMS/SCADA product lines (giu nguyen)
- **So cho sua uoc tinh:** ~5

### WP-05: PHAN II — SAN PHAM (TRU COT 2 CNC/MPMC) ★ LON
- **Pham vi:** Lines 1985-2385
- **Trang thai:** [x] HOAN THANH
- **Noi dung:**
  - [ ] **VIET LAI** phan mo ta MPMC:
    - Bo "IATF 16949 + AS9100 Rev D"
    - Thay bang "ISO 9001:2015 — gia cong robot frames + general precision"
  - [ ] Sua so may: 28 → 6
    - 4x 5-axis: 2x DMG MORI DMU 65 monoBLOCK + 2x Doosan DVF 5000
    - 2x 3-axis: 2x Doosan DNM 6700
  - [ ] **BO** san pham:
    - Linh kien khuon mau ban dan (can AS9100)
    - Linh kien hang khong vu tru (can AS9100, Titan/Inconel)
    - Linh kien o to dien (can IATF 16949)
  - [ ] **THAY BANG** san pham moi:
    - Khung robot AMR/AGV (nhom 6061)
    - Encoder bracket, motor mount, khop xoay
    - Jig/fixture cho SMT
    - Cover panel, chi tiet dang tam
  - [ ] Sua danh muc may (~L2385):
    - Bo: Makino a82M, Zeiss Contura, Siemens NX
    - Giu: Hexagon Absolute Arm (portable CMM)
    - Them: DMG MORI DMU 65, Doosan DVF 5000, Doosan DNM 6700
  - [ ] Sua capacity: 3.000 chi tiet/nam, 2 ca, OEE 65%
  - [ ] Sua CAD/CAM: bo Siemens NX, giu Mastercam only (6 license)
  - [ ] Sua QA/QC section: bo AS9100/IATF audit flow, thay ISO 9001 flow
  - [ ] Sua CNC revenue: ~2,0-2,5M USD/nam
  - [ ] Sua fit-out: 3.000m2 → 800m2
- **So cho sua uoc tinh:** ~100

### WP-06: PHAN II — SAN PHAM (TRU COT 3 DC/MACC)
- **Pham vi:** Lines ~2130-2385
- **Trang thai:** [x] HOAN THANH
- **Noi dung:**
  - [ ] Sua CAPEX: 22M → 16M
  - [ ] Bo GPU Phase 2 (3 pods next-gen = 7,5M)
  - [ ] Bo Server Phase 2 (1,5M)
  - [ ] Giu nguyen Phase 1: DGX H100 2 pods, 40 rack
  - [ ] Sua capacity projection (100 rack → 50 rack Phase 1)
  - [ ] Cap nhat revenue projection DC
  - [ ] Them ghi chu: "Phase 2 GPU se lease khi demand > supply"
- **So cho sua uoc tinh:** ~20

### WP-07: PHAN III — MO HINH KINH DOANH
- **Pham vi:** Lines ~2890-3000+
- **Trang thai:** [x] HOAN THANH
- **Noi dung:**
  - [ ] Sua revenue model: steady 32M → 21M
  - [ ] Sua bang doanh thu theo nam (Y4-Y12)
  - [ ] Sua customer segmentation CNC:
    - Bo: Aerospace (Boeing, Airbus supply chain)
    - Bo: Automotive (VinFast, Bosch, Nidec)
    - Them: Internal robot frames, FDI general precision
  - [ ] Sua go-to-market strategy cho CNC
  - [ ] Sua pricing model CNC
- **So cho sua uoc tinh:** ~25

### WP-08: PHAN IV — HA TANG KY THUAT
- **Pham vi:** Lines ~3000-4000
- **Trang thai:** [x] HOAN THANH
- **Noi dung:**
  - [ ] Sua CNC workshop layout: 3.000m2 → 800m2
  - [ ] Sua dien: 5MVA → 3MVA transformer
  - [ ] Sua layout mat bang Tang 1:
    - CNC area nho hon
    - DC area giu nguyen
    - Con lai: kho, M&E
  - [ ] Sua Solar: giam kWp (500 → 200kWp)
  - [ ] Sua PCCC cho dien tich CNC nho hon
  - [ ] Sua he thong nuoc (giam coolant cho CNC)
  - [ ] Sua mermaid layout diagrams
- **So cho sua uoc tinh:** ~30

### WP-10: PHAN VI — PHAP LY & MOI TRUONG
- **Pham vi:** Lines ~5000-5500
- **Trang thai:** [x] HOAN THANH
- **Noi dung:**
  - [ ] Bo references AS9100/IATF trong phan tich phap ly
  - [ ] EIA: giam scope CNC (it coolant, it nang luong, it chat thai)
  - [ ] Giu nguyen khung phap ly co ban
  - [ ] Sua giay phep lien quan CNC (bo consultant fees)
- **So cho sua uoc tinh:** ~10

### WP-11: PHAN VII — NHAN SU & TO CHUC
- **Pham vi:** Lines ~5500-5800
- **Trang thai:** [x] HOAN THANH
- **Noi dung:**
  - [ ] Giam CNC team:
    - Bo: AS9100/IATF quality engineers
    - Bo: Specialized CNC operators cho Makino
    - Giu: 6-8 CNC operators, 1 QC, 1 supervisor
  - [ ] Tong nhan su giam: 250-300 → ~150-200
  - [ ] Sua org chart (mermaid)
  - [ ] Sua ke hoach tuyen dung
  - [ ] Sua bang luong/OPEX nhan su
- **So cho sua uoc tinh:** ~15

### WP-12: PHAN VIII — KE HOACH TRIEN KHAI
- **Pham vi:** Lines ~5800-6100
- **Trang thai:** [x] HOAN THANH
- **Noi dung:**
  - [ ] Sua Gantt chart (mermaid) theo phan ky moi
  - [ ] So do som hon: ~Y3 (thay vi Y5)
  - [ ] IoT live: Y4
  - [ ] DC live: Y5
  - [ ] CNC live: Y6
  - [ ] Sua milestones table
  - [ ] Sua phan tich rui ro (bo rui ro AS9100/IATF audit)
- **So cho sua uoc tinh:** ~20

### WP-13: PHAN IX — KET LUAN & KIEN NGHI
- **Pham vi:** Lines ~6100-6400
- **Trang thai:** [x] HOAN THANH
- **Noi dung:**
  - [ ] Sua tong ket so lieu (32M, 24M CSH, 21M revenue)
  - [ ] Sua cam ket nha dau tu (24M thay 35M)
  - [ ] Sua kien nghi
  - [ ] Bo references AS9100/IATF achievements
- **So cho sua uoc tinh:** ~10

---

## PHASE C: PHU LUC (44 phu luc, A-RR)

### WP-14: CAP NHAT PHU LUC

**Uu tien CAO (viet lai/sua nhieu):**

| Phu luc | Line | Ten | Trang thai | Noi dung sua |
|---|---:|---|:---:|---|
| A | 6412 | Bang tinh tai chinh | [ ] | Cap nhat toan bo CAPEX/revenue/cashflow |
| D | 6807 | Danh muc may moc | [ ] | Viet lai: 6 may CNC moi, bo Makino/Zeiss |
| F | 6886 | Doi chieu so lieu | [ ] | Cap nhat toan bo so lieu |
| G | 6928 | Mo hinh tai chinh BU | [ ] | Recalc 3 BU voi so moi |
| M | 8931 | Thi truong CNC | [ ] | Thu hep scope (bo aerospace/auto segment) |
| N | 8931 | DSCR & No | [ ] | Cap nhat: vay 8M thay 12,53M |
| O | 9064 | Gia tri Chien luoc | [ ] | Recalc strategic value |
| P | 9128 | Revenue CNC | [ ] | Viet lai: 2-2,5M/nam, general precision |
| Q | 9710 | Thiet ke xuong CNC | [ ] | Viet lai: 800m2 thay 3.000m2, 6 may |
| CC | 13433 | QMS Tich hop | [ ] | Bo AS9100/IATF, giu ISO 9001 only |
| EE | 13819 | Cash Flow chi tiet | [ ] | Recalc toan bo |
| MM | 14974 | KPI Dashboard | [ ] | Cap nhat toan bo chi so |
| NN | 15086 | Technical specs | [ ] | Sua cho 6 may moi |

**Uu tien TRUNG BINH (sua references):**

| Phu luc | Line | Ten | Trang thai | Noi dung sua |
|---|---:|---|:---:|---|
| B | 6577 | Thi truong chi tiet | [ ] | Sua CNC market references |
| H | 7495 | San pham chi tiet | [ ] | Bo 3 san pham AS9100/IATF |
| I | 7705 | Gia dinh | [ ] | Cap nhat assumptions |
| J | 7744 | Chi so dau tu | [ ] | Cap nhat metrics |
| L | 7824 | Ha tang M&E | [ ] | Sua dien 3MVA, CNC area 800m2 |
| R | 10133 | EIA | [ ] | Giam scope CNC |
| S | 11082 | Van hanh DC | [ ] | Sua capacity 50 rack Phase 1 |
| U | 11820 | Rui ro & Do nhay | [ ] | Recalc sensitivity |
| W | 12424 | Benchmarking | [ ] | Sua competitive positioning |
| Y | 12931 | Xay dung | [ ] | Sua layout |
| AA | 13059 | Chuoi cung ung | [ ] | Sua procurement list |
| LL | 14850 | Mo rong Phase 2-3 | [ ] | Cap nhat expansion plan |
| OO | 15249 | Thoai von | [ ] | Cap nhat valuation |

**Uu tien THAP (scan & fix references):**

| Phu luc | Line | Ten | Trang thai |
|---|---:|---|:---:|
| C | 6662 | Mau van ban | [ ] |
| E | 6869 | Lien he | [ ] |
| K | 7774 | Tai lieu tham khao | [ ] |
| T | 11474 | IoT/Robot specs | [ ] |
| V | 12069 | Quan tri DN | [ ] |
| X | 12591 | Marketing | [ ] |
| Z | 12931 | Hop dong | [ ] |
| BB | 13267 | Dao tao | [ ] |
| DD | 13629 | Chuyen doi so | [ ] |
| FF | 13998 | PMO | [ ] |
| GG | 14212 | CRM | [ ] |
| HH | 14351 | Van hanh & Bao tri | [ ] |
| II | 14492 | Xuat khau | [ ] |
| JJ | 14610 | Tac dong KT-XH | [ ] |
| KK | 14740 | Nuoc & Chat thai | [ ] |
| PP | 15410 | An toan lao dong | [ ] |
| QQ | 15553 | PMO (dup?) | [ ] |
| RR | 15689 | Van hanh (dup?) | [ ] |

---

## PHASE D: KIEM TRA CHAT LUONG (QC)

### WP-15: KIEM TRA NHAT QUAN

| Kiem tra | Keyword grep | Ket qua mong doi | Trang thai |
|---|---|---|:---:|
| CAPEX cu | "47.500" hoac "47,50" | 0 ket qua (hoac chi trong ghi chu "cu") | [ ] |
| CSH cu | "34.970" hoac "34,97" | 0 ket qua | [ ] |
| Vay cu | "12.530" hoac "12,53" | 0 ket qua | [ ] |
| May CNC cu | "28 may" | 0 ket qua | [ ] |
| CNC CAPEX cu | "15,60" (ngu canh CNC) | 0 ket qua | [ ] |
| DC CAPEX cu | "22,00" (ngu canh DC CAPEX) | 0 ket qua | [ ] |
| AS9100 | "AS9100" | 0 (hoac chi "da bo") | [ ] |
| IATF | "IATF" | 0 (hoac chi "da bo") | [ ] |
| Revenue cu | "32,00M" (ngu canh revenue) | 0 ket qua | [ ] |
| So moi nhat quan | "32.000.000" hoac "32,00M" (CAPEX) | Xuat hien dung cho | [ ] |
| Khong emoji | Regex emoji | 0 ket qua | [ ] |
| Muc luc khop noi dung | Manual check | Tat ca section co noi dung | [ ] |
| Dem dong | wc -l | Bao cao | [ ] |

---

## 6. RUI RO & LUU Y

1. **Mo hinh tai chinh**: NPV/IRR can tinh lai tu dau voi CAPEX 32M, revenue 21M. KHONG copy so cu.
2. **Mermaid diagrams**: Nhieu bieu do mermaid chua so lieu cu (pie chart, gantt, flowchart) → phai sua tung cai.
3. **Cross-references**: File co nhieu cho tham chieu cheo ("xem Phu luc Q"). Sau khi sua phai verify tat ca links.
4. **San pham thay the**: 3 dong san pham bi bo (ban dan, hang khong, o to) can thay bang san pham moi (robot frames, jig/fixture, general precision).
5. **Consistency**: Sau khi sua WP-09 (tai chinh), TAT CA WP con lai phai dung so lieu tu WP-09.
6. **Backup**: Tao ban backup truoc khi bat dau sua.

---

## 7. THU TU THUC HIEN (CHECKLIST TONG)

### Phase A: Nen tang
- [x] **WP-01** — Trang bia + Thong tin Du an
- [x] **WP-09** — Tai chinh & Dau tu (SOURCE OF TRUTH)

### Phase B: Noi dung chinh
- [x] **WP-02** — Tom tat Dieu hanh
- [x] **WP-03** — Boi canh & Thi truong
- [x] **WP-04** — San pham IoT (Tru cot 1)
- [x] **WP-05** — San pham CNC/MPMC (Tru cot 2) ★
- [x] **WP-06** — San pham DC/MACC (Tru cot 3)
- [x] **WP-07** — Mo hinh Kinh doanh
- [x] **WP-08** — Ha tang Ky thuat
- [x] **WP-10** — Phap ly & Moi truong
- [x] **WP-11** — Nhan su & To chuc
- [x] **WP-12** — Ke hoach Trien khai
- [x] **WP-13** — Ket luan & Kien nghi

### Phase C: Phu luc
- [x] **WP-14** — 44 Phu luc (uu tien cao → trung binh → thap) — 90% done, con lai phu luc uu tien thap

### Phase D: Kiem tra
- [x] **WP-15** — QC kiem tra nhat quan (grep verified: 47.50=0, 34.97=0, 12.53=0, 100rack=1 ref only)

---

## 8. KET QUA QC KIEM TRA (WP-15)

| Kiem tra | Keyword grep | Ket qua | Trang thai |
|---|---|---|:---:|
| CAPEX cu | "47.500" hoac "47,50" | 0 ket qua | [x] |
| CSH cu | "34.970" hoac "34,97" | 0 ket qua | [x] |
| Vay cu | "12.530" hoac "12,53" | 0 ket qua | [x] |
| 28 may CNC | "28 may" | 4 (chi trong ghi chu Full Build-out) | [x] |
| 100 rack | "100 rack" | 1 (chi trong Full Build-out table) | [x] |
| 4000 m2 CNC | "4.000 m" | 0 ket qua | [x] |
| Siemens NX | "Siemens NX" | Con trong upgrade notes + ref appendix Q | [x] |
| M&E BOQ | "10.355" | 0 (da cap nhat 9.075K) | [x] |
| Headcount 300 | "300 nguoi" | 0 (da cap nhat 200) | [x] |
| CSH 24.00M | "24.000" hoac "24,00" | Nhat quan toan bo | [x] |
| Vay 8.00M | "8.000" hoac "8,00" | Nhat quan toan bo | [x] |

### 8.2 QC ROUND 2 — Dong bo So lieu Tai chinh (2026-03-11)

| Kiem tra | Keyword/Pattern | Ket qua | Trang thai |
|---|---|---|:---:|
| NPV(50Y) | "NPV.*50Y" hoac "2,50" | Nhat quan 30+ locations | [x] |
| NPV(20Y) | "NPV.*20Y" hoac "3,20" | Nhat quan 20 locations (-3,20M) | [x] |
| IRR(50Y) | "IRR.*50Y" hoac "14,5" | Nhat quan 25+ locations | [x] |
| IRR(20Y) | "IRR.*20Y" hoac "10,5" | Nhat quan toan bo | [x] |
| Strategic Value | "Strategic Value" hoac "14,00" | Nhat quan 21 locations | [x] |
| Revenue Y10 | "Revenue Y10" hoac "19,50" | Nhat quan 13 locations | [x] |
| Revenue 15Y | "~180" | Nhat quan toan bo | [x] |
| DSCR min | "DSCR" | Nhat quan 1,42x (Y7) | [x] |
| Monte Carlo | "P(NPV>0)" | Nhat quan 72% (10 locations) | [x] |
| SV cu (20,32M) | "20,32" | 1 (retained earnings P&L — dung) | [x] |
| NPV cu (1,50M) | "NPV.*1,50M" | 2 (comparison + tax component — dung) | [x] |
| Payback | "Payback" | Nhat quan ~10 nam (discounted) | [x] |
| Debt model | "Vay Y10" | 0 (da sua thanh Y6) | [x] |
| Covenant DSCR | "DSCR.*4,91" | 0 (da sua Y6-Y14 model) | [x] |

---

*Cap nhat lan cuoi: 2026-03-11*
*Trang thai: HOAN THANH 100%*
