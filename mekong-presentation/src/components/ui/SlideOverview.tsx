import { motion, AnimatePresence } from 'framer-motion';
import { X, Grid3X3 } from 'lucide-react';

interface SlideInfo {
    id: string;
    label: string;
    group?: string;
}

interface SlideOverviewProps {
    isOpen: boolean;
    slides: SlideInfo[];
    currentSlide: number;
    onGoTo: (index: number) => void;
    onClose: () => void;
}

const groupColors: Record<string, string> = {
    context: '#00E5FF',
    market: '#E040FB',
    product: '#00E5FF',
    tech: '#76FF03',
    rd: '#FFD600',
    ops: '#E040FB',
    finance: '#76FF03',
    legal: '#FF6D00',
    esg: '#76FF03',
    risk: '#FF5252',
    team: '#00E5FF',
    impact: '#E040FB',
    plan: '#FFD600',
    default: '#666',
};

export function SlideOverview({ isOpen, slides, currentSlide, onGoTo, onClose }: SlideOverviewProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-dark-950/95 backdrop-blur-xl flex items-center justify-center p-6 print:hidden"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="max-w-5xl w-full max-h-[85vh] overflow-y-auto"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-2">
                                <Grid3X3 size={18} className="text-neon-cyan" />
                                <h3 className="text-lg font-bold text-white">Slide Overview</h3>
                                <span className="text-xs text-gray-500 ml-2">({slides.length} slides)</span>
                            </div>
                            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-2">
                            {slides.map((slide, i) => {
                                const isActive = i === currentSlide;
                                const color = groupColors[slide.group || 'default'] || groupColors.default;

                                return (
                                    <button
                                        key={slide.id}
                                        onClick={() => { onGoTo(i); onClose(); }}
                                        className={`relative p-2 rounded-lg border transition-all duration-200 text-left ${isActive
                                            ? 'border-neon-cyan/50 bg-neon-cyan/10'
                                            : 'border-white/5 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]'
                                            }`}
                                    >
                                        <div
                                            className="text-[10px] font-bold mb-0.5"
                                            style={{ color }}
                                        >
                                            {String(i + 1).padStart(2, '0')}
                                        </div>
                                        <div className="text-[10px] text-gray-300 leading-tight line-clamp-2">
                                            {slide.label}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        <div className="mt-4 text-center text-[10px] text-gray-600">
                            Bấm vào slide để chuyển · Nhấn ESC hoặc G để đóng
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
