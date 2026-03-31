'use client'

import { motion } from 'framer-motion'
import { BRAND } from '@/lib/constants'

const alertTiers = [
  {
    level: 'FLASH',
    color: '#DC2626',
    dot: 'bg-threat-critical',
    time: '≤ 2 hours',
    desc: 'Imminent threat to life or critical infrastructure. Immediate action required.',
    examples: ['Armed group breach of 15km buffer zone', 'Confirmed attack in Kpendjal-Ouest', 'Mass casualty event detected'],
  },
  {
    level: 'PRIORITY',
    color: '#F59E0B',
    dot: 'bg-threat-elevated',
    time: '≤ 24 hours',
    desc: 'Significant threat development requiring near-term response.',
    examples: ['Tripwire threshold triggered (3+ indicators)', 'Key commander movement', 'Cross-border incursion pattern'],
  },
  {
    level: 'ROUTINE',
    color: '#22C55E',
    dot: 'bg-threat-low',
    time: 'Scheduled',
    desc: 'Ongoing monitoring updates and trend analysis.',
    examples: ['Daily indicator dashboard', 'Weekly situation report', 'Monthly strategic assessment'],
  },
]

const deliverables = [
  { freq: 'Daily', items: ['Indicator status dashboard', 'Incident log update', 'Flash/Priority alerts (as needed)'] },
  { freq: 'Weekly', items: ['Border corridor situation report', 'Trend analysis brief', 'Key actor activity summary'] },
  { freq: 'Monthly', items: ['Comprehensive threat assessment', 'Scenario probability update', 'Capacity support module'] },
  { freq: 'Quarterly', items: ['Strategic forecast (6-month horizon)', 'Methodology review', 'Client debrief and Q&A'] },
]

export default function EngagementSlide() {
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
        <div className="text-amber text-xs font-mono tracking-widest uppercase mb-2">Section 05 — Engagement Model</div>
        <h2 className="slide-title text-paper">{BRAND.name} Delivery Framework</h2>
        <div className="accent-line mt-3" />
      </motion.div>

      <div className="flex-1 flex gap-6 px-16 pb-12 min-h-0 relative z-10">
        {/* Alert tiers */}
        <div className="flex-1 flex flex-col gap-3">
          <div className="text-ash text-xs font-black tracking-widest uppercase mb-1">Alert Tiering</div>
          {alertTiers.map((tier, i) => (
            <motion.div
              key={tier.level}
              className="flex-1 rounded-2xl p-5 border"
              style={{ borderColor: `${tier.color}30`, backgroundColor: `${tier.color}08` }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="relative w-3 h-3 shrink-0">
                  <div className={`w-3 h-3 rounded-full ${tier.dot}`} />
                  {i === 0 && <div className={`absolute inset-0 w-3 h-3 rounded-full ${tier.dot} animate-ping opacity-60`} />}
                </div>
                <span className="font-black text-sm tracking-widest" style={{ color: tier.color }}>{tier.level}</span>
                <span className="text-ash text-xs ml-auto font-mono font-bold">{tier.time}</span>
              </div>
              <p className="text-paper/70 text-xs mb-2">{tier.desc}</p>
              <div className="space-y-0.5">
                {tier.examples.map((ex, j) => (
                  <div key={j} className="text-xs text-ash flex gap-2">
                    <span style={{ color: tier.color }}>·</span> {ex}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Deliverables */}
        <motion.div
          className="w-72 shrink-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-ash text-xs font-black tracking-widest uppercase mb-3">Deliverables Schedule</div>
          <div className="space-y-3">
            {deliverables.map((d, i) => (
              <motion.div
                key={d.freq}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.08 }}
              >
                <div className="text-amber text-xs font-black tracking-widest uppercase mb-2">{d.freq}</div>
                <ul className="space-y-1">
                  {d.items.map((item, j) => (
                    <li key={j} className="flex gap-2 text-paper/70 text-xs">
                      <span className="text-amber/60 shrink-0">→</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
