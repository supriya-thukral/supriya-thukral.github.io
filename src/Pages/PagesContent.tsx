import ContactPage from "./ContactPage";
import EducationPage from "./EducationPage";
import ExperiencePage from "./ExperiencePage";
import HomePage from "./HomePage";
import ProjectsPage from "./ProjectsPage";
import SkillsPage from "./SkillsPage";
import { NAV_ITEMS } from "../constants";

export const pagesContent: {
  [key: string]: {
    title: string;
    href: string;
    component?: React.FC;
  };
} = {
  home: {
    title: NAV_ITEMS.HOME,
    href: "home",
    component: HomePage,
  },
  experience: {
    title: NAV_ITEMS.EXPERIENCE,
    href: "experience",
    component: ExperiencePage,
  },
  projects: {
    title: NAV_ITEMS.PROJECTS,
    href: "projects",
    component: ProjectsPage,
  },
  skills: {
    title: NAV_ITEMS.SKILLS,
    href: "skills",
    component: SkillsPage,
  },
  education: {
    title: NAV_ITEMS.EDUCATION,
    href: "education",
    component: EducationPage,
  },
  contact: {
    title: NAV_ITEMS.CONTACT,
    href: "contact",
    component: ContactPage,
  },
};
