import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  CardContent,
  CardHeader,
  Chip,
  Grid2,
  Typography,
  Box,
} from "@mui/material";
import React from "react";

interface ProjectCardProps {
  icon: IconProp;
  title: string;
  link?: string;
  description: string;
  tags: string[];
  whatItShows?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  icon,
  title,
  link,
  description,
  tags,
  whatItShows,
}) => {
  return (
    <Card sx={{ boxShadow: 3, borderRadius: 2, position: "relative", height: "100%" }}>
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

            <Grid2 size={{ xs: 2 }} container justifyContent="flex-end">
              {link && (
                <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`${title} link`}>
                  <FontAwesomeIcon icon={faLink} size="sm" />
                </a>
              )}
            </Grid2>
          </Grid2>
        }
        sx={{ paddingBottom: 0 }}
      />
      <CardContent>
        <Typography variant="body2" sx={{ mb: 2 }}>
          {description}
        </Typography>
        {whatItShows && (
          <Typography variant="body2" sx={{ mb: 2, color: "text.secondary" }}>
            {whatItShows}
          </Typography>
        )}
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {tags.map((tag) => (
            <Chip key={tag} label={tag} size="small" />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
