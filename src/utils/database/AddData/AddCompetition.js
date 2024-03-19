import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

const addCompetition = async (competitionData) => {
  try {
    const competitionsCollection = collection(db, "Competitions");
    const docRef = await addDoc(competitionsCollection, competitionData);
    return docRef.id;
  } catch (error) {
    throw error;
  }
};

export default addCompetition;
