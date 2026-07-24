"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Eyebrow from "../ui/Eyebrow";
import { siteConfig } from "../../lib/site-config";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh w-full items-end overflow-hidden  pt-32">
      {/* Cinematic background: swap the <video> source for real jobsite footage.
          poured-concrete.mp4 / drone-flyover.mp4 in /public/video/ */}
      <div className="absolute inset-0 -z-30">
        <video
          className="h-full w-full object-cover opacity-[0.55] z-50 absolute inset-0"
          autoPlay
          muted
          loop
          playsInline
          controls
          poster=""
        >
          <source src="/video/hero-loop-720p.mp4" type="video/mp4" />
        </video>
        
      </div>

      {/* Dark gradient overlay for legibility */}
      <div className="absolute inset-0 -z-20 bg-linear-to-t from-ink via-ink/70 to-ink/30" />
      <div className="absolute inset-0 -z-20 bg-linear-to-r from-ink/60 via-transparent to-ink/60" />

      {/* Animated construction grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(237,234,227,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(237,234,227,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 90% 70% at 50% 40%, black 40%, transparent 90%)",
        }}
      />

      <Container className="relative z-10 pb-28 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Eyebrow light className="mb-6">
            {siteConfig.geo.coordLabel}
          </Eyebrow>

          <h1 className="max-w-4xl font-display text-[15vw] leading-[0.9] font-extrabold uppercase tracking-tight text-concrete text-balance sm:text-[9vw] md:text-[6.4vw] lg:text-[5.6rem]">
            Concrete, poured
            <br />
            with <span className="text-oxblood-light">precision.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-concrete/75 md:text-lg">
            Trez Construction Group builds driveways, patios, foundations, and
            structures engineered for Central Texas ground — backed by a crew
            that shows up, stays on schedule, and stands behind the work.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#contact" variant="primary">
              Get Free Estimate
            </Button>
            <Button href="#projects" variant="secondary" icon={false}>
              View Projects
            </Button>
          </div>
        </motion.div>

        {/* Floating glass stat cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 grid grid-cols-2 gap-3 md:mt-20 md:flex md:flex-wrap md:gap-4"
        >
          {siteConfig.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-none border border-concrete/12 bg-charcoal/40 px-5 py-4 backdrop-blur-md md:px-7 md:py-5"
            >
              <div className="font-display text-2xl font-bold text-concrete md:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 font-mono text-[10px] tracking-[0.18em] text-steel uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </Container>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="font-mono text-[10px] tracking-[0.3em] text-steel">SCROLL</span>
        <motion.span
          className="h-8 w-px bg-steel/60"
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}
