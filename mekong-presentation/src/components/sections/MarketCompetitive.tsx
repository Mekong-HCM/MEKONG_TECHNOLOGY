import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Lock, Swords, Globe, TrendingUp, Target, FileCheck } from 'lucide-react';
import { useInView, useCountUp } from '../../hooks/useInView';
import { market } from '../../data/market';
import { competitors, mekongAdvantages, moatLayers, moatSummary, exportRings, exportKPIs } from '../../data/competitive';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from 'recharts';
import { TabSlide, type TabConfig } from '../ui/TabSlide';
import { GlassCard } from '../ui/GlassCard';

const colors = ['#00E5FF', '#E040FB', '#76FF03', '#FF9100'];

interface DotInfo {
    name: string;
    complexity: number;
    volume: number;
    color: string;
    desc: string;
    tag: string;
    svgX: number;
    svgY: number;
}

const DOT_DATA: DotInfo[] = [
    { name: 'Tokyo Seimitsu', complexity: 8, volume: 3, color: '#E040FB', desc: 'Nhập khẩu linh kiện chính xác — không sản xuất tại VN', tag: 'Đối thủ gần nhất', svgX: 257, svgY: 73 },
    { name: 'Misumi VN',      complexity: 7, volume: 6, color: '#FFD740', desc: 'Phân phối linh kiện catalog — sản xuất theo đơn hàng lớn', tag: 'Trung cấp', svgX: 434, svgY: 99 },
    { name: 'Tiến Đạt CNC',  complexity: 5, volume: 5, color: '#FF6D6D', desc: 'Gia công CNC trong nước — máy 3 trục, độ chính xác vừa', tag: 'Nội địa', svgX: 375, svgY: 153 },
    { name: 'Samsung VN',    complexity: 4, volume: 8, color: '#69F0AE', desc: 'Lắp ráp điện tử quy mô lớn — gia công đơn giản', tag: 'Đại trà', svgX: 552, svgY: 179 },
    { name: 'Foxconn',       complexity: 3, volume: 9, color: '#82B1FF', desc: 'EMS khổng lồ — sản xuất hàng loạt, biên lợi nhuận thấp', tag: 'Đại trà', svgX: 611, svgY: 206 },
];

function CounterCard({ value, label, unit, delay }: { value: number; label: string; unit: string; delay: number }) {
    const { ref, isInView } = useInView(0.3);
    const count = useCountUp(value, 2500, isInView);

    return (
        <motion.div ref={ref} initial={{ opacity: 0, scale: 0.9 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5, delay }}>
            <GlassCard hoverEffect className="p-6 text-center h-full">
                <div className="stat-value gradient-text">{count}</div>
                <div className="text-sm text-gray-300 mt-1">{unit}</div>
                <div className="stat-label mt-2">{label}</div>
            </GlassCard>
        </motion.div>
    );
}

