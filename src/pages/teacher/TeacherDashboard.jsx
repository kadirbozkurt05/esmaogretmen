import StudentList from "../../components/teacher/StudentList"
import Nav from "../../components/general/Nav/Nav";
import { useEffect, useState } from "react";    
import auth from "../../utils/config/firebaseConfig";
import getUserInfo from "../../utils/database/GetData/GetUserInfo";

const TeacherDashboard = ()=>{
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUser = async () => {
          try {
            const userFromDb = await getUserInfo(auth.currentUser.uid);
            console.log(userFromDb);
            setUser(userFromDb);
          } catch (error) {
            console.log(error);
          }
        };
        getUser();
      }, []);

    return(
        < div className=" bg-orange-200 w-full">
        <Nav />
        {user?.students.length > 0 && <StudentList students={user?.students}/>}
      </div>
    )
}

export default TeacherDashboard;