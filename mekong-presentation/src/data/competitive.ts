/** Competitive & Export data — sourced from MEKONG_DE_AN_V2_MASTER.md Section 1.6, 3.4 */

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
    { name: 'Siemens', iotShare: '18,5%', robotShare: '15,2%', strength: 'Cong nghe cao, thuong hieu manh', weakness: 'Gia cao, thoi gian giao hang dai' },
    { name: 'Schneider Electric', iotShare: '15,2%', robotShare: '12,8%', strength: 'He sinh thai hoan chinh', weakness: 'Khong tuy chinh, ho tro han che' },
    { name: 'Rockwell Automation', iotShare: '12,8%', robotShare: '10,5%', strength: 'Chuyen sau tu dong hoa', weakness: 'Phu thuoc nhap khau' },
    { name: 'Nha SX noi dia', iotShare: '25,6%', robotShare: '30,2%', strength: 'Gia canh tranh, ho tro tot', weakness: 'Quy mo nho, chat luong thap' },
];

export const mekongAdvantages = [
    { metric: 'Gia san pham', value: 'Re hon 20-30%', description: 'so voi nhap khau tu Siemens, Schneider' },
    { metric: 'Giao hang', value: '1-2 thang', description: 'vs 3-6 thang cho nhap khau' },
    { metric: 'Ho tro ky thuat', value: '24/7', description: 'Tieng Viet, on-site, tuy chinh linh hoat' },
    { metric: 'Noi dia hoa', value: '50-70%', description: 'linh kien — giam phu thuoc nhap khau' },
];

export const moatLayers: MOATLayer[] = [
    { layer: 'Vi tri KCNC', description: '1 ha, 3 tang, GFA 21.000 m2 — khong con dat trong', timeToReplicate: 'Khong the sao chep', color: '#FF5252' },
    { layer: 'Chung nhan IATF + AS9100', description: '2-3 nam + 350-530K USD chi phi', timeToReplicate: '3-4 nam', color: '#FF6D00' },
    { layer: 'He sinh thai 3 B.U.', description: 'IoT + CNC + DC tich hop tai cho', timeToReplicate: '4-5 nam + >100M USD', color: '#FFD600' },
    { layer: 'Quan he FDI', description: 'Hop dong CNC 3-5 nam', timeToReplicate: '2-3 nam', color: '#76FF03' },
    { layer: 'Tier III DC', description: 'Uptime Institute certified', timeToReplicate: '2-3 nam', color: '#00E5FF' },
    { layer: 'MekongOS Platform', description: 'IoT Cloud IP tu phat trien', timeToReplicate: '3-5 nam', color: '#E040FB' },
];

export const moatSummary = 'Doi thu can ≥100M USD va 5 nam de sao chep toan bo mo hinh';

export const exportRings: ExportRing[] = [
    {
        ring: 'Ring 1',
        name: 'Viet Nam noi dia',
        timeline: 'Y1-Y3',
        share: '85-90%',
        markets: ['83.035 DNNVV san xuat', 'Samsung, Intel, Bosch, Nidec, VinFast (CNC)', 'Startup AI/ML (DC/GPU)'],
        color: '#00E5FF',
    },
    {
        ring: 'Ring 2',
        name: 'ASEAN-5',
        timeline: 'Y3-Y5',
        share: '8-12%',
        markets: ['Singapore (Semiconductor)', 'Thai Lan (Manufacturing)', 'Malaysia (E&E)', 'Indonesia (Logistics)'],
        color: '#E040FB',
    },
    {
        ring: 'Ring 3',
        name: 'East Asia + An Do',
        timeline: 'Y5-Y7+',
        share: '5-15%',
        markets: ['Nhat Ban (Precision parts)', 'Han Quoc (EV components)', 'An Do (IoT/Robot)'],
        color: '#76FF03',
    },
];

export const exportKPIs = {
    targetExportPct: '35%',
    exportRevenue10Y: '41,9M USD',
    aseanMarket2030: '58,9 ty USD',
    aseanCAGR: '21,1%/nam',
    ftas: 'AFTA, RCEP, CPTPP — 0% thue quan',
};
