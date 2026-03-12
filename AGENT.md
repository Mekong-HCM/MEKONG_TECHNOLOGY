# AGENT.md — Huong Dan AI Agent Lam Viec Voi MASTER File

> Muc dich: Giup AI agent NHANH CHONG tim, doc, va CHINH SUA an toan file de an.
> Ap dung cho: ChatGPT, Claude, Copilot, Cursor, va moi LLM-based coding agent.
> Cap nhat: 2026-03-11

---

## 1. FILE CHINH THUC (CANONICAL SOURCE)

| Muc | Gia tri |
|-----|---------|
| **File MASTER** | `DE_AN_MEKONG_V2/MEKONG_DE_AN_V2_MASTER.md` |
| **So dong** | ~15.905 |
| **Dung luong** | ~0,82 MB |
| **Encoding** | UTF-8 (co BOM) |
| **Ngon ngu** | Tieng Viet (Unicode) |
| **Phien ban** | V2.1 — Phuong an 1 ha / 5 Phase / 15 nam |

### CAM
- **KHONG DOC** file `MEKONG_DE_AN_V2_MASTER.md` o thu muc goc (root) — do la BAN SAO cu.
- **KHONG DOC** file `MEKONG_DE_AN_V2_MASTER_BACKUP_47M.md` — do la backup.

### Thu tu uu tien folder
1. `DE_AN_MEKONG_V2/` — CHINH THUC
2. `HO_SO_MO_RONG_REVIEW/` — Tham khao mo rong
3. `TAI_LIEU_GOC/` — Tai lieu goc theo danh muc
4. `TRINH_BAY_KCNC/` — Tai lieu trinh bay

---

## 2. BAN DO FILE (LINE MAP)

> Dung bang nay de nhay thang den phan can doc/sua.
> Dinh dang: `Dong bat dau — Dong ket thuc : Ten phan`

### 2.1. Phan chinh (Part I–IX)

```
Dong 1–52       : Trang bia, thong tin chung
Dong 53–160     : MUC LUC TONG THE
Dong 161–282    : THONG TIN DU AN (tong quan, dia diem, dau tu, phan ky, chi so tai chinh, san pham)
Dong 283–550    : TOM TAT DIEU HANH (Executive Summary)
Dong 551–601    : CO SO PHAP LY CUA DE AN
Dong 602–1346   : PHAN I — BOI CANH VA THI TRUONG (1.1–1.11)
Dong 1347–2889  : PHAN II — SAN PHAM VA CONG NGHE (2.1–2.10)
Dong 2890–3600  : PHAN III — MO HINH KINH DOANH (3.1–3.13)
Dong 3601–4440  : PHAN IV — HA TANG KY THUAT (4.1–4.10)
Dong 4441–5151  : PHAN V — TAI CHINH VA DAU TU (5.1–5.17)
Dong 5152–5558  : PHAN VI — PHAP LY, MOI TRUONG, AN TOAN (6.1–6.6)
Dong 5559–5876  : PHAN VII — TO CHUC NHAN SU (7.1–7.6)
Dong 5877–6152  : PHAN VIII — KE HOACH TRIEN KHAI (8.1–8.4)
Dong 6153–6399  : PHAN IX — KET LUAN VA KIEN NGHI (9.1–9.8)
```

### 2.2. Phu luc (A–RR)

