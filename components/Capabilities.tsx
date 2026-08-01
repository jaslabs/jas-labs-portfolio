import React from 'react';
import { motion } from 'framer-motion';
import {
  BrainCircuit,
  Compass,
  GitBranch,
  LucideIcon,
  Map,
  Server,
  Smartphone,
} from 'lucide-react';
import { capabilities } from '../data/site';
import SectionHeading from './SectionHeading';

const icons: Record<string, LucideIcon> = {
  Map,
  Smartphone,
  BrainCircuit,
  Server,
  GitBranch,
  Compass,
};

const Capabilities: React.FC = () => (
  <section id="capabilities" className="scroll-mt-24 py-24 lg:py-32">
    <div className="mx-auto max-w-container px-5 sm:px-8">
      <SectionHeading
        eyebrow="Capabilities"
        title="Six things we're genuinely good at."
        lead="We are not a full-service agency and we don't pretend to be. This is the work we take on, and the work we turn down is everything else."
      />

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink-800 bg-ink-800 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((capability, i) => {
          const Icon = icons[capability.icon] ?? Server;
          return (
            <motion.article
              key={capability.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col bg-ink-950 p-7 transition-colors duration-300 hover:bg-ink-900 lg:p-8"
            >
              <div className="absolute inset-x-0 top-0 h-px scale-x-0 bg-acid-500 transition-transform duration-300 group-hover:scale-x-100" />

              <div className="flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink-700 bg-ink-900 text-acid-500 transition-colors group-hover:border-acid-500/50">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <span className="font-mono text-[11px] text-ink-600">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="mt-6 font-display text-xl font-semibold leading-snug tracking-tight text-ink-50">
                {capability.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-400">{capability.blurb}</p>

              <ul className="mt-6 space-y-2 border-t border-ink-800 pt-5">
                {capability.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5 text-[13px] text-ink-300">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-acid-500/70" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </div>
    </div>
  </section>
);

export default Capabilities;
