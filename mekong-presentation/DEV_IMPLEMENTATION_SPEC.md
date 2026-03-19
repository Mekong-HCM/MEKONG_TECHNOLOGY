# DEV IMPLEMENTATION SPEC — Web Presentation Refactor (Phase 3-5)

> Mục tiêu: Refactor 26 slides → 18 main slides + tab sub-slides, hybrid business + tech tone.
> Đối tượng: BQL Khu Công nghệ cao TP.HCM
> Thời điểm: Q1/2026

---

## TÌNH TRẠNG HIỆN TẠI

### Đã hoàn thành (Phase 1-2)

| Hạng mục | Trạng thái | Chi tiết |
|---|---|---|
| Instruction file | DONE | `.github/instructions/web-presentation.instructions.md` — cập nhật v2 |
| Skill: data-sync | DONE | `.github/skills/v3-web-data-sync/SKILL.md` |
| Skill: dc-audit | DONE | `.github/skills/v3-web-dc-audit/SKILL.md` |
| Skill: slide-architecture | DONE | `.github/skills/v3-web-slide-architecture/SKILL.md` |
| Data layer (14 files) | DONE | Tất cả data files đã cập nhật V3 (22M canonical) |
| TabSlide component | DONE | `src/components/ui/TabSlide.tsx` — sẵn sàng sử dụng |
| TabBar component | DONE | `src/components/ui/TabBar.tsx` — sẵn sàng |
| "3 Trụ cột" → "2 Trụ cột" | DONE | SLIDES label đã sửa trong `useSlideNavigation.ts` |

### Cần làm (Phase 3-5)

| Phase | Hạng mục | Ước lượng files |
|---|---|---|
| 3 | Slide Architecture (SLIDES array, App.tsx, types) | 3 files |
| 4 | Component Refactor (merge + tạo mới) | 18 section files |
| 5 | Design Refinement (tailwind + CSS) | 2 files |

---

## PHASE 3: SLIDE ARCHITECTURE

### 3.1 — Cập nhật `src/hooks/useSlideNavigation.ts`

Thay thế SLIDES array (26 entries → 18 entries):

```typescript
export const SLIDES: SlideInfo[] = [
    { id: 'hero', label: 'Trang chủ', group: 'opening' },
    { id: 'urgency', label: 'Tính Cấp thiết', group: 'context' },
    { id: 'summary', label: 'Tóm tắt Điều hành', group: 'executive' },
    { id: 'market', label: 'Thị trường & Cạnh tranh', group: 'market' },
    { id: 'products', label: 'Hệ sinh thái Sản phẩm', group: 'product' },
    { id: 'product-iot', label: 'IoT Gateway & BMS', group: 'product' },
    { id: 'product-robot', label: 'Robot AMR/AGV', group: 'product' },
    { id: 'tech-rd', label: 'Công nghệ & R&D', group: 'tech' },
    { id: 'infra', label: 'Hạ tầng 3 Công trình', group: 'infrastructure' },
    { id: 'production', label: 'Năng lực Sản xuất CNC', group: 'production' },
    { id: 'business-model', label: 'Mô hình Kinh doanh', group: 'business' },
    { id: 'financials', label: 'Tài chính & Đầu tư', group: 'finance' },
    { id: 'incentives', label: 'Ưu đãi & Giá trị Chiến lược', group: 'finance' },
    { id: 'legal-esg', label: 'Pháp lý & ESG', group: 'legal' },
    { id: 'risk', label: 'Quản lý Rủi ro', group: 'risk' },
    { id: 'team', label: 'Đội ngũ & Tổ chức', group: 'team' },
    { id: 'roadmap', label: 'Lộ trình Triển khai', group: 'plan' },
    { id: 'conclusion', label: 'Kết luận & Cam kết', group: 'closing' },
];
```

### 3.2 — Cập nhật `src/App.tsx`

**Xoá lazy imports cũ:**
```
CompetitiveAnalysis, ExportStrategy, ThreePillars, ProductOHT,
TechStack, RDStrategy, RDLabs, RDIPPatents, QualityCerts,
ESGEnvironment, SocioEconomic, StrategicValue, ContactCTA
```