```
Dong 6400–6403  : Trang bia phu luc
Dong 6404–6568  : PHU LUC A — Bang tinh tai chinh chi tiet
Dong 6569–6653  : PHU LUC B — Phan tich thi truong chi tiet
Dong 6654–6798  : PHU LUC C — Mau van ban phap ly
Dong 6799–6860  : PHU LUC D — Danh muc may moc thiet bi
Dong 6861–6877  : PHU LUC E — Thong tin lien he va co quan phoi hop
Dong 6878–6919  : PHU LUC F — Bang doi chieu so lieu
Dong 6920–7486  : PHU LUC G — Mo hinh tai chinh theo tung B.U (Ion, CNC, DC)
Dong 7487–7696  : PHU LUC H — Danh muc san pham chi tiet (Product Catalog)
Dong 7697–7735  : PHU LUC I — Bang tong hop gia dinh
Dong 7736–7765  : PHU LUC J — Tong hop chi so dau tu
Dong 7766–7815  : PHU LUC K — Danh muc tai lieu tham khao
Dong 7816–8649  : PHU LUC L — Thiet ke ha tang M&E chi tiet
Dong 8650–8922  : PHU LUC M — Phan tich thi truong CNC chi tiet
Dong 8923–9055  : PHU LUC N — DSCR va cau truc no chi tiet
Dong 9056–9119  : PHU LUC O — Danh gia gia tri chien luoc
Dong 9120–9701  : PHU LUC P — Mo hinh doanh thu CNC Outsourcing chi tiet
Dong 9702–10124 : PHU LUC Q — Thiet ke xuong CNC toi uu va danh muc thiet bi
Dong 10125–11073: PHU LUC R — Bao cao EIA (Danh gia tac dong moi truong) — 3 khoi
Dong 11074–11465: PHU LUC S — Van hanh Datacenter MACC — ky thuat va thuong mai
Dong 11466–11811: PHU LUC T — San pham IoT/Robot — thong so ky thuat chi tiet
Dong 11812–12060: PHU LUC U — Phan tich rui ro tong hop va do nhay
Dong 12061–12415: PHU LUC V — Quan tri doanh nghiep va he thong van hanh
Dong 12416–12582: PHU LUC W — Benchmarking canh tranh va thi truong ASEAN
Dong 12583–12708: PHU LUC X — Ke hoach marketing va ban hang chi tiet
Dong 12709–12922: PHU LUC Y — Chi tiet xay dung va cong trinh
Dong 12923–13050: PHU LUC Z — Mau hop dong va khung phap ly
Dong 13051–13258: PHU LUC AA — Chuoi cung ung va mua sam
Dong 13259–13424: PHU LUC BB — Hoc vien dao tao va quan ly tri thuc
Dong 13425–13620: PHU LUC CC — He thong quan ly chat luong tich hop (QMS)
Dong 13621–13810: PHU LUC DD — Lo trinh chuyen doi so va Cong nghiep 4.0
Dong 13811–13989: PHU LUC EE — Dong tien chi tiet va mo hinh tai chinh mo rong
Dong 13990–14203: PHU LUC FF — Quan ly du an va PMO
Dong 14204–14342: PHU LUC GG — Chien luoc khach hang va CRM
Dong 14343–14483: PHU LUC HH — Ke hoach van hanh va bao tri
Dong 14484–14601: PHU LUC II — Chien luoc xuat khau va thi truong quoc te
Dong 14602–14731: PHU LUC JJ — Danh gia tac dong kinh te - xa hoi
Dong 14732–14841: PHU LUC KK — Quan ly nuoc va chat thai toan dien
Dong 14842–14965: PHU LUC LL — Ke hoach phat trien mo rong Phase 2-3
Dong 14966–15077: PHU LUC MM — Bang tong hop chi so toan du an (KPI Dashboard)
Dong 15078–15240: PHU LUC NN — Chi tiet ky thuat thiet bi & Datasheet
Dong 15241–15401: PHU LUC OO — Chien luoc thoai von & quan he nha dau tu
Dong 15402–15544: PHU LUC PP — An toan lao dong & ung pho khan cap
Dong 15545–15680: PHU LUC QQ — Quan ly du an va PMO (bo sung)
Dong 15681–15820: PHU LUC RR — Ke hoach van hanh va bao tri (bo sung)
Dong 15821–15905 : BANG TONG KET TAI LIEU (Document Summary)
```

### 2.3. Quick-Find theo Chu de

