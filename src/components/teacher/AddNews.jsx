import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import addNews from "../../utils/database/AddData/AddNews";
import { Timestamp } from "firebase/firestore";
import addImageAndGetUrl from "../../utils/database/AddData/AddImageAndGetUrl";

const AddNews = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const imageUrl = await addImageAndGetUrl(image,'newsImages')
      setImageUrl(imageUrl);
      
    } catch (error) {

      console.log(error);
      
    }

    const newsData = {
      title,
      picture: imageUrl,
      date: Timestamp.fromDate(new Date()),
      body:text
    };
    try {
      await addNews(newsData);
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-8 bg-gray-800 rounded-md shadow-md form-container">
      <h2 className="text-2xl font-semibold text-white mb-6">Duyuru Ekle</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-300 text-sm font-bold mb-2">
            Başlık
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Başlık"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-300 text-sm font-bold mb-2">
            Görsel
          </label>
          <input
            type="file"
            id="image"
            placeholder="Dosya Seç"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="text" className="block text-gray-300 text-sm font-bold mb-2">
            Metin
          </label>
          <textarea
            id="text"
            name="text"
            rows="4"
            placeholder="Metin"
            value={text}
            onChange={(event) => setText(event.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Gönder
        </button>
      </form>
    </div>
  );
};

export default AddNews;
