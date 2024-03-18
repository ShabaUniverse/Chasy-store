import React, { useEffect, useState } from "react";
import "../styles/pages/Shop.scss";
import { db } from "../firebase/firebase-config";
import { doc, getDoc } from "firebase/firestore";

const Shop = () => {

  const [shopProducts, setShopProducts] = useState([]);
  const [pending, setPending] = useState(false);


  useEffect(() => {
    const getDataFromFirestore = async () => {
      setPending(true);
      const docRef = doc(db, "products", "allPRoDucTsqxshdNshrZ");
      const docSnap = await getDoc(docRef);
      const snapshot = docSnap.data();
      console.log(snapshot.products);
      setShopProducts(snapshot.products);
      setPending(false);
    };
    getDataFromFirestore();
  }, []);

  return (
      <div className="shop">
        <div className="shop-container">
            <div className="shop-head">
                {!pending && <p>Chasy Shop</p>} 
            </div>

            <div className="shop-products">
                {
                    pending === true ? <span>Loading Data</span> : shopProducts.map((item, index) => (
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
