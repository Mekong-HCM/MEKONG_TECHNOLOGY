import { motion } from 'framer-motion';
import { Award, GraduationCap, Handshake, FileText } from 'lucide-react';
import { SectionLayout } from '../ui/SectionLayout';
import { GlassCard } from '../ui/GlassCard';
import { useInView } from '../../hooks/useInView';
import { partnerships, ipTargets } from '../../data/rdData';

const typeIcons: Record<string, typeof Award> = {
    'Technology Transfer': Handshake,
    'Training': GraduationCap,
    'Certification': Award,
    'Academic R&D': GraduationCap,
};

export function RDIPPatents() {
    const { ref, isInView } = useInView(0.15);

    return (
        <SectionLayout id="rd-ip">
            <div ref={ref}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-widest border border-yellow-400/30 text-yellow-400/80 bg-yellow-400/5 mb-4">
                        R&D 3/3
                    </span>
                    <h2 className="section-title text-white">So huu Tri tue & <span className="gradient-text">Hop tac Cong nghe</span></h2>
                    <p className="section-subtitle">20-25 bang sang che muc tieu 10 nam — Hop tac voi 6 doi tac quoc te va trong nuoc</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {/* IP Targets */}
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.1, duration: 0.5 }}>
                        <GlassCard className="p-5 h-full">
                            <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                                <FileText size={16} className="text-yellow-400" />
                                Muc tieu So huu Tri tue
                            </h4>
                            <div className="space-y-3">
                                {ipTargets.map((ip, i) => (
                                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/[0.03] border border-white/5">
                                        <span className="text-xs text-gray-300">{ip.type}</span>
                                        <div className="flex gap-4">
                                            <div className="text-center">
                                                <div className="text-sm font-bold text-neon-cyan">{ip.fiveYear}</div>
                                                <div className="text-[9px] text-gray-500">5 nam</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-sm font-bold text-neon-magenta">{ip.tenYear}</div>
                                                <div className="text-[9px] text-gray-500">10 nam</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 p-3 rounded-lg bg-yellow-400/5 border border-yellow-400/10">
                                <div className="text-xs text-yellow-400/80">IP la rao can canh tranh ben vung — Doi thu can 3-5 nam de sao chep</div>
                            </div>
                        </GlassCard>
                    </motion.div>

                    {/* Partnerships */}
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2, duration: 0.5 }}>
                        <GlassCard className="p-5 h-full">
                            <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                                <Handshake size={16} className="text-neon-cyan" />
                                Doi tac Chuyen giao Cong nghe
                            </h4>
                            <div className="space-y-2">
                                {partnerships.map((p, i) => {
                                    const Icon = typeIcons[p.type] || Handshake;
                                    return (
                                        <div key={i} className="flex items-start gap-3 p-2 rounded-lg bg-white/[0.02] border border-white/5">
                                            <Icon size={14} className="text-gray-500 mt-0.5 flex-shrink-0" />
                                            <div className="flex-1">
                                                <div className="flex items-baseline gap-2">
                                                    <span className="text-xs font-bold text-white">{p.partner}</span>
                                                    <span className="text-[9px] text-gray-500">({p.origin})</span>
                                                </div>
                                                <div className="text-[10px] text-gray-400">{p.scope}</div>
                                            </div>
                                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-gray-500 whitespace-nowrap">{p.type}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </SectionLayout>
    );
}
