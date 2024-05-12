import { updateDoc, doc, getDoc } from 'firebase/firestore';
import { db } from "../../config/firebaseConfig";

async function updateLessonDone(userId, classId, isDone) {
  try {
    const userDocRef = doc(db, 'Users', userId);
    const userDocSnap = await getDoc(userDocRef);
    
    if (!userDocSnap.exists()) {
      console.log('User document not found');
      return;
    }

    const userData = userDocSnap.data();
    const previousLessons = userData.previousLessons || [];

    const classIndex = previousLessons.findIndex(obj => obj.id === classId);

    if (classIndex === -1) {
      console.log('Class with specified id not found in nextClasses array');
      return;
    }

    previousLessons[classIndex].isDone = isDone;

    await updateDoc(userDocRef, { previousLessons });

    console.log('Lesson status updated successfully.');
  } catch (error) {
    console.error('Error updating lesson status:', error);
  }
}

export default updateLessonDone;
