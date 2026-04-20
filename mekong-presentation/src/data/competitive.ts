/** Competitive & Export data \u2014 sourced from DE_AN_MEKONG_V3 Section 1.6, 3.4 */

export interface Competitor {
    name: string;
    iotShare: string;
    robotShare: string;
    strength: string;
    weakness: string;
}

export interface MOATLayer {
    layer: string;
    description: string;
    timeToReplicate: string;
    color: string;
}

export interface ExportRing {
    ring: string;
    name: string;
    timeline: string;
    share: string;
    markets: string[];
    color: string;
}

export const competitors: Competitor[] = [
    { name: 'Siemens', iotShare: '18,5%', robotShare: '15,2%', strength: 'C\u00F4ng ngh\u1EC7 cao, th\u01B0\u01A1ng hi\u1EC7u m\u1EA1nh', weakness: 'Gi\u00E1 cao, th\u1EDDi gian giao h\u00E0ng d\u00E0i' },
    { name: 'Schneider Electric', iotShare: '15,2%', robotShare: '12,8%', strength: 'H\u1EC7 sinh th\u00E1i ho\u00E0n ch\u1EC9nh', weakness: 'Kh\u00F4ng tu\u1EF3 ch\u1EC9nh, h\u1ED7 tr\u1EE3 h\u1EA1n ch\u1EBF' },
    { name: 'Rockwell Automation', iotShare: '12,8%', robotShare: '10,5%', strength: 'Chuy\u00EAn s\u00E2u t\u1EF1 \u0111\u1ED9ng ho\u00E1', weakness: 'Ph\u1EE5 thu\u1ED9c nh\u1EADp kh\u1EA9u' },
    { name: 'Nh\u00E0 SX n\u1ED9i \u0111\u1ECBa', iotShare: '25,6%', robotShare: '30,2%', strength: 'Gi\u00E1 c\u1EA1nh tranh, h\u1ED7 tr\u1EE3 t\u1ED1t', weakness: 'Quy m\u00F4 nh\u1ECF, ch\u1EA5t l\u01B0\u1EE3ng th\u1EA5p' },
];

export const kinexusAdvantages = [
    { metric: 'Gi\u00E1 s\u1EA3n ph\u1EA9m', value: 'R\u1EBB h\u01A1n 20-30%', description: 'so v\u1EDBi nh\u1EADp kh\u1EA9u t\u1EEB Siemens, Schneider' },
    { metric: 'Giao h\u00E0ng', value: '1-2 th\u00E1ng', description: 'vs 3-6 th\u00E1ng ch\u1EDD nh\u1EADp kh\u1EA9u' },
    { metric: 'H\u1ED7 tr\u1EE3 k\u1EF9 thu\u1EADt', value: '24/7', description: 'Ti\u1EBFng Vi\u1EC7t, on-site, tu\u1EF3 ch\u1EC9nh linh ho\u1EA1t' },
    { metric: 'N\u1ED9i \u0111\u1ECBa ho\u00E1', value: '50-70%', description: 'linh ki\u1EC7n \u2014 gi\u1EA3m ph\u1EE5 thu\u1ED9c nh\u1EADp kh\u1EA9u' },
];

export const moatLayers: MOATLayer[] = [
    { layer: 'V\u1ECB tr\u00ED KCNC', description: '1 ha, 3 c\u00F4ng tr\u00ECnh, GFA 10.304 m\u00B2 \u2014 kh\u00F4ng c\u00F2n \u0111\u1EA5t tr\u1ED1ng', timeToReplicate: 'Kh\u00F4ng th\u1EC3 sao ch\u00E9p', color: '#FF5252' },
    { layer: 'Ch\u1EE9ng nh\u1EADn ISO 9001 + Chuy\u00EAn m\u00F4n CNC', description: 'ISO 9001 n\u1EC1n t\u1EA3ng, 10 m\u00E1y CNC ch\u00EDnh x\u00E1c, 2-3 n\u0103m t\u00EDch l\u0169y', timeToReplicate: '3-4 n\u0103m', color: '#FF6D00' },
    { layer: 'H\u1EC7 sinh th\u00E1i 2 B.U.', description: 'IoT/BMS/Robot + CNC t\u00EDch h\u1EE3p t\u1EA1i ch\u1ED7', timeToReplicate: '4-5 n\u0103m + >50M USD', color: '#FFD600' },
    { layer: 'Quan h\u1EC7 FDI', description: 'H\u1EE3p \u0111\u1ED3ng CNC 3-5 n\u0103m v\u1EDBi Samsung, Intel, Bosch', timeToReplicate: '2-3 n\u0103m', color: '#76FF03' },
    { layer: 'KinexusOS Platform', description: 'IoT Cloud IP t\u1EF1 ph\u00E1t tri\u1EC3n, 21 s\u1EA3n ph\u1EA9m BU1', timeToReplicate: '3-5 n\u0103m', color: '#E040FB' },
];

export const moatSummary = '\u0110\u1ED1i th\u1EE7 c\u1EA7n \u226550M USD v\u00E0 4-5 n\u0103m \u0111\u1EC3 sao ch\u00E9p to\u00E0n b\u1ED9 m\u00F4 h\u00ECnh 2 tr\u1EE5 c\u1ED9t';

export const exportRings: ExportRing[] = [
    {
        ring: 'Ring 1',
        name: 'Vi\u1EC7t Nam n\u1ED9i \u0111\u1ECBa',
        timeline: 'Y1-Y3',
        share: '85-90%',
        markets: ['83.035 DNNVV s\u1EA3n xu\u1EA5t', 'Samsung, Intel, Bosch, Nidec, VinFast (CNC)', 'DNNVV c\u1EA7n IoT/BMS (Building, Factory)'],
        color: '#00E5FF',
    },
    {
        ring: 'Ring 2',
        name: 'ASEAN-5',
        timeline: 'Y3-Y5',
        share: '8-12%',
        markets: ['Singapore (Semiconductor)', 'Th\u00E1i Lan (Manufacturing)', 'Malaysia (E&E)', 'Indonesia (Logistics)'],
        color: '#E040FB',
    },
    {
        ring: 'Ring 3',
        name: 'East Asia + \u1EA4n \u0110\u1ED9',
        timeline: 'Y5-Y7+',
        share: '5-15%',
        markets: ['Nh\u1EADt B\u1EA3n (Precision parts)', 'H\u00E0n Qu\u1ED1c (EV components)', '\u1EA4n \u0110\u1ED9 (IoT/Robot)'],
        color: '#76FF03',
    },
];

export const exportKPIs = {
    targetExportPct: '35%',
    exportRevenue10Y: '25-30M USD',
    aseanMarket2030: '58,9 t\u1EF7 USD',
    aseanCAGR: '21,1%/n\u0103m',
    ftas: 'AFTA, RCEP, CPTPP \u2014 0% thu\u1EBF quan',
};
