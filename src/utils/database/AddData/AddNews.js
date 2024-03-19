import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

const addNews = async (competitionData) => {
  try {
    const competitionsCollection = collection(db, "News");

    const docRef = await addDoc(competitionsCollection, competitionData);
    return docRef.id; 
  } catch (error) {
    throw error;
  }
};

export default addNews;
