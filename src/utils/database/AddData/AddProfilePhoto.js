import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

const storage = getStorage();

const metadata = {
  contentType: "image/jpeg",
};

const uploadProfilePicture = async (file, uid) => {
  try {
    const storageRef = ref(storage, `profile_picture/${uid}.jpg`);

    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.error("Error uploading file:", error);
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

          const userRef = doc(db, "Users", uid);
          await updateDoc(userRef, { picture: downloadURL });
        } catch (error) {
          console.error("Error updating user document:", error);
        }
      }
    );
  } catch (error) {
    console.error("Error uploading profile picture:", error);
    throw error;
  }
};

export default uploadProfilePicture;
