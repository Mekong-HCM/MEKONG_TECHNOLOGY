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

a9 = """### A.9. Ph\u00e2n t\u00edch Depreciation v\u00e0 Salvage Value 15 N\u0103m

| Nh\u00f3m t\u00e0i s\u1ea3n | Nguy\u00ean gi\u00e1 (K USD) | Ph\u01b0\u01a1ng ph\u00e1p kh\u1ea5u hao | Th\u1eddi h\u1ea1n (n\u0103m) | KH/n\u0103m (K) | Salvage Y15 (K) | % c\u00f2n l\u1ea1i |
|---|---:|---|---:|---:|---:|---:|
| Nh\u00e0 x\u01b0\u1edfng + VP | 2.649 | \u0110\u01b0\u1eddng th\u1eb3ng | 25 | 106 | 1.060 | 40% |
| CNC machines (10) [C] | 2.820 | \u0110\u01b0\u1eddng th\u1eb3ng | 12 | 235 | 188 | 7% |
| IoT/SMT line | 1.790 | \u0110\u01b0\u1eddng th\u1eb3ng | 8 | 224 | 0 | 0% (thay th\u1ebf Y9) |
| Robot/automation | 333 | \u0110\u01b0\u1eddng th\u1eb3ng | 10 | 33 | 0 | 0% (thay th\u1ebf Y11) |
| QA/QC (CMM, Espec) | 278 | \u0110\u01b0\u1eddng th\u1eb3ng | 10 | 28 | 28 | 10% |
| DC + IT | 2.800 | \u0110\u01b0\u1eddng th\u1eb3ng | 7 | 400 | 0 | 0% (refresh Y8) |
| N\u1ed9i th\u1ea5t + soft cost | 1.215 | \u0110\u01b0\u1eddng th\u1eb3ng | 10 | 122 | 0 | 0% |
| **T\u1ed5ng** | **11.885** | | | **1.148** | **1.276** | **~6%** |

**L\u1ecbch kh\u1ea5u hao l\u0169y k\u1ebf:**

| N\u0103m | KH/n\u0103m (K) | KH l\u0169y k\u1ebf (K) | GTCL (K) | Ghi ch\u00fa |
|---:|---:|---:|---:|---|
| Y1 | 1.148 | 1.148 | 10.737 | \u0110\u1ea7y \u0111\u1ee7 t\u00e0i s\u1ea3n |
| Y3 | 1.148 | 3.444 | 8.441 | |
| Y5 | 1.148 | 5.740 | 6.145 | |
| Y7 | 948 | 7.636 | 4.249 | DC h\u1ebft KH (Y7) |
| Y8 | 948 | 8.584 | 3.301 | Refresh DC +800K capex |
| Y10 | 1.174 | 10.932 | 2.229 | Thay IoT/SMT (Y9) +1.200K |
| Y12 | 939 | 12.810 | 1.626 | CNC h\u1ebft KH (Y12) |
| Y15 | 706 | 14.928 | 1.276 | Salvage = GTCL |

> **Nh\u1eadn x\u00e9t:** T\u1ed5ng KH 15 n\u0103m \u2248 14,9M > nguy\u00ean gi\u00e1 ban \u0111\u1ea7u 11,9M do t\u00e1i \u0111\u1ea7u t\u01b0 (DC refresh Y8, IoT/SMT thay th\u1ebf Y9). Salvage value Y15 = 1,276M. Terminal value s\u1eed d\u1ee5ng trong Ph\u1ee5 l\u1ee5c S d\u1ef1a tr\u00ean perpetuity growth model, kh\u00f4ng d\u1ef1a tr\u00ean salvage [A].

"""

