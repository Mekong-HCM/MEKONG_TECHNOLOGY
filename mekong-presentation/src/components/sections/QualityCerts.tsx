import { motion } from 'framer-motion';
import { Award, CheckCircle, ShieldCheck } from 'lucide-react';
import { SectionLayout } from '../ui/SectionLayout';
import { GlassCard } from '../ui/GlassCard';
import { useInView } from '../../hooks/useInView';
import { qualityCerts, dcTierIII, as9100Note } from '../../data/operations';

export function QualityCerts() {
    const { ref, isInView } = useInView(0.15);

    return (
        <SectionLayout id="quality">
            <div ref={ref}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
                    <h2 className="section-title text-white">Chung nhan <span className="gradient-text">Chat luong & Tieu chuan</span></h2>
                    <p className="section-subtitle">Lo trinh chung nhan 3 nam — Tu ISO 9001 den AS9100D (dau tien tai VN)</p>
                </motion.div>

                {/* AS9100 Highlight */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.5 }}
                    className="mb-5"
                >
                    <GlassCard className="p-4 border-l-4 border-l-red-500">
                        <div className="flex items-start gap-3">
                            <Award size={20} className="text-red-400 mt-0.5 flex-shrink-0" />
                            <div>
                                <p className="text-sm font-bold text-white">{as9100Note}</p>
                                <p className="text-[10px] text-gray-400 mt-1">AS9100 Rev D — Tieu chuan hang khong vu tru quoc te</p>
                            </div>
                        </div>
                    </GlassCard>
                </motion.div>

                {/* Certification Timeline */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.15, duration: 0.5 }}>
                    <div className="grid md:grid-cols-5 gap-3 mb-5">
                        {qualityCerts.map((cert, i) => (
                            <GlassCard key={i} className="p-3 text-center" accentColor={cert.color}>
                                <div className="w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center" style={{ backgroundColor: `${cert.color}15`, border: `1px solid ${cert.color}40` }}>
                                    <ShieldCheck size={16} style={{ color: cert.color }} />
                                </div>
                                <div className="text-xs font-bold text-white">{cert.cert}</div>
                                <div className="text-[9px] text-gray-400 mt-0.5">{cert.scope}</div>
                                <div className="text-[10px] font-bold mt-2" style={{ color: cert.color }}>{cert.timeline}</div>
                                {cert.cost !== '-' && (
                                    <div className="text-[9px] text-gray-500 mt-0.5">{cert.cost} USD</div>
                                )}
                                {cert.hourRate !== '-' && (
                                    <div className="text-[9px] text-gray-500">Machine: {cert.hourRate}</div>
                                )}
                            </GlassCard>
                        ))}
                    </div>
                </motion.div>

                {/* DC Tier III */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.25, duration: 0.5 }}>
                    <GlassCard className="p-4">
                        <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                            <CheckCircle size={14} className="text-neon-cyan" /> Datacenter Tier III
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {[
                                { label: 'Uptime', value: dcTierIII.uptime, color: 'text-green-400' },
                                { label: 'Max downtime', value: dcTierIII.maxDowntime, color: 'text-yellow-400' },
                                { label: 'Tieu chuan', value: dcTierIII.standard, color: 'text-blue-400' },
                                { label: 'Du phong', value: dcTierIII.redundancy, color: 'text-neon-magenta' },
                            ].map((item, i) => (
                                <div key={i} className="p-2 rounded-lg bg-white/5">
                                    <div className={`text-sm font-bold ${item.color}`}>{item.value}</div>
                                    <div className="text-[9px] text-gray-400 mt-0.5">{item.label}</div>
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                </motion.div>
            </div>
        </SectionLayout>
    );
}
