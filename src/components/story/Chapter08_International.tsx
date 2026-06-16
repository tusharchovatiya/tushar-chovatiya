import ChapterShell from "./ChapterShell";
import { motion } from "framer-motion";
import { Globe2, Slack, Workflow } from "lucide-react";

const nodes = [
  { x: 80, y: 130, label: "Quebec" },
  { x: 130, y: 180, label: "Boston" },
  { x: 230, y: 110, label: "Paris" },
  { x: 260, y: 200, label: "Surat" },
  { x: 200, y: 250, label: "Mumbai" },
];

const Chapter08_International = () => {
  return (
    <ChapterShell id="ch8" index="08" title="Across Time Zones" subtitle="Working with teams scattered across continents.">
      <div className="grid md:grid-cols-5 gap-10 items-center">
        {/* Globe */}
        <div className="md:col-span-3 relative aspect-[4/3] rounded-3xl glass gradient-border overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <svg viewBox="0 0 360 320" className="absolute inset-0 w-full h-full">
            <defs>
              <radialGradient id="globeGrad">
                <stop offset="0" stopColor="hsl(186 100% 50% / 0.2)" />
                <stop offset="1" stopColor="hsl(186 100% 50% / 0)" />
              </radialGradient>
            </defs>
            <circle cx="180" cy="170" r="120" fill="url(#globeGrad)" />
            <circle cx="180" cy="170" r="120" fill="none" stroke="hsl(186 100% 60% / 0.3)" />
            {/* latitude lines */}
            {[40, 80, 120, 160, 200].map((r) => (
              <ellipse key={r} cx="180" cy="170" rx="120" ry={r * 0.3} fill="none" stroke="hsl(186 100% 60% / 0.1)" />
            ))}
            {/* longitudes */}
            {[20, 50, 80, 110, 140].map((rx) => (
              <ellipse key={rx} cx="180" cy="170" rx={rx} ry="120" fill="none" stroke="hsl(186 100% 60% / 0.1)" />
            ))}
            {/* connection lines */}
            {nodes.map((a, i) =>
              nodes.slice(i + 1).map((b) => (
                <motion.line
                  key={`${a.label}-${b.label}`}
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.6 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                  stroke="hsl(280 90% 70%)" strokeWidth="0.8" strokeDasharray="3 3"
                />
              ))
            )}
            {/* nodes */}
            {nodes.map((n, i) => (
              <g key={n.label}>
                <motion.circle
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.15 }}
                  cx={n.x} cy={n.y} r="5"
                  fill={n.label === "Surat" ? "hsl(280 90% 70%)" : "hsl(186 100% 60%)"}
                />
                <circle cx={n.x} cy={n.y} r="10" fill="none" stroke={n.label === "Surat" ? "hsl(280 90% 70%)" : "hsl(186 100% 60%)"} strokeWidth="1">
                  <animate attributeName="r" values="10;18;10" dur="2.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.8;0;0.8" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <text x={n.x + 10} y={n.y - 8} fill="hsl(210 30% 80%)" fontSize="10" fontFamily="JetBrains Mono">
                  {n.label}
                </text>
              </g>
            ))}
          </svg>
        </div>

        <div className="md:col-span-2 space-y-5">
          <p className="text-lg text-foreground/85 font-light">
            Slack threads at midnight. Stand-ups at sunrise. Sprint planning in three accents.
          </p>
          <div className="space-y-3">
            {[
              { icon: Slack, label: "Async-first communication" },
              { icon: Workflow, label: "Asana · Jira · Agile delivery" },
              { icon: Globe2, label: "Clients in Quebec, US, EU" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 glass px-4 py-3 rounded-xl">
                <Icon className="h-4 w-4 text-primary" />
                <span className="text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ChapterShell>
  );
};

export default Chapter08_International;
