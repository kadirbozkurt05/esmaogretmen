import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useUser } from "../../context/userContext";

const ProfileCard = () => {

    const { user } = useUser();
    const [userInfo, setUserInfo] = useState(null);
  
    useEffect(() => {
      if (user) {
        performFetch();
      }
    }, [user]);
  
    const onSuccess = (data) => {
      setUserInfo(data);
    };
  
    const { error, isLoading, performFetch } = useFetch(
      `/user/${user}`,
      onSuccess
    );
    return(
<div className="w-full bg-gray-50 flex justify-center items-center">
      <div className="h-56 w-72 absolute flex justify-center items-center">
        <img
          className="object-cover h-20 w-20 rounded-full"
          src={userInfo?.picture}
          alt=""
        />
      </div>

      <div
        className="
          h-56
          mx-4
          w-5/6
          bg-blue-400
          rounded-3xl
          shadow-md
          sm:w-80 sm:mx-0
        "
      >
        <div className="h-1/2 w-full flex justify-center items-baseline px-3 py-5">
          
          <div className=" text-center">Profiliniz</div>
        </div>

        <div
          className="
            bg-white
            h-1/2
            w-full
            rounded-3xl
            flex flex-col
            justify-around
            items-center
          "
        >
          <div className="w-full h-1/2 flex justify-between items-center px-3 pt-2">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-gray-500 text-xs">EsCoin</h1>
              <h1 className="text-gray-600 text-sm">{userInfo?.esCoin.total}</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-gray-500 text-xs">Yapılan Ders</h1>
              <h1 className="text-gray-600 text-sm">{!userInfo?.isTeacher && userInfo?.scheduledClasses.filter((clas) => clas.isDone).length}</h1>
            </div>
          </div>
          <div className="w-full h-1/2 flex flex-col justify-center items-center">
            <h1 className="text-gray-700 font-bold">{userInfo?.firstName} {userInfo?.lastName}</h1>
            <h1 className="text-gray-500 text-sm">{userInfo?.contact?.address?.province}</h1>
          </div>
        </div>
      </div>
    </div>
    )
}

export default ProfileCard;