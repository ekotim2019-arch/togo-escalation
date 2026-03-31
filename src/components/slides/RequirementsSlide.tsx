'use client';

import { motion } from 'framer-motion';
import { SlideWrapper } from '../SlideWrapper';
import { Eyebrow } from '../Eyebrow';

const requirements = [
  {
    req: 'Threat Mapping & Pattern Analysis',
    deliverable: 'Monthly geospatial threat maps with JNIM activity overlays and trend analysis',
  },
  {
    req: 'Human Terrain & Network Intelligence',
    deliverable: 'Quarterly actor profiles: commanders, financial networks, recruitment patterns',
  },
  {
    req: 'Early Warning Indicators',
    deliverable: 'Structured indicator dashboard with tripwire thresholds and alert triggers',
  },
  {
    req: 'Cross-border Monitoring',
    deliverable: 'Real-time coverage of Kpendjal, Kpendjal-Ouest, and Cinkassé corridor',
  },
  {
    req: 'Strategic Assessments',
    deliverable: 'Bi-annual 12-month outlook with scenario probabilities and recommended actions',
  },
  {
    req: 'Capacity Support',
    deliverable: 'Analytical framework training and structured methodology transfer',
  },
];

export default function RequirementsSlide() {
  return (
    <SlideWrapper className="p-8">
      <div className="w-full max-w-5xl">
        <div className="mb-8">
          <Eyebrow>Capability Match</Eyebrow>
          <h2 className="font-serif text-[46px] font-light text-white">
            Meeting Your <em className="italic text-amber-lt">Six Requirements</em>
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {requirements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + i * 0.1 }}
              className="flex items-start gap-5 py-10 px-10 bg-white/[0.02] border border-white/[0.07] rounded-md"
            >
              {/* Number + checkmark */}
              <div className="w-10 shrink-0 flex flex-col items-center gap-1 pt-0.5">
                <div className="font-mono text-[20px] text-white/50">{String(i + 1).padStart(2, '0')}</div>
                <div className="w-5 h-5 rounded-full bg-amber/[0.12] border border-amber/30 flex items-center justify-center">
                  <svg viewBox="0 0 12 12" className="w-3 h-3">
                    <path d="M2 6l3 3 5-5" stroke="#C4892A" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <div className="font-serif text-[18px] text-white mb-2">{item.req}</div>
                <div className="text-[14px] text-white/70 leading-relaxed">{item.deliverable}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
