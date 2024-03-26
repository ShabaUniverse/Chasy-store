import React, { useState } from "react";
import "../styles/components/Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  
  const popNavStyle = {
    display: showNav ? "flex" : "none",
  };

  return (
    <div className="header">
      <div className="header-container">
        <div className="header-wrapper">
          <div className="header-logo">
            <h1>CHASY</h1>
            <span>we | fly</span>
          </div>

          <div className="header-links">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
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

          <div className="header-menu-mob">
            <svg
              onClick={() => setShowNav(true)}
              className="ham-menu-svg"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg">
              <title />
              <g data-name="1" id="_1">
                <path d="M441.13,166.52h-372a15,15,0,1,1,0-30h372a15,15,0,0,1,0,30Z" />
                <path d="M441.13,279.72h-372a15,15,0,1,1,0-30h372a15,15,0,0,1,0,30Z" />
                <path d="M441.13,392.92h-372a15,15,0,1,1,0-30h372a15,15,0,0,1,0,30Z" />
              </g>
            </svg>
          </div>

          {/*  --------- POP NAV -------------- */}

          <div className="pop-nav" style={popNavStyle}>
            <svg
              onClick={() => setShowNav(!showNav)}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M12,13.4142136 L8.70710678,16.7071068 L7.29289322,15.2928932 L10.5857864,12 L7.29289322,8.70710678 L8.70710678,7.29289322 L12,10.5857864 L15.2928932,7.29289322 L16.7071068,8.70710678 L13.4142136,12 L16.7071068,15.2928932 L15.2928932,16.7071068 L12,13.4142136 Z"
                fillRule="evenodd"
              />
            </svg>

            <div className="pop-nav-auth">
              <button className="header-signup">Sign Up</button>
              <button className="header-signin">Sign In</button>
            </div>

            <div className="pop-nav-links">
              <Link>Home</Link>
              <Link>Shop</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
