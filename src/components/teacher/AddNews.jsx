import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import useFetch from "../../hooks/useFetch";
import { uploadPicture } from "../../utils/firebaseUtils";

const AddNews = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");

  const handleImageChange = (event) => {
    const image = event.target.files[0];
    setImage(image);
  };

  const onSuccess = (data) => {
    console.log(data);
  };

  const { error, isLoading, performFetch } = useFetch(
    "/news/create",
    onSuccess
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (image) {
      try {
        const imageUrl = await uploadPicture("competitionImages", image);
        const newsData = {
          title,
          picture: imageUrl,
          date: new Date(),
          body: text,
        };

        performFetch({
          method: "POST",
          body: JSON.stringify(newsData),
        });
      } catch (error) {}
    }
  };

  if (error) {
    //MODAL
  }

  return (
    <div className="p-8 rounded-md shadow-md form-container">
      <h2 className="text-2xl font-semibold  mb-6">Duyuru Ekle</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block  text-sm font-bold mb-2">
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
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 "
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block  text-sm font-bold mb-2">
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
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500  "
          />
        </div>

        <div className="mb-6">
          <label htmlFor="text" className="block  text-sm font-bold mb-2">
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
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500  px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Gönder
        </button>
      </form>
    </div>
  );
};

export default AddNews;
