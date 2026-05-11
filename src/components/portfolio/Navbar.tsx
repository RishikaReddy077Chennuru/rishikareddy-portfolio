import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#projects" },
  { label: "Credentials", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-4 z-50 mx-auto flex justify-center px-4 transition-all duration-500 ${
        scrolled ? "top-3" : "top-6"
      }`}
    >
      <nav
        className={`glass flex items-center gap-1 rounded-full px-2 py-2 transition-all duration-500 ${
          scrolled ? "shadow-luxe" : ""
        }`}
      >
        <a
          href="#top"
          className="ml-2 mr-3 hidden items-center gap-2 text-sm font-medium tracking-tight text-ink sm:flex"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-[var(--lavender)] shadow-[0_0_12px_var(--lavender)]" />
          Rishika
        </a>
        <ul className="flex items-center gap-0.5">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`relative rounded-full px-3 py-1.5 text-xs font-medium transition-colors sm:text-[13px] ${
                  active === l.href
                    ? "text-ink"
                    : "text-muted-foreground hover:text-ink"
                }`}
              >
                {active === l.href && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-[var(--lavender-soft)]" />
                )}
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="ml-2 hidden rounded-full bg-ink px-4 py-1.5 text-xs font-medium text-background transition-transform hover:scale-[1.03] sm:inline-block"
        >
          Let's talk
        </a>
      </nav>
    </header>
  );
}
