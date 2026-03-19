import { Settings, Clock, Gauge, List } from 'lucide-react';
import { TabSlide, type TabConfig } from '../ui/TabSlide';
import { GlassCard } from '../ui/GlassCard';
import { cncMachines, cncCapacity, cncSpecs, shiftStructure, totalMachines, totalMachineCost } from '../../data/operations';

function MachinesTab() {
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {[
                    { label: 'Tổng máy', value: `${totalMachines}`, color: 'text-neon-cyan' },
                    { label: 'Tổng vốn máy', value: totalMachineCost, color: 'text-neon-magenta' },
                    { label: 'Tolerance', value: cncSpecs.tolerance, color: 'text-green-400' },
                    { label: 'Surface', value: cncSpecs.surfaceRoughness, color: 'text-yellow-400' },
                    { label: 'Công suất TK', value: cncSpecs.designCapacity, color: 'text-blue-400' },
                ].map((kpi, i) => (
                    <GlassCard key={i} className="p-2.5 text-center">
                        <div className={`text-base font-extrabold ${kpi.color}`}>{kpi.value}</div>
                        <div className="text-[9px] text-gray-400 mt-0.5">{kpi.label}</div>
                    </GlassCard>
                ))}
            </div>
            <GlassCard className="p-3 overflow-x-auto">
                <h3 className="text-xs font-bold text-white mb-2 flex items-center gap-2"><Settings size={12} className="text-neon-cyan" /> Danh sách thiết bị CNC</h3>
                <table className="w-full text-[10px]">
                    <thead><tr className="text-gray-400 border-b border-white/10">
                        <th className="text-left py-1">Model</th>
                        <th className="text-center py-1">Xuất xứ</th>
                        <th className="text-center py-1">Loại</th>
                        <th className="text-center py-1">SL</th>
                        <th className="text-right py-1">Đơn giá (K USD)</th>
                    </tr></thead>
                    <tbody>
                        {cncMachines.map((m, i) => (
                            <tr key={i} className="border-b border-white/5">
                                <td className="py-1 text-gray-300 font-medium">{m.model}</td>
                                <td className="text-center text-gray-400">{m.origin}</td>
                                <td className="text-center text-gray-400">{m.type}</td>
                                <td className="text-center text-neon-cyan font-bold">{m.qty}</td>
                                <td className="text-right text-gray-300">{m.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </GlassCard>
        </div>
    );
}

function CapacityTab() {
    return (
        <GlassCard className="p-3 overflow-x-auto">
            <h3 className="text-xs font-bold text-white mb-2 flex items-center gap-2"><Gauge size={12} className="text-green-400" /> Công suất theo năm</h3>
            <table className="w-full text-[10px]">
                <thead><tr className="text-gray-400 border-b border-white/10">
                    <th className="text-left py-1">Năm</th>
                    <th className="text-center py-1">Máy</th>
                    <th className="text-center py-1">Hiệu suất</th>
                    <th className="text-right py-1">Giờ máy/năm</th>
                    <th className="text-right py-1">Revenue</th>
                </tr></thead>
                <tbody>
                    {cncCapacity.map((c, i) => (
                        <tr key={i} className="border-b border-white/5">
                            <td className="py-1 text-white font-medium">{c.year}</td>
                            <td className="text-center text-gray-300">{c.machines}</td>
                            <td className="text-center text-neon-cyan">{c.utilization}</td>
                            <td className="text-right text-gray-300">{c.machineHrs}</td>
                            <td className="text-right text-neon-magenta font-bold">{c.revenue}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </GlassCard>
    );
}

function ShiftTab() {
    return (
        <GlassCard className="p-3">
            <h3 className="text-xs font-bold text-white mb-2 flex items-center gap-2"><Clock size={12} className="text-yellow-400" /> Chế độ vận hành</h3>
            <div className="space-y-2">
                {shiftStructure.map((s, i) => (
                    <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-white/5">
                        <span className="text-[10px] font-bold text-neon-cyan min-w-[32px]">{s.phase}</span>
                        <div>
                            <div className="text-xs text-white">{s.shifts}</div>
                            <div className="text-[9px] text-gray-400">{s.days}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-3 p-2 rounded-lg bg-neon-cyan/5 border border-neon-cyan/20">
                <div className="text-[10px] text-gray-400">Vật liệu gia công</div>
                <div className="flex flex-wrap gap-1 mt-1">
                    {cncSpecs.materials.map((m, i) => (
                        <span key={i} className="px-1.5 py-0.5 rounded bg-white/10 text-[9px] text-gray-300">{m}</span>
                    ))}
                </div>
            </div>
        </GlassCard>
    );
}

const tabs: TabConfig[] = [
    { key: 'machines', label: '10 máy CNC', icon: Settings, content: <MachinesTab /> },
    { key: 'capacity', label: 'Capacity Ramp', icon: Gauge, content: <CapacityTab /> },
    { key: 'shift', label: 'Chế độ vận hành', icon: Clock, content: <ShiftTab /> },
];

export function ProductionCapacity() {
    return (
        <TabSlide
            id="production"
            title="Năng lực Sản xuất CNC"
            subtitle={`${totalMachines} máy CNC — ${cncSpecs.designCapacity} — Tolerance ${cncSpecs.tolerance}`}
            tabs={tabs}
        />
    );
}
