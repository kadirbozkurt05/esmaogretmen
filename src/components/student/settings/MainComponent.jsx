import { useEffect, useState } from "react";
import auth from "../../../utils/config/firebaseConfig";
import getUserInfo from "../../../utils/database/GetData/GetUserInfo";
import ChangePassword from "./ChangePassword";



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

        <ChangePassword />

      </div>

    </div>
  );
};

export default MainComponent;
