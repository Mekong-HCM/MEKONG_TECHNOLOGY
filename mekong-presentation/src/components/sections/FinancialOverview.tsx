import { financials } from '../../data/financials';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend, BarChart, Bar } from 'recharts';
import { GlassCard } from '../ui/GlassCard';
import { TabSlide, type TabConfig } from '../ui/TabSlide';
import { TrendingUp, BarChart3, Target, Layers } from 'lucide-react';

const sensitivityData = financials.sensitivity.map(s => ({
    name: s.variable,
    negative: s.base - s.minus20,
    positive: s.plus20 - s.base,
    baseVal: s.base,
}));

function RevenueTab() {
    return (
        <GlassCard className="p-4">
            <h4 className="text-sm font-semibold text-white mb-3">Doanh thu 15 năm — theo Trụ cột (M USD)</h4>
            <ResponsiveContainer width="100%" height={280}>
                <AreaChart data={financials.revenue15Y} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorIot" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#00E5FF" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#00E5FF" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorCnc" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#E040FB" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#E040FB" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="year" tick={{ fill: '#ccc', fontSize: 11 }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fill: '#ccc', fontSize: 11 }} axisLine={false} tickLine={false} unit="M" />
                    <Tooltip
                        contentStyle={{ background: '#191d44', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '12px', color: '#fff' }}
                        itemStyle={{ color: '#76FF03' }}
                        labelStyle={{ color: '#ccc' }}
                        formatter={(v: number) => [`${v}M USD`]}
                    />
                    <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px', color: '#fff' }} />
                    <Area type="monotone" dataKey="iot" name="BU1 Điện tử thông minh" stackId="1" stroke="#00E5FF" fill="url(#colorIot)" strokeWidth={2} />
                    <Area type="monotone" dataKey="cnc" name="BU2 CNC/MPMC" stackId="1" stroke="#E040FB" fill="url(#colorCnc)" strokeWidth={2} />
                </AreaChart>
            </ResponsiveContainer>
        </GlassCard>
    );
}

