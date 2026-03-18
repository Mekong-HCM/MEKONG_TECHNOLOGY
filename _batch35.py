# -*- coding: utf-8 -*-
import sys
sys.stdout.reconfigure(encoding='utf-8')

filepath = r'c:\Users\Dell M4800\Downloads\DE_AN_MEKONG\DE_AN_MEKONG_V3\sections\PHU_LUC.md'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

marker_gh = '---\n\n## Ph\u1ee5 l\u1ee5c H:'
marker_hi = '---\n\n## Ph\u1ee5 l\u1ee5c I:'
marker_ij = '---\n\n## Ph\u1ee5 l\u1ee5c J:'
marker_jk = '---\n\n## Ph\u1ee5 l\u1ee5c K:'
marker_kl = '---\n\n## Ph\u1ee5 l\u1ee5c L:'
marker_lm = '---\n\n## Ph\u1ee5 l\u1ee5c M:'

g7 = """### G.7. Ma tr\u1eadn R\u1ee7i ro H\u1ee3p \u0111\u1ed3ng v\u00e0 Bi\u1ec7n ph\u00e1p Ph\u00f2ng ng\u1eeba

| R\u1ee7i ro h\u1ee3p \u0111\u1ed3ng | M\u1ee9c \u0111\u1ed9 | Bi\u1ec7n ph\u00e1p | \u0110i\u1ec1u kho\u1ea3n t\u01b0\u01a1ng \u1ee9ng |
|---|---|---|---|
| Vi ph\u1ea1m giao h\u00e0ng tr\u1ec5 | CAO | LD kh\u00f4ng qu\u00e1 5% gi\u00e1 tr\u1ecb PO, force majeure r\u00f5 | CL 8, CL 12 |
| B\u1ea3o m\u1eadt IP kh\u00e1ch h\u00e0ng | CAO | NDA ri\u00eang, penalty 200% gi\u00e1 tr\u1ecb b\u1ecb l\u1ed9 | NDA CL 3-5 |
| Ch\u1ea5t l\u01b0\u1ee3ng kh\u00f4ng \u0111\u1ea1t | TRUNG B\u00ccNH | RMA process, cost of quality cap 3% | CL 9, SLA |
| Bi\u1ebfn \u0111\u1ed9ng gi\u00e1 NVL | TRUNG B\u00ccNH | Price adjustment clause m\u1ed7i 6 th\u00e1ng | CL 6.2 |
| Thay \u0111\u1ed5i scope | TRUNG B\u00ccNH | Change order process, sign-off c\u1ea3 2 b\u00ean | CL 7 |
| Tranh ch\u1ea5p thanh to\u00e1n | TH\u1ea4P | Escrow cho h\u1ee3p \u0111\u1ed3ng > 500K, tr\u1ecdng t\u00e0i VIAC | CL 15, CL 16 |
| Vi ph\u1ea1m m\u00f4i tr\u01b0\u1eddng/ESG | TH\u1ea4P | ESG clause trong vendor contract, audit quy\u1ec1n | CL 14 |

**Template h\u1ee3p \u0111\u1ed3ng chu\u1ea9n h\u00f3a:**

| Lo\u1ea1i h\u1ee3p \u0111\u1ed3ng | S\u1ed1 \u0111i\u1ec1u kho\u1ea3n | T\u1ea7n su\u1ea5t s\u1eed d\u1ee5ng | Review cycle |
|---|---:|---|---|
| CNC OEM Supply Agreement | 18 | Cao (2-4/n\u0103m) | 12 th\u00e1ng |
| IoT Product License | 15 | Trung b\u00ecnh (1-2/n\u0103m) | 6 th\u00e1ng |
| MPMC Framework Agreement | 20 | Cao (3-5/n\u0103m) | 12 th\u00e1ng |
| NDA (Mutual) | 8 | R\u1ea5t cao (10+/n\u0103m) | 24 th\u00e1ng |
| Service Level Agreement | 12 | Trung b\u00ecnh | 12 th\u00e1ng |

> **T\u1ed5ng h\u1ee3p:** Chi ph\u00ed ph\u00e1p l\u00fd h\u1ee3p \u0111\u1ed3ng = 60K IP + 12K retainer = 72K/n\u0103m (xem G.1-G.6). T\u1ea5t c\u1ea3 template \u0111\u01b0\u1ee3c lu\u1eadt s\u01b0 review v\u00e0 l\u01b0u trong h\u1ec7 th\u1ed1ng document control (ISO 9001). Xem Ph\u1ee5 l\u1ee5c P.6 (ERM) cho risk matrix to\u00e0n d\u1ef1 \u00e1n [A].

"""

