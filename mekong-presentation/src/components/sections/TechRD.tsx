import { Cpu, Layers, Wifi, Beaker, TrendingUp, Target, DollarSign, Microscope, Users, FlaskConical, Award, GraduationCap, Handshake, FileText } from 'lucide-react';
import { TabSlide, type TabConfig } from '../ui/TabSlide';
import { GlassCard } from '../ui/GlassCard';
import { OptimizedImage } from '../ui/OptimizedImage';
import { images } from '../../data/images';
import { techStackLayers } from '../../data/operations';
import { rdBudget, rdTeam, rdLabs, trlRoadmap, partnerships, ipTargets } from '../../data/rdData';

const layerColors = ['#00E5FF', '#E040FB', '#76FF03', '#f59e0b', '#8b5cf6'];
const layerIcons = [Cpu, Wifi, Cpu, Layers, Layers];

/* ─── Tab 1: Tech Stack ─── */
function TechStackTab() {
    return (
        <div className="grid md:grid-cols-3 gap-4">
            <div className="md:col-span-2 space-y-3">
                {techStackLayers.map((layer, i) => {
                const Icon = layerIcons[i];
                const color = layerColors[i];
                return (
                    <GlassCard key={layer.layer} className="p-3" accentColor={color}>
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
                );
            })}
            <div className="mt-4 text-center text-[10px] text-gray-500">
                13 giao thức công nghiệp — Tương thích 16 sản phẩm — ROS2 ready
            </div>
            </div>
            {/* Cloud ERP visual */}
            <div className="flex flex-col gap-3">
                <GlassCard className="p-0 overflow-hidden flex-1">
                    <OptimizedImage {...images['cloud-erp']} placeholderLabel="Nền tảng ERP Đám mây" placeholderColor="#76FF03" className="w-full h-full object-cover min-h-[200px]" aspectRatio="4/5" />
                </GlassCard>
                <GlassCard className="p-3 text-center">
                    <div className="text-xs font-bold text-neon-cyan mb-1">MekongOS Platform</div>
                    <div className="text-[10px] text-gray-400">Cloud-connected · OPC-UA · MQTT · ROS2</div>
                </GlassCard>
            </div>
        </div>
    );
}

/* ─── Tab 2: R&D Labs ─── */
function LabsTab() {
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                {[
                    { icon: DollarSign, label: 'Budget 10Y', value: rdBudget.total10Y, color: 'text-neon-cyan' },
                    { icon: Beaker, label: 'Đội ngũ R&D', value: `${rdTeam.totalEngineers} KS (${rdTeam.pctOfStaff})`, color: 'text-neon-magenta' },
                    { icon: Target, label: '% Doanh thu', value: rdBudget.pctRevenue, color: 'text-green-400' },
                    { icon: TrendingUp, label: 'TRL Target', value: rdTeam.trlTarget, color: 'text-yellow-400' },
                ].map((kpi, i) => (
                    <GlassCard key={i} className="p-4 text-center">
                        <kpi.icon size={20} className={`${kpi.color} mx-auto mb-2`} />
                        <div className={`text-xl font-extrabold ${kpi.color}`}>{kpi.value}</div>
                        <div className="text-[10px] text-gray-400 mt-1">{kpi.label}</div>
                    </GlassCard>
                ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {rdLabs.map((lab, i) => (
                    <GlassCard key={i} hoverEffect className="p-5 h-full" accentColor={lab.color}>
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lab.color }} />
                            <h4 className="text-sm font-bold text-white">{lab.name}</h4>
                        </div>
                        <div className="grid grid-cols-3 gap-2 mb-3">
                            <div className="text-center">
                                <FlaskConical size={12} className="text-gray-500 mx-auto mb-0.5" />
                                <div className="text-[10px] text-gray-400">{lab.area}</div>
                            </div>
                            <div className="text-center">
                                <Microscope size={12} className="text-gray-500 mx-auto mb-0.5" />
                                <div className="text-[10px] text-gray-400">{lab.budget}</div>
                            </div>
                            <div className="text-center">
                                <Users size={12} className="text-gray-500 mx-auto mb-0.5" />
                                <div className="text-[10px] text-gray-400">{lab.team} KS</div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-1">
                            {lab.focus.map((f, j) => (
                                <span key={j} className="px-1.5 py-0.5 rounded text-[9px] text-gray-300 border border-white/5" style={{ background: `${lab.color}08` }}>
                                    {f}
                                </span>
                            ))}
                        </div>
                    </GlassCard>
                ))}

                {/* Summary card */}
                <GlassCard className="p-5 h-full flex flex-col justify-center items-center text-center">
                    <div className="text-4xl font-extrabold gradient-text mb-1">{rdTeam.totalEngineers}</div>
                    <div className="text-xs text-gray-400 mb-3">Kỹ sư R&D</div>
                    <div className="text-2xl font-extrabold text-yellow-400 mb-1">{rdLabs.length}</div>
                    <div className="text-xs text-gray-400 mb-3">Phòng lab chuyên biệt</div>
                    <div className="text-lg font-bold text-green-400">12-15%</div>
                    <div className="text-[10px] text-gray-400">tổng nhân sự là R&D</div>
                </GlassCard>
            </div>
        </div>
    );
}

