import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

const addParticipant = async (competitionId, userId) => {
  try {
    const competitionDocRef = doc(db, "Competitions", competitionId);

    await updateDoc(competitionDocRef, {
      participants: arrayUnion(userId),
    });
  } catch (error) {
    throw error;
  }
};

export default addParticipant;
