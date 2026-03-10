import { motion } from 'framer-motion';

interface SlideInfo {
    id: string;
    label: string;
    group?: string;
}

interface SlideIndicatorProps {
    slides: SlideInfo[];
    currentSlide: number;
    onGoTo: (index: number) => void;
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

export function SlideIndicator({ slides, currentSlide, onGoTo }: SlideIndicatorProps) {
    return (
        <div className="fixed right-3 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-1.5 print:hidden">
            {slides.map((slide, i) => {
                const isActive = i === currentSlide;
                const color = groupColors[slide.group || 'default'] || groupColors.default;

                return (
                    <button
                        key={slide.id}
                        onClick={() => onGoTo(i)}
                        className="group relative flex items-center"
                        aria-label={slide.label}
                    >
                        {/* Tooltip */}
                        <span className="absolute right-6 whitespace-nowrap px-2 py-0.5 rounded text-[10px] font-medium bg-dark-950/90 border border-white/10 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                            {slide.label}
                        </span>

                        {/* Dot */}
                        <motion.span
                            className="block rounded-full transition-all duration-200"
                            style={{
                                width: isActive ? 8 : 5,
                                height: isActive ? 8 : 5,
                                backgroundColor: isActive ? color : '#555',
                                boxShadow: isActive ? `0 0 8px ${color}60` : 'none',
                            }}
                            layoutId={undefined}
                        />
                    </button>
                );
            })}
        </div>
    );
}
