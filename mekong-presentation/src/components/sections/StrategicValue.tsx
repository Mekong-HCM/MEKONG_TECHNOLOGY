import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { financials } from '../../data/financials';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from 'recharts';
import { Check, Info } from 'lucide-react';
import { SectionLayout } from '../ui/SectionLayout';
import { GlassCard } from '../ui/GlassCard';

const colors = ['#00E5FF', '#4dd2ff', '#E040FB', '#76FF03', '#FF9100', '#00bfff', '#E040FB'];

const methodologyNotes: Record<string, string> = {
    'NPV (50Y, Base)': 'DCF 50 năm, WACC 12%, terminal value = 0',
    'Brand & IP': 'SaaS multiple 3-5x + IP licensing + chứng nhận quốc tế (ISO 9001, IATF/AS9100 option Y10+)',
    'Ecosystem synergy': 'Giá trị cộng hưởng 3 BU: CNC dùng GPU cho CAM, DC phục vụ IoT analytics',
    'Tax incentives': 'Miễn TNDN 4 năm + giảm 50% 9 năm. Giá trị hiện tại theo luật KCNC [C]',
    'Strategic location': 'Vị trí KCNC TP.HCM, giá thuê thấp hơn 40% so với KCN ngoài [B]',
    'Human capital': 'Pool 200 nhân sự, ESOP 3%, giá trị đào tạo lũy kế [C]',
    'ESG premium': 'PUE 1,32 + ZLD + Zero-fatality → valuation premium 5-10% [B]',
};

