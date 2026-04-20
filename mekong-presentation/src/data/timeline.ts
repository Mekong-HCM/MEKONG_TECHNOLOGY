import type { TimelineData } from '../types';

export const timeline: TimelineData = {
    phases: [
        {
            id: 'Phase1',
            name: 'Pháp lý + Xây dựng 3 công trình',
            period: 'Y1-Y3 (2026-2028)',
            budget: '5,80M (VCSH + Tranche A)',
            color: '#00E5FF',
            items: ['IRC điều chỉnh + ĐTM + PCCC', 'Thiết kế chi tiết 3 công trình (VP + Xưởng + Utility)', 'Xây dựng kết cấu + MEP cơ bản', 'San lấp + ép cọc + Solar 200 kWp'],
        },
        {
            id: 'Phase2',
            name: 'Thiết bị + Sản xuất đầu tiên',
            period: 'Y4-Y6 (2029-2031)',
            budget: '7,30M (Tranche B)',
            color: '#E040FB',
            items: ['Dây chuyền SMT (10 thiết bị) lắp đặt', 'CNC 10 máy lắp đặt + vận hành', 'DC nội bộ (3× 42U)', 'IoT commissioning + First revenue Y4', 'Robot AMR pilot + ISO 9001'],
        },
        {
            id: 'Phase3',
            name: 'Mở rộng + Vận hành trước breakeven',
            period: 'Y7-Y9 (2032-2034)',
            budget: '7,40M (Tranche C + Doanh thu)',
            color: '#76FF03',
            items: ['Mở rộng CNC công suất 85%', 'Robot assembly (6 trạm)', 'ISO 27001', 'Breakeven chiết khấu ~Y10'],
        },
    ],
    milestones: [
        { year: 'Y1', event: 'IRC + BQL KCNC approval', icon: 'FileCheck' },
        { year: 'Y2', event: 'Khởi công 3 công trình', icon: 'HardHat' },
        { year: 'Y3', event: 'Shell hoàn thành', icon: 'Building2' },
        { year: 'Y4', event: 'Doanh thu đầu tiên (IoT/BMS)', icon: 'DollarSign' },
        { year: 'Y5', event: 'ISO 9001 + CNC Full (10 máy)', icon: 'Cog' },
        { year: 'Y7', event: 'Ngành 2 (Robot) vận hành đầy đủ', icon: 'TrendingUp' },
        { year: 'Y9', event: 'DSCR min 1,36× — Tranche B bắt đầu trả', icon: 'Shield' },
        { year: 'Y10', event: 'Breakeven chiết khấu', icon: 'Award' },
        { year: 'Y12+', event: 'Steady-state ~11,59M/năm', icon: 'Target' },
    ],
};
