import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import {
  Brain, Database, Code2, Palette, Cloud, Sparkles,
} from "lucide-react";

const groups = [
  {
    icon: Brain,
    title: "AI & ML",
    items: ["Machine Learning", "Deep Learning", "Generative AI", "Prompt Engineering", "RAG", "Gemini API"],
  },
  {
    icon: Database,
    title: "Data Science",
    items: ["Python", "SQL", "Statistical Modeling", "Data Mining", "Big Data Analytics", "Visualization"],
  },
  {
    icon: Code2,
    title: "Engineering",
    items: ["React", "TypeScript", "HTML / CSS", "Android", "Git", "REST APIs"],
  },
  {
    icon: Palette,
    title: "Design",
    items: ["UI / UX", "Figma", "Design Systems", "Mobile-First", "Responsive", "Motion"],
  },
  {
    icon: Cloud,
    title: "Cloud & Tools",
    items: ["AWS Cloud Foundations", "Database Mgmt", "Microsoft Copilot", "Project Mgmt"],
  },
  {
    icon: Sparkles,
    title: "Soft Edge",
    items: ["Storytelling", "Content Strategy", "Leadership", "Community Building"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-[var(--lavender-soft)] opacity-50 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading kicker="02 — Capabilities" title="Tools I think with." />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="glass group relative overflow-hidden rounded-3xl p-6 transition-all hover:-translate-y-1 hover:shadow-luxe"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-luxe opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-60" />
              <div className="relative">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--lavender-soft)] text-ink">
                  <g.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-medium text-ink">{g.title}</h3>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border/70 bg-background/60 px-2.5 py-1 text-[11.5px] text-muted-foreground transition-colors hover:border-[var(--lavender)] hover:text-ink"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
