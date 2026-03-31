'use client';

import { motion } from 'framer-motion';
import { SlideWrapper } from '../SlideWrapper';
import { Eyebrow } from '../Eyebrow';

export default function CallToActionSlide() {
  return (
    <SlideWrapper>
      <div className="relative z-10 w-full max-w-[700px]">
        {/* Header */}
        <div className="text-center mb-12">
          <Eyebrow>12-Month Outlook</Eyebrow>
          <h2 className="font-serif text-5xl font-light text-white">
            Scenario <em className="italic text-amber-lt">Probabilities</em>
          </h2>
        </div>

        {/* Scenarios */}
        <div className="flex flex-col gap-5 mb-12">
          {/* Best Case */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-stretch gap-4"
          >
            <div className="w-20 flex flex-col items-center justify-center">
              <div className="font-serif text-[42px] font-light text-white/35 leading-none">15</div>
              <div className="font-mono text-[20px] text-white/50">%</div>
            </div>
            <div className="flex-1 bg-white/[0.03] border border-white/[0.08] rounded-md p-5">
              <div className="font-mono text-[20px] tracking-[0.1em] uppercase text-white/80 mb-2">Best Case</div>
              <div className="font-serif text-xl text-white/70 leading-relaxed">
                JNIM fractures under internal pressure. Regional stabilisation holds. Togo border remains contested but manageable.
              </div>
            </div>
          </motion.div>

          {/* Most Likely */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-stretch gap-4"
          >
            <div className="w-20 flex flex-col items-center justify-center">
              <div className="font-serif text-[42px] font-light text-amber leading-none">60</div>
              <div className="font-mono text-[20px] text-amber-lt">%</div>
            </div>
            <div className="flex-1 bg-amber/[0.06] border border-amber/20 border-l-[3px] border-l-amber rounded-r-md p-5">
              <div className="font-mono text-[20px] tracking-[0.1em] uppercase text-amber-lt mb-2">Most Likely</div>
              <div className="font-serif text-xl text-white/85 leading-relaxed">
                Sustained attritional campaign. <span className="text-amber-lt">40–80 FAT casualties</span> over 12 months. Periodic cross-border incursions. No territorial loss but persistent instability.
              </div>
            </div>
          </motion.div>

          {/* Worst Case */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-stretch gap-4"
          >
            <div className="w-20 flex flex-col items-center justify-center">
              <div className="font-serif text-[42px] font-light text-red leading-none">25</div>
              <div className="font-mono text-[20px] text-red font-bold">%</div>
            </div>
            <div className="flex-1 bg-red/[0.06] border border-red/20 border-l-[3px] border-l-red rounded-r-md p-5">
              <div className="font-mono text-[20px] tracking-[0.1em] uppercase text-red font-bold mb-2">Worst Case</div>
              <div className="font-serif text-xl text-white/85 leading-relaxed">
                Mass-casualty event (<span className="text-red">30+ KIA single incident</span>). JNIM establishes governance structures in Togolese territory. Regional contagion accelerates.
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center pt-8 border-t border-amber/15"
        >
          <p className="font-serif text-[22px] font-light italic text-white/60 max-w-[500px] mx-auto">
            &ldquo;The window for effective intervention is narrowing.&rdquo;
          </p>
        </motion.div>
      </div>
    </SlideWrapper>
  );
}
