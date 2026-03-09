import { lazy, Suspense } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { ExecutiveSummary } from './components/sections/ExecutiveSummary';
import { useSlideNavigation } from './hooks/useSlideNavigation';

const MarketOpportunity = lazy(() => import('./components/sections/MarketOpportunity').then(m => ({ default: m.MarketOpportunity })));
const ThreePillars = lazy(() => import('./components/sections/ThreePillars').then(m => ({ default: m.ThreePillars })));
const Infrastructure = lazy(() => import('./components/sections/Infrastructure').then(m => ({ default: m.Infrastructure })));
const FinancialOverview = lazy(() => import('./components/sections/FinancialOverview').then(m => ({ default: m.FinancialOverview })));
const LegalESG = lazy(() => import('./components/sections/LegalESG').then(m => ({ default: m.LegalESG })));
const TeamOrganization = lazy(() => import('./components/sections/TeamOrganization').then(m => ({ default: m.TeamOrganization })));
const ImplementationRoadmap = lazy(() => import('./components/sections/ImplementationRoadmap').then(m => ({ default: m.ImplementationRoadmap })));
const StrategicValue = lazy(() => import('./components/sections/StrategicValue').then(m => ({ default: m.StrategicValue })));
const ContactCTA = lazy(() => import('./components/sections/ContactCTA').then(m => ({ default: m.ContactCTA })));

function SectionFallback() {
    return <div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-2 border-neon-cyan/30 border-t-neon-cyan rounded-full animate-spin" /></div>;
}

export default function App() {
    const { currentSlide, totalSlides, progress, isFullscreen } = useSlideNavigation();

    return (
        <div className={`bg-dark-950 min-h-screen ${isFullscreen ? 'fullscreen-mode' : ''}`}>
            <Navbar isFullscreen={isFullscreen} currentSlide={currentSlide} totalSlides={totalSlides} />
            <main className="snap-container">
                <HeroSection />
                <ExecutiveSummary />
                <Suspense fallback={<SectionFallback />}>
                    <MarketOpportunity />
                    <ThreePillars />
                    <Infrastructure />
                    <FinancialOverview />
                    <LegalESG />
                    <TeamOrganization />
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
