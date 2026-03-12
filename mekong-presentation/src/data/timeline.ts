import type { TimelineData } from '../types';

export const timeline: TimelineData = {
    phases: [
        {
            id: 'P0',
            name: 'Pháp lý & Nền móng',
            period: 'Y0-Y1 (2025-2026)',
            budget: '1,50M',
            color: '#00E5FF',
            items: ['IRC điều chỉnh', 'ĐTM + PCCC', 'Thiết kế chi tiết', 'San lấp + ép cọc'],
        },
        {
            id: 'P1',
            name: 'Shell Construction',
            period: 'Y1-Y3 (2026-2028)',
            budget: '7,50M',
            color: '#4dd2ff',
            items: ['Kết cấu tòa nhà', 'MEP cơ bản', 'Pin mặt trời 500 kWp', 'IoT Lab fit-out'],
        },
        {
            id: 'P2',
            name: 'IoT Launch + CNC Prep',
            period: 'Y3-Y5 (2028-2030)',
            budget: '7,00M',
            color: '#E040FB',
            items: ['IoT commissioning', 'First revenue Y4-Y5', '6 máy CNC install', 'ISO 9001 Y4'],
        },
        {
            id: 'P3',
            name: 'CNC Full + DC Infra',
            period: 'Y5-Y8 (2030-2033)',
            budget: '8,00M',
            color: '#76FF03',
            items: ['6 máy CNC vận hành', 'DC Zone 1 (50 Rack)', 'ISO 27001 Y5', 'Breakeven Y7-Y8'],
        },
        {
            id: 'P4',
            name: 'DC Full + Steady-state',
            period: 'Y8-Y12 (2033-2037)',
            budget: '8,00M',
            color: '#FF9100',
            items: ['DC Zone 2 (50 Rack AI)', 'Full 3 BU', 'Tier III + SOC 2', 'Revenue ~21M/năm steady'],
        },
    ],
    milestones: [
        { year: 'Y0', event: 'IRC + BQL approval', icon: 'FileCheck' },
        { year: 'Y1', event: 'Ground Breaking', icon: 'HardHat' },
        { year: 'Y3', event: 'Shell hoàn thành', icon: 'Building2' },
        { year: 'Y4-Y5', event: 'First Revenue (IoT + CNC)', icon: 'DollarSign' },
        { year: 'Y5', event: 'ISO 9001 + CNC Full', icon: 'Cog' },
        { year: 'Y7-Y8', event: 'Breakeven (EBIT>0)', icon: 'TrendingUp' },
        { year: 'Y8-Y9', event: 'DC Zone 1 Live + Tier III', icon: 'Server' },
        { year: 'Y10', event: 'Discounted Breakeven', icon: 'Award' },
        { year: 'Y12+', event: 'Steady-state ~21M/năm', icon: 'Target' },
    ],
};
