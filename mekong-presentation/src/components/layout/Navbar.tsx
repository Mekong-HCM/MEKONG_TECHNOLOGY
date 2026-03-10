import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Download, Grid3X3 } from 'lucide-react';
import { SLIDES } from '../../hooks/useSlideNavigation';

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
    const [scrolled, setScrolled] = useState(false);

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
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);

            const sectionEls = sections.map(s => document.getElementById(s.id)).filter(Boolean);
            const scrollPos = window.scrollY + window.innerHeight / 3;

            for (let i = sectionEls.length - 1; i >= 0; i--) {
                const el = sectionEls[i];
                if (el && el.offsetTop <= scrollPos) {
                    setActive(sections[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (isFullscreen) {
        return (
            <div className="fixed top-4 right-4 z-50 flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                    {sections.map((s, i) => (
                        <a
                            key={s.id}
                            href={`#${s.id}`}
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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark-950/80 backdrop-blur-xl border-b border-white/5' : ''}`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-14">
                <a href="#hero" className="text-sm font-black gradient-text tracking-tight">MEKONG TECH</a>

                <div className="hidden lg:flex items-center gap-1">
                    <button
                        onClick={handleExportPDF}
                        className="px-3 py-1.5 rounded-md text-xs font-medium text-gray-500 hover:text-gray-300 transition-all duration-200 flex items-center gap-1 print:hidden"
                        title="Export PDF"
                    >
                        <Download size={12} /> PDF
                    </button>
                    <button
                        onClick={onToggleOverview}
                        className="px-2 py-1.5 rounded-md text-xs font-medium text-gray-500 hover:text-neon-cyan transition-all duration-200 flex items-center gap-1 print:hidden"
                        title="Slide Overview (G)"
                    >
                        <Grid3X3 size={12} />
                    </button>
                    {sections.filter(s => navSections.includes(s.id)).map((s) => (
                        <a
                            key={s.id}
                            href={`#${s.id}`}
                            className={`px-2 py-1.5 rounded-md text-[11px] font-medium transition-all duration-200 ${active === s.id
                                    ? 'text-white bg-white/10'
                                    : 'text-gray-500 hover:text-gray-300'
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
                            className={`w-2 h-2 rounded-full transition-all duration-200 ${active === s.id ? 'bg-neon-cyan scale-125' : 'bg-gray-600'}`}
                            title={s.label}
                        />
                    ))}
                </div>
            </div>
        </motion.nav>
    );
}
