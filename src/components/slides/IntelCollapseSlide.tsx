'use client';

import { motion } from 'framer-motion';
import { SlideWrapper } from '../SlideWrapper';
import { Eyebrow } from '../Eyebrow';

export default function IntelCollapseSlide() {
  return (
    <SlideWrapper>
      <div className="relative z-10 w-full max-w-[740px]">
        <div className="text-center mb-10">
          <Eyebrow color="red">Intelligence Environment</Eyebrow>
          <h2 className="font-serif text-5xl font-light text-white">
            The Intelligence <em className="italic text-amber-lt">Collapse</em>
          </h2>
        </div>

        {/* AES-ECOWAS split */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex gap-4 mb-8"
        >
          <div className="flex-1 bg-red/[0.08] border border-red/20 rounded-md p-5 text-center">
            <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-red mb-3">AES Alliance</div>
            <div className="font-serif text-2xl text-white/70 mb-2">Mali · Burkina · Niger</div>
            <div className="font-mono text-[10px] text-white/40">Withdrew from ECOWAS · 2024</div>
          </div>

          <div className="flex items-center shrink-0 px-2">
            <div className="relative">
              <div className="w-10 h-px bg-white/20" />
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 text-red/40 text-lg">✕</div>
            </div>
          </div>

          <div className="flex-1 bg-white/[0.03] border border-white/[0.08] rounded-md p-5 text-center">
            <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/40 mb-3">ECOWAS Framework</div>
            <div className="font-serif text-2xl text-white/40 mb-2">Coastal States</div>
            <div className="font-mono text-[10px] text-white/25">Intel sharing: severed</div>
          </div>
        </motion.div>

        {/* Main quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/[0.02] border-l-[3px] border-amber rounded-r-md py-6 px-7 mb-6"
        >
          <p className="font-serif text-xl italic text-white/85 leading-relaxed">
            &ldquo;The AES withdrawal <span className="text-amber-lt">crippled the region&apos;s ability to share intelligence</span> on JNIM movements across national borders.&rdquo;
          </p>
        </motion.div>

        {/* G5 dissolution note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-red/[0.06] border border-red/15 rounded-md py-4 px-6 mb-8"
        >
          <div className="font-mono text-[9px] uppercase tracking-[0.12em] text-red mb-2">G5 Sahel Dissolution</div>
          <p className="text-[14px] text-white/70 leading-relaxed">
            AES states declared <span className="text-white">&ldquo;no intention to extend operations to coastal countries&rdquo;</span> — leaving Togo, Benin, and Ghana without credible intelligence partners in the Sahel.
          </p>
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <p className="font-serif text-[22px] font-light italic text-white/40">
            The intelligence gap is structural — and growing.
          </p>
        </motion.div>
      </div>
    </SlideWrapper>
  );
}
