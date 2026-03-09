# COPILOT INSTRUCTIONS — DU AN MEKONG TECHNOLOGY

> File nay duoc VS Code Copilot tu dong doc moi phien lam viec.
> Muc dich: Dam bao agent KHONG BAO GIO lap lai loi cu — viet tai lieu so sai, thieu noi dung, khong doc nguon goc.

---

## RULE 0: FILE NGUON CHINH THUC (CANONICAL SOURCE)

> **DAY LA RULE QUAN TRONG NHAT — AP DUNG TRUOC MOI RULE KHAC.**

### File Master duy nhat:
- **DUNG**: `DE_AN_MEKONG_V2/MEKONG_DE_AN_V2_MASTER.md` (15.946 dong, ~1MB, V2.1, 44 phu luc A-RR)
- **SAI**: `MEKONG_DE_AN_V2_MASTER.md` (file o root — BAN SAO, KHONG DOC)

### Thu tu uu tien folder:
1. `DE_AN_MEKONG_V2/` — Folder CHINH THUC chua master V2.1
2. `HO_SO_MO_RONG_REVIEW/` — File phan tich mo rong (tham khao)
3. `TAI_LIEU_GOC/` — Tai lieu goc theo danh muc
4. `TRINH_BAY_KCNC/` — Tai lieu trinh bay KCNC

### Quy tac:
- TRUOC KHI doc bat ky file nao, xac nhan duong dan bat dau bang `DE_AN_MEKONG_V2/`
- Neu co 2 file cung ten o 2 folder → LUON chon file trong `DE_AN_MEKONG_V2/`
- Khi bao cao, LUON ghi ro duong dan day du file da doc
- Xem them: `AGENT_RULES.md` Section 0 de biet chi tiet

---

## RULE 1: KIEM KE DU LIEU DAU VAO (INPUT INVENTORY)

- Truoc khi bat dau BAT KY tac vu tong hop/viet tai lieu nao, agent PHAI:
  1. Liet ke TAT CA file nguon (ten file, so dong, dung luong)
  2. Doc TOAN BO noi dung cac file nguon (KHONG duoc doc 200 dong roi ngung)
  3. Trinh bay bang kiem ke cho user xac nhan truoc khi viet

- **CAM**: Dung file trung gian/tom tat lam nguon chinh. Luon doc file GOC.

---

## RULE 2: TY LE DAU RA TUONG XUNG (OUTPUT PROPORTIONALITY)

- Cong thuc: **Dau ra >= 60% tong dau vao**
- Vi du: Neu tong input = 26.000 dong → output toi thieu 15.600 dong
- Neu dau ra < 50% dau vao → DUNG LAI, bao cao user, hoi co tiep tuc khong
- KHONG BAO GIO tom tat 1.000 dong thanh 50 dong ma khong co ly do chinh dang

---

## RULE 3: DOI CHIEU SO LIEU (CROSS-CHECK)

- Moi so lieu tai chinh phai xuat hien NHAT QUAN trong toan bo tai lieu.
- So lieu CHINH THUC lay tu `DE_AN_MEKONG_V2/MEKONG_DE_AN_V2_MASTER.md` V2.1:
  - CAPEX: 47,50M USD
  - NPV (50Y, WACC 12%): 1,50M USD
  - IRR (50Y): 13,0%
  - Revenue Y10: 30,50M USD
  - Revenue Y15: 43,00M USD
  - Revenue 10Y (per-BU, Appendix G): 103,52M USD
  - Strategic Value (Appendix O): 20,32M USD
  - Von CSH: 34,97M USD (73,6%)
  - No vay: 12,53M USD (tu Y10, @ 8,5%)
  - Dien tich: 1 ha (10.000 m2)
  - P(NPV>0) Monte Carlo: 65%
- Sau khi viet xong, chay grep kiem tra TUNG con so tren
- Neu phat hien bat nhat quan → sua NGAY, khong doi user phat hien

---

## RULE 4: DINH DANG TAI LIEU CHINH THUC

- **KHONG EMOJI** — Tuyet doi khong dung emoji trong tai lieu chinh thuc
- **Ngon ngu**: Tieng Viet trang trong, phong cach van ban trinh co quan nha nuoc
- **Dinh dang so**: Dung dau phay thap phan kieu Viet (47,50M — KHONG phai 47.50M)
- **Don vi**: Luon ghi ro don vi (USD, m2, MW, kWh, v.v.)
- **Muc luc**: Tu dong tao tu noi dung thuc te, KHONG viet muc luc truoc roi dien noi dung sau

---

## RULE 5: NHAN DU LIEU [C] / [B] / [A]

- **[C] = Calculated**: So lieu tinh toan tu cong thuc (ghi ro cong thuc)
- **[B] = Benchmarked**: So lieu tham chieu tu thi truong (ghi ro nguon)
- **[A] = Assumed**: So lieu gia dinh (ghi ro ly do gia dinh)
- Ap dung cho TAT CA so lieu trong phan tai chinh va ky thuat
- User co the truy vet bat ky so nao ve nguon goc cua no

---

## RULE 6: XAC MINH TRUOC KHI HOAN THANH

- Truoc khi bao "hoan thanh", agent PHAI:
  1. Dem so dong thuc te (dung wc -l hoac tuong duong)
  2. So sanh voi muc tieu da cam ket
  3. Grep kiem tra so lieu nhat quan
  4. Grep kiem tra khong co emoji
  5. Xac nhan TẤT CẢ phan trong muc luc deu co noi dung tuong ung
- Neu bat ky buoc nao FAIL → sua truoc khi bao hoan thanh

---

## RULE 7: KHONG LUOC BO NOI DUNG

- Khi tong hop nhieu file thanh 1, KHONG duoc:
  - Bo qua bat ky section nao tu file nguon
  - Tom tat 1 trang thanh 1 cau
  - Dung cum tu "nhu da trinh bay" de thay the noi dung thuc
  - Gop 5 muc thanh 1 muc chung chung
- Moi section tu file nguon phai co section tuong ung trong file dau ra
- Do sau toi thieu: Moi section dau ra >= 50% so dong section nguon tuong ung

---

## RULE 8: HỎI KHI KHONG CHAC CHAN

- Neu gap bat ky tinh huong nao sau:
  - So lieu mau thuan giua cac file nguon
  - Khong ro user muon tom tat hay giu nguyen chi tiet
  - Khong du thong tin de viet 1 section
  - Output dang qua ngan so voi input
- → **DUNG LAI VA HOI USER**. Khong doan, khong tu quyet dinh.

---

## THONG TIN DU AN MEKONG

| Thong tin | Gia tri |
|-----------|---------|
| Ten | Mekong Technology Hub |
| Dia diem | Lo E2-03, Duong D1, KCNC TP.HCM |
| Dien tich | 1 ha (10.000 m2) — V2.1 |
| CAPEX | 47,50M USD (5 phases / 15 nam) |
| 3 B.U | IoT/Robot, CNC Outsourcing, Datacenter |
| Nha dau tu | Cong ty TNHH Mekong Technology |
| Thoi gian | 50 nam (01/2025-12/2075) |
| Master file | DE_AN_MEKONG_V2/MEKONG_DE_AN_V2_MASTER.md |

---

*Cap nhat lan cuoi: 2025-10-20*
*Ly do tao file: Khac phuc loi agent viet V2 chi 1.664 dong tu input 26.000+ dong*
