import { motion } from "framer-motion";

export function SectionHeading({
  kicker,
  title,
  align = "left",
}: {
  kicker: string;
  title: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className={align === "center" ? "text-center" : ""}
    >
      <div
        className={`flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-8 bg-border" />
        {kicker}
      </div>
      <h2 className="mt-4 max-w-3xl text-4xl tracking-[-0.025em] text-ink sm:text-5xl">
        <span className="font-display italic text-gradient">{title.split(" ")[0]}</span>{" "}
        {title.split(" ").slice(1).join(" ")}
      </h2>
    </motion.div>
  );
}
