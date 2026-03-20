import { DollarSign, Users, TrendingUp, ShoppingBag, Cpu, Cog, Cloud, Wrench, GraduationCap } from 'lucide-react';
import { TabSlide, type TabConfig } from '../ui/TabSlide';
import { GlassCard } from '../ui/GlassCard';
import { financials } from '../../data/financials';
import { targetIndustries } from '../../data/operations';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid } from 'recharts';

const revenueStreams = [
    { name: 'IoT Gateway (MK-200/300)', bu: 'BU1', icon: Cpu, estimate: '2,5-3,5M/năm', margin: '50-65%', start: 'Y4', color: '#00E5FF' },
    { name: 'Robot AMR/AGV', bu: 'BU1', icon: Cpu, estimate: '1,5-2,5M/năm', margin: '30-40%', start: 'Y4', color: '#4dd2ff' },
    { name: 'MekongOS SaaS', bu: 'BU1', icon: Cloud, estimate: '0,8-1,5M/năm', margin: '75-85%', start: 'Y4', color: '#E040FB' },
    { name: 'MekongBMS/SCADA', bu: 'BU1', icon: Cloud, estimate: '0,5-1,0M/năm', margin: '60-70%', start: 'Y5', color: '#b040db' },
    { name: 'OHT-100 (Semiconductor)', bu: 'BU1', icon: Cpu, estimate: '0,5-1,0M/năm', margin: '35-45%', start: 'Y6', color: '#76FF03' },
    { name: 'CNC Outsource (FDI)', bu: 'BU2', icon: Cog, estimate: '2,0-3,0M/năm', margin: '38-45%', start: 'Y5', color: '#FF9100' },
    { name: 'CNC Custom Parts', bu: 'BU2', icon: Cog, estimate: '0,5-1,0M/năm', margin: '40-50%', start: 'Y5', color: '#f59e0b' },
    { name: 'Dịch vụ Kỹ thuật & Đào tạo', bu: 'BU1+2', icon: Wrench, estimate: '0,3-0,5M/năm', margin: '50-60%', start: 'Y4', color: '#8b5cf6' },
    { name: 'Vận hành & Bảo trì', bu: 'BU1+2', icon: GraduationCap, estimate: '0,2-0,5M/năm', margin: '55-65%', start: 'Y5', color: '#22c55e' },
];

