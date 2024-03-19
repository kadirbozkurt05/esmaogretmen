import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

const getSingleCompetition = async (competitionId) => {
  try {
    const competitionDocRef = doc(db, "Competitions", competitionId);
    const competitionDocSnapshot = await getDoc(competitionDocRef);

    if (competitionDocSnapshot.exists()) {
      const competitionData = competitionDocSnapshot.data();
      return { id: competitionDocSnapshot.id, ...competitionData };
    } else {
      throw new Error("Competition not found.");
    }
  } catch (error) {
    throw error;
  }
};

export default getSingleCompetition;
