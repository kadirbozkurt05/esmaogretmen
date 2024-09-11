import AboutMe from "../../components/general/About/AboutMe";
import Experience from "../../components/general/About/Experience";
import LessonsProcess from "../../components/general/About/LessonsProcess";
import WhatToGain from "../../components/general/About/WhatToGain";
import WhyLesson from "../../components/general/About/WhyLesson";
import Nav from "../../components/general/Nav/Nav";
import Footer from "../../components/general/Footer/Footer"
import { useUser } from "../../context/userContext";


const About = () => {
  const {user} = useUser();
  return (
    <>
      <Nav user={user}/>
      <div className="xl:px-32 p-6">
        <AboutMe />
        <div ></div>
        <WhyLesson />
        <div ></div>
        <Experience />
        <div ></div>
        <WhatToGain />
        <div ></div>
        <LessonsProcess />
      </div>
      <Footer />
    </>
  );
};

export default About;
