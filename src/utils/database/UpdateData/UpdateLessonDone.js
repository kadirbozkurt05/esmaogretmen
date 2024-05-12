import { updateDoc, doc, getDoc } from 'firebase/firestore';
import { db } from "../../config/firebaseConfig";

async function updateLessonDone(userId, classId, isDone) {
  try {
    // Get the user document
    const userDocRef = doc(db, 'Users', userId);
    const userDocSnap = await getDoc(userDocRef);
    
    if (!userDocSnap.exists()) {
      console.log('User document not found');
      return;
    }

    // Get the current nextClasses array
    const userData = userDocSnap.data();
    const nextClasses = userData.nextClasses || [];

    // Find the index of the class with the given classId in the nextClasses array
    const classIndex = nextClasses.findIndex(obj => obj.id === classId);

    if (classIndex === -1) {
      console.log('Class with specified id not found in nextClasses array');
      return;
    }

    // Update the isDone property of the class object
    nextClasses[classIndex].isDone = isDone;

    // Update the user document with the modified nextClasses array
    await updateDoc(userDocRef, { nextClasses });

    console.log('Lesson status updated successfully.');
  } catch (error) {
    console.error('Error updating lesson status:', error);
  }
}

export default updateLessonDone;
