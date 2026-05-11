import { motion } from "framer-motion";
import { Award, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const certs = [
  { name: "Guinness World Records — Agentic AI Hackathon", org: "Google for Developers & GDG Hyderabad", date: "Dec 2025", featured: true },
  { name: "Google Student Ambassador Program", org: "Google Developer Student Clubs", date: "Jan 2026", featured: true },
  { name: "AWS Academy Cloud Foundations", org: "AWS Academy", date: "Jan 2025" },
  { name: "Data Analytics Job Simulation", org: "Deloitte (Forage)", date: "Jul 2025" },
  { name: "Android Developer Virtual Internship", org: "Google for Developers", date: "Sep 2024" },
  { name: "Data Science & Analytics", org: "HP Foundation", date: "Nov 2024" },
  { name: "Illuminate Entrepreneurship Bootcamp", org: "E-Cell, IIT Bombay", date: "Sep 2025" },
  { name: "National Entrepreneurship Challenge 2025", org: "E-Cell, IIT Bombay", date: "Dec 2025" },
  { name: "What Is Generative AI", org: "LinkedIn Learning", date: "Dec 2025" },
  { name: "Microsoft Copilot — Prompt Writing", org: "LinkedIn Learning", date: "Jan 2026" },
  { name: "Python Essentials 1", org: "Cisco Networking Academy", date: "Jan 2026" },
  { name: "Software Engineer", org: "HackerRank", date: "Jan 2026" },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading kicker="05 — Credibility wall" title="Earned along the way." />

        {/* Marquee */}
        <div className="mt-14 marquee-mask overflow-hidden">
          <div className="flex w-max animate-marquee gap-3">
            {[...certs, ...certs].map((c, i) => (
              <div
                key={i}
                className="glass flex w-[300px] flex-none items-start gap-3 rounded-2xl p-4"
              >
                <div className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-[var(--lavender-soft)] text-ink">
                  <Award className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <div className="truncate text-sm text-ink">{c.name}</div>
                  <div className="truncate text-xs text-muted-foreground">{c.org} · {c.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured grid */}
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {certs.slice(0, 6).map((c, i) => (
            <motion.a
              key={c.name}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass group flex items-start justify-between gap-4 rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:shadow-luxe"
            >
              <div className="min-w-0">
                {c.featured && (
                  <span className="inline-block rounded-full bg-[var(--lavender-soft)] px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] text-ink">
                    Highlight
                  </span>
                )}
                <div className="mt-2 text-[15px] font-medium text-ink">{c.name}</div>
                <div className="mt-1 text-xs text-muted-foreground">{c.org} · {c.date}</div>
              </div>
              <ArrowUpRight className="h-4 w-4 flex-none text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
