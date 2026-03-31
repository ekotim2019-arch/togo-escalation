'use client'

import { motion } from 'framer-motion'
import { BRAND } from '@/lib/constants'

export default function ClosingSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-slate relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(#F5F3EE 1px, transparent 1px), linear-gradient(90deg, #F5F3EE 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Amber glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-amber/5 blur-3xl" />
      </div>

      <div className="max-w-3xl px-16 text-center relative z-10">
        {/* Logo */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-14 h-14">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4 L44 40 L4 40 Z" stroke="#C4892A" strokeWidth="2" fill="none" />
              <path d="M24 14 L38 40 L10 40 Z" fill="#C4892A" fillOpacity="0.2" />
              <circle cx="24" cy="24" r="4" fill="#C4892A" />
            </svg>
          </div>
          <div className="text-left">
            <div className="text-amber text-2xl font-bold tracking-[0.15em] uppercase">{BRAND.name}</div>
            <div className="text-ash text-xs tracking-[0.25em] uppercase">{BRAND.tagline}</div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="w-16 h-px bg-amber/40 mx-auto mb-10"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        />

        {/* Main quote */}
        <motion.blockquote
          className="text-lg md:text-xl text-paper/90 leading-relaxed mb-8 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          &ldquo;The question is not whether JNIM will attempt to consolidate presence — it is whether Togo will have the early warning capability to detect and disrupt that effort <span className="text-amber font-semibold">before it succeeds.</span>&rdquo;
        </motion.blockquote>

        {/* Resolution line */}
        <motion.div
          className="text-amber text-xl font-bold tracking-wide mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          {BRAND.name} provides that capability.
        </motion.div>

        {/* Divider */}
        <motion.div
          className="w-16 h-px bg-amber/40 mx-auto mb-10"
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
          <div className="text-amber text-sm font-mono tracking-widest mt-4">
            intelligence@kairosarcgroup.com
          </div>
        </motion.div>
      </div>

      {/* Bottom classification */}
      <motion.div
        className="absolute bottom-16 left-0 right-0 flex justify-center"
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
