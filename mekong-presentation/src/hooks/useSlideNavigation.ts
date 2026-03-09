import { useState, useEffect, useCallback } from 'react';

const SECTION_IDS = [
    'hero', 'summary', 'market', 'pillars', 'infra',
    'financials', 'legal', 'team', 'roadmap', 'strategic', 'contact',
];

interface SlideNavigationState {
    currentSlide: number;
    totalSlides: number;
    progress: number;
    isFullscreen: boolean;
    goToSlide: (index: number) => void;
    nextSlide: () => void;
    prevSlide: () => void;
    toggleFullscreen: () => void;
}

export function useSlideNavigation(): SlideNavigationState {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const totalSlides = SECTION_IDS.length;

    const goToSlide = useCallback((index: number) => {
        const clampedIndex = Math.max(0, Math.min(index, totalSlides - 1));
        const el = document.getElementById(SECTION_IDS[clampedIndex]);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    }, [totalSlides]);

    const nextSlide = useCallback(() => {
        goToSlide(currentSlide + 1);
    }, [currentSlide, goToSlide]);

    const prevSlide = useCallback(() => {
        goToSlide(currentSlide - 1);
    }, [currentSlide, goToSlide]);

    const toggleFullscreen = useCallback(() => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => {});
            setIsFullscreen(true);
        } else {
            document.exitFullscreen().catch(() => {});
            setIsFullscreen(false);
        }
    }, []);

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const tag = (e.target as HTMLElement)?.tagName;
            if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

            switch (e.key) {
                case 'ArrowDown':
                case 'ArrowRight':
                case 'PageDown':
                    e.preventDefault();
                    nextSlide();
                    break;
                case 'ArrowUp':
                case 'ArrowLeft':
                case 'PageUp':
                    e.preventDefault();
                    prevSlide();
                    break;
                case 'Home':
                    e.preventDefault();
                    goToSlide(0);
                    break;
                case 'End':
                    e.preventDefault();
                    goToSlide(totalSlides - 1);
                    break;
                case 'f':
                case 'F':
                    if (!e.ctrlKey && !e.metaKey) {
                        e.preventDefault();
                        toggleFullscreen();
                    }
                    break;
                default:
                    // 1-9 keys jump to slides
                    if (e.key >= '1' && e.key <= '9') {
                        e.preventDefault();
                        goToSlide(parseInt(e.key) - 1);
                    }
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide, goToSlide, toggleFullscreen, totalSlides]);

    // Track scroll position for current slide and progress
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);

            const viewportMiddle = scrollTop + window.innerHeight / 3;
            for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
                const el = document.getElementById(SECTION_IDS[i]);
                if (el && el.offsetTop <= viewportMiddle) {
                    setCurrentSlide(i);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return {
        currentSlide,
        totalSlides,
        progress,
        isFullscreen,
        goToSlide,
        nextSlide,
        prevSlide,
        toggleFullscreen,
    };
}
