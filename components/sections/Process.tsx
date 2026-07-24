"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";
import { processSteps } from "../../lib/data";

export default function Process() {
  return (
    <section id="process" className="relative bg-charcoal py-28 md:py-36">
      <Container>
        <Reveal>
          <Eyebrow>How It Works</Eyebrow>
          <h2 className="mt-5 max-w-xl font-display text-4xl font-bold uppercase tracking-tight text-concrete sm:text-5xl md:text-6xl">
            From estimate
            <br />
            to walkthrough
          </h2>
        </Reveal>

        <div className="relative mt-20">
          {/* connecting line */}
          <div className="absolute top-0 left-[15px] hidden h-full w-px bg-charcoal-2 md:block" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
            style={{ transformOrigin: "top" }}
            className="absolute top-0 left-[15px] hidden h-full w-px bg-oxblood md:block"
          />

          <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative pl-10 md:pl-0"
              >
                <div className="absolute top-0 left-0 flex h-[31px] w-[31px] items-center justify-center border border-oxblood-light bg-ink md:static md:mb-8">
                  <span className="font-mono text-[11px] text-oxblood-light">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold uppercase tracking-tight text-concrete">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-concrete/60">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
