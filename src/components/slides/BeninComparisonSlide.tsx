'use client'

import { motion } from 'framer-motion'
import ComparisonChart from '@/components/ui/ComparisonChart'
import { beninComparison } from '@/lib/data'

export default function BeninComparisonSlide() {
  return (
    <div className="w-full h-full flex flex-col bg-slate">
      {/* Header */}
      <motion.div
        className="px-16 pt-10 pb-4 shrink-0"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-amber text-xs font-mono tracking-widest uppercase mb-2">Section 02 — The Benin Precedent</div>
        <h2 className="text-3xl font-bold text-paper">A Pattern That Repeats</h2>
      </motion.div>

      <div className="flex-1 flex flex-col px-16 pb-16 gap-6 min-h-0">
        {/* Column headers */}
        <motion.div
          className="grid grid-cols-[120px_1fr_1fr] gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div />
          <div className="text-center">
            <span className="text-amber text-sm font-bold tracking-widest uppercase">Benin</span>
            <div className="text-ash text-xs mt-1">{beninComparison.beninNote}</div>
          </div>
          <div className="text-center">
            <span className="text-threat-elevated text-sm font-bold tracking-widest uppercase">Togo</span>
            <div className="text-ash text-xs mt-1">{beninComparison.togoNote}</div>
          </div>
        </motion.div>

        {/* Comparison chart */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <ComparisonChart />
        </motion.div>

        {/* Warning box */}
        <motion.div
          className="bg-threat-critical/10 border border-threat-critical/50 rounded-lg px-6 py-4 flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <div className="relative shrink-0">
            <div className="w-4 h-4 rounded-full bg-threat-critical" />
            <div className="absolute inset-0 w-4 h-4 rounded-full bg-threat-critical animate-ping opacity-60" />
          </div>
          <div>
            <div className="text-threat-critical font-bold text-sm tracking-wide">WARNING: Pattern Convergence</div>
            <div className="text-paper/80 text-sm mt-1">
              {beninComparison.warning} — <span className="text-threat-critical font-semibold">Togo is in the escalation phase now.</span> The window for effective pre-emptive action is narrowing.
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
