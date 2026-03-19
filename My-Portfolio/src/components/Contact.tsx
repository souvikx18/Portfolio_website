import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, MessageCircle } from "lucide-react";

const Contact = () => {

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 w-full h-full bg-grid opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20"
        >
          <span className="text-sm font-bold text-primary tracking-[0.2em] uppercase font-mono mb-4 block">
            Connectivity
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-black tracking-tighter text-foreground mb-6">
            Let's <span className="text-gradient">Collaborate</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            Have an idea or a project in mind? Reach out and let's build something extraordinary together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="lg:col-span-5 space-y-12"
          >
            <div className="space-y-8">
              {[
                { icon: Mail, label: "skonar566@gmail.com", title: "Email Me" },
                { icon: Phone, label: "+91 99074 88093", title: "Call Me" },
                { icon: MapPin, label: "India", title: "Location" },
              ].map(({ icon: Icon, label, title }) => (
                <div key={label} className="group flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center border-white/10 shrink-0 group-hover:bg-primary group-hover:rotate-6 transition-all duration-500">
                    <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-black uppercase tracking-widest text-muted-foreground">{title}</h4>
                    <span className="text-foreground font-bold text-lg block">{label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-widest text-muted-foreground">Follow Me</h4>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com/souvikx18" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/souvik-konar-4a8194350" },
                  { icon: Twitter, href: "https://twitter.com/souvik_konar" },
                ].map(({ icon: Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:rotate-[-6deg] hover:-translate-y-1 transition-all duration-500 border-white/10"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="lg:col-span-7"
          >
            <div className="glass rounded-[2.5rem] p-8 md:p-12 space-y-8 border-white/10 relative overflow-hidden group h-full flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Connect Directly</h3>
                <p className="text-muted-foreground">
                  Choose your preferred method to get in touch. I usually respond within 24 hours.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:skonar566@gmail.com"
                  className="w-full relative z-10 cursor-pointer flex items-center justify-between p-6 rounded-2xl bg-secondary/30 border border-white/5 hover:bg-primary/10 hover:border-primary/30 transition-all group/btn"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover/btn:bg-primary transition-colors">
                      <Mail className="w-5 h-5 text-primary group-hover/btn:text-white" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-foreground text-lg">Send an Email</h4>
                      <p className="text-sm text-muted-foreground max-w-[200px] truncate sm:max-w-none">skonar566@gmail.com</p>
                    </div>
                  </div>
                  <Send className="w-5 h-5 text-muted-foreground group-hover/btn:text-primary group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-all" />
                </a>

                <a
                  href="tel:+919907488093"
                  className="w-full flex items-center justify-between p-6 rounded-2xl bg-secondary/30 border border-white/5 hover:bg-primary/10 hover:border-primary/30 transition-all group/btn relative z-10 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover/btn:bg-primary transition-colors">
                      <Phone className="w-5 h-5 text-primary group-hover/btn:text-white" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-foreground text-lg">Give me a Call</h4>
                      <p className="text-sm text-muted-foreground max-w-[200px] truncate sm:max-w-none">+91 99074 88093</p>
                    </div>
                  </div>
                  <Send className="w-5 h-5 text-muted-foreground group-hover/btn:text-primary group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-all" />
                </a>

                <a
                  href="https://wa.me/919907488093"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-6 rounded-2xl bg-secondary/30 border border-white/5 hover:bg-primary/10 hover:border-primary/30 transition-all group/btn relative z-10 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover/btn:bg-primary transition-colors">
                      <MessageCircle className="w-5 h-5 text-primary group-hover/btn:text-white" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-foreground text-lg">WhatsApp</h4>
                      <p className="text-sm text-muted-foreground">Chat with me instantly</p>
                    </div>
                  </div>
                  <Send className="w-5 h-5 text-muted-foreground group-hover/btn:text-primary group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-all" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
