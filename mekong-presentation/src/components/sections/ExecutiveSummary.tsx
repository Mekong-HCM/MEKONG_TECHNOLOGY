import { financials } from '../../data/financials';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Cpu, Cog, Server, Landmark, Users, GraduationCap, Banknote, BarChart3, Layout } from 'lucide-react';
import { TabSlide, type TabConfig } from '../ui/TabSlide';
import { GlassCard } from '../ui/GlassCard';
import { KPICard } from '../ui/KPICard';

const pieData = [
    { name: 'Vốn CSH', value: financials.capex.equity, color: '#00E5FF' },
    { name: 'Vay NH (từ Y7)', value: financials.capex.debt, color: '#E040FB' },
];

const kpis = [
    { label: 'Doanh thu Năm Y10', value: financials.kpis.revenueY10, suffix: 'M USD', color: '#00E5FF' },
    { label: 'Doanh thu Năm Y15', value: financials.kpis.revenueY15, suffix: 'M USD', color: '#4dd2ff' },
    { label: 'NPV (50Y, WACC 12%)', value: financials.kpis.npv50, suffix: 'M USD', color: '#76FF03' },
    { label: 'IRR Dự án (50Y)', value: financials.kpis.irr50, suffix: '%', color: '#E040FB' },
    { label: 'DSCR Min (YC: >1,3x)', value: financials.kpis.dscrMin, suffix: 'x', color: '#00E5FF' },
];

function OverviewTab() {
    return (
        <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { title: 'BU1: Điện tử Thông minh', desc: 'Gateway MK-200/300, Robot AMR, MekongOS Platform — 21 sản phẩm', color: '#00E5FF', Icon: Cpu },
                    { title: 'BU2: CNC/MPMC', desc: '10 máy CNC chính xác, Tolerance ≤5µm, ISO 9001 — 5 sản phẩm', color: '#E040FB', Icon: Cog },
                    { title: 'Hạ tầng Hỗ trợ', desc: 'DC nội bộ 5-8 rack, 4 Lab R&D, Solar 200 kWp — phục vụ 2 BU', color: '#76FF03', Icon: Server },
                ].map((pillar, i) => (
                    <GlassCard key={i} hoverEffect className="p-6 text-center h-full">
                        <div className="flex justify-center mb-3">
                            <pillar.Icon size={36} style={{ color: pillar.color }} />
                        </div>
                        <h3 className="text-lg font-bold mb-2" style={{ color: pillar.color }}>{pillar.title}</h3>
                        <p className="text-sm text-gray-400">{pillar.desc}</p>
                    </GlassCard>
                ))}
            </div>
            <GlassCard className="p-6 h-full">
                <h4 className="text-sm font-semibold text-gray-300 mb-4 text-center">Cấu trúc Vốn</h4>
                <ResponsiveContainer width="100%" height={180}>
                    <PieChart>
                        <Pie data={pieData} cx="50%" cy="50%" innerRadius={50} outerRadius={75} paddingAngle={3} dataKey="value" stroke="none">
                            {pieData.map((entry, index) => (<Cell key={index} fill={entry.color} />))}
                        </Pie>
                        <Tooltip
                            content={({ active, payload }) => {
                                if (!active || !payload || payload.length === 0) return null;
                                const item = payload[0];
                                const itemColor = (item?.payload as { color?: string } | undefined)?.color || '#e5e7eb';
                                return (
                                    <div
                                        style={{
                                            background: '#191d44',
                                            border: `1px solid ${itemColor}55`,
                                            borderRadius: '8px',
                                            fontSize: '12px',
                                            color: itemColor,
                                            padding: '6px 10px',
                                            fontWeight: 700,
                                        }}
                                    >
                                        {item?.name}: {item?.value}M USD
                                    </div>
                                );
                            }}
                        />
                    </PieChart>
                </ResponsiveContainer>
                <div className="flex justify-center gap-6 text-xs">
                    {pieData.map((d, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: d.color }} />
                            <span className="text-gray-400">{d.name} ({d.value}M — {((d.value / financials.capex.total) * 100).toFixed(1)}%)</span>
                        </div>
                    ))}
                </div>
            </GlassCard>
        </div>
    );
}

