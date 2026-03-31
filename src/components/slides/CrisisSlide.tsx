'use client';

import { motion } from 'framer-motion';
import { SlideWrapper } from '../SlideWrapper';
import { Eyebrow } from '../Eyebrow';

export default function CrisisSlide() {
  return (
    <SlideWrapper>
      {/* Subtle red glow */}
      <div className="absolute w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(139,26,26,0.1)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 text-center">
        <Eyebrow color="red">2025 · Togo</Eyebrow>

        {/* THE NUMBER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-[220px] font-light leading-[0.85] tracking-tight text-red"
        >
          60<span className="text-[140px] text-red/70">+</span>
        </motion.div>

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-serif text-[32px] font-light tracking-wide text-white/80 mt-6 mb-8"
        >
          Casualties
        </motion.div>

        {/* Subtext */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="font-mono text-[22px] tracking-[0.12em] uppercase text-white/80 mb-20"
        >
          Highest on record
        </motion.div>

        {/* Context box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="inline-block py-10 px-16 bg-red/[0.08] border-l-[3px] border-red rounded-r text-left max-w-[480px]"
        >
          <div className="font-mono text-[18px] tracking-[0.12em] uppercase text-red font-bold mb-2">
            February 2026 Offensive
          </div>
          <div className="font-serif text-lg text-white/85 leading-relaxed">
            <span className="text-white font-medium">30+ coordinated attacks</span> across Burkina Faso.<br/>
            <span className="text-white font-medium">120+ security personnel</span> killed in one month.
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  );
}
