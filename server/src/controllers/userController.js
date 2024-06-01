import firebase from "../Firebase.js";

import {
  getFirestore,
  collection,
  setDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  arrayUnion,
} from "firebase/firestore";
import {
  getAuth,
  deleteUser as deleteUserFromAuth,
  createUserWithEmailAndPassword,
  updatePassword as passwordUpdate,
  signInWithEmailAndPassword,
} from "firebase/auth";
import User from "../models/User.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import ShortUniqueId from "short-unique-id";
const db = getFirestore(firebase);
export const auth = getAuth();

const storage = getStorage();

const metadata = {
  contentType: "image/jpeg",
};

const createUser = async (req, res, next) => {
  const data = req.body;
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );

    const user = userCredential.user;
    const userData = new User(
      user.uid,
      data.email,
      data.firstName,
      data.lastName,
      data.reference,
      data.studentClass,
      data.school,
      data.phone
    );

    const userCollection = collection(db, "Users");
    const userDoc = doc(userCollection, user.uid);

    try {
      if (data.reference !== "") {
        const allUsers = await getUsers();
        const userWithReference = allUsers.find(
          (user) => user.referenceNumber === data.reference
        );

        if (userWithReference) {
          const updatedEsCoin = {
            total: userWithReference?.esCoin?.total + 50,
            transactions: [
              ...userWithReference?.esCoin?.transactions,
              { case: `reference to ${user?.uid}`, amount: 50 },
            ],
          };
          await updateUserEsCoin(
            userWithReference?.id,
            updatedEsCoin,
            user?.uid.substring(0, 8)
          );
        } else {
          userData.referenceFrom = null;
        }
      }
      await setDoc(userDoc, JSON.parse(JSON.stringify(userData)));
    } catch (error) {
      try {
        await deleteUserFromAuth(user);
      } catch (error) {
        res.status(400).send(error.message);
      }

      res.status(400).send(error.message);
    }

    res.status(201).send(data);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
const getUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const docRef = doc(db, "Users", id);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      res.status(201).send(docSnapshot.data());
    } else {
      res.status(404).send({ message: "User not found!" });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const updateUser = async (req, res, next) => {
  try {
    const userID = req.params.id;
    const profileInfo = req.body;
    const userRef = doc(db, "Users", userID);
    await updateDoc(userRef, profileInfo);
    res.status(203).send(profileInfo);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const getAllUsers = async (req, res, next) => {
  try {
    const usersCollection = collection(db, "Users");

    const querySnapshot = await getDocs(usersCollection);

    const users = [];
    querySnapshot.forEach((doc) => {
      users.push(doc.data());
    });

    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const deleteUser = async (req, res, next) => {
  try {
    const user = auth.currentUser;
    await deleteUserFromAuth(user);
    await deleteDoc(doc(db, "Users", user.uid));
    res.status(204).send("User deleted succesfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const login = async (req, res, next) => {
  try {
    const credentials = req.body;
    const userCredential = await signInWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    );
    const user = userCredential.user;
    res.status(200).send(user);
  } catch (error) {
    res.status(405).send({ message: "a" });
  }
};
const resetPassword = async (req, res, next) => {
  const body = req.body;
  try {
    await sendPasswordResetEmail(auth, body.email);
    res.status(200).send("Password changed succesfully.");
  } catch (error) {
    res.status(400).send(error);
  }
};
const updatePassword = async (req, res, next) => {
  const data = req.body;
  try {
    await passwordUpdate(auth.currentUser, data.password);
    res.status(201).send({ message: "Password changed succesfully!" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
const uploadProfilePicture = async (req, res, next) => {
  try {
    // const storageRef = ref(storage, `profile_picture/abcd.jpg`);

    // const uploadTask = await uploadBytesResumable(storageRef, req.file.buffer, metadata);
    // //const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

    // // uploadTask.on(
    // //   "state_changed",
    // //   (snapshot) => {},
    // //   (error) => {
    // //     console.error("Error uploading file:", error);
    // //   },
    // //   async () => {
    // //     try {
    // //       await updateDoc(userRef, { picture: downloadURL });
    // //     } catch (error) {
    // //       res.status(400).send("NOT UPLOADED");
    // //       return;
    // //     }
    // //   }
    // // );
    // res.status(200).send({downloadURL:"aaaa"})
  } catch (error) {
    console.error("Error uploading profile picture:", error);
    res.status(400).send({ error: "yuklenmedi" });
  }
};
const updateLessonDone = async (req, res, next) => {
  const data = req.body;

  const userDocRef = doc(db, "Users", data?.userId);

  try {
    const userDocRef = doc(db, "Users", data?.userId);
    const userDocSnap = await getDoc(userDocRef);

    if (!userDocSnap.exists()) {
      res.status(404).send("Document not found!");
      return;
    }

    const userData = userDocSnap.data();
    const scheduledClasses = userData.scheduledClasses || [];

    const classIndex = scheduledClasses.findIndex(
      (obj) => obj.id === data.classId
    );

    if (classIndex === -1) {
      res.status(404).send({
        message: "Class with specified id not found in scheduledClasses array",
      });
      return;
    }

    scheduledClasses[classIndex].isDone = data.isDone;

    await updateDoc(userDocRef, { scheduledClasses });
    res.status(201).send({ message: "Lesson status updated successfully." });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
const addImageAndGetUrl = async (req, res, next) => {
  const data = req.body;
  const storage = getStorage();
  const storageRef = ref(storage, `${data.folderName}/${data.file.name}`);

  const metadata = {
    contentType: "image/jpeg",
  };

  const uploadTask = uploadBytes(storageRef, data.file, metadata);

  try {
    const downloadUrl = await getDownloadURL(storageRef);
    res.status(203).send({ url: downloadUrl });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
const addNoteToUser = async (req, res, next) => {
  const data = req.body;
  try {
    await updateDoc(userDocRef, {
      teacherNotes: arrayUnion(data.formData),
    });
    res.status(201).send(data.formData);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const addNextLessonToUser = async (req, res, next) => {
  const data = req.body;
  try {
    const { randomUUID } = new ShortUniqueId({ length: 10 });
    data.formData.id = randomUUID();
    const userDocRef = doc(db, "Users", data.userId);

    await updateDoc(userDocRef, {
      scheduledClasses: arrayUnion(data.formData),
    });
    res.status(201).send({ message: "Ders eklenmiştir." });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
const addHomeworkToUser = async (req, res, next) => {
  const data = req.body;
  try {
    const userDocRef = doc(db, "Users", data.userId);

    await updateDoc(userDocRef, {
      homework: arrayUnion(data.formData),
    });
    res.status(201).send({ message: "Ders eklenmiştir." });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

//FUNCTIONS
const getUsers = async () => {
  try {
    const usersCollection = collection(db, "Users");

    const querySnapshot = await getDocs(usersCollection);

    const users = [];
    querySnapshot.forEach((doc) => {
      users.push(doc.data());
    });
    return users;
  } catch (error) {
    throw new error();
  }
};
const updateUserEsCoin = async (userId, esCoin, referenceNumber) => {
  try {
    const userCollection = collection(db, "Users");
    const userDoc = doc(userCollection, userId);
    await updateDoc(userDoc, {
      referenceTo: arrayUnion(referenceNumber),
      esCoin,
    });
  } catch (error) {
    throw error;
  }
};

export {
  createUser,
  getUser,
  updateUser,
  getAllUsers,
  deleteUser,
  login,
  resetPassword,
  updatePassword,
  uploadProfilePicture,
  updateLessonDone,
  addImageAndGetUrl,
  addNoteToUser,
  addNextLessonToUser,
  addHomeworkToUser,
};
