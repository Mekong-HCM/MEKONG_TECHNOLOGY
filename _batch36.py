# -*- coding: utf-8 -*-
import sys
sys.stdout.reconfigure(encoding='utf-8')

filepath = r'c:\Users\Dell M4800\Downloads\DE_AN_MEKONG\DE_AN_MEKONG_V3\sections\PHU_LUC.md'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

marker_mn = '---\n\n## Ph\u1ee5 l\u1ee5c N:'
marker_no = '---\n\n## Ph\u1ee5 l\u1ee5c O:'
marker_op = '---\n\n## Ph\u1ee5 l\u1ee5c P:'
marker_pq = '---\n\n## Ph\u1ee5 l\u1ee5c Q:'
marker_qr = '---\n\n## Ph\u1ee5 l\u1ee5c R:'
marker_rs = '---\n\n## Ph\u1ee5 l\u1ee5c S:'

m10 = """### M.10. Chi\u1ebfn l\u01b0\u1ee3c Gi\u00e1 v\u00e0 Ph\u00e2n kh\u00fac Kh\u00e1ch h\u00e0ng

| Ph\u00e2n kh\u00fac | S\u1ea3n ph\u1ea9m ch\u1ee7 l\u1ef1c | Chi\u1ebfn l\u01b0\u1ee3c gi\u00e1 | Gross Margin m\u1ee5c ti\u00eau | Revenue share (Y5) |
|---|---|---|---:|---:|
| Tier-1 OEM (Samsung, LG) | CNC precision parts | Cost-plus 25-30% | 28-32% | 35% |
| Tier-2 OEM (n\u1ed9i \u0111\u1ecba) | CNC standard parts | Competitive pricing | 22-28% | 20% |
| Smart building | I-BMS Gateway | Value-based pricing | 55-60% | 20% |
| Industrial IoT | MK-Sensor Kit | Volume discount | 42-48% | 15% |
| D\u1ecbch v\u1ee5 k\u1ef9 thu\u1eadt | OEM design, retrofit | Time & material + retainer | 60-70% | 10% |

**Pricing playbook:**
- **CNC:** \u0110\u1ecbnh gi\u00e1 theo complexity index (CI = s\u1ed1 axis x tolerance grade x material factor). CI 1.0 = \u0111\u01a1n gi\u1ea3n, CI > 3.0 = cao c\u1ea5p.
- **IoT:** Bundle pricing: Gateway + 10 Sensors + 1Y cloud license = gi\u1ea3m 15% vs mua l\u1ebb.
- **D\u1ecbch v\u1ee5:** Retainer 3K-8K/th\u00e1ng t\u00f9y quy m\u00f4 kh\u00e1ch h\u00e0ng, bao g\u1ed3m support SLA 8x5.

> **Blended gross margin:** 38-42% (Y3-Y5), t\u0103ng d\u1ea7n khi IoT chi\u1ebfm t\u1ef7 tr\u1ecdng cao h\u01a1n. Revenue 12,00M [C] \u0111\u1ea1t t\u1eeb Y5 v\u1edbi mix tr\u00ean. Xem T.8 (BEP) v\u00e0 S.9 (FCFF) [A].

"""

n8 = """### N.8. Ch\u00ednh s\u00e1ch \u0110\u00e3i ng\u1ed9 v\u00e0 Gi\u1eef ch\u00e2n Nhân t\u00e0i

| H\u1ea1ng m\u1ee5c | N\u1ed9i dung | \u0110\u1ed1i t\u01b0\u1ee3ng | Chi ph\u00ed/n\u0103m (K USD) |
|---|---|---|---:|
| L\u01b0\u01a1ng c\u1ea1nh tranh | P50-P65 th\u1ecb tr\u01b0\u1eddng SHTP | To\u00e0n b\u1ed9 | (incl. N.6) |
| Th\u01b0\u1edfng KPI qu\u00fd | 0.5-2.0 th\u00e1ng l\u01b0\u01a1ng | Staff \u0111\u1ea1t KPI | 85 |
| ESOP (giai \u0111o\u1ea1n IPO/M&A) | 5-10% v\u1ed1n | Key persons (15-20 ng\u01b0\u1eddi) | Ph\u00e2n b\u1ed5 khi IPO |
| \u0110\u00e0o t\u1ea1o n\u01b0\u1edbc ngo\u00e0i | DMG Mori Academy, Siemens | CNC/IoT engineers | 45 |
| B\u1ea3o hi\u1ec3m s\u1ee9c kh\u1ecfe | Premium health + dental | L\u00e3nh \u0111\u1ea1o + k\u1ef9 s\u01b0 tr\u1eddng | 25 |
| Nh\u00e0 \u1edf/di chuy\u1ec3n | H\u1ed7 tr\u1ee3 50% c\u01b0 x\u00e1 SHTP | Expat + t\u1ec9nh xa | 15 |
| Team building | 2 l\u1ea7n/n\u0103m + family day | To\u00e0n b\u1ed9 | 12 |
| Retention bonus | 1-2 th\u00e1ng l\u01b0\u01a1ng/n\u0103m (cliff 2Y) | Senior engineers | 30 |

**M\u1ee5c ti\u00eau turnover:** < 12% (Y1-Y3), < 8% (Y5+). Benchmark SHTP trung b\u00ecnh 15-18%.

> **T\u1ed5ng chi ph\u00ed \u0111\u00e3i ng\u1ed9 ngo\u00e0i l\u01b0\u01a1ng:** ~212K/n\u0103m (Y3). Chi\u1ebfm ~10% t\u1ed5ng qu\u1ef9 l\u01b0\u01a1ng 2.200K/n\u0103m (130 ng\u01b0\u1eddi [C]). Xem N.6-N.7 v\u00e0 Ph\u1ee5 l\u1ee5c P (ERM) cho risk m\u1ea5t nh\u00e2n s\u1ef1 then ch\u1ed1t [A].

"""

