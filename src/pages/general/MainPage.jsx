import { useEffect, useState } from "react";
import Info from "../../components/general/MainPage/Info.jsx";
import Slider from "../../components/general/MainPage/Slider.jsx";
import NewsLetter from "../../components/general/MainPage/NewsLetter.jsx";
import TeacherDashboard from "../teacher/TeacherDashboard.jsx";
import StudentDashboard from "../student/StudentDashboard.jsx";
import useFetch from "../../hooks/useFetch.js";
import { useUser } from "../../context/userContext.jsx";

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
      image: "https://i.ibb.co/NmyszPm/esma.png",
      title: "Başlık",
      body: "lorem kjasnd njkas knac nkjas jkasdjksajk a",
    },
    {
      image:
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      title: "Başlık",
      body: "aaaaaaa",
    },
    {
      image:
        "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg",
      title: "Başlık",
      body: "bbbbbbb",
    },
    {
      image:
        "https://img.freepik.com/free-photo/fresh-yellow-daisy-single-flower-close-up-beauty-generated-by-ai_188544-15543.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710720000&semt=ais",
      title: "Başlık",
      body: "ccccccc",
    },
    {
      image:
        "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
      title: "Başlık",
      body: "ddddddd",
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
      <div >
        <Info />
        <div >
          <Slider slides={slides} title={"YARIŞMALAR"} />
        </div>

        <NewsLetter />
      </div>
    );
  }
};

export default MainPage;
