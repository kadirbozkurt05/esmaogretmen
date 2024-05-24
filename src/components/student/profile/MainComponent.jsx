import TopProfile from "../TopProfile";
import { useEffect, useState } from "react";
import Info from "./Info";
import { useUser } from "../../../context/userContext";
import useFetch from "../../../hooks/useFetch";



const MainComponent = () => {
  const [userInfo, setUserInfo] = useState(null);
  const {user} = useUser();




  const onSuccess = (data) => {
    setUserInfo(data);
  }

  useEffect(()=>{
    if(user){
      performFetch();

    }
  },[user])


  const {error, isLoading, performFetch, cancelFetch} = useFetch(`/user/${user}`,onSuccess);

  if(error ) {
    console.log("Error : ", error);
  }




  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 px-2">
      <div className=" w-full  max-w-5xl m-4">
        <div className=" mx-auto grid gap-4 grid-cols-1">
          <div className="flex flex-col sticky top-0 z-10">
            <TopProfile />
          </div>

            
        </div>
        
<Info user={userInfo} />

      </div>

    </div>
  );
};

export default MainComponent;
