import type { LegalData } from '../types';

export const legal: LegalData = {
    permits: [
        { name: 'IRC dieu chinh', agency: 'BQL KCNC', time: '15-25 ngay', status: 'Chuan bi' },
        { name: 'DTM', agency: 'So TNMT', time: '30-45 ngay', status: 'Dang soan' },
        { name: 'Tham duyet PCCC', agency: 'PC07', time: '20-30 ngay', status: 'Sau TK' },
        { name: 'GP Xay dung', agency: 'BQL KCNC', time: '15-20 ngay', status: 'Ho so TK' },
        { name: 'GP Vien thong', agency: 'Cuc VT', time: '20-30 ngay', status: 'Cho' },
        { name: 'ISO 27001', agency: 'TUV/BSI', time: '6-12 thang', status: 'Y2' },
    ],
    esg: [
        {
            title: 'Environment',
            color: '#76FF03',
            iconName: 'Leaf',
            items: ['ZLD — 0 m\u00B3 xa thai', 'PUE < 1,35', 'Solar 500 kWp', 'Tai che >= 80%'],
        },
        {
            title: 'Social',
            color: '#00E5FF',
            iconName: 'Users',
            items: ['300 viec lam chat luong', '>= 40h dao tao/nam', 'Zero fatality', 'Hoc bong DH Bach Khoa'],
        },
        {
            title: 'Governance',
            color: '#E040FB',
            iconName: 'Shield',
            items: ['Kiem toan Big 4', 'Anti-bribery policy', 'Da dang >20% nu', 'Whistle-blower line'],
        },
    ],
    certPath: [
        { cert: 'ISO 9001', year: 'Y6', color: '#00E5FF' },
        { cert: 'ISO 27001', year: 'Y7', color: '#4dd2ff' },
        { cert: 'IATF 16949', year: 'Y9', color: '#E040FB' },
        { cert: 'AS9100 Rev D', year: 'Y10', color: '#FF9100' },
        { cert: 'Uptime Tier III', year: 'Y10', color: '#76FF03' },
        { cert: 'SOC 2 Type II', year: 'Y11', color: '#00bfff' },
    ],
    totalPermits: 18,
    legalCost: '210-230K USD',
};
