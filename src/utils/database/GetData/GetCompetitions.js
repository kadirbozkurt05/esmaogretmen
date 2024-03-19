import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

const getAllCompetitions = async () => {
  try {
    const competitionsRef = collection(db, "Competitions");
    const querySnapshot = await getDocs(competitionsRef);
    const competitions = [];
    querySnapshot.forEach((doc) => {
      competitions.push({ id: doc.id, ...doc.data() });
    });
    return competitions;
  } catch (error) {
    throw error;
  }
};

export default getAllCompetitions;
