/** R&D data — sourced from MEKONG_DE_AN_V2_MASTER.md Section 2.7 */

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
    total10Y: '~12,50M USD',
    year1to5: '4,70M USD',
    bmsScada: '1,39M USD',
    pctRevenue: '8-12%',
    minCommitment: '≥5% revenue',
};

export const rdLabs: RDLab[] = [
    { name: 'IoT Hardware Lab', area: '150 m2', budget: '250K USD', team: 5, focus: ['PCB prototyping', 'EMC testing', 'Firmware dev'], color: '#00E5FF' },
    { name: 'AI & Robotics Lab', area: '200 m2', budget: '350K USD', team: 8, focus: ['SLAM', 'Computer Vision', 'ROS2', 'Deep RL'], color: '#E040FB' },
    { name: 'CNC Materials Lab', area: '80 m2', budget: '180K USD', team: 4, focus: ['Metallography', 'Material testing', 'Process R&D'], color: '#FF6D00' },
    { name: 'Precision Metrology (CMM)', area: '120 m2', budget: 'Block B', team: 3, focus: ['CMM Zeiss', 'GD&T analysis', 'Calibration'], color: '#FFD600' },
    { name: 'Cloud & Cybersecurity Lab', area: '50 m2', budget: '120K USD', team: 6, focus: ['MekongOS dev', 'PenTest', 'AI/ML pipeline'], color: '#76FF03' },
];

export const rdTeam = {
    totalEngineers: 26,
    pctOfStaff: '20%',
    qualifications: '15 TS, 25 ThS, 45 KS',
    methodology: 'Agile, 6 thang/sprint',
    trlTarget: 'TRL 7-9',
};

export const partnerships: RDPartnership[] = [
    { partner: 'DMG MORI Academy', origin: 'JP/DE', scope: 'CNC 5-axis training, machining R&D', type: 'Technology Transfer' },
    { partner: 'Hexagon Manufacturing Intelligence', origin: 'SE', scope: 'CMM, GD&T, Metrology', type: 'Technology Transfer' },
    { partner: 'NVIDIA Deep Learning Institute', origin: 'US', scope: 'AI Developer certification, GPU computing', type: 'Training' },
    { partner: 'Uptime Institute', origin: 'US', scope: 'Tier III certification, DC design', type: 'Certification' },
    { partner: 'DH Bach Khoa TPHCM', origin: 'VN', scope: 'Robot + AI research, intern pipeline', type: 'Academic R&D' },
    { partner: 'DH Quoc Gia TPHCM', origin: 'VN', scope: 'IC Design training, material science', type: 'Academic R&D' },
];

export const ipTargets: IPTarget[] = [
    { type: 'Patents (bang sang che)', fiveYear: '8-10', tenYear: '20-25' },
    { type: 'Trademarks', fiveYear: '5', tenYear: '8' },
    { type: 'Software copyrights', fiveYear: '3', tenYear: '6' },
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
        milestones: ['AMR-500/AGV-500 (TRL 9)', 'IATF 16949', 'DC Tier III', 'MekongOS v2.0 (AI)'],
        color: '#E040FB',
    },
    {
        phase: 'Maturity',
        timeline: 'Y5-7 (2029-2031)',
        milestones: ['AMR-1000 (TRL 9)', 'OHT-100 (TRL 8)', 'AS9100', 'MK-300 AI Edge', 'MekongOS v3.0 (Digital Twin)'],
        color: '#76FF03',
    },
    {
        phase: 'Leadership',
        timeline: 'Y8-10 (2032-2035)',
        milestones: ['Autonomous Factory Demo', 'CNC Additive-Subtractive Hybrid', 'Quantum-ready Cloud', 'MekongOS v4.0 (Industry 5.0)'],
        color: '#FFD600',
    },
];
