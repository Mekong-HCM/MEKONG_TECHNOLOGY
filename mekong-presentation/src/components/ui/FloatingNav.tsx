import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface FloatingNavProps {
    currentSlide: number;
    totalSlides: number;
    onPrev: () => void;
    onNext: () => void;
}

export function FloatingNav({ currentSlide, totalSlides, onPrev, onNext }: FloatingNavProps) {
    const showPrev = currentSlide > 0;
    const showNext = currentSlide < totalSlides - 1;

    return (
        <>
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
                    >
                        <ChevronDown size={20} />
                    </motion.button>
                )}
            </AnimatePresence>
        </>
    );
}
