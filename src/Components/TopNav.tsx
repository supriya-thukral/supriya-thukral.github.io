import React, { useEffect, useState } from "react";
import logo from "../Assets/Images/Logo.png";
import { pagesContent } from "../Pages/PagesContent";

const sections = Object.keys(pagesContent).map((key) => {
  return {
    id: key,
    text: pagesContent[key].title,
  };
});

/**
 * TopNav
 * This component is responsible for rendering the top navigation bar.
 * Also responsible for highlighting the active section.
 * @returns {React.FC}
 */
const TopNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sectionPositions = sections.map((section) => {
        const el = document.getElementById(section.id);
        return {
          id: section.id,
          position: el ? el.getBoundingClientRect().top : 0,
        };
      });

      const sortedSections = sectionPositions.sort(
        (a, b) => Math.abs(a.position) - Math.abs(b.position)
      );

      const active = sortedSections.length > 0 ? sortedSections[0].id : "";
      setActiveSection(active);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call the function on mount to set the initial active section

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="top-nav-container">
      <img src={logo} alt="Logo" className="logo" />
      {sections.map((section) => (
        <div className="top-nav-item" key={section.id}>
          <a
            href={`#${section.id}`}
            className={section.id === activeSection ? "active" : ""}
          >
            {section.text}
          </a>
        </div>
      ))}
    </nav>
  );
};

export default TopNav;
