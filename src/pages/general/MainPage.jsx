import Info from "../../components/general/MainPage/Info.jsx";
import Slider from "../../components/general/MainPage/Slider.jsx";
import NewsLetter from "../../components/general/MainPage/NewsLetter.jsx";
import TeacherDashboard from "../teacher/TeacherDashboard.jsx";
import StudentDashboard from "../student/StudentDashboard.jsx";
import { useUser } from "../../context/userContext.jsx";
import Faqs from "../../components/general/MainPage/Faqs.jsx";
import WhatsAppButton from "../../components/general/MainPage/WhatsAppButton.jsx";
import { useEffect } from "react";

const MainPage = () => {
  const {user,setUser} = useUser();

  useEffect(()=>{
    if(!user){
      setUser(JSON.parse(sessionStorage.getItem("user")));
    }
  },[user])


  const slides = [
    {
      image: "https://i.ibb.co/qMHVhPY/holiday.png",
      title: "Holiday",
      body: "",
    },
    {
      image:
        "https://i.ibb.co/LrCkJZr/esma-ogretmen-here.png",
      title: "Welcome",
      body: "",
    },


  ];

  if (user) {
    if (user?.isTeacher || user?.isAdmin) {
      return <TeacherDashboard />;
    } else {
      return <StudentDashboard />;
    }
  } else {
    return (
      < >
        <Info />
        <Faqs />
        
          <Slider slides={slides} title={"YARIŞMALAR"} />

        <NewsLetter />
        <WhatsAppButton />
      </>
    );
  }
};

export default MainPage;
