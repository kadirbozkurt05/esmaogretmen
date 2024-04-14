import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

const getUserInfo = async (documentId) => {
  try {
    const docRef = doc(db, "Users", documentId);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      return docSnapshot.data();
    } else {
      throw new Error("User not found!");
    }
  } catch (error) {
    throw error;
  }
};

export default getUserInfo;
