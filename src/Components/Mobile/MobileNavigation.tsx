import React, { useState, useEffect } from "react";
import { pagesContent } from "../../Pages/PagesContent";
import { NAV_SECTION_IDS } from "../../constants";

const sections = NAV_SECTION_IDS.map((key) => {
  return {
    id: key,
    text: pagesContent[key].title,
  };
});

const MobileNavigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [isMenuOpen]);

  return (
    <>
      <button
        className="menu-button"
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-navigation-menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "✕" : "☰"}
      </button>
      {isMenuOpen && (
        <div className="mobile-menu" id="mobile-navigation-menu">
          <a href="#home" className="mobile-brand" onClick={() => setIsMenuOpen(false)}>
            Supriya Thukral
          </a>
          {sections.map((section) => (
            <div className="top-nav-item" key={section.id}>
              <a href={`#${section.id}`} onClick={() => setIsMenuOpen(false)}>
                {section.text}
              </a>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MobileNavigation;
