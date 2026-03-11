import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { Building2, Zap, Droplets, Sun, Shield, Thermometer } from 'lucide-react';
import { SectionLayout } from '../ui/SectionLayout';
import { GlassCard } from '../ui/GlassCard';
import { OptimizedImage } from '../ui/OptimizedImage';
import { infrastructure } from '../../data/infrastructure';
import { images } from '../../data/images';

const specIcons = { Building2, Zap, Droplets, Sun, Shield, Thermometer } as const;

export function Infrastructure() {
    const { ref, isInView } = useInView(0.15);

    return (
        <SectionLayout id="infra">
            <div ref={ref}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
                    <h2 className="section-title text-white">Hạ tầng <span className="gradient-text">Kỹ thuật</span></h2>
                    <p className="section-subtitle">1 ha tại KCNC TP.HCM — 1 tòa nhà 3 tầng thiết kế tối ưu cho 3 trụ cột công nghệ.</p>
                </motion.div>

                {/* Building Cross-Section */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="mb-8">
                    <GlassCard className="p-6">
                    <h4 className="text-lg font-semibold text-white mb-5 flex items-center gap-2"><Building2 size={20} className="text-neon-cyan" /> Mặt cắt Tòa nhà 3 Tầng</h4>
                    <div className="space-y-3">
                        {infrastructure.building.floors.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                                className="flex items-center gap-4 p-4 rounded-xl"
                                style={{ background: `${f.color}08`, border: `1px solid ${f.color}20` }}
                            >
                                <div className="flex-shrink-0 w-20 text-center">
                                    <div className="text-sm font-black" style={{ color: f.color }}>{f.floor}</div>
                                    <div className="text-xs text-gray-400">{f.area}</div>
                                </div>
                                <div className="w-px h-8 bg-white/10" />
                                <div className="text-sm text-gray-300">{f.content}</div>
                            </motion.div>
                        ))}
                    </div>
                    </GlassCard>
                </motion.div>

                {/* Infra Specs Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                    {infrastructure.specs.map((spec, i) => {
                        const Icon = specIcons[spec.iconName as keyof typeof specIcons];
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                            >
                                <GlassCard hoverEffect className="p-4 h-full">
                                <Icon size={20} style={{ color: spec.color }} className="mb-2" />
                                <div className="text-xs font-bold text-gray-300 mb-1">{spec.label}</div>
                                <div className="text-xs text-gray-400 leading-relaxed">{spec.value}</div>
                                </GlassCard>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Infrastructure Images */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="grid md:grid-cols-3 gap-4"
                >
                    <GlassCard className="p-0 overflow-hidden">
                        <OptimizedImage {...images['infra-01']} placeholderLabel="Tổng quan Xưởng CNC" placeholderColor="#E040FB" className="w-full h-48 object-cover" aspectRatio="16/9" />
                    </GlassCard>
                    <GlassCard className="p-0 overflow-hidden">
                        <OptimizedImage {...images['infra-02']} placeholderLabel="Hệ thống tủ Rack máy chủ" placeholderColor="#76FF03" className="w-full h-48 object-cover" aspectRatio="16/9" />
                    </GlassCard>
                    <GlassCard className="p-0 overflow-hidden">
                        <OptimizedImage {...images['infra-03']} placeholderLabel="Hệ thống làm mát CRAC/CDU" placeholderColor="#76FF03" className="w-full h-48 object-cover" aspectRatio="16/9" />
                    </GlassCard>
                </motion.div>
            </div>
        </SectionLayout>
    );
}
