'use client'

import { motion } from 'framer-motion'
import { BRAND } from '@/lib/constants'

export default function TitleSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-slate relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'linear-gradient(#F5F3EE 1px, transparent 1px), linear-gradient(90deg, #F5F3EE 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Top-left classification */}
      <motion.div
        className="absolute top-8 left-8 text-ash text-xs font-mono tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        KA-2026-03-001 // RESTRICTED
      </motion.div>

      {/* Top-right date */}
      <motion.div
        className="absolute top-8 right-8 text-ash text-xs font-mono tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        MARCH 2026
      </motion.div>

      {/* Main content */}
      <div className="flex flex-col items-center text-center px-12 max-w-4xl">
        {/* Logo / Brand */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            {/* Kairos Arc logo mark */}
            <div className="relative w-12 h-12">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4 L44 40 L4 40 Z" stroke="#C4892A" strokeWidth="2" fill="none" />
                <path d="M24 14 L38 40 L10 40 Z" fill="#C4892A" fillOpacity="0.2" />
                <circle cx="24" cy="24" r="4" fill="#C4892A" />
              </svg>
            </div>
            <div>
              <div className="text-amber text-2xl font-bold tracking-[0.15em] uppercase">{BRAND.name}</div>
              <div className="text-ash text-xs tracking-[0.25em] uppercase">{BRAND.tagline}</div>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="w-24 h-px bg-amber/40 mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        />

        {/* Main title */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-paper leading-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          JNIM Threat Environment
          <br />
          <span className="text-amber">Assessment</span>
        </motion.h1>

        <motion.div
          className="text-ash text-lg tracking-widest uppercase mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Togo – Burkina Faso Border Corridor
        </motion.div>

        {/* Threat pulse indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex items-center gap-4 bg-threat-critical/10 border border-threat-critical/30 rounded-full px-6 py-3"
        >
          <div className="relative flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-threat-critical" />
            <div className="absolute w-3 h-3 rounded-full bg-threat-critical animate-ping opacity-75" />
          </div>
          <span className="text-threat-critical text-sm font-bold tracking-[0.2em] uppercase">
            Threat Level: High — Escalating
          </span>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <motion.div
        className="absolute bottom-16 left-0 right-0 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
        <div className="text-ash text-xs tracking-widest font-mono">
          INTELLIGENCE ASSESSMENT // FOR AUTHORIZED DISTRIBUTION ONLY
        </div>
      </motion.div>
    </div>
  )
}
