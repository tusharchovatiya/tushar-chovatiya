import { Lightbulb, ScanText, GraduationCap, LayoutDashboard, Bot, Smartphone } from "lucide-react";

const ideas = [
  { icon: ScanText, title: "Smart OCR Assistant", desc: "Context-aware OCR that extracts, classifies and acts on text in real time." },
  { icon: GraduationCap, title: "AI Learning Companion", desc: "Personalized learning paths with adaptive quizzes and tutoring agents." },
  { icon: LayoutDashboard, title: "AI Productivity Workspace", desc: "Unified workspace where agents draft, plan, and automate daily work." },
  { icon: Bot, title: "AI Business Automation Suite", desc: "End-to-end automation for SMB workflows — sales, ops, and support." },
  { icon: Smartphone, title: "Mobile + AI Integrated Solutions", desc: "Mobile-first AI products combining on-device ML with cloud LLMs." },
];

const InnovationLab = () => {
  return (
    <section id="innovation" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 glass px-3 py-1 rounded-full text-xs mb-4">
            <Lightbulb className="h-3.5 w-3.5 text-primary-glow" />
            <span>Innovation Lab</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Ideas in <span className="gradient-text">motion</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ideas.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass-card p-6 flex gap-4">
              <div className="h-11 w-11 shrink-0 rounded-xl gradient-primary grid place-items-center">
                <Icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationLab;
