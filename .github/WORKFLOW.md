# WORKFLOW: QUY TRINH HOAN THIEN HO SO DE AN MEKONG TECHNOLOGY

> Tai lieu huong dan chi tiet quy trinh phoi hop 8 Agent de hoan thien ho so de an.
> Moi buoc co Agent phu trach, dau vao, dau ra, va tieu chi hoan thanh.

---

## TONG QUAN QUY TRINH

```
PHASE 1: CHUAN BI ──────────────────────────────────────────────
  [1.1] Kiem ke file nguon          → Giam Doc Du An
  [1.2] Phan tich gap/thieu         → Giam Doc Du An + Tat ca Agent
  [1.3] Lap ke hoach WBS            → Giam Doc Du An
  [1.4] User xac nhan ke hoach      → User

PHASE 2: NOI DUNG CHINH (song song) ───────────────────────────
  [2.1] Thi truong & Kinh doanh    → Chuyen Gia Thi Truong
  [2.2] San pham & Cong nghe       → Chuyen Gia Cong Nghe
  [2.3] Ha tang Ky thuat           → Chuyen Gia Cong Nghe
  [2.4] Tai chinh & Dau tu         → Chuyen Gia Tai Chinh
  [2.5] Phap ly & Moi truong       → Chuyen Gia Phap Ly
  [2.6] QC Batch 1                 → Kiem Tra Chat Luong

PHASE 3: PHAN BO SUNG (tuan tu) ───────────────────────────────
  [3.1] Nhan su & To chuc          → Chuyen Gia Tai Lieu
  [3.2] Ke hoach trien khai        → Chuyen Gia Tai Lieu
  [3.3] Ket luan & Kien nghi       → Chuyen Gia Tai Lieu
  [3.4] QC Batch 2                 → Kiem Tra Chat Luong

PHASE 4: PHU LUC (song song) ──────────────────────────────────
  [4.1] Phu luc Tai chinh (A,G,I,J,N,O,EE) → Chuyen Gia Tai Chinh
  [4.2] Phu luc Ky thuat (L,Q,S,T,NN,DD)   → Chuyen Gia Cong Nghe
  [4.3] Phu luc Thi truong (B,H,M,P,W,X)   → Chuyen Gia Thi Truong
  [4.4] Phu luc Phap ly (C,R,Z,KK,PP)      → Chuyen Gia Phap Ly
  [4.5] Phu luc Van hanh (V,BB,CC,FF,HH)   → Chuyen Gia Tai Lieu
  [4.6] Phu luc Khac (AA,GG,II,JJ,LL,OO)   → Thi Truong/Tai Lieu
  [4.7] QC Batch 3                          → Kiem Tra Chat Luong

PHASE 5: TONG HOP & TRINH BAY ─────────────────────────────────
  [5.1] Merge va nhat quan MASTER   → Giam Doc Du An
  [5.2] Cap nhat Muc luc            → Chuyen Gia Tai Lieu
  [5.3] Executive Summary           → Trinh Bay KCNC
  [5.4] MAU 1.4 KCNC               → Trinh Bay KCNC
  [5.5] Final QC                    → Kiem Tra Chat Luong
  [5.6] Bao cao hoan thanh          → Giam Doc Du An
```

---

## CHI TIET TUNG PHASE

### PHASE 1: CHUAN BI

#### [1.1] Kiem ke file nguon
- **Agent**: Giam Doc Du An
- **Dau vao**: Toan bo workspace
- **Hanh dong**:
  1. List tat ca file .md trong `DE_AN_MEKONG_V2/`, `TAI_LIEU_GOC/`, `HO_SO_MO_RONG_REVIEW/`
  2. Dem so dong moi file (wc -l)
  3. Tao bang kiem ke:
  ```
  | # | File | Duong dan | So dong | Vai tro |
  |---|------|-----------|---------|---------|
  | 1 | MASTER | DE_AN_MEKONG_V2/MEKONG_DE_AN_V2_MASTER.md | 15.946 | Canonical |
  | 2 | ... | ... | ... | ... |
  ```
- **Dau ra**: Bang kiem ke file nguon
- **Tieu chi**: Liet ke day du, khong thieu file

#### [1.2] Phan tich gap/thieu
- **Agent**: Giam Doc Du An + Tat ca Agent chuyen mon
- **Dau vao**: MASTER file + Bang kiem ke
- **Hanh dong**:
  1. Moi Agent doc section thuoc scope cua minh
  2. Danh gia: Day du / Thieu / Can cap nhat / Can viet moi
  3. Uoc tinh so dong can them/sua
- **Dau ra**: Bang phan tich gap
  ```
  | Section | Agent | Trang thai | Can lam | So dong uoc tinh |
  |---------|-------|-----------|---------|------------------|
  | Part I | Thi Truong | Can cap nhat | Bo sung data 2025 | +200 |
  | ... | ... | ... | ... | ... |
  ```

#### [1.3] Lap ke hoach WBS
- **Agent**: Giam Doc Du An
- **Dau vao**: Bang phan tich gap
- **Hanh dong**: Tao Work Breakdown Structure, phan cong batch, uu tien
- **Dau ra**: Ke hoach chi tiet voi todo list

#### [1.4] User xac nhan
- **Hanh dong**: Trinh ke hoach cho user, cho xac nhan/dieu chinh
- **Gate**: KHONG bat dau Phase 2 khi chua co xac nhan

---

### PHASE 2: NOI DUNG CHINH

> 5 Agent lam **song song**, moi Agent phu trach scope cua minh.

