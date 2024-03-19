import React from 'react';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './pages/general/SignUp.jsx';
import SignIn from './pages/general/SignIn.jsx';
import { createRoot } from 'react-dom/client';


createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route element={<App />} path="/" />
      <Route element={<SignUp />} path="/sign-up" />
      <Route element={<SignIn />} path="/sign-in" />
    </Routes>
  </Router>
);
