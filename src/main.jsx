import React from 'react';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './pages/general/SignUp.jsx';
import SignIn from './pages/general/SignIn.jsx';
import { createRoot } from 'react-dom/client';
import Dashboard from './pages/student/Dashboard/Dashboard.jsx';
import About from './pages/general/About.jsx';
import Contact from './pages/general/Contact.jsx';
import Pricing from './pages/general/Pricing.jsx';
import Services from './pages/general/Services.jsx';
import TeacherDashboard from './pages/teacher/TeacherDashboard.jsx';
import LeftMenu from './components/teacher/LeftMenu.jsx';


createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route element={<App />} path="/" />
      <Route element={<SignUp />} path="/sign-up" />
      <Route element={<SignIn />} path="/sign-in" />
      <Route element={<Dashboard />} path="/student-dashboard" />
      <Route element={<About />} path="/about" />
      <Route element={<Contact />} path="/contact" />
      <Route element={<Pricing />} path="/pricing" />
      <Route element={<Services />} path="/services" />
      <Route element={<TeacherDashboard />} path="/teacher-dashboard" />
      <Route element={<LeftMenu />} path="/deneme" />

    </Routes>
  </Router>
);
