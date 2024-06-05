import Student from "./Student";
const StudentList = ({students, onClick}) => {
  
  return (
    <div className={`grid grid-cols-1 ${students.length >= 2 ? "md:grid-cols-2":"md:grid-cols-1"} gap-4 items-center`}>
        {students.map((student, index)=>{
           return (<Student key={index} onClick={onClick} student={student}/>)
        })}
    </div>
  )
};

export default StudentList;
