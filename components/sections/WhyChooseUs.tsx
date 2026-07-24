import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";
import { whyChooseUs } from "../../lib/data";

export default function WhyChooseUs() {
  return (
    <section className="relative bg-charcoal py-28 md:py-36">
      <Container>
        <Reveal>
          <Eyebrow>Why Trez</Eyebrow>
          <h2 className="mt-5 max-w-xl font-display text-4xl font-bold uppercase tracking-tight text-concrete sm:text-5xl md:text-6xl">
            The difference is
            <br />
            in the ground work
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2">
          {whyChooseUs.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="flex gap-6">
                <span className="font-display text-3xl font-bold text-oxblood-light">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold uppercase tracking-tight text-concrete">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 max-w-sm text-sm leading-relaxed text-concrete/60">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