#### [2.1] Thi truong & Kinh doanh
- **Agent**: Chuyen Gia Thi Truong
- **Sections**: Part I (602-1346), Part III (2890-3600)
- **Skills su dung**: `phan-tich-thi-truong`
- **Checklist**:
  - [ ] Quy mo thi truong TAM/SAM/SOM = 3 B.U
  - [ ] Phan tich canh tranh co it nhat 3 doi thu/B.U
  - [ ] Du bao doanh thu nhat quan voi Part V
  - [ ] Tat ca so lieu co nhan [B] va nguon

#### [2.2] San pham & Cong nghe
- **Agent**: Chuyen Gia Cong Nghe
- **Sections**: Part II (1347-2889)
- **Skills su dung**: `ky-thuat-ha-tang`
- **Checklist**:
  - [ ] 3 B.U co Roadmap ro rang
  - [ ] Thong so ky thuat day du
  - [ ] Tieu chuan thiet ke duoc trich dan
  - [ ] Lien ket voi ha tang (Part IV)

#### [2.3] Ha tang Ky thuat
- **Agent**: Chuyen Gia Cong Nghe
- **Sections**: Part IV (3601-4440)
- **Skills su dung**: `ky-thuat-ha-tang`
- **Checklist**:
  - [ ] Mat bang tong the 1 ha
  - [ ] He thong M&E day du
  - [ ] Phu hop voi phase dau tu
  - [ ] Tieu chuan TCVN/IEC duoc trich dan

#### [2.4] Tai chinh & Dau tu
- **Agent**: Chuyen Gia Tai Chinh
- **Sections**: Part V (4441-5151)
- **Skills su dung**: `tai-chinh-mo-hinh`
- **Checklist**:
  - [ ] CAPEX breakdown theo phase va B.U
  - [ ] P&L, Cash Flow day du
  - [ ] NPV, IRR, Payback tinh dung
  - [ ] So lieu nhat quan TOAN BO file

#### [2.5] Phap ly & Moi truong
- **Agent**: Chuyen Gia Phap Ly
- **Sections**: Part VI (5152-5558)
- **Skills su dung**: `phap-ly-viet-nam`, `kiem-tra-eia`
- **Checklist**:
  - [ ] Trich dan luat day du so hieu va nam
  - [ ] Danh sach giay phep day du
  - [ ] Uu dai KCNC duoc liet ke
  - [ ] EIA outline cho 3 khoi

#### [2.6] QC Batch 1
- **Agent**: Kiem Tra Chat Luong
- **Pham vi**: Toan bo Part I-VI sau khi Agent hoan thanh
- **Skills su dung**: `kiem-tra-nhat-quan`
- **Gate**: 7/7 PASS moi chuyen sang Phase 3

---

### PHASE 3: PHAN BO SUNG

#### [3.1-3.3] Nhan su, Ke hoach, Ket luan
- **Agent**: Chuyen Gia Tai Lieu
- **Sections**: Part VII (5559-5876), Part VIII (5877-6152), Part IX (6153-6399)
- **Skills su dung**: `viet-van-ban-hanh-chinh`

---

### PHASE 4: PHU LUC

> 44 Phu luc (A-RR) phan cho 5 Agent lam song song.
> Moi Agent chi lam phu luc thuoc scope (xem AGENTS.md).

---

### PHASE 5: TONG HOP & TRINH BAY

#### [5.1] Merge va nhat quan
- **Agent**: Giam Doc Du An
- **Hanh dong**: Merge tat ca thay doi, kiem tra xung dot

#### [5.2] Cap nhat Muc luc
- **Agent**: Chuyen Gia Tai Lieu
- **Hanh dong**: Regen muc luc tu heading thuc te (dong 53-160)

#### [5.3-5.4] Executive Summary & MAU 1.4
- **Agent**: Trinh Bay KCNC
- **Skills su dung**: `trinh-bay-du-an`

#### [5.5] Final QC
- **Agent**: Kiem Tra Chat Luong
- **Hanh dong**: Chay 7 hang muc cho TOAN BO MASTER
- **Gate**: 7/7 PASS = HOAN THANH

#### [5.6] Bao cao
- **Agent**: Giam Doc Du An
- **Dau ra**: Bao cao tong ket cho user

---

## CACH SU DUNG TRONG VS CODE COPILOT

### Goi tung Agent:
Trong chat Copilot, chon agent mode tuong ung:
- `@giam-doc-du-an` — Dieu phoi, phan cong
- `@chuyen-gia-tai-chinh` — Lam tai chinh
- `@chuyen-gia-cong-nghe` — Lam ky thuat
- `@chuyen-gia-thi-truong` — Lam thi truong
- `@chuyen-gia-phap-ly` — Lam phap ly
- `@chuyen-gia-tai-lieu` — Viet van ban
- `@kiem-tra-chat-luong` — Kiem tra QC
- `@trinh-bay-kcnc` — Trinh bay

### Vi du workflow:
```
User: @giam-doc-du-an Bat dau kiem ke file nguon va lap ke hoach hoan thien de an
→ Giam Doc lap ke hoach, phan cong

User: @chuyen-gia-tai-chinh Hoan thien Part V - Tai chinh va Dau tu
→ Agent tai chinh lam viec

User: @kiem-tra-chat-luong Kiem tra Part V va cac phu luc tai chinh
→ QA Agent kiem tra

User: @trinh-bay-kcnc Tao Executive Summary tu MASTER
→ Agent trinh bay tao tom tat
```

---

*Cap nhat: 2026-03-16*
