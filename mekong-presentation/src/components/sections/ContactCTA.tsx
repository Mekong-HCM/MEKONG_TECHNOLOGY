import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { Mail, MapPin, ArrowUpRight, ShieldCheck, ClipboardList, PhoneCall, FileSignature, Building2 } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

const nextSteps = [
    { step: 1, label: 'Gửi yêu cầu thông tin', desc: 'Email invest@mekongtech.vn — nhận Investor Packet trong 24h', Icon: ClipboardList, color: '#00E5FF' },
    { step: 2, label: 'Họp trình bày 1:1', desc: 'Trình bày chi tiết + Q&A với đội ngũ điều hành', Icon: PhoneCall, color: '#E040FB' },
    { step: 3, label: 'Ký NDA & Due Diligence', desc: 'Truy cập mô hình tài chính đầy đủ, báo cáo kỹ thuật', Icon: FileSignature, color: '#76FF03' },
    { step: 4, label: 'Term Sheet & Hợp tác', desc: 'Thỏa thuận điều khoản — bắt đầu hành trình cùng Mekong', Icon: Building2, color: '#FF9100' },
];

const trustSignals = [
    'Vị trí được BQL KCNC TP.HCM phê duyệt',
    'Tự chủ vốn 73,6% — không phụ thuộc ODA',
    'Miễn thuế TNDN 4 năm, giảm 50% trong 9 năm tiếp',
    'P(NPV>0) = 65% theo mô phỏng Monte Carlo',
];

export function ContactCTA() {
    const { ref, isInView } = useInView(0.2);

    return (
        <section id="contact" className="min-h-screen py-20 px-4 md:px-8 lg:px-16 xl:px-24 flex flex-col justify-center relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[600px] h-[600px] rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle, #00E5FF 0%, transparent 70%)' }} />
            </div>

            <div className="max-w-5xl mx-auto w-full relative z-10" ref={ref}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
                        <span className="gradient-text">Sẵn sàng</span> Đồng hành?
                    </h2>
                    <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
                        Mekong Technology Hub — nền tảng công nghệ cho tương lai sản xuất Việt Nam.
                    </p>
                </motion.div>

                {/* Next Steps Process */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="mb-8"
                >
                    <GlassCard className="p-6 md:p-8">
                        <h3 className="text-lg font-bold text-white mb-6 text-center">Quy trình Hợp tác</h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {nextSteps.map((s) => (
                                <div key={s.step} className="relative p-4 rounded-xl bg-white/[0.03] border border-white/5">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: `${s.color}20`, color: s.color }}>
                                            {s.step}
                                        </div>
                                        <s.Icon size={16} style={{ color: s.color }} />
                                    </div>
                                    <div className="text-sm font-semibold text-white mb-1">{s.label}</div>
                                    <div className="text-xs text-gray-400 leading-relaxed">{s.desc}</div>
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                </motion.div>

                {/* Contact Info + Trust Signals */}
                <div className="grid lg:grid-cols-2 gap-6 mb-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <GlassCard className="p-6 h-full">
                            <h3 className="text-base font-bold text-white mb-4">Công ty TNHH Mekong Technology</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <MapPin size={16} className="text-neon-cyan flex-shrink-0 mt-0.5" />
                                    <div>
                                        <div className="text-sm font-semibold text-white">Địa chỉ Dự án</div>
                                        <div className="text-xs text-gray-400 leading-relaxed">Lô E2-03, Đường D1, Khu Công nghệ Cao TP.HCM (SHTP)</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Mail size={16} className="text-neon-cyan flex-shrink-0 mt-0.5" />
                                    <div>
                                        <div className="text-sm font-semibold text-white">Liên hệ</div>
                                        <div className="text-xs text-gray-400">invest@mekongtech.vn (Đầu tư)</div>
                                        <div className="text-xs text-gray-400">partner@mekongtech.vn (Hợp tác Kỹ thuật)</div>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.35 }}
                    >
                        <GlassCard className="p-6 h-full">
                            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                                <ShieldCheck size={16} className="text-green-400" /> Điểm Tin cậy
                            </h3>
                            <div className="space-y-2">
                                {trustSignals.map((item, i) => (
                                    <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0 mt-1.5" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.45 }}
                    className="text-center"
                >
                    <a href="mailto:invest@mekongtech.vn" className="btn-primary inline-flex items-center gap-2 text-lg px-10 py-4">
                        Gửi yêu cầu Investor Packet
                        <ArrowUpRight size={20} />
                    </a>
                    <p className="text-xs text-gray-500 mt-3">Phản hồi trong vòng 24 giờ làm việc</p>
                </motion.div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-16 pt-8 border-t border-white/5 text-center"
                >
                    <p className="text-xs text-gray-500">&copy; 2025 Mekong Technology. Confidential — For intended recipients only.</p>
                    <p className="text-xs text-gray-600 mt-1">KCNC TP.HCM — V2.1</p>
                </motion.div>
            </div>
        </section>
    );
}
