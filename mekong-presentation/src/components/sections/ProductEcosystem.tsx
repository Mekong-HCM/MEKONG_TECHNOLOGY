import { Cpu, Cog, Server, Check, Globe, DollarSign, Layers, Cloud } from 'lucide-react';
import { TabSlide, type TabConfig } from '../ui/TabSlide';
import { GlassCard } from '../ui/GlassCard';
import { PillBadge } from '../ui/PillBadge';
import { OptimizedImage } from '../ui/OptimizedImage';
import { products } from '../../data/products';
import { ohtSpec, mekongOSTiers, ecosystemLayers } from '../../data/productDetails';
import { images } from '../../data/images';

/* ─── Tab 1: Tổng quan 2 Trụ cột ─── */
function OverviewTab() {
    return (
        <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
                {/* BU1 */}
                <GlassCard hoverEffect className="p-6" accentColor="#00E5FF">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-neon-cyan/10 border border-neon-cyan/30">
                            <Cpu size={20} className="text-neon-cyan" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white">BU1: Điện tử Thông minh</h3>
                            <span className="text-xs text-neon-cyan font-semibold">70,8% doanh thu</span>
                        </div>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">IoT Gateway, BMS/SCADA, Robot AMR/AGV, MekongOS Platform</p>
                    <div className="flex gap-2 flex-wrap">
                        <PillBadge text="21 sản phẩm" color="#00E5FF" />
                        <PillBadge text="Margin 35-65%" color="#76FF03" />
                        <PillBadge text="SaaS recurring" color="#E040FB" />
                    </div>
                </GlassCard>

                {/* BU2 */}
                <GlassCard hoverEffect className="p-6" accentColor="#E040FB">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-pink-500/10 border border-pink-500/30">
                            <Cog size={20} className="text-pink-400" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white">BU2: CNC/MPMC</h3>
                            <span className="text-xs text-pink-400 font-semibold">29,2% doanh thu</span>
                        </div>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">10 máy CNC chính xác — DMG MORI, Mazak, Haas, Sodick</p>
                    <div className="flex gap-2 flex-wrap">
                        <PillBadge text="5 dòng sản phẩm" color="#E040FB" />
                        <PillBadge text="Margin 42%" color="#76FF03" />
                        <PillBadge text="±5 µm tolerance" color="#FF9100" />
                    </div>
                </GlassCard>
            </div>

            {/* Synergy */}
            <GlassCard className="p-5">
                <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                    <Globe size={16} className="text-neon-cyan" />
                    Cộng hưởng 2 Trụ cột — 26 sản phẩm tổng
                </h4>
                <div className="grid sm:grid-cols-3 gap-3 text-center">
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                        <div className="text-2xl font-extrabold text-neon-cyan">21</div>
                        <div className="text-xs text-gray-400">Sản phẩm BU1</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                        <div className="text-2xl font-extrabold text-pink-400">5</div>
                        <div className="text-xs text-gray-400">Sản phẩm BU2</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                        <div className="text-2xl font-extrabold gradient-text">100%</div>
                        <div className="text-xs text-gray-400">Tự chủ sản xuất</div>
                    </div>
                </div>
            </GlassCard>
        </div>
    );
}

/* ─── Tab 2: BU1 Điện tử (21 SP) ─── */
function BU1Tab() {
    return (
        <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
                <GlassCard className="p-0 overflow-hidden">
                    <OptimizedImage {...images['iot-01']} placeholderLabel="IoT Edge Gateway" placeholderColor="#00E5FF" className="w-full h-56 object-contain" aspectRatio="16/9" />
                </GlassCard>
                <GlassCard className="p-0 overflow-hidden">
                    <OptimizedImage {...images['iot-03']} placeholderLabel="Robot AMR Tự hành" placeholderColor="#00E5FF" className="w-full h-56 object-contain" aspectRatio="16/9" />
                </GlassCard>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
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
                <h4 className="text-base font-bold text-neon-cyan mb-3 flex items-center gap-2">
                    <Globe size={18} className="text-neon-cyan" /> MekongOS Platform
                </h4>
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
        </div>
    );
}

