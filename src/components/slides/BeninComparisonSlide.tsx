'use client';

import { motion } from 'framer-motion';
import { SlideWrapper } from '../SlideWrapper';
import { Eyebrow } from '../Eyebrow';

const beninSteps = [
  { year: '2019', label: 'First incursion' },
  { year: '2021', label: 'Pattern established' },
  { year: '2023', label: 'Territorial gains' },
  { year: '2025', label: 'Governance structures' },
];

const togoSteps = [
  { year: '2021', label: 'First incursion', done: true },
  { year: '2023', label: 'Pattern established', done: true },
  { year: '2025', label: 'FOB operational (Diapaga)', done: true },
  { year: '?', label: 'Territorial gains', done: false },
];

export default function BeninComparisonSlide() {
  return (
    <SlideWrapper>
      <div className="relative z-10 w-full max-w-5xl">
        <div className="text-center mb-16">
          <Eyebrow color="red">Regional Pattern Analysis</Eyebrow>
          <h2 className="font-serif text-5xl font-light text-white">
            The Benin <em className="italic text-amber-lt">Precedent</em>
          </h2>
        </div>

        <div className="flex gap-8 mb-12">
          {/* Benin card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex-1 bg-white/[0.03] border border-white/[0.08] rounded-lg p-20"
          >
            <div className="font-mono text-[20px] tracking-[0.15em] uppercase text-white/80 mb-3">Benin · Completed Arc</div>
            <div className="flex items-end gap-2 mb-8">
              <div className="font-serif text-[52px] font-light text-white/45 leading-none">6</div>
              <div className="font-mono text-[22px] uppercase text-white/50 mb-2 tracking-wide">years</div>
            </div>
            <div className="space-y-6 mb-8">
              {beninSteps.map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="font-mono text-[18px] text-white/60 w-14">{step.year}</div>
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                  <div className="text-[15px] text-white/70">{step.label}</div>
                </div>
              ))}
            </div>
            <div className="pt-12 border-t border-white/[0.06]">
              <div className="font-mono text-[18px] uppercase text-white/50 tracking-wider">Outcome: Catastrophic</div>
            </div>
          </motion.div>

          {/* Divider arrow */}
          <div className="flex items-center">
            <div className="font-serif text-2xl text-amber/25">→</div>
          </div>

          {/* Togo card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex-1 bg-amber/[0.06] border border-amber/20 border-l-[3px] border-l-amber rounded-r-lg p-20"
          >
            <div className="font-mono text-[20px] tracking-[0.15em] uppercase text-amber-lt mb-3">Togo · In Progress</div>
            <div className="flex items-end gap-2 mb-8">
              <div className="font-serif text-[52px] font-light text-amber leading-none">?</div>
              <div className="font-mono text-[22px] uppercase text-amber mb-2 tracking-wide">years</div>
            </div>
            <div className="space-y-6 mb-8">
              {togoSteps.map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`font-mono text-[18px] w-14 ${step.done ? 'text-amber-lt' : 'text-amber/40'}`}>{step.year}</div>
                  <div className={`w-1 h-1 rounded-full ${step.done ? 'bg-amber' : 'bg-amber/20'}`} />
                  <div className={`text-[15px] ${step.done ? 'text-white/85' : 'text-white/30'}`}>{step.label}</div>
                </div>
              ))}
            </div>
            <div className="pt-12 border-t border-amber/15">
              <div className="font-mono text-[18px] uppercase text-amber-lt tracking-wider">Trajectory: Faster</div>
            </div>
          </motion.div>
        </div>

        {/* Warning box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center py-20 px-20 bg-red/[0.08] border border-red/20 rounded mt-2"
        >
          <span className="font-mono text-[22px] tracking-[0.12em] uppercase text-red font-bold">
            If the pattern holds: 2026–2027
          </span>
        </motion.div>
      </div>
    </SlideWrapper>
  );
}