b9 = """### B.9. Ma tr\u1eadn T\u01b0\u01a1ng th\u00edch Thi\u1ebft b\u1ecb \u2013 S\u1ea3n ph\u1ea9m

| Thi\u1ebft b\u1ecb | S\u1ea3n ph\u1ea9m | Nh\u00f4m CNC | Th\u00e9p CNC | PCBA | I-BMS | Khu\u00f4n | Robot Cell | QA/QC |
|---|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| DMG Mori 5-axis | Precision parts | P | P | | | S | | |
| Haas 3-axis (x3) | General parts | P | P | | | P | | |
| Sodick EDM | Die/mold | | P | | | P | | |
| Yamaha SMT | PCBA assembly | | | P | P | | | |
| Reflow oven | Soldering | | | P | P | | | |
| AOI system | Inspection | | | P | P | | | P |
| Fanuc robot | Assembly | | | | P | | P | |
| Zeiss CMM | Measurement | P | P | | | P | | P |
| Espec chamber | Testing | | P | P | P | | | P |
| Atlas Copco | Compressed air | P | P | P | | P | P | |

> L\u00fd gi\u1ea3i: P = S\u1eed d\u1ee5ng ch\u00ednh (primary). S = S\u1eed d\u1ee5ng ph\u1ee5 (secondary). Ma tr\u1eadn cho th\u1ea5y CNC machines ph\u1ee5c v\u1ee5 \u0111a s\u1ea3n ph\u1ea9m, t\u1ed1i \u01b0u OEE. Zeiss CMM l\u00e0 "c\u1ed5ng ch\u1ea5t l\u01b0\u1ee3ng" cho to\u00e0n b\u1ed9 CNC output. Xem K (datasheets) v\u00e0 I (workflow) [A].

"""

c9 = """### C.9. Quy ho\u1ea1ch Ti\u1ec7n \u00edch K\u1ef9 thu\u1eadt (Utility Site Plan)

| H\u1ec7 th\u1ed1ng | V\u1ecb tr\u00ed | Di\u1ec7n t\u00edch (m\u00b2) | C\u00f4ng su\u1ea5t | K\u1ebft n\u1ed1i |
|---|---|---:|---|---|
| Tr\u1ea1m bi\u1ebfn \u00e1p 22/0.4kV | Ph\u00eda B\u1eafc, ngo\u00e0i nh\u00e0 x\u01b0\u1edfng | 40 | 2 x 1.000 kVA | Tr\u1ea1m 110kV KCNC |
| M\u00e1y ph\u00e1t \u0111i\u1ec7n d\u1ef1 ph\u00f2ng | C\u1ea1nh tr\u1ea1m bi\u1ebfn \u00e1p | 25 | 500 kVA | ATS t\u1ef1 \u0111\u1ed9ng |
| Tr\u1ea1m x\u1eed l\u00fd n\u01b0\u1edbc ZLD | Ph\u00eda Nam, g\u1ea7n ETP | 60 | 20 m3/ng\u00e0y | \u0110\u1ea7u v\u00e0o: SX + sinh ho\u1ea1t |
| B\u1ec3 ch\u1ee9a n\u01b0\u1edbc PCCC | Ph\u00eda \u0110\u00f4ng | 30 | 200 m3 | B\u01a1m PCCC 2 x 50 m3/h |
| Kho gas/h\u00f3a ch\u1ea5t | Ph\u00eda T\u00e2y, c\u00e1ch 15m | 20 | Theo QCVN | T\u01b0\u1eddng ch\u1eadn n\u1ed5 |
| M\u00e1y n\u00e9n kh\u00ed | Utility room | 15 | 2 x 37 kW | \u1ed0ng DN80 \u0111\u1ebfn CNC |
| Cooling tower | M\u00e1i nh\u00e0 x\u01b0\u1edfng | 20 | 200 RT | HVAC + CNC coolant |
| Solar PV (giai \u0111o\u1ea1n 2) | M\u00e1i nh\u00e0 x\u01b0\u1edfng | 2.500 | 300 kWp | Net metering |

> **T\u1ed5ng di\u1ec7n t\u00edch utility:** kho\u1ea3ng 210 m2 (m\u1eb7t \u0111\u1ea5t) + 2.520 m2 (m\u00e1i) = 3,2% GFA 6.664 m2 [C]. Ph\u00f9 h\u1ee3p QCVN v\u00e0 y\u00eau c\u1ea7u KCNC. Solar PV giai \u0111o\u1ea1n 2 gi\u00fap gi\u1ea3m 25-30% \u0111i\u1ec7n l\u01b0\u1edbi. Xem H (M&E chi ti\u1ebft) v\u00e0 C.1-C.8 [A].

"""

