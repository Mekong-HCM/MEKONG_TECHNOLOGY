# IMPLEMENTATION PLAN — MEKONG TECHNOLOGY WEB PRESENTATION V2
# KE HOACH TRIEN KHAI CHI TIET

**Phien ban**: 2.0  
**Ngay tao**: 2026-03-09  
**Doi tuong**: Full-stack developer  
**Thoi gian du kien**: 4 tuan (20 ngay lam viec)  
**Nguon du lieu chinh thuc**: `DE_AN_MEKONG_V2/MEKONG_DE_AN_V2_MASTER.md` (V2.1, 15.946 dong)

---

## MUC LUC

1. [Tong quan Hien trang](#1-tong-quan-hien-trang)
2. [Muc tieu V2](#2-muc-tieu-v2)
3. [Phase 0 — Bugfix Khẩn cap (Ngay 1-2)](#phase-0--bugfix-khan-cap-ngay-1-2)
4. [Phase 1 — Refactor & Shared Components (Ngay 3-6)](#phase-1--refactor--shared-components-ngay-3-6)
5. [Phase 2 — Du lieu & Noi dung (Ngay 7-10)](#phase-2--du-lieu--noi-dung-ngay-7-10)
6. [Phase 3 — PowerPoint UX (Ngay 11-14)](#phase-3--powerpoint-ux-ngay-11-14)
7. [Phase 4 — Hinh anh & Polish (Ngay 15-18)](#phase-4--hinh-anh--polish-ngay-15-18)
8. [Phase 5 — Testing & Deploy (Ngay 19-20)](#phase-5--testing--deploy-ngay-19-20)
9. [Dependency Map](#9-dependency-map)
10. [Risk & Mitigation](#10-risk--mitigation)
11. [Danh sach Task theo Sprint](#11-danh-sach-task-theo-sprint)

---

## 1. TONG QUAN HIEN TRANG

### 1.1 Da co (V1)

| Hang muc | Trang thai | Chi tiet |
|----------|-----------|---------|
| React 18 + TypeScript 5.6 + Vite 6 | OK | Khong can thay doi |
| Tailwind CSS 3.4 + PostCSS | OK | Config da co design tokens |
| framer-motion 11.15 | OK | Animation co ban da hoat dong |
| recharts 2.15 | OK | Chart Revenue va P&L da co |
| lucide-react 0.468 | OK | Da cai nhung CHUA dung het — van con emoji |
| 11 section components | Partial | Co du 11 file, nhung nhieu loi |
| 5 data files | Partial | Co du nhung co discrepancy |
| Custom hooks (useInView, useCountUp) | OK | Hoat dong dung |
| Navbar | OK | Scroll tracking, dot indicators |
| Dark theme + Glassmorphism | OK | Design tokens da dinh nghia |

### 1.2 Loi Can sua (V1 -> V2)

| # | Loi | Muc do | File lien quan |
|---|-----|--------|---------------|
| BUG-01 | Emoji trong HeroSection (4 cho) | CRITICAL | `HeroSection.tsx` L65-67 |
| BUG-02 | Emoji trong ThreePillars (4 cho) | CRITICAL | `ThreePillars.tsx` L88,118,178,186 |
| BUG-03 | Emoji trong Infrastructure (1 cho) | CRITICAL | `Infrastructure.tsx` |
| BUG-04 | Emoji trong TeamOrganization (2 cho) | CRITICAL | `TeamOrganization.tsx` |
| BUG-05 | Emoji trong ExecutiveSummary (3 cho) | CRITICAL | `ExecutiveSummary.tsx` |
| BUG-06 | Revenue Y10 hien thi 14,5M nhung V2.1 ghi 30,50M | HIGH | `financials.ts` |
| BUG-07 | Revenue Y15 hien thi 32M nhung V2.1 ghi 43,00M | HIGH | `financials.ts` |
| BUG-08 | So lieu dinh dang US (47.5M) thay vi VN (47,50M) | MEDIUM | Tat ca components |

### 1.3 Tinh nang Thieu (V2 moi)

| # | Tinh nang | Tai lieu tham khao |
|---|-----------|-------------------|
| FEAT-01 | Scroll-snap (100vh moi section) | doc 03, Section 8 |
| FEAT-02 | Keyboard navigation (Arrow, Home/End, 1-9, F) | doc 01, F01-F06 |
| FEAT-03 | Fullscreen presentation mode | doc 01, F13 |
| FEAT-04 | Shared UI components (GlassCard, KPICard, v.v.) | doc 04, V2 Recs |
| FEAT-05 | Hinh anh san pham thuc te | doc 06 |
| FEAT-06 | PDF export | doc 01, F12 |
| FEAT-07 | Slide progress indicator | doc 03 |
| FEAT-08 | Number formatting kieu VN | doc 05 |

---

## 2. MUC TIEU V2

### Khi hoan thanh V2, ket qua phai dat:

1. **Zero emoji** trong toan bo codebase va DOM render
2. **So lieu 100% khop** voi Master V2.1
3. **PowerPoint UX**: 100vh sections, scroll-snap, keyboard nav, fullscreen mode
4. **Hinh anh thuc te**: It nhat 10/25 hinh da co (CNC, DC, IoT)
5. **Performance**: Lighthouse >= 85 Performance, >= 90 Accessibility
6. **Responsive**: 375px den 2560px khong loi hien thi
7. **Khong giong AI lam**: Van ban tieng Viet tu nhien, typography chuyen nghiep

---

## PHASE 0 — BUGFIX KHAN CAP (Ngay 1-2)

> Muc tieu: Sua het loi hien tai, dam bao V1 sach truoc khi refactor.

### Task 0.1: Xoa toan bo Emoji

**Thoi gian**: 2 gio  
**Doc truoc**: `docs/02_SLIDE_CONTENT_SPEC.md` (bang Lucide icon mapping)

| File | Emoji hien tai | Thay bang Lucide | Import can them |
|------|---------------|-----------------|-----------------|
| `HeroSection.tsx` | `💰` stat icon | `<DollarSign size={20} />` | `DollarSign` |
| `HeroSection.tsx` | `🏗️` stat icon | `<Building2 size={20} />` | `Building2` |
| `HeroSection.tsx` | `📍` stat icon | `<MapPin size={20} />` | `MapPin` |
| `HeroSection.tsx` | `👥` stat icon | `<Users size={20} />` | `Users` |
| `ExecutiveSummary.tsx` | `🤖` pillar card | `<Cpu size={24} />` | `Cpu` |
| `ExecutiveSummary.tsx` | `⚙️` pillar card | `<Cog size={24} />` | `Cog` |
| `ExecutiveSummary.tsx` | `🖥️` pillar card | `<Server size={24} />` | `Server` |
| `ThreePillars.tsx` | `🌐` MekongOS header | `<Globe size={20} />` | `Globe` |
| `ThreePillars.tsx` | `⚙️` CNC header | `<Cog size={20} />` | `Cog` |
| `ThreePillars.tsx` | `🖥️` DC header | `<Monitor size={20} />` | `Monitor` |
| `ThreePillars.tsx` | `💰` Services header | `<Receipt size={20} />` | `Receipt` |
| `Infrastructure.tsx` | `🏗️` building header | `<Building2 size={20} />` | `Building2` |
| `TeamOrganization.tsx` | `🌏` experts section | `<Globe size={20} />` | `Globe` |
| `TeamOrganization.tsx` | `📊` ESOP section | `<BarChart3 size={20} />` | `BarChart3` |

**Kiem tra**: Sau khi sua, chay:
```bash
# Tim emoji con sot — ket qua phai = 0
grep -rP '[\x{1F300}-\x{1FAFF}]' src/
```

### Task 0.2: Xac nhan va Sua Revenue Y10/Y15

**Thoi gian**: 1 gio  
**Doc truoc**: `docs/05_DATA_LAYER_SPEC.md` + Master V2.1 Appendix G

Revenue data trong `financials.ts` hien tai la **single-year** (Y10 = 14,5M). Master V2.1 ghi Revenue Y10 = 30,50M va Y15 = 43,00M.

**Hanh dong**:
1. Mở `DE_AN_MEKONG_V2/MEKONG_DE_AN_V2_MASTER.md`, tim Appendix G
2. Xac dinh 30,50M la **cumulative** hay **single-year**
3. Neu cumulative: giu data hien tai, cap nhat label slide thanh "Doanh thu tich luy 10 nam"
4. Neu single-year: cap nhat `revenueByYear` array in `financials.ts`
5. Ghi lai ket qua xac nhan vao comment trong code

### Task 0.3: Chuan hoa Dinh dang So

**Thoi gian**: 2 gio  
**Doc truoc**: `docs/05_DATA_LAYER_SPEC.md`, Section Formatting Rules

Tao utility function:
```typescript
// src/utils/format.ts

export function formatCurrency(value: number, unit = 'USD'): string {
    // 47500000 -> "47,50M USD"
    if (value >= 1_000_000) {
        return `${(value / 1_000_000).toFixed(2).replace('.', ',')}M ${unit}`;
    }
    return `${value.toLocaleString('vi-VN')} ${unit}`;
}

export function formatPercent(value: number): string {
    // 13.0 -> "13,0%"
    return `${value.toFixed(1).replace('.', ',')}%`;
}

export function formatArea(value: number, unit = 'm2'): string {
    // 10000 -> "10.000 m2"
    return `${value.toLocaleString('vi-VN')} ${unit}`;
}
```

Ap dung cho **moi noi** hien thi so trong components. Tim tat ca hardcoded string nhu `"47.5M"` va thay bang `formatCurrency(47_500_000)`.

### Task 0.4: Build & Verify

```bash
npm run build          # Phai khong loi
npm run preview        # Mo localhost:4173, kiem tra mat
# Grep emoji lan cuoi
grep -rP '[\x{1F300}-\x{1FAFF}]' src/    # Phai = 0 ket qua
```

---

## PHASE 1 — REFACTOR & SHARED COMPONENTS (Ngay 3-6)

> Muc tieu: Tach shared components, thiet lap cau truc V2 sach.

### Task 1.1: Tao Shared UI Components

**Thoi gian**: 4 gio  
**Doc truoc**: `docs/04_COMPONENT_ARCHITECTURE.md` (Section Shared Components)

Tao thu muc `src/components/ui/` voi 6 component:

#### 1.1.1 SectionLayout.tsx

```tsx
interface SectionLayoutProps {
    id: string;
    children: React.ReactNode;
    className?: string;
}
```
- Boc moi section trong `<section>` voi `id`, `ref` cho useInView
- Apply `section-container` class (min-h-screen, padding)
- Apply scroll-snap-align: start

#### 1.1.2 GlassCard.tsx

```tsx
interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
    accentColor?: 'cyan' | 'magenta' | 'green' | 'orange';
}
```
- Background: `rgba(255,255,255,0.03)`, backdrop-blur-xl
- Border: 1px solid rgba(255,255,255,0.06)
- Hover: neon glow tuong ung voi accentColor
- Xem chi tiet: `docs/03_UI_UX_DESIGN_SYSTEM.md` Section 6.1

#### 1.1.3 KPICard.tsx

```tsx
interface KPICardProps {
    value: number;
    label: string;
    unit?: string;
    icon: React.ReactNode;   // Lucide icon, KHONG BAO GIO la emoji
    accentColor?: string;
    format?: 'currency' | 'percent' | 'number' | 'area';
    animate?: boolean;
}
```
- Dung useCountUp khi `animate = true`
- Hien thi value voi formatCurrency / formatPercent tu `utils/format.ts`
- Icon la Lucide component truyen vao qua props

#### 1.1.4 TabBar.tsx

```tsx
interface Tab {
    id: string;
    label: string;
    icon: React.ReactNode;
    accentColor: string;
}

interface TabBarProps {
    tabs: Tab[];
    activeTab: string;
    onChange: (tabId: string) => void;
}
```
- Hien dung tren ThreePillars va FinancialOverview
- Active tab co neon underline + gradient text

#### 1.1.5 DataTable.tsx

```tsx
interface Column<T> {
    key: keyof T;
    header: string;
    align?: 'left' | 'center' | 'right';
    format?: (value: unknown) => string;
}

interface DataTableProps<T> {
    columns: Column<T>[];
    data: T[];
    highlightRow?: (row: T) => boolean;
}
```
- Hien dung tren Sensitivity Analysis, Revenue table, v.v.
- Glassmorphism header, alternating row opacity

#### 1.1.6 PillBadge.tsx

```tsx
interface PillBadgeProps {
    text: string;
    color?: string;
}
```
- Badge nho hien tag (vat lieu, chung nhan, nganh)
- Dung trong ThreePillars (CNC materials, certs)

### Task 1.2: Refactor 11 Sections dung Shared Components

**Thoi gian**: 6 gio  
**Lam theo thu tu**:

1. HeroSection — thay stat grid bang `<KPICard>`, boc trong `<SectionLayout>`
2. ExecutiveSummary — thay pillar cards bang `<GlassCard>` + Lucide icon
3. MarketOpportunity — thay market cards bang `<GlassCard>`
4. ThreePillars — thay tab system bang `<TabBar>`, material tags bang `<PillBadge>`
5. Infrastructure — thay building cards bang `<GlassCard>`
6. FinancialOverview — thay tab system bang `<TabBar>`, tables bang `<DataTable>`
7. LegalESG — thay cards bang `<GlassCard>`
8. TeamOrganization — thay cards bang `<GlassCard>`, stats bang `<KPICard>`
9. ImplementationRoadmap — thay milestone cards
10. StrategicValue — thay value cards bang `<GlassCard>` + `<KPICard>`
11. ContactCTA — minimal, chi can `<SectionLayout>`

**Quy tac khi refactor**:
- **Khong thay doi** logic hien thi hay noi dung
- Chi thay the HTML/Tailwind trung lap bang shared component
- Moi component refactor xong -> `npm run build` -> kiem tra tren browser
- Commit tung section, khong gop tat ca vao 1 commit

### Task 1.3: Tao Hook useSlideNavigation

**Thoi gian**: 2 gio  
**Doc truoc**: `docs/01_PRD_PRODUCT_REQUIREMENTS.md` (F01-F06)

```typescript
// src/hooks/useSlideNavigation.ts

export function useSlideNavigation(sectionIds: string[]) {
    // State
    const [currentSlide, setCurrentSlide] = useState(0);

    // Keyboard handler
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            switch (e.key) {
                case 'ArrowDown':
                case 'ArrowRight':
                    nextSlide();
                    break;
                case 'ArrowUp':
                case 'ArrowLeft':
                    prevSlide();
                    break;
                case 'Home':
                    goToSlide(0);
                    break;
                case 'End':
                    goToSlide(sectionIds.length - 1);
                    break;
                default:
                    // Phim 1-9 nhay den slide tuong ung
                    const num = parseInt(e.key);
                    if (num >= 1 && num <= sectionIds.length) {
                        goToSlide(num - 1);
                    }
            }
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, []);

    // Scroll listener -> cap nhat currentSlide
    // ...

    return { currentSlide, nextSlide, prevSlide, goToSlide, totalSlides };
}
```

### Task 1.4: Cap nhat Navbar tich hop Slide State

- Navbar doc `currentSlide` tu hook
- Hien thi so slide hien tai: "3 / 11"
- Dot indicators phat sang theo slide hien tai
- Progress bar ở bottom navbar

---

## PHASE 2 — DU LIEU & NOI DUNG (Ngay 7-10)

> Muc tieu: Du lieu 100% chinh xac theo V2.1, tach het hardcode.

### Task 2.1: Refactor Data Files

**Thoi gian**: 3 gio  
**Doc truoc**: `docs/05_DATA_LAYER_SPEC.md` (toan bo)

Tao `src/types/index.ts` voi toan bo TypeScript interfaces tu doc 05:
- `CAPEXStructure`, `Phase`, `RevenueYear`, `PLYear`, `KPIMetrics`
- `Scenario`, `SensitivityVariable`, `StrategicValue`, `CAPEXByBlock`
- `IoTProduct`, `MekongOSTier`, `CNCSpecs`, `DatacenterSpecs`
- `MarketSegment`, `CompetitivePosition`, `SWOT`
- `HeadcountPhase`, `CLevel`, `Expert`, `ESOP`
- `TimelinePhase`, `Milestone`

Cap nhat 5 data files import tu `types/index.ts`.

### Task 2.2: Kiem tra Du lieu vs Master V2.1

**Thoi gian**: 3 gio  
**Doc truoc**: `DE_AN_MEKONG_V2/MEKONG_DE_AN_V2_MASTER.md`

Doi chieu TUNG SO:

| So lieu | File | Dong | Gia tri hien tai | Gia tri V2.1 | Hanh dong |
|---------|------|------|-----------------|--------------|-----------|
| CAPEX | financials.ts | ~L5 | 47.5 | 47,50M | OK |
| Von CSH | financials.ts | ~L8 | 34.97 | 34,97M | OK |
| No vay | financials.ts | ~L9 | 12.53 | 12,53M | OK |
| NPV | financials.ts | ~L50 | 1.5 | 1,50M | OK |
| IRR | financials.ts | ~L51 | 13.0 | 13,0% | OK |
| Payback | financials.ts | ~L52 | 13 | 13 nam | OK |
| DSCR | financials.ts | ~L53 | 4.91 | 4,91x | OK |
| Monte Carlo | financials.ts | ~L54 | 65 | 65% | OK |
| Revenue Y10 | financials.ts | ~L30 | 14.5 | **30,50M** | **CAN SUA** |
| Revenue Y15 | financials.ts | ~L35 | 32 | **43,00M** | **CAN SUA** |
| Dien tich | products.ts | — | — | 10.000 m2 | Kiem tra |
| PUE | products.ts | ~L70 | 1.32 | 1,32 | OK |
| Nhan su Y15 | team.ts | ~L10 | 300 | 300 | OK |
| ESOP | team.ts | ~L20 | 5% / 1.75M | 5% / 1,75M | OK |

**Hanh dong voi Revenue Y10/Y15**:
1. Mo Master V2.1 Appendix G, doc bang Revenue chi tiet
2. Neu Master ghi revenue don nam (single-year) Y10 = 30,50M -> cap nhat financials.ts
3. Neu Master ghi revenue cong don (cumulative) 10Y = 30,50M -> label la "Doanh thu tich luy"
4. Comment ro trong code: `// V2.1 Appendix G: Revenue Y10 = 30,50M (per-year/cumulative)`

### Task 2.3: Tach Hardcoded Content

**Thoi gian**: 4 gio

Nhieu section dang hardcode text truc tiep trong JSX. Chuyen sang data file hoac constants:

| Component | Hardcoded Content | Chuyen sang |
|-----------|------------------|-------------|
| ExecutiveSummary | 3 pillar descriptions | `products.ts` hoac constants |
| Infrastructure | Building specs, floor details | `data/infrastructure.ts` (moi) |
| LegalESG | Legal items, ESG items | `data/legal.ts` (moi) |
| ContactCTA | Contact info, CTA text | `data/contact.ts` (moi) |

Tao them 3 data files:
- `src/data/infrastructure.ts` — thong so toa nha, tang, dien tich
- `src/data/legal.ts` — giay phep, ESG metrics, chung nhan
- `src/data/contact.ts` — thong tin lien he, dia chi, links

### Task 2.4: Viet Noi dung Slide Chinh thuc

**Thoi gian**: 4 gio  
**Doc truoc**: `docs/02_SLIDE_CONTENT_SPEC.md` (toan bo — QUAN TRONG NHAT)

Doc 02 da co noi dung chi tiet cho tung slide. Dev can:
1. Mo doc 02, doc tung slide section
2. So sanh voi component hien tai
3. Cap nhat/them noi dung thieu
4. Dam bao moi tieu de, so lieu, bullet point khop voi spec

**Uu tien noi dung slide**:
- Slide 1 (Hero): Tagline, 4 stats, CTA
- Slide 4 (Pillars): San pham IoT MK-200/MK-300/AMR, MekongOS 3 tier, CNC 28 may DMG MORI, DC Tier III 100 racks
- Slide 6 (Financials): CAPEX waterfall, Revenue chart 15Y, P&L, KPIs, Sensitivity, Scenarios
- Slide 10 (Strategic): 7 gia tri = 20,32M USD

---

## PHASE 3 — POWERPOINT UX (Ngay 11-14)

> Muc tieu: Giao dien va trai nghiem nhu PowerPoint presentation.

### Task 3.1: Scroll-snap Implementation

**Thoi gian**: 2 gio  
**Doc truoc**: `docs/03_UI_UX_DESIGN_SYSTEM.md` Section 8

```css
/* index.css — them vao root */
html {
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
}

.section-container {
    scroll-snap-align: start;
    min-height: 100vh;
    height: 100vh;           /* Bat buoc 100vh cho moi slide */
    overflow-y: auto;        /* Content dai hon 100vh co the scroll trong */
}
```

**Luu y quan trong**:
- Slide 4 (Pillars) va Slide 6 (Financials) co nhieu noi dung -> can `overflow-y: auto` ben trong
- Slide 1 (Hero) va 11 (Contact) vua du 100vh -> `overflow: hidden`
- Test tren mobile: viewport height thay doi khi keyboard mo

### Task 3.2: Keyboard Navigation

**Thoi gian**: 3 gio

Tich hop `useSlideNavigation` hook (da tao Phase 1):
- Arrow Down / Right / Space / PageDown -> slide tiep
- Arrow Up / Left / PageUp -> slide truoc
- Home -> slide dau
- End -> slide cuoi
- Phim 1-9 -> nhay den slide thu N
- F hoac F11 -> toggle fullscreen

```typescript
// src/hooks/useSlideNavigation.ts
function goToSlide(index: number) {
    const section = document.getElementById(sectionIds[index]);
    section?.scrollIntoView({ behavior: 'smooth' });
    setCurrentSlide(index);
}
```

### Task 3.3: Slide Progress Indicator

**Thoi gian**: 2 gio

Them vao Navbar hoac tao component rieng:
- Progress bar mong o bottom viewport (2px height)
- Hien thi: phan tram scroll (slide 3/11 = 27%)
- Mau: gradient cyan -> magenta
- Fade out sau 3 giay khong tuong tac

### Task 3.4: Fullscreen Presentation Mode

**Thoi gian**: 3 gio

```typescript
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        // An Navbar, chi hien dot indicators
        setPresenterMode(true);
    } else {
        document.exitFullscreen();
        setPresenterMode(false);
    }
}
```

Khi presenterMode = true:
- An Navbar header (chi giu dot indicators)
- An scrollbar
- Hien thi so slide o goc duoi phai: "3 / 11"
- Font size tang 10% (accessibility cho man hinh chieu)

### Task 3.5: Transition Animations giua Slides

**Thoi gian**: 2 gio

Hieu ung chuyen slide PowerPoint-like:
- Fade + slide up khi scroll xuong
- Fade + slide down khi scroll len
- Duration: 400ms
- Easing: `cubic-bezier(0.25, 0.1, 0.25, 1.0)`

```tsx
// Trong SectionLayout.tsx
<motion.section
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
>
```

---

## PHASE 4 — HINH ANH & POLISH (Ngay 15-18)

> Muc tieu: Them hinh anh thuc te, toi uu hieu nang, hoan thien chi tiet.

### Task 4.1: Thu thap va Xu ly Hinh anh

**Thoi gian**: 4 gio  
**Doc truoc**: `docs/06_IMAGE_ASSET_MANIFEST.md` (toan bo)

**Uu tien thu thap** (10 hinh quan trong nhat):

| # | ID | Mo ta | Nguon |
|---|----|-------|-------|
| 1 | `cnc-01` | DMG MORI DMU 50 | dmgmori.com press |
| 2 | `dc-01` | Server rack rows | Unsplash/Pexels (datacenter) |
| 3 | `iot-03` | AMR robot | MiR Robots / KUKA press |
| 4 | `loc-01` | KCNC aerial | Google Earth |
| 5 | `dc-02` | GPU cluster NVIDIA | NVIDIA press kit |
| 6 | `cnc-02` | CNC workshop overview | Unsplash (CNC factory) |
| 7 | `iot-01` | IoT edge gateway | Advantech/Moxa press |
| 8 | `esg-01` | Solar rooftop | Unsplash (solar factory) |
| 9 | `loc-02` | Cong KCNC | Google Maps Street View |
| 10 | `dc-05` | NOC center | Pexels (network operations) |

**Quy trinh xu ly moi hinh**:
1. Download hinh goc (JPG/PNG)
2. Resize theo spec trong doc 06 (max 1200px width)
3. Convert sang WebP (quality 80%)
4. Giu ban JPG lam fallback
5. Dat vao `public/images/{category}/`
6. Cap nhat component tuong ung

```bash
# Tool xu ly hinh (can cai sharp hoac dung online)
npx sharp-cli resize 1200 --withoutEnlargement --format webp --quality 80 input.jpg -o output.webp
```

### Task 4.2: Tich hop Hinh vao Components

**Thoi gian**: 3 gio

Moi section can hinh:
- HeroSection: `loc-01` (KCNC aerial) lam background voi overlay toi
- ThreePillars/IoT: `iot-01`, `iot-03`, `iot-04`
- ThreePillars/CNC: `cnc-01`, `cnc-03`, `cnc-04`
- ThreePillars/DC: `dc-01`, `dc-02`
- Infrastructure: `cnc-02`, `dc-03`, `dc-04`
- LegalESG: `esg-01`, `esg-02`

Dung `<picture>` tag voi WebP + JPEG fallback:
```tsx
<picture>
    <source srcSet="/images/cnc/cnc-01-dmg-mori-dmu50.webp" type="image/webp" />
    <img
        src="/images/cnc/cnc-01-dmg-mori-dmu50.jpg"
        alt="May CNC 5-axis DMG MORI DMU 50 3rd Generation"
        loading="lazy"
        className="w-full h-auto rounded-xl"
    />
</picture>
```

### Task 4.3: Toi uu Performance

**Thoi gian**: 2 gio

1. **Lazy load images**: Tat ca img co `loading="lazy"` (tru Hero)
2. **Code splitting**: Dynamic import cho sections nang
   ```tsx
   const FinancialOverview = lazy(() => import('./components/FinancialOverview'));
   ```
3. **Font optimization**: Preload Inter font
   ```html
   <link rel="preload" href="fonts/Inter.woff2" as="font" type="font/woff2" crossorigin />
   ```
4. **Bundle analysis**:
   ```bash
   npx vite-bundle-visualizer
   ```
   Muc tieu: JS < 250KB gzipped, CSS < 25KB gzipped

### Task 4.4: Responsive Final Check

**Thoi gian**: 3 gio

Test tren 5 breakpoints:

| Breakpoint | Viewport | Uu tien |
|------------|----------|---------|
| Mobile S | 375 x 667 (iPhone SE) | HIGH |
| Mobile L | 428 x 926 (iPhone 14 Pro Max) | MEDIUM |
| Tablet | 768 x 1024 (iPad) | HIGH |
| Laptop | 1440 x 900 | HIGH |
| Desktop | 1920 x 1080 | HIGH |

**Kiem tra moi breakpoint**:
- [ ] Text khong bi tran
- [ ] Chart khong bi ep/mat
- [ ] Card grid chuyen sang 1 cot tren mobile
- [ ] Navbar chuyen sang dot indicators tren mobile
- [ ] Bieu do recharts responsive (dung ResponsiveContainer)
- [ ] Hinh anh khong bi keo gia

---

## PHASE 5 — TESTING & DEPLOY (Ngay 19-20)

> Muc tieu: Dam bao chat luong, deploy production.

### Task 5.1: Checklist Kiem tra Tong the

**Thoi gian**: 3 gio

#### So lieu Tai chinh (grep kiem tra)

```bash
# Chay trong thu muc src/
grep -rn "47.5\|47,50" src/        # CAPEX — phai xuat hien
grep -rn "1.5\|1,50" src/          # NPV — phai xuat hien
grep -rn "13.0\|13,0" src/         # IRR — phai xuat hien
grep -rn "34.97\|34,97" src/       # Von CSH — phai xuat hien
grep -rn "12.53\|12,53" src/       # No vay — phai xuat hien
grep -rn "20.32\|20,32" src/       # Strategic Value — phai xuat hien
grep -rn "103.52\|103,52" src/     # Revenue 10Y — phai xuat hien
```

#### Emoji (phai = 0 ket qua)

```bash
grep -rP '[\x{1F300}-\x{1FAFF}\x{2600}-\x{26FF}\x{2700}-\x{27BF}]' src/
```

#### TypeScript (phai pass)

```bash
npx tsc --noEmit
```

### Task 5.2: Lighthouse Audit

**Thoi gian**: 1 gio

```bash
npm run build
npm run preview
# Mo Chrome DevTools -> Lighthouse
```

| Metric | Muc tieu | Cach dat |
|--------|---------|---------|
| Performance | >= 85 | Lazy load, WebP, code split |
| Accessibility | >= 90 | Alt text, contrast, keyboard nav |
| Best Practices | >= 90 | HTTPS, no console.log |
| SEO | >= 80 | Meta tags, OG image |

### Task 5.3: Build Production

```bash
# Clean build
rm -rf dist node_modules/.tmp
npm run build

# Kiem tra output size
ls -lah dist/assets/
# JS < 300KB, CSS < 30KB
```

### Task 5.4: Deploy

**Option A: GitHub Pages**
```bash
# Them base vao vite.config.ts
# base: '/MEKONG_TECHNOLOGY/'
npm run build
# Push dist/ len gh-pages branch
```

**Option B: Vercel**
```bash
npx vercel --prod
```

### Task 5.5: Post-deploy Verification

- [ ] Mo URL production tren Chrome, Firefox, Safari, Edge
- [ ] Kiem tra 11 slide hien thi day du
- [ ] Kiem tra keyboard navigation hoat dong
- [ ] Kiem tra mobile (mo tren dien thoai thuc)
- [ ] Share link Facebook/Zalo -> kiem tra OG image hien thi
- [ ] Gui link cho stakeholder review

---

## 9. DEPENDENCY MAP

```
Phase 0 (Bugfix)
    |
    v
Phase 1 (Refactor)  -----> Task 1.1 (Shared UI) phai xong truoc Task 1.2 (Refactor sections)
    |                 \---> Task 1.3 (Hook) doc lap voi Task 1.1
    v
Phase 2 (Data)      -----> Task 2.1 (Types) phai xong truoc Task 2.2, 2.3
    |                 \---> Task 2.4 (Content) phu thuoc doc 02 + Task 2.2 (data verified)
    v
Phase 3 (UX)        -----> Task 3.1 (Scroll-snap) phai xong truoc Task 3.2, 3.3
    |                 \---> Task 3.4 (Fullscreen) doc lap
    v
Phase 4 (Images)    -----> Task 4.1 (Thu thap) phai xong truoc Task 4.2 (Tich hop)
    |                 \---> Task 4.3, 4.4 doc lap
    v
Phase 5 (Deploy)    -----> Task 5.1 (Checklist) phai xong truoc Task 5.3 (Build)
```

---

## 10. RISK & MITIGATION

| Rui ro | Xac suat | Tac dong | Giam thieu |
|--------|---------|---------|-----------|
| Hinh anh khong tim duoc license-safe | Trung binh | Cham tien do Phase 4 | Dung gradient placeholder (doc 06) |
| Revenue Y10/Y15 discrepancy khong ro | Cao | So lieu sai tren slide | Hoi stakeholder NGAY Phase 0, khong doi |
| Scroll-snap conflict voi content dai | Trung binh | UX xau tren mobile | overflow-y: auto ben trong section |
| Performance xuong duoi 85 | Thap | Deploy khong dat | Code split + lazy load images |
| Recharts khong responsive tren 375px | Trung binh | Chart bi cat | Thu responsive truoc, custom responsive |

---

## 11. DANH SACH TASK THEO SPRINT

### Sprint 1 (Ngay 1-5): Foundation

| # | Task | Phase | Effort | Phu thuoc |
|---|------|-------|--------|-----------|
| T01 | Xoa toan bo emoji | P0 | 2h | — |
| T02 | Xac nhan Revenue Y10/Y15 | P0 | 1h | — |
| T03 | Tao format utilities | P0 | 2h | — |
| T04 | Build & verify P0 | P0 | 1h | T01-T03 |
| T05 | Tao 6 shared UI components | P1 | 4h | T04 |
| T06 | Refactor Hero + Summary | P1 | 2h | T05 |
| T07 | Refactor Market + Pillars | P1 | 2h | T05 |
| T08 | Refactor Infra + Financial | P1 | 2h | T05 |
| T09 | Refactor Legal + Team + Roadmap + Strategic + Contact | P1 | 2h | T05 |
| T10 | Tao useSlideNavigation hook | P1 | 2h | — |

### Sprint 2 (Ngay 6-10): Data & Content

| # | Task | Phase | Effort | Phu thuoc |
|---|------|-------|--------|-----------|
| T11 | Tao TypeScript types | P2 | 2h | — |
| T12 | Refactor 5 data files | P2 | 2h | T11 |
| T13 | Kiem tra data vs V2.1 | P2 | 3h | T12 |
| T14 | Tao 3 data files moi (infra, legal, contact) | P2 | 2h | T11 |
| T15 | Cap nhat noi dung 11 slides theo doc 02 | P2 | 4h | T13, T14 |
| T16 | Tich hop Navbar voi slide state | P1 | 2h | T10 |

### Sprint 3 (Ngay 11-15): UX & Images

| # | Task | Phase | Effort | Phu thuoc |
|---|------|-------|--------|-----------|
| T17 | Scroll-snap CSS | P3 | 2h | T09 |
| T18 | Keyboard navigation | P3 | 3h | T10 |
| T19 | Progress indicator | P3 | 2h | T18 |
| T20 | Fullscreen mode | P3 | 3h | T18 |
| T21 | Transition animations | P3 | 2h | T17 |
| T22 | Thu thap + xu ly 10 hinh uu tien | P4 | 4h | — |
| T23 | Tich hop hinh vao components | P4 | 3h | T22, T09 |

### Sprint 4 (Ngay 16-20): Polish & Deploy

| # | Task | Phase | Effort | Phu thuoc |
|---|------|-------|--------|-----------|
| T24 | Toi uu performance | P4 | 2h | T23 |
| T25 | Responsive final check (5 breakpoints) | P4 | 3h | T24 |
| T26 | Checklist kiem tra tong the | P5 | 3h | T25 |
| T27 | Lighthouse audit | P5 | 1h | T26 |
| T28 | Build production + deploy | P5 | 2h | T27 |
| T29 | Post-deploy verification | P5 | 1h | T28 |

**Tong cong: 29 tasks, ~60 gio lam viec (~3 tuan lam viec thuc te)**

---

## TAI LIEU LIEN QUAN

| STT | File | Doc khi lam |
|-----|------|------------|
| 01 | `docs/01_PRD_PRODUCT_REQUIREMENTS.md` | Moi khi can hieu yeu cau chuc nang |
| 02 | `docs/02_SLIDE_CONTENT_SPEC.md` | Phase 2 — viet noi dung slides |
| 03 | `docs/03_UI_UX_DESIGN_SYSTEM.md` | Phase 1, 3 — design tokens, UX patterns |
| 04 | `docs/04_COMPONENT_ARCHITECTURE.md` | Phase 1 — refactor components |
| 05 | `docs/05_DATA_LAYER_SPEC.md` | Phase 2 — data types, verification |
| 06 | `docs/06_IMAGE_ASSET_MANIFEST.md` | Phase 4 — thu thap hinh anh |
| 07 | `docs/07_DEVELOPER_SETUP_GUIDE.md` | Ban dau — setup moi truong |

---

*Ke hoach nay la tai lieu song — cap nhat khi co thay doi scope hoac uu tien.*
