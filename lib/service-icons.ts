import type { ComponentType } from "react";
import {
  Car,
  Trees,
  Milestone,
  Building2,
  Square,
  Hammer,
  Home,
  Building,
  ClipboardList,
  PaintRoller,
  LayoutGrid,
} from "lucide-react";

export const serviceIcons: Record<string, ComponentType<{ className?: string; strokeWidth?: number }>> = {
  driveways: Car,
  patios: Trees,
  sidewalks: Milestone,
  foundations: Building2,
  slabs: Square,
  "concrete-repair": Hammer,
  "residential-construction": Home,
  "commercial-construction": Building,
  "custom-project": ClipboardList,
  drywall: PaintRoller,
  "interior-flooring": LayoutGrid,
};
