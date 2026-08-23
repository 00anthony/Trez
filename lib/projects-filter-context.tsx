"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import type { ProjectCategory } from "../lib/data";

export type FilterValue = "All" | "Featured" | ProjectCategory;

type FilterContextType = {
  activeFilter: FilterValue;
  setActiveFilter: (value: FilterValue) => void;
  goToProjects: (value: FilterValue) => void;
};

const FilterContext = createContext<FilterContextType | null>(null);

export function ProjectsFilterProvider({ children }: { children: ReactNode }) {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("All");

  const goToProjects = (value: FilterValue) => {
    setActiveFilter(value);
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <FilterContext.Provider value={{ activeFilter, setActiveFilter, goToProjects }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useProjectsFilter() {
  const ctx = useContext(FilterContext);
  if (!ctx) {
    throw new Error("useProjectsFilter must be used within ProjectsFilterProvider");
  }
  return ctx;
}

/** Maps a service slug to the project category its "See Recent Projects" CTA should open. */
export const serviceToCategory: Record<string, FilterValue> = {
  driveways: "Driveways",
  patios: "Patios",
  sidewalks: "Driveways",
  foundations: "Residential",
  slabs: "Slabs",
  "concrete-repair": "Repairs",
  "residential-construction": "Residential",
  "commercial-construction": "Commercial",
  "general-contracting": "All",
};
