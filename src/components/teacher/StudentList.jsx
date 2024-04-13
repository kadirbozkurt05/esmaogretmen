import Student from "./Student";
const StudentList = ({students}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        {students.map(student=>{
           return (<Student student={student}/>)
        })}
    </div>
  )
};

export default StudentList;
