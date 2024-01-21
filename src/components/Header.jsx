import React from "react";
import "../styles/Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-wrapper">
          <div className="header-logo">
            <h1>CHASY</h1>
            <span>we | fly</span>
          </div>

          <div className="header-links">
            <a href="">Home</a>
            <a href="">Shop</a>
            <a href="">Featured</a>
            <a href="">Recommended</a>
          </div>

          <div className="header-options">
            <input type="text" placeholder="Search..." />
            <svg
              className="header-bag"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <g>
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M12 1a5 5 0 0 1 5 5v2h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3V6a5 5 0 0 1 5-5zm5 10h-2v1a1 1 0 0 0 1.993.117L17 12v-1zm-8 0H7v1a1 1 0 0 0 1.993.117L9 12v-1zm3-8a3 3 0 0 0-2.995 2.824L9 6v2h6V6a3 3 0 0 0-2.824-2.995L12 3z" />
              </g>
            </svg>
          </div>

          <div className="header-auth">
            <button className="header-signup">Sign Up</button>
            <button className="header-signin">Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
