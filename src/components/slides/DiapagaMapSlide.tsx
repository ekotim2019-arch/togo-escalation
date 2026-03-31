'use client'

import { motion } from 'framer-motion'
import ThreatMap from '@/components/ui/ThreatMap'
import { STATISTICS } from '@/lib/constants'

export default function DiapagaMapSlide() {
  return (
    <div className="w-full h-full flex flex-col bg-slate">
      {/* Header */}
      <motion.div
        className="px-16 pt-10 pb-4 shrink-0"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-amber text-xs font-mono tracking-widest uppercase mb-2">Section 01 — Geography of Threat</div>
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-bold text-paper">The Diapaga Problem</h2>
          <div className="text-ash text-xs font-mono">Kpendjal / Kpendjal-Ouest Prefectures</div>
        </div>
      </motion.div>

      {/* Map + callouts layout */}
      <div className="flex-1 flex gap-4 px-16 pb-16 min-h-0">
        {/* Map */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <ThreatMap className="w-full h-full" zoom={7} showThreatRadius={true} threatRadiusKm={50} />
        </motion.div>

        {/* Callouts */}
        <motion.div
          className="w-64 flex flex-col gap-3 shrink-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {/* Critical callout */}
          <div className="bg-threat-critical/10 border border-threat-critical/40 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="relative w-3 h-3">
                <div className="w-3 h-3 rounded-full bg-threat-critical" />
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-threat-critical animate-ping opacity-60" />
              </div>
              <span className="text-threat-critical text-xs font-bold tracking-widest">DIAPAGA FOB</span>
            </div>
            <div className="text-paper text-2xl font-black font-mono mb-1">{STATISTICS.diapagaDistance}km</div>
            <div className="text-ash text-xs">from Togolese border</div>
            <div className="mt-2 text-paper/70 text-xs leading-relaxed">
              Katiba Hanifa primary base of operations. Elevated to Mantiqa (regional command) June 2024.
            </div>
          </div>

          {/* JNIM control */}
          <div className="bg-slate border border-ash/20 rounded-lg p-4">
            <div className="text-amber text-xs font-bold tracking-widest mb-2">JNIM CONTROL AREA</div>
            <div className="text-paper text-2xl font-black font-mono mb-1">~60%</div>
            <div className="text-ash text-xs">of Burkina Faso territory</div>
          </div>

          {/* Corridor */}
          <div className="bg-slate border border-amber/20 rounded-lg p-4">
            <div className="text-amber text-xs font-bold tracking-widest mb-2">LOMÉ CORRIDOR</div>
            <div className="text-paper/80 text-xs leading-relaxed">
              Lomé–Ouagadougou transit route passes directly through highest-risk zone
            </div>
          </div>

          {/* Key commander */}
          <div className="bg-slate border border-ash/20 rounded-lg p-4">
            <div className="text-ash text-xs font-bold tracking-widest mb-2">KEY ACTOR</div>
            <div className="text-paper text-sm font-semibold">Abu Hanifa (Oumarou)</div>
            <div className="text-ash text-xs mt-1">Katiba Hanifa commander</div>
            <div className="text-ash text-xs">Idrissa Dicko — deputy</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
