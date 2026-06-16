import ChapterShell from "./ChapterShell";
import { motion } from "framer-motion";
import { Navigation } from "lucide-react";

const Chapter05_Rajkot = () => {
  return (
    <ChapterShell
      id="ch5"
      index="05"
      title="Learning In Production"
      subtitle="Rajkot · Android Developer · 1 year shipping for a taxi platform."
    >
      <div className="grid md:grid-cols-5 gap-10 items-center">
        <div className="md:col-span-2 space-y-4 text-lg text-foreground/85 font-light">
          <p>First full-time job. Real users. Real tickets. Real consequences.</p>
          <p className="text-muted-foreground">
            Built a lock-screen booking experience using Android <span className="font-mono text-primary">WindowManager</span> — overlays, foreground services, the works.
          </p>
          <p>Talked to clients. Negotiated specs. Owned features end-to-end.</p>
          <p className="text-primary">This is where Android stopped being a tutorial and became a profession.</p>
        </div>

        {/* Map visualization */}
        <div className="md:col-span-3 relative aspect-[5/4] rounded-3xl glass gradient-border overflow-hidden scanlines">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <svg viewBox="0 0 500 400" className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient id="routeGrad" x1="0" x2="1">
                <stop offset="0" stopColor="hsl(186 100% 60%)" />
                <stop offset="1" stopColor="hsl(280 90% 70%)" />
              </linearGradient>
            </defs>
            {/* road network */}
            <g stroke="hsl(220 20% 30%)" strokeWidth="1" fill="none">
              <path d="M 40 320 Q 150 280 240 200 T 460 80" />
              <path d="M 80 60 Q 180 120 260 180 T 440 320" />
              <path d="M 30 200 L 470 200" />
              <path d="M 250 30 L 250 380" />
            </g>
            {/* active route */}
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
              d="M 60 340 Q 180 300 240 220 T 440 110"
              fill="none"
              stroke="url(#routeGrad)"
              strokeWidth="3"
              strokeLinecap="round"
              style={{ filter: "drop-shadow(0 0 8px hsl(186 100% 60% / 0.7))" }}
            />
            {/* pickup */}
            <circle cx="60" cy="340" r="7" fill="hsl(186 100% 60%)" />
            <circle cx="60" cy="340" r="14" fill="none" stroke="hsl(186 100% 60%)" strokeWidth="1.5">
              <animate attributeName="r" values="14;26;14" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0;0.8" dur="2.5s" repeatCount="indefinite" />
            </circle>
            {/* drop */}
            <circle cx="440" cy="110" r="7" fill="hsl(280 90% 70%)" />
            <circle cx="440" cy="110" r="14" fill="none" stroke="hsl(280 90% 70%)" strokeWidth="1.5">
              <animate attributeName="r" values="14;26;14" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0;0.8" dur="2.5s" repeatCount="indefinite" />
            </circle>
          </svg>
          <div className="absolute top-4 left-4 font-mono text-[10px] text-primary tracking-widest">
            VOILA_CABS.LIVE_TRACK
          </div>
          <div className="absolute bottom-4 right-4 glass px-3 py-2 rounded-lg flex items-center gap-2">
            <Navigation className="h-3.5 w-3.5 text-primary" />
            <span className="font-mono text-xs">RAJKOT · IN</span>
          </div>
        </div>
      </div>
    </ChapterShell>
  );
};

export default Chapter05_Rajkot;
