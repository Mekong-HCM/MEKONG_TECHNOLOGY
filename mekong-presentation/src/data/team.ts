import type { TeamData } from '../types';

export const team: TeamData = {
    headcount: [
        { phase: 'Y0-Y1', total: 10, iot: 0, cnc: 0, rd: 2, other: 8 },
        { phase: 'Y3-Y4', total: 35, iot: 12, cnc: 5, rd: 5, other: 13 },
        { phase: 'Y5-Y6', total: 72, iot: 25, cnc: 20, rd: 10, other: 17 },
        { phase: 'Y10+ (\u1ED5n \u0111\u1ECBnh)', total: 115, iot: 40, cnc: 35, rd: 15, other: 25 },
    ],
    cLevel: [
        { role: 'CEO / T\u1ED5ng Gi\u00E1m \u0111\u1ED1c', name: 'Ph\u1EA1m Xu\u00E2n Qu\u1ED1c', profile: 'Founder, 15+ n\u0103m IoT/CNC Tech', salary: '120-180K' },
        { role: 'CTO / R&D Director', name: 'Ph\u1EA1m \u0110\u00ECnh Ch\u01B0\u01A1ng', profile: '12+ n\u0103m Robot/Automation, 4 Labs / ~15 k\u1EF9 s\u01B0', salary: '96-144K' },
        { role: 'CFO', name: 'Ph\u1EA1m Th\u1ECB M\u1EF9 Ph\u01B0\u1EDBc', profile: 'CPA, 10+ n\u0103m T\u00E0i ch\u00EDnh doanh nghi\u1EC7p', salary: '84-120K' },
        { role: 'COO', name: 'B\u00F9i Th\u1ECB B\u00EDch Th\u1EA3o', profile: '8+ n\u0103m S\u1EA3n xu\u1EA5t & V\u1EADn h\u00E0nh', salary: '84-120K' },
    ],
    experts: [
        { role: 'CNC Application Engineer', origin: 'Nh\u1EADt / \u0110\u1EE9c', count: 2, duration: '2 n\u0103m' },
        { role: 'AI/ML Lead', origin: 'M\u1EF9 / H\u00E0n Qu\u1ED1c', count: 1, duration: 'D\u00E0i h\u1EA1n' },
        { role: 'Quality Manager (ISO 9001)', origin: 'Nh\u1EADt / \u0110\u1EE9c', count: 1, duration: '2 n\u0103m' },
    ],
    esop: { pool: '3%', value: '~0,66M USD', vesting: '4 n\u0103m, cliff 1 n\u0103m' },
};
