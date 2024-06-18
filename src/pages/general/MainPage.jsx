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
import { Spinner } from "@material-tailwind/react";


const MainPage = () => {
  const { user, setUser } = useUser();
  const [isTeacher, setIsTeacher] = useState(null);
  const [currentComponent, setCurrentComponent] = useState(<div className="h-screen w-screen flex justify-center items-center"><Spinner/></div>);


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

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(JSON.parse(localStorage.getItem("user")));
      }else{
        setCurrentComponent(
          <>
            <Slider slides={slides} title={"YARIŞMALAR"} />
            <Info />
            <Faqs />
            <NewsLetter />
            <WhatsAppButton />
          </>
        );
      }
    });
  }, []);



  useEffect(() => {
    const checkRole = async () => {
      try {
        if (auth?.currentUser) {
          const idTokenResult = await auth?.currentUser?.getIdTokenResult();
          if (idTokenResult?.claims?.role === "teacher") {
            setIsTeacher(true);
          }else{
            setIsTeacher(false);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    checkRole();
  }, [auth.currentUser]);

  useEffect(() => {
    console.log(user);
    console.log(isTeacher);
    if (user && isTeacher !== null) {

      if (isTeacher) {
        setCurrentComponent(<TeacherDashboard user={user} />);
      } else {
        setCurrentComponent(<StudentDashboard user={user} />);
      }
    } else {
      
    }
  }, [isTeacher]);
  return <>{currentComponent}</>;
};

export default MainPage;
