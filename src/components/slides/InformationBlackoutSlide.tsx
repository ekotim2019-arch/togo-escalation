'use client'

import { motion } from 'framer-motion'

const gaps = [
  'Real-time incident reporting from Burkina Faso border zones',
  'JNIM order of battle and force disposition updates',
  'Population displacement early indicators',
  'Armed group communication intercepts',
  'Cross-border movement intelligence',
  'Local informant network data from Kpendjal region',
]

export default function InformationBlackoutSlide() {
  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-b from-slate via-slate to-ink relative overflow-hidden">
      {/* Static noise effect */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
      }} />

      {/* Header */}
      <motion.div
        className="px-32 pt-20 pb-8 shrink-0 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="eyebrow mb-4">Section 03 — Information Blackout</div>
        <h2 className="slide-title text-paper">What You Don&rsquo;t Know <span className="text-threat-critical">CAN</span> Hurt You</h2>
        <div className="accent-line mt-3" />
      </motion.div>

      <div className="flex-1 flex flex-col gap-5 px-32 pb-24 relative z-10">
        {/* HAAC quote */}
        <motion.div
          className="bg-ink border border-threat-critical/40 rounded-2xl p-12 relative"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="text-threat-critical text-xs font-black tracking-widest mb-3 uppercase">Official Media Suppression — HAAC Directive</div>
          <blockquote className="text-xl md:text-2xl text-paper font-light italic leading-relaxed border-l-4 border-threat-critical pl-12">
            &ldquo;HAAC has expressly forbidden journalists from mentioning attacks or security incidents in northern Togo.&rdquo;
          </blockquote>
          <div className="mt-3 text-ash text-sm">
            Haute Autorité de l&rsquo;Audiovisuel et de la Communication — Togo&rsquo;s broadcast regulator
          </div>
        </motion.div>

        {/* Intelligence gaps grid */}
        <div className="flex-1 flex gap-6 min-h-0">
          <div className="flex-1">
            <motion.div
              className="mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-ash text-xs font-black tracking-widest uppercase">Critical Intelligence Gaps</div>
            </motion.div>
            <div className="space-y-2">
              {gaps.map((gap, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3 bg-threat-critical/5 border border-threat-critical/15 rounded-xl px-8 py-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.08 }}
                >
                  <div className="w-5 h-5 rounded border border-threat-critical/40 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 bg-threat-critical rounded-full" />
                  </div>
                  <span className="text-paper/80 text-sm">{gap}</span>
                  <div className="ml-auto shrink-0">
                    <span className="text-threat-critical text-xs font-mono font-black">BLIND</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right callout */}
          <motion.div
            className="w-64 shrink-0 flex flex-col gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="bg-ink border border-ash/20 rounded-2xl p-10 flex-1">
              <div className="text-ash text-xs font-black tracking-widest uppercase mb-4">Consequence</div>
              <div className="space-y-4 text-sm text-paper/70 leading-relaxed">
                <p>When an attack occurs, Togolese authorities learn about it from social media — <span className="text-threat-critical font-bold">not from intelligence channels.</span></p>
                <p>The first warning is the attack itself.</p>
                <p className="text-paper font-bold">By then, it&rsquo;s too late to respond, only to react.</p>
              </div>
            </div>

            <div className="card-highlight">
              <div className="text-amber text-xs font-black tracking-widest uppercase mb-2">Kairos Arc Fills This Gap</div>
              <div className="text-paper/80 text-sm">
                Continuous monitoring. Open-source synthesis. Human terrain analysis. Indicators that fire before events.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
