# AGENT RULES — DU AN MEKONG TECHNOLOGY

> Tai lieu nay la kim chi nam cho moi agent lam viec voi du an Mekong Technology.
> Ap dung cho TAT CA tac vu: viet tai lieu, tong hop, phan tich, kiem tra.

---

## 0. QUY TAC FILE NGUON — UU TIEN CAO NHAT

> **RULE NÀY ÁP DỤNG TRƯỚC MỌI RULE KHÁC.**
> Nguyen nhan: Du an co nhieu ban sao file master o cac vi tri khac nhau.
> Agent PHAI doc DUNG file tu DUNG folder de tranh sai sot.

### 0.1 FILE MASTER CHINH THUC (CANONICAL)

| File | Duong dan | Trang thai |
|------|-----------|------------|
| **MASTER V2.1** | `DE_AN_MEKONG_V2/MEKONG_DE_AN_V2_MASTER.md` | **CHINH THUC — LUON DOC FILE NAY** |
| Ban sao root | `MEKONG_DE_AN_V2_MASTER.md` (goc repo) | **CAM DOC — day la ban sao, khong phai nguon** |

### 0.2 THU TU UU TIEN FOLDER

1. **`DE_AN_MEKONG_V2/`** — Folder chinh thuc chua master file V2.1 va cac file ho tro
2. **`HO_SO_MO_RONG_REVIEW/`** — Cac file phan tich mo rong, tham khao bo sung
3. **`TAI_LIEU_GOC/`** — Tai lieu goc theo danh muc (tai chinh, moi truong, phap ly...)
4. **`TRINH_BAY_KCNC/`** — Tai lieu trinh bay cho KCNC

### 0.3 QUY TAC XAC MINH FILE

- **TRUOC KHI DOC**: Kiem tra duong dan file bat dau bang `DE_AN_MEKONG_V2/`
- Neu co nhieu ban sao cung ten, **LUON chon ban trong `DE_AN_MEKONG_V2/`**
- Neu agent doc file tu thu muc goc (root), dung lai va chuyen sang `DE_AN_MEKONG_V2/`
- Khi bao cao cho user, LUON ghi ro duong dan day du cua file da doc

### 0.4 THONG SO MASTER FILE

- File: `DE_AN_MEKONG_V2/MEKONG_DE_AN_V2_MASTER.md`
- So dong: 15.946
- Dung luong: ~1 MB
- Phien ban: V2.1 (1 ha / 5 Phases / 15 nam dau tu)
- Cau truc: Part I-IX (noi dung chinh) + 44 Phu luc A-RR

---

## 1. QUY TRINH BAT BUOC (6 BUOC)

### Buoc 1: KIEM KE (INVENTORY)
- Liet ke TAT CA file nguon (ten, duong dan, so dong, dung luong)
- Phan loai: file GOC vs file TRUNG GIAN vs file TOM TAT
- Xac dinh tong so dong dau vao

### Buoc 2: DOC TOAN BO (FULL READ)
- Doc TOAN BO moi file nguon — KHONG duoc doc 200 dong roi dung
- Ghi nhan cau truc cua tung file (so chuong, so bang, so hinh)
- Danh dau cac so lieu quan trong can doi chieu

### Buoc 3: PHAN TICH (ANALYZE)
- Tao section map: file nguon nao → section nao trong output
- Uoc tinh so dong dau ra cho tung section
- Tinh tong so dong dau ra du kien — kiem tra >= 60% dau vao

### Buoc 4: XAC NHAN (CONFIRM)
- Trinh bay bang kiem ke + ke hoach cho user
- Cho user xac nhan TRUOC KHI bat dau viet
- Ghi nhan moi yeu cau dieu chinh tu user

### Buoc 5: VIET (WRITE)
- Viet theo batch (toi da 500 dong/batch)
- Moi batch phai ghi ro: "Batch X/Y — Section Z — XXX dong"
- Sau moi 5 batch: dem lai tong so dong, bao cao tien do

### Buoc 6: KIEM TRA (VERIFY)
- Dem so dong thuc te
- So sanh voi muc tieu da cam ket
- Grep kiem tra so lieu nhat quan
- Grep kiem tra khong co emoji
- Xac nhan moi muc trong muc luc deu co noi dung

---

## 2. QUY TAC DU LIEU

### 2.1 Nhan du lieu
- **[C] = Calculated**: So lieu tinh toan — ghi cong thuc
- **[B] = Benchmarked**: So lieu tham chieu — ghi nguon
- **[A] = Assumed**: So lieu gia dinh — ghi ly do

### 2.2 So lieu co dinh du an Mekong (theo V2.1 MASTER)

