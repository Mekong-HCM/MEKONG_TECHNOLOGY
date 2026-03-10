import { useState, useEffect, useCallback } from 'react';

export interface SlideInfo {
    id: string;
    label: string;
    group?: string;
}

export const SLIDES: SlideInfo[] = [
    { id: 'hero', label: 'Home', group: 'default' },
    { id: 'urgency', label: 'Tinh cap thiet', group: 'context' },
    { id: 'summary', label: 'Tom tat', group: 'context' },
    { id: 'market', label: 'Thi truong', group: 'market' },
    { id: 'competitive', label: 'Canh tranh', group: 'market' },
    { id: 'export', label: 'Xuat khau ASEAN', group: 'market' },
    { id: 'pillars', label: '3 Tru cot', group: 'product' },
    { id: 'product-iot', label: 'SP: IoT Gateway', group: 'product' },
    { id: 'product-robot', label: 'SP: Robot AMR/AGV', group: 'product' },
    { id: 'product-oht', label: 'SP: OHT & MekongOS', group: 'product' },
    { id: 'tech-stack', label: 'Cong nghe loi', group: 'tech' },
    { id: 'rd-strategy', label: 'R&D Strategy', group: 'rd' },
    { id: 'rd-labs', label: 'R&D Labs', group: 'rd' },
    { id: 'rd-ip', label: 'IP & Patents', group: 'rd' },
    { id: 'infra', label: 'Ha tang', group: 'ops' },
    { id: 'production', label: 'San xuat', group: 'ops' },
    { id: 'quality', label: 'Chat luong', group: 'ops' },
    { id: 'financials', label: 'Tai chinh', group: 'finance' },
    { id: 'legal', label: 'Phap ly', group: 'legal' },
    { id: 'esg-env', label: 'ESG & Moi truong', group: 'esg' },
    { id: 'risk', label: 'Rui ro', group: 'risk' },
    { id: 'team', label: 'Doi ngu', group: 'team' },
    { id: 'socio-economic', label: 'KT-XH Impact', group: 'impact' },
    { id: 'roadmap', label: 'Lo trinh', group: 'plan' },
    { id: 'strategic', label: 'Chien luoc', group: 'plan' },
    { id: 'contact', label: 'Lien he', group: 'default' },
];

const SECTION_IDS = SLIDES.map(s => s.id);

interface SlideNavigationState {
    currentSlide: number;
    totalSlides: number;
    progress: number;
    isFullscreen: boolean;
    isOverviewOpen: boolean;
    goToSlide: (index: number) => void;
    nextSlide: () => void;
    prevSlide: () => void;
    toggleFullscreen: () => void;
    toggleOverview: () => void;
}

export function useSlideNavigation(): SlideNavigationState {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isOverviewOpen, setIsOverviewOpen] = useState(false);
    const totalSlides = SECTION_IDS.length;

    const toggleOverview = useCallback(() => {
        setIsOverviewOpen(prev => !prev);
    }, []);

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
                case 'g':
                case 'G':
                    if (!e.ctrlKey && !e.metaKey) {
                        e.preventDefault();
                        toggleOverview();
                    }
                    break;
                case 'Escape':
                    if (isOverviewOpen) {
                        e.preventDefault();
                        setIsOverviewOpen(false);
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
    }, [nextSlide, prevSlide, goToSlide, toggleFullscreen, toggleOverview, isOverviewOpen, totalSlides]);

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
        isOverviewOpen,
        goToSlide,
        nextSlide,
        prevSlide,
        toggleFullscreen,
        toggleOverview,
    };
}
