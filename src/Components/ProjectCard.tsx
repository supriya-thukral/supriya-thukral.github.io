import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge, Card, CardContent, CardHeader } from "@mui/material";
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
    return words.map((word) => {
      const isKeyword = boldKeywords.some((keyword) =>
        word.toLowerCase().includes(keyword.toLowerCase()),
      );
      return isKeyword ? <b>{word} </b> : word + " ";
    });
  };

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
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLink} className="fa-link" />
                </a>
              </div>
            </div>
          </>
        }
      />
      <CardContent>{boldDescription()}</CardContent>
    </Card>
  );
};

export default ProjectCard;
