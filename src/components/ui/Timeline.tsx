'use client'

import { motion } from 'framer-motion'
import { incidents, type Incident } from '@/lib/data'

const severityColors = {
  critical: '#DC2626',
  elevated: '#F59E0B',
  moderate: '#EAB308',
}

interface TimelineProps {
  items?: Incident[]
}

export default function Timeline({ items = incidents }: TimelineProps) {
  return (
    <div className="relative overflow-y-auto max-h-[420px] pr-4">
      {/* Vertical line */}
      <div className="absolute left-[88px] top-0 bottom-0 w-px bg-ash/20" />

      <div className="space-y-4">
        {items.map((incident, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.12, duration: 0.4 }}
            className={`relative flex gap-6 ${incident.highlight ? 'bg-threat-critical/5 rounded-lg p-3 -mx-3 border border-threat-critical/20' : ''}`}
          >
            {/* Date label */}
            <div className="w-20 shrink-0 text-right">
              <span className="text-ash text-xs font-mono">{incident.date}</span>
            </div>

            {/* Dot */}
            <div className="relative flex items-start pt-1">
              <div
                className="w-3 h-3 rounded-full shrink-0 ring-2 ring-slate z-10"
                style={{ backgroundColor: severityColors[incident.severity] }}
              />
              {incident.highlight && (
                <div
                  className="absolute w-3 h-3 rounded-full animate-ping opacity-75"
                  style={{ backgroundColor: severityColors[incident.severity] }}
                />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pb-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-paper/60 text-xs uppercase tracking-wider">{incident.location}</span>
                {incident.casualties && (
                  <span className="text-threat-critical text-xs font-mono bg-threat-critical/10 px-2 py-0.5 rounded">
                    {incident.casualties} KIA
                  </span>
                )}
                {incident.highlight && (
                  <span className="text-threat-critical text-xs font-bold tracking-widest">MAJOR OFFENSIVE</span>
                )}
              </div>
              <p className="text-paper text-sm leading-relaxed">{incident.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
