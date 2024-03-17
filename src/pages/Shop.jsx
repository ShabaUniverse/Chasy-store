import React, { useEffect, useState } from "react";
import "../styles/pages/Shop.scss";
import { db } from "../firebase/firebase-config";
import { doc, getDoc } from "firebase/firestore";

const Shop = () => {

  const [shopProducts, setShopProducts] = useState([]);

  useEffect(() => {
    const getDataFromFirestore = async () => {
      const docRef = doc(db, "products", "allPRoDucTsqxshdNshrZ");
      const docSnap = await getDoc(docRef);
      const snapshot = docSnap.data();
      console.log(snapshot.products);
      setShopProducts(snapshot.products);
    };
    getDataFromFirestore();
  }, []);

  return (
      <div className="shop">
        <div className="shop-container">
            <div className="shop-head">
                <h3> Chasy Shop </h3>
            </div>
            <div className="shop-products">
                {
                    shopProducts.map((item, index) => (
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
};

export default Shop;
