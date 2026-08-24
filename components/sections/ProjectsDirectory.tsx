"use client";

import { useState } from "react";
import clsx from "clsx";
import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";
import GradeLine from "../ui/GradeLine";
import Button from "../ui/Button";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../lib/data";
import type { FilterValue } from "../../lib/projects-filter-context";

const FILTERS: FilterValue[] = [
  "All",
  "Featured",
  "Driveways",
  "Patios",
  "Commercial",
  "Residential",
  "Slabs",
  "Repairs",
];

const BATCH_SIZE = 6;

export default function ProjectsDirectory() {
  const [filter, setFilter] = useState<FilterValue>("All");
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

  const filtered =
    filter === "All"
      ? projects
      : filter === "Featured"
        ? projects.filter((p) => p.featured)
        : projects.filter((p) => p.category === filter);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  function handleFilterChange(f: FilterValue) {
    setFilter(f);
    setVisibleCount(BATCH_SIZE);
  }

  return (
    <section className="relative overflow-hidden bg-ink pb-20 md:pb-28">
      <Container className="relative">
        <Reveal>
          <Eyebrow>Full Portfolio</Eyebrow>
          <h2 className="mt-5 max-w-xl font-display text-3xl font-bold uppercase tracking-tight text-concrete sm:text-4xl">
            Every project we&rsquo;ve poured
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2.5">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => handleFilterChange(f)}
              className={clsx(
                "border px-4 py-2 font-mono text-[11px] tracking-[0.14em] uppercase transition-colors duration-200",
                filter === f
                  ? "border-oxblood bg-oxblood text-concrete"
                  : "border-charcoal-2 text-concrete/55 hover:border-concrete/40 hover:text-concrete"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          {visible.map((project, i) => (
            <article key={project.slug} className="border border-charcoal-2 bg-charcoal/40">
              <ProjectCard project={project} seed={i} />
            </article>
          ))}
        </div>

        {visible.length === 0 && (
          <div className="mt-10 border border-dashed border-charcoal-2 p-14 text-center">
            <p className="text-sm text-concrete/55">
              No projects filed under this category yet — check back soon.
            </p>
          </div>
        )}

        {hasMore && (
          <div className="mt-14 flex justify-center">
            <Button
              type="button"
              onClick={() => setVisibleCount((c) => c + BATCH_SIZE)}
              variant="secondary"
              icon={false}
            >
              Load More Projects
            </Button>
          </div>
        )}

        <GradeLine className="mt-20" />
      </Container>
    </section>
  );
}