**Thêm lazy imports mới:**
```typescript
const MarketCompetitive = lazy(() => import('./components/sections/MarketCompetitive').then(m => ({ default: m.MarketCompetitive })));
const ProductEcosystem = lazy(() => import('./components/sections/ProductEcosystem').then(m => ({ default: m.ProductEcosystem })));
const TechRD = lazy(() => import('./components/sections/TechRD').then(m => ({ default: m.TechRD })));
const BusinessModel = lazy(() => import('./components/sections/BusinessModel').then(m => ({ default: m.BusinessModel })));
const TaxIncentives = lazy(() => import('./components/sections/TaxIncentives').then(m => ({ default: m.TaxIncentives })));
const Conclusion = lazy(() => import('./components/sections/Conclusion').then(m => ({ default: m.Conclusion })));
```

**Giữ nguyên (rename nếu cần):**
```
HeroSection, Urgency, ExecutiveSummary, ProductIoTGateway, 
ProductRobotAMR, Infrastructure, ProductionCapacity, 
FinancialOverview, LegalESG, RiskAnalysis, TeamOrganization,
ImplementationRoadmap
```

**Render order mới (18 slides):**
```tsx
<HeroSection />                    {/* 0 hero */}
<Urgency />                        {/* 1 urgency */}
<ExecutiveSummary />                {/* 2 summary */}
<MarketCompetitive />              {/* 3 market */}
<ProductEcosystem />               {/* 4 products */}
<ProductIoTGateway />              {/* 5 product-iot */}
<ProductRobotAMR />                {/* 6 product-robot */}
<TechRD />                         {/* 7 tech-rd */}
<Infrastructure />                 {/* 8 infra */}
<ProductionCapacity />             {/* 9 production */}
<BusinessModel />                  {/* 10 business-model */}
<FinancialOverview />              {/* 11 financials */}
<TaxIncentives />                  {/* 12 incentives */}
<LegalESG />                       {/* 13 legal-esg */}
<RiskAnalysis />                   {/* 14 risk */}
<TeamOrganization />               {/* 15 team */}
<ImplementationRoadmap />          {/* 16 roadmap */}
<Conclusion />                     {/* 17 conclusion */}
```

### 3.3 — Cập nhật `src/types/index.ts`

Thêm types mới:

```typescript
// Business Unit enum
export type BusinessUnit = 'BU1' | 'BU2';

// Business model data
export interface RevenueStream {
    name: string;
    bu: BusinessUnit;
    revenueEstimate: string;
    marginRange: string;
    startYear: string;
}

export interface BusinessModelData {
    streams: RevenueStream[];
    targetCustomers: TargetCustomer[];
    revenueTable: RevenueYear[];
}

export interface TargetCustomer {
    segment: string;
    region: string;
    products: string[];
    dealSize: string;
}

// Tax incentive data
export interface TaxIncentive {
    name: string;
    basis: string;
    estimatedValue: string;
    period: string;
}

export interface IncentivesData {
    taxBenefits: TaxIncentive[];
    totalEstimated: number;
    strategicBreakdown: StrategicComponent[];
    roiComparison: ROIComparison[];
}

export interface ROIComparison {
    metric: string;
    mekong: string;
    industry: string;
    advantage: string;
}
```

---

## PHASE 4: COMPONENT REFACTOR — CHI TIẾT TỪNG SLIDE

### Slide 0 — HeroSection (giữ nguyên)
- **File**: `HeroSection.tsx` (không đổi)
- **Action**: Không refactor. Đã đúng V3.

### Slide 1 — Urgency (refactor → TabSlide)
- **File**: `Urgency.tsx`
- **Action**: Wrap trong `TabSlide` với 3 tabs
- **Tabs**:
  - `global` — Thị trường toàn cầu: FDI trends, manufacturing shift
  - `vietnam` — Bối cảnh Việt Nam: FDI 12%/năm, CNC gap, SME needs
  - `kcnc` — Cơ hội KCNC: SHTP ecosystem, incentives, location
- **Data**: Tái sử dụng nội dung hiện có, chia thành 3 nhóm

### Slide 2 — ExecutiveSummary (refactor → TabSlide)
- **File**: `ExecutiveSummary.tsx`
- **Action**: Wrap trong `TabSlide` với 4 tabs
- **Tabs**:
  - `overview` — Tổng quan 22M: CAPEX donut, equity/debt, GFA, headcount
  - `pillars` — 2 Trụ cột: BU1 70,8% + BU2 29,2% breakdown
  - `kpis` — KPI Summary: NPV, IRR, DSCR, Revenue steady, Breakeven
  - `strategic` — Giá trị Chiến lược: 7M breakdown (từ StrategicValue cũ)
