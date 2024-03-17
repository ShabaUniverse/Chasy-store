import React, { useEffect, useState } from 'react';
import '../styles/pages/Featured.scss';
import {doc, getDoc} from "firebase/firestore";
import {db} from '../firebase/firebase-config';

const Featured = () => {

  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const getDataFromFirestore = async () => {
      const docRef = doc(db, 'products', "allPRoDucTsqxshdNshrZ");
      const docSnap = await getDoc(docRef);
      const snapshot = docSnap.data();
      setFeaturedProducts(snapshot.products.slice(10, 20));
    }
    getDataFromFirestore();
  }, [])
  return (
    <div className='featured'>
      <div className="featured-container">
        <div className="featured-head">
          Featured Products
        </div>

        <div className="featured-products">
          {
            featuredProducts.map((item, index) => (
              <div className="product">
                <img src={item.image} alt="" />
                <p>{item.title}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Featured
