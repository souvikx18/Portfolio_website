import { motion, useInView } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin, Code2, Users, FolderGit2, Clock, ArrowUpRight, LucideIcon, Layers, Terminal } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const useCountUp = (end: number, duration = 2000, startOnView = false) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false });
  const started = useRef(false);

  useEffect(() => {
    if (!inView) {
      started.current = false;
      setCount(0);
      return;
    }
    started.current = true;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, end, duration]);

  return { count, ref };
};

const stats = [
  { icon: Clock, value: 2, suffix: "+", label: "Years Experience" },
  { icon: FolderGit2, value: 20, suffix: "+", label: "Projects Built" },
  { icon: Code2, value: 15, suffix: "+", label: "Technologies Used" },
  { icon: Briefcase, value: 100, suffix: "%", label: "Commitment to Quality" },
];

const timeline = [
  {
    title: "B.Tech in Computer Science",
    org: "Brainware University",
    orgUrl: "https://www.brainwareuniversity.ac.in/",
    period: "2024 – 2028",
    description: "Focused on full-stack development, data structures & algorithms, and core software engineering principles. Built multiple real-world projects applying scalable architecture and clean coding practices.",
    icon: GraduationCap,
    tag: "Education",
  },
  {
    title: "Application Architect & Developer",
    org: "Personal & Collaborative Projects",
    orgUrl: "https://www.reddit.com/r/learnprogramming/comments/ylcz5r/personal_projects_vs_team_collaboration/",
    period: "2024 – Present",
    description: "Architected and built full-stack web applications featuring secure authentication, REST APIs, and responsive UI. Emphasized scalability, performance optimization, and maintainable system design.",
    icon: Layers,
    tag: "Work",
  },
  {
    title: "Full-Stack Developer",
    org: "Self-Taught",
    orgUrl: "https://www.reddit.com/r/learnprogramming/comments/17hvsva/is_becoming_a_selftaught_programmer_realistic/",
    period: "2024 – Present",
    description: "Building scalable and secure web applications using React, Node.js, and modern development tools. Strong focus on clean code, performance optimization, and continuous learning.",
    icon: Terminal,
    tag: "Current",
  },
];

interface StatItemProps {
  stat: {
    icon: LucideIcon;
    value: number;
    suffix: string;
    label: string;
  };
  index: number;
}

const StatItem = ({ stat, index }: StatItemProps) => {
  const Icon = stat.icon;
  const { count, ref } = useCountUp(stat.value, 1800);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{
        delay: 0.2 + index * 0.1,
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
      whileHover={{
        y: -4,
        borderColor: "hsl(var(--primary) / 0.4)",
        transition: { duration: 0.05 }
      }}
      className="rounded-2xl border border-border/60 bg-card/40 p-5 text-center transition-all duration-75 hover:shadow-[0_0_20px_hsl(var(--primary)/0.08)] cursor-default"
    >
      <Icon className="w-5 h-5 text-primary mx-auto mb-3 opacity-60" />
      <div className="font-display text-2xl font-bold text-foreground tabular-nums">
        {count}{stat.suffix}
      </div>
      <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10 max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-sm font-semibold text-primary tracking-[0.2em] uppercase font-mono">
            About Me
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3 text-foreground">
            Crafting digital products <br className="hidden sm:block" />
            with <span className="text-gradient">purpose & precision</span>
          </h2>
        </motion.div>

        {/* Bio + Stats */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 mb-24">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 space-y-5"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              I’m a passionate full-stack developer from India, focused on building clean,
              scalable, and user-centric web applications. I enjoy turning complex problems
              into simple, elegant solutions through thoughtful design and efficient code.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With strong fundamentals in frontend and backend development, I continuously
              work on improving my skills in modern technologies like React, Node.js, and
              database systems. I believe great software is not just about functionality —
              it’s about performance, security, and user experience.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I’m always learning, building, and pushing myself to grow as a developer.
            </p>
            <div className="flex items-center gap-3 pt-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>📍 India — Open to remote opportunities</span>
            </div>
          </motion.div>

          {/* Animated Stats */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <StatItem key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mb-10"
        >
          <span className="text-sm font-semibold text-primary tracking-[0.2em] uppercase font-mono">
            Experience
          </span>
          <h3 className="font-display text-2xl md:text-3xl font-bold mt-2 text-foreground">
            Where I've been
          </h3>
        </motion.div>

        <div className="relative">
          {/* Gradient vertical line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-border to-border" />

          <div className="space-y-0">
            {timeline.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="relative pl-12 pb-6 last:pb-0 group"
                >
                  {/* Dot with pulse on current */}
                  <div className="absolute left-0 top-1 z-10">
                    <div className="absolute inset-0 w-10 h-10 rounded-full bg-primary/10 animate-ping" />
                    <div className="relative w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-75">
                      <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-75" />
                    </div>
                  </div>

                  {/* Content card */}
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.1 }}
                    className="rounded-xl border border-border/50 bg-card/30 p-4 hover:border-primary/20 hover:shadow-[0_0_30px_hsl(var(--primary)/0.05)] transition-all duration-75"
                  >
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                      <h4 className="font-display font-bold text-lg text-foreground tracking-tight group-hover:text-primary transition-colors duration-75">
                        {item.title}
                      </h4>
                      <span className="text-[10px] font-bold text-primary tracking-widest uppercase px-2 py-0.5 rounded-md border border-primary/20 bg-primary/5">
                        {item.tag}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-1.5">
                      {item.orgUrl ? (
                        <a
                          href={item.orgUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary font-medium flex items-center gap-1 hover:underline decoration-primary/30 underline-offset-4 transition-all"
                        >
                          {item.org}
                          <ArrowUpRight className="w-3 h-3 opacity-50" />
                        </a>
                      ) : (
                        <span className="text-sm text-primary font-medium flex items-center gap-1">
                          {item.org}
                          <ArrowUpRight className="w-3 h-3 opacity-50" />
                        </span>
                      )}
                      <div className="flex items-center gap-1.5 font-bold text-muted-foreground/60 text-[10px] uppercase tracking-[0.15em]">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm md:text-[15px] leading-relaxed font-medium tracking-tight opacity-90 group-hover:opacity-100 transition-opacity">
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
