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
    throw error;

  }
};
const logOut = async () => {
  try {
    const response = await signOut(auth);
    window.location.reload();
    return true;
  } catch (error) {
    throw error;
  }
};

export { signIn, logOut };
