import StudentList from "./StudentList";
import TopProfile from "./TopProfile";
import { useEffect, useState } from "react";
import auth from "../../utils/config/firebaseConfig";
import getUserInfo from "../../utils/database/GetData/GetUserInfo";
import AddNews from "./AddNews";
import AddCompetition from "./AddCompetition";
const MainComponent = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const getUser = async () => {
      try {
        const userFromDb = await getUserInfo(auth?.currentUser?.uid);
        setUser(userFromDb);
      } catch (error) {
        console.log("ERRORORORORORRO", error);
      }
    };
    getUser();
  }, [auth.currentUser]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 px-6">
      <div className="container  m-4">
        <div className="max-w-3xl w-full mx-auto grid gap-4 grid-cols-1">
          <div className="flex flex-col sticky top-0 z-10">
            <TopProfile />
          </div>
          <hr />
          <div className=" bg-gray-800 border border-gray-800 shadow-lg rounded-2xl text-gray-100 font-medium p-4 justify-center flex">
           <h6 className="text-xl font-semibold text-white">ÖĞRENCİLER</h6> 
            </div>
          {user && <StudentList students={user?.students} />}
          <hr />
          <div className="flex flex-col">

            <AddNews />
            <hr className="my-6" />
            <AddCompetition />



          </div>

        </div>
      </div>
    </div>
  );
};

export default MainComponent;
