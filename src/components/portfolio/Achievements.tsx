import { Trophy } from "lucide-react";

const achievements = [
  { value: "15+", label: "Production Applications" },
  { value: "🌍", label: "International Client Projects" },
  { value: "📦", label: "Flutter Package Author" },
  { value: "KMP", label: "Kotlin Multiplatform Experience" },
  { value: "⚡", label: "Cross-Platform Expertise" },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 glass px-3 py-1 rounded-full text-xs mb-4">
            <Trophy className="h-3.5 w-3.5 text-primary-glow" />
            <span>Achievements</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Milestones along the <span className="gradient-text">journey</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {achievements.map((a) => (
            <div key={a.label} className="glass-card p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{a.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground">{a.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
