import { ReactNode } from 'react';

interface GlassCardProps {
    children: ReactNode;
    accentColor?: string;
    hoverEffect?: boolean;
    className?: string;
}

export function GlassCard({ children, accentColor, hoverEffect = false, className = '' }: GlassCardProps) {
    const baseClass = hoverEffect ? 'glass-card-hover' : 'glass-card';
    const borderStyle = accentColor ? { borderColor: `${accentColor}30` } : undefined;

    return (
        <div className={`${baseClass} ${className}`} style={borderStyle}>
            {children}
        </div>
    );
}
