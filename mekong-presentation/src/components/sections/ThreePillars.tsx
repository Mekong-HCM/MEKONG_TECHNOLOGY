import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { products } from '../../data/products';
import { Cpu, Cog, Server, Check, Globe, DollarSign } from 'lucide-react';
import { SectionLayout } from '../ui/SectionLayout';
import { GlassCard } from '../ui/GlassCard';
import { TabBar } from '../ui/TabBar';
import { PillBadge } from '../ui/PillBadge';
import { OptimizedImage } from '../ui/OptimizedImage';
import { images } from '../../data/images';

const icons = { Cpu, Cog, Server };
const tabs = [
    { key: 'iot', label: 'IoT & Robot', icon: 'Cpu', data: products.iot },
    { key: 'cnc', label: 'CNC / MPMC', icon: 'Cog', data: products.cnc },
    { key: 'dc', label: 'Datacenter', icon: 'Server', data: products.dc },
] as const;

export function ThreePillars() {
    const [activeTab, setActiveTab] = useState<string>('iot');
    const { ref, isInView } = useInView(0.15);

    return (
        <SectionLayout id="pillars">
            <div ref={ref}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
                    <h2 className="section-title text-white">3 Trụ cột <span className="gradient-text">Công nghệ</span></h2>
                    <p className="section-subtitle">Sản phẩm & Công nghệ — ba mảng kinh doanh cộng hưởng tạo hệ sinh thái sản xuất thông minh.</p>
                </motion.div>

                {/* Tabs */}
                <TabBar
                    tabs={tabs.map(t => ({ key: t.key, label: t.label, icon: icons[t.icon as keyof typeof icons] }))}
                    activeTab={activeTab}
                    onChange={setActiveTab}
                />

                <AnimatePresence mode="wait">
                    {activeTab === 'iot' && (
                        <motion.div key="iot" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                            <div className="grid md:grid-cols-2 gap-4 mb-6">
                                <GlassCard className="p-3 overflow-hidden">
                                    <OptimizedImage {...images['iot-01']} placeholderLabel="IoT Edge Gateway" placeholderColor="#00E5FF" />
                                </GlassCard>
                                <GlassCard className="p-3 overflow-hidden">
                                    <OptimizedImage {...images['iot-03']} placeholderLabel="Robot AMR Tự hành" placeholderColor="#00E5FF" />
                                </GlassCard>
                            </div>
                            <div className="grid md:grid-cols-3 gap-4 mb-8">
                                {products.iot.items.map((item, i) => (
                                    <GlassCard key={i} hoverEffect className="p-5">
                                        <h4 className="text-lg font-bold text-neon-cyan mb-1">{item.name}</h4>
                                        <p className="text-xs text-gray-400 mb-3">{item.desc}</p>
                                        <ul className="space-y-1.5 mb-4">
                                            {item.specs.map((spec, j) => (
                                                <li key={j} className="flex items-start gap-2 text-xs text-gray-300">
                                                    <Check size={12} className="text-neon-cyan mt-0.5 flex-shrink-0" />
                                                    {spec}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="flex justify-between text-xs border-t border-white/5 pt-3">
                                            <span className="text-gray-400">Giá: <span className="text-white font-semibold">{item.price}</span></span>
                                            <span className="text-gray-400">Margin: <span className="text-green-400 font-semibold">{item.margin}</span></span>
                                        </div>
                                    </GlassCard>
                                ))}
                            </div>
                            <GlassCard className="p-5">
                                <h4 className="text-base font-bold text-neon-cyan mb-3 flex items-center gap-2"><Globe size={18} className="text-neon-cyan" /> MekongOS Platform</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    {products.iot.platform.tiers.map((tier, i) => (
                                        <div key={i} className="text-center p-3 rounded-xl bg-white/[0.03] border border-white/5">
                                            <div className="text-sm font-bold text-white">{tier.name}</div>
                                            <div className="text-lg font-extrabold neon-text my-1">{tier.price}</div>
                                            <div className="text-xs text-gray-400">{tier.devices}</div>
                                        </div>
                                    ))}
                                </div>
                            </GlassCard>
                        </motion.div>
                    )}

                    {activeTab === 'cnc' && (
                        <motion.div key="cnc" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                            <div className="grid md:grid-cols-2 gap-4 mb-6">
                                <GlassCard className="p-3 overflow-hidden">
                                    <OptimizedImage {...images['cnc-01']} placeholderLabel="DMG MORI DMU 50 3rd Gen" placeholderColor="#E040FB" />
                                </GlassCard>
                                <GlassCard className="p-3 overflow-hidden">
                                    <OptimizedImage {...images['cnc-03']} placeholderLabel="Gia công Titanium 5 trục" placeholderColor="#E040FB" />
                                </GlassCard>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <GlassCard className="p-6">
                                    <h4 className="text-lg font-bold text-pink-400 mb-4 flex items-center gap-2"><Cog size={18} className="text-pink-400" /> Thông số Nhà máy CNC</h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            { label: 'Máy CNC', value: products.cnc.machines },
                                            { label: 'Hãng', value: products.cnc.brand },
                                            { label: 'Trục', value: products.cnc.axes },
                                            { label: 'Dung sai', value: products.cnc.tolerance },
                                            { label: 'ASP', value: products.cnc.unitEconomics.asp },
                                            { label: 'Gross Margin', value: products.cnc.unitEconomics.grossMargin },
                                        ].map((item, i) => (
                                            <div key={i}>
                                                <div className="text-xs text-gray-400">{item.label}</div>
                                                <div className="text-sm font-bold text-white">{item.value}</div>
                                            </div>
                                        ))}
                                    </div>
                                </GlassCard>

                                <div className="space-y-4">
                                    <GlassCard className="p-5">
                                        <h5 className="text-sm font-bold text-pink-400 mb-2">Vật liệu</h5>
                                        <div className="flex flex-wrap gap-2">
                                            {products.cnc.materials.map((m, i) => (
                                                <PillBadge key={i} text={m} color="#E040FB" />
                                            ))}
                                        </div>
                                    </GlassCard>
                                    <GlassCard className="p-5">
                                        <h5 className="text-sm font-bold text-pink-400 mb-2">Chứng nhận</h5>
                                        <div className="flex flex-wrap gap-2">
                                            {products.cnc.certifications.map((c, i) => (
                                                <PillBadge key={i} text={c} color="#76FF03" />
                                            ))}
                                        </div>
                                    </GlassCard>
                                    <GlassCard className="p-5">
                                        <h5 className="text-sm font-bold text-pink-400 mb-2">Ngành mục tiêu</h5>
                                        <div className="flex flex-wrap gap-2">
                                            {products.cnc.industries.map((ind, i) => (
                                                <PillBadge key={i} text={ind} color="#00E5FF" />
                                            ))}
                                        </div>
                                    </GlassCard>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'dc' && (
                        <motion.div key="dc" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                            <div className="grid md:grid-cols-2 gap-4 mb-6">
                                <GlassCard className="p-3 overflow-hidden">
                                    <OptimizedImage {...images['dc-01']} placeholderLabel="Dãy tủ Rack Máy chủ" placeholderColor="#76FF03" />
                                </GlassCard>
                                <GlassCard className="p-3 overflow-hidden">
                                    <OptimizedImage {...images['dc-02']} placeholderLabel="Cụm GPU NVIDIA AI" placeholderColor="#76FF03" />
                                </GlassCard>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <GlassCard className="p-6">
                                    <h4 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2"><Server size={18} className="text-green-400" /> Thông số Datacenter</h4>
                                    <div className="space-y-3">
                                        {Object.entries(products.dc.specs).map(([key, val], i) => (
                                            <div key={i} className="flex justify-between items-center py-2 border-b border-white/5">
                                                <span className="text-xs text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                                                <span className="text-sm font-semibold text-white">{val}</span>
                                            </div>
                                        ))}
                                    </div>
                                </GlassCard>

                                <GlassCard className="p-6">
                                    <h4 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2"><DollarSign size={18} className="text-green-400" /> Dịch vụ & Giá</h4>
                                    <div className="space-y-3">
                                        {products.dc.services.map((svc, i) => (
                                            <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                                                <div className="flex justify-between items-center mb-1">
                                                    <span className="text-sm font-bold text-white">{svc.name}</span>
                                                    <span className="text-sm font-bold text-green-400">{svc.price}</span>
                                                </div>
                                                <p className="text-xs text-gray-400">{svc.detail}</p>
                                            </div>
                                        ))}
                                    </div>
                                </GlassCard>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </SectionLayout>
    );
}
