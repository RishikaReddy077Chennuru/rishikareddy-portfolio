import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-28 sm:py-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-luxe opacity-60 blur-3xl" />
      </div>
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs text-muted-foreground">
            <Mail className="h-3.5 w-3.5" /> Open inbox
          </span>
          <h2 className="mt-6 text-5xl tracking-[-0.03em] text-ink sm:text-7xl">
            Let's build{" "}
            <span className="font-display italic text-gradient">something</span>{" "}
            worth keeping.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Roles in AI, data, product or design — research collaborations,
            internships, founder bets. If it's interesting and well-intentioned,
            I'd love to hear from you.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:rishikareddychennuri@gmail.com"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-background shadow-luxe transition-transform hover:scale-[1.02]"
            >
              rishikareddychennuri@gmail.com
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-sm text-muted-foreground">
            <a href="https://linkedin.com/in/rishikareddychennuru" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-ink">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-ink">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Hyderabad, India
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--lavender)]" />
          © {new Date().getFullYear()} Rishika Reddy Chennuru
        </div>
        <div>Designed &amp; built with intention.</div>
      </div>
    </footer>
  );
}
