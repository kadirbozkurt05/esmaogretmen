import { collection, getDocs } from "firebase/firestore";
import auth, { db } from "../../config/firebaseConfig";

const getUserCompetitions = async () => {
  try {
    const competitionsRef = collection(db, "Competitions");
    const querySnapshot = await getDocs(competitionsRef);
    const competitions = [];
    querySnapshot.forEach((doc) => {
      competitions.push({ id: doc.id, ...doc.data() });
    });
    return competitions.filter(competition=>competition.participants.includes(auth.currentUser.uid));
  } catch (error) {
    throw error;
  }
};

export default getUserCompetitions;
