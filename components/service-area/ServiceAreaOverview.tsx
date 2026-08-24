import Link from "next/link";
import { Check } from "lucide-react";
import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";
import GradeLine from "../ui/GradeLine";
import SectionBackdrop from "../ui/SectionBackdrop";
import { getServiceContent } from "../../lib/audience";
import type { Service, ServiceArea } from "../../lib/types";

export default function ServiceAreaOverview({
  area,
  relatedServices,
}: {
  area: ServiceArea;
  relatedServices: Service[];
}) {
  return (
    <section className="relative overflow-hidden bg-ink py-20 md:py-28">
      <SectionBackdrop glow={false} />

      <Container className="relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>About This Area</Eyebrow>
              <h2 className="mt-5 max-w-lg font-display text-3xl font-bold uppercase tracking-tight text-concrete sm:text-4xl">
                Concrete work built for {area.name}
              </h2>
              <p className="mt-5 max-w-xl leading-relaxed text-concrete/70">{area.description}</p>
            </Reveal>

            {area.localCopy?.notes && area.localCopy.notes.length > 0 && (
              <Reveal delay={0.08} className="mt-10 border border-charcoal-2 bg-charcoal/40 p-6 md:p-7">
                <div className="font-mono text-[10px] tracking-[0.14em] text-steel uppercase">
                  Why {area.name} Homeowners Call Us
                </div>
                <ul className="mt-4 space-y-3.5">
                  {area.localCopy.notes.map((note) => (
                    <li key={note} className="flex gap-3">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-oxblood-light" strokeWidth={2.5} />
                      <span className="text-sm leading-relaxed text-concrete/80">{note}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
          </div>

          {relatedServices.length > 0 && (
            <div className="lg:col-span-5">
              <Reveal delay={0.12} className="border border-charcoal-2 bg-charcoal/40 p-6 md:p-7">
                <div className="font-mono text-[10px] tracking-[0.14em] text-steel uppercase">
                  Relevant Services in {area.name}
                </div>
                <ul className="mt-4 space-y-3">
                  {relatedServices.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="flex items-center justify-between border-b border-charcoal-2 py-2.5 text-sm text-concrete/80 transition-colors hover:text-concrete"
                      >
                        {getServiceContent(service).name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          )}
        </div>

        <GradeLine className="mt-20" />
      </Container>
    </section>
  );
}
