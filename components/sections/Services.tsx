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
import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import GradeLine from "../ui/GradeLine";
import Reveal from "../ui/Reveal";
import { services } from "../../lib/data";

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

export default function Services() {
  return (
    <section id="services" className="relative bg-ink py-28 md:py-36">
      <Container>
        <Reveal>
          <Eyebrow>What We Build</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-4xl font-bold uppercase tracking-tight text-concrete sm:text-5xl md:text-6xl">
            Full-scope concrete
            <br />& construction
          </h2>
          <p className="mt-5 max-w-lg text-concrete/65">
            From a single driveway to a full-scope build, every service is
            handled in-house by crews who specialize in it.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-charcoal-2 bg-charcoal-2 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.slug] ?? Square;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group relative flex flex-col justify-between bg-ink p-8 transition-colors duration-300 hover:bg-charcoal md:min-h-[280px] md:p-10"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <Icon className="h-7 w-7 text-oxblood-light" strokeWidth={1.5} />
                    <span className="font-mono text-xs text-steel">0{i + 1}</span>
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-semibold uppercase tracking-tight text-concrete">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-concrete/60">
                    {service.short}
                  </p>
                </div>

                <a
                  href="#contact"
                  className="mt-8 inline-flex w-fit items-center gap-2 border-b border-transparent font-mono text-xs tracking-[0.14em] text-concrete/70 uppercase transition-colors group-hover:border-oxblood-light group-hover:text-concrete"
                >
                  Request Estimate
                </a>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-oxblood transition-transform duration-300 group-hover:scale-x-100" />
              </motion.div>
            );
          })}
        </div>

        <GradeLine className="mt-24" />
      </Container>
    </section>
  );
}
