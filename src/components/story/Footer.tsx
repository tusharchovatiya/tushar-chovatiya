const Footer = () => {
  return (
    <footer className="relative py-10 px-4 border-t border-border/50">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p className="font-mono text-xs tracking-widest">
          © {new Date().getFullYear()} TUSHAR CHOVATIYA · CRAFTED WITH CARE
        </p>
        <p className="font-mono text-xs tracking-widest">
          MOBILE · FLUTTER · KMP · AI EXPLORER
        </p>
      </div>
    </footer>
  );
};

export default Footer;
