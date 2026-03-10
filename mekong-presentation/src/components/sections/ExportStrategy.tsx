import { motion } from 'framer-motion';
import { Globe, TrendingUp, FileCheck, Target } from 'lucide-react';
import { SectionLayout } from '../ui/SectionLayout';
import { GlassCard } from '../ui/GlassCard';
import { useInView } from '../../hooks/useInView';
import { exportRings, exportKPIs } from '../../data/competitive';

export function ExportStrategy() {
    const { ref, isInView } = useInView(0.15);

    return (
        <SectionLayout id="export">
            <div ref={ref}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
                    <h2 className="section-title text-white">Chien luoc <span className="gradient-text">Xuat khau & ASEAN</span></h2>
                    <p className="section-subtitle">Mo hinh xuat khau 3 vong — Muc tieu 35% doanh thu tu xuat khau</p>
                </motion.div>

                {/* Export KPIs */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.5 }}
                    className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6"
                >
                    {[
                        { label: 'Xuat khau target', value: exportKPIs.targetExportPct, color: 'text-neon-cyan' },
                        { label: 'Revenue XK 10Y', value: exportKPIs.exportRevenue10Y, color: 'text-neon-magenta' },
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
                        <motion.div
                            key={ring.ring}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
                        >
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

                <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.5, duration: 0.5 }}
                    className="mt-4 flex items-center gap-2 text-[10px] text-gray-500"
                >
                    <FileCheck size={12} className="text-green-400" />
                    Hiep dinh AFTA, RCEP, CPTPP — 0% thue quan noi khoi ASEAN
                </motion.div>
            </div>
        </SectionLayout>
    );
}
