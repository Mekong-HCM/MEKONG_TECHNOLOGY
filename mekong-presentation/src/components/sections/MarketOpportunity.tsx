import { motion } from 'framer-motion';
import { useInView, useCountUp } from '../../hooks/useInView';
import { market } from '../../data/market';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell, ScatterChart, Scatter, ZAxis, CartesianGrid } from 'recharts';
import { SectionLayout } from '../ui/SectionLayout';
import { GlassCard } from '../ui/GlassCard';

const colors = ['#00E5FF', '#E040FB', '#76FF03', '#FF9100'];

function CounterCard({ value, label, unit, delay }: { value: number; label: string; unit: string; delay: number }) {
    const { ref, isInView } = useInView(0.3);
    const count = useCountUp(value, 2500, isInView);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay }}
        >
            <GlassCard hoverEffect className="p-6 text-center h-full">
            <div className="stat-value gradient-text">{count}</div>
            <div className="text-sm text-gray-300 mt-1">{unit}</div>
            <div className="stat-label mt-2">{label}</div>
            </GlassCard>
        </motion.div>
    );
}

export function MarketOpportunity() {
    const { ref, isInView } = useInView(0.15);

    const vnData = market.vietnam.map((item, i) => ({
        name: item.segment.replace(' VN', ''),
        value: item.value,
        growth: item.growth,
        fill: colors[i],
    }));

    return (
        <SectionLayout id="market">
            <div ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title text-white">Cơ hội <span className="gradient-text">Thị trường</span></h2>
                    <p className="section-subtitle">Thị trường toàn cầu hội tụ — Việt Nam đang ở vị trí chiến lược trong chuỗi cung ứng công nghệ cao.</p>
                </motion.div>

                {/* Global Market Counters */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {market.global.map((item, i) => (
                        <CounterCard key={i} value={item.value2028} label={`${item.segment} (2028)`} unit={item.unit} delay={i * 0.1} />
                    ))}
                </div>

                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    {/* Vietnam Market Bar Chart */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <GlassCard className="p-6 h-full">
                        <h4 className="text-lg font-semibold text-white mb-6">Thi truong Viet Nam 2028</h4>
                        <ResponsiveContainer width="100%" height={250}>
                            <BarChart data={vnData} layout="vertical" margin={{ left: 10 }}>
                                <XAxis type="number" tick={{ fill: '#999', fontSize: 11 }} axisLine={false} tickLine={false} unit="B" />
                                <YAxis type="category" dataKey="name" tick={{ fill: '#ccc', fontSize: 12 }} axisLine={false} tickLine={false} width={80} />
                                <Tooltip
                                    contentStyle={{ background: '#191d44', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '12px' }}
                                    formatter={(v: number) => [`${v} B USD`]}
                                    cursor={{ fill: 'rgba(255,255,255,0.03)' }}
                                />
                                <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={28}>
                                    {vnData.map((entry, index) => (
                                        <Cell key={index} fill={entry.fill} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                        </GlassCard>
                    </motion.div>

                    {/* SWOT Preview */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <GlassCard className="p-6 h-full">
                        <h4 className="text-lg font-semibold text-white mb-6">Phan tich SWOT</h4>
                        <div className="grid grid-cols-2 gap-3">
                            {[
                                { title: 'Strengths', items: market.swot.strengths.slice(0, 3), color: '#76FF03', bg: 'rgba(118,255,3,0.08)' },
                                { title: 'Weaknesses', items: market.swot.weaknesses.slice(0, 3), color: '#FF9100', bg: 'rgba(255,145,0,0.08)' },
                                { title: 'Opportunities', items: market.swot.opportunities.slice(0, 3), color: '#00E5FF', bg: 'rgba(0,229,255,0.08)' },
                                { title: 'Threats', items: market.swot.threats.slice(0, 3), color: '#E040FB', bg: 'rgba(224,64,251,0.08)' },
                            ].map((quad, i) => (
                                <div key={i} className="rounded-xl p-3" style={{ background: quad.bg, border: `1px solid ${quad.color}20` }}>
                                    <h5 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: quad.color }}>{quad.title}</h5>
                                    <ul className="space-y-1">
                                        {quad.items.map((item, j) => (
                                            <li key={j} className="text-xs text-gray-300 leading-relaxed">• {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        </GlassCard>
                    </motion.div>
                </div>

                {/* Competitive Positioning Scatter */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <GlassCard className="p-6">
                        <h4 className="text-lg font-semibold text-white mb-2">Dinh vi Canh tranh — Do phuc tap vs. Quy mo</h4>
                        <p className="text-xs text-gray-400 mb-4">Mekong chiem vi tri &quot;High Complexity, Niche Volume&quot; — it canh tranh truc tiep</p>
                        <ResponsiveContainer width="100%" height={280}>
                            <ScatterChart margin={{ top: 10, right: 20, bottom: 20, left: 10 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                                <XAxis type="number" dataKey="volume" name="Quy mo san xuat" domain={[0, 10]} tick={{ fill: '#999', fontSize: 10 }} axisLine={false} tickLine={false} label={{ value: 'Quy mo san xuat', position: 'bottom', fill: '#666', fontSize: 11 }} />
                                <YAxis type="number" dataKey="complexity" name="Do phuc tap" domain={[0, 10]} tick={{ fill: '#999', fontSize: 10 }} axisLine={false} tickLine={false} label={{ value: 'Do phuc tap', angle: -90, position: 'insideLeft', fill: '#666', fontSize: 11 }} />
                                <ZAxis range={[120, 120]} />
                                <Tooltip
                                    contentStyle={{ background: '#191d44', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '11px' }}
                                    formatter={(value: number, name: string) => [value, name]}
                                    labelFormatter={() => ''}
                                />
                                <Scatter name="Doi thu" data={market.positioning.competitors} fill="#666">
                                    {market.positioning.competitors.map((_, i) => (
                                        <Cell key={i} fill={['#888', '#888', '#aaa', '#aaa', '#777'][i]} />
                                    ))}
                                </Scatter>
                                <Scatter name="Mekong" data={[market.positioning.mekong]} fill="#00E5FF">
                                    <Cell fill="#00E5FF" />
                                </Scatter>
                            </ScatterChart>
                        </ResponsiveContainer>
                        <div className="flex flex-wrap gap-4 justify-center mt-2 text-xs">
                            <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-[#00E5FF]" /><span className="text-gray-300">Mekong Tech</span></div>
                            {market.positioning.competitors.map((c, i) => (
                                <div key={i} className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-gray-500" /><span className="text-gray-500">{c.label}</span></div>
                            ))}
                        </div>
                    </GlassCard>
                </motion.div>
            </div>
        </SectionLayout>
    );
}
