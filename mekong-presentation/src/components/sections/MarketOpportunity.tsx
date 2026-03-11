import { motion } from 'framer-motion';
import { useInView, useCountUp } from '../../hooks/useInView';
import { market } from '../../data/market';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from 'recharts';
import { SectionLayout } from '../ui/SectionLayout';
import { GlassCard } from '../ui/GlassCard';

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

                {/* Competitive Positioning — Custom SVG */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <GlassCard className="p-6">
                        <h4 className="text-lg font-semibold text-white mb-1">Định vị Cạnh tranh — Độ phức tạp vs. Quy mô</h4>
                        <p className="text-xs text-gray-400 mb-5">Mekong chiếm vị trí &quot;High Complexity, Niche Volume&quot; — ít cạnh tranh trực tiếp</p>
                        {/* SVG coordinate system: viewBox 0 0 700 340
                            chart area: x 80→660 (w=580), y 30→290 (h=260)
                            x(v) = 80 + v*58   |  y(c) = 30 + (1-c/10)*260 */}
                        <svg viewBox="0 0 700 340" className="w-full" role="img" aria-label="Biểu đồ định vị cạnh tranh">
                            <defs>
                                <radialGradient id="mekongHalo" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.4" />
                                    <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
                                </radialGradient>
                                <filter id="mekongGlowF" x="-80%" y="-80%" width="260%" height="260%">
                                    <feGaussianBlur stdDeviation="5" result="blur" />
                                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                                </filter>
                            </defs>

                            {/* Quadrant highlight areas */}
                            {/* Top-left: High Complexity, Low Volume — Mekong zone */}
                            <rect x={80} y={30} width={290} height={130} rx={6} fill="rgba(0,229,255,0.06)" />
                            {/* Bottom-right: Low Complexity, High Volume — Mass market */}
                            <rect x={370} y={160} width={290} height={130} rx={6} fill="rgba(255,145,0,0.04)" />

                            {/* Quadrant badge labels */}
                            <rect x={84} y={34} width={136} height={17} rx={3} fill="rgba(0,229,255,0.14)" />
                            <text x={89} y={46} fill="#00E5FF" fontSize={10} fontWeight="700" letterSpacing="0.4">NICHE · PHỨC TẠP CAO</text>
                            <rect x={374} y={258} width={112} height={17} rx={3} fill="rgba(255,145,0,0.12)" />
                            <text x={379} y={270} fill="#FF9100" fontSize={10} fontWeight="600" letterSpacing="0.4" opacity={0.9}>SẢN XUẤT ĐẠI TRÀ</text>

                            {/* Subtle grid */}
                            {[2, 4, 6, 8].map(v => (
                                <line key={`vg${v}`} x1={80 + v * 58} y1={30} x2={80 + v * 58} y2={290} stroke="rgba(255,255,255,0.04)" strokeWidth={1} />
                            ))}
                            {[2, 4, 6, 8].map(c => (
                                <line key={`hg${c}`} x1={80} y1={30 + (1 - c / 10) * 260} x2={660} y2={30 + (1 - c / 10) * 260} stroke="rgba(255,255,255,0.04)" strokeWidth={1} />
                            ))}

                            {/* Midpoint reference lines */}
                            <line x1={370} y1={30} x2={370} y2={290} stroke="rgba(255,255,255,0.16)" strokeDasharray="5 4" strokeWidth={1} />
                            <line x1={80} y1={160} x2={660} y2={160} stroke="rgba(255,255,255,0.16)" strokeDasharray="5 4" strokeWidth={1} />

                            {/* Axes */}
                            <line x1={80} y1={290} x2={660} y2={290} stroke="rgba(255,255,255,0.25)" strokeWidth={1} />
                            <line x1={80} y1={30} x2={80} y2={290} stroke="rgba(255,255,255,0.25)" strokeWidth={1} />

                            {/* X axis ticks & labels */}
                            {[0, 2, 4, 6, 8, 10].map(v => (
                                <g key={`xt${v}`}>
                                    <line x1={80 + v * 58} y1={290} x2={80 + v * 58} y2={295} stroke="rgba(255,255,255,0.25)" strokeWidth={1} />
                                    <text x={80 + v * 58} y={308} textAnchor="middle" fill="#666" fontSize={11}>{v}</text>
                                </g>
                            ))}
                            <text x={370} y={328} textAnchor="middle" fill="#888" fontSize={11}>Quy mô sản xuất →</text>

                            {/* Y axis ticks & labels */}
                            {[0, 2, 4, 6, 8, 10].map(c => (
                                <g key={`yt${c}`}>
                                    <line x1={80} y1={30 + (1 - c / 10) * 260} x2={75} y2={30 + (1 - c / 10) * 260} stroke="rgba(255,255,255,0.25)" strokeWidth={1} />
                                    <text x={70} y={30 + (1 - c / 10) * 260 + 4} textAnchor="end" fill="#666" fontSize={11}>{c}</text>
                                </g>
                            ))}
                            <text x={18} y={160} textAnchor="middle" fill="#888" fontSize={11} transform="rotate(-90 18 160)">Độ phức tạp →</text>

                            {/* Competitor dots — each with distinct color + visible label */}
                            {/* Tokyo Seimitsu: v=3, c=8 → (254, 82) */}
                            <g>
                                <circle cx={254} cy={82} r={8} fill="#E040FB" opacity={0.9} />
                                <text x={244} y={78} textAnchor="end" fill="#E040FB" fontSize={11} opacity={0.95}>Tokyo Seimitsu</text>
                            </g>
                            {/* Misumi VN: v=6, c=7 → (428, 108) */}
                            <g>
                                <circle cx={428} cy={108} r={8} fill="#FFD740" opacity={0.9} />
                                <text x={438} y={103} textAnchor="start" fill="#FFD740" fontSize={11} opacity={0.95}>Misumi VN</text>
                            </g>
                            {/* Tiến Đạt CNC: v=5, c=5 → (370, 160) — on reference lines */}
                            <g>
                                <circle cx={370} cy={160} r={8} fill="#FF6D6D" opacity={0.9} />
                                <text x={380} y={180} textAnchor="start" fill="#FF6D6D" fontSize={11} opacity={0.95}>Tiến Đạt CNC</text>
                            </g>
                            {/* Samsung VN: v=8, c=4 → (544, 186) */}
                            <g>
                                <circle cx={544} cy={186} r={8} fill="#69F0AE" opacity={0.9} />
                                <text x={534} y={173} textAnchor="end" fill="#69F0AE" fontSize={11} opacity={0.95}>Samsung VN</text>
                            </g>
                            {/* Foxconn: v=9, c=3 → (602, 212) */}
                            <g>
                                <circle cx={602} cy={212} r={8} fill="#82B1FF" opacity={0.9} />
                                <text x={602} y={228} textAnchor="middle" fill="#82B1FF" fontSize={11} opacity={0.95}>Foxconn</text>
                            </g>

                            {/* Mekong Tech: v=4, c=9 → (312, 56) — hero dot */}
                            <circle cx={312} cy={56} r={32} fill="url(#mekongHalo)" />
                            <circle cx={312} cy={56} r={13} fill="#00E5FF" filter="url(#mekongGlowF)" />
                            <circle cx={312} cy={56} r={19} fill="none" stroke="#00E5FF" strokeWidth={1.5} strokeOpacity={0.45} strokeDasharray="3 2" />
                            <text x={329} y={48} textAnchor="start" fill="#00E5FF" fontSize={13} fontWeight="700">Mekong Tech</text>
                            <text x={329} y={64} textAnchor="start" fill="#00E5FF" fontSize={10} opacity={0.65}>Phức tạp cao · Niche</text>
                        </svg>

                        {/* Legend */}
                        <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center mt-4 text-xs">
                            <div className="flex items-center gap-1.5">
                                <div className="w-3 h-3 rounded-full" style={{ background: '#00E5FF', boxShadow: '0 0 6px #00E5FF' }} />
                                <span className="text-[#00E5FF] font-semibold">Mekong Tech</span>
                            </div>
                            {[
                                { label: 'Tokyo Seimitsu', color: '#E040FB' },
                                { label: 'Misumi VN',      color: '#FFD740' },
                                { label: 'Tiến Đạt CNC',  color: '#FF6D6D' },
                                { label: 'Samsung VN',    color: '#69F0AE' },
                                { label: 'Foxconn',       color: '#82B1FF' },
                            ].map((c, i) => (
                                <div key={i} className="flex items-center gap-1.5">
                                    <div className="w-2 h-2 rounded-full" style={{ background: c.color }} />
                                    <span className="text-gray-400">{c.label}</span>
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                </motion.div>
            </div>
        </SectionLayout>
    );
}
