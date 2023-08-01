import React from "react";
import PageWithChildren from "../Components/PageWithChildren";
import CardComponent from "../Components/CardRow";
import headshot from "../Assets/Images/SupriyaThukral.jpg";
import { ImageProps } from "../Components/Page";
import useWindowSize from "../helpers";

const HomePage: React.FC = () => {
  const headshotProps: ImageProps = {
    src: headshot,
    alt: "Headshot",
    className: "round-image",
  };
  const windowSize = useWindowSize() || { width: 0, height: 0 };
  return (
    <PageWithChildren id="home">
      <CardComponent
        title="Hello World!"
        image={headshotProps}
        imageLocation={windowSize.width <= 768 ? "left" : "right"}
      >
        <div>
          <p>
            Hello! I'm <strong>Supriya</strong>, a{" "}
            <strong>full-stack software developer</strong> with a robust{" "}
            <strong>2-year professional track record</strong>. My technical
            skill set is comprehensive, with specific expertise in{" "}
            <strong>front-end technologies such as React</strong>, including
            libraries like <strong>Redux</strong> and <strong>Recharts</strong>,
            and <strong>TypeScript</strong>, along with{" "}
            <strong>back-end proficiency in Python, Django, and SQL</strong>.
          </p>
          <p>
            Complemented by my experience with testing frameworks like{" "}
            <strong>Jest</strong>, I am committed to delivering{" "}
            <strong>efficient, clean, and robust code</strong> that contributes
            to the creation of reliable software solutions.
          </p>
          <p>
            Beyond my technical contributions, I have valuable{" "}
            <strong>leadership experience</strong>, having led a{" "}
            <strong>15-member team</strong> as the Director of Sponsorship at{" "}
            <strong>DeltaHacks</strong>. This opportunity enhanced my
            understanding of the power of teamwork and solidified my passion for
            leading.
          </p>
        </div>
      </CardComponent>
    </PageWithChildren>
  );
};

export default HomePage;
