import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const BackToTopButton: React.FC = () => {
  const [showButton, setShowButton] = useState(false);
  const [hover, setHover] = useState(false);
  const prevScrollY = useRef<number>(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
    prevScrollY.current = currentScrollY;
  };

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <button
      className="back-to-top-button"
      onClick={scrollToTop}
      aria-label="Back to top"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        display: showButton ? "block" : "none",
        position: "fixed",
        bottom: "30px",
        right: "30px",
        background: "#FFFFFF",
        border: "1px solid #D6D3CE",
        borderRadius: "999px",
        cursor: "pointer",
        fontSize: "28px",
        color: hover ? "#163C35" : "#1F4F46",
        zIndex: 1000,
        transition: "opacity 0.3s",
        opacity: showButton || prevScrollY.current > 100 ? 1 : 0,
        width: "48px",
        height: "48px",
      }}
    >
      <FontAwesomeIcon icon={faAngleUp} className="outline-caret-icon" />
    </button>
  );
};

export default BackToTopButton;
