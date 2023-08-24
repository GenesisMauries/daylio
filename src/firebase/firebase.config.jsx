import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC9CrwA8id8cjepb4G41VHuWJ9YvENm1qY",
  authDomain: "daylio-249d0.firebaseapp.com",
  projectId: "daylio-249d0",
  storageBucket: "daylio-249d0.appspot.com",
  messagingSenderId: "753107838749",
  appId: "1:753107838749:web:b638ce1f0cd7be1e27e3f4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);