- **Data**: `financials.ts` (capex, kpis, strategicBreakdown)

### Slide 3 — MarketCompetitive (MỚI — merge 3 cũ)
- **File**: `MarketCompetitive.tsx` (TẠO MỚI)
- **Merge từ**: `MarketOpportunity.tsx` + `CompetitiveAnalysis.tsx` + `ExportStrategy.tsx`
- **Tabs**:
  - `market` — Market Size: Global IoT/CNC counters, VN segments bar chart, SWOT, positioning SVG
  - `moat` — Competitive MOAT: Competitor table, Mekong advantages, 5 MOAT layers, thời gian replicate
  - `export` — Export Strategy: 3-ring model, ASEAN targets, KPI cards
- **Data**: `market.ts`, `competitive.ts`
- **Note**: Giữ nguyên SVG positioning chart từ MarketOpportunity, Recharts từ CompetitiveAnalysis

### Slide 4 — ProductEcosystem (MỚI — merge 2 cũ)
- **File**: `ProductEcosystem.tsx` (TẠO MỚI)
- **Merge từ**: `ThreePillars.tsx` + `ProductOHT.tsx`
- **Tabs**:
  - `overview` — 2 Trụ cột Overview: BU1 (70,8%) + BU2 (29,2%) cards, tổng 26 sản phẩm
  - `bu1` — BU1 Điện tử (21 SP): IoT gateway, Robot, MekongOS items (lấy từ ThreePillars tab iot)
  - `bu2` — BU2 CNC (5 SP): CNC specs, materials, industries (lấy từ ThreePillars tab cnc)
  - `synergy` — Synergy & DC Nội bộ: DC specs + OHT-100 + 5-layer ecosystem (từ ProductOHT)
- **Data**: `products.ts`, `productDetails.ts`

### Slide 5 — ProductIoTGateway (refactor → TabSlide)
- **File**: `ProductIoTGateway.tsx`
- **Action**: Wrap trong `TabSlide` với 4 tabs
- **Tabs**:
  - `mk200` — MK-200: NXP i.MX8M specs, pricing 350-450 USD
  - `mk300` — MK-300: Jetson specs, AI/edge computing, pricing
  - `bms` — MekongBMS: BMS/SCADA platform, protocols, deployment
  - `platform` — MekongOS Platform: 3-tier SaaS (Starter/Pro/Enterprise)
- **Data**: `productDetails.ts`, `products.ts`

### Slide 6 — ProductRobotAMR (refactor → TabSlide)
- **File**: `ProductRobotAMR.tsx`
- **Action**: Wrap trong `TabSlide` với 4 tabs
- **Tabs**:
  - `amr` — AMR specs: AMR-500 + AMR-1000, LiDAR SLAM, RL path planning
  - `agv` — AGV specs: AGV-500 + AGV-1000, magnetic/QR navigation
  - `usecases` — Use cases: Factory, warehouse, cleanroom, logistics
  - `pricing` — Pricing & ROI: Unit price, margin, payback for customers
- **Data**: `productDetails.ts`

### Slide 7 — TechRD (MỚI — merge 4 cũ)
- **File**: `TechRD.tsx` (TẠO MỚI)
- **Merge từ**: `TechStack.tsx` + `RDStrategy.tsx` + `RDLabs.tsx` + `RDIPPatents.tsx`
- **Tabs**:
  - `stack` — Tech Stack: 5-layer diagram (HW→Protocol→AI→Platform→App)
  - `labs` — R&D Labs: 4 phòng lab specs (area, budget, team, focus)
  - `ip` — IP & Patents: Patent targets (5-8/5Y, 15-20/10Y), partnerships
  - `trl` — TRL Roadmap: Innovation timeline, TRL 7-9 targets, budget 5M/10Y
- **Data**: `operations.ts` (techStackLayers), `rdData.ts` (labs, partnerships, ipTargets, trlRoadmap)

