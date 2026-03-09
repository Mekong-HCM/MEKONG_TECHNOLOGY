import { ImageOff } from 'lucide-react';

interface ImagePlaceholderProps {
    label: string;
    color?: string;
    className?: string;
    aspectRatio?: string;
}

export function ImagePlaceholder({
    label,
    color = '#00E5FF',
    className = '',
    aspectRatio = '16/10',
}: ImagePlaceholderProps) {
    return (
        <div
            className={`w-full rounded-xl flex flex-col items-center justify-center gap-2 ${className}`}
            style={{
                aspectRatio,
                background: `linear-gradient(135deg, ${color}12, ${color}05)`,
                border: `1px dashed ${color}25`,
            }}
        >
            <ImageOff size={24} style={{ color: `${color}60` }} />
            <span className="text-xs text-gray-500 text-center px-4">{label}</span>
        </div>
    );
}
