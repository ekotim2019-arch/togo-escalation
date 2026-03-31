'use client'

import { motion } from 'framer-motion'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { STATISTICS, BRAND } from '@/lib/constants'

export default function LeadTimeSlide() {
  return (
    <div className="w-full h-full flex flex-col bg-slate relative overflow-hidden">
      {/* Background amber glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-amber/5 blur-3xl" />
      </div>

      {/* Header */}
      <motion.div
        className="px-16 pt-10 pb-4 shrink-0 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-amber text-xs font-mono tracking-widest uppercase mb-2">Section 04 — Proven Lead Time</div>
        <h2 className="text-3xl font-bold text-paper">Lead Time = Decision Time</h2>
      </motion.div>

      <div className="flex-1 flex items-center justify-around px-16 pb-16 relative z-10 gap-12">
        {/* Left: Big counter */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <div className="text-ash text-xs font-mono tracking-widest uppercase mb-4">{BRAND.name} — Demonstrated Lead Time</div>
          <div className="relative">
            <div className="text-[130px] font-black leading-none text-amber font-mono">
              <AnimatedCounter target={STATISTICS.leadTimeDays} duration={2500} />
            </div>
            <div className="absolute -right-4 top-4 text-amber/40 text-4xl font-bold">+</div>
          </div>
          <div className="text-paper text-2xl font-bold tracking-[0.3em] uppercase mt-2">DAYS</div>
          <div className="text-ash text-sm mt-2">Iran escalation case study — 2023</div>

          {/* Bar comparison */}
          <div className="mt-8 w-72 space-y-3">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-ash">Conventional Intel</span>
                <span className="text-ash font-mono">{STATISTICS.conventionalLeadDays} days</span>
              </div>
              <motion.div
                className="h-5 rounded bg-ash/30"
                initial={{ width: 0 }}
                animate={{ width: `${(STATISTICS.conventionalLeadDays / STATISTICS.leadTimeDays) * 100}%` }}
                transition={{ delay: 1.5, duration: 0.6 }}
              />
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-amber">{BRAND.name}</span>
                <span className="text-amber font-mono">{STATISTICS.leadTimeDays} days</span>
              </div>
              <motion.div
                className="h-5 rounded bg-amber"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1.6, duration: 0.8 }}
              />
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-px h-64 bg-ash/20 shrink-0" />

        {/* Right: What this means */}
        <motion.div
          className="flex flex-col gap-5 max-w-sm"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="bg-amber/10 border border-amber/40 rounded-xl p-6">
            <div className="text-amber text-xs font-bold tracking-widest uppercase mb-3">What 420 Days Buys You</div>
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

          <div className="bg-slate border border-ash/20 rounded-xl p-5">
            <div className="text-ash text-xs font-bold tracking-widest uppercase mb-3">Iran Use Case</div>
            <p className="text-paper/70 text-sm leading-relaxed">
              {BRAND.name} detected escalation signals <span className="text-amber font-semibold">420 days</span> before the 2023 escalation event was visible to conventional intelligence services.
            </p>
          </div>

          <div className="bg-threat-critical/10 border border-threat-critical/30 rounded-xl p-5 text-center">
            <div className="text-threat-critical text-xs font-bold tracking-widest uppercase mb-2">Conventional Intel Average</div>
            <div className="text-5xl font-black text-paper font-mono">{STATISTICS.conventionalLeadDays}</div>
            <div className="text-ash text-sm">days — enough only to react</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
