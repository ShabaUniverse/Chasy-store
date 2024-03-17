import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-D1PLF4l3wMzA7_ivA9B8DtY6EcnwtNE",
  authDomain: "chasy-2049a.firebaseapp.com",
  projectId: "chasy-2049a",
  storageBucket: "chasy-2049a.appspot.com",
  messagingSenderId: "498111888925",
  appId: "1:498111888925:web:1eee808191f96f1d32d0f4",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