function MarketTab() {
    const { ref, isInView } = useInView(0.15);
    const [hovered, setHovered] = useState<DotInfo | null>(null);

    const vnData = market.vietnam.map((item, i) => ({
        name: item.segment.replace(' VN', ''),
        value: item.value,
        growth: item.growth,
        fill: colors[i],
    }));

    return (
        <div ref={ref}>
            {/* Global Market Counters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {market.global.map((item, i) => (
                    <CounterCard key={i} value={item.value2028} label={`${item.segment} (2028)`} unit={item.unit} delay={i * 0.1} />
                ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-6 mb-6">
                {/* Vietnam Market Bar Chart */}
                <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
                    <GlassCard className="p-6 h-full">
                        <h4 className="text-lg font-semibold text-white mb-4">Thị trường Việt Nam 2028</h4>
                        <ResponsiveContainer width="100%" height={250}>
                            <BarChart data={vnData} layout="vertical" margin={{ left: 10 }}>
                                <XAxis type="number" tick={{ fill: '#999', fontSize: 11 }} axisLine={false} tickLine={false} unit="B" />
                                <YAxis type="category" dataKey="name" tick={{ fill: '#ccc', fontSize: 12 }} axisLine={false} tickLine={false} width={80} />
                                <Tooltip
                                    contentStyle={{ background: '#191d44', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '12px', color: '#fff' }}
                                    formatter={(v: number) => [`${v} B USD`]}
                                    cursor={{ fill: 'rgba(255,255,255,0.03)' }}
                                />
                                <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={28}>
                                    {vnData.map((entry, index) => (
                                        <Cell key={index} fill={entry.fill} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </GlassCard>
                </motion.div>

                {/* SWOT */}
                <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}>
                    <GlassCard className="p-6 h-full">
                        <h4 className="text-lg font-semibold text-white mb-4">Phân tích SWOT</h4>
                        <div className="grid grid-cols-2 gap-3">
                            {[
                                { title: 'Điểm mạnh', items: market.swot.strengths.slice(0, 3), color: '#76FF03', bg: 'rgba(118,255,3,0.08)' },
                                { title: 'Điểm yếu', items: market.swot.weaknesses.slice(0, 3), color: '#FF9100', bg: 'rgba(255,145,0,0.08)' },
                                { title: 'Cơ hội', items: market.swot.opportunities.slice(0, 3), color: '#00E5FF', bg: 'rgba(0,229,255,0.08)' },
                                { title: 'Thách thức', items: market.swot.threats.slice(0, 3), color: '#E040FB', bg: 'rgba(224,64,251,0.08)' },
                            ].map((quad, i) => (
                                <div key={i} className="rounded-xl p-3" style={{ background: quad.bg, border: `1px solid ${quad.color}20` }}>
                                    <h5 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: quad.color }}>{quad.title}</h5>
                                    <ul className="space-y-1">
                                        {quad.items.map((item, j) => (
                                            <li key={j} className="text-xs text-gray-300 leading-relaxed">&bull; {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                </motion.div>
            </div>

            {/* Competitive Positioning SVG */}
            <GlassCard className="p-6" accentColor="#00E5FF">
                <div className="flex items-start justify-between mb-4 gap-3">
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Định vị Cạnh tranh — Độ phức tạp vs. Quy mô</h4>
                        <p className="text-xs text-gray-400">Mekong chiếm vị trí &quot;High Complexity, Niche Volume&quot; — ít cạnh tranh trực tiếp</p>
                    </div>
                    <div className="flex-shrink-0 rounded-lg px-3 py-1.5" style={{ background: 'rgba(0,229,255,0.12)', border: '1px solid rgba(0,229,255,0.35)' }}>
                        <span className="text-[10px] font-bold tracking-widest" style={{ color: '#00E5FF' }}>SWEET SPOT</span>
                    </div>
                </div>
                <div className="relative">
                    <svg viewBox="0 0 720 360" className="w-full" role="img" aria-label="Biểu đồ định vị cạnh tranh">
                        <defs>
                            <radialGradient id="cpMekongHalo" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.35" />
                                <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
                            </radialGradient>
                            <radialGradient id="cpZoneCyan" cx="20%" cy="15%" r="70%">
                                <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.12" />
                                <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.02" />
                            </radialGradient>
                            <radialGradient id="cpZoneOrange" cx="80%" cy="85%" r="60%">
                                <stop offset="0%" stopColor="#FF9100" stopOpacity="0.10" />
                                <stop offset="100%" stopColor="#FF9100" stopOpacity="0.01" />
                            </radialGradient>
                            <filter id="cpGlowCyan" x="-120%" y="-120%" width="340%" height="340%">
                                <feGaussianBlur stdDeviation="9" result="b" />
                                <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                            </filter>
                            <filter id="cpGlowSoft" x="-60%" y="-60%" width="220%" height="220%">
                                <feGaussianBlur stdDeviation="4" result="b" />
                                <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                            </filter>
                        </defs>
                        <rect x={80} y={20} width={296} height={133} rx={6} fill="url(#cpZoneCyan)" />
                        <rect x={376} y={153} width={294} height={132} rx={6} fill="url(#cpZoneOrange)" />
                        <rect x={80} y={20} width={296} height={133} rx={6} fill="none" stroke="rgba(0,229,255,0.18)" strokeWidth={1} strokeDasharray="5 5" />
                        <rect x={84} y={25} width={164} height={20} rx={5} fill="rgba(0,229,255,0.2)" stroke="rgba(0,229,255,0.4)" strokeWidth={0.75} />
                        <text x={166} y={39} textAnchor="middle" fill="#00E5FF" fontSize={10} fontWeight="800" letterSpacing="0.6">NICHE &middot; PH&#x1EE8;C T&#x1EA0;P CAO</text>
                        <rect x={380} y={247} width={130} height={20} rx={5} fill="rgba(255,145,0,0.18)" stroke="rgba(255,145,0,0.35)" strokeWidth={0.75} />
                        <text x={445} y={261} textAnchor="middle" fill="#FF9100" fontSize={10} fontWeight="700" letterSpacing="0.5">S&#x1EA2;N XU&#x1EA4;T &#x110;&#x1EA0;I TR&#xC0;</text>
                        {[2, 4, 6, 8].map(v => <line key={`vg${v}`} x1={80 + v * 59} y1={20} x2={80 + v * 59} y2={285} stroke="rgba(255,255,255,0.05)" strokeWidth={1} />)}
                        {[2, 4, 6, 8].map(c => <line key={`hg${c}`} x1={80} y1={20 + (1 - c / 10) * 265} x2={670} y2={20 + (1 - c / 10) * 265} stroke="rgba(255,255,255,0.05)" strokeWidth={1} />)}
                        <line x1={376} y1={20} x2={376} y2={285} stroke="rgba(255,255,255,0.14)" strokeDasharray="6 5" strokeWidth={1} />
                        <line x1={80} y1={153} x2={670} y2={153} stroke="rgba(255,255,255,0.14)" strokeDasharray="6 5" strokeWidth={1} />
                        <line x1={80} y1={285} x2={670} y2={285} stroke="rgba(255,255,255,0.35)" strokeWidth={1.5} />
                        <line x1={80} y1={20} x2={80} y2={285} stroke="rgba(255,255,255,0.35)" strokeWidth={1.5} />
                        <polygon points="670,281 678,285 670,289" fill="rgba(255,255,255,0.35)" />
                        <polygon points="76,20 80,12 84,20" fill="rgba(255,255,255,0.35)" />
                        {[0, 2, 4, 6, 8, 10].map(v => (
                            <g key={`xt${v}`}>
                                <line x1={80 + v * 59} y1={285} x2={80 + v * 59} y2={291} stroke="rgba(255,255,255,0.3)" strokeWidth={1} />
                                <text x={80 + v * 59} y={305} textAnchor="middle" fill="#d1d5db" fontSize={11}>{v}</text>
                            </g>
                        ))}
                        <text x={375} y={325} textAnchor="middle" fill="#d1d5db" fontSize={12}>Quy m&#xF4; s&#x1EA3;n xu&#x1EA5;t &#x2192;</text>
                        {[0, 2, 4, 6, 8, 10].map(c => (
                            <g key={`yt${c}`}>
                                <line x1={80} y1={20 + (1 - c / 10) * 265} x2={74} y2={20 + (1 - c / 10) * 265} stroke="rgba(255,255,255,0.3)" strokeWidth={1} />
                                <text x={68} y={20 + (1 - c / 10) * 265 + 4} textAnchor="end" fill="#d1d5db" fontSize={11}>{c}</text>
                            </g>
                        ))}
                        <text x={22} y={153} textAnchor="middle" fill="#d1d5db" fontSize={12} transform="rotate(-90 22 153)">&#x110;&#x1ED9; ph&#x1EE9;c t&#x1EA1;p &#x2192;</text>
                        {DOT_DATA.map((dot, i) => (
                            <g key={dot.name} className="cursor-pointer" onMouseEnter={() => setHovered(dot)} onMouseLeave={() => setHovered(null)}>
                                <circle cx={dot.svgX} cy={dot.svgY} r={20} fill={`${dot.color}18`} />
                                <circle cx={dot.svgX} cy={dot.svgY} r={11} fill={dot.color} filter="url(#cpGlowSoft)" />
                                <text x={dot.svgX + (i < 2 ? -20 : 20)} y={dot.svgY - 15} textAnchor={i < 2 ? 'end' : 'start'} fill={dot.color} fontSize={10} fontWeight="700">{dot.name}</text>
                            </g>
                        ))}
                        <circle cx={316} cy={44} r={48} fill="url(#cpMekongHalo)" />
                        <g className="cursor-pointer"
                            onMouseEnter={() => setHovered({ name: 'Mekong Tech', complexity: 9, volume: 4, color: '#00E5FF', desc: 'Gia công 5 trục, IoT & Datacenter — độ phức tạp cao nhất VN', tag: 'Sweet Spot', svgX: 316, svgY: 44 })}
                            onMouseLeave={() => setHovered(null)}>
                            <circle cx={316} cy={44} r={15} fill="#00E5FF" filter="url(#cpGlowCyan)" />
                        </g>
                        <text x={337} y={32} textAnchor="start" fill="#00E5FF" fontSize={15} fontWeight="800">Mekong Tech</text>
                        <text x={337} y={50} textAnchor="start" fill="#00E5FF" fontSize={10} opacity={0.7}>Ph&#x1EE9;c t&#x1EA1;p cao &middot; Niche Volume</text>
                    </svg>
                    <AnimatePresence>
                        {hovered && (
                            <motion.div
                                key={hovered.name}
                                initial={{ opacity: 0, scale: 0.88 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.88 }}
                                className="pointer-events-none absolute top-3 right-3 rounded-xl p-3 min-w-[220px] max-w-[260px]"
                                style={{ background: 'rgba(14,18,52,0.96)', border: `1px solid ${hovered.color}55`, boxShadow: `0 0 24px ${hovered.color}25`, backdropFilter: 'blur(12px)' }}
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-3 h-3 rounded-full" style={{ background: hovered.color }} />
                                    <span className="font-bold text-sm text-white">{hovered.name}</span>
                                    <span className="ml-auto text-[10px] font-semibold px-1.5 py-0.5 rounded-md" style={{ background: `${hovered.color}22`, color: hovered.color }}>{hovered.tag}</span>
                                </div>
                                <div className="flex gap-3 mb-2">
                                    <div className="flex-1 rounded-lg p-2 text-center" style={{ background: 'rgba(255,255,255,0.05)' }}>
                                        <div className="text-lg font-black" style={{ color: hovered.color }}>{hovered.complexity}</div>
                                        <div className="text-[9px] text-gray-400 uppercase">Phức tạp</div>
                                    </div>
                                    <div className="flex-1 rounded-lg p-2 text-center" style={{ background: 'rgba(255,255,255,0.05)' }}>
                                        <div className="text-lg font-black" style={{ color: hovered.color }}>{hovered.volume}</div>
                                        <div className="text-[9px] text-gray-400 uppercase">Quy mô</div>
                                    </div>
                                </div>
                                <p className="text-[11px] text-gray-300">{hovered.desc}</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </GlassCard>
        </div>
    );
}

function MoatTab() {
    const { ref, isInView } = useInView(0.15);

    return (
        <div ref={ref}>
            {/* Competitor table */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.5 }}>
                <GlassCard className="p-4 mb-6 overflow-x-auto">
                    <div className="flex items-center gap-2 mb-3">
                        <Swords size={16} className="text-neon-magenta" />
                        <h4 className="text-sm font-bold text-white">So sánh đối thủ</h4>
                    </div>
                    <table className="w-full text-xs">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="text-left py-2 px-2 text-gray-400">Đối thủ</th>
                                <th className="text-right py-2 px-2 text-gray-400">IoT</th>
                                <th className="text-right py-2 px-2 text-gray-400">Robot</th>
                                <th className="text-left py-2 px-2 text-gray-400">Điểm mạnh</th>
                                <th className="text-left py-2 px-2 text-gray-400">Điểm yếu</th>
                            </tr>
                        </thead>
                        <tbody>
                            {competitors.map((c, i) => (
                                <tr key={i} className="border-b border-white/5">
                                    <td className="py-2 px-2 font-medium text-white">{c.name}</td>
                                    <td className="py-2 px-2 text-right text-gray-300">{c.iotShare}</td>
                                    <td className="py-2 px-2 text-right text-gray-300">{c.robotShare}</td>
                                    <td className="py-2 px-2 text-gray-400">{c.strength}</td>
                                    <td className="py-2 px-2 text-red-400/70">{c.weakness}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </GlassCard>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4">
                {/* Mekong advantages */}
                <motion.div initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2, duration: 0.5 }}>
                    <GlassCard className="p-5 h-full">
                        <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                            <Shield size={16} className="text-neon-cyan" /> Lợi thế Mekong
                        </h4>
                        <div className="space-y-3">
                            {mekongAdvantages.map((adv, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="text-right w-24">
                                        <div className="text-sm font-bold text-neon-cyan">{adv.value}</div>
                                    </div>
                                    <div className="w-px h-8 bg-white/10" />
                                    <div>
                                        <div className="text-xs font-medium text-white">{adv.metric}</div>
                                        <div className="text-[10px] text-gray-500">{adv.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                </motion.div>

                {/* MOAT */}
                <motion.div initial={{ opacity: 0, x: 20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.25, duration: 0.5 }}>
                    <GlassCard className="p-5 h-full">
                        <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                            <Lock size={16} className="text-yellow-400" /> Rào cản MOAT
                        </h4>
                        <div className="space-y-2">
                            {moatLayers.map((m, i) => (
                                <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02]">
                                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: m.color }} />
                                    <div className="flex-1">
                                        <span className="text-[11px] font-medium text-gray-200">{m.layer}</span>
                                    </div>
                                    <span className="text-[9px] text-gray-500 whitespace-nowrap">{m.timeToReplicate}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-3 p-2 rounded-lg bg-red-500/5 border border-red-500/10 text-[10px] text-red-400/80 text-center font-medium">
                            {moatSummary}
                        </div>
                    </GlassCard>
                </motion.div>
            </div>
        </div>
    );
}

function ExportTab() {
    const { ref, isInView } = useInView(0.15);

    return (
        <div ref={ref}>
            {/* Export KPIs */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.5 }}
                className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6"
            >
                {[
                    { label: 'Xuất khẩu target', value: exportKPIs.targetExportPct, color: 'text-neon-cyan' },
                    { label: 'Doanh thu XK 10Y', value: exportKPIs.exportRevenue10Y, color: 'text-neon-magenta' },
                    { label: 'ASEAN 2030', value: exportKPIs.aseanMarket2030, color: 'text-green-400' },
                    { label: 'CAGR ASEAN', value: exportKPIs.aseanCAGR, color: 'text-yellow-400' },
                    { label: 'FTA', value: exportKPIs.ftas, color: 'text-gray-300' },
                ].map((kpi, i) => (
                    <GlassCard key={i} className="p-3 text-center">
                        <div className={`text-lg font-extrabold ${kpi.color}`}>{kpi.value}</div>
                        <div className="text-[10px] text-gray-400 mt-1">{kpi.label}</div>
                    </GlassCard>
                ))}
            </motion.div>

            {/* 3 Rings */}
            <div className="grid md:grid-cols-3 gap-4">
                {exportRings.map((ring, i) => (
                    <motion.div key={ring.ring} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}>
                        <GlassCard hoverEffect className="p-5 h-full" accentColor={ring.color}>
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: `${ring.color}15`, color: ring.color, border: `1px solid ${ring.color}30` }}>
                                    {ring.ring.split(' ')[1]}
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-white">{ring.name}</h4>
                                    <span className="text-[10px] text-gray-500">{ring.timeline}</span>
                                </div>
                            </div>
                            <div className="text-center my-3">
                                <div className="text-2xl font-extrabold" style={{ color: ring.color }}>{ring.share}</div>
                                <div className="text-[10px] text-gray-400">doanh thu</div>
                            </div>
                            <div className="space-y-1.5">
                                {ring.markets.map((m, j) => (
                                    <div key={j} className="flex items-start gap-2 text-xs text-gray-300">
                                        <Target size={10} className="text-gray-500 mt-0.5 flex-shrink-0" />
                                        {m}
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                    </motion.div>
                ))}
            </div>

            <div className="mt-4 flex items-center gap-2 text-[10px] text-gray-500">
                <FileCheck size={12} className="text-green-400" />
                Hiệp định AFTA, RCEP, CPTPP — 0% thuế quan nội khối ASEAN
            </div>
        </div>
    );
}

export function MarketCompetitive() {
    const tabs: TabConfig[] = [
        { key: 'market', label: 'Thị trường', icon: Globe, content: <MarketTab /> },
        { key: 'moat', label: 'Cạnh tranh & MOAT', icon: Shield, content: <MoatTab /> },
        { key: 'export', label: 'Xuất khẩu ASEAN', icon: TrendingUp, content: <ExportTab /> },
    ];

    return (
        <TabSlide
            id="market"
            title="Thị trường & Cạnh tranh"
            subtitle="Thị trường toàn cầu hội tụ — Rào cản MOAT bền vững — Chiến lược xuất khẩu 3 vòng"
            tabs={tabs}
        />
    );
}
