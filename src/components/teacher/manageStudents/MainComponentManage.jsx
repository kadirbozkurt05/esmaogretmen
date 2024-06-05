import { useEffect, useState } from "react";
import StudentInfo from "./StudentInfo";
import GiveHomework from "./GiveHomework";
import SendNote from "./SendNote";
import AddNextLesson from "./AddNextLesson";
import ScheduledClasses from "./ScheduledClasses";
import PreviousClasses from "./PreviousClasses";
import useFetch from "../../../hooks/useFetch";

const MainComponentManage = ({ id, teacher }) => {
  const [user, setUser] = useState();


  const onSuccess = (data) => {
    setUser(data);
  }

  const {error, performFetch} = useFetch(`/user/${id}`,onSuccess)

  
  useEffect(()=>{
    performFetch();
    },[])

  if(error){
    //MODAL
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  px-6">
      <div className="w-full  max-w-5xl m-4">
        <div className=" mx-auto grid gap-4 grid-cols-1">
          <div className="flex flex-col">
            <StudentInfo user={user} />
          </div>
          <hr />

          

          <div className=" md:grid md:grid-cols-2 md:gap-2 flex flex-col">

          <div>
              <div className="mb-4  border border-gray-800 shadow-lg  rounded-2xl p-4">
                <h6 className="text-l font-semibold   text-center">
                  SIRADAKİ DERSLER
                </h6>
              </div>
              <div className="mb-6 md:mb-0 h-96 overflow-y-auto no-scrollbar bg-gray-600 border border-gray-800 shadow-lg  rounded-2xl p-4">
                <ScheduledClasses id={id} />
              </div>
            </div>
            <div>
              <div className="mb-4  border border-gray-800 shadow-lg  rounded-2xl p-4">
                <h6 className="text-l font-semibold   text-center">
                  GEÇMİŞ DERSLER
                </h6>
              </div>
              <div className="mb-6 md:mb-0 h-96 overflow-y-auto no-scrollbar bg-gray-600 border border-gray-800 shadow-lg  rounded-2xl p-4">
                <PreviousClasses id={id} />
              </div>
            </div>






            <div>
              <div className="mb-4  border border-gray-800 shadow-lg  rounded-2xl p-4">
                <h6 className="text-l font-semibold   text-center">
                  ÖDEV VER
                </h6>
              </div>
              <div className="mb-6 md:mb-0 h-96 overflow-y-auto no-scrollbar bg-gray-600 border border-gray-800 shadow-lg  rounded-2xl p-4">
                <GiveHomework id={id} />
              </div>
            </div>



            <div>
              <div className="mb-4  border border-gray-800 shadow-lg  rounded-2xl p-4">
                <h6 className="text-l font-semibold   text-center">
                  NOT EKLE
                </h6>
              </div>
              <div className="mb-6 md:mb-0 h-96 overflow-y-auto no-scrollbar bg-gray-600 border border-gray-800 shadow-lg  rounded-2xl p-4">
                <SendNote id={id} teacherName={teacher}/>
              </div>
            </div>


            <div>
              <div className="mb-4  border border-gray-800 shadow-lg  rounded-2xl p-4">
                <h6 className="text-l font-semibold   text-center">
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

export default MainComponentManage;
