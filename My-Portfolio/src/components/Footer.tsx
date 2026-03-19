
const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-12 px-6 md:px-12 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto flex items-center justify-center relative z-10">
        <p className="text-sm md:text-base font-black uppercase tracking-[0.2em] text-foreground/80">
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
