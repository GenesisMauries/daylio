import { db, auth } from "../firebase/firebase.config";
import { getDocs, collection, addDoc, Timestamp } from "firebase/firestore";
const postCollectionRef = collection(db, "daylioPost");
export const addPost = (emotion, newPost) => {
  return addDoc(postCollectionRef, {
    emotion,
    title: newPost,
    userId: auth?.currentUser?.uid,
    dateCreate: Timestamp.now(),
  });
};

// const getpostList = async () => {
//   try {
//     const data = await getDocs(postCollectionRef);
//     const filteredData = data.docs.map((doc) => ({
//       ...doc.data(),
//       id: doc.id,
//     }));
//     setPostList(filteredData);
//   } catch (err) {
//     console.error(err);
//   }
// };
