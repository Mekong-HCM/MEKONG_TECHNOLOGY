import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { financials } from '../../data/financials';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from 'recharts';
import { Check } from 'lucide-react';
import { SectionLayout } from '../ui/SectionLayout';
import { GlassCard } from '../ui/GlassCard';

const colors = ['#00E5FF', '#4dd2ff', '#E040FB', '#76FF03', '#FF9100', '#00bfff', '#E040FB'];

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
                                    contentStyle={{ background: '#191d44', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '11px' }}
                                    formatter={(v: number) => [`${v}M USD`]}
                                />
                                <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={32}>
                                    {financials.strategicBreakdown.map((_, i) => (
                                        <Cell key={i} fill={colors[i]} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                        </GlassCard>
                    </motion.div>

                    {/* Summary Cards */}
                    <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="space-y-4">
                        <GlassCard className="p-6 text-center">
                            <div className="text-4xl font-black gradient-text mb-1">~{total.toFixed(1)}M</div>
                            <div className="text-sm text-gray-400">Tổng Giá trị Chiến lược (USD)</div>
                            <div className="text-xs text-gray-500 mt-2">Strategic Value / CAPEX = {((total / 47.5) * 100).toFixed(1)}%</div>
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
            </div>
        </SectionLayout>
    );
}
