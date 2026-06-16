import { Briefcase } from "lucide-react";

const roles = [
  {
    company: "Techvoot Solutions",
    location: "Ahmedabad, India",
    role: "Android • Flutter • Kotlin Multiplatform Developer",
    period: "Dec 2021 — Present",
    points: [
      "Lead mobile delivery across Flutter, native Android & KMP for international clients (Quebec, US, EU).",
      "Shipped 14+ products: Elog, Edition Nordiques, Neobox, SnapShop, CIAS, Equa, NFS, getBeauty, AgenceRBL, JustRead, Fugues, AdReel, Bindaz, Ronna Momentum/Connexia.",
      "Authored & published the Flutter Text Detect Area OCR package on pub.dev.",
      "KMP work on Monportail (NFC identity) and Elna with shared Compose resources & Mirego/Trikot stack.",
      "Integrated PayPal multi-currency, BytePlusEffect AR SDK, Riverpod refactors, and Play Console 16KB / Edge-to-Edge SDK 35 modernization.",
    ],
  },
  {
    company: "Tech Integrity Services",
    location: "Rajkot, India",
    role: "Android Developer",
    period: "Aug 2020 — Aug 2021",
    points: [
      "Built and maintained native Android apps across multiple verticals.",
      "Strengthened coding standards, REST integrations, Firebase auth and offline-first flows.",
      "Delivered features end-to-end with strong problem-solving and clean architecture.",
    ],
  },
  {
    company: "Smart Online Academy",
    location: "Remote",
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
                    <p className="text-sm text-muted-foreground">{r.role}</p>
                    <p className="text-xs text-muted-foreground/80 mb-3">{r.location}</p>
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
