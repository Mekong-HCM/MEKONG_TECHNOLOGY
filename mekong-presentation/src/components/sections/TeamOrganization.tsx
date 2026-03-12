import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { team } from '../../data/team';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Globe2, BarChart3 } from 'lucide-react';
import { SectionLayout } from '../ui/SectionLayout';
import { GlassCard } from '../ui/GlassCard';

const headcountData = team.headcount.map(h => ({
    phase: h.phase,
    IoT: h.iot,
    CNC: h.cnc,
    DC: h.dc,
    'R&D': h.rd,
    Other: h.other,
}));

export function TeamOrganization() {
    const { ref, isInView } = useInView(0.15);

    return (
        <SectionLayout id="team">
            <div ref={ref}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
                    <h2 className="section-title text-white">Đội ngũ <span className="gradient-text">& Tổ chức</span></h2>
                    <p className="section-subtitle">200 nhân sự chất lượng cao — từ 10-15 người Y0 đến ổn định Y12 — ESOP 3% cho nhóm chủ chốt.</p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    {/* Headcount Chart */}
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
                        <GlassCard className="p-6 h-full">
                        <h4 className="text-lg font-semibold text-white mb-4">Nhân sự theo Giai đoạn</h4>
                        <ResponsiveContainer width="100%" height={250}>
                            <BarChart data={headcountData} margin={{ left: 0 }}>
                                <XAxis dataKey="phase" tick={{ fill: '#999', fontSize: 10 }} axisLine={false} tickLine={false} />
                                <YAxis tick={{ fill: '#999', fontSize: 10 }} axisLine={false} tickLine={false} />
                                <Tooltip contentStyle={{ background: '#191d44', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '11px', color: '#fff' }} />
                                <Legend iconType="circle" wrapperStyle={{ fontSize: '10px', color: '#fff' }} />
                                <Bar dataKey="IoT" stackId="a" fill="#00E5FF" radius={[0, 0, 0, 0]} barSize={30} />
                                <Bar dataKey="CNC" stackId="a" fill="#E040FB" />
                                <Bar dataKey="DC" stackId="a" fill="#76FF03" />
                                <Bar dataKey="R&D" stackId="a" fill="#FF9100" />
                                <Bar dataKey="Other" stackId="a" fill="#CFD8DC" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                        </GlassCard>
                    </motion.div>

                    {/* C-Level Team */}
                    <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}>
                        <GlassCard className="p-6 h-full">
                        <h4 className="text-lg font-semibold text-white mb-4">Ban Giám đốc</h4>
                        <div className="space-y-3">
                            {team.cLevel.map((person, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/30 to-pink-500/30 flex items-center justify-center text-sm font-black text-white flex-shrink-0">
                                        {person.name.charAt(0)}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-sm font-bold text-white truncate">{person.name}</div>
                                        <div className="text-xs text-gray-400 truncate">{person.role} — {person.profile}</div>
                                    </div>
                                    <div className="text-xs text-neon-cyan font-semibold whitespace-nowrap">{person.salary}</div>
                                </div>
                            ))}
                        </div>
                        </GlassCard>
                    </motion.div>
                </div>

                {/* Experts + ESOP */}
                <div className="grid md:grid-cols-2 gap-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.4 }}>
                        <GlassCard className="p-5 h-full">
                        <h4 className="text-base font-bold text-white mb-3 flex items-center gap-2"><Globe2 size={16} className="text-neon-cyan" /> Chuyên gia Quốc tế</h4>
                        <div className="space-y-2">
                            {team.experts.map((exp, i) => (
                                <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                                    <div>
                                        <div className="text-xs font-semibold text-white">{exp.role}</div>
                                        <div className="text-xs text-gray-400">{exp.origin} · {exp.duration}</div>
                                    </div>
                                    <span className="text-xs neon-text font-bold">{exp.count} người</span>
                                </div>
                            ))}
                        </div>
                        </GlassCard>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.5 }}>
                        <GlassCard className="p-5 h-full">
                        <h4 className="text-base font-bold text-white mb-3 flex items-center gap-2"><BarChart3 size={16} className="text-neon-cyan" /> ESOP (Employee Stock Ownership)</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                            <div>
                                <div className="text-2xl font-extrabold neon-text">{team.esop.pool}</div>
                                <div className="text-xs text-gray-400">Pool</div>
                            </div>
                            <div>
                                <div className="text-2xl font-extrabold text-pink-400">{team.esop.value}</div>
                                <div className="text-xs text-gray-400">Giá trị</div>
                            </div>
                            <div>
                                <div className="text-lg font-extrabold text-green-400">{team.esop.vesting}</div>
                                <div className="text-xs text-gray-400">Vesting</div>
                            </div>
                        </div>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </SectionLayout>
    );
}
