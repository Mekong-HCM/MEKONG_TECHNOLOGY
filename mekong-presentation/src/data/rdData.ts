/** R&D data — sourced from DE_AN_MEKONG_V3 (22M model) */

export interface RDLab {
    name: string;
    area: string;
    budget: string;
    team: number;
    focus: string[];
    color: string;
}

export interface RDPartnership {
    partner: string;
    origin: string;
    scope: string;
    type: string;
}

export interface IPTarget {
    type: string;
    fiveYear: string;
    tenYear: string;
}

export interface TRLPhase {
    phase: string;
    timeline: string;
    milestones: string[];
    color: string;
}

export const rdBudget = {
    total10Y: '~5,00M USD',
    year1to5: '2,00M USD',
    bmsScada: '0,80M USD',
    pctRevenue: '8-12%',
    minCommitment: '\u2265 5% revenue',
};

export const rdLabs: RDLab[] = [
    { name: 'IoT Hardware Lab', area: '120 m\u00B2', budget: '200K USD', team: 4, focus: ['PCB prototyping', 'EMC testing', 'Firmware dev'], color: '#00E5FF' },
    { name: 'AI & Robotics Lab', area: '150 m\u00B2', budget: '280K USD', team: 6, focus: ['SLAM', 'Computer Vision', 'ROS2', 'Deep RL'], color: '#E040FB' },
    { name: 'CNC Materials Lab', area: '80 m\u00B2', budget: '150K USD', team: 3, focus: ['Metallography', 'Material testing', 'Process R&D'], color: '#FF6D00' },
    { name: 'Cloud & Cybersecurity Lab', area: '50 m\u00B2', budget: '100K USD', team: 4, focus: ['MekongOS dev', 'PenTest', 'ISO 27001 audit'], color: '#76FF03' },
];

export const rdTeam = {
    totalEngineers: 15,
    pctOfStaff: '12-15%',
    qualifications: '5 TS, 10 ThS, 20 KS',
    methodology: 'Agile, 6 th\u00E1ng/sprint',
    trlTarget: 'TRL 7-9',
};

export const partnerships: RDPartnership[] = [
    { partner: 'DMG MORI Academy', origin: 'JP/DE', scope: 'CNC 5-axis training, machining R&D', type: 'Technology Transfer' },
    { partner: 'Hexagon Manufacturing Intelligence', origin: 'SE', scope: 'CMM, GD\u0026T, Metrology', type: 'Technology Transfer' },
    { partner: 'NVIDIA Deep Learning Institute', origin: 'US', scope: 'AI Developer certification, Edge AI', type: 'Training' },
    { partner: '\u0110H B\u00E1ch Khoa TPHCM', origin: 'VN', scope: 'Robot + AI research, intern pipeline', type: 'Academic R\u0026D' },
    { partner: '\u0110H Qu\u1ED1c Gia TPHCM', origin: 'VN', scope: 'IC Design training, material science', type: 'Academic R\u0026D' },
];

export const ipTargets: IPTarget[] = [
    { type: 'Patents (b\u1EB1ng s\u00E1ng ch\u1EBF)', fiveYear: '5-8', tenYear: '15-20' },
    { type: 'Trademarks', fiveYear: '4', tenYear: '6' },
    { type: 'Software copyrights', fiveYear: '3', tenYear: '5' },
];

export const trlRoadmap: TRLPhase[] = [
    {
        phase: 'Foundation',
        timeline: 'Y1-2 (2025-2026)',
        milestones: ['IoT Gateway MK-200 (TRL 9)', 'CNC ISO 9001', 'MekongOS v1.0'],
        color: '#00E5FF',
    },
    {
        phase: 'Growth',
        timeline: 'Y3-4 (2027-2028)',
        milestones: ['AMR-500/AGV-500 (TRL 9)', 'MK-300 AI Edge (TRL 7)', 'MekongOS v2.0 (AI)'],
        color: '#E040FB',
    },
    {
        phase: 'Maturity',
        timeline: 'Y5-7 (2029-2031)',
        milestones: ['AMR-1000 (TRL 9)', 'OHT-100 (TRL 8)', 'AS9100 (n\u1EBFu c\u00F3 nhu c\u1EA7u)', 'MekongOS v3.0 (Digital Twin)'],
        color: '#76FF03',
    },
    {
        phase: 'Leadership',
        timeline: 'Y8-10 (2032-2035)',
        milestones: ['Autonomous Factory Demo', 'CNC Additive-Subtractive Hybrid', 'MekongOS v4.0 (Industry 5.0)'],
        color: '#FFD600',
    },
];
