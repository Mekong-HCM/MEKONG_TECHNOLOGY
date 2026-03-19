// CNC Production Capacity — Source: DE_AN_MEKONG_V3 (22M model)
export const cncMachines = [
    { model: 'DMG MORI CMX 70 U', origin: 'JP/DE', type: '5-axis VMC', qty: 2, price: 350 },
    { model: 'Mazak VARIAXIS i-600', origin: 'JP', type: '5-axis VMC', qty: 2, price: 320 },
    { model: 'DMG MORI NLX 2500', origin: 'JP/DE', type: '5-axis Turn-Mill', qty: 1, price: 280 },
    { model: 'Haas VF-3SS', origin: 'US', type: '3-axis VMC', qty: 2, price: 120 },
    { model: 'Mazak VCN-530C', origin: 'JP', type: '3-axis VMC', qty: 1, price: 180 },
    { model: 'Sodick ALC400G', origin: 'JP', type: 'Wire EDM', qty: 1, price: 120 },
    { model: 'Studer S33', origin: 'CH', type: 'CNC Grinder', qty: 1, price: 160 },
];
export const totalMachines = 10;
export const totalMachineCost = '~2,05M USD';

export const cncCapacity = [
    { year: 'Y5', machines: 10, utilization: '40%', machineHrs: '14.016', revenue: '1.000K' },
    { year: 'Y6', machines: 10, utilization: '55%', machineHrs: '19.272', revenue: '1.700K' },
    { year: 'Y8', machines: 10, utilization: '75%', machineHrs: '26.280', revenue: '3.000K' },
    { year: 'Y10', machines: 10, utilization: '85%', machineHrs: '29.784', revenue: '3.500K' },
    { year: 'Y12+', machines: 10, utilization: '85-90%', machineHrs: '30.000+', revenue: '3.500K+' },
];

export const cncSpecs = {
    tolerance: '\u2264 5 \u00B5m',
    milling5Axis: '\u00B10,008 mm',
    wireEDM: '\u00B10,005 mm',
    surfaceRoughness: 'Ra \u2264 0,4 \u00B5m',
    materials: ['Aluminum', 'Alloy Steel', 'Stainless Steel', 'Titan', 'Inconel', 'Copper', 'Engineering Plastics'],
    designCapacity: '~12.000 chi tiet/nam (Y8+)',
    staff: '~30-50 nguoi',
};

export const shiftStructure = [
    { phase: 'Y5', shifts: '1-2 ca/ngay (8-16h)', days: '5 ngay/tuan' },
    { phase: 'Y7+', shifts: '2 ca', days: '5-6 ngay/tuan' },
    { phase: 'Y10', shifts: '2-3 ca + automation', days: '6 ngay/tuan' },
];

// Quality Certifications — Source: V3 model
export const qualityCerts = [
    { cert: 'ISO 9001', scope: 'QMS c\u01A1 b\u1EA3n', timeline: 'Y4 (khi c\u00F3 s\u1EA3n xu\u1EA5t)', cost: '30-40K', hourRate: '35-45 USD/hr', color: '#22c55e' },
    { cert: 'ISO 27001', scope: 'Bảo mật thông tin', timeline: 'Y5', cost: '40-60K', hourRate: '-', color: '#8b5cf6' },
    { cert: 'IATF 16949', scope: 'Automotive (dài hạn)', timeline: 'Dài hạn nếu có nhu cầu', cost: '173-265K', hourRate: '45-65 USD/hr', color: '#f59e0b' },
    { cert: 'AS9100 Rev D', scope: 'Aerospace (dài hạn)', timeline: 'Dài hạn nếu có nhu cầu', cost: '175-268K', hourRate: '80-120 USD/hr', color: '#ef4444' },
];

export const as9100Note = 'IATF 16949 và AS9100 là mục tiêu dài hạn khi đã có nền tảng ISO 9001 vững chắc và nhu cầu thị trường rõ ràng.';

// Technology Stack — Source: V3 P2
export const techStackLayers = [
    { layer: 'Hardware', items: ['NXP i.MX8M Quad A53 (Gateway)', 'STM32F407 Cortex-M4 (I/O)', 'NVIDIA Jetson Orin (AI Edge)', 'LiDAR 3D 360\u00B0 (Robot)'] },
    { layer: 'Protocols', items: ['MQTT', 'OPC UA', 'Modbus RTU/TCP', 'BACnet IP/SC', 'EtherCAT', 'PROFINET', 'KNX/IP', 'DALI-2'] },
    { layer: 'Robot/AI', items: ['AI SLAM + LiDAR 3D 360\u00B0', 'Deep Reinforcement Learning', 'TensorFlow Lite / PyTorch', 'ROS2 Compatible'] },
    { layer: 'Platform', items: ['MekongOS IoT Cloud', 'Kafka + Flink (Stream)', 'EMQX MQTT Broker', 'MinIO S3 Data Lake'] },
    { layer: 'Applications', items: ['MekongBMS (5 lớp)', 'MekongSCADA', 'MekongET Config Tool', 'Node-RED Rule Engine'] },
];

// Market Gap — Source: V3 model (no DC commercial gap)
export const marketGaps = [
    { criteria: 'CNC chính xác (miền Nam)', supply: '~15', demand: '>30', gap: '~15', status: 'Thiếu' },
    { criteria: 'ISO 9001+ tại KCNC', supply: '~5', demand: '>15', gap: '~10', status: 'Thiếu' },
    { criteria: 'Tolerance \u22645 \u00B5m', supply: '~5', demand: '>15', gap: '~10', status: 'Thiếu' },
    { criteria: 'Titan/Inconel machining', supply: '~3', demand: '>8', gap: '~5', status: 'Thiếu' },
    { criteria: 'IoT Gateway nội địa', supply: '~10', demand: '>50', gap: '~40', status: 'Thiếu' },
    { criteria: 'Robot AMR Made-in-VN', supply: '~3', demand: '>20', gap: '~17', status: 'Thiếu' },
];

export const urgencyKPIs = {
    smeCount: '83.035',
    fdiImport: '295-455M USD/nam',
    cncMarket2024: '1,85 tỷ USD',
    cncMarket2030: '3,865 tỷ USD',
    cncCAGR: '13,1%',
    mekongTarget: '2-5% thị phần = 3-10M USD/năm',
};

// Target industries — Source: V3 P3
export const targetIndustries = [
    { name: 'Electronics (FDI)', customers: 'Samsung, Intel, Bosch, Nidec', spend: '120-180M USD/nam' },
    { name: 'Semiconductor Equipment', customers: 'Applied Materials, LAM', spend: '40-60M USD/nam' },
    { name: 'Automotive/EV', customers: 'VinFast, Hyundai, Nidec', spend: '80-120M USD/nam' },
    { name: 'Medical Devices', customers: 'Growing segment', spend: '20-35M USD/nam' },
];
