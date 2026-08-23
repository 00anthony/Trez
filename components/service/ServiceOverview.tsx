import { Check } from "lucide-react";
import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";
import GradeLine from "../ui/GradeLine";
import SectionBackdrop from "../ui/SectionBackdrop";
import { siteConfig } from "../../lib/site-config";
import type { Service } from "../../lib/types";

export default function ServiceOverview({ service }: { service: Service }) {
  return (
    <section className="relative overflow-hidden bg-ink py-20 md:py-28">
      <SectionBackdrop glow={false} />

      <Container className="relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>Overview</Eyebrow>
              <h2 className="mt-5 max-w-lg font-display text-3xl font-bold uppercase tracking-tight text-concrete sm:text-4xl">
                Engineered for {siteConfig.serviceArea}
              </h2>
              <p className="mt-5 max-w-xl leading-relaxed text-concrete/70">
                {service.longDescription ?? service.description}
              </p>
            </Reveal>

            <Reveal delay={0.08} className="mt-10 border border-charcoal-2 bg-charcoal/40 p-5">
              <div className="mb-3 font-mono text-[10px] tracking-[0.14em] text-steel uppercase">
                Where We Work
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                {siteConfig.serviceAreaCities.map((city) => (
                  <span key={city} className="flex items-center gap-1.5 text-xs text-concrete/70">
                    <span className="h-1 w-1 bg-oxblood-light" />
                    {city}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.12} className="border border-charcoal-2 bg-charcoal/40 p-6 md:p-7">
              <div className="font-mono text-[10px] tracking-[0.14em] text-steel uppercase">
                Key Benefits
              </div>
              <ul className="mt-4 space-y-3.5">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-oxblood-light" strokeWidth={2.5} />
                    <span className="text-sm leading-relaxed text-concrete/80">{bullet}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        <GradeLine className="mt-20" />
      </Container>
    </section>
  );
}
