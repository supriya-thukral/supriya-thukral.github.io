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
            I'm Supriya, a <strong>full-stack software developer</strong> with a
            <strong>
              {" "}
              proven track record of delivering impactful solutions
            </strong>
            . My expertise spans both{" "}
            <strong>front-end and back-end technologies</strong>, with a focus
            on optimizing user experience and efficiency.
          </Typography>

          <Typography variant="body1" paragraph>
            My core technical strengths include <strong>React</strong> and
            libraries like <strong>Redux</strong> and <strong>Recharts</strong>,
            with <strong>TypeScript</strong> for robust front-end development. I
            also bring strong{" "}
            <strong>back-end skills in Python, Django, SQL, and Rust</strong>,
            ensuring seamless integration and data management across projects.
          </Typography>

          <Typography variant="body1" paragraph>
            I emphasize <strong>clean, maintainable code</strong> and adhere to
            best practices in code quality, leveraging tools like{" "}
            <strong>Jest, Vitest, ESLint, and Docker</strong>. My experience
            also includes setting up robust CI/CD pipelines and implementing
            scalable solutions that enhance both performance and user
            engagement.
          </Typography>

          <Typography variant="body1" paragraph>
            Beyond technical work, I bring valuable{" "}
            <strong>leadership skills</strong> to the table. As the Director of
            Sponsorship at{" "}
            <strong>
              <a
                href="https://deltahacks.com/"
                target="_blank"
                rel="noreferrer"
              >
                DeltaHacks
              </a>
            </strong>
            , McMaster University's largest annual hackathon, I led a team of
            15, securing over $20,000 in sponsorships and managing high-stakes
            partnerships.
          </Typography>
        </Box>
      </CardComponent>
    </PageWithChildren>
  );
};

export default HomePage;
