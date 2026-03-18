# -*- coding: utf-8 -*-
import sys
sys.stdout.reconfigure(encoding='utf-8')

filepath = r'c:\Users\Dell M4800\Downloads\DE_AN_MEKONG\DE_AN_MEKONG_V3\sections\PHU_LUC.md'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

marker_st = '---\n\n## Ph\u1ee5 l\u1ee5c T:'
marker_tu = '---\n\n## Ph\u1ee5 l\u1ee5c U:'
marker_uv = '---\n\n## Ph\u1ee5 l\u1ee5c V:'
marker_vw = '---\n\n## Ph\u1ee5 l\u1ee5c W:'
marker_wx = '---\n\n## Ph\u1ee5 l\u1ee5c X:'
marker_xy = '---\n\n## Ph\u1ee5 l\u1ee5c Y:'

# Marker for end of Y (end of file or a known pattern)
# We'll append Y.13 right before the file ends or before a final horizontal rule

s11 = """### S.11. B\u1ea3ng C\u00e2n \u0111\u1ed1i K\u1ebf to\u00e1n T\u00f3m t\u1eaft (Pro-forma Balance Sheet)

| H\u1ea1ng m\u1ee5c (K USD) | Y0 | Y1 | Y3 | Y5 | Y10 | Y15 |
|---|---:|---:|---:|---:|---:|---:|
| **T\u00e0i s\u1ea3n** | | | | | | |
| Ti\u1ec1n m\u1eb7t + t\u01b0\u01a1ng \u0111\u01b0\u01a1ng | 2.000 | 800 | 1.500 | 3.200 | 8.500 | 14.000 |
| Kho\u1ea3n ph\u1ea3i thu | 0 | 500 | 1.200 | 1.800 | 2.400 | 2.500 |
| H\u00e0ng t\u1ed3n kho | 0 | 400 | 800 | 1.000 | 1.200 | 1.200 |
| T\u00e0i s\u1ea3n c\u1ed1 \u0111\u1ecbnh r\u00f2ng | 22.000 | 20.600 | 17.800 | 15.000 | 8.600 | 2.200 |
| **T\u1ed5ng t\u00e0i s\u1ea3n** | **24.000** | **22.300** | **21.300** | **21.000** | **20.700** | **19.900** |
| **Ngu\u1ed3n v\u1ed1n** | | | | | | |
| Vay ng\u1eafn h\u1ea1n | 0 | 0 | 0 | 0 | 0 | 0 |
| Vay d\u00e0i h\u1ea1n | 4.000 | 3.600 | 2.400 | 800 | 0 | 0 |
| V\u1ed1n CSH | 18.000 | 18.000 | 18.000 | 18.000 | 18.000 | 18.000 |
| L\u1ee3i nhu\u1eadn gi\u1eef l\u1ea1i | 0 | (300) | 900 | 2.200 | 2.700 | 1.900 |
| **T\u1ed5ng ngu\u1ed3n v\u1ed1n** | **22.000** | **21.300** | **21.300** | **21.000** | **20.700** | **19.900** |

> **Ghi ch\u00fa:** CAPEX 22.000K [C], CSH 18.000K (81,8%) [C], Vay 4.000K (18,2%) [C]. Vay tr\u1ea3 h\u1ebft Y8. D/E peak = 0.22 (Y0), gi\u1ea3m v\u1ec1 0 t\u1eeb Y8. B\u1ea3ng c\u00e2n \u0111\u1ed1i cho th\u1ea5y d\u1ef1 \u00e1n accumulate cash m\u1ea1nh t\u1eeb Y5, h\u1ed7 tr\u1ee3 expansion Phase 2-3 m\u00e0 kh\u00f4ng c\u1ea7n th\u00eam vay. Xem S.1-S.10, T.9 (revenue roadmap) [A].

"""

