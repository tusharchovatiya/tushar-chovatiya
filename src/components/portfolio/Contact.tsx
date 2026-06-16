import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const channels = [
  { icon: Mail, label: "Email", value: "tusharchovatiyatc31@gmail.com", href: "mailto:tusharchovatiyatc31@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 97731 33958", href: "tel:+919773133958" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/tusharchovatiya", href: "https://www.linkedin.com/" },
  { icon: Github, label: "GitHub", value: "github.com/tusharchovatiya", href: "https://github.com/" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="glass-card p-8 md:p-14 text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute inset-0 opacity-60 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />
          <div className="relative">
            <p className="text-sm uppercase tracking-[0.2em] text-primary-glow mb-3">Contact</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Let's build something <span className="gradient-text">extraordinary</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Open to Senior Engineering, Mobile Product, and AI-focused roles.
              Reach out for collaborations, interviews, or product consultations.
            </p>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-4">
              <MapPin className="h-4 w-4" /> Gujarat, India
            </div>

            <div className="grid sm:grid-cols-2 gap-3 mt-8 text-left">
              {channels.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="glass p-4 rounded-2xl flex items-center gap-4 hover:border-primary/40 transition-all"
                >
                  <div className="h-10 w-10 rounded-xl gradient-primary grid place-items-center shrink-0">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-muted-foreground">{label}</div>
                    <div className="text-sm font-medium truncate">{value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <Button asChild variant="hero" size="lg">
                <a href="mailto:tusharchovatiyatc31@gmail.com">
                  <Mail className="mr-2 h-4 w-4" /> Email Me
                </a>
              </Button>
              <Button asChild variant="glass" size="lg">
                <a href="tel:+919773133958">
                  <Phone className="mr-2 h-4 w-4" /> Call Me
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
