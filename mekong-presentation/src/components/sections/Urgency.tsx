import { motion } from 'framer-motion';
import { AlertTriangle, TrendingUp, Factory, Cpu } from 'lucide-react';
import { SectionLayout } from '../ui/SectionLayout';
import { GlassCard } from '../ui/GlassCard';
import { useInView } from '../../hooks/useInView';
import { marketGaps, urgencyKPIs, targetIndustries } from '../../data/operations';

export function Urgency() {
    const { ref, isInView } = useInView(0.15);

    return (
        <SectionLayout id="urgency">
            <div ref={ref}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
                    <h2 className="section-title text-white">Tính cấp thiết <span className="gradient-text">& Khoảng trống thị trường</span></h2>
                    <p className="section-subtitle">83.035 DNNVV cần IoT — Việt Nam chưa có nhà máy CNC đạt AS9100</p>
                </motion.div>

                {/* KPIs */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.5 }}
                    className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6"
                >
                    {[
                        { icon: Factory, label: 'DNNVV can IoT', value: urgencyKPIs.smeCount, color: 'text-neon-cyan' },
                        { icon: TrendingUp, label: 'FDI nhap khau CNC', value: urgencyKPIs.fdiImport, color: 'text-neon-magenta' },
                        { icon: Cpu, label: 'CNC VN 2024', value: urgencyKPIs.cncMarket2024, color: 'text-green-400' },
                        { icon: TrendingUp, label: 'CNC VN 2030', value: urgencyKPIs.cncMarket2030, color: 'text-yellow-400' },
                        { icon: TrendingUp, label: 'CAGR', value: urgencyKPIs.cncCAGR, color: 'text-blue-400' },
                        { icon: Factory, label: 'Mekong target', value: urgencyKPIs.mekongTarget, color: 'text-purple-400' },
                    ].map((kpi, i) => (
                        <GlassCard key={i} className="p-3 text-center">
                            <kpi.icon size={16} className={`mx-auto mb-1 ${kpi.color}`} />
                            <div className={`text-lg font-extrabold ${kpi.color}`}>{kpi.value}</div>
                            <div className="text-[10px] text-gray-400">{kpi.label}</div>
                        </GlassCard>
                    ))}
                </motion.div>

                {/* Market Gap Table */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.5 }}>
                    <GlassCard className="p-4 mb-4 overflow-x-auto">
                        <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                            <AlertTriangle size={14} className="text-yellow-400" /> Khoảng trống thị trường miền Nam VN
                        </h3>
                        <table className="w-full text-xs">
                            <thead><tr className="text-gray-400 border-b border-white/10">
                                <th className="text-left py-1.5">Tiêu chí</th>
                                <th className="text-center py-1.5">Cung</th>
                                <th className="text-center py-1.5">Cầu</th>
                                <th className="text-center py-1.5">Gap</th>
                                <th className="text-center py-1.5">Trạng thái</th>
                            </tr></thead>
                            <tbody>
                                {marketGaps.map((g, i) => (
                                    <tr key={i} className="border-b border-white/5">
                                        <td className="py-1.5 text-gray-300">{g.criteria}</td>
                                        <td className="text-center text-gray-400">{g.supply}</td>
                                        <td className="text-center text-gray-400">{g.demand}</td>
                                        <td className="text-center font-bold text-neon-cyan">{g.gap}</td>
                                        <td className="text-center">
                                            <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${g.status === 'Chưa có' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                                                {g.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </GlassCard>
                </motion.div>

                {/* Target Industries */}
                <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.3, duration: 0.5 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-3"
                >
                    {targetIndustries.map((ind, i) => (
                        <GlassCard key={i} className="p-3">
                            <div className="text-xs font-bold text-white mb-1">{ind.name}</div>
                            <div className="text-[10px] text-gray-400 mb-1">{ind.customers}</div>
                            <div className="text-sm font-extrabold text-neon-magenta">{ind.spend}</div>
                        </GlassCard>
                    ))}
                </motion.div>
            </div>
        </SectionLayout>
    );
}
