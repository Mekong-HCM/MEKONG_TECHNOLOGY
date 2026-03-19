import { Rocket, ShieldCheck, Mail, MapPin, ArrowUpRight, ClipboardList, PhoneCall, FileSignature, Building2, Check, Target } from 'lucide-react';
import { TabSlide, type TabConfig } from '../ui/TabSlide';
import { GlassCard } from '../ui/GlassCard';
import { financials } from '../../data/financials';
import { contact } from '../../data/contact';

/* ─── Tab 1: Value Proposition ─── */
const exitPaths = [
    { path: 'M&A bởi Strategic Buyer', target: 'Foxconn, Jabil, NDK Group', ev: '120-160M USD', multiple: '12-18x EBITDA', color: '#00E5FF' },
    { path: 'Bán cổ phần cho PE Fund', target: 'KKR, Warburg, VinaCapital PE', ev: '80-120M USD', multiple: '8-12x EBITDA', color: '#E040FB' },
    { path: 'IPO trên HOSE/HNX', target: 'Niêm yết công khai', ev: '150-200M+ USD', multiple: '15-20x EBITDA', color: '#76FF03' },
];

const comparables = [
    { name: 'Jabil Inc.', multiple: '11,2x', sector: 'EMS/CNC' },
    { name: 'FPT Corp.', multiple: '18,3x', sector: 'Tech VN' },
    { name: 'CMC Corp.', multiple: '14,1x', sector: 'DC/Cloud VN' },
    { name: 'Median ngành', multiple: '15x', sector: 'Blended' },
];

function ValueTab() {
    return (
        <div className="space-y-4">
            <div className="corporate-card p-5 text-center">
                <h4 className="text-lg font-bold text-white mb-1">Tại sao chọn Mekong?</h4>
                <p className="text-xs text-gray-400">{contact.tagline}</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                    { label: 'NPV (50Y)', value: '1,50M USD', sub: 'P(NPV>0) = 65%' },
                    { label: 'IRR (50Y)', value: '13,0%', sub: 'Vượt hurdle 12%' },
                    { label: 'Revenue 15Y', value: '~140M USD', sub: '6,4x CAPEX' },
                    { label: 'Strategic Value', value: '~7,0M USD', sub: '32% CAPEX' },
                ].map((kpi, i) => (
                    <div key={i} className="corporate-card p-4 text-center">
                        <div className="data-highlight text-lg font-bold">{kpi.value}</div>
                        <div className="text-xs font-semibold text-white">{kpi.label}</div>
                        <div className="text-[10px] text-gray-500">{kpi.sub}</div>
                    </div>
                ))}
            </div>

            {/* Exit Strategy */}
            <div className="corporate-card p-5">
                <h5 className="text-sm font-bold text-white mb-3">Lộ trình Thoái vốn (Y15+)</h5>
                <div className="space-y-3">
                    {exitPaths.map((exit, i) => (
                        <div key={i} className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-xs font-bold" style={{ color: exit.color }}>{exit.path}</span>
                                <span className="text-xs font-bold text-white">{exit.ev}</span>
                            </div>
                            <div className="text-xs text-gray-500">Target: {exit.target} | {exit.multiple}</div>
                        </div>
                    ))}
                </div>
                <div className="mt-3 p-3 rounded-lg bg-corporate-gold/5 border border-corporate-gold/10 text-center">
                    <div className="text-xs text-gray-400">Mekong Y15 EBITDA ~9M x 15x =</div>
                    <div className="text-lg font-black text-corporate-gold">~135M USD (conservative EV)</div>
                </div>
            </div>

            {/* Comparable Companies */}
            <GlassCard className="p-4 overflow-x-auto">
                <h5 className="text-sm font-bold text-white mb-2">Công ty So sánh (EV/EBITDA)</h5>
                <table className="w-full text-xs">
                    <thead>
                        <tr className="border-b border-white/10">
                            <th className="text-left py-1.5 text-gray-400">Công ty</th>
                            <th className="text-right py-1.5 text-gray-400">EV/EBITDA</th>
                            <th className="text-right py-1.5 text-gray-400">Ngành</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comparables.map((c, i) => (
                            <tr key={i} className={`border-b border-white/5 ${i === comparables.length - 1 ? 'font-bold' : ''}`}>
                                <td className="py-1.5 text-gray-300">{c.name}</td>
                                <td className="text-right py-1.5 text-white">{c.multiple}</td>
                                <td className="text-right py-1.5 text-gray-500">{c.sector}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </GlassCard>
        </div>
    );
}

