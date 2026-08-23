"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import Button from "../ui/Button";
import Breadcrumbs from "../ui/Breadcrumbs";
import ServiceAreaMap from "../ui/ServiceAreaMap";
import type { ServiceArea } from "../../lib/types";

export default function ServiceAreaHero({
  area,
  hasProjects,
}: {
  area: ServiceArea;
  hasProjects: boolean;
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
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Service Areas" },
                { label: area.name },
              ]}
            />

            <Eyebrow className="mt-7 mb-5">Service Area</Eyebrow>

            <h1 className="max-w-2xl font-display text-5xl font-extrabold uppercase tracking-tight text-concrete sm:text-6xl md:text-7xl">
              {area.localCopy?.headline ?? `Serving ${area.name}${area.state ? `, ${area.state}` : ""}`}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-concrete/75 md:text-lg">
              {area.localCopy?.intro ?? area.shortDescription}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="#contact" variant="primary">
                Get Free Estimate
              </Button>
              {hasProjects && (
                <Button href="#area-projects" variant="secondary" icon={false}>
                  See Work in {area.name}
                </Button>
              )}
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <ServiceAreaMap />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