h9 = """### H.9. B\u1ea3ng T\u1ed5ng h\u1ee3p N\u0103ng l\u01b0\u1ee3ng v\u00e0 Chi ph\u00ed V\u1eadn h\u00e0nh M&E

| H\u1ec7 th\u1ed1ng | C\u00f4ng su\u1ea5t (kW) | Gi\u1edd/ng\u00e0y | kWh/n\u0103m | Chi ph\u00ed/n\u0103m (K USD) | % T\u1ed5ng |
|---|---:|---:|---:|---:|---:|
| CNC machines (10) [C] | 450 | 16 | 2.628.000 | 263 | 33% |
| HVAC (x\u01b0\u1edfng + VP) | 200 | 20 | 1.460.000 | 146 | 18% |
| Compressed air | 74 | 16 | 432.640 | 43 | 5% |
| IoT/SMT line | 80 | 16 | 467.200 | 47 | 6% |
| Datacenter | 120 | 24 | 1.051.200 | 105 | 13% |
| Chi\u1ebfu s\u00e1ng | 35 | 18 | 229.950 | 23 | 3% |
| B\u01a1m n\u01b0\u1edbc + ZLD | 15 | 20 | 109.500 | 11 | 1% |
| Robot/automation | 25 | 16 | 146.000 | 15 | 2% |
| Kh\u00e1c (th\u1ea5t tho\u00e1t 15%) | -- | -- | 978.674 | 98 | 12% |
| **T\u1ed5ng** | **~981** | | **~7.503.164** | **~750** | **100%** |

> **Ki\u1ec3m tra:** T\u1ed5ng n\u0103ng l\u01b0\u1ee3ng ~7,5 GWh/n\u0103m x 0.10 USD/kWh = 750K. Con s\u1ed1 n\u00e0y nh\u1ea5t qu\u00e1n v\u1edbi H.1-H.8 (~800 MWh/th\u00e1ng x 12 = 9,6 GWh gross, tr\u1eeb solar offset 2,1 GWh = 7,5 GWh net). CNC chi\u1ebfm 33% \u0111i\u1ec7n \u2014 OEE improvement gi\u00fap gi\u1ea3m 5-8% \u0111i\u1ec7n/n\u0103m. Solar PV (300 kWp, giai \u0111o\u1ea1n 2) ti\u1ebft ki\u1ec7m them ~180K/n\u0103m [A].

"""

i9 = """### I.9. Quy tr\u00ecnh V\u1eadn h\u00e0nh Chu\u1ea9n CNC (SOP T\u00f3m t\u1eaft)

| B\u01b0\u1edbc | Ho\u1ea1t \u0111\u1ed9ng | Th\u1eddi gian | Tr\u00e1ch nhi\u1ec7m | T\u00e0i li\u1ec7u |
|---:|---|---:|---|---|
| 1 | Nh\u1eadn Work Order + b\u1ea3n v\u1ebd | 15 ph\u00fat | Tr\u01b0\u1edfng ca | WO form, drawing |
| 2 | Ki\u1ec3m tra NVL (incoming QC G1) | 20 ph\u00fat | QC technician | CoC, th\u01b0\u1edbc c\u1eb7p |
| 3 | Setup m\u00e1y CNC + tool | 30-60 ph\u00fat | Operator | Setup sheet, tool list |
| 4 | Ch\u1ea1y first article + \u0111o CMM | 45 ph\u00fat | Operator + QC | FAI report |
| 5 | S\u1ea3n xu\u1ea5t h\u00e0ng lo\u1ea1t + SPC | T\u00f9y batch | Operator | SPC chart (G2) |
| 6 | In-process inspection (m\u1ed7i 10 chi ti\u1ebft) | 5 ph\u00fat/l\u1ea7n | QC | Checklist (G2) |
| 7 | Final QC to\u00e0n b\u1ed9 l\u00f4 (G3) | 30-60 ph\u00fat | QC supervisor | Inspection report |
| 8 | R\u1eeda s\u1ea1ch + \u0111\u00f3ng g\u00f3i + nh\u00e3n | 20 ph\u00fat | Packaging team | Packing list |
| 9 | OQC sampling + xu\u1ea5t kho (G5) | 15 ph\u00fat | QA | CoC, OQC report |
| 10 | C\u1eadp nh\u1eadt ERP + ghi nh\u1eadn OEE | 10 ph\u00fat | Tr\u01b0\u1edfng ca | ERP system |

> **T\u1ed5ng cycle time 1 l\u00f4 nh\u1ecf (50 chi ti\u1ebft nh\u00f4m):** ~4-6 gi\u1edd bao g\u1ed3m setup + gia c\u00f4ng + QC. N\u0103ng su\u1ea5t: 2-3 l\u00f4/ca/m\u00e1y. 10 m\u00e1y [C] x 2 ca x 300 ng\u00e0y = 48.000 machine-hours/n\u0103m [C]. Xem I.1-I.8 v\u00e0 O.9 (5-Gate QC) [A].

"""

