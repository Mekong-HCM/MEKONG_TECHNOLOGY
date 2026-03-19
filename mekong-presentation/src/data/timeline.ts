import type { TimelineData } from '../types';

export const timeline: TimelineData = {
    phases: [
        {
            id: 'P0',
            name: 'Pháp lý & Nền móng',
            period: 'Y0-Y1 (2025-2026)',
            budget: '1,50M',
            color: '#00E5FF',
            items: ['IRC điều chỉnh', 'ĐTM + PCCC', 'Thiết kế chi tiết 3 công trình', 'San lấp + ép cọc'],
        },
        {
            id: 'P1',
            name: 'Xây dựng Shell & MEP',
            period: 'Y1-Y3 (2026-2028)',
            budget: '8,40M',
            color: '#4dd2ff',
            items: ['Kết cấu 3 công trình (VP + Xưởng + Utility)', 'MEP cơ bản + Solar 200 kWp', 'IoT/SMT Lab fit-out', 'DC nội bộ (5-8 rack)'],
        },
        {
            id: 'P2',
            name: 'Sản xuất & Doanh thu',
            period: 'Y3-Y5 (2028-2030)',
            budget: '9,60M',
            color: '#E040FB',
            items: ['IoT commissioning + First revenue Y4', '10 máy CNC lắp đặt + vận hành', 'ISO 9001 Y4', 'Robot AMR/AGV pilot'],
        },
        {
            id: 'P3',
            name: 'Mở rộng & Ổn định',
            period: 'Y5-Y7 (2030-2032)',
            budget: '2,50M',
            color: '#76FF03',
            items: ['CNC mở rộng công suất 85%', 'Full 2 BU vận hành', 'ISO 27001', 'Breakeven chiết khấu ~Y10'],
        },
    ],
    milestones: [
        { year: 'Y0', event: 'IRC + BQL KCNC approval', icon: 'FileCheck' },
        { year: 'Y1', event: 'Khởi công 3 công trình', icon: 'HardHat' },
        { year: 'Y3', event: 'Shell hoàn thành', icon: 'Building2' },
        { year: 'Y4', event: 'Doanh thu đầu tiên (IoT)', icon: 'DollarSign' },
        { year: 'Y5', event: 'ISO 9001 + CNC Full (10 máy)', icon: 'Cog' },
        { year: 'Y7', event: 'Full 2 BU + vay 4M', icon: 'TrendingUp' },
        { year: 'Y10', event: 'Breakeven chiết khấu', icon: 'Award' },
        { year: 'Y12+', event: 'Steady-state ~12M/năm', icon: 'Target' },
    ],
};
