import React from 'react';
import { domains } from '../data/site';

const DomainStrip: React.FC = () => (
  <section className="border-y border-ink-800 bg-ink-900/40 py-6">
    <div className="mx-auto flex max-w-container flex-col gap-4 px-5 sm:px-8 lg:flex-row lg:items-center lg:gap-10">
      <p className="shrink-0 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-500">
        Domains we've shipped into
      </p>

      <div className="mask-fade-x overflow-hidden">
        {/* Two identical halves so the -50% translate loops seamlessly */}
        <div className="flex w-max animate-marquee">
          {[0, 1].map((half) => (
            <div key={half} className="flex items-center gap-3 pr-3" aria-hidden={half === 1}>
              {domains.map((domain) => (
                <span
                  key={domain}
                  className="whitespace-nowrap rounded-full border border-ink-800 bg-ink-950 px-4 py-1.5 font-display text-sm text-ink-300"
                >
                  {domain}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default DomainStrip;
