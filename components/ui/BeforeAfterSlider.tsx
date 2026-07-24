"use client";

import { useRef, useState, useCallback } from "react";
import { MoveHorizontal } from "lucide-react";

/**
 * Before / After slider. Ships with textured placeholder panels so the
 * layout works with zero project photography — swap `beforeSrc` /
 * `afterSrc` for real jobsite photos and it renders those instead.
 */
export default function BeforeAfterSlider({
  beforeLabel,
  afterLabel,
  beforeSrc,
  afterSrc,
  seed = 0,
}: {
  beforeLabel: string;
  afterLabel: string;
  beforeSrc?: string;
  afterSrc?: string;
  seed?: number;
}) {
  const [pos, setPos] = useState(50);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <div
      ref={trackRef}
      className="group relative aspect-[4/3] w-full touch-none overflow-hidden bg-charcoal-2 select-none"
      onMouseDown={(e) => {
        dragging.current = true;
        updateFromClientX(e.clientX);
      }}
      onMouseMove={(e) => dragging.current && updateFromClientX(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchStart={(e) => updateFromClientX(e.touches[0].clientX)}
      onTouchMove={(e) => updateFromClientX(e.touches[0].clientX)}
    >
      {/* AFTER (base layer) */}
      <div className="absolute inset-0">
        {afterSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={afterSrc} alt={afterLabel} className="h-full w-full object-cover" />
        ) : (
          <PlaceholderPanel variant="after" seed={seed} />
        )}
        <span className="absolute right-3 bottom-3 bg-ink/70 px-2.5 py-1 font-mono text-[10px] tracking-[0.14em] text-concrete uppercase backdrop-blur-sm">
          After
        </span>
      </div>

      {/* BEFORE (clipped top layer) */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        {beforeSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={beforeSrc} alt={beforeLabel} className="h-full w-full object-cover" />
        ) : (
          <PlaceholderPanel variant="before" seed={seed} />
        )}
        <span className="absolute bottom-3 left-3 bg-ink/70 px-2.5 py-1 font-mono text-[10px] tracking-[0.14em] text-concrete uppercase backdrop-blur-sm">
          Before
        </span>
      </div>

      {/* Handle */}
      <div
        className="absolute inset-y-0 z-10 w-px bg-concrete/80"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-concrete/40 bg-ink/80 backdrop-blur-sm">
          <MoveHorizontal className="h-4 w-4 text-concrete" strokeWidth={2} />
        </div>
      </div>
    </div>
  );
}

function PlaceholderPanel({ variant, seed }: { variant: "before" | "after"; seed: number }) {
  const hueShift = (seed * 37) % 40;
  const before = `linear-gradient(135deg, #1c1c1c, #101010 55%, #1a1010 100%)`;
  const after = `linear-gradient(135deg, hsl(${356 + hueShift} 45% 14%), #141414 55%, #1c1c1c 100%)`;
  return (
    <div
      className="relative h-full w-full"
      style={{ background: variant === "before" ? before : after }}
    >
      <div
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(237,234,227,0.08) 0px, rgba(237,234,227,0.08) 1px, transparent 1px, transparent 14px)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-mono text-[10px] tracking-[0.3em] text-concrete/25 uppercase">
          Photo Placeholder
        </span>
      </div>
    </div>
  );
}
