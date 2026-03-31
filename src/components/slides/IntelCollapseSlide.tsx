'use client'

import { motion } from 'framer-motion'

const nodes = [
  { id: 'ecowas', label: 'ECOWAS', x: 50, y: 20, color: '#22C55E', status: 'Isolated' },
  { id: 'mali', label: 'Mali', x: 15, y: 50, color: '#DC2626', status: 'AES' },
  { id: 'bf', label: 'Burkina Faso', x: 50, y: 60, color: '#DC2626', status: 'AES' },
  { id: 'niger', label: 'Niger', x: 80, y: 50, color: '#DC2626', status: 'AES' },
  { id: 'togo', label: 'Togo', x: 35, y: 85, color: '#F59E0B', status: 'At Risk' },
  { id: 'benin', label: 'Benin', x: 65, y: 85, color: '#F59E0B', status: 'At Risk' },
]

export default function IntelCollapseSlide() {
  return (
    <div className="w-full h-full flex flex-col bg-slate">
      {/* Header */}
      <motion.div
        className="px-16 pt-10 pb-4 shrink-0"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-amber text-xs font-mono tracking-widest uppercase mb-2">Section 03 — The Problem</div>
        <h2 className="text-3xl font-bold text-paper">Intelligence Collapse</h2>
      </motion.div>

      <div className="flex-1 flex gap-10 px-16 pb-16 min-h-0">
        {/* Network diagram */}
        <motion.div
          className="flex-1 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full max-w-md">
              {/* Broken connections - AES to ECOWAS */}
              {[
                { from: nodes[1], to: nodes[0] },
                { from: nodes[2], to: nodes[0] },
                { from: nodes[3], to: nodes[0] },
              ].map((conn, i) => (
                <motion.line
                  key={i}
                  x1={conn.from.x}
                  y1={conn.from.y}
                  x2={conn.to.x}
                  y2={conn.to.y}
                  stroke="#DC2626"
                  strokeWidth="0.5"
                  strokeDasharray="2 2"
                  opacity={0.4}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                />
              ))}

              {/* Active connections - AES internal */}
              {[
                { from: nodes[1], to: nodes[2] },
                { from: nodes[2], to: nodes[3] },
                { from: nodes[1], to: nodes[3] },
              ].map((conn, i) => (
                <motion.line
                  key={`aes-${i}`}
                  x1={conn.from.x}
                  y1={conn.from.y}
                  x2={conn.to.x}
                  y2={conn.to.y}
                  stroke="#DC2626"
                  strokeWidth="1"
                  opacity={0.6}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                />
              ))}

              {/* Nodes */}
              {nodes.map((node, i) => (
                <motion.g
                  key={node.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                >
                  <circle cx={node.x} cy={node.y} r={5} fill={node.color} fillOpacity={0.2} stroke={node.color} strokeWidth={0.8} />
                  <text x={node.x} y={node.y + 8.5} textAnchor="middle" fill="#F5F3EE" fontSize="4" fontFamily="Inter">
                    {node.label}
                  </text>
                  <text x={node.x} y={node.y - 7} textAnchor="middle" fill={node.color} fontSize="2.5" fontFamily="Inter">
                    {node.status}
                  </text>
                </motion.g>
              ))}

              {/* "X" marks on broken connections */}
              {[{ x: 32, y: 35 }, { x: 50, y: 40 }, { x: 65, y: 35 }].map((pos, i) => (
                <motion.text
                  key={`x-${i}`}
                  x={pos.x}
                  y={pos.y}
                  textAnchor="middle"
                  fill="#DC2626"
                  fontSize="4"
                  fontWeight="bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                >
                  ✕
                </motion.text>
              ))}
            </svg>
          </div>

          {/* Legend */}
          <div className="absolute bottom-0 left-0 flex gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-px border-t-2 border-dashed border-threat-critical opacity-40" />
              <span className="text-ash text-xs">Severed link</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-px border-t-2 border-threat-critical" />
              <span className="text-ash text-xs">AES coalition</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Key facts */}
        <motion.div
          className="w-72 flex flex-col gap-4 shrink-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="bg-threat-critical/10 border border-threat-critical/30 rounded-lg p-5">
            <div className="text-threat-critical text-xs font-bold tracking-widest mb-3 uppercase">AES–ECOWAS Split</div>
            <p className="text-paper/80 text-sm leading-relaxed italic">
              &ldquo;...crippled the region&rsquo;s ability to share intelligence and coordinate cross-border operations.&rdquo;
            </p>
          </div>

          <div className="bg-slate border border-ash/20 rounded-lg p-5">
            <div className="text-ash text-xs font-bold tracking-widest mb-3 uppercase">AES Position (Official)</div>
            <p className="text-paper/80 text-sm leading-relaxed italic">
              &ldquo;No intention to extend [security] operations to coastal countries&rdquo;
            </p>
            <div className="mt-3 text-ash text-xs">
              — Meaning: Burkina Faso, Mali, Niger will not protect Togo
            </div>
          </div>

          <div className="bg-amber/10 border border-amber/30 rounded-lg p-5">
            <div className="text-amber text-xs font-bold tracking-widest mb-2 uppercase">The Result</div>
            <ul className="space-y-2 text-paper/80 text-sm">
              <li className="flex gap-2"><span className="text-threat-critical">→</span> No real-time threat data flowing to Lomé</li>
              <li className="flex gap-2"><span className="text-threat-critical">→</span> Regional coordination frameworks collapsed</li>
              <li className="flex gap-2"><span className="text-threat-critical">→</span> Togo operating intelligence-blind</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