o11 = """### O.11. Ma tr\u1eadn Ch\u1ee9ng ch\u1ec9 v\u00e0 L\u1ed9 tr\u00ecnh \u0110\u1ea1t \u0110\u01b0\u1ee3c

| Ch\u1ee9ng ch\u1ec9 | Ph\u1ea1m vi | M\u1ee5c ti\u00eau | Chi ph\u00ed (K USD) | Th\u1eddi gian | Status |
|---|---|---|---:|---|---|
| ISO 9001:2015 | To\u00e0n nh\u00e0 m\u00e1y | Y1-Q2 | 15 | 6 th\u00e1ng | K\u1ebf ho\u1ea1ch |
| ISO 14001:2015 | M\u00f4i tr\u01b0\u1eddng | Y1-Q3 | 12 | 6 th\u00e1ng | K\u1ebf ho\u1ea1ch |
| ISO 45001:2018 | An to\u00e0n lao \u0111\u1ed9ng | Y1-Q4 | 10 | 6 th\u00e1ng | K\u1ebf ho\u1ea1ch |
| IATF 16949 | CNC automotive | Y2-Q2 | 35 | 12 th\u00e1ng | Phase 2 |
| AS9100D | CNC aerospace | Y3-Q2 | 40 | 18 th\u00e1ng | Phase 3 |
| IEC 62443 | IoT security | Y2-Q4 | 20 | 9 th\u00e1ng | Phase 2 |
| CE Marking | IoT products (EU) | Y2-Q1 | 8 | 3 th\u00e1ng | Phase 2 |
| UL Listed | IoT products (US) | Y2-Q3 | 12 | 6 th\u00e1ng | Phase 2 |
| QD 38/SHTP | Nh\u00e0 m\u00e1y c\u00f4ng ngh\u1ec7 cao | Y1-Q1 | 5 | 3 th\u00e1ng | \u01afu ti\u00ean |

> **T\u1ed5ng ng\u00e2n s\u00e1ch ch\u1ee9ng ch\u1ec9 5Y:** 157K. Chi\u1ebfm 0.7% CAPEX 22.000K [C]. L\u1ed9 tr\u00ecnh ph\u00e2n k\u1ef3 gi\u00fap kh\u00f4ng qu\u00e1 t\u1ea3i team QA (5-7 ng\u01b0\u1eddi Y1-Y3). AS9100D v\u00e0 IATF 16949 l\u00e0 \u0111i\u1ec1u ki\u1ec7n ti\u00ean quy\u1ebft \u0111\u1ec3 v\u00e0o supply chain aerospace + automotive Tier-1. Xem Y.11 (cert-customer matrix) [A].

"""

