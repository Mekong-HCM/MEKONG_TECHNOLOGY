import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Navigation, Battery, Gauge, Check, Package, DollarSign, Route } from 'lucide-react';
import { TabSlide, type TabConfig } from '../ui/TabSlide';
import { GlassCard } from '../ui/GlassCard';
import { OptimizedImage } from '../ui/OptimizedImage';
import { robots } from '../../data/productDetails';
import { images } from '../../data/images';

const typeColors: Record<string, string> = { AMR: '#00E5FF', AGV: '#E040FB' };

function SpecsTab() {
    const [selected, setSelected] = useState(0);
    const robot = robots[selected];

    return (
        <div className="space-y-4">
            <div className="flex gap-2 flex-wrap">
                {robots.map((r, i) => (
                    <button key={r.name} onClick={() => setSelected(i)}
                        className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${i === selected ? 'text-white bg-white/10 border border-neon-cyan/30' : 'text-gray-500 hover:text-gray-300 border border-white/5'}`}>
                        <span style={{ color: typeColors[r.type] }} className="font-bold">{r.type}</span> {r.name}
                    </button>
                ))}
            </div>
            <AnimatePresence mode="wait">
                <motion.div key={selected} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                    <GlassCard className="p-5">
                        <div className="flex items-center gap-2 mb-4">
                            <Bot size={20} style={{ color: typeColors[robot.type] }} />
                            <h3 className="text-xl font-bold text-white">{robot.name}</h3>
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold" style={{ color: typeColors[robot.type], background: `${typeColors[robot.type]}15`, border: `1px solid ${typeColors[robot.type]}30` }}>{robot.type}</span>
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
                        <div className="mt-3 p-2 rounded-lg bg-neon-cyan/5 border border-neon-cyan/10 text-xs text-neon-cyan/80">{robot.highlight}</div>
                    </GlassCard>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

function UseCasesTab() {
    return (
        <div className="space-y-4">
            <div className="p-3 overflow-hidden rounded-2xl border border-neon-cyan/15"
                style={{ background: 'linear-gradient(135deg,rgba(0,229,255,0.06) 0%,rgba(0,60,80,0.4) 100%)' }}>
                <OptimizedImage {...images['iot-04']} placeholderLabel="Robot AGV tự hành — nhà kho thông minh" placeholderColor="#00E5FF" className="w-full object-cover max-h-[280px]" aspectRatio="16/9" />
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
                {[
                    { title: 'Nhà máy sản xuất', desc: 'Vận chuyển WIP giữa dây chuyền, cấp nguyên liệu tự động', color: '#00E5FF' },
                    { title: 'Kho vận & Logistics', desc: 'Picking, putaway, inventory cycle — 24/7 không nghỉ', color: '#E040FB' },
                    { title: 'Bệnh viện & Dược phẩm', desc: 'Vận chuyển thuốc, vật tư y tế — cleanroom compatible', color: '#76FF03' },
                    { title: 'Thương mại điện tử', desc: 'Fulfillment center, sorting hub — tích hợp WMS', color: '#FF9100' },
                ].map((uc, i) => (
                    <GlassCard key={i} className="p-4">
                        <div className="text-sm font-bold mb-1" style={{ color: uc.color }}>{uc.title}</div>
                        <div className="text-xs text-gray-400">{uc.desc}</div>
                    </GlassCard>
                ))}
            </div>
        </div>
    );
}

function PricingTab() {
    return (
        <GlassCard className="p-5">
            <h4 className="text-sm font-bold text-white mb-3">Tổng quan sản xuất & Giá</h4>
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
            <div className="mt-3 text-[10px] text-gray-500">Thay thế MiR, Fetch Robotics, KUKA, Omron — giá rẻ 20-30%</div>
        </GlassCard>
    );
}

function AGVTab() {
    const agvModels = robots.filter(r => r.type === 'AGV');
    return (
        <div className="space-y-4">
            <GlassCard className="p-4">
                <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2"><Route size={16} className="text-neon-magenta" /> AGV — Dẫn đường Cố định</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                    {agvModels.map((robot, i) => (
                        <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-neon-magenta/20">
                            <div className="flex items-center gap-2 mb-3">
                                <Bot size={16} className="text-neon-magenta" />
                                <span className="text-sm font-bold text-white">{robot.name}</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                {[
                                    { label: 'Payload', value: robot.payload },
                                    { label: 'Navigation', value: robot.navigation },
                                    { label: 'Speed', value: robot.speed },
                                    { label: 'Battery', value: robot.battery },
                                    { label: 'Giá', value: robot.price },
                                    { label: 'SL/năm', value: robot.capacity },
                                ].map((s, j) => (
                                    <div key={j} className="text-[10px]">
                                        <span className="text-gray-500">{s.label}: </span>
                                        <span className="text-gray-300 font-medium">{s.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </GlassCard>
            <GlassCard className="p-4">
                <h4 className="text-xs font-bold text-white mb-2">So sánh AMR vs AGV</h4>
                <table className="w-full text-[10px]">
                    <thead><tr className="border-b border-white/10 text-gray-400">
                        <th className="text-left py-1.5">Tiêu chí</th>
                        <th className="text-center py-1.5 text-neon-cyan">AMR</th>
                        <th className="text-center py-1.5 text-neon-magenta">AGV</th>
                    </tr></thead>
                    <tbody>
                        {[
                            ['Dẫn đường', 'LiDAR 3D + AI SLAM', 'Magnetic / QR / Vision'],
                            ['Linh hoạt', 'Cao — tự lập tuyến', 'Trung bình — tuyến cố định'],
                            ['Chi phí', '18–38K USD', '12–28K USD'],
                            ['Ứng dụng', 'Sản xuất linh hoạt', 'Dây chuyền ổn định'],
                        ].map((row, i) => (
                            <tr key={i} className="border-b border-white/5">
                                <td className="py-1.5 text-gray-400">{row[0]}</td>
                                <td className="text-center text-gray-300">{row[1]}</td>
                                <td className="text-center text-gray-300">{row[2]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </GlassCard>
        </div>
    );
}

const tabs: TabConfig[] = [
    { key: 'specs', label: 'AMR Specs', icon: Bot, content: <SpecsTab /> },
    { key: 'agv', label: 'AGV Navigation', icon: Route, content: <AGVTab /> },
    { key: 'usecases', label: 'Ứng dụng', icon: Package, content: <UseCasesTab /> },
    { key: 'pricing', label: 'Giá & Sản lượng', icon: DollarSign, content: <PricingTab /> },
];

export function ProductRobotAMR() {
    return (
        <TabSlide
            id="product-robot"
            title="Robot AMR / AGV"
            subtitle="Robot tự hành cho nhà máy và kho vận — LiDAR 3D, AI SLAM, Fleet Management tích hợp"
            tabs={tabs}
        />
    );
}
