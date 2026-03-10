import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { financials } from '../../data/financials';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Cpu, Cog, Server, Landmark, Users, GraduationCap, Banknote } from 'lucide-react';
import { SectionLayout } from '../ui/SectionLayout';
import { GlassCard } from '../ui/GlassCard';
import { KPICard } from '../ui/KPICard';

const pieData = [
    { name: 'Vốn CSH', value: financials.capex.equity, color: '#00E5FF' },
    { name: 'Vay NH', value: financials.capex.debt, color: '#E040FB' },
];

const kpis = [
    { label: 'Doanh thu Nam Y10', value: financials.kpis.revenueY10, suffix: 'M USD', color: '#00E5FF' },
    { label: 'Doanh thu Nam Y15', value: financials.kpis.revenueY15, suffix: 'M USD', color: '#4dd2ff' },
    { label: 'NPV (50Y, WACC 12%)', value: financials.kpis.npv50, suffix: 'M USD', color: '#76FF03' },
    { label: 'IRR Du an (50Y)', value: financials.kpis.irr50, suffix: '%', color: '#E040FB' },
    { label: 'Equity IRR (Leveraged)', value: 18.5, suffix: '%', color: '#FF9100' },
    { label: 'DSCR Min (YC: >1,3x)', value: financials.kpis.dscrMin, suffix: 'x', color: '#00E5FF' },
];

export function ExecutiveSummary() {
    const { ref, isInView } = useInView(0.2);

    return (
        <SectionLayout id="summary">
            <div ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title text-white">Tóm tắt <span className="gradient-text">Điều hành</span></h2>
                    <p className="section-subtitle">
                        Du an ha tang cong nghe tich hop 47,50M USD — 3 tru cot cong huong — tu chu von 100% trong 10 nam dau.
                    </p>
                </motion.div>

                {/* 3 Pillars */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {[
                        { title: 'IoT & Robotics', desc: 'Gateway MK-200/300, Robot AMR, MekongOS Platform', color: '#00E5FF', Icon: Cpu },
                        { title: 'CNC Sieu Chinh Xac', desc: '28 may DMG MORI 5 truc, AS9100, Aerospace Grade', color: '#E040FB', Icon: Cog },
                        { title: 'Datacenter & AI', desc: 'Tier III, 100 Rack, GPU-as-a-Service, PUE 1,32', color: '#76FF03', Icon: Server },
                    ].map((pillar, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                        >
                            <GlassCard hoverEffect className="p-6 text-center h-full">
                                <div className="flex justify-center mb-3">
                                    <pillar.Icon size={36} style={{ color: pillar.color }} />
                                </div>
                                <h3 className="text-lg font-bold mb-2" style={{ color: pillar.color }}>{pillar.title}</h3>
                                <p className="text-sm text-gray-400">{pillar.desc}</p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>

                {/* KPIs + Pie Chart */}
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4">
                        {kpis.map((kpi, i) => (
                            <KPICard key={i} {...kpi} delay={0.1 * i} />
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <GlassCard className="p-6 h-full">
                        <h4 className="text-sm font-semibold text-gray-300 mb-4 text-center">Cấu trúc Vốn</h4>
                        <ResponsiveContainer width="100%" height={180}>
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    cx="50%" cy="50%"
                                    innerRadius={50} outerRadius={75}
                                    paddingAngle={3}
                                    dataKey="value"
                                    stroke="none"
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={index} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{ background: '#191d44', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '12px' }}
                                    formatter={(value: number) => [`${value}M USD`, '']}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="flex justify-center gap-6 text-xs">
                            {pieData.map((d, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: d.color }} />
                                    <span className="text-gray-400">{d.name} ({d === pieData[0] ? '73.6%' : '26.4%'})</span>
                                </div>
                            ))}
                        </div>
                        </GlassCard>
                    </motion.div>
                </div>

                {/* KCNC Benefits */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-8"
                >
                    <GlassCard className="p-6" accentColor="#76FF03">
                        <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                            <Landmark size={16} className="text-green-400" />
                            Loi ich cho KCNC TP.HCM
                        </h4>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                { Icon: Users, label: '300+ viec lam chat luong', desc: 'Luong 25-45K USD/nam, dao tao tai cho', color: '#00E5FF' },
                                { Icon: GraduationCap, label: 'Chuyen giao cong nghe', desc: 'Hop tac DH Bach Khoa, RMIT, chuyen gia Nhat/Duc', color: '#E040FB' },
                                { Icon: Banknote, label: 'Dong gop thue va phi', desc: 'Phi thue dat + thue TNDN sau uu dai', color: '#76FF03' },
                                { Icon: Cpu, label: 'Chuoi cung ung noi dia', desc: 'Nha cung cap phu tro, dich vu ky thuat tai KCNC', color: '#FF9100' },
                            ].map((b, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <b.Icon size={18} style={{ color: b.color }} className="flex-shrink-0 mt-0.5" />
                                    <div>
                                        <div className="text-xs font-semibold text-white">{b.label}</div>
                                        <div className="text-xs text-gray-400">{b.desc}</div>
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
