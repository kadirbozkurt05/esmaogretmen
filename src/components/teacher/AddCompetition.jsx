import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddCompetition = () => {
  const [title, setTitle] = useState("");
  const [award, setAward] = useState("");
  const [number, setNumber] = useState(1);
  const [awardImage, setAwardImage] = useState(null);


  const [image, setImage] = useState(null);
  const [date, setDate] = useState(new Date());
  const [text, setText] = useState("");
  const [awardText, setAwardText] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };
  const handleAwardImageChange = (event) => {
    const file = event.target.files[0];
    setAwardImage(file);
  };

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission with title, image, date, and text
    console.log("Title:", title);
    console.log("Image:", image);
    console.log("Date:", date);
    console.log("Text:", text);
    console.log("AwardText:", awardText);
    console.log("Number:",number);
    console.log("AwardImage:",awardImage);
  };

  return (
    <div className="p-8 bg-gray-800 rounded-md shadow-md form-container">
      <h2 className="text-2xl font-semibold text-white mb-6">Yarışma Ekle</h2>
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
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-300 text-sm font-bold mb-2">
            Bitiş Tarihi
          </label>
          <DatePicker
            selected={date}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
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
        <hr className="my-6"/>
        <div><h2 className="block text-gray-300 text-lg font-bold mb-2">ÖDÜL</h2></div>
        <div className="mb-4">
          <label htmlFor="award" className="block text-gray-300 text-sm font-bold mb-2">
            Başlık
          </label>
          <input
            type="text"
            id="award"
            name="award"
            placeholder="Ödül"
            value={award}
            onChange={(event) => setAward(event.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="number" className="block text-gray-300 text-sm font-bold mb-2">
            Adet
          </label>
          <input
            type="number"
            id="number"
            name="number"
            placeholder="Adet"
            value={number}
            onChange={(event) => setNumber(event.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="awardImage" className="block text-gray-300 text-sm font-bold mb-2">
            Görsel
          </label>
          <input
            type="file"
            id="awardImage"
            name="awardImage"
            accept="image/*"
            onChange={handleAwardImageChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="awardText" className="block text-gray-300 text-sm font-bold mb-2">
            Özellikler
          </label>
          <textarea
            id="awardText"
            name="awardText"
            rows="4"
            placeholder="Özellikler"
            value={awardText}
            onChange={(event) => setAwardText(event.target.value)}
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

export default AddCompetition;
