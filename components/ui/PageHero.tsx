"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import Eyebrow from "./Eyebrow";
import Button from "./Button";
import Breadcrumbs, { Crumb } from "./Breadcrumbs";
import { siteConfig } from "../../lib/site-config";

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  showAudienceLinks = true,
  ctaLabel = "Get Free Estimate",
  ctaHref = "#contact",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumbs: Crumb[];
  showAudienceLinks?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink pt-36 pb-20 md:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(237,234,227,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(237,234,227,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Breadcrumbs items={breadcrumbs} />

          <Eyebrow className="mt-7 mb-5">{eyebrow}</Eyebrow>

          <h1 className="max-w-3xl font-display text-5xl font-extrabold uppercase tracking-tight text-concrete sm:text-6xl md:text-7xl">
            {title}
          </h1>

          {description && (
            <p className="mt-6 max-w-xl text-base leading-relaxed text-concrete/75 md:text-lg">
              {description}
            </p>
          )}

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href={ctaHref} variant="primary">
              {ctaLabel}
            </Button>
            {showAudienceLinks && siteConfig.features.audienceRoutes && (
              <>
                <Button href="/residential" variant="secondary" icon={false}>
                  For Homeowners
                </Button>
                <Button href="/commercial" variant="secondary" icon={false}>
                  For Businesses
                </Button>
              </>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
