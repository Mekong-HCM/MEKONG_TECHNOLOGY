/** Product detail data — sourced from DE_AN_MEKONG_V3 (22M model) P2 */

export interface GatewaySpec {
    label: string;
    mk200: string;
    mk300: string;
}

export interface RobotModel {
    name: string;
    type: string;
    payload: string;
    navigation: string;
    speed: string;
    battery: string;
    price: string;
    capacity: string;
    highlight: string;
}

export interface PlatformTierDetail {
    name: string;
    price: string;
    devices: string;
    features: string[];
}

export const gatewaySpecs: GatewaySpec[] = [
    { label: 'Processor', mk200: 'NXP i.MX8M Quad A53 1.5GHz', mk300: 'NVIDIA Jetson Orin Nano, 6-core A78AE + GPU 1024-core' },
    { label: 'RAM / Storage', mk200: '2GB LPDDR4 / 16GB eMMC', mk300: '8GB LPDDR5 / 64GB eMMC + NVMe' },
    { label: 'Connectivity', mk200: 'WiFi 5, BLE 5.0, 4G LTE, 1Gbps ETH', mk300: 'WiFi 6, BLE 5.2, 5G, 2.5Gbps ETH, CAN-FD' },
    { label: 'I/O Points', mk200: '16-24 points', mk300: '32-48 points' },
    { label: 'Protocols', mk200: 'MQTT, Modbus TCP/RTU, BACnet', mk300: '+ OPC UA, EtherCAT, PROFINET' },
    { label: 'AI at Edge', mk200: 'Kh\u00F4ng', mk300: '40 TOPS INT8, Vision AI, Predictive Maintenance' },
    { label: 'Protection', mk200: 'IP65, -10 to 60\u00B0C', mk300: 'IP67, -20 to 70\u00B0C, vibration-rated' },
    { label: 'Security', mk200: 'TLS 1.3, TPM 2.0', mk300: '+ Secure Boot, encrypted OTA' },
    { label: 'Price', mk200: '390-420 USD', mk300: '760 USD (ASP)' },
];

export const gatewayCapacity = {
    total: '3.000 thi\u1EBFt b\u1ECB/n\u0103m',
    mk200: '2.000 units',
    mk300: '1.000 units',
    shifts: '1 ca',
    margin: '48-51% (KX-200), 39-42% (KX-300)',
};

export const robots: RobotModel[] = [
    {
        name: 'AMR-500',
        type: 'AMR',
        payload: '500 kg',
        navigation: 'LiDAR 3D + AI SLAM',
        speed: '1,5 m/s',
        battery: 'LiFePO4 8h',
        price: '20.500 USD (ASP)',
        capacity: '100 b\u1ED9/n\u0103m',
        highlight: 'Deep Reinforcement Learning path planning, COGS 10.750 USD',
    },
    {
        name: 'AMR-1000',
        type: 'AMR',
        payload: '1.000 kg',
        navigation: 'LiDAR 3D + UWB + Deep RL',
        speed: '1,2 m/s',
        battery: 'LiFePO4 10h',
        price: '28.000-38.000 USD',
        capacity: 'Trong 100 b\u1ED9',
        highlight: 'Heavy-duty, multi-floor capable',
    },
    {
        name: 'AGV-500',
        type: 'AGV',
        payload: '500 kg',
        navigation: 'Vision + Magnetic tape',
        speed: '1,0 m/s',
        battery: 'LiFePO4 8h',
        price: '12.000-18.000 USD',
        capacity: '50 b\u1ED9/n\u0103m',
        highlight: 'Cost-effective warehouse automation',
    },
    {
        name: 'AGV-1000',
        type: 'AGV',
        payload: '1.000 kg',
        navigation: 'Vision + LiDAR 2D',
        speed: '0,8 m/s',
        battery: 'LiFePO4 12h',
        price: '20.000-28.000 USD',
        capacity: 'Trong 50 b\u1ED9',
        highlight: 'Heavy manufacturing logistics',
    },
];

export const ohtSpec = {
    name: 'OHT-100',
    payload: '100 kg (2 FOUP)',
    navigation: 'Dual rail overhead, 4-axis control',
    speed: '2,0 m/s',
    price: '45.000-65.000 USD',
    capacity: '30 b\u1ED9/n\u0103m',
    precision: 'Positioning \u00B10,1 mm',
    application: 'Semiconductor fab, clean room logistics',
    features: [
        'Dual rail overhead system',
        '4 tr\u1EE5c \u0111i\u1EC1u khi\u1EC3n \u0111\u1ED3ng th\u1EDDi',
        'Precision positioning \u00B10,1 mm',
        'FOUP handling cho semiconductor',
        'Integrated v\u1EDBi KinexusOS Fleet Manager',
        'Clean room Class 100 compatible',
    ],
};

export const KinexusOSTiers: PlatformTierDetail[] = [
    {
        name: 'Starter',
        price: '99 USD/th\u00E1ng',
        devices: '\u226450 devices',
        features: ['Dashboard c\u01A1 b\u1EA3n', 'MQTT broker', 'Alert email/SMS', '7 ng\u00E0y data retention'],
    },
    {
        name: 'Professional',
        price: '299 USD/th\u00E1ng',
        devices: '\u2264500 devices',
        features: ['AI anomaly detection', 'OPC UA bridge', 'API integration', '90 ng\u00E0y data retention', 'Custom dashboard'],
    },
    {
        name: 'Enterprise',
        price: '499+ USD/th\u00E1ng',
        devices: 'Unlimited',
        features: ['Digital Twin', 'Predictive maintenance', 'Multi-site management', '1 n\u0103m data retention', 'White-label', 'Dedicated support'],
    },
];

export const ecosystemLayers = [
    { layer: 'Field Layer', items: 'KX-EIO Modules (DI/DO/AI/AO/UI), Sensors, Actuators', color: '#00E5FF' },
    { layer: 'Control Layer', items: 'KX-DDC Controllers, PLC Interface, BACnet/Modbus', color: '#00BCD4' },
    { layer: 'Network Layer', items: 'KX-200/300 Gateways, KX-GW Protocol Converters', color: '#E040FB' },
    { layer: 'Software Layer', items: 'KinexusBMS, SCADA, Fleet Manager', color: '#FFD600' },
    { layer: 'Cloud Layer', items: 'KinexusOS Platform (IoT Cloud, AI/ML, Digital Twin)', color: '#76FF03' },
];

export const amr500Cogs = {
    asp: 20500,
    totalCogs: 10750,
    grossMargin: '47,6%',
    breakdown: [
        { component: 'LiDAR & Navigation sensors', cost: 2800 },
        { component: 'Drive unit & Motor', cost: 2200 },
        { component: 'LiFePO4 Battery 8h', cost: 1800 },
        { component: 'Controller & Edge compute', cost: 1500 },
        { component: 'Frame & Chassis (CNC nội bộ)', cost: 1200 },
        { component: 'Safety system', cost: 650 },
        { component: 'Wiring & Assembly', cost: 600 },
    ],
    cncValueAdd: 'Chassis & bracket gia công nội bộ — tiết kiệm ~15% so với outsource',
};
