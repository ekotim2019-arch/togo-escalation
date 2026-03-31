'use client'

import { motion } from 'framer-motion'
import Timeline from '@/components/ui/Timeline'
import { STATISTICS } from '@/lib/constants'

export default function TimelineSlide() {
  return (
    <div className="w-full h-full flex flex-col bg-slate">
      {/* Header */}
      <motion.div
        className="px-16 pt-10 pb-4 shrink-0"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-amber text-xs font-mono tracking-widest uppercase mb-2">Section 02 — Operational Tempo</div>
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-bold text-paper">JNIM Incident Timeline</h2>
          <div className="text-ash text-xs font-mono">Oct 2025 — Mar 2026</div>
        </div>
      </motion.div>

      <div className="flex-1 flex gap-8 px-16 pb-16 min-h-0">
        {/* Timeline */}
        <div className="flex-1 min-h-0">
          <Timeline />
        </div>

        {/* Right sidebar stats */}
        <motion.div
          className="w-56 shrink-0 flex flex-col gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="bg-threat-critical/10 border border-threat-critical/30 rounded-lg p-4 text-center">
            <div className="text-threat-critical text-xs tracking-widest uppercase mb-1">Feb 2026 Offensive</div>
            <div className="text-5xl font-black text-threat-critical font-mono">{STATISTICS.februaryAttacks}+</div>
            <div className="text-ash text-xs mt-1">coordinated attacks</div>
            <div className="border-t border-threat-critical/20 mt-3 pt-3">
              <div className="text-3xl font-black text-paper font-mono">{STATISTICS.februaryKIA}+</div>
              <div className="text-ash text-xs">KIA in 72-hour window</div>
            </div>
          </div>

          <div className="bg-slate border border-ash/20 rounded-lg p-4">
            <div className="text-ash text-xs tracking-widest uppercase mb-3">Severity Legend</div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-threat-critical shrink-0" />
                <span className="text-paper text-xs">Critical</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-threat-elevated shrink-0" />
                <span className="text-paper text-xs">Elevated</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-threat-moderate shrink-0" />
                <span className="text-paper text-xs">Moderate</span>
              </div>
            </div>
          </div>

          <div className="bg-slate border border-amber/20 rounded-lg p-4">
            <div className="text-amber text-xs tracking-widest uppercase mb-2">Pattern Analysis</div>
            <div className="text-paper/80 text-xs leading-relaxed">
              Tempo is accelerating. 6-month trend shows coordinated escalation toward border corridor targeting.
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
