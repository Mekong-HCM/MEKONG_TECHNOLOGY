import type { TeamData } from '../types';

export const team: TeamData = {
    headcount: [
        { phase: 'Y0-Y4', total: 15, iot: 0, cnc: 0, dc: 0, rd: 2, other: 13 },
        { phase: 'Y5-Y6', total: 59, iot: 25, cnc: 0, dc: 0, rd: 8, other: 26 },
        { phase: 'Y7-Y9', total: 131, iot: 40, cnc: 35, dc: 0, rd: 15, other: 41 },
        { phase: 'Y10-Y13', total: 217, iot: 55, cnc: 65, dc: 15, rd: 22, other: 60 },
        { phase: 'Y15', total: 300, iot: 70, cnc: 90, dc: 30, rd: 30, other: 80 },
    ],
    cLevel: [
        { role: 'CEO / Tổng Giám đốc', profile: 'Founder, 15+ năm CNC/Tech', salary: '120-180K' },
        { role: 'CTO', profile: 'PhD/MS, 10+ năm IoT/AI', salary: '96-144K' },
        { role: 'CFO', profile: 'CPA/CFA, 10+ năm FDI', salary: '84-120K' },
        { role: 'COO', profile: '10+ năm Manufacturing, Lean', salary: '84-120K' },
        { role: 'CSO (Sales)', profile: '8+ năm B2B ASEAN', salary: '72-96K' },
    ],
    experts: [
        { role: 'CNC Application Engineer', origin: 'Nhật / Đức', count: 2, duration: '2 năm' },
        { role: 'DC Commissioning Engineer', origin: 'Mỹ / Singapore', count: 1, duration: '6 tháng' },
        { role: 'AI/ML Lead', origin: 'Mỹ / Hàn Quốc', count: 1, duration: 'Dài hạn' },
        { role: 'Quality Manager (AS9100)', origin: 'Nhật / Đức', count: 1, duration: '3 năm' },
    ],
    esop: { pool: '5%', value: '~1.75M USD', vesting: '4 năm, cliff 1 năm' },
};
