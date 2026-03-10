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
    'cnc-01': { id: 'cnc-01', src: '/images/cnc/cnc-01-dmg-mori-dmu50.jpg', alt: 'May CNC 5-axis DMG MORI DMU 50 3rd Generation', category: 'cnc', color: '#E040FB', width: 800, height: 600 },
    'cnc-02': { id: 'cnc-02', src: '/images/cnc/cnc-02-workshop-overview.jpg', alt: 'Xuong CNC tong quan tu goc cao', category: 'cnc', color: '#E040FB', width: 1200, height: 600 },
    'cnc-03': { id: 'cnc-03', src: '/images/cnc/cnc-03-titanium-machining.jpg', alt: 'Gia cong titanium 5-axis chinh xac', category: 'cnc', color: '#E040FB', width: 600, height: 400 },

    // IoT
    'iot-01': { id: 'iot-01', src: '/images/iot/iot-01-edge-gateway.jpg', alt: 'Industrial IoT edge gateway', category: 'iot', color: '#00E5FF', width: 600, height: 400 },
    'iot-03': { id: 'iot-03', src: '/images/iot/iot-03-amr-robot.jpg', alt: 'AMR robot tu hanh trong nha kho', category: 'iot', color: '#00E5FF', width: 800, height: 500 },

    // Datacenter
    'dc-01': { id: 'dc-01', src: '/images/dc/dc-01-server-racks.jpg', alt: 'Server rack rows — datacenter', category: 'dc', color: '#76FF03', width: 1200, height: 600 },
    'dc-02': { id: 'dc-02', src: '/images/dc/dc-02-gpu-cluster.jpg', alt: 'NVIDIA GPU cluster datacenter', category: 'dc', color: '#76FF03', width: 800, height: 500 },
    'dc-03': { id: 'dc-03', src: '/images/dc/dc-03-cooling-system.jpg', alt: 'He thong lam mat CRAC/CDU datacenter', category: 'dc', color: '#76FF03', width: 600, height: 400 },

    // Location
    'loc-01': { id: 'loc-01', src: '/images/location/loc-01-kcnc-aerial.jpg', alt: 'Anh ve tinh KCNC TP.HCM', category: 'location', color: '#00E5FF', width: 1200, height: 800 },
};
