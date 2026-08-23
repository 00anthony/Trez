"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import Button from "../ui/Button";
import Breadcrumbs from "../ui/Breadcrumbs";
import type { Audience, Service } from "../../lib/types";

export default function AudienceHero({
  audience,
  services,
}: {
  audience: Audience;
  services: Service[];
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: audience.name }]} />

          <Eyebrow className="mt-7 mb-5">{audience.name}</Eyebrow>

          <h1 className="max-w-2xl font-display text-5xl font-extrabold uppercase tracking-tight text-concrete sm:text-6xl md:text-7xl">
            {audience.copy?.heroHeadline ?? audience.name}
          </h1>

          {audience.copy?.heroDescription && (
            <p className="mt-6 max-w-xl text-base leading-relaxed text-concrete/75 md:text-lg">
              {audience.copy.heroDescription}
            </p>
          )}

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#contact" variant="primary">
              Get Free Estimate
            </Button>
          </div>
        </motion.div>

        {services.length > 0 && (
          <div className="mt-16 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/${audience.slug}/services/${service.slug}`}
                className="border border-charcoal-2 bg-charcoal/40 px-5 py-4 text-sm text-concrete/80 transition-colors hover:border-oxblood-light hover:text-concrete"
              >
                {service.name}
              </Link>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
