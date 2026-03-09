import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { timeline } from '../../data/timeline';
import { SectionLayout } from '../ui/SectionLayout';
import { GlassCard } from '../ui/GlassCard';

export function ImplementationRoadmap() {
    const { ref, isInView } = useInView(0.1);

    return (
        <SectionLayout id="roadmap">
            <div ref={ref}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
                    <h2 className="section-title text-white">Lộ trình <span className="gradient-text">Triển khai</span></h2>
                    <p className="section-subtitle">5 giai đoạn — 15 năm — từ pháp lý đến Full 3 BU Steady-state.</p>
                </motion.div>

                {/* Phase Cards */}
                <div className="relative mb-16">
                    {/* Connector line */}
                    <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/50 via-pink-500/50 to-green-500/50" />

                    <div className="grid md:grid-cols-5 gap-4">
                        {timeline.phases.map((phase, i) => (
                            <motion.div
                                key={phase.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.1 * i }}
                                className="relative"
                            >
                                {/* Dot */}
                                <div className="hidden md:flex absolute top-10 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-2 z-10 items-center justify-center"
                                    style={{ borderColor: phase.color, background: '#0a0e2a' }}>
                                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: phase.color }} />
                                </div>

                                <GlassCard hoverEffect className="p-4 md:mt-16">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xs font-black px-2 py-0.5 rounded" style={{ background: `${phase.color}20`, color: phase.color }}>
                                            {phase.id}
                                        </span>
                                        <span className="text-sm font-bold" style={{ color: phase.color }}>{phase.budget}</span>
                                    </div>
                                    <h4 className="text-sm font-bold text-white mb-1">{phase.name}</h4>
                                    <p className="text-xs text-gray-500 mb-3">{phase.period}</p>
                                    <ul className="space-y-1">
                                        {phase.items.map((item, j) => (
                                            <li key={j} className="text-xs text-gray-300 flex items-start gap-1.5">
                                                <span style={{ color: phase.color }}>•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Milestones */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <GlassCard className="p-6">
                    <h4 className="text-lg font-semibold text-white mb-6">Các Mốc Quan trọng</h4>
                    <div className="flex flex-wrap gap-3">
                        {timeline.milestones.map((m, i) => (
                            <motion.div
                                key={i}
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10"
                                whileHover={{ scale: 1.05, borderColor: 'rgba(0,229,255,0.3)' }}
                            >
                                <span className="neon-text font-bold text-sm">{m.year}</span>
                                <span className="text-xs text-gray-300">{m.event}</span>
                            </motion.div>
                        ))}
                    </div>
                    </GlassCard>
                </motion.div>
            </div>
        </SectionLayout>
    );
}
