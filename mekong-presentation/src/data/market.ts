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
            '3 BU cộng hưởng — duy nhất tại KCNC',
            'Tự chủ vốn 75% — không phụ thuộc ODA',
            'Đội ngũ CNC gốc Nhật/Đức',
            'Nền tảng MekongOS đã làm từ 2023',
            'Vị trí KCNC TP.HCM — hệ sinh thái R&D',
        ],
        weaknesses: [
            'Brand mới, chưa có track record',
            'Phụ thuộc 1 site duy nhất (1 ha)',
            'Chi phí nhân sự CNC cao (expat)',
            'Lead time dài (15 năm full CAPEX)',
        ],
        opportunities: [
            'FDI tăng 12% YoY vào VN',
            'Thiếu Tier III DC tại miền Nam',
            'Aerospace CNC chưa có đối thủ nội địa',
            'FPT/VNG chưa làm dovetail CNC+DC',
        ],
        threats: [
            'Thay đổi chính sách ưu đãi KCNC',
            'Thiếu nguồn nhân lực CNC',
            'Giá điện tăng 5-7%/năm',
            'Cạnh tranh DC từ hyperscaler',
        ],
    },
};
