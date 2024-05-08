import { useEffect, useState } from "react";
import auth from "../../utils/config/firebaseConfig";
import getUserInfo from "../../utils/database/GetData/GetUserInfo";

const TopProfile = ()=>{

    const [user, setUser] = useState(null);

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


      const handleChangeProfilePicture = ()=>{

        
      }


    return(
        <div className="bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl p-4">
        <div className="flex-none sm:flex">
          <div className=" relative h-32 w-32   sm:mb-0 mb-3">
            <img src={user && user?.picture} alt="aji" className=" w-32 h-32 object-cover rounded-2xl"/>
            <div onClick={handleChangeProfilePicture} className="absolute -right-2 bottom-2   -ml-3  text-white p-1 text-xs bg-green-400 hover:bg-green-500 font-medium tracking-wider rounded-full transition ease-in duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z">
                </path>
              </svg>
            </div>
          </div>
          <div className="flex-auto sm:ml-5 justify-evenly">
            <div className="flex items-center justify-between sm:mt-2">
              <div className="flex items-center">
                <div className="flex flex-col">
                  <div className="w-full flex-none text-lg text-gray-200 font-bold leading-none">{user?.firstName} {user?.lastName}</div>
                  <div className="flex-auto text-gray-400 my-1">
                    <span className="mr-3 ">{user?.educationDetails?.class}. Sınıf</span><span className="mr-3 border-r border-gray-600  max-h-0"></span><span>{user?.contact?.address?.province}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex pt-2  text-sm text-gray-400">
              <div className="flex-1 inline-flex items-center">
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z" clip-rule="evenodd"/>
</svg>


                <p className="">{user?.previousLessons?.length} ders yapıldı.</p>
              </div>
              <div className="flex-1 inline-flex items-center">
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7.171 12.906-2.153 6.411 2.672-.89 1.568 2.34 1.825-5.183m5.73-2.678 2.154 6.411-2.673-.89-1.568 2.34-1.825-5.183M9.165 4.3c.58.068 1.153-.17 1.515-.628a1.681 1.681 0 0 1 2.64 0 1.68 1.68 0 0 0 1.515.628 1.681 1.681 0 0 1 1.866 1.866c-.068.58.17 1.154.628 1.516a1.681 1.681 0 0 1 0 2.639 1.682 1.682 0 0 0-.628 1.515 1.681 1.681 0 0 1-1.866 1.866 1.681 1.681 0 0 0-1.516.628 1.681 1.681 0 0 1-2.639 0 1.681 1.681 0 0 0-1.515-.628 1.681 1.681 0 0 1-1.867-1.866 1.681 1.681 0 0 0-.627-1.515 1.681 1.681 0 0 1 0-2.64c.458-.361.696-.935.627-1.515A1.681 1.681 0 0 1 9.165 4.3ZM14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
</svg>

                <p className="">{user?.esCoin?.total} EsCoin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default TopProfile;