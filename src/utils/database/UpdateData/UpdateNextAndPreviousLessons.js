import { db } from "../../config/firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const updateClassesAndLessons = async (userId) => {
  try {
    const userDocRef = doc(db, "Users", userId);
    const userDoc = await getDoc(userDocRef);

    if (!userDoc.exists) {
      throw new Error("User document not found");
    }

    const userData = userDoc.data();

    const currentDate = new Date();

    const filteredNextClasses = userData.nextClasses.filter((nextClass) => {
      const classDate = nextClass.date.toDate();
      return classDate >= currentDate;
    });

    const passedClasses = userData.nextClasses.filter((nextClass) => {
      const classDate = nextClass.date.toDate();
      return classDate < currentDate;
    });

    const updatedPreviousLessons = [
      ...userData.previousLessons,
      ...passedClasses,
    ];

    await updateDoc(userDocRef, {
      nextClasses: filteredNextClasses,
      previousLessons: updatedPreviousLessons,
    });

    return { updatedPreviousLessons, filteredNextClasses };
  } catch (error) {
    throw error;
  }
};

export default updateClassesAndLessons;
