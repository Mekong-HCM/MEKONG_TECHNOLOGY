# -*- coding: utf-8 -*-
import sys
sys.stdout.reconfigure(encoding='utf-8')

filepath = r'c:\Users\Dell M4800\Downloads\DE_AN_MEKONG\DE_AN_MEKONG_V3\sections\PHU_LUC.md'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

marker_ab = '---\n\n## Ph\u1ee5 l\u1ee5c B:'
marker_bc = '---\n\n## Ph\u1ee5 l\u1ee5c C:'
marker_cd = '---\n\n## Ph\u1ee5 l\u1ee5c D:'
marker_de = '---\n\n## Ph\u1ee5 l\u1ee5c E:'
marker_ef = '---\n\n## Ph\u1ee5 l\u1ee5c F:'
marker_fg = '---\n\n## Ph\u1ee5 l\u1ee5c G:'

a10 = """### A.10. B\u1ea3ng T\u00ednh D\u00f2ng Ti\u1ec1n Vay v\u00e0 Tr\u1ea3 N\u1ee3 Chi ti\u1ebft

**\u0110i\u1ec1u ki\u1ec7n vay:** Vay 4.000K USD [C] (18,2% CAPEX), l\u00e3i su\u1ea5t 8,5%/n\u0103m, \u00e2n h\u1ea1n 1 n\u0103m, tr\u1ea3 \u0111\u1ec1u trong 7 n\u0103m (Y2-Y8).

| N\u0103m | D\u01b0 n\u1ee3 \u0111\u1ea7u k\u1ef3 (K) | G\u1ed1c tr\u1ea3 (K) | L\u00e3i ph\u00e1t sinh (K) | T\u1ed5ng tr\u1ea3 (K) | D\u01b0 n\u1ee3 cu\u1ed1i k\u1ef3 (K) | DSCR |
|---:|---:|---:|---:|---:|---:|---:|
| Y1 | 4.000 | 0 | 340 | 340 | 4.000 | -- |
| Y2 | 4.000 | 571 | 340 | 911 | 3.429 | 1,25x |
| Y3 | 3.429 | 571 | 291 | 863 | 2.857 | 1,55x |
| Y4 | 2.857 | 571 | 243 | 814 | 2.286 | 1,72x |
| Y5 | 2.286 | 571 | 194 | 766 | 1.714 | 1,90x |
| Y6 | 1.714 | 571 | 146 | 717 | 1.143 | 2,05x |
| Y7 | 1.143 | 571 | 97 | 669 | 571 | 2,18x |
| Y8 | 571 | 571 | 49 | 620 | 0 | 2,30x |
| **T\u1ed5ng** | | **4.000** | **1.700** | **5.700** | | |

> **T\u1ed5ng l\u00e3i vay 8 n\u0103m:** 1.700K. DSCR t\u0103ng d\u1ea7n t\u1eeb 1,25x (Y2) l\u00ean 2,30x (Y8), v\u01b0\u1ee3t ng\u01b0\u1ee1ng covenant 1,50x [C] t\u1eeb Y3. Chi ph\u00ed l\u00e3i vay chi\u1ebfm ~7,7% t\u1ed5ng CAPEX. T\u1eeb Y9 tr\u1edf \u0111i, to\u00e0n b\u1ed9 cash flow l\u00e0 free cash. Xem A.1-A.9, S.9 (quarterly FCFF), R.9 (recovery) [A].

"""

