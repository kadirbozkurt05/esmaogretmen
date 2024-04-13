import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

const getNews = async () => {
  try {
    const newsRef = collection(db, "News");
    const querySnapshot = await getDocs(newsRef);
    const news = [];
    querySnapshot.forEach((doc) => {
      news.push({ id: doc.id, ...doc.data() });
    });

    // Sort news items by date in descending order
    news.sort((a, b) => new Date(b.date) - new Date(a.date));

    return news;
  } catch (error) {
    throw error;
  }
};

export default getNews;
