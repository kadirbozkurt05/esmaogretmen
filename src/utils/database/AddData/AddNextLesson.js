import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import ShortUniqueId from "short-unique-id";

const addNextLessonToUser = async (userId, formData) => {
  try {
    const { randomUUID } = new ShortUniqueId({ length: 10 });
    formData.id = randomUUID();
    const userDocRef = doc(db, "Users", userId);

    await updateDoc(userDocRef, {
      nextClasses: arrayUnion(formData) 
    });

  } catch (error) {
    throw error;
  }
};

export default addNextLessonToUser;
