import StudentList from "./StudentList";
import TopProfile from "./TopProfile";
import { useEffect, useState } from "react";
import AddNews from "./AddNews";
import AddCompetition from "./AddCompetition";
import Competitions from "./Competitions";
import News from "./News";
import { useUser } from "../../context/userContext";
import useFetch from "../../hooks/useFetch";
const MainComponent = () => {
  const {user} = useUser();
  const [userInfo, setUserInfo] = useState(null);
  const [addNews, setAddNews] = useState(false);
  const [showNews, setShowNews] = useState(false);





  useEffect(()=>{
    performFetch();
  },[])



  const onSuccess = (data) => {
    setUserInfo(data);
  }



  const {error, isLoading, performFetch, cancelFetch} = useFetch(`/user/${user?.uid}`,onSuccess);

  if(error ) {
    console.log("Error : ", error );
  }


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 px-6">
      <div className="container  m-4">
        <div className=" max-w-5xl w-full mx-auto grid gap-4 grid-cols-1">
          <div className="flex flex-col sticky top-0 z-10">
            <TopProfile />
          </div>
          
          
          {userInfo?.isTeacher && userInfo?.students.length > 0 &&  
          <>
          <hr />
          <div className=" bg-gray-800 border border-gray-800 shadow-lg rounded-2xl text-gray-100 font-medium p-4 justify-center flex">
            <h6 className="text-xl font-semibold text-white">ÖĞRENCİLER</h6>
          </div>
          <StudentList students={userInfo?.students} />
          </>
          }
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
