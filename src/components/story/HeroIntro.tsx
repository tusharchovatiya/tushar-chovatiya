import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import profile from "@/assets/profile.jpg";

const HeroIntro = () => {
  return (
    <section
      id="intro"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
    >
      <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-accent/15 blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs mb-8"
        >
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span className="text-muted-foreground font-mono tracking-widest">A DOCUMENTARY · 2019 — TODAY</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mx-auto mb-10 w-32 h-32 md:w-40 md:h-40"
        >
          <div className="absolute inset-0 rounded-full gradient-aurora blur-2xl opacity-50 animate-glow-pulse" />
          <div className="relative h-full w-full rounded-full overflow-hidden gradient-border glass">
            <img src={profile} alt="Tushar Chovatiya" className="h-full w-full object-cover" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9]"
        >
          <span className="block text-foreground">Tushar</span>
          <span className="block holo-text">Chovatiya</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-8 text-lg md:text-2xl text-foreground/85 font-light"
        >
          Mobile Product Developer · 5.5+ Years
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85 }}
          className="mt-3 text-sm md:text-base text-muted-foreground font-mono tracking-wide"
        >
          Flutter · Android · Kotlin Multiplatform
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-8 text-sm md:text-base text-muted-foreground max-w-xl mx-auto italic"
        >
          Exploring AI content creation, automation and digital innovation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-16 flex flex-col items-center gap-3 text-muted-foreground"
        >
          <span className="text-xs font-mono tracking-[0.3em] uppercase">Scroll to begin the journey</span>
          <ArrowDown className="h-5 w-5 animate-bounce text-primary" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroIntro;