/* ─── Tab 3: BU2 CNC (5 SP) ─── */
function BU2Tab() {
    return (
        <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
                <GlassCard className="p-0 overflow-hidden">
                    <OptimizedImage {...images['cnc-01']} placeholderLabel="DMG MORI DMU 50 3rd Gen" placeholderColor="#E040FB" className="w-full h-56 object-cover" aspectRatio="16/9" />
                </GlassCard>
                <GlassCard className="p-0 overflow-hidden">
                    <OptimizedImage {...images['cnc-03']} placeholderLabel="Gia công Titanium 5 trục" placeholderColor="#E040FB" className="w-full h-56 object-cover" aspectRatio="16/9" />
                </GlassCard>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                <GlassCard className="p-6">
                    <h4 className="text-lg font-bold text-pink-400 mb-4 flex items-center gap-2">
                        <Cog size={18} className="text-pink-400" /> Thông số Nhà máy CNC
                    </h4>
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
        </div>
    );
}

/* ─── Tab 4: Synergy & DC Nội bộ ─── */
function SynergyTab() {
    return (
        <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
                {/* DC Nội bộ */}
                <GlassCard className="p-6">
                    <h4 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2">
                        <Server size={18} className="text-green-400" /> DC Nội bộ
                    </h4>
                    <div className="space-y-3">
                        {[
                            { label: 'Diện tích', value: products.dcInternal.area },
                            { label: 'Quy mô', value: products.dcInternal.racks },
                            { label: 'Công suất', value: products.dcInternal.power },
                            { label: 'Mục đích', value: products.dcInternal.purpose },
                            { label: 'CAPEX', value: products.dcInternal.capex },
                        ].map((item, i) => (
                            <div key={i} className="flex justify-between items-center py-2 border-b border-white/5">
                                <span className="text-xs text-gray-400">{item.label}</span>
                                <span className="text-sm font-semibold text-white">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </GlassCard>

                {/* OHT-100 */}
                <GlassCard className="p-6">
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
            </div>

            {/* MekongOS Platform */}
            <GlassCard className="p-5 mb-4">
                <div className="flex items-center gap-2 mb-4">
                    <Cloud size={18} className="text-neon-cyan" />
                    <h3 className="text-lg font-bold text-white">MekongOS Platform</h3>
                </div>
                <div className="grid sm:grid-cols-3 gap-3">
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

            {/* Vai trò hỗ trợ DC */}
            <GlassCard className="p-5 mb-4">
                <h4 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2">
                    <DollarSign size={18} className="text-green-400" /> Vai trò hỗ trợ nội bộ
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                    {[
                        { name: 'MekongOS & IoT Cloud', detail: 'Hosting nội bộ cho nền tảng IoT, BMS/SCADA, AI analytics' },
                        { name: 'CNC/CAM Computing', detail: 'Xử lý CAM, mô phỏng gia công, quản lý chất lượng' },
                        { name: 'R&D & AI Training', detail: 'GPU cluster cho AI/ML model training, Computer Vision' },
                        { name: 'ERP & Backup', detail: 'Hệ thống ERP, backup dữ liệu, disaster recovery nội bộ' },
                    ].map((svc, i) => (
                        <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                            <div className="text-sm font-bold text-white mb-1">{svc.name}</div>
                            <p className="text-xs text-gray-400">{svc.detail}</p>
                        </div>
                    ))}
                </div>
            </GlassCard>

            {/* 5-Layer Ecosystem */}
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
        </div>
    );
}

/* ─── Main Export ─── */
const tabs: TabConfig[] = [
    { key: 'overview', label: '2 Trụ cột', icon: Globe, content: <OverviewTab /> },
    { key: 'bu1', label: 'BU1 Điện tử (21 SP)', icon: Cpu, content: <BU1Tab /> },
    { key: 'bu2', label: 'BU2 CNC (5 SP)', icon: Cog, content: <BU2Tab /> },
    { key: 'synergy', label: 'Synergy & DC', icon: Server, content: <SynergyTab /> },
];

export function ProductEcosystem() {
    return (
        <TabSlide
            id="products"
            title="Hệ sinh thái Sản phẩm"
            subtitle="2 Trụ cột công nghệ — 26 sản phẩm — Cộng hưởng IoT + CNC + DC nội bộ"
            tabs={tabs}
        />
    );
}
