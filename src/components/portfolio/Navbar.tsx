import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#ai-lab", label: "AI Lab" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border/40" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#" className="flex items-center gap-2 font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg gradient-primary text-primary-foreground">
            TC
          </span>
          <span className="hidden sm:inline gradient-text">Tushar Chovatiya</span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
            >
              {l.label}
            </a>
          ))}
          <Button asChild variant="glass" size="sm" className="ml-2">
            <Link to="/story">
              <Sparkles className="mr-1 h-3.5 w-3.5" /> Story Journey
            </Link>
          </Button>
          <Button asChild variant="hero" size="sm">
            <a href="#contact">Hire Me</a>
          </Button>
        </div>
        <button
          className="md:hidden p-2 rounded-lg hover:bg-secondary/50"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden glass border-t border-border/40 animate-fade-up">
          <div className="container mx-auto flex flex-col px-4 py-4 gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-secondary/50 text-sm"
              >
                {l.label}
              </a>
            ))}
            <Link
              to="/story"
              onClick={() => setOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-secondary/50 text-sm flex items-center gap-2 text-primary"
            >
              <Sparkles className="h-3.5 w-3.5" /> Story Journey
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