j9 = """### J.9. Chi ti\u1ebft K\u1ef9 thu\u1eadt S\u1ea3n ph\u1ea9m IoT Ch\u1ee7 l\u1ef1c

**S\u1ea3n ph\u1ea9m 1: I-BMS Gateway v3.0**

| Th\u00f4ng s\u1ed1 | Gi\u00e1 tr\u1ecb |
|---|---|
| MCU | ARM Cortex-M7, 480 MHz |
| Connectivity | WiFi 6 + BLE 5.2 + RS485 + LoRa |
| I/O | 8 AI + 4 AO + 16 DI + 8 DO + 2 relay |
| Protocols | BACnet, Modbus TCP/RTU, MQTT, OPC-UA |
| HMI | 7" touchscreen + web dashboard |
| Power | 24V DC, < 15W |
| Enclosure | IP54, DIN-rail mount |
| Certification | CE, UL, QD 38 compliant |
| Gia ban (target) | 850-1.200 USD/unit |

**S\u1ea3n ph\u1ea9m 2: MK-Sensor Kit (Environmental)**

| Th\u00f4ng s\u1ed1 | Gi\u00e1 tr\u1ecb |
|---|---|
| Sensors | Temp + Humidity + CO2 + PM2.5 + VOC + Lux |
| MCU | ESP32-S3 |
| Connectivity | WiFi + BLE mesh |
| Power | PoE hoac 5V USB-C, battery backup 8h |
| Data rate | Push m\u1ed7i 30s, local buffer 7 ng\u00e0y |
| Enclosure | IP44, wall/ceiling mount |
| Gi\u00e1 b\u00e1n (target) | 120-180 USD/unit |

> **\u0110\u1ecbnh v\u1ecb:** I-BMS l\u00e0 s\u1ea3n ph\u1ea9m flagship (margin 55-60%), MK-Sensor l\u00e0 ph\u1ee5 ki\u1ec7n volume (margin 45%). C\u1ea3 hai t\u01b0\u01a1ng th\u00edch v\u1edbi nhau qua MQTT + BLE mesh. T\u1ed5ng R&D cost xem J.8, gi\u00e1 th\u00e0nh xem T.8 [A].

"""

k9 = """### K.9. B\u1ea3ng Th\u00f4ng s\u1ed1 B\u1ea3o tr\u00ec D\u1ef1 ph\u00f2ng (Preventive Maintenance Schedule)

| Thi\u1ebft b\u1ecb | PM interval | Ho\u1ea1t \u0111\u1ed9ng ch\u00ednh | Th\u1eddi gian d\u1eebng m\u00e1y | Ph\u1ee5 t\u00f9ng/n\u0103m (K USD) |
|---|---|---|---:|---:|
| DMG Mori 5-axis | 500h / 3 th\u00e1ng | Spindle check, calibration, coolant | 8h | 12 |
| Haas VF-2SS (x3) | 500h / 3 th\u00e1ng | Way lube, tool sensor, belt | 4h | 8 (x3) |
| Sodick EDM | 1000h / 6 th\u00e1ng | Wire guide, power supply, filter | 6h | 6 |
| Yamaha SMT | 2000h / 6 th\u00e1ng | Nozzle, feeder, vision cal | 4h | 10 |
| Zeiss CMM | 2000h / 6 th\u00e1ng | Probe calibration, air bearing | 2h | 5 |
| Espec chamber | 3000h / 12 th\u00e1ng | Compressor, sensor cal, filter | 8h | 3 |
| Atlas Copco compressor | 2000h / 6 th\u00e1ng | Oil, filter, dryer | 4h | 4 |
| Fanuc robot | 5000h / 12 th\u00e1ng | Grease, encoder, cable | 6h | 5 |

**T\u1ed5ng chi ph\u00ed PM/n\u0103m:** 77K USD (ph\u1ee5 t\u00f9ng + lao \u0111\u1ed9ng). Chi\u1ebfm 1,2% gi\u00e1 tr\u1ecb thi\u1ebft b\u1ecb 6.336K [C].

> **M\u1ee5c ti\u00eau OEE:** PM \u0111\u00fang l\u1ecbch gi\u00fap \u0111\u1ea1t OEE > 75% (Y3) v\u00e0 > 85% (Y5). Downtime kh\u00f4ng k\u1ebf ho\u1ea1ch < 3% t\u1ed5ng gi\u1edd v\u1eadn h\u00e0nh. Xem B.7 (equipment lifecycle) v\u00e0 I.7 (capacity expansion) [A].

"""

