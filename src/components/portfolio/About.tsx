import { motion } from "framer-motion";
import portrait from "@/assets/portrait.jpg";
import { SectionHeading } from "./SectionHeading";

const traits = [
  { k: "Design taste", v: "Obsessed with detail, restraint, and rhythm." },
  { k: "Engineering", v: "Comfortable across Python, ML, web & mobile." },
  { k: "Mindset", v: "Builder first — ship, learn, refine." },
  { k: "Edge", v: "AI-native: generative tools woven into the workflow." },
];

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading kicker="01 — About" title="A short story behind the work." />
        <div className="mt-14 grid gap-12 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5"
          >
            <div className="glass grain relative overflow-hidden rounded-3xl p-3 shadow-luxe">
              <img
                src={portrait}
                alt="Rishika Reddy Chennuru"
                loading="lazy"
                width={1024}
                height={1280}
                className="h-[460px] w-full rounded-2xl object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 glass flex items-center justify-between rounded-2xl px-4 py-3 text-xs">
                <span className="text-ink font-medium">Hyderabad, India</span>
                <span className="text-muted-foreground">EST. 2023 → present</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-7"
          >
            <p className="font-display text-3xl leading-[1.15] tracking-tight text-ink sm:text-4xl">
              I think of products as <em className="text-gradient">conversations</em> —
              between data, intent, and the person on the other side of the screen.
            </p>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                I'm a Data Science undergraduate at Malla Reddy University, currently in my
                fifth semester. My work sits where machine learning meets thoughtful
                interface design — building tools that feel as considered as they are
                capable.
              </p>
              <p>
                I've represented Google as a Student Ambassador, shipped real-world
                analytics work with Deloitte, led content for my university's I&amp;E club,
                and stacked credentials across AI, cloud, and software engineering. I'm
                most alive when an idea moves from a sketch to a working prototype someone
                can actually use.
              </p>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {traits.map((t, i) => (
                <motion.div
                  key={t.k}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
                  className="glass rounded-2xl p-4 transition-transform hover:-translate-y-0.5"
                >
                  <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {t.k}
                  </div>
                  <div className="mt-1.5 text-sm text-ink">{t.v}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
