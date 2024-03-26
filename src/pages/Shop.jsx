import React, { useEffect, useState } from "react";
import "../styles/pages/Shop.scss";
import { db } from "../firebase/firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const Shop = () => {
  const [shopProducts, setShopProducts] = useState([]);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    const getDataFromFirestore = async () => {
      setPending(true);
      const docRef = doc(db, "products", "allPRoDucTsqxshdNshrZ");
      const docSnap = await getDoc(docRef);
      const snapshot = docSnap.data();
      setShopProducts(snapshot.products);
      setPending(false);
    };
    getDataFromFirestore();
  }, []);

  return (
    <div className="shop">
      <div className="shop-container">
        <div className="shop-head">{!pending && <p>Chasy Shop</p>}</div>

        <div className="shop-products">
          {pending === true ? (
            <span>Loading Data</span>
          ) : (
            shopProducts.map((item) => (
              <Link to={`/product/${item.id}`} key={item.id}>
                <div className="shop-product" key={item.id}>
                  <img src={item.image} alt="" />
                  <p>{item.title}</p>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
