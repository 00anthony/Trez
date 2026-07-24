import Container from "../ui/Container";
import { siteConfig } from "../../lib/site-config";
import { services } from "../../lib/data";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative border-t border-charcoal-2 bg-charcoal pt-20 pb-28 md:pb-16">
      <Container>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center border border-oxblood-light/60 font-display text-lg font-bold text-concrete">
                T
              </span>
              <span className="font-display text-lg font-semibold uppercase tracking-wide text-concrete">
                Trez Construction
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-concrete/55">
              Premium concrete and general contracting for {siteConfig.serviceArea}.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={siteConfig.social.facebook}
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center border border-charcoal-2 text-concrete/60 hover:border-oxblood-light hover:text-concrete"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                  <path d="M13.5 21v-8.15h2.73l.41-3.17h-3.14V7.67c0-.92.25-1.54 1.57-1.54h1.68V3.3A22.6 22.6 0 0 0 14.4 3.2c-2.35 0-3.96 1.43-3.96 4.07v2.41H7.7v3.17h2.74V21h3.06Z" />
                </svg>
              </a>
              <a
                href={siteConfig.social.instagram}
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center border border-charcoal-2 text-concrete/60 hover:border-oxblood-light hover:text-concrete"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                  <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
                  <circle cx="12" cy="12" r="3.6" />
                  <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-[11px] tracking-[0.14em] text-steel uppercase">
              Services
            </h4>
            <ul className="mt-5 space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <a href="#services" className="text-sm text-concrete/65 hover:text-concrete">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] tracking-[0.14em] text-steel uppercase">
              Company
            </h4>
            <ul className="mt-5 space-y-2.5">
              {[
                { label: "About", href: "#about" },
                { label: "Projects", href: "#projects" },
                { label: "Process", href: "#process" },
                { label: "Reviews", href: "#testimonials" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-concrete/65 hover:text-concrete">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] tracking-[0.14em] text-steel uppercase">
              Contact
            </h4>
            <ul className="mt-5 space-y-2.5 text-sm text-concrete/65">
              <li>
                <a href={siteConfig.phoneHref} className="hover:text-concrete">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-concrete">
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-charcoal-2 pt-8 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px] text-steel">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="font-mono text-[11px] tracking-[0.14em] text-steel uppercase">
            {siteConfig.geo.coordLabel}
          </p>
        </div>
      </Container>
    </footer>
  );
}
