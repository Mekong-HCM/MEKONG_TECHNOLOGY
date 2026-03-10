import { motion } from 'framer-motion';
import { Users, DollarSign, GraduationCap, Briefcase } from 'lucide-react';
import { SectionLayout } from '../ui/SectionLayout';
import { GlassCard } from '../ui/GlassCard';
import { useInView } from '../../hooks/useInView';
import { jobCreation, socioKPIs, trainingPrograms, csrBudget } from '../../data/riskEsg';

export function SocioEconomic() {
    const { ref, isInView } = useInView(0.15);

    return (
        <SectionLayout id="socio-economic">
            <div ref={ref}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
                    <h2 className="section-title text-white">Tac dong <span className="gradient-text">Kinh te — Xa hoi</span></h2>
                    <p className="section-subtitle">300 viec lam truc tiep — B/C Ratio {socioKPIs.bcRatio} — Dong gop 10Y: {socioKPIs.totalSocioEcon10Y}</p>
                </motion.div>

                {/* KPI Row */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.5 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5"
                >
                    {[
                        { icon: Users, label: 'Viec lam truc tiep', value: socioKPIs.directJobs15Y, sub: socioKPIs.avgSalary, color: '#00E5FF' },
                        { icon: Users, label: 'Tong viec lam', value: socioKPIs.totalJobs, sub: socioKPIs.indirectJobs, color: '#E040FB' },
                        { icon: DollarSign, label: 'B/C Ratio', value: socioKPIs.bcRatio, sub: `Loi ich: ${socioKPIs.totalBenefits10Y}`, color: '#76FF03' },
                        { icon: DollarSign, label: 'Thue nop 10Y', value: socioKPIs.taxRevenue10Y, sub: `VA: ${socioKPIs.valueAdded10Y}`, color: '#f59e0b' },
                    ].map((kpi, i) => (
                        <GlassCard key={i} className="p-3 text-center" accentColor={kpi.color}>
                            <kpi.icon size={18} className="mx-auto mb-1" style={{ color: kpi.color }} />
                            <div className="text-xl font-extrabold" style={{ color: kpi.color }}>{kpi.value}</div>
                            <div className="text-[10px] text-white font-medium">{kpi.label}</div>
                            <div className="text-[9px] text-gray-400 mt-0.5">{kpi.sub}</div>
                        </GlassCard>
                    ))}
                </motion.div>

                <div className="grid md:grid-cols-2 gap-4">
                    {/* Job Creation Table */}
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2, duration: 0.5 }}>
                        <GlassCard className="p-3 h-full overflow-x-auto">
                            <h3 className="text-xs font-bold text-white mb-2 flex items-center gap-2">
                                <Briefcase size={12} className="text-neon-cyan" /> Tao viec lam theo giai doan
                            </h3>
                            <table className="w-full text-[10px]">
                                <thead><tr className="text-gray-400 border-b border-white/10">
                                    <th className="text-left py-1">Giai doan</th>
                                    <th className="text-center py-1">IoT</th>
                                    <th className="text-center py-1">CNC</th>
                                    <th className="text-center py-1">DC</th>
                                    <th className="text-right py-1 text-neon-cyan font-bold">Tong</th>
                                </tr></thead>
                                <tbody>
                                    {jobCreation.map((j, i) => (
                                        <tr key={i} className="border-b border-white/5">
                                            <td className="py-1 text-gray-300 font-medium">{j.phase}</td>
                                            <td className="text-center text-gray-400">{j.iot}</td>
                                            <td className="text-center text-gray-400">{j.cnc}</td>
                                            <td className="text-center text-gray-400">{j.dc}</td>
                                            <td className="text-right text-neon-cyan font-bold">{j.total}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </GlassCard>
                    </motion.div>

                    {/* Training Programs */}
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.25, duration: 0.5 }}>
                        <GlassCard className="p-3 h-full">
                            <h3 className="text-xs font-bold text-white mb-2 flex items-center gap-2">
                                <GraduationCap size={12} className="text-yellow-400" /> Dao tao & Phat trien nhan luc
                            </h3>
                            <div className="space-y-1.5">
                                {trainingPrograms.map((t, i) => (
                                    <div key={i} className="flex items-center justify-between p-1.5 rounded bg-white/5">
                                        <div className="text-[10px] text-gray-300">{t.program}</div>
                                        <div className="text-[10px] font-bold text-neon-magenta">{t.value}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-3 p-2 rounded bg-green-500/10 border border-green-500/20">
                                <div className="text-[9px] text-gray-400">Ngan sach CSR hang nam</div>
                                <div className="text-sm font-bold text-green-400">{csrBudget}</div>
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </SectionLayout>
    );
}
