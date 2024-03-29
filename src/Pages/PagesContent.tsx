import ContactPage from "./ContactPage";
import EducationPage from "./EducationPage";
import ExperiencePage from "./ExperiencePage";
import HomePage from "./HomePage";
import ProjectsPage from "./ProjectsPage";
import SkillsPage from "./SkillsPage";

export const pagesContent: {
  [key: string]: {
    title: string;
    href: string;
    component?: React.FC;
  };
} = {
  home: {
    title: "Home",
    href: "home",
    component: HomePage,
  },
  experience: {
    title: "Experience",
    href: "experience",
    component: ExperiencePage,
  },
  skills: {
    title: "Skills",
    href: "skills",
    component: SkillsPage,
  },
  projects: {
    title: "Projects",
    href: "projects",
    component: ProjectsPage,
  },
  education: {
    title: "Education",
    href: "education",
    component: EducationPage,
  },
  contact: {
    title: "Contact",
    href: "contact",
    component: ContactPage,
  },
};
