import { useEffect, useState } from "react";
import auth from "../../../utils/config/firebaseConfig";
import getUserInfo from "../../../utils/database/GetData/GetUserInfo";
import StudentInfo from "./StudentInfo";
import GiveHomework from "./GiveHomework";
import SendNote from "./SendNote";

const MainComponent = ({ id, teacher }) => {
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
        <StudentInfo user={user} />
        <div className=" mt-2 md:grid md:grid-cols-2 md:gap-2 flex flex-col">
          <div>
            <div className="mb-4 bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl p-4">
              <h6 className="text-l font-semibold text-white  text-center">
                ÖDEV VER
              </h6>
            </div>
            <GiveHomework id={id} />
          </div>
          <div>
            <div className="mb-4 bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl p-4">
              <h6 className="text-l font-semibold text-white  text-center">
                NOT EKLE
              </h6>
            </div>
            <SendNote id={id} teacherName={teacher} />
          </div>









        </div>
      </div>
    </div>
  );
};

export default MainComponent;