b10 = """### B.10. K\u1ebf ho\u1ea1ch Commissioning v\u00e0 Nghi\u1ec7m thu Thi\u1ebft b\u1ecb

| Giai \u0111o\u1ea1n | Thi\u1ebft b\u1ecb | Ho\u1ea1t \u0111\u1ed9ng | Th\u1eddi gian | Ti\u00eau ch\u00ed \u0111\u1ea1t |
|---|---|---|---:|---|
| SAT (Site) | CNC 5-axis | L\u1eafp \u0111\u1eb7t, calibration, laser alignment | 5 ng\u00e0y | Positioning < 5 \u00b5m |
| SAT | Haas VF-2SS (x3) | L\u1eafp \u0111\u1eb7t, c\u00e2n b\u1eb1ng, test cut | 3 ng\u00e0y/m\u00e1y | Repeatability < 8 \u00b5m |
| SAT | Sodick EDM | L\u1eafp, wire threading, test \u0111\u1ed9 nh\u00e1m | 3 ng\u00e0y | Ra < 0.4 \u00b5m |
| SAT | Zeiss CMM | L\u1eafp, nhi\u1ec7t \u0111\u1ed9, probe qualify | 2 ng\u00e0y | Accuracy MPEE < 1.5 \u00b5m |
| SAT | SMT line | L\u1eafp, feeder cal, first board | 5 ng\u00e0y | Defect rate < 50 ppm |
| SAT | Espec chamber | L\u1eafp, profile verify | 1 ng\u00e0y | Stability +/- 0.5 C |
| IQ/OQ | T\u1ea5t c\u1ea3 | Protocol verify, document | 10 ng\u00e0y | 100% checklist pass |
| Trial run | To\u00e0n nh\u00e0 m\u00e1y | S\u1ea3n xu\u1ea5t m\u1eabu 200 chi ti\u1ebft | 15 ng\u00e0y | Yield > 95%, Cpk > 1.33 |
| Sign-off | To\u00e0n nh\u00e0 m\u00e1y | Nghi\u1ec7m thu ch\u00ednh th\u1ee9c | 1 ng\u00e0y | Certificate c\u1ee7a vendor |

> **T\u1ed5ng commissioning:** 45-60 ng\u00e0y (song song c\u00e1c m\u00e1y). Chi ph\u00ed commissioning bao g\u1ed3m trong gi\u00e1 thi\u1ebft b\u1ecb 6.336K [C]. Vendor engineer on-site 30 ng\u00e0y (DMG Mori, Sodick, Zeiss). Xem B.1-B.9, L (x\u00e2y d\u1ef1ng) [A].

"""

c10 = """### C.10. Ph\u00e2n khu Ch\u1ee9c n\u0103ng v\u00e0 L\u01b0u l\u01b0\u1ee3ng Ng\u01b0\u1eddi/V\u1eadt t\u01b0

| Ph\u00e2n khu | Di\u1ec7n t\u00edch (m2) | Nh\u00e2n s\u1ef1 max | L\u01b0u l\u01b0\u1ee3ng NVL | Ghi ch\u00fa |
|---|---:|---:|---|---|
| CNC Workshop | 2.000 | 40 | Nh\u00f4m/th\u00e9p, forklift 2T | S\u00e0n epoxy ESD, crane 5T |
| IoT/SMT Lab | 600 | 20 | PCB + linh ki\u1ec7n, xe \u0111\u1ea9y | Cleanroom ISO 8, ESD |
| QC/Metrology | 400 | 8 | M\u1eabu \u0111o, CMM | Nhi\u1ec7t \u0111\u1ed9 20+/-1C |
| Kho NVL | 800 | 5 | Incoming + WIP | Rack 4 t\u1ea7ng, FIFO |
| Kho th\u00e0nh ph\u1ea9m | 500 | 3 | Xu\u1ea5t h\u00e0ng, container | S\u00e0n ch\u1ecbu t\u1ea3i 3T/m2 |
| V\u0103n ph\u00f2ng + R&D | 800 | 35 | T\u00e0i li\u1ec7u, m\u1eabu | AC central, UPS |
| Datacenter (n\u1ed9i b\u1ed9) | 80 | 2 | Server, switch | PUE < 1.6, UPS 20 kVA |
| Khu k\u1ef9 thu\u1eadt M&E | 600 | 5 | Ph\u1ee5 t\u00f9ng, h\u00f3a ch\u1ea5t | Tho\u00e1ng kh\u00ed, PCCC |
| C\u00e2y xanh + san g\u00e2y | 884 | -- | -- | Theo quy \u0111\u1ecbnh SHTP 15% |
| **T\u1ed5ng GFA** | **6.664** [C] | **~120** | | |

> **L\u01b0u \u0111\u1ed3 v\u1eadn chuy\u1ec3n:** Incoming dock (ph\u00eda B\u1eafc) -> Kho NVL -> CNC/SMT -> QC -> Kho TP -> Shipping dock (ph\u00eda Nam). One-way flow gi\u1ea3m cross-contamination v\u00e0 t\u1ed1i \u01b0u logistics. Xem C.1-C.9, H (M&E) [A].

"""

