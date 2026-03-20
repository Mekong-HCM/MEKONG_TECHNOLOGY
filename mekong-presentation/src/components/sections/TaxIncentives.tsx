import { Award, TrendingUp, BarChart3, Check, Info } from 'lucide-react';
import { TabSlide, type TabConfig } from '../ui/TabSlide';
import { GlassCard } from '../ui/GlassCard';
import { financials } from '../../data/financials';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from 'recharts';

const colors = ['#00E5FF', '#4dd2ff', '#E040FB', '#76FF03', '#FF9100', '#00bfff', '#E040FB'];

const taxBenefits = [
    { name: 'Miễn thuế TNDN 4 năm (NĐ 94/2020)', basis: 'Dự án CNC tại KCNC TP.HCM', value: '~2,0M USD', period: 'Y5-Y8' },
    { name: 'Giảm 50% thuế TNDN 9 năm', basis: 'Tiếp theo miễn thuế', value: '~2,5M USD', period: 'Y9-Y17' },
    { name: 'Thuế suất ưu đãi 10%', basis: 'Dự án CNC (thay vì 20%)', value: '~0,5M USD', period: '15 năm' },
    { name: 'Miễn thuế nhập khẩu', basis: 'Thiết bị R&D, CNC, IoT', value: '~0,2M USD', period: 'Xây dựng' },
];

