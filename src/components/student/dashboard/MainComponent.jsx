import TopProfile from "../TopProfile";
import { useEffect, useState } from "react";
import auth from "../../../utils/config/firebaseConfig";
import getUserInfo from "../../../utils/database/GetData/GetUserInfo";
import Homework from "./Homework";
import NextClasses from "./NextClasses";
import PreviousClasses from "./PreviousLessons";
import TeacherNotes from "./TeacherNotes";
import updateClassesAndLessons from "../../../utils/database/UpdateData/UpdateNextAndPreviousLessons";

const MainComponent = () => {
  const [user, setUser] = useState();
  const [homeworkList, setHomeworkList] = useState([]);
  const [nextClasses, setNextClasses] = useState([]);
  const [previousClasses, setPreviousClasses] = useState([]);
  const [teacherNotes, setTeacherNotes] = useState([]);
  const [isUpdateDone, setIsUpdateDone] = useState(false);
  useEffect(() => {
    const update = async () => {
      try {
        await updateClassesAndLessons(auth?.currentUser?.uid);
        setIsUpdateDone(true)

      } catch (error) {
        console.log(error);
      }
    };
    update();
  }, []);

  useEffect(()=>{
    if(isUpdateDone){

      const getUser = async () => {
        try {
          const userFromDb = await getUserInfo(auth?.currentUser?.uid);
          const homeworks = userFromDb?.homework.filter(
            (homework) => homework.date?.toDate() > new Date()
          );
          setNextClasses(userFromDb?.nextClasses);
          setPreviousClasses(userFromDb?.previousLessons);
          setTeacherNotes(userFromDb?.teacherNotes);
          setHomeworkList(homeworks);
          setUser(userFromDb);
        } catch (error) {
          console.log(error);
        }
      };
      getUser();

    }
  },[isUpdateDone])

  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 px-6">
      <div className=" w-full  max-w-5xl m-4">
        <div className=" mx-auto grid gap-4 grid-cols-1">
          <div className="flex flex-col sticky top-0 z-10">
            <TopProfile />
          </div>

          <div className=" md:grid md:grid-cols-2 md:gap-2 flex flex-col">
            <div>
              <div className="mb-4 bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl p-4">
                <h6 className="text-l font-semibold text-white  text-center">
                  ÖDEVLER
                </h6>
              </div>

              {homeworkList.length === 0 ? (
                <div className="mb-6 md:mb-0 max-h-96 overflow-y-auto no-scrollbar bg-gray-600 border border-gray-800 shadow-lg  rounded-2xl p-4">
                  {" "}
                  Şu anda ödeviniz yoktur
                </div>
              ) : (
                <div className=" mb-6 md:mb-0 h-96 overflow-y-auto no-scrollbar bg-gray-600 border border-gray-800 shadow-lg  rounded-2xl p-4">
                  {homeworkList.map((homework) => {
                    return (
                      <>
                        <Homework
                          title={homework?.title}
                          message={homework.message}
                          date={homework.date}
                        />
                      </>
                    );
                  })}
                </div>
              )}
            </div>
            <div>
              <div className="mb-4 bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl p-4">
                <h6 className="text-l font-semibold text-white  text-center">
                  SIRADAKİ DERSLER
                </h6>
              </div>
              {nextClasses.length === 0 ? (
                <div className="mb-6 md:mb-0 max-h-96 overflow-y-auto no-scrollbar bg-gray-600 border border-gray-800 shadow-lg  rounded-2xl p-4">
                  {" "}
                  Planlanmış Dersiniz Bulunmamaktadır.
                </div>
              ) : (
                <div className=" mb-6 md:mb-0 h-96 overflow-y-auto no-scrollbar bg-gray-600 border border-gray-800 shadow-lg  rounded-2xl p-4">
                  {nextClasses.map((nextClass) => {
                    return (
                      <>
                        <NextClasses
                          name={nextClass?.title}
                          teacher={nextClass?.teacher}
                          date={nextClass?.date}
                        />
                      </>
                    );
                  })}
                </div>
              )}
            </div>
            <div>
              <div className="mb-4 bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl p-4">
                <h6 className="text-l font-semibold text-white  text-center">
                  GEÇMİŞ DERSLER
                </h6>
              </div>

              {previousClasses.length === 0 ? (
                <div className="mb-6 md:mb-0 max-h-96 overflow-y-auto no-scrollbar bg-gray-600 border border-gray-800 shadow-lg  rounded-2xl p-4">
                  {" "}
                  Geçmiş Dersiniz Bulunmamaktadır.
                </div>
              ) : (
                <div className=" mb-6 md:mb-0 h-96 overflow-y-auto no-scrollbar bg-gray-600 border border-gray-800 shadow-lg  rounded-2xl p-4">
                  {previousClasses.map((previousClass) => {
                    return (
                      <>
                        <PreviousClasses
                          name={previousClass?.title}
                          teacher={previousClass?.teacher}
                          date={previousClass?.date}
                        />
                      </>
                    );
                  })}
                </div>
              )}
            </div>
            <div>
              <div className="mb-4 bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl p-4">
                <h6 className="text-l font-semibold text-white  text-center">
                  ÖĞRETMEN NOTLARI
                </h6>
              </div>

              {teacherNotes.length === 0 ? (
                <div className="mb-6 md:mb-0 max-h-96 overflow-y-auto no-scrollbar bg-gray-600 border border-gray-800 shadow-lg  rounded-2xl p-4">
                  {" "}
                  Henüz öğretmeniniz sizin için bir not yazmamış.
                </div>
              ) : (
                <div className=" mb-6 md:mb-0 h-96 overflow-y-auto no-scrollbar bg-gray-600 border border-gray-800 shadow-lg  rounded-2xl p-4">
                  {teacherNotes.map((note) => {
                    return (
                      <>
                        <TeacherNotes
                          title={note?.title}
                          message={note?.message}
                          date={note?.date}
                          teacher={note?.teacher}
                        />
                      </>
                    );
                  })}
                </div>
              )}
            </div>
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
