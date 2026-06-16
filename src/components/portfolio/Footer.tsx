const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Tushar Chovatiya. Crafted with care.</p>
        <p>AI-Powered Mobile Product Developer • Gujarat, India</p>
      </div>
    </footer>
  );
};

export default Footer;
