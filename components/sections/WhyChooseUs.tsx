"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import Container from "../../components/ui/Container";
import Eyebrow from "../../components/ui/Eyebrow";
import GradeLine from "../../components/ui/GradeLine";
import Reveal from "../../components/ui/Reveal";
import SectionNumber from "../../components/ui/SectionNumber";
import SectionBackdrop from "../../components/ui/SectionBackdrop";
import { whyChooseUs } from "../../lib/data";

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-28 md:py-36">
      <SectionBackdrop glow={false} />
      <SectionNumber n="05" className="text-ink/40" />

      <Container className="relative">
        <Reveal>
          <Eyebrow>Why Trez</Eyebrow>
          <h2 className="mt-5 max-w-xl font-display text-4xl font-bold uppercase tracking-tight text-concrete sm:text-5xl md:text-6xl">
            The difference is
            <br />
            in the ground work
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2">
          {whyChooseUs.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="flex gap-6">
                <span className="font-display text-3xl font-bold text-oxblood-light">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-xl font-semibold uppercase tracking-tight text-concrete">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 max-w-sm text-sm leading-relaxed text-concrete/60">
                    {item.description}
                  </p>

                  {item.media?.enabled && <MediaSlot label={item.media.label} />}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <GradeLine className="mt-24" />
      </Container>
    </section>
  );
}

/**
 * Optional educational-media slot — explainer videos, estimate
 * walkthroughs, pour demonstrations, case studies. Toggle a benefit's
 * `media.enabled` flag in lib/data.ts to show/hide this per card; wire
 * `onClick` up to a real video modal / player once assets exist.
 */
function MediaSlot({ label }: { label: string }) {
  const [hover, setHover] = useState(false);

  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative mt-5 flex aspect-video w-full max-w-sm items-center justify-center overflow-hidden border border-charcoal-2 bg-ink text-left"
      aria-label={label}
    >
      <div
        className="absolute inset-0 opacity-[0.16] mix-blend-overlay transition-transform duration-500"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(237,234,227,0.5) 0px, rgba(237,234,227,0.5) 1px, transparent 1px, transparent 14px)",
          transform: hover ? "scale(1.06)" : "scale(1)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
      <span
        className={`relative flex h-11 w-11 items-center justify-center rounded-full border border-oxblood-light/70 bg-ink/70 backdrop-blur-sm transition-transform duration-300 ${
          hover ? "scale-110" : ""
        }`}
      >
        <Play className="ml-0.5 h-4 w-4 fill-oxblood-light text-oxblood-light" />
      </span>
      <span className="absolute bottom-3 left-3 font-mono text-[10px] tracking-[0.12em] text-concrete/70 uppercase">
        {label}
      </span>
    </button>
  );
}
