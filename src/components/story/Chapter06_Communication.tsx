import ChapterShell from "./ChapterShell";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const transforms = [
  { from: "Fear", to: "Confidence" },
  { from: "Silence", to: "Communication" },
  { from: "Doubt", to: "Ownership" },
];

const Chapter06_Communication = () => {
  return (
    <ChapterShell
      id="ch6"
      index="06"
      title="Finding A Voice"
      subtitle="The hardest skill of all — and the one no bootcamp teaches."
      align="center"
    >
      <div className="space-y-8 max-w-3xl mx-auto">
        {transforms.map((t, i) => (
          <motion.div
            key={t.from}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.25 }}
            className="glass-card p-6 md:p-8 flex items-center justify-between gap-4"
          >
            <span className="text-2xl md:text-4xl font-light text-muted-foreground line-through decoration-destructive/40">
              {t.from}
            </span>
            <ArrowRight className="h-6 w-6 md:h-8 md:w-8 text-primary shrink-0 animate-pulse" />
            <span className="text-2xl md:text-4xl font-bold holo-text">{t.to}</span>
          </motion.div>
        ))}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center text-muted-foreground italic pt-4"
        >
          Learning Hindi by necessity. English by deliberate practice. Confidence by client calls that didn't go well — and the next one that did.
        </motion.p>
      </div>
    </ChapterShell>
  );
};

export default Chapter06_Communication;
