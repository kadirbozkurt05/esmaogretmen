import { useEffect, useState } from "react";
import StudentInfo from "./StudentInfo";
import GiveHomework from "./GiveHomework";
import SendNote from "./SendNote";
import AddNextLesson from "./AddNextLesson";
import ScheduledClasses from "./ScheduledClasses";
import PreviousClasses from "./PreviousClasses";
import useFetch from "../../../hooks/useFetch";
import { Button } from "@material-tailwind/react";
import Modal from "../../general/Modal/Modal";
import { useUser } from "../../../context/userContext";

const MainComponentManage = ({ id, teacher }) => {
  const [student, setStudent] = useState();
  const { user, refreshUser } = useUser();
  const [showDisableModal, setShowDisableModal] = useState(false);  
  const [isLoaded, setIsLoaded] = useState(null);
  

  const onSuccess = (data) => {  
    setIsLoaded(true);
    setStudent(data);
  };

  

  

  const { performFetch, isLoading, error } = useFetch(`/user/${id}`, onSuccess);
  if(error){
    console.log(error);
    
  }
  if(isLoading){
    console.log(isLoading);
    
  }

  const { performFetch: performPutTeacher } = useFetch(
    `/user/${user._id}`,
    () => {
      refreshUser();
    }
  );

  useEffect(() => {
    if(id){
      performFetch();

    }
  }, []);

  const handleDisableStudent = () => {
    const studentList = user.students;
    const updatedList = studentList.filter((studentId) => studentId != id);

    performPutTeacher({
      method: "PUT",
      body: JSON.stringify({ ...user, students: updatedList }),
    });
  };

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen  px-6">
      {showDisableModal && (
        <Modal
          title={"Pasif Hale Getir"}
          text={"Bu öğrenciyi pasif hale getirmek istiyor musunuz?"}
          positiveButton={"EVET"}
          positiveFunction={handleDisableStudent}
          negativeButton={"HAYIR"}
          negativeFunction={() => setShowDisableModal(false)}
        />
      )}
      <div className="w-full  max-w-5xl m-4">
        <div className=" mx-auto grid gap-4 grid-cols-1">
          <div className="flex flex-col">
            {isLoaded && <StudentInfo user={student} />}
          </div>
          <hr />

          <div className=" md:grid md:grid-cols-2 md:gap-2 flex flex-col">
            <div>
              <div className="mb-4  border border-gray-800 shadow-lg  rounded-2xl p-4">
                <h6 className="text-l font-semibold   text-center">
                  SIRADAKİ DERSLER
                </h6>
              </div>
              {isLoaded && <ScheduledClasses student={student} />}
            </div>
            <div>
              <div className="mb-4  border border-gray-800 shadow-lg  rounded-2xl p-4">
                <h6 className="text-l font-semibold   text-center">
                  GEÇMİŞ DERSLER
                </h6>
              </div>
              <div>
                {isLoaded && <PreviousClasses student={student} />}
              </div>
            </div>

            <div>
              <div className="mb-4  border border-gray-800 shadow-lg  rounded-2xl p-4">
                <h6 className="text-l font-semibold   text-center">ÖDEV VER</h6>
              </div>
              <div>
                {isLoaded &&<GiveHomework student={student} />}
              </div>
            </div>

            <div>
              <div className="mb-4  border border-gray-800 shadow-lg  rounded-2xl p-4">
                <h6 className="text-l font-semibold   text-center">NOT EKLE</h6>
              </div>
              <div>
                {isLoaded && <SendNote student={student} teacherName={teacher} />}
              </div>
            </div>

            <div>
              <div className="mb-4  border border-gray-800 shadow-lg  rounded-2xl p-4">
                <h6 className="text-l font-semibold   text-center">
                  SIRADAKİ DERS EKLE
                </h6>
              </div>
              <div>
                {isLoaded && <AddNextLesson student={student} teacherName={teacher} />}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => setShowDisableModal(true)}
        className=" w-full text-center"
      >
        <Button className="w-full" color="red">
          ÖĞRENCİYİ PASİF HALE GETİR
        </Button>
      </div>
    </div>
    </>
  );
};

export default MainComponentManage;