d9 = """### D.9. Checklist H\u1ed3 s\u01a1 Ph\u00e1p l\u00fd Theo T\u1eebng C\u01a1 quan

| C\u01a1 quan | Lo\u1ea1i h\u1ed3 s\u01a1 | S\u1ed1 l\u01b0\u1ee3ng | Tr\u1ea1ng th\u00e1i | Th\u1eddi h\u1ea1n x\u1eed l\u00fd | Li\u00ean k\u1ebft |
|---|---|---:|---|---:|---|
| BQL KCNC TP.HCM | \u0110\u0103ng k\u00fd \u0111\u1ea7u t\u01b0 + \u0110\u1ec1 \u00e1n | 12 | Chu\u1ea9n b\u1ecb | 45-60 ng\u00e0y | X.10 |
| S\u1edf K\u1ebf ho\u1ea1ch \u0110T | GCN\u0110K\u0110T / IRC | 3 | Chu\u1ea9n b\u1ecb | 15 ng\u00e0y | D.1 |
| S\u1edf X\u00e2y d\u1ef1ng | GPXD + thi\u1ebft k\u1ebf | 5 | Ch\u01b0a n\u1ed9p | 30 ng\u00e0y | C, L |
| S\u1edf TN&MT | \u0110TM (EIA) | 4 | Chu\u1ea9n b\u1ecb | 45 ng\u00e0y | E |
| C\u1ea3nh s\u00e1t PCCC | Thi\u1ebft k\u1ebf PCCC + nghi\u1ec7m thu | 6 | Ch\u01b0a n\u1ed9p | 30 + 15 ng\u00e0y | F |
| C\u1ee5c Thu\u1ebf | \u0110\u0103ng k\u00fd \u01b0u \u0111\u00e3i CIT | 2 | Ch\u01b0a | 30 ng\u00e0y | D.8 |
| H\u1ea3i quan | \u0110\u0103ng k\u00fd mi\u1ec5n thu\u1ebf NK thi\u1ebft b\u1ecb | 3 | Ch\u01b0a | 15 ng\u00e0y | D.8, B |
| S\u1edf Lao \u0111\u1ed9ng | Gi\u1ea5y ph\u00e9p lao \u0111\u1ed9ng (chuy\u00ean gia NN) | 2 | Ch\u01b0a | 15 ng\u00e0y | N |
| **T\u1ed5ng** | | **37** | | | |

> **Nh\u1eadn x\u00e9t:** T\u1ed5ng 37 lo\u1ea1i h\u1ed3 s\u01a1 cho 8 c\u01a1 quan. \u0110\u01b0\u1eddng g\u0103ng: KCNC (45-60 ng\u00e0y) v\u00e0 EIA (45 ng\u00e0y). Ph\u1ea3i n\u1ed9p song song \u0111\u1ec3 r\u00fat ng\u1eafn t\u1ed5ng th\u1eddi gian. Chi ph\u00ed ph\u00e1p l\u00fd \u01b0\u1edbc 120-180K (xem D.1-D.8). Lu\u1eadt s\u01b0 chuy\u00ean tr\u00e1ch retainer 12K/n\u0103m (xem P.6) [A].

"""

