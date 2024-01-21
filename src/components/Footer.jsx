import React from "react";
import "../styles/components/Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-wrapper">
          
          <div className="footer-left">
            <p>
              Developed by <a href="">Shabdan Kozhonaliev</a>
            </p>
          </div>

          <div className="footer-center">
            <h1>CHASY</h1>
            <span>we | fly</span>
          </div>

          <div className="footer-right">
            <a href="">Source Code Here</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
