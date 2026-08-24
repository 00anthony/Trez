"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Square } from "lucide-react";
import { serviceIcons } from "../../lib/service-icons";
import type { ServiceContent } from "../../lib/types";

// Deterministic placeholder hue per card, standing in for real jobsite
// photography when a service has no `image` set.
const placeholderHues = [356, 8, 344, 350, 4, 340, 352, 12, 346];

export default function ServiceCard({
  content,
  href,
  slug,
  index,
  onSeeProjects,
}: {
  content: ServiceContent;
  href: string;
  /** Service slug — resolves the icon from the shared service-icons map. */
  slug: string;
  index: number;
  onSeeProjects?: () => void;
}) {
  const Icon = serviceIcons[slug] ?? Square;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08 }}
      className="group relative flex min-h-[400px] flex-col justify-end overflow-hidden border border-charcoal-2 md:min-h-[440px]"
    >
      <Link href={href}>
        <div className="absolute inset-0">
          {content.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={content.image}
              alt=""
              className="h-full w-full scale-105 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          ) : (
            <div
              className="h-full w-full scale-105 transition-transform duration-700 ease-out group-hover:scale-110"
              style={{
                background: `linear-gradient(150deg, hsl(${placeholderHues[index % placeholderHues.length]} 42% 11%) 0%, #141414 55%, #0a0a0a 100%)`,
              }}
            >
              <div
                className="h-full w-full opacity-[0.14] mix-blend-overlay"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, rgba(237,234,227,0.5) 0px, rgba(237,234,227,0.5) 1px, transparent 1px, transparent 16px)",
                }}
              />
            </div>
          )}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-transparent to-transparent" />

        <div className="relative p-7 md:p-8">
          <div className="flex items-center justify-between">
            <Icon className="h-7 w-7 text-oxblood-light" strokeWidth={1.5} />
            <span className="font-mono text-xs text-steel">{String(index + 1).padStart(2, "0")}</span>
          </div>

          <h3 className="mt-6 font-display text-2xl font-semibold uppercase tracking-tight text-concrete">
            {content.name}
          </h3>
          <p className="mt-2.5 text-sm leading-relaxed text-concrete/70">{content.short}</p>

          {onSeeProjects && (
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onSeeProjects();
                }}
                className="inline-flex items-center gap-2 border-b border-oxblood-light/60 font-mono text-xs tracking-[0.14em] text-concrete hover:text-white uppercase transition-colors hover:border-concrete"
                style={{ borderColor: "#7a1f27" }}
              >
                See Recent Projects
              </button>
            </div>
          )}
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-oxblood transition-transform duration-300 group-hover:scale-x-100" />
      </Link>
    </motion.div>
  );
}
