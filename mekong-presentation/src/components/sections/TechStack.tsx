import { motion } from 'framer-motion';
import { Cpu, Layers, Wifi } from 'lucide-react';
import { SectionLayout } from '../ui/SectionLayout';
import { GlassCard } from '../ui/GlassCard';
import { useInView } from '../../hooks/useInView';
import { techStackLayers } from '../../data/operations';

const layerColors = ['#00E5FF', '#E040FB', '#76FF03', '#f59e0b', '#8b5cf6'];
const layerIcons = [Cpu, Wifi, Cpu, Layers, Layers];

export function TechStack() {
    const { ref, isInView } = useInView(0.15);

    return (
        <SectionLayout id="tech-stack">
            <div ref={ref}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
                    <h2 className="section-title text-white">Kiến trúc <span className="gradient-text">Công nghệ</span></h2>
                    <p className="section-subtitle">5 tầng — Từ ARM Cortex đến MekongOS Cloud Platform</p>
                </motion.div>

                <div className="space-y-3">
                    {techStackLayers.map((layer, i) => {
                        const Icon = layerIcons[i];
                        const color = layerColors[i];
                        return (
                            <motion.div
                                key={layer.layer}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                            >
                                <GlassCard className="p-3" accentColor={color}>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${color}12`, border: `1px solid ${color}30` }}>
                                            <Icon size={18} style={{ color }} />
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-xs font-bold mb-1.5" style={{ color }}>{layer.layer}</div>
                                            <div className="flex flex-wrap gap-1.5">
                                                {layer.items.map((item, j) => (
                                                    <span key={j} className="px-2 py-0.5 rounded bg-white/8 text-[10px] text-gray-300 border border-white/5">{item}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.5, duration: 0.5 }}
                    className="mt-4 text-center text-[10px] text-gray-500"
                >
                    13 giao thức công nghiệp — Tương thích 16 sản phẩm — ROS2 ready
                </motion.div>
            </div>
        </SectionLayout>
    );
}
