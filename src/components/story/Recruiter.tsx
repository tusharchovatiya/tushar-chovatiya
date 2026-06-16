import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  { title: "Self-taught learner", desc: "Built foundations during lockdown with no mentor. Still learning daily." },
  { title: "Consistent growth", desc: "Intern → Android dev → Senior cross-platform engineer over 5.5 years." },
  { title: "Production experience", desc: "15+ live apps for international clients across Quebec, US and EU." },
  { title: "Challenge acceptance", desc: "Said yes to NFC, AR SDKs, KMP and multi-currency PayPal — and shipped." },
  { title: "Cross-platform expertise", desc: "Flutter, native Android (Kotlin/Java), Kotlin Multiplatform — same person." },
  { title: "Strong adaptation", desc: "Android → Flutter switch as a fresher. Native → KMP transition mid-career." },
  { title: "Long-term commitment", desc: "4+ years at Techvoot. Owns features end-to-end with reliability." },
  { title: "Product mindset", desc: "Thinks in users, edge cases and outcomes — not tickets." },
];

const Recruiter = () => {
  return (
    <section id="recruiter" className="relative py-28 md:py-36 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="chapter-number">For Recruiters & Hiring Teams</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mt-4">
            <span className="holo-text">Why Tushar?</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A snapshot beyond the resume — the qualities that show up on day one and stay through year five.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.1 }}
              className="glass-card p-6 flex gap-4 items-start"
            >
              <div className="h-10 w-10 shrink-0 rounded-xl gradient-primary grid place-items-center shadow-[0_0_18px_hsl(186_100%_60%/0.4)]">
                <CheckCircle2 className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{r.title}</h3>
                <p className="text-sm text-muted-foreground">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recruiter;
