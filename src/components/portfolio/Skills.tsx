import { Smartphone, Brain, Server, Palette } from "lucide-react";

const groups = [
  {
    icon: Smartphone,
    title: "Mobile Development",
    skills: ["Flutter", "Android (Java/Kotlin)", "Kotlin Multiplatform", "Jetpack Compose", "Dart"],
  },
  {
    icon: Brain,
    title: "AI & Automation",
    skills: ["OpenAI APIs", "Prompt Engineering", "OCR", "AI Content Creation", "AI Agents"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Firebase", "Node.js", "REST APIs", "Auth & Realtime DB"],
  },
  {
    icon: Palette,
    title: "Design",
    skills: ["Figma", "Adobe XD", "Photoshop", "Premiere Pro"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-primary-glow mb-3">Skills</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Tools I use to <span className="gradient-text">ship</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map(({ icon: Icon, title, skills }) => (
            <div key={title} className="glass-card p-6 group">
              <div className="h-12 w-12 rounded-xl gradient-primary grid place-items-center mb-5 group-hover:scale-110 transition-transform">
                <Icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-4">{title}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2.5 py-1 rounded-full bg-secondary/60 border border-border text-foreground/80"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
