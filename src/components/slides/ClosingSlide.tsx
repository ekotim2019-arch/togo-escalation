'use client';

import { motion } from 'framer-motion';
import { LogoDark } from '../Logo';
import { SlideWrapper } from '../SlideWrapper';

export default function ClosingSlide() {
  return (
    <SlideWrapper showGrid>
      <div className="relative z-10 text-center max-w-[900px]">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-10"
        >
          <LogoDark className="w-[100px] h-[68px] mx-auto" />
        </motion.div>

        {/* Wordmark */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="font-serif text-[28px] tracking-[0.2em] uppercase text-white mb-2">
            Kairos Arc
          </div>
          <div className="font-mono text-[20px] tracking-[0.15em] uppercase text-amber-lt mb-20">
            Know before it matters
          </div>
        </motion.div>

        {/* Quote block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/[0.02] border-l-[3px] border-amber rounded-r-md py-28 px-32 mb-16 text-left"
        >
          <p className="font-serif text-xl font-normal italic text-white/85 leading-relaxed">
            &ldquo;The question is not whether JNIM will attempt to consolidate presence in northern Togo — it is whether Togo will have the <span className="text-amber-lt">early warning capability</span>{' '}to detect and disrupt that effort before it succeeds.&rdquo;
          </p>
        </motion.div>

        {/* Divider */}
        <div className="w-[60px] h-px bg-amber/30 mx-auto mb-8" />

        {/* Contact line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="font-mono text-[22px] tracking-[0.08em] text-white/70"
        >
          Contact details to be provided by intermediary
        </motion.div>
      </div>

      {/* Bottom classification bar */}
      <div className="absolute bottom-0 left-0 right-0 px-24 py-12 flex justify-between border-t border-amber/10 font-mono text-[18px] tracking-[0.1em] uppercase text-white/50">
        <span>Client Confidential</span>
        <span>KA-2026-03-001</span>
        <span>31 March 2026</span>
      </div>
    </SlideWrapper>
  );
}
