'use client';

import { motion } from 'framer-motion';
import { SlideWrapper } from '../SlideWrapper';

export default function DiapagaMapSlide() {
  return (
    <SlideWrapper className="p-8">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-px bg-amber" />
            <span className="font-mono text-[20px] tracking-[0.18em] uppercase text-amber-lt">
              Threat Geometry
            </span>
          </div>
          <h2 className="font-serif text-[42px] font-light text-white">
            The Diapaga <em className="italic text-amber-lt">Axis</em>
          </h2>
        </div>

        {/* Map Container */}
        <div className="flex gap-6">
          {/* Map SVG */}
          <div className="flex-1 relative bg-white/[0.02] border border-amber/10 rounded-lg overflow-hidden">
            <svg viewBox="0 0 400 450" className="w-full h-auto">
              {/* Burkina Faso (threat territory) */}
              <rect x="100" y="20" width="250" height="120" fill="#8B1A1A" fillOpacity="0.08" stroke="#8B1A1A" strokeWidth="0.5" strokeOpacity="0.3"/>
              <text x="225" y="50" fill="rgba(139,26,26,0.4)" fontFamily="DM Mono, monospace" fontSize="8" letterSpacing="0.15em" textAnchor="middle">BURKINA FASO</text>
              <text x="225" y="62" fill="rgba(139,26,26,0.3)" fontFamily="DM Mono, monospace" fontSize="7" textAnchor="middle">~60% JNIM controlled</text>

              {/* Border line */}
              <line x1="100" y1="140" x2="350" y2="140" stroke="rgba(253,252,249,0.2)" strokeWidth="1" strokeDasharray="4 4"/>
              <text x="360" y="144" fill="rgba(253,252,249,0.25)" fontFamily="DM Mono, monospace" fontSize="7">BORDER</text>

              {/* Togo */}
              <rect x="150" y="140" width="100" height="280" fill="rgba(253,252,249,0.03)" stroke="rgba(253,252,249,0.1)" strokeWidth="0.5"/>
              <text x="200" y="400" fill="rgba(253,252,249,0.15)" fontFamily="DM Mono, monospace" fontSize="9" letterSpacing="0.1em" textAnchor="middle">TOGO</text>

              {/* Trade corridor line */}
              <path d="M200,420 L200,180 L260,80" stroke="#C4892A" strokeWidth="2" fill="none" strokeDasharray="8 6" opacity="0.6"/>

              {/* 50km threat radius around Diapaga */}
              <circle cx="260" cy="80" r="60" fill="#8B1A1A" fillOpacity="0.1" stroke="#8B1A1A" strokeWidth="1" strokeDasharray="3 3">
                <animate attributeName="r" values="55;70;55" dur="4s" repeatCount="indefinite"/>
                <animate attributeName="fillOpacity" values="0.12;0.06;0.12" dur="4s" repeatCount="indefinite"/>
              </circle>

              {/* 25km distance marker */}
              <line x1="260" y1="95" x2="220" y2="140" stroke="rgba(253,252,249,0.4)" strokeWidth="1" strokeDasharray="2 2"/>
              <rect x="215" y="108" width="36" height="16" rx="2" fill="#1C2B3A" stroke="rgba(253,252,249,0.3)" strokeWidth="0.5"/>
              <text x="233" y="119" fill="#FDFCF9" fontFamily="DM Mono, monospace" fontSize="9" textAnchor="middle" fontWeight="500">25 km</text>

              {/* Diapaga marker (pulsing) */}
              <circle cx="260" cy="80" r="8" fill="#8B1A1A">
                <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite"/>
              </circle>
              <text x="275" y="75" fill="#8B1A1A" fontFamily="DM Mono, monospace" fontSize="9" letterSpacing="0.08em" fontWeight="500">DIAPAGA</text>
              <text x="275" y="86" fill="rgba(139,26,26,0.6)" fontFamily="DM Mono, monospace" fontSize="7">JNIM FOB</text>

              {/* Dapaong marker */}
              <circle cx="200" cy="180" r="5" fill="#C4892A"/>
              <text x="215" y="175" fill="rgba(196,137,42,0.8)" fontFamily="DM Mono, monospace" fontSize="8">Dapaong</text>
              <text x="215" y="185" fill="rgba(196,137,42,0.5)" fontFamily="DM Mono, monospace" fontSize="7">Regional HQ</text>

              {/* Lomé marker */}
              <circle cx="200" cy="420" r="5" fill="#C4892A"/>
              <text x="215" y="418" fill="rgba(196,137,42,0.8)" fontFamily="DM Mono, monospace" fontSize="8">Port of Lomé</text>
              <text x="215" y="428" fill="rgba(196,137,42,0.5)" fontFamily="DM Mono, monospace" fontSize="7">80% BF transit</text>

              {/* Legend */}
              <g transform="translate(20, 380)">
                <rect x="0" y="0" width="90" height="55" rx="3" fill="rgba(28,43,58,0.9)" stroke="rgba(196,137,42,0.2)" strokeWidth="0.5"/>
                <circle cx="15" cy="15" r="4" fill="#8B1A1A"/>
                <text x="25" y="18" fill="rgba(253,252,249,0.6)" fontFamily="DM Mono, monospace" fontSize="7">Threat</text>
                <circle cx="15" cy="30" r="3" fill="#C4892A"/>
                <text x="25" y="33" fill="rgba(253,252,249,0.6)" fontFamily="DM Mono, monospace" fontSize="7">Friendly</text>
                <line x1="10" y1="45" x2="20" y2="45" stroke="#C4892A" strokeWidth="1.5" strokeDasharray="3 2"/>
                <text x="25" y="48" fill="rgba(253,252,249,0.6)" fontFamily="DM Mono, monospace" fontSize="7">Corridor</text>
              </g>
            </svg>

            {/* Active threat badge */}
            <div className="absolute top-3 right-3 flex items-center gap-2 bg-slate/95 px-3 py-1.5 rounded border border-red/30">
              <div className="w-1.5 h-1.5 bg-red rounded-full animate-pulse-slow" />
              <span className="font-mono text-[18px] tracking-[0.1em] uppercase text-red">Active threat zone</span>
            </div>
          </div>

          {/* Info Panel */}
          <div className="w-[220px] flex flex-col gap-4">
            {/* Key stat card */}
            <div className="bg-red/10 border-l-[3px] border-red rounded-r-md p-4">
              <div className="font-mono text-[18px] tracking-[0.1em] uppercase text-red mb-2">
                Threat Proximity
              </div>
              <div className="font-serif text-5xl font-light text-red leading-none">
                25<span className="text-2xl ml-1">km</span>
              </div>
              <div className="text-[13px] text-white/60 mt-2 leading-snug">
                JNIM FOB to Togo border
              </div>
            </div>

            {/* Context card */}
            <div className="bg-white/[0.03] border border-amber/15 rounded-md p-4">
              <div className="font-mono text-[18px] tracking-[0.1em] uppercase text-amber-lt mb-2">
                Strategic Impact
              </div>
              <div className="text-[13px] text-white/70 leading-relaxed">
                Diapaga seizure places JNIM within strike range of the <span className="text-amber">Lomé–Ouagadougou corridor</span> — Burkina Faso's primary trade lifeline.
              </div>
            </div>

            {/* Timeline card */}
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-md p-4">
              <div className="font-mono text-[18px] tracking-[0.1em] uppercase text-white/80 mb-2">
                FOB Established
              </div>
              <div className="font-serif text-xl text-white/80">
                Early 2025
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
