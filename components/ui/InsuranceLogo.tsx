import { ComponentProps } from "react";
import Image from "next/image";

type InsuranceLogoProps = ComponentProps<"svg">;

export function InsuranceLogo({
  className,
  ...props
}: InsuranceLogoProps) {
  return (
    <Image 
      src="/about/rps-insurance-logo.png" 
      alt="insurance logo" 
      width={48}
      height={32}
      className="object-contain"
    />
  );
}