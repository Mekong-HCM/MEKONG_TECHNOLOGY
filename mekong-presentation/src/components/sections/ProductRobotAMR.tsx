import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Navigation, Battery, Gauge, Check } from 'lucide-react';
import { SectionLayout } from '../ui/SectionLayout';
import { GlassCard } from '../ui/GlassCard';
import { useInView } from '../../hooks/useInView';
import { robots } from '../../data/productDetails';

const typeColors: Record<string, string> = {
    AMR: '#00E5FF',
    AGV: '#E040FB',
};

export function ProductRobotAMR() {
    const { ref, isInView } = useInView(0.15);
    const [selected, setSelected] = useState(0);
    const robot = robots[selected];

    return (
        <SectionLayout id="product-robot">
            <div ref={ref}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-widest border border-neon-cyan/30 text-neon-cyan/80 bg-neon-cyan/5 mb-4">
                        Sản Phẩm 2/3
                    </span>
                    <h2 className="section-title text-white">Robot <span className="gradient-text">AMR / AGV</span></h2>
                    <p className="section-subtitle">Robot tự hành cho nhà máy và kho vận — LiDAR 3D, AI SLAM, Fleet Management tích hợp</p>
                </motion.div>

                {/* Robot selector */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.5 }}
                    className="flex gap-2 mb-6 flex-wrap"
                >
                    {robots.map((r, i) => (
                        <button
                            key={r.name}
                            onClick={() => setSelected(i)}
                            className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${i === selected
                                ? 'text-white bg-white/10 border border-neon-cyan/30'
                                : 'text-gray-500 hover:text-gray-300 border border-white/5'
                                }`}
                        >
                            <span style={{ color: typeColors[r.type] }} className="font-bold">{r.type}</span> {r.name}
                        </button>
                    ))}
                </motion.div>

                {/* Selected robot detail */}
                <motion.div key={selected} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                        {/* Specs */}
                        <GlassCard className="p-5 md:col-span-2">
                            <div className="flex items-center gap-2 mb-4">
                                <Bot size={20} style={{ color: typeColors[robot.type] }} />
                                <h3 className="text-xl font-bold text-white">{robot.name}</h3>
                                <span className="px-2 py-0.5 rounded text-[10px] font-bold" style={{ color: typeColors[robot.type], background: `${typeColors[robot.type]}15`, border: `1px solid ${typeColors[robot.type]}30` }}>
                                    {robot.type}
                                </span>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {[
                                    { icon: Gauge, label: 'Payload', value: robot.payload },
                                    { icon: Navigation, label: 'Navigation', value: robot.navigation },
                                    { icon: Gauge, label: 'Speed', value: robot.speed },
                                    { icon: Battery, label: 'Battery', value: robot.battery },
                                    { icon: Bot, label: 'Capacity', value: robot.capacity },
                                    { icon: Check, label: 'Price', value: robot.price },
                                ].map((spec, i) => (
                                    <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                                        <div className="flex items-center gap-1.5 mb-1">
                                            <spec.icon size={12} className="text-gray-500" />
                                            <span className="text-[10px] text-gray-400">{spec.label}</span>
                                        </div>
                                        <div className="text-xs font-semibold text-white">{spec.value}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-3 p-2 rounded-lg bg-neon-cyan/5 border border-neon-cyan/10 text-xs text-neon-cyan/80">
                                {robot.highlight}
                            </div>
                        </GlassCard>

                        {/* Summary / Comparison */}
                        <GlassCard className="p-5">
                            <h4 className="text-sm font-bold text-white mb-3">Tổng quan sản xuất</h4>
                            <div className="space-y-3">
                                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                                    <div className="text-2xl font-extrabold text-neon-cyan">200</div>
                                    <div className="text-[10px] text-gray-400">AMR bộ/năm</div>
                                </div>
                                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                                    <div className="text-2xl font-extrabold text-neon-magenta">100</div>
                                    <div className="text-[10px] text-gray-400">AGV bộ/năm</div>
                                </div>
                                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                                    <div className="text-lg font-extrabold text-green-400">35-40%</div>
                                    <div className="text-[10px] text-gray-400">Gross margin</div>
                                </div>
                            </div>
                            <div className="mt-3 text-[10px] text-gray-500">
                                Thay thế MiR, Fetch Robotics, KUKA, Omron — giá rẻ 20-30%
                            </div>
                        </GlassCard>
                    </div>
                </motion.div>
            </div>
        </SectionLayout>
    );
}
