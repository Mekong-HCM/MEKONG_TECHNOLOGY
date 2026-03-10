import { motion } from 'framer-motion';
import { AlertTriangle, BarChart3, TrendingUp, ShieldAlert } from 'lucide-react';
import { SectionLayout } from '../ui/SectionLayout';
import { GlassCard } from '../ui/GlassCard';
import { useInView } from '../../hooks/useInView';
import { monteCarlo, monteCarloTable, topRisks, scenarioAnalysis, weightedScenario } from '../../data/riskEsg';

export function RiskAnalysis() {
    const { ref, isInView } = useInView(0.15);

    return (
        <SectionLayout id="risk">
            <div ref={ref}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
                    <h2 className="section-title text-white">Phan tich <span className="gradient-text">Rui ro & Monte Carlo</span></h2>
                    <p className="section-subtitle">P(NPV&gt;0) = {monteCarlo.pNPVPositive} — {monteCarlo.iterations} mo phong — 4 kich ban</p>
                </motion.div>

                {/* Monte Carlo KPIs */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.5 }}
                    className="grid grid-cols-3 gap-3 mb-4"
                >
                    {[
                        { label: 'P(NPV>0)', value: monteCarlo.pNPVPositive, color: 'text-green-400' },
                        { label: 'P(IRR>WACC)', value: monteCarlo.pIRRAboveWACC, color: 'text-neon-cyan' },
                        { label: 'P(Total Value>0)', value: monteCarlo.pTotalValuePositive, color: 'text-neon-magenta' },
                    ].map((kpi, i) => (
                        <GlassCard key={i} className="p-3 text-center">
                            <div className={`text-2xl font-extrabold ${kpi.color}`}>{kpi.value}</div>
                            <div className="text-[9px] text-gray-400 mt-1">{kpi.label}</div>
                        </GlassCard>
                    ))}
                </motion.div>

                {/* Percentile Table */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.15, duration: 0.5 }}>
                    <GlassCard className="p-3 mb-4 overflow-x-auto">
                        <h3 className="text-xs font-bold text-white mb-2 flex items-center gap-2"><BarChart3 size={12} className="text-neon-cyan" /> Phan vi Monte Carlo</h3>
                        <table className="w-full text-[10px]">
                            <thead><tr className="text-gray-400 border-b border-white/10">
                                <th className="text-left py-1">Chi so</th>
                                <th className="text-center py-1 text-red-400">P10</th>
                                <th className="text-center py-1 text-yellow-400">P25</th>
                                <th className="text-center py-1 text-green-400">P50</th>
                                <th className="text-center py-1 text-neon-cyan">P75</th>
                                <th className="text-center py-1 text-neon-magenta">P90</th>
                            </tr></thead>
                            <tbody>
                                {monteCarloTable.map((row, i) => (
                                    <tr key={i} className="border-b border-white/5">
                                        <td className="py-1.5 text-gray-300 font-medium">{row.metric}</td>
                                        <td className="text-center text-red-400">{row.p10}</td>
                                        <td className="text-center text-yellow-400">{row.p25}</td>
                                        <td className="text-center text-green-400 font-bold">{row.p50}</td>
                                        <td className="text-center text-neon-cyan">{row.p75}</td>
                                        <td className="text-center text-neon-magenta">{row.p90}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </GlassCard>
                </motion.div>

                {/* Scenario Analysis */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.5 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4"
                >
                    {scenarioAnalysis.map((s, i) => (
                        <GlassCard key={i} className="p-3 text-center" accentColor={s.color}>
                            <div className="text-[10px] font-bold" style={{ color: s.color }}>{s.scenario}</div>
                            <div className="text-[9px] text-gray-400 mb-1">Xac suat: {s.prob}</div>
                            <div className="space-y-1 text-[9px]">
                                <div><span className="text-gray-400">Rev 15Y:</span> <span className="text-white font-bold">{s.revenue15Y}M</span></div>
                                <div><span className="text-gray-400">NPV:</span> <span className="text-white font-bold">{s.npv50Y}M</span></div>
                                <div><span className="text-gray-400">IRR:</span> <span className="text-white font-bold">{s.irr50Y}</span></div>
                            </div>
                        </GlassCard>
                    ))}
                </motion.div>

                {/* Top Risks */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3, duration: 0.5 }}>
                    <GlassCard className="p-3 overflow-x-auto">
                        <h3 className="text-xs font-bold text-white mb-2 flex items-center gap-2"><ShieldAlert size={12} className="text-red-400" /> Top 5 rui ro</h3>
                        <table className="w-full text-[10px]">
                            <thead><tr className="text-gray-400 border-b border-white/10">
                                <th className="text-left py-1">ID</th>
                                <th className="text-left py-1">Rui ro</th>
                                <th className="text-center py-1">Diem</th>
                                <th className="text-left py-1">Giam thieu</th>
                            </tr></thead>
                            <tbody>
                                {topRisks.slice(0, 5).map((r, i) => (
                                    <tr key={i} className="border-b border-white/5">
                                        <td className="py-1 text-neon-cyan font-mono">{r.id}</td>
                                        <td className="py-1 text-gray-300">{r.risk}</td>
                                        <td className="text-center">
                                            <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${r.score >= 16 ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                                                {r.score}
                                            </span>
                                        </td>
                                        <td className="py-1 text-gray-400">{r.mitigation}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </GlassCard>
                </motion.div>
            </div>
        </SectionLayout>
    );
}
