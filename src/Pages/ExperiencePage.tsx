import React from "react";
import deltahacksLogo from "../Assets/Images/Deltahacks.png";
import formaLogo from "../Assets/Images/FormaLogo.png";
import rubiconLogo from "../Assets/Images/Rubicon.png";
import CardComponent from "../Components/CardRow";
import { ImageProps } from "../types/ui";
import PageWithChildren from "../Components/PageWithChildren";
import { Typography, Box, Chip, Stack } from "@mui/material";
import { EXPERIENCE_ITEMS } from "../constants";

const ExperiencePage: React.FC = () => {
  const logoByTitle: Record<string, ImageProps> = {
    "Full-Stack Software Developer (Lead Frontend), Rubicon": {
      src: rubiconLogo,
      alt: "Rubicon logo",
      className: "rectangle-image",
    },
    "Full-Stack Software Developer, Forma.ai": {
      src: formaLogo,
      alt: "Forma.ai logo",
      className: "rectangle-image",
    },
    "Director of Sponsorship, DeltaHacks": {
      src: deltahacksLogo,
      alt: "DeltaHacks logo",
      className: "round-image",
    },
  };

  return (
    <PageWithChildren className="experience" id="experience">
      <Typography variant="h1" gutterBottom>
        Experience
      </Typography>
      {EXPERIENCE_ITEMS.map((item, index) => {
        const image = logoByTitle[item.title];

        return (
          <CardComponent
            key={item.title}
            image={image}
            className={index <= 2 ? "featured-experience-card" : undefined}
            imageLocation="left"
          >
            <Box sx={{ py: 1 }}>
              <Typography variant="h2" gutterBottom>
                {item.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontWeight: 500, color: "text.secondary", mb: 1.5 }}
              >
                {item.subtitle}
              </Typography>
              <Typography variant="body1" paragraph>
                {item.description}
              </Typography>
              {item.bullets && (
                <Box component="ul" sx={{ pl: 3, my: 0 }}>
                  {item.bullets.map((bullet) => (
                    <Typography
                      key={bullet}
                      component="li"
                      variant="body1"
                      sx={{ mb: 1 }}
                    >
                      {bullet}
                    </Typography>
                  ))}
                </Box>
              )}
              {item.tags && (
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 2 }}>
                  {item.tags.map((tag) => (
                    <Chip key={tag} label={tag} size="small" />
                  ))}
                </Stack>
              )}
            </Box>
          </CardComponent>
        );
      })}
    </PageWithChildren>
  );
};

export default ExperiencePage;
