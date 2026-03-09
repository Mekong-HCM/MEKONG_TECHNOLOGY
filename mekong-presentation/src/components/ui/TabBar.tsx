import { type LucideIcon } from 'lucide-react';

interface Tab {
    key: string;
    label: string;
    icon?: LucideIcon;
}

interface TabBarProps {
    tabs: Tab[];
    activeTab: string;
    onChange: (key: string) => void;
}

export function TabBar({ tabs, activeTab, onChange }: TabBarProps) {
    return (
        <div className="flex gap-2 mb-8 flex-wrap">
            {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                    <button
                        key={tab.key}
                        onClick={() => onChange(tab.key)}
                        className={`tab-btn flex items-center gap-2 ${activeTab === tab.key ? 'active' : ''}`}
                    >
                        {Icon && <Icon size={16} />}
                        {tab.label}
                    </button>
                );
            })}
        </div>
    );
}
