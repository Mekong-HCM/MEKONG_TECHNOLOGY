import { type LucideIcon } from 'lucide-react';
import { useInView, useCountUp } from '../../hooks/useInView';
import { motion } from 'framer-motion';

interface KPICardProps {
    value: number;
    label: string;
    icon?: LucideIcon;
    format?: (count: number) => string;
    suffix?: string;
    color?: string;
    delay?: number;
}

export function KPICard({ value, label, icon: Icon, format, suffix = '', color = '#00E5FF', delay = 0 }: KPICardProps) {
    const { ref, isInView } = useInView(0.3);
    const count = useCountUp(value * 10, 2000, isInView);
    const displayValue = format ? format(count / 10) : (count / 10).toFixed(1);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay }}
            className="glass-card-hover p-5"
        >
            {Icon && <Icon size={20} style={{ color }} className="mb-2" />}
            <div className="stat-value text-2xl md:text-3xl" style={{ color }}>
                {displayValue}<span className="text-lg ml-1">{suffix}</span>
            </div>
            <div className="stat-label mt-1">{label}</div>
        </motion.div>
    );
}
