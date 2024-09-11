import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
const Student = ({ student, onClick}) => {
  const [studentInfo, setStudentInfo] = useState({});


  const onSuccess = (data) => {
    setStudentInfo(data);
  }

  const {error, loading, performFetch} = useFetch(`/user/${student}`, onSuccess);

  
  useEffect(()=>{
    performFetch();
    },[student])

  if(error){
    console.log("zaaa", error);
  }
  if(loading){
    
  }

  return (
    <div
    onClick={(e)=>onClick(e)}
      id={student}
      className="p-4 cursor-pointer flex flex-row justify-between items-center  shadow-lg rounded-2xl"
    >
      <div className="flex flex-col justify-center">
        <div className="  font-medium">
          {studentInfo?.firstName} {studentInfo?.lastName}
        </div>
        <div className="text-sm text-gray-500">
          {studentInfo?.educationDetails?.grade}. Sınıf
        </div>
      </div>
      <img className=" h-14 rounded-lg" src={studentInfo?.picture} />
    </div>
  );
};

export default Student;
