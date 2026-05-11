import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import heroOrb from "@/assets/hero-orb.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-28 sm:pt-44 sm:pb-40">
      {/* Background ambient */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-luxe opacity-70 blur-3xl animate-float-slower" />
        <div className="absolute right-[10%] top-40 h-72 w-72 rounded-full bg-[var(--lavender-soft)] opacity-60 blur-3xl animate-float-slow" />
        <div className="absolute left-[8%] top-72 h-60 w-60 rounded-full bg-[oklch(0.95_0.04_70)] opacity-70 blur-3xl animate-float-slow" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-8 inline-flex w-full items-center justify-center"
        >
          <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs text-muted-foreground">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            Available for internships & collaborations · 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl text-center text-[44px] leading-[1.02] tracking-[-0.03em] text-ink sm:text-6xl md:text-7xl"
        >
          <span className="font-display italic text-gradient">Designing</span>{" "}
          intelligent
          <br className="hidden sm:block" /> digital experiences at the{" "}
          <span className="font-display italic text-gradient">intersection</span>{" "}
          of AI, data &amp; product.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          I'm <span className="text-ink font-medium">Rishika Reddy Chennuru</span> — a builder &amp; designer
          shaping thoughtful products with machine learning, generative AI, and
          interfaces people actually enjoy using.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-background shadow-luxe transition-transform hover:scale-[1.02]"
          >
            View selected work
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-ink transition-transform hover:scale-[1.02]"
          >
            Get in touch
          </a>
          <div className="ml-1 flex items-center gap-1">
            {[
              { Icon: Github, href: "https://github.com/" },
              { Icon: Linkedin, href: "https://linkedin.com/in/rishikareddychennuru" },
              { Icon: Mail, href: "mailto:rishikareddychennuri@gmail.com" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="glass flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-all hover:scale-110 hover:text-ink"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Floating glass card preview */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-20 max-w-4xl"
        >
          <div className="glass grain rounded-3xl p-3 shadow-luxe">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={heroOrb}
                alt=""
                width={1536}
                height={1536}
                className="h-[280px] w-full object-cover sm:h-[420px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute inset-x-6 bottom-6 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Currently</div>
                  <div className="mt-1 font-display text-2xl italic text-ink sm:text-3xl">
                    Building Sympto-Scan & exploring agentic AI.
                  </div>
                </div>
                <div className="glass rounded-full px-4 py-2 text-xs text-ink">
                  B.Tech · Data Science · GPA 8.25
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -left-6 -top-6 hidden h-24 w-24 rounded-2xl bg-luxe shadow-luxe sm:block animate-float-slow" />
          <div className="absolute -bottom-8 -right-6 hidden h-28 w-28 rounded-full bg-[var(--lavender-soft)] shadow-luxe sm:block animate-float-slower" />
        </motion.div>
      </div>
    </section>
  );
}
