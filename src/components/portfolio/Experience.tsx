import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const items = [
  {
    year: "2025 — Now",
    role: "Student Ambassador",
    org: "Google Gemini",
    location: "Telangana, India",
    bullets: [
      "Designed campaigns and content driving Gemini awareness across campus.",
      "Hosted hands-on AI sessions and supported developer community events.",
    ],
  },
  {
    year: "2025",
    role: "Data Analytics Virtual Experience",
    org: "Deloitte · Forage",
    location: "Remote",
    bullets: [
      "Solved real-world business cases applying analytics & forensic technology.",
      "Translated structured data into decision-grade insights and narratives.",
    ],
  },
  {
    year: "2023 — 2024",
    role: "Android Developer Virtual Intern",
    org: "Google for Developers",
    location: "Remote",
    bullets: [
      "Shipped Android components using modern frameworks and tooling.",
      "Improved usability through tight collaboration between design and code.",
    ],
  },
  {
    year: "Ongoing",
    role: "Board Member · Content Lead",
    org: "Innovation & Entrepreneurship Club, MRU",
    location: "Hyderabad",
    bullets: [
      "Led content strategy and event communications for I&E initiatives.",
      "Helped organize hackathons and workshops with student & dev communities.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading kicker="03 — Experience" title="Where I've shown up." />
        <div className="relative mt-16">
          <div className="absolute left-3 top-2 bottom-2 hidden w-px bg-gradient-to-b from-transparent via-border to-transparent md:left-[10.5rem] md:block" />
          <div className="space-y-6">
            {items.map((it, i) => (
              <motion.div
                key={it.role}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="grid gap-4 md:grid-cols-[10rem_1fr] md:gap-10"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 rounded-full bg-[var(--lavender)] shadow-[0_0_12px_var(--lavender)]" />
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {it.year}
                  </div>
                </div>
                <div className="glass grain rounded-3xl p-6 transition-transform hover:-translate-y-0.5 hover:shadow-luxe">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl text-ink">
                      {it.role}{" "}
                      <span className="text-muted-foreground">· {it.org}</span>
                    </h3>
                    <span className="text-xs text-muted-foreground">{it.location}</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-[14.5px] leading-relaxed text-muted-foreground">
                    {it.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 flex-none rounded-full bg-[var(--lavender)]" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
