import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionLayoutProps {
    id: string;
    children: ReactNode;
    className?: string;
}

const sectionVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
};

const sectionTransition = {
    duration: 0.4,
    ease: [0.25, 0.1, 0.25, 1.0] as const,
};

export function SectionLayout({ id, children, className = '' }: SectionLayoutProps) {
    return (
        <motion.section
            id={id}
            className={`min-h-screen py-20 px-4 md:px-8 lg:px-16 xl:px-24 flex flex-col justify-center snap-start ${className}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={sectionVariants}
            transition={sectionTransition}
        >
            <div className="max-w-6xl mx-auto w-full">
                {children}
            </div>
        </motion.section>
    );
}
