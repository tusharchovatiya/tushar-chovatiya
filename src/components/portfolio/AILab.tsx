import { Sparkles } from "lucide-react";

const items = [
  { title: "AI Blog Generator", desc: "End-to-end LLM pipeline that drafts, edits, and SEO-optimizes long-form articles." },
  { title: "AI Research Assistant", desc: "Retrieval-augmented agent that summarizes sources and cites them inline." },
  { title: "AI Social Media Creator", desc: "Generates platform-tuned posts, hashtags, and visual prompts in one click." },
  { title: "AI Video Script Generator", desc: "Hook-driven scripts with timing, b-roll suggestions, and CTAs." },
  { title: "AI Thumbnail Idea Generator", desc: "Prompts and layouts that maximize click-through for creators." },
  { title: "AI Startup Validator", desc: "Validates ideas with market, competitor and ICP signals at draft speed." },
  { title: "Voice-to-Content Platform", desc: "Speech → structured content (blog, tweet, newsletter) with on-brand tone." },
];

const AILab = () => {
  return (
    <section id="ai-lab" className="py-20 md:py-28 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 glass px-3 py-1 rounded-full text-xs mb-4">
            <Sparkles className="h-3.5 w-3.5 text-primary-glow" />
            <span>Future-Focused</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            AI Content Creation <span className="gradient-text">Lab</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Innovation projects and experiments exploring how LLMs can supercharge content and creator workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="relative glass-card p-6 overflow-hidden group"
            >
              <div className="absolute top-0 left-0 h-full w-1 gradient-primary opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="text-xs text-primary-glow mb-2">Experiment #{String(i + 1).padStart(2, "0")}</div>
              <h3 className="font-semibold text-lg mb-2">{it.title}</h3>
              <p className="text-sm text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AILab;
