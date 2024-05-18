
import { useEffect, useState } from "react";    
import MainComponent from "../../components/teacher/MainComponent";
import { useUser } from "../../context/userContext";
import useFetch from "../../hooks/useFetch";

const TeacherDashboard = ()=>{
  const {user} = useUser();

  const [userInfo, setUserInfo] = useState();
  useEffect(()=>{
    cancelFetch();
  },[])




  const onSuccess = (data) => {
    console.log(data);
    setUserInfo(data);
  }



  const {error, isLoading, performFetch, cancelFetch} = useFetch(`/user/${user.uid}`,onSuccess);

  if(error) {
    console.log("Error : ", error);
  }



    return(
        < div className=" bg-orange-200 w-full">
         <MainComponent/>
      </div>
    )
}

export default TeacherDashboard;