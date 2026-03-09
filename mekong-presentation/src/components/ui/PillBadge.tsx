interface PillBadgeProps {
    text: string;
    color?: string;
    className?: string;
}

export function PillBadge({ text, color = '#00E5FF', className = '' }: PillBadgeProps) {
    return (
        <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${className}`}
            style={{
                background: `${color}10`,
                border: `1px solid ${color}30`,
                color,
            }}
        >
            {text}
        </span>
    );
}
