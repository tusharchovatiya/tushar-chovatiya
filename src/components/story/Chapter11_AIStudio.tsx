import ChapterShell from "./ChapterShell";
import { motion } from "framer-motion";
import { Music, Video, Wand2, Youtube, Play } from "lucide-react";

const explorations = [
  { icon: Music, title: "Spiritual AI Songs", desc: "Composed, arranged and produced with AI music tools." },
  { icon: Video, title: "Self-Edited Videos", desc: "Editing pipelines for music videos and storytelling." },
  { icon: Wand2, title: "Content Automation", desc: "Pipelines that turn prompts into publishable assets." },
];

const videos = [
  {
    id: "xs2ZBYabaGA",
    title: "Har Har Mahadev — Mara Kaleja",
    tag: "AI Video · AI Music · Devotional",
    url: "https://youtu.be/xs2ZBYabaGA",
  },
  {
    id: "7FLYq_xIVNI",
    title: "Aadesh — The Vibe of Girnar",
    tag: "Devo Ke Dev Mahadev · AI Production",
    url: "https://youtu.be/7FLYq_xIVNI",
  },
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="glass-card p-8 md:p-10 relative overflow-hidden"
      >
        <div className="absolute inset-0 gradient-aurora opacity-5" />
        <div className="relative">
          <div className="flex items-center gap-3 mb-2">
            <Youtube className="h-8 w-8 text-primary" />
            <h3 className="text-2xl font-semibold">YouTube — AI Music & Video</h3>
          </div>
          <p className="text-muted-foreground max-w-xl mb-6">
            Spiritual songs, AI-assisted production, self-edited visuals.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {videos.map((v, i) => (
              <motion.a
                key={v.id}
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.15 }}
                className="group glass rounded-2xl overflow-hidden border border-primary/10 hover:border-primary/40 transition-all"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                    alt={v.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="h-14 w-14 rounded-full gradient-primary grid place-items-center shadow-[0_0_30px_hsl(186_100%_60%/0.5)] group-hover:scale-110 transition-transform">
                      <Play className="h-6 w-6 text-primary-foreground ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-primary mb-1">
                    {v.tag}
                  </div>
                  <h4 className="font-semibold group-hover:text-primary transition-colors">
                    {v.title}
                  </h4>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="mt-6 inline-flex items-center gap-3 font-mono text-xs tracking-widest text-primary">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            CHANNEL · LIVE
          </div>
        </div>
      </motion.div>
    </ChapterShell>
  );
};

export default Chapter11_AIStudio;
