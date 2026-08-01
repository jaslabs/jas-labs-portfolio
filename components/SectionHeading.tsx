import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  /** Optional right-aligned slot, e.g. a "view all" link */
  action?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export const Eyebrow: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <span
    className={`inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.22em] text-acid-500 ${className}`}
  >
    <span className="h-1.5 w-1.5 rounded-full bg-acid-500 shadow-[0_0_10px_2px_rgba(198,242,78,0.45)]" />
    {children}
  </span>
);

const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  lead,
  action,
  align = 'left',
  className = '',
}) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    className={`flex flex-col gap-8 md:flex-row md:items-end md:justify-between ${className}`}
  >
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-ink-50 sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {lead && <p className="mt-5 text-base leading-relaxed text-ink-300 sm:text-lg">{lead}</p>}
    </div>
    {action && <div className="shrink-0">{action}</div>}
  </motion.div>
);

export default SectionHeading;
