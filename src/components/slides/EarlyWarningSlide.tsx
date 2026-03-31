'use client';

import { motion } from 'framer-motion';
import { SlideWrapper } from '../SlideWrapper';
import { Eyebrow } from '../Eyebrow';

const indicators = [
  {
    title: 'Population Displacement',
    lead: '7–14 days',
    description: 'Anomalous movement of civilian populations away from border villages. Market abandonment patterns. School closure signals.',
    examples: ['Village evacuation rates', 'Livestock movement', 'Market attendance drop'],
    color: 'amber',
  },
  {
    title: 'Market Disruption',
    lead: '3–10 days',
    description: 'Price spikes in key commodities. Supply chain interruptions along Lomé–Ouagadougou corridor. Trader withdrawal patterns.',
    examples: ['Fuel price indicators', 'Food commodity index', 'Border market volume'],
    color: 'amber',
  },
  {
    title: 'Armed Group Movement',
    lead: '24–72 hours',
    description: 'Vehicle congregation, weapons transport signals, command network activity. Reconnaissance pattern changes near Kpendjal.',
    examples: ['Vehicle traffic patterns', 'Network activity spikes', 'Checkpoint avoidance'],
    color: 'red',
  },
];

export default function EarlyWarningSlide() {
  return (
    <SlideWrapper className="p-8">
      <div className="w-full max-w-5xl">
        <div className="mb-8">
          <Eyebrow>Methodology</Eyebrow>
          <h2 className="font-serif text-[46px] font-light text-white">
            Early Warning <em className="italic text-amber-lt">Framework</em>
          </h2>
          <p className="text-[17px] text-white/65 mt-2 font-light">
            Structured indicators with validated lead times from operational deployments
          </p>
        </div>

        <div className="grid grid-cols-3 gap-7">
          {indicators.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className={`flex flex-col p-16 rounded-lg border ${
                ind.color === 'red'
                  ? 'bg-red/[0.06] border-red/20 border-l-[3px] border-l-red rounded-l-none'
                  : 'bg-amber/[0.05] border-amber/15'
              }`}
            >
              {/* Lead time */}
              <div className={`font-serif text-[40px] font-light leading-none mb-3 ${ind.color === 'red' ? 'text-red' : 'text-amber'}`}>
                {ind.lead}
              </div>
              <div className={`font-mono text-[18px] uppercase tracking-[0.12em] mb-6 ${ind.color === 'red' ? 'text-red font-bold' : 'text-amber-lt'}`}>
                advance warning
              </div>

              {/* Title */}
              <div className="font-serif text-lg text-white mb-4">
                {ind.title}
              </div>

              {/* Description */}
              <p className="text-[15px] text-white/80 leading-relaxed mb-4 flex-1">
                {ind.description}
              </p>

              {/* Examples */}
              <div className="space-y-3 pt-8 border-t border-white/[0.06]">
                {ind.examples.map((ex, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <div className={`w-1 h-1 rounded-full ${ind.color === 'red' ? 'bg-red/50' : 'bg-amber/50'}`} />
                    <span className="font-mono text-[20px] text-white/80">{ex}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
