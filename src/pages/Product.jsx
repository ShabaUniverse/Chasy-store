import React, { useEffect, useState } from "react";
import "../styles/pages/Product.scss";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

const Product = () => {
  const [uniqueItem, setUniqueItem] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const getDataFromFirestore = async () => {
      const docRef = doc(db, "products", "allPRoDucTsqxshdNshrZ");
      const docSnap = await getDoc(docRef);
      const snapshot = docSnap.data();
      let renderItem = snapshot.products.filter(
        (item) => item.id.toString() === id,
      );
      setUniqueItem(renderItem[0]);
    };

    getDataFromFirestore();
  }, []);

  return (
    <div className="product">
      <div className="product-container">
        <div className="product-wrapper">
          {uniqueItem && (
            <div className="item">
              <img src={uniqueItem.image} alt="" />
              <div className="item-description">
                <p className="unique-item-title">{uniqueItem.title}</p>
                <p className="unique-item-size">{uniqueItem.size}</p>
                <p className="unique-item-madein">Made in: {uniqueItem.country}</p>
                <p className="unique-item-price">${uniqueItem.price}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