p7 = """### P.7. K\u1ebf ho\u1ea1ch Ki\u1ec3m to\u00e1n v\u00e0 Gi\u00e1m s\u00e1t R\u1ee7i ro

| Lo\u1ea1i ki\u1ec3m to\u00e1n | T\u1ea7n su\u1ea5t | \u0110\u01a1n v\u1ecb th\u1ef1c hi\u1ec7n | Ph\u1ea1m vi | B\u00e1o c\u00e1o cho |
|---|---|---|---|---|
| Ki\u1ec3m to\u00e1n t\u00e0i ch\u00ednh | H\u00e0ng n\u0103m | Big-4 / \u0111\u01a1n v\u1ecb \u0111\u1ed9c l\u1eadp | B\u00e1o c\u00e1o t\u00e0i ch\u00ednh, CAPEX | H\u0110QT, Ng\u00e2n h\u00e0ng |
| Ki\u1ec3m to\u00e1n n\u1ed9i b\u1ed9 (ISO) | 2 l\u1ea7n/n\u0103m | QA team + consultant | ISO 9001/14001/45001 | CEO, H\u0110QT |
| Ki\u1ec3m to\u00e1n an to\u00e0n | H\u00e0ng qu\u00fd | HSE manager | PCCC, h\u00f3a ch\u1ea5t, \u0111i\u1ec7n | Gi\u00e1m \u0111\u1ed1c SX |
| Ki\u1ec3m to\u00e1n m\u00f4i tr\u01b0\u1eddng | H\u00e0ng qu\u00fd | \u0110\u01a1n v\u1ecb \u0111\u1ea1t CMA | N\u01b0\u1edbc th\u1ea3i, kh\u00ed th\u1ea3i, ch\u1ea5t th\u1ea3i | BQL SHTP, S\u1edf TN&MT |
| Ki\u1ec3m to\u00e1n CNTT | H\u00e0ng n\u0103m | IT security firm | Penetration test, ISO 27001 gap | CTO |
| Ki\u1ec3m to\u00e1n KH (customer) | Theo y\u00eau c\u1ea7u | KH Tier-1 | Process, quality, capacity | Customer QA |
| Ki\u1ec3m to\u00e1n ERM | H\u00e0ng qu\u00fd | Risk committee | Top 10 risks (P.6) | H\u0110QT |

> **Ng\u00e2n s\u00e1ch ki\u1ec3m to\u00e1n:** 85K/n\u0103m (external 55K + internal 30K). Findings tracking b\u1eb1ng CAPA log v\u1edbi closure deadline 30 ng\u00e0y (minor) / 7 ng\u00e0y (major). Repeat finding = auto-escalate l\u00ean H\u0110QT. Xem P.6 (ERM), D (ph\u00e1p l\u00fd), F (an to\u00e0n) [A].

"""

q9 = """### Q.9. Chu\u1ea9n h\u00f3a QC Nh\u00e0 cung c\u1ea5p (Supplier Quality Manual)

**Ph\u1ea1m vi \u00e1p d\u1ee5ng:** T\u1ea5t c\u1ea3 NCC c\u1ea5p 1 (direct material) v\u00e0 NCC c\u1ea5p 2 (critical sub-tier).

| Y\u00eau c\u1ea7u | M\u00f4 t\u1ea3 | \u0110\u00e1nh gi\u00e1 | KPI |
|---|---|---|---|
| ISO 9001 b\u1eaft bu\u1ed9c | Ch\u1ee9ng ch\u1ec9 c\u00f2n hi\u1ec7u l\u1ef1c | Qualification audit | 100% NCC c\u1ea5p 1 |
| PPAP/ISIR | Duy\u1ec7t m\u1eabu l\u1ea7n \u0111\u1ea7u | Level 3 PPAP | 100% NVL m\u1edbi |
| Incoming lot inspection | AQL 1.0 critical, 2.5 major | Sampling plan ISO 2859 | Lot reject < 2% |
| CoC (Certificate of Conformance) | M\u1ed7i l\u00f4 h\u00e0ng ph\u1ea3i c\u00f3 | Document check | 100% |
| Annual audit | T\u1ea1i nh\u00e0 m\u00e1y NCC | Checklist 80 \u0111i\u1ec3m | Score > 70/80 |
| Corrective action | 8D report cho l\u1ed7i l\u1eb7p l\u1ea1i | CAPA tracking | Response < 5 ng\u00e0y |
| ESG compliance | Lao \u0111\u1ed9ng, m\u00f4i tr\u01b0\u1eddng, \u0111\u1ea1o \u0111\u1ee9c | ESG checklist | 100% NCC c\u1ea5p 1 |

**Ph\u00e2n lo\u1ea1i NCC theo hi\u1ec7u su\u1ea5t:**

| H\u1ea1ng | \u0110i\u1ec3m QCD | H\u00e0nh \u0111\u1ed9ng |
|---|---|---|
| A (Preferred) | > 90 | \u0110\u01a1n h\u00e0ng \u01b0u ti\u00ean, payment term 45 ng\u00e0y |
| B (Approved) | 70-90 | Duy tr\u00ec, improvement plan n\u1ebfu < 80 |
| C (Conditional) | 50-70 | C\u1ea3nh b\u00e1o, audit t\u0103ng c\u01b0\u1eddng, 90 ng\u00e0y c\u1ea3i thi\u1ec7n |
| D (Disqualified) | < 50 | Ng\u01b0ng cung c\u1ea5p, t\u00ecm thay th\u1ebf |

> **M\u1ee5c ti\u00eau:** 80% NCC \u0111\u1ea1t h\u1ea1ng A/B (Y3), 90% (Y5). Chi ph\u00ed audit NCC = 25K/n\u0103m (8-10 chuy\u1ebfn/n\u0103m). Xem Q.7 (SCM), K.8 (vendor matrix) [A].

"""

