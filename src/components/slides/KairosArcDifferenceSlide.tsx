'use client'

import { motion } from 'framer-motion'
import { BRAND } from '@/lib/constants'

const comparison = [
  { aspect: 'Data source', conventional: 'Government reports', kairos: 'Multi-layer OSINT + HUMINT' },
  { aspect: 'Reporting lag', conventional: 'Days to weeks', kairos: 'Hours to real-time' },
  { aspect: 'Coverage', conventional: 'What happened', kairos: 'What will happen' },
  { aspect: 'Indicators', conventional: 'Reactive — post-event', kairos: 'Predictive — pre-event' },
  { aspect: 'Lead time', conventional: '17 days avg.', kairos: '420 days demonstrated' },
  { aspect: 'Output', conventional: 'Situation reports', kairos: 'Tripwire alerts + forecasts' },
]

const pipeline = [
  { step: 'Tremors', desc: 'Weak signals', color: '#9A9A8E' },
  { step: 'Signals', desc: 'Pattern detection', color: '#EAB308' },
  { step: 'Clusters', desc: 'Correlation', color: '#F59E0B' },
  { step: 'Tripwires', desc: 'Threshold alerts', color: '#DC2626' },
  { step: 'Early Warning', desc: 'Actionable intelligence', color: '#C4892A' },
]

export default function KairosArcDifferenceSlide() {
  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-b from-slate via-slate to-ink relative overflow-hidden">
      {/* Subtle amber glow */}
      <div className="absolute inset-0 pointer-events-none bg-glow-amber opacity-60" />

      {/* Header */}
      <motion.div
        className="px-16 pt-10 pb-4 shrink-0 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-amber text-xs font-mono tracking-widest uppercase mb-2">Section 04 — The Solution</div>
        <h2 className="slide-title text-paper">The {BRAND.name} Difference</h2>
        <div className="accent-line mt-3" />
      </motion.div>

      <div className="flex-1 flex flex-col px-16 pb-12 gap-5 min-h-0 relative z-10">
        {/* Comparison table */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {/* Table headers */}
          <div className="grid grid-cols-[140px_1fr_1fr] gap-2 mb-2">
            <div />
            <div className="text-center bg-ash/10 rounded-t-xl py-2 px-4">
              <span className="text-ash text-sm font-black tracking-widest uppercase">Conventional Intel</span>
            </div>
            <div className="text-center bg-amber/15 rounded-t-xl py-2 px-4 border-t border-amber/30">
              <span className="text-amber text-sm font-black tracking-widest uppercase">{BRAND.name}</span>
            </div>
          </div>

          <div className="space-y-1">
            {comparison.map((row, i) => (
              <motion.div
                key={row.aspect}
                className="grid grid-cols-[140px_1fr_1fr] gap-2 items-stretch"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.08 }}
              >
                <div className="text-ash text-xs py-3 px-2 text-right self-center">{row.aspect}</div>
                <div className="bg-ash/5 rounded-xl py-3 px-4 text-paper/55 text-sm self-center">
                  {row.conventional}
                </div>
                <div className="bg-amber/10 border border-amber/20 rounded-xl py-3 px-4 text-paper text-sm font-semibold self-center">
                  {row.kairos}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pipeline visualization */}
        <motion.div
          className="shrink-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <div className="text-ash text-xs font-black tracking-widest uppercase mb-3">Intelligence Pipeline</div>
          <div className="flex items-center gap-2">
            {pipeline.map((step, i) => (
              <div key={step.step} className="flex items-center gap-2 flex-1">
                <div className="flex-1 rounded-xl border px-3 py-2.5 text-center" style={{
                  borderColor: `${step.color}40`,
                  backgroundColor: `${step.color}12`,
                }}>
                  <div className="text-xs font-black" style={{ color: step.color }}>{step.step}</div>
                  <div className="text-ash text-xs mt-0.5">{step.desc}</div>
                </div>
                {i < pipeline.length - 1 && (
                  <span style={{ color: step.color }} className="text-lg shrink-0">→</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
