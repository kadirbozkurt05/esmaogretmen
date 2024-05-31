import { useEffect, useState } from "react";
import Info from "../../components/general/MainPage/Info.jsx";
import Slider from "../../components/general/MainPage/Slider.jsx";
import NewsLetter from "../../components/general/MainPage/NewsLetter.jsx";
import TeacherDashboard from "../teacher/TeacherDashboard.jsx";
import StudentDashboard from "../student/StudentDashboard.jsx";
import useFetch from "../../hooks/useFetch.js";
import { useUser } from "../../context/userContext.jsx";
import Faqs from "../../components/general/MainPage/Faqs.jsx";
import WhatsAppButton from "../../components/general/MainPage/WhatsAppButton.jsx";

const MainPage = () => {
  const [userInfo, setUserInfo] = useState(null);
  const {user} = useUser();

  const onSuccess = (data) => {
      setUserInfo(data);
    
  };

  const { error, isLoading, performFetch, cancelFetch } = useFetch(
    `/user/${user}`,
    onSuccess
  );

  useEffect(()=>{
    if(user){
      performFetch();
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
    if (userInfo?.isTeacher || userInfo?.isAdmin) {
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