/* ─── Tab 1: 9 Nguồn Doanh thu ─── */
function StreamsTab() {
    return (
        <div className="space-y-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {revenueStreams.map((s, i) => (
                    <div key={i} className="corporate-card-hover p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <s.icon size={16} style={{ color: s.color }} />
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-gray-500">{s.bu}</span>
                        </div>
                        <h4 className="text-sm font-bold text-white mb-2">{s.name}</h4>
                        <div className="space-y-1 text-xs">
                            <div className="flex justify-between">
                                <span className="text-gray-400">Doanh thu</span>
                                <span className="data-highlight font-semibold">{s.estimate}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Gross Margin</span>
                                <span className="text-green-400 font-semibold">{s.margin}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Bắt đầu</span>
                                <span className="text-gray-300">{s.start}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="corporate-card p-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                        <div className="data-highlight-lg">9</div>
                        <div className="text-xs text-gray-400">Nguồn doanh thu</div>
                    </div>
                    <div>
                        <div className="data-highlight-lg">12,00M</div>
                        <div className="text-xs text-gray-400">USD/năm (steady Y12+)</div>
                    </div>
                    <div>
                        <div className="data-highlight-lg">~140M</div>
                        <div className="text-xs text-gray-400">USD lũy kế 15 năm</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ─── Tab 2: Revenue Table ─── */
function RevenueTab() {
    return (
        <div className="space-y-4">
            <div className="corporate-card p-5">
                <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                    <TrendingUp size={16} className="text-corporate-gold" />
                    Doanh thu lũy kế Y4-Y15 (M USD)
                </h4>
                <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={financials.revenue15Y} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                        <XAxis dataKey="year" tick={{ fill: '#d1d5db', fontSize: 11 }} axisLine={false} tickLine={false} />
                        <YAxis tick={{ fill: '#d1d5db', fontSize: 11 }} axisLine={false} tickLine={false} />
                        <Tooltip
                            contentStyle={{ background: '#191d44', border: '1px solid rgba(201,154,46,0.3)', borderRadius: '8px', fontSize: '11px', color: '#fff' }}
                            itemStyle={{ color: '#e5e7eb' }}
                            labelStyle={{ color: '#d1d5db' }}
                            formatter={(v: number) => [`${v.toFixed(1)}M USD`, '']}
                        />
                        <Area type="monotone" dataKey="iot" stackId="1" stroke="#00E5FF" fill="#00E5FF" fillOpacity={0.3} name="BU1 IoT" />
                        <Area type="monotone" dataKey="cnc" stackId="1" stroke="#E040FB" fill="#E040FB" fillOpacity={0.3} name="BU2 CNC" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            {/* Revenue table */}
            <div className="corporate-card p-5 overflow-x-auto">
                <table className="w-full text-xs">
                    <thead>
                        <tr className="border-b border-corporate-slate/20">
                            <th className="text-left py-2 text-gray-400">Năm</th>
                            <th className="text-right py-2 text-neon-cyan">BU1 IoT</th>
                            <th className="text-right py-2 text-pink-400">BU2 CNC</th>
                            <th className="text-right py-2 data-highlight font-bold">Tổng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {financials.revenue15Y.map((row, i) => (
                            <tr key={i} className="border-b border-white/5">
                                <td className="py-2 text-gray-300 font-semibold">{row.year}</td>
                                <td className="text-right py-2 text-neon-cyan">{row.iot.toFixed(1)}</td>
                                <td className="text-right py-2 text-pink-400">{row.cnc.toFixed(1)}</td>
                                <td className="text-right py-2 data-highlight font-bold">{row.total.toFixed(1)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                    { label: 'Breakeven', value: financials.kpis.breakevenYear },
                    { label: 'Revenue Y10', value: `${financials.kpis.revenueY10.toFixed(1)}M` },
                    { label: 'Revenue Y15 (steady)', value: `${financials.kpis.revenueY15.toFixed(1)}M` },
                    { label: 'EBITDA Steady', value: financials.kpis.ebitdaSteady },
                ].map((kpi, i) => (
                    <div key={i} className="corporate-card p-3 text-center">
                        <div className="data-highlight text-lg font-bold">{kpi.value}</div>
                        <div className="text-[10px] text-gray-400">{kpi.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ─── Tab 3: Khách hàng Mục tiêu ─── */
function CustomersTab() {
    return (
        <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
                {targetIndustries.map((ind, i) => (
                    <div key={i} className="corporate-card-hover p-5">
                        <div className="flex items-center gap-2 mb-3">
                            <ShoppingBag size={16} className="text-corporate-gold" />
                            <h4 className="text-sm font-bold text-white">{ind.name}</h4>
                        </div>
                        <div className="space-y-2 text-xs">
                            <div>
                                <span className="text-gray-400">Khách hàng: </span>
                                <span className="text-gray-300">{ind.customers}</span>
                            </div>
                            <div>
                                <span className="text-gray-400">Chi tiêu thị trường: </span>
                                <span className="data-highlight font-semibold">{ind.spend}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="corporate-card p-5">
                <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                    <Users size={16} className="text-corporate-gold" />
                    Chiến lược Tiếp cận Khách hàng
                </h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {[
                        { segment: 'FDI Tier 1', approach: 'Direct sales, CNC outsource contract 3-5 năm', size: 'Samsung, Intel, Bosch, Nidec' },
                        { segment: 'DNNVV Sản xuất', approach: 'IoT/BMS bundle, MekongOS SaaS', size: '83.035 DN toàn quốc' },
                        { segment: 'ASEAN Export', approach: 'Distributor + online, AFTA/RCEP ưu đãi', size: 'Singapore, Thái Lan, Malaysia' },
                        { segment: 'Chính phủ & KCNC', approach: 'Tender, smart city, BMS cho tòa nhà công', size: 'SHTP, Becamex, VSIP' },
                    ].map((s, i) => (
                        <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-corporate-slate/20">
                            <div className="text-xs font-bold text-white mb-1">{s.segment}</div>
                            <div className="text-[10px] text-gray-400 mb-2">{s.approach}</div>
                            <div className="text-[10px] text-corporate-gold">{s.size}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

/* ─── Main Export ─── */
const tabs: TabConfig[] = [
    { key: 'streams', label: '9 Nguồn Doanh thu', icon: DollarSign, content: <StreamsTab /> },
    { key: 'revenue', label: 'Revenue Y4-Y15', icon: TrendingUp, content: <RevenueTab /> },
    { key: 'customers', label: 'Khách hàng Mục tiêu', icon: Users, content: <CustomersTab /> },
];

export function BusinessModel() {
    return (
        <TabSlide
            id="business-model"
            title="Mô hình Kinh doanh"
            subtitle="9 nguồn doanh thu — Revenue steady 12,00M USD/năm (Y12+) — ~140M USD lũy kế 15 năm"
            tabs={tabs}
            className="section-corporate"
        />
    );
}