| Chu de | Tim o dau | Dong (uoc tinh) |
|--------|-----------|-----------------|
| CAPEX tong | Thong tin Du an → Bang "Thong tin Dau tu" | 196–208 |
| CAPEX theo phase | Phan ky Dau tu | 220–234 |
| CAPEX theo B.U chi tiet | Phu luc G (G.13) | 7396–7486 |
| NPV, IRR, Payback | Muc 5.6 + Bang chi so tham dinh | 4669–4727 |
| Doanh thu 15 nam | Muc 5.2 | 4503–4540 |
| Doanh thu 20 nam theo tru cot | Muc 3.13 | 3565–3600 |
| P&L Pro-forma | Muc 5.4 + Phu luc A.2 | 4579–4617, 6462–6494 |
| Dong tien (Cash Flow) | Muc 5.5 + Phu luc EE | 4618–4668, 13811–13989 |
| Cau truc von (CSH vs Vay) | Muc 5.1.2, 5.1.3 | 4445–4502 |
| Gia tri chien luoc | Muc 5.7 + Phu luc O | 4728–4747, 9056–9119 |
| DSCR, no vay | Muc 5.11 + Phu luc N | 4852–4902, 8923–9055 |
| Monte Carlo, rui ro | Phu luc U | 11812–12060 |
| Do nhay (Sensitivity) | Muc G.10 + Phu luc U | 7216–7290, 11812+ |
| San pham IoT/Robot | Muc 2.2 + Phu luc T | 1370–1700, 11466–11811 |
| San pham CNC | Muc 2.3 + Phu luc P, Q | 1700–2129, 9120–10124 |
| San pham Datacenter | Muc 2.4 + Phu luc S | 2130–2234, 11074–11465 |
| Pricing (gia) | Muc 3.5 + 3.11 | 3059–3141, 3457–3525 |
| Unit Economics | Muc 3.6 | 3142–3262 |
| Tong mat bang | Muc 4.1 | 3605–3696 |
| M&E / Dien / Nuoc / PCCC | Muc 4.5–4.9 + Phu luc L | 3947–4177, 7816–8649 |
| Phap ly | Phan VI + Phu luc C, D | 5152–5558, 6654–6860 |
| Nhan su | Phan VII | 5559–5876 |
| EIA (Moi truong) | Muc 6.5 + Phu luc R | 5280–5400, 10125–11073 |
| Xay dung, cong trinh | Phu luc Y | 12709–12922 |
| Mau hop dong | Phu luc Z | 12923–13050 |
| KPI Dashboard | Phu luc MM | 14966–15077 |

---

## 3. SO LIEU CO DINH (KHONG DUOC THAY DOI TUY TIEN)

> Cac so lieu nay la NGUON SU THAT. Khi chinh sua bat ky phan nao, PHAI dam bao nhat quan.

| Chi tieu | Gia tri | Nhan | Vi tri trong file |
|----------|---------|------|-------------------|
| CAPEX tong | 47,50M USD | [C] | Dong ~196, ~430 |
| Von CSH | 34,97M USD (73,6%) | [C] | Dong ~443 |
| Von vay (tu Y10) | 12,53M USD @ 8,5% | [C] | Dong ~444 |
| NPV (50Y, WACC 12%) Base | 1,50M USD | [C] | Dong ~453 |
| IRR (50Y) Base | 13,0% | [C] | Dong ~454 |
| Payback (chiet khau) | 13 nam | [C] | Dong ~463 |
| Revenue Y10 | 14,50M USD | [C] | Dong ~235+ |
| Revenue Y15 | 32,00M USD | [C] | Dong ~235+ |
| Revenue 15Y tich luy | ~165M USD | [C] | Dong ~466 |
| EBITDA steady-state | ~28-30% | [C] | Dong ~467 |
| Gia tri Chien luoc | 20,32M USD | [C] | Dong ~468, Phu luc O |
| WACC | 12% | [C] | Dong ~235+ |
| Dien tich | 1 ha (10.000 m2) | | Dong ~182 |
| Thoi han | 50 nam (01/2025–12/2075) | | Dong ~207 |
| P(NPV>0) Monte Carlo | 65% | [C] | Phu luc U |
| Nhan su on dinh | 210–300 nguoi | [C] | Dong ~530 |
| Thue dat KCNC | 120.000 USD/nam, mien 11 nam | [B] | |

### Quy uoc nhan du lieu
- **[C] = Calculated** — So tinh toan tu mo hinh, ghi ro cong thuc
- **[B] = Benchmarked** — So tham chieu thi truong, ghi ro nguon
- **[A] = Assumed** — So gia dinh, ghi ro ly do

---

## 4. HUONG DAN DOC FILE (READ)

### 4.1. Doc theo tac vu

| Tac vu | Cach doc |
|--------|---------|
| Xem tong quan nhanh | Doc dong 161–282 (THONG TIN DU AN) |
| Kiem tra so lieu tai chinh | Doc dong 4441–5151 (PHAN V) + Phu luc A, G |
| Kiem tra phap ly | Doc dong 5152–5558 (PHAN VI) |
| Kiem tra san pham | Doc dong 1347–2889 (PHAN II) |
| Kiem tra kinh doanh | Doc dong 2890–3600 (PHAN III) |
| Kiem tra ha tang | Doc dong 3601–4440 (PHAN IV) |
| Kiem tra nhan su | Doc dong 5559–5876 (PHAN VII) |
| Kiem tra tien do | Doc dong 5877–6152 (PHAN VIII) |

