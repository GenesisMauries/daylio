import { useState } from "react";
import { db, auth } from "../firebase/firebase.config";
import { getDocs, collection, addDoc } from "firebase/firestore";

function EmotionForm() {
  const [postList, setPostList] = useState([]);
  console.log(postList);

  const [newPost, setNewPost] = useState("");

  const postCollectionRef = collection(db, "daylioPost");

  const getpostList = async () => {
    try {
      const data = await getDocs(postCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPostList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };
  const onSubmitPost = async () => {
    try {
      await addDoc(postCollectionRef, {
        title: newPost,
        userId: auth?.currentUser?.uid,
      });
      getpostList();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="App">
      <div>
        <input
          placeholder="Describe tu dia o pensamientos actuales..."
          onChange={(e) => setNewPost(e.target.value)}
        />

        <button onClick={onSubmitPost}> Registrar</button>
      </div>
    </div>
  );
}

export default EmotionForm;
