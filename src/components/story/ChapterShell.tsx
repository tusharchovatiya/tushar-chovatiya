import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  id: string;
  index: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  align?: "left" | "center";
};

const ChapterShell = ({ id, index, title, subtitle, children, align = "left" }: Props) => {
  return (
    <section
      id={id}
      className="relative py-28 md:py-40 px-4 md:px-6"
      aria-label={title}
    >
      <div className="container mx-auto max-w-6xl relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={`mb-10 md:mb-14 ${align === "center" ? "text-center mx-auto max-w-3xl" : ""}`}
        >
          <div className={`flex items-center gap-3 mb-5 ${align === "center" ? "justify-center" : ""}`}>
            <span className="h-px w-10 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <span className="chapter-number">Chapter {index}</span>
            <span className="h-px w-10 bg-gradient-to-r from-primary via-transparent to-transparent" />
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="holo-text">{title}</span>
          </h2>
          {subtitle && (
            <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl">
              {subtitle}
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default ChapterShell;
