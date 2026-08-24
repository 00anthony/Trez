export type { Service, ProjectCategory, Project, ServiceArea, Audience } from "../types";

export { services } from "./services";
export {
  projects,
  getProjectsByService,
  getProjectsByServiceArea,
  getProjectBySlug,
  getRelatedProjects,
} from "./projects";
export { serviceAreas } from "./service-areas";
export { audiences } from "./audiences";
export { processSteps, whyChooseUs } from "./process";
export { testimonials } from "./testimonials";
export { faqs } from "./faqs";
