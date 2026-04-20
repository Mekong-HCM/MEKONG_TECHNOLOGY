import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Download, Grid3X3 } from 'lucide-react';
import { SLIDES } from '../../hooks/useSlideNavigation';
import { NAVBAR_HEIGHT, getSnapContainer, scrollToSection } from '../../utils/scroll';

const sections = SLIDES;

interface NavbarProps {
    isFullscreen?: boolean;
    currentSlide?: number;
    totalSlides?: number;
    onToggleOverview?: () => void;
}

// Key nav sections shown in top bar (subset for space)
const navSections = [
    'hero', 'summary', 'market', 'pillars', 'product-iot',
    'rd-strategy', 'infra', 'financials', 'legal', 'team', 'roadmap', 'contact',
];

export function Navbar({ isFullscreen = false, currentSlide = 0, totalSlides = 26, onToggleOverview }: NavbarProps) {
    const [active, setActive] = useState('hero');

    const handleExportPDF = useCallback(() => {
        document.body.classList.add('printing');
        requestAnimationFrame(() => {
            window.print();
            window.addEventListener('afterprint', () => {
                document.body.classList.remove('printing');
            }, { once: true });
        });
    }, []);

    useEffect(() => {
        const container = getSnapContainer();
        if (!container) return;

        const handleScroll = () => {
            // Use getBoundingClientRect so it works with any scroll container
            const refY = NAVBAR_HEIGHT + 40;
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i].id);
                if (el && el.getBoundingClientRect().top <= refY) {
                    setActive(sections[i].id);
                    break;
                }
            }
        };

        container.addEventListener('scroll', handleScroll, { passive: true });
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    if (isFullscreen) {
        return (
            <div className="fixed top-4 right-4 z-50 flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                    {sections.map((s, i) => (
                        <a
                            key={s.id}
                            href={`#${s.id}`}
                            onClick={(e) => { e.preventDefault(); scrollToSection(s.id); }}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-neon-cyan scale-125' : 'bg-gray-600 hover:bg-gray-400'}`}
                            title={s.label}
                        />
                    ))}
                </div>
                <span className="text-xs text-gray-400 font-mono">{currentSlide + 1}/{totalSlides}</span>
            </div>
        );
    }

    return (
        <motion.nav
            initial={{ y: -60 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-dark-950/90 backdrop-blur-xl border-b border-white/10`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-20">
                <a href="#hero" onClick={(e) => { e.preventDefault(); setActive('hero'); scrollToSection('hero'); }} className="flex flex-col leading-tight gap-0.5">
                    <span className="text-sm font-black gradient-text tracking-tight">KINEXUS</span>
                    <span className="text-[10px] text-gray-300 tracking-wide">ĐỀ ÁN ĐẦU TƯ — KCNC TP.HCM</span>
                </a>

                <div className="hidden lg:flex items-center gap-1">
                    <button
                        onClick={handleExportPDF}
                        className="px-3 py-1.5 rounded-md text-xs font-medium text-gray-400 hover:text-white transition-all duration-200 flex items-center gap-1 print:hidden"
                        title="Export PDF"
                    >
                        <Download size={12} /> PDF
                    </button>
                    <button
                        onClick={onToggleOverview}
                        className="px-2 py-1.5 rounded-md text-xs font-medium text-gray-400 hover:text-neon-cyan transition-all duration-200 flex items-center gap-1 print:hidden"
                        title="Slide Overview (G)"
                    >
                        <Grid3X3 size={12} />
                    </button>
                    {sections.filter(s => navSections.includes(s.id)).map((s) => (
                        <a
                            key={s.id}
                            href={`#${s.id}`}
                            onClick={(e) => { e.preventDefault(); setActive(s.id); scrollToSection(s.id); }}
                            className={`px-2 py-1.5 rounded-md text-[11px] font-medium transition-all duration-200 ${active === s.id
                                    ? 'text-neon-cyan bg-cyan-500/10 border border-cyan-500/20'
                                    : 'text-gray-100 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            {s.label}
                        </a>
                    ))}
                </div>

                {/* Mobile menu - dots */}
                <div className="flex lg:hidden items-center gap-1">
                    {sections.map((s) => (
                        <a
                            key={s.id}
                            href={`#${s.id}`}
                            onClick={(e) => { e.preventDefault(); scrollToSection(s.id); }}
                            className={`w-2 h-2 rounded-full transition-all duration-200 ${active === s.id ? 'bg-neon-cyan scale-125' : 'bg-gray-600'}`}
                            title={s.label}
                        />
                    ))}
                </div>
            </div>
        </motion.nav>
    );
}
