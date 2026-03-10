import type { InfrastructureData } from '../types';

export const infrastructure: InfrastructureData = {
    building: {
        name: 'Mekong Technology Hub',
        totalGFA: '21.000 m\u00B2',
        floors: [
            { floor: 'Tầng 1', area: '7.000 m\u00B2', content: 'Xưởng CNC (3.000 m\u00B2) + Datacenter (1.500 m\u00B2) + Kho', color: '#E040FB' },
            { floor: 'Tầng 2', area: '7.000 m\u00B2', content: 'IoT/SMT (2.000 m\u00B2) + Phòng R&D (5 phòng) + Lắp ráp', color: '#00E5FF' },
            { floor: 'Tầng 3', area: '7.000 m\u00B2', content: 'Văn phòng + NOC + Nhà ăn + Trung tâm Đào tạo', color: '#76FF03' },
        ],
    },
    specs: [
        { label: 'Tòa nhà', value: '1 tòa 3 tầng — GFA 21.000 m\u00B2', color: '#00E5FF', iconName: 'Building2' },
        { label: 'Điện', value: '5.000 kVA — 2 tuyến EVN — N+1 Gen', color: '#FF9100', iconName: 'Zap' },
        { label: 'Nước', value: '150 m\u00B3/ngày — ZLD — Tái sử dụng 30%', color: '#4dd2ff', iconName: 'Droplets' },
        { label: 'Năng lượng mặt trời', value: '500 kWp — 650 MWh/năm — Hoàn vốn 5,5 năm', color: '#76FF03', iconName: 'Sun' },
        { label: 'PCCC', value: 'NOVEC 1230 + Sprinkler - VESDA', color: '#E040FB', iconName: 'Shield' },
        { label: 'HVAC', value: 'PUE 1,32 - CRAC + CDU + DLC', color: '#00bfff', iconName: 'Thermometer' },
    ],
};
