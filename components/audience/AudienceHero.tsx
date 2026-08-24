"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import Button from "../ui/Button";
import Breadcrumbs from "../ui/Breadcrumbs";
import { getHeroVideo } from "../../lib/media";
import type { Audience } from "../../lib/types";

export default function AudienceHero({ audience }: { audience: Audience }) {
  return (
    <section className="relative flex min-h-[70svh] w-full items-end overflow-hidden pt-32">
      <div className="absolute inset-0 -z-30">
        <video
          className="h-full w-full object-cover opacity-[0.95] absolute inset-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={getHeroVideo(audience.slug)} type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 -z-20 bg-linear-to-t from-ink via-ink/55 to-ink/15" />
      <div className="absolute inset-0 -z-20 bg-linear-to-r from-ink/60 via-transparent to-ink/60" />

      <Container className="relative z-10 pb-20 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: audience.name }]} />

          <Eyebrow light className="mt-6 mb-5">
            {audience.name}
          </Eyebrow>

          <h1 className="max-w-3xl font-display text-5xl font-extrabold uppercase tracking-tight text-concrete sm:text-6xl md:text-7xl">
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
            <Button href="#services" variant="secondary" icon={false}>
              View Services
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
