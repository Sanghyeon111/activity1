import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
  try {
    const docRef = collection(db, "users", userId, "items");
    const docSnap = await getDocs(docRef);

    const mappedItems = docSnap.docs.map((postDoc) => ({
      id: postDoc.id,
      ...postDoc.data(),
    }));
    return mappedItems;
  } catch (error) {
    console.error("Error in getBlogPost: ", error);
  }
};

export const addItem = async (userId, item) => {
  try {
    const docRef = await addDoc(collection(db, "users", userId, "items"), item);
    return docRef.id;
  } catch (error) {
    console.error("Error in addBlogPost: ", error);
  }
};
