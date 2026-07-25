"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/**
 * Loading screen — assembles the Trez logo from three pieces:
 *   1. Icon (the "TR" monogram) slides/fades in from the left
 *   2. "TREZ" slides/fades in from the right
 *   3. "CONSTRUCTION GROUP" fades up from below, settling under "TREZ"
 * followed by a thin progress bar, then a soft fade into the homepage.
 *
 * The three image parts live at /public/logo/logo-icon.png,
 * logo-wordmark.png, and logo-subtext.png — swap these for refreshed
 * brand assets at any time without touching this component.
 */
export default function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const start = Date.now();
    const minDuration = 1900;

    const tick = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.round((elapsed / minDuration) * 100));
      setProgress(pct);
      if (pct < 100) {
        requestAnimationFrame(tick);
      } else {
        const t = setTimeout(() => setExiting(true), 280);
        return () => clearTimeout(t);
      }
    };
    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (!exiting) return;
    const t = setTimeout(onDone, 650);
    return () => clearTimeout(t);
  }, [exiting, onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
      initial={{ opacity: 1 }}
      animate={{ opacity: exiting ? 0 : 1 }}
      transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
      style={{ pointerEvents: exiting ? "none" : "auto" }}
      aria-hidden={exiting}
    >
      {/* faint blueprint grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(237,234,227,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(237,234,227,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 45%, black 30%, transparent 80%)",
        }}
      />

      <div className="relative flex flex-col items-center">
        <div className="flex items-center gap-5 sm:gap-7">
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-14 w-14 sm:h-20 sm:w-20"
          >
            <Image
              src="/logo/logo-icon-light.png"
              alt=""
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          <span className="h-10 w-px bg-oxblood-light/50 sm:h-14" aria-hidden />

          <div className="flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, x: 36 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-9 w-[150px] sm:h-12 sm:w-[210px] -mb-1"
            >
              <Image
                src="/logo/logo-wordmark-header-light.png"
                alt="Trez"
                fill
                className="object-contain object-left"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative mt-1.5 h-3.5 w-[150px] sm:h-5 sm:w-[210px]"
            >
              <Image
                src="/logo/logo-wordmark-subtext-light.png"
                alt="Construction Group"
                fill
                className="object-contain object-left"
                priority
              />
            </motion.div>
          </div>
        </div>

        {/* progress bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-12 w-52 sm:w-64"
        >
          <div className="h-px w-full overflow-hidden bg-charcoal-2">
            <div
              className="h-full bg-gradient-to-r from-oxblood via-oxblood-light to-oxblood transition-[width] duration-150 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-3 flex items-center justify-between font-mono text-[10px] tracking-[0.22em] text-steel uppercase">
            <span>Preparing site</span>
            <span>{progress}%</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
