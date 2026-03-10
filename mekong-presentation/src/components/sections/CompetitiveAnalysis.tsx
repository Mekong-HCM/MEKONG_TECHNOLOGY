import { motion } from 'framer-motion';
import { Shield, Lock, Swords } from 'lucide-react';
import { SectionLayout } from '../ui/SectionLayout';
import { GlassCard } from '../ui/GlassCard';
import { useInView } from '../../hooks/useInView';
import { competitors, mekongAdvantages, moatLayers, moatSummary } from '../../data/competitive';

export function CompetitiveAnalysis() {
    const { ref, isInView } = useInView(0.15);

    return (
        <SectionLayout id="competitive">
            <div ref={ref}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
                    <h2 className="section-title text-white">Phan tich <span className="gradient-text">Canh tranh</span></h2>
                    <p className="section-subtitle">Rao can gia nhap ben vung (MOAT) — Doi thu can ≥100M USD va 5 nam de sao chep</p>
                </motion.div>

                {/* Competitor table */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.5 }}>
                    <GlassCard className="p-4 mb-6 overflow-x-auto">
                        <div className="flex items-center gap-2 mb-3">
                            <Swords size={16} className="text-neon-magenta" />
                            <h4 className="text-sm font-bold text-white">So sanh doi thu</h4>
                        </div>
                        <table className="w-full text-xs">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="text-left py-2 px-2 text-gray-400">Doi thu</th>
                                    <th className="text-right py-2 px-2 text-gray-400">IoT</th>
                                    <th className="text-right py-2 px-2 text-gray-400">Robot</th>
                                    <th className="text-left py-2 px-2 text-gray-400">Diem manh</th>
                                    <th className="text-left py-2 px-2 text-gray-400">Diem yeu</th>
                                </tr>
                            </thead>
                            <tbody>
                                {competitors.map((c, i) => (
                                    <tr key={i} className="border-b border-white/5">
                                        <td className="py-2 px-2 font-medium text-white">{c.name}</td>
                                        <td className="py-2 px-2 text-right text-gray-300">{c.iotShare}</td>
                                        <td className="py-2 px-2 text-right text-gray-300">{c.robotShare}</td>
                                        <td className="py-2 px-2 text-gray-400">{c.strength}</td>
                                        <td className="py-2 px-2 text-red-400/70">{c.weakness}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </GlassCard>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-4">
                    {/* Mekong advantages */}
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2, duration: 0.5 }}>
                        <GlassCard className="p-5 h-full">
                            <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                                <Shield size={16} className="text-neon-cyan" /> Loi the Mekong
                            </h4>
                            <div className="space-y-3">
                                {mekongAdvantages.map((adv, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="text-right w-24">
                                            <div className="text-sm font-bold text-neon-cyan">{adv.value}</div>
                                        </div>
                                        <div className="w-px h-8 bg-white/10" />
                                        <div>
                                            <div className="text-xs font-medium text-white">{adv.metric}</div>
                                            <div className="text-[10px] text-gray-500">{adv.description}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                    </motion.div>

                    {/* MOAT */}
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.25, duration: 0.5 }}>
                        <GlassCard className="p-5 h-full">
                            <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                                <Lock size={16} className="text-yellow-400" /> Rao can MOAT
                            </h4>
                            <div className="space-y-2">
                                {moatLayers.map((m, i) => (
                                    <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02]">
                                        <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: m.color }} />
                                        <div className="flex-1">
                                            <span className="text-[11px] font-medium text-gray-200">{m.layer}</span>
                                        </div>
                                        <span className="text-[9px] text-gray-500 whitespace-nowrap">{m.timeToReplicate}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-3 p-2 rounded-lg bg-red-500/5 border border-red-500/10 text-[10px] text-red-400/80 text-center font-medium">
                                {moatSummary}
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </SectionLayout>
    );
}
