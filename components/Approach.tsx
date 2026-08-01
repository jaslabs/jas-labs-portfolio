import React from 'react';
import { motion } from 'framer-motion';
import { principles, processSteps } from '../data/site';
import SectionHeading from './SectionHeading';

const Approach: React.FC = () => (
  <section id="approach" className="scroll-mt-24 py-24 lg:py-32">
    <div className="mx-auto max-w-container px-5 sm:px-8">
      <SectionHeading
        eyebrow="Approach"
        title="Four stages, and you can see the code at every one."
        lead="No discovery theatre, no status decks. Each stage ends with something you can read, run or deploy."
      />

      {/* Stages */}
      <div className="relative mt-14">
        <div className="absolute left-0 right-0 top-10 hidden h-px bg-ink-800 lg:block" />

        <div className="grid gap-px overflow-hidden rounded-2xl border border-ink-800 bg-ink-800 lg:grid-cols-4 lg:rounded-none lg:border-0 lg:bg-transparent lg:gap-8">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-ink-950 p-7 lg:bg-transparent lg:p-0"
            >
              <div className="flex items-center justify-between lg:block">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-acid-500">
                  {step.number}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500 lg:hidden">
                  {step.duration}
                </span>
              </div>

              {/* node on the rail */}
              <div className="mt-5 hidden items-center lg:flex">
                <span className="relative z-10 h-2.5 w-2.5 rounded-full bg-ink-600 ring-4 ring-ink-950 transition-colors duration-300 group-hover:bg-acid-500" />
                <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">
                  {step.duration}
                </span>
              </div>

              <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink-50 lg:mt-6">
                {step.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-400">{step.description}</p>

              <ul className="mt-5 space-y-1.5">
                {step.outputs.map((output) => (
                  <li key={output} className="flex items-center gap-2 font-mono text-[11px] text-ink-300">
                    <span className="text-acid-500">→</span>
                    {output}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Principles */}
      <div className="mt-20 grid gap-8 border-t border-ink-800 pt-12 md:grid-cols-3">
        {principles.map((principle, i) => (
          <motion.div
            key={principle.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <h3 className="font-display text-lg font-semibold tracking-tight text-ink-50">
              {principle.title}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-400">{principle.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Approach;
