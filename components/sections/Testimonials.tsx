import { Star } from "lucide-react";
import Container from "../../components/ui/Container";
import Eyebrow from "../../components/ui/Eyebrow";
import GradeLine from "../../components/ui/GradeLine";
import Reveal from "../../components/ui/Reveal";
import Button from "../../components/ui/Button";
import SectionNumber from "../../components/ui/SectionNumber";
import SectionBackdrop from "../../components/ui/SectionBackdrop";
import { testimonials } from "../../lib/data";
import { siteConfig } from "../../lib/site-config";
import { GoogleIcon } from "../ui/GoogleIcon";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-ink py-28 md:py-36">
      <SectionBackdrop />
      <SectionNumber n="06" />

      <Container className="relative">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <div>
              <Eyebrow>Client Reviews</Eyebrow>
              <h2 className="mt-5 max-w-xl font-display text-4xl font-bold uppercase tracking-tight text-concrete sm:text-5xl md:text-6xl">
                What Central Texas
                <br />
                says about the work
              </h2>
            </div>

            {/* Google rating summary */}
            <div className="w-full md:w-auto flex items-center justify-between gap-4 border border-charcoal-2 bg-charcoal/50 px-3 md:px-6 py-5">
              <GoogleIcon className="h-8 w-8 shrink-0" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display text-2xl font-bold text-concrete">
                    {siteConfig.google.rating}
                  </span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-[#fbbc04] text-[#fbbc04]" />
                    ))}
                  </div>
                </div>
                <p className="mt-0.5 font-mono text-[10px] tracking-[0.1em] text-steel uppercase">
                  {siteConfig.google.reviewCount} Google Reviews
                </p>
              </div>
              <Button href={siteConfig.google.gmbUrl} variant="secondary" icon={false} className="" style={{paddingLeft: "12px", paddingRight: "12px"}}>
                <span className="flex items-center gap-2">
                  <GoogleIcon className="h-4 w-4" />
                  See More
                </span>
              </Button>
            </div>
            
          </div>
          
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={(i % 3) * 0.08} className="border border-charcoal-2 bg-charcoal/60 p-6">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-charcoal-2 font-display text-sm font-semibold text-concrete">
                    {t.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-concrete">{t.author}</p>
                    <p className="font-mono text-[10px] tracking-[0.06em] text-steel uppercase">
                      {t.location} · {t.date}
                    </p>
                  </div>
                </div>
                <a
                  href={siteConfig.google.gmbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GoogleIcon className="h-4 w-4 shrink-0 opacity-70" />
                </a>
              </div>

              <div className="mt-4 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="h-3.5 w-3.5 fill-[#fbbc04] text-[#fbbc04]" />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-concrete/75">
                &ldquo;{t.quote}&rdquo;
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-14 flex flex-col items-center gap-4 text-center">
          <p className="max-w-md text-sm text-concrete/60">
            Had a good experience with Trez? A review helps other Central
            Texas homeowners find us.
          </p>
          <Button href={siteConfig.google.reviewUrl} variant="secondary" icon={false}>
            <span className="flex items-center gap-2">
              <GoogleIcon className="h-4 w-4" />
              Write a Review
            </span>
          </Button>
          
        </Reveal>

        <GradeLine className="mt-24" />
      </Container>
    </section>
  );
}