r9 = """### R.9. K\u1ecbch b\u1ea3n Ph\u1ee5c h\u1ed3i T\u00e0i ch\u00ednh Chi ti\u1ebft

| K\u1ecbch b\u1ea3n | Trigger | H\u00e0nh \u0111\u1ed9ng t\u1ee9c th\u1eddi (0-30 ng\u00e0y) | H\u00e0nh \u0111\u1ed9ng trung h\u1ea1n (30-180 ng\u00e0y) | Recovery KPI |
|---|---|---|---|---|
| Revenue < 80% k\u1ebf ho\u1ea1ch | 2 qu\u00fd li\u00ean ti\u1ebfp | C\u1eaft OPEX 15%, freeze hiring | Pivot marketing, gi\u1ea3m gi\u00e1 spot | Revenue > 90% qu\u00fd k\u1ebf ti\u1ebfp |
| DSCR < 1.20x | B\u1ea5t k\u1ef3 qu\u00fd n\u00e0o | B\u01a1m CSH b\u1ed5 sung t\u1eeb reserve | \u0110\u00e0m ph\u00e1n reschedule n\u1ee3 | DSCR > 1.50x [C] |
| M\u1ea5t kh\u00e1ch h\u00e0ng l\u1edbn | > 15% revenue | Div acquisition team, \u0111a d\u1ea1ng KH | Key account re-engagement | Revenue replace 6 th\u00e1ng |
| Thi\u00ean tai / d\u1ecbch | Nh\u00e0 m\u00e1y ng\u01b0ng > 15 ng\u00e0y | Insurance claim, BCP activate | Thuê outsource capacity | Ho\u1ea1t \u0111\u1ed9ng l\u1ea1i 30 ng\u00e0y |
| FX shock > 10% | VND m\u1ea5t gi\u00e1 > 10% | Hedge forward 6M, gi\u00e1 b\u00e1n \u0111i\u1ec1u ch\u1ec9nh | Natural hedge (t\u0103ng XK) | FX impact < 3% NP |

**Capital reserve policy:**
- Reserve fund = 6 th\u00e1ng OPEX = 6 x 450K = 2.700K [B]
- Ngu\u1ed3n: tr\u00edch 5% l\u1ee3i nhu\u1eadn gi\u1eef l\u1ea1i h\u00e0ng n\u0103m cho \u0111\u1ebfn khi \u0111\u1ee7 target
- \u0110\u1ecba \u0111i\u1ec3m l\u01b0u: T\u00e0i kho\u1ea3n ti\u1ec1n g\u1eedi c\u00f3 k\u1ef3 h\u1ea1n (3-6 th\u00e1ng), kh\u00f4ng \u0111\u1ea7u t\u01b0 r\u1ee7i ro

> **Li\u00ean k\u1ebft:** R.8 (stress test) cung c\u1ea5p threshold cho m\u1ed7i k\u1ecbch b\u1ea3n. P.6 (ERM) ph\u00e2n c\u00f4ng responsible cho m\u1ed7i recovery action. S.10 (Monte Carlo) cho bi\u1ebft x\u00e1c su\u1ea5t c\u1ea7n activate recovery = 12.7% (NPV < 0). DSCR \u2265 1,50x [C] l\u00e0 covenant b\u1eaft bu\u1ed9c [A].

"""

count = 0
if marker_mn in content:
    content = content.replace(marker_mn, m10 + marker_mn, 1)
    count += 1; print('M.10 inserted')
if marker_no in content:
    content = content.replace(marker_no, n8 + marker_no, 1)
    count += 1; print('N.8 inserted')
if marker_op in content:
    content = content.replace(marker_op, o11 + marker_op, 1)
    count += 1; print('O.11 inserted')
if marker_pq in content:
    content = content.replace(marker_pq, p7 + marker_pq, 1)
    count += 1; print('P.7 inserted')
if marker_qr in content:
    content = content.replace(marker_qr, q9 + marker_qr, 1)
    count += 1; print('Q.9 inserted')
if marker_rs in content:
    content = content.replace(marker_rs, r9 + marker_rs, 1)
    count += 1; print('R.9 inserted')

with open(filepath, 'w', encoding='utf-8', newline='') as f:
    f.write(content)
print(f'{count} sections inserted / Total lines: {content.count(chr(10))}')
