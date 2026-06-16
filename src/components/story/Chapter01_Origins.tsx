import ChapterShell from "./ChapterShell";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const Chapter01_Origins = () => {
  const lines = [
    "A student from Gujarat.",
    "Comfortable speaking Gujarati.",
    "Curious about technology.",
    "Still discovering what was possible.",
  ];
  return (
    <ChapterShell id="ch1" index="01" title="Every Journey Starts Somewhere" subtitle="2019 — Gujarat, India">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-5">
          {lines.map((l, i) => (
            <motion.p
              key={l}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-xl md:text-2xl text-foreground/85 font-light"
            >
              {l}
            </motion.p>
          ))}
        </div>

        {/* Futuristic Gujarat map node */}
        <div className="relative aspect-square max-w-md mx-auto">
          <div className="absolute inset-0 rounded-3xl gradient-border glass scanlines overflow-hidden">
            <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full opacity-70">
              <defs>
                <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="hsl(186 100% 60%)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="hsl(186 100% 60%)" stopOpacity="0" />
                </radialGradient>
              </defs>
              {/* concentric pulse rings */}
              {[60, 100, 150, 200].map((r, i) => (
                <circle
                  key={r}
                  cx="200"
                  cy="200"
                  r={r}
                  fill="none"
                  stroke="hsl(186 100% 60%)"
                  strokeOpacity={0.15 + i * 0.05}
                  strokeWidth="1"
                />
              ))}
              {/* coordinate grid */}
              {[100, 200, 300].map((p) => (
                <g key={p} stroke="hsl(186 100% 70% / 0.08)">
                  <line x1={p} y1="0" x2={p} y2="400" />
                  <line x1="0" y1={p} x2="400" y2={p} />
                </g>
              ))}
              <circle cx="200" cy="200" r="180" fill="url(#glow1)" />
              {/* center marker */}
              <circle cx="200" cy="200" r="6" fill="hsl(186 100% 70%)">
                <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="200" cy="200" r="14" fill="none" stroke="hsl(280 90% 70%)" strokeWidth="1.5">
                <animate attributeName="r" values="14;28;14" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1;0;1" dur="3s" repeatCount="indefinite" />
              </circle>
            </svg>
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between font-mono text-xs">
              <span className="text-primary flex items-center gap-1.5">
                <MapPin className="h-3 w-3" /> 21.1702° N, 72.8311° E
              </span>
              <span className="text-muted-foreground">SURAT · GUJARAT</span>
            </div>
            <div className="absolute top-5 left-5 font-mono text-[10px] text-primary/70 tracking-widest">
              ORIGIN.NODE_01
            </div>
          </div>
        </div>
      </div>
    </ChapterShell>
  );
};

export default Chapter01_Origins;
