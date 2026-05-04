import React from "react";
import { Typography, Box, Button, Chip, Stack } from "@mui/material";
import PageWithChildren from "../Components/PageWithChildren";
import CardComponent from "../Components/CardRow";
import headshot from "../Assets/Images/SupriyaThukral.jpg";
import { ImageProps } from "../types/ui";
import useWindowSize from "../helpers";
import { ABOUT_CONTENT, HERO_CONTENT } from "../constants";

const HomePage: React.FC = () => {
  const headshotProps: ImageProps = {
    src: headshot,
    alt: "Portrait of Supriya Thukral",
    className: "round-image",
  };
  const windowSize = useWindowSize() || { width: 0, height: 0 };

  return (
    <PageWithChildren id="home">
      <CardComponent
        image={headshotProps}
        imageLocation={windowSize.width <= 768 ? "left" : "right"}
      >
        <Box sx={{ mt: 1 }}>
          <Typography variant="h1" sx={{ mb: 2, maxWidth: "20ch" }}>
            {HERO_CONTENT.TITLE}
          </Typography>
          <Typography variant="body1" paragraph sx={{ maxWidth: "680px" }}>
            {HERO_CONTENT.SUBTITLE}
          </Typography>
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mb: 3 }}>
            {HERO_CONTENT.CALLOUTS.map((callout) => (
              <Chip key={callout} label={callout} />
            ))}
          </Stack>
          <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
            <Button variant="contained" href="#experience">
              {HERO_CONTENT.PRIMARY_CTA}
            </Button>
            <Button variant="outlined" href="#contact">
              {HERO_CONTENT.SECONDARY_CTA}
            </Button>
          </Stack>
        </Box>
      </CardComponent>

      <CardComponent>
        <Box sx={{ mt: 1 }}>
          <Typography variant="h2" gutterBottom>
            {ABOUT_CONTENT.TITLE}
          </Typography>
          {ABOUT_CONTENT.PARAGRAPHS.map((paragraph) => (
            <Typography key={paragraph} variant="body1" paragraph sx={{ maxWidth: "680px" }}>
              {paragraph}
            </Typography>
          ))}
        </Box>
      </CardComponent>
    </PageWithChildren>
  );
};

export default HomePage;