/* ─── Tab 1: Ưu đãi Thuế KCNC ─── */
function TaxTab() {
    return (
        <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-3 mb-4">
                <div className="corporate-card p-5 text-center">
                    <div className="data-highlight-lg">~5,2M</div>
                    <div className="text-xs text-gray-400">USD tiết kiệm thuế ước tính</div>
                </div>
                <div className="corporate-card p-5 text-center">
                    <div className="data-highlight-lg">13 năm</div>
                    <div className="text-xs text-gray-400">Tổng thời gian ưu đãi (4Y miễn + 9Y giảm)</div>
                </div>
            </div>

            <div className="space-y-3">
                {taxBenefits.map((tb, i) => (
                    <div key={i} className="corporate-card-hover p-4">
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <h4 className="text-sm font-bold text-white mb-1">{tb.name}</h4>
                                <p className="text-xs text-gray-400">{tb.basis}</p>
                            </div>
                            <div className="text-right ml-4">
                                <div className="data-highlight text-lg font-bold">{tb.value}</div>
                                <div className="text-[10px] text-gray-500">{tb.period}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="corporate-card p-4">
                <div className="flex items-start gap-2 text-xs text-gray-400">
                    <Info size={14} className="text-corporate-gold flex-shrink-0 mt-0.5" />
                    <span>Theo NĐ 94/2020/NĐ-CP, Luật CNC 2008 và chính sách ưu đãi BQL KCNC TP.HCM. Điều kiện: R&D &ge; 5% doanh thu, cam kết VA &ge; 30%.</span>
                </div>
            </div>

            {/* So sánh thuế */}
            <div className="corporate-card p-5">
                <h4 className="text-sm font-bold text-white mb-3">So sánh: Thuế KCNC vs Thuế thường</h4>
                <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                        <thead>
                            <tr className="border-b border-corporate-slate/20">
                                <th className="text-left py-2 text-gray-400">Chỉ tiêu</th>
                                <th className="text-right py-2 text-gray-400">Không ưu đãi</th>
                                <th className="text-right py-2 data-highlight">Ưu đãi KCNC</th>
                                <th className="text-right py-2 text-green-400">Tiết kiệm</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { metric: 'Thuế suất TNDN', normal: '20%', kcnc: '10% (15Y)', save: '50%' },
                                { metric: 'Miễn thuế', normal: '0 năm', kcnc: '4 năm', save: '~2,0M USD' },
                                { metric: 'Giảm 50%', normal: '0 năm', kcnc: '9 năm', save: '~2,5M USD' },
                                { metric: 'Nhập khẩu thiết bị', normal: '5-10%', kcnc: '0%', save: '~0,2M USD' },
                                { metric: 'Tổng tiết kiệm 15Y', normal: '—', kcnc: '—', save: '~5,2M USD' },
                            ].map((row, i) => (
                                <tr key={i} className={`border-b border-white/5 ${i === 4 ? 'font-bold' : ''}`}>
                                    <td className="py-2 text-gray-300">{row.metric}</td>
                                    <td className="text-right py-2 text-gray-500">{row.normal}</td>
                                    <td className="text-right py-2 data-highlight">{row.kcnc}</td>
                                    <td className="text-right py-2 text-green-400">{row.save}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

/* ─── Tab 2: Strategic Value 7M ─── */
function StrategicTab() {
    const total = financials.strategicBreakdown.reduce((a, b) => a + b.value, 0);

    return (
        <div className="space-y-4">
            <div className="corporate-card p-5 text-center mb-4">
                <div className="text-4xl font-black corporate-gradient-text mb-1">~{total.toFixed(1)}M USD</div>
                <div className="text-sm text-gray-400">Tổng Giá trị Chiến lược</div>
                <div className="text-xs text-gray-500 mt-1">Strategic Value / CAPEX = {((total / 22.0) * 100).toFixed(0)}%</div>
            </div>

            <div className="corporate-card p-6">
                <h4 className="text-lg font-semibold text-white mb-4">Thành phần Giá trị (M USD)</h4>
                <ResponsiveContainer width="100%" height={280}>
                    <BarChart data={financials.strategicBreakdown} margin={{ left: 0 }}>
                        <XAxis dataKey="name" tick={{ fill: '#d1d5db', fontSize: 9 }} axisLine={false} tickLine={false} angle={-25} textAnchor="end" height={60} />
                        <YAxis tick={{ fill: '#d1d5db', fontSize: 10 }} axisLine={false} tickLine={false} />
                        <Tooltip
                            contentStyle={{ background: '#191d44', border: '1px solid rgba(201,154,46,0.3)', borderRadius: '8px', fontSize: '11px', color: '#fff' }}
                            itemStyle={{ color: '#e5e7eb' }}
                            labelStyle={{ color: '#d1d5db' }}
                            formatter={(v: number) => [`${v}M USD`, '']}
                        />
                        <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={32}>
                            {financials.strategicBreakdown.map((_, i) => (
                                <Cell key={i} fill={colors[i]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <GlassCard className="p-5">
                <h5 className="text-sm font-bold text-white mb-3">Cam kết Nhà đầu tư</h5>
                <div className="space-y-2">
                    {financials.investorCommitments.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                            <Check size={12} className="text-green-400 mt-0.5 flex-shrink-0" />
                            {item}
                        </div>
                    ))}
                </div>
            </GlassCard>
        </div>
    );
}

/* ─── Tab 3: So sánh ROI ─── */
function ROITab() {
    return (
        <div className="space-y-4">
            <div className="corporate-card p-5 overflow-x-auto">
                <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                    <BarChart3 size={16} className="text-corporate-gold" />
                    So sánh ROI: Mekong vs Đối chuẩn
                </h4>
                <table className="w-full text-xs">
                    <thead>
                        <tr className="border-b border-corporate-slate/20">
                            <th className="text-left py-2 text-gray-400">Chỉ tiêu</th>
                            <th className="text-right py-2 data-highlight font-bold">Mekong</th>
                            <th className="text-right py-2 text-gray-400">KCNC trung bình</th>
                            <th className="text-right py-2 text-gray-400">KCN ngoài</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { metric: 'IRR 50Y', mekong: '13,0%', kcnc: '10-12%', kcn: '8-10%' },
                            { metric: 'NPV 50Y', mekong: '1,50M USD', kcnc: '0,5-1,0M', kcn: '<0,5M' },
                            { metric: 'Payback', mekong: '~10Y', kcnc: '10-15Y', kcn: '12-18Y' },
                            { metric: 'DSCR', mekong: '≥1,50x', kcnc: '1,2-1,4x', kcn: '1,0-1,2x' },
                            { metric: 'Revenue/CAPEX 15Y', mekong: '6,4x', kcnc: '3-5x', kcn: '2-4x' },
                            { metric: 'Tax Savings 15Y', mekong: '~5,2M USD', kcnc: '~3-4M', kcn: '0' },
                            { metric: 'Strategic Value', mekong: '~7,0M USD', kcnc: '~3-5M', kcn: '~1-2M' },
                            { metric: 'R&D/Revenue', mekong: '8-12%', kcnc: '3-5%', kcn: '<2%' },
                        ].map((row, i) => (
                            <tr key={i} className="border-b border-white/5">
                                <td className="py-2 text-gray-300">{row.metric}</td>
                                <td className="text-right py-2 data-highlight font-bold">{row.mekong}</td>
                                <td className="text-right py-2 text-gray-400">{row.kcnc}</td>
                                <td className="text-right py-2 text-gray-500">{row.kcn}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

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

/* ─── Main Export ─── */
const tabs: TabConfig[] = [
    { key: 'tax', label: 'Ưu đãi Thuế KCNC', icon: Award, content: <TaxTab /> },
    { key: 'strategic', label: 'Strategic Value 7M', icon: TrendingUp, content: <StrategicTab /> },
    { key: 'roi', label: 'So sánh ROI', icon: BarChart3, content: <ROITab /> },
];

export function TaxIncentives() {
    return (
        <TabSlide
            id="incentives"
            title="Ưu đãi & Giá trị Chiến lược"
            subtitle="Tiết kiệm thuế ~5,2M USD — Tổng giá trị chiến lược ~7,0M USD"
            tabs={tabs}
            className="section-corporate"
        />
    );
}
