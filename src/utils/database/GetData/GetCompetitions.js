import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

const getCompetitions = async () => {
  try {
    const competitionsRef = collection(db, "Competitions");
    const querySnapshot = await getDocs(competitionsRef);
    const competitions = [];
    querySnapshot.forEach((doc) => {
      competitions.push({ id: doc.id, ...doc.data() });
    });

    // Sort competitions by due_date in descending order
    competitions.sort((a, b) => b.due_date - a.due_date);

    return competitions;
  } catch (error) {
    throw error;
  }
};

export default getCompetitions;
