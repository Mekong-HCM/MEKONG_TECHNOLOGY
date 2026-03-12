import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { financials } from '../../data/financials';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, Cell } from 'recharts';
import { SectionLayout } from '../ui/SectionLayout';
import { GlassCard } from '../ui/GlassCard';

export function FinancialOverview() {
    const { ref, isInView } = useInView(0.1);

    const sensitivityData = financials.sensitivity.map(s => ({
        name: s.variable,
        negative: s.base - s.minus20,
        positive: s.plus20 - s.base,
        baseVal: s.base,
    }));

    return (
        <SectionLayout id="financials">
            <div ref={ref}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
                    <h2 className="section-title text-white">Phân tích <span className="gradient-text">Tài chính</span></h2>
                    <p className="section-subtitle">Doanh thu 15 năm dự kiến ~180M USD — NPV(50Y) dương — IRR 14,5% vượt WACC 12%.</p>
                </motion.div>

                {/* Revenue Chart */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-8"
                >
                    <GlassCard className="p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Doanh thu 15 năm — theo Trụ cột (M USD)</h4>
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={financials.revenue15Y} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorIot" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#00E5FF" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#00E5FF" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorCnc" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#E040FB" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#E040FB" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorDc" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#76FF03" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#76FF03" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="year" tick={{ fill: '#999', fontSize: 11 }} axisLine={false} tickLine={false} />
                            <YAxis tick={{ fill: '#999', fontSize: 11 }} axisLine={false} tickLine={false} unit="M" />
                            <Tooltip
                                contentStyle={{ background: '#191d44', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '12px', color: '#fff' }}
                                itemStyle={{ color: '#76FF03' }}
                                labelStyle={{ color: '#ccc' }}
                                formatter={(v: number) => [`${v}M USD`]}
                            />
                            <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px', color: '#fff' }} />
                            <Area type="monotone" dataKey="iot" name="IoT/Robot" stackId="1" stroke="#00E5FF" fill="url(#colorIot)" strokeWidth={2} />
                            <Area type="monotone" dataKey="cnc" name="CNC" stackId="1" stroke="#E040FB" fill="url(#colorCnc)" strokeWidth={2} />
                            <Area type="monotone" dataKey="dc" name="Datacenter" stackId="1" stroke="#76FF03" fill="url(#colorDc)" strokeWidth={2} />
                        </AreaChart>
                    </ResponsiveContainer>
                    </GlassCard>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    {/* 3 Scenarios */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <GlassCard className="p-6 h-full">
                        <h4 className="text-lg font-semibold text-white mb-4">3 Kịch bản Đầu tư</h4>
                        <div className="overflow-x-auto">
                            <table className="w-full text-xs">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="text-left py-2 text-gray-400 font-medium">Chỉ số</th>
                                        {financials.scenarios.map((s, i) => (
                                            <th key={i} className="text-right py-2 text-gray-400 font-medium">{s.name}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-white/5">
                                        <td className="py-2 text-gray-300">DT Lũy kế 15Y</td>
                                        {financials.scenarios.map((s, i) => <td key={i} className="text-right py-2 text-white font-semibold">{s.revenue15Y}M</td>)}
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-2 text-gray-300">NPV (50Y)</td>
                                        {financials.scenarios.map((s, i) => <td key={i} className="text-right py-2 text-white font-semibold">{s.npv50}M</td>)}
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-2 text-gray-300">IRR (50Y)</td>
                                        {financials.scenarios.map((s, i) => <td key={i} className="text-right py-2 text-white font-semibold">{s.irr50}%</td>)}
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-2 text-gray-300">Hoàn vốn</td>
                                        {financials.scenarios.map((s, i) => <td key={i} className="text-right py-2 text-white font-semibold">{s.payback}Y</td>)}
                                    </tr>
                                    <tr>
                                        <td className="py-2 text-gray-300">Xác suất</td>
                                        {financials.scenarios.map((s, i) => <td key={i} className="text-right py-2 font-bold" style={{ color: ['#FF9100', '#76FF03', '#00E5FF'][i] }}>{s.probability}%</td>)}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        </GlassCard>
                    </motion.div>

                    {/* Sensitivity */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <GlassCard className="p-6 h-full">
                        <h4 className="text-lg font-semibold text-white mb-4">Phân tích Nhạy cảm NPV (M USD)</h4>
                        <ResponsiveContainer width="100%" height={200}>
                            <BarChart data={sensitivityData} layout="vertical" margin={{ left: 10 }}>
                                <XAxis type="number" tick={{ fill: '#999', fontSize: 10 }} axisLine={false} tickLine={false} domain={[-8, 8]} />
                                <YAxis type="category" dataKey="name" tick={{ fill: '#ccc', fontSize: 11 }} axisLine={false} tickLine={false} width={70} />
                                <Tooltip
                                    contentStyle={{ background: '#191d44', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '11px', color: '#fff' }}
                                    itemStyle={{ color: '#76FF03' }}
                                    labelStyle={{ color: '#ccc' }}
                                />
                                <Bar dataKey="negative" name="Giảm 20%" stackId="a" fill="#E040FB" radius={[6, 0, 0, 6]} barSize={18} />
                                <Bar dataKey="positive" name="Tăng 20%" stackId="a" fill="#00E5FF" radius={[0, 6, 6, 0]} barSize={18} />
                            </BarChart>
                        </ResponsiveContainer>
                        </GlassCard>
                    </motion.div>
                </div>

                {/* KPI Row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3"
                >
                    {[
                        { label: 'CAPEX Tổng', value: '32,00M', color: '#FF9100' },
                        { label: 'Hòa vốn', value: 'Y7-Y8', color: '#76FF03' },
                        { label: 'DSCR Min', value: '1,42x', color: '#00E5FF' },
                        { label: 'Monte Carlo P(NPV>0)', value: '72%', color: '#E040FB' },
                        { label: 'DT Lũy kế 15Y', value: '~180M', color: '#00E5FF' },
                        { label: 'IRR 50Y', value: '14,5%', color: '#FF9100' },
                    ].map((item, i) => (
                        <GlassCard key={i} className="p-4 text-center">
                            <div className="text-xl md:text-2xl font-extrabold" style={{ color: item.color }}>{item.value}</div>
                            <div className="text-xs text-gray-400 mt-1">{item.label}</div>
                        </GlassCard>
                    ))}
                </motion.div>

                {/* Per-BU Breakeven */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-8"
                >
                    <GlassCard className="p-6">
                        <h4 className="text-lg font-semibold text-white mb-4">Hòa vốn theo Trụ cột (Lãi/Lỗ Lũy kế)</h4>
                        <div className="grid sm:grid-cols-3 gap-4">
                            {[
                                { bu: 'IoT & Robotics', breakeven: 'Y7', capex: '~3,00M', peakLoss: '-0,8M', color: '#00E5FF' },
                                { bu: 'CNC Siêu Chính Xác', breakeven: 'Y8', capex: '~5,00M', peakLoss: '-2,5M', color: '#E040FB' },
                                { bu: 'Datacenter & AI', breakeven: 'Y10-Y11', capex: '~8,00M', peakLoss: '-4,5M', color: '#76FF03' },
                            ].map((item, i) => (
                                <div key={i} className="relative p-4 rounded-xl bg-white/[0.03] border border-white/5 overflow-hidden">
                                    <div className="absolute top-0 left-0 w-1 h-full" style={{ background: item.color }} />
                                    <div className="text-sm font-bold mb-3" style={{ color: item.color }}>{item.bu}</div>
                                    <div className="space-y-1.5 text-xs">
                                        <div className="flex justify-between"><span className="text-gray-400">CAPEX</span><span className="text-white font-semibold">{item.capex} USD</span></div>
                                        <div className="flex justify-between"><span className="text-gray-400">Đỉnh lỗ lũy kế</span><span className="text-red-400 font-semibold">{item.peakLoss}</span></div>
                                        <div className="flex justify-between"><span className="text-gray-400">Hòa vốn</span><span className="font-bold" style={{ color: item.color }}>{item.breakeven}</span></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                </motion.div>
            </div>
        </SectionLayout>
    );
}
