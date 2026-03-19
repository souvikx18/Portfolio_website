import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 92 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 92 },
      { name: "React", level: 80 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "MySQL", level: 85 },
      { name: "REST APIs", level: 80 },
      { name: "JWT Auth", level: 80 },
    ],
  },
  {
    title: "Tools & More",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 65 },
      { name: "Supabase", level: 82 },
      { name: "Figma", level: 70 },
      { name: "Linux", level: 72 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <span className="text-sm font-bold text-primary tracking-[0.2em] uppercase font-mono mb-4 block">
            Expertise
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-black tracking-tighter text-foreground mb-6">
            Technical <span className="text-gradient">Proficiency</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            A comprehensive overview of my technical stack and proficiency levels across
            various domains of web development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: ci * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="glass p-8 md:p-10 rounded-[2rem] border-white/10 group transition-all duration-75 hover:border-primary/20 hover:bg-card/80 hover:shadow-[0_0_30px_hsl(var(--primary)/0.05)]"
            >
              <div className="flex items-center justify-between mb-10">
                <h3 className="font-display text-2xl font-bold text-foreground">{cat.title}</h3>
                <div className="w-10 h-1 height-1 bg-primary/20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "0%" }}
                    transition={{ duration: 1, delay: ci * 0.2 }}
                    className="w-full h-full bg-primary"
                  />
                </div>
              </div>

              <div className="space-y-8">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name} className="group/skill">
                    <div className="flex justify-between items-end mb-3">
                      <span className="text-foreground font-bold text-sm tracking-tight group-hover/skill:text-primary transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-muted-foreground font-mono text-xs font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-secondary/50 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: false }}
                        transition={{ duration: 1.2, delay: si * 0.05 + ci * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-primary via-primary to-purple-500 relative"
                      >
                        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.3)_50%,transparent_100%)] w-20 animate-[shimmer_2s_infinite]" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
