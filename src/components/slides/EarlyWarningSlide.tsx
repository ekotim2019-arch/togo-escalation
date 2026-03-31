'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { earlyWarningIndicators } from '@/lib/data'

export default function EarlyWarningSlide() {
  const [expanded, setExpanded] = useState<number | null>(0)

  return (
    <div className="w-full h-full flex flex-col bg-slate">
      {/* Header */}
      <motion.div
        className="px-16 pt-10 pb-4 shrink-0"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-amber text-xs font-mono tracking-widest uppercase mb-2">Section 04 — Early Warning Framework</div>
        <h2 className="text-3xl font-bold text-paper">21-Indicator Tripwire System</h2>
      </motion.div>

      <div className="flex-1 flex gap-6 px-16 pb-16 min-h-0">
        {/* Category cards */}
        <div className="flex flex-col gap-4 w-80 shrink-0">
          {earlyWarningIndicators.map((cat, i) => (
            <motion.button
              key={cat.category}
              className={`text-left rounded-xl border p-4 transition-all ${
                expanded === i
                  ? 'bg-amber/10 border-amber/50'
                  : 'bg-slate/50 border-ash/20 hover:border-ash/40'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xl mb-1">{cat.icon}</div>
                  <div className={`text-sm font-bold mb-1 ${expanded === i ? 'text-amber' : 'text-paper'}`}>
                    {cat.category}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-amber text-xs font-mono font-bold">{cat.leadTimeDays}</div>
                  <div className="text-ash text-xs">lead time</div>
                </div>
              </div>
              <div className={`text-xs mt-1 ${expanded === i ? 'text-amber/70' : 'text-ash'}`}>
                {cat.indicators.length} indicators tracked
              </div>
            </motion.button>
          ))}
        </div>

        {/* Expanded details */}
        <div className="flex-1 min-h-0">
          <AnimatePresence mode="wait">
            {expanded !== null && (
              <motion.div
                key={expanded}
                className="h-full flex flex-col gap-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Category header */}
                <div className="bg-amber/10 border border-amber/30 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{earlyWarningIndicators[expanded].icon}</span>
                    <div>
                      <h3 className="text-amber font-bold text-lg">{earlyWarningIndicators[expanded].category}</h3>
                      <div className="text-ash text-xs">Lead time: <span className="text-amber font-mono">{earlyWarningIndicators[expanded].leadTime}</span></div>
                    </div>
                  </div>
                </div>

                {/* Indicators list */}
                <div className="flex-1 space-y-2">
                  {earlyWarningIndicators[expanded].indicators.map((ind, j) => (
                    <motion.div
                      key={j}
                      className="flex items-start gap-3 bg-slate border border-ash/10 rounded-lg px-4 py-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: j * 0.07 }}
                    >
                      <div className="w-5 h-5 rounded border border-amber/40 flex items-center justify-center shrink-0 mt-0.5 text-amber text-xs font-bold">
                        {j + 1}
                      </div>
                      <span className="text-paper/80 text-sm">{ind}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Threshold */}
                <div className="bg-threat-critical/10 border border-threat-critical/30 rounded-xl px-5 py-4">
                  <div className="text-threat-critical text-xs font-bold tracking-widest uppercase mb-1">Tripwire Threshold</div>
                  <div className="text-paper/80 text-sm">{earlyWarningIndicators[expanded].threshold}</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