d10 = """### D.10. L\u1ed9 tr\u00ecnh X\u00e2y d\u1ef1ng H\u1ec7 th\u1ed1ng Qu\u1ea3n tr\u1ecb N\u1ed9i b\u1ed9

| Giai \u0111o\u1ea1n | M\u1ee5c ti\u00eau | H\u1ec7 th\u1ed1ng | Chi ph\u00ed (K USD) | Ho\u00e0n th\u00e0nh |
|---|---|---|---:|---|
| Y1-Q1 | ERP foundation | SAP Business One / Odoo | 45 | T4/Y1 |
| Y1-Q2 | HR & payroll | Module HR integrated | 10 | T6/Y1 |
| Y1-Q3 | Document control | ISO DMS (SharePoint/custom) | 8 | T9/Y1 |
| Y1-Q4 | QMS digital | CAQ system cho ISO 9001 | 15 | T12/Y1 |
| Y2-Q1 | MES (Manufacturing) | K\u1ebft n\u1ed1i CNC -> ERP real-time | 25 | T3/Y2 |
| Y2-Q2 | CRM | Salesforce / HubSpot | 12 | T6/Y2 |
| Y2-Q3 | BI & reporting | Power BI + Grafana (U.9) | 8 | T9/Y2 |
| Y3 | Full integration | API hub, IoT data -> ERP -> BI | 15 | T12/Y3 |
| **T\u1ed5ng** | | | **138** | |

> **T\u1ed5ng IT/digital:** 138K (0,6% CAPEX [C]). N\u0103m Y3 tr\u1edf \u0111i ch\u1ec9 c\u00f2n license + maintenance 35K/n\u0103m. H\u1ec7 th\u1ed1ng IT h\u1ed7 tr\u1ee3 c\u00e1c ch\u1ee9ng ch\u1ec9 ISO (D.7), dashboard (U.9-U.10), v\u00e0 QC pipeline (V.3). Xem D.1-D.9 [A].

"""

e11 = """### E.11. Ch\u01b0\u01a1ng tr\u00ecnh Gi\u00e1m s\u00e1t M\u00f4i tr\u01b0\u1eddng \u0110\u1ecbnh k\u1ef3

| Ch\u1ec9 ti\u00eau | V\u1ecb tr\u00ed l\u1ea5y m\u1eabu | T\u1ea7n su\u1ea5t | QCVN \u00e1p d\u1ee5ng | Ng\u01b0\u1ee1ng cho ph\u00e9p | \u0110\u01a1n v\u1ecb ph\u00e2n t\u00edch |
|---|---|---|---|---|---|
| N\u01b0\u1edbc th\u1ea3i (COD, BOD, TSS) | \u0110\u1ea7u ra ZLD | H\u00e0ng th\u00e1ng | QCVN 40:2011 | COD < 75 mg/L | CMA accredited |
| N\u01b0\u1edbc ng\u1ea7m | 2 gi\u1ebfng quan tr\u1eafc | H\u00e0ng qu\u00fd | QCVN 09:2015 | Theo QCVN | CMA |
| Kh\u00f4ng kh\u00ed x\u01b0\u1edfng | 4 \u0111i\u1ec3m (CNC, SMT, kho, VP) | H\u00e0ng qu\u00fd | QCVN 26:2016 | B\u1ee5i < 6 mg/m3 | CMA |
| Kh\u00ed th\u1ea3i \u1ed1ng kh\u00f3i | \u1ed0ng gen backup | H\u00e0ng qu\u00fd | QCVN 19:2009 | NOx < 850 mg/Nm3 | CMA |
| Ti\u1ebfng \u1ed3n | Ranh gi\u1edbi nh\u00e0 m\u00e1y (4 ph\u00eda) | 6 th\u00e1ng/l\u1ea7n | QCVN 26:2010 | < 70 dBA (ng\u00e0y) | CMA |
| Ch\u1ea5t th\u1ea3i nguy h\u1ea1i | Kho CTNH | H\u00e0ng th\u00e1ng | TT 36/2015 | Manifest \u0111\u1ea7y \u0111\u1ee7 | N\u1ed9i b\u1ed9 + S\u1edf TN&MT |
| \u0110\u1ea5t | 2 \u0111i\u1ec3m trong khu v\u1ef1c | H\u00e0ng n\u0103m | QCVN 03:2015 | Theo QCVN | CMA |

> **Chi ph\u00ed gi\u00e1m s\u00e1t:** 35K/n\u0103m (sampling + ph\u00e2n t\u00edch + b\u00e1o c\u00e1o). K\u1ebft qu\u1ea3 g\u1eedi S\u1edf TN&MT v\u00e0 BQL SHTP theo quy \u0111\u1ecbnh. N\u1ebfu v\u01b0\u1ee3t ng\u01b0\u1ee1ng: d\u1eebng ngu\u1ed3n phat th\u1ea3i, kh\u1eafc ph\u1ee5c trong 72h, b\u00e1o c\u00e1o c\u01a1 quan. Xem E.1-E.10, F (an to\u00e0n) [A].

"""

