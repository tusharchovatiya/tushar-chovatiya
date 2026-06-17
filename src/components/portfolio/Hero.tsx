import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import profile from "@/assets/profile.jpg";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "15+", label: "Production Apps" },
  { value: "1", label: "Flutter Package" },
  { value: "App", label: "Developer" },
];

const Hero = () => {
  return (
    <section id="home" className="relative pt-28 md:pt-36 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
          <div className="space-y-7 animate-fade-up">
            <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs md:text-sm">
              <Sparkles className="h-3.5 w-3.5 text-primary-glow" />
              <span className="text-muted-foreground">Available for Senior Engineering Roles</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                <span className="text-foreground">Tushar</span>
                <br />
                <span className="gradient-text">Chovatiya</span>
              </h1>
              <p className="text-xl md:text-2xl font-medium text-foreground/90">
                AI-Powered Mobile Product Developer
              </p>
              <p className="text-base md:text-lg text-muted-foreground max-w-xl">
                Flutter • Android • Kotlin Multiplatform • AI Automation
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg">
                <a href="#projects">
                  View Projects <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="glass" size="lg">
                <a href="/resume.pdf" download>
                  <Download className="mr-1 h-4 w-4" /> Resume
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <a href="#contact">
                  <Mail className="mr-1 h-4 w-4" /> Contact Me
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {stats.map((s) => (
                <div key={s.label} className="glass-card p-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold gradient-text">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto animate-fade-up [animation-delay:200ms]">
            <div className="absolute inset-0 gradient-primary rounded-[2rem] blur-3xl opacity-40 animate-glow-pulse" />
            <div className="relative h-72 w-72 md:h-96 md:w-96 rounded-[2rem] overflow-hidden gradient-border glass animate-float">
              <img
                src={profile}
                alt="Portrait of Tushar Chovatiya, Mobile & AI Developer"
                width={768}
                height={768}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 glass-card px-4 py-3 text-xs md:text-sm">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open to Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