l9 = """### L.9. Ti\u00eau chu\u1ea9n Xanh v\u00e0 V\u1eadt li\u1ec7u B\u1ec1n v\u1eefng trong X\u00e2y d\u1ef1ng

| H\u1ea1ng m\u1ee5c | Ti\u00eau chu\u1ea9n \u00e1p d\u1ee5ng | V\u1eadt li\u1ec7u / gi\u1ea3i ph\u00e1p | L\u1ee3i \u00edch |
|---|---|---|---|
| Khung k\u1ebft c\u1ea5u PEB | AISC 360 + QCVN 06 | Th\u00e9p t\u00e1i ch\u1ebf 30%+, s\u01a1n kh\u00f4ng VOC | Gi\u1ea3m carbon footprint 15% |
| M\u00e1i | LEED credit | T\u00f4n l\u00e1 m\u00e1t (cool roof) SRI > 78 | Gi\u1ea3m HVAC load 10-15% |
| N\u1ec1n Epoxy | OSHA + ESD ANSI | Low-VOC epoxy, ESD < 10^9 ohm | An to\u00e0n + ch\u1ed1ng t\u0129nh \u0111i\u1ec7n |
| T\u01b0\u1eddng bao | QCVN 09 | Panel sandwich PU, U < 0.45 W/m2K | C\u00e1ch nhi\u1ec7t t\u1ed1t |
| K\u00ednh VP | ASHRAE 90.1 | Low-E double glazing, SHGC < 0.35 | Ti\u1ebft ki\u1ec7m AC 20% |
| Chi\u1ebfu s\u00e1ng | QCVN 12 + LEED | LED 150 lux (x\u01b0\u1edfng), daylight harvesting | Ti\u1ebft ki\u1ec7m \u0111i\u1ec7n 40% vs CFL |
| N\u01b0\u1edbc m\u01b0a | LEED WE credit | Thu gom + l\u1ecdc d\u00f9ng t\u01b0\u1edbi c\u00e2y | Gi\u1ea3m n\u01b0\u1edbc c\u1ea5p 15% |
| Solar-ready | IEC 62446 | M\u00e1i ch\u1ecbu t\u1ea3i 15 kg/m2 cho PV | S\u1eb5n s\u00e0ng giai \u0111o\u1ea1n 2 |

> **LEED potential:** D\u1ef1 \u00e1n kh\u00f4ng b\u1eaft bu\u1ed9c LEED nh\u01b0ng thi\u1ebft k\u1ebf \u0111\u1ea1t 35-45 LEED points (Silver potential). Gi\u00e1 th\u00e0nh xanh t\u0103ng 5-8% nh\u01b0ng ti\u1ebft ki\u1ec7m v\u1eadn h\u00e0nh 80-120K/n\u0103m (HVAC + lighting + water). ROI green premium < 3 n\u0103m. Xem L.1-L.8 v\u00e0 E (m\u00f4i tr\u01b0\u1eddng) [A].

"""

count = 0
if marker_gh in content:
    content = content.replace(marker_gh, g7 + marker_gh, 1)
    count += 1; print('G.7 inserted')
if marker_hi in content:
    content = content.replace(marker_hi, h9 + marker_hi, 1)
    count += 1; print('H.9 inserted')
if marker_ij in content:
    content = content.replace(marker_ij, i9 + marker_ij, 1)
    count += 1; print('I.9 inserted')
if marker_jk in content:
    content = content.replace(marker_jk, j9 + marker_jk, 1)
    count += 1; print('J.9 inserted')
if marker_kl in content:
    content = content.replace(marker_kl, k9 + marker_kl, 1)
    count += 1; print('K.9 inserted')
if marker_lm in content:
    content = content.replace(marker_lm, l9 + marker_lm, 1)
    count += 1; print('L.9 inserted')

with open(filepath, 'w', encoding='utf-8', newline='') as f:
    f.write(content)
print(f'{count} sections inserted / Total lines: {content.count(chr(10))}')