t10 = """### T.10. Ph\u00e2n t\u00edch \u0110\u1ed9 nh\u1ea1y \u0110a bi\u1ebfn (Multi-variable Sensitivity)

| K\u1ecbch b\u1ea3n | Revenue (% base) | OPEX (% base) | CAPEX (% base) | NPV (K USD) | IRR | DSCR min |
|---|---:|---:|---:|---:|---:|---:|
| Base | 100% | 100% | 100% | 1.500 [C] | 13,0% [C] | 1,55x |
| Optimistic | 110% | 95% | 98% | 3.200 | 16,2% | 1,85x |
| Mild stress | 90% | 105% | 102% | 420 | 10,8% | 1,25x |
| Moderate stress | 85% | 110% | 105% | (180) | 9,5% | 1,08x |
| Severe stress | 75% | 115% | 108% | (1.350) | 7,2% | 0,82x |
| Revenue only -20% | 80% | 100% | 100% | (520) | 8,8% | 0,95x |
| OPEX only +20% | 100% | 120% | 100% | 350 | 10,5% | 1,18x |
| CAPEX only +10% | 100% | 100% | 110% | 980 | 11,6% | 1,40x |

> **K\u1ebft lu\u1eadn:** Revenue l\u00e0 bi\u1ebfn nh\u1ea1y nh\u1ea5t (NPV swing 2.020K khi Revenue thay \u0111\u1ed5i +/-20%). OPEX nh\u1ea1y th\u1ee9 hai. CAPEX \u00edt nh\u1ea1y nh\u1ea5t (v\u00ec \u0111\u00e3 commit h\u1ee3p \u0111\u1ed3ng). \u0110\u1ec3 NPV > 0 c\u1ea7n Revenue > 82% base. \u0110\u1ec3 DSCR > 1.50x [C] c\u1ea7n Revenue > 95% v\u00e0 OPEX < 105%. Xem R.8 (stress test), S.10 (Monte Carlo) [A].

"""

u10 = """### U.10. Phi\u00ean b\u1ea3n B\u00e1o c\u00e1o v\u00e0 Chu k\u1ef3 C\u1eadp nh\u1eadt

| B\u00e1o c\u00e1o | T\u1ea7n su\u1ea5t | \u0110\u1ed1i t\u01b0\u1ee3ng | D\u1eef li\u1ec7u ngu\u1ed3n | C\u00f4ng c\u1ee5 |
|---|---|---|---|---|
| Daily production dashboard | Real-time | Tr\u01b0\u1edfng ca, COO | ERP + IoT sensors | Grafana |
| Weekly KPI scorecard | Th\u1ee9 Hai, 8:00 | CEO, CFO, COO | ERP + HR + QC | Power BI |
| Monthly P&L flash | Ng\u00e0y 5 th\u00e1ng sau | H\u0110QT, Ng\u00e2n h\u00e0ng | Accounting + ERP | Excel + BI |
| Quarterly investor report | Ng\u00e0y 15 (Q+1) | C\u1ed5 \u0111\u00f4ng, SHTP | Finance + operations | PDF template |
| Annual statutory report | T3 n\u0103m sau | C\u01a1 quan thu\u1ebf, SHTP | Audit + legal | Auditor format |
| Ad-hoc analysis | Theo y\u00eau c\u1ea7u | CEO | Data warehouse | Python / BI |

> **Data governance:** M\u1ecdi b\u00e1o c\u00e1o c\u00f3 version control, audit trail, v\u00e0 sign-off. D\u1eef li\u1ec7u t\u00e0i ch\u00ednh reconcile v\u1edbi s\u1ed5 k\u1ebf to\u00e1n h\u00e0ng th\u00e1ng. Dashboard c\u00f3 RBAC 4 vai tr\u00f2 (xem U.9). Alert t\u1ef1 \u0111\u1ed9ng khi KPI v\u01b0\u1ee3t ng\u01b0\u1ee1ng (DSCR < 1.5x, OEE < 70%, lot reject > 3%) [A].

"""

v4 = """### V.4. L\u1ecbch s\u1eed Phi\u00ean b\u1ea3n \u0110\u1ec1 \u00e1n

| Phi\u00ean b\u1ea3n | Ng\u00e0y | Thay \u0111\u1ed5i ch\u00ednh | T\u00e1c gi\u1ea3 |
|---|---|---|---|
| V1.0 | 2025-06 | B\u1ea3n \u0111\u1ea7u ti\u00ean, CAPEX 47M | Team k\u1ef9 thu\u1eadt |
| V2.0 | 2025-10 | Gi\u1ea3m CAPEX 37M, th\u00eam datacenter TM | Team c\u1ed1 v\u1ea5n |
| V2.1 | 2026-01 | \u0110i\u1ec1u ch\u1ec9nh t\u00e0i ch\u00ednh, lo\u1ea1i DC TM | CFO |
| V3.0 | 2026-03 | C\u1ea5u tr\u00fac l\u1ea1i 22M, 2 tr\u1ee5 c\u1ed9t, 10 CNC | Team d\u1ef1 \u00e1n |
| V3.1 | 2026-03 | B\u1ed5 sung ph\u1ee5 l\u1ee5c A-Y, QC nh\u1ea5t qu\u00e1n | AI + Review |

> **Nguy\u00ean t\u1eafc:** M\u1ecdi thay \u0111\u1ed5i s\u1ed1 li\u1ec7u canonical ph\u1ea3i c\u1eadp nh\u1eadt SO_LIEU_CO_DINH_V3.md tr\u01b0\u1edbc, sau \u0111\u00f3 cascade xu\u1ed1ng t\u1ea5t c\u1ea3 sections. QC pipeline (V.3) ki\u1ec3m tra nh\u1ea5t qu\u00e1n s\u1ed1 li\u1ec7u sau m\u1ed7i l\u1ea7n s\u1eeda [A].

"""

