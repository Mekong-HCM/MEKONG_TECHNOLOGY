/** Centralized image asset registry.
 *  When real images are added to public/images/, update the `src` fields.
 *  Components use OptimizedImage which falls back to ImagePlaceholder automatically.
 *  Paths use import.meta.env.BASE_URL so they work on both localhost and GitHub Pages.
 */

export interface ImageAsset {
    id: string;
    src: string;
    alt: string;
    category: 'cnc' | 'iot' | 'dc' | 'location' | 'brand' | 'esg' | 'products' | 'robot' | 'dashboard' | 'factory';
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
};
