/** Centralized image asset registry.
 *  When real images are added to public/images/, update the `src` fields.
 *  Components use OptimizedImage which falls back to ImagePlaceholder automatically.
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

export const images: Record<string, ImageAsset> = {
    // CNC
    'cnc-01': { id: 'cnc-01', src: '/images/cnc/cnc-01-dmg-mori-dmu50.webp', alt: 'May CNC 5-axis DMG MORI DMU 50 3rd Generation', category: 'cnc', color: '#E040FB', width: 800, height: 600 },
    'cnc-02': { id: 'cnc-02', src: '/images/cnc/cnc-02-workshop-overview.webp', alt: 'Xuong CNC tong quan tu goc cao', category: 'cnc', color: '#E040FB', width: 1200, height: 600 },
    'cnc-03': { id: 'cnc-03', src: '/images/cnc/cnc-03-titanium-machining.webp', alt: 'Gia cong titanium 5-axis chinh xac', category: 'cnc', color: '#E040FB', width: 600, height: 400 },
    'cnc-04': { id: 'cnc-04', src: '/images/cnc/cnc-04-aerospace-part.webp', alt: 'San pham CNC chinh xac — turbine blade', category: 'cnc', color: '#E040FB', width: 600, height: 400 },

    // IoT
    'iot-01': { id: 'iot-01', src: '/images/iot/iot-01-edge-gateway.webp', alt: 'Industrial IoT edge gateway', category: 'iot', color: '#00E5FF', width: 600, height: 400 },
    'iot-03': { id: 'iot-03', src: '/images/iot/iot-03-amr-robot.webp', alt: 'AMR robot tu hanh trong nha kho', category: 'iot', color: '#00E5FF', width: 800, height: 500 },
    'iot-04': { id: 'iot-04', src: '/images/iot/iot-04-platform-dashboard.webp', alt: 'IoT platform dashboard monitoring', category: 'iot', color: '#00E5FF', width: 1000, height: 600 },

    // Datacenter
    'dc-01': { id: 'dc-01', src: '/images/dc/dc-01-server-racks.webp', alt: 'Server rack rows — datacenter', category: 'dc', color: '#76FF03', width: 1200, height: 600 },
    'dc-02': { id: 'dc-02', src: '/images/dc/dc-02-gpu-cluster.webp', alt: 'NVIDIA GPU cluster datacenter', category: 'dc', color: '#76FF03', width: 800, height: 500 },
    'dc-03': { id: 'dc-03', src: '/images/dc/dc-03-cooling-system.webp', alt: 'He thong lam mat CRAC/CDU datacenter', category: 'dc', color: '#76FF03', width: 600, height: 400 },

    // Location
    'loc-01': { id: 'loc-01', src: '/images/location/loc-01-kcnc-aerial.webp', alt: 'Anh ve tinh KCNC TP.HCM', category: 'location', color: '#00E5FF', width: 1200, height: 800 },
    'loc-02': { id: 'loc-02', src: '/images/location/loc-02-kcnc-entrance.webp', alt: 'Cong chinh KCNC TP.HCM', category: 'location', color: '#00E5FF', width: 800, height: 500 },

    // ESG
    'esg-01': { id: 'esg-01', src: '/images/esg/esg-01-solar-rooftop.webp', alt: 'Solar panel tren mai nha may', category: 'esg', color: '#76FF03', width: 800, height: 500 },
};