function ScenariosTab() {
    return (
        <div className="space-y-4">
            <GlassCard className="p-4">
                <h4 className="text-sm font-semibold text-white mb-3">3 Kịch bản Đầu tư</h4>
                <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="text-left py-2 text-gray-400 font-medium">Chỉ số</th>
                                {financials.scenarios.map((s, i) => (
                                    <th key={i} className="text-right py-2 text-gray-400 font-medium">{s.name}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-white/5">
                                <td className="py-2 text-gray-300">DT Lũy kế 15Y</td>
                                {financials.scenarios.map((s, i) => <td key={i} className="text-right py-2 text-white font-semibold">{s.revenue15Y}M</td>)}
                            </tr>
                            <tr className="border-b border-white/5">
                                <td className="py-2 text-gray-300">NPV (50Y)</td>
                                {financials.scenarios.map((s, i) => <td key={i} className="text-right py-2 text-white font-semibold">{s.npv50}M</td>)}
                            </tr>
                            <tr className="border-b border-white/5">
                                <td className="py-2 text-gray-300">IRR (50Y)</td>
                                {financials.scenarios.map((s, i) => <td key={i} className="text-right py-2 text-white font-semibold">{s.irr50}%</td>)}
                            </tr>
                            <tr className="border-b border-white/5">
                                <td className="py-2 text-gray-300">Hoàn vốn</td>
                                {financials.scenarios.map((s, i) => <td key={i} className="text-right py-2 text-white font-semibold">{s.payback}Y</td>)}
                            </tr>
                            <tr>
                                <td className="py-2 text-gray-300">Xác suất</td>
                                {financials.scenarios.map((s, i) => <td key={i} className="text-right py-2 font-bold" style={{ color: ['#FF9100', '#76FF03', '#00E5FF'][i] }}>{s.probability}%</td>)}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </GlassCard>
            <GlassCard className="p-4">
                <h4 className="text-sm font-semibold text-white mb-3">Phân tích Nhạy cảm NPV (M USD)</h4>
                <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={sensitivityData} layout="vertical" margin={{ left: 10 }}>
                        <XAxis type="number" tick={{ fill: '#ccc', fontSize: 10 }} axisLine={false} tickLine={false} domain={[-8, 8]} />
                        <YAxis type="category" dataKey="name" tick={{ fill: '#ccc', fontSize: 11 }} axisLine={false} tickLine={false} width={70} />
                        <Tooltip
                            contentStyle={{ background: '#191d44', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '11px', color: '#fff' }}
                            itemStyle={{ color: '#76FF03' }}
                            labelStyle={{ color: '#ccc' }}
                        />
                        <Bar dataKey="negative" name="Giảm 20%" stackId="a" fill="#E040FB" radius={[6, 0, 0, 6]} barSize={18} />
                        <Bar dataKey="positive" name="Tăng 20%" stackId="a" fill="#00E5FF" radius={[0, 6, 6, 0]} barSize={18} />
                    </BarChart>
                </ResponsiveContainer>
            </GlassCard>
        </div>
    );
}

function KPITab() {
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {[
                    { label: 'CAPEX Tổng', value: '22,00M', color: '#FF9100' },
                    { label: 'Hòa vốn', value: '~Y10', color: '#76FF03' },
                    { label: 'DSCR Min', value: '1,50x', color: '#00E5FF' },
                    { label: 'Monte Carlo P(NPV>0)', value: '68%', color: '#E040FB' },
                    { label: 'DT Lũy kế 15Y', value: '~140M', color: '#00E5FF' },
                    { label: 'IRR 50Y', value: '13,0%', color: '#FF9100' },
                ].map((item, i) => (
                    <GlassCard key={i} className="p-3 text-center">
                        <div className="text-lg md:text-xl font-extrabold" style={{ color: item.color }}>{item.value}</div>
                        <div className="text-[10px] text-gray-400 mt-1">{item.label}</div>
                    </GlassCard>
                ))}
            </div>
            <GlassCard className="p-4">
                <h4 className="text-sm font-semibold text-white mb-3">Hòa vốn theo Trụ cột (Lãi/Lỗ Lũy kế)</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                    {[
                        { bu: 'BU1 Điện tử thông minh', breakeven: 'Y7', capex: '~9,40M', peakLoss: '-3,5M', color: '#00E5FF' },
                        { bu: 'BU2 CNC/MPMC', breakeven: 'Y8-Y9', capex: '~5,50M', peakLoss: '-2,5M', color: '#E040FB' },
                    ].map((item, i) => (
                        <div key={i} className="relative p-3 rounded-xl bg-white/[0.03] border border-white/5 overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full" style={{ background: item.color }} />
                            <div className="text-xs font-bold mb-2" style={{ color: item.color }}>{item.bu}</div>
                            <div className="space-y-1 text-[10px]">
                                <div className="flex justify-between"><span className="text-gray-400">CAPEX</span><span className="text-white font-semibold">{item.capex} USD</span></div>
                                <div className="flex justify-between"><span className="text-gray-400">Đỉnh lỗ lũy kế</span><span className="text-red-400 font-semibold">{item.peakLoss}</span></div>
                                <div className="flex justify-between"><span className="text-gray-400">Hòa vốn</span><span className="font-bold" style={{ color: item.color }}>{item.breakeven}</span></div>
                            </div>
                        </div>
                    ))}
                </div>
            </GlassCard>
        </div>
    );
}

function CapexTab() {
    const colors = ['#00E5FF', '#4dd2ff', '#E040FB', '#76FF03'];
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                    { label: 'Tổng CAPEX', value: '22,00M USD', color: '#FF9100' },
                    { label: 'Vốn CSH (81,8%)', value: '18,00M USD', color: '#00E5FF' },
                    { label: 'Vốn vay (18,2%)', value: '4,00M USD', color: '#E040FB' },
                    { label: 'Giải ngân', value: '4 giai đoạn', color: '#76FF03' },
                ].map((kpi, i) => (
                    <GlassCard key={i} className="p-3 text-center">
                        <div className="text-base font-extrabold" style={{ color: kpi.color }}>{kpi.value}</div>
                        <div className="text-[10px] text-gray-400 mt-0.5">{kpi.label}</div>
                    </GlassCard>
                ))}
            </div>
            <div className="grid sm:grid-cols-4 gap-3">
                {financials.phases.map((p, i) => (
                    <GlassCard key={i} className="p-3 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full" style={{ background: colors[i] }} />
                        <div className="text-[10px] font-bold mb-1" style={{ color: colors[i] }}>{p.name} · {p.period}</div>
                        <div className="text-lg font-extrabold text-white">{p.amount.toLocaleString('vi-VN', { minimumFractionDigits: 2 })}M</div>
                        <div className="text-[10px] text-gray-400 mt-0.5">{p.label}</div>
                        <div className="text-[9px] mt-1 px-1.5 py-0.5 rounded inline-block" style={{ background: `${colors[i]}20`, color: colors[i] }}>{p.source}</div>
                    </GlassCard>
                ))}
            </div>
        </div>
    );
}

const tabs: TabConfig[] = [
    { key: 'capex', label: 'CAPEX 4 Giai đoạn', icon: Layers, content: <CapexTab /> },
    { key: 'revenue', label: 'Revenue & EBITDA', icon: TrendingUp, content: <RevenueTab /> },
    { key: 'scenarios', label: 'NPV/IRR/Sensitivity', icon: BarChart3, content: <ScenariosTab /> },
    { key: 'kpi', label: 'DSCR/Payback', icon: Target, content: <KPITab /> },
];

export function FinancialOverview() {
    return (
        <TabSlide
            id="financials"
            title="Tài chính & Đầu tư"
            subtitle="Doanh thu 15 năm dự kiến ~140M USD — NPV(50Y) 1,50M USD — IRR 13,0%"
            tabs={tabs}
            className="section-corporate"
        />
    );
}
