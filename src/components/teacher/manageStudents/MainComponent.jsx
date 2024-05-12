import { useEffect, useState } from "react";
import auth from "../../../utils/config/firebaseConfig";
import getUserInfo from "../../../utils/database/GetData/GetUserInfo";
import StudentInfo from "./StudentInfo";
import GiveHomework from "./GiveHomework";
import SendNote from "./SendNote";
import AddNextLesson from "./AddNextLesson";
import NextClasses from "./NextClasses";

const MainComponent = ({ id, teacher }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const getUser = async () => {
      try {
        const userFromDb = await getUserInfo(id);
        setUser(userFromDb);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [auth.currentUser]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 px-6">
      <div className="w-full  max-w-5xl m-4">
        <div className=" mx-auto grid gap-4 grid-cols-1">
          <div className="flex flex-col sticky top-0 z-10">
            <StudentInfo user={user} />
          </div>
          <hr />

          

          <div className=" md:grid md:grid-cols-2 md:gap-2 flex flex-col">

          <div>
              <div className="mb-4 bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl p-4">
                <h6 className="text-l font-semibold text-white  text-center">
                  SIRADAKİ DERSLER
                </h6>
              </div>
              <div className="mb-6 md:mb-0 h-96 overflow-y-auto no-scrollbar bg-gray-600 border border-gray-800 shadow-lg  rounded-2xl p-4">
                <NextClasses id={id} />
              </div>
            </div>






            <div>
              <div className="mb-4 bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl p-4">
                <h6 className="text-l font-semibold text-white  text-center">
                  ÖDEV VER
                </h6>
              </div>
              <div className="mb-6 md:mb-0 h-96 overflow-y-auto no-scrollbar bg-gray-600 border border-gray-800 shadow-lg  rounded-2xl p-4">
                <GiveHomework id={id} />
              </div>
            </div>



            <div>
              <div className="mb-4 bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl p-4">
                <h6 className="text-l font-semibold text-white  text-center">
                  NOT EKLE
                </h6>
              </div>
              <div className="mb-6 md:mb-0 h-96 overflow-y-auto no-scrollbar bg-gray-600 border border-gray-800 shadow-lg  rounded-2xl p-4">
                <SendNote id={id} teacherName={teacher}/>
              </div>
            </div>


            <div>
              <div className="mb-4 bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl p-4">
                <h6 className="text-l font-semibold text-white  text-center">
                  SIRADAKİ DERS EKLE
                </h6>
              </div>
              <div className="mb-6 md:mb-0 h-96 overflow-y-auto no-scrollbar bg-gray-600 border border-gray-800 shadow-lg  rounded-2xl p-4">
                <AddNextLesson id={id} teacherName={teacher}/>
              </div>
            </div>





          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
