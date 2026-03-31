export const BRAND = {
  name: 'Kairos Arc',
  tagline: 'Predictive Geopolitical Intelligence',
  docId: 'KA-2026-03-001',
}

export const THREAT_LEVEL = {
  current: 7.5,
  baseline: 5.5,
  delta: '+2.0',
  status: 'ESCALATING' as const,
  label: 'HIGH',
}

export const STATISTICS = {
  casualties2025: 60,
  jnimControl: 60,
  diapagaDistance: 25,
  leadTimeDays: 420,
  conventionalLeadDays: 17,
  jnimFighters: { min: 6000, max: 8000 },
  februaryAttacks: 30,
  februaryKIA: 120,
  tensionBaseline: 5.5,
  tensionCurrent: 7.5,
}

export const COORDINATES = {
  diapaga: { lat: 12.0731, lng: 1.7828, label: 'Diapaga FOB' },
  dapaong: { lat: 10.8624, lng: 0.2075, label: 'Dapaong' },
  lome: { lat: 6.1375, lng: 1.2123, label: 'Lomé' },
  kpendjal: { lat: 10.8, lng: 0.5, label: 'Kpendjal Prefecture' },
  cinkasse: { lat: 11.1, lng: 0.0, label: 'Cinkassé Border' },
  mapCenter: { lat: 11.0, lng: 0.8 },
}

export const SCENARIO_PROBABILITIES = {
  bestCase: 15,
  mostLikely: 60,
  worstCase: 25,
}

export const COLORS = {
  slate: '#1C2B3A',
  amber: '#C4892A',
  ink: '#0D0D0B',
  paper: '#F5F3EE',
  ash: '#9A9A8E',
  critical: '#DC2626',
  elevated: '#F59E0B',
  moderate: '#EAB308',
  low: '#22C55E',
}
