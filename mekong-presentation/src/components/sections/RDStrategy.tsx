import { motion } from 'framer-motion';
import { Beaker, TrendingUp, Target, DollarSign } from 'lucide-react';
import { SectionLayout } from '../ui/SectionLayout';
import { GlassCard } from '../ui/GlassCard';
import { useInView } from '../../hooks/useInView';
import { rdBudget, rdTeam, trlRoadmap } from '../../data/rdData';

export function RDStrategy() {
    const { ref, isInView } = useInView(0.15);

    return (
        <SectionLayout id="rd-strategy">
            <div ref={ref}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-widest border border-yellow-400/30 text-yellow-400/80 bg-yellow-400/5 mb-4">
                        R&D 1/3
                    </span>
                    <h2 className="section-title text-white">Chiến lược <span className="gradient-text">R&D & Ngân sách</span></h2>
                    <p className="section-subtitle">Ngân sách R&D ~12,50M USD / 10 năm — 26 kỹ sư — 5 phòng lab — TRL 7-9</p>
                </motion.div>

                {/* KPI cards */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.5 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6"
                >
                    {[
                        { icon: DollarSign, label: 'Budget 10Y', value: rdBudget.total10Y, color: 'text-neon-cyan' },
                        { icon: Beaker, label: 'Đội ngũ R&D', value: `${rdTeam.totalEngineers} KS (${rdTeam.pctOfStaff})`, color: 'text-neon-magenta' },
                        { icon: Target, label: '% Doanh thu', value: rdBudget.pctRevenue, color: 'text-green-400' },
                        { icon: TrendingUp, label: 'TRL Target', value: rdTeam.trlTarget, color: 'text-yellow-400' },
                    ].map((kpi, i) => (
                        <GlassCard key={i} className="p-4 text-center">
                            <kpi.icon size={20} className={`${kpi.color} mx-auto mb-2`} />
                            <div className={`text-xl font-extrabold ${kpi.color}`}>{kpi.value}</div>
                            <div className="text-[10px] text-gray-400 mt-1">{kpi.label}</div>
                        </GlassCard>
                    ))}
                </motion.div>

                {/* TRL Roadmap */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.5 }}>
                    <GlassCard className="p-5">
                        <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                            <TrendingUp size={16} className="text-neon-cyan" />
                            Lộ trình Trưởng thành Công nghệ (TRL)
                        </h4>
                        <div className="space-y-4">
                            {trlRoadmap.map((phase, i) => (
                                <div key={i} className="flex gap-4">
                                    {/* Timeline dot */}
                                    <div className="flex flex-col items-center">
                                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: phase.color, boxShadow: `0 0 8px ${phase.color}60` }} />
                                        {i < trlRoadmap.length - 1 && <div className="w-px flex-1 bg-white/10 mt-1" />}
                                    </div>
                                    <div className="flex-1 pb-2">
                                        <div className="flex items-baseline gap-2 mb-1">
                                            <span className="text-sm font-bold" style={{ color: phase.color }}>{phase.phase}</span>
                                            <span className="text-[10px] text-gray-500">{phase.timeline}</span>
                                        </div>
                                        <div className="flex flex-wrap gap-1.5">
                                            {phase.milestones.map((m, j) => (
                                                <span key={j} className="px-2 py-0.5 rounded text-[10px] bg-white/5 text-gray-300 border border-white/5">
                                                    {m}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                </motion.div>

                {/* Methodology */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3, duration: 0.5 }}
                    className="mt-4 flex gap-4 text-[10px] text-gray-500"
                >
                    <span>Methodology: {rdTeam.methodology}</span>
                    <span>Cam kết: {rdBudget.minCommitment}</span>
                    <span>Trình độ: {rdTeam.qualifications}</span>
                </motion.div>
            </div>
        </SectionLayout>
    );
}
