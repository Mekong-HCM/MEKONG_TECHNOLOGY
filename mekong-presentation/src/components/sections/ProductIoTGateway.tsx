import { motion } from 'framer-motion';
import { Cpu, Wifi, Shield, Zap, Check } from 'lucide-react';
import { SectionLayout } from '../ui/SectionLayout';
import { GlassCard } from '../ui/GlassCard';
import { useInView } from '../../hooks/useInView';
import { gatewaySpecs, gatewayCapacity } from '../../data/productDetails';

export function ProductIoTGateway() {
    const { ref, isInView } = useInView(0.15);

    return (
        <SectionLayout id="product-iot">
            <div ref={ref}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-widest border border-neon-cyan/30 text-neon-cyan/80 bg-neon-cyan/5 mb-4">
                        Sản Phẩm 1/3
                    </span>
                    <h2 className="section-title text-white">IoT Gateway <span className="gradient-text">MK-200 / MK-300</span></h2>
                    <p className="section-subtitle">Industrial IoT Gateway Made in Vietnam — ARM Cortex, AI tại biên, Multi-protocol, 5G-ready</p>
                </motion.div>

                {/* Comparison table */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.15, duration: 0.5 }}>
                    <GlassCard className="p-4 mb-6 overflow-x-auto">
                        <table className="w-full text-xs">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="text-left py-2 px-3 text-gray-400 font-medium w-1/3">Thông số</th>
                                    <th className="text-left py-2 px-3 font-bold text-neon-cyan">MK-200 Standard</th>
                                    <th className="text-left py-2 px-3 font-bold text-neon-magenta">MK-300 AI Edge</th>
                                </tr>
                            </thead>
                            <tbody>
                                {gatewaySpecs.map((row, i) => (
                                    <tr key={i} className="border-b border-white/5">
                                        <td className="py-2 px-3 text-gray-400">{row.label}</td>
                                        <td className="py-2 px-3 text-gray-200">{row.mk200}</td>
                                        <td className="py-2 px-3 text-gray-200">{row.mk300}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </GlassCard>
                </motion.div>

                {/* Key features + Capacity */}
                <div className="grid md:grid-cols-2 gap-4">
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.25, duration: 0.5 }}>
                        <GlassCard className="p-5 h-full">
                            <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2"><Cpu size={16} className="text-neon-cyan" /> Đặc điểm nổi bật</h4>
                            <ul className="space-y-2">
                                {[
                                    { icon: Wifi, text: 'Multi-protocol: MQTT, OPC UA, Modbus, EtherCAT, PROFINET' },
                                    { icon: Zap, text: 'AI Edge: Vision inference, predictive maintenance tại biên' },
                                    { icon: Shield, text: 'Bảo mật: TLS 1.3, TPM 2.0, Secure Boot, encrypted OTA' },
                                    { icon: Cpu, text: 'ARM Cortex + NPU 6 TOPS — xử lý AI không cần cloud' },
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                                        <item.icon size={14} className="text-neon-cyan mt-0.5 flex-shrink-0" />
                                        {item.text}
                                    </li>
                                ))}
                            </ul>
                        </GlassCard>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3, duration: 0.5 }}>
                        <GlassCard className="p-5 h-full">
                            <h4 className="text-sm font-bold text-white mb-3">Công suất sản xuất</h4>
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { label: 'Tổng/năm', value: gatewayCapacity.total, color: 'text-neon-cyan' },
                                    { label: 'MK-200', value: gatewayCapacity.mk200, color: 'text-neon-cyan' },
                                    { label: 'MK-300', value: gatewayCapacity.mk300, color: 'text-neon-magenta' },
                                    { label: 'Gross margin', value: gatewayCapacity.margin, color: 'text-green-400' },
                                ].map((item, i) => (
                                    <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                                        <div className={`text-lg font-extrabold ${item.color}`}>{item.value}</div>
                                        <div className="text-[10px] text-gray-400 mt-1">{item.label}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-3 text-[10px] text-gray-500 flex items-center gap-1">
                                <Check size={10} className="text-green-400" /> Thay thế Siemens SIMATIC, Schneider EcoStruxure — giá rẻ hơn 20-30%
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </SectionLayout>
    );
}
