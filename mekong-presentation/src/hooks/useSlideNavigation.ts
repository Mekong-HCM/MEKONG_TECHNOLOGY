import { useState, useEffect, useCallback } from 'react';
import { getSnapContainer, NAVBAR_HEIGHT } from '../utils/scroll';

export interface SlideInfo {
    id: string;
    label: string;
    group?: string;
}

export const SLIDES: SlideInfo[] = [
    { id: 'hero', label: 'Trang chủ', group: 'opening' },
    { id: 'urgency', label: 'Tính Cấp thiết', group: 'context' },
    { id: 'summary', label: 'Tóm tắt Điều hành', group: 'executive' },
    { id: 'market', label: 'Thị trường & Cạnh tranh', group: 'market' },
    { id: 'products', label: 'Hệ sinh thái Sản phẩm', group: 'product' },
    { id: 'product-iot', label: 'IoT Gateway & BMS', group: 'product' },
    { id: 'product-robot', label: 'Robot AMR/AGV', group: 'product' },
    { id: 'tech-rd', label: 'Công nghệ & R&D', group: 'tech' },
    { id: 'infra', label: 'Hạ tầng 3 Công trình', group: 'infrastructure' },
    { id: 'production', label: 'Năng lực Sản xuất CNC', group: 'production' },
    { id: 'business-model', label: 'Mô hình Kinh doanh', group: 'business' },
    { id: 'financials', label: 'Tài chính & Đầu tư', group: 'finance' },
    { id: 'incentives', label: 'Ưu đãi & Giá trị Chiến lược', group: 'finance' },
    { id: 'legal-esg', label: 'Pháp lý & ESG', group: 'legal' },
    { id: 'risk', label: 'Quản lý Rủi ro', group: 'risk' },
    { id: 'team', label: 'Đội ngũ & Tổ chức', group: 'team' },
    { id: 'roadmap', label: 'Lộ trình Triển khai', group: 'plan' },
    { id: 'conclusion', label: 'Kết luận & Cam kết', group: 'closing' },
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

    const resolveCurrentSlideIndex = useCallback(() => {
        const container = getSnapContainer();
        if (!container) return 0;

        const isFullscreenMode = !!document.fullscreenElement || document.querySelector('.fullscreen-mode') !== null;
        const offset = isFullscreenMode ? 16 : NAVBAR_HEIGHT + 16;
        const refTop = container.scrollTop + offset;

        let index = 0;
        for (let i = 0; i < SECTION_IDS.length; i++) {
            const el = document.getElementById(SECTION_IDS[i]);
            if (!el) continue;
            if (el.offsetTop <= refTop) index = i;
            else break;
        }

        return index;
    }, []);

    const goToSlide = useCallback((index: number) => {
        const clampedIndex = Math.max(0, Math.min(index, totalSlides - 1));
        const el = document.getElementById(SECTION_IDS[clampedIndex]);
        const container = getSnapContainer();
        if (!el || !container) return;

        const isFullscreenMode = !!document.fullscreenElement || document.querySelector('.fullscreen-mode') !== null;
        const offset = isFullscreenMode ? 0 : NAVBAR_HEIGHT;

        container.scrollTo({
            top: Math.max(0, el.offsetTop - offset),
            behavior: 'smooth',
        });
    }, [totalSlides]);

    const nextSlide = useCallback(() => {
        goToSlide(resolveCurrentSlideIndex() + 1);
    }, [goToSlide, resolveCurrentSlideIndex]);

    const prevSlide = useCallback(() => {
        goToSlide(resolveCurrentSlideIndex() - 1);
    }, [goToSlide, resolveCurrentSlideIndex]);

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
        let detach: (() => void) | null = null;
        let retryTimer: number | null = null;

        const attach = () => {
            const container = getSnapContainer();
            if (!container) return false;

            const handleScroll = () => {
                const scrollTop = container.scrollTop;
                const scrollHeight = container.scrollHeight - container.clientHeight;
                setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
                setCurrentSlide(resolveCurrentSlideIndex());
            };

            container.addEventListener('scroll', handleScroll, { passive: true });
            handleScroll();
            detach = () => container.removeEventListener('scroll', handleScroll);
            return true;
        };

        if (!attach()) {
            retryTimer = window.setInterval(() => {
                if (attach() && retryTimer) {
                    window.clearInterval(retryTimer);
                    retryTimer = null;
                }
            }, 120);
        }

        return () => {
            if (retryTimer) window.clearInterval(retryTimer);
            if (detach) detach();
        };
    }, [resolveCurrentSlideIndex]);

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
