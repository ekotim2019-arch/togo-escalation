'use client';

import { motion } from 'framer-motion';
import { SlideWrapper } from '../SlideWrapper';
import { Eyebrow } from '../Eyebrow';

const events = [
  {
    date: 'Oct 2025',
    label: 'Escalation Begins',
    text: 'Katiba Hanifa launches coordinated attacks across Burkina Faso\'s eastern corridor, targeting FAT outposts near the border.',
    severity: 'elevated',
  },
  {
    date: 'Nov 2025',
    label: 'Border Probing',
    text: 'First recorded cross-border movements detected near Kpendjal prefecture. Togo FAT placed on heightened alert.',
    severity: 'elevated',
  },
  {
    date: 'Dec 2025',
    label: 'Diapaga Consolidation',
    text: 'JNIM consolidates FOB at Diapaga, 25km from Togo border. Logistics supply lines active. Local recruitment accelerates.',
    severity: 'critical',
  },
  {
    date: 'Jan 2026',
    label: 'IED Campaign',
    text: 'IED strikes increase 40% along N18 highway approaching Cinkassé border crossing. Convoy ambushes resume.',
    severity: 'critical',
  },
  {
    date: 'Feb 2026',
    label: 'February Offensive',
    text: '30+ coordinated attacks across Burkina Faso in a single month. 120+ security personnel killed. Highest single-month toll on record.',
    severity: 'critical',
    highlight: true,
  },
  {
    date: 'Mar 2026',
    label: 'Current Status',
    text: 'Tension score 7.5/10. Diapaga FOB active. Cross-border reconnaissance ongoing. Assessment period closes.',
    severity: 'current',
  },
];

export default function TimelineSlide() {
  return (
    <SlideWrapper className="p-8">
      <div className="w-full max-w-5xl">
        <div className="mb-7">
          <Eyebrow>Operational Tempo</Eyebrow>
          <h2 className="font-serif text-[46px] font-light text-white">
            JNIM Incident <em className="italic text-amber-lt">Timeline</em>
          </h2>
          <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/30 mt-1">
            Oct 2025 — Mar 2026
          </div>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[100px] top-0 bottom-0 w-px bg-amber/20" />

          <div className="flex flex-col gap-3">
            {events.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + i * 0.1 }}
                className="flex items-start gap-6"
              >
                {/* Date */}
                <div className="w-[88px] shrink-0 text-right pt-2">
                  <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-white/40">
                    {event.date}
                  </span>
                </div>

                {/* Dot */}
                <div className="relative flex items-center justify-center w-4 shrink-0 mt-2.5">
                  <div className={`w-2.5 h-2.5 rounded-full ${
                    event.severity === 'critical' ? 'bg-red' :
                    event.severity === 'current' ? 'bg-amber' : 'bg-amber/60'
                  } ${event.highlight ? 'animate-pulse-slow' : ''}`} />
                </div>

                {/* Content */}
                <div className={`flex-1 py-3 px-4 rounded-r ${
                  event.highlight
                    ? 'bg-red/[0.08] border-l-[3px] border-red'
                    : event.severity === 'critical'
                    ? 'bg-red/[0.05] border-l-[2px] border-red/50'
                    : event.severity === 'current'
                    ? 'bg-amber/[0.06] border-l-[2px] border-amber/60'
                    : 'bg-white/[0.02] border-l-[2px] border-amber/30'
                }`}>
                  <div className={`font-mono text-[10px] tracking-[0.1em] uppercase mb-1 ${
                    event.highlight ? 'text-red' :
                    event.severity === 'critical' ? 'text-red/70' :
                    event.severity === 'current' ? 'text-amber' : 'text-amber/60'
                  }`}>
                    {event.label}
                    {event.highlight && <span className="ml-2 opacity-70">← February Offensive</span>}
                  </div>
                  <div className="font-serif text-base text-white/75 leading-relaxed">
                    {event.text}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