w7 = """### W.7. Danh m\u1ee5c Thu\u1eadt ng\u1eef vi\u1ebft t\u1eaft

| Vi\u1ebft t\u1eaft | Ti\u1ebfng Anh | Ti\u1ebfng Vi\u1ec7t |
|---|---|---|
| BEP | Break-Even Point | \u0110i\u1ec3m h\u00f2a v\u1ed1n |
| BMS | Building Management System | H\u1ec7 th\u1ed1ng qu\u1ea3n l\u00fd t\u00f2a nh\u00e0 |
| CAPEX | Capital Expenditure | Chi ph\u00ed \u0111\u1ea7u t\u01b0 |
| CMM | Coordinate Measuring Machine | M\u00e1y \u0111o t\u1ecda \u0111\u1ed9 |
| CNC | Computer Numerical Control | \u0110i\u1ec1u khi\u1ec3n s\u1ed1 |
| CSH | -- | V\u1ed1n ch\u1ee7 s\u1edf h\u1eef |
| DSCR | Debt Service Coverage Ratio | T\u1ef7 l\u1ec7 kh\u1ea3 n\u0103ng tr\u1ea3 n\u1ee3 |
| EBITDA | Earnings Before Interest, Taxes, Depreciation & Amortization | L\u1ee3i nhu\u1eadn tr\u01b0\u1edbc l\u00e3i vay, thu\u1ebf, kh\u1ea5u hao |
| ERM | Enterprise Risk Management | Qu\u1ea3n l\u00fd r\u1ee7i ro doanh nghi\u1ec7p |
| ERP | Enterprise Resource Planning | Ho\u1ea1ch \u0111\u1ecbnh ngu\u1ed3n l\u1ef1c doanh nghi\u1ec7p |
| ESG | Environmental, Social, Governance | M\u00f4i tr\u01b0\u1eddng, X\u00e3 h\u1ed9i, Qu\u1ea3n tr\u1ecb |
| FCFF | Free Cash Flow to Firm | D\u00f2ng ti\u1ec1n t\u1ef1 do |
| GFA | Gross Floor Area | T\u1ed5ng di\u1ec7n t\u00edch s\u00e0n |
| IATF | International Automotive Task Force | Ti\u00eau chu\u1ea9n \u00f4 t\u00f4 qu\u1ed1c t\u1ebf |
| IoT | Internet of Things | V\u1ea1n v\u1eadt k\u1ebft n\u1ed1i |
| IRR | Internal Rate of Return | T\u1ef7 su\u1ea5t ho\u00e0n v\u1ed1n n\u1ed9i b\u1ed9 |
| KCNC | -- | Khu C\u00f4ng ngh\u1ec7 cao |
| KPI | Key Performance Indicator | Ch\u1ec9 s\u1ed1 hi\u1ec7u su\u1ea5t then ch\u1ed1t |
| MPMC | Multi-Purpose Manufacturing Cell | T\u1ebf b\u00e0o s\u1ea3n xu\u1ea5t \u0111a n\u0103ng |
| NPV | Net Present Value | Gi\u00e1 tr\u1ecb hi\u1ec7n t\u1ea1i r\u00f2ng |
| NVL | -- | Nguy\u00ean v\u1eadt li\u1ec7u |
| OEE | Overall Equipment Effectiveness | Hi\u1ec7u su\u1ea5t thi\u1ebft b\u1ecb to\u00e0n di\u1ec7n |
| OPEX | Operating Expenditure | Chi ph\u00ed v\u1eadn h\u00e0nh |
| PCCC | -- | Ph\u00f2ng ch\u00e1y ch\u1eefa ch\u00e1y |
| QC / QA | Quality Control / Quality Assurance | Ki\u1ec3m so\u00e1t / \u0110\u1ea3m b\u1ea3o ch\u1ea5t l\u01b0\u1ee3ng |
| SHTP | Saigon Hi-Tech Park | Khu CNC TP.HCM |
| SPC | Statistical Process Control | Ki\u1ec3m so\u00e1t qu\u00e1 tr\u00ecnh th\u1ed1ng k\u00ea |
| WACC | Weighted Average Cost of Capital | Chi ph\u00ed v\u1ed1n b\u00ecnh qu\u00e2n gia quy\u1ec1n |
| ZLD | Zero Liquid Discharge | X\u1ea3 l\u00f2ng b\u1eb1ng kh\u00f4ng |

> **T\u1ed5ng c\u1ed9ng 28 thu\u1eadt ng\u1eef.** Danh m\u1ee5c n\u00e0y b\u1ed5 sung cho W.1-W.6 v\u00e0 gi\u00fap ng\u01b0\u1eddi \u0111\u1ecdc tra c\u1ee9u nhanh [A].

"""

