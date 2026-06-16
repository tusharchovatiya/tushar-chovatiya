import { Code2, Cpu, Rocket } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-primary-glow mb-3">About Me</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Building <span className="gradient-text">production-grade</span> mobile products
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-3 space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>
              I'm a Senior Software Engineer from Gujarat, India with{" "}
              <span className="text-foreground font-semibold">5+ years</span> of hands-on experience
              shipping mobile products across Android, Flutter, and Kotlin Multiplatform.
            </p>
            <p>
              I've designed and delivered applications in{" "}
              <span className="text-foreground">transportation, education, ecommerce, media,
              OCR, enterprise productivity</span>, and AI-assisted solutions — collaborating with
              international clients and product teams to ship reliable, scalable software.
            </p>
            <p>
              Today, I'm channeling that engineering foundation into{" "}
              <span className="gradient-text font-semibold">AI Product Engineering</span> —
              building intelligent mobile experiences powered by LLMs, automation, and on-device intelligence.
            </p>
          </div>

          <div className="md:col-span-2 grid gap-4">
            {[
              { icon: Code2, title: "Cross-Platform Craft", text: "Flutter, KMP & native Android — one codebase, premium UX." },
              { icon: Cpu, title: "AI-First Mindset", text: "OpenAI APIs, OCR, prompt engineering, AI agents." },
              { icon: Rocket, title: "Production Ready", text: "Shipped 15+ apps for international clients & startups." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="glass-card p-5 flex gap-4">
                <div className="h-10 w-10 shrink-0 rounded-xl gradient-primary grid place-items-center">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
