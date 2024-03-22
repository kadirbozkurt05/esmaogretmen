import AboutMe from "../../components/general/About/AboutMe";
import Experience from "../../components/general/About/Experience";
import LessonsProcess from "../../components/general/About/LessonsProcess";
import WhatToGain from "../../components/general/About/WhatToGain";
import WhyLesson from "../../components/general/About/WhyLesson";
import Nav from "../../components/general/Nav/Nav";
import Footer from "../../components/general/Footer/Footer"


const About = () => {
  return (
    <>
      <Nav />
      <div className="xl:px-32 p-6">
        <AboutMe />
        <div className=" border-b-2 border-black"></div>
        <WhyLesson />
        <div className=" border-b-2 border-black"></div>
        <Experience />
        <div className=" border-b-2 border-black"></div>
        <WhatToGain />
        <div className=" border-b-2 border-black"></div>
        <LessonsProcess />
      </div>
      <Footer />
    </>
  );
};

export default About;
