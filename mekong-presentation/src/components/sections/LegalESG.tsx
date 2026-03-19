import { Leaf, Shield, Users, FileCheck, Award, Check } from 'lucide-react';
import { TabSlide, type TabConfig } from '../ui/TabSlide';
import { GlassCard } from '../ui/GlassCard';
import { OptimizedImage } from '../ui/OptimizedImage';
import { legal } from '../../data/legal';
import { images } from '../../data/images';

const esgIcons = { Leaf, Users, Shield } as const;

function PermitsTab() {
    return (
        <GlassCard className="p-4">
            <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2"><FileCheck size={16} className="text-neon-cyan" /> Giấy phép Chính</h4>
            <div className="space-y-2">
                {legal.permits.map((p, i) => (
                    <div key={i} className="flex items-center gap-3 py-2 border-b border-white/5 last:border-0">
                        <div className="flex-1">
                            <div className="text-xs font-semibold text-white">{p.name}</div>
                            <div className="text-xs text-gray-500">{p.agency} · {p.time}</div>
                        </div>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan">{p.status}</span>
                    </div>
                ))}
            </div>
            <div className="mt-3 text-xs text-gray-500 text-center">Tổng {legal.totalPermits} giấy phép · Chi phí ~{legal.legalCost}</div>
        </GlassCard>
    );
}

function ESGTab() {
    return (
        <div className="space-y-4">
            {legal.esg.map((esg, i) => {
                const Icon = esgIcons[esg.iconName as keyof typeof esgIcons];
                return (
                    <GlassCard key={i} className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <Icon size={16} style={{ color: esg.color }} />
                            <h5 className="text-sm font-bold" style={{ color: esg.color }}>{esg.title}</h5>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                            {esg.items.map((item, j) => (
                                <div key={j} className="text-xs text-gray-300 flex items-start gap-1">
                                    <Check size={12} className="text-green-400 mt-0.5 flex-shrink-0" /> {item}
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                );
            })}
            <GlassCard className="p-3 overflow-hidden max-w-2xl mx-auto">
                <OptimizedImage {...images['esg-01']} placeholderLabel="Mái pin năng lượng mặt trời" placeholderColor="#76FF03" />
            </GlassCard>
        </div>
    );
}

function CertsTab() {
    return (
        <GlassCard className="p-4">
            <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2"><Award size={16} className="text-neon-cyan" /> Lộ trình Chứng nhận</h4>
            <div className="flex flex-wrap gap-3">
                {legal.certPath.map((cert, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-2 px-4 py-2 rounded-full transition-transform hover:scale-105"
                        style={{ background: `${cert.color}10`, border: `1px solid ${cert.color}30` }}
                    >
                        <span className="text-xs font-bold" style={{ color: cert.color }}>{cert.year}</span>
                        <span className="text-xs text-gray-300">{cert.cert}</span>
                    </div>
                ))}
            </div>
        </GlassCard>
    );
}

const tabs: TabConfig[] = [
    { key: 'permits', label: 'Cơ sở pháp lý', icon: FileCheck, content: <PermitsTab /> },
    { key: 'esg', label: 'Solar/EDGE/ESG', icon: Leaf, content: <ESGTab /> },
    { key: 'certs', label: 'Chứng nhận', icon: Award, content: <CertsTab /> },
];

export function LegalESG() {
    return (
        <TabSlide
            id="legal-esg"
            title="Pháp lý & ESG"
            subtitle={`${legal.totalPermits} giấy phép — Zero Liquid Discharge — ESG commitment đầy đủ`}
            tabs={tabs}
        />
    );
}