### Slide 8 — Infrastructure (refactor → TabSlide)
- **File**: `Infrastructure.tsx`
- **Action**: Wrap trong `TabSlide` với 5 tabs
- **Tabs**:
  - `layout` — Layout tổng thể: Campus plan, 3 buildings overview, footprint 46,5%
  - `office` — VP 3 tầng: 21×48m, 3.024 m² GFA, T1 admin, T2 R&D labs, T3 management
  - `factory` — Xưởng 2 tầng: 48×70m, 6.720 m² GFA, T1 CNC (8m clear), T2 IoT SMT (5m)
  - `cnc-line` — CNC Line: 10 machines layout, flow diagram, utility connections
  - `dc` — DC Nội bộ: 200 m², 5-8 rack, 30-50 kW, purpose & services
- **Data**: `infrastructure.ts`

### Slide 9 — ProductionCapacity (refactor → TabSlide, merge QualityCerts)
- **File**: `ProductionCapacity.tsx`
- **Merge từ**: hiện tại + `QualityCerts.tsx`
- **Tabs**:
  - `machines` — 10 Máy CNC: DMG MORI, Mazak, Haas, Sodick specs table
  - `capacity` — Capacity Ramp: Utilization Y5-Y12+ chart, shift structure
  - `qa` — QA/QC Lab: CMM arm, AOI, RF Test, Climate Chamber
  - `certs` — ISO 9001: Certification path timeline (ISO 9001 Y4 → 27001 Y5 → EDGE Y3)
- **Data**: `operations.ts`

### Slide 10 — BusinessModel (MỚI HOÀN TOÀN)
- **File**: `BusinessModel.tsx` (TẠO MỚI)
- **Tabs**:
  - `streams` — 9 Nguồn Doanh thu: Hardware (IoT, Robot, CNC parts), Software (MekongOS SaaS), Services (OEM/ODM, consulting, maintenance, training, commissioning)
  - `revenue` — Revenue Table Y4-Y12+: Stacked area chart (IoT + CNC), breakeven annotation
  - `customers` — Khách hàng Mục tiêu: FDI (Samsung, Foxconn), SME VN, ASEAN export, government
- **Data**: `financials.ts` (revenue15Y), `products.ts` (item pricing), `competitive.ts` (targetIndustries)
- **Design**: Corporate tone — `.corporate-card`, gold accents for revenue numbers

### Slide 11 — FinancialOverview (refactor → TabSlide)
- **File**: `FinancialOverview.tsx`
- **Tabs**:
  - `capex` — CAPEX 4 Phase: Donut chart + phase timeline (P0: 1,50M → P3: 2,50M)
  - `revenue` — Revenue + EBITDA: 15Y area chart, EBITDA margin ~30%, BU1/BU2 split
  - `npv-irr` — NPV/IRR/Sensitivity: Key KPIs cards, sensitivity tornado chart, scenarios table
  - `dscr` — DSCR/Payback: DSCR min 1,50x, payback ~10Y discounted, P&L summary
- **Data**: `financials.ts`
- **Design**: Corporate tone — financial data highlighted with gold

### Slide 12 — TaxIncentives (MỚI HOÀN TOÀN)
- **File**: `TaxIncentives.tsx` (TẠO MỚI)
- **Tabs**:
  - `tax` — Ưu đãi Thuế KCNC: Miễn 4Y + giảm 50% 9Y (NĐ 94/2020), ước tính ~5,2M USD tiết kiệm, so sánh thuế thường vs KCNC
  - `strategic` — Strategic Value 7M: 7-component breakdown bar chart (NPV + Brand + Ecosystem + Tax + Location + HR + ESG)
  - `roi` — So sánh ROI: Mekong vs typical KCNC project, vs industrial park, vs FDI factory — bảng so sánh
- **Data**: `financials.ts` (strategicBreakdown, kpis), `legal.ts` (taxIncentives)
- **Design**: Corporate gold heavy — `.data-highlight` for savings amounts

### Slide 13 — LegalESG (refactor → TabSlide, merge ESGEnvironment)
- **File**: `LegalESG.tsx`
- **Merge từ**: hiện tại + `ESGEnvironment.tsx`
- **Tabs**:
  - `legal` — Cơ sở Pháp lý: Permits timeline (IRC → EIA → PCCC → Construction), cost ~180K
  - `permits` — Giấy phép: Chi tiết từng permit, basis, timeline, responsible party
  - `esg` — Solar/EDGE/ESG: 200 kWp, ZLD, EDGE cert, -25% GHG Y30, ESG KPIs grid
- **Data**: `legal.ts`, `riskEsg.ts`