export function StrategicValue() {
    const { ref, isInView } = useInView(0.15);
    const total = financials.strategicBreakdown.reduce((a, b) => a + b.value, 0);

    return (
        <SectionLayout id="strategic">
            <div ref={ref}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
                    <h2 className="section-title text-white">Giá trị <span className="gradient-text">Chiến lược</span></h2>
                    <p className="section-subtitle">Tổng giá trị chiến lược ~{total.toFixed(1)}M USD — vượt xa NPV tài chính thuần.</p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    {/* Waterfall Chart */}
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
                        <GlassCard className="p-6 h-full">
                        <h4 className="text-lg font-semibold text-white mb-4">Thành phần Giá trị (M USD)</h4>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={financials.strategicBreakdown} margin={{ left: 0 }}>
                                <XAxis dataKey="name" tick={{ fill: '#999', fontSize: 9 }} axisLine={false} tickLine={false} angle={-25} textAnchor="end" height={60} />
                                <YAxis tick={{ fill: '#999', fontSize: 10 }} axisLine={false} tickLine={false} />
                                <Tooltip
                                    contentStyle={{ background: '#191d44', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '11px', color: '#fff' }}
                                    itemStyle={{ color: '#76FF03' }}
                                    labelStyle={{ color: '#ccc' }}
                                    formatter={(v: number, name: string, props: { payload?: { name?: string } }) => {
                                        const note = props.payload?.name ? methodologyNotes[props.payload.name] : '';
                                        return [`${v}M USD${note ? ' — ' + note : ''}`, ''];
                                    }}
                                />
                                <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={32}>
                                    {financials.strategicBreakdown.map((_, i) => (
                                        <Cell key={i} fill={colors[i]} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                        <div className="mt-3 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                            <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-2">
                                <Info size={12} /> Phương pháp định giá
                            </div>
                            <div className="grid sm:grid-cols-2 gap-x-4 gap-y-1">
                                {financials.strategicBreakdown.map((item, i) => (
                                    <div key={i} className="text-xs text-gray-500">
                                        <span style={{ color: colors[i] }} className="font-medium">{item.name}:</span> {methodologyNotes[item.name]}
                                    </div>
                                ))}
                            </div>
                        </div>
                        </GlassCard>
                    </motion.div>

                    {/* Summary Cards */}
                    <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="space-y-4">
                        <GlassCard className="p-6 text-center">
                            <div className="text-4xl font-black gradient-text mb-1">~{total.toFixed(1)}M</div>
                            <div className="text-sm text-gray-400">Tổng Giá trị Chiến lược (USD)</div>
                            <div className="text-xs text-gray-500 mt-2">Strategic Value / CAPEX = {((total / 32.0) * 100).toFixed(1)}%</div>
                        </GlassCard>

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

                        <GlassCard className="p-5">
                            <h5 className="text-sm font-bold text-white mb-3">Tầm nhìn Dài hạn</h5>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                                {financials.longTermVision.map((item, i) => (
                                    <div key={i} className="p-2 rounded-lg bg-white/[0.03] border border-white/5">
                                        <div className="text-xs font-bold neon-text">{item.period}</div>
                                        <div className="text-sm font-bold text-white mt-1">{item.revenue}</div>
                                        <div className="text-xs text-gray-400">EV: {item.ev}</div>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>

                {/* Exit Strategy & Comparable Valuation */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.45 }}
                    className="mt-8"
                >
                    <GlassCard className="p-6">
                        <h4 className="text-lg font-semibold text-white mb-4">Chiến lược Thoái vốn & Định giá So sánh</h4>
                        <div className="grid lg:grid-cols-2 gap-6">
                            {/* Exit paths */}
                            <div>
                                <h5 className="text-sm font-bold text-gray-300 mb-3">Lộ trình Thoái vốn (Y15+)</h5>
                                <div className="space-y-3">
                                    {[
                                        { path: 'M&A bởi Strategic Buyer', target: 'Foxconn, Jabil, NDK Group', ev: '120-160M USD', multiple: '12-18x EBITDA', color: '#00E5FF' },
                                        { path: 'Bán cổ phần cho PE Fund', target: 'KKR, Warburg, VinaCapital PE', ev: '80-120M USD', multiple: '8-12x EBITDA', color: '#E040FB' },
                                        { path: 'IPO trên HOSE/HNX', target: 'Niêm yết công khai', ev: '150-200M+ USD', multiple: '15-20x EBITDA', color: '#76FF03' },
                                    ].map((exit, i) => (
                                        <div key={i} className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-xs font-bold" style={{ color: exit.color }}>{exit.path}</span>
                                                <span className="text-xs font-bold text-white">{exit.ev}</span>
                                            </div>
                                            <div className="text-xs text-gray-500">Target: {exit.target} | {exit.multiple}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Comparable companies */}
                            <div>
                                <h5 className="text-sm font-bold text-gray-300 mb-3">Công ty So sánh (EV/EBITDA)</h5>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-xs">
                                        <thead>
                                            <tr className="border-b border-white/10">
                                                <th className="text-left py-1.5 text-gray-400">Công ty</th>
                                                <th className="text-right py-1.5 text-gray-400">EV/EBITDA</th>
                                                <th className="text-right py-1.5 text-gray-400">Ngành</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[
                                                { name: 'Jabil Inc.', multiple: '11,2x', sector: 'EMS/CNC' },
                                                { name: 'Equinix (APAC)', multiple: '22,5x', sector: 'Datacenter' },
                                                { name: 'FPT Corp.', multiple: '18,3x', sector: 'Tech VN' },
                                                { name: 'CMC Corp.', multiple: '14,1x', sector: 'DC/Cloud VN' },
                                                { name: 'Median ngành', multiple: '15x', sector: 'Blended' },
                                            ].map((comp, i) => (
                                                <tr key={i} className={`border-b border-white/5 ${i === 4 ? 'font-bold' : ''}`}>
                                                    <td className="py-1.5 text-gray-300">{comp.name}</td>
                                                    <td className="text-right py-1.5 text-white">{comp.multiple}</td>
                                                    <td className="text-right py-1.5 text-gray-500">{comp.sector}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-3 p-3 rounded-lg bg-cyan-400/5 border border-cyan-400/10 text-center">
                                    <div className="text-xs text-gray-400">Mekong Y15 EBITDA ~9M x 15x =</div>
                                    <div className="text-lg font-black text-cyan-400">~135M USD (conservative EV)</div>
                                </div>
                            </div>
                        </div>
                    </GlassCard>
                </motion.div>
            </div>
        </SectionLayout>
    );
}
