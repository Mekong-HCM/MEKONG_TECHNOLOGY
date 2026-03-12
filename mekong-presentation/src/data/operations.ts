// CNC Production Capacity — Source: MEKONG_DE_AN_V2_MASTER.md (32M model)
export const cncMachines = [
    { model: 'Mazak VCN-530C', origin: 'JP', type: 'VMC 3-axis', qty: 2, price: 180 },
    { model: 'Haas UMC-750', origin: 'US', type: '5-axis (option)', qty: 1, price: 200 },
    { model: 'DMG MORI NLX 2500', origin: 'JP', type: 'CNC Lathe', qty: 1, price: 280 },
    { model: 'Okuma MB-56VA', origin: 'JP', type: 'VMC 3-axis', qty: 1, price: 150 },
    { model: 'Sodick ALC400G', origin: 'JP', type: 'Wire EDM', qty: 1, price: 120 },
];
export const totalMachines = 6;
export const totalMachineCost = '~930K USD';

export const cncCapacity = [
    { year: 'Y5', machines: 6, utilization: '50%', machineHrs: '10.512', revenue: '1.000K' },
    { year: 'Y6', machines: 6, utilization: '65%', machineHrs: '13.666', revenue: '2.500K' },
    { year: 'Y8', machines: 6, utilization: '80%', machineHrs: '16.819', revenue: '5.500K' },
    { year: 'Y10', machines: 6, utilization: '90%', machineHrs: '18.921', revenue: '7.000K' },
    { year: 'Y12+', machines: '6-10', utilization: '90%+', machineHrs: '20.000+', revenue: '7.000K+' },
];

export const cncSpecs = {
    tolerance: '≤ 5 µm',
    milling5Axis: '±0,008 mm',
    wireEDM: '±0,005 mm',
    surfaceRoughness: 'Ra ≤ 0,4 µm',
    materials: ['Aluminum', 'Alloy Steel', 'Stainless Steel', 'Titan', 'Inconel', 'Copper', 'Engineering Plastics'],
    designCapacity: '~9.000 chi tiet/nam (Y5)',
    staff: '~40-60 nguoi',
};

export const shiftStructure = [
    { phase: 'Y5', shifts: '2 ca/ngay (16h)', days: '5 ngay/tuan' },
    { phase: 'Y7+', shifts: '2-3 ca', days: '6 ngay/tuan' },
    { phase: 'Y10', shifts: '3 ca + automation', days: '6-7 ngay/tuan' },
];

// Quality Certifications — Source: 32M model, Appendix C
export const qualityCerts = [
    { cert: 'ISO 9001', scope: 'QMS cơ bản', timeline: 'Y4 (khi có sản xuất)', cost: '30-40K', hourRate: '35-45 USD/hr', color: '#22c55e' },
    { cert: 'ISO 27001', scope: 'DC Security', timeline: 'Y5', cost: '40-60K', hourRate: '-', color: '#8b5cf6' },
    { cert: 'IATF 16949', scope: 'Automotive (option)', timeline: 'Option Y10+', cost: '173-265K', hourRate: '45-65 USD/hr', color: '#f59e0b' },
    { cert: 'AS9100 Rev D', scope: 'Aerospace (option)', timeline: 'Option Y10+', cost: '175-268K', hourRate: '80-120 USD/hr', color: '#ef4444' },
    { cert: 'Tier III', scope: 'Datacenter', timeline: 'Y8-Y9', cost: '-', hourRate: '-', color: '#06b6d4' },
];

export const dcTierIII = {
    uptime: '99,982%',
    maxDowntime: '1,6h/nam',
    standard: 'Uptime Institute Tier III + ANSI/TIA-942',
    redundancy: 'N+1 (MEP), 2N power path',
};

export const as9100Note = 'AS9100 là mục tiêu phát triển dài hạn (Y10+) khi đã có nền tảng ISO 9001 vững chắc.';

// Technology Stack — Source: L1475-L2856
export const techStackLayers = [
    { layer: 'Hardware', items: ['ARM Cortex-A53/A78 (Gateway)', 'STM32F407 Cortex-M4 (I/O)', 'NXP i.MX8M (MCU)', 'NVIDIA GPU (AI Training)'] },
    { layer: 'Protocols', items: ['MQTT', 'OPC UA', 'Modbus RTU/TCP', 'BACnet IP/SC', 'EtherCAT', 'PROFINET', 'KNX/IP', 'DALI-2'] },
    { layer: 'Robot/AI', items: ['AI SLAM + LiDAR 3D 360°', 'Deep Reinforcement Learning', 'TensorFlow / PyTorch', 'ROS2 Compatible'] },
    { layer: 'Platform', items: ['MekongOS IoT Cloud', 'Kafka + Flink (Stream)', 'EMQX MQTT Broker', 'MinIO S3 Data Lake'] },
    { layer: 'Applications', items: ['MekongBMS (5 lop)', 'MekongSCADA', 'MekongET Config Tool', 'Node-RED Rule Engine'] },
];

// Urgency / Market Gap — Source: 32M model
export const marketGaps = [
    { criteria: 'CNC chính xác (miền Nam)', supply: '~15', demand: '>30', gap: '~15', status: 'Thiếu' },
    { criteria: 'ISO 9001+ tại KCNC', supply: '~5', demand: '>15', gap: '~10', status: 'Thiếu' },
    { criteria: 'IATF 16949 (DN Việt)', supply: '~12', demand: '>25', gap: '~13', status: 'Thiếu' },
    { criteria: 'Tolerance ≤5 µm', supply: '~5', demand: '>15', gap: '~10', status: 'Thiếu' },
    { criteria: 'Titan/Inconel', supply: '~3', demand: '>8', gap: '~5', status: 'Thiếu' },
    { criteria: 'GPU Compute DC tại KCNC', supply: 'ZERO', demand: '>3', gap: 'Blue Ocean', status: 'Chưa có' },
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