> **CHU Y**: Cac so lieu duoi day lay tu `DE_AN_MEKONG_V2/MEKONG_DE_AN_V2_MASTER.md` V2.1.
> Neu copilot-instructions.md hoac file khac co so lieu KHAC — uu tien so lieu trong bang nay.

| Chi tieu | Gia tri (V2.1) | Nhan | Ghi chu |
|----------|----------------|------|---------|
| CAPEX | 47,50M USD | [C] | Tong 5 phase |
| NPV (50Y, WACC 12%) | 1,50M USD | [C] | Part V master |
| IRR (50Y) | 13,0% | [C] | Part V master |
| Revenue Y10 | 30,50M USD | [C] | 20Y forecast |
| Revenue Y15 | 43,00M USD | [C] | 20Y forecast |
| Revenue 10Y (per-BU) | 103,52M USD | [C] | Appendix G |
| Strategic Value | 20,32M USD | [C] | Appendix O |
| Von CSH | 34,97M USD | [C] | 73,6% tong von |
| No vay (tu Y10) | 12,53M USD | [C] | @ 8,5%/nam |
| Dien tich | 1 ha (10.000 m2) | [A] | V2.1 = 1 ha |
| Thoi gian | 50 nam | [A] | 01/2025-12/2075 |
| Nhan su Y15 | ~300 nguoi | [C] | Part VII |
| P(NPV>0) Monte Carlo | 65% | [C] | Appendix U |

### 2.3 Nguon du lieu uu tien

1. `DE_AN_MEKONG_V2/MEKONG_DE_AN_V2_MASTER.md` — **UU TIEN CAO NHAT** (canonical)
2. File GOC trong `TAI_LIEU_GOC/` — UU TIEN CAO (tai lieu goc theo danh muc)
3. File phan tich trong `HO_SO_MO_RONG_REVIEW/` — THAM KHAO BO SUNG
4. File root-level — **CAM DOC** neu co ban sao trong `DE_AN_MEKONG_V2/`

---

## 3. QUY TAC DINH DANG

- **KHONG EMOJI** trong tai lieu chinh thuc
- **Tieng Viet trang trong**, phong cach co quan nha nuoc
- **Dau phay thap phan** kieu Viet: 47,50M (KHONG phai 47.50M)
- **Don vi** luon ghi ro: USD, m2, MW, kWh, tan/nam, v.v.
- **Bang bieu** dung markdown table, co tieu de cot ro rang
- **Muc luc** tu dong tu noi dung thuc te — KHONG viet muc luc truoc

---

## 4. QUY TAC TONG HOP NHIEU FILE

Khi tong hop nhieu file thanh 1 tai lieu:

### 4.1 KHONG duoc
- Bo qua bat ky section nao tu file nguon
- Tom tat 1 trang thanh 1 cau
- Dung "nhu da trinh bay o tren" de thay the noi dung
- Gop 5 muc rieng biet thanh 1 muc chung chung
- Dung file trung gian/tom tat lam nguon chinh

### 4.2 PHAI lam
- Doc TOAN BO file nguon GOC
- Moi section nguon → co section tuong ung trong output
- Do sau section output >= 50% section nguon
- Tong output >= 60% tong input
- Giu nguyen toan bo bang bieu, so lieu, cong thuc

---

## 5. DIEU KIEN DUNG LAI VA HOI USER

Agent PHAI dung lai va hoi user khi:
- So lieu mau thuan giua cac file nguon
- Khong ro user muon tom tat hay giu nguyen chi tiet
- Khong du thong tin de viet 1 section
- Output dang qua ngan so voi input (< 50%)
- Gap van de ky thuat khong the tu giai quyet
- Can quyet dinh ve cau truc tai lieu

---

## 6. BAI HOC TU DU AN MEKONG (KHONG LAP LAI)

### Loi 1: Chi doc 200 dong V1 lam "style reference"
- **Hau qua**: Mat 90% noi dung
- **Khac phuc**: Luon doc TOAN BO file nguon

### Loi 2: Dung file trung gian lam nguon chinh
- **Hau qua**: Output la "tom tat cua tom tat"
- **Khac phuc**: Luon doc file GOC, file trung gian chi de tham khao

### Loi 3: Khong kiem tra ty le output/input
- **Hau qua**: V2 (1.664 dong) chi bang 14% V1 (11.524 dong) du cover 3x scope
- **Khac phuc**: Luon tinh ty le, dam bao >= 60%

### Loi 4: Khong trinh bang kiem ke cho user xac nhan
- **Hau qua**: User khong biet agent dang lam gi, chi phat hien loi khi da xong
- **Khac phuc**: Luon trinh bang kiem ke + ke hoach TRUOC KHI viet

---

*Cap nhat lan cuoi: 2025-10-20*
*Phien ban: 1.0*
