import TopProfile from "../TopProfile";
import { useEffect, useState } from "react";
import auth from "../../../utils/config/firebaseConfig";
import getUserInfo from "../../../utils/database/GetData/GetUserInfo";
import AboutMe from "./AboutMe";


const MainComponent = () => {
  const [user, setUser] = useState();

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
    <div className="flex flex-col items-center justify-center bg-gray-900 px-2">
      <div className=" w-full  max-w-5xl m-4">
        <div className=" mx-auto grid gap-4 grid-cols-1">
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
        <AboutMe />
      </div>
    </div>
  );
};

export default MainComponent;
