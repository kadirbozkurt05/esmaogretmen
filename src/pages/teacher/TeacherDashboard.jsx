import StudentList from "../../components/teacher/StudentList"
import Nav from "../../components/general/Nav/Nav";
import { useEffect, useState } from "react";    
import getAllUsers from "../../utils/database/GetData/GetAllUsers";
import auth from "../../utils/config/firebaseConfig";

const TeacherDashboard = ()=>{
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        const getUsers = async ()=>{
            const a = await getAllUsers();
            setUsers(a);
        }
        getUsers();

    },[])
    return(
        < div className=" bg-orange-200 w-full">
        <Nav />
        {users.length > 0 && <StudentList users={users} teacherId={auth.currentUser?.uid}/>}
      </div>
    )
}

export default TeacherDashboard;