### 4.2. Doc hieu qua voi LLM

```
# Cach 1: Doc theo range (VS Code Copilot / Cursor)
read_file("DE_AN_MEKONG_V2/MEKONG_DE_AN_V2_MASTER.md", startLine=4441, endLine=5151)

# Cach 2: Grep tim vi tri chinh xac truoc khi doc
grep_search("NPV.*50Y", includePattern="DE_AN_MEKONG_V2/MEKONG_DE_AN_V2_MASTER.md")

# Cach 3: Tim heading
grep_search("^## 5\\.6", includePattern="DE_AN_MEKONG_V2/MEKONG_DE_AN_V2_MASTER.md")
```

### 4.3. Luu y khi doc file lon

- File co ~16.000 dong — KHONG doc toan bo 1 luc (se bi cat)
- Doc theo PHAN (500–1000 dong moi lan)
- Dung line map o Muc 2 de nhay den dung cho
- Neu can so lieu cu the → grep truoc, roi doc context xung quanh

---

## 5. HUONG DAN SUA FILE (EDIT)

### 5.1. Nguyen tac an toan

1. **LUON doc truoc khi sua** — Khong bao gio edit blind
2. **Doc DU context** — Toi thieu 5 dong truoc va sau doan can sua
3. **Mot thay doi mot luc** — Khong sua nhieu cho cung luc khong lien quan
4. **Kiem tra nhat quan** — Sau khi sua 1 so lieu, grep kiem tra TOAN BO file xem so do co xuat hien o dau khac khong
5. **Giu format** — Markdown table, dau phay thap phan kieu Viet (47,50M khong phai 47.50M)
6. **Khong emoji** — Tuyet doi khong dung emoji trong file de an

### 5.2. Quy trinh sua so lieu tai chinh

```
Buoc 1: Xac dinh so lieu can sua va gia tri moi
Buoc 2: Grep tim TAT CA vi tri so lieu cu xuat hien
         grep_search("47,50", includePattern="DE_AN_MEKONG_V2/*.md")
Buoc 3: Doc context moi vi tri (5 dong truoc/sau)
Buoc 4: Sua DONG LOAT tat ca vi tri — khong bo sot
Buoc 5: Grep lai de xac nhan khong con gia tri cu
Buoc 6: Bao cao cho user: "Da sua X vi tri, da xac nhan nhat quan"
```

### 5.3. Quy trinh them section moi

```
Buoc 1: Xac dinh vi tri chen (theo line map)
Buoc 2: Doc 20 dong truoc va sau vi tri chen de hieu context
Buoc 3: Viet noi dung moi theo dung format cua section xung quanh
Buoc 4: Chen vao file
Buoc 5: Cap nhat MUC LUC TONG THE (dong 53–160) neu can
Buoc 6: Bao cao so dong da them
```

### 5.4. Quy trinh sua bang (table)

```
Buoc 1: Doc TOAN BO bang (tu header | den dong cuoi |)
Buoc 2: Sua trong context day du — KHONG chi sua 1 cell
Buoc 3: Dam bao alignment cua cot van dung
Buoc 4: Kiem tra tong cong/sum neu bang co dong tong
```

### 5.5. Cac vung NGUY HIEM — can than khi sua

| Vung | Dong | Ly do nguy hiem |
|------|------|-----------------|
| Bang CAPEX tong | ~430–448 | Thay doi o day phai cap nhat 10+ bang khac |
| Bang chi so tham dinh | ~451–468 | NPV/IRR lien quan nhieu phu luc |
| Bang san pham tong hop | ~257–280 | Doanh thu tong anh huong P&L |
| Phan ky dau tu | ~220–234 | Thay doi phase anh huong toan bo timeline |
| Cau truc von | ~441–449 | CSH/Vay anh huong WACC, DSCR |
| Doanh thu 20Y (3.13) | ~3565–3600 | So lieu la co so cho P&L va Cash Flow |

---

## 6. LIEN KET SO LIEU (CROSS-REFERENCE MAP)

> Khi sua 1 so lieu, phai sua TAT CA cac vi tri lien quan.

