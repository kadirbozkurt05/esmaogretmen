import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

const addHomeworkToUser = async (userId, formData) => {
  try {
    const userDocRef = doc(db, "Users", userId);

    await updateDoc(userDocRef, {
      homework: arrayUnion(formData)
    });

    console.log("Homework added to user successfully!");
  } catch (error) {
    console.error("Error adding homework to user:", error);
    throw error;
  }
};

export default addHomeworkToUser;
