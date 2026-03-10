import { motion } from 'framer-motion';
import { Microscope, Users, FlaskConical } from 'lucide-react';
import { SectionLayout } from '../ui/SectionLayout';
import { GlassCard } from '../ui/GlassCard';
import { useInView } from '../../hooks/useInView';
import { rdLabs } from '../../data/rdData';

export function RDLabs() {
    const { ref, isInView } = useInView(0.15);
    const totalArea = '600 m2';
    const totalBudget = '900K USD';

    return (
        <SectionLayout id="rd-labs">
            <div ref={ref}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-widest border border-yellow-400/30 text-yellow-400/80 bg-yellow-400/5 mb-4">
                        R&D 2/3
                    </span>
                    <h2 className="section-title text-white">5 Phòng Lab <span className="gradient-text">R&D Chuyên biệt</span></h2>
                    <p className="section-subtitle">Tổng diện tích {totalArea} — Tổng đầu tư {totalBudget} — 26 kỹ sư nghiên cứu</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {rdLabs.map((lab, i) => (
                        <motion.div
                            key={lab.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                        >
                            <GlassCard hoverEffect className="p-5 h-full" accentColor={lab.color}>
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lab.color }} />
                                    <h4 className="text-sm font-bold text-white">{lab.name}</h4>
                                </div>
                                <div className="grid grid-cols-3 gap-2 mb-3">
                                    <div className="text-center">
                                        <FlaskConical size={12} className="text-gray-500 mx-auto mb-0.5" />
                                        <div className="text-[10px] text-gray-400">{lab.area}</div>
                                    </div>
                                    <div className="text-center">
                                        <Microscope size={12} className="text-gray-500 mx-auto mb-0.5" />
                                        <div className="text-[10px] text-gray-400">{lab.budget}</div>
                                    </div>
                                    <div className="text-center">
                                        <Users size={12} className="text-gray-500 mx-auto mb-0.5" />
                                        <div className="text-[10px] text-gray-400">{lab.team} KS</div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-1">
                                    {lab.focus.map((f, j) => (
                                        <span key={j} className="px-1.5 py-0.5 rounded text-[9px] text-gray-300 border border-white/5" style={{ background: `${lab.color}08` }}>
                                            {f}
                                        </span>
                                    ))}
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}

                    {/* Summary card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <GlassCard className="p-5 h-full flex flex-col justify-center items-center text-center">
                            <div className="text-4xl font-extrabold gradient-text mb-1">26</div>
                            <div className="text-xs text-gray-400 mb-3">Kỹ sư R&D</div>
                            <div className="text-2xl font-extrabold text-yellow-400 mb-1">5</div>
                            <div className="text-xs text-gray-400 mb-3">Phòng lab chuyên biệt</div>
                            <div className="text-lg font-bold text-green-400">20%</div>
                            <div className="text-[10px] text-gray-400">tổng nhân sự là R&D</div>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </SectionLayout>
    );
}
