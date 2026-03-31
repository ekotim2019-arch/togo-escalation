'use client'

import { motion } from 'framer-motion'
import { BRAND } from '@/lib/constants'

export default function ClosingSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-ink via-slate to-ink relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(#F5F3EE 1px, transparent 1px), linear-gradient(90deg, #F5F3EE 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Amber radial glow */}
      <div className="absolute inset-0 pointer-events-none bg-glow-amber" />

      <div className="max-w-3xl px-16 text-center relative z-10">
        {/* Logo */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-16 h-16">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4 L44 40 L4 40 Z" stroke="#C4892A" strokeWidth="2" fill="none" />
              <path d="M24 14 L38 40 L10 40 Z" fill="#C4892A" fillOpacity="0.2" />
              <circle cx="24" cy="24" r="4" fill="#C4892A" />
            </svg>
          </div>
          <div className="text-left">
            <div className="text-amber text-3xl md:text-4xl font-black tracking-[0.3em] uppercase text-glow">{BRAND.name}</div>
            <div className="text-ash text-xs tracking-[0.3em] uppercase mt-1">{BRAND.tagline}</div>
          </div>
        </motion.div>

        {/* Accent line */}
        <motion.div
          className="accent-line-wide mx-auto mb-10"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />

        {/* Main quote */}
        <motion.blockquote
          className="text-xl md:text-2xl text-paper/90 leading-relaxed mb-8 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          &ldquo;The question is not whether JNIM will attempt to consolidate presence — it is whether Togo will have the early warning capability to detect and disrupt that effort <span className="text-amber font-black text-glow-subtle">before it succeeds.</span>&rdquo;
        </motion.blockquote>

        {/* Resolution line */}
        <motion.div
          className="text-amber text-xl md:text-2xl font-black tracking-wide mb-12 text-glow-subtle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          {BRAND.name} provides that capability.
        </motion.div>

        {/* Accent line */}
        <motion.div
          className="accent-line-wide mx-auto mb-10"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        />

        {/* Contact prompt */}
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
        >
          <div className="text-ash text-sm tracking-widest uppercase">Next Step</div>
          <div className="text-paper text-base">Engage Kairos Arc to scope the monitoring engagement</div>
          <div className="text-ash text-sm font-mono tracking-widest mt-4">
            Contact details to be provided by intermediary
          </div>
        </motion.div>
      </div>

      {/* Bottom classification */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <div className="text-ash text-xs font-mono tracking-widest">
          KA-2026-03-001 // KAIROS ARC // ALL RIGHTS RESERVED
        </div>
      </motion.div>
    </div>
  )
}
