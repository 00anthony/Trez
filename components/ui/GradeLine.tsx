"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

/**
 * Signature element — the "Grade Line."
 * A surveyor's benchmark rule that pours itself in on scroll, the way
 * a screed levels wet concrete. Used to divide every major section.
 */
export default function GradeLine({
  label,
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div className={clsx("relative w-full", className)}>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
        className="grade-line"
      />
      {label ? (
        <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-ink px-3 font-mono text-[10px] tracking-[0.25em] text-steel">
          {label}
        </span>
      ) : null}
    </div>
  );
}
