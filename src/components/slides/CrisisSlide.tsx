'use client'

import { motion } from 'framer-motion'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import TensionGauge from '@/components/ui/TensionGauge'
import { THREAT_LEVEL, STATISTICS } from '@/lib/constants'

export default function CrisisSlide() {
  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-br from-ink via-slate to-ink relative overflow-hidden">
      {/* Radial red glow behind the hero number */}
      <div className="absolute left-[18%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(220,38,38,0.1) 0%, transparent 70%)' }}
      />

      {/* Header */}
      <motion.div
        className="px-16 pt-10 pb-4 shrink-0 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-threat-critical text-xs font-mono tracking-widest uppercase mb-2">Section 01 — The Crisis</div>
        <h2 className="slide-title text-paper">2025: A Year of Record Violence</h2>
        <div className="accent-line mt-3" />
      </motion.div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-around px-16 gap-12 relative z-10">
        {/* Left: Big number */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="hero-number text-threat-critical text-glow-red font-mono">
            <AnimatedCounter target={STATISTICS.casualties2025} duration={2000} suffix="+" />
          </div>
          <div className="text-paper text-xl md:text-2xl font-bold tracking-wide mt-2">Casualties in 2025</div>
          <div className="mt-3 flex items-center gap-2">
            <svg className="text-threat-critical w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-threat-critical font-black text-lg tracking-wide">Highest on Record</span>
          </div>

          {/* Trend bars */}
          <div className="mt-8 w-72 space-y-3">
            {[
              { year: '2022', val: 30 },
              { year: '2023', val: 48 },
              { year: '2024', val: 52 },
              { year: '2025', val: 100, highlight: true },
            ].map((d, i) => (
              <div key={d.year} className="flex items-center gap-3">
                <span className="text-ash text-xs font-mono w-8">{d.year}</span>
                <motion.div
                  className="h-5 rounded"
                  style={{ backgroundColor: d.highlight ? '#DC2626' : 'rgba(196,137,42,0.25)' }}
                  initial={{ width: 0 }}
                  animate={{ width: `${d.val}%` }}
                  transition={{ delay: 0.5 + i * 0.12, duration: 0.7 }}
                />
                {d.highlight && (
                  <span className="text-threat-critical text-sm font-black font-mono">60+</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-px h-56 bg-ash/15 shrink-0" />

        {/* Right: Tension gauge */}
        <motion.div
          className="flex flex-col items-center gap-6"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <TensionGauge
            value={THREAT_LEVEL.current}
            status={THREAT_LEVEL.status}
            size={220}
          />

          {/* Delta indicator */}
          <div className="card-danger text-center">
            <div className="text-ash text-xs tracking-widest uppercase mb-1">Change from Baseline</div>
            <div className="text-5xl font-black text-threat-critical font-mono text-glow-red">{THREAT_LEVEL.delta}</div>
            <div className="text-ash text-xs mt-1">{STATISTICS.tensionBaseline} → {STATISTICS.tensionCurrent} / 10</div>
          </div>

          {/* JNIM data points */}
          <div className="space-y-2 w-60">
            <div className="flex justify-between border-b border-ash/10 pb-2">
              <span className="text-ash text-xs">JNIM Control</span>
              <span className="text-threat-elevated text-xs font-mono font-bold">~{STATISTICS.jnimControl}% of Burkina</span>
            </div>
            <div className="flex justify-between border-b border-ash/10 pb-2">
              <span className="text-ash text-xs">Diapaga distance</span>
              <span className="text-threat-critical text-xs font-mono font-bold">{STATISTICS.diapagaDistance}km from border</span>
            </div>
            <div className="flex justify-between">
              <span className="text-ash text-xs">JNIM fighters</span>
              <span className="text-paper text-xs font-mono">6,000–8,000</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
