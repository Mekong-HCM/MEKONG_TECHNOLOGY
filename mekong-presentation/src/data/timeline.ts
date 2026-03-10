import type { TimelineData } from '../types';

export const timeline: TimelineData = {
    phases: [
        {
            id: 'P0',
            name: 'Pháp lý & Nền móng',
            period: 'Y0-Y2 (2025-2027)',
            budget: '2.50M',
            color: '#00E5FF',
            items: ['IRC điều chỉnh', 'ĐTM + PCCC', 'Thiết kế chi tiết', 'San lấp + ép cọc'],
        },
        {
            id: 'P1',
            name: 'Shell Construction',
            period: 'Y2-Y5 (2027-2030)',
            budget: '8.50M',
            color: '#4dd2ff',
            items: ['Kết cấu 3 tầng', 'MEP cơ bản', 'Pin mặt trời 500 kWp', 'IoT Lab fit-out'],
        },
        {
            id: 'P2',
            name: 'IoT Launch + CNC Prep',
            period: 'Y5-Y7 (2030-2032)',
            budget: '10.60M',
            color: '#E040FB',
            items: ['IoT commissioning', 'First revenue Y6', 'PO 15 máy CNC', 'ISO 9001'],
        },
        {
            id: 'P3',
            name: 'CNC Full + DC Infra',
            period: 'Y7-Y10 (2032-2035)',
            budget: '13.00M',
            color: '#76FF03',
            items: ['28 máy CNC vận hành', 'DC Zone 1 (50 Rack)', 'IATF 16949', 'Breakeven Y8-Y9'],
        },
        {
            id: 'P4',
            name: 'DC Full + Steady-state',
            period: 'Y10-Y13 (2035-2038)',
            budget: '10.90M',
            color: '#FF9100',
            items: ['DC Zone 2 (50 Rack AI)', 'Full 3 BU', 'AS9100 + Tier III', 'Revenue 30M+/năm'],
        },
    ],
    milestones: [
        { year: 'Y0', event: 'IRC + BQL approval', icon: 'FileCheck' },
        { year: 'Y2', event: 'Ground Breaking', icon: 'HardHat' },
        { year: 'Y5', event: 'Shell hoàn thành', icon: 'Building2' },
        { year: 'Y6', event: 'First Revenue (IoT)', icon: 'DollarSign' },
        { year: 'Y8', event: 'CNC Full Operation', icon: 'Cog' },
        { year: 'Y9', event: 'Breakeven (EBIT>0)', icon: 'TrendingUp' },
        { year: 'Y11', event: 'DC Zone 1 Live', icon: 'Server' },
        { year: 'Y13', event: 'Breakeven (Discounted)', icon: 'Award' },
        { year: 'Y15', event: 'Revenue 32M', icon: 'Target' },
    ],
};