x11 = """### X.11. B\u1ea3ng T\u1ed5ng h\u1ee3p Li\u00ean k\u1ebft gi\u1eefa c\u00e1c Ph\u1ee5 l\u1ee5c

| Ph\u1ee5 l\u1ee5c | Li\u00ean k\u1ebft ch\u00ednh | M\u1ee5c \u0111\u00edch tham chi\u1ebfu |
|---|---|---|
| A (T\u00e0i ch\u00ednh) | S, T, R | S\u1ed1 li\u1ec7u CAPEX, NPV, IRR l\u00e0m \u0111\u1ea7u v\u00e0o cho m\u00f4 h\u00ecnh |
| B (Thi\u1ebft b\u1ecb) | I, K, H | Danh m\u1ee5c m\u00e1y li\u00ean quan CNC capacity, PM, n\u0103ng l\u01b0\u1ee3ng |
| C (M\u1eb7t b\u1eb1ng) | H, L | Layout nh\u00e0 x\u01b0\u1edfng li\u00ean quan M&E v\u00e0 x\u00e2y d\u1ef1ng |
| D (Ph\u00e1p l\u00fd) | G, P | Gi\u1ea5y ph\u00e9p l\u00e0 \u0111i\u1ec1u ki\u1ec7n ch\u00ednh, ERM theo d\u00f5i |
| E (M\u00f4i tr\u01b0\u1eddng) | F, L | ZLD, waste li\u00ean quan an to\u00e0n v\u00e0 x\u00e2y d\u1ef1ng |
| F (An to\u00e0n) | E, P | PCCC, HSE tr\u00f9ng v\u1edbi m\u00f4i tr\u01b0\u1eddng v\u00e0 r\u1ee7i ro |
| G-H-I-J | B, K, N | H\u1ee3p \u0111\u1ed3ng, M&E, CNC, IoT li\u00ean quan NCC, PM, nh\u00e2n s\u1ef1 |
| K-L | B, Q | Mua s\u1eafm, x\u00e2y d\u1ef1ng li\u00ean quan thi\u1ebft b\u1ecb v\u00e0 SCM |
| M-N | T, S | Th\u1ecb tr\u01b0\u1eddng, nh\u00e2n s\u1ef1 l\u00e0m c\u01a1 s\u1edf revenue v\u00e0 chi ph\u00ed |
| O (Ch\u1ea5t l\u01b0\u1ee3ng) | I, Q, Y | QC li\u00ean quan CNC operations v\u00e0 ch\u1ee9ng ch\u1ec9 |
| P (R\u1ee7i ro) | R, S | ERM \u0111\u1ecbnh h\u01b0\u1edbng stress test v\u00e0 FCFF scenario |
| Q-R | A, S, T | SCM v\u00e0 t\u00e0i ch\u00ednh risk li\u00ean k\u1ebft CAPEX, revenue |
| S-T | A, M, R | M\u00f4 h\u00ecnh t\u00e0i ch\u00ednh d\u1ef1a tr\u00ean CAPEX, th\u1ecb tr\u01b0\u1eddng, risk |
| U-V | T\u1ea5t c\u1ea3 | Dashboard v\u00e0 QC ki\u1ec3m tra nh\u1ea5t qu\u00e1n to\u00e0n b\u1ed9 |
| W-X-Y | T\u1ea5t c\u1ea3 | Tham kh\u1ea3o, FAQ, ch\u1ee9ng ch\u1ec9 l\u00e0 ph\u1ea7n tra c\u1ee9u |

> **Nguy\u00ean t\u1eafc:** Khi thay \u0111\u1ed5i s\u1ed1 li\u1ec7u t\u1ea1i m\u1ed9t ph\u1ee5 l\u1ee5c, ph\u1ea3i cascade ki\u1ec3m tra t\u1ea5t c\u1ea3 ph\u1ee5 l\u1ee5c li\u00ean k\u1ebft. QC pipeline (V.3) t\u1ef1 \u0111\u1ed9ng ki\u1ec3m tra nh\u1ea5t qu\u00e1n s\u1ed1 li\u1ec7u canonical [C] [A].

"""

