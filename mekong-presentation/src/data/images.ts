/** Centralized image asset registry.
 *  When real images are added to public/images/, update the `src` fields.
 *  Components use OptimizedImage which falls back to ImagePlaceholder automatically.
 *  Paths use import.meta.env.BASE_URL so they work on both localhost and GitHub Pages.
 */

export interface ImageAsset {
    id: string;
    src: string;
    alt: string;
    category: 'cnc' | 'iot' | 'dc' | 'location' | 'brand' | 'esg';
    color: string;
    width: number;
    height: number;
}

const b = import.meta.env.BASE_URL.replace(/\/$/, '');

export const images: Record<string, ImageAsset> = {
    // CNC
    'cnc-01': { id: 'cnc-01', src: `${b}/images/cnc/cnc-01-dmg-mori-dmu50.jpg`, alt: 'May CNC 5-axis DMG MORI DMU 50 3rd Generation', category: 'cnc', color: '#E040FB', width: 800, height: 600 },
    'cnc-02': { id: 'cnc-02', src: `${b}/images/cnc/cnc-02-workshop-overview.jpg`, alt: 'Xuong CNC tong quan tu goc cao', category: 'cnc', color: '#E040FB', width: 1200, height: 600 },
    'cnc-03': { id: 'cnc-03', src: `${b}/images/cnc/cnc-03-titanium-machining.jpg`, alt: 'Gia cong titanium 5-axis chinh xac', category: 'cnc', color: '#E040FB', width: 600, height: 400 },

    // IoT
    'iot-01': { id: 'iot-01', src: `${b}/images/iot/IOT-DEVICE.jpg`, alt: 'Industrial IoT edge gateway', category: 'iot', color: '#00E5FF', width: 1417, height: 1004 },
    'iot-03': { id: 'iot-03', src: `${b}/images/iot/iot-03-amr-robot.jpg`, alt: 'AMR robot tu hanh trong nha kho', category: 'iot', color: '#00E5FF', width: 800, height: 500 },
    'iot-04': { id: 'iot-04', src: `${b}/images/iot/AMRRobots_ModernMaterialHandling.jpg`, alt: 'Robot AGV tự hành vận chuyển hàng hóa trong nhà kho thông minh', category: 'iot', color: '#00E5FF', width: 1180, height: 664 },

    // Datacenter (nội bộ)
    'dc-01': { id: 'dc-01', src: `${b}/images/dc/dc-01-server-racks.jpg`, alt: 'Server rack rows — phòng máy chủ nội bộ', category: 'dc', color: '#76FF03', width: 1200, height: 600 },
    'dc-02': { id: 'dc-02', src: `${b}/images/dc/dc-02-gpu-cluster.jpg`, alt: 'GPU cluster phục vụ AI/R&D nội bộ', category: 'dc', color: '#76FF03', width: 800, height: 500 },
    'dc-03': { id: 'dc-03', src: `${b}/images/dc/dc-03-cooling-system.jpg`, alt: 'Hệ thống làm mát phòng máy chủ', category: 'dc', color: '#76FF03', width: 600, height: 400 },

    // Location
    'loc-01': { id: 'loc-01', src: `${b}/images/location/loc-01-kcnc-aerial.jpg`, alt: 'Anh ve tinh KCNC TP.HCM', category: 'location', color: '#00E5FF', width: 1200, height: 800 },

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
};
