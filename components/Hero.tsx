import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { heroStats } from '../data/site';
import Button from './Button';
import SystemPanel from './SystemPanel';

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const rise = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-28 lg:pt-36">
      {/* Backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-b opacity-70" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-acid-500/[0.07] blur-[130px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-700 to-transparent" />

      <div className="relative mx-auto max-w-container px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left column */}
          <div>
            <motion.div
              custom={0}
              variants={rise}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-2.5 rounded-full border border-ink-700 bg-ink-900/60 py-1.5 pl-2.5 pr-4 backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-acid-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-acid-500" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-200">
                Engineering studio — Dhaka, worldwide
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={rise}
              initial="hidden"
              animate="show"
              className="mt-7 font-display text-[2.6rem] font-semibold leading-[1.03] tracking-[-0.03em] text-ink-50 sm:text-[3.4rem] lg:text-[4.1rem]"
            >
              Engineering for products
              <br className="hidden sm:block" /> where the hard part is{' '}
              <span className="relative whitespace-nowrap text-acid-500">
                the data
                <svg
                  className="absolute -bottom-1.5 left-0 h-2.5 w-full text-acid-500/50"
                  viewBox="0 0 200 10"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M2 7 C 50 2, 150 2, 198 7" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
              .
            </motion.h1>

            <motion.p
              custom={2}
              variants={rise}
              initial="hidden"
              animate="show"
              className="mt-8 max-w-xl text-lg leading-relaxed text-ink-300"
            >
              JAS Labs is a three-person studio building geospatial platforms, cross-platform
              apps and applied NLP systems — from schema design through to production deploy.
            </motion.p>

            <motion.div
              custom={3}
              variants={rise}
              initial="hidden"
              animate="show"
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              <Button size="lg" onClick={() => scrollTo('work')}>
                See the work
                <ArrowDown className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="lg" onClick={() => scrollTo('contact')}>
                Start a project
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </motion.div>
          </div>

          {/* Right column — system panel */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:pl-4"
          >
            <SystemPanel />
          </motion.div>
        </div>

        {/* Ledger */}
        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-ink-800 bg-ink-800 lg:mt-24 lg:grid-cols-4"
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="bg-ink-950 px-6 py-7">
              <dt className="font-mono text-2xl font-medium tracking-tight text-ink-50 sm:text-3xl">
                {stat.value}
              </dt>
              <dd className="mt-2 text-[13px] leading-snug text-ink-400">{stat.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
};

export default Hero;