e10 = """### E.10. K\u1ebf ho\u1ea1ch Qu\u1ea3n l\u00fd Ch\u1ea5t th\u1ea3i 3R (Reduce - Reuse - Recycle)

| Lo\u1ea1i ch\u1ea5t th\u1ea3i | Ngu\u1ed3n | KL/th\u00e1ng | Reduce | Reuse | Recycle | X\u1eed l\u00fd cu\u1ed1i |
|---|---|---:|---|---|---|---|
| Ph\u1ebf ph\u1ea9m nh\u00f4m | CNC | 800 kg | T\u1ed1i \u01b0u CAM nesting | Kh\u00f4ng | B\u00e1n recycler | 0 |
| Ph\u1ebf ph\u1ea9m th\u00e9p | CNC | 500 kg | T\u1ed1i \u01b0u toolpath | Ph\u1ea3i lo\u1ea1i t\u1eeb \u0111\u1ea7u | B\u00e1n recycler | 0 |
| D\u1ea7u c\u1eaft (coolant) | CNC | 200 L | Filtration k\u00e9o d\u00e0i tu\u1ed5i th\u1ecd | L\u1ecdc t\u00e1i s\u1eed d\u1ee5ng 80% | Thu gom chuy\u00ean x\u1eed l\u00fd | 40 L |
| PCBA waste (SMT) | IoT | 50 kg | DFM gi\u1ea3m defect | -- | Thu h\u1ed3i Sn, Cu | 5 kg |
| Gi\u1ea5y/carton | VP, \u0111\u00f3ng g\u00f3i | 300 kg | S\u1ed1 h\u00f3a t\u00e0i li\u1ec7u | \u0110\u00f3ng g\u00f3i l\u1ea1i | T\u00e1i ch\u1ebf | 0 |
| R\u00e1c sinh ho\u1ea1t | C\u0103n-tin, VP | 200 kg | Ph\u00e2n lo\u1ea1i t\u1ea1i ngu\u1ed3n | -- | H\u1eefu c\u01a1: compost | 40 kg |
| Ch\u1ea5t th\u1ea3i nguy h\u1ea1i | Lab, DC | 20 kg | Gi\u1ea3m h\u00f3a ch\u1ea5t \u0111\u1ed9c h\u1ea1i | -- | -- | \u0110\u01a1n v\u1ecb c\u00f3 GP |
| N\u01b0\u1edbc th\u1ea3i SX | CNC, SMT | 15 m3 | ZLD recycle 85% | T\u01b0\u1edbi c\u00e2y | -- | 3 m3 (ZLD) |

**M\u1ee5c ti\u00eau 3R:**

| Ch\u1ec9 s\u1ed1 | Y1 | Y3 | Y5 | Y10 |
|---|---:|---:|---:|---:|
| Waste diversion rate (%) | 60% | 75% | 85% | 90% |
| Recycling revenue (K USD/n\u0103m) | 5 | 15 | 25 | 35 |
| Landfill (t\u1ea5n/n\u0103m) | 8 | 4 | 2 | 1 |
| Carbon offset t\u1eeb recycle (tCO2e) | 20 | 55 | 85 | 110 |

> **Li\u00ean k\u1ebft:** Xem E.1-E.9 (EIA, ZLD, ESG). K\u1ebf ho\u1ea1ch 3R h\u1ed7 tr\u1ee3 m\u1ee5c ti\u00eau gi\u1ea3m 50% carbon footprint theo E.9 v\u00e0 ph\u00f9 h\u1ee3p Lu\u1eadt BVMT 2020. Chi ph\u00ed qu\u1ea3n l\u00fd ch\u1ea5t th\u1ea3i kho\u1ea3ng 15-25K/n\u0103m, n\u1eb1m trong OPEX m\u00f4i tr\u01b0\u1eddng [A].

"""

