import ChapterShell from "./ChapterShell";
import { motion } from "framer-motion";

const branches = [
  { label: "Gujarati comfort zone", tone: "muted" },
  { label: "English uncertainty", tone: "muted" },
  { label: "Hindi hesitation", tone: "muted" },
  { label: "Courage to show up", tone: "primary" },
];

const Chapter04_FearMeetsReality = () => {
  return (
    <ChapterShell id="ch4" index="04" title="Fear Meets Reality" subtitle="First interview. First solo journey. A growth story — not a success story.">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-5 text-lg text-foreground/85 font-light">
          <p>
            The first real interview. Travelled alone to another city.
          </p>
          <p className="text-muted-foreground">
            Sat in a room where every question collided with a language I was still learning to speak.
          </p>
          <p>
            I did not get the role.
          </p>
          <p className="text-primary font-medium">
            But I learned something more valuable — that showing up, even afraid, is its own kind of skill.
          </p>
        </div>

        <div className="relative">
          <svg viewBox="0 0 400 360" className="w-full h-auto">
            <defs>
              <linearGradient id="branchGrad" x1="0" x2="1">
                <stop offset="0" stopColor="hsl(186 100% 60%)" />
                <stop offset="1" stopColor="hsl(280 90% 70%)" />
              </linearGradient>
            </defs>
            <motion.line
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
              x1="40" y1="180" x2="160" y2="180"
              stroke="url(#branchGrad)" strokeWidth="2"
            />
            {branches.map((b, i) => {
              const y = 60 + i * 80;
              return (
                <g key={b.label}>
                  <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 + i * 0.2 }}
                    d={`M 160 180 Q 220 180 220 ${y} T 280 ${y}`}
                    fill="none"
                    stroke={b.tone === "primary" ? "hsl(186 100% 60%)" : "hsl(220 20% 40%)"}
                    strokeWidth={b.tone === "primary" ? "2.5" : "1.5"}
                    strokeDasharray={b.tone === "primary" ? "0" : "4 4"}
                  />
                  <motion.circle
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.4 + i * 0.2 }}
                    cx="280" cy={y} r={b.tone === "primary" ? "6" : "4"}
                    fill={b.tone === "primary" ? "hsl(186 100% 60%)" : "hsl(220 20% 50%)"}
                  />
                  <motion.text
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.6 + i * 0.2 }}
                    x="295" y={y + 4}
                    fill={b.tone === "primary" ? "hsl(186 100% 80%)" : "hsl(220 10% 60%)"}
                    fontSize="13"
                    fontFamily="JetBrains Mono, monospace"
                  >
                    {b.label}
                  </motion.text>
                </g>
              );
            })}
            <circle cx="40" cy="180" r="8" fill="hsl(280 90% 70%)">
              <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
      </div>
    </ChapterShell>
  );
};

export default Chapter04_FearMeetsReality;
