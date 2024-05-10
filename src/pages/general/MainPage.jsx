import { useState } from "react";
import Info from "../../components/general/MainPage/Info.jsx";
import Slider from "../../components/general/MainPage/Slider.jsx";
import NewsLetter from "../../components/general/MainPage/NewsLetter.jsx";
import auth from "../../utils/config/firebaseConfig.js";
import getUserInfo from "../../utils/database/GetData/GetUserInfo.js";
import TeacherDashboard from "../teacher/TeacherDashboard.jsx";
import StudentDashboard from "../student/StudentDashboard.jsx";
import { onAuthStateChanged } from "firebase/auth";

const MainPage = () => {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const getUser = async () => {
        try {
          const userInfo = await getUserInfo(auth.currentUser.uid);
          setUser(userInfo);
        } catch (error) {}
      };
      getUser();
    } else {
      // User is signed out

    }
  });


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

  if(!auth.currentUser){
    return (
      <div className="xl:px-32">
        <Info />
        <div className="bg-orange-200">
          <Slider slides={slides} title={"YARIŞMALAR"} />
        </div>
        <div className=" bg-red-300">
          <Slider slides={slides} title={"DUYURULAR"} />
        </div>
        <NewsLetter />
      </div>
    );
    

  }
  
if(auth?.currentUser){

  if (user?.isTeacher || user?.isAdmin) {
    return( <TeacherDashboard />);
  }else

  if (!user?.isTeacher && !user?.isAdmin) {
    return( <StudentDashboard />);
  }

}else{
return (
    <div className="xl:px-32">
      <Info />
      <div className="bg-orange-200">
        <Slider slides={slides} title={"YARIŞMALAR"} />
      </div>
      <div className=" bg-red-300">
        <Slider slides={slides} title={"DUYURULAR"} />
      </div>
      <NewsLetter />
    </div>
  );
}
};

export default MainPage;
