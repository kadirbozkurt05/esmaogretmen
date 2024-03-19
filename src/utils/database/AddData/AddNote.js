import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

const addNoteToUser = async (userId, formData) => {
  try {
    const userDocRef = doc(db, "Users", userId);

    await updateDoc(userDocRef, {
      teacherNotes: arrayUnion(formData) 
    });

  } catch (error) {
    throw error;
  }
};

export default addNoteToUser;
