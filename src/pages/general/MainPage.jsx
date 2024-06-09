import Info from "../../components/general/MainPage/Info.jsx";
import Slider from "../../components/general/MainPage/Slider.jsx";
import NewsLetter from "../../components/general/MainPage/NewsLetter.jsx";
import TeacherDashboard from "../teacher/TeacherDashboard.jsx";
import StudentDashboard from "../student/StudentDashboard.jsx";
import { useUser } from "../../context/userContext.jsx";
import Faqs from "../../components/general/MainPage/Faqs.jsx";
import WhatsAppButton from "../../components/general/MainPage/WhatsAppButton.jsx";

const MainPage = () => {
  const { user } = useUser();

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

  if (user) {
    if (user?.isTeacher || user?.isAdmin) {
      return <TeacherDashboard user={user} />;
    } else {
      return <StudentDashboard />;
    }
  } else {
    return (
      <>
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
