'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { earlyWarningIndicators } from '@/lib/data'

export default function EarlyWarningSlide() {
  const [expanded, setExpanded] = useState<number | null>(0)

  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-b from-slate via-slate to-ink relative overflow-hidden">
      {/* Subtle amber glow */}
      <div className="absolute inset-0 pointer-events-none bg-glow-amber opacity-50" />

      {/* Header */}
      <motion.div
        className="px-16 pt-10 pb-4 shrink-0 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-amber text-xs font-mono tracking-widest uppercase mb-2">Section 04 — Early Warning Framework</div>
        <h2 className="slide-title text-paper">21-Indicator Tripwire System</h2>
        <div className="accent-line mt-3" />
      </motion.div>

      <div className="flex-1 flex gap-6 px-16 pb-12 min-h-0 relative z-10">
        {/* Category cards */}
        <div className="flex flex-col gap-4 w-80 shrink-0">
          {earlyWarningIndicators.map((cat, i) => (
            <motion.button
              key={cat.category}
              className={`text-left rounded-2xl border p-5 transition-all ${
                expanded === i
                  ? 'bg-amber/10 border-amber/50 glow-amber'
                  : 'bg-white/[0.03] border-white/10 hover:border-white/20'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-2xl mb-1">{cat.icon}</div>
                  <div className={`text-sm font-black mb-1 ${expanded === i ? 'text-amber' : 'text-paper'}`}>
                    {cat.category}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-amber text-xs font-mono font-black">{cat.leadTimeDays}</div>
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
                <div className="card-highlight">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-4xl">{earlyWarningIndicators[expanded].icon}</span>
                    <div>
                      <h3 className="text-amber font-black text-xl">{earlyWarningIndicators[expanded].category}</h3>
                      <div className="text-ash text-xs">Lead time: <span className="text-amber font-mono font-bold">{earlyWarningIndicators[expanded].leadTime}</span></div>
                    </div>
                  </div>
                </div>

                {/* Indicators list */}
                <div className="flex-1 space-y-2 overflow-auto">
                  {earlyWarningIndicators[expanded].indicators.map((ind, j) => (
                    <motion.div
                      key={j}
                      className="flex items-start gap-3 bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: j * 0.07 }}
                    >
                      <div className="w-5 h-5 rounded border border-amber/40 flex items-center justify-center shrink-0 mt-0.5 text-amber text-xs font-black">
                        {j + 1}
                      </div>
                      <span className="text-paper/80 text-sm">{ind}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Threshold */}
                <div className="card-danger">
                  <div className="text-threat-critical text-xs font-black tracking-widest uppercase mb-1">Tripwire Threshold</div>
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
