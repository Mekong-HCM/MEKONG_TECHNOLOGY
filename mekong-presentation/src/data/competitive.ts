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
    { name: 'Siemens', iotShare: '18,5%', robotShare: '15,2%', strength: 'Công nghệ cao, thương hiệu mạnh', weakness: 'Giá cao, thời gian giao hàng dài' },
    { name: 'Schneider Electric', iotShare: '15,2%', robotShare: '12,8%', strength: 'Hệ sinh thái hoàn chỉnh', weakness: 'Không tuỳ chỉnh, hỗ trợ hạn chế' },
    { name: 'Rockwell Automation', iotShare: '12,8%', robotShare: '10,5%', strength: 'Chuyên sâu tự động hoá', weakness: 'Phụ thuộc nhập khẩu' },
    { name: 'Nhà SX nội địa', iotShare: '25,6%', robotShare: '30,2%', strength: 'Giá cạnh tranh, hỗ trợ tốt', weakness: 'Quy mô nhỏ, chất lượng thấp' },
];

export const mekongAdvantages = [
    { metric: 'Giá sản phẩm', value: 'Rẻ hơn 20-30%', description: 'so với nhập khẩu từ Siemens, Schneider' },
    { metric: 'Giao hàng', value: '1-2 tháng', description: 'vs 3-6 tháng chờ nhập khẩu' },
    { metric: 'Hỗ trợ kỹ thuật', value: '24/7', description: 'Tiếng Việt, on-site, tuỳ chỉnh linh hoạt' },
    { metric: 'Nội địa hoá', value: '50-70%', description: 'linh kiện — giảm phụ thuộc nhập khẩu' },
];

export const moatLayers: MOATLayer[] = [
    { layer: 'Vị trí KCNC', description: '1 ha, 3 tầng, GFA 21.000 m² — không còn đất trống', timeToReplicate: 'Không thể sao chép', color: '#FF5252' },
    { layer: 'Chứng nhận IATF + AS9100', description: '2-3 năm + 350-530K USD chi phí', timeToReplicate: '3-4 năm', color: '#FF6D00' },
    { layer: 'Hệ sinh thái 3 B.U.', description: 'IoT + CNC + DC tích hợp tại chỗ', timeToReplicate: '4-5 năm + >100M USD', color: '#FFD600' },
    { layer: 'Quan hệ FDI', description: 'Hợp đồng CNC 3-5 năm', timeToReplicate: '2-3 năm', color: '#76FF03' },
    { layer: 'Tier III DC', description: 'Uptime Institute certified', timeToReplicate: '2-3 năm', color: '#00E5FF' },
    { layer: 'MekongOS Platform', description: 'IoT Cloud IP tự phát triển', timeToReplicate: '3-5 năm', color: '#E040FB' },
];

export const moatSummary = 'Đối thủ cần ≥100M USD và 5 năm để sao chép toàn bộ mô hình';

export const exportRings: ExportRing[] = [
    {
        ring: 'Ring 1',
        name: 'Việt Nam nội địa',
        timeline: 'Y1-Y3',
        share: '85-90%',
        markets: ['83.035 DNNVV sản xuất', 'Samsung, Intel, Bosch, Nidec, VinFast (CNC)', 'Startup AI/ML (DC/GPU)'],
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
        name: 'East Asia + Ấn Độ',
        timeline: 'Y5-Y7+',
        share: '5-15%',
        markets: ['Nhật Bản (Precision parts)', 'Hàn Quốc (EV components)', 'Ấn Độ (IoT/Robot)'],
        color: '#76FF03',
    },
];

export const exportKPIs = {
    targetExportPct: '35%',
    exportRevenue10Y: '41,9M USD',
    aseanMarket2030: '58,9 ty USD',
    aseanCAGR: '21,1%/năm',
    ftas: 'AFTA, RCEP, CPTPP — 0% thuế quan',
};
