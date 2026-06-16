import ChapterShell from "./ChapterShell";
import { motion } from "framer-motion";

const Chapter13_Future = () => {
  return (
    <ChapterShell id="ch13" index="13" title="The Story Continues" subtitle="" align="center">
      <div className="relative max-w-3xl mx-auto text-center">
        <div className="absolute -inset-20 gradient-aurora opacity-10 blur-3xl rounded-full pointer-events-none" />

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative mx-auto h-32 w-32 mb-10"
        >
          <div className="absolute inset-0 rounded-full gradient-aurora animate-glow-pulse" />
          <div className="absolute inset-2 rounded-full bg-background grid place-items-center">
            <span className="font-mono text-xs text-primary tracking-[0.3em]">NEXT</span>
          </div>
          <div className="absolute inset-0 rounded-full border border-primary/30 animate-spin [animation-duration:20s]" />
        </motion.div>

        <div className="space-y-4 text-xl md:text-2xl font-light text-foreground/85">
          {[
            "Building products that matter.",
            "Exploring AI as a creative partner.",
            "Crafting experiences across screens and platforms.",
            "Learning. Always learning.",
          ].map((line, i) => (
            <motion.p
              key={line}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 + i * 0.2 }}
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 1.6 }}
          className="mt-12 holo-text text-2xl md:text-4xl font-bold"
        >
          The journey is still unfolding.
        </motion.p>
      </div>
    </ChapterShell>
  );
};

export default Chapter13_Future;
