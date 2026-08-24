"use client";

import { useState } from "react";
import clsx from "clsx";
import Container from "../../components/ui/Container";
import Eyebrow from "../../components/ui/Eyebrow";
import GradeLine from "../../components/ui/GradeLine";
import Reveal from "../../components/ui/Reveal";
import Button from "../../components/ui/Button";
import SectionNumber from "../../components/ui/SectionNumber";
import SectionBackdrop from "../../components/ui/SectionBackdrop";
import ServiceCard from "../../components/ui/ServiceCard";
import { services } from "../../lib/data";
import { getServiceContent } from "../../lib/audience";
import type { AudienceSlug } from "../../lib/types";
import { useProjectsFilter, serviceToCategory } from "../../lib/projects-filter-context";

type ServiceFilter = "Featured" | "Residential" | "Commercial";
const FILTERS: ServiceFilter[] = ["Featured", "Residential", "Commercial"];

export default function Services({
  lockedAudience,
}: {
  /** When set, hides the filter tabs and shows only that audience's services (used on /residential, /commercial). */
  lockedAudience?: AudienceSlug;
} = {}) {
  const { goToProjects } = useProjectsFilter();
  const [filter, setFilter] = useState<ServiceFilter>("Featured");

  const audience: AudienceSlug | undefined =
    lockedAudience ?? (filter === "Residential" ? "residential" : filter === "Commercial" ? "commercial" : undefined);

  const visibleServices = lockedAudience
    ? services.filter((s) => s.audiences.includes(lockedAudience))
    : services.filter((s) => {
        if (filter === "Featured") return s.featured;
        if (filter === "Residential") return s.audiences.includes("residential");
        return s.audiences.includes("commercial");
      });

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

        {!lockedAudience && (
          <div className="mt-10 flex flex-wrap gap-2.5">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={clsx(
                  "border px-4 py-2 font-mono text-[11px] tracking-[0.14em] uppercase transition-colors duration-200",
                  filter === f
                    ? "border-oxblood bg-oxblood text-concrete"
                    : "border-charcoal-2 text-concrete/55 hover:border-concrete/40 hover:text-concrete"
                )}
              >
                {f}
              </button>
            ))}
          </div>
        )}

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleServices.map((service, i) => {
            const category = serviceToCategory[service.slug] ?? "All";
            const content = getServiceContent(service, audience);
            const href = audience ? `/${audience}/${service.slug}` : `/services/${service.slug}`;

            return (
              <ServiceCard
                key={service.slug}
                content={content}
                href={href}
                slug={service.slug}
                index={i}
                onSeeProjects={lockedAudience ? undefined : () => goToProjects(category)}
              />
            );
          })}
        </div>

        {visibleServices.length === 0 && (
          <div className="mt-10 col-span-full border border-dashed border-charcoal-2 p-14 text-center">
            <p className="text-sm text-concrete/55">No services filed under this category yet.</p>
          </div>
        )}

        {/* Full directory CTA */}
        <Reveal delay={0.1} className="mt-20 flex flex-col items-center border border-charcoal-2 bg-charcoal/40 px-8 py-14 text-center md:py-16">
          <p className="font-mono text-[11px] tracking-[0.2em] text-steel uppercase">
            Not Seeing Your Project?
          </p>
          <h3 className="mt-4 max-w-xl font-display text-3xl font-bold uppercase tracking-tight text-concrete sm:text-4xl">
            We build custom concrete &amp; construction solutions
          </h3>
          <p className="mt-4 max-w-md text-sm text-concrete/60">
            Browse the full service catalog, or send us the details and we&rsquo;ll
            review the scope.
          </p>
          <Button href="/services" variant="primary" className="mt-8">
            Explore All Services
          </Button>
        </Reveal>

        <GradeLine className="mt-24" />
      </Container>
    </section>
  );
}
