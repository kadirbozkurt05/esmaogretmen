import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

const addNews = async (newsData) => {
  try {
    const competitionsCollection = collection(db, "News");

    const docRef = await addDoc(competitionsCollection, newsData);
    return docRef.id; 
  } catch (error) {
    throw error;
  }
};

export default addNews;
