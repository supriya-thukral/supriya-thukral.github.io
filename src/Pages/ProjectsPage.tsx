import React from "react";
import { faCodeBranch, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import PageWithChildren from "../Components/PageWithChildren";
import ProjectCard from "../Components/ProjectCard";

const projectsData = [
  {
    icon: faCodeBranch,
    title: "Portfolio Website",
    link: "https://example.com",
    description:
      "This is my personal portfolio website that showcases my skills, projects, and experiences. It is built using React, TypeScript, and SCSS, and it features a modern and responsive design. The source code for this website is available on GitHub, and you can view the live website by clicking the link above.",
  },
  {
    icon: faLaptopCode,
    title: "Hack Western Project - CovWe",
    link: "https://devpost.com/software/covwe",
    description:
      "CovWe is a health-focused web app that was pitched and built as a first-time project submission to Hack Western. The app is built using Node.js with a Model-View-Controller (MVC) design pattern, utilizing HTML, CSS (and Pug), and JavaScript (Node.js). CovWe aims to provide users with valuable health information and resources to promote a healthier lifestyle.",
  },
  {
    icon: faCodeBranch,
    title: "Open Source Website Portfolio Template",
    link: "https://github.com/example",
    description:
      "This project is an open-source website portfolio template that allows users to easily create their own portfolio websites. It is a work-in-progress (WIP) and is built using React, TypeScript, and SCSS. The goal of this project is to provide developers with a customizable and modern template to showcase their skills and projects.",
    badge: "WIP",
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <PageWithChildren id="projects" className="projects">
      <h1>Projects</h1>
      <section>
        <div className="projects-container">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.title}
              icon={project.icon}
              title={project.title}
              link={project.link}
              description={project.description}
              badge={project.badge}
            />
          ))}
        </div>
      </section>
    </PageWithChildren>
  );
};

export default ProjectsPage;
