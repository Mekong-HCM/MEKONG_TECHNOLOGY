import { timeline } from '../../data/timeline';
import { TabSlide, type TabConfig } from '../ui/TabSlide';
import { GlassCard } from '../ui/GlassCard';
import { CalendarDays, Flag } from 'lucide-react';

function PhasesTab() {
    return (
        <div className="relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/50 via-pink-500/50 to-green-500/50" />
            <div className="grid md:grid-cols-5 gap-4">
                {timeline.phases.map((phase) => (
                    <div key={phase.id} className="relative">
                        <div className="hidden md:flex absolute top-10 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-2 z-10 items-center justify-center"
                            style={{ borderColor: phase.color, background: '#0a0e2a' }}>
                            <div className="w-2.5 h-2.5 rounded-full" style={{ background: phase.color }} />
                        </div>
                        <GlassCard hoverEffect className="p-4 md:mt-16">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-xs font-black px-2 py-0.5 rounded" style={{ background: `${phase.color}20`, color: phase.color }}>
                                    {phase.id}
                                </span>
                                <span className="text-sm font-bold" style={{ color: phase.color }}>{phase.budget}</span>
                            </div>
                            <h4 className="text-sm font-bold text-white mb-1">{phase.name}</h4>
                            <p className="text-xs text-gray-500 mb-3">{phase.period}</p>
                            <ul className="space-y-1">
                                {phase.items.map((item, j) => (
                                    <li key={j} className="text-xs text-gray-300 flex items-start gap-1.5">
                                        <span style={{ color: phase.color }}>•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </GlassCard>
                    </div>
                ))}
            </div>
        </div>
    );
}

function MilestonesTab() {
    return (
        <GlassCard className="p-4">
            <h4 className="text-sm font-semibold text-white mb-4">Các Mốc Quan trọng</h4>
            <div className="flex flex-wrap gap-3">
                {timeline.milestones.map((m, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 transition-transform hover:scale-105 hover:border-neon-cyan/30"
                    >
                        <span className="neon-text font-bold text-sm">{m.year}</span>
                        <span className="text-xs text-gray-300">{m.event}</span>
                    </div>
                ))}
            </div>
        </GlassCard>
    );
}

const tabs: TabConfig[] = [
    { key: 'phases', label: 'Gantt 4 Phases', icon: CalendarDays, content: <PhasesTab /> },
    { key: 'milestones', label: 'Milestones', icon: Flag, content: <MilestonesTab /> },
];

export function ImplementationRoadmap() {
    return (
        <TabSlide
            id="roadmap"
            title="Lộ trình Triển khai"
            subtitle="4 giai đoạn — 10+ năm — từ pháp lý đến Full 2 BU Steady-state"
            tabs={tabs}
        />
    );
}
