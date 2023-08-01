import "pure-react-carousel/dist/react-carousel.es.css";
import React from "react";
import deltahacksLogo from "../Assets/Images/Deltahacks.png";
import formaLogo from "../Assets/Images/FormaLogo.png";
import CardComponent from "../Components/CardRow";
import { ImageProps } from "../Components/Page";
import PageWithChildren from "../Components/PageWithChildren";

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
      <h1>Projects and Experience</h1>
      <CardComponent image={formaLogoProps}>
        <h2>Working at Forma.AI</h2>
        <h3>
          <strong>Forma.AI</strong> is a Series B startup specializing in
          providing real-time insights into compensation to sales
          representatives through dynamic dashboards. Being part of this
          fast-paced startup environment has accelerated my professional growth
          and refined both my existing and new skills.
        </h3>
        <div>
          <p>
            As a key member of the Dashboard Team at <strong>Forma.AI</strong>,
            I utilized my expertise in <strong>React</strong>,{" "}
            <strong>TypeScript</strong>, and <strong>Redux</strong> to construct
            and manage cutting-edge UI components. Efficiency and
            maintainability were at the forefront of my development process,
            leading to well-structured code that enhances software reliability
            and performance.
          </p>

          <p>
            I used <strong>SCSS</strong> and <strong>Material UI</strong> for
            styling the components, while also writing comprehensive tests with{" "}
            <strong>Jest</strong> to ensure code quality. My contributions to
            creating <strong>Django</strong> models and APIs, along with my
            active role in modifying <strong>SQL</strong> query schemas, have
            ensured seamless integration with the Dashboard Configurator tool.
          </p>

          <p>
            My contributions to the <strong>Dashboard Configurator</strong>{" "}
            development in this <strong>Agile</strong> environment include:
          </p>

          <ol>
            <li>
              <strong>Reduced Repetitive Code:</strong> Standardizing the
              creation of dashboards reduced repetitive coding tasks, resulting
              in fewer patches and fixes.
            </li>
            <li>
              <strong>Consistent Client Experience:</strong> Standardization
              ensures consistency across all client dashboards, leading to an
              improved customer experience.
            </li>
            <li>
              <strong>Empowering the Customer Team:</strong> The Dashboard
              Configurator has made our customer team less dependent on the
              development team, enabling them to make modifications to
              dashboards without submitting a development request.
            </li>
            <li>
              <strong>Faster Client Delivery:</strong> Our new process has
              significantly improved the turnaround time for delivering
              dashboards to clients.
            </li>
            <li>
              <strong>Enhanced Core Code:</strong> By spending less time
              maintaining custom code, our developers have been able to focus
              more on strengthening the core code.
            </li>
          </ol>
        </div>
      </CardComponent>
      <CardComponent image={deltahacksLogoProps}>
        <h2>DeltaHacks - Director of Sponsorship</h2>
        <h3>
          DeltaHacks is an annual hackathon focused on facilitating positive
          change across diverse domains. During January 2022 edition, I
          spearheaded the Sponsorship Team as the Director of Sponsorship,
          achieving unprecedented results in a fully remote and virtual setting.
        </h3>
        <div>
          <p>
            My tenure as the <strong>Director of Sponsorship</strong> at{" "}
            <strong>DeltaHacks</strong> was characterized by strategic
            innovation, effective leadership, and meticulous process
            optimization. These skills, while not directly related to writing
            code, have made me a more holistic software developer with a broad
            understanding of project and team management, which complements my
            technical expertise.
          </p>

          <ol>
            <li>
              <strong>Strategic Process Improvement:</strong> I identified
              opportunities for efficiency and implemented innovative solutions
              to optimize our operations. These ranged from standardized contact
              workflows and email templates to creating a comprehensive
              sponsorship brochure, greatly simplifying processes for future
              sponsorship teams.
            </li>
            <li>
              <strong>Exceptional Leadership:</strong> Leading the Sponsorship
              Team, I facilitated collaboration, guided team strategy, and
              managed relationships with various stakeholders. Our collective
              efforts led to securing over $20,000 in sponsorship funds for the
              event, contributing directly to its success.
            </li>
            <li>
              <strong>Adaptability:</strong> Organizing a fully remote event
              presented unique challenges, requiring adaptability and a
              proactive approach. My ability to quickly adjust to new
              circumstances and devise effective solutions is a testament to my
              problem-solving capabilities, a vital skill for software
              development.
            </li>
            <li>
              <strong>Communication:</strong> As the main point of contact for
              tech companies interested in collaborating with DeltaHacks, I
              honed my communication skills, a critical competency for
              interfacing with project stakeholders in a software development
              context.
            </li>
          </ol>
        </div>
      </CardComponent>
    </PageWithChildren>
  );
};

export default ExperiencePage;
