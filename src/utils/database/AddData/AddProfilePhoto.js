import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

const storage = getStorage();

const metadata = {
  contentType: 'image/jpeg'
};

const uploadProfilePicture = async (file, uid) => {
  try {
    // Create a reference to the Firebase storage location
    const storageRef = ref(storage, `profile_picture/${uid}.jpg`);

    // Upload the file to Firebase Storage
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    // Listen for state changes, errors, and completion of the upload
    uploadTask.on('state_changed',
      (snapshot) => {
        // Handle upload progress or pause/resume
      },
      (error) => {
        // Handle unsuccessful uploads
        console.error("Error uploading file:", error);
      },
      async () => {
        // Handle successful upload
        try {
          // Get the download URL for the uploaded file
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

          // Update the user document in Firestore with the download URL
          const userRef = doc(db, "Users", uid);
          await updateDoc(userRef, { picture: downloadURL });
          return downloadURL;
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
