import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

const addNextLessonToUser = async (userId, formData) => {
  try {
    const userDocRef = doc(db, "Users", userId);

    await updateDoc(userDocRef, {
      nextClasses: arrayUnion(formData) 
    });

  } catch (error) {
    throw error;
  }
};

export default addNextLessonToUser;
