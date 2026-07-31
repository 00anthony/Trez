"use client";

import VideoEmbed from "../ui/VideoEmbed";
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
            From Placement
            <br />
            To Performance
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

                  {item.video && (
                    <VideoEmbed
                      youtubeId={item.video.youtubeId}
                      title={item.video.title}
                    />
                  )}
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

