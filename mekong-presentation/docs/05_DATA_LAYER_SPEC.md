# DAC TA DATA LAYER (Data Layer Specification)
# MEKONG TECHNOLOGY HUB — WEB PRESENTATION

**Phien ban**: 2.0  
**Nguon so lieu**: `DE_AN_MEKONG_V2/MEKONG_DE_AN_V2_MASTER.md` (V2.1)  

---

## MUC LUC

1. [Tong quan](#1-tong-quan)
2. [TypeScript Interfaces](#2-typescript-interfaces)
3. [File: financials.ts](#3-file-financialsts)
4. [File: products.ts](#4-file-productsts)
5. [File: market.ts](#5-file-marketsts)
6. [File: team.ts](#6-file-teamts)
7. [File: timeline.ts](#7-file-timelinets)
8. [Quy tac Du lieu](#8-quy-tac-du-lieu)

---

## 1. TONG QUAN

### Nguyen tac Data Layer

1. **Single Source of Truth**: Toan bo so lieu nam tap trung trong `src/data/`. Component KHONG hardcode so lieu.
2. **Type-safe**: Moi data file phai co TypeScript interface tuong ung trong `src/types/`.
3. **Immutable**: Data export la `const`, khong mutate runtime.
4. **Traceable**: Moi so lieu quan trong phai co chu thich nguon tu Master V2.1 (phu luc nao, dong nao).

### Cau truc File

```
src/data/
  |-- financials.ts    ← CAPEX, revenue, P&L, KPI, scenarios, sensitivity, strategic
  |-- products.ts      ← IoT, CNC, Datacenter san pham va dich vu
  |-- market.ts        ← Thi truong toan cau, Viet Nam, SWOT
  |-- team.ts          ← Nhan su, C-Level, experts, ESOP
  |-- timeline.ts      ← 5 phases, 9 milestones

src/types/
  |-- index.ts         ← TypeScript interfaces (V2 them)
```

---

## 2. TYPESCRIPT INTERFACES

File: `src/types/index.ts` (V2 — can tao moi)

```typescript
// === FINANCIAL ===

export interface CapexStructure {
    total: number;       // 47.5 (M USD)
    equity: number;      // 34.97
    debt: number;        // 12.53
    equityPct: string;   // '73.6%'
    debtPct: string;     // '26.4%'
}

export interface PhaseCapex {
    phase: string;       // 'P0: Phap ly'
    amount: number;      // 2.5 (M USD)
    period: string;      // 'Y0-Y2'
}

export interface RevenueYear {
    year: string;        // 'Y5', 'Y6', ...
    iot: number;         // doanh thu IoT (M USD)
    cnc: number;         // doanh thu CNC
    dc: number;          // doanh thu Datacenter
    total: number;       // tong
}

export interface PnLYear {
    year: string;
    revenue: number;
    opex: number;
    ebitda: number;
    ebit: number;
}

export interface FinancialKPIs {
    npv50: number;       // 1.5 (M USD)
    irr50: number;       // 13.0 (%)
    payback: number;     // 13 (nam)
    ebitdaMargin: number; // 28 (%)
    dscr: number;        // 4.91
    monteCarloProbability: number; // 65 (%)
    revenueY10: number;  // 30.5 (M USD) — theo V2.1
    revenueY15: number;  // 43.0 (M USD) — theo V2.1
    strategicValue: number; // 20.32 (M USD)
}

export interface Scenario {
    name: string;        // 'Conservative' | 'Base' | 'Optimistic'
    revenue15Y: number;
    npv50: number;
    irr50: number;
    payback: number;
    probability: number; // %
}

export interface SensitivityItem {
    variable: string;    // 'Doanh thu', 'CAPEX', ...
    minus20: number;     // NPV khi giam 20%
    base: number;        // NPV base case
    plus20: number;      // NPV khi tang 20%
}

export interface StrategicComponent {
    name: string;        // 'NPV (50Y, Base)', 'Brand & IP', ...
    value: number;       // M USD
}

export interface CapexByBlock {
    block: string;
    amount: number;
    color: string;
}

// === PRODUCT ===

export interface IoTProduct {
    name: string;
    desc: string;
    specs: string[];
    price: string;
    margin: string;
}

export interface PlatformTier {
    name: string;
    price: string;
    devices: string;
}

export interface IoTData {
    items: IoTProduct[];
    platform: {
        name: string;
        tiers: PlatformTier[];
    };
}

export interface CNCData {
    machines: string;     // '28 may'
    brand: string;        // 'DMG MORI'
    axes: string;         // '5-axis'
    tolerance: string;    // '±2µm'
    materials: string[];
    certifications: string[];
    industries: string[];
    unitEconomics: {
        asp: string;
        grossMargin: string;
    };
}

export interface DCService {
    name: string;
    price: string;
    detail: string;
}

export interface DCData {
    specs: Record<string, string>;
    services: DCService[];
}

// === MARKET ===

export interface GlobalMarketSegment {
    segment: string;
    value2024: number;
    value2028: number;
    cagr: string;
    unit: string;
}

export interface VietnamMarketSegment {
    segment: string;
    value: number;
    growth: string;
}

export interface SWOTAnalysis {
    strengths: string[];
    weaknesses: string[];
    opportunities: string[];
    threats: string[];
}

// === TEAM ===

export interface HeadcountPhase {
    phase: string;
    total: number;
    iot: number;
    cnc: number;
    dc: number;
    rd: number;
    other: number;
}

export interface CLevel {
    role: string;
    profile: string;
    salary: string;
}

export interface Expert {
    role: string;
    origin: string;
    count: number;
    duration: string;
}

export interface ESOPData {
    pool: string;
    value: string;
    vesting: string;
}

// === TIMELINE ===

export interface PhaseData {
    id: string;          // 'P0', 'P1', ...
    name: string;
    period: string;
    budget: string;
    color: string;       // hex
    items: string[];     // 4 items chinh
}

export interface Milestone {
    year: string;
    event: string;
    icon: string;        // Ten Lucide icon
}
```

---

## 3. FILE: financials.ts

**Duong dan**: `src/data/financials.ts`

### 3.1 Cac truong du lieu

```typescript
export const financials = {
    // === CAPEX ===
    capex: {
        total: 47.5,           // [C] Tong CAPEX — V2.1 Appendix E
        equity: 34.97,         // [C] Von CSH — 73.6%
        debt: 12.53,           // [C] No vay — tu Y10, lai 8.5%
        equityPct: '73.6%',
        debtPct: '26.4%',
    },

    // === PHASES (5 giai doan) ===
    phases: [
        { phase: 'P0: Phap ly', amount: 2.5, period: 'Y0-Y2' },
        { phase: 'P1: Shell', amount: 8.5, period: 'Y2-Y5' },
        { phase: 'P2: IoT+CNC', amount: 10.6, period: 'Y5-Y7' },
        { phase: 'P3: CNC+DC', amount: 13.0, period: 'Y7-Y10' },
        { phase: 'P4: DC Full', amount: 10.9, period: 'Y10-Y13' },
    ],
    // Tong: 2.5 + 8.5 + 10.6 + 13.0 + 10.9 = 45.5M
    // Chenh lech 2.0M la working capital + contingency

    // === DOANH THU 15 NAM ===
    revenue15Y: [
        { year: 'Y5', iot: 0.5, cnc: 0, dc: 0, total: 0.5 },
        { year: 'Y6', iot: 1.8, cnc: 0.3, dc: 0, total: 2.1 },
        { year: 'Y7', iot: 3.0, cnc: 2.5, dc: 0, total: 5.5 },
        { year: 'Y8', iot: 3.5, cnc: 4.5, dc: 0.5, total: 8.5 },
        { year: 'Y9', iot: 3.8, cnc: 5.5, dc: 2.0, total: 11.3 },
        { year: 'Y10', iot: 3.5, cnc: 6.5, dc: 4.5, total: 14.5 },
        { year: 'Y11', iot: 3.8, cnc: 7.0, dc: 6.5, total: 17.3 },
        { year: 'Y12', iot: 4.0, cnc: 7.5, dc: 8.0, total: 19.5 },
        { year: 'Y13', iot: 4.2, cnc: 8.0, dc: 10.0, total: 22.2 },
        { year: 'Y14', iot: 4.5, cnc: 8.5, dc: 12.0, total: 25.0 },
        { year: 'Y15', iot: 5.0, cnc: 9.0, dc: 18.0, total: 32.0 },
    ],
    // LUU Y: Day la doanh thu TUNG NAM (single-year)
    // V2.1 ghi Revenue Y10: 30.50M va Revenue Y15: 43.00M
    // Co the la so lieu tich luy hoac metric khac — can xac nhan voi stakeholder

    // === P&L ===
    pnl: [
        { year: 'Y6', revenue: 2.1, opex: 2.8, ebitda: -0.7, ebit: -1.5 },
        { year: 'Y8', revenue: 8.5, opex: 6.2, ebitda: 2.3, ebit: 0.5 },
        { year: 'Y10', revenue: 14.5, opex: 9.8, ebitda: 4.7, ebit: 2.8 },
        { year: 'Y15', revenue: 32.0, opex: 18.5, ebitda: 13.5, ebit: 10.2 },
    ],

    // === KPIs ===
    kpis: {
        npv50: 1.5,            // [C] NPV 50 nam, WACC 12% — Appendix F
        irr50: 13.0,           // [C] IRR 50 nam — Appendix F
        payback: 13,           // [C] Discounted payback — Appendix F
        ebitdaMargin: 28,      // [C] Steady-state EBITDA margin
        dscr: 4.91,            // [C] DSCR minimum — Appendix F
        monteCarlo: 65,        // [C] P(NPV>0) — Monte Carlo simulation
        revenueY10: 30.5,      // Master V2.1 metric (can xac nhan)
        revenueY15: 43.0,      // Master V2.1 metric (can xac nhan)
        strategicValue: 20.32, // [C] Appendix O
    },

    // === 3 KICH BAN ===
    scenarios: [
        { name: 'Conservative', revenue15Y: 130, npv50: -3.2, irr50: 11.2, payback: 16, probability: 25 },
        { name: 'Base', revenue15Y: 165, npv50: 1.5, irr50: 13.0, payback: 13, probability: 50 },
        { name: 'Optimistic', revenue15Y: 210, npv50: 8.5, irr50: 15.5, payback: 10, probability: 25 },
    ],

    // === SENSITIVITY ===
    sensitivity: [
        { variable: 'Doanh thu', minus20: -5.8, base: 1.5, plus20: 8.8 },
        { variable: 'CAPEX', minus20: 5.2, base: 1.5, plus20: -2.2 },
        { variable: 'OpEx', minus20: 4.1, base: 1.5, plus20: -1.1 },
        { variable: 'WACC', minus20: 6.2, base: 1.5, plus20: -1.8 },
    ],

    // === GIA TRI CHIEN LUOC ===
    strategicBreakdown: [
        { name: 'NPV (50Y)', value: 1.50 },
        { name: 'Brand & IP', value: 3.20 },
        { name: 'Ecosystem', value: 2.80 },
        { name: 'Tax Incentive', value: 4.50 },
        { name: 'Location', value: 2.50 },
        { name: 'Human Cap.', value: 3.82 },
        { name: 'ESG Premium', value: 2.00 },
    ],
    // Tong: 20.32M — Appendix O

    // === CAPEX BY BLOCK ===
    capexByBlock: [
        { block: 'Datacenter', amount: 11.9, color: '#76FF03' },
        { block: 'CNC', amount: 13.3, color: '#E040FB' },
        { block: 'IoT', amount: 3.1, color: '#00E5FF' },
        { block: 'Common', amount: 2.1, color: '#FF9100' },
    ],
};
```

### 3.2 Luu y So lieu

| So lieu | Trong code | Trong V2.1 | Trang thai |
|---------|-----------|-------------|-----------|
| CAPEX | 47.5M | 47,50M | KHOP |
| NPV | 1.5M | 1,50M | KHOP |
| IRR | 13.0% | 13,0% | KHOP |
| Von CSH | 34.97M (73.6%) | 34,97M (73,6%) | KHOP |
| No vay | 12.53M (26.4%) | 12,53M (26,4%) | KHOP |
| Strategic Value | 20.32M | 20,32M | KHOP |
| P(NPV>0) | 65% | 65% | KHOP |
| Revenue Y10 single-year | 14.5M | 30,50M | CAN XAC NHAN |
| Revenue Y15 single-year | 32M | 43,00M | CAN XAC NHAN |
| Revenue 10Y luy ke | (chua co) | 103,52M | CAN THEM |

---

## 4. FILE: products.ts

**Duong dan**: `src/data/products.ts`

### 4.1 Cau truc

```typescript
export const products = {
    iot: {
        items: [
            {
                name: 'MK-200 Industrial Gateway',
                desc: 'Edge AI Gateway cho nha may',
                specs: [
                    'MQTT / OPC-UA / Modbus',
                    'LTE Cat-M1 + Wi-Fi 6',
                    'IP67 — outdoor rated',
                    'ARM Cortex-A72, 4GB RAM',
                    '4-20mA, RS485, Digital I/O',
                ],
                price: '$150-300',
                margin: '65%',
            },
            {
                name: 'MK-300 Vision Gateway',
                desc: 'AI Vision + Edge Compute',
                specs: [
                    '2x CSI Camera input',
                    'NPU 6 TOPS (AI inference)',
                    'PoE++ powered',
                    'ONNX Runtime + TensorRT',
                    'H.265 hardware encode',
                ],
                price: '$500-800',
                margin: '58%',
            },
            {
                name: 'AMR (Autonomous Mobile Robot)',
                desc: 'Robot tu hanh nha kho/nha may',
                specs: [
                    'SLAM navigation',
                    '200kg payload',
                    'LiDAR + Depth camera',
                    'Fleet Manager (20 bot)',
                    '8h battery, auto-charge',
                ],
                price: '$15K-45K',
                margin: '35%',
            },
        ],
        platform: {
            name: 'MekongOS',
            tiers: [
                { name: 'Starter', price: '$99/mo', devices: '50 devices' },
                { name: 'Business', price: '$299/mo', devices: '500 devices' },
                { name: 'Enterprise', price: '$499+/mo', devices: 'Unlimited' },
            ],
        },
    },

    cnc: {
        machines: '28 may',
        brand: 'DMG MORI',
        axes: '5-axis',
        tolerance: '±2µm',
        materials: ['Titanium', 'Inconel 718', 'Aluminum 7075', 'SS 316L', 'PEEK'],
        certifications: ['ISO 9001', 'IATF 16949', 'AS9100 Rev D', 'ISO 13485'],
        industries: ['Aerospace', 'Automotive', 'Medical', 'Semiconductor', 'Defense'],
        unitEconomics: {
            asp: '$2,000',
            grossMargin: '42%',
        },
    },

    dc: {
        specs: {
            tier: 'Tier III',
            totalRacks: '100 racks',
            pue: '1.32',
            itPower: '2 MW',
            cooling: 'CRAC + CDU + DLC',
            ups: '2N redundant',
            generator: 'N+1, 72h fuel',
        },
        services: [
            { name: 'Colocation', price: '$1,200/rack/mo', detail: 'Full cabinet, 5kW, cross-connect' },
            { name: 'GPU-as-a-Service', price: '$2.80/GPU-hr', detail: 'NVIDIA A100/H100, spot & reserved' },
            { name: 'Managed Hosting', price: '$800/server/mo', detail: '24/7 NOC, SLA 99.95%, patching' },
            { name: 'Cloud Connect', price: '$500/port/mo', detail: 'Direct AWS/Azure/GCP' },
        ],
    },
};
```

---

## 5. FILE: market.ts

**Duong dan**: `src/data/market.ts`

```typescript
export const market = {
    global: [
        { segment: 'IoT', value2024: 600, value2028: 800, cagr: '10.5%', unit: 'B USD' },
        { segment: 'Robotics', value2024: 55, value2028: 95, cagr: '15%', unit: 'B USD' },
        { segment: 'CNC Machining', value2024: 85, value2028: 100, cagr: '4.2%', unit: 'B USD' },
        { segment: 'Datacenter', value2024: 250, value2028: 350, cagr: '8.8%', unit: 'B USD' },
    ],

    vietnam: [
        { segment: 'IoT VN', value: 3.48, growth: '18%' },
        { segment: 'CNC VN', value: 1.8, growth: '12%' },
        { segment: 'Datacenter VN', value: 1.8, growth: '15%' },
        { segment: 'AI/ML VN', value: 0.9, growth: '25%' },
    ],

    positioning: [
        { name: 'Mekong Tech', x: 80, y: 75 },
        { name: 'FPT Smart Factory', x: 60, y: 50 },
        { name: 'CMC DC', x: 40, y: 65 },
        { name: 'Viettel IDC', x: 55, y: 80 },
    ],

    swot: {
        strengths: [
            '3 BU cong huong — duy nhat tai KCNC',
            'Tu chu von 73.6% — khong phu thuoc ODA',
            'Doi ngu CNC goc Nhat/Duc',
            'Nen tang MekongOS da lam tu 2023',
            'Vi tri KCNC TP.HCM — he sinh thai R&D',
        ],
        weaknesses: [
            'Brand moi, chua co track record',
            'Phu thuoc 1 site duy nhat (1 ha)',
            'Chi phi nhan su CNC cao (expat)',
            'Lead time dai (15 nam full CAPEX)',
        ],
        opportunities: [
            'FDI tang 12% YoY vao VN',
            'Thieu Tier III DC tai mien Nam',
            'Aerospace CNC chua co doi thu noi dia',
            'FPT/VNG chua lam dovetail CNC+DC',
        ],
        threats: [
            'Thay doi chinh sach uu dai KCNC',
            'Thieu nguon nhan luc CNC',
            'Gia dien tang 5-7%/nam',
            'Canh tranh DC tu hyperscaler',
        ],
    },
};
```

---

## 6. FILE: team.ts

**Duong dan**: `src/data/team.ts`

```typescript
export const team = {
    headcount: [
        { phase: 'Y0-Y4', total: 15, iot: 0, cnc: 0, dc: 0, rd: 2, other: 13 },
        { phase: 'Y5-Y6', total: 59, iot: 25, cnc: 0, dc: 0, rd: 8, other: 26 },
        { phase: 'Y7-Y9', total: 131, iot: 40, cnc: 35, dc: 0, rd: 15, other: 41 },
        { phase: 'Y10-Y13', total: 217, iot: 55, cnc: 65, dc: 15, rd: 22, other: 60 },
        { phase: 'Y15', total: 300, iot: 70, cnc: 90, dc: 30, rd: 30, other: 80 },
    ],

    cLevel: [
        { role: 'CEO / Tong Giam doc', profile: 'Founder, 15+ nam CNC/Tech', salary: '120-180K' },
        { role: 'CTO', profile: 'PhD/MS, 10+ nam IoT/AI', salary: '96-144K' },
        { role: 'CFO', profile: 'CPA/CFA, 10+ nam FDI', salary: '84-120K' },
        { role: 'COO', profile: '10+ nam Manufacturing, Lean', salary: '84-120K' },
        { role: 'CSO (Sales)', profile: '8+ nam B2B ASEAN', salary: '72-96K' },
    ],

    experts: [
        { role: 'CNC Application Engineer', origin: 'Nhat / Duc', count: 2, duration: '2 nam' },
        { role: 'DC Commissioning Engineer', origin: 'My / Singapore', count: 1, duration: '6 thang' },
        { role: 'AI/ML Lead', origin: 'My / Han Quoc', count: 1, duration: 'Dai han' },
        { role: 'Quality Manager (AS9100)', origin: 'Nhat / Duc', count: 1, duration: '3 nam' },
    ],

    esop: { pool: '5%', value: '~1,75M USD', vesting: '4 nam, cliff 1 nam' },
};
```

---

## 7. FILE: timeline.ts

**Duong dan**: `src/data/timeline.ts`

```typescript
export const timeline = {
    phases: [
        {
            id: 'P0',
            name: 'Phap ly & Nen mong',
            period: 'Y0-Y2 (2025-2027)',
            budget: '2,50M',
            color: '#00E5FF',
            items: ['IRC dieu chinh', 'DTM + PCCC', 'Thiet ke chi tiet', 'San lap + ep coc'],
        },
        {
            id: 'P1',
            name: 'Shell Construction',
            period: 'Y2-Y5 (2027-2030)',
            budget: '8,50M',
            color: '#4dd2ff',
            items: ['Ket cau 3 tang', 'MEP co ban', 'Solar PV 500 kWp', 'IoT Lab fit-out'],
        },
        {
            id: 'P2',
            name: 'IoT Launch + CNC Prep',
            period: 'Y5-Y7 (2030-2032)',
            budget: '10,60M',
            color: '#E040FB',
            items: ['IoT commissioning', 'First revenue Y6', 'PO 15 may CNC', 'ISO 9001'],
        },
        {
            id: 'P3',
            name: 'CNC Full + DC Infra',
            period: 'Y7-Y10 (2032-2035)',
            budget: '13,00M',
            color: '#76FF03',
            items: ['28 may CNC van hanh', 'DC Zone 1 (50 Rack)', 'IATF 16949', 'Breakeven Y8-Y9'],
        },
        {
            id: 'P4',
            name: 'DC Full + Steady-state',
            period: 'Y10-Y13 (2035-2038)',
            budget: '10,90M',
            color: '#FF9100',
            items: ['DC Zone 2 (50 Rack AI)', 'Full 3 BU', 'AS9100 + Tier III', 'Revenue 30M+/nam'],
        },
    ],

    milestones: [
        { year: 'Y0', event: 'IRC + BQL approval', icon: 'FileCheck' },
        { year: 'Y2', event: 'Ground Breaking', icon: 'HardHat' },
        { year: 'Y5', event: 'Shell hoan thanh', icon: 'Building2' },
        { year: 'Y6', event: 'First Revenue (IoT)', icon: 'DollarSign' },
        { year: 'Y8', event: 'CNC Full Operation', icon: 'Cog' },
        { year: 'Y9', event: 'Breakeven (EBIT>0)', icon: 'TrendingUp' },
        { year: 'Y11', event: 'DC Zone 1 Live', icon: 'Server' },
        { year: 'Y13', event: 'Breakeven (Discounted)', icon: 'Award' },
        { year: 'Y15', event: 'Revenue 32M', icon: 'Target' },
    ],
};
```

---

## 8. QUY TAC DU LIEU

### 8.1 Don vi

| Don vi | Cach luu trong code | Cach hien thi |
|--------|--------------------| --------------|
| USD trieu | So thap phan: `47.5` | `47,50M USD` (dau phay VN) |
| USD ty | So thap phan: `800` | `800 ty USD` |
| Phan tram | So nguyen: `13` | `13,0%` hoac `13%` |
| Dien tich | So nguyen: `10000` | `10.000 m2` (dau cham phan nghìn VN) |
| Nhan su | So nguyen: `300` | `300 nguoi` |

### 8.2 Xac nhan So lieu

Truoc khi deploy, chay script kiem tra:

```bash
# Kiem tra cac so lieu chinh thuc
grep -rn "47.5\|47,50" src/data/     # CAPEX
grep -rn "1.5\|1,50" src/data/       # NPV
grep -rn "13.0\|13%" src/data/        # IRR
grep -rn "34.97" src/data/            # Von CSH
grep -rn "12.53" src/data/            # No vay
grep -rn "20.32" src/data/            # Strategic Value
grep -rn "65%" src/data/              # Monte Carlo
```

### 8.3 Nhan du lieu [C] / [B] / [A]

Theo AGENT_RULES.md:
- **[C] = Calculated**: So lieu tinh toan tu cong thuc
- **[B] = Benchmarked**: So lieu tham chieu thi truong
- **[A] = Assumed**: So lieu gia dinh

Vi du:
```typescript
npv50: 1.5,      // [C] DCF 50Y @ WACC 12%
cagr: '10.5%',   // [B] Statista IoT Global 2024
pool: '5%',      // [A] Thong le startups VN
```

---

*Tai lieu nay la tham chieu day du cho data layer. Moi so lieu moi phai duoc them vao file nay truoc, sau do moi code.*
