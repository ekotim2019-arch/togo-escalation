'use client'

import { motion } from 'framer-motion'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { STATISTICS, BRAND } from '@/lib/constants'

export default function LeadTimeSlide() {
  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-br from-ink via-slate to-ink relative overflow-hidden">
      {/* Massive amber radial glow behind the 420 */}
      <div className="absolute left-[26%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(196,137,42,0.14) 0%, transparent 65%)' }}
      />

      {/* Header */}
      <motion.div
        className="px-16 pt-10 pb-4 shrink-0 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-amber text-xs font-mono tracking-widest uppercase mb-2">Section 04 — Proven Lead Time</div>
        <h2 className="slide-title text-paper">Lead Time = Decision Time</h2>
        <div className="accent-line mt-3" />
      </motion.div>

      <div className="flex-1 flex items-center justify-around px-16 pb-10 relative z-10 gap-8">
        {/* Left: The 420 */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <div className="text-ash text-xs font-mono tracking-widest uppercase mb-4">{BRAND.name} — Demonstrated Lead Time</div>

          <div className="relative">
            <div
              className="text-amber text-glow font-mono font-black leading-none tracking-tight"
              style={{ fontSize: 'clamp(7rem, 18vw, 20rem)' }}
            >
              <AnimatedCounter target={STATISTICS.leadTimeDays} duration={2500} />
            </div>
          </div>

          <div className="text-paper text-3xl md:text-4xl font-black tracking-[0.35em] uppercase mt-2">DAYS</div>
          <div className="text-ash text-sm mt-3 tracking-wide">Iran escalation case study — 2023</div>

          {/* Bar comparison */}
          <div className="mt-8 w-80 space-y-4">
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-ash">Conventional Intel</span>
                <span className="text-ash font-mono font-bold">{STATISTICS.conventionalLeadDays} days</span>
              </div>
              <motion.div
                className="h-6 rounded bg-ash/25"
                initial={{ width: 0 }}
                animate={{ width: `${(STATISTICS.conventionalLeadDays / STATISTICS.leadTimeDays) * 100}%` }}
                transition={{ delay: 1.5, duration: 0.6 }}
              />
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-amber font-semibold">{BRAND.name}</span>
                <span className="text-amber font-mono font-bold">{STATISTICS.leadTimeDays} days</span>
              </div>
              <motion.div
                className="h-6 rounded bg-amber glow-amber"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1.6, duration: 0.9 }}
              />
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-px h-72 bg-ash/15 shrink-0" />

        {/* Right: What this means */}
        <motion.div
          className="flex flex-col gap-5 max-w-sm"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="card-highlight">
            <div className="text-amber text-xs font-black tracking-widest uppercase mb-3">What 420 Days Buys You</div>
            <ul className="space-y-3 text-paper/80 text-sm">
              <li className="flex gap-3">
                <span className="text-amber font-bold shrink-0">→</span>
                Policy response time before crisis onset
              </li>
              <li className="flex gap-3">
                <span className="text-amber font-bold shrink-0">→</span>
                Security force repositioning and preparation
              </li>
              <li className="flex gap-3">
                <span className="text-amber font-bold shrink-0">→</span>
                Diplomatic interventions while options exist
              </li>
              <li className="flex gap-3">
                <span className="text-amber font-bold shrink-0">→</span>
                Population protection measures activated early
              </li>
            </ul>
          </div>

          <div className="bg-slate/60 border border-ash/20 rounded-xl p-5">
            <div className="text-ash text-xs font-black tracking-widest uppercase mb-3">Iran Use Case</div>
            <p className="text-paper/70 text-sm leading-relaxed">
              {BRAND.name} detected escalation signals <span className="text-amber font-semibold">420 days</span> before the 2023 escalation event was visible to conventional intelligence services.
            </p>
          </div>

          <div className="card-danger text-center">
            <div className="text-threat-critical text-xs font-black tracking-widest uppercase mb-2">Conventional Intel Average</div>
            <div className="text-5xl font-black text-paper font-mono">{STATISTICS.conventionalLeadDays}</div>
            <div className="text-ash text-sm mt-1">days — enough only to react</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
