"use client";
import { useEffect, useState } from "react";
import { personal } from "@/data/portfolio";
import { X, Menu } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const links = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);
  const [mounted,  setMounted]  = useState(false);

  useEffect(() => {
    setMounted(true);
    const handler = () => setScrolled(window.scrollY > 40);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-12 h-14 transition-all duration-200 ${
          mounted && scrolled
            ? "bg-background/90 backdrop-blur-sm border-b border-border/60"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a
          href="#hero"
          className="font-semibold text-sm tracking-tight flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
        >
          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
            <span className="text-[10px] text-primary-foreground font-bold">
              {personal.shortName.charAt(0)}
            </span>
          </div>
          <span className="hidden sm:inline-block text-foreground">{personal.shortName}</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-4 pl-4 border-l border-border/50">
            <ThemeToggle />
            <a
              href={`mailto:${personal.email}`}
              className="text-sm font-medium px-4 py-1.5 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="p-2 -mr-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu — compact drop-down panel */}
      {mounted && open && (
        <div
          id="mobile-menu"
          className="fixed top-14 left-0 right-0 z-[99] border-b border-border bg-background/95 backdrop-blur-sm md:hidden"
        >
          <nav className="flex flex-col px-6 py-4 gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                className="text-sm font-medium text-muted-foreground hover:text-foreground py-3 border-b border-border/40 last:border-0 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href={`mailto:${personal.email}`}
              className="mt-3 text-sm font-medium px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-center"
              onClick={close}
            >
              Hire Me
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