function PillarsTab() {
    return (
        <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
                <GlassCard className="p-5 border-l-4 border-neon-cyan">
                    <h4 className="text-base font-bold text-neon-cyan mb-2">BU1: Điện tử Thông minh</h4>
                    <div className="text-2xl font-extrabold text-white mb-3">70,8% <span className="text-sm text-gray-400 font-normal">doanh thu</span></div>
                    <ul className="space-y-1.5 text-xs text-gray-300">
                        <li className="flex items-center gap-2"><Cpu size={12} className="text-neon-cyan" /> IoT Gateway MK-200/MK-300 — 3.000 bộ/năm</li>
                        <li className="flex items-center gap-2"><Cpu size={12} className="text-neon-cyan" /> Robot AMR/AGV — 300 bộ/năm</li>
                        <li className="flex items-center gap-2"><Cpu size={12} className="text-neon-cyan" /> MekongOS SaaS Platform — 3 tiers</li>
                        <li className="flex items-center gap-2"><Cpu size={12} className="text-neon-cyan" /> MekongBMS — giám sát nhà máy</li>
                    </ul>
                    <div className="mt-3 text-[10px] text-gray-500">21 sản phẩm — Hardware + Software + Services</div>
                </GlassCard>
                <GlassCard className="p-5 border-l-4 border-neon-magenta">
                    <h4 className="text-base font-bold text-neon-magenta mb-2">BU2: CNC Siêu Chính Xác</h4>
                    <div className="text-2xl font-extrabold text-white mb-3">29,2% <span className="text-sm text-gray-400 font-normal">doanh thu</span></div>
                    <ul className="space-y-1.5 text-xs text-gray-300">
                        <li className="flex items-center gap-2"><Cog size={12} className="text-neon-magenta" /> 10 máy CNC 5-axis — Tolerance ≤5µm</li>
                        <li className="flex items-center gap-2"><Cog size={12} className="text-neon-magenta" /> Vật liệu: Al, SS, Ti, Inconel, Cu</li>
                        <li className="flex items-center gap-2"><Cog size={12} className="text-neon-magenta" /> Khách hàng: FDI + Bán dẫn + Y tế</li>
                        <li className="flex items-center gap-2"><Cog size={12} className="text-neon-magenta" /> OEM/ODM cho Samsung, Foxconn...</li>
                    </ul>
                    <div className="mt-3 text-[10px] text-gray-500">5 sản phẩm — Precision machining + Assembly</div>
                </GlassCard>
            </div>
            <GlassCard className="p-4 text-center">
                <div className="text-xs text-gray-400 mb-1">Tổng hệ sinh thái</div>
                <div className="text-lg font-extrabold text-white">26 sản phẩm <span className="text-sm text-neon-cyan">· 2 trụ cột cộng hưởng</span></div>
            </GlassCard>
        </div>
    );
}

function KPITab() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {kpis.map((kpi, i) => (<KPICard key={i} {...kpi} delay={0.1 * i} />))}
        </div>
    );
}

function StrategicTab() {
    return (
        <GlassCard className="p-6" accentColor="#76FF03">
            <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                <Landmark size={16} className="text-green-400" /> Lợi ích cho KCNC TP.HCM
            </h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { Icon: Users, label: '100-130 việc làm chất lượng', desc: 'Kỹ sư CNC/IoT, lương 25-45K USD/năm, đào tạo tại chỗ', color: '#00E5FF' },
                    { Icon: GraduationCap, label: 'Chuyển giao công nghệ', desc: 'Hợp tác ĐH Bách Khoa, RMIT, chuyên gia Nhật/Đức', color: '#E040FB' },
                    { Icon: Banknote, label: 'Đóng góp thuế và phí', desc: 'Phí thuê đất + thuế TNDN sau ưu đãi', color: '#76FF03' },
                    { Icon: Cpu, label: 'Chuỗi cung ứng nội địa', desc: 'Nhà cung cấp phụ trợ, dịch vụ kỹ thuật tại KCNC', color: '#FF9100' },
                ].map((b, i) => (
                    <div key={i} className="flex items-start gap-3">
                        <b.Icon size={18} style={{ color: b.color }} className="flex-shrink-0 mt-0.5" />
                        <div>
                            <div className="text-xs font-semibold text-white">{b.label}</div>
                            <div className="text-xs text-gray-400">{b.desc}</div>
                        </div>
                    </div>
                ))}
            </div>
        </GlassCard>
    );
}

const tabs: TabConfig[] = [
    { key: 'overview', label: 'Tổng quan 22M', icon: Layout, content: <OverviewTab /> },
    { key: 'pillars', label: '2 Trụ cột', icon: Cpu, content: <PillarsTab /> },
    { key: 'kpi', label: 'KPI Summary', icon: BarChart3, content: <KPITab /> },
    { key: 'strategic', label: 'Giá trị Chiến lược', icon: Landmark, content: <StrategicTab /> },
];

export function ExecutiveSummary() {
    return (
        <TabSlide
            id="summary"
            title="Tóm tắt Điều hành"
            subtitle="Dự án hạ tầng công nghệ tích hợp 22,00M USD — 2 trụ cột cộng hưởng — Tự chủ vốn 81,8% — vay 18,2% từ Y7"
            tabs={tabs}
            className="section-corporate"
        />
    );
}
