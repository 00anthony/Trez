import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";
import GradeLine from "../ui/GradeLine";
import { serviceAreas } from "../../lib/data";

export default function ServiceAreasGrid() {
  return (
    <section className="relative overflow-hidden bg-ink pb-20 md:pb-28">
      <Container className="relative">
        <Reveal>
          <Eyebrow>Where We Work</Eyebrow>
          <h2 className="mt-5 max-w-xl font-display text-3xl font-bold uppercase tracking-tight text-concrete sm:text-4xl">
            Central Texas Service Areas
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviceAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/service-areas/${area.slug}`}
              className="group border border-charcoal-2 bg-charcoal/40 p-7 transition-colors hover:border-oxblood-light"
            >
              <MapPin className="h-6 w-6 text-oxblood-light" strokeWidth={1.5} />
              <h3 className="mt-5 font-display text-2xl font-semibold uppercase tracking-tight text-concrete">
                {area.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-concrete/65">{area.shortDescription}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.14em] text-oxblood-light uppercase transition-colors group-hover:text-concrete">
                View Area
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>

        <GradeLine className="mt-20" />
      </Container>
    </section>
  );
}
