import React from "react";
import "../styles/pages/Home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home-top">
        <div className="home-container">
          <div className="home-title">
            <div className="home-title-description">
              <h2>CHASY</h2>
              <h3>
                Timeless Elegance: Discover the Perfect Wall Clocks for Your
                Home
              </h3>
              <button>Shop Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="home-recommended">
        <div className="home-container">
          <div className="home-recommended-desc">
            <h4>Recommended Products</h4>
            <Link href="">See All</Link>
          </div>
          <div className="recommended-blocks">
            <div className="block">Azaza</div>
            <div className="block">Azaza</div>
            <div className="block">Azaza</div>
            <div className="block">Azaza</div>
            <div className="block">Azaza</div>
            <div className="block">Azaza</div>
            <div className="block">Azaza</div>
            <div className="block">Azaza</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
