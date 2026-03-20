import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown, Home, List, Maximize2, Minimize2 } from 'lucide-react';

interface FloatingNavProps {
    currentSlide: number;
    totalSlides: number;
    currentLabel: string;
    onPrev: () => void;
    onNext: () => void;
    onFirst: () => void;
    onLast: () => void;
    onToggleOverview: () => void;
    onToggleFullscreen: () => void;
    isFullscreen: boolean;
}

export function FloatingNav({
    currentSlide,
    totalSlides,
    currentLabel,
    onPrev,
    onNext,
    onFirst,
    onLast,
    onToggleOverview,
    onToggleFullscreen,
    isFullscreen,
}: FloatingNavProps) {
    const showPrev = currentSlide > 0;
    const showNext = currentSlide < totalSlides - 1;

    return (
        <>
            <motion.aside
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="fixed left-3 md:left-4 top-24 z-40 w-52 hidden md:block print:hidden"
            >
                <div className="glass-card p-3 space-y-3">
                    <div>
                        <div className="text-[11px] uppercase tracking-wider text-gray-400">Điều khiển nhanh</div>
                        <div className="text-sm text-white font-semibold mt-1 line-clamp-2">
                            {currentSlide + 1}/{totalSlides} · {currentLabel}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <button
                            onClick={onFirst}
                            className="h-9 rounded-lg border border-white/10 bg-white/5 text-gray-200 hover:text-neon-cyan hover:border-neon-cyan/30 transition-all flex items-center justify-center gap-1"
                            aria-label="Slide đầu"
                            title="Slide đầu (Home)"
                        >
                            <Home size={14} />
                        </button>
                        <button
                            onClick={onLast}
                            className="h-9 rounded-lg border border-white/10 bg-white/5 text-gray-200 hover:text-neon-cyan hover:border-neon-cyan/30 transition-all flex items-center justify-center gap-1"
                            aria-label="Slide cuối"
                            title="Slide cuối (End)"
                        >
                            <List size={14} />
                        </button>
                        <button
                            onClick={onToggleOverview}
                            className="h-9 rounded-lg border border-white/10 bg-white/5 text-gray-200 hover:text-neon-cyan hover:border-neon-cyan/30 transition-all text-xs font-medium"
                            aria-label="Mở overview"
                            title="Overview (G)"
                        >
                            Overview
                        </button>
                        <button
                            onClick={onToggleFullscreen}
                            className="h-9 rounded-lg border border-white/10 bg-white/5 text-gray-200 hover:text-neon-cyan hover:border-neon-cyan/30 transition-all flex items-center justify-center"
                            aria-label="Bật/tắt fullscreen"
                            title="Fullscreen (F)"
                        >
                            {isFullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
                        </button>
                    </div>

                    <div className="text-[11px] leading-5 text-gray-400 border-t border-white/10 pt-2">
                        ↑/↓: chuyển slide<br />
                        PgUp/PgDn: lùi/tiến<br />
                        Home/End: đầu/cuối<br />
                        G: overview · F: fullscreen
                    </div>
                </div>
            </motion.aside>

            {/* Previous */}
            <AnimatePresence>
                {showPrev && (
                    <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        onClick={onPrev}
                        className="fixed left-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/30 transition-all duration-200 print:hidden"
                        aria-label="Previous slide"
                        title="Slide trước"
                    >
                        <ChevronUp size={20} />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Next */}
            <AnimatePresence>
                {showNext && (
                    <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        onClick={onNext}
                        className="fixed left-4 top-1/2 translate-y-4 z-40 w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/30 transition-all duration-200 print:hidden"
                        aria-label="Next slide"
                        title="Slide tiếp"
                    >
                        <ChevronDown size={20} />
                    </motion.button>
                )}
            </AnimatePresence>
        </>
    );
}
