# KIEN TRUC COMPONENT (Component Architecture)
# MEKONG TECHNOLOGY HUB — WEB PRESENTATION

**Phien ban**: 2.0  
**Framework**: React 18 + TypeScript 5.6  
**Build tool**: Vite 6  
**Styling**: Tailwind CSS 3 + Framer Motion + Recharts  

---

## MUC LUC

1. [Tong quan Kien truc](#1-tong-quan-kien-truc)
2. [Cay Component (Component Tree)](#2-cay-component)
3. [Chi tiet tung Component](#3-chi-tiet-tung-component)
4. [Hooks tu tao (Custom Hooks)](#4-hooks-tu-tao)
5. [State Management](#5-state-management)
6. [Routing & Navigation](#6-routing--navigation)
7. [Quy tac Component](#7-quy-tac-component)
8. [File Structure](#8-file-structure)

---

## 1. TONG QUAN KIEN TRUC

### Stack ky thuat

| Layer | Cong nghe | Phien ban | Muc dich |
|-------|-----------|-----------|----------|
| UI Framework | React | 18.3 | Component-based UI |
| Language | TypeScript | 5.6 | Type safety |
| Build | Vite | 6.0 | Dev server + bundling |
| Styling | Tailwind CSS | 3.4 | Utility-first CSS |
| Animation | Framer Motion | 11.15 | Declarative animations |
| Charts | Recharts | 2.15 | SVG charts |
| Icons | Lucide React | 0.468 | Icon system |

### Nguyen tac kien truc

1. **Single Page Application (SPA)**: Khong co routing — tat ca 11 slide tren 1 trang
2. **Scroll-based navigation**: Chuyen slide bang scroll hoac click navbar
3. **Data-driven**: Noi dung lay tu data layer (`src/data/`), KHONG hardcode trong JSX
4. **Lazy animation**: Animation chi trigger khi slide vao viewport (IntersectionObserver)
5. **Zero emoji**: Tat ca icon dung Lucide React components

---

## 2. CAY COMPONENT

```
App
|-- Navbar                          (layout — fixed top)
|   |-- Logo (gradient-text)
|   |-- NavLinks (desktop)
|   |-- DotIndicators (mobile)
|
|-- main
    |-- HeroSection                 (slide 1)
    |   |-- FloatingOrbs
    |   |-- Badge
    |   |-- TitleBlock
    |   |-- StatsGrid               (4 KPI cards)
    |   |-- PillarIcons             (3 icons IoT/CNC/DC)
    |   |-- ScrollCTA
    |
    |-- ExecutiveSummary            (slide 2)
    |   |-- TitleBlock
    |   |-- PillarCards             (3 cards)
    |   |-- KPIGrid                 (6 KPICard components)
    |   |   |-- KPICard (x6)        (useCountUp)
    |   |-- CapitalPieChart         (Recharts PieChart)
    |
    |-- MarketOpportunity           (slide 3)
    |   |-- TitleBlock
    |   |-- GlobalCounters          (4 CounterCard)
    |   |   |-- CounterCard (x4)    (useCountUp)
    |   |-- VietnamBarChart         (Recharts BarChart horizontal)
    |   |-- SWOTGrid                (2x2 grid)
    |
    |-- ThreePillars                (slide 4)
    |   |-- TitleBlock
    |   |-- TabBar                  (3 tabs: IoT/CNC/DC)
    |   |-- AnimatePresence
    |       |-- IoTPanel
    |       |   |-- ProductCards    (3 san pham)
    |       |   |-- PlatformTiers   (MekongOS 3 tiers)
    |       |-- CNCPanel
    |       |   |-- SpecsGrid
    |       |   |-- MaterialTags
    |       |   |-- CertTags
    |       |   |-- IndustryTags
    |       |-- DCPanel
    |           |-- SpecsList
    |           |-- ServiceCards    (4 dich vu)
    |
    |-- Infrastructure              (slide 5)
    |   |-- TitleBlock
    |   |-- BuildingCrossSection    (3 tang)
    |   |-- InfraSpecGrid           (6 cards)
    |
    |-- FinancialOverview           (slide 6)
    |   |-- TitleBlock
    |   |-- RevenueAreaChart        (Recharts AreaChart stacked)
    |   |-- ScenarioTable           (3 kich ban)
    |   |-- SensitivityChart        (Recharts BarChart tornado)
    |   |-- KPIBadgeRow             (5 badges)
    |
    |-- LegalESG                    (slide 7)
    |   |-- TitleBlock
    |   |-- PermitsTable            (6 giay phep)
    |   |-- ESGCards                (3 cards: E/S/G)
    |   |-- CertificationPath      (6 pill badges)
    |
    |-- TeamOrganization            (slide 8)
    |   |-- TitleBlock
    |   |-- HeadcountChart          (Recharts BarChart stacked)
    |   |-- CLevelList              (5 C-level cards)
    |   |-- ExpertsList             (4 experts)
    |   |-- ESOPStats               (3 stats)
    |
    |-- ImplementationRoadmap       (slide 9)
    |   |-- TitleBlock
    |   |-- PhaseTimeline
    |   |   |-- ConnectorLine
    |   |   |-- PhaseCard (x5)
    |   |-- MilestoneRow            (9 pill badges)
    |
    |-- StrategicValue              (slide 10)
    |   |-- TitleBlock
    |   |-- ValueBarChart           (Recharts BarChart)
    |   |-- TotalValueCard
    |   |-- InvestorCommitments     (6 items)
    |   |-- LongTermVision          (3 moc)
    |
    |-- ContactCTA                  (slide 11)
        |-- BackgroundGlow
        |-- TitleBlock
        |-- CompanyInfo             (4 items)
        |-- CTAButton
        |-- Footer
```

---

## 3. CHI TIET TUNG COMPONENT

### 3.1 App (Root)

**File**: `src/App.tsx`

```typescript
// Nhiem vu: Render Navbar + 11 Section components  
// State: Khong co state rieng
// Layout: bg-dark-950, min-h-screen

export default function App() {
    return (
        <div className="bg-dark-950 min-h-screen">
            <Navbar />
            <main>
                <HeroSection />
                <ExecutiveSummary />
                <MarketOpportunity />
                <ThreePillars />
                <Infrastructure />
                <FinancialOverview />
                <LegalESG />
                <TeamOrganization />
                <ImplementationRoadmap />
                <StrategicValue />
                <ContactCTA />
            </main>
        </div>
    );
}
```

### 3.2 Navbar

**File**: `src/components/layout/Navbar.tsx`

| Prop/State | Kieu | Mo ta |
|-----------|------|-------|
| `active` | `string` (section ID) | Section hien tai (scroll-based) |
| `scrolled` | `boolean` | Da cuon qua 80px — hien glassmorphism bg |

**Hanh vi**:
- Dang ky scroll listener, cap nhat `active` dua tren `offsetTop` cua moi section
- Desktop: Hien 11 link text
- Mobile: Hien 11 dot indicators (w-2 h-2 rounded-full)
- Click link → smooth scroll den section

**Can cai thien (V2)**:
- Them slide number (1/11) hoac progress bar
- Them keyboard handler (Arrow keys)
- Them fullscreen button

### 3.3 HeroSection

**File**: `src/components/sections/HeroSection.tsx`

| Element | Hien tai | Can sua V2 |
|---------|----------|-----------|
| Badge | "De An Dau Tu · KCNC TP.HCM" | Giu nguyen |
| Title | "Mekong Technology Hub" | Giu nguyen |
| Subtitle | Mo ta he sinh thai | Giu nguyen |
| 4 Stats | Dung EMOJI | **THAY BANG LUCIDE ICON** |
| 3 Pillars | Dung Lucide icon | Giu nguyen |
| ScrollCTA | ChevronDown | Giu nguyen |

**FIX BAT BUOC**: Thay emoji trong stats array:
```typescript
// SAI (V1)
{ value: '47.5M', label: 'USD Dau tu', icon: '💰' }

// DUNG (V2) — dung Lucide component
{ value: '47,50M', label: 'USD Dau tu', Icon: DollarSign }
```

### 3.4 ExecutiveSummary

**File**: `src/components/sections/ExecutiveSummary.tsx`

**FIX BAT BUOC**:
- 3 Pillar cards dung emoji (`🤖`, `⚙️`, `🖥️`) → thay bang Lucide `Cpu`, `Cog`, `Server`
- KPI Revenue Y10: kiem tra so lieu voi V2.1

### 3.5 ThreePillars

**File**: `src/components/sections/ThreePillars.tsx`

**FIX BAT BUOC**:
- MekongOS header dung emoji (`🌐`) → thay bang Lucide `Globe`

**Luu y**: Component dung AnimatePresence + mode="wait" de chuyen tab muot. Pattern nay giu nguyen.

### 3.6 Infrastructure

**File**: `src/components/sections/Infrastructure.tsx`

**FIX BAT BUOC**:
- Building cross-section header dung emoji (`🏗️`) → thay bang Lucide `Building2`

### 3.7 TeamOrganization

**File**: `src/components/sections/TeamOrganization.tsx`

**FIX BAT BUOC**:
- Chuyen gia header dung emoji (`🌏`) → thay bang Lucide `Globe`
- ESOP header dung emoji (`📊`) → thay bang Lucide `BarChart3`

### 3.8 Cac Section Khac

FinancialOverview, LegalESG, ImplementationRoadmap, StrategicValue, ContactCTA:
- Hien tai KHONG dung emoji trong JSX (dung Lucide icon hoac text)
- Giu nguyen structure

---

## 4. HOOKS TU TAO

### 4.1 useInView

**File**: `src/hooks/useInView.ts`

```typescript
export function useInView(threshold: number = 0.2) {
    // Su dung IntersectionObserver
    // Return: { ref: RefObject, isInView: boolean }
    // Trigger 1 lan khi element vao viewport
    // threshold: ty le element phai hien thi (0.1 = 10%, 0.3 = 30%)
}
```

**Dung cho**: Tat ca section — trigger animation khi slide visible

### 4.2 useCountUp

**File**: `src/hooks/useInView.ts` (export chung)

```typescript
export function useCountUp(target: number, duration: number, trigger: boolean) {
    // Dem tu 0 den target voi easing easeOutExpo
    // Duration: 1500-2500ms
    // Trigger: isInView tu useInView
    // Return: number (gia tri hien tai)
}
```

**Dung cho**: KPI cards, counter cards, stat values

### 4.3 Hooks Can them (V2)

| Hook | Muc dich | Chi tiet |
|------|----------|----------|
| `useSlideNavigation` | Dieu huong keyboard | Arrow keys, Home/End, so 1-9 |
| `useFullscreen` | Toggle fullscreen | Phim F hoac double-click |
| `useActiveSlide` | Track slide hien tai | Thay the logic trong Navbar |

---

## 5. STATE MANAGEMENT

### Hien tai (V1): Local State

Khong dung global state. Moi component tu quan ly state:
- `Navbar`: active section, scrolled
- `ThreePillars`: activeTab (iot/cnc/dc)
- Cac section khac: isInView (tu hook)

### Khuyen nghi V2: Context hoac Zustand (nhe)

```typescript
// src/store/presentationStore.ts
interface PresentationState {
    currentSlide: number;          // 0-10
    totalSlides: number;           // 11
    isPresentationMode: boolean;   // fullscreen
    isDarkMode: boolean;           // dark/light toggle
}
```

Ly do: De dong bo slide hien tai giua Navbar, keyboard handler, va slide components.

---

## 6. ROUTING & NAVIGATION

### Hien tai: Hash-based scroll

```
/#hero → scroll den section id="hero"
/#summary → scroll den section id="summary"
...
```

### Khuyen nghi V2: Scroll Snap + Keyboard

```css
/* CSS Scroll Snap */
html {
    scroll-snap-type: y mandatory;
}
section {
    scroll-snap-align: start;
    min-height: 100vh;
}
```

```typescript
// Keyboard navigation
useEffect(() => {
    const handler = (e: KeyboardEvent) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
            goToSlide(currentSlide + 1);
        }
        if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            goToSlide(currentSlide - 1);
        }
        if (e.key === 'Home') goToSlide(0);
        if (e.key === 'End') goToSlide(totalSlides - 1);
        if (e.key >= '1' && e.key <= '9') goToSlide(parseInt(e.key) - 1);
        if (e.key === 'f' || e.key === 'F') toggleFullscreen();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
}, [currentSlide]);
```

---

## 7. QUY TAC COMPONENT

### 7.1 Naming Convention

| Loai | Convention | Vi du |
|------|-----------|-------|
| Component file | PascalCase.tsx | `HeroSection.tsx`, `KPICard.tsx` |
| Hook file | camelCase.ts | `useInView.ts` |
| Data file | camelCase.ts | `financials.ts` |
| CSS class (Tailwind) | kebab-case | `glass-card`, `neon-text` |
| CSS variable | kebab-case | `--neon-cyan` |
| Interface/Type | PascalCase | `PhaseData`, `ProductItem` |

### 7.2 Component Structure

Moi component file theo thu tu:
1. Imports (React, hooks, data, components, icons)
2. Constants / data transformations (ngoai component)
3. Sub-components (neu nho)
4. Main component (export)

### 7.3 Import Order

```typescript
// 1. React
import { useState, useEffect } from 'react';
// 2. Third-party
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
// 3. Icons
import { Cpu, Cog, Server, Check } from 'lucide-react';
// 4. Hooks
import { useInView, useCountUp } from '../../hooks/useInView';
// 5. Data
import { financials } from '../../data/financials';
import { products } from '../../data/products';
```

### 7.4 Animation Pattern

MOI section component PHAI co:
```typescript
const { ref, isInView } = useInView(0.1 ~ 0.3);
```

MOI khoi noi dung chinh PHAI co:
```typescript
<motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5-0.6, delay: 0-0.5 }}
>
```

---

## 8. FILE STRUCTURE

```
mekong-presentation/
|-- index.html
|-- package.json
|-- tsconfig.json
|-- tsconfig.app.json
|-- tsconfig.node.json
|-- vite.config.ts
|-- tailwind.config.ts
|-- postcss.config.js
|
|-- docs/                              ← TAI LIEU (thu muc nay)
|   |-- 01_PRD_PRODUCT_REQUIREMENTS.md
|   |-- 02_SLIDE_CONTENT_SPEC.md
|   |-- 03_UI_UX_DESIGN_SYSTEM.md
|   |-- 04_COMPONENT_ARCHITECTURE.md   ← File nay
|   |-- 05_DATA_LAYER_SPEC.md
|   |-- 06_IMAGE_ASSET_MANIFEST.md
|   |-- 07_DEVELOPER_SETUP_GUIDE.md
|
|-- public/
|   |-- images/                        ← Hinh anh san pham (can them)
|
|-- src/
    |-- App.tsx                        ← Root component
    |-- main.tsx                       ← Entry point (ReactDOM.createRoot)
    |-- index.css                      ← Tailwind + custom CSS
    |-- vite-env.d.ts
    |
    |-- components/
    |   |-- layout/
    |   |   |-- Navbar.tsx
    |   |
    |   |-- sections/                  ← 11 slide components
    |   |   |-- HeroSection.tsx
    |   |   |-- ExecutiveSummary.tsx
    |   |   |-- MarketOpportunity.tsx
    |   |   |-- ThreePillars.tsx
    |   |   |-- Infrastructure.tsx
    |   |   |-- FinancialOverview.tsx
    |   |   |-- LegalESG.tsx
    |   |   |-- TeamOrganization.tsx
    |   |   |-- ImplementationRoadmap.tsx
    |   |   |-- StrategicValue.tsx
    |   |   |-- ContactCTA.tsx
    |   |
    |   |-- ui/                        ← Shared UI components (V2 them)
    |       |-- GlassCard.tsx
    |       |-- KPICard.tsx
    |       |-- CounterCard.tsx
    |       |-- SectionLayout.tsx
    |       |-- TabBar.tsx
    |       |-- DataTable.tsx
    |       |-- PillBadge.tsx
    |
    |-- hooks/
    |   |-- useInView.ts              ← useInView + useCountUp
    |   |-- useSlideNavigation.ts     ← V2: keyboard nav
    |   |-- useFullscreen.ts          ← V2: fullscreen toggle
    |
    |-- data/
    |   |-- financials.ts
    |   |-- products.ts
    |   |-- market.ts
    |   |-- team.ts
    |   |-- timeline.ts
    |
    |-- types/                         ← V2: TypeScript interfaces
    |   |-- index.ts
    |
    |-- store/                         ← V2: Global state (optional)
        |-- presentationStore.ts
```

### V2 Shared Components (Khuyen nghi tach ra)

Hien tai nhieu pattern lap lai giua cac section. V2 nen tach thanh shared components:

| Component | Dung o | Muc dich |
|-----------|--------|----------|
| `SectionLayout` | Tat ca 11 section | Wrapper voi 100vh, padding, max-width, flex |
| `GlassCard` | 20+ cho | Card glassmorphism voi hover effect |
| `KPICard` | Summary, Financial | Card so lieu voi count-up |
| `CounterCard` | Market | Card counter lon |
| `TabBar` | Pillars | Tab navigation |
| `DataTable` | Financial, Legal | Bang du lieu nhat quan |
| `PillBadge` | Roadmap, Legal | Badge hinh vien con nhong |

---

*Tai lieu nay huong dan developer hieu toan bo kien truc component. Moi thay doi structure phai cap nhat tai lieu nay.*
