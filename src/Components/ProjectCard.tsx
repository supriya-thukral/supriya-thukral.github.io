import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Badge,
  Card,
  CardContent,
  CardHeader,
  Grid2,
  Typography,
} from "@mui/material";
import React from "react";

interface ProjectCardProps {
  icon: IconProp;
  title: string;
  link: string;
  description: string;
  badge?: string;
}

const boldKeywords = [
  "React",
  "TypeScript",
  "SCSS",
  "Node.js",
  "GitHub",
  "HTML",
  "CSS",
  "JavaScript",
  "Web App",
  "Open Source",
  "MVC",
];

const ProjectCard: React.FC<ProjectCardProps> = ({
  icon,
  title,
  link,
  description,
  badge,
}) => {
  const boldDescription = () => {
    const words = description.split(" ");
    return words.map((word, index) => {
      const isKeyword = boldKeywords.some((keyword) =>
        word.toLowerCase().includes(keyword.toLowerCase()),
      );
      return isKeyword ? <b key={index}>{word} </b> : word + " ";
    });
  };

  return (
    <Card sx={{ boxShadow: 3, borderRadius: 2, position: "relative" }}>
      <CardHeader
        title={
          <Grid2 container alignItems="center" justifyContent="space-between">
            <Grid2 size={{ xs: 10 }} container alignItems="center" spacing={1}>
              <Grid2>
                <FontAwesomeIcon icon={icon} size="lg" />
              </Grid2>
              <Grid2>
                <Typography variant="h6">{title}</Typography>
              </Grid2>
            </Grid2>

            <Grid2 size={{ xs: 2 }} container justifyContent="flex-end" gap={4}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLink} size="sm" />
              </a>
              {badge && (
                <Grid2>
                  <Badge color="primary" badgeContent={badge} />
                </Grid2>
              )}
            </Grid2>
          </Grid2>
        }
        sx={{ paddingBottom: 0 }}
      />
      <CardContent>
        <Typography variant="body2">{boldDescription()}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
