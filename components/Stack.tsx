import React from 'react';
import { motion } from 'framer-motion';
import { stackGroups } from '../data/site';
import SectionHeading from './SectionHeading';

const Stack: React.FC = () => (
  <section className="border-y border-ink-800 bg-ink-900/30 py-24 lg:py-28">
    <div className="mx-auto max-w-container px-5 sm:px-8">
      <SectionHeading
        eyebrow="Stack"
        title="What we actually reach for."
        lead="No logo wall of things we touched once. This is the set we maintain in production."
      />

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink-800 bg-ink-800 sm:grid-cols-2 lg:grid-cols-3">
        {stackGroups.map((group, i) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
            className="bg-ink-950 p-7"
          >
            <div className="flex items-center gap-3">
              <span className="h-1 w-1 rounded-full bg-acid-500" />
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400">
                {group.label}
              </h3>
            </div>
            <ul className="mt-5 space-y-2.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="font-display text-[15px] text-ink-200 transition-colors hover:text-acid-400"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Stack;
