export interface Incident {
  date: string
  location: string
  description: string
  casualties?: number
  severity: 'critical' | 'elevated' | 'moderate'
  highlight?: boolean
}

export const incidents: Incident[] = [
  {
    date: 'Oct 2025',
    location: 'Kpendjal Region',
    description: 'JNIM probing operations along Togo border corridor intensify',
    severity: 'elevated',
  },
  {
    date: 'Nov 2025',
    location: 'Diapaga district',
    description: 'Katiba Hanifa forces conduct coordinated IED campaign on supply routes',
    casualties: 8,
    severity: 'elevated',
  },
  {
    date: 'Dec 2025',
    location: 'Burkina-Togo border',
    description: 'Displacement spike — 4,200 civilians cross into Kpendjal',
    severity: 'elevated',
  },
  {
    date: 'Jan 2026',
    location: 'Multiple districts',
    description: 'Market disruptions and supply chain collapse in border towns',
    severity: 'moderate',
  },
  {
    date: 'Feb 2026',
    location: 'Northern Burkina Faso',
    description: 'Major JNIM offensive — 30+ coordinated attacks across 72-hour window',
    casualties: 120,
    severity: 'critical',
    highlight: true,
  },
  {
    date: 'Feb 2026',
    location: 'Ouagadougou corridor',
    description: 'Lomé-Ouagadougou supply corridor interdiction attempts',
    casualties: 14,
    severity: 'critical',
  },
  {
    date: 'Mar 2026',
    location: 'Kpendjal-Ouest',
    description: 'Armed group movement detected within 15km of Togolese territory',
    severity: 'critical',
  },
]

export interface ComparisonPhase {
  phase: string
  beninYear: string
  togoYear: string
  description: string
}

export const beninComparison = {
  phases: [
    {
      phase: 'First Incursion',
      beninYear: '2019',
      togoYear: '2021',
      description: 'Initial cross-border raid, limited casualties',
    },
    {
      phase: 'Probe & Assess',
      beninYear: '2020–2021',
      togoYear: '2022–2023',
      description: 'Reconnaissance, intelligence gathering, local recruitment',
    },
    {
      phase: 'Network Building',
      beninYear: '2021–2022',
      togoYear: '2023–2024',
      description: 'Supply lines, safe houses, sympathizer networks',
    },
    {
      phase: 'Escalation',
      beninYear: '2022–2023',
      togoYear: '2024–2025',
      description: 'Coordinated attacks, targeted assassinations',
    },
    {
      phase: 'Operational Presence',
      beninYear: '2023–2024',
      togoYear: '2025–?',
      description: 'Sustained campaign, territorial control attempts',
    },
    {
      phase: 'Catastrophic',
      beninYear: '2024–2025',
      togoYear: '2026–2027?',
      description: 'State capacity overwhelmed, mass displacement',
    },
  ],
  beninNote: '6 years to catastrophe',
  togoNote: 'Faster trajectory — 4–5 years',
  warning: 'If the pattern holds: 2026–2027',
}

export interface EarlyWarningIndicator {
  category: string
  icon: string
  leadTime: string
  leadTimeDays: string
  indicators: string[]
  threshold: string
}

export const earlyWarningIndicators: EarlyWarningIndicator[] = [
  {
    category: 'Population Displacement',
    icon: '🏃',
    leadTime: '7–14 days',
    leadTimeDays: '7–14',
    indicators: [
      'Unusual movement at known crossing points',
      'Livestock being moved to southern areas',
      'Market vendor abandonment in border towns',
      'School attendance collapse (>40% drop)',
      'Funeral postponements / family separations',
    ],
    threshold: 'Tripwire fires when 3+ indicators active simultaneously',
  },
  {
    category: 'Market Disruption',
    icon: '📊',
    leadTime: '3–10 days',
    leadTimeDays: '3–10',
    indicators: [
      'Fuel scarcity and price spikes (>30%)',
      'Staple food availability collapse',
      'Money transfer service suspensions',
      'Mobile network degradation patterns',
      'Merchant credit withdrawal',
    ],
    threshold: 'Tripwire fires when price anomaly >2σ from baseline',
  },
  {
    category: 'Armed Group Movement',
    icon: '⚠️',
    leadTime: '24–72 hours',
    leadTimeDays: '24–72h',
    indicators: [
      'SIGINT pattern changes along known routes',
      'Motorbike convoy sightings near border',
      'Military-age male congregation at key nodes',
      'Communications blackout in specific cells',
      'Informant network activation signals',
    ],
    threshold: 'Immediate FLASH alert — no threshold required',
  },
]

export interface Requirement {
  number: number
  title: string
  deliverables: string[]
}

export const requirements: Requirement[] = [
  {
    number: 1,
    title: 'Threat Mapping & Pattern Analysis',
    deliverables: [
      'Weekly geo-referenced incident database',
      'Pattern-of-life overlays for Katiba Hanifa',
      'Attack typology classification system',
    ],
  },
  {
    number: 2,
    title: 'Human Terrain & Network Intelligence',
    deliverables: [
      'Key node identification (commanders, facilitators)',
      'Sympathizer network mapping',
      'Community vulnerability assessments',
    ],
  },
  {
    number: 3,
    title: 'Early Warning Indicators',
    deliverables: [
      '21-indicator tripwire framework',
      'Automated threshold alerts',
      'Daily indicator dashboard',
    ],
  },
  {
    number: 4,
    title: 'Cross-border Monitoring',
    deliverables: [
      'Kpendjal/Kpendjal-Ouest coverage',
      'Cinkassé corridor tracking',
      'Diapaga FOB monitoring (25km radius)',
    ],
  },
  {
    number: 5,
    title: 'Strategic Assessments',
    deliverables: [
      'Monthly situation reports',
      'Quarterly strategic forecasts',
      'Scenario probability modeling',
    ],
  },
  {
    number: 6,
    title: 'Capacity Support',
    deliverables: [
      'Analyst training modules',
      'Indicator recognition workshops',
      'Secure communications protocols',
    ],
  },
]
