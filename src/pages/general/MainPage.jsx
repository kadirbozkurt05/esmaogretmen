import Info from "../../components/general/MainPage/Info.jsx";
import Slider from "../../components/general/MainPage/Slider.jsx";
import NewsLetter from "../../components/general/MainPage/NewsLetter.jsx";
import TeacherDashboard from "../teacher/TeacherDashboard.jsx";
import StudentDashboard from "../student/StudentDashboard.jsx";
import { useUser } from "../../context/userContext.jsx";
import Faqs from "../../components/general/MainPage/Faqs.jsx";
import WhatsAppButton from "../../components/general/MainPage/WhatsAppButton.jsx";
import { useEffect, useState } from "react";
import { Spinner } from "@material-tailwind/react";
import useFetch from "../../hooks/useFetch.js";

const MainPage = () => {
  
  const { user } = useUser();
  const [sliderComponent, setSliderComponent] = useState(null);

  const onSuccess = (data) => {
     setSliderComponent(<Slider slides={data.filter(cp=>cp.isActive)} title={"YARIŞMALAR"} />);
  };

  const { performFetch, isLoading } = useFetch("/competition/all", onSuccess);

  useEffect(() => {
    performFetch();
  }, []);

  const [currentComponent, setCurrentComponent] = useState(
    <div className="h-screen w-screen flex justify-center items-center">
      <Spinner />
    </div>
  );

  useEffect(() => {
    
      if (user) {
        if(user.role==="teacher"){
          setCurrentComponent(<TeacherDashboard user={user} />);
        }else{
          setCurrentComponent(<StudentDashboard user={user} />);

        }
      } else {
        if (!isLoading) { 
          setCurrentComponent(
            <div className="flex flex-col" >
              <Info />
              {sliderComponent}              
              <Faqs />
              <NewsLetter />
              <WhatsAppButton />
            </div>
          );
        }
      }
    
  }, [isLoading, sliderComponent]);

  return <>{currentComponent}</>;
};

export default MainPage;
