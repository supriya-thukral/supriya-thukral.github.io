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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        display: showButton ? "block" : "none",
        position: "fixed",
        bottom: "30px",
        right: "30px",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        fontSize: "48px",
        color: hover ? "#555" : "#333",
        zIndex: 9999,
        transition: "opacity 0.3s",
        opacity: showButton || prevScrollY.current > 100 ? 1 : 0,
      }}
    >
      <FontAwesomeIcon icon={faAngleUp} className="outline-caret-icon" />
    </button>
  );
};

export default BackToTopButton;
