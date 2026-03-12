import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useInView, useCountUp } from '../../hooks/useInView';
import { market } from '../../data/market';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from 'recharts';
import { SectionLayout } from '../ui/SectionLayout';
import { GlassCard } from '../ui/GlassCard';

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

const colors = ['#00E5FF', '#E040FB', '#76FF03', '#FF9100'];

function CounterCard({ value, label, unit, delay }: { value: number; label: string; unit: string; delay: number }) {
    const { ref, isInView } = useInView(0.3);
    const count = useCountUp(value, 2500, isInView);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay }}
        >
            <GlassCard hoverEffect className="p-6 text-center h-full">
            <div className="stat-value gradient-text">{count}</div>
            <div className="text-sm text-gray-300 mt-1">{unit}</div>
            <div className="stat-label mt-2">{label}</div>
            </GlassCard>
        </motion.div>
    );
}

export function MarketOpportunity() {
    const { ref, isInView } = useInView(0.15);
    const [hovered, setHovered] = useState<DotInfo | null>(null);

    const vnData = market.vietnam.map((item, i) => ({
        name: item.segment.replace(' VN', ''),
        value: item.value,
        growth: item.growth,
        fill: colors[i],
    }));

    return (
        <SectionLayout id="market">
            <div ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title text-white">Cơ hội <span className="gradient-text">Thị trường</span></h2>
                    <p className="section-subtitle">Thị trường toàn cầu hội tụ — Việt Nam đang ở vị trí chiến lược trong chuỗi cung ứng công nghệ cao.</p>
                </motion.div>

                {/* Global Market Counters */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {market.global.map((item, i) => (
                        <CounterCard key={i} value={item.value2028} label={`${item.segment} (2028)`} unit={item.unit} delay={i * 0.1} />
                    ))}
                </div>

                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    {/* Vietnam Market Bar Chart */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <GlassCard className="p-6 h-full">
                        <h4 className="text-lg font-semibold text-white mb-6">Thị trường Việt Nam 2028</h4>
                        <ResponsiveContainer width="100%" height={250}>
                            <BarChart data={vnData} layout="vertical" margin={{ left: 10 }}>
                                <XAxis type="number" tick={{ fill: '#999', fontSize: 11 }} axisLine={false} tickLine={false} unit="B" />
                                <YAxis type="category" dataKey="name" tick={{ fill: '#ccc', fontSize: 12 }} axisLine={false} tickLine={false} width={80} />
                                <Tooltip
                                    contentStyle={{ background: '#191d44', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '12px', color: '#fff' }}
                                    itemStyle={{ color: '#76FF03' }}
                                    labelStyle={{ color: '#ccc' }}
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

                    {/* SWOT Preview */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <GlassCard className="p-6 h-full">
                        <h4 className="text-lg font-semibold text-white mb-6">Phân tích SWOT</h4>
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
                                            <li key={j} className="text-xs text-gray-300 leading-relaxed">• {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        </GlassCard>
                    </motion.div>
                </div>

                {/* Competitive Positioning — Animated SVG */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <GlassCard className="p-6" accentColor="#00E5FF">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-5 gap-3">
                            <div>
                                <h4 className="text-lg font-semibold text-white mb-1">Định vị Cạnh tranh — Độ phức tạp vs. Quy mô</h4>
                                <p className="text-xs text-gray-400">Mekong chiếm vị trí &quot;High Complexity, Niche Volume&quot; — ít cạnh tranh trực tiếp</p>
                            </div>
                            <div className="flex-shrink-0 rounded-lg px-3 py-1.5" style={{ background: 'rgba(0,229,255,0.12)', border: '1px solid rgba(0,229,255,0.35)' }}>
                                <span className="text-[10px] font-bold tracking-widest" style={{ color: '#00E5FF' }}>SWEET SPOT</span>
                            </div>
                        </div>

                        {/* Chart wrapper — relative for tooltip overlay */}
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
                                <style>{`
                                    @keyframes cpPulse1 { 0% { r: 16; stroke-opacity: 0.65; } 100% { r: 52; stroke-opacity: 0; } }
                                    @keyframes cpPulse2 { 0% { r: 16; stroke-opacity: 0.35; } 100% { r: 68; stroke-opacity: 0; } }
                                    @keyframes cpFloat  { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
                                    @keyframes cpPop    { 0% { transform: scale(0); opacity: 0; } 65% { transform: scale(1.25); opacity: 1; } 100% { transform: scale(1); opacity: 1; } }
                                    @keyframes cpFade   { from { opacity: 0; transform: translateX(-6px); } to { opacity: 1; transform: translateX(0); } }
                                    .cp-ring1 { animation: cpPulse1 2.4s ease-out infinite; }
                                    .cp-ring2 { animation: cpPulse2 2.4s ease-out 0.9s infinite; }
                                    .cp-float { animation: cpFloat 4s ease-in-out infinite; }
                                    .cp-dot1 { animation: cpPop 0.55s cubic-bezier(0.34,1.56,0.64,1) 0.15s both; transform-box: fill-box; transform-origin: center; }
                                    .cp-dot2 { animation: cpPop 0.55s cubic-bezier(0.34,1.56,0.64,1) 0.30s both; transform-box: fill-box; transform-origin: center; }
                                    .cp-dot3 { animation: cpPop 0.55s cubic-bezier(0.34,1.56,0.64,1) 0.45s both; transform-box: fill-box; transform-origin: center; }
                                    .cp-dot4 { animation: cpPop 0.55s cubic-bezier(0.34,1.56,0.64,1) 0.60s both; transform-box: fill-box; transform-origin: center; }
                                    .cp-dot5 { animation: cpPop 0.55s cubic-bezier(0.34,1.56,0.64,1) 0.75s both; transform-box: fill-box; transform-origin: center; }
                                    .cp-dotM { animation: cpPop 0.70s cubic-bezier(0.34,1.56,0.64,1) 1.00s both; transform-box: fill-box; transform-origin: center; }
                                    .cp-lbl1 { animation: cpFade 0.4s ease-out 0.35s both; }
                                    .cp-lbl2 { animation: cpFade 0.4s ease-out 0.50s both; }
                                    .cp-lbl3 { animation: cpFade 0.4s ease-out 0.65s both; }
                                    .cp-lbl4 { animation: cpFade 0.4s ease-out 0.80s both; }
                                    .cp-lbl5 { animation: cpFade 0.4s ease-out 0.95s both; }
                                    .cp-lblM { animation: cpFade 0.5s ease-out 1.20s both; }
                                    .cp-hoverable { cursor: pointer; transition: filter 0.2s; }
                                    .cp-hoverable:hover circle:first-of-type { r: 17 !important; }
                                `}</style>
                            </defs>

                            {/* Quadrant backgrounds */}
                            <rect x={80} y={20} width={296} height={133} rx={6} fill="url(#cpZoneCyan)" />
                            <rect x={376} y={153} width={294} height={132} rx={6} fill="url(#cpZoneOrange)" />
                            <rect x={80} y={20} width={296} height={133} rx={6} fill="none" stroke="rgba(0,229,255,0.18)" strokeWidth={1} strokeDasharray="5 5" />

                            {/* Quadrant badge pills */}
                            <rect x={84} y={25} width={164} height={20} rx={5} fill="rgba(0,229,255,0.2)" stroke="rgba(0,229,255,0.4)" strokeWidth={0.75} />
                            <text x={166} y={39} textAnchor="middle" fill="#00E5FF" fontSize={10} fontWeight="800" letterSpacing="0.6">NICHE · PHỨC TẠP CAO</text>
                            <rect x={380} y={247} width={130} height={20} rx={5} fill="rgba(255,145,0,0.18)" stroke="rgba(255,145,0,0.35)" strokeWidth={0.75} />
                            <text x={445} y={261} textAnchor="middle" fill="#FF9100" fontSize={10} fontWeight="700" letterSpacing="0.5">SẢN XUẤT ĐẠI TRÀ</text>

                            {/* Grid */}
                            {[2, 4, 6, 8].map(v => <line key={`vg${v}`} x1={80 + v * 59} y1={20} x2={80 + v * 59} y2={285} stroke="rgba(255,255,255,0.05)" strokeWidth={1} />)}
                            {[2, 4, 6, 8].map(c => <line key={`hg${c}`} x1={80} y1={20 + (1 - c / 10) * 265} x2={670} y2={20 + (1 - c / 10) * 265} stroke="rgba(255,255,255,0.05)" strokeWidth={1} />)}

                            {/* Mid reference lines */}
                            <line x1={376} y1={20} x2={376} y2={285} stroke="rgba(255,255,255,0.14)" strokeDasharray="6 5" strokeWidth={1} />
                            <line x1={80} y1={153} x2={670} y2={153} stroke="rgba(255,255,255,0.14)" strokeDasharray="6 5" strokeWidth={1} />

                            {/* Axes */}
                            <line x1={80} y1={285} x2={670} y2={285} stroke="rgba(255,255,255,0.35)" strokeWidth={1.5} />
                            <line x1={80} y1={20} x2={80} y2={285} stroke="rgba(255,255,255,0.35)" strokeWidth={1.5} />
                            <polygon points="670,281 678,285 670,289" fill="rgba(255,255,255,0.35)" />
                            <polygon points="76,20 80,12 84,20" fill="rgba(255,255,255,0.35)" />

                            {/* Ticks */}
                            {[0, 2, 4, 6, 8, 10].map(v => (
                                <g key={`xt${v}`}>
                                    <line x1={80 + v * 59} y1={285} x2={80 + v * 59} y2={291} stroke="rgba(255,255,255,0.3)" strokeWidth={1} />
                                    <text x={80 + v * 59} y={305} textAnchor="middle" fill="#666" fontSize={11}>{v}</text>
                                </g>
                            ))}
                            <text x={375} y={325} textAnchor="middle" fill="#999" fontSize={12}>Quy mô sản xuất →</text>
                            {[0, 2, 4, 6, 8, 10].map(c => (
                                <g key={`yt${c}`}>
                                    <line x1={80} y1={20 + (1 - c / 10) * 265} x2={74} y2={20 + (1 - c / 10) * 265} stroke="rgba(255,255,255,0.3)" strokeWidth={1} />
                                    <text x={68} y={20 + (1 - c / 10) * 265 + 4} textAnchor="end" fill="#666" fontSize={11}>{c}</text>
                                </g>
                            ))}
                            <text x={22} y={153} textAnchor="middle" fill="#999" fontSize={12} transform="rotate(-90 22 153)">Độ phức tạp →</text>

                            {/* Closest rival connector */}
                            <line x1={257} y1={73} x2={316} y2={44} stroke="rgba(0,229,255,0.25)" strokeDasharray="3 3" strokeWidth={1.2} />
                            <text x={275} y={52} textAnchor="middle" fill="rgba(0,229,255,0.45)" fontSize={8} fontStyle="italic">đối thủ gần nhất</text>

                            {/* ── COMPETITOR DOTS (hoverable) ── */}
                            {DOT_DATA.map((dot, i) => (
                                <g
                                    key={dot.name}
                                    className={`cp-dot${i + 1} cp-hoverable`}
                                    onMouseEnter={() => setHovered(dot)}
                                    onMouseLeave={() => setHovered(null)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <circle cx={dot.svgX} cy={dot.svgY} r={20} fill={`${dot.color}18`} />
                                    <circle cx={dot.svgX} cy={dot.svgY} r={11} fill={dot.color} filter="url(#cpGlowSoft)" />
                                    <circle cx={dot.svgX - 4} cy={dot.svgY - 4} r={3.5} fill="rgba(255,255,255,0.38)" />
                                </g>
                            ))}
                            {/* Labels */}
                            <g className="cp-lbl1" style={{ pointerEvents: 'none' }}>
                                <text x={244} y={62} textAnchor="end" fill="#E040FB" fontSize={11} fontWeight="700">Tokyo Seimitsu</text>
                                <rect x={208} y={65} width={52} height={13} rx={4} fill="rgba(224,64,251,0.2)" />
                                <text x={234} y={75} textAnchor="middle" fill="#E040FB" fontSize={8.5} fontWeight="600">C·8  V·3</text>
                            </g>
                            <g className="cp-lbl2" style={{ pointerEvents: 'none' }}>
                                <text x={449} y={90} textAnchor="start" fill="#FFD740" fontSize={11} fontWeight="700">Misumi VN</text>
                                <rect x={449} y={93} width={46} height={13} rx={4} fill="rgba(255,215,64,0.2)" />
                                <text x={472} y={103} textAnchor="middle" fill="#FFD740" fontSize={8.5} fontWeight="600">C·7  V·6</text>
                            </g>
                            <g className="cp-lbl3" style={{ pointerEvents: 'none' }}>
                                <text x={390} y={173} textAnchor="start" fill="#FF6D6D" fontSize={11} fontWeight="700">Tiến Đạt CNC</text>
                                <rect x={390} y={176} width={52} height={13} rx={4} fill="rgba(255,109,109,0.2)" />
                                <text x={416} y={186} textAnchor="middle" fill="#FF6D6D" fontSize={8.5} fontWeight="600">C·5  V·5</text>
                            </g>
                            <g className="cp-lbl4" style={{ pointerEvents: 'none' }}>
                                <text x={566} y={171} textAnchor="start" fill="#69F0AE" fontSize={11} fontWeight="700">Samsung VN</text>
                                <rect x={566} y={174} width={52} height={13} rx={4} fill="rgba(105,240,174,0.2)" />
                                <text x={592} y={184} textAnchor="middle" fill="#69F0AE" fontSize={8.5} fontWeight="600">C·4  V·8</text>
                            </g>
                            <g className="cp-lbl5" style={{ pointerEvents: 'none' }}>
                                <text x={611} y={228} textAnchor="middle" fill="#82B1FF" fontSize={11} fontWeight="700">Foxconn</text>
                                <rect x={587} y={231} width={48} height={13} rx={4} fill="rgba(130,177,255,0.2)" />
                                <text x={611} y={241} textAnchor="middle" fill="#82B1FF" fontSize={8.5} fontWeight="600">C·3  V·9</text>
                            </g>

                            {/* ── MEKONG TECH HERO ── */}
                            <circle cx={316} cy={44} r={48} fill="url(#cpMekongHalo)" />
                            <circle className="cp-ring1" cx={316} cy={44} r={16} fill="none" stroke="#00E5FF" strokeWidth={2} />
                            <circle className="cp-ring2" cx={316} cy={44} r={16} fill="none" stroke="#00E5FF" strokeWidth={1} />
                            <g
                                className="cp-float cp-hoverable"
                                onMouseEnter={() => setHovered({ name: 'Mekong Tech', complexity: 9, volume: 4, color: '#00E5FF', desc: 'Gia công 5 trục, IoT & Datacenter — độ phức tạp cao nhất VN', tag: 'Sweet Spot', svgX: 316, svgY: 44 })}
                                onMouseLeave={() => setHovered(null)}
                                style={{ cursor: 'pointer' }}
                            >
                                <g className="cp-dotM">
                                    <circle cx={316} cy={44} r={20} fill="rgba(0,229,255,0.15)" />
                                    <circle cx={316} cy={44} r={15} fill="#00E5FF" filter="url(#cpGlowCyan)" />
                                    <circle cx={310} cy={38} r={5} fill="rgba(255,255,255,0.5)" />
                                </g>
                            </g>
                            <g className="cp-lblM" style={{ pointerEvents: 'none' }}>
                                <text x={337} y={32} textAnchor="start" fill="#00E5FF" fontSize={15} fontWeight="800" style={{ filter: 'drop-shadow(0 0 10px rgba(0,229,255,0.9))' }}>Mekong Tech</text>
                                <text x={337} y={50} textAnchor="start" fill="#00E5FF" fontSize={10} opacity={0.7}>Phức tạp cao · Niche Volume</text>
                                <rect x={337} y={53} width={52} height={13} rx={4} fill="rgba(0,229,255,0.22)" stroke="rgba(0,229,255,0.5)" strokeWidth={0.75} />
                                <text x={363} y={63} textAnchor="middle" fill="#00E5FF" fontSize={9} fontWeight="800">C·9  V·4</text>
                            </g>
                        </svg>

                        {/* Hover tooltip overlay */}
                        <AnimatePresence>
                            {hovered && (
                                <motion.div
                                    key={hovered.name}
                                    initial={{ opacity: 0, scale: 0.88, y: 6 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.88, y: 6 }}
                                    transition={{ duration: 0.18 }}
                                    className="pointer-events-none absolute top-3 right-3 rounded-xl p-3 min-w-[220px] max-w-[260px]"
                                    style={{
                                        background: 'rgba(14,18,52,0.96)',
                                        border: `1px solid ${hovered.color}55`,
                                        boxShadow: `0 0 24px ${hovered.color}25, 0 8px 32px rgba(0,0,0,0.5)`,
                                        backdropFilter: 'blur(12px)',
                                    }}
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: hovered.color, boxShadow: `0 0 8px ${hovered.color}` }} />
                                        <span className="font-bold text-sm text-white">{hovered.name}</span>
                                        <span className="ml-auto text-[10px] font-semibold px-1.5 py-0.5 rounded-md" style={{ background: `${hovered.color}22`, color: hovered.color }}>{hovered.tag}</span>
                                    </div>
                                    <div className="flex gap-3 mb-2">
                                        <div className="flex-1 rounded-lg p-2 text-center" style={{ background: 'rgba(255,255,255,0.05)' }}>
                                            <div className="text-lg font-black" style={{ color: hovered.color }}>{hovered.complexity}</div>
                                            <div className="text-[9px] text-gray-400 uppercase tracking-wide mt-0.5">Phức tạp</div>
                                        </div>
                                        <div className="flex-1 rounded-lg p-2 text-center" style={{ background: 'rgba(255,255,255,0.05)' }}>
                                            <div className="text-lg font-black" style={{ color: hovered.color }}>{hovered.volume}</div>
                                            <div className="text-[9px] text-gray-400 uppercase tracking-wide mt-0.5">Quy mô</div>
                                        </div>
                                    </div>
                                    <p className="text-[11px] text-gray-300 leading-relaxed">{hovered.desc}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        </div>

                        {/* Legend */}
                        <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center mt-3 text-xs">
                            <div className="flex items-center gap-1.5">
                                <div className="w-3 h-3 rounded-full" style={{ background: '#00E5FF', boxShadow: '0 0 8px #00E5FF' }} />
                                <span className="font-bold" style={{ color: '#00E5FF' }}>Mekong Tech</span>
                            </div>
                            {DOT_DATA.map((d, i) => (
                                <div key={i} className="flex items-center gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: d.color, boxShadow: `0 0 4px ${d.color}90` }} />
                                    <span className="text-gray-300">{d.name}</span>
                                </div>
                            ))}
                        </div>

                        {/* Key insight strip */}
                        <div className="mt-4 rounded-xl px-4 py-3 flex items-start gap-3" style={{ background: 'rgba(0,229,255,0.06)', border: '1px solid rgba(0,229,255,0.14)' }}>
                            <span className="text-base mt-0.5 flex-shrink-0">💡</span>
                            <p className="text-xs text-gray-300 leading-relaxed">
                                Đối thủ gần nhất: <span className="font-semibold" style={{ color: '#E040FB' }}>Tokyo Seimitsu</span> (C·8 / V·3) — tập trung nhập khẩu, <strong className="text-white">không sản xuất tại Việt Nam</strong>.
                                Mekong là đơn vị duy nhất đạt độ phức tạp 9/10 nội địa, định giá premium <span className="text-[#00E5FF] font-semibold">2–5× so với gia công thông thường</span>.
                            </p>
                        </div>
                    </GlassCard>
                </motion.div>
            </div>
        </SectionLayout>
    );
}
