import { ComponentProps } from "react";
import Image from "next/image";
import { media } from "../../lib/media";

type InsuranceLogoProps = ComponentProps<"svg">;

export function InsuranceLogo({
  className,
  ...props
}: InsuranceLogoProps) {
  return (
    <Image
      src={media.about.insuranceLogo}
      alt="insurance logo"
      width={48}
      height={32}
      className="object-contain"
    />
  );
}