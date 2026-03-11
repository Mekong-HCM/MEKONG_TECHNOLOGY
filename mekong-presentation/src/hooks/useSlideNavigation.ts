import { useState, useEffect, useCallback } from 'react';
import { getSnapContainer, NAVBAR_HEIGHT } from '../utils/scroll';

export interface SlideInfo {
    id: string;
    label: string;
    group?: string;
}

export const SLIDES: SlideInfo[] = [
    { id: 'hero', label: 'Trang chủ', group: 'default' },
    { id: 'urgency', label: 'Tính cấp thiết', group: 'context' },
    { id: 'summary', label: 'Tóm tắt', group: 'context' },
    { id: 'market', label: 'Thị trường', group: 'market' },
    { id: 'competitive', label: 'Cạnh tranh', group: 'market' },
    { id: 'export', label: 'Xuất khẩu ASEAN', group: 'market' },
    { id: 'pillars', label: '3 Trụ cột', group: 'product' },
    { id: 'product-iot', label: 'Sản phẩm IoT', group: 'product' },
    { id: 'product-robot', label: 'SP: Robot AMR/AGV', group: 'product' },
    { id: 'product-oht', label: 'SP: OHT & MekongOS', group: 'product' },
    { id: 'tech-stack', label: 'Công nghệ lõi', group: 'tech' },
    { id: 'rd-strategy', label: 'Chiến lược R&D', group: 'rd' },
    { id: 'rd-labs', label: 'Phòng thí nghiệm', group: 'rd' },
    { id: 'rd-ip', label: 'IP & Bằng sáng chế', group: 'rd' },
    { id: 'infra', label: 'Hạ tầng', group: 'ops' },
    { id: 'production', label: 'Sản xuất', group: 'ops' },
    { id: 'quality', label: 'Chất lượng', group: 'ops' },
    { id: 'financials', label: 'Tài chính', group: 'finance' },
    { id: 'legal', label: 'Pháp lý', group: 'legal' },
    { id: 'esg-env', label: 'ESG & Môi trường', group: 'esg' },
    { id: 'risk', label: 'Rủi ro', group: 'risk' },
    { id: 'team', label: 'Đội ngũ', group: 'team' },
    { id: 'socio-economic', label: 'Tác động KT-XH', group: 'impact' },
    { id: 'roadmap', label: 'Lộ trình', group: 'plan' },
    { id: 'strategic', label: 'Chiến lược', group: 'plan' },
    { id: 'contact', label: 'Liên hệ', group: 'default' },
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
        const container = getSnapContainer();
        if (!el || !container) return;
        const containerBox = container.getBoundingClientRect();
        const elBox = el.getBoundingClientRect();
        container.scrollTo({
            top: container.scrollTop + elBox.top - containerBox.top - NAVBAR_HEIGHT,
            behavior: 'smooth',
        });
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
        const container = getSnapContainer();
        if (!container) return;

        const handleScroll = () => {
            const scrollTop = container.scrollTop;
            const scrollHeight = container.scrollHeight - container.clientHeight;
            setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);

            const refY = NAVBAR_HEIGHT + 40;
            for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
                const el = document.getElementById(SECTION_IDS[i]);
                if (el && el.getBoundingClientRect().top <= refY) {
                    setCurrentSlide(i);
                    break;
                }
            }
        };

        container.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => container.removeEventListener('scroll', handleScroll);
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
