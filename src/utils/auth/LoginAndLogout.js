import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../config/firebaseConfig";

const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
  }
};
const logOut = async () => {
  try {
    const response = await signOut(auth);
    return true;
  } catch (error) {
    throw error;
  }
};

export { signIn, logOut };
