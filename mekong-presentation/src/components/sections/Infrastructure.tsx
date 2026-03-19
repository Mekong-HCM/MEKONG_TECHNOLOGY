import { Building2, Zap, Droplets, Sun, Shield, Thermometer, Layout, Image } from 'lucide-react';
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
                        <div className="flex-shrink-0 w-24 text-center">
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

const tabs: TabConfig[] = [
    { key: 'layout', label: 'Layout tổng', icon: Layout, content: <LayoutTab /> },
    { key: 'specs', label: 'Thông số Kỹ thuật', icon: Zap, content: <SpecsTab /> },
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
