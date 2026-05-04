import { faCodeBranch, faLaptopCode, faStore } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Typography, Box, Grid2 } from "@mui/material";
import PageWithChildren from "../Components/PageWithChildren";
import ProjectCard from "../Components/ProjectCard";
import { PROJECT_ITEMS } from "../constants";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const iconByProjectTitle: Record<string, IconProp> = {
  Parva: faLaptopCode,
  rubiMESSAGE: faCodeBranch,
  "Photo Booth Package-Fit Tool": faStore,
};

const ProjectsPage: React.FC = () => {
  return (
    <PageWithChildren id="projects" className="projects">
      <Typography variant="h1" gutterBottom>
        Selected Projects
      </Typography>
      <Box>
        <Grid2 container spacing={4}>
          {PROJECT_ITEMS.map((project) => (
            <Grid2 key={project.title} size={{ md: 6, sm: 12 }}>
              <ProjectCard
                icon={iconByProjectTitle[project.title] ?? faCodeBranch}
                title={project.title}
                link={project.link}
                description={project.description}
                tags={project.tags}
                whatItShows={project.whatItShows}
              />
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </PageWithChildren>
  );
};

export default ProjectsPage;
