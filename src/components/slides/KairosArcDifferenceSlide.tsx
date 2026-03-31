'use client';

import { motion } from 'framer-motion';
import { SlideWrapper } from '../SlideWrapper';
import { Eyebrow } from '../Eyebrow';

const rows = [
  { label: 'Approach', conventional: 'Reactive monitoring', kairos: 'Predictive signal detection' },
  { label: 'Timeline', conventional: 'Reports what happened', kairos: 'Detects signals before events' },
  { label: 'Coverage', conventional: 'Media & official sources', kairos: 'Human terrain, markets, displacement' },
  { label: 'Lead Time', conventional: '17 days average', kairos: '420 days demonstrated', highlight: true },
  { label: 'Output', conventional: 'Situation reports', kairos: 'Tripwire alerts + decision briefs' },
  { label: 'Intel network', conventional: 'Dependent on state networks', kairos: 'Independent collection platform' },
];

const pipeline = ['Tremors', 'Signals', 'Clusters', 'Tripwires', 'Early Warning'];

export default function KairosArcDifferenceSlide() {
  return (
    <SlideWrapper className="p-8">
      <div className="w-full max-w-5xl">
        <div className="mb-7">
          <Eyebrow>Methodology</Eyebrow>
          <h2 className="font-serif text-[46px] font-light text-white">
            The Kairos Arc <em className="italic text-amber-lt">Difference</em>
          </h2>
        </div>

        {/* Pipeline strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 mb-7"
        >
          {pipeline.map((step, i) => (
            <div key={i} className="flex items-center gap-2 shrink-0">
              <div className="px-3 py-1.5 bg-amber/[0.08] border border-amber/20 rounded text-amber font-mono text-[9px] tracking-[0.1em] uppercase">
                {step}
              </div>
              {i < pipeline.length - 1 && <div className="text-amber/30 text-xs">→</div>}
            </div>
          ))}
        </motion.div>

        {/* Comparison table */}
        <div className="border border-white/[0.08] rounded-lg overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-[140px_1fr_1fr] bg-white/[0.03]">
            <div className="px-4 py-3" />
            <div className="px-4 py-3 font-mono text-[9px] uppercase tracking-[0.12em] text-white/40 border-l border-white/[0.06]">
              Conventional Intelligence
            </div>
            <div className="px-4 py-3 font-mono text-[9px] uppercase tracking-[0.12em] text-amber border-l border-amber/20">
              Kairos Arc
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.07 }}
              className={`grid grid-cols-[140px_1fr_1fr] ${
                row.highlight ? 'border-t border-amber/20 bg-amber/[0.04]' : 'border-t border-white/[0.06]'
              }`}
            >
              <div className="px-4 py-3 font-mono text-[10px] uppercase tracking-[0.1em] text-white/40">
                {row.label}
              </div>
              <div className="px-4 py-3 text-[13px] text-white/35 border-l border-white/[0.06]">
                {row.conventional}
              </div>
              <div className={`px-4 py-3 text-[13px] border-l border-amber/15 ${row.highlight ? 'text-amber font-medium' : 'text-white/80'}`}>
                {row.kairos}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
