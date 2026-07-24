"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Ruler, Star } from "lucide-react";
import clsx from "clsx";
import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import GradeLine from "../ui/GradeLine";
import Reveal from "../ui/Reveal";
import BeforeAfterSlider from "../ui/BeforeAfterSlider";
import { projects, ProjectCategory } from "../../lib/data";

const filters: ("All" | ProjectCategory)[] = [
  "All",
  "Driveways",
  "Patios",
  "Commercial",
  "Residential",
  "Slabs",
  "Repairs",
];

export default function FeaturedProjects() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const visible =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="relative bg-ink py-28 md:py-36">
      <Container>
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <Eyebrow>Featured Projects</Eyebrow>
              <h2 className="mt-5 max-w-xl font-display text-4xl font-bold uppercase tracking-tight text-concrete sm:text-5xl md:text-6xl">
                Work poured
                <br />
                across Central Texas
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-concrete/60">
              Every project below is real work with a real address. Drag the
              slider to compare the site before and after.
            </p>
          </div>
        </Reveal>

        {/* Filter pills */}
        <div className="mt-12 flex flex-wrap gap-2.5">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={clsx(
                "border px-4 py-2 font-mono text-[11px] tracking-[0.14em] uppercase transition-colors duration-200",
                active === f
                  ? "border-oxblood bg-oxblood text-concrete"
                  : "border-charcoal-2 text-concrete/55 hover:border-concrete/40 hover:text-concrete"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <motion.article
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: (i % 2) * 0.06 }}
                className="group border border-charcoal-2 bg-charcoal/40"
              >
                <BeforeAfterSlider
                  beforeLabel={project.beforeLabel}
                  afterLabel={project.afterLabel}
                  seed={i}
                />

                <div className="p-6 md:p-7">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] tracking-[0.08em] text-steel uppercase">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3 w-3" /> {project.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3 w-3" /> {project.completed}
                    </span>
                    {project.sqft && (
                      <span className="flex items-center gap-1.5">
                        <Ruler className="h-3 w-3" /> {project.sqft}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-3 font-display text-2xl font-semibold uppercase tracking-tight text-concrete">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-oxblood-light">
                    {project.service} · {project.timeline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-concrete/65">
                    {project.description}
                  </p>

                  {project.review && (
                    <div className="mt-5 border-l-2 border-oxblood pl-4">
                      <div className="mb-1 flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <Star key={s} className="h-3 w-3 fill-oxblood-light text-oxblood-light" />
                        ))}
                      </div>
                      <p className="text-sm italic text-concrete/75">
                        &ldquo;{project.review.quote}&rdquo;
                      </p>
                      <p className="mt-1 font-mono text-[11px] tracking-[0.1em] text-steel uppercase">
                        — {project.review.author}
                      </p>
                    </div>
                  )}

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-charcoal-2 px-2.5 py-1 font-mono text-[10px] tracking-[0.08em] text-concrete/55 uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        <GradeLine className="mt-24" />
      </Container>
    </section>
  );
}
