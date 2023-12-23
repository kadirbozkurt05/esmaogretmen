import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import AboutMe from './components/about/AboutMe.jsx'
import Services from './components/services/Services.jsx'
import Contact from './components/contact/Contact.jsx'
import TrialLesson from "./components/triallesson/TrialLesson.jsx"


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path="/about" element={<AboutMe />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/trial" element={<TrialLesson />} />
    </Routes>
  </Router>,
)