### 6.1. CAPEX = 47,50M USD
Xuat hien tai:
- Trang bia (dong ~26)
- Thong tin Dau tu (dong ~197)
- Tom tat Dieu hanh — Bang CAPEX (dong ~430)
- Muc 5.1 (dong ~4445)
- Phu luc A (dong ~6404+)
- Phu luc G.13 (dong ~7396+)
- Phu luc I (dong ~7697+)
- Ket luan (Phan IX)

### 6.2. NPV = 1,50M USD (Base Case)
Xuat hien tai:
- Tom tat Dieu hanh — Bang tham dinh (dong ~453)
- Muc 5.6 (dong ~4669+)
- Bang Gia tri Chien luoc (dong ~471)
- Phu luc A.5 (dong ~6534+)
- Phu luc O (dong ~9056+)
- Ket luan (Phan IX)

### 6.3. Revenue Y10
Xuat hien tai:
- Thong tin Du an — Chi so Tai chinh (dong ~237)
- Muc 5.2 (dong ~4503+)
- Phu luc G (dong ~6920+)
- Muc 3.13 (dong ~3565+)

---

## 7. FORMAT VA QUY CACH

### 7.1. Dinh dang so
- Dau phay thap phan: `47,50M` (KHONG phai `47.50M`)
- Don vi luon ghi ro: `USD`, `m2`, `MW`, `kWh`
- Phan cach hang nghin: dung dau cham hoac khong: `12.530.000 USD` hoac `12,53M USD`

### 7.2. Dinh dang bang
```markdown
| Cot 1 | Cot 2 | Cot 3 |
|---|---:|---|
| Text | 1.234 | Ghi chu |
```
- Cot so lieu align phai: `---:`
- Cot text align trai: `---`

### 7.3. Dinh dang heading
```markdown
# PHAN X: TEN PHAN (H1 — chi dung cho 9 phan chinh + phu luc)
## X.Y. Ten Muc (H2)
### X.Y.Z. Ten Tieu muc (H3)
```

### 7.4. Nhan du lieu bat buoc
Moi so lieu tai chinh/ky thuat PHAI co nhan:
```markdown
| CAPEX | 47,50M USD | [C] |
```
- `[C]` = Calculated — ghi cong thuc
- `[B]` = Benchmarked — ghi nguon
- `[A]` = Assumed — ghi ly do

### 7.5. Mermaid diagrams
- File co nhieu Mermaid chart (flowchart, gantt, pie, mindmap)
- Khi sua: giu nguyen cu phap mermaid, khong them/xoa node tuy tien
- Mermaid images da render nam trong `DE_AN_MEKONG_V2/mermaid_images/`

---

## 8. KIEM TRA SAU KHI SUA (VERIFICATION CHECKLIST)

Sau moi lan chinh sua, agent PHAI:

- [ ] **Dem so dong**: So dong moi vs cu (co hop ly khong?)
- [ ] **Grep so lieu**: Tat ca so lieu chinh van nhat quan
- [ ] **Grep emoji**: Khong co emoji nao trong file (`grep -P "[\x{1F600}-\x{1F9FF}]"`)
- [ ] **Kiem tra bang**: Moi bang co header, separator, va data rows day du
- [ ] **Kiem tra muc luc**: Neu them/xoa section → cap nhat MUC LUC TONG THE (dong 53–160)
- [ ] **Kiem tra tham chieu cheo**: So lieu da sua khong mau thuan voi cac phan khac

### Lenh kiem tra nhanh (PowerShell)

```powershell
# Dem so dong
(Get-Content "DE_AN_MEKONG_V2/MEKONG_DE_AN_V2_MASTER.md").Count

# Tim so lieu cu the
Select-String -Path "DE_AN_MEKONG_V2/MEKONG_DE_AN_V2_MASTER.md" -Pattern "47,50" | Select-Object LineNumber, Line

# Tim emoji (khong duoc co)
Select-String -Path "DE_AN_MEKONG_V2/MEKONG_DE_AN_V2_MASTER.md" -Pattern "[\u{1F600}-\u{1F9FF}]"

# Tim heading level 1
Select-String -Path "DE_AN_MEKONG_V2/MEKONG_DE_AN_V2_MASTER.md" -Pattern "^# " | Select-Object LineNumber, Line
```

---

## 9. CAC TINH HUONG THUONG GAP

### 9.1. User yeu cau "cap nhat so lieu tai chinh"
1. Hoi user: So lieu nao? Gia tri moi la bao nhieu?
2. Grep tim TAT CA vi tri so cu
3. Doc context moi vi tri
4. Sua dong loat + kiem tra nhat quan
5. Bao cao: "Da sua N vi tri, da grep xac nhan"

