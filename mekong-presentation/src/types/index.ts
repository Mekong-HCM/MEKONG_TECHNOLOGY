// ============================================================
// TypeScript Interfaces — KINEXUS Technology Hub Presentation V3
// ============================================================

// --- Financial Types ---

export interface Tranche {
    name: string;
    amount: number;
    pct: number;
    rate: number;
    grace: string;
    repay: string;
}

export interface CapexStructure {
    total: number;
    equity: number;
    debt: number;
    equityPct: number;
    debtPct: number;
    tranches: Tranche[];
    grantNATIF: number;
    wacc: number;
    deRatio: number;
}

export interface InvestmentPhase {
    name: string;
    period: string;
    amount: number;
    label: string;
    source: string;
}

export interface RevenueYear {
    year: string;
    nganh1: number;
    nganh2: number;
    total: number;
}

export interface PnLYear {
    year: string;
    revenue: number;
    netIncome: number;
    netMargin: string;
}

export interface FinancialKPIs {
    npv50: number;
    npv20: number;
    irr50: number;
    irr20: number;
    irrEquity: string;
    paybackSimple: string;
    paybackDiscounted: string;
    ebitdaSteady: string;
    dscrMin: number;
    dscrMinYear: string;
    revenueY10: number;
    revenueY15: number;
    revenue10YCumulative: number;
    revenue15Y: number;
    strategicValue: number;
    breakevenYear: string;
    monteCarloP: number;
}

export interface Scenario {
    name: string;
    revenue15Y: number;
    npv50: number;
    irr50: number;
    payback: string;
    probability: number;
}

export interface SensitivityRow {
    variable: string;
    minus20: number;
    minus10: number;
    base: number;
    plus10: number;
    plus20: number;
}

export interface StrategicComponent {
    name: string;
    value: number;
}

export interface CapexBlock {
    name: string;
    value: number;
}

export interface LongTermVision {
    period: string;
    revenue: string;
    ev: string;
}

export interface DSCRYear {
    year: string;
    ebitda: number;
    totalDS: number;
    dscr: number;
}

export interface FinancialsData {
    capex: CapexStructure;
    phases: InvestmentPhase[];
    revenue15Y: RevenueYear[];
    pnl: PnLYear[];
    kpis: FinancialKPIs;
    scenarios: Scenario[];
    sensitivity: SensitivityRow[];
    strategicBreakdown: StrategicComponent[];
    capexByBlock: CapexBlock[];
    dscrTimeline: DSCRYear[];
    investorCommitments: string[];
    longTermVision: LongTermVision[];
}

// --- Product Types ---

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

export interface IoTPlatform {
    name: string;
    tiers: PlatformTier[];
}

export interface IoTData {
    title: string;
    subtitle: string;
    icon: string;
    color: string;
    items: IoTProduct[];
    platform: IoTPlatform;
}

export interface CNCUnitEconomics {
    asp: string;
    grossMargin: string;
    contributionMargin: string;
}

export interface CNCData {
    title: string;
    subtitle: string;
    icon: string;
    color: string;
    machines: string;
    brand: string;
    axes: string;
    tolerance: string;
    materials: string[];
    certifications: string[];
    industries: string[];
    unitEconomics: CNCUnitEconomics;
}

export interface DCInternalSpecs {
    area: string;
    racks: string;
    power: string;
    purpose: string;
    capex: string;
}

export interface ProductsData {
    iot: IoTData;
    cnc: CNCData;
    dcInternal: DCInternalSpecs;
}

// --- Market Types ---

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
    unit: string;
    growth: string;
}

export interface PositionPoint {
    complexity: number;
    volume: number;
    label: string;
}

export interface SWOTAnalysis {
    strengths: string[];
    weaknesses: string[];
    opportunities: string[];
    threats: string[];
}

export interface MarketData {
    global: GlobalMarketSegment[];
    vietnam: VietnamMarketSegment[];
    positioning: {
        kinexus: PositionPoint;
        competitors: PositionPoint[];
    };
    swot: SWOTAnalysis;
}

// --- Team Types ---

export interface HeadcountPhase {
    phase: string;
    total: number;
    iot: number;
    cnc: number;
    rd: number;
    other: number;
}

export interface CLevelProfile {
    role: string;
    name: string;
    profile: string;
    salary: string;
}

export interface ExpertProfile {
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

export interface TeamData {
    headcount: HeadcountPhase[];
    cLevel: CLevelProfile[];
    experts: ExpertProfile[];
    esop: ESOPData;
}

// --- Timeline Types ---

export interface TimelinePhase {
    id: string;
    name: string;
    period: string;
    budget: string;
    color: string;
    items: string[];
}

export interface Milestone {
    year: string;
    event: string;
    icon: string;
}

export interface TimelineData {
    phases: TimelinePhase[];
    milestones: Milestone[];
}

// --- Infrastructure Types ---

export interface FloorPlan {
    floor: string;
    area: string;
    content: string;
    color: string;
}

export interface InfraSpec {
    label: string;
    value: string;
    color: string;
    iconName: string;
}

export interface BuildingInfo {
    name: string;
    dimensions: string;
    floors: number;
    height: string;
    footprint: number;
    gfa: number;
    usage: string[];
    color: string;
}

export interface InfrastructureData {
    campus: {
        name: string;
        lotArea: number;
        totalGFA: number;
        totalFootprint: number;
        buildingDensity: string;
        far: string;
        greenArea: string;
    };
    buildings: BuildingInfo[];
    specs: InfraSpec[];
}

// --- Legal / ESG Types ---

export interface Permit {
    name: string;
    agency: string;
    time: string;
    status: string;
}

export interface ESGCategory {
    title: string;
    color: string;
    iconName: string;
    items: string[];
}

export interface Certification {
    cert: string;
    year: string;
    color: string;
}

export interface LegalData {
    permits: Permit[];
    esg: ESGCategory[];
    certPath: Certification[];
    totalPermits: number;
    legalCost: string;
}

// --- Contact Types ---

export interface ContactInfo {
    company: string;
    address: string[];
    email: string;
    phone: string;
    website?: string;
}

export interface ContactData {
    info: ContactInfo;
    tagline: string;
}

// --- Business Model Types ---

export type Nganh = 'nganh1' | 'nganh2';

export interface RevenueStream {
    name: string;
    nganh: Nganh;
    revenueEstimate: string;
    marginRange: string;
    startYear: string;
}

export interface TargetCustomer {
    segment: string;
    region: string;
    products: string[];
    dealSize: string;
}

export interface BusinessModelData {
    streams: RevenueStream[];
    targetCustomers: TargetCustomer[];
    revenueTable: RevenueYear[];
}

// --- Tax Incentive Types ---

export interface TaxIncentive {
    name: string;
    basis: string;
    estimatedValue: string;
    period: string;
}

export interface ROIComparison {
    metric: string;
    kinexus: string;
    industry: string;
    advantage: string;
}

export interface IncentivesData {
    taxBenefits: TaxIncentive[];
    totalEstimated: number;
    strategicBreakdown: StrategicComponent[];
    roiComparison: ROIComparison[];
}
