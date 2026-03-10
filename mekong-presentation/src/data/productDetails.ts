/** Product detail data — sourced from MEKONG_DE_AN_V2_MASTER.md Section 2.2 */

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
    { label: 'Processor', mk200: 'ARM Cortex-A53, 4-core 1.8GHz', mk300: 'ARM Cortex-A78, 8-core 2.8GHz + NPU 6 TOPS' },
    { label: 'RAM / Storage', mk200: '4GB LPDDR4 / 32GB eMMC', mk300: '8GB LPDDR5 / 64GB eMMC' },
    { label: 'Connectivity', mk200: 'WiFi 6, BLE 5.2, 4G LTE, 1Gbps ETH', mk300: 'WiFi 6E, BLE 5.3, 5G, 2.5Gbps ETH, CAN' },
    { label: 'I/O Points', mk200: '25 points', mk300: '35 points' },
    { label: 'Protocols', mk200: 'MQTT, OPC UA, Modbus', mk300: '+ EtherCAT, PROFINET, gRPC' },
    { label: 'AI at Edge', mk200: 'Khong', mk300: 'Vision AI, Predictive Maintenance' },
    { label: 'Protection', mk200: 'IP65, -10 to 60 C', mk300: 'IP67, -20 to 70 C, vibration-rated' },
    { label: 'Security', mk200: 'TLS 1.3, TPM 2.0', mk300: '+ Secure Boot, encrypted OTA' },
    { label: 'Price', mk200: '800-1.200 USD', mk300: '1.500-2.500 USD' },
];

export const gatewayCapacity = {
    total: '5.000 thiet bi/nam',
    mk200: '3.000 units',
    mk300: '2.000 units',
    shifts: '1 ca',
    margin: '55-65%',
};

export const robots: RobotModel[] = [
    {
        name: 'AMR-500',
        type: 'AMR',
        payload: '500 kg',
        navigation: 'LiDAR 3D + AI SLAM',
        speed: '1,5 m/s',
        battery: 'LiFePO4 8h',
        price: '18.000-25.000 USD',
        capacity: '200 bo/nam',
        highlight: 'Deep Reinforcement Learning path planning',
    },
    {
        name: 'AMR-1000',
        type: 'AMR',
        payload: '1.000 kg',
        navigation: 'LiDAR 3D + UWB + Deep RL',
        speed: '1,2 m/s',
        battery: 'LiFePO4 10h',
        price: '28.000-38.000 USD',
        capacity: 'Trong 200 bo',
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
        capacity: '100 bo/nam',
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
        capacity: 'Trong 100 bo',
        highlight: 'Heavy manufacturing logistics',
    },
];

export const ohtSpec = {
    name: 'OHT-100',
    payload: '100 kg (2 FOUP)',
    navigation: 'Dual rail overhead, 4-axis control',
    speed: '2,0 m/s',
    price: '45.000-65.000 USD',
    capacity: '50 bo/nam',
    precision: 'Positioning ±0,1 mm',
    application: 'Semiconductor fab, clean room logistics',
    features: [
        'Dual rail overhead system',
        '4 truc dieu khien dong thoi',
        'Precision positioning ±0,1 mm',
        'FOUP handling cho semiconductor',
        'Integrated voi MekongOS Fleet Manager',
        'Clean room Class 100 compatible',
    ],
};

export const mekongOSTiers: PlatformTierDetail[] = [
    {
        name: 'Starter',
        price: '99 USD/thang',
        devices: '≤50 devices',
        features: ['Dashboard co ban', 'MQTT broker', 'Alert email/SMS', '7 ngay data retention'],
    },
    {
        name: 'Professional',
        price: '299 USD/thang',
        devices: '≤500 devices',
        features: ['AI anomaly detection', 'OPC UA bridge', 'API integration', '90 ngay data retention', 'Custom dashboard'],
    },
    {
        name: 'Enterprise',
        price: '499+ USD/thang',
        devices: 'Unlimited',
        features: ['Digital Twin', 'Predictive maintenance', 'Multi-site management', '1 nam data retention', 'White-label', 'Dedicated support'],
    },
];

export const ecosystemLayers = [
    { layer: 'Field Layer', items: 'MK-EIO Modules (DI/DO/AI/AO/UI), Sensors, Actuators', color: '#00E5FF' },
    { layer: 'Control Layer', items: 'MK-DDC Controllers, PLC Interface, BACnet/Modbus', color: '#00BCD4' },
    { layer: 'Network Layer', items: 'MK-200/300 Gateways, MK-GW Protocol Converters', color: '#E040FB' },
    { layer: 'Software Layer', items: 'MekongBMS, SCADA, Fleet Manager, MES', color: '#FFD600' },
    { layer: 'Cloud Layer', items: 'MekongOS Platform (IoT Cloud, AI/ML, Digital Twin)', color: '#76FF03' },
];
