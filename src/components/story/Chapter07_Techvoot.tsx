import ChapterShell from "./ChapterShell";
import { motion } from "framer-motion";

const stack = ["Flutter", "Dart", "Riverpod", "Provider", "go_router", "Compose", "KMP", "Firebase", "REST", "Riverpod"];

const Chapter07_Techvoot = () => {
  return (
    <ChapterShell
      id="ch7"
      index="07"
      title="Scaling Up"
      subtitle="Techvoot Solutions · Work From Home · Ahmedabad · · 2021 - 2025."
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Futuristic city skyline */}
        <div className="relative aspect-[4/3] rounded-3xl glass gradient-border overflow-hidden scanlines">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-transparent" />
          <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full">
            {/* far buildings */}
            {[20, 70, 110, 160, 210, 260, 320, 360].map((x, i) => {
              const h = 80 + ((i * 37) % 110);
              return (
                <motion.rect
                  key={x}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.08, ease: "easeOut" }}
                  style={{ transformOrigin: "bottom" }}
                  x={x} y={300 - h} width="34" height={h}
                  fill="hsl(230 35% 10%)"
                  stroke="hsl(186 100% 60% / 0.5)"
                  strokeWidth="1"
                />
              );
            })}
            {/* windows */}
            {Array.from({ length: 60 }).map((_, i) => {
              const cx = 20 + (i % 8) * 45 + ((i * 7) % 20);
              const cy = 200 + ((i * 13) % 80);
              return (
                <motion.rect
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: [0, 1, 0.6] }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 1 + (i * 0.04) % 1.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 3 }}
                  x={cx} y={cy} width="3" height="3"
                  fill={i % 3 === 0 ? "hsl(280 90% 70%)" : "hsl(186 100% 60%)"}
                />
              );
            })}
            {/* horizontal scan */}
            <motion.line
              initial={{ y1: 0, y2: 0 }}
              animate={{ y1: [0, 300, 0], y2: [0, 300, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              x1="0" x2="400"
              stroke="hsl(186 100% 60% / 0.4)"
              strokeWidth="1"
            />
          </svg>
          <div className="absolute top-4 left-4 font-mono text-[10px] text-primary tracking-widest">
            AHMEDABAD.GRID
          </div>
        </div>

        <div className="space-y-5 text-lg text-foreground/85 font-light">
          <p>The pandemic ended in offices. For me, it never did.</p>
          <p className="text-muted-foreground">
            Joined Techvoot as a Flutter fresher — coming from native Android, the leap felt enormous.
          </p>
          <p>Four years in, I lead delivery across Flutter, native Android and Kotlin Multiplatform for clients in Quebec, the US and EU.</p>
          <div className="flex flex-wrap gap-2 pt-3">
            {stack.map((s) => (
              <span key={s} className="text-xs font-mono px-2.5 py-1 rounded-md glass border border-primary/20 text-primary">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ChapterShell>
  );
};

export default Chapter07_Techvoot;
