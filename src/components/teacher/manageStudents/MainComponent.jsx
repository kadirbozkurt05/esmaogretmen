import { useEffect, useState } from "react";
import auth from "../../../utils/config/firebaseConfig";
import getUserInfo from "../../../utils/database/GetData/GetUserInfo";
import StudentInfo from "./StudentInfo";

const MainComponent = ({id}) => {
  const [user, setUser] = useState();


  useEffect(() => {
    const getUser = async () => {
      try {
        const userFromDb = await getUserInfo(id);
        console.log(userFromDb);
        setUser(userFromDb);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [auth.currentUser]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 px-6">
      <div className="container  m-4">
      <StudentInfo user={user}/>

        

      </div>
    </div>
  );
};

export default MainComponent;
