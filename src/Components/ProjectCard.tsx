import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge, CardContent, CardHeader, Typography } from "@mui/material";
import React from "react";
import { Card } from "react-bootstrap";

interface ProjectCardProps {
  icon: IconProp;
  title: string;
  link: string;
  description: string;
  badge?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  icon,
  title,
  link,
  description,
  badge,
}) => {
  return (
    <Card className="project custom-card-width">
      <CardHeader
        title={
          <>
            <div className="header-content">
              <FontAwesomeIcon icon={icon} />
              <div className="title-wrapper">
                <span className="title">
                  {title}
                  {badge && (
                    <Badge
                      color="primary"
                      className="badge"
                      badgeContent={badge}
                    ></Badge>
                  )}
                </span>
                <a href={link}>
                  <FontAwesomeIcon icon={faLink} />
                </a>
              </div>
            </div>
          </>
        }
      />
      <CardContent>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
