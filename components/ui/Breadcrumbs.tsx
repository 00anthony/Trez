import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 font-mono text-[11px] tracking-[0.12em] text-steel uppercase">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={`${item.label}-${i}`} className="flex items-center gap-1.5">
            {item.href && !isLast ? (
              <Link href={item.href} className="transition-colors hover:text-concrete">
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "text-concrete/80" : undefined}>{item.label}</span>
            )}
            {!isLast && <ChevronRight className="h-3 w-3 text-charcoal-2" aria-hidden />}
          </span>
        );
      })}
    </nav>
  );
}
