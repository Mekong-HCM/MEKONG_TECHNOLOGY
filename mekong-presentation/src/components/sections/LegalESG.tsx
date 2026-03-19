import { Leaf, Shield, Users, FileCheck, Award, Check, ClipboardCheck } from 'lucide-react';
import { TabSlide, type TabConfig } from '../ui/TabSlide';
import { GlassCard } from '../ui/GlassCard';
import { OptimizedImage } from '../ui/OptimizedImage';
import { legal } from '../../data/legal';
import { images } from '../../data/images';

const esgIcons = { Leaf, Users, Shield } as const;

function PermitsTab() {
    return (
        <GlassCard className="p-4">
            <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2"><FileCheck size={16} className="text-neon-cyan" /> Giấy phép Chính</h4>
            <div className="space-y-2">
                {legal.permits.map((p, i) => (
                    <div key={i} className="flex items-center gap-3 py-2 border-b border-white/5 last:border-0">
                        <div className="flex-1">
                            <div className="text-xs font-semibold text-white">{p.name}</div>
                            <div className="text-xs text-gray-500">{p.agency} · {p.time}</div>
                        </div>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan">{p.status}</span>
                    </div>
                ))}
            </div>
            <div className="mt-3 text-xs text-gray-500 text-center">Tổng {legal.totalPermits} giấy phép · Chi phí ~{legal.legalCost}</div>
        </GlassCard>
    );
}

function ESGTab() {
    return (
        <div className="space-y-4">
            {legal.esg.map((esg, i) => {
                const Icon = esgIcons[esg.iconName as keyof typeof esgIcons];
                return (
                    <GlassCard key={i} className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <Icon size={16} style={{ color: esg.color }} />
                            <h5 className="text-sm font-bold" style={{ color: esg.color }}>{esg.title}</h5>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                            {esg.items.map((item, j) => (
                                <div key={j} className="text-xs text-gray-300 flex items-start gap-1">
                                    <Check size={12} className="text-green-400 mt-0.5 flex-shrink-0" /> {item}
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                );
            })}
            <GlassCard className="p-3 overflow-hidden max-w-2xl mx-auto">
                <OptimizedImage {...images['esg-01']} placeholderLabel="Mái pin năng lượng mặt trời" placeholderColor="#76FF03" />
            </GlassCard>
        </div>
    );
}

function CertsTab() {
    return (
        <GlassCard className="p-4">
            <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2"><Award size={16} className="text-neon-cyan" /> Lộ trình Chứng nhận</h4>
            <div className="flex flex-wrap gap-3">
                {legal.certPath.map((cert, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-2 px-4 py-2 rounded-full transition-transform hover:scale-105"
                        style={{ background: `${cert.color}10`, border: `1px solid ${cert.color}30` }}
                    >
                        <span className="text-xs font-bold" style={{ color: cert.color }}>{cert.year}</span>
                        <span className="text-xs text-gray-300">{cert.cert}</span>
                    </div>
                ))}
            </div>
        </GlassCard>
    );
}

function KCNCCriteriaTab() {
    const criteria = [
        {
            group: 'Tiêu chí Sản phẩm & Công nghệ',
            color: '#00E5FF',
            items: [
                { label: 'Sản phẩm thuộc danh mục công nghệ cao (Quyết định 38/2020/QĐ-TTg)', met: true },
                { label: 'Giá trị gia tăng (VA) ≥ 30% doanh thu', met: true, note: 'Cam kết VA ≥ 30%' },
                { label: 'Hàm lượng R&D ≥ 1% doanh thu (yêu cầu tối thiểu)', met: true, note: 'Cam kết 8-12%' },
                { label: 'Sản phẩm ứng dụng công nghệ cao thuộc ≥ 1 lĩnh vực ưu tiên', met: true, note: 'IoT + CNC chính xác' },
            ],
        },
        {
            group: 'Tiêu chí Nhân lực & Đào tạo',
            color: '#E040FB',
            items: [
                { label: 'Nhân sự kỹ thuật được đào tạo chuyên ngành ≥ 5%', met: true, note: '100% kỹ sư có bằng ĐH+' },
                { label: 'Có chương trình đào tạo tại chỗ hoặc hợp tác đại học', met: true, note: 'Hợp tác ĐHBK + RMIT' },
                { label: 'Chuyên gia nước ngoài chuyển giao công nghệ', met: true, note: 'Chuyên gia Nhật/Đức' },
            ],
        },
        {
            group: 'Tiêu chí Tài chính & Cam kết',
            color: '#76FF03',
            items: [
                { label: 'Vốn đầu tư ≥ ngưỡng tối thiểu KCNC', met: true, note: '22,00M USD >> ngưỡng' },
                { label: 'Chứng minh năng lực tài chính vốn tự có', met: true, note: 'CSH 18,00M USD (81,8%)' },
                { label: 'Không sử dụng vốn ODA hoặc ngân sách nhà nước', met: true },
                { label: 'Cam kết tiến độ triển khai và giải ngân theo giai đoạn', met: true, note: '4 giai đoạn P0-P3' },
            ],
        },
        {
            group: 'Tiêu chí Môi trường & ESG',
            color: '#FF9100',
            items: [
                { label: 'Đánh giá tác động môi trường (ĐTM) được phê duyệt', met: true, note: 'Y0-Y1' },
                { label: 'PCCC đạt tiêu chuẩn QCVN', met: true },
                { label: 'Không xả thải lỏng (ZLD) cho xưởng CNC', met: true },
                { label: 'Năng lượng tái tạo — Solar 200 kWp', met: true },
            ],
        },
    ];
    return (
        <div className="space-y-4">
            {criteria.map((group, gi) => (
                <GlassCard key={gi} className="p-4">
                    <h4 className="text-xs font-bold mb-3 flex items-center gap-2" style={{ color: group.color }}>
                        <ClipboardCheck size={13} style={{ color: group.color }} />{group.group}
                    </h4>
                    <div className="space-y-2">
                        {group.items.map((item, ii) => (
                            <div key={ii} className="flex items-start gap-2">
                                <Check size={12} className="text-green-400 mt-0.5 flex-shrink-0" />
                                <span className="text-[11px] text-gray-300 flex-1">{item.label}</span>
                                {item.note && (
                                    <span className="text-[10px] px-1.5 py-0.5 rounded ml-1 flex-shrink-0" style={{ background: `${group.color}15`, color: group.color }}>{item.note}</span>
                                )}
                            </div>
                        ))}
                    </div>
                </GlassCard>
            ))}
        </div>
    );
}

const tabs: TabConfig[] = [
    { key: 'kcnc', label: 'Tiêu chí KCNC', icon: ClipboardCheck, content: <KCNCCriteriaTab /> },
    { key: 'permits', label: 'Cơ sở pháp lý', icon: FileCheck, content: <PermitsTab /> },
    { key: 'esg', label: 'Năng lượng & Môi trường', icon: Leaf, content: <ESGTab /> },
    { key: 'certs', label: 'Chứng nhận', icon: Award, content: <CertsTab /> },
];

export function LegalESG() {
    return (
        <TabSlide
            id="legal-esg"
            title="Pháp lý & ESG"
            subtitle={`${legal.totalPermits} giấy phép — Không xả thải lỏng — Cam kết môi trường và xã hội đầy đủ`}
            tabs={tabs}
        />
    );
}
