'use client';

import { motion } from 'framer-motion';
import { SlideWrapper } from '../SlideWrapper';
import { Eyebrow } from '../Eyebrow';

const tiers = [
  {
    level: 'FLASH',
    color: 'red',
    timeframe: '2 hours',
    trigger: 'Mass-casualty event / Confirmed cross-border incursion / FOB expansion detected',
    format: 'Voice + written alert to designated contact',
  },
  {
    level: 'PRIORITY',
    color: 'amber',
    timeframe: '24 hours',
    trigger: 'Coordinated attack series / Displacement spike / Command network activation',
    format: 'Encrypted written brief with assessment and recommendations',
  },
  {
    level: 'ROUTINE',
    color: 'muted',
    timeframe: 'Scheduled',
    trigger: 'Weekly digest · Monthly assessment · Quarterly strategic review',
    format: 'Structured report with trend analysis and 30-day outlook',
  },
];

export default function EngagementSlide() {
  return (
    <SlideWrapper className="p-8">
      <div className="w-full max-w-4xl">
        <div className="mb-8">
          <Eyebrow>Engagement Model</Eyebrow>
          <h2 className="font-serif text-[46px] font-light text-white">
            Alert <em className="italic text-amber-lt">Tiering</em>
          </h2>
          <p className="text-[17px] text-white/65 mt-2">
            Three-tier system calibrated to decision timelines
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {tiers.map((tier, i) => {
            const isRed = tier.color === 'red';
            const isAmber = tier.color === 'amber';

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.15 }}
                className={`flex items-start gap-6 p-5 border border-l-[3px] rounded-r-lg ${
                  isRed
                    ? 'bg-red/[0.06] border-red/20 border-l-red'
                    : isAmber
                    ? 'bg-amber/[0.05] border-amber/15 border-l-amber'
                    : 'bg-white/[0.02] border-white/[0.07] border-l-white/20'
                }`}
              >
                {/* Level + timeframe */}
                <div className="w-44 shrink-0">
                  <div className={`font-mono text-[26px] tracking-[0.12em] uppercase font-medium ${
                    isRed ? 'text-red' : isAmber ? 'text-amber-lt' : 'text-white/80'
                  }`}>
                    {tier.level}
                  </div>
                  <div className={`font-serif text-2xl font-light mt-1 ${
                    isRed ? 'text-red' : isAmber ? 'text-amber' : 'text-white/30'
                  }`}>
                    {tier.timeframe}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="font-mono text-[18px] uppercase tracking-[0.1em] text-white/60 mb-1.5">Trigger conditions</div>
                  <div className="text-[16px] text-white/80 mb-3 leading-relaxed">{tier.trigger}</div>
                  <div className="font-mono text-[20px] text-white/70">{tier.format}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-6 text-center"
        >
          <span className="font-mono text-[20px] tracking-[0.1em] uppercase text-white/50">
            All deliverables encrypted · Chain of custody documented · Analyst available for debrief
          </span>
        </motion.div>
      </div>
    </SlideWrapper>
  );
}
