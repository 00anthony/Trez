import clsx from "clsx";

export default function SectionNumber({
  n,
  className,
}: {
  n: string;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={clsx(
        "pointer-events-none absolute -right-4 top-8 select-none font-display text-[13rem] leading-none font-black text-charcoal/50 sm:top-10 md:text-[19rem]",
        className
      )}
    >
      {n}
    </span>
  );
}
