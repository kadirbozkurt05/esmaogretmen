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
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };
  

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
    <div className="flex flex-col min-h-screen">
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
<div className="w-full  mx-auto my-6 px-4 md:px-0">
  <div className="grid gap-6 grid-cols-1">
    <div className="flex flex-col bg-white rounded-lg shadow-md">
      {isLoaded && <StudentInfo user={student} />}
    </div>

    <hr className="border-gray-300" />

    <div className="grid grid-cols-1 gap-6">
      {/* Upcoming Classes */}
      <div className="group">
        <div
          className="flex justify-between items-center bg-blue-100 hover:bg-blue-200 transition-all border border-blue-300 shadow-md rounded-lg p-4 cursor-pointer"
          onClick={() => toggleSection("upcoming")}
        >
          <h6 className="text-lg font-semibold text-blue-900">SIRADAKİ DERSLER</h6>
          <span className="text-blue-900 transition-transform duration-300 group-hover:rotate-90">
            {openSection === "upcoming" ? "▲" : "▼"}
          </span>
        </div>
        {openSection === "upcoming" && (
          <div className="mt-4 bg-white rounded-lg shadow-inner">
            {isLoaded ? <ScheduledClasses student={student} />: (
              <div className="text-center text-blue-500 italic">Loading...</div>
            )}
          </div>
        )}
      </div>

      {/* Previous Classes */}
      <div className="group">
        <div
          className="flex justify-between items-center bg-green-100 hover:bg-green-200 transition-all border border-green-300 shadow-md rounded-lg p-4 cursor-pointer"
          onClick={() => toggleSection("previous")}
        >
          <h6 className="text-lg font-semibold text-green-900">GEÇMİŞ DERSLER</h6>
          <span className="text-green-900 transition-transform duration-300 group-hover:rotate-90">
            {openSection === "previous" ? "▲" : "▼"}
          </span>
        </div>
        {openSection === "previous" && (
          <div className="mt-4 bg-white rounded-lg shadow-inner">
            {isLoaded ? <PreviousClasses student={student} /> : (
              <div className="text-center text-green-500 italic">Loading...</div>
            )}
          </div>
        )}
      </div>

      {/* Give Homework */}
      <div className="group">
        <div
          className="flex justify-between items-center bg-orange-100 hover:bg-orange-200 transition-all border border-orange-300 shadow-md rounded-lg p-4 cursor-pointer"
          onClick={() => toggleSection("homework")}
        >
          <h6 className="text-lg font-semibold text-orange-900">ÖDEV VER</h6>
          <span className="text-orange-900 transition-transform duration-300 group-hover:rotate-90">
            {openSection === "homework" ? "▲" : "▼"}
          </span>
        </div>
        {openSection === "homework" && (
          <div className="mt-4 bg-white rounded-lg shadow-inner">
            {isLoaded ? <GiveHomework student={student} /> : (
              <div className="text-center text-orange-500 italic">Loading...</div>
            )}
          </div>
        )}
      </div>

      {/* Send Note */}
      <div className="group">
        <div
          className="flex justify-between items-center bg-purple-100 hover:bg-purple-200 transition-all border border-purple-300 shadow-md rounded-lg p-4 cursor-pointer"
          onClick={() => toggleSection("note")}
        >
          <h6 className="text-lg font-semibold text-purple-900">NOT EKLE</h6>
          <span className="text-purple-900 transition-transform duration-300 group-hover:rotate-90">
            {openSection === "note" ? "▲" : "▼"}
          </span>
        </div>
        {openSection === "note" && (
          <div className="mt-4 bg-white rounded-lg shadow-inner">
            {isLoaded ? <SendNote student={student} /> : (
              <div className="text-center text-purple-500 italic">Loading...</div>
            )}
          </div>
        )}
      </div>

      {/* Add Next Lesson */}
      <div className="group">
        <div
          className="flex justify-between items-center bg-pink-100 hover:bg-pink-200 transition-all border border-pink-300 shadow-md rounded-lg p-4 cursor-pointer"
          onClick={() => toggleSection("nextLesson")}
        >
          <h6 className="text-lg font-semibold text-pink-900">SIRADAKİ DERS EKLE</h6>
          <span className="text-pink-900 transition-transform duration-300 group-hover:rotate-90">
            {openSection === "nextLesson" ? "▲" : "▼"}
          </span>
        </div>
        {openSection === "nextLesson" && 
            isLoaded && (
              <div>
                <AddNextLesson student={student} teacherName={teacher} />
              </div>
            )
          
        }
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
