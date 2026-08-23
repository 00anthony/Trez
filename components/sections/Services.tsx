"use client";

import { motion } from "framer-motion";
import {
  Car,
  Trees,
  Milestone,
  Building2,
  Square,
  Hammer,
  Home,
  Building,
  ClipboardList,
} from "lucide-react";
import Link from "next/link";
import Container from "../../components/ui/Container";
import Eyebrow from "../../components/ui/Eyebrow";
import GradeLine from "../../components/ui/GradeLine";
import Reveal from "../../components/ui/Reveal";
import Button from "../../components/ui/Button";
import SectionNumber from "../../components/ui/SectionNumber";
import SectionBackdrop from "../../components/ui/SectionBackdrop";
import { services } from "../../lib/data";
import { useProjectsFilter, serviceToCategory } from "../../lib/projects-filter-context";

const icons: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  driveways: Car,
  patios: Trees,
  sidewalks: Milestone,
  foundations: Building2,
  slabs: Square,
  "concrete-repair": Hammer,
  "residential-construction": Home,
  "commercial-construction": Building,
  "general-contracting": ClipboardList,
};

// Deterministic placeholder hue per card, standing in for real jobsite
// photography. Swap in `service.image` in lib/data.ts and this component
// will render that photo instead — see the fallback branch below.
const placeholderHues = [356, 8, 344, 350, 4, 340, 352, 12, 346];

export default function Services() {
  const { goToProjects } = useProjectsFilter();

  return (
    <section id="services" className="relative overflow-hidden bg-ink py-28 md:py-36">
      <SectionBackdrop />
      <SectionNumber n="01" />

      <Container className="relative">
        <Reveal>
          <Eyebrow>What We Build</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-4xl font-bold uppercase tracking-tight text-concrete sm:text-5xl md:text-6xl">
            Full-scope concrete
            <br />& construction
          </h2>
          <p className="mt-5 max-w-lg text-concrete/65">
            From a single driveway to a full-scope concrete services, all handled by our network of vetted professionals.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.slug] ?? Square;
            const category = serviceToCategory[service.slug] ?? "All";

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
                className="group relative flex min-h-[400px] flex-col justify-end overflow-hidden border border-charcoal-2 md:min-h-[440px]"
              >
                <Link
                  href={`/services/${service.slug}`}
                >
                  {/* full-bleed background */}
                  <div className="absolute inset-0 ">
                    {service.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={service.image}
                        alt=""
                        className=" h-full w-full scale-105 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                    ) : (
                      <div
                        className="h-full w-full scale-105 transition-transform duration-700 ease-out group-hover:scale-110"
                        style={{
                          background: `linear-gradient(150deg, hsl(${placeholderHues[i % placeholderHues.length]} 42% 11%) 0%, #141414 55%, #0a0a0a 100%)`,
                        }}
                      >
                        <div
                          className="h-full w-full opacity-[0.14] mix-blend-overlay"
                          style={{
                            backgroundImage:
                              "repeating-linear-gradient(45deg, rgba(237,234,227,0.5) 0px, rgba(237,234,227,0.5) 1px, transparent 1px, transparent 16px)",
                          }}
                        />
                      </div>
                    )}
                  </div>

                  {/* dark gradient overlay for readability */}
                  <div className="absolute inset-0  bg-gradient-to-t from-ink via-ink/75 to-ink/10" />
                  <div className="absolute inset-0  bg-gradient-to-r from-ink/50 via-transparent to-transparent" />

                  <div className="relative p-7 md:p-8">
                    <div className="flex items-center justify-between">
                      <Icon className="h-7 w-7 text-oxblood-light" strokeWidth={1.5} />
                      <span className="font-mono text-xs text-steel">0{i + 1}</span>
                    </div>

                    <h3 className="mt-6 font-display text-2xl font-semibold uppercase tracking-tight text-concrete">
                      {service.name}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-concrete/70">
                      {service.short}
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          goToProjects(category);
                        }}
                        className="inline-flex items-center gap-2 border-b border-oxblood-light/60 font-mono text-xs tracking-[0.14em] text-concrete hover:text-white uppercase transition-colors hover:border-concrete"
                        style={{
                          borderColor: "#7a1f27",
                          
                        }}
                      >
                        See Recent Projects
                      </button>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-oxblood transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Custom project CTA */}
        <Reveal delay={0.1} className="mt-20 flex flex-col items-center border border-charcoal-2 bg-charcoal/40 px-8 py-14 text-center md:py-16">
          <p className="font-mono text-[11px] tracking-[0.2em] text-steel uppercase">
            Not Seeing Your Project?
          </p>
          <h3 className="mt-4 max-w-xl font-display text-3xl font-bold uppercase tracking-tight text-concrete sm:text-4xl">
            We build custom concrete &amp; construction solutions
          </h3>
          <p className="mt-4 max-w-md text-sm text-concrete/60">
            Send us the details and we&rsquo;ll review the scope. No project is too
            far outside the standard list.
          </p>
          <Button href="#contact" variant="primary" className="mt-8">
            Contact Us About Your Project
          </Button>
        </Reveal>

        <GradeLine className="mt-24" />
      </Container>
    </section>
  );
}

