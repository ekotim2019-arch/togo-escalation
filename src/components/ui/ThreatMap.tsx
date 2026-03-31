'use client'

import dynamic from 'next/dynamic'
import { COORDINATES } from '@/lib/constants'

// Dynamically import to avoid SSR issues with Leaflet
const MapInner = dynamic(() => import('./MapInner'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-slate/50 rounded-lg flex items-center justify-center">
      <div className="text-ash text-sm tracking-widest animate-pulse">LOADING MAP...</div>
    </div>
  ),
})

interface ThreatMapProps {
  className?: string
  zoom?: number
  center?: { lat: number; lng: number }
  showThreatRadius?: boolean
  threatRadiusKm?: number
}

export default function ThreatMap({
  className = '',
  zoom = 7,
  center = COORDINATES.mapCenter,
  showThreatRadius = true,
  threatRadiusKm = 50,
}: ThreatMapProps) {
  return (
    <div className={`relative rounded-xl overflow-hidden border border-white/10 shadow-2xl ${className}`}>
      {/* Bottom gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate/40 pointer-events-none z-10" />
      <MapInner
        zoom={zoom}
        center={center}
        showThreatRadius={showThreatRadius}
        threatRadiusKm={threatRadiusKm}
      />
      {/* Overlay label */}
      <div className="absolute top-3 left-3 z-[1000]">
        <div className="bg-slate/90 border border-amber/30 rounded px-2 py-1 shadow-dramatic">
          <span className="text-amber text-xs font-mono tracking-widest">THREAT MAP — CLASSIFIED</span>
        </div>
      </div>
    </div>
  )
}
