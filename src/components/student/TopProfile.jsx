import { useEffect, useState, useRef } from "react";
import useFetch from "../../hooks/useFetch";
import { useUser } from "../../context/userContext";
import { setDate } from "date-fns";
import { appendErrors } from "react-hook-form";

const TopProfile = () => {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [base64, setBase64] = useState("");


  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };


  useEffect(()=>{
    console.log("aaaa",base64);
  },[base64])
  

  const handleUpload =  (e) => {

    console.log(e);
    // try {
    //   const formData = new FormData();


    //   performFetchPicture({
    //     headers:{
    //       "content-type":"*/*"
    //     },
    //     method:"POST",
    //     body:{file}
    //   })





      // const response = await fetch("/api/user/upload-photo", {
      //   method: "POST",
      //   body: formData,
      // });

      // if (response.ok) {
      //   const url = await response.json();
      //   setImageUrl(url);
      // } else {
      //   console.error("Failed to upload profile picture");
      // }
    // } catch (error) {
    //   console.error("Error uploading profile picture:", error);
    // }
  };





  const { user } = useUser();
  const [userInfo, setUserInfo] = useState(null);
  // const fileInputRef = useRef(null);
  const [profilePictureUrl, setProfilePictureUrl] = useState(userInfo?.picture);
  // const [data, setData] = useState(null);

  // const [file, setFile] = useState({});

  // useEffect(() => {
  //   performFetch();
  // }, []);

  // const onSuccess = (data) => {
  //   setUserInfo(data);
  // };

  const onSuccessPicture = (data) => {
    console.log("2222",data);
    setProfilePictureUrl(userInfo?.picture);
  };

  // const { error, isLoading, performFetch, cancelFetch } = useFetch(
  //   `/user/${user?.uid}`,
  //   onSuccess
  // );
  const {
    error: errorPicture,
    isLoading: isLoadingPicture,
    performFetch: performFetchPicture,
    cancelFetch: cancelFetchPicture,
  } = useFetch(`/user/upload-photo`, onSuccessPicture);

  // if (errorPicture) {
  //   console.log("Error ZAAAA : ", errorPicture);
  // }

  // const handleChangeProfilePicture = async () => {
  //   await fileInputRef.current.click();
  // };

  // const handleFileChange = async (event) => {
  //   setFile(URL.createObjectURL(event.target.files[0]));
  //   handleSubmit();
  // };

  // const handleOnChange = async (e) => {
  //   setFile(e.target);
  // };

  // const handleSubmit = (e) => {
  //   const formData = new FormData();
  //   formData.append("filename",file);
  //   performFetchPicture({
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     method:"POST",
  //     body:{buffer:"BUFFFFFF"}
  //   })
  // }

  return (
    <div className="bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl p-4">
      {/* <form >
        <input
          ref={fileInputRef}
          type="file"
          name="filename"
          style={{ display: "none" }}
          onChange={handleOnChange}
        />
        <button type="button" onClick={handleSubmit}>UPLOAD</button>
      </form> */}



<form onSubmit={handleUpload}  id="formPost" method="post" enctype="multipart/form-data"> 
      <input type="file" name="fileName" accept="image/*" onChange={handleFileChange} />
      <input type="submit" value={"UPLOAD"}/>
      {imageUrl && <img src={imageUrl} alt="Profile" />}
    </form>








      <div className="flex-none sm:flex">
        <div className=" relative h-32 w-32   sm:mb-0 mb-3">
          <img
            src={file || userInfo?.picture}
            alt="profile picture"
            className=" w-32 h-32 object-cover rounded-2xl"
          />
          {/* <div
            onClick={handleChangeProfilePicture}
            className="absolute -right-2 bottom-2   -ml-3  text-white p-1 text-xs bg-green-400 hover:bg-green-500 font-medium tracking-wider rounded-full transition ease-in duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
            </svg>
          </div> */}
        </div>
        <div className="flex-auto sm:ml-5 justify-evenly">
          <div className="flex items-center justify-between sm:mt-2">
            <div className="flex items-center">
              <div className="flex flex-col">
                <div className="w-full flex-none text-lg text-gray-200 font-bold leading-none">
                  {userInfo?.firstName} {userInfo?.lastName}
                </div>
                <div className="flex-auto text-gray-400 my-1">
                  <span className="mr-3 ">
                    {userInfo?.educationDetails?.class}. Sınıf
                  </span>
                  <span className="mr-3 border-r border-gray-600  max-h-0"></span>
                  <span>{userInfo?.contact?.address?.province}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex pt-2  text-sm text-gray-400">
            <div className="flex-1 inline-flex items-center">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z"
                  clipRule="evenodd"
                />
              </svg>

              <p className="">
                {userInfo?.previousLessons?.length} ders yapıldı.
              </p>
            </div>
            <div className="flex-1 inline-flex items-center">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m7.171 12.906-2.153 6.411 2.672-.89 1.568 2.34 1.825-5.183m5.73-2.678 2.154 6.411-2.673-.89-1.568 2.34-1.825-5.183M9.165 4.3c.58.068 1.153-.17 1.515-.628a1.681 1.681 0 0 1 2.64 0 1.68 1.68 0 0 0 1.515.628 1.681 1.681 0 0 1 1.866 1.866c-.068.58.17 1.154.628 1.516a1.681 1.681 0 0 1 0 2.639 1.682 1.682 0 0 0-.628 1.515 1.681 1.681 0 0 1-1.866 1.866 1.681 1.681 0 0 0-1.516.628 1.681 1.681 0 0 1-2.639 0 1.681 1.681 0 0 0-1.515-.628 1.681 1.681 0 0 1-1.867-1.866 1.681 1.681 0 0 0-.627-1.515 1.681 1.681 0 0 1 0-2.64c.458-.361.696-.935.627-1.515A1.681 1.681 0 0 1 9.165 4.3ZM14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                />
              </svg>

              <p className="">{userInfo?.esCoin?.total} EsCoin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProfile;
