import type { ProductsData } from '../types';

export const products: ProductsData = {
    iot: {
        title: 'Ngành 1: Điện tử Thông minh',
        subtitle: 'IoT Gateway, BMS/SCADA, Platform SaaS — 49,1% doanh thu',
        icon: 'Cpu',
        color: '#00E5FF',
        items: [
            {
                name: 'KX-200 Gateway',
                desc: 'Industrial IoT Gateway tiêu chuẩn',
                specs: ['NXP i.MX8M Quad A53 1.5GHz', 'Modbus RTU/TCP, BACnet, OPC UA', 'MQTT/HTTPS, TLS 1.3', '16-24 I/O points'],
                price: '390-420 USD',
                margin: '48-51%',
            },
            {
                name: 'KX-300 Gateway',
                desc: 'Edge AI Gateway cao cấp',
                specs: ['NVIDIA Jetson Orin Nano 40 TOPS', 'AI Inference @ Edge', 'Camera + LiDAR input', '5G/4G cellular'],
                price: '760 USD (ASP)',
                margin: '39-42%',
            },
            {
                name: 'Module I/O & DDC',
                desc: 'KX-EIO DI/DO/AI/AO + KX-DDC Controllers',
                specs: ['STM32F407 Cortex-M4', 'BACnet IP/SC, Modbus', 'IP65 industrial rating', '8-32 points/module'],
                price: '80-250 USD',
                margin: '55-65%',
            },
        ],
        platform: {
            name: 'KinexusOS',
            tiers: [
                { name: 'Starter', price: '99 USD/tháng', devices: '≤50 devices' },
                { name: 'Professional', price: '299 USD/tháng', devices: '≤500 devices' },
                { name: 'Enterprise', price: '499+ USD/tháng', devices: 'Unlimited' },
            ],
        },
    },
    cnc: {
        title: 'Năng lực CNC/MPMC',
        subtitle: '10 máy CNC chính xác — Hỗ trợ nội bộ + Gia công FDI — ISO 9001',
        icon: 'Cog',
        color: '#E040FB',
        machines: '10 máy',
        brand: 'DMG MORI, Mazak, Haas, Okuma, Sodick',
        axes: '3-5 trục',
        tolerance: '±5 µm',
        materials: ['Titanium Ti-6Al-4V', 'Inconel 718', 'Aluminium 7075-T6', 'Stainless 17-4PH', 'PEEK / Ultem'],
        certifications: ['ISO 9001:2015'],
        industries: ['Electronics (FDI)', 'Semiconductor Equipment', 'Medical Devices', 'Automotive EV'],
        unitEconomics: { asp: '2.000 USD', grossMargin: '42%', contributionMargin: '42%' },
    },
    dcInternal: {
        area: '200 m² (Tầng 2 nhà xưởng)',
        racks: '3× 42U (Phase 2), mở rộng 5-8 rack',
        power: '30-50 kW',
        purpose: 'Hỗ trợ nội bộ: KinexusOS, MES, ERP, BMS/SCADA, R&D',
        capex: '1,00M USD (Phase 2) + 1,20M USD (Phase 3 mở rộng)',
    },
};