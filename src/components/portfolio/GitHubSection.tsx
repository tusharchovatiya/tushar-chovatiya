import { Github, GitBranch, Package, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  { icon: Package, title: "Flutter Package Author", desc: "Published OCR area-detection package on pub.dev." },
  { icon: GitBranch, title: "Open Source Interest", desc: "Contributing to mobile & AI tooling ecosystems." },
  { icon: Star, title: "Production Repos", desc: "Architecting reusable, well-tested mobile modules." },
];

const GitHubSection = () => {
  return (
    <section id="github" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="glass-card p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl pointer-events-none" />

          <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-sm text-primary-glow mb-3">
                <Github className="h-4 w-4" />
                <span>On GitHub</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
                Building in <span className="gradient-text">public</span>
              </h2>
              <p className="text-muted-foreground max-w-xl">
                A growing collection of Flutter packages, Android samples, and AI experiments —
                focused on real-world mobile product engineering.
              </p>
            </div>
            <Button asChild variant="hero" size="lg">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> Visit GitHub
              </a>
            </Button>
          </div>

          <div className="relative grid sm:grid-cols-3 gap-4 mt-10">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass p-5 rounded-2xl">
                <Icon className="h-5 w-5 text-primary-glow mb-3" />
                <h3 className="font-semibold text-sm mb-1">{title}</h3>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;
