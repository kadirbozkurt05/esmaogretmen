import React from 'react';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './pages/general/SignUp.jsx';
import SignIn from './pages/general/SignIn.jsx';
import { createRoot } from 'react-dom/client';
import About from './pages/general/About.jsx';
import Contact from './pages/general/Contact.jsx';
import Pricing from './pages/general/Pricing.jsx';
import Services from './pages/general/Services.jsx';
import Profile from './pages/student/Profile.jsx';
import Settings from './pages/student/Settings.jsx';
import ManageStudent from './pages/teacher/ManageStudent.jsx';
import { UserProvider } from "./context/userContext.jsx";
import ComingSoon from './pages/comingSoon/ComingSoon.jsx';


createRoot(document.getElementById('root')).render(
  <UserProvider>
  <Router>
    <Routes>
      <Route element={<App />} path="/" />
      <Route element={<SignUp />} path="/sign-up" />
      <Route element={<SignIn />} path="/sign-in" />
      <Route element={<About />} path="/about" />
      <Route element={<Contact />} path="/contact" />
      <Route element={<Pricing />} path="/pricing" />
      <Route element={<Services />} path="/services" />
      <Route element={<Profile />} path="/profile" />
      <Route element={<Settings />} path="/settings" />
      <Route element={<App />} path="/homepage" />
      <Route  element={<ManageStudent />} path=":id" />
      


    </Routes>
  </Router>
  </UserProvider>
);
