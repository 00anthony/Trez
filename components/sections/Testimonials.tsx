import { Star } from "lucide-react";
import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import GradeLine from "../ui/GradeLine";
import Reveal from "../ui/Reveal";
import { testimonials } from "../../lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-ink py-28 md:py-36">
      <Container>
        <Reveal>
          <Eyebrow>Client Reviews</Eyebrow>
          <h2 className="mt-5 max-w-xl font-display text-4xl font-bold uppercase tracking-tight text-concrete sm:text-5xl md:text-6xl">
            What Central Texas
            <br />
            says about the work
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-charcoal-2 bg-charcoal-2 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={(i % 2) * 0.1} className="bg-ink p-8 md:p-10">
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="h-3.5 w-3.5 fill-oxblood-light text-oxblood-light" />
                ))}
              </div>
              <p className="mt-5 text-lg leading-relaxed text-concrete/85 text-balance">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 font-mono text-xs tracking-[0.1em] text-steel uppercase">
                {t.author} — {t.location}
              </div>
            </Reveal>
          ))}
        </div>

        <GradeLine className="mt-24" />
      </Container>
    </section>
  );
}
