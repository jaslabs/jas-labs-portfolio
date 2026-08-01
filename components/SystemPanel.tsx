import React from 'react';
import { motion } from 'framer-motion';

const layers: { tier: string; label: string; nodes: string[] }[] = [
  { tier: 'L4', label: 'Interface', nodes: ['Flutter', 'React', 'Leaflet'] },
  { tier: 'L3', label: 'Services', nodes: ['Django', 'FastAPI', '.NET'] },
  { tier: 'L2', label: 'Data', nodes: ['PostGIS', 'GeoServer', 'Vector DB'] },
  { tier: 'L1', label: 'Runtime', nodes: ['Docker', 'Linux', 'CI'] },
];

const SystemPanel: React.FC = () => (
  <div className="relative">
    {/* glow */}
    <div className="pointer-events-none absolute -inset-6 rounded-[28px] bg-acid-500/[0.06] blur-3xl" />

    <div className="relative overflow-hidden rounded-2xl border border-ink-800 bg-gradient-to-b from-ink-900 to-ink-950 shadow-2xl shadow-black/50">
      {/* scan sweep */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 animate-sweep bg-gradient-to-b from-transparent via-acid-500/[0.05] to-transparent" />

      {/* title bar */}
      <div className="flex items-center justify-between border-b border-ink-800 px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-ink-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-acid-500/70" />
        </div>
        <span className="font-mono text-[11px] tracking-wide text-ink-400">jas-labs / stack.map</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-acid-500">live</span>
      </div>

      {/* layers */}
      <div className="relative bg-grid-fine">
        {layers.map((layer, i) => (
          <motion.div
            key={layer.label}
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.45 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
            className="group flex items-center gap-4 border-b border-ink-800/70 px-4 py-4 transition-colors hover:bg-ink-900/60 sm:px-5"
          >
            <div className="w-20 shrink-0">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">
                {layer.tier}
              </p>
              <p className="mt-0.5 text-[13px] font-medium text-ink-200">{layer.label}</p>
            </div>

            <div className="h-px flex-1 bg-gradient-to-r from-ink-700 to-transparent" />

            <div className="flex flex-wrap justify-end gap-1.5">
              {layer.nodes.map((node) => (
                <span
                  key={node}
                  className="rounded-md border border-ink-700 bg-ink-900 px-2 py-1 font-mono text-[10px] text-ink-300 transition-colors group-hover:border-ink-600 group-hover:text-ink-100"
                >
                  {node}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* console line */}
      <div className="flex items-center gap-2 px-4 py-3.5 font-mono text-[11px] sm:px-5">
        <span className="text-acid-500">›</span>
        <span className="text-ink-400">deploy</span>
        <span className="text-ink-200">--env production</span>
        <span className="ml-auto flex items-center gap-2 text-ink-500">
          <span className="h-1.5 w-1.5 rounded-full bg-acid-500" />
          ok
        </span>
        <span className="inline-block h-3.5 w-[7px] animate-blink bg-acid-500" />
      </div>
    </div>
  </div>
);

export default SystemPanel;
