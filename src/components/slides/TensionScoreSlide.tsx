'use client';

import { motion } from 'framer-motion';
import { SlideWrapper } from '../SlideWrapper';
import { Eyebrow } from '../Eyebrow';

export default function TensionScoreSlide() {
  return (
    <SlideWrapper>
      {/* Subtle amber glow */}
      <div className="absolute w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(196,137,42,0.07)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 text-center">
        <Eyebrow color="red">Threat Assessment · March 2026</Eyebrow>

        {/* THE NUMBER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif font-light leading-none tracking-tight text-white"
          style={{ fontSize: '180px', paddingBottom: '56px' }}
        >
          7.5<span className="font-serif font-light text-white/30" style={{ fontSize: '80px' }}>/10</span>
        </motion.div>

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-mono text-[26px] tracking-[0.2em] uppercase text-amber-lt mb-14"
        >
          Tension Score
        </motion.div>

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="inline-flex items-center gap-3 px-24 py-12 bg-red/[0.10] border border-red/30 rounded mb-20"
        >
          <div className="w-2 h-2 bg-red rounded-full animate-pulse-slow" />
          <span className="font-mono text-[22px] tracking-[0.15em] uppercase text-red font-bold">
            High — Escalating
          </span>
        </motion.div>

        {/* Delta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="font-serif text-xl font-light italic text-white/40"
        >
          +2.0 from baseline <span className="text-white/25">(5.5)</span>
        </motion.div>
      </div>
    </SlideWrapper>
  );
}
