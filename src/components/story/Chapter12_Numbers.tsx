import ChapterShell from "./ChapterShell";
import { motion } from "framer-motion";

const numbers = [
  { value: "5.5+", label: "Years Experience" },
  { value: "15+", label: "Production Apps" },
  { value: "1", label: "pub.dev Package" },
  { value: "3", label: "Platforms Mastered" },
  { value: "EU·US·CA", label: "International Clients" },
  { value: "KMP", label: "Multiplatform Native" },
];

const Chapter12_Numbers = () => {
  return (
    <ChapterShell id="ch12" index="12" title="By The Numbers" subtitle="A career in metrics." align="center">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {numbers.map((n, i) => (
          <motion.div
            key={n.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass-card p-6 md:p-8 text-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 gradient-aurora opacity-0 group-hover:opacity-10 transition-opacity" />
            <div className="relative">
              <div className="text-3xl md:text-5xl font-bold holo-text">{n.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-2 uppercase tracking-widest font-mono">
                {n.label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </ChapterShell>
  );
};

export default Chapter12_Numbers;
