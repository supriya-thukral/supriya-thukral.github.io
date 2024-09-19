import React from "react";
import { Typography, Box } from "@mui/material";
import PageWithChildren from "../Components/PageWithChildren";
import CardComponent from "../Components/CardRow";
import headshot from "../Assets/Images/SupriyaThukral.jpg";
import { ImageProps } from "../Components/Page";
import useWindowSize from "../helpers";
import { useMemo } from "react";

const calculateRoundedExperience = () => {
  const startDate = new Date(2022, 4);
  const currentDate = new Date();
  const years = currentDate.getFullYear() - startDate.getFullYear();
  const months = currentDate.getMonth() - startDate.getMonth();

  const totalYears = years + months / 12;
  return Math.ceil(totalYears);
};

const HomePage: React.FC = () => {
  const headshotProps: ImageProps = {
    src: headshot,
    alt: "Headshot",
    className: "round-image",
  };
  const windowSize = useWindowSize() || { width: 0, height: 0 };
  const experience = useMemo(
    () => `about ${calculateRoundedExperience()} years`,
    [],
  );

  return (
    <PageWithChildren id="home">
      <CardComponent
        title="Hello World"
        image={headshotProps}
        imageLocation={windowSize.width <= 768 ? "left" : "right"}
      >
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1" paragraph>
            I'm Supriya, a <strong>full-stack software developer</strong> with{" "}
            <strong>{experience} of professional track record</strong>. My
            technical skill set is comprehensive, with specific expertise in{" "}
            <strong>front-end technologies such as React</strong>, including
            libraries like <strong>Redux</strong> and <strong>Recharts</strong>,
            and <strong>TypeScript</strong>, along with{" "}
            <strong>back-end proficiency in Python, Django, and SQL</strong>.
          </Typography>

          <Typography variant="body1" paragraph>
            Complemented by my experience with testing frameworks like{" "}
            <strong>Jest</strong>, I am committed to delivering{" "}
            <strong>efficient, clean, and robust code</strong> that contributes
            to the creation of reliable software solutions.
          </Typography>

          <Typography variant="body1" paragraph>
            Beyond my technical contributions, I have valuable{" "}
            <strong>leadership experience</strong>, having led a{" "}
            <strong>15-member team</strong> as the Director of Sponsorship at{" "}
            <strong>
              <a
                href="https://deltahacks.com/"
                target="_blank"
                rel="noreferrer"
              >
                DeltaHacks
              </a>
            </strong>
            , McMaster University's largest annual hackathon. This opportunity
            enhanced my understanding of the power of teamwork and solidified my
            passion for leading.
          </Typography>
        </Box>
      </CardComponent>
    </PageWithChildren>
  );
};

export default HomePage;
