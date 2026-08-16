import { ShieldCheck, Star, FileCheck2, Clock } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Fully Insured General Contractor" },
  { icon: Star, label: "4.9/5 Average Rating — 24+ Reviews" },
  { icon: FileCheck2, label: "Written, Itemized Estimates" },
  { icon: Clock, label: "24-Hour Estimate Response" },
  { icon: ShieldCheck, label: "Bonded on Every Project" },
];

export default function TrustBar() {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-charcoal-2 bg-charcoal py-4">
      <div className="flex w-max animate-marquee gap-14">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-2.5 whitespace-nowrap">
            <item.icon className="h-4 w-4 shrink-0 text-oxblood-light" strokeWidth={2} />
            <span className="font-mono text-xs tracking-[0.08em] text-concrete/70 uppercase">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
