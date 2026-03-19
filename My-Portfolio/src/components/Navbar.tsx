import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "py-3 px-4 md:px-12"
        : "py-6 px-4 md:px-8"
        }`}
    >
      <div className={`container mx-auto flex items-center justify-between transition-all duration-500 rounded-2xl px-6 md:px-10 ${scrolled ? "glass py-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] border-white/20" : "py-2"
        }`}>
        <motion.a
          href="#home"
          whileHover="hover"
          className="font-display text-2xl md:text-3xl font-black tracking-tighter group flex items-center relative py-1"
        >
          <motion.span
            className="text-primary inline-block"
            variants={{
              hover: { y: -8, scale: 1.1, rotate: -5 }
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            S
          </motion.span>
          <span className="text-foreground group-hover:text-primary transition-all duration-500 relative ml-[-1px]">
            ouvik
            <motion.span
              className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
            />
          </span>
        </motion.a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.href} className="relative group">
              <a
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-all font-medium py-1"
              >
                {item.label}
              </a>
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"
                layoutId="nav-underline"
              />
            </li>
          ))}
          <li className="flex items-center gap-6 pl-6 border-l border-border/50">
            <ThemeToggle />
            <a
              href="#contact"
              className="text-sm font-semibold px-6 py-2.5 rounded-full bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-95"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[-1] md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass border-t border-border overflow-hidden"
            >
              <ul className="flex flex-col items-center gap-4 py-8">
                {navItems.map((item) => (
                  <li key={item.href} className="w-full text-center">
                    <a
                      href={item.href}
                      className="text-lg text-muted-foreground hover:text-primary transition-colors font-medium block py-2"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="flex items-center gap-4 pt-4 border-t border-border/50 w-full justify-center">
                  <ThemeToggle />
                  <a
                    href="#contact"
                    className="font-semibold px-6 py-2.5 rounded-lg bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    onClick={() => setMobileOpen(false)}
                  >
                    Hire Me
                  </a>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
