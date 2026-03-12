import type { ProductsData } from '../types';

export const products: ProductsData = {
    iot: {
        title: 'IoT & Robotics',
        subtitle: 'Thiết bị IoT Gateway & Robot tự hành Made in Vietnam',
        icon: 'Cpu',
        color: '#00E5FF',
        items: [
            {
                name: 'MK-200 Gateway',
                desc: 'Industrial IoT Gateway tiêu chuẩn',
                specs: ['STM32F4 + ESP32', 'Modbus RTU/TCP, BACnet', 'MQTT/HTTPS uplink', '8 DI, 4 DO, 4 AI'],
                price: '150-300 USD',
                margin: '65%',
            },
            {
                name: 'MK-300 Gateway',
                desc: 'Edge AI Gateway cao cấp',
                specs: ['NVIDIA Jetson Nano/Orin', 'AI Inference @ Edge', 'Camera + LiDAR input', '5G/4G cellular'],
                price: '500-800 USD',
                margin: '58%',
            },
            {
                name: 'Robot AMR/AGV',
                desc: 'Robot tự hành trong nhà máy',
                specs: ['SLAM Navigation', 'Payload 100-500 kg', 'LiFePO4 Battery 8h', 'Fleet management'],
                price: '15,000-45,000 USD',
                margin: '35%',
            },
        ],
        platform: {
            name: 'MekongOS',
            tiers: [
                { name: 'Starter', price: '99 USD/tháng', devices: '≤50 devices' },
                { name: 'Professional', price: '299 USD/tháng', devices: '≤500 devices' },
                { name: 'Enterprise', price: '499+ USD/tháng', devices: 'Unlimited' },
            ],
        },
    },
    cnc: {
        title: 'CNC Siêu Chính Xác',
        subtitle: '6 máy CNC chính xác — ISO 9001, Precision Grade',
        icon: 'Cog',
        color: '#E040FB',
        machines: '6 máy',
        brand: 'Mixed (Mazak/DMG/Okuma/Haas)',
        axes: '3-5 trục',
        tolerance: '±5 µm',
        materials: ['Titanium Ti-6Al-4V', 'Inconel 718', 'Aluminium 7075-T6', 'Stainless 17-4PH', 'PEEK / Ultem'],
        certifications: ['ISO 9001:2015', 'ISO 13485 (Medical)', 'IATF 16949 (option Y10+)', 'AS9100 (option Y10+)'],
        industries: ['Aerospace & Defense', 'Medical Devices', 'Semiconductor Equipment', 'Automotive EV'],
        unitEconomics: { asp: '2,000 USD', grossMargin: '42%', contributionMargin: '42%' },
    },
    dc: {
        title: 'Datacenter & AI Cloud',
        subtitle: 'Tier III, 100 Rack, PUE 1.32 — GPU-as-a-Service',
        icon: 'Server',
        color: '#76FF03',
        specs: {
            tier: 'Tier III (99.982% uptime)',
            totalRacks: 100,
            zone1: '50 Rack — General IT',
            zone2: '50 Rack — GPU/AI (DLC)',
            power: '2N UPS + N+1 Generator',
            pue: '1.32 (Phase 1) → 1.26 (Phase 2)',
            cooling: 'CRAC + CDU + Rear Door HX',
            network: '2 × 100GbE uplink, BGP multi-homing',
        },
        services: [
            { name: 'Colocation', price: '1,200 USD/rack/tháng', detail: '5 kW/rack, 99.982% SLA' },
            { name: 'GPU-as-a-Service', price: '2.80 USD/GPU-hour', detail: 'NVIDIA A100/H100, on-demand' },
            { name: 'Managed Hosting', price: '800 USD/server/tháng', detail: 'Monitoring 24/7, backup' },
            { name: 'Cloud Connect', price: '500 USD/port/tháng', detail: 'Direct connect AWS/Azure/GCP' },
        ],
    },
};
