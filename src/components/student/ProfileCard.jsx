import { useEffect, useState, useRef } from "react";
import { useUser } from "../../context/userContext";
import { uploadProfilePicture } from "../../utils/firebaseUtils";
import useFetch from "../../hooks/useFetch";

const ProfileCard = () => {
  const { user, setUser } = useUser();
  const [scheduledClasses, setScheduledClasses] = useState([]);
  const inputFile = useRef(null);
  const [imageUrl, setImageUrl] = useState("");

  const onSuccess = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
  };

  const { error, isLoading, performFetch } = useFetch(
    `/user/${user._id}`,
    onSuccess
  );

  useEffect(() => {
    if (imageUrl != "") {
      performFetch({
        method: "PUT",
        body: JSON.stringify({ ...user, picture: imageUrl }),
      });
    }
  }, [imageUrl]);

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const url = await uploadProfilePicture(file, user._id);
        setImageUrl(url);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (user) {
      setScheduledClasses(user?.scheduledClasses);
    }
  }, [user]);

  return (
    <div className="w-full bg-gray-50 flex justify-center items-center">
      <div className="h-56 w-72 absolute flex justify-center items-center">
        <input
          type="file"
          id="file"
          accept="image/*"
          onChange={handleImageChange}
          ref={inputFile}
          style={{ display: "none" }}
        />

        <div className="relative">
          <img
            src={user?.picture}
            alt="aji"
            className=" w-20 h-20 object-cover rounded-full"
          />
          <div
            onClick={() => inputFile.current.click()}
            className="absolute -right-1 bottom-1 cursor-pointer  -ml-3  text-white p-1 text-xs bg-green-400 hover:bg-green-500 font-medium tracking-wider rounded-full transition ease-in duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
            </svg>
          </div>
        </div>
      </div>

      <div
        className="
          h-56
          mx-4
          w-full
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
              <h1 className="text-gray-600 text-sm">{user?.esCoin?.total}</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-gray-500 text-xs">Yapılan Ders</h1>
              <h1 className="text-gray-600 text-sm">
                {!user?.isTeacher &&
                  scheduledClasses.filter((clas) => clas.isDone).length}
              </h1>
            </div>
          </div>
          <div className="w-full h-1/2 flex flex-col justify-center items-center">
            <h1 className="text-gray-700 font-bold">
              {user?.firstName} {user?.lastName}
            </h1>
            <h1 className="text-gray-500 text-sm">{user?.contact?.email}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
