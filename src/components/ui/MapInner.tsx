'use client'

import { useEffect } from 'react'
import { MapContainer, TileLayer, Circle, Marker, Popup, Polyline } from 'react-leaflet'
import L from 'leaflet'
import { COORDINATES } from '@/lib/constants'

// Fix default marker icons
if (typeof window !== 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  delete (L.Icon.Default.prototype as any)._getIconUrl
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  })
}

const createIcon = (color: string, label: string) => {
  const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="36" viewBox="0 0 28 36">
    <path d="M14 0C6.27 0 0 6.27 0 14c0 10.5 14 22 14 22S28 24.5 28 14C28 6.27 21.73 0 14 0z" fill="${color}" stroke="rgba(0,0,0,0.3)" stroke-width="1"/>
    <circle cx="14" cy="14" r="6" fill="rgba(255,255,255,0.9)"/>
  </svg>`

  return L.divIcon({
    html: svgIcon,
    className: '',
    iconSize: [28, 36],
    iconAnchor: [14, 36],
    popupAnchor: [0, -36],
  })
}

interface MapInnerProps {
  zoom: number
  center: { lat: number; lng: number }
  showThreatRadius: boolean
  threatRadiusKm: number
}

// The Lomé-Ouagadougou corridor approximate path
const corridorPath: [number, number][] = [
  [6.1375, 1.2123], // Lomé
  [7.5, 1.1],
  [9.0, 0.8],
  [10.8624, 0.2075], // Dapaong
  [11.1, 0.0],       // Cinkassé
  [12.0731, 1.7828], // Diapaga
]

export default function MapInner({ zoom, center, showThreatRadius, threatRadiusKm }: MapInnerProps) {
  useEffect(() => {
    // Import leaflet CSS
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css'
    document.head.appendChild(link)
    return () => {
      document.head.removeChild(link)
    }
  }, [])

  return (
    <MapContainer
      center={[center.lat, center.lng]}
      zoom={zoom}
      style={{ height: '100%', width: '100%', minHeight: '350px' }}
      zoomControl={false}
      attributionControl={false}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        attribution=""
      />

      {/* Threat radius from Diapaga */}
      {showThreatRadius && (
        <>
          <Circle
            center={[COORDINATES.diapaga.lat, COORDINATES.diapaga.lng]}
            radius={threatRadiusKm * 1000}
            pathOptions={{
              color: '#DC2626',
              fillColor: '#DC2626',
              fillOpacity: 0.12,
              weight: 2,
              dashArray: '6 4',
            }}
          />
          <Circle
            center={[COORDINATES.diapaga.lat, COORDINATES.diapaga.lng]}
            radius={25000}
            pathOptions={{
              color: '#DC2626',
              fillColor: '#DC2626',
              fillOpacity: 0.18,
              weight: 2,
            }}
          />
        </>
      )}

      {/* Corridor path */}
      <Polyline
        positions={corridorPath}
        pathOptions={{
          color: '#C4892A',
          weight: 2,
          opacity: 0.7,
          dashArray: '8 4',
        }}
      />

      {/* Diapaga FOB - Critical */}
      <Marker
        position={[COORDINATES.diapaga.lat, COORDINATES.diapaga.lng]}
        icon={createIcon('#DC2626', 'FOB')}
      >
        <Popup>
          <div style={{ background: '#1C2B3A', color: '#F5F3EE', padding: '8px', borderRadius: '4px' }}>
            <strong style={{ color: '#DC2626' }}>Diapaga FOB</strong><br/>
            JNIM base of operations<br/>
            <span style={{ color: '#C4892A' }}>25km from Togo border</span>
          </div>
        </Popup>
      </Marker>

      {/* Dapaong */}
      <Marker
        position={[COORDINATES.dapaong.lat, COORDINATES.dapaong.lng]}
        icon={createIcon('#F59E0B', 'DAP')}
      >
        <Popup>
          <div style={{ background: '#1C2B3A', color: '#F5F3EE', padding: '8px', borderRadius: '4px' }}>
            <strong style={{ color: '#F59E0B' }}>Dapaong</strong><br/>
            Kpendjal regional capital<br/>
            Primary threat corridor node
          </div>
        </Popup>
      </Marker>

      {/* Cinkassé */}
      <Marker
        position={[COORDINATES.cinkasse.lat, COORDINATES.cinkasse.lng]}
        icon={createIcon('#EAB308', 'CIN')}
      >
        <Popup>
          <div style={{ background: '#1C2B3A', color: '#F5F3EE', padding: '8px', borderRadius: '4px' }}>
            <strong style={{ color: '#EAB308' }}>Cinkassé</strong><br/>
            Primary border crossing<br/>
            Burkina Faso / Togo
          </div>
        </Popup>
      </Marker>

      {/* Lomé */}
      <Marker
        position={[COORDINATES.lome.lat, COORDINATES.lome.lng]}
        icon={createIcon('#22C55E', 'LME')}
      >
        <Popup>
          <div style={{ background: '#1C2B3A', color: '#F5F3EE', padding: '8px', borderRadius: '4px' }}>
            <strong style={{ color: '#22C55E' }}>Lomé</strong><br/>
            Capital, Togo<br/>
            Strategic economic hub
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  )
}
