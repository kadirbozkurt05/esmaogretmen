import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

const storage = getStorage();

const metadata = {
  contentType: 'image/jpeg'
};

const uploadProfilePicture = async (file, uid) => {
    const img = await fetch(file);
    const bytes = await img.blob();
  const storageRef = ref(storage, 'profile_picture/' + `${uid}.jpg`);
  const uploadTask = uploadBytesResumable(storageRef, bytes, metadata);

  uploadTask.on('state_changed',
    (snapshot) => {
      switch (snapshot.state) {
        case 'paused':
          break;
        case 'running':
          break;
      }
    },
    (error) => {
      switch (error.code) {
        case 'storage/unauthorized':
          break;
        case 'storage/canceled':
          break;
        case 'storage/unknown':
          break;
      }
    },
    async () => {
      try {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        const userRef = doc(db, "Users", uid);
        await updateDoc(userRef, { picture: downloadURL });
      } catch (error) {
        throw error;
      }
    }
  );
}



  export default uploadProfilePicture;
