import { ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  icon?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

export default function Button({
  children,
  href,
  variant = "primary",
  className,
  icon = true,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants: Record<string, string> = {
    primary:
      "bg-oxblood text-concrete hover:bg-oxblood-light shadow-[0_0_0_1px_rgba(122,31,39,0.4)]",
    secondary:
      "bg-transparent text-concrete border border-concrete/25 hover:border-concrete/60 backdrop-blur-sm",
    ghost: "bg-transparent text-concrete/80 hover:text-concrete px-0 py-0",
  };

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={2}
        />
      )}
    </>
  );

  const classes = clsx(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {content}
    </button>
  );
}
