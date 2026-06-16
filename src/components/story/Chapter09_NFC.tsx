import ChapterShell from "./ChapterShell";
import { motion } from "framer-motion";
import { Cpu, Radio } from "lucide-react";

const Chapter09_NFC = () => {
  return (
    <ChapterShell
      id="ch9"
      index="09"
      title="Challenge Accepted"
      subtitle="The Monportail challenge — an NFC integration I had never built before."
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-5 text-lg text-foreground/85 font-light">
          <p>
            <span className="text-foreground font-medium">Université Laval · Monportail.</span>{" "}
            A student identity app that needed byte-level NFC chip reading.
          </p>
          <p className="text-muted-foreground">
            I had never touched the NFC stack. The deadline didn't care.
          </p>
          <p>
            I learned the protocol from spec PDFs. Wrote shared KMP logic consumed from Android & iOS. Debugged hex payloads byte by byte.
          </p>
          <p className="text-primary font-medium">It shipped. It worked. It changed how I think about "unknown" technology.</p>
        </div>

        {/* NFC card visualization */}
        <div className="relative aspect-square max-w-md mx-auto">
          <div className="absolute inset-0 rounded-3xl gradient-border glass scanlines overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-20" />
            <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
              {/* card body */}
              <motion.rect
                initial={{ rotate: -8, opacity: 0 }}
                whileInView={{ rotate: -8, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                x="80" y="120" width="240" height="160" rx="16"
                fill="hsl(230 35% 10%)"
                stroke="hsl(186 100% 60% / 0.5)"
                strokeWidth="1.5"
                style={{ transformOrigin: "200px 200px", filter: "drop-shadow(0 10px 30px hsl(280 90% 50% / 0.4))" }}
              />
              {/* chip */}
              <motion.rect
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                x="120" y="170" width="44" height="36" rx="4"
                fill="hsl(186 100% 50% / 0.3)"
                stroke="hsl(186 100% 60%)"
                strokeWidth="1.5"
              />
              {/* chip lines */}
              {[178, 188, 198].map((y) => (
                <line key={y} x1="125" y1={y} x2="159" y2={y} stroke="hsl(186 100% 70%)" strokeWidth="0.8" />
              ))}
              {/* NFC waves */}
              {[1, 2, 3].map((i) => (
                <motion.path
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: [0, 0.8, 0] }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: i * 0.4, repeat: Infinity, repeatDelay: 0.5 }}
                  d={`M 210 188 q ${15 * i} -${10 * i} ${30 * i} 0`}
                  fill="none"
                  stroke="hsl(280 90% 70%)"
                  strokeWidth="2"
                />
              ))}
              {/* data stream */}
              {Array.from({ length: 10 }).map((_, i) => (
                <motion.text
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: [0, 1, 0], x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: i * 0.2, repeat: Infinity, repeatDelay: 1 }}
                  x="260" y={150 + i * 14}
                  fill="hsl(186 100% 70%)"
                  fontSize="10"
                  fontFamily="JetBrains Mono"
                >
                  0x{(i * 17 + 32).toString(16).toUpperCase().padStart(2, "0")}
                </motion.text>
              ))}
            </svg>
            <div className="absolute top-4 left-4 flex items-center gap-2 font-mono text-[10px] text-primary tracking-widest">
              <Radio className="h-3 w-3" /> NFC.READ.STREAM
            </div>
            <div className="absolute bottom-4 right-4 flex items-center gap-2 font-mono text-[10px] text-accent">
              <Cpu className="h-3 w-3" /> MONPORTAIL · KMP
            </div>
          </div>
        </div>
      </div>
    </ChapterShell>
  );
};

export default Chapter09_NFC;
