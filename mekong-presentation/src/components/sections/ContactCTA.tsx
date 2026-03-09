import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

export function ContactCTA() {
    const { ref, isInView } = useInView(0.2);

    return (
        <section id="contact" className="min-h-screen py-20 px-4 md:px-8 lg:px-16 xl:px-24 flex flex-col justify-center relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[600px] h-[600px] rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle, #00E5FF 0%, transparent 70%)' }} />
            </div>

            <div className="max-w-4xl mx-auto w-full relative z-10 text-center" ref={ref}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
                        <span className="gradient-text">San sang</span> Dong hanh?
                    </h2>
                    <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
                        Mekong Technology Hub — nen tang cong nghe cho tuong lai san xuat Viet Nam.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-8"
                >
                    <GlassCard className="p-8">
                    <h3 className="text-xl font-bold text-white mb-6 text-center">Công ty TNHH Mekong Technology</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="flex items-start gap-3">
                            <MapPin size={18} className="text-neon-cyan flex-shrink-0 mt-0.5" />
                            <div>
                                <div className="text-sm font-semibold text-white">Địa chỉ</div>
                                <div className="text-xs text-gray-400 leading-relaxed">Lo E2-03, Duong D1<br />KCNC TP.HCM (SHTP), Viet Nam</div>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Mail size={18} className="text-neon-cyan flex-shrink-0 mt-0.5" />
                            <div>
                                <div className="text-sm font-semibold text-white">Email</div>
                                <div className="text-xs text-gray-400">invest@mekongtech.vn</div>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Phone size={18} className="text-neon-cyan flex-shrink-0 mt-0.5" />
                            <div>
                                <div className="text-sm font-semibold text-white">Hotline</div>
                                <div className="text-xs text-gray-400">+84 (0) 28 xxxx xxxx</div>
                            </div>
                        </div>
                    </div>
                    </GlassCard>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <a href="mailto:invest@mekongtech.vn" className="btn-primary inline-flex items-center gap-2 text-lg px-10 py-4">
                        Liên hệ Đầu tư
                        <ArrowUpRight size={20} />
                    </a>
                </motion.div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-16 pt-8 border-t border-white/5 text-center"
                >
                    <p className="text-xs text-gray-500">&copy; 2025 Mekong Technology. De an dau tu — tai lieu noi bo.</p>
                    <p className="text-xs text-gray-600 mt-1">KCNC TP.HCM — V2.1</p>
                </motion.div>
            </div>
        </section>
    );
}
