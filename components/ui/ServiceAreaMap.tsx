"use client";

import { motion } from "framer-motion";
import { siteConfig } from "../../lib/site-config";

// Hand-placed, stylized positions (not literal geography) radiating out
// from Austin as the hub — reads as a coverage diagram rather than a
// plain embedded map, matching the site's architectural/blueprint feel.
const nodes = [
  { name: "Austin", x: 200, y: 200, hub: true },
  { name: "Cedar Park", x: 120, y: 130 },
  { name: "Leander", x: 95, y: 95 },
  { name: "Round Rock", x: 235, y: 110 },
  { name: "Pflugerville", x: 260, y: 150 },
  { name: "Georgetown", x: 220, y: 55 },
  { name: "Temple", x: 270, y: 30 },
  { name: "Killeen", x: 155, y: 25 },
  { name: "Waco", x: 300, y: -20 },
  { name: "San Marcos", x: 165, y: 320 },
];

export default function ServiceAreaMap() {
  return (
    <div className="relative aspect-square w-full overflow-hidden border border-charcoal-2 bg-ink">
      {/* blueprint grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(237,234,227,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(237,234,227,0.6) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(122,31,39,0.22), transparent 60%)",
        }}
      />

      <svg viewBox="-40 -60 380 420" className="relative h-full w-full">
        {/* concentric service-radius rings around the hub */}
        {[60, 110, 160].map((r) => (
          <circle
            key={r}
            cx={200}
            cy={200}
            r={r}
            fill="none"
            stroke="rgba(237,234,227,0.14)"
            strokeDasharray="2 5"
          />
        ))}

        {/* connecting lines from hub */}
        {nodes
          .filter((n) => !n.hub)
          .map((n) => (
            <line
              key={n.name}
              x1={200}
              y1={200}
              x2={n.x}
              y2={n.y}
              stroke="rgba(122,31,39,0.5)"
              strokeWidth={1}
            />
          ))}

        {/* nodes */}
        {nodes.map((n, i) => (
          <g key={n.name}>
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={n.hub ? 7 : 4}
              fill={n.hub ? "#7A1F27" : "#EDEAE3"}
              stroke={n.hub ? "#EDEAE3" : "#7A1F27"}
              strokeWidth={n.hub ? 2 : 1.5}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            />
            {n.hub && (
              <circle cx={n.x} cy={n.y} r={13} fill="none" stroke="#7A1F27" strokeWidth={1}>
                <animate attributeName="r" values="9;20;9" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.7;0;0.7" dur="3s" repeatCount="indefinite" />
              </circle>
            )}
          </g>
        ))}

        {/* labels */}
        {nodes.map((n) => (
          <text
            key={n.name}
            x={n.x}
            y={n.hub ? n.y - 14 : n.y - 9}
            textAnchor="middle"
            fontSize={n.hub ? 11 : 8}
            fontFamily="var(--font-mono)"
            letterSpacing={n.hub ? 1.5 : 0.5}
            fill={n.hub ? "#EDEAE3" : "#8A8A85"}
            style={{ textTransform: "uppercase" }}
          >
            {n.name}
          </text>
        ))}
      </svg>

      <div className="absolute bottom-4 left-4 font-mono text-[10px] tracking-[0.18em] text-steel uppercase">
        {siteConfig.geo.coordLabel}
      </div>
      <div className="absolute top-4 right-4 border border-charcoal-2 bg-ink/70 px-2.5 py-1 font-mono text-[10px] tracking-[0.14em] text-concrete/70 uppercase backdrop-blur-sm">
        Service Radius
      </div>
    </div>
  );
}
