import { Briefcase } from "lucide-react";

const roles = [
  {
    company: "Techvoot Solutions",
    role: "Android • Flutter • KMP Developer",
    period: "Dec 2021 — Present",
    points: [
      "Lead mobile development across Flutter, native Android, and Kotlin Multiplatform projects.",
      "Delivered international client products in OCR, NFC identity, ecommerce & media.",
      "Authored a published Flutter package and contributed to KMP architecture.",
    ],
  },
  {
    company: "Tech Integrity Services",
    role: "Android Developer",
    period: "Aug 2020 — Aug 2021",
    points: [
      "Built and maintained Android apps across multiple verticals.",
      "Implemented REST integrations, Firebase auth, and offline-first flows.",
    ],
  },
  {
    company: "Smart Online Academy",
    role: "Android Developer Intern",
    period: "Mar 2020 — Jul 2020",
    points: [
      "Foundational native Android work with Java/Kotlin & MVVM.",
      "Shipped first production features as part of a small team.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-primary-glow mb-3">Experience</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Career <span className="gradient-text">timeline</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
          <div className="space-y-10">
            {roles.map((r, i) => (
              <div
                key={r.company}
                className={`relative md:grid md:grid-cols-2 md:gap-10 ${
                  i % 2 === 0 ? "" : "md:[&>div]:order-2"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 h-3 w-3 rounded-full gradient-primary ring-4 ring-background" />
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10 md:col-start-2"}`}>
                  <div className="glass-card p-6">
                    <div className="flex items-center gap-2 text-xs text-primary-glow mb-2 md:justify-end">
                      <Briefcase className="h-3.5 w-3.5" />
                      <span>{r.period}</span>
                    </div>
                    <h3 className="text-lg font-semibold">{r.company}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{r.role}</p>
                    <ul className="space-y-1.5 text-sm text-foreground/80 list-disc list-inside md:list-outside">
                      {r.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
