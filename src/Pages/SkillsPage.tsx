import {
  faJs,
  faPython,
  faReact,
  faSass,
  faRust,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCodeBranch,
  faDatabase,
  faFileCode,
  faPalette,
  faServer,
  faVial,
  faCloud,
  faCode,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Typography, Box, Grid2 } from "@mui/material";
import PageWithChildren from "../Components/PageWithChildren";

interface SkillItemProps {
  icon: IconDefinition;
  text: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ icon, text }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        fontSize: "2em",
        textAlign: "left",
      }}
    >
      <FontAwesomeIcon
        className="fa-icon"
        icon={icon}
        style={{ color: "#89cff0" }}
      />{" "}
      <Typography variant="body1">{text}</Typography>
    </Box>
  );
};

interface SkillsGridProps {
  skills: { icon: IconDefinition; text: string }[];
}

const SkillsGrid: React.FC<SkillsGridProps> = ({ skills }) => {
  return (
    <Grid2
      container
      spacing={3}
      sx={{
        justifyContent: { xs: "center", sm: "flex-start" },
        paddingBottom: "20px",
      }}
    >
      {skills.map((skill) => (
        <Grid2 key={skill.text}>
          <SkillItem icon={skill.icon} text={skill.text} />
        </Grid2>
      ))}
    </Grid2>
  );
};

const SkillsPage: React.FC = () => {
  const frontEndSkills = [
    { icon: faReact, text: "React" },
    { icon: faJs, text: "JavaScript" },
    { icon: faFileCode, text: "TypeScript" },
    { icon: faCodeBranch, text: "Redux" },
    { icon: faSass, text: "SCSS" },
    { icon: faPalette, text: "Material UI" },
    { icon: faVial, text: "Jest & Vitest" },
  ];

  const backEndSkills = [
    { icon: faPython, text: "Python" },
    { icon: faServer, text: "Django" },
    { icon: faDatabase, text: "SQL" },
    { icon: faDatabase, text: "Postgres" },
    { icon: faRust, text: "Rust" },
  ];

  const toolsSkills = [
    { icon: faCloud, text: "AWS" },
    { icon: faCode, text: "OpenAPI" },
    { icon: faCogs, text: "Docker" },
    { icon: faVial, text: "CI/CD" },
  ];

  return (
    <PageWithChildren id="skills" className="skills">
      <Typography variant="h1" gutterBottom>
        Skills
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h2" gutterBottom>
          Front-End Development
        </Typography>
        <SkillsGrid skills={frontEndSkills} />
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h2" gutterBottom>
          Back-End Development
        </Typography>
        <SkillsGrid skills={backEndSkills} />
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h2" gutterBottom>
          Tools and Platforms
        </Typography>
        <SkillsGrid skills={toolsSkills} />
      </Box>
    </PageWithChildren>
  );
};

export default SkillsPage;
