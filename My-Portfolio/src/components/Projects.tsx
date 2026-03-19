import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Tic-Tac-Toe Game",
    description: "A beautifully designed, interactive Tic-Tac-Toe experience featuring personalized user accounts, seamless multiplayer gameplay, and competitive score tracking.",
    tech: ["HTML5", "CSS3", "JavaScript", "Node.js", "MySQL"],
    live: "https://tic-tac-toe-souvik018.netlify.app/",
    github: "https://github.com/souvikx18/TIC-TAC-TOE",
    color: "from-cyan-500/20 to-blue-500/20",
    image: "/projects/tic-tac-toe.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-1/4 w-[400px] h-[400px] bg-purple-500/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-sm font-bold text-primary tracking-[0.3em] uppercase font-mono block mb-4">
            Showcase
          </span>
          <h2 className="font-display text-4xl md:text-7xl font-black tracking-tighter text-foreground mb-8">
            Selected <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary/20 mx-auto rounded-full overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              whileInView={{ x: "0%" }}
              transition={{ duration: 0.8 }}
              className="w-full h-full bg-primary"
            />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group relative h-full"
            >
              {/* Professional subtle hover effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative glass h-full flex flex-col rounded-[2.5rem] overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] group-hover:border-white/20">
                {/* Visual Header */}
                <div className={`relative h-64 md:h-80 bg-gradient-to-br ${project.color} overflow-hidden`}>
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {(project as any).image && (
                    <img
                      src={(project as any).image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors duration-500" />



                </div>

                <div className="p-8 md:p-10 flex flex-col flex-1">
                  <h3 className="font-display text-2xl md:text-3xl font-black text-foreground mb-4 uppercase tracking-tight">{project.title}</h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 font-medium">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-6 mt-auto">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary font-black uppercase tracking-widest group/link"
                    >
                      <ExternalLink className="w-4 h-4 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                      Live Preview
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground font-black uppercase tracking-widest transition-colors group/git"
                    >
                      <Github className="w-4 h-4 transition-transform group-hover/git:scale-110" />
                      Source
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
