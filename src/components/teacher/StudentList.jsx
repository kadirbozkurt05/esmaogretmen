import { useEffect, useState } from "react";
import Student from "./Student";
const StudentList = ({users, teacherId}) => {
  const [studentList, setStudentList] = useState([]);
  useEffect(() => {
    const students = users?.filter((user) => user?.data?.teachers?.includes(teacherId));
    console.log("aaaa",teacherId);
    setStudentList(students);
  },[]);

//   useEffect(()=>{
//     console.log(studentList);
//   },[studentList])
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center md:px-10 mt-4">
        {studentList.map(student=>{
           return (<Student student={student}/>)
        })}
    </div>
  )
};

export default StudentList;
