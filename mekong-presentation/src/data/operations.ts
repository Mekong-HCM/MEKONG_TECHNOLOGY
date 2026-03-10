// CNC Production Capacity — Source: MEKONG_DE_AN_V2_MASTER.md L1994-L2431
export const cncMachines = [
    { model: 'DMG MORI DMU 80 eVo', origin: 'JP/DE', type: '5-axis Milling', qty: 5, price: 450 },
    { model: 'DMG MORI NLX 2500/700', origin: 'JP', type: 'CNC Lathe', qty: 4, price: 280 },
    { model: 'Mazak VCN-530C', origin: 'JP', type: 'VMC 3-axis', qty: 6, price: 180 },
    { model: 'Mazak INTEGREX i-200S', origin: 'JP', type: 'Multi-tasking', qty: 3, price: 380 },
    { model: 'Sodick ALC600G', origin: 'JP', type: 'Wire EDM', qty: 2, price: 120 },
    { model: 'Okuma MB-56VA', origin: 'JP', type: 'VMC 3-axis', qty: 4, price: 150 },
    { model: 'Haas UMC-750', origin: 'US', type: '5-axis', qty: 2, price: 200 },
    { model: 'Tsugami B0205G-III', origin: 'JP', type: 'Swiss Lathe', qty: 2, price: 85 },
];
export const totalMachines = 28;
export const totalMachineCost = '7.000K USD';

export const cncCapacity = [
    { year: 'Y1', machines: 15, utilization: '50%', machineHrs: '43.800', revenue: '2.500K' },
    { year: 'Y2', machines: 20, utilization: '65%', machineHrs: '75.920', revenue: '4.500K' },
    { year: 'Y3', machines: 24, utilization: '75%', machineHrs: '131.400', revenue: '7.500K' },
    { year: 'Y5', machines: 28, utilization: '85%', machineHrs: '171.360', revenue: '10.750K' },
    { year: 'Y10', machines: '35+', utilization: '90%', machineHrs: '229.950', revenue: '~15.000K' },
];

export const cncSpecs = {
    tolerance: '≤ 3 µm',
    milling5Axis: '±0,005 mm',
    wireEDM: '±0,003 mm',
    surfaceRoughness: 'Ra ≤ 0,2 µm',
    materials: ['Aluminum', 'Alloy Steel', 'Stainless Steel', 'Titan', 'Inconel', 'Copper', 'Engineering Plastics'],
    designCapacity: '27.000 chi tiet/nam',
    staff: '80-120 nguoi',
};

export const shiftStructure = [
    { phase: 'Y1', shifts: '2 ca/ngay (16h)', days: '6 ngay/tuan' },
    { phase: 'Y3+', shifts: '3 ca (24h)', days: '6-7 ngay/tuan' },
    { phase: 'Y10', shifts: '3 ca + automation', days: '7 ngay/tuan' },
];

// Quality Certifications — Source: L865-L893
export const qualityCerts = [
    { cert: 'ISO 9001', scope: 'QMS co ban', timeline: 'Y1 (Q1-Q2 2027)', cost: '30-40K', hourRate: '35-45 USD/hr', color: '#22c55e' },
    { cert: 'IATF 16949', scope: 'Automotive', timeline: 'Y2 (Q3/2027-Q1/2028)', cost: '173-265K', hourRate: '45-65 USD/hr', color: '#f59e0b' },
    { cert: 'AS9100 Rev D', scope: 'Aerospace', timeline: 'Y3 (Q2/2028-Q2/2029)', cost: '175-268K', hourRate: '80-120 USD/hr', color: '#ef4444' },
    { cert: 'ISO 27001', scope: 'DC Security', timeline: 'Y2', cost: '40-60K', hourRate: '-', color: '#8b5cf6' },
    { cert: 'Tier III', scope: 'Datacenter', timeline: 'Y11', cost: '-', hourRate: '-', color: '#06b6d4' },
];

export const dcTierIII = {
    uptime: '99,982%',
    maxDowntime: '1,6h/nam',
    standard: 'Uptime Institute Tier III + ANSI/TIA-942',
    redundancy: 'N+1 (MEP), 2N power path',
};

export const as9100Note = 'Viet Nam hien co ZERO nha may CNC dat AS9100 — Mekong se la DOANH NGHIEP DAU TIEN.';

// Technology Stack — Source: L1475-L2856
export const techStackLayers = [
    { layer: 'Hardware', items: ['ARM Cortex-A53/A78 (Gateway)', 'STM32F407 Cortex-M4 (I/O)', 'NXP i.MX8M (MCU)', 'NVIDIA GPU (AI Training)'] },
    { layer: 'Protocols', items: ['MQTT', 'OPC UA', 'Modbus RTU/TCP', 'BACnet IP/SC', 'EtherCAT', 'PROFINET', 'KNX/IP', 'DALI-2'] },
    { layer: 'Robot/AI', items: ['AI SLAM + LiDAR 3D 360°', 'Deep Reinforcement Learning', 'TensorFlow / PyTorch', 'ROS2 Compatible'] },
    { layer: 'Platform', items: ['MekongOS IoT Cloud', 'Kafka + Flink (Stream)', 'EMQX MQTT Broker', 'MinIO S3 Data Lake'] },
    { layer: 'Applications', items: ['MekongBMS (5 lop)', 'MekongSCADA', 'MekongET Config Tool', 'Node-RED Rule Engine'] },
];

// Urgency / Market Gap — Source: L699, L836-L850, L6613
export const marketGaps = [
    { criteria: 'CNC 5-axis (mien Nam)', supply: '~15', demand: '>30', gap: '~15', status: 'Thieu' },
    { criteria: 'AS9100 (toan VN)', supply: 'ZERO', demand: '5-10', gap: 'Blue Ocean', status: 'Chua co' },
    { criteria: 'IATF 16949 (DN Viet)', supply: '~12', demand: '>25', gap: '~13', status: 'Thieu' },
    { criteria: 'Tolerance ≤5 µm', supply: '~5', demand: '>15', gap: '~10', status: 'Thieu' },
    { criteria: 'Titan/Inconel', supply: '~3', demand: '>8', gap: '~5', status: 'Thieu' },
    { criteria: 'GPU Compute DC tai KCNC', supply: 'ZERO', demand: '>3', gap: 'Blue Ocean', status: 'Chua co' },
];

export const urgencyKPIs = {
    smeCount: '83.035',
    fdiImport: '295-455M USD/nam',
    cncMarket2024: '1,85 tỷ USD',
    cncMarket2030: '3,865 tỷ USD',
    cncCAGR: '13,1%',
    mekongTarget: '2-5% thi phan = 6-23M USD/nam',
};

// Target industries — Source: L819-L834
export const targetIndustries = [
    { name: 'Electronics', customers: 'Samsung, Intel', spend: '120-180M USD/nam' },
    { name: 'Automotive/EV', customers: 'VinFast, Bosch, Nidec', spend: '80-120M USD/nam' },
    { name: 'Aerospace', customers: 'Emerging', spend: '15-25M USD/nam' },
    { name: 'Medical Devices', customers: 'Growing', spend: '20-35M USD/nam' },
];
