import firebase from "../Firebase.js";

import {
  getFirestore,
  collection,
  doc,
  getDocs,
  updateDoc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";

const db = getFirestore(firebase);

const createCompetition = async (req, res, next) => {
  try {
    const data = req.body;
    const competitionsCollection = collection(db, "Competitions");
    const docRef = doc(competitionsCollection);
    const id = docRef.id;
    await setDoc(docRef, { ...data, id });
    res.status(201).send(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getCompetitions = async (req, res, next) => {
  const today = new Date();
  try {
    const competitionsRef = collection(db, "Competitions");
    const querySnapshot = await getDocs(competitionsRef);

    querySnapshot.forEach(async (doc) => {
      const competitionData = doc.data();
      if (
        competitionData.due_date.toDate() < today &&
        competitionData.isActive
      ) {
        await updateDoc(doc.ref, { isActive: false });
      }
    });

    const competitions = [];
    querySnapshot.forEach((doc) => {
      competitions.push({ id: doc.id, ...doc.data() });
    });
    await Promise.all(competitions.map(updateCompetitionStatus));

    competitions.sort((a, b) => b.due_date - a.due_date);

    res.status(201).send(competitions);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateCompetition = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const docRef = doc(db, "Competitions", id);
    await updateDoc(docRef, data);
    res.status(203).send(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteCompetition = async (req, res, next) => {
  try {
    const id = req.params.id;
    const docRef = doc(db, "Competitions", id);
    await deleteDoc(docRef);
    res.status(207).send("Competition deleted succesfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//FUNCTIONS
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


export {
  createCompetition,
  getCompetitions,
  updateCompetition,
  deleteCompetition,
};
