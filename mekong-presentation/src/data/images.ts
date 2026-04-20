/** Centralized image asset registry.
 *  When real images are added to public/images/, update the `src` fields.
 *  Components use OptimizedImage which falls back to ImagePlaceholder automatically.
 *  Paths use import.meta.env.BASE_URL so they work on both localhost and GitHub Pages.
 */

export interface ImageAsset {
    id: string;
    src: string;
    alt: string;
    category: 'cnc' | 'iot' | 'dc' | 'location' | 'brand' | 'esg' | 'products' | 'robot' | 'dashboard' | 'factory' | 'software' | 'diagram';
    color: string;
    width: number;
    height: number;
}

const b = import.meta.env.BASE_URL.replace(/\/$/, '');

export const images: Record<string, ImageAsset> = {
    // CNC
    'cnc-01': { id: 'cnc-01', src: `${b}/images/cnc/cnc-01-dmg-mori-dmu50.jpg`, alt: 'Máy CNC 5-axis DMG MORI DMU 50 3rd Generation', category: 'cnc', color: '#E040FB', width: 800, height: 600 },
    'cnc-02': { id: 'cnc-02', src: `${b}/images/cnc/cnc-02-workshop-overview.jpg`, alt: 'Xưởng CNC tổng quan từ góc cao', category: 'cnc', color: '#E040FB', width: 1200, height: 600 },
    'cnc-03': { id: 'cnc-03', src: `${b}/images/cnc/cnc-03-titanium-machining.jpg`, alt: 'Gia công titanium 5-axis chính xác', category: 'cnc', color: '#E040FB', width: 600, height: 400 },

    // IoT
    'iot-01': { id: 'iot-01', src: `${b}/images/iot/IOT-DEVICE.jpg`, alt: 'Industrial IoT edge gateway', category: 'iot', color: '#00E5FF', width: 1417, height: 1004 },
    'iot-03': { id: 'iot-03', src: `${b}/images/iot/iot-03-amr-robot.jpg`, alt: 'AMR robot tự hành trong nhà kho', category: 'iot', color: '#00E5FF', width: 800, height: 500 },
    'iot-04': { id: 'iot-04', src: `${b}/images/iot/AMRRobots_ModernMaterialHandling.jpg`, alt: 'Robot AGV tự hành vận chuyển hàng hóa trong nhà kho thông minh', category: 'iot', color: '#00E5FF', width: 1180, height: 664 },

    // Datacenter (nội bộ)
    'dc-01': { id: 'dc-01', src: `${b}/images/dc/dc-01-server-racks.jpg`, alt: 'Server rack rows — phòng máy chủ nội bộ', category: 'dc', color: '#76FF03', width: 1200, height: 600 },
    'dc-02': { id: 'dc-02', src: `${b}/images/dc/dc-02-gpu-cluster.jpg`, alt: 'GPU cluster phục vụ AI/R&D nội bộ', category: 'dc', color: '#76FF03', width: 800, height: 500 },
    'dc-03': { id: 'dc-03', src: `${b}/images/dc/dc-03-cooling-system.jpg`, alt: 'Hệ thống làm mát phòng máy chủ', category: 'dc', color: '#76FF03', width: 600, height: 400 },

    // Location
    'loc-01': { id: 'loc-01', src: `${b}/images/location/loc-01-kcnc-aerial.jpg`, alt: 'Ảnh vệ tinh KCNC TP.HCM', category: 'location', color: '#00E5FF', width: 1200, height: 800 },

    // Infrastructure section specific
    'infra-01': { id: 'infra-01', src: `${b}/images/cnc/infra-01-cnc-workshop.jpg`, alt: 'Tổng quan xưởng CNC công nghiệp', category: 'cnc', color: '#E040FB', width: 1200, height: 600 },
    'infra-02': { id: 'infra-02', src: `${b}/images/dc/infra-02-dc-racks.jpg`, alt: 'Hệ thống tủ Rack máy chủ nội bộ', category: 'dc', color: '#76FF03', width: 1200, height: 600 },
    'infra-03': { id: 'infra-03', src: `${b}/images/dc/dc-03-cooling-system.jpg`, alt: 'Hệ thống làm mát phòng máy chủ nội bộ', category: 'dc', color: '#76FF03', width: 600, height: 400 },

    // ESG
    'esg-01': { id: 'esg-01', src: `${b}/images/esg/esg-01-solar-rooftop.jpg`, alt: 'Mái pin năng lượng mặt trời nhà máy', category: 'esg', color: '#76FF03', width: 1200, height: 600 },

    // Ảnh thực tế — được cung cấp trực tiếp
    'factory-assembly': { id: 'factory-assembly', src: `${b}/images/5523113274ca586bde68911e5fb831ba.jpg`, alt: 'Dây chuyền lắp ráp điện tử thông minh — nhà máy sản xuất tổng quan', category: 'iot', color: '#00E5FF', width: 1200, height: 600 },
    'cnc-floor': { id: 'cnc-floor', src: `${b}/images/pexels-yetkin-agac-664866326-34718922.jpg`, alt: 'Xưởng máy CNC công nghiệp — hàng máy gia công chính xác', category: 'cnc', color: '#E040FB', width: 1200, height: 800 },
    'erp-smart': { id: 'erp-smart', src: `${b}/images/0d06aec40641c42de3956950c7ca2eb2.jpg`, alt: 'Hệ thống ERP quản lý sản xuất thông minh — nhà kho tự động hóa', category: 'iot', color: '#00E5FF', width: 1200, height: 600 },
    'cloud-erp': { id: 'cloud-erp', src: `${b}/images/655f69bf8888621c99a3ca81dc81fa23.jpg`, alt: 'Nền tảng ERP đám mây — hệ sinh thái phần mềm kết nối', category: 'dc', color: '#76FF03', width: 1200, height: 700 },
    'premium-factory': { id: 'premium-factory', src: `${b}/images/premium_photo-1661882369766-ff5d3440771c.avif`, alt: 'Khu công nghệ cao — nhà máy sản xuất điện tử hiện đại', category: 'iot', color: '#FF9100', width: 1200, height: 800 },

    // Product renders — from DE_AN_MEKONG_V3/HINH ANH
    'kx200-gateway': { id: 'kx200-gateway', src: `${b}/images/products/kx200-gateway.png`, alt: 'KX-200 Industrial IoT Gateway — render chính diện', category: 'products', color: '#00E5FF', width: 800, height: 600 },
    'kx300-gateway': { id: 'kx300-gateway', src: `${b}/images/products/kx300-gateway.png`, alt: 'KX-300 Edge AI Gateway — render chính diện', category: 'products', color: '#00E5FF', width: 800, height: 600 },
    'ddc-family': { id: 'ddc-family', src: `${b}/images/products/ddc-family.png`, alt: 'DDC Controller Family — KX-DDC-24, KX-DDC-32', category: 'products', color: '#00BCD4', width: 800, height: 600 },
    'kx-eio-module': { id: 'kx-eio-module', src: `${b}/images/products/kx-eio-module.png`, alt: 'KX-EIO Module I/O — DI16 điều khiển công nghiệp', category: 'products', color: '#00BCD4', width: 800, height: 600 },

    // Robot AMR
    'amr-500-render': { id: 'amr-500-render', src: `${b}/images/robot/amr-500-render.png`, alt: 'Robot AMR-500 tự hành — render chính diện 500kg payload', category: 'robot', color: '#E040FB', width: 800, height: 600 },
    'smart-warehouse-amr': { id: 'smart-warehouse-amr', src: `${b}/images/robot/smart-warehouse-amr.png`, alt: 'Nhà kho thông minh sử dụng Robot AMR/AGV', category: 'robot', color: '#E040FB', width: 1200, height: 800 },

    // Dashboard / BMS
    'kinexusbms-dashboard': { id: 'kinexusbms-dashboard', src: `${b}/images/dashboard/kinexusbms-dashboard.png`, alt: 'KinexusBMS Dashboard — giám sát năng lượng BMS', category: 'dashboard', color: '#FFD600', width: 1200, height: 800 },
    'kinexusbms-hero': { id: 'kinexusbms-hero', src: `${b}/images/dashboard/kinexusbms-hero.png`, alt: 'KinexusBMS Hero — giao diện quản lý tòa nhà thông minh', category: 'dashboard', color: '#FFD600', width: 1200, height: 800 },

    // Factory
    'factory-overview': { id: 'factory-overview', src: `${b}/images/factory/factory-overview-render.png`, alt: 'Phối cảnh tổng thể nhà máy KINEXUS Technologies tại KCNC', category: 'factory', color: '#00E5FF', width: 1200, height: 800 },

    // IoT System
    'iot-system-diagram': { id: 'iot-system-diagram', src: `${b}/images/iot/iot-system-diagram.png`, alt: 'Sơ đồ kết nối IoT từ thiết bị đến đám mây', category: 'iot', color: '#00E5FF', width: 800, height: 600 },

    // Brand / Logo
    'kinexus-logo': { id: 'kinexus-logo', src: `${b}/images/brand/kinexus-logo.png`, alt: 'KINEXUS Technologies — logo ngang nền đen', category: 'brand', color: '#FFFFFF', width: 400, height: 100 },

    // === DDC Controllers ===
    'kx-ddc-24': { id: 'kx-ddc-24', src: `${b}/images/products/ddc/kx-ddc-24.png`, alt: 'KX-DDC-24 — Bộ điều khiển DDC 24 điểm', category: 'products', color: '#00BCD4', width: 800, height: 600 },
    'kx-ddc-24-hero': { id: 'kx-ddc-24-hero', src: `${b}/images/products/ddc/kx-ddc-24-hero.png`, alt: 'KX-DDC-24 Hero — DDC 24 điểm góc nghiêng', category: 'products', color: '#00BCD4', width: 800, height: 600 },
    'kx-ddc-32': { id: 'kx-ddc-32', src: `${b}/images/products/ddc/kx-ddc-32.png`, alt: 'KX-DDC-32 — Bộ điều khiển DDC 32 điểm', category: 'products', color: '#00BCD4', width: 800, height: 600 },
    'kx-ddc-32-hero': { id: 'kx-ddc-32-hero', src: `${b}/images/products/ddc/kx-ddc-32-hero.png`, alt: 'KX-DDC-32 Hero — DDC 32 điểm góc nghiêng', category: 'products', color: '#00BCD4', width: 800, height: 600 },
    'kx-ddc-64': { id: 'kx-ddc-64', src: `${b}/images/products/ddc/kx-ddc-64.png`, alt: 'KX-DDC-64 — Bộ điều khiển DDC 64 điểm', category: 'products', color: '#00BCD4', width: 800, height: 600 },
    'ddc-system': { id: 'ddc-system', src: `${b}/images/products/ddc/ddc-system.png`, alt: 'Sơ đồ hệ thống DDC — kết nối BMS tổng quan', category: 'products', color: '#00BCD4', width: 1200, height: 800 },
    'ddc-selection-guide': { id: 'ddc-selection-guide', src: `${b}/images/products/ddc/ddc-selection-guide.png`, alt: 'Hướng dẫn chọn DDC theo quy mô dự án', category: 'products', color: '#00BCD4', width: 1000, height: 700 },
    'kx-ddc-24-wiring': { id: 'kx-ddc-24-wiring', src: `${b}/images/products/ddc/kx-ddc-24-wiring.png`, alt: 'Sơ đồ đấu nối KX-DDC-24', category: 'products', color: '#00BCD4', width: 1000, height: 700 },
    'kx-ddc-32-wiring': { id: 'kx-ddc-32-wiring', src: `${b}/images/products/ddc/kx-ddc-32-wiring.png`, alt: 'Sơ đồ đấu nối KX-DDC-32', category: 'products', color: '#00BCD4', width: 1000, height: 700 },
    'kx-ddc-64-wiring': { id: 'kx-ddc-64-wiring', src: `${b}/images/products/ddc/kx-ddc-64-wiring.png`, alt: 'Sơ đồ đấu nối KX-DDC-64', category: 'products', color: '#00BCD4', width: 1000, height: 700 },

    // === Module I/O ===
    'kx-eio-di16': { id: 'kx-eio-di16', src: `${b}/images/products/module-io/kx-eio-di16.png`, alt: 'KX-EIO-DI16 — Module 16 Digital Input', category: 'products', color: '#00BCD4', width: 800, height: 600 },
    'kx-eio-di16-render': { id: 'kx-eio-di16-render', src: `${b}/images/products/module-io/kx-eio-di16-render.png`, alt: 'KX-EIO-DI16 render 3D chi tiết', category: 'products', color: '#00BCD4', width: 800, height: 600 },
    'module-8di-8do': { id: 'module-8di-8do', src: `${b}/images/products/module-io/module-8di-8do.png`, alt: 'Module I/O 8DI + 8DO Modbus TCP', category: 'products', color: '#00BCD4', width: 800, height: 600 },
    'ck-3083e': { id: 'ck-3083e', src: `${b}/images/products/module-io/ck-3083e.jpg`, alt: 'CK-3083E — Module I/O DIN-rail thực tế', category: 'products', color: '#00BCD4', width: 800, height: 600 },
    'ck-3083r': { id: 'ck-3083r', src: `${b}/images/products/module-io/ck-3083r.jpg`, alt: 'CK-3083R — Module I/O DIN-rail RTU', category: 'products', color: '#00BCD4', width: 800, height: 600 },
    'ck-7041r': { id: 'ck-7041r', src: `${b}/images/products/module-io/ck-7041r.jpg`, alt: 'CK-7041R — Module DI 4 kênh DIN-rail', category: 'products', color: '#00BCD4', width: 800, height: 600 },
    'ck-7082r': { id: 'ck-7082r', src: `${b}/images/products/module-io/ck-7082r.jpg`, alt: 'CK-7082R — Module AI 8 kênh DIN-rail', category: 'products', color: '#00BCD4', width: 800, height: 600 },

    // === Software — MekongBMS UI ===
    'mekongbms-dashboard': { id: 'mekongbms-dashboard', src: `${b}/images/software/mekongbms/dashboard-overview.png`, alt: 'MekongBMS Dashboard — Tổng quan hệ thống BMS', category: 'software', color: '#FFD600', width: 1920, height: 1080 },
    'mekongbms-alarm': { id: 'mekongbms-alarm', src: `${b}/images/software/mekongbms/alarm-center.png`, alt: 'MekongBMS Alarm Center — Trung tâm cảnh báo', category: 'software', color: '#FFD600', width: 1920, height: 1080 },
    'mekongbms-energy': { id: 'mekongbms-energy', src: `${b}/images/software/mekongbms/energy-analytics.png`, alt: 'MekongBMS Energy Analytics — Phân tích năng lượng', category: 'software', color: '#FFD600', width: 1920, height: 1080 },
    'mekongbms-equipment': { id: 'mekongbms-equipment', src: `${b}/images/software/mekongbms/equipment-control.png`, alt: 'MekongBMS Equipment Control — Điều khiển thiết bị', category: 'software', color: '#FFD600', width: 1920, height: 1080 },
    'mekongbms-floorplan': { id: 'mekongbms-floorplan', src: `${b}/images/software/mekongbms/floor-plan.png`, alt: 'MekongBMS Floor Plan — Sơ đồ mặt bằng tương tác', category: 'software', color: '#FFD600', width: 1920, height: 1080 },

    // === Software — MekongFleet UI ===
    'mekongfleet-dashboard': { id: 'mekongfleet-dashboard', src: `${b}/images/software/mekongfleet/dashboard-overview.png`, alt: 'MekongFleet Dashboard — Tổng quan điều độ robot', category: 'software', color: '#E040FB', width: 1920, height: 1080 },
    'mekongfleet-traffic': { id: 'mekongfleet-traffic', src: `${b}/images/software/mekongfleet/live-traffic-map.png`, alt: 'MekongFleet Traffic Map — Bản đồ giao thông thực', category: 'software', color: '#E040FB', width: 1920, height: 1080 },
    'mekongfleet-robot': { id: 'mekongfleet-robot', src: `${b}/images/software/mekongfleet/robot-detail.png`, alt: 'MekongFleet Robot Detail — Chi tiết trạng thái robot', category: 'software', color: '#E040FB', width: 1920, height: 1080 },
    'mekongfleet-list': { id: 'mekongfleet-list', src: `${b}/images/software/mekongfleet/fleet-list.png`, alt: 'MekongFleet List — Danh sách đội robot', category: 'software', color: '#E040FB', width: 1920, height: 1080 },
    'mekongfleet-tasks': { id: 'mekongfleet-tasks', src: `${b}/images/software/mekongfleet/task-management.png`, alt: 'MekongFleet Task Management — Quản lý tác vụ', category: 'software', color: '#E040FB', width: 1920, height: 1080 },

    // === Software — MekongStudio ===
    'mekongstudio-fbd': { id: 'mekongstudio-fbd', src: `${b}/images/software/mekongstudio/fbd-editor.png`, alt: 'MekongStudio FBD Editor — Lập trình điều khiển FBD', category: 'software', color: '#FFD600', width: 1200, height: 800 },
    'mekongstudio-hero': { id: 'mekongstudio-hero', src: `${b}/images/software/mekongstudio/studio-hero.png`, alt: 'MekongStudio Hero — IDE lập trình BMS/DDC', category: 'software', color: '#FFD600', width: 1200, height: 800 },

    // === Robot AMR/AGV bổ sung ===
    'amr-500-iso': { id: 'amr-500-iso', src: `${b}/images/robot/amr/amr-500-iso.png`, alt: 'AMR-500 góc isometric — tải trọng 500kg', category: 'robot', color: '#E040FB', width: 800, height: 600 },
    'amr-1000-forklift': { id: 'amr-1000-forklift', src: `${b}/images/robot/amr/amr-1000-forklift.jpg`, alt: 'AMR-1000 Forklift — robot nâng tự hành 1000kg', category: 'robot', color: '#E040FB', width: 800, height: 600 },
    'agv-500': { id: 'agv-500', src: `${b}/images/robot/agv/agv-500-undercarriage.jpg`, alt: 'AGV-500 Undercarriage — robot chui gầm kệ hàng', category: 'robot', color: '#E040FB', width: 800, height: 600 },
    'amr-warehouse-undercarriage': { id: 'amr-warehouse-undercarriage', src: `${b}/images/robot/amr/amr-warehouse-undercarriage.png`, alt: 'AMR robot chui gầm trong nhà kho thực tế', category: 'robot', color: '#E040FB', width: 1200, height: 800 },
    'amr-warehouse-lowprofile': { id: 'amr-warehouse-lowprofile', src: `${b}/images/robot/amr/amr-warehouse-lowprofile.png`, alt: 'AMR robot nền thấp trong nhà kho thực tế', category: 'robot', color: '#E040FB', width: 1200, height: 800 },
    'amr-undercarriage-clean': { id: 'amr-undercarriage-clean', src: `${b}/images/robot/amr/amr-undercarriage-clean.png`, alt: 'AMR robot chui gầm — nền trắng sạch', category: 'robot', color: '#E040FB', width: 800, height: 600 },
    'amr-lowprofile-clean': { id: 'amr-lowprofile-clean', src: `${b}/images/robot/amr/amr-lowprofile-clean.png`, alt: 'AMR robot nền thấp — nền trắng sạch', category: 'robot', color: '#E040FB', width: 800, height: 600 },

    // === Gateway in-context ===
    'kx200-gateway-context': { id: 'kx200-gateway-context', src: `${b}/images/products/kx200-gateway-context.png`, alt: 'KX-200 Gateway trong bối cảnh lắp đặt thực tế', category: 'products', color: '#00E5FF', width: 1200, height: 800 },
    'kx300-gateway-context': { id: 'kx300-gateway-context', src: `${b}/images/products/kx300-gateway-context.png`, alt: 'KX-300 Gateway trong bối cảnh lắp đặt thực tế', category: 'products', color: '#00E5FF', width: 1200, height: 800 },

    // === Architecture & System Diagrams (SVG) ===
    'diag-iot-gateway-arch': { id: 'diag-iot-gateway-arch', src: `${b}/images/diagrams/architecture/iot-gateway-architecture.svg`, alt: 'Kiến trúc IoT Gateway — 5 tầng từ cảm biến đến đám mây', category: 'diagram', color: '#00E5FF', width: 1200, height: 800 },
    'diag-bms-controller-arch': { id: 'diag-bms-controller-arch', src: `${b}/images/diagrams/architecture/bms-controller-architecture.svg`, alt: 'Kiến trúc BMS Controller — kết nối DDC/IO/Gateway', category: 'diagram', color: '#00BCD4', width: 1200, height: 800 },
    'diag-kinexusbms-arch': { id: 'diag-kinexusbms-arch', src: `${b}/images/diagrams/architecture/kinexusbms-architecture.svg`, alt: 'Kiến trúc phần mềm KinexusBMS — các tầng server/edge/field', category: 'diagram', color: '#FFD600', width: 1200, height: 800 },
    'diag-kinexusfleet-arch': { id: 'diag-kinexusfleet-arch', src: `${b}/images/diagrams/architecture/kinexusfleet-architecture.svg`, alt: 'Kiến trúc KinexusFleet — điều độ đội robot AMR/AGV', category: 'diagram', color: '#E040FB', width: 1200, height: 800 },
    'diag-kinexusscada-arch': { id: 'diag-kinexusscada-arch', src: `${b}/images/diagrams/architecture/kinexusscada-architecture.svg`, alt: 'Kiến trúc KinexusSCADA — giám sát vận hành nhà máy', category: 'diagram', color: '#FFD600', width: 1200, height: 800 },
    'diag-kx200-connection': { id: 'diag-kx200-connection', src: `${b}/images/diagrams/connection/kx200-connection.svg`, alt: 'Sơ đồ kết nối KX-200 Gateway', category: 'diagram', color: '#00E5FF', width: 1000, height: 700 },
    'diag-kx300-connection': { id: 'diag-kx300-connection', src: `${b}/images/diagrams/connection/kx300-connection.svg`, alt: 'Sơ đồ kết nối KX-300 Gateway', category: 'diagram', color: '#00E5FF', width: 1000, height: 700 },
    'diag-io-expansion': { id: 'diag-io-expansion', src: `${b}/images/diagrams/connection/io-expansion-modules.svg`, alt: 'Sơ đồ mở rộng Module I/O — EIO bus', category: 'diagram', color: '#00BCD4', width: 1000, height: 700 },
    'diag-ddc64-wiring': { id: 'diag-ddc64-wiring', src: `${b}/images/diagrams/connection/ddc64-wiring.svg`, alt: 'Sơ đồ đấu nối DDC-64 chi tiết', category: 'diagram', color: '#00BCD4', width: 1000, height: 700 },
    'diag-bms-control-loop': { id: 'diag-bms-control-loop', src: `${b}/images/diagrams/architecture/bms-control-loop.svg`, alt: 'Vòng điều khiển BMS — PID + Scheduling', category: 'diagram', color: '#FFD600', width: 1000, height: 700 },
    'diag-amr-fleet-workflow': { id: 'diag-amr-fleet-workflow', src: `${b}/images/diagrams/architecture/amr-fleet-workflow.svg`, alt: 'Quy trình điều độ đội AMR — từ task đến thực thi', category: 'diagram', color: '#E040FB', width: 1000, height: 700 },

    // === System overview diagrams (PNG) ===
    'diag-iot-connectivity': { id: 'diag-iot-connectivity', src: `${b}/images/diagrams/iot-connectivity-diagram.png`, alt: 'Sơ đồ kết nối IoT từ thiết bị đến đám mây', category: 'diagram', color: '#00E5FF', width: 1200, height: 800 },
    'diag-industrial-network': { id: 'diag-industrial-network', src: `${b}/images/diagrams/industrial-network-diagram.png`, alt: 'Sơ đồ mạng công nghiệp — cảm biến lên đám mây', category: 'diagram', color: '#00E5FF', width: 1200, height: 800 },
    'diag-robot-ecosystem': { id: 'diag-robot-ecosystem', src: `${b}/images/diagrams/robot-ecosystem-diagram.png`, alt: 'Hệ sinh thái sản phẩm AMR/AGV/OHT', category: 'diagram', color: '#E040FB', width: 800, height: 600 },
};
