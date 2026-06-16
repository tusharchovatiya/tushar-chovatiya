import { useEffect, useState } from "react";

const chapters = [
  { id: "intro", label: "Begin" },
  { id: "ch1", label: "Origins" },
  { id: "ch2", label: "Lockdown" },
  { id: "ch3", label: "First Step" },
  { id: "ch4", label: "Fear" },
  { id: "ch5", label: "Rajkot" },
  { id: "ch6", label: "Voice" },
  { id: "ch7", label: "Techvoot" },
  { id: "ch8", label: "Global" },
  { id: "ch9", label: "NFC" },
  { id: "ch10", label: "Products" },
  { id: "ch11", label: "AI Studio" },
  { id: "ch12", label: "Numbers" },
  { id: "ch13", label: "Future" },
  { id: "recruiter", label: "Why Me" },
  { id: "contact", label: "Contact" },
];

const ChapterNav = () => {
  const [active, setActive] = useState("intro");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    chapters.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <nav
      aria-label="Story navigation"
      className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-2"
    >
      {chapters.map((c) => (
        <a
          key={c.id}
          href={`#${c.id}`}
          className="group flex items-center gap-3 justify-end"
          aria-label={c.label}
        >
          <span
            className={`text-xs font-mono transition-all duration-300 ${
              active === c.id ? "opacity-100 text-primary" : "opacity-0 group-hover:opacity-70 text-muted-foreground"
            }`}
          >
            {c.label}
          </span>
          <span
            className={`block rounded-full transition-all duration-300 ${
              active === c.id
                ? "h-2.5 w-2.5 bg-primary shadow-[0_0_12px_hsl(186_100%_60%/0.8)]"
                : "h-1.5 w-1.5 bg-muted-foreground/40 group-hover:bg-primary/70"
            }`}
          />
        </a>
      ))}
    </nav>
  );
};

export default ChapterNav;
