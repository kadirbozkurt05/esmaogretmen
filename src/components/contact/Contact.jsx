import { useState } from "react";
import Footer from "../generic/Footer";
import Navbar from "../generic/Navbar";
import "./contact.css"
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

import firebaseConfig from "../../../firebaseConfig.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, tel, message } = formData;

    try {
      const docRef = await addDoc(collection(db, "messages"), {
        name: name,
        email: email,
        tel: tel,
        message: message,
      });
      alert("Mesajınız gönderilmiştir.")
      setFormData({ name: "", email: "",tel:"", message: "" });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="contact-container">
        <div className="contact-form">
          <h2>Buradan İletişime Geçin</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Adınız:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-posta Adresiniz:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="tel">Telefon Numaranız:</label>
              <input
                type="tel"
                id="tel"
                name="tel"
                value={formData.tel}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mesajınız:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit">Gönder</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
