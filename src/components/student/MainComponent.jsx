import StudentList from "../teacher/StudentList";
import TopProfile from "./TopProfile";
import { useEffect, useState } from "react";
import auth from "../../utils/config/firebaseConfig";
import getUserInfo from "../../utils/database/GetData/GetUserInfo";
import AddNews from "../teacher/AddNews";
import AddCompetition from "../teacher/AddCompetition";
import Competitions from "../teacher/Competitions";
import News from "../teacher/News";
const MainComponent = () => {
  const [user, setUser] = useState();
  const [addNews, setAddNews] = useState(false);
  const [showNews, setShowNews] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      try {
        const userFromDb = await getUserInfo(auth?.currentUser?.uid);
        setUser(userFromDb);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 px-6">
      <div className="container  m-4">
        <div className=" max-w-5xl w-full mx-auto grid gap-4 grid-cols-1">
          <div className="flex flex-col sticky top-0 z-10">
            <TopProfile />
          </div>
          <div className="grid grid-cols-2">
            <div className="flex flex-col">
                <div className="bg-black"></div>
                <div className="bg-black"></div>

            </div>


          </div>



        </div>
      </div>
    </div>
  );
};

export default MainComponent;
