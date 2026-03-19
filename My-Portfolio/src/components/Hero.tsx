import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const useTypewriter = (text: string, speed = 80, delay = 0) => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
        } else {
          setDone(true);
          clearInterval(interval);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayed, done };
};

const Hero = () => {
  const role = useTypewriter("FULL-STACK DEVELOPER", 50, 800);
  const greeting = useTypewriter("Hi, I'm", 60, 1800);
  const name = useTypewriter("Souvik", 80, 2400);
  const lastName = useTypewriter("Konar", 80, 3000);
  const [showDesc, setShowDesc] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    if (lastName.done) {
      const t = setTimeout(() => setShowDesc(true), 400);
      return () => clearTimeout(t);
    }
  }, [lastName.done]);

  useEffect(() => {
    if (showDesc) {
      const t = setTimeout(() => setShowButtons(true), 500);
      return () => clearTimeout(t);
    }
  }, [showDesc]);

  return (
    <section id="home" className="relative min-h-screen flex items-center section-padding overflow-hidden bg-grid">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] right-[10%] w-72 h-72 rounded-full bg-primary/10 blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-[15%] left-[5%] w-96 h-96 rounded-full bg-purple-500/10 blur-[120px] animate-pulse-glow delay-1000" />

        {/* Floating shapes */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 w-12 h-12 border border-primary/20 rounded-xl lg:block hidden"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-20 w-16 h-16 border border-purple-500/20 rounded-full lg:block hidden"
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2.5 mb-6 px-4 py-2 rounded-full glass border-white/10 group active:scale-95 transition-transform"
            >
              <Sparkles className="w-4 h-4 text-primary group-hover:rotate-12 transition-transform" />
              <div className="relative">
                {/* Ghost text to reserve space */}
                <span className="text-xs font-bold tracking-[0.3em] uppercase font-mono invisible">
                  FULL-STACK DEVELOPER |
                </span>
                <span className="absolute left-0 top-0 text-xs font-bold text-primary tracking-[0.3em] uppercase font-mono">
                  {role.displayed}
                  {!role.done && <span className="animate-pulse">|</span>}
                </span>
              </div>
            </motion.div>

            <div className="relative font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-8 tracking-tighter">
              {/* Ghost text to reserve space */}
              <h1 className="invisible">
                <span className="text-foreground">Hi, I'm</span>
                <br />
                <span className="text-gradient">Souvik Konar |</span>
              </h1>

              <h1 className="absolute inset-0">
                <span className="text-foreground">
                  {greeting.displayed}
                </span>
                <br />
                <span className="text-gradient drop-shadow-sm">
                  {name.displayed} {lastName.displayed}
                  {(!name.done || !lastName.done) && <span className="animate-pulse text-primary font-normal">|</span>}
                </span>
              </h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showDesc ? 1 : 0, y: showDesc ? 0 : 20 }}
              transition={{ duration: 0.8 }}
              className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-medium"
            >
              I build high-performance, visually stunning web applications.
              Specializing in React, Tailwind CSS, and modern backend architectures.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{
                opacity: showButtons ? 1 : 0,
                scale: showButtons ? 1 : 0.9,
                y: showButtons ? 0 : 20
              }}
              transition={{ duration: 0.5 }}
              className={`flex flex-wrap justify-center lg:justify-start gap-5 ${showButtons ? "" : "pointer-events-none"}`}
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all active:scale-95"
              >
                View Projects
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>
              <a
                href="/resume.html"
                download="Souvik_Konar_Resume.html"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full glass border-white/20 text-foreground font-bold hover:bg-white/10 transition-all active:scale-95"
              >
                <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                Resume
              </a>
            </motion.div>
          </div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative group">
              {/* Complex glow effect */}
              <div className="absolute -inset-10 rounded-full bg-primary/20 blur-[60px] animate-pulse-glow group-hover:bg-primary/30 transition-colors" />
              <div className="absolute -inset-10 rounded-full bg-purple-500/10 blur-[80px] animate-pulse-glow delay-700" />

              {/* Rotating geometric frame */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border border-primary/20 opacity-50"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 rounded-full border border-purple-500/10 opacity-30"
              />

              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] rounded-full overflow-hidden glass border-white/20 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] group-hover:rotate-1">
                <img
                  src={profileImg}
                  alt="Souvik Konar"
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
