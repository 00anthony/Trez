import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import GradeLine from "../ui/GradeLine";
import Reveal from "../ui/Reveal";
import { siteConfig } from "../../lib/site-config";

export default function About() {
  return (
    <section id="about" className="relative bg-ink py-28 md:py-36">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>About Trez</Eyebrow>
              <h2 className="mt-5 font-display text-4xl font-bold uppercase tracking-tight text-concrete sm:text-5xl">
                Built by people who
                <br />
                pour it themselves
              </h2>
            </Reveal>
          </div>

          <div className="space-y-6 text-concrete/70 lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.05}>
              <p className="text-lg leading-relaxed text-concrete/85">
                Trez Construction Group was built on a simple premise: Central
                Texas ground is unforgiving, and most concrete failures here
                come down to shortcuts taken before the truck ever shows up.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="leading-relaxed">
                We keep crews in-house rather than rotating subcontractors on
                the concrete work itself, which means the same team that
                quotes your soil conditions and base prep is the team that
                pours and finishes it. That accountability is the whole
                business model.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="leading-relaxed">
                Today we serve homeowners, HOAs, and light commercial clients
                across {siteConfig.serviceArea} — from single-driveway jobs
                to multi-week commercial flatwork packages.
              </p>
            </Reveal>
          </div>
        </div>

        <GradeLine className="mt-24" />
      </Container>
    </section>
  );
}
