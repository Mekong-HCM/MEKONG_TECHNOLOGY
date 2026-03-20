import { AlertTriangle, TrendingUp, Factory, Cpu, Globe, MapPin } from 'lucide-react';
import { TabSlide, type TabConfig } from '../ui/TabSlide';
import { GlassCard } from '../ui/GlassCard';
import { OptimizedImage } from '../ui/OptimizedImage';
import { images } from '../../data/images';
import { marketGaps, urgencyKPIs, targetIndustries } from '../../data/operations';

function GlobalTab() {
    return (
        <div className="space-y-4">
            <GlassCard className="p-0 overflow-hidden relative">
                <OptimizedImage {...images['premium-factory']} placeholderLabel="Nhà máy công nghệ cao hiện đại" placeholderColor="#FF9100" className="w-full h-36 object-cover object-center" aspectRatio="16/5" />
                <div className="absolute inset-0 bg-gradient-to-r from-dark-950/85 via-dark-950/50 to-transparent flex items-end px-5 pb-3">
                    <div className="text-[10px] text-gray-300">Nhu cầu điện tử thông minh và gia công CNC chính xác tại Việt Nam đang tăng trưởng mạnh mẽ</div>
                </div>
            </GlassCard>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                    { icon: Factory, label: 'DNNVV cần IoT', value: urgencyKPIs.smeCount, color: 'text-neon-cyan' },
                    { icon: TrendingUp, label: 'FDI nhập khẩu CNC', value: urgencyKPIs.fdiImport, color: 'text-neon-magenta' },
                    { icon: Cpu, label: 'CNC VN 2024', value: urgencyKPIs.cncMarket2024, color: 'text-green-400' },
                    { icon: TrendingUp, label: 'CNC VN 2030', value: urgencyKPIs.cncMarket2030, color: 'text-yellow-400' },
                    { icon: TrendingUp, label: 'CAGR', value: urgencyKPIs.cncCAGR, color: 'text-blue-400' },
                    { icon: Factory, label: 'Mekong target', value: urgencyKPIs.mekongTarget, color: 'text-purple-400' },
                ].map((kpi, i) => (
                    <GlassCard key={i} className="p-3 text-center">
                        <kpi.icon size={16} className={`mx-auto mb-1 ${kpi.color}`} />
                        <div className={`text-lg font-extrabold ${kpi.color}`}>{kpi.value}</div>
                        <div className="text-[10px] text-gray-400">{kpi.label}</div>
                    </GlassCard>
                ))}
            </div>
        </div>
    );
}

function VietnamTab() {
    return (
        <GlassCard className="p-4 overflow-x-auto">
            <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <AlertTriangle size={14} className="text-yellow-400" /> Khoảng trống thị trường miền Nam VN
            </h3>
            <table className="w-full text-xs">
                <thead><tr className="text-gray-400 border-b border-white/10">
                    <th className="text-left py-1.5">Tiêu chí</th>
                    <th className="text-center py-1.5">Cung</th>
                    <th className="text-center py-1.5">Cầu</th>
                    <th className="text-center py-1.5">Gap</th>
                    <th className="text-center py-1.5">Trạng thái</th>
                </tr></thead>
                <tbody>
                    {marketGaps.map((g, i) => (
                        <tr key={i} className="border-b border-white/5">
                            <td className="py-1.5 text-gray-300">{g.criteria}</td>
                            <td className="text-center text-gray-400">{g.supply}</td>
                            <td className="text-center text-gray-400">{g.demand}</td>
                            <td className="text-center font-bold text-neon-cyan">{g.gap}</td>
                            <td className="text-center">
                                <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${g.status === 'Chưa có' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                                    {g.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </GlassCard>
    );
}

function KCNCTab() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {targetIndustries.map((ind, i) => (
                <GlassCard key={i} className="p-3">
                    <div className="text-xs font-bold text-white mb-1">{ind.name}</div>
                    <div className="text-[10px] text-gray-400 mb-1">{ind.customers}</div>
                    <div className="text-sm font-extrabold text-neon-magenta">{ind.spend}</div>
                </GlassCard>
            ))}
        </div>
    );
}

const tabs: TabConfig[] = [
    { key: 'global', label: 'Thị trường Toàn cầu', icon: Globe, content: <GlobalTab /> },
    { key: 'vietnam', label: 'Bối cảnh VN', icon: MapPin, content: <VietnamTab /> },
    { key: 'kcnc', label: 'Cơ hội KCNC', icon: Factory, content: <KCNCTab /> },
];

export function Urgency() {
    return (
        <TabSlide
            id="urgency"
            title="Tính Cấp thiết"
            subtitle="83.035 DNNVV cần IoT — Việt Nam chưa có nhà máy CNC đạt ISO 9001+ tại KCNC TP.HCM"
            tabs={tabs}
        />
    );
}
