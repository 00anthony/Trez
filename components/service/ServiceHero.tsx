"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import Button from "../ui/Button";
import Breadcrumbs from "../ui/Breadcrumbs";
import type { ServiceContent } from "../../lib/types";

export default function ServiceHero({
  content,
  hasRelatedProjects,
  breadcrumbs,
}: {
  content: ServiceContent;
  hasRelatedProjects: boolean;
  breadcrumbs: { label: string; href?: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-ink pt-36 pb-20 md:pb-28">
      <div className="absolute inset-0 -z-20">
        {content.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={content.image} alt="" className="h-full w-full object-cover opacity-40" />
        )}
      </div>
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-ink via-ink/85 to-ink/40" />
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

          <Eyebrow className="mt-7 mb-5">What We Build</Eyebrow>

          <h1 className="max-w-3xl font-display text-5xl font-extrabold uppercase tracking-tight text-concrete sm:text-6xl md:text-7xl">
            {content.name}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-concrete/75 md:text-lg">
            {content.description}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#contact" variant="primary">
              Get Free Estimate
            </Button>
            {hasRelatedProjects && (
              <Button href="#related-projects" variant="secondary" icon={false}>
                See Related Work
              </Button>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
