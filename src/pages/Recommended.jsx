import React, { useEffect, useState } from 'react';
import "../styles/pages/Recommended.scss";
import {doc, getDoc} from 'firebase/firestore';
import {db} from '../firebase/firebase-config';

const Recommended = () => {

  const [recommendedProducts, setRecommendedProducts] = useState([]);

  useEffect(() => {
    const getDataFromFirestore = async () => {
      const docRef = doc(db, 'products', 'allPRoDucTsqxshdNshrZ');
      const docSnap = await getDoc(docRef);
      const snapshot = docSnap.data();
      setRecommendedProducts(snapshot.products.slice(0, 8));

    }

    getDataFromFirestore();
  }, [])

  return (
    <div className='recommended'>
      <div className="recommended-container">
        <div className="recommended-head">
          Recommended
        </div>

        <div className="recommended-products">
          {
            recommendedProducts.map((item, index) => (
              <div className="product" key={index}>
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

export default Recommended
