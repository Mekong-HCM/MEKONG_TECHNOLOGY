import type { MarketData } from '../types';

export const market: MarketData = {
    global: [
        { segment: 'IoT', value2024: 600, value2028: 800, cagr: '10.5%', unit: 'B USD' },
        { segment: 'Robotics', value2024: 55, value2028: 95, cagr: '15%', unit: 'B USD' },
        { segment: 'CNC Machining', value2024: 85, value2028: 100, cagr: '4.2%', unit: 'B USD' },
        { segment: 'Datacenter', value2024: 250, value2028: 350, cagr: '8.8%', unit: 'B USD' },
    ],
    vietnam: [
        { segment: 'IoT VN', value: 3.48, unit: 'B USD (2028)', growth: '18%/năm' },
        { segment: 'CNC VN', value: 1.8, unit: 'B USD (2028)', growth: '12%/năm' },
        { segment: 'DC VN', value: 1.8, unit: 'B USD (2028)', growth: '15%/năm' },
        { segment: 'AI/Cloud VN', value: 0.9, unit: 'B USD (2028)', growth: '25%/năm' },
    ],
    positioning: {
        mekong: { complexity: 9, volume: 4, label: 'Mekong Tech' },
        competitors: [
            { complexity: 3, volume: 9, label: 'Foxconn' },
            { complexity: 4, volume: 8, label: 'Samsung VN' },
            { complexity: 7, volume: 6, label: 'Misumi VN' },
            { complexity: 8, volume: 3, label: 'Tokyo Seimitsu' },
            { complexity: 5, volume: 5, label: 'Tiến Đạt CNC' },
        ],
    },
    swot: {
        strengths: [
            '3 BU cong huong — duy nhat tai KCNC',
            'Tu chu von 73,6% — khong phu thuoc ODA',
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
