import type { InfrastructureData } from '../types';

export const infrastructure: InfrastructureData = {
    campus: {
        name: 'Mekong Technology Hub',
        lotArea: 10000,
        totalGFA: 10304,
        totalFootprint: 4648,
        buildingDensity: '46,5%',
        far: '1,03',
        greenArea: '2.000 m\u00B2 (20%)',
    },
    buildings: [
        {
            name: 'T\u00F2a nh\u00E0 V\u0103n ph\u00F2ng',
            dimensions: '21 \u00D7 48 m',
            floors: 3,
            height: '14 m',
            footprint: 1008,
            gfa: 3024,
            usage: ['T1: S\u1EA3nh + Ph\u00F2ng h\u1ECDp + Showroom', 'T2: R&D Lab (4 ph\u00F2ng, 500 m\u00B2)', 'T3: V\u0103n ph\u00F2ng + NOC + \u0110\u00E0o t\u1EA1o'],
            color: '#00E5FF',
        },
        {
            name: 'Nh\u00E0 x\u01B0\u1EDFng S\u1EA3n xu\u1EA5t',
            dimensions: '48 \u00D7 70 m',
            floors: 2,
            height: '14 m (T1: 8m + T2: 5m)',
            footprint: 3360,
            gfa: 6720,
            usage: ['T1: CNC (10 m\u00E1y) + Kho + QA/QC', 'T2: IoT/SMT + L\u1EAFp r\u00E1p Robot + DC n\u1ED9i b\u1ED9 (200 m\u00B2)'],
            color: '#E040FB',
        },
        {
            name: 'Khu Utility',
            dimensions: '5 \u00D7 56 m',
            floors: 2,
            height: '8 m',
            footprint: 280,
            gfa: 560,
            usage: ['T1: Tr\u1EA1m bi\u1EBFn \u00E1p 1.250 kVA + ATS + UPS', 'T2: HVAC + X\u1EED l\u00FD n\u01B0\u1EDBc ZLD'],
            color: '#76FF03',
        },
    ],
    specs: [
        { label: 'C\u00F4ng tr\u00ECnh', value: '3 c\u00F4ng tr\u00ECnh \u2014 GFA 10.304 m\u00B2', color: '#00E5FF', iconName: 'Building2' },
        { label: '\u0110i\u1EC7n', value: '1.250 kVA \u2014 2 tuy\u1EBFn EVN \u2014 N+1 Gen', color: '#FF9100', iconName: 'Zap' },
        { label: 'N\u01B0\u1EDBc', value: '80-100 m\u00B3/ng\u00E0y \u2014 ZLD \u2014 T\u00E1i s\u1EED d\u1EE5ng 30%', color: '#4dd2ff', iconName: 'Droplets' },
        { label: 'N\u0103ng l\u01B0\u1EE3ng m\u1EB7t tr\u1EDDi', value: '200 kWp \u2014 ~260 MWh/n\u0103m \u2014 Ho\u00E0n v\u1ED1n 5,5 n\u0103m', color: '#76FF03', iconName: 'Sun' },
        { label: 'PCCC', value: 'NOVEC 1230 + Sprinkler \u2014 VESDA', color: '#E040FB', iconName: 'Shield' },
        { label: 'L\u00E0m m\u00E1t', value: 'HVAC ch\u00EDnh x\u00E1c cho CNC, cooling cho DC n\u1ED9i b\u1ED9', color: '#00bfff', iconName: 'Thermometer' },
    ],
};