### Slide 14 — RiskAnalysis (refactor → TabSlide)
- **File**: `RiskAnalysis.tsx`
- **Tabs**:
  - `risks` — Top Risks: 10 risks (R-A1 to R-B10), severity matrix, mitigation
  - `monte-carlo` — Monte Carlo: 10K simulations, 68% P(NPV>0), histogram distribution
  - `scenarios` — Scenario Analysis: Conservative/Base/Optimistic table, sensitivity tornado
- **Data**: `riskEsg.ts`

### Slide 15 — TeamOrganization (refactor → TabSlide, merge SocioEconomic)
- **File**: `TeamOrganization.tsx`
- **Merge từ**: hiện tại + `SocioEconomic.tsx`
- **Tabs**:
  - `org` — Org Chart: CEO/CTO/CFO/COO structure, reporting lines
  - `headcount` — Headcount Phases: Y0-1: 10 → Y10+: 115, ramp chart
  - `clevel` — C-level & Experts: Profiles, salary ranges, expat specialists
  - `socio` — Tác động KT-XH: 100-130 jobs, 200-260 indirect, B/C 16-20x, tax 10M/10Y
- **Data**: `team.ts`, `riskEsg.ts` (socioKPIs, jobCreation, trainingPrograms)

### Slide 16 — ImplementationRoadmap (refactor → TabSlide)
- **File**: `ImplementationRoadmap.tsx`
- **Tabs**:
  - `gantt` — Gantt 4 Phases: P0-P3 timeline visual, budget bars
  - `milestones` — Milestones: 8 key milestones (IRC Y0 → Steady Y12+)
  - `kpi` — KPI Checkpoints: Phase-end targets, go/no-go criteria
- **Data**: `timeline.ts`

### Slide 17 — Conclusion (MỚI — merge 2 cũ)
- **File**: `Conclusion.tsx` (TẠO MỚI)
- **Merge từ**: `StrategicValue.tsx` + `ContactCTA.tsx`
- **Tabs**:
  - `value` — Value Proposition: "Tại sao Mekong?" — 5 reasons (2-BU synergy, 81,8% equity, KCNC location, 10 CNC, MekongOS IP), exit strategy paths
  - `commitment` — Cam kết R&D & VA: R&D 5-12% revenue, 15-20 patents 10Y, 100-130 jobs, local content
  - `cta` — Call-to-Action: Next steps (4 bước), contact info, trust signals, CTA button
- **Data**: `financials.ts` (strategicBreakdown), `contact.ts`, `rdData.ts`
- **Design**: Mixed corporate + neon ending shot — gold accents + cyan CTA button

---

## PHASE 5: DESIGN REFINEMENT

### 5.1 — Tailwind Config (`tailwind.config.ts`)

Thêm vào `theme.extend.colors`:

```typescript
corporate: {
    blue: '#1a365d',
    'blue-light': '#2a4a7f',
    gold: '#c99a2e',
    'gold-light': '#d4af37',
    slate: '#64748b',
    'slate-light': '#94a3b8',
},
```

Thêm vào `theme.extend.backgroundImage`:

```typescript
'finance-gradient': 'linear-gradient(135deg, #191d44 0%, #1a365d 50%, #0a0e2a 100%)',
'corporate-gradient': 'linear-gradient(135deg, #1a365d 0%, #0a0e2a 100%)',
```

### 5.2 — CSS Classes (`src/index.css`)

Thêm vào `@layer components`:

```css
.corporate-card {
    @apply rounded-2xl border border-corporate-slate/20;
    background: linear-gradient(135deg, rgba(26,54,93,0.15) 0%, rgba(10,14,42,0.8) 100%);
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
}

.corporate-card-hover {
    @apply corporate-card transition-all duration-300;
}
.corporate-card-hover:hover {
    border-color: rgba(201,154,46,0.3);
    box-shadow: 0 4px 30px rgba(26,54,93,0.3);
    transform: translateY(-2px);
}

.data-highlight {
    color: #c99a2e;
    text-shadow: 0 0 8px rgba(201,154,46,0.3);
}

.data-highlight-lg {
    @apply text-3xl md:text-4xl font-extrabold;
    color: #d4af37;
    text-shadow: 0 0 12px rgba(201,154,46,0.4);
}

.corporate-gradient-text {
    @apply bg-clip-text text-transparent;
    background-image: linear-gradient(135deg, #c99a2e 0%, #d4af37 50%, #c99a2e 100%);
}

.section-corporate {
    background: linear-gradient(180deg, rgba(26,54,93,0.05) 0%, transparent 30%, transparent 70%, rgba(26,54,93,0.05) 100%);
}
```

