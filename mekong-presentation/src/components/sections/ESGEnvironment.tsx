import { motion } from 'framer-motion';
import { Leaf, Sun, Droplets, Wind, Recycle } from 'lucide-react';
import { SectionLayout } from '../ui/SectionLayout';
import { GlassCard } from '../ui/GlassCard';
import { useInView } from '../../hooks/useInView';
import { esgMetrics } from '../../data/riskEsg';

export function ESGEnvironment() {
    const { ref, isInView } = useInView(0.15);

    const highlights = [
        { icon: Sun, label: 'Solar', value: esgMetrics.solar.capacity, sub: esgMetrics.solar.annual, color: '#f59e0b' },
        { icon: Droplets, label: 'ZLD', value: esgMetrics.zld.status, sub: `Xa thai: ${esgMetrics.zld.discharge}`, color: '#3b82f6' },
        { icon: Wind, label: 'PUE', value: esgMetrics.pue.design, sub: `vs VN avg ${esgMetrics.pue.vnAvg}`, color: '#06b6d4' },
        { icon: Recycle, label: 'Waste Recycle', value: esgMetrics.waste.recycleTarget, sub: `CNC chips ${esgMetrics.waste.cncChips}`, color: '#22c55e' },
        { icon: Leaf, label: 'GHG', value: esgMetrics.ghg.reduction, sub: esgMetrics.ghg.committed, color: '#76FF03' },
        { icon: Droplets, label: 'Nuoc tai su dung', value: esgMetrics.water.recycleTarget, sub: 'RO condensate + cooling', color: '#8b5cf6' },
    ];

    return (
        <SectionLayout id="esg-env">
            <div ref={ref}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
                    <h2 className="section-title text-white">ESG & <span className="gradient-text">Moi truong</span></h2>
                    <p className="section-subtitle">ZLD — Solar 2 MWp — GHG {esgMetrics.ghg.reduction} — Lo trinh Net-Zero</p>
                </motion.div>

                {/* KPI Cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-5">
                    {highlights.map((h, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}>
                            <GlassCard className="p-3 text-center" accentColor={h.color}>
                                <h.icon size={20} className="mx-auto mb-1.5" style={{ color: h.color }} />
                                <div className="text-lg font-extrabold" style={{ color: h.color }}>{h.value}</div>
                                <div className="text-[10px] text-white font-medium">{h.label}</div>
                                <div className="text-[9px] text-gray-400 mt-0.5">{h.sub}</div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>

                {/* GHG Roadmap */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.35, duration: 0.5 }}>
                    <GlassCard className="p-4">
                        <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                            <Leaf size={14} className="text-green-400" /> Lo trinh giam phat thai GHG
                        </h3>
                        <div className="flex items-center justify-between gap-2">
                            {esgMetrics.ghgRoadmap.map((step, i) => (
                                <div key={i} className="flex-1 text-center relative">
                                    <div className="w-10 h-10 rounded-full mx-auto flex items-center justify-center text-xs font-bold"
                                        style={{
                                            background: step.target === 'Net-Zero' ? 'linear-gradient(135deg, #22c55e, #06b6d4)' : 'rgba(34,197,94,0.15)',
                                            border: '1px solid rgba(34,197,94,0.3)',
                                            color: step.target === 'Net-Zero' ? '#fff' : '#22c55e',
                                        }}
                                    >
                                        {step.target}
                                    </div>
                                    <div className="text-[9px] text-gray-400 mt-1">{step.phase}</div>
                                    {i < esgMetrics.ghgRoadmap.length - 1 && (
                                        <div className="absolute top-5 left-[60%] w-[80%] h-px bg-green-500/30" />
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="mt-3 grid grid-cols-2 gap-2 text-[10px]">
                            <div className="p-2 rounded bg-white/5">
                                <span className="text-gray-400">Baseline: </span>
                                <span className="text-white font-bold">{esgMetrics.ghg.baseline}</span>
                            </div>
                            <div className="p-2 rounded bg-white/5">
                                <span className="text-gray-400">Target: </span>
                                <span className="text-green-400 font-bold">{esgMetrics.ghg.target}</span>
                            </div>
                        </div>
                    </GlassCard>
                </motion.div>
            </div>
        </SectionLayout>
    );
}
