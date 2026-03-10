import { motion } from 'framer-motion';
import { Layers, Cloud, Check, Globe } from 'lucide-react';
import { SectionLayout } from '../ui/SectionLayout';
import { GlassCard } from '../ui/GlassCard';
import { useInView } from '../../hooks/useInView';
import { ohtSpec, mekongOSTiers, ecosystemLayers } from '../../data/productDetails';

export function ProductOHT() {
    const { ref, isInView } = useInView(0.15);

    return (
        <SectionLayout id="product-oht">
            <div ref={ref}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-widest border border-neon-cyan/30 text-neon-cyan/80 bg-neon-cyan/5 mb-4">
                        Sản Phẩm 3/3
                    </span>
                    <h2 className="section-title text-white">OHT-100 & <span className="gradient-text">MekongOS Platform</span></h2>
                    <p className="section-subtitle">Robot OHT cho semiconductor fab + Nền tảng IoT Cloud quản lý toàn bộ hệ sinh thái</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {/* OHT */}
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.1, duration: 0.5 }}>
                        <GlassCard className="p-5 h-full">
                            <div className="flex items-center gap-2 mb-4">
                                <Layers size={18} className="text-neon-cyan" />
                                <h3 className="text-lg font-bold text-white">{ohtSpec.name}</h3>
                                <span className="text-[10px] text-gray-400">Overhead Hoist Transport</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2 mb-4">
                                {[
                                    { label: 'Payload', value: ohtSpec.payload },
                                    { label: 'Speed', value: ohtSpec.speed },
                                    { label: 'Precision', value: ohtSpec.precision },
                                    { label: 'Price', value: ohtSpec.price },
                                    { label: 'Capacity', value: ohtSpec.capacity },
                                    { label: 'Application', value: ohtSpec.application },
                                ].map((s, i) => (
                                    <div key={i} className="p-2 rounded-lg bg-white/[0.03] border border-white/5">
                                        <div className="text-[10px] text-gray-500">{s.label}</div>
                                        <div className="text-xs font-semibold text-gray-200">{s.value}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-1.5">
                                {ohtSpec.features.map((f, i) => (
                                    <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                                        <Check size={12} className="text-neon-cyan mt-0.5 flex-shrink-0" />
                                        {f}
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                    </motion.div>

                    {/* MekongOS */}
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2, duration: 0.5 }}>
                        <GlassCard className="p-5 h-full">
                            <div className="flex items-center gap-2 mb-4">
                                <Cloud size={18} className="text-neon-cyan" />
                                <h3 className="text-lg font-bold text-white">MekongOS Platform</h3>
                                <span className="text-[10px] text-gray-400">IoT Cloud SaaS</span>
                            </div>
                            <div className="space-y-3">
                                {mekongOSTiers.map((tier, i) => (
                                    <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm font-bold text-white">{tier.name}</span>
                                            <span className="text-xs font-bold neon-text">{tier.price}</span>
                                        </div>
                                        <div className="text-[10px] text-gray-400 mb-2">{tier.devices}</div>
                                        <div className="flex flex-wrap gap-1">
                                            {tier.features.map((f, j) => (
                                                <span key={j} className="px-1.5 py-0.5 rounded text-[9px] bg-white/5 text-gray-400 border border-white/5">{f}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>

                {/* 5-Layer Ecosystem */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3, duration: 0.5 }}>
                    <GlassCard className="p-5">
                        <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                            <Globe size={16} className="text-neon-cyan" />
                            Hệ sinh thái 5 lớp — 21 sản phẩm
                        </h4>
                        <div className="space-y-1.5">
                            {ecosystemLayers.map((layer, i) => (
                                <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-white/[0.02]">
                                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: layer.color }} />
                                    <span className="text-xs font-bold text-gray-300 w-28 flex-shrink-0">{layer.layer}</span>
                                    <span className="text-xs text-gray-400">{layer.items}</span>
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                </motion.div>
            </div>
        </SectionLayout>
    );
}
