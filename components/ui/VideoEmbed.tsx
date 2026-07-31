"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import Image from "next/image";

interface VideoEmbedProps {
  youtubeId: string;
  title: string;
  className?: string;
}

export default function VideoEmbed({
  youtubeId,
  title,
  className = "",
}: VideoEmbedProps) {
  const [loaded, setLoaded] = useState(false);

  const thumbnail = `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;

  return (
    <div
      className={`relative mt-5 aspect-video w-full max-w-sm overflow-hidden border border-charcoal-2 bg-ink ${className}`}
    >
      {loaded ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setLoaded(true)}
          aria-label={`Play ${title}`}
          className="group relative h-full w-full text-left"
        >
          <Image
            src={thumbnail}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, 384px"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            
          />

          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />

          <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/0" />

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-oxblood-light/70 bg-ink/70 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-oxblood-light">
              <Play className="ml-1 h-5 w-5 fill-oxblood-light text-oxblood-light" />
            </span>
          </div>

          <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.12em] text-concrete/80">
            {title}
          </span>
        </button>
      )}
    </div>
  );
}