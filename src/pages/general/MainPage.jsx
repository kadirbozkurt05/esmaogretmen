import Info from "../../components/general/MainPage/Info.jsx";
import Slider from "../../components/general/MainPage/Slider.jsx";
import NewsLetter from "../../components/general/MainPage/NewsLetter.jsx";
import TeacherDashboard from "../teacher/TeacherDashboard.jsx";
import StudentDashboard from "../student/StudentDashboard.jsx";
import { useUser } from "../../context/userContext.jsx";
import Faqs from "../../components/general/MainPage/Faqs.jsx";
import WhatsAppButton from "../../components/general/MainPage/WhatsAppButton.jsx";
import { auth } from "../../../firebase.js";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

const MainPage = () => {
  const { user } = useUser();
  const [isTeacher, setIsTeacher] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {});
  }, [auth.currentUser]);

  useEffect(() => {
    const checkRole = async () => {
      try {
        if (auth.currentUser) {
          const idTokenResult = await auth.currentUser.getIdTokenResult();
          if (idTokenResult.claims.role === "teacher") {
            setIsTeacher(true);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkRole();
  }, [auth.currentUser]);

  const slides = [
    {
      image: "https://i.ibb.co/qMHVhPY/holiday.png",
      title: "Holiday",
      body: "",
    },
    {
      image: "https://i.ibb.co/LrCkJZr/esma-ogretmen-here.png",
      title: "Welcome",
      body: "",
    },
  ];

  if (user && isTeacher !== null) {
    if (isTeacher) {
      return <TeacherDashboard user={user} />;
    } else {
      return <StudentDashboard />;
    }
  } else {
    return (
      <>
        <Slider slides={slides} title={"YARIŞMALAR"} />
        <Info />
        <Faqs />
        <NewsLetter />
        <WhatsAppButton />
      </>
    );
  }
};

export default MainPage;
