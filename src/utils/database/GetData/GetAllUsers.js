import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

const getAllUsers = async () => {
  try {
    const usersCollection = collection(db, "Users");
    const usersSnapshot = await getDocs(usersCollection);
    const users = usersSnapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));
    return users;
  } catch (error) {
    throw new error;
  }
};

export default getAllUsers;
