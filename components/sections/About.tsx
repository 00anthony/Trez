"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Container from "../../components/ui/Container";
import Eyebrow from "../../components/ui/Eyebrow";
import GradeLine from "../../components/ui/GradeLine";
import Reveal from "../../components/ui/Reveal";
import SectionNumber from "../../components/ui/SectionNumber";
import SectionBackdrop from "../../components/ui/SectionBackdrop";
import { siteConfig } from "../../lib/site-config";
import { InsuranceLogo } from "../ui/InsuranceLogo";
import { GoogleIcon } from "../ui/GoogleIcon";
import Image from "next/image";

export default function About() {
  type HeroStat = {
      icon?: ReactNode;
      value: string;
      label: string;
    };
  
    const heroStats: HeroStat[] = [
      siteConfig.stats[0], // Projects Completed
      {
        icon: (
          <InsuranceLogo className="h-8 w-auto fill-white"/>
        ),
        value: siteConfig.stats[1].value,   // "100%"
        label: siteConfig.stats[1].label,   // "Licensed & Insured"
      },
      {
        icon: <GoogleIcon className="h-4 w-4" />,
        value: `${siteConfig.google.rating} ★`,
        label: `${siteConfig.google.reviewCount} Google Reviews`,
      },
      siteConfig.stats[2], // Estimate Turnaround
    ];

  return (
    <section id="about" className="relative overflow-hidden bg-ink py-28 md:py-36">
      <SectionBackdrop />
      <SectionNumber n="04" />

      <Container className="relative">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>About Trez</Eyebrow>
              <h2 className="mt-5 font-display text-4xl font-bold uppercase tracking-tight text-concrete sm:text-5xl">
                Built on the
                <br />
                details that matter
              </h2>
            </Reveal>

            {/* Integrated image placeholder — swap the gradient div below
                for a next/image of the crew / a finished pour once photos
                are available. */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative mt-10 aspect-[4/5] w-full max-w-sm overflow-hidden border border-charcoal-2"
            >
              <Image src="/about/about-poster.png" alt="poster" fill className="object-contain"/>
            </motion.div>
          </div>

          <div className="space-y-6 text-concrete/70 lg:col-span-6 lg:col-start-7 md:mt-36">
            <Reveal delay={0.05}>
              <p className="text-lg leading-relaxed text-concrete/85">
                Trez Construction Group was built on a simple premise: Central
                Texas ground is unforgiving, and most concrete failures here
                come down to shortcuts taken before the truck ever shows up.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="leading-relaxed">
                We believe quality concrete starts long before the pour. From understanding
                Central Texas soil conditions to coordinating the right preparation and
                craftsmanship, we stay involved throughout the process to make sure every
                project is built on a proper foundation.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="leading-relaxed">
                Today we serve homeowners, HOAs, and light commercial clients
                across {siteConfig.serviceArea} — from single-driveway jobs
                to multi-week commercial flatwork packages.
              </p>
            </Reveal>

            {/* Floating glass stat cards */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="mt-16 grid grid-cols-2 gap-3 md:mt-20   md:gap-4"
            >
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-none border border-concrete/12 bg-charcoal/40 px-5 py-4 backdrop-blur-md md:px-7 md:py-5"
                >
                  <div className="flex items-center gap-2">
                    {stat.icon && <span className="shrink-0">{stat.icon}</span>}
                    <span className="font-display text-2xl font-bold text-concrete md:text-3xl">
                      {stat.value}
                    </span>
                  </div>
                  <div className="mt-1 font-mono text-[10px] tracking-[0.18em] text-steel uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <GradeLine className="mt-24" />
      </Container>
    </section>
  );
}
