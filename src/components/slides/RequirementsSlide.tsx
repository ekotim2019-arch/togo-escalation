'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { requirements } from '@/lib/data'
import { BRAND } from '@/lib/constants'

export default function RequirementsSlide() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className="w-full h-full flex flex-col bg-slate">
      {/* Header */}
      <motion.div
        className="px-16 pt-10 pb-4 shrink-0"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-amber text-xs font-mono tracking-widest uppercase mb-2">Section 05 — The Engagement</div>
        <h2 className="text-3xl font-bold text-paper">Meeting Your Six Requirements</h2>
      </motion.div>

      <div className="flex-1 px-16 pb-16 grid grid-cols-2 gap-4 min-h-0">
        {requirements.map((req, i) => (
          <motion.div
            key={req.number}
            className={`relative rounded-xl border cursor-pointer transition-all overflow-hidden ${
              hovered === i
                ? 'bg-amber/10 border-amber/50'
                : 'bg-slate/50 border-ash/20'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.08 }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="p-5">
              {/* Checkmark + title */}
              <div className="flex items-start gap-3 mb-3">
                <motion.div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ${
                    hovered === i ? 'border-amber bg-amber/20' : 'border-ash/40'
                  }`}
                  animate={{ borderColor: hovered === i ? '#C4892A' : '#9A9A8E66' }}
                >
                  <motion.svg
                    className={`w-3 h-3 ${hovered === i ? 'text-amber' : 'text-ash/60'}`}
                    viewBox="0 0 12 12"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: hovered === i ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.path
                      d="M2 6L5 9L10 3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </motion.div>
                <div>
                  <div className="text-ash text-xs font-mono mb-0.5">REQ {String(req.number).padStart(2, '0')}</div>
                  <div className={`font-bold text-sm ${hovered === i ? 'text-amber' : 'text-paper'}`}>
                    {req.title}
                  </div>
                </div>
              </div>

              {/* Deliverables */}
              <AnimatePresence>
                {hovered === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="text-ash text-xs font-bold tracking-widest uppercase mb-2">{BRAND.name} Delivers:</div>
                    <ul className="space-y-1">
                      {req.deliverables.map((d, j) => (
                        <li key={j} className="flex gap-2 text-paper/70 text-xs">
                          <span className="text-amber shrink-0">✓</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
