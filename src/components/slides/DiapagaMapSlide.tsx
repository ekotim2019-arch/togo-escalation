'use client';

import { motion } from 'framer-motion';
import { SlideWrapper } from '../SlideWrapper';

export default function DiapagaMapSlide() {
  return (
    <SlideWrapper className="p-8">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="mb-5">
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

        {/* Map + Info Panel */}
        <div className="flex gap-6">
          {/* Geographic Map */}
          <div className="flex-1 relative bg-slate/60 border border-amber/10 rounded-lg overflow-hidden" style={{ minHeight: '420px' }}>
            <svg viewBox="0 0 580 460" className="w-full h-full" style={{ display: 'block' }}>
              <defs>
                {/* JNIM territory gradient — NE origin */}
                <radialGradient id="jnim-territory" cx="72%" cy="20%" r="65%">
                  <stop offset="0%" stopColor="#8B1A1A" stopOpacity="0.28" />
                  <stop offset="55%" stopColor="#8B1A1A" stopOpacity="0.10" />
                  <stop offset="100%" stopColor="#8B1A1A" stopOpacity="0.01" />
                </radialGradient>
                {/* Terrain wash — Burkina side slightly warmer */}
                <linearGradient id="bf-wash" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3a1a0a" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#1C2B3A" stopOpacity="0" />
                </linearGradient>
                <marker id="arrow-threat" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                  <path d="M0,1 L5,3.5 L0,6" fill="none" stroke="#8B1A1A" strokeWidth="1.2" strokeOpacity="0.55" />
                </marker>
              </defs>

              {/* ── BURKINA FASO background ── */}
              <path
                d="M0,0 L580,0 L580,218 Q520,208 460,214 Q400,220 340,210 Q280,202 220,208 Q160,214 100,207 Q50,202 0,210 Z"
                fill="url(#bf-wash)"
              />
              {/* JNIM territory overlay */}
              <path
                d="M0,0 L580,0 L580,218 Q520,208 460,214 Q400,220 340,210 Q280,202 220,208 Q160,214 100,207 Q50,202 0,210 Z"
                fill="url(#jnim-territory)"
              />

              {/* ── RIVERS ── */}
              {/* Oti / Pendjari River — E-W through northern Togo ~y=375 */}
              <path
                d="M0,370 Q60,360 110,372 Q160,382 220,371 Q280,360 340,368 Q400,377 460,364 Q520,353 580,360"
                stroke="rgba(80,130,180,0.38)" strokeWidth="2.5" fill="none" strokeLinecap="round"
              />
              <text x="420" y="358" fill="rgba(80,130,180,0.45)" fontFamily="DM Mono, monospace" fontSize="8.5" letterSpacing="0.06em">Oti R.</text>

              {/* Upstream tributary (Pendjari) in Burkina */}
              <path
                d="M340,210 Q370,195 400,188 Q430,182 470,188"
                stroke="rgba(80,130,180,0.28)" strokeWidth="1.5" fill="none"
              />

              {/* ── TOGO–BURKINA BORDER (irregular dashed) ── */}
              <path
                d="M0,210 Q40,205 80,212 Q120,218 160,208 Q200,200 240,207 Q278,213 318,206 Q358,200 398,207 Q438,214 478,208 Q520,203 580,210"
                stroke="rgba(253,252,249,0.55)" strokeWidth="1.5" strokeDasharray="9 5" fill="none"
              />
              <text x="490" y="227" fill="rgba(253,252,249,0.38)" fontFamily="DM Mono, monospace" fontSize="8.5" letterSpacing="0.1em">BORDER</text>

              {/* ── ROADS ── */}
              {/* N18 Highway — Dapaong north to Cinkassé crossing */}
              <path
                d="M188,450 L186,400 L185,360 L183,310 L181,270 L179,240 L177,215"
                stroke="rgba(196,137,42,0.55)" strokeWidth="3" fill="none" strokeLinecap="round"
              />
              {/* N18 continues into Burkina (dashed) */}
              <path
                d="M177,215 L175,185 L173,155 L171,118"
                stroke="rgba(196,137,42,0.28)" strokeWidth="2" fill="none" strokeDasharray="7 5"
              />
              {/* N18 label badge */}
              <rect x="126" y="318" width="38" height="18" rx="3" fill="rgba(20,35,50,0.92)" stroke="rgba(196,137,42,0.35)" strokeWidth="0.8" />
              <text x="145" y="331" fill="rgba(196,137,42,0.9)" fontFamily="DM Mono, monospace" fontSize="9.5" textAnchor="middle" fontWeight="600">N18</text>

              {/* East–West road in Burkina (Ouaga–Fada–Diapaga axis) */}
              <path
                d="M171,118 Q220,112 280,116 Q340,120 395,112 Q435,107 480,104"
                stroke="rgba(253,252,249,0.22)" strokeWidth="1.8" fill="none" strokeDasharray="7 5"
              />

              {/* Road Dapaong → Mango (east) */}
              <path
                d="M192,285 Q240,280 290,278 Q340,277 385,283"
                stroke="rgba(253,252,249,0.18)" strokeWidth="1.5" fill="none"
              />

              {/* ── LOMÉ–OUAGADOUGOU CORRIDOR (main trade artery) ── */}
              <path
                d="M188,460 L186,400 L185,360 L183,310 L181,270 L179,240 L177,215 L175,175 L173,130 L171,80"
                stroke="rgba(196,137,42,0.30)" strokeWidth="2" fill="none" strokeDasharray="12 7"
              />

              {/* ── JNIM THREAT LABELS ── */}
              <text x="82" y="85" fill="rgba(139,26,26,0.55)" fontFamily="DM Mono, monospace" fontSize="10" letterSpacing="0.14em" fontWeight="500">BURKINA FASO</text>
              <text x="82" y="100" fill="rgba(139,26,26,0.38)" fontFamily="DM Mono, monospace" fontSize="8" letterSpacing="0.08em">~60% JNIM-controlled territory</text>

              {/* ── THREAT RADIUS AROUND FOB ── */}
              {/* Outer animated sweep */}
              <circle cx="430" cy="100" r="68" fill="#8B1A1A" fillOpacity="0.07" stroke="#8B1A1A" strokeWidth="1" strokeDasharray="5 4">
                <animate attributeName="r" values="62;76;62" dur="4s" repeatCount="indefinite" />
                <animate attributeName="fillOpacity" values="0.09;0.03;0.09" dur="4s" repeatCount="indefinite" />
              </circle>
              {/* Inner ring */}
              <circle cx="430" cy="100" r="20" fill="none" stroke="#8B1A1A" strokeOpacity="0.35" strokeWidth="1.2" />

              {/* 25 km distance line to border */}
              <line x1="430" y1="100" x2="430" y2="208" stroke="rgba(253,252,249,0.30)" strokeWidth="1" strokeDasharray="3 3" />
              {/* Distance label */}
              <rect x="434" y="146" width="46" height="18" rx="3" fill="#1C2B3A" stroke="rgba(253,252,249,0.28)" strokeWidth="0.8" />
              <text x="457" y="159" fill="#FDFCF9" fontFamily="DM Mono, monospace" fontSize="9.5" textAnchor="middle" fontWeight="600">25 km</text>

              {/* ── DIAPAGA FOB MARKER ── */}
              <circle cx="430" cy="100" r="9" fill="#8B1A1A">
                <animate attributeName="r" values="7;11;7" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1;0.65;1" dur="2s" repeatCount="indefinite" />
              </circle>
              {/* Label box */}
              <rect x="447" y="86" width="78" height="30" rx="3" fill="rgba(20,35,50,0.94)" stroke="rgba(139,26,26,0.45)" strokeWidth="0.8" />
              <text x="486" y="99" fill="#8B1A1A" fontFamily="DM Mono, monospace" fontSize="9.5" letterSpacing="0.08em" textAnchor="middle" fontWeight="700">DIAPAGA</text>
              <text x="486" y="112" fill="rgba(139,26,26,0.70)" fontFamily="DM Mono, monospace" fontSize="8" textAnchor="middle">JNIM FOB</text>

              {/* ── INCURSION VECTORS ── */}
              <path d="M425,116 Q360,162 280,195 L230,210" stroke="#8B1A1A" strokeWidth="1.8" strokeOpacity="0.40" fill="none" markerEnd="url(#arrow-threat)" />
              <path d="M415,118 Q350,160 270,197 L215,210" stroke="#8B1A1A" strokeWidth="1" strokeOpacity="0.20" fill="none" />
              <path d="M420,118 Q390,155 370,185 Q350,200 330,210" stroke="#8B1A1A" strokeWidth="1" strokeOpacity="0.18" fill="none" markerEnd="url(#arrow-threat)" />

              {/* ── CITIES ── */}

              {/* DAPAONG */}
              <circle cx="185" cy="288" r="7" fill="#C4892A" />
              <circle cx="185" cy="288" r="12" fill="none" stroke="#C4892A" strokeOpacity="0.30" strokeWidth="1.2" />
              <rect x="200" y="277" width="72" height="28" rx="3" fill="rgba(20,35,50,0.90)" stroke="rgba(196,137,42,0.28)" strokeWidth="0.6" />
              <text x="236" y="290" fill="rgba(196,137,42,0.95)" fontFamily="DM Mono, monospace" fontSize="9.5" textAnchor="middle" fontWeight="600">DAPAONG</text>
              <text x="236" y="301" fill="rgba(196,137,42,0.50)" fontFamily="DM Mono, monospace" fontSize="8" textAnchor="middle">Regional HQ</text>

              {/* CINKASSÉ border crossing */}
              <rect x="172" y="206" width="11" height="11" rx="2" fill="#C4892A" fillOpacity="0.85" />
              <rect x="118" y="220" width="72" height="16" rx="2" fill="rgba(20,35,50,0.88)" stroke="rgba(196,137,42,0.22)" strokeWidth="0.6" />
              <text x="154" y="231" fill="rgba(196,137,42,0.70)" fontFamily="DM Mono, monospace" fontSize="8.5" textAnchor="middle">Cinkassé ×</text>

              {/* KANTCHARI (BF) — key logistics hub */}
              <circle cx="298" cy="148" r="4" fill="rgba(253,252,249,0.38)" />
              <text x="308" y="144" fill="rgba(253,252,249,0.38)" fontFamily="DM Mono, monospace" fontSize="8.5">Kantchari</text>
              <text x="308" y="154" fill="rgba(253,252,249,0.22)" fontFamily="DM Mono, monospace" fontSize="7.5">BF logistics</text>

              {/* MANGO (Sansanné-Mango, Togo) */}
              <circle cx="382" cy="292" r="4.5" fill="rgba(196,137,42,0.50)" />
              <text x="393" y="289" fill="rgba(196,137,42,0.48)" fontFamily="DM Mono, monospace" fontSize="8.5">Mango</text>

              {/* ── REGION LABELS ── */}
              <text x="130" y="255" fill="rgba(253,252,249,0.14)" fontFamily="DM Mono, monospace" fontSize="10" letterSpacing="0.12em">KPENDJAL</text>
              <text x="100" y="435" fill="rgba(253,252,249,0.10)" fontFamily="DM Mono, monospace" fontSize="16" letterSpacing="0.25em" fontWeight="600">TOGO</text>

              {/* BENIN edge label */}
              <text x="553" y="370" fill="rgba(253,252,249,0.10)" fontFamily="DM Mono, monospace" fontSize="10" letterSpacing="0.15em" transform="rotate(90 553 370)">BENIN</text>

              {/* ── LEGEND ── */}
              <rect x="8" y="352" width="112" height="100" rx="4" fill="rgba(16,28,40,0.94)" stroke="rgba(196,137,42,0.22)" strokeWidth="0.8" />
              <text x="64" y="368" fill="rgba(253,252,249,0.45)" fontFamily="DM Mono, monospace" fontSize="8.5" textAnchor="middle" letterSpacing="0.1em">LEGEND</text>
              {/* JNIM FOB */}
              <circle cx="24" cy="383" r="5" fill="#8B1A1A" />
              <text x="35" y="387" fill="rgba(253,252,249,0.60)" fontFamily="DM Mono, monospace" fontSize="8">JNIM FOB</text>
              {/* Strategic site */}
              <circle cx="24" cy="400" r="4.5" fill="#C4892A" />
              <text x="35" y="404" fill="rgba(253,252,249,0.60)" fontFamily="DM Mono, monospace" fontSize="8">Strategic site</text>
              {/* N18 */}
              <line x1="16" y1="417" x2="34" y2="417" stroke="rgba(196,137,42,0.65)" strokeWidth="2.5" />
              <text x="39" y="420" fill="rgba(253,252,249,0.60)" fontFamily="DM Mono, monospace" fontSize="8">N18 Highway</text>
              {/* River */}
              <line x1="16" y1="433" x2="34" y2="433" stroke="rgba(80,130,180,0.5)" strokeWidth="2" />
              <text x="39" y="436" fill="rgba(253,252,249,0.60)" fontFamily="DM Mono, monospace" fontSize="8">River</text>
              {/* Threat zone */}
              <rect x="16" y="440" width="18" height="10" rx="1.5" fill="rgba(139,26,26,0.22)" stroke="#8B1A1A" strokeWidth="0.7" />
              <text x="39" y="449" fill="rgba(253,252,249,0.60)" fontFamily="DM Mono, monospace" fontSize="8">JNIM territory</text>

              {/* ── SCALE BAR ── */}
              <line x1="470" y1="445" x2="560" y2="445" stroke="rgba(253,252,249,0.38)" strokeWidth="1.5" />
              <line x1="470" y1="441" x2="470" y2="449" stroke="rgba(253,252,249,0.38)" strokeWidth="1.5" />
              <line x1="515" y1="441" x2="515" y2="449" stroke="rgba(253,252,249,0.28)" strokeWidth="1" />
              <line x1="560" y1="441" x2="560" y2="449" stroke="rgba(253,252,249,0.38)" strokeWidth="1.5" />
              <text x="515" y="458" fill="rgba(253,252,249,0.38)" fontFamily="DM Mono, monospace" fontSize="8.5" textAnchor="middle">50 km</text>

              {/* ── NORTH ARROW ── */}
              <text x="553" y="42" fill="rgba(253,252,249,0.50)" fontFamily="DM Mono, monospace" fontSize="12" textAnchor="middle" fontWeight="700">N</text>
              <path d="M553,47 L549,63 L553,58 L557,63 Z" fill="rgba(253,252,249,0.40)" />
            </svg>

            {/* Active threat badge overlay */}
            <div className="absolute top-3 right-3 flex items-center gap-2 bg-slate/95 px-3 py-1.5 rounded border border-red/30">
              <div className="w-1.5 h-1.5 bg-red rounded-full animate-pulse-slow" />
              <span className="font-mono text-[18px] tracking-[0.1em] uppercase text-red font-bold">Active threat zone</span>
            </div>
          </div>

          {/* Info Panel */}
          <div className="w-[230px] flex flex-col gap-6">
            {/* Key stat */}
            <div className="bg-red/10 border-l-[3px] border-red rounded-r-md p-4">
              <div className="font-mono text-[18px] tracking-[0.1em] uppercase text-red font-bold mb-2">
                Threat Proximity
              </div>
              <div className="font-serif text-5xl font-light text-red leading-none">
                25<span className="text-2xl ml-1">km</span>
              </div>
              <div className="text-[14px] text-white/70 mt-2 leading-snug">
                JNIM FOB to Togo border
              </div>
            </div>

            {/* Strategic impact */}
            <div className="bg-white/[0.03] border border-amber/15 rounded-md p-4">
              <div className="font-mono text-[18px] tracking-[0.1em] uppercase text-amber-lt mb-2">
                Strategic Impact
              </div>
              <div className="text-[14px] text-white/75 leading-relaxed">
                Diapaga seizure places JNIM within strike range of the <span className="text-amber">Lomé–Ouagadougou corridor</span> — Burkina Faso&apos;s primary trade lifeline.
              </div>
            </div>

            {/* FOB established */}
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-md p-4">
              <div className="font-mono text-[18px] tracking-[0.1em] uppercase text-white/80 mb-2">
                FOB Established
              </div>
              <div className="font-serif text-xl text-white/80">
                Early 2025
              </div>
            </div>

            {/* N18 risk */}
            <div className="bg-red/[0.05] border border-red/15 rounded-md p-4">
              <div className="font-mono text-[18px] tracking-[0.1em] uppercase text-red font-bold mb-2">
                N18 Corridor
              </div>
              <div className="text-[14px] text-white/70 leading-relaxed">
                IED strikes up <span className="text-red">+40%</span> along N18 approaching Cinkassé crossing.
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
