import { lazy, Suspense } from 'react';
import { LoginGate } from './components/auth/LoginGate';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { ExecutiveSummary } from './components/sections/ExecutiveSummary';
import { FloatingNav } from './components/ui/FloatingNav';
import { SlideIndicator } from './components/ui/SlideIndicator';
import { SlideOverview } from './components/ui/SlideOverview';
import { useSlideNavigation, SLIDES } from './hooks/useSlideNavigation';

// Lazy-loaded sections — 18 slides (order matches SLIDES array)
const Urgency = lazy(() => import('./components/sections/Urgency').then(m => ({ default: m.Urgency })));
const MarketCompetitive = lazy(() => import('./components/sections/MarketCompetitive').then(m => ({ default: m.MarketCompetitive })));
const ProductEcosystem = lazy(() => import('./components/sections/ProductEcosystem').then(m => ({ default: m.ProductEcosystem })));
const ProductIoTGateway = lazy(() => import('./components/sections/ProductIoTGateway').then(m => ({ default: m.ProductIoTGateway })));
const ProductRobotAMR = lazy(() => import('./components/sections/ProductRobotAMR').then(m => ({ default: m.ProductRobotAMR })));
const TechRD = lazy(() => import('./components/sections/TechRD').then(m => ({ default: m.TechRD })));
const Infrastructure = lazy(() => import('./components/sections/Infrastructure').then(m => ({ default: m.Infrastructure })));
const ProductionCapacity = lazy(() => import('./components/sections/ProductionCapacity').then(m => ({ default: m.ProductionCapacity })));
const BusinessModel = lazy(() => import('./components/sections/BusinessModel').then(m => ({ default: m.BusinessModel })));
const FinancialOverview = lazy(() => import('./components/sections/FinancialOverview').then(m => ({ default: m.FinancialOverview })));
const TaxIncentives = lazy(() => import('./components/sections/TaxIncentives').then(m => ({ default: m.TaxIncentives })));
const LegalESG = lazy(() => import('./components/sections/LegalESG').then(m => ({ default: m.LegalESG })));
const RiskAnalysis = lazy(() => import('./components/sections/RiskAnalysis').then(m => ({ default: m.RiskAnalysis })));
const TeamOrganization = lazy(() => import('./components/sections/TeamOrganization').then(m => ({ default: m.TeamOrganization })));
const ImplementationRoadmap = lazy(() => import('./components/sections/ImplementationRoadmap').then(m => ({ default: m.ImplementationRoadmap })));
const Conclusion = lazy(() => import('./components/sections/Conclusion').then(m => ({ default: m.Conclusion })));

function SectionFallback() {
    return <div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-2 border-neon-cyan/30 border-t-neon-cyan rounded-full animate-spin" /></div>;
}

export default function App() {
    const { currentSlide, totalSlides, progress, isFullscreen, isOverviewOpen, goToSlide, nextSlide, prevSlide, toggleOverview } = useSlideNavigation();

    return (
        <LoginGate>
        <div className={`bg-dark-950 min-h-screen ${isFullscreen ? 'fullscreen-mode' : ''}`}>
            <Navbar isFullscreen={isFullscreen} currentSlide={currentSlide} totalSlides={totalSlides} onToggleOverview={toggleOverview} />
            <FloatingNav currentSlide={currentSlide} totalSlides={totalSlides} onPrev={prevSlide} onNext={nextSlide} />
            <SlideIndicator slides={SLIDES} currentSlide={currentSlide} onGoTo={goToSlide} />
            <SlideOverview isOpen={isOverviewOpen} slides={SLIDES} currentSlide={currentSlide} onGoTo={goToSlide} onClose={toggleOverview} />
            <main className="snap-container">
                {/* 18 slides — order matches SLIDES array */}
                <HeroSection />
                <Suspense fallback={<SectionFallback />}>
                    <Urgency />
                </Suspense>
                <ExecutiveSummary />
                <Suspense fallback={<SectionFallback />}>
                    <MarketCompetitive />
                    <ProductEcosystem />
                    <ProductIoTGateway />
                    <ProductRobotAMR />
                    <TechRD />
                    <Infrastructure />
                    <ProductionCapacity />
                    <BusinessModel />
                    <FinancialOverview />
                    <TaxIncentives />
                    <LegalESG />
                    <RiskAnalysis />
                    <TeamOrganization />
                    <ImplementationRoadmap />
                    <Conclusion />
                </Suspense>
            </main>
            {/* Progress bar */}
            <div className="fixed bottom-0 left-0 right-0 h-1 bg-dark-950/50 z-50">
                <div
                    className="h-full bg-gradient-to-r from-neon-cyan to-neon-magenta transition-all duration-200"
                    style={{ width: `${progress}%` }}
                />
            </div>
            {/* Slide counter */}
            <div className="fixed bottom-3 right-4 z-50 text-xs text-gray-500 font-mono">
                {currentSlide + 1} / {totalSlides}
            </div>
        </div>
        </LoginGate>
    );
}
