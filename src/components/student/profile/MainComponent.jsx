import TopProfile from "../TopProfile";
import { useEffect, useState } from "react";
import auth from "../../../utils/config/firebaseConfig";
import getUserInfo from "../../../utils/database/GetData/GetUserInfo";
import Info from "./Info";
import EditInfo from "./EditInfo";


const MainComponent = () => {
  const [user, setUser] = useState();
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      try {
        const userFromDb = await getUserInfo(auth?.currentUser?.uid);
        setUser(userFromDb);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);



  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 px-2">
      <div className=" w-full  max-w-5xl m-4">
        <div className=" mx-auto grid gap-4 grid-cols-1">
          <div className="flex flex-col sticky top-0 z-10">
            <TopProfile />
          </div>

            

        

          <div className="grid grid-cols-2">
            <div className="flex flex-col">
              <div className="bg-black"></div>
              <div className="bg-black"></div>
            </div>
          </div>
        </div>
        {isEdit ? <EditInfo user={user}/> : <Info user = {user} />}
        {!isEdit ? <div className=" w-full border-s p-2 text-center bg-gray-200 rounded-lg cursor-pointer" onClick={()=>setIsEdit(true)}> Düzenle</div> :
        <div className=" grid grid-cols-2 gap-4">
          <div className=" border-s p-2 text-center bg-gray-200 rounded-lg cursor-pointer" onClick={()=>setIsEdit(false)}>Vazgeç</div>
          <div className=" border-s p-2 text-center bg-gray-200 rounded-lg cursor-pointer">Güncelle</div>
        </div>
        
        }

      </div>

    </div>
  );
};

export default MainComponent;
