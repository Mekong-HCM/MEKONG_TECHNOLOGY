import type { InfrastructureData } from '../types';

export const infrastructure: InfrastructureData = {
    building: {
        name: 'Mekong Technology Hub',
        totalGFA: '21.000 m\u00B2',
        floors: [
            { floor: 'Tang 1', area: '7.000 m\u00B2', content: 'CNC Workshop (3.000 m\u00B2) + Datacenter (1.500 m\u00B2) + Kho', color: '#E040FB' },
            { floor: 'Tang 2', area: '7.000 m\u00B2', content: 'IoT/SMT (2.000 m\u00B2) + R&D Labs (5 phong) + Assembly', color: '#00E5FF' },
            { floor: 'Tang 3', area: '7.000 m\u00B2', content: 'Van phong + NOC + Canteen + Training Center', color: '#76FF03' },
        ],
    },
    specs: [
        { label: 'Toa nha', value: '1 toa 3 tang - GFA 21.000 m\u00B2', color: '#00E5FF', iconName: 'Building2' },
        { label: 'Dien', value: '5.000 kVA - 2 tuyen EVN - N+1 Gen', color: '#FF9100', iconName: 'Zap' },
        { label: 'Nuoc', value: '150 m\u00B3/ngay - ZLD - Tai su dung 30%', color: '#4dd2ff', iconName: 'Droplets' },
        { label: 'Solar', value: '500 kWp - 650 MWh/nam - Payback 5,5Y', color: '#76FF03', iconName: 'Sun' },
        { label: 'PCCC', value: 'NOVEC 1230 + Sprinkler - VESDA', color: '#E040FB', iconName: 'Shield' },
        { label: 'HVAC', value: 'PUE 1,32 - CRAC + CDU + DLC', color: '#00bfff', iconName: 'Thermometer' },
    ],
};
