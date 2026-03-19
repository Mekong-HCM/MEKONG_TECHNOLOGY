import { useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { type LucideIcon } from 'lucide-react';
import { SectionLayout } from './SectionLayout';

export interface TabConfig {
    key: string;
    label: string;
    icon?: LucideIcon;
    content: ReactNode;
}

interface TabSlideProps {
    id: string;
    title: string;
    subtitle?: string;
    tabs: TabConfig[];
    defaultTab?: string;
    className?: string;
    /** Optional header content rendered above tabs */
    header?: ReactNode;
}

const tabContentVariants = {
    enter: { opacity: 0, x: 20 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
};

export function TabSlide({ id, title, subtitle, tabs, defaultTab, className, header }: TabSlideProps) {
    const [activeTab, setActiveTab] = useState(defaultTab ?? tabs[0]?.key ?? '');

    const currentTab = tabs.find(t => t.key === activeTab) ?? tabs[0];

    return (
        <SectionLayout id={id} className={className}>
            {/* Slide header */}
            <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {title}
                </h2>
                {subtitle && (
                    <p className="text-gray-400 text-lg">{subtitle}</p>
                )}
            </div>

            {header}

            {/* Tab buttons */}
            {tabs.length > 1 && (
                <div className="flex gap-2 mb-6 flex-wrap">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = tab.key === activeTab;
                        return (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2
                                    ${isActive
                                        ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/40 shadow-[0_0_12px_rgba(0,229,255,0.15)]'
                                        : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-gray-200'
                                    }`}
                            >
                                {Icon && <Icon size={14} />}
                                {tab.label}
                            </button>
                        );
                    })}
                </div>
            )}

            {/* Tab content with animation */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    variants={tabContentVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className="min-h-[400px]"
                >
                    {currentTab?.content}
                </motion.div>
            </AnimatePresence>
        </SectionLayout>
    );
}