/* ─── Tab 2: Cam kết R&D & VA ─── */
const trustSignals = [
    'Vị trí được BQL KCNC TP.HCM phê duyệt',
    'Tự chủ vốn CSH 81,8% — không phụ thuộc ODA',
    'Miễn thuế TNDN 4 năm, giảm 50% trong 9 năm tiếp',
    'P(NPV>0) = 65% theo mô phỏng Monte Carlo',
];

function CommitmentTab() {
    return (
        <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-3">
                <div className="corporate-card p-5">
                    <h5 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                        <Target size={14} className="text-corporate-gold" /> Cam kết R&D
                    </h5>
                    <div className="space-y-2 text-xs text-gray-300">
                        {[
                            'R&D/Revenue ≥ 8-12% suốt vòng đời dự án',
                            '4 phòng lab chuyên biệt (IoT, Embedded, CNC, QA)',
                            'Nộp ≥ 3 bằng sáng chế/năm từ Y5',
                            'TRL7+ cho sản phẩm flagship trước Y6',
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-2">
                                <Check size={12} className="text-green-400 mt-0.5 flex-shrink-0" />
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="corporate-card p-5">
                    <h5 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                        <Rocket size={14} className="text-corporate-gold" /> Cam kết Giá trị gia tăng
                    </h5>
                    <div className="space-y-2 text-xs text-gray-300">
                        {[
                            'VA ≥ 30% doanh thu — đáp ứng tiêu chí KCNC',
                            'Nội địa hoá linh kiện CNC tăng dần 40→60%',
                            'Đào tạo 100-130 kỹ sư CNC/IoT bản địa',
                            'ESOP 3% — gắn kết đội ngũ dài hạn',
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-2">
                                <Check size={12} className="text-green-400 mt-0.5 flex-shrink-0" />
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <GlassCard className="p-5">
                <h5 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                    <ShieldCheck size={14} className="text-green-400" /> Điểm Tin cậy
                </h5>
                <div className="space-y-2">
                    {trustSignals.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0 mt-1.5" />
                            {item}
                        </div>
                    ))}
                </div>
            </GlassCard>

            {/* Cam kết Nhà đầu tư from financials */}
            <div className="corporate-card p-5">
                <h5 className="text-sm font-bold text-white mb-3">Cam kết cụ thể với Nhà đầu tư</h5>
                <div className="space-y-2">
                    {financials.investorCommitments.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                            <Check size={12} className="text-corporate-gold mt-0.5 flex-shrink-0" />
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            {/* Tầm nhìn dài hạn */}
            <GlassCard className="p-5">
                <h5 className="text-sm font-bold text-white mb-3">Tầm nhìn Dài hạn</h5>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                    {financials.longTermVision.map((item, i) => (
                        <div key={i} className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                            <div className="text-xs font-bold data-highlight">{item.period}</div>
                            <div className="text-sm font-bold text-white mt-1">{item.revenue}</div>
                            <div className="text-xs text-gray-400">EV: {item.ev}</div>
                        </div>
                    ))}
                </div>
            </GlassCard>
        </div>
    );
}

/* ─── Tab 3: Call-to-Action ─── */
const nextSteps = [
    { step: 1, label: 'Gửi yêu cầu thông tin', desc: 'Email invest@mekongtech.vn — nhận Investor Packet trong 24h', Icon: ClipboardList, color: '#00E5FF' },
    { step: 2, label: 'Họp trình bày 1:1', desc: 'Trình bày chi tiết + Q&A với đội ngũ điều hành', Icon: PhoneCall, color: '#E040FB' },
    { step: 3, label: 'Ký NDA & Due Diligence', desc: 'Truy cập mô hình tài chính đầy đủ, báo cáo kỹ thuật', Icon: FileSignature, color: '#76FF03' },
    { step: 4, label: 'Term Sheet & Hợp tác', desc: 'Thỏa thuận điều khoản — bắt đầu hành trình cùng Mekong', Icon: Building2, color: '#FF9100' },
];

function CTATab() {
    return (
        <div className="space-y-4">
            {/* Process Steps */}
            <div className="corporate-card p-6">
                <h4 className="text-sm font-bold text-white mb-4 text-center">Quy trình Hợp tác</h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {nextSteps.map((s) => (
                        <div key={s.step} className="relative p-4 rounded-xl bg-white/[0.03] border border-white/5">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: `${s.color}20`, color: s.color }}>
                                    {s.step}
                                </div>
                                <s.Icon size={16} style={{ color: s.color }} />
                            </div>
                            <div className="text-sm font-semibold text-white mb-1">{s.label}</div>
                            <div className="text-xs text-gray-400 leading-relaxed">{s.desc}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-2 gap-4">
                <GlassCard className="p-5">
                    <h5 className="text-sm font-bold text-white mb-3">{contact.info.company}</h5>
                    <div className="space-y-3">
                        <div className="flex items-start gap-3">
                            <MapPin size={14} className="text-neon-cyan flex-shrink-0 mt-0.5" />
                            <div className="text-xs text-gray-400 leading-relaxed">
                                {contact.info.address.map((line, i) => <div key={i}>{line}</div>)}
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Mail size={14} className="text-neon-cyan flex-shrink-0 mt-0.5" />
                            <div className="text-xs text-gray-400">
                                <div>{contact.info.email} (Đầu tư)</div>
                                <div>partner@mekongtech.vn (Hợp tác Kỹ thuật)</div>
                            </div>
                        </div>
                    </div>
                </GlassCard>

                <div className="corporate-card p-5 flex flex-col items-center justify-center text-center">
                    <div className="text-3xl font-black corporate-gradient-text mb-2">22,00M USD</div>
                    <div className="text-sm text-gray-400 mb-4">Tổng mức đầu tư — 2 Trụ cột Công nghệ</div>
                    <a href="mailto:invest@mekongtech.vn" className="btn-primary inline-flex items-center gap-2 text-sm px-6 py-3">
                        Gửi yêu cầu Investor Packet
                        <ArrowUpRight size={16} />
                    </a>
                    <p className="text-[10px] text-gray-500 mt-2">Phản hồi trong vòng 24 giờ làm việc</p>
                </div>
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-white/5 text-center">
                <p className="text-xs text-gray-500">&copy; 2025 Mekong Technology. Confidential — For intended recipients only.</p>
                <p className="text-xs text-gray-600 mt-1">Khu Công nghệ Cao TP.HCM (SHTP)</p>
            </div>
        </div>
    );
}

/* ─── Main Export ─── */
const tabs: TabConfig[] = [
    { key: 'value', label: 'Tại sao Mekong?', icon: Rocket, content: <ValueTab /> },
    { key: 'commitment', label: 'Cam kết R&D & VA', icon: ShieldCheck, content: <CommitmentTab /> },
    { key: 'cta', label: 'Liên hệ & Hợp tác', icon: Mail, content: <CTATab /> },
];

export function Conclusion() {
    return (
        <TabSlide
            id="conclusion"
            title="Kết luận & Cam kết"
            subtitle="Mekong Technology Hub — nền tảng công nghệ cho tương lai sản xuất Việt Nam"
            tabs={tabs}
            className="section-corporate"
        />
    );
}