f11 = """### F.11. S\u01a1 \u0111\u1ed3 T\u1ed5 ch\u1ee9c An to\u00e0n v\u00e0 Ph\u00e2n c\u00f4ng Tr\u00e1ch nhi\u1ec7m

| V\u1ecb tr\u00ed | Tr\u00e1ch nhi\u1ec7m ch\u00ednh | B\u00e1o c\u00e1o cho | S\u1ed1 l\u01b0\u1ee3ng |
|---|---|---|---:|
| Gi\u00e1m \u0111\u1ed1c An to\u00e0n (CSO) | Chi\u1ebfn l\u01b0\u1ee3c HSE, nghi\u1ec7m thu PCCC | CEO, H\u0110QT | 1 |
| HSE Manager | V\u1eadn h\u00e0nh h\u1ec7 th\u1ed1ng ISO 45001, audit | CSO | 1 |
| HSE Officer | Ki\u1ec3m tra h\u00e0ng ng\u00e0y, training | HSE Manager | 2 |
| \u0110\u1ed9i PCCC c\u01a1 s\u1edf | \u1ee8ng c\u1ee9u kh\u1ea9n c\u1ea5p, di\u1ec5n t\u1eadp | HSE Manager | 8 |
| First Aider | S\u01a1 c\u1ee9u t\u1ea1i ch\u1ed7 | HSE Officer | 4 |
| Safety rep (m\u1ed7i ph\u00e2n khu) | Gi\u00e1m s\u00e1t khu v\u1ef1c, b\u00e1o hazard | HSE Officer | 6 |
| Nurse ph\u00f2ng y t\u1ebf | Kh\u00e1m s\u1ee9c kh\u1ecfe, first aid | HR | 1 |
| **T\u1ed5ng nh\u00e2n s\u1ef1 HSE** | | | **23** |

**Ma tr\u1eadn RACI cho s\u1ef1 c\u1ed1 l\u1edbn:**

| Ho\u1ea1t \u0111\u1ed9ng | CSO | HSE Mgr | \u0110\u1ed9i PCCC | CEO | BQL SHTP |
|---|:---:|:---:|:---:|:---:|:---:|
| Ph\u00e1t hi\u1ec7n s\u1ef1 c\u1ed1 | I | R | R | I | -- |
| K\u00edch ho\u1ea1t BCP | A | R | C | I | I |
| \u1ee8ng c\u1ee9u t\u1ea1i ch\u1ed7 | C | A | R | I | -- |
| G\u1ecdi 114 / c\u1ee9u th\u01b0\u01a1ng | I | R | R | I | I |
| B\u00e1o c\u00e1o c\u01a1 quan | A | R | -- | I | R |
| \u0110i\u1ec1u tra nguy\u00ean nh\u00e2n | A | R | C | I | C |
| CAPA + t\u00e1i ph\u00e1t | A | R | C | I | -- |

> **Chi ph\u00ed HSE:** 120K/n\u0103m (nh\u00e2n s\u1ef1 85K + v\u1eadt t\u01b0 20K + \u0111\u00e0o t\u1ea1o 15K). LTIR target < 1.0. Zero fatality policy. Xem F.1-F.10, P.6 (ERM risk s\u1ed1 5: an to\u00e0n lao \u0111\u1ed9ng) [A].

"""

count = 0
if marker_ab in content:
    content = content.replace(marker_ab, a10 + marker_ab, 1)
    count += 1; print('A.10 inserted')
if marker_bc in content:
    content = content.replace(marker_bc, b10 + marker_bc, 1)
    count += 1; print('B.10 inserted')
if marker_cd in content:
    content = content.replace(marker_cd, c10 + marker_cd, 1)
    count += 1; print('C.10 inserted')
if marker_de in content:
    content = content.replace(marker_de, d10 + marker_de, 1)
    count += 1; print('D.10 inserted')
if marker_ef in content:
    content = content.replace(marker_ef, e11 + marker_ef, 1)
    count += 1; print('E.11 inserted')
if marker_fg in content:
    content = content.replace(marker_fg, f11 + marker_fg, 1)
    count += 1; print('F.11 inserted')

with open(filepath, 'w', encoding='utf-8', newline='') as f:
    f.write(content)
print(f'{count} sections inserted / Total lines: {content.count(chr(10))}')
