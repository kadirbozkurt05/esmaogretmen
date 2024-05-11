import StudentList from "./StudentList";
import TopProfile from "./TopProfile";
import { useEffect, useState } from "react";
import auth from "../../utils/config/firebaseConfig";
import getUserInfo from "../../utils/database/GetData/GetUserInfo";
import AddNews from "./AddNews";
import AddCompetition from "./AddCompetition";
import Competitions from "./Competitions";
import News from "./News";
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
  }, [auth.currentUser]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 px-6">
      <div className="container  m-4">
        <div className=" max-w-5xl w-full mx-auto grid gap-4 grid-cols-1">
          <div className="flex flex-col sticky top-0 z-10">
            <TopProfile />
          </div>
          <hr />
          <div className=" bg-gray-800 border border-gray-800 shadow-lg rounded-2xl text-gray-100 font-medium p-4 justify-center flex">
            <h6 className="text-xl font-semibold text-white">ÖĞRENCİLER</h6>
          </div>
          {user?.isTeacher && user?.students.length > 0 &&  <StudentList students={user?.students} />}
          <hr />
          <div className="flex flex-col ">
            <div className="  bg-gray-100 flex items-center justify-between cursor-pointer">
              <div className="flex-auto bg-gray-200">
                <div
                  onClick={() => setAddNews(true)}
                  className="flex items-center justify-center text-center mx-auto px-4 py-2  text-indigo-500"
                >
                  <span className=" px-1 py-1 group-hover:bg-indigo-100 rounded-full ">
                    <i className="far fa-cog text-2xl pt-1"></i>
                    <span className="  hover:text-lg  ml-3 align-bottom pb-1">
                      DUYURU EKLE
                    </span>
                  </span>
                </div>
              </div>
              <div className="flex-auto ">
                <div
                  onClick={() => setAddNews(false)}
                  className="flex items-center justify-center text-center mx-auto px-4 py-2  text-indigo-500"
                >
                  <span className=" px-1 py-1 group-hover:bg-indigo-100 rounded-full ">
                    <i className="far fa-cog text-2xl pt-1"></i>
                    <span className="  hover:text-lg  ml-3 align-bottom pb-1">
                      YARIŞMA EKLE
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {addNews ? <AddNews /> : <AddCompetition />}
            <hr className="my-6" />

            <div className="  bg-gray-100 flex items-center justify-between cursor-pointer">
              <div className="flex-auto  ">
                <div
                  onClick={() => setShowNews(false)}
                  className="flex items-center justify-center text-center mx-auto px-4 py-2  text-indigo-500"
                >
                  <span className=" px-1 py-1 group-hover:bg-indigo-100 rounded-full ">
                    <i className="far fa-cog text-2xl pt-1"></i>
                    <span className="  hover:text-lg ml-3 align-bottom pb-1">
                      Yarışmalar
                    </span>
                  </span>
                </div>
              </div>
              <div className="flex-auto  bg-gray-200">
                <a
                  onClick={() => setShowNews(true)}
                  className="flex items-center justify-center text-center mx-auto px-4 py-2  text-indigo-500"
                >
                  <span className=" px-1 py-1 group-hover:bg-indigo-100 rounded-full ">
                    <i className="far fa-cog text-2xl pt-1"></i>
                    <span className="  hover:text-lg ml-3 align-bottom pb-1">
                      Duyurular
                    </span>
                  </span>
                </a>
              </div>
            </div>

            {showNews ? <News /> : <Competitions />}
            <hr className="my-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
