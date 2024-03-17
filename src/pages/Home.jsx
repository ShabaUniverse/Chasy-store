import React, { useEffect, useState } from "react";
import "../styles/pages/Home.scss";
import { Link } from "react-router-dom";

import { db } from "../firebase/firebase-config";
import {doc, getDoc} from 'firebase/firestore';

const Home = () => {

  const [receivedProducts, setReceivedProducts] = useState([]);

  useEffect(() => {
    const getDataFromFirestore = async () => {
      const docRef = doc(db, 'products', "allPRoDucTsqxshdNshrZ");
      const docSnap = await getDoc(docRef);
      const snapshot = docSnap.data();
      console.log(snapshot)
      const firstEightProducts = snapshot.products.slice(0, 8);
      setReceivedProducts(firstEightProducts);
    }
    getDataFromFirestore();
  }, [])



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
            <Link to="/recommended">See All</Link>
          </div>

          <div className="recommended-blocks">
            {
              receivedProducts.map((item, index) => (
                <div className="block" key={index}>
                  <img src={item.image} alt="" />
                  <p>{item.title}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