/* ─── Tab 3: IP & Patents ─── */
const typeIcons: Record<string, typeof Award> = {
    'Technology Transfer': Handshake,
    'Training': GraduationCap,
    'Certification': Award,
    'Academic R&D': GraduationCap,
};

function IPTab() {
    return (
        <div className="grid md:grid-cols-2 gap-4">
            {/* IP Targets */}
            <GlassCard className="p-5 h-full">
                <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                    <FileText size={16} className="text-yellow-400" />
                    Mục tiêu Sở hữu Trí tuệ
                </h4>
                <div className="space-y-3">
                    {ipTargets.map((ip, i) => (
                        <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/[0.03] border border-white/5">
                            <span className="text-xs text-gray-300">{ip.type}</span>
                            <div className="flex gap-4">
                                <div className="text-center">
                                    <div className="text-sm font-bold text-neon-cyan">{ip.fiveYear}</div>
                                    <div className="text-[9px] text-gray-500">5 năm</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-sm font-bold text-neon-magenta">{ip.tenYear}</div>
                                    <div className="text-[9px] text-gray-500">10 năm</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-4 p-3 rounded-lg bg-yellow-400/5 border border-yellow-400/10">
                    <div className="text-xs text-yellow-400/80">IP là rào cản cạnh tranh bền vững — Đối thủ cần 3-5 năm để sao chép</div>
                </div>
            </GlassCard>

            {/* Partnerships */}
            <GlassCard className="p-5 h-full">
                <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                    <Handshake size={16} className="text-neon-cyan" />
                    Đối tác Chuyển giao Công nghệ
                </h4>
                <div className="space-y-2">
                    {partnerships.map((p, i) => {
                        const Icon = typeIcons[p.type] || Handshake;
                        return (
                            <div key={i} className="flex items-start gap-3 p-2 rounded-lg bg-white/[0.02] border border-white/5">
                                <Icon size={14} className="text-gray-500 mt-0.5 flex-shrink-0" />
                                <div className="flex-1">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-xs font-bold text-white">{p.partner}</span>
                                        <span className="text-[9px] text-gray-500">({p.origin})</span>
                                    </div>
                                    <div className="text-[10px] text-gray-400">{p.scope}</div>
                                </div>
                                <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-gray-500 whitespace-nowrap">{p.type}</span>
                            </div>
                        );
                    })}
                </div>
            </GlassCard>
        </div>
    );
}

/* ─── Tab 4: TRL Roadmap ─── */
function TRLTab() {
    return (
        <div className="space-y-4">
            <GlassCard className="p-5">
                <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                    <TrendingUp size={16} className="text-neon-cyan" />
                    Lộ trình Trưởng thành Công nghệ (TRL)
                </h4>
                <div className="space-y-4">
                    {trlRoadmap.map((phase, i) => (
                        <div key={i} className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: phase.color, boxShadow: `0 0 8px ${phase.color}60` }} />
                                {i < trlRoadmap.length - 1 && <div className="w-px flex-1 bg-white/10 mt-1" />}
                            </div>
                            <div className="flex-1 pb-2">
                                <div className="flex items-baseline gap-2 mb-1">
                                    <span className="text-sm font-bold" style={{ color: phase.color }}>{phase.phase}</span>
                                    <span className="text-[10px] text-gray-500">{phase.timeline}</span>
                                </div>
                                <div className="flex flex-wrap gap-1.5">
                                    {phase.milestones.map((m, j) => (
                                        <span key={j} className="px-2 py-0.5 rounded text-[10px] bg-white/5 text-gray-300 border border-white/5">
                                            {m}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </GlassCard>

            <div className="flex gap-4 text-[10px] text-gray-500 flex-wrap">
                <span>Methodology: {rdTeam.methodology}</span>
                <span>Cam kết: {rdBudget.minCommitment}</span>
                <span>Trình độ: {rdTeam.qualifications}</span>
            </div>
        </div>
    );
}

/* ─── Main Export ─── */
const tabs: TabConfig[] = [
    { key: 'stack', label: 'Tech Stack', icon: Layers, content: <TechStackTab /> },
    { key: 'labs', label: 'R&D Labs', icon: Beaker, content: <LabsTab /> },
    { key: 'ip', label: 'IP & Patents', icon: FileText, content: <IPTab /> },
    { key: 'trl', label: 'TRL Roadmap', icon: TrendingUp, content: <TRLTab /> },
];

export function TechRD() {
    return (
        <TabSlide
            id="tech-rd"
            title="Công nghệ & R&D"
            subtitle="5 tầng kiến trúc — 4 phòng lab — 15-20 bằng sáng chế 10 năm — TRL 7-9"
            tabs={tabs}
        />
    );
}
