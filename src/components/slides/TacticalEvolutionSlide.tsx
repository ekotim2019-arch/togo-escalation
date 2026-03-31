'use client'

import { motion } from 'framer-motion'

const stages = [
  {
    phase: '01',
    icon: '💣',
    title: 'IED Warfare',
    period: '2019–2022',
    description: 'Improvised explosive devices targeting military convoys and supply routes. High-casualty, low-risk to operators.',
    color: '#EAB308',
    severity: 'Established',
  },
  {
    phase: '02',
    icon: '⚔️',
    title: 'Ground Assault',
    period: '2022–2024',
    description: 'Large-scale coordinated infantry attacks on military outposts and villages. Battalion-strength operations.',
    color: '#F59E0B',
    severity: 'Escalating',
  },
  {
    phase: '03',
    icon: '🛸',
    title: 'Drone Warfare',
    period: '2024–Present',
    description: 'Kamikaze drone strikes against high-value targets. April 2025: first confirmed drone strike in theater.',
    color: '#DC2626',
    severity: 'Critical',
    highlight: true,
  },
]

export default function TacticalEvolutionSlide() {
  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-b from-slate via-slate to-ink">
      {/* Header */}
      <motion.div
        className="px-16 pt-10 pb-6 shrink-0"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="eyebrow mb-4">Section 02 — Tactical Evolution</div>
        <h2 className="slide-title text-paper">JNIM is Adapting</h2>
        <div className="accent-line mt-3" />
      </motion.div>

      <div className="flex-1 flex flex-col px-16 pb-12 gap-6 min-h-0">
        {/* Evolution stages */}
        <div className="flex gap-6 flex-1">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.phase}
              className={`flex-1 rounded-2xl p-7 border relative overflow-hidden ${
                stage.highlight
                  ? 'bg-threat-critical/10 border-threat-critical/50'
                  : 'bg-white/[0.03] border-white/10'
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
            >
              {/* Arrow connector */}
              {i < stages.length - 1 && (
                <div className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 text-ash/40 text-2xl">→</div>
              )}

              <div className="text-5xl mb-4">{stage.icon}</div>
              <div className="text-ash text-xs font-mono mb-2">{stage.period}</div>
              <h3 className="text-2xl font-black mb-3" style={{ color: stage.color }}>{stage.title}</h3>
              <p className="text-paper/70 text-sm leading-relaxed mb-5">{stage.description}</p>

              <div
                className="inline-flex items-center gap-2 text-xs font-black tracking-widest px-3 py-1.5 rounded-full"
                style={{ color: stage.color, backgroundColor: `${stage.color}18`, border: `1px solid ${stage.color}40` }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: stage.color }} />
                {stage.severity}
              </div>

              {stage.highlight && (
                <div className="mt-5 bg-threat-critical/10 rounded-xl p-3 border border-threat-critical/20">
                  <div className="text-threat-critical text-xs font-black tracking-widest mb-1">APR 2025 — CONFIRMED</div>
                  <div className="text-paper/80 text-xs">
                    Kamikaze drone strike — first documented use by JNIM in West Africa coastal region
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom fact */}
        <motion.div
          className="card-highlight flex items-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="text-amber text-2xl shrink-0 font-black">▲</div>
          <div className="text-paper">
            <span className="text-amber font-black">JNIM is the most prolific non-state drone user in Africa</span>
            {' '}— and this capability is now being deployed along the border corridor.
          </div>
        </motion.div>
      </div>
    </div>
  )
}