f10 = """### F.10. K\u1ebf ho\u1ea1ch Di\u1ec5n t\u1eadp v\u00e0 \u0110\u00e1nh gi\u00e1 An to\u00e0n H\u00e0ng n\u0103m

| Ho\u1ea1t \u0111\u1ed9ng | T\u1ea7n su\u1ea5t | Th\u00e0nh ph\u1ea7n | Quy m\u00f4 | \u0110\u00e1nh gi\u00e1 |
|---|---|---|---|---|
| Di\u1ec5n t\u1eadp ch\u00e1y to\u00e0n nh\u00e0 m\u00e1y | 2 l\u1ea7n/n\u0103m | To\u00e0n th\u1ec3 + CQ PCCC | 130 ng\u01b0\u1eddi | B\u00e1o c\u00e1o + video |
| Di\u1ec5n t\u1eadp s\u01a1 t\u00e1n khu v\u1ef1c | 4 l\u1ea7n/n\u0103m | T\u1eebng x\u01b0\u1edfng/t\u1ea7ng | 20-40 ng\u01b0\u1eddi/l\u1ea7n | Checklist + th\u1eddi gian |
| Di\u1ec5n t\u1eadp h\u00f3a ch\u1ea5t tr\u00e0n | 1 l\u1ea7n/n\u0103m | \u0110\u1ed9i \u1ee9ng c\u1ee9u | 8-10 ng\u01b0\u1eddi | K\u1ecbch b\u1ea3n + \u0111\u00e1nh gi\u00e1 |
| Ki\u1ec3m tra PCCC \u0111\u1ecbnh k\u1ef3 | 4 l\u1ea7n/n\u0103m | \u0110\u1ed9i b\u1ea3o tr\u00ec + PCCC | To\u00e0n h\u1ec7 th\u1ed1ng | Bi\u00ean b\u1ea3n ki\u1ec3m tra |
| \u0110\u00e1nh gi\u00e1 r\u1ee7i ro an to\u00e0n | 1 l\u1ea7n/n\u0103m | Ban AT + chuy\u00ean gia | To\u00e0n nh\u00e0 m\u00e1y | B\u00e1o c\u00e1o r\u1ee7i ro |
| \u0110\u00e0o t\u1ea1o AT/VSLD m\u1edbi | Li\u00ean t\u1ee5c | Nh\u00e2n vi\u00ean m\u1edbi | 100% NV m\u1edbi | Ch\u1ee9ng ch\u1ec9 n\u1ed9i b\u1ed9 |
| Audit ISO 45001 | 1 l\u1ea7n/n\u0103m | Auditor \u0111\u1ed9c l\u1eadp | To\u00e0n h\u1ec7 th\u1ed1ng | B\u00e1o c\u00e1o audit |

**KPI An to\u00e0n:**

| Ch\u1ec9 s\u1ed1 | M\u1ee5c ti\u00eau | \u0110\u01a1n v\u1ecb |
|---|---:|---|
| LTIR (Lost Time Injury Rate) | < 1,0 | /200.000 gi\u1edd |
| Near-miss reporting | > 50 | v\u1ee5/n\u0103m |
| Safety training hours | > 40 | gi\u1edd/ng\u01b0\u1eddi/n\u0103m |
| \u0110i\u1ec3m di\u1ec5n t\u1eadp BQ | > 85/100 | \u0111i\u1ec3m |
| S\u1ed1 ng\u00e0y kh\u00f4ng tai n\u1ea1n | > 350 | ng\u00e0y/n\u0103m |

> **Chi ph\u00ed an to\u00e0n:** kho\u1ea3ng 25-35K/n\u0103m (bao g\u1ed3m PPE, \u0111\u00e0o t\u1ea1o, di\u1ec5n t\u1eadp, audit). N\u1eb1m trong OPEX v\u1eadn h\u00e0nh. LTIR < 1.0 l\u00e0 ti\u00eau chu\u1ea9n top quartile ng\u00e0nh s\u1ea3n xu\u1ea5t VN. Xem F.1-F.9 v\u00e0 Ph\u1ee5 l\u1ee5c P.6 (ERM) [A].

"""

count = 0
if marker_ab in content:
    content = content.replace(marker_ab, a9 + marker_ab, 1)
    count += 1; print('A.9 inserted')
if marker_bc in content:
    content = content.replace(marker_bc, b9 + marker_bc, 1)
    count += 1; print('B.9 inserted')
if marker_cd in content:
    content = content.replace(marker_cd, c9 + marker_cd, 1)
    count += 1; print('C.9 inserted')
if marker_de in content:
    content = content.replace(marker_de, d9 + marker_de, 1)
    count += 1; print('D.9 inserted')
if marker_ef in content:
    content = content.replace(marker_ef, e10 + marker_ef, 1)
    count += 1; print('E.10 inserted')
if marker_fg in content:
    content = content.replace(marker_fg, f10 + marker_fg, 1)
    count += 1; print('F.10 inserted')

with open(filepath, 'w', encoding='utf-8', newline='') as f:
    f.write(content)
print(f'{count} sections inserted / Total lines: {content.count(chr(10))}')