### 9.2. User yeu cau "them 1 phu luc moi"
1. Xac dinh ten phu luc (theo thu tu: A, B, ... RR, SS, ...)
2. Tim vi tri chen (sau phu luc cuoi = dong ~15820)
3. Viet noi dung theo format cac phu luc hien co
4. Cap nhat MUC LUC TONG THE
5. Cap nhat BANG TONG KET TAI LIEU (dong ~15821+)

### 9.3. User yeu cau "sua noi dung 1 phan"
1. Doc TOAN BO phan do (dung line map)
2. Hieu context truoc/sau
3. Sua chi phan duoc yeu cau — khong tu y thay doi phan khac
4. Kiem tra so lieu nhat quan

### 9.4. User yeu cau "xoa 1 section"
1. DUNG LAI — hoi user xac nhan
2. Neu user xac nhan: xoa section + cap nhat muc luc
3. Kiem tra khong con tham chieu den section da xoa

### 9.5. User yeu cau "viet lai toan bo 1 phan"
1. Doc TOAN BO phan do TRUOC
2. Doc cac phan lien quan (tham chieu cheo)
3. Viet lai — giu nguyen tat ca so lieu tru khi user noi khac
4. Dam bao so dong output >= 50% so dong cu
5. Kiem tra nhat quan

---

## 10. THU TU FILE THAM KHAO TRONG DU AN

| STT | File / Folder | Muc dich |
|-----|---------------|----------|
| 1 | `AGENT.md` (file nay) | Huong dan agent lam viec |
| 2 | `AGENT_RULES.md` | Quy tac xu ly du lieu chi tiet (6 buoc) |
| 3 | `.github/copilot-instructions.md` | VS Code Copilot auto-load (so lieu + quy tac format) |
| 4 | `DE_AN_MEKONG_V2/MEKONG_DE_AN_V2_MASTER.md` | FILE DE AN CHINH THUC |
| 5 | `HO_SO_MO_RONG_REVIEW/` | Cac file phan tich bo sung |
| 6 | `REVIEW_TAI_CHINH_V2.1.md` | Review tai chinh (tham khao) |
| 7 | `PLAN_UPDATE_32M.md` | Ke hoach cap nhat phuong an 32M |

---

## 11. PHAN BIET PHUONG AN 32M vs 47,5M

> MASTER file hien tai co CA HAI phuong an. Agent can biet de khong nham.

| Muc | Phuong an 47,5M (V2.1 chinh) | Phuong an 32M (bo sung) |
|-----|-------------------------------|------------------------|
| CAPEX | 47,50M USD | 32,00M USD |
| Von CSH | 34,97M USD | 24,00M USD |
| CNC | 28 may, IATF + AS9100 | 6 may, ISO 9001 |
| Datacenter | 50 Rack GPU + 50 Rack Colo | Gon hon |
| Thoi gian dau tu | 15 nam (5 phase) | 8 nam |
| NPV (50Y) | 1,50M | 2,50M |
| IRR (50Y) | 13,0% | 14,5% |

> **Luu y**: Trang bia va bang "Thong tin Du an" (dong ~161–234) da duoc cap nhat sang phuong an 32M.
> Nhung PHAN V (Tai chinh) va cac Phu luc van giu so lieu 47,5M.
> Day la tinh trang hien tai — agent can HIEU va KHONG tu y dong bo khi khong duoc yeu cau.

---

## 12. TEMPLATE CHO BAO CAO SAU KHI SUA

```
## Bao cao chinh sua

**File**: DE_AN_MEKONG_V2/MEKONG_DE_AN_V2_MASTER.md
**Ngay**: YYYY-MM-DD
**Tac vu**: [Mo ta ngan]

### Thay doi:
1. Dong XXXX: [Mo ta thay doi]
2. Dong YYYY: [Mo ta thay doi]

### Kiem tra nhat quan:
- [ ] Grep so lieu: PASS / FAIL
- [ ] Emoji check: PASS / FAIL
- [ ] Muc luc: Khong thay doi / Da cap nhat
- [ ] So dong: truoc = XXXX, sau = YYYY

### Luu y:
[Bat ky dieu gi user can biet]
```

---

*Phien ban: 1.0*
*Tao boi: AI Agent*
*Cap nhat: 2026-03-11*
