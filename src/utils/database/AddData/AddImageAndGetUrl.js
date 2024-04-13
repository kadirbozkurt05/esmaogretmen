import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const addImageAndGetUrl = async (file, folderName) => {
  const storage = getStorage();
  const storageRef = ref(storage, `${folderName}/${file.name}`);

  const metadata = {
    contentType: "image/jpeg",
  };

  const uploadTask = uploadBytes(storageRef, file, metadata);

  try {
    const downloadUrl = await getDownloadURL(storageRef);
    return downloadUrl;
  } catch (error) {
    throw error;
  }
};

export default addImageAndGetUrl;