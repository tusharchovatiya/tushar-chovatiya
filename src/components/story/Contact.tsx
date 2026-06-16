import { motion } from "framer-motion";
import { Mail, MapPin, Download, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="relative py-28 md:py-36 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-10 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 gradient-aurora opacity-10" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[600px] rounded-full bg-primary/20 blur-[100px]" />

          <div className="relative">
            <span className="chapter-number">End of Documentary · Start of Conversation</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mt-4 mb-5">
              <span className="holo-text">Let's build something.</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10">
              Open to senior mobile engineering roles, product teams and meaningful collaborations.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto mb-8 text-left">
              <a
                href="mailto:tusharchovatiyatc31@gmail.com"
                className="glass-card p-4 flex items-center gap-3 group"
              >
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <div className="min-w-0">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Email</div>
                  <div className="text-sm truncate group-hover:text-primary transition-colors">
                    tusharchovatiyatc31@gmail.com
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
              </a>
              <div className="glass-card p-4 flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <div className="min-w-0">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Location</div>
                  <div className="text-sm">Surat, Gujarat · India</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              <Button asChild size="lg" className="gradient-primary text-primary-foreground hover:opacity-90 shadow-[0_0_30px_hsl(186_100%_60%/0.4)]">
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="glass border-primary/30 hover:border-primary">
                <a href="https://github.com/Eugeniuses" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="glass border-primary/30 hover:border-primary">
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </a>
              </Button>
            </div>

            <p className="mt-10 font-mono text-xs text-muted-foreground tracking-widest">
              · END OF JOURNEY · TO BE CONTINUED ·
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
