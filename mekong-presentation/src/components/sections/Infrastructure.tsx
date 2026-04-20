import { Building2, Zap, Droplets, Sun, Shield, Thermometer, Layout, Image, Cog, Server } from 'lucide-react';
import { TabSlide, type TabConfig } from '../ui/TabSlide';
import { GlassCard } from '../ui/GlassCard';
import { OptimizedImage } from '../ui/OptimizedImage';
import { infrastructure } from '../../data/infrastructure';
import { images } from '../../data/images';

const specIcons = { Building2, Zap, Droplets, Sun, Shield, Thermometer } as const;

function LayoutTab() {
    return (
        <GlassCard className="p-6">
            <h4 className="text-lg font-semibold text-white mb-5 flex items-center gap-2"><Building2 size={20} className="text-neon-cyan" /> 3 Công trình chính</h4>
            <div className="space-y-3">
                {infrastructure.buildings.map((b, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl" style={{ background: `${b.color}08`, border: `1px solid ${b.color}20` }}>
                        <div className="flex-shrink-0 w-40 text-center">
                            <div className="text-sm font-black" style={{ color: b.color }}>{b.name}</div>
                            <div className="text-xs text-gray-400">{b.floors} tầng — {b.gfa} m²</div>
                        </div>
                        <div className="w-px h-8 bg-white/10" />
                        <div className="text-sm text-gray-300">{b.usage.join(' | ')}</div>
                    </div>
                ))}
            </div>
        </GlassCard>
    );
}

function SpecsTab() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {infrastructure.specs.map((spec, i) => {
                const Icon = specIcons[spec.iconName as keyof typeof specIcons];
                return (
                    <GlassCard key={i} hoverEffect className="p-4 h-full">
                        <Icon size={20} style={{ color: spec.color }} className="mb-2" />
                        <div className="text-xs font-bold text-gray-300 mb-1">{spec.label}</div>
                        <div className="text-xs text-gray-400 leading-relaxed">{spec.value}</div>
                    </GlassCard>
                );
            })}
        </div>
    );
}

function PhotosTab() {
    return (
        <div className="grid md:grid-cols-3 gap-4">
            <GlassCard className="p-0 overflow-hidden">
                <OptimizedImage {...images['infra-01']} placeholderLabel="Tổng quan Xưởng CNC" placeholderColor="#E040FB" className="w-full h-48 object-cover" aspectRatio="16/9" />
            </GlassCard>
            <GlassCard className="p-0 overflow-hidden">
                <OptimizedImage {...images['infra-02']} placeholderLabel="Hệ thống tủ Rack máy chủ" placeholderColor="#76FF03" className="w-full h-48 object-cover" aspectRatio="16/9" />
            </GlassCard>
            <GlassCard className="p-0 overflow-hidden">
                <OptimizedImage {...images['infra-03']} placeholderLabel="Hệ thống làm mát CRAC/CDU" placeholderColor="#76FF03" className="w-full h-48 object-cover" aspectRatio="16/9" />
            </GlassCard>
        </div>
    );
}

