import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const projects = [
  {
    n: "01",
    title: "Sympto-Scan",
    tag: "AI · Healthcare",
    blurb:
      "A full-stack web app delivering preliminary symptom analysis through Google Gemini and a custom RAG pipeline.",
    impact: "Reduces self-diagnosis friction with grounded, citation-backed responses.",
    stack: ["Gemini API", "RAG", "React", "Python"],
    accent: "from-[oklch(0.92_0.08_310)] to-[oklch(0.96_0.04_70)]",
  },
  {
    n: "02",
    title: "Task Management Dashboard",
    tag: "Product · Collaboration",
    blurb:
      "A drag-and-drop workspace for teams with real-time updates, granular states, and a calm, focused UI.",
    impact: "Designed for clarity over feature-bloat — every interaction earns its place.",
    stack: ["React", "TypeScript", "Node.js", "MongoDB"],
    accent: "from-[oklch(0.94_0.05_280)] to-[oklch(0.96_0.04_220)]",
  },
  {
    n: "03",
    title: "Data Visualization Platform",
    tag: "Data · Analytics",
    blurb:
      "Interactive analytics canvas with custom charts and a real-time processing layer for business teams.",
    impact: "Turns raw datasets into stories executives can act on in seconds.",
    stack: ["Python", "D3.js", "Flask", "PostgreSQL"],
    accent: "from-[oklch(0.94_0.06_85)] to-[oklch(0.95_0.05_310)]",
  },
  {
    n: "04",
    title: "Mobile-First Design System",
    tag: "Design · System",
    blurb:
      "A reusable component library with design tokens covering color, type, motion, and elevation.",
    impact: "Scales product UI without sacrificing personality or accessibility.",
    stack: ["Figma", "Design Tokens", "CSS", "JavaScript"],
    accent: "from-[oklch(0.95_0.04_180)] to-[oklch(0.94_0.06_300)]",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading kicker="04 — Selected work" title="Featured projects." />
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-ink"
          >
            All on GitHub
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.07 }}
              className="group relative overflow-hidden rounded-3xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-90`} />
              <div className="absolute inset-0 grain opacity-100" />
              <div className="relative flex min-h-[420px] flex-col justify-between p-7 sm:p-9">
                <div className="flex items-start justify-between">
                  <span className="font-display text-5xl italic text-ink/30">{p.n}</span>
                  <span className="glass rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-ink/80">
                    {p.tag}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-ink/70">
                    {p.blurb}
                  </p>
                  <p className="mt-3 max-w-md text-[13px] italic text-ink/60">
                    → {p.impact}
                  </p>
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-full bg-background/60 px-2.5 py-1 text-[11px] text-ink/75 backdrop-blur"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href="#"
                        className="glass flex h-9 w-9 items-center justify-center rounded-full text-ink transition-transform hover:scale-110"
                        aria-label="GitHub"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3.5 py-2 text-xs font-medium text-background transition-transform hover:scale-[1.03]"
                      >
                        Live demo
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
