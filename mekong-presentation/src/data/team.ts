import type { TeamData } from '../types';

export const team: TeamData = {
    headcount: [
        { phase: 'Y0-Y3', total: 12, iot: 0, cnc: 0, dc: 0, rd: 2, other: 10 },
        { phase: 'Y4-Y5', total: 50, iot: 20, cnc: 0, dc: 0, rd: 5, other: 25 },
        { phase: 'Y6-Y8', total: 115, iot: 35, cnc: 40, dc: 0, rd: 10, other: 30 },
        { phase: 'Y9-Y12', total: 185, iot: 50, cnc: 60, dc: 25, rd: 15, other: 35 },
        { phase: 'Y12+ (ổn định)', total: 200, iot: 55, cnc: 65, dc: 30, rd: 20, other: 30 },
    ],
    cLevel: [
        { role: 'CEO / Tổng Giám đốc', name: 'Phạm Xuân Quốc', profile: 'Founder, 15+ năm IoT/CNC Tech', salary: '120-180K' },
        { role: 'CTO / R&D Director', name: 'Phạm Đình Chương', profile: '12+ năm Robot/Automation, 5 Labs / ~20 kỹ sư', salary: '96-144K' },
        { role: 'CFO', name: 'Phạm Thị Mỹ Phước', profile: 'CPA, 10+ năm Tài chính doanh nghiệp', salary: '84-120K' },
        { role: 'COO', name: 'Bùi Thị Bích Thảo', profile: '8+ năm Sản xuất & Vận hành', salary: '84-120K' },
    ],
    experts: [
        { role: 'CNC Application Engineer', origin: 'Nhật / Đức', count: 2, duration: '2 năm' },
        { role: 'DC Commissioning Engineer', origin: 'Mỹ / Singapore', count: 1, duration: '6 tháng' },
        { role: 'AI/ML Lead', origin: 'Mỹ / Hàn Quốc', count: 1, duration: 'Dài hạn' },
        { role: 'Quality Manager (ISO 9001)', origin: 'Nhật / Đức', count: 1, duration: '2 năm' },
    ],
    esop: { pool: '3%', value: '~0,96M USD', vesting: '4 năm, cliff 1 năm' },
};
