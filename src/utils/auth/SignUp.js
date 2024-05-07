import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, setDoc, doc, Timestamp } from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { updateUserEsCoin } from "./../database/UpdateData/UpdateProfile";
export const serverStamp = firebase.firestore.Timestamp;
import auth, { db } from "./../config/firebaseConfig";
import getAllUsers from "./../database/GetData/GetAllUsers"

const signUp = async (email, password, firstName, lastName, reference, studentClass, school, phone) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    if (reference !== "") {
      const allUsers = await getAllUsers();
      const userWithReference = allUsers.find(
        (user) => user.data.referenceNumber === reference
      );
      if (userWithReference) {
        const updatedEsCoin = {
          total: userWithReference?.data?.esCoin?.total + 50,
          transactions: [
            ...userWithReference?.data?.esCoin?.transactions,
            { case: `reference to ${user?.uid}`, amount: 50 },
          ],
        };

        await updateUserEsCoin(
          userWithReference?.id,
          updatedEsCoin,
          user.uid.substring(0, 8)
        );
      }
    }

    await updateProfile(user, { displayName: `${firstName} ${lastName}` });

    const usersCollectionRef = collection(db, "Users");
    const userDocRef = doc(usersCollectionRef, user.uid);

    await setDoc(userDocRef, {
      email,
      firstName,
      lastName,
      picture: `https://ui-avatars.com/api/?name=${firstName} ${lastName}`,
      parent: {
        firstName: "",
        lastName: "",
        occupation: "",
        phone: "",
        gender: "Anne",
      },
      contact: {
        phone: phone,
        email,
        address: {
          province: "",
          district: "",
          zipCode: "",
          streetAddress: "",
        },
      },
      educationDetails: {
        schoolName: school,
        class: studentClass || 0,
        teacherName: "",
      },
      esCoin: {
        total: 50,
        transactions: [],
      },
      teacherNotes: [],
      referenceTo: [],
      referenceFrom: reference,
      registerDate: Timestamp.fromDate(new Date()),
      nextClasses: [],
      previousLessons: [],
      competitions: [],
      homeworks: [],
      isActive: true,
      isTeacher: false,
      isAdmin: false,
      referenceNumber: user.uid.substring(0, 8),
      teachers: ["6qR1HqZhoYMxttCDf816acvsuU03"],
    });
    return user;
  } catch (error) {
    console.log(error);
    if (error.message.includes("auth/email-already-in-use")) {
      throw new Error(
        "The email address is already in use by another account."
      );
    } else {
      throw error;
    }
  }
};

export default signUp;
