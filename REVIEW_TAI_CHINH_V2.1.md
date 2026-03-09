# BAO CAO REVIEW TAI CHINH VA KE HOACH DU AN MEKONG TECHNOLOGY V2.1

**Nguoi review:** Chuyen gia Tai chinh & De an  
**File nguon:** `DE_AN_MEKONG_V2/MEKONG_DE_AN_V2_MASTER.md` (15.946 dong, V2.1)  
**Ngay review:** 09/03/2026  
**Muc dich:** Review toan dien tinh nhat quan, logic tai chinh, va phat hien loi trong de an

---

## MUC LUC

- [A. TOM TAT DANH GIA TONG THE](#a-tom-tat-danh-gia-tong-the)
- [B. LOI NGHIEM TRONG (CRITICAL) — Can sua ngay](#b-loi-nghiem-trong-critical--can-sua-ngay)
- [C. LOI TRUNG BINH (MODERATE) — Can lam ro](#c-loi-trung-binh-moderate--can-lam-ro)
- [D. LOI NHE (MINOR) — Nen sua](#d-loi-nhe-minor--nen-sua)
- [E. PHAN TICH LOGIC 5 NAM DAU KHONG DOANH THU](#e-phan-tich-logic-5-nam-dau-khong-doanh-thu)
- [F. DE XUAT CAP NHAT CU THE](#f-de-xuat-cap-nhat-cu-the)
- [G. BANG TONG HOP LOI VA MUC DO UU TIEN](#g-bang-tong-hop-loi-va-muc-do-uu-tien)

---

## A. TOM TAT DANH GIA TONG THE

### Ket luan chung

De an V2.1 co **cau truc logic tong the hop ly** (5 Phase trai 15 nam, tu chu von CSH 10 nam dau, vay tu Y10 khi da co doanh thu chung minh). Tuy nhien, qua review chi tiet, phat hien **27 loi** phan bo nhu sau:

| Muc do | So luong | Mo ta |
|---|---:|---|
| **CRITICAL** | 10 | Sai so lieu, mau thuan noi bo, lam mat uy tin de an |
| **MODERATE** | 9 | Logic chua chac chan, can lam ro hoac chinh sua |
| **MINOR** | 8 | Trinh bay, naming, format |

### Van de cot loi

**De an dang tron lan 2 mo hinh tai chinh khac nhau:**

1. **Mo hinh cu (V1/V2.0):** 3 BU hoat dong dong thoi tu Y1, doanh thu tu Y1, 10 nam horizon, Revenue 10Y = 103,52M
2. **Mo hinh moi (V2.1):** Trien khai tuan tu IoT (Y6) → CNC (Y8) → DC (Y11), 5 nam xay dung, Revenue 15Y = ~165M

Nhieu phan cua Executive Summary, Bang San pham, Nhan su, va Financial Dashboard **van dung so lieu tu mo hinh cu** nhung de chung voi mo hinh moi, tao ra **hang loat mau thuan so lieu nghiem trong**.

---

## B. LOI NGHIEM TRONG (CRITICAL) — Can sua ngay

---

### LOI #1: Doanh thu san pham tong hop (44,70M/nam) KHONG KHOP voi du bao tai chinh (max 32M tai Y15)

**Vi tri:** Dong 269 (Bang San pham) vs Dong 4536 (Muc 5.2.1)

**Chi tiet:**
- **Bang San pham (Exec Summary):** Tong doanh thu on dinh = **44,70M USD/nam** tu nam 7
- **Muc 5.2.1 (Tai chinh):** Revenue Y15 (on dinh) = **32,00M USD/nam**
- **Chenh lech: 12,70M USD/nam (gap 40%)**

**Phan tich theo tru cot:**

| Tru cot | Bang San pham (M/nam) | Tai chinh Y15 (M/nam) | Chenh lech |
|---|---:|---:|---:|
| IoT/Robot (gom BMS/SCADA) | 26,00 | 8,50 | **-17,50M (67% thap hon)** |
| CNC | 9,50 | 11,50 | +2,00M |
| Datacenter | 9,20 | 12,00 | +2,80M |
| **Tong** | **44,70** | **32,00** | **-12,70M** |

**Nghiem trong:** Khoang cach IoT la lon nhat — Bang san pham hien 26M/nam nhung tai chinh chi du bao 8,50M. Dieu nay cho thay bang san pham duoc xay tu gia dinh "full capacity" nhung mo hinh tai chinh thuc te bao thu hon nhieu. **Ban QL KCNC se hoi tai sao san pham 44,70M ma chi du bao 32M.**

**Kien nghi:** Dong bo bang san pham voi du bao tai chinh. Ghi ro "Quy mo/nam" la muc tieu dai han (post-Y15), con doanh thu on dinh V2.1 = 32M. Hoac giai thich ramp-up schedule cho tung san pham.

---

### LOI #2: HAI cau truc von KHAC NHAU trong cung Executive Summary

**Vi tri:** Dong ~435 (Bang 4 nguon) vs Dong ~498 (Bang 2 nguon)

**Bang 1 (Exec Summary — Cau truc Von):**

| Nguon | Gia tri (M) | Ty trong |
|---|---:|---:|
| Von CSH (CAPEX) | 23,10 | 49% |
| Vay ngan hang | 14,70 | 31% |
| Thue tai chinh | 6,20 | 13% |
| Tai tro du an | 3,50 | 7% |
| **Tong** | **47,50** | **100%** |

**Bang 2 (Section 5.1.2 — cung duoc trich dan trong Exec Summary):**

| Nguon | Gia tri (M) | Ty trong |
|---|---:|---:|
| Von CSH | 34,97 | 73,6% |
| Vay ngan hang | 12,53 | 26,4% |
| **Tong** | **47,50** | **100%** |

**Van de:**
- Von CSH: 23,10M vs 34,97M — **chenh 11,87M**
- Vay: 14,70M vs 12,53M — **chenh 2,17M**
- Bang 1 co 4 nguon (gom Thue TC 6,20M + Tai tro 3,50M) nhung toan bo Phan V chi noi 2 nguon (CSH + Vay)
- **Khong ro bang nao la CHINH THUC cua V2.1**

**Kien nghi:** Xoa bang 4 nguon (day la tu V1/V2.0). Giu bang 2 nguon (CSH 34,97M + Vay 12,53M) lam chinh thuc. Hoac neu van giu 4 nguon, cap nhat so lieu cho nhat quan.

---

### LOI #3: Gia tri Chien luoc — HAI con so khac nhau trong cung Exec Summary

**Vi tri:** Dong 239 vs Dong 463

- **Dong 239:** "Gia tri Chien luoc (Adjusted) = **15.780.000 USD**" (trong Chi so Tai chinh Tong hop)
- **Dong 463:** "Gia tri Chien luoc (Adjusted) = **20,32 M USD**" (trong Chi so Bo sung)
- **Muc 5.7.1:** Tong = **20,32M** (phan tich chi tiet)

**Chenh lech: 4,54M USD giua 2 vi tri trong CUNG MOT EXEC SUMMARY.**

Ngoai ra, **cac thanh phan cung khac nhau:**

| Thanh phan | Exec Summary (dong ~470) | Section 5.7.1 |
|---|---:|---:|
| Real Options | 4,00 | 3,50 |
| Barrier to Entry | 3,50 | 2,80 |
| Synergy | 2,50 | 2,20 |
| Platform | 5,00 | 4,50 |
| Tax + Land | 3,82 | 4,50 + 1,32 = 5,82 |
| **Tong** | **20,32** | **20,32** |

**Van de:** Tong giong nhau (20,32M) nhung thanh phan khac nhau. Giong nhu "dieu chinh so de tong dung" — mat uy tin. Va gia tri 15,78M o dong 239 hoan toan khong khop voi bat ky phan nao.

**Kien nghi:** Thong nhat 1 bo so lieu duy nhat. Xoa gia tri 15,78M hoac giai thich ro rang tai sao no khac 20,32M.

---

### LOI #4: Bang phan tich 3 kich ban — MAU THUAN giua Exec Summary va Section 5.6.2

**Vi tri:** Dong ~448 (Exec) vs Dong ~4700 (Section 5.6.2)

| Chi so | Exec Summary | Section 5.6.2 |
|---|---|---|
| Conservative NPV | **-3,20M** | **0,50M** |
| Optimistic NPV | **12,80M** | **4,00M** |
| Xac suat Con/Base/Opt | 25%/50%/25% | 30%/50%/20% |
| NPV trong so | **2,73M** | **1,70M** |

**Them vao do, NPV trong so Exec Summary SAI TOAN:**
- 25%×(-3,20) + 50%×1,50 + 25%×12,80 = -0,80 + 0,75 + 3,20 = **3,15M**
- De an ghi: **2,73M** — SAI so voi phep tinh (chenh 0,42M)

**Van de:** 2 bo kich ban hoan toan khac nhau + loi toan hoc. Tham dinh vien se ngay lap tuc mat long tin.

**Kien nghi:** Thong nhat 1 bo kich ban chinh thuc. Su dung Section 5.6.2 lam chuan (bao thu hon, so lieu hop ly hon). Sua lai phep tinh.

---

### LOI #5: BANG CAN DOI KE TOAN Y7 KHONG CAN BANG

**Vi tri:** Dong ~4951 (Section 5.12.1)

| Khoan muc | Y7 |
|---|---:|
| **Tong Tai san** | **43,10M** |
| **Tong No + VCSH** | **29,60M** |
| **CHENH LECH** | **13,50M** |

**Kiem tra:**
- Tai san: TSNH 7,90 + TSCD 34,60 + IP 0,60 = **43,10M**
- No: No NH 1,20 + No DH 0 = 1,20M
- VCSH: Von gop 34,97 + LNGL (-6,57) = 28,40M
- No + VCSH: 1,20 + 28,40 = **29,60M**
- **43,10 ≠ 29,60 → KHONG CAN BANG (thieu 13,50M ben Nguon von)**

**Cac nam khac:**
- Y0: 34,97 = 34,97 (OK)
- Y5: 23,90 = 23,90 (OK)
- Y10: 50,30 = 50,30 (OK)
- Y13: 55,90 = 55,90 (OK)
- Y15: 67,30 = 67,30 (OK)

**Chi Y7 bi loi.** Nguyen nhan co the: TSCD goc Y7 = 40,10M tang qua nhanh tu Y5 (21,60M), +18,50M trong khi CAPEX P2 chi co 8-10M. Hoac LNGL Y7 = -6,57M khong phan anh dung tich luy lo tu Y0-Y7.

**Kien nghi:** Xay lai Balance Sheet Y7 dam bao Tai san = No + VCSH. Kiem tra TSCD goc co phan anh dung CAPEX luy ke. Kiem tra LNGL co phan anh dung P&L luy ke.

---

### LOI #6: LNGL (Loi nhuan giu lai) Y5 = -11,57M KHONG KHOP P&L V2.1

**Vi tri:** Dong ~4951 (Balance Sheet) vs Dong ~4606 (P&L)

**Theo P&L V2.1:**
- Y0-Y4: chi phi quan ly ~0,3-0,5M/nam × 5 nam ≈ -2,0M
- Y5: Net Income = -0,80M
- **Tong luy ke Y0-Y5 ≈ -2,8M**

**Nhung Balance Sheet ghi: LNGL Y5 = -11,57M**

**Chenh lech: ~8,77M** khong co trong P&L.

**Giai thich kha thi:** Con so -11,57M trung khop voi mo hinh cu (Appendix G P&L tong hop: luy ke Net Income 5 nam ≈ -10,55M). Balance Sheet V2.1 dang dung so tu mo hinh cu V1.

**Kien nghi:** Xay lai Balance Sheet hoan toan tu P&L V2.1 va Cash Flow V2.1. Khong copy so tu mo hinh cu.

---

### LOI #7: Financial Dashboard (Muc 5.17) tron lan so lieu V1 va V2.1

**Vi tri:** Dong ~5133 - 5170

**Cac loi cu the:**

| Chi so trong Dashboard | Gia tri ghi | Gia tri dung V2.1 | Ghi chu |
|---|---|---|---|
| EBITDA Margin (Y5) | ~22% | **Am** (Revenue 0,50M, EBITDA < 0) | V1 model |
| Total Headcount (Y5) | 300 | ~75 (IoT ramp-up) | V1 model (Y5 V2.1 chua co CNC/DC) |
| Revenue per Employee (Y5) | ~54,7K (16,40M/300) | 0,50M/75 = 6,7K | 16,40M la tu V1 |
| Contingency (10% CAPEX) | **3,92M** va **4,75M** (2 dong) | 4,75M (10%×47,5M) | Mau thuan noi bo |
| Total Headcount (Y10) | ~150 | ~150-205 | Co the hop ly |

**Van de:** Dashboard la phan cuoi cung co quan nham doc — so lieu sai se anh huong danh gia.

**Kien nghi:** Loai bo cac dong dung so V1. Cap nhat moi chi so theo dung V2.1.

---

### LOI #8: Nhan su "Nam 1" dung so tu mo hinh cu

**Vi tri:** Dong 520-525 (Bang Nhan su + Ghi chu)

**Ghi chu viet:** "Quy luong nam 1 du kien 1.280.000 USD, chiem **173% doanh thu nam 1**"

**Kiem tra:**
- Neu "nam 1" = Y5 (V2.1, Revenue = 0,50M): 1,28/0,50 = **256%** (khong phai 173%)
- Neu "nam 1" = Y6 (V2.1, Revenue = 2,50M): 1,28/2,50 = **51%** (khong phai 173%)
- Neu "nam 1" = Y1 (V1, Revenue = 0,74M): 1,28/0,74 = **173%** ← TRUNG KHOP

**Ket luan:** "Nam 1" trong phan nhan su la tu mo hinh V1 (doanh thu Y1 = 0,74M), khong phai V2.1.

**Them vao do:** Bang nhan su ghi "Nam 1 (ramp-up)" co 75 nguoi gom 24 CNC + 11 DC. Nhung theo V2.1, CNC bat dau Y8 va DC bat dau Y11. Tai Y5/Y6 chua co CNC va DC — lay dau ra 24 tho CNC va 11 nhan vien DC?

**Kien nghi:** Xay lai bang nhan su theo timeline V2.1:
- Y5-Y7: Chi co IoT + quan ly (~30-40 nguoi)
- Y8-Y10: Them CNC (~40-60 nguoi)
- Y11-Y13: Them DC (~20-30 nguoi)
- Y13+: Full ~250-300 nguoi

---

### LOI #9: Bang San pham ghi "on dinh tu nam 7" nhung V2.1 on dinh tu Y13

**Vi tri:** Dong 250 + Dong 271

- **Tieu de bang:** "Giai doan On dinh — Tu nam 4"
- **Ghi chu:** "Doanh thu on dinh (steady-state) dat duoc tu nam thu 7 khi tat ca 3 tru cot hoat dong toi da cong suat"
- **V2.1 Timeline:** DC bat dau Y11, Full 3 BU Steady-state tai **Y13 (2038)**

**Van de:** "Tu nam 7" va "tu nam 4" la tu mo hinh cu noi 3 BU chay dong thoi. Trong V2.1, nam thu 7 (Y7) chi co IoT + CNC bat dau, chua co DC.

**Kien nghi:** Doi tieu de thanh "Giai doan On dinh — Muc tieu sau Y13". Ghi ro: day la cong suat thiet ke, dat duoc tuan tu theo lo trinh V2.1.

---

### LOI #10: Lai suat vay — 3 con so khac nhau

**Vi tri:** Nhieu section

| Vi tri | Lai suat |
|---|---|
| Exec Summary — Bang Cau truc Von | **9,5%** |
| Section 5.1.2 | **8-9%/nam** |
| Section 5.11.1 (Lich tra no) | **8,5%/nam** |
| Section 5.14.4 (WACC detail) | **8,5%** (Kd pre-tax) |
| Section 5.11.2 (tinh lai) | Dung **8,5%** thuc te |

**Kien nghi:** Thong nhat 8,5%/nam xuyen suot. Sua Exec Summary tu "9,5%" thanh "8,5%".

---

## C. LOI TRUNG BINH (MODERATE) — Can lam ro

---

### LOI #11: WACC = 12% nhung tinh ra 13,2% — lam tron XUONG khong bao thu

**Vi tri:** Dong ~5061 (Section 5.14.4)

Section 5.14.4 tinh chi tiet: WACC = 14,7% × 78,6% + 7,65% × 21,4% = **~13,2%**

Nhung su dung **12%** voi ghi chu "Conservative (lower = stricter NPV test)".

**Van de:** Lam tron WACC xuong tu 13,2% ve 12% khong phai la "stricter" — no lam NPV CAO hon (it chiet khau hon). Muon conservative (nghiem ngat) phai dung WACC CAO hon.

Ghi chu trong tai lieu viet: "WACC 12% de NPV test nghiem ngat hon" — dieu nay **SAI VE MAT LOGIC TAI CHINH**. WACC thap hon → NPV cao hon → de an trong "de" hon.

Neu dung WACC 13,2%, NPV 50Y se thap hon 1,50M (co the am).

**Kien nghi:** Su dung WACC 13% hoac 13,2% lam Base Case. Neu muon dung 12%, ghi ro "gia dinh lac quan" chu khong phai "conservative".

---

### LOI #12: Thue CIT — Nam dau co lai la Y8 hay Y9?

**Vi tri:** Section 5.13.2 vs Section 5.4.1

- **Section 5.13.2 (Lich trinh thue):** "Nam dau co lai = Y8" → Mien 4 nam: Y8-Y11
- **Section 5.4.1 (P&L):** Y8 EBIT = 0,00 (hoa von), Y8 EBT = 0,00 → **Y8 khong co lai**. Y9 EBT = 1,02M → **Y9 moi co lai**
- **P&L CIT row:** CIT = 0 tu Y5-Y12, bat dau tinh CIT tu Y13

**Van de:** Neu nam dau co lai = Y9 (khong phai Y8):
- Mien thue 4 nam: Y9-Y12 (khong phai Y8-Y11)
- Giam 50% nen bat dau tu Y13 (van khop P&L)
- Nhung lich trinh thue ghi sai

**Kien nghi:** Sua Section 5.13.2: "Nam dau co lai = **Y9**" (EBIT duong, EBT duong). Mien CIT: Y9-Y12.

---

### LOI #13: Cash Flow table — CAPEX khong khop Phase plan

**Vi tri:** Section 5.5.1

**CF table ghi:**
- Y5: CAPEX = -5.315M, CSH giai ngan = +5.315M
- Y6: CAPEX = -5.315M, CSH giai ngan = +5.315M
- Y7: CAPEX = -8.105M, CSH giai ngan = +8.105M
- Y8: CAPEX = -8.105M, CSH giai ngan = +5.235M

**Nhung Phase plan (Section 5.1.1):**
- P2 (Y5-Y7) CAPEX = 8.130M + WC+loss = 10.630M total
- P3 (Y7-Y10) CAPEX = 16.210M + WC+loss = 19.010M total

**Problem:** CF Y5+Y6 = 5,315 + 5,315 = 10,630M = P2 total (OK, nhung tai sao chia deu 2 nam?). CF Y7+Y8 = 8,105 + 8,105 = 16,210M = P3 CAPEX only (khong gom WC+loss). **Nhung CSH Y8 = 5,235M < CAPEX Y8 = 8,105M** → thieu 2,87M. Gap nay o dau? Revenue reinvest? Khong duoc giai thich.

**Kien nghi:** Them dong "Revenue reinvestment" vao CF table de giai thich source of funds. Hoac them ghi chu.

---

### LOI #14: CAPEX breakdown — Tong phan tram = 109,9% khong phai 100%

**Vi tri:** Section 5.1.1 (dong ~4465)

| Line | So tien (K) | % |
|---|---:|---:|
| Tong CAPEX | ~44.685 | 94,1% |
| Von luu dong WC | 5.500 | 11,6% |
| Du phong lo | 2.000 | 4,2% |
| **Tong** | **~52.185** | **109,9%** |

Nhung bang ghi "Tong nhu cau von = ~47.500" (100%).

**Van de:** 44.685 + 5.500 + 2.000 = 52.185K, KHONG PHAI 47.500K. Chenh 4.685K.

**Giai thich kha thi:** 47.500K = CSH 34.970 + Vay 12.530. Revenue reinvest (~4.685K) bridge gap nhung khong duoc ghi ro.

**Kien nghi:** Lam ro trong bang: "Tong nhu cau von = 52,2M, gom: CSH 35,0M + Vay 12,5M + Revenue reinvest ~4,7M = 52,2M". Hoac: dieu chinh cac dong item de tong = 47,5M thuc te.

---

### LOI #15: Y0-Y4 co 75 nhan su nhung CHUA co co so san xuat

**Vi tri:** Dong 520 (Bang nhan su)

Bang ghi "Nam 1 (ramp-up)" co 75 nguoi: IoT 28, CNC 24, DC 11, Quan ly 12.

**Theo timeline V2.1:**
- Y0-Y2 (P0): Phap ly, thiet ke
- Y2-Y5 (P1): Xay dung shell (chua co thiet bi, chua co day chuyen)
- **Trong 5 nam dau khong co nha may, khong co thiet bi** → 75 nguoi lam gi?

**Kien nghi:** Xay lai bang theo V2.1 timeline. Y0-Y4 chi can 10-15 nguoi (PMO, phap ly, giam sat xay dung). Doi ngu san xuat chi tuyen khi co thiet bi (IoT: Y5, CNC: Y7-Y8, DC: Y10-Y11).

---

### LOI #16: Ten Phase — "Phase 1/Phase 2" (2 pha) vs "P0-P4" (5 pha)

**Vi tri:** Exec Summary CAPEX table (dong ~427) vs Section 5.1.1

Exec Summary chia CAPEX theo tru cot, moi tru cot co "Phase 1" va "Phase 2" (28,90M + 18,60M = 47,50M).

Nhung toan bo Phan V va Phan VIII su dung **P0, P1, P2, P3, P4** (5 giai doan).

**Van de:** "Phase 1/2" cua Exec Summary la gi? Khong co dinh nghia. Lam doc gia nham voi P1/P2 cua Section 5 (hoan toan khac nhau).

**Kien nghi:** Doi ten trong Exec Summary thanh "Dot 1/Dot 2" hoac tham chieu ro den Phase nao trong 5-Phase plan.

---

### LOI #17: Muc luc (TOC) khong khop so section thuc te

**Vi tri:** TOC (dong ~97) vs noi dung

| TOC ghi | Noi dung thuc te |
|---|---|
| 5.1. Tong von Dau tu (CAPEX) | 5.1. Tong quan Cau truc Von |
| 5.2. Cau truc Von | 5.2. Doanh thu Du kien 15 nam |
| 5.3. Ke hoach Doanh thu 10 nam | 5.3. Chi phi Hoat dong (OPEX) |
| 5.4. Bao cao KQKD (P&L) | 5.4. Bao cao Lai lo Du kien (Pro-forma P&L) |
| 5.5. Dong tien (Cash Flow) | 5.5. Dong tien Du kien |
| 5.6. Chi so Tham dinh Dau tu | 5.6. Phan tich Hieu qua Dau tu |
| 5.7. Phan tich Nhay cam | 5.7. Gia tri Chien luoc |
| 5.8. Phan tich Gia tri Chien luoc | 5.8. Phan tich Rui ro Tai chinh |
| 5.9. So sanh De an Goc | 5.9. Ke hoach Giai ngan Von |

**Van de:** Gan nhu TOAN BO section tai chinh bi lenh so. TOC co 9 muc (5.1-5.9) nhung noi dung co 17 muc (5.1-5.17).

**Kien nghi:** Cap nhat TOC theo dung so section trong noi dung.

---

### LOI #18: Doanh thu "nam 1-3 ramp-up = 5-10,5M/nam" — KHONG KHOP V2.1

**Vi tri:** Dong 271 (ghi chu bang san pham)

Ghi chu viet: "Trong giai doan ramp-up (nam 1-3), doanh thu trung binh khoang 5,00-10,50 M USD/nam"

**Theo V2.1 (3 nam dau co doanh thu = Y5, Y6, Y7):**
- Y5: 0,50M
- Y6: 2,50M
- Y7: 5,00M
- **Trung binh: (0,50+2,50+5,00)/3 = 2,67M/nam** — KHONG PHAI 5-10,5M

**Giai thich:** 5-10,5M la tu mo hinh cu (Appendix G: Y3=5,54M, Y4=8,48M, Y5=12,05M).

**Kien nghi:** Sua thanh "Trong giai doan ramp-up (Y5-Y7), doanh thu tang tu 0,50M len 5,00M USD/nam".

---

### LOI #19: Appendix G duoc reference nhung la mo hinh CU

**Vi tri:** Dong 5169 + nhieu noi khac

Section 5.17 viet: "Tat ca so lieu da duoc doi chieu cheo giua Phan V, **Phu luc G (Per-BU Financials)**, Phu luc N (DSCR), va Phu luc O (Strategic Value)."

Nhung Appendix G co ghi chu: "**V2.1 NOTE: Bang P&L per-BU dua tren mo hinh cu (steady-state 10Y, doanh thu tu Y1). Giu lam tai lieu tham chieu unit economics.**"

**Van de:** Phan V noi doi chieu voi Phu luc G nhung G la mo hinh CU. Cac so lieu khong tuong thich.

**Kien nghi:** Tao Appendix G V2.1 moi voi per-BU P&L theo timeline tuan tu. Hoac ghi ro Phu luc G chi co gia tri tham khao unit economics, khong dung de doi chieu.

---

## D. LOI NHE (MINOR) — Nen sua

---

### LOI #20: Contingency — 2 con so khac nhau trong Dashboard

Financial Dashboard (Muc 5.17) co 2 dong:
- "Contingency (10% CAPEX)" = **~3,92M USD**
- "Contingency (10% CAPEX)" = **4,75M USD**

10% × 47,50M = 4,75M (dung). Con 3,92M la tu dong "Du phong phat sinh" trong CAPEX table (3.923K ≈ 8,3% CAPEX).

**Kien nghi:** Xoa 1 trong 2 dong. Giu 1 dong va ghi ro con so.

---

### LOI #21: Dashboard duplicate — EBITDA Margin xuat hien 2 lan voi gia tri khac

- "EBITDA Margin (Y5)" = ~22%
- "EBITDA Margin (Y10)" = ~28%
VA
- "EBITDA Margin (Y10)" = ~25%

Y10 co 2 gia tri: 28% va 25%.

**Kien nghi:** Giu 1 bo EBITDA duy nhat. Y10 nen la ~25% (theo P&L V2.1: EBITDA/Revenue = 3,71/14,50 = 25,6%).

---

### LOI #22: Revenue 10Y per-BU (copilot-instructions) = 103,52M — la mo hinh cu

File `.github/copilot-instructions.md` ghi **"Revenue 10Y (per-BU, Appendix G): 103,52M USD"** nhu so lieu chinh thuc.

Day la so tu V1 model. V2.1 chinh thuc: Revenue 10 nam dau (Y0-Y9, tinh doanh thu tu Y5) = 0+0+0+0+0+0,50+2,50+5,00+8,00+11,50 = **27,50M** (KHONG PHAI 103,52M).

**Kien nghi:** Cap nhat copilot-instructions voi so V2.1. Ghi ro 103,52M la reference cua V1.

---

### LOI #23: copilot-instructions ghi Revenue Y10 = 30,50M, Y15 = 43,00M

File copilot-instructions.md Rule 3 ghi:
- Revenue Y10: **30,50M** USD
- Revenue Y15: **43,00M** USD

V2.1 MASTER ghi:
- Revenue Y10: **14,50M** USD
- Revenue Y15: **32,00M** USD

**Chenh lech KHONG LO:** Y10 gap 16M (2x), Y15 gap 11M.

**Kien nghi:** Cap nhat copilot-instructions theo V2.1 MASTER.

---

### LOI #24-27: Cac loi format/naming nho

| # | Mo ta | Vi tri |
|---|---|---|
| 24 | Ghi chu bang san pham khong dau tieng Viet (dong 263-271) — toi thieu nen nhat quan | Dong 263 |
| 25 | DC vi tri o Tang 1 (Section Thong tin) nhung P3/P4 ghi "Fit-out DC Tang 2" | Dong ~5944 (gantt) vs Dong ~180 |
| 26 | IoT Lab fit-out ghi "Tang 1, 2.000 m2" trong gantt nhung Thong tin Dia diem ghi IoT/SMT o Tang 2 | Dong ~5930 vs Dong 180 |
| 27 | Exec Summary noi "Revenue nam 10" dong thoi ghi 14,5M va vung "30,50M" (theo copilot-instructions) | Cross-reference |

---

## E. PHAN TICH LOGIC 5 NAM DAU KHONG DOANH THU

---

### E.1. Van de chinh: 5 nam "dot tien" lien tuc

**Timeline V2.1:**
- Y0 (2025): Phap ly, thiet ke — chi 2,50M
- Y1-Y2 (2026-2027): Xay dung nen mong, ket cau tang 1 — chi ~5M
- Y3-Y4 (2028-2029): Hoan thien shell, MEP co ban — chi ~5M
- **Tong chi tieu Y0-Y4: ~12,5M (CSH) + chi phi quan ly ~2M = ~14,5M**
- **Doanh thu Y0-Y4: BANG 0**

### E.2. Cau hoi tu goc nhin tham dinh vien

| Cau hoi | Tra loi hien tai trong de an | Danh gia |
|---|---|---|
| 5 nam khong doanh thu, von lay tu dau? | Von CSH 34,97M du cho ca 10 nam | **Hop ly** neu nha dau tu thuc su co 35M |
| Lam sao chung minh co 35M? | Chua co minh chung (tai khoan, chung thu) | **Thieu** — can bo sung |
| Risk 5 nam xay dung bi cham tre? | Co ghi nhan rui ro + 10% contingency | **Chap nhan duoc** nhung contingency thuc te chi 8,3% (3,92M/47,5M) |
| NPV am trong 20 nam dau, co dang lo? | Giai thich la dac thu ha tang, NPV 50Y duong | **Logic dung** nhung NPV 50Y chi 1,5M tren 47,5M CAPEX = **3,2% return** — rat thap |
| Xac suat NPV>0 chi 65%, co du? | De an noi "tinh them Strategic Value thi >90%" | **Loi lap luan**: khong the cong NPV tai chinh + gia tri chien luoc roi noi "xac suat > 90%" — do la 2 metric khac nhau |

### E.3. Van de cu the voi ke hoach 5 nam dau

**1. Nha dau tu phai giu 35M trong 10 nam ma khong thu ve gi:**
- Equity Multiple Y10 = 1,01x (vua hoa von so sach) — sau 10 nam!
- Co hoi chi phi 34,97M × 14,7% (Ke) × 10 nam ≈ 51M mat di
- Khong co co che thoai von som nao thuc te (khong co thanh khoan)

**2. Rui ro xay dung 5 nam la rat lon:**
- Bien dong gia vat lieu xay dung 5 nam (2025-2029): kho du bao
- Thay doi chinh sach KCNC, quy hoach, uu dai thue
- Container "loi hai" cua ty gia USD/VND trong 5 nam
- Thiet bi CNC dat truoc 3 nam (PO Y5) co the loi thoi khi giao (Y8)

**3. Timeline can doanh thu cho CNC (Y8) rat tham vong:**
- PO may CNC tai Q1/2030, delivery ~9 thang → Q4/2030
- Lap dat + commissioning → Q4/2031
- CNC full operation → Y8 (Q1/2032)
- Doanh thu CNC Y8 = 3,00M USD → can co khach hang FDI san sang
- **Van de:** Chua co LOI/MOU nao tu khach hang FDI. Doanh thu CNC hoan toan la gia dinh.

**4. Datacenter Y11 — thi truong se thay doi manh:**
- DC du kien van hanh Y11 (2036). Tu nay den luc do, thi truong DC VN se thay doi hoan toan:
  - NVIDIA GPU lineup se khac (H100 se loi thoi)
  - Pricing model DC/GPU-as-a-Service se khac
  - Doi thu (Viettel, FPT, CMC) se da xay DC tai KCNC
- De an phai linh hoat, khong the lock-in thiet ke DC tu bay gio cho 2036

### E.4. Diem manh cua ke hoach (can ghi nhan)

1. **Tu chu von 100% trong 10 nam:** Giam rui ro tin dung, khong chiu ap luc ngan hang
2. **Vay chi khi co revenue proof:** DSCR > 4x khi bat dau vay — rat an toan
3. **Trien khai tuan tu:** IoT (margin cao, von thap) truoc → CNC → DC. Hop ly ve risk management.
4. **Revenue goc (IoT) bat dau Y6:** Chua qua tre, va IoT la B.U nhe von nhat
5. **Phan ky dau tu (5 Phase):** Cho phep dieu chinh giua cac phase neu thi truong thay doi

---

## F. DE XUAT CAP NHAT CU THE

---

### F.1. Cap nhat KHAN CAP (lam truoc khi nop KCNC)

| TT | Hanh dong | Vi tri | Muc do |
|---:|---|---|:---:|
| 1 | **Loai bo bang cau truc von 4 nguon** (CSH 23,1M + Vay 14,7M + Thue TC 6,2M + Tai tro 3,5M). Giu bang 2 nguon (CSH 34,97M + Vay 12,53M) | Exec Summary, dong ~435 | CRITICAL |
| 2 | **Sua gia tri chien luoc 15,78M thanh 20,32M** (hoac giai thich 2 con so) | Exec Summary, dong 239 | CRITICAL |
| 3 | **Thong nhat 1 bo 3 kich ban** — su dung Section 5.6.2 (Con: 0,5M / Base: 1,5M / Opt: 4,0M) | Exec Summary, dong ~448 | CRITICAL |
| 4 | **Sua phep tinh NPV trong so** — tinh lai DUNG phep toan | Exec Summary, dong ~452 | CRITICAL |
| 5 | **Sua Balance Sheet Y7** cho can bang (43,1M = 43,1M) | Section 5.12.1 | CRITICAL |
| 6 | **Xay lai LNGL toan bo Balance Sheet** theo P&L V2.1 | Section 5.12.1 | CRITICAL |
| 7 | **Dong bo bang san pham voi tai chinh** — ghi ro 44,7M/nam la full capacity, V2.1 steady-state = 32M | Exec Summary, dong 250-269 | CRITICAL |
| 8 | **Thong nhat lai suat vay = 8,5%** xuyen suot | Nhieu noi | CRITICAL |
| 9 | **Cap nhat Financial Dashboard** chi dung so V2.1 | Section 5.17 | CRITICAL |
| 10 | **Xay lai bang nhan su** theo timeline V2.1 (5 Phase) | Exec Summary, dong 517 | CRITICAL |

### F.2. Cap nhat QUAN TRONG (lam ngay sau do)

| TT | Hanh dong | Vi tri | Muc do |
|---:|---|---|:---:|
| 11 | Sua ghi chu "WACC 12% conservative" → ghi ro WACC thuc 13,2%, dung 12% la gia dinh lac quan | Section 5.14.4 | MODERATE |
| 12 | Sua nam dau co lai = Y9 (khong phai Y8) trong lich trinh thue | Section 5.13.2 | MODERATE |
| 13 | Lam ro trong CF table: nguon von cho gap CSH < CAPEX (revenue reinvest?) | Section 5.5.1 | MODERATE |
| 14 | Sua phan tram CAPEX table de tong = 100% | Section 5.1.1 | MODERATE |
| 15 | Cap nhat TOC cho khop section so thuc te | Muc luc | MODERATE |
| 16 | Tao Appendix G V2.1 (per-BU theo timeline V2.1) hoac ghi ro G chi la V1 reference | Appendix G | MODERATE |
| 17 | Doi ten "Phase 1/2" trong Exec CAPEX table de khong nham voi P0-P4 | Exec Summary, dong ~427 | MODERATE |
| 18 | Sua ghi chu ramp-up "5-10,5M/nam" thanh so V2.1 | Dong 271 | MODERATE |
| 19 | Bo sung nhan su Y0-Y4 thuc te (PMO 10-15 nguoi, khong co SX) | Section nhan su | MODERATE |

### F.3. Cap nhat BO SUNG (tuy chon)

| TT | Hanh dong | Vi tri | Muc do |
|---:|---|---|:---:|
| 20 | Sua 2 dong contingency trung lap trong Dashboard | Section 5.17 | MINOR |
| 21 | Sua EBITDA duplicate trong Dashboard | Section 5.17 | MINOR |
| 22 | Cap nhat copilot-instructions.md voi so V2.1 | .github/ | MINOR |
| 23 | Sua DC / IoT floor assignment cho nhat quan | Nhieu noi | MINOR |
| 24 | Them tieng Viet dau cho ghi chu bang san pham | Dong 263-271 | MINOR |

---

## G. BANG TONG HOP LOI VA MUC DO UU TIEN

| # | Mo ta tom tat | Muc do | Section | Trang thai |
|---:|---|:---:|---|:---:|
| 1 | Doanh thu san pham 44,7M vs tai chinh 32M | CRITICAL | Exec Summary | Chua sua |
| 2 | 2 cau truc von khac nhau (4 nguon vs 2 nguon) | CRITICAL | Exec Summary | Chua sua |
| 3 | Gia tri chien luoc 15,78M vs 20,32M | CRITICAL | Exec Summary | Chua sua |
| 4 | 3 kich ban khac nhau + sai toan | CRITICAL | Exec Summary vs 5.6.2 | Chua sua |
| 5 | Balance Sheet Y7 khong can bang (gap 13,5M) | CRITICAL | Section 5.12 | Chua sua |
| 6 | LNGL Y5 = -11,57M khong khop P&L V2.1 | CRITICAL | Section 5.12 | Chua sua |
| 7 | Financial Dashboard tron V1 va V2.1 | CRITICAL | Section 5.17 | Chua sua |
| 8 | Nhan su "nam 1" dung so V1 | CRITICAL | Exec Summary | Chua sua |
| 9 | "On dinh tu nam 7" la V1, V2.1 on dinh Y13 | CRITICAL | Exec Summary | Chua sua |
| 10 | Lai suat vay 3 con so (9,5% / 8-9% / 8,5%) | CRITICAL | Nhieu noi | Chua sua |
| 11 | WACC 12% khong phai conservative | MODERATE | Section 5.14 | Chua sua |
| 12 | Nam dau co lai Y8 vs Y9 | MODERATE | Section 5.13 | Chua sua |
| 13 | CF table gap khong giai thich | MODERATE | Section 5.5 | Chua sua |
| 14 | CAPEX table phan tram = 109,9% | MODERATE | Section 5.1 | Chua sua |
| 15 | 75 nhan su Y0-Y4 khi chua co nha may | MODERATE | Exec Summary | Chua sua |
| 16 | Phase naming confusion | MODERATE | Exec Summary | Chua sua |
| 17 | TOC khong khop section thuc te | MODERATE | Muc luc | Chua sua |
| 18 | Ramp-up 5-10,5M la V1 | MODERATE | Dong 271 | Chua sua |
| 19 | Appendix G la V1 nhung duoc reference nhu V2.1 | MODERATE | Nhieu noi | Chua sua |
| 20 | Dashboard 2 dong contingency | MINOR | Section 5.17 | Chua sua |
| 21 | Dashboard EBITDA duplicate | MINOR | Section 5.17 | Chua sua |
| 22 | copilot-instructions so cu | MINOR | .github/ | Chua sua |
| 23 | DC/IoT floor assignment mau thuan | MINOR | Nhieu noi | Chua sua |
| 24 | Ghi chu khong dau tieng Viet | MINOR | Dong 263 | Chua sua |

---

## KET LUAN

De an V2.1 co **y tuong chien luoc tot** (5 Phase, tu chu von, trien khai tuan tu, vay khi co revenue proof). **Tuy nhien, tai lieu hien tai lam nguoi doc mat long tin vi:**

1. **Tron lan 2 mo hinh tai chinh** (V1 steady-state vs V2.1 sequential) tao ra mau thuan so lieu khap noi
2. **Balance Sheet Y7 khong can bang** — loi co ban nhat cua tai chinh
3. **Executive Summary — phan quan trong nhat** — co toi 6/10 loi CRITICAL
4. **NPV chi 1,5M tren 47,5M von (3,2% return)** phai duoc giai thich tot hon, khong duoc "giau" bang WACC 12%

**Khuyen nghi:** Truoc khi nop Ban QL KCNC, can:
- Xay lai TOAN BO phan tai chinh tu 1 mo hinh duy nhat (V2.1)
- Loai bo hoac danh dau RO RANG moi so lieu V1 con ton dong
- Kiem tra toan hoc lai tat ca phep tinh
- Nho mot ben thu 3 (kiem toan / tu van tai chinh) review truoc khi nop

---

*Bao cao nay duoc thuc hien dua tren doc nguon goc master file DE_AN_MEKONG_V2/MEKONG_DE_AN_V2_MASTER.md (15.946 dong). Moi loi deu co dan chieu dong cu the.*
