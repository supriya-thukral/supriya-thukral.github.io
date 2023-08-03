import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="left-content">
          <h3>Contact Information</h3>
          <p>
            Email:{" "}
            <a href="mailto:supriyathukral@hotmail.com">
              supriyathukral@hotmail.com
            </a>
          </p>
        </div>
        <div className="right-content">
          <p>Made with ❤️ by Supriya Thukral</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
