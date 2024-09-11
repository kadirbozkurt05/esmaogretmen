import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";

const uploadProfilePicture = async (file, userId) => {
  if (!file || !userId) {
    throw new Error("File and userId are required");
  }

  const storageRef = ref(storage, `profilePictures/${userId}/profile_picture.jpg`);

  try {
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);

    return downloadURL;
  } catch (error) {
    console.error("Error uploading file: ", error);
    throw error;
  }
};

const uploadPicture = async (route,file) => {
  const fileId = Math.random().toString(36).substr(2, 5);
  if (!file || !route) {
    throw new Error("File, route fileId are required");
  }

  const storageRef = ref(storage, `${route}/${fileId}/picture.jpg`);

  try {
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);

    return downloadURL;
  } catch (error) {
    console.error("Error uploading file: ", error);
    throw error;
  }
};

export { uploadProfilePicture, uploadPicture };
