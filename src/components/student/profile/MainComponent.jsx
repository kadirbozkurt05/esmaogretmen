import TopProfile from "../TopProfile";
import { useEffect, useState } from "react";
import Info from "./Info";



const MainComponent = () => {
  const [user, setUser] = useState();
  const [userId, setUserId] = useState("");

  useEffect(()=>{
    cancelFetch();
    cancelFetchCurrentUser();
  },[])

  useEffect(()=>{
    performFetchCurrentUser();
  },[])

  const onSuccessCurrentUser = (data) =>{
    setUserId(data.uid);
    performFetch();
  }

  const onSuccess = (data) => {
    setUser(data);
  }



  const {error, isLoading, performFetch, cancelFetch} = useFetch(`/user/${userId}`,onSuccess);
  const {error: errorCurrentUser, performFetch:performFetchCurrentUser, cancelFetch:cancelFetchCurrentUser} = useFetch(`/user/current-user`, onSuccessCurrentUser);

  if(error || errorCurrentUser) {
    console.log("Error : ", error || errorCurrentUser);
  }




  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 px-2">
      <div className=" w-full  max-w-5xl m-4">
        <div className=" mx-auto grid gap-4 grid-cols-1">
          <div className="flex flex-col sticky top-0 z-10">
            <TopProfile />
          </div>

            
        </div>
        
<Info user={user} />

      </div>

    </div>
  );
};

export default MainComponent;
