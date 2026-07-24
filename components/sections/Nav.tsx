"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { siteConfig } from "../../lib/site-config";

const links = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "border-b border-charcoal-2 bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container className="flex h-18 items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center border border-oxblood-light/60 font-display text-lg font-bold text-concrete">
            T
          </span>
          <span className="font-display text-xl font-semibold uppercase tracking-wide text-concrete">
            Trez <span className="text-steel">Construction</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[12px] tracking-[0.14em] uppercase text-concrete/65 transition-colors hover:text-concrete"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 font-mono text-sm text-concrete/85 hover:text-concrete"
          >
            <Phone className="h-3.5 w-3.5 text-oxblood-light" />
            {siteConfig.phone}
          </a>
          <Button href="#contact" className="!py-3 !px-5 !text-xs">
            Free Estimate
          </Button>
        </div>

        <button
          className="p-2 text-concrete lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-charcoal-2 bg-ink lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 font-mono text-sm tracking-[0.1em] uppercase text-concrete/80"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={siteConfig.phoneHref}
                className="mt-2 flex items-center gap-2 py-2 font-mono text-sm text-concrete"
              >
                <Phone className="h-4 w-4 text-oxblood-light" />
                {siteConfig.phone}
              </a>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