### Tone mapping

| Slide # | Slide Name | Tone | Card Class | Accent |
|---|---|---|---|---|
| 0 | Hero | Corporate + Tech | glass-card | gradient-text |
| 1 | Urgency | Corporate | corporate-card | corporate-gold |
| 2 | Executive Summary | Corporate | corporate-card | data-highlight |
| 3 | Market & Competitive | Mixed | glass-card | neon-cyan |
| 4 | Product Ecosystem | Tech | glass-card | neon-cyan/magenta |
| 5 | IoT Gateway | Tech | glass-card | neon-cyan |
| 6 | Robot AMR/AGV | Tech | glass-card | neon-magenta |
| 7 | Tech & R&D | Tech | glass-card | neon-cyan/green |
| 8 | Infrastructure | Mixed | glass-card | neon-green |
| 9 | Production CNC | Tech | glass-card | neon-magenta |
| 10 | Business Model | Corporate | corporate-card | data-highlight |
| 11 | Finance | Corporate | corporate-card | data-highlight-lg |
| 12 | Tax Incentives | Corporate | corporate-card | corporate-gold |
| 13 | Legal & ESG | Corporate | corporate-card | neon-green (ESG tab) |
| 14 | Risk | Mixed | glass-card | neon-orange |
| 15 | Team | Mixed | corporate-card | neon-cyan |
| 16 | Roadmap | Mixed | glass-card | neon-cyan |
| 17 | Conclusion | Corporate + Tech | corporate-card + glass CTA | gradient-text |

---

## COMPONENT CREATION ORDER (recommended)

Thứ tự triển khai tối ưu — data files đã sẵn sàng, ưu tiên blocking components.

### Sprint 1: Architecture (1-2 days)
1. Update `useSlideNavigation.ts` — SLIDES array 18 entries
2. Update `src/types/index.ts` — thêm types mới
3. Update `tailwind.config.ts` — corporate colors
4. Update `src/index.css` — corporate classes
5. Tạo stubs cho 6 components mới (empty TabSlide + placeholder tabs)
6. Update `App.tsx` — imports + render order

### Sprint 2: Component Merge — Business Slides (2-3 days)
7. `MarketCompetitive.tsx` — merge 3 components
8. `BusinessModel.tsx` — hoàn toàn mới
9. `TaxIncentives.tsx` — hoàn toàn mới
10. `Conclusion.tsx` — merge 2 components

### Sprint 3: Component Merge — Tech Slides (2-3 days)
11. `ProductEcosystem.tsx` — merge ThreePillars + ProductOHT
12. `TechRD.tsx` — merge 4 R&D components
13. Refactor `ProductIoTGateway.tsx` → TabSlide
14. Refactor `ProductRobotAMR.tsx` → TabSlide

### Sprint 4: Component Refactor — Ops/Finance (2-3 days)
15. Refactor `Infrastructure.tsx` → TabSlide (5 tabs)
16. Refactor `ProductionCapacity.tsx` → TabSlide + merge QualityCerts
17. Refactor `FinancialOverview.tsx` → TabSlide
18. Refactor `LegalESG.tsx` → TabSlide + merge ESGEnvironment

### Sprint 5: Remaining + Polish (1-2 days)
19. Refactor `Urgency.tsx` → TabSlide
20. Refactor `ExecutiveSummary.tsx` → TabSlide
21. Refactor `RiskAnalysis.tsx` → TabSlide
22. Refactor `TeamOrganization.tsx` → TabSlide + merge SocioEconomic
23. Refactor `ImplementationRoadmap.tsx` → TabSlide
24. Xoá deprecated component files (12 files)

### Sprint 6: QC & Build (1 day)
25. Run `v3-web-data-sync` skill
26. Run `v3-web-dc-audit` skill
27. Run `v3-web-slide-architecture` skill
28. `npm run build` — 0 errors
29. Visual QC all 18 slides + all tabs
30. Responsive check (1920, 1366, 768 px)

---

## FILE CREATION/DELETION SUMMARY

