// Risk & ESG Data — Source: DE_AN_MEKONG_V3 (22M model)

// Monte Carlo — Source: V3 financial model
export const monteCarlo = {
    iterations: '10.000',
    revenueVar: '\u00B130%',
    opexVar: '\u00B120%',
    capexVar: '\u00B115%',
    pNPVPositive: '68%',
    pIRRAboveWACC: '62%',
    pTotalValuePositive: '>85%',
};

export const monteCarloTable = [
    { metric: 'NPV 50Y (M USD)', p10: '(1,00)', p25: '0,30', p50: '1,50', p75: '3,50', p90: '5,50' },
    { metric: 'IRR 50Y (%)', p10: '10,0%', p25: '11,5%', p50: '13,0%', p75: '15,0%', p90: '16,5%' },
];

export const scenarioAnalysis = [
    { scenario: 'L\u1EA1c quan', prob: '25%', revenue15Y: '180+', npv50Y: '5,0+', irr50Y: '16,0%+', color: '#22c55e' },
    { scenario: 'C\u01A1 s\u1EDF', prob: '55%', revenue15Y: '~140', npv50Y: '1,50', irr50Y: '13,0%', color: '#3b82f6' },
    { scenario: 'Th\u1EADn tr\u1ECDng', prob: '20%', revenue15Y: '90-110', npv50Y: '(1)-(2)', irr50Y: '10-11%', color: '#f59e0b' },
];

export const weightedScenario = { revenue15Y: '~130', npv50Y: '~2,0', irr50Y: '~13,0%' };

// Top 10 Risks — Source: V3 P6
export const topRisks = [
    { id: 'R-A1', risk: 'CNC demand thap hon du bao', prob: 4, impact: 5, score: 20, mitigation: 'Da dang KH (khong >20%), da nganh' },
    { id: 'R-B1', risk: 'CNC lap dat cham >6 thang', prob: 4, impact: 5, score: 20, mitigation: 'PO som Q4/2025, dat coc 30%, buffer 3 thang' },
    { id: 'R-A4', risk: 'IoT canh tranh gia tu TQ', prob: 4, impact: 3, score: 12, mitigation: 'MekongOS tich hop, dich vu dia phuong' },
    { id: 'R-A2', risk: 'Gia CNC outsource giam', prob: 3, impact: 4, score: 12, mitigation: 'Nang cap ISO, da dang san pham' },
    { id: 'R-B2', risk: 'CNC chat luong miss (Yield<80%)', prob: 3, impact: 4, score: 12, mitigation: 'Tuyen 2 CNC expert JP/DE, NPI nghiem ngat' },
    { id: 'R-B10', risk: 'Thieu nguon cap nuoc', prob: 3, impact: 4, score: 12, mitigation: 'ZLD reuse, du tru 3 ngay' },
    { id: 'R-B3', risk: 'Chay/no CNC (bui Titan)', prob: 2, impact: 5, score: 10, mitigation: 'HEPA H13, NOVEC 1230, bao hiem 100%' },
    { id: 'R-C1', risk: 'Thay doi chinh sach uu dai KCNC', prob: 2, impact: 4, score: 8, mitigation: 'Cam ket R&D >= 5%, ESG compliance' },
    { id: 'R-C2', risk: 'Thieu nhan luc CNC tay nghe cao', prob: 3, impact: 3, score: 9, mitigation: 'Dao tao noi bo, hop tac HCMUT' },
    { id: 'R-B8', risk: 'Data breach/Ransomware', prob: 2, impact: 4, score: 8, mitigation: 'ISO 27001, pen-test hang quy' },
];

// ESG — Source: V3 P7
export const esgMetrics = {
    solar: { capacity: '200 kWp rooftop', annual: '~260 MWh/nam', saving: '26-30K USD/nam', co2: '~180 tCO\u2082/nam' },
    zld: { status: 'Cam ket ZLD', cncWastewater: '5-10 m\u00B3/ngay', totalWW: '15-25 m\u00B3/ngay', discharge: '0 m\u00B3' },
    ghg: { baseline: '~4.500 tCO\u2082e/nam', target: '~3.200 tCO\u2082e/nam', reduction: '-28%', committed: '-25% vs BAU by 2030' },
    ghgRoadmap: [
        { phase: 'Y3-Y5', target: '-25%' },
        { phase: 'Y6-Y10', target: '-40%' },
        { phase: 'Y11-Y20', target: '-60%' },
        { phase: 'Y20+', target: 'Net-Zero' },
    ],
    water: { recycleTarget: '\u2265 30%' },
    waste: { recycleTarget: '\u2265 80%', cncChips: '> 90%' },
    edge: { certification: 'EDGE Certified', requirement: 'NLTT >= 20% theo Th\u00F4ng b\u00E1o SHTP 2026' },
};

// Socio-Economic Impact — Source: V3 P9
export const jobCreation = [
    { phase: 'Y0-Y1', admin: '8-10', total: '8-10' },
    { phase: 'Y3-Y4', iot: '12', cnc: '5', admin: '13', total: '30-40' },
    { phase: 'Y5-Y6', iot: '25', cnc: '20', admin: '17', total: '65-80' },
    { phase: 'Y10+ (on dinh)', iot: '40', cnc: '35', admin: '25', total: '100-130' },
];

export const socioKPIs = {
    directJobs15Y: '100-130',
    indirectJobs: '200-260 (h\u1EC7 s\u1ED1 2x)',
    totalJobs: '300-390',
    avgSalary: '25 tri\u1EC7u VND/th\u00E1ng',
    taxRevenue10Y: '~10M USD',
    valueAdded10Y: '50-60M USD',
    totalBenefits10Y: '~80-100M USD',
    totalCosts10Y: '~5,0M USD',
    bcRatio: '16-20x',
    totalSocioEcon10Y: '50-70M USD',
    totalWages10Y: '20-30M USD',
    netExports10Y: '15-20M USD',
};

export const trainingPrograms = [
    { program: 'Thuc tap sinh/nam', value: '15-20 SV', source: 'HCMUT, HUTECH, Cao Thang' },
    { program: 'Chuyen doi full-time', value: '60-70%', source: '-' },
    { program: 'Hoc bong Mekong', value: '8-10 suat/nam', source: '20M VND/suat' },
    { program: 'Chung chi quoc te/nam', value: '20-30', source: 'Siemens NX, Six Sigma' },
    { program: 'Gi\u1EDD \u0111\u00E0o t\u1EA1o/ng\u01B0\u1EDDi/n\u0103m', value: '60-80h', source: '130 nh\u00E2n s\u1EF1 x 60h = 7.800h/n\u0103m' },
    { program: 'Ky su CNC 5-axis', value: '100+', source: 'Dao tao trong 10 nam' },
];

export const csrBudget = '~20K USD/nam';