function CNCLineTab() {
    return (
        <div className="space-y-4">
            <GlassCard className="p-0 overflow-hidden">
                <OptimizedImage {...images['cnc-floor']} placeholderLabel="Xưởng máy CNC công nghiệp" placeholderColor="#E040FB" className="w-full h-48 object-cover object-center" aspectRatio="16/9" />
            </GlassCard>
            <GlassCard className="p-5">
                <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2"><Cog size={16} className="text-neon-magenta" /> Dây chuyền CNC — Tầng 1 Xưởng</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                    {[
                        { label: 'Tổng máy', value: '10', color: '#E040FB' },
                        { label: 'Clear height', value: '8 m', color: '#00E5FF' },
                        { label: 'Diện tích', value: '3.360 m²', color: '#76FF03' },
                        { label: 'Crane', value: '5T overhead', color: '#FF9100' },
                    ].map((item, i) => (
                        <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                            <div className="text-lg font-extrabold" style={{ color: item.color }}>{item.value}</div>
                            <div className="text-[9px] text-gray-400">{item.label}</div>
                        </div>
                    ))}
                </div>
                <div className="text-xs text-gray-400">
                    <p className="mb-1">Layout: 5-axis CNC cluster + Wire EDM + Grinding — luồng quy trình từ raw material → milling → EDM → finishing → QA</p>
                    <p>Utility: khí nén 8 bar, coolant ZLD recirculation, chip conveyor tự động</p>
                </div>
            </GlassCard>
            <GlassCard className="p-4">
                <h4 className="text-sm font-bold text-white mb-3">Quy trình gia công</h4>
                <div className="flex flex-wrap items-center gap-3 text-[12px]">
                    {['Nhập liệu', 'Phôi/Cắt', '5-Axis Milling', 'Wire EDM', 'Grinding', 'QA/QC CMM', 'Xuất hàng'].map((step, i) => (
                        <span key={i} className="flex items-center gap-2">
                            <span className="px-3 py-2 rounded bg-neon-magenta/10 border border-neon-magenta/20 text-gray-300">{step}</span>
                            {i < 6 && <span className="text-gray-600 font-bold">→</span>}
                        </span>
                    ))}
                </div>
            </GlassCard>
        </div>
    );
}

function DCTab() {
    return (
        <GlassCard className="p-5">
            <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2"><Server size={16} className="text-green-400" /> Datacenter Nội bộ</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                {[
                    { label: 'Diện tích', value: '200 m²', color: '#76FF03' },
                    { label: 'Rack', value: '5–8', color: '#00E5FF' },
                    { label: 'Công suất', value: '30–50 kW', color: '#E040FB' },
                    { label: 'Vị trí', value: 'Tầng 2 Xưởng', color: '#FF9100' },
                ].map((item, i) => (
                    <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                        <div className="text-lg font-extrabold" style={{ color: item.color }}>{item.value}</div>
                        <div className="text-[9px] text-gray-400">{item.label}</div>
                    </div>
                ))}
            </div>
            <div className="space-y-2 text-xs text-gray-300">
                <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5">
                    <span className="text-green-400 font-semibold">Mục đích:</span> Hỗ trợ nội bộ R&D, KinexusOS hosting, AI training, BMS/SCADA
                </div>
                <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5">
                    <span className="text-green-400 font-semibold">Hạ tầng:</span> UPS 50 kVA, CRAC cooling, NOVEC 1230, VESDA, Access control, CCTV
                </div>
                <div className="p-2 rounded-lg bg-red-500/5 border border-red-500/10">
                    <span className="text-red-400 font-semibold">Lưu ý:</span> Không thương mại hóa — chỉ sử dụng nội bộ, không GPU-aaS, không colocation
                </div>
            </div>
        </GlassCard>
    );
}

const tabs: TabConfig[] = [
    { key: 'layout', label: 'Layout tổng', icon: Layout, content: <LayoutTab /> },
    { key: 'specs', label: 'Thông số Kỹ thuật', icon: Zap, content: <SpecsTab /> },
    { key: 'cnc-line', label: 'CNC Line', icon: Cog, content: <CNCLineTab /> },
    { key: 'dc', label: 'DC Nội bộ', icon: Server, content: <DCTab /> },
    { key: 'photos', label: 'Hình ảnh', icon: Image, content: <PhotosTab /> },
];

export function Infrastructure() {
    return (
        <TabSlide
            id="infra"
            title="Hạ tầng 3 Công trình"
            subtitle={`1 ha tại KCNC TP.HCM — 3 công trình — ${infrastructure.campus.totalGFA} m² GFA — Mật độ xây dựng ${infrastructure.campus.buildingDensity}`}
            tabs={tabs}
        />
    );
}
