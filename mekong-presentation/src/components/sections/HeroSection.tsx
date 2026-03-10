import { motion } from 'framer-motion';
import { ChevronDown, Cpu, Cog, Server, DollarSign, Layers, MapPin, Users } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { OptimizedImage } from '../ui/OptimizedImage';
import { images } from '../../data/images';

export function HeroSection() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background image with overlay */}
            <div className="absolute inset-0 z-0">
                <OptimizedImage
                    src={images['loc-01'].src}
                    alt={images['loc-01'].alt}
                    lazy={false}
                    placeholderLabel="KCNC TP.Hồ Chí Minh — Ảnh vệ tinh"
                    placeholderColor="#00E5FF"
                    aspectRatio="auto"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-dark-950/85" />
            </div>
            <div className="particles-bg" />

            {/* Floating orbs */}
            <motion.div
                className="absolute w-48 md:w-72 lg:w-96 h-48 md:h-72 lg:h-96 rounded-full opacity-20 blur-3xl"
                style={{ background: 'radial-gradient(circle, #00E5FF 0%, transparent 70%)', top: '10%', right: '10%' }}
                animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute w-40 md:w-56 lg:w-72 h-40 md:h-56 lg:h-72 rounded-full opacity-15 blur-3xl"
                style={{ background: 'radial-gradient(circle, #E040FB 0%, transparent 70%)', bottom: '15%', left: '5%' }}
                animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-6"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest border border-neon-cyan/30 text-neon-cyan/80 bg-neon-cyan/5">
                        Đề Án Đầu Tư · KCNC TP.HCM
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
                >
                    <span className="gradient-text">Mekong</span>{' '}
                    <span className="text-white">Technology</span>
                    <br />
                    <span className="text-white/90 text-3xl md:text-5xl lg:text-6xl font-bold">Hub</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed"
                >
                    Hệ sinh thái sản xuất thông minh <span className="text-white font-semibold">đầu tiên</span> tại Khu Công nghệ cao TP.HCM —
                    tích hợp <span className="neon-text">IoT/Robot</span>, <span className="text-pink-400">CNC Siêu chính xác</span> và{' '}
                    <span className="text-green-400">Datacenter AI</span>.
                </motion.p>

                {/* Key Facts */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto"
                >
                    {[
                        { value: '47,50M', label: 'USD Đầu tư', Icon: DollarSign, color: '#00E5FF' },
                        { value: '3', label: 'Trụ cột', Icon: Layers, color: '#E040FB' },
                        { value: '1 ha', label: 'KCNC HCM', Icon: MapPin, color: '#76FF03' },
                        { value: '300', label: 'Việc làm CNC', Icon: Users, color: '#FF9100' },
                    ].map((stat, i) => (
                        <GlassCard key={i} className="p-4">
                            <stat.Icon size={24} style={{ color: stat.color }} className="mb-1" />
                            <div className="stat-value text-2xl md:text-3xl text-white">{stat.value}</div>
                            <div className="stat-label">{stat.label}</div>
                        </GlassCard>
                    ))}
                </motion.div>

                {/* Pillar Icons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="flex justify-center gap-8 mb-12"
                >
                    {[
                        { Icon: Cpu, label: 'IoT / Robot', color: '#00E5FF' },
                        { Icon: Cog, label: 'CNC / MPMC', color: '#E040FB' },
                        { Icon: Server, label: 'DC / MACC', color: '#76FF03' },
                    ].map(({ Icon, label, color }, i) => (
                        <motion.div
                            key={i}
                            className="flex flex-col items-center gap-2"
                            whileHover={{ scale: 1.1 }}
                        >
                            <div
                                className="w-14 h-14 rounded-xl flex items-center justify-center"
                                style={{ background: `${color}15`, border: `1px solid ${color}40` }}
                            >
                                <Icon size={24} style={{ color }} />
                            </div>
                            <span className="text-xs text-gray-400 font-medium">{label}</span>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.a
                    href="#summary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="btn-primary inline-flex items-center gap-2"
                >
                    Xem Đề Án
                    <ChevronDown size={18} />
                </motion.a>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <ChevronDown size={24} className="text-gray-500" />
            </motion.div>
        </section>
    );
}
