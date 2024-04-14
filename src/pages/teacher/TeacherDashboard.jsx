
import { useEffect, useState } from "react";    
import auth from "../../utils/config/firebaseConfig";
import getUserInfo from "../../utils/database/GetData/GetUserInfo";
import MainComponent from "../../components/teacher/MainComponent";

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
        {user?.students.length > 0 && <MainComponent/>}
      </div>
    )
}

export default TeacherDashboard;