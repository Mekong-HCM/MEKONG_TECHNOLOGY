import type { MarketData } from '../types';

export const market: MarketData = {
    global: [
        { segment: 'IoT / BMS', value2024: 600, value2028: 800, cagr: '10,5%', unit: 'B USD' },
        { segment: 'Robotics (AMR/AGV)', value2024: 55, value2028: 95, cagr: '15%', unit: 'B USD' },
        { segment: 'CNC Machining', value2024: 85, value2028: 100, cagr: '4,2%', unit: 'B USD' },
    ],
    vietnam: [
        { segment: 'IoT VN', value: 3.48, unit: 'B USD (2028)', growth: '18%/n\u0103m' },
        { segment: 'CNC VN', value: 1.8, unit: 'B USD (2028)', growth: '12%/n\u0103m' },
        { segment: 'Robot VN', value: 0.8, unit: 'B USD (2028)', growth: '20%/n\u0103m' },
    ],
    positioning: {
        kinexus: { complexity: 9, volume: 4, label: 'KINEXUS Tech' },
        competitors: [
            { complexity: 3, volume: 9, label: 'Foxconn' },
            { complexity: 4, volume: 8, label: 'Samsung VN' },
            { complexity: 7, volume: 6, label: 'Misumi VN' },
            { complexity: 8, volume: 3, label: 'Tokyo Seimitsu' },
            { complexity: 5, volume: 5, label: 'Ti\u1EBFn \u0110\u1EA1t CNC' },
        ],
    },
    swot: {
        strengths: [
            '2 tr\u1EE5 c\u1ED9t c\u1ED9ng h\u01B0\u1EDFng (\u0110i\u1EC7n t\u1EED th\u00F4ng minh + CNC/MPMC) \u2014 duy nh\u1EA5t t\u1EA1i KCNC',
            'VCSH 4,5M + Project Finance Tranche \u2014 WACC 7,9%',
            '\u0110\u1ED9i ng\u0169 CNC g\u1ED1c Nh\u1EADt/\u0110\u1EE9c',
            'N\u1EC1n t\u1EA3ng KinexusOS \u0111\u00E3 l\u00E0m t\u1EEB 2023',
            'V\u1ECB tr\u00ED KCNC TP.HCM \u2014 h\u1EC7 sinh th\u00E1i R&D',
        ],
        weaknesses: [
            'Brand m\u1EDBi, ch\u01B0a c\u00F3 track record',
            'Ph\u1EE5 thu\u1ED9c 1 site duy nh\u1EA5t (1 ha)',
            'Chi ph\u00ED nh\u00E2n s\u1EF1 CNC cao (expat)',
            'Quy m\u00F4 CAPEX 22M \u2014 g\u1ECDn nh\u1EB9 nh\u01B0ng gi\u1EDBi h\u1EA1n m\u1EDF r\u1ED9ng',
        ],
        opportunities: [
            'FDI t\u0103ng 12% YoY v\u00E0o VN',
            'Thi\u1EBFu CNC ch\u00EDnh x\u00E1c t\u1EA1i mi\u1EC1n Nam (gap ~15 c\u01A1 s\u1EDF)',
            'Robot AMR Made-in-VN ch\u01B0a c\u00F3 \u0111\u1ED1i th\u1EE7 n\u1ED9i \u0111\u1ECBa m\u1EA1nh',
            'Ch\u00EDnh s\u00E1ch NLTT >= 20% theo Th\u00F4ng b\u00E1o SHTP 2026',
        ],
        threats: [
            'Thay \u0111\u1ED5i ch\u00EDnh s\u00E1ch \u01B0u \u0111\u00E3i KCNC',
            'Thi\u1EBFu ngu\u1ED3n nh\u00E2n l\u1EF1c CNC',
            'Gi\u00E1 \u0111i\u1EC7n t\u0103ng 5-7%/n\u0103m',
            'C\u1EA1nh tranh IoT gateway t\u1EEB Trung Qu\u1ED1c',
        ],
    },
};
