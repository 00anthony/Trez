"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import Image from "next/image";
import Container from "../../components/ui/Container";
import Eyebrow from "../../components/ui/Eyebrow";
import Reveal from "../../components/ui/Reveal";
import SectionNumber from "../../components/ui/SectionNumber";
import { processSteps } from "../../lib/data";

const hues = [356, 4, 350, 8];

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-charcoal py-28 md:py-36">
      <SectionNumber n="03" className="text-ink/40" />

      <Container className="relative">
        <Reveal>
          <Eyebrow>How It Works</Eyebrow>
          <h2 className="mt-5 max-w-xl font-display text-4xl font-bold uppercase tracking-tight text-concrete sm:text-5xl md:text-6xl">
            From estimate
            <br />
            to walkthrough
          </h2>
        </Reveal>
      </Container>

      {/* Desktop: stacked diagonal image panels */}
      <div className="md:grid md:grid-cols-4 gap-6 mt-16 hidden  ">
        {processSteps.map((step, ) => (
          <ProcessPanel key={step.step} step={step} />
        ))}
      </div>

      {/* Mobile: snap-scroll spring carousel */}
      <div className="mt-14 md:hidden">
        <ProcessCarousel />
      </div>
    </section>
  );
}

function ProcessPanel({
  step,
}: {
  step: (typeof processSteps)[number];
}) {
  return (
    <div className="group relative h-[460px] overflow-hidden border border-charcoal-2">
      <Image
        src={step.image}
        alt={step.title}
        fill
        sizes="25vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-7">
        <span className="font-mono text-sm text-oxblood-light">
          {step.step}
        </span>

        <h3 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-concrete">
          {step.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-concrete/80">
          {step.description}
        </p>
      </div>

      <span className="pointer-events-none absolute right-3 top-3 font-display text-6xl font-black text-white/40">
        {step.step}
      </span>
    </div>
  );
}

function ProcessCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const center = track.scrollLeft + track.clientWidth / 2;
        let closest = 0;
        let closestDist = Infinity;
        Array.from(track.children).forEach((child, i) => {
          const el = child as HTMLElement;
          const elCenter = el.offsetLeft + el.offsetWidth / 2;
          const dist = Math.abs(elCenter - center);
          if (dist < closestDist) {
            closestDist = dist;
            closest = i;
          }
        });
        setActive(closest);
      });
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const scrollToIndex = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const el = track.children[i] as HTMLElement | undefined;
    if (el) {
      track.scrollTo({ left: el.offsetLeft - (track.clientWidth - el.clientWidth) / 2, behavior: "smooth" });
    }
  };

  return (
    <div>
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="shrink-0" style={{ width: "6vw" }} aria-hidden />
        {processSteps.map((step, i) => (
          <motion.div
            key={step.step}
            animate={{
              scale: active === i+1 ? 1 : 0.9,
              opacity: active === i+1 ? 1 : 0.55,
            }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            className="relative flex w-[78vw] shrink-0 snap-center flex-col justify-end overflow-hidden border border-charcoal-2"
            style={{ height: 340 }}
          >
            <Image
                src={step.image}
                alt={step.title}
                fill
                sizes="80vw"
                className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/10" />
            <div className="relative p-6">
              <span className="font-mono text-sm text-oxblood-light">{step.step}</span>
              <h3 className="mt-2 font-display text-2xl font-bold uppercase tracking-tight text-concrete">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-concrete/70">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
        <div className="shrink-0" style={{ width: "6vw" }} aria-hidden />
      </div>

      {/* pagination dots */}
      <div className="mt-6 flex items-center justify-center gap-2" role="tablist" aria-label="Process steps">
        {processSteps.map((step, i) => (
          <button
            key={step.step}
            role="tab"
            aria-selected={active === i}
            aria-label={`Go to step ${i + 1}: ${step.title}`}
            onClick={() => scrollToIndex(i)}
            className={clsx(
              "h-1.5 rounded-full transition-all duration-300",
              active === i+1 ? "w-6 bg-oxblood-light" : "w-1.5 bg-charcoal-2"
            )}
          />
        ))}
      </div>
    </div>
  );
}