### Tạo mới (6 files):
```
src/components/sections/MarketCompetitive.tsx
src/components/sections/ProductEcosystem.tsx
src/components/sections/TechRD.tsx
src/components/sections/BusinessModel.tsx
src/components/sections/TaxIncentives.tsx
src/components/sections/Conclusion.tsx
```

### Xoá sau khi merge (12 files):
```
src/components/sections/CompetitiveAnalysis.tsx    → nội dung vào MarketCompetitive
src/components/sections/ExportStrategy.tsx          → nội dung vào MarketCompetitive
src/components/sections/ThreePillars.tsx            → nội dung vào ProductEcosystem
src/components/sections/ProductOHT.tsx              → nội dung vào ProductEcosystem
src/components/sections/TechStack.tsx              → nội dung vào TechRD
src/components/sections/RDStrategy.tsx              → nội dung vào TechRD
src/components/sections/RDLabs.tsx                  → nội dung vào TechRD
src/components/sections/RDIPPatents.tsx            → nội dung vào TechRD
src/components/sections/QualityCerts.tsx            → nội dung vào ProductionCapacity
src/components/sections/ESGEnvironment.tsx          → nội dung vào LegalESG
src/components/sections/SocioEconomic.tsx          → nội dung vào TeamOrganization
src/components/sections/StrategicValue.tsx          → nội dung vào Conclusion
src/components/sections/ContactCTA.tsx              → nội dung vào Conclusion
```

### Giữ nguyên + refactor (12 files):
```
src/components/sections/HeroSection.tsx            → không đổi
src/components/sections/Urgency.tsx                → wrap TabSlide, 3 tabs
src/components/sections/ExecutiveSummary.tsx        → wrap TabSlide, 4 tabs
src/components/sections/ProductIoTGateway.tsx      → wrap TabSlide, 4 tabs
src/components/sections/ProductRobotAMR.tsx        → wrap TabSlide, 4 tabs
src/components/sections/Infrastructure.tsx          → wrap TabSlide, 5 tabs
src/components/sections/ProductionCapacity.tsx      → merge + wrap TabSlide, 4 tabs
src/components/sections/FinancialOverview.tsx      → wrap TabSlide, 4 tabs
src/components/sections/LegalESG.tsx               → merge + wrap TabSlide, 3 tabs
src/components/sections/RiskAnalysis.tsx            → wrap TabSlide, 3 tabs
src/components/sections/TeamOrganization.tsx        → merge + wrap TabSlide, 4 tabs
src/components/sections/ImplementationRoadmap.tsx  → wrap TabSlide, 3 tabs
```

---

## NAVIGATION & UX ENHANCEMENTS

### Keyboard shortcuts (giữ nguyên)
- Arrow Up/Down, Page Up/Down → navigate main slides
- Home/End → first/last slide
- F → fullscreen
- G → grid overview
- 1-9 → jump to slide N

### Tab navigation (mới)
- Trong mỗi slide, Tab/Shift+Tab hoặc Left/Right Arrow để chuyển tab
- Các tab component tự quản lý state qua `useState`
- Không ảnh hưởng main slide navigation

### Slide Overview (cập nhật)
- Grid overview hiển thị 18 thumbnails (thay vì 26)
- Mỗi thumbnail hiện label + tab count badge
- Click vào thumbnail → scroll to slide

---

## VERIFICATION CHECKLIST

```
[ ] SLIDES array = 18 entries
[ ] App.tsx imports = 18 section components
[ ] 6 new component files created
[ ] 12 deprecated files removed
[ ] All TabSlide components render correctly
[ ] grep "3 Trụ cột|Three Pillars|3 pillars" → 0 results
[ ] grep "GPU-aaS|colocation|Tier III|GP Viễn thông" → 0 results
[ ] grep "32.00M|32,00M|47.5|6 máy|300 nhân" → 0 results
[ ] v3-web-data-sync skill → PASS
[ ] v3-web-dc-audit skill → PASS
[ ] v3-web-slide-architecture skill → PASS
[ ] npm run build → 0 TypeScript errors
[ ] All 18 slides visible in overview grid
[ ] All ~60 tabs navigable
[ ] Corporate tone on business slides
[ ] Neon tone on tech slides
[ ] Responsive: 1920px, 1366px, 768px
[ ] Fullscreen mode works
[ ] Print/PDF exports all slides
```

---

*Document version: 1.0 — 19 March 2026*
*Scope: Phase 3-5 of Web Presentation Refactor Plan*
