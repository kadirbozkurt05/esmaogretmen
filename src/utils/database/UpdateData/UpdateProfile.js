import { updateDoc, doc, arrayUnion} from "firebase/firestore";
import { db } from "./../../config/firebaseConfig";

const updateProfile = async (userId, profileInfo) => {
  try {
    const userRef = doc(db, "Users", userId);
    await updateDoc(userRef, profileInfo);
  } catch (error) {
    throw error;
  }
};

const updateUserEsCoin = async (userId, esCoin, referenceNumber) => {
  try {
    const userDocRef = doc(db, "Users", userId);
    await updateDoc(userDocRef, {
      esCoin,
      referenceTo: arrayUnion(referenceNumber),
    });
  } catch (error) {
    throw error;
  }
};

export default updateProfile
export { updateUserEsCoin };
