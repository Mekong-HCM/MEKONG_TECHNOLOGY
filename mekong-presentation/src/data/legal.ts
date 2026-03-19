import type { LegalData } from '../types';

export const legal: LegalData = {
    permits: [
        { name: 'IRC điều chỉnh', agency: 'BQL KCNC', time: '15-25 ngày', status: 'Chuẩn bị' },
        { name: 'ĐTM', agency: 'Sở TNMT', time: '30-45 ngày', status: 'Đang soạn' },
        { name: 'Thẩm duyệt PCCC', agency: 'PC07', time: '20-30 ngày', status: 'Sau TK' },
        { name: 'GP Xây dựng', agency: 'BQL KCNC', time: '15-20 ngày', status: 'Hồ sơ TK' },
        { name: 'ISO 27001', agency: 'TUV/BSI', time: '6-12 tháng', status: 'Y5' },
    ],
    esg: [
        {
            title: 'Environment',
            color: '#76FF03',
            iconName: 'Leaf',
            items: ['ZLD \u2014 0 m\u00B3 xả thải', 'Solar 200 kWp rooftop', 'EDGE Certified (Công trình xanh)', 'Tái chế >= 80%'],
        },
        {
            title: 'Social',
            color: '#00E5FF',
            iconName: 'Users',
            items: ['100-130 việc làm chất lượng', '>= 40h đào tạo/năm', 'Zero fatality', 'Học bổng ĐH Bách Khoa'],
        },
        {
            title: 'Governance',
            color: '#E040FB',
            iconName: 'Shield',
            items: ['Kiểm toán Big 4', 'Anti-bribery policy', 'Đa dạng >20% nữ', 'Whistle-blower line'],
        },
    ],
    certPath: [
        { cert: 'ISO 9001', year: 'Y4', color: '#00E5FF' },
        { cert: 'ISO 27001', year: 'Y5', color: '#4dd2ff' },
        { cert: 'EDGE (Công trình xanh)', year: 'Y3', color: '#76FF03' },
        { cert: 'IATF 16949', year: 'Dài hạn', color: '#E040FB' },
        { cert: 'AS9100 Rev D', year: 'Dài hạn', color: '#FF9100' },
    ],
    totalPermits: 12,
    legalCost: '150-180K USD',
};
