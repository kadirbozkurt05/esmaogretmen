import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
const Student = ({ student }) => {
  const [studentInfo, setStudentInfo] = useState();


  const onSuccess = (data) => {
    setStudentInfo(data);
  }

  const {error, loading, performFetch} = useFetch(`/user/${student}`, onSuccess);

  
  useEffect(()=>{
    performFetch();
    },[])

  if(error){
    //MODAL
  }

  return (
    <Link
      to={`/${student}`}
      className="p-4 flex flex-row justify-between items-center  bg-gray-800 border border-gray-800 shadow-lg rounded-2xl"
    >
      <div className="flex flex-col justify-center">
        <div className=" text-gray-100 font-medium">
          {studentInfo?.firstName} {studentInfo?.lastName}
        </div>
        <div className="text-sm text-gray-500">
          {studentInfo?.educationDetails?.class}. Sınıf
        </div>
      </div>
      <img className=" h-14 rounded-lg" src={studentInfo?.picture} />
    </Link>
  );
};

export default Student;
