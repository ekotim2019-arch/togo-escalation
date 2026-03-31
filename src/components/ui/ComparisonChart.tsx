'use client'

import { motion } from 'framer-motion'
import { beninComparison } from '@/lib/data'

export default function ComparisonChart() {
  const phases = beninComparison.phases

  return (
    <div className="space-y-2">
      {phases.map((phase, i) => (
        <motion.div
          key={phase.phase}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          className="grid grid-cols-[120px_1fr_1fr] gap-3 items-center"
        >
          {/* Phase label */}
          <div className="text-ash text-xs text-right pr-2 leading-tight">{phase.phase}</div>

          {/* Benin bar */}
          <div className="flex items-center gap-2">
            <motion.div
              className="h-7 rounded bg-amber/30 border border-amber/50 flex items-center px-2"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
            >
              <span className="text-amber text-xs font-mono whitespace-nowrap">{phase.beninYear}</span>
            </motion.div>
          </div>

          {/* Togo bar */}
          <div className="flex items-center gap-2">
            <motion.div
              className={`h-7 rounded flex items-center px-2 ${
                i >= 4
                  ? 'bg-threat-critical/20 border border-threat-critical/60'
                  : 'bg-threat-elevated/20 border border-threat-elevated/40'
              }`}
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: i * 0.1 + 0.4, duration: 0.5 }}
            >
              <span className={`text-xs font-mono whitespace-nowrap ${i >= 4 ? 'text-threat-critical' : 'text-threat-elevated'}`}>
                {phase.togoYear}
              </span>
            </motion.div>
          </div>
        </motion.div>
      ))}

      {/* Legend */}
      <div className="flex gap-6 pt-3 border-t border-ash/10 mt-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-amber/50 border border-amber/70" />
          <span className="text-ash text-xs">Benin</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-threat-elevated/40 border border-threat-elevated/60" />
          <span className="text-ash text-xs">Togo (current)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-threat-critical/30 border border-threat-critical/60" />
          <span className="text-ash text-xs">Togo (projected)</span>
        </div>
      </div>
    </div>
  )
}
