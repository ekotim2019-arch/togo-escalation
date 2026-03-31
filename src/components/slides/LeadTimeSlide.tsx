'use client';

import { motion } from 'framer-motion';
import { SlideWrapper } from '../SlideWrapper';
import { Eyebrow } from '../Eyebrow';

export default function LeadTimeSlide() {
  return (
    <SlideWrapper>
      {/* Subtle radial glow */}
      <div className="absolute w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(196,137,42,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 text-center">
        <Eyebrow>Lead time advantage</Eyebrow>

        {/* THE NUMBER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif font-light leading-none tracking-tight text-white mt-8"
          style={{ fontSize: '160px', paddingBottom: '24px' }}
        >
          45–90
        </motion.div>

        {/* DAYS label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-serif text-5xl font-light tracking-[0.2em] uppercase text-amber mt-4 mb-16"
        >
          Day Lead Time
        </motion.div>

        {/* Comparison line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="inline-flex items-center gap-10 py-8 px-16 bg-white/[0.03] border border-amber/15 rounded mb-16"
        >
          <div className="text-right">
            <div className="font-serif text-4xl font-light text-white">45–90</div>
            <div className="font-mono text-[18px] tracking-[0.1em] uppercase text-amber-lt">Kairos Arc</div>
          </div>
          <div className="font-mono text-[22px] text-white/60">vs</div>
          <div className="text-left">
            <div className="font-serif text-4xl font-light text-white/35">3–5</div>
            <div className="font-mono text-[18px] tracking-[0.1em] uppercase text-white/50">Conventional</div>
          </div>
        </motion.div>

        {/* Bottom statement */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="font-serif text-2xl font-light italic text-white/50 max-w-[500px] mx-auto"
        >
          Lead time is decision time.
        </motion.p>
      </div>
    </SlideWrapper>
  );
}
