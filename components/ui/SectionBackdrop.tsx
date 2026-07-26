import clsx from "clsx";

export default function SectionBackdrop({
  glow = true,
  className,
}: {
  glow?: boolean;
  className?: string;
}) {
  return (
    <div aria-hidden className={clsx("pointer-events-none absolute inset-0 -z-10", className)}>
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(237,234,227,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(237,234,227,0.6) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      {glow && (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 85% 0%, rgba(122,31,39,0.1), transparent 60%)",
          }}
        />
      )}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-charcoal-2 to-transparent" />
    </div>
  );
}
