import type { LegalData } from '../types';

export const legal: LegalData = {
    permits: [
        { name: 'IRC điều chỉnh', agency: 'BQL KCNC', time: '15-25 ngày', status: 'Chuẩn bị' },
        { name: 'ĐTM', agency: 'Sở TNMT', time: '30-45 ngày', status: 'Đang soạn' },
        { name: 'Thẩm duyệt PCCC', agency: 'PC07', time: '20-30 ngày', status: 'Sau TK' },
        { name: 'GP Xây dựng', agency: 'BQL KCNC', time: '15-20 ngày', status: 'Hồ sơ TK' },
        { name: 'GP Viễn thông', agency: 'Cục VT', time: '20-30 ngày', status: 'Chờ' },
        { name: 'ISO 27001', agency: 'TUV/BSI', time: '6-12 tháng', status: 'Y2' },
    ],
    esg: [
        {
            title: 'Environment',
            color: '#76FF03',
            iconName: 'Leaf',
            items: ['ZLD — 0 m\u00B3 xả thải', 'PUE < 1,35', 'Pin mặt trời 500 kWp', 'Tái chế >= 80%'],
        },
        {
            title: 'Social',
            color: '#00E5FF',
            iconName: 'Users',
            items: ['200 việc làm chất lượng', '>= 40h đào tạo/năm', 'Zero fatality', 'Học bổng ĐH Bách Khoa'],
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
        { cert: 'IATF 16949', year: 'Option Y10+', color: '#E040FB' },
        { cert: 'AS9100 Rev D', year: 'Option Y10+', color: '#FF9100' },
        { cert: 'Uptime Tier III', year: 'Y8-Y9', color: '#76FF03' },
        { cert: 'SOC 2 Type II', year: 'Y9-Y10', color: '#00bfff' },
    ],
    totalPermits: 18,
    legalCost: '210-230K USD',
};
