import type { ProductsData } from '../types';

export const products: ProductsData = {
    iot: {
        title: 'BU1: Điện tử Thông minh',
        subtitle: 'IoT Gateway, BMS/SCADA, Robot AMR/AGV — 70,8% doanh thu',
        icon: 'Cpu',
        color: '#00E5FF',
        items: [
            {
                name: 'MK-200 Gateway',
                desc: 'Industrial IoT Gateway tiêu chuẩn',
                specs: ['NXP i.MX8M Quad A53 1.5GHz', 'Modbus RTU/TCP, BACnet, OPC UA', 'MQTT/HTTPS, TLS 1.3', '25 I/O points'],
                price: '350-450 USD',
                margin: '65%',
            },
            {
                name: 'MK-300 Gateway',
                desc: 'Edge AI Gateway cao cấp',
                specs: ['NVIDIA Jetson Orin Nano', 'AI Inference @ Edge', 'Camera + LiDAR input', '5G/4G cellular'],
                price: '800-1.200 USD',
                margin: '58%',
            },
            {
                name: 'Robot AMR/AGV',
                desc: 'Robot tự hành trong nhà máy',
                specs: ['AI SLAM + LiDAR 3D 360\u00B0', 'Payload 500-1.000 kg', 'LiFePO4 Battery 8-12h', 'MekongOS Fleet Manager'],
                price: '12.000-38.000 USD',
                margin: '35%',
            },
        ],
        platform: {
            name: 'MekongOS',
            tiers: [
                { name: 'Starter', price: '99 USD/tháng', devices: '\u226450 devices' },
                { name: 'Professional', price: '299 USD/tháng', devices: '\u2264500 devices' },
                { name: 'Enterprise', price: '499+ USD/tháng', devices: 'Unlimited' },
            ],
        },
    },
    cnc: {
        title: 'BU2: CNC/MPMC',
        subtitle: '10 máy CNC chính xác — ISO 9001, Precision Grade — 29,2% doanh thu',
        icon: 'Cog',
        color: '#E040FB',
        machines: '10 máy',
        brand: 'DMG MORI, Mazak, Haas, Sodick',
        axes: '3-5 trục',
        tolerance: '\u00B15 \u00B5m',
        materials: ['Titanium Ti-6Al-4V', 'Inconel 718', 'Aluminium 7075-T6', 'Stainless 17-4PH', 'PEEK / Ultem'],
        certifications: ['ISO 9001:2015'],
        industries: ['Electronics (FDI)', 'Semiconductor Equipment', 'Medical Devices', 'Automotive EV'],
        unitEconomics: { asp: '2.000 USD', grossMargin: '42%', contributionMargin: '42%' },
    },
    dcInternal: {
        area: '200 m\u00B2 (Tầng 2 nhà xưởng)',
        racks: '5-8 rack 42U',
        power: '30-50 kW',
        purpose: 'Hỗ trợ nội bộ: MekongOS, MES, ERP, BMS/SCADA, R&D',
        capex: '2,20M USD (10,0% tổng CAPEX)',
    },
};
