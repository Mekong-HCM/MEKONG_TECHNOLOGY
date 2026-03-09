# YEU CAU PHAT TRIEN — HUONG DAN CHO FULL-STACK DEVELOPER
# MEKONG TECHNOLOGY HUB — WEB PRESENTATION V2

**Ngay tao**: 2026-03-09  
**Kem theo**: `docs/08_IMPLEMENTATION_PLAN.md` (ke hoach trien khai chi tiet)  
**Quy tac so 1**: Doc TOAN BO tai lieu truoc khi viet bat ky dong code nao.

---

## MUC LUC

1. [Boi canh Du an](#1-boi-canh-du-an)
2. [Quy tac Bat buoc](#2-quy-tac-bat-buoc)
3. [Quy trinh Lam viec](#3-quy-trinh-lam-viec)
4. [Yeu cau Ky thuat Chi tiet](#4-yeu-cau-ky-thuat-chi-tiet)
5. [Tieu chuan Nghiem thu](#5-tieu-chuan-nghiem-thu)
6. [Danh sach Tai lieu Bat buoc Doc](#6-danh-sach-tai-lieu-bat-buoc-doc)
7. [Cau hoi Thuong gap](#7-cau-hoi-thuong-gap)

---

## 1. BOI CANH DU AN

### 1.1 Du an gi?

Mekong Technology Hub la du an xay dung trung tam cong nghe tai KCNC TP.HCM voi 3 tru cot:
- **IoT/Robot**: San xuat thiet bi IoT (MK-200, MK-300, AMR) + platform MekongOS
- **CNC Outsourcing**: 28 may DMG MORI 5-axis, gia cong chinh xac cho aerospace/medical
- **Datacenter**: Tier III, 100 racks, PUE 1,32, dich vu GPU-as-a-Service

Thong so chinh: CAPEX 47,50M USD, 50 nam, 1 ha tai Lo E2-03 Duong D1 KCNC.

### 1.2 Web Presentation la gi?

Day la trang web trinh bay du an cho co quan KCNC va nha dau tu, tuong tu bai PowerPoint nhung chay tren web. **KHONG PHAI** website thuong (khong co blog, khong co dang nhap, khong co e-commerce). Day la **bai trinh bay tuong tac** voi 11 slide.

### 1.3 Hien trang V1

Da co ung dung React chay duoc voi 11 section. Nhung co cac loi nghiem trong:
- Emoji trong nhieu component (vi pham quy dinh van ban chinh thuc)
- So lieu chua thong nhat 100% voi tai lieu master
- Chua co tinh nang PowerPoint (keyboard nav, fullscreen, scroll-snap)
- Chua co hinh anh san pham thuc te
- Code trung lap nhieu (khong co shared components)

### 1.4 Muc tieu V2

Sua het loi V1 + them tinh nang PowerPoint-like + hinh anh thuc te + code sach.

---

## 2. QUY TAC BAT BUOC

> **Nhung quy tac nay la BAT BUOC. Vi pham bat ky quy tac nao se bi tu choi merge.**

### QUY TAC 1: TUYET DOI KHONG EMOJI

- KHONG dung emoji trong bat ky file nao: `.tsx`, `.ts`, `.css`, `.html`, `.md`
- KHONG dung emoji trong comment code
- KHONG dung Unicode emoji range (U+1F300 tro di)
- Dung Lucide React icons thay the TOan Bo

**Kiem tra**:
```bash
grep -rP '[\x{1F300}-\x{1FAFF}\x{2600}-\x{26FF}\x{2700}-\x{27BF}]' src/
# Ket qua phai RONG
```

**Vi du SAI**:
```tsx
<span>💰 47,50M USD</span>
<h3>🌐 MekongOS Platform</h3>
```

**Vi du DUNG**:
```tsx
import { DollarSign, Globe } from 'lucide-react';
<span><DollarSign size={16} className="inline" /> 47,50M USD</span>
<h3><Globe size={18} className="inline mr-2" />MekongOS Platform</h3>
```

### QUY TAC 2: SO LIEU TU NGUON DUY NHAT

- **Moi so lieu tai chinh** phai lay tu file data (`src/data/*.ts`)
- **Moi file data** phai khop voi `DE_AN_MEKONG_V2/MEKONG_DE_AN_V2_MASTER.md` V2.1
- **KHONG hardcode** so lieu truc tiep trong JSX
- Khi khong chac so lieu nao do, HOI — khong tu doan

So lieu chinh thuc (hoc thuoc):

| So lieu | Gia tri | Ghi chu |
|---------|---------|---------|
| CAPEX | 47,50M USD | 5 phases / 15 nam |
| Von CSH | 34,97M USD | 73,6% |
| No vay | 12,53M USD | Tu Y10, @ 8,5% |
| NPV (50Y, WACC 12%) | 1,50M USD | |
| IRR (50Y) | 13,0% | |
| Payback | 13 nam | |
| DSCR min | 4,91x | |
| P(NPV>0) Monte Carlo | 65% | |
| Revenue 10Y cong don | 103,52M USD | Appendix G |
| Strategic Value | 20,32M USD | Appendix O, 7 hang muc |
| Dien tich | 1 ha (10.000 m2) | |
| Nhan su Y15 | 300 nguoi | |
| PUE | 1,32 | Datacenter |

### QUY TAC 3: DINH DANG SO KIEU VIET NAM

| Loai | Dung | Sai |
|------|------|-----|
| Tien te | 47,50M USD | 47.50M USD |
| Phan tram | 13,0% | 13.0% |
| Dien tich | 10.000 m2 | 10,000 m2 |
| So lon | 1.500.000 | 1,500,000 |

Dung utility functions trong `src/utils/format.ts` (tao o Phase 0).

### QUY TAC 4: TIENG VIET TRANG TRONG

- Moi text hien thi tren slide phai la tieng Viet trang trong
- Phong cach: van ban trinh co quan nha nuoc
- Khong viet tat tuy tien (dung: "Ung dung", khong dung: "App")
- Thuat ngu ky thuat giu nguyen tieng Anh khi can: "IoT", "CNC", "Datacenter", "GPU"
- Tieng Anh chi dung cho: ten san pham (DMG MORI DMU 50), ten cong nghe (MekongOS), don vi (USD, kWh)

### QUY TAC 5: GIAO DIEN POWERPOINT

- Moi section la 1 "slide" chiem 100vh (100% chieu cao man hinh)
- Scroll-snap: cuon chuot = chuyen slide (khong cuon nua chung)
- Keyboard: Arrow keys di chuyen giua slides
- Transition: hieu ung chuyen slide muot ma (400ms)
- Khong giong "website" — giong "bai trinh bay"

### QUY TAC 6: KHONG GIONG AI LAM

Nguoi xem (chuyen gia KCNC TP.HCM) co the nhan ra AI content. Tranh:
- Cau truc lap di lap lai "Voi su phat trien... chung toi cam ket..."
- Bullet point qua deu dan (3 muc, 5 muc, 3 muc, 5 muc)
- Tu ngu AI thuong dung: "tot nhat", "hang dau", "dot pha", "cach mang"
- Hinh anh AI-generated (CNC machine khong co brand = AI)
- Layout qua can doi (doi xung tuyet doi = AI)

Thay vao do:
- Du lieu cu the (28 may DMG MORI, ±2um, PUE 1,32)
- So lieu co nguon (Appendix G, Appendix O)
- Hinh thuc te co brand (DMG MORI, NVIDIA)
- Cau van tu nhien, do dai khong deu

---

## 3. QUY TRINH LAM VIEC

### 3.1 Thu tu Thuc hien

**BAM SAT ke hoach trong `docs/08_IMPLEMENTATION_PLAN.md`**. Thu tu:

```
Phase 0 (Ngay 1-2) -> Phase 1 (Ngay 3-6) -> Phase 2 (Ngay 7-10) 
    -> Phase 3 (Ngay 11-14) -> Phase 4 (Ngay 15-18) -> Phase 5 (Ngay 19-20)
```

**KHONG duoc nhay Phase**. Phase 0 phai xong 100% truoc khi bat dau Phase 1.

### 3.2 Truoc khi Code

1. Doc `docs/07_DEVELOPER_SETUP_GUIDE.md` — setup moi truong
2. Doc TOAN BO `docs/` folder (8 file) — hieu yeu cau
3. Chay `npm run dev` — xem V1 hien tai
4. Liet ke emoji va loi hien thi nhin thay -> doi chieu voi doc 08 Phase 0

### 3.3 Moi ngay

1. Mo `docs/08_IMPLEMENTATION_PLAN.md`, xac dinh task hom nay
2. Mo tai lieu lien quan (ghi trong cot "Doc truoc" cua moi task)
3. Code theo spec
4. `npm run build` — fix moi loi TypeScript
5. Mo browser kiem tra mat
6. Commit voi message ro rang

### 3.4 Quy tac Commit

```
<type>(<scope>): <mo ta ngan>

[Body: chi tiet thay doi]
[Footer: task ID tu doc 08]
```

Vi du:
```
fix(hero): thay emoji stat icons bang Lucide components

- Thay 💰 -> DollarSign, 🏗️ -> Building2, 📍 -> MapPin, 👥 -> Users
- Cap nhat stat card layout de chua icon component

Task: T01
```

**Type cho phep**:
- `fix`: Sua loi hien tai
- `feat`: Tinh nang moi
- `refactor`: Thay doi cau truc code, khong thay doi chuc nang
- `style`: Thay doi CSS/UI khong anh huong logic
- `data`: Cap nhat data files
- `docs`: Cap nhat tai lieu
- `perf`: Toi uu hieu nang
- `test`: Them kiem tra

### 3.5 Branching

```
main                         # Production
  |-- dev                    # Development
       |-- fix/emoji-removal       # T01
       |-- feat/shared-components  # T05
       |-- feat/scroll-snap        # T17
       |-- feat/keyboard-nav       # T18
```

Moi task (hoac nhom task nho) = 1 branch. Merge vao `dev` khi xong. Merge `dev` vao `main` khi xong 1 Phase.

---

## 4. YEU CAU KY THUAT CHI TIET

### 4.1 Shared Components Can tao

Doc chi tiet: `docs/04_COMPONENT_ARCHITECTURE.md`

| Component | File | Mo ta | Props chinh |
|-----------|------|-------|-------------|
| SectionLayout | `src/components/ui/SectionLayout.tsx` | Boc moi section, 100vh, scroll-snap | `id`, `children`, `className` |
| GlassCard | `src/components/ui/GlassCard.tsx` | The glassmorphism | `children`, `accentColor`, `hoverEffect` |
| KPICard | `src/components/ui/KPICard.tsx` | Hien thi so lieu voi count-up | `value`, `label`, `icon`, `format` |
| TabBar | `src/components/ui/TabBar.tsx` | Tab navigation | `tabs`, `activeTab`, `onChange` |
| DataTable | `src/components/ui/DataTable.tsx` | Bang du lieu | `columns`, `data`, `highlightRow` |
| PillBadge | `src/components/ui/PillBadge.tsx` | Tag nho | `text`, `color` |

### 4.2 Hooks Can tao/Cap nhat

| Hook | File | Mo ta |
|------|------|-------|
| useInView | Da co | Giu nguyen, khong thay doi |
| useCountUp | Da co | Giu nguyen |
| useSlideNavigation | `src/hooks/useSlideNavigation.ts` | **MOI** — keyboard nav, slide tracking |

### 4.3 Utilities Can tao

| Utility | File | Mo ta |
|---------|------|-------|
| formatCurrency | `src/utils/format.ts` | 47500000 -> "47,50M USD" |
| formatPercent | `src/utils/format.ts` | 13.0 -> "13,0%" |
| formatArea | `src/utils/format.ts` | 10000 -> "10.000 m2" |
| formatNumber | `src/utils/format.ts` | 1500000 -> "1.500.000" |

### 4.4 Data Files Can cap nhat/tao moi

| File | Trang thai | Hanh dong |
|------|-----------|-----------|
| `src/data/financials.ts` | Cap nhat | Them types, xac nhan Revenue Y10/Y15 |
| `src/data/products.ts` | Cap nhat | Them types |
| `src/data/market.ts` | Cap nhat | Them types |
| `src/data/team.ts` | Cap nhat | Them types |
| `src/data/timeline.ts` | Cap nhat | Them types |
| `src/data/infrastructure.ts` | **Tao moi** | Thong so toa nha, tang, dien tich |
| `src/data/legal.ts` | **Tao moi** | Giay phep, ESG, chung nhan |
| `src/data/contact.ts` | **Tao moi** | Thong tin lien he |
| `src/types/index.ts` | **Tao moi** | Toan bo TypeScript interfaces |

### 4.5 Cau truc Thu muc V2

```
src/
|-- components/
|   |-- ui/                    # [MOI] Shared components
|   |   |-- SectionLayout.tsx
|   |   |-- GlassCard.tsx
|   |   |-- KPICard.tsx
|   |   |-- TabBar.tsx
|   |   |-- DataTable.tsx
|   |   |-- PillBadge.tsx
|   |
|   |-- Navbar.tsx
|   |-- HeroSection.tsx        # [SUA] Refactor dung ui/, xoa emoji
|   |-- ExecutiveSummary.tsx    # [SUA]
|   |-- MarketOpportunity.tsx   # [SUA]
|   |-- ThreePillars.tsx        # [SUA]
|   |-- Infrastructure.tsx      # [SUA]
|   |-- FinancialOverview.tsx   # [SUA]
|   |-- LegalESG.tsx            # [SUA]
|   |-- TeamOrganization.tsx    # [SUA]
|   |-- ImplementationRoadmap.tsx # [SUA]
|   |-- StrategicValue.tsx      # [SUA]
|   |-- ContactCTA.tsx          # [SUA]
|
|-- data/
|   |-- financials.ts           # [SUA]
|   |-- products.ts             # [SUA]
|   |-- market.ts               # [SUA]
|   |-- team.ts                 # [SUA]
|   |-- timeline.ts             # [SUA]
|   |-- infrastructure.ts       # [MOI]
|   |-- legal.ts                # [MOI]
|   |-- contact.ts              # [MOI]
|
|-- hooks/
|   |-- useInView.ts            # Giu nguyen
|   |-- useSlideNavigation.ts   # [MOI]
|
|-- types/
|   |-- index.ts                # [MOI] Toan bo interfaces
|
|-- utils/
|   |-- format.ts               # [MOI] Number formatting VN
|
|-- App.tsx                     # [SUA] Them slide state, scroll-snap
|-- main.tsx
|-- index.css                   # [SUA] Them scroll-snap CSS
|-- vite-env.d.ts
```

---

## 5. TIEU CHUAN NGHIEM THU

### 5.1 Nghiem thu Phase 0 (Bugfix)

- [ ] `grep -rP '[\x{1F300}-\x{1FAFF}]' src/` tra ve 0 ket qua
- [ ] `npm run build` thanh cong, khong loi
- [ ] Tat ca so lieu tren browser khop voi bang o Quy tac 2
- [ ] So lieu dinh dang kieu VN (dau phay thap phan)

### 5.2 Nghiem thu Phase 1 (Refactor)

- [ ] Thu muc `src/components/ui/` co 6 file
- [ ] Moi section dung `<SectionLayout>` thay vi `<section>` truc tiep
- [ ] Moi glassmorphism card dung `<GlassCard>` thay vi div + inline class
- [ ] Moi stat/KPI dung `<KPICard>` voi Lucide icon
- [ ] `useSlideNavigation` hook tao xong, arrow keys navigation hoat dong
- [ ] `npm run build` thanh cong

### 5.3 Nghiem thu Phase 2 (Data)

- [ ] `src/types/index.ts` co toan bo interfaces (it nhat 20 types)
- [ ] 5 data files goc import types tu `types/index.ts`
- [ ] 3 data files moi (infrastructure, legal, contact) da tao
- [ ] Khong con hardcoded text trong JSX cua bat ky section nao
- [ ] Noi dung 11 slide khop voi `docs/02_SLIDE_CONTENT_SPEC.md`
- [ ] Revenue Y10/Y15 da xac nhan va ghi ro trong comment code

### 5.4 Nghiem thu Phase 3 (UX)

- [ ] Scroll snap: cuon = chuyen slide (khong dung giua chung)
- [ ] Arrow Down/Up: chuyen slide muot
- [ ] Phim 1-9: nhay den slide tuong ung
- [ ] F: toggle fullscreen
- [ ] Progress bar o bottom hien thi % scroll
- [ ] Fullscreen mode: an navbar header, chi hien dots + so slide
- [ ] Transition animations: 400ms, khong giat

### 5.5 Nghiem thu Phase 4 (Images)

- [ ] It nhat 10/25 hinh da co (theo danh sach uu tien trong doc 08)
- [ ] Hinh la anh thuc/press kit, khong AI-generated
- [ ] WebP format + JPEG fallback
- [ ] Lazy loading cho tat ca hinh (tru Hero)
- [ ] Lighthouse Performance >= 85

### 5.6 Nghiem thu Phase 5 (Deploy)

- [ ] Production build thanh cong
- [ ] JS bundle < 300KB gzipped
- [ ] Lighthouse: Perf >= 85, A11y >= 90, BP >= 90
- [ ] 5 breakpoints khong loi (375, 428, 768, 1440, 1920)
- [ ] 4 browsers test (Chrome, Firefox, Safari, Edge)
- [ ] OG image hien thi khi share link
- [ ] URL production hoat dong

### 5.7 Nghiem thu Tong the (Tat ca Phase)

| # | Tieu chi | Cach kiem tra |
|---|---------|-------------|
| AT-01 | Zero emoji | grep unicode range |
| AT-02 | So lieu 100% khop V2.1 | grep 13 so lieu chinh |
| AT-03 | Dinh dang VN | Spot check 10 so tren browser |
| AT-04 | 11 slides hien thi day du | Scroll qua toan bo |
| AT-05 | Keyboard nav | Thu Arrow, Home, End, 1-9, F |
| AT-06 | Scroll-snap | Cuon chuot, kiem tra snap |
| AT-07 | Responsive | DevTools 5 breakpoints |
| AT-08 | Hinh thuc te | Kiem tra 10 hinh co brand/nguon |
| AT-09 | Performance | Lighthouse >= 85 |
| AT-10 | Build sach | tsc --noEmit + vite build |
| AT-11 | Tieng Viet dung | Doc qua 11 slide, khong co loi |
| AT-12 | Khong giong AI | Thu doc voi nguoi khong biet context |

---

## 6. DANH SACH TAI LIEU BAT BUOC DOC

### Truoc khi bat dau Phase 0

| # | File | Thoi gian doc | Noi dung chinh |
|---|------|--------------|----------------|
| 1 | `docs/07_DEVELOPER_SETUP_GUIDE.md` | 10 phut | Setup moi truong, tech stack |
| 2 | `docs/01_PRD_PRODUCT_REQUIREMENTS.md` | 15 phut | Yeu cau tong the, 11 slides, do's/don'ts |
| 3 | `docs/08_IMPLEMENTATION_PLAN.md` | 20 phut | Ke hoach chi tiet, 29 tasks, dependencies |
| 4 | File nay (`docs/09_DEV_REQUIREMENTS.md`) | 15 phut | Quy tac va tieu chuan |

### Truoc khi bat dau Phase 1

| # | File | Thoi gian doc | Noi dung chinh |
|---|------|--------------|----------------|
| 5 | `docs/03_UI_UX_DESIGN_SYSTEM.md` | 20 phut | Design tokens, component patterns |
| 6 | `docs/04_COMPONENT_ARCHITECTURE.md` | 15 phut | Component tree, shared components |

### Truoc khi bat dau Phase 2

| # | File | Thoi gian doc | Noi dung chinh |
|---|------|--------------|----------------|
| 7 | `docs/05_DATA_LAYER_SPEC.md` | 15 phut | TypeScript types, data verification |
| 8 | `docs/02_SLIDE_CONTENT_SPEC.md` | 30 phut | Noi dung chi tiet 11 slides |

### Truoc khi bat dau Phase 4

| # | File | Thoi gian doc | Noi dung chinh |
|---|------|--------------|----------------|
| 9 | `docs/06_IMAGE_ASSET_MANIFEST.md` | 10 phut | Danh muc hinh, nguon, kich co |

---

## 7. CAU HOI THUONG GAP

### Q: Revenue Y10 la 14,5M hay 30,50M?

A: Chua xac nhan. Thu tu:
1. Mo `DE_AN_MEKONG_V2/MEKONG_DE_AN_V2_MASTER.md`, tim "Appendix G" hoac "Revenue"
2. Xac dinh so 30,50M la per-year hay cumulative
3. Cap nhat code tuong ung
4. Neu van khong ro -> HOI stakeholder, KHONG tu doan

### Q: Dung font gi?

A: Inter (Google Fonts). Da import trong `index.html`. Fallback: system-ui, -apple-system, sans-serif. KHONG dung font khac.

### Q: Co can dark/light mode toggle khong?

A: Co (doc 01, F14), nhung o CUOI (Phase 4-5). Uu tien dark mode truoc vi la theme chinh.

### Q: Hinh anh lay o dau?

A: Doc `docs/06_IMAGE_ASSET_MANIFEST.md`. Uu tien:
1. Press kit nha san xuat (DMG MORI, NVIDIA)
2. Unsplash/Pexels (free, license-safe)
3. Google Earth (KCNC aerial)
4. Tu thiet ke (logo, 3D render, floor plan)

### Q: TypeScript strict co bat khong?

A: Co (`strict: true` trong tsconfig.app.json). Nhung `noUnusedLocals` va `noUnusedParameters` dang false — nen bat true sau Phase 2.

### Q: Deploy o dau?

A: 3 options (chon 1):
- GitHub Pages (mien phi, chay static)
- Vercel (mien phi, auto-deploy)
- Nginx (self-hosted, can VPS)

Chi tiet: `docs/08_IMPLEMENTATION_PLAN.md` Section 6.

### Q: So lieu thay doi thi cap nhat o dau?

A: CHI cap nhat trong file `src/data/*.ts`. Components tu dong lay data tu do. KHONG BAO GIO sua so truc tiep trong JSX.

### Q: Khi gap loi khong biet cach xu ly thi sao?

A: Doc `docs/07_DEVELOPER_SETUP_GUIDE.md` Section 9 (Loi thuong gap). Neu khong co trong do -> hoi team lead. **KHONG** tu suy doan va commit code loi.

---

## TOM TAT: DOC GI TRUOC, LAM GI TRUOC

```
BUOC 1: Doc docs 07 -> 01 -> 08 -> 09 (file nay)        [1 gio]
BUOC 2: npm install, npm run dev, xem V1                  [10 phut]
BUOC 3: Lam Phase 0 — sua emoji + so lieu + format        [1 ngay]
BUOC 4: Doc docs 03 -> 04                                 [30 phut]
BUOC 5: Lam Phase 1 — tao shared components, refactor     [2 ngay]
BUOC 6: Doc docs 05 -> 02                                 [45 phut]
BUOC 7: Lam Phase 2 — data types, verify, noi dung slides [2 ngay]
BUOC 8: Lam Phase 3 — scroll-snap, keyboard, fullscreen   [2 ngay]
BUOC 9: Doc doc 06                                        [10 phut]
BUOC 10: Lam Phase 4 — hinh anh, performance, responsive  [2 ngay]
BUOC 11: Lam Phase 5 — test, build, deploy                [1 ngay]
```

**Tong: ~10 ngay lam viec thuc te (khi khong bi block).**

---

*Tai lieu nay la hop dong lam viec giua product owner va developer. Moi thay doi scope phai duoc phe duyet.*
