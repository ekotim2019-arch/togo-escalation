'use client';

import { motion } from 'framer-motion';
import { LogoDark } from '../Logo';
import { SlideWrapper } from '../SlideWrapper';

export default function TitleSlide() {
  return (
    <SlideWrapper showGrid>
      {/* Large background logo mark */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none">
        <LogoDark className="w-[400px] h-[270px]" />
      </div>

      <div className="relative z-10 max-w-[1100px] w-full">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3 mb-20"
        >
          <div className="w-8 h-px bg-amber" />
          <span className="font-mono text-[20px] tracking-[0.18em] uppercase text-amber-lt">
            Capability Demonstration · March 2026
          </span>
        </motion.div>

        {/* Logo + Wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-5 mb-20"
        >
          <LogoDark className="w-16 h-11" />
          <div>
            <div className="font-serif text-lg tracking-[0.18em] uppercase text-white">
              Kairos Arc
            </div>
            <div className="font-mono text-[16px] tracking-[0.15em] uppercase text-amber mt-0.5">
              Know before it matters
            </div>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-serif text-[72px] font-light leading-[1.05] tracking-tight text-white mb-10"
        >
          JNIM Threat<br/>
          <em className="italic text-amber-lt">Environment</em>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="font-serif text-[28px] font-light italic text-white/60 mb-24"
        >
          Togo–Burkina Faso Border Corridor
        </motion.p>

        {/* Meta info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex gap-12 pt-32 border-t border-amber/20"
        >
          <div>
            <div className="font-mono text-[18px] tracking-[0.12em] uppercase text-amber mb-1">Classification</div>
            <div className="text-[13px] text-white/70">Client Confidential</div>
          </div>
          <div>
            <div className="font-mono text-[18px] tracking-[0.12em] uppercase text-amber mb-1">Prepared for</div>
            <div className="text-[13px] text-white/70">Government of Togo</div>
          </div>
          <div>
            <div className="font-mono text-[18px] tracking-[0.12em] uppercase text-amber mb-1">Date</div>
            <div className="text-[13px] text-white/70">31 March 2026</div>
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  );
}
