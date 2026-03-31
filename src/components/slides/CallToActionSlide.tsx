'use client'

import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import { SCENARIO_PROBABILITIES, BRAND } from '@/lib/constants'

const scenarios = [
  {
    name: 'Best Case',
    value: SCENARIO_PROBABILITIES.bestCase,
    color: '#22C55E',
    desc: 'JNIM consolidation stalls. Togo builds deterrence with early warning. Corridor remains viable.',
  },
  {
    name: 'Most Likely',
    value: SCENARIO_PROBABILITIES.mostLikely,
    color: '#F59E0B',
    desc: 'Continued escalation. Sporadic border incursions. Lomé corridor disrupted. Intervention possible if early warning in place.',
  },
  {
    name: 'Worst Case',
    value: SCENARIO_PROBABILITIES.worstCase,
    color: '#DC2626',
    desc: 'JNIM operational presence established in northern Togo by 2027. State capacity overwhelmed.',
  },
]

export default function CallToActionSlide() {
  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-br from-ink via-slate to-ink relative overflow-hidden">
      {/* Subtle red glow */}
      <div className="absolute inset-0 pointer-events-none bg-glow-red opacity-50" />

      {/* Header */}
      <motion.div
        className="px-16 pt-10 pb-4 shrink-0 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-amber text-xs font-mono tracking-widest uppercase mb-2">Section 05 — Decision Point</div>
        <h2 className="slide-title text-paper">The Window Is Narrowing</h2>
        <div className="accent-line mt-3" />
      </motion.div>

      <div className="flex-1 flex gap-10 px-16 pb-12 min-h-0 relative z-10">
        {/* Donut chart */}
        <motion.div
          className="flex flex-col items-center justify-center w-72 shrink-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="text-ash text-xs font-black tracking-widest uppercase mb-4 text-center">12-Month Scenario Probabilities</div>
          <div className="w-full h-52">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={scenarios}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={85}
                  paddingAngle={3}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                  animationBegin={400}
                  animationDuration={1200}
                >
                  {scenarios.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ background: '#1C2B3A', border: '1px solid rgba(196,137,42,0.3)', color: '#F5F3EE', borderRadius: '8px' }}
                  formatter={(value) => [`${value}%`, '']}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className="space-y-2 w-full">
            {scenarios.map(s => (
              <div key={s.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: s.color }} />
                <span className="text-paper text-xs">{s.name}</span>
                <span className="text-xs font-mono font-black ml-auto" style={{ color: s.color }}>{s.value}%</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scenarios detail */}
        <div className="flex-1 flex flex-col gap-4 min-h-0">
          {scenarios.map((s, i) => (
            <motion.div
              key={s.name}
              className="flex-1 rounded-2xl border p-5"
              style={{ borderColor: `${s.color}30`, backgroundColor: `${s.color}08` }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.12 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: s.color }} />
                <span className="font-black text-sm tracking-widest" style={{ color: s.color }}>{s.name.toUpperCase()}</span>
                <span className="text-2xl font-black ml-auto font-mono" style={{ color: s.color }}>{s.value}%</span>
              </div>
              <p className="text-paper/70 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}

          {/* CTA */}
          <motion.div
            className="card-highlight text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <div className="text-amber font-black text-sm tracking-wide mb-1">
              {BRAND.name} provides actionable intelligence in the 60% scenario — and is your only safeguard against the 25%.
            </div>
            <div className="text-ash text-xs mt-2">
              Contact details to be provided by intermediary.
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
