import React from "react";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/general/SignUp.jsx";
import SignIn from "./pages/general/SignIn.jsx";
import { createRoot } from "react-dom/client";
import About from "./pages/general/About.jsx";
import Contact from "./pages/general/Contact.jsx";
import Pricing from "./pages/general/Pricing.jsx";
import Services from "./pages/general/Services.jsx";
import Profile from "./pages/student/Profile.jsx";
import Settings from "./pages/student/Settings.jsx";
import UserProvider from "./context/userContext.jsx";
import ApplyLesson from "./pages/general/ApplyLesson.jsx";
import Draw from "./pages/teacher/Draw.jsx";
import { ThemeProvider } from "@material-tailwind/react";

createRoot(document.getElementById("root")).render(
  <UserProvider>
    <ThemeProvider>
      <Router>
        <Routes>
          <Route element={<App />} path="/" />
          <Route element={<SignUp />} path="/kayit" />
          <Route element={<SignIn />} path="/giris" />
          <Route element={<About />} path="/about" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Pricing />} path="/pricing" />
          <Route element={<Services />} path="/services" />
          <Route element={<Profile />} path="/profile" />
          <Route element={<Settings />} path="/settings" />
          <Route element={<App />} path="/homepage" />
          <Route element={<App />} path=":id" />
          <Route element={<ApplyLesson />} path="/basvur/:plan" />
          <Route element={<Draw />} path="/draw/:id" />
          
        </Routes>
      </Router>
    </ThemeProvider>
  </UserProvider>
);
