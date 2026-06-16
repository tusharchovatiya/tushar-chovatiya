import ChapterShell from "./ChapterShell";
import { motion } from "framer-motion";
import { Music, Video, Wand2, Youtube } from "lucide-react";

const explorations = [
  { icon: Music, title: "Spiritual AI Songs", desc: "Composed, arranged and produced with AI music tools." },
  { icon: Video, title: "Self-Edited Videos", desc: "Editing pipelines for music videos and storytelling." },
  { icon: Wand2, title: "Content Automation", desc: "Pipelines that turn prompts into publishable assets." },
];

const Chapter11_AIStudio = () => {
  return (
    <ChapterShell
      id="ch11"
      index="11"
      title="Exploring Creativity Through AI"
      subtitle="Not AI engineering — AI as a creative instrument."
    >
      <div className="grid md:grid-cols-3 gap-5 mb-10">
        {explorations.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="glass-card p-6"
          >
            <div className="h-12 w-12 rounded-xl gradient-primary grid place-items-center mb-4 shadow-[0_0_24px_hsl(186_100%_60%/0.4)]">
              <Icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{desc}</p>
          </motion.div>
        ))}
      </div>

      {/* YouTube placeholder strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="glass-card p-8 md:p-10 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 gradient-aurora opacity-5" />
        <Youtube className="h-10 w-10 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-semibold mb-2">YouTube — AI Music & Video Channel</h3>
        <p className="text-muted-foreground max-w-xl mx-auto mb-6">
          Spiritual songs, AI-assisted production, self-edited visuals. Links coming soon.
        </p>
        <div className="inline-flex items-center gap-3 font-mono text-xs tracking-widest text-primary">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          CHANNEL · IN PRODUCTION
        </div>
      </motion.div>
    </ChapterShell>
  );
};

export default Chapter11_AIStudio;
