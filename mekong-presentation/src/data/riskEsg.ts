// Risk & ESG Data — Source: MEKONG_DE_AN_V2_MASTER.md L4791-L14736

// Monte Carlo — Source: L4791-L4803
export const monteCarlo = {
    iterations: '10.000',
    revenueVar: '±30%',
    opexVar: '±20%',
    capexVar: '±15%',
    pNPVPositive: '72%',
    pIRRAboveWACC: '68%',
    pTotalValuePositive: '>90%',
};

export const monteCarloTable = [
    { metric: 'NPV 50Y (M USD)', p10: '(1,50)', p25: '0,50', p50: '2,50', p75: '5,00', p90: '8,00' },
    { metric: 'IRR 50Y (%)', p10: '10,5%', p25: '12,0%', p50: '14,5%', p75: '16,5%', p90: '18,0%' },
];

export const scenarioAnalysis = [
    { scenario: 'Lạc quan', prob: '25%', revenue15Y: '220+', npv50Y: '8,0+', irr50Y: '17,5%+', color: '#22c55e' },
    { scenario: 'Cơ sở', prob: '55%', revenue15Y: '~180', npv50Y: '2,50', irr50Y: '14,5%', color: '#3b82f6' },
    { scenario: 'Thận trọng', prob: '20%', revenue15Y: '120-140', npv50Y: '(1)-(3)', irr50Y: '10-12%', color: '#f59e0b' },
];

export const weightedScenario = { revenue15Y: '~170', npv50Y: '~3,1', irr50Y: '~14,5%' };

// Top 10 Risks — Source: L4778, L11888
export const topRisks = [
    { id: 'R-A1', risk: 'CNC demand thap hon du bao', prob: 4, impact: 5, score: 20, mitigation: 'Da dang KH (khong >20%), da nganh' },
    { id: 'R-B1', risk: 'CNC lap dat cham >6 thang', prob: 4, impact: 5, score: 20, mitigation: 'PO som Q4/2025, dat coc 30%, buffer 3 thang' },
    { id: 'R-B9', risk: 'Rung CNC anh huong DC', prob: 4, impact: 4, score: 16, mitigation: 'Mong cach rung 520K, vung dem 15m' },
    { id: 'R-A2', risk: 'Gia CNC outsourcing giam', prob: 3, impact: 4, score: 12, mitigation: 'Nang cap AS9100, gia premium' },
    { id: 'R-A3', risk: 'DC fill rate cham', prob: 3, impact: 4, score: 12, mitigation: 'GPU-aaS, anchor tenant pre-build' },
    { id: 'R-A4', risk: 'IoT canh tranh gia tu TQ', prob: 4, impact: 3, score: 12, mitigation: 'MekongOS tich hop, dich vu dia phuong' },
    { id: 'R-B2', risk: 'CNC chat luong miss (Yield<80%)', prob: 3, impact: 4, score: 12, mitigation: 'Tuyen 2 CNC expert JP/DE, NPI nghiem ngat' },
    { id: 'R-B10', risk: 'Thieu nguon cap nuoc', prob: 3, impact: 4, score: 12, mitigation: 'Hybrid cooling, ZLD reuse, du tru 3 ngay' },
    { id: 'R-B3', risk: 'Chay/no CNC (bui Titan)', prob: 2, impact: 5, score: 10, mitigation: 'HEPA H13, FM200, bao hiem 100%' },
    { id: 'R-B8', risk: 'Data breach/Ransomware DC', prob: 2, impact: 5, score: 10, mitigation: 'SOC 24/7, ISO 27001, pen-test hang quy' },
];

// ESG — Source: L4408-L5586
export const esgMetrics = {
    solar: { capacity: '500 kWp → 2 MWp (Y3-Y5)', annual: '650-700 MWh/nam (500kWp)', saving: '65-70K USD/nam', co2: '~450-490 tCO₂/nam (500kWp)' },
    pue: { design: '1,25', target: '1,32 (P1) → 1,26 (P2)', vnAvg: '1,55' },
    zld: { status: 'Cam ket ZLD', cncWastewater: '8-15 m³/ngay', totalWW: '25-35 m³/ngay', discharge: '0 m³' },
    ghg: { baseline: '~9.500 tCO₂e/nam', target: '~6.900 tCO₂e/nam', reduction: '-27%', committed: '-25% vs BAU by 2030' },
    ghgRoadmap: [
        { phase: 'Y3-Y5', target: '-25%' },
        { phase: 'Y6-Y10', target: '-40%' },
        { phase: 'Y11-Y20', target: '-60%' },
        { phase: 'Y20+', target: 'Net-Zero' },
    ],
    water: { recycleTarget: '≥ 30%' },
    waste: { recycleTarget: '≥ 80%', cncChips: '> 90%' },
};

// Socio-Economic Impact — Source: L521-L14736
export const jobCreation = [
    { phase: 'Y0-Y4', iot: '-', cnc: '-', dc: '-', admin: '10-15', total: '10-15' },
    { phase: 'Y5-Y7', iot: '28-50', cnc: '-', dc: '-', admin: '12', total: '40-62' },
    { phase: 'Y8-Y10', iot: '50-60', cnc: '40-80', dc: '-', admin: '15', total: '105-155' },
    { phase: 'Y11-Y12', iot: '60-70', cnc: '80-100', dc: '15-30', admin: '18', total: '173-218' },
    { phase: 'Y13+ (on dinh)', iot: '80-100', cnc: '80-120', dc: '30-50', admin: '20-30', total: '210-300' },
];

export const socioKPIs = {
    directJobs15Y: '200',
    indirectJobs: '400 (hệ số 2x)',
    totalJobs: '600',
    avgSalary: '25 triệu VND/tháng',
    taxRevenue10Y: '~18,5M USD',
    valueAdded10Y: '92,3M USD',
    totalBenefits10Y: '~172M USD',
    totalCosts10Y: '~7,0M USD',
    bcRatio: '24,6x',
    totalSocioEcon10Y: '85-120M USD',
    totalWages10Y: '35-45M USD',
    netExports10Y: '20-30M USD',
};

export const trainingPrograms = [
    { program: 'Thuc tap sinh/nam', value: '20-30 SV', source: 'HCMUT, HUTECH, Cao Thang' },
    { program: 'Chuyen doi full-time', value: '60-70%', source: '-' },
    { program: 'Hoc bong Mekong', value: '10-15 suat/nam', source: '20M VND/suat' },
    { program: 'Chung chi quoc te/nam', value: '30-50', source: 'AWS, Siemens NX, Six Sigma' },
    { program: 'Giờ đào tạo/người/năm', value: '60-80h', source: '200 nhân sự x 60h = 12.000h/năm' },
    { program: 'Ky su CNC 5-axis', value: '200+', source: 'Dao tao trong 10 nam' },
];

export const csrBudget = '~31K USD/nam';
