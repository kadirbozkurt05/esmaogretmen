import { updateDoc, doc } from 'firebase/firestore';
import { db } from "../../config/firebaseConfig";


const updateCompetitionStatus = async (competition) => {
  const currentDate = new Date();
  const dueDate = competition.due_date.toDate(); 

  if (currentDate > dueDate) {
    try {
      await updateDoc(doc(db, 'Competitions', competition.id), {
        isActive: false
      });
      console.log('Competition status updated successfully.');
    } catch (error) {
      console.error('Error updating competition status:', error);
    }
  } else {
    console.log('Due date has not passed yet. No action required.');
  }
};

export default updateCompetitionStatus;
