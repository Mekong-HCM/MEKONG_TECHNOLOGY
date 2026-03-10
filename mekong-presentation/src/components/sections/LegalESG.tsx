import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { Leaf, Shield, Users, FileCheck, Award, Check } from 'lucide-react';
import { SectionLayout } from '../ui/SectionLayout';
import { GlassCard } from '../ui/GlassCard';
import { OptimizedImage } from '../ui/OptimizedImage';
import { legal } from '../../data/legal';
import { images } from '../../data/images';

const esgIcons = { Leaf, Users, Shield } as const;

export function LegalESG() {
    const { ref, isInView } = useInView(0.15);

    return (
        <SectionLayout id="legal">
            <div ref={ref}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
                    <h2 className="section-title text-white">Pháp lý <span className="gradient-text">& ESG</span></h2>
                    <p className="section-subtitle">18 giấy phép — Zero Liquid Discharge — PUE tiên tiến — ESG commitment đầy đủ.</p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    {/* Permits */}
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
                        <GlassCard className="p-6 h-full">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2"><FileCheck size={18} className="text-neon-cyan" /> Giấy phép Chính</h4>
                        <div className="space-y-2">
                            {legal.permits.map((p, i) => (
                                <div key={i} className="flex items-center gap-3 py-2 border-b border-white/5 last:border-0">
                                    <div className="flex-1">
                                        <div className="text-xs font-semibold text-white">{p.name}</div>
                                        <div className="text-xs text-gray-500">{p.agency} · {p.time}</div>
                                    </div>
                                    <span className="text-xs px-2 py-0.5 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan">{p.status}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-3 text-xs text-gray-500 text-center">Tổng {legal.totalPermits} giấy phép · Chi phí ~{legal.legalCost}</div>
                        </GlassCard>
                    </motion.div>

                    {/* ESG */}
                    <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="space-y-4">
                        {legal.esg.map((esg, i) => {
                            const Icon = esgIcons[esg.iconName as keyof typeof esgIcons];
                            return (
                                <GlassCard key={i} className="p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Icon size={16} style={{ color: esg.color }} />
                                        <h5 className="text-sm font-bold" style={{ color: esg.color }}>{esg.title}</h5>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                                        {esg.items.map((item, j) => (
                                            <div key={j} className="text-xs text-gray-300 flex items-start gap-1">
                                                <Check size={12} className="text-green-400 mt-0.5 flex-shrink-0" /> {item}
                                            </div>
                                        ))}
                                    </div>
                                </GlassCard>
                            );
                        })}
                    </motion.div>
                </div>

                {/* ESG Feature Image */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.35 }} className="mb-8">
                    <GlassCard className="p-3 overflow-hidden max-w-2xl mx-auto">
                        <OptimizedImage {...images['esg-01']} placeholderLabel="Mái pin năng lượng mặt trời" placeholderColor="#76FF03" />
                    </GlassCard>
                </motion.div>

                {/* Certification Path */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.4 }}>
                    <GlassCard className="p-6">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2"><Award size={18} className="text-neon-cyan" /> Lộ trình Chứng nhận</h4>
                    <div className="flex flex-wrap gap-3">
                        {legal.certPath.map((cert, i) => (
                            <motion.div
                                key={i}
                                className="flex items-center gap-2 px-4 py-2 rounded-full"
                                style={{ background: `${cert.color}10`, border: `1px solid ${cert.color}30` }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <span className="text-xs font-bold" style={{ color: cert.color }}>{cert.year}</span>
                                <span className="text-xs text-gray-300">{cert.cert}</span>
                            </motion.div>
                        ))}
                    </div>
                    </GlassCard>
                </motion.div>
            </div>
        </SectionLayout>
    );
}
