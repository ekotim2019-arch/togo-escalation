'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface TensionGaugeProps {
  value: number
  max?: number
  label?: string
  status?: string
  size?: number
}

export default function TensionGauge({
  value,
  max = 10,
  label = 'Tension Score',
  status = 'ESCALATING',
  size = 200,
}: TensionGaugeProps) {
  const [animated, setAnimated] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(value), 300)
    return () => clearTimeout(timer)
  }, [value])

  const percentage = animated / max
  // SVG arc parameters
  const cx = size / 2
  const cy = size / 2 + 20
  const r = (size / 2) - 24
  const startAngle = -210
  const endAngle = 30
  const totalAngle = endAngle - startAngle // 240 degrees
  const currentAngle = startAngle + totalAngle * (value / max)

  function polarToCartesian(angle: number) {
    const rad = (angle * Math.PI) / 180
    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad),
    }
  }

  function describeArc(start: number, end: number) {
    const s = polarToCartesian(start)
    const e = polarToCartesian(end)
    const largeArc = end - start > 180 ? 1 : 0
    return `M ${s.x} ${s.y} A ${r} ${r} 0 ${largeArc} 1 ${e.x} ${e.y}`
  }

  const needleEnd = polarToCartesian(startAngle + totalAngle * (animated / max))

  // Color based on value
  const getColor = (val: number) => {
    if (val >= 8) return '#DC2626'
    if (val >= 7) return '#F59E0B'
    if (val >= 5) return '#EAB308'
    return '#22C55E'
  }

  const color = getColor(value)

  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size * 0.75} viewBox={`0 0 ${size} ${size * 0.75}`}>
        {/* Background arc */}
        <path
          d={describeArc(startAngle, endAngle)}
          fill="none"
          stroke="#1C2B3A"
          strokeWidth={12}
          strokeLinecap="round"
        />
        {/* Colored arc */}
        <motion.path
          d={describeArc(startAngle, startAngle + totalAngle * (animated / max))}
          fill="none"
          stroke={color}
          strokeWidth={12}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
        />
        {/* Needle */}
        <motion.line
          x1={cx}
          y1={cy}
          x2={needleEnd.x}
          y2={needleEnd.y}
          stroke="#F5F3EE"
          strokeWidth={2}
          strokeLinecap="round"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        />
        {/* Center dot */}
        <circle cx={cx} cy={cy} r={6} fill="#F5F3EE" />
        {/* Value text */}
        <text
          x={cx}
          y={cy - 30}
          textAnchor="middle"
          fill="#F5F3EE"
          fontSize={size * 0.18}
          fontWeight="700"
          fontFamily="Inter"
        >
          {value}
        </text>
        <text
          x={cx}
          y={cy - 12}
          textAnchor="middle"
          fill="#9A9A8E"
          fontSize={size * 0.08}
          fontFamily="Inter"
        >
          / {max}
        </text>
        {/* Min/Max labels */}
        <text x={polarToCartesian(startAngle).x} y={polarToCartesian(startAngle).y + 16} textAnchor="middle" fill="#9A9A8E" fontSize={size * 0.07} fontFamily="Inter">0</text>
        <text x={polarToCartesian(endAngle).x} y={polarToCartesian(endAngle).y + 16} textAnchor="middle" fill="#9A9A8E" fontSize={size * 0.07} fontFamily="Inter">{max}</text>
      </svg>
      <div className="text-center -mt-2">
        <div className="text-ash text-sm tracking-widest uppercase">{label}</div>
        <div
          className="text-xs font-bold tracking-widest mt-1 px-3 py-1 rounded-full"
          style={{ color, backgroundColor: `${color}22`, border: `1px solid ${color}44` }}
        >
          {status}
        </div>
      </div>
    </div>
  )
}
