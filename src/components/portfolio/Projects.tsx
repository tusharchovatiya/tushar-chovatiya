import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Flutter Text Detect Area",
    tag: "OCR Package",
    desc: "Published Flutter package enabling area-based on-device OCR text detection for production apps.",
    tech: ["Flutter", "Dart", "ML Kit", "Pub.dev"],
  },
  {
    title: "Monportail",
    tag: "Kotlin Multiplatform",
    desc: "NFC-based identity verification app sharing logic across Android & iOS using KMP architecture.",
    tech: ["KMP", "Kotlin", "NFC", "Compose"],
  },
  {
    title: "Elog",
    tag: "Outdoor Activity",
    desc: "Cross-platform outdoor activity platform with realtime tracking, social feeds & gamification.",
    tech: ["Flutter", "Firebase", "Maps"],
  },
  {
    title: "Edition Nordiques",
    tag: "News Platform",
    desc: "High-performance news platform with rich media, offline reading, and subscriptions.",
    tech: ["Flutter", "REST", "CMS"],
  },
  {
    title: "Neobox",
    tag: "Ecommerce",
    desc: "Multi-store ecommerce experience with vendor management, payments and order tracking.",
    tech: ["Flutter", "Stripe", "Firebase"],
  },
  {
    title: "SnapShop",
    tag: "Retail",
    desc: "Snap-and-shop product discovery experience built for fast browsing and conversion.",
    tech: ["Android", "Kotlin", "REST"],
  },
  {
    title: "Weatcb",
    tag: "Productivity",
    desc: "Enterprise productivity tooling delivering reliable workflows for field teams.",
    tech: ["Android", "MVVM"],
  },
  {
    title: "Voila Cabs",
    tag: "Transportation",
    desc: "Ride-hailing experience with realtime dispatch, routing, and payments integration.",
    tech: ["Android", "Maps", "Firebase"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-primary-glow mb-3">Featured Work</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Selected <span className="gradient-text">projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A glimpse of shipped products across mobile, OCR, identity, ecommerce, media and mobility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="glass-card p-6 group relative overflow-hidden"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full gradient-primary text-primary-foreground">
                    {p.tag}
                  </span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[11px] px-2 py-0.5 rounded-md bg-secondary/60 border border-border text-foreground/70">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
