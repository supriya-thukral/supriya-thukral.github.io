import React from "react";
import deltahacksLogo from "../Assets/Images/Deltahacks.png";
import formaLogo from "../Assets/Images/FormaLogo.png";
import CardComponent from "../Components/CardRow";
import { ImageProps } from "../Components/Page";
import PageWithChildren from "../Components/PageWithChildren";
import { Typography } from "@mui/material";

const ExperiencePage: React.FC = () => {
  const formaLogoProps: ImageProps = {
    src: formaLogo,
    alt: "Forma.AI Logo",
    className: "rectangle-image",
  };

  const deltahacksLogoProps: ImageProps = {
    src: deltahacksLogo,
    alt: "DeltaHacks Logo",
    className: "round-image",
  };

  return (
    <PageWithChildren className="experience" id="experience">
      <Typography variant="h1" gutterBottom>
        Projects and Experience
      </Typography>

      <CardComponent image={formaLogoProps}>
        <Typography variant="h2" gutterBottom>
          Working at Forma.AI
        </Typography>
        <Typography variant="body1">
          <a href="https://forma.ai" target="_blank" rel="noreferrer">
            <strong>Forma.AI</strong>
          </a>{" "}
          is a Series B startup specializing in providing real-time insights
          into compensation to sales representatives through dynamic dashboards.
          Being part of this fast-paced startup environment has accelerated my
          professional growth and refined both my existing and new skills.
        </Typography>

        <Typography variant="body1">
          As a key member of the Dashboard Team at <strong>Forma.AI</strong>, I
          use my expertise in <strong>React</strong>,{" "}
          <strong>TypeScript</strong>, and <strong>Redux</strong> to construct
          and manage cutting-edge UI components. Efficiency and maintainability
          are at the forefront of my development process, leading to
          well-structured code that enhances software reliability and
          performance. I use <strong>SCSS</strong> and{" "}
          <strong>Material UI</strong> for styling the components, while also
          writing comprehensive tests with <strong>Jest</strong> to ensure code
          quality. My contributions to creating <strong>Django</strong> models
          and APIs, along with my active role in modifying <strong>SQL</strong>{" "}
          query schemas, ensure seamless integration with the Dashboard
          Configurator tool. My contributions to the{" "}
          <strong>Dashboard Configurator</strong> development in this{" "}
          <strong>Agile</strong> environment include:
        </Typography>

        <ol>
          <li>
            <Typography variant="body1" component="span">
              <strong>Reduce Repetitive Code:</strong> Standardizing the
              creation of dashboards reduces repetitive coding tasks, resulting
              in fewer patches and fixes.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span">
              <strong>Ensure Consistent Client Experience:</strong>{" "}
              Standardization ensures consistency across all client dashboards,
              leading to an improved customer experience.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span">
              <strong>Empower the Customer Team:</strong> The Dashboard
              Configurator makes our customer team less dependent on the
              development team, enabling them to make modifications to
              dashboards without submitting a development request.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span">
              <strong>Deliver Dashboards Faster:</strong> Our new process
              significantly improves the turnaround time for delivering
              dashboards to clients.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span">
              <strong>Enhance Core Code:</strong> By spending less time
              maintaining custom code, our developers can focus more on
              strengthening the core code.
            </Typography>
          </li>
        </ol>
      </CardComponent>

      <CardComponent image={deltahacksLogoProps}>
        <Typography variant="h2" gutterBottom>
          DeltaHacks - Director of Sponsorship
        </Typography>
        <Typography variant="body1">
          <a href="https://deltahacks.com" target="_blank" rel="noreferrer">
            <strong>DeltaHacks</strong>
          </a>{" "}
          is an annual hackathon focused on facilitating positive change across
          diverse domains. During January 2022 edition, I spearheaded the
          Sponsorship Team as the Director of Sponsorship, achieving
          unprecedented results in a fully remote and virtual setting.
        </Typography>

        <Typography variant="body1">
          My tenure as the <strong>Director of Sponsorship</strong> at{" "}
          <strong>DeltaHacks</strong> was characterized by strategic innovation,
          effective leadership, and meticulous process optimization. These
          skills, while not directly related to writing code, have made me a
          more holistic software developer with a broad understanding of project
          and team management, which complements my technical expertise.
        </Typography>

        <ol>
          <li>
            <Typography variant="body1" component="span">
              <strong>Strategic Process Improvement:</strong> I identified
              opportunities for efficiency and implemented innovative solutions
              to optimize our operations. These ranged from standardized contact
              workflows and email templates to creating a comprehensive
              sponsorship brochure, greatly simplifying processes for future
              sponsorship teams.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span">
              <strong>Exceptional Leadership:</strong> Leading the Sponsorship
              Team, I facilitated collaboration, guided team strategy, and
              managed relationships with various stakeholders. Our collective
              efforts led to securing over $20,000 in sponsorship funds for the
              event, contributing directly to its success.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span">
              <strong>Adaptability:</strong> Organizing a fully remote event
              presented unique challenges, requiring adaptability and a
              proactive approach. My ability to quickly adjust to new
              circumstances and devise effective solutions is a testament to my
              problem-solving capabilities, a vital skill for software
              development.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span">
              <strong>Communication:</strong> As the main point of contact for
              tech companies interested in collaborating with DeltaHacks, I
              honed my communication skills, a critical competency for
              interfacing with project stakeholders in a software development
              context.
            </Typography>
          </li>
        </ol>
      </CardComponent>
    </PageWithChildren>
  );
};

export default ExperiencePage;
