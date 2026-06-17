import ChapterShell from "./ChapterShell";
import { motion } from "framer-motion";
import { Youtube, Mail, Wrench, Rocket } from "lucide-react";

const steps = [
  { icon: Youtube, label: "A video, a hunch", note: "Found an internship lead on YouTube. Sent a cold email." },
  { icon: Mail, label: "One-man army", note: "No team. No mentor. Just me, a web app, and a deadline." },
  { icon: Wrench, label: "Trial. Error. Ship.", note: "Diagnosed every bug with Google. Solved each one with patience." },
  { icon: Rocket, label: "First Android app, live", note: "Web app → native Android. Built end-to-end. Alone." },
];

const Chapter03_FirstStep = () => {
  return (
    <ChapterShell id="ch3" index="03" title="The First Step" subtitle="Theory becomes practice.">
      <div className="relative">
        {/* glowing path */}
        <div className="absolute top-8 left-0 right-0 h-px hidden md:block">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="origin-left h-full bg-gradient-to-r from-primary via-accent to-transparent shadow-[0_0_20px_hsl(186_100%_60%/0.6)]"
          />
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative"
              >
                <div className="relative h-16 w-16 rounded-2xl gradient-primary grid place-items-center mb-5 shadow-[0_0_30px_hsl(186_100%_60%/0.5)]">
                  <Icon className="h-7 w-7 text-primary-foreground" />
                  <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full glass font-mono text-[10px] grid place-items-center text-primary">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-1">{s.label}</h3>
                <p className="text-sm text-muted-foreground">{s.note}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </ChapterShell>
  );
};

export default Chapter03_FirstStep;
