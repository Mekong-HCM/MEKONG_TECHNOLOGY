import { lazy, Suspense } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { ExecutiveSummary } from './components/sections/ExecutiveSummary';
import { FloatingNav } from './components/ui/FloatingNav';
import { SlideIndicator } from './components/ui/SlideIndicator';
import { SlideOverview } from './components/ui/SlideOverview';
import { useSlideNavigation, SLIDES } from './hooks/useSlideNavigation';

// Lazy-loaded sections (order matches SLIDES array in useSlideNavigation)
const Urgency = lazy(() => import('./components/sections/Urgency').then(m => ({ default: m.Urgency })));
const MarketOpportunity = lazy(() => import('./components/sections/MarketOpportunity').then(m => ({ default: m.MarketOpportunity })));
const CompetitiveAnalysis = lazy(() => import('./components/sections/CompetitiveAnalysis').then(m => ({ default: m.CompetitiveAnalysis })));
const ExportStrategy = lazy(() => import('./components/sections/ExportStrategy').then(m => ({ default: m.ExportStrategy })));
const ThreePillars = lazy(() => import('./components/sections/ThreePillars').then(m => ({ default: m.ThreePillars })));
const ProductIoTGateway = lazy(() => import('./components/sections/ProductIoTGateway').then(m => ({ default: m.ProductIoTGateway })));
const ProductRobotAMR = lazy(() => import('./components/sections/ProductRobotAMR').then(m => ({ default: m.ProductRobotAMR })));
const ProductOHT = lazy(() => import('./components/sections/ProductOHT').then(m => ({ default: m.ProductOHT })));
const TechStack = lazy(() => import('./components/sections/TechStack').then(m => ({ default: m.TechStack })));
const RDStrategy = lazy(() => import('./components/sections/RDStrategy').then(m => ({ default: m.RDStrategy })));
const RDLabs = lazy(() => import('./components/sections/RDLabs').then(m => ({ default: m.RDLabs })));
const RDIPPatents = lazy(() => import('./components/sections/RDIPPatents').then(m => ({ default: m.RDIPPatents })));
const Infrastructure = lazy(() => import('./components/sections/Infrastructure').then(m => ({ default: m.Infrastructure })));
const ProductionCapacity = lazy(() => import('./components/sections/ProductionCapacity').then(m => ({ default: m.ProductionCapacity })));
const QualityCerts = lazy(() => import('./components/sections/QualityCerts').then(m => ({ default: m.QualityCerts })));
const FinancialOverview = lazy(() => import('./components/sections/FinancialOverview').then(m => ({ default: m.FinancialOverview })));
const LegalESG = lazy(() => import('./components/sections/LegalESG').then(m => ({ default: m.LegalESG })));
const ESGEnvironment = lazy(() => import('./components/sections/ESGEnvironment').then(m => ({ default: m.ESGEnvironment })));
const RiskAnalysis = lazy(() => import('./components/sections/RiskAnalysis').then(m => ({ default: m.RiskAnalysis })));
const TeamOrganization = lazy(() => import('./components/sections/TeamOrganization').then(m => ({ default: m.TeamOrganization })));
const SocioEconomic = lazy(() => import('./components/sections/SocioEconomic').then(m => ({ default: m.SocioEconomic })));
const ImplementationRoadmap = lazy(() => import('./components/sections/ImplementationRoadmap').then(m => ({ default: m.ImplementationRoadmap })));
const StrategicValue = lazy(() => import('./components/sections/StrategicValue').then(m => ({ default: m.StrategicValue })));
const ContactCTA = lazy(() => import('./components/sections/ContactCTA').then(m => ({ default: m.ContactCTA })));

function SectionFallback() {
    return <div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-2 border-neon-cyan/30 border-t-neon-cyan rounded-full animate-spin" /></div>;
}

export default function App() {
    const { currentSlide, totalSlides, progress, isFullscreen, isOverviewOpen, goToSlide, nextSlide, prevSlide, toggleOverview } = useSlideNavigation();

    return (
        <div className={`bg-dark-950 min-h-screen ${isFullscreen ? 'fullscreen-mode' : ''}`}>
            <Navbar isFullscreen={isFullscreen} currentSlide={currentSlide} totalSlides={totalSlides} onToggleOverview={toggleOverview} />
            <FloatingNav currentSlide={currentSlide} totalSlides={totalSlides} onPrev={prevSlide} onNext={nextSlide} />
            <SlideIndicator slides={SLIDES} currentSlide={currentSlide} onGoTo={goToSlide} />
            <SlideOverview isOpen={isOverviewOpen} slides={SLIDES} currentSlide={currentSlide} onGoTo={goToSlide} onClose={toggleOverview} />
            <main className="snap-container">
                {/* Slide order matches SLIDES array in useSlideNavigation */}
                <HeroSection />
                <Suspense fallback={<SectionFallback />}>
                    <Urgency />
                </Suspense>
                <ExecutiveSummary />
                <Suspense fallback={<SectionFallback />}>
                    <MarketOpportunity />
                    <CompetitiveAnalysis />
                    <ExportStrategy />
                    <ThreePillars />
                    <ProductIoTGateway />
                    <ProductRobotAMR />
                    <ProductOHT />
                    <TechStack />
                    <RDStrategy />
                    <RDLabs />
                    <RDIPPatents />
                    <Infrastructure />
                    <ProductionCapacity />
                    <QualityCerts />
                    <FinancialOverview />
                    <LegalESG />
                    <ESGEnvironment />
                    <RiskAnalysis />
                    <TeamOrganization />
                    <SocioEconomic />
                    <ImplementationRoadmap />
                    <StrategicValue />
                    <ContactCTA />
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
    );
}