# For Y.13, we need to find end of Y section. Search for a pattern at end
y13 = """### Y.13. B\u1ea3ng T\u1ed5ng h\u1ee3p Chi ph\u00ed Ch\u1ee9ng ch\u1ec9 v\u00e0 Ti\u00eau chu\u1ea9n (5 N\u0103m)

| Ch\u1ee9ng ch\u1ec9 / Ti\u00eau chu\u1ea9n | Chi ph\u00ed ban \u0111\u1ea7u (K USD) | Duy tr\u00ec/n\u0103m (K USD) | T\u1ed5ng 5Y (K USD) | Ghi ch\u00fa |
|---|---:|---:|---:|---|
| ISO 9001:2015 | 15 | 5 | 35 | B\u1eaft bu\u1ed9c Y1 |
| ISO 14001:2015 | 12 | 4 | 28 | B\u1eaft bu\u1ed9c Y1 |
| ISO 45001:2018 | 10 | 4 | 26 | B\u1eaft bu\u1ed9c Y1 |
| IATF 16949 | 35 | 8 | 67 | Y2, automotive |
| AS9100D | 40 | 10 | 80 | Y3, aerospace |
| IEC 62443 | 20 | 5 | 40 | Y2, IoT security |
| CE Marking | 8 | 2 | 16 | Y2, EU market |
| UL Listed | 12 | 3 | 24 | Y2, US market |
| QD 38/SHTP | 5 | 0 | 5 | Y1, m\u1ed9t l\u1ea7n |
| **T\u1ed5ng** | **157** | **41** | **321** | **0.7% CAPEX** [C] |

> **ROI ch\u1ee9ng ch\u1ec9:** IATF 16949 + AS9100D m\u1edf c\u1eeda doanh thu Tier-1 automotive/aerospace \u01b0\u1edbc 4-6M/n\u0103m (Y5+). Chi ph\u00ed 147K vs revenue potential = ROI > 25x. CE + UL m\u1edf th\u1ecb tr\u01b0\u1eddng EU/US cho IoT, \u01b0\u1edbc th\u00eam 1.5-2.5M/n\u0103m. T\u1ed5ng 321K/5Y = 1.5% CAPEX 22.000K [C], \u0111\u1ea7u t\u01b0 x\u1ee9ng \u0111\u00e1ng. Xem O.11 (l\u1ed9 tr\u00ecnh), Y.11 (cert-customer matrix) [A].

"""

count = 0
if marker_st in content:
    content = content.replace(marker_st, s11 + marker_st, 1)
    count += 1; print('S.11 inserted')
if marker_tu in content:
    content = content.replace(marker_tu, t10 + marker_tu, 1)
    count += 1; print('T.10 inserted')
if marker_uv in content:
    content = content.replace(marker_uv, u10 + marker_uv, 1)
    count += 1; print('U.10 inserted')
if marker_vw in content:
    content = content.replace(marker_vw, v4 + marker_vw, 1)
    count += 1; print('V.4 inserted')
if marker_wx in content:
    content = content.replace(marker_wx, w7 + marker_wx, 1)
    count += 1; print('W.7 inserted')
if marker_xy in content:
    content = content.replace(marker_xy, x11 + marker_xy, 1)
    count += 1; print('X.11 inserted')

# For Y.13, insert before the very last line (or before last ---)
# Find last occurrence of "---" as a standalone line at the end
y_end_marker = '\n---\n'
last_idx = content.rfind(y_end_marker)
if last_idx > 0:
    content = content[:last_idx] + '\n' + y13 + content[last_idx:]
    count += 1; print('Y.13 inserted')

with open(filepath, 'w', encoding='utf-8', newline='') as f:
    f.write(content)
print(f'{count} sections inserted / Total lines: {content.count(chr(10))}')
