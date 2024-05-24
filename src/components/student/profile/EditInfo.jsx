import { useEffect, useState } from "react";
import Info from "./Info";
import useFetch from "../../../hooks/useFetch";
import { useUser } from "../../../context/userContext";

const EditInfo = () => {
  const {user} = useUser();
  const [userInfo, setUserInfo] = useState(null);
  const [cancel, setCancel] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };
  




  const onSuccess = ()=>{
    setIsUpdated(true);
    setCancel(true);
  }
  const onSuccessGetUser = (data)=>{
    console.log(data);
    setUserInfo(data);
  }

  useEffect(()=>{
    if(user){
      performGetUser();
    }
  },[user])


  const {error, isLoading, performFetch} = useFetch(`/user/${user}`,onSuccess);
  const {error:errorGetUser,  performFetch:performGetUser} = useFetch(`/user/${user}`,onSuccessGetUser);




  const handleSubmit = async ()=>{
    console.log(userInfo);

      performFetch({
        method:"PUT",
        body:JSON.stringify(userInfo)
      })


  }

  if(isUpdated){
    return(<Info user={userInfo}/>)
  }

  if(cancel){
    return(<Info user={user}/>)
  }

  return (
    <div className="">
      <div className="flex flex-col">
        <h1 className="text-white mb-2">Kişisel Bilgiler</h1>
        <div className="mb-4 bg-gray-800 border gap-2 border-gray-800 shadow-lg grid grid-cols-2 text-white rounded-2xl p-2">
          <div className="rounded-md border p-4 flex flex-row text-gray-200 cursor-default items-center">
            <div>İsim:</div>
            <input
            className=" text-black p-1 rounded-l ml-2"
              type="text"
              name="firstName"
              value={userInfo?.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="rounded-md border p-4 flex flex-row text-gray-200 cursor-default items-center">
            <div>Soy İsim:</div>
            <input
            className=" text-black p-1 rounded-l ml-2"
              type="text"
              name="lastName"
              value={userInfo?.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="rounded-md border p-4 flex flex-row text-gray-200 cursor-default items-center">
            <div>Referans Numarası:</div>
            <input
            className=" text-black p-1 rounded-l ml-2"
              type="text"
              disabled
              name="referenceNumber"
              value={userInfo?.referenceNumber}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-white mb-2">Hakkımda</h1>
        <div className="mb-4 bg-gray-800 w-full border border-gray-800 shadow-lg flex flex-row justify-between rounded-2xl p-2">
          <div className="rounded-md border p-4 w-full flex flex-row text-gray-200 cursor-default items-center">
            <textarea
            className=" text-black p-1 rounded-l ml-2 w-full"
              type="input"
              name="aboutMe"
              value={userInfo?.aboutMe}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-white mb-2">İletişim</h1>
        <div className="mb-4 bg-gray-800 border gap-2 border-gray-800 shadow-lg grid grid-cols-2 text-white rounded-2xl p-2">
          <div className="rounded-md border p-4 flex flex-row text-gray-200 cursor-default items-center">
            <div>Telefon:</div>
            <input
            className=" text-black p-1 rounded-l ml-2"
              type="text"
              name="phone"
              value={userInfo?.contact?.phone}
              onChange={(e)=>{setUserInfo({
                ...userInfo,
                contact:{
                  ...userInfo?.contact,
                  phone:e.target.value
                }
              })}
              }
            />
          </div>
          <div className="rounded-md border p-4 flex flex-row text-gray-200 cursor-default items-center">
            <div>E-posta:</div>
            <input
            className=" text-black p-1 rounded-l ml-2"
              type="text"
              disabled
              name="email"
              value={userInfo?.email}
            />
          </div>
          <div className="rounded-md border p-4 flex flex-row text-gray-200 cursor-default items-center">
            <div>Şehir:</div>
            <input
            className=" text-black p-1 rounded-l ml-2"
              type="text"
              name="province"
              value={userInfo?.contact.address.province}
              onChange={(e) =>
                setUserInfo({
                  ...userInfo,
                  contact: {
                    ...userInfo?.contact,
                    address: {
                      ...userInfo?.contact.address,
                      province: e.target.value,
                    },
                  },
                })
              }
            />
          </div>
          <div className="rounded-md border p-4 flex flex-row text-gray-200 cursor-default items-center">
            <div>İlçe:</div>
            <input
            className=" text-black p-1 rounded-l ml-2"
              type="text"
              name="district"
              value={userInfo?.contact.address.district}
              onChange={(e) =>
                setUserInfo({
                  ...userInfo,
                  contact: {
                    ...userInfo?.contact,
                    address: {
                      ...userInfo?.contact.address,
                      district: e.target.value,
                    },
                  },
                })
              }
            />
          </div>
          <div className="rounded-md border p-4 flex flex-row text-gray-200 cursor-default items-center">
            <div>Adres:</div>
            <input
            className=" text-black p-1 rounded-l ml-2"
              type="text"
              name="streetAddress"
              value={userInfo?.contact.address.streetAddress}
              onChange={(e) =>
                setUserInfo({
                  ...userInfo,
                  contact: {
                    ...userInfo?.contact,
                    address: {
                      ...userInfo?.contact.address,
                      streetAddress: e.target.value,
                    },
                  },
                })
              }
            />
          </div>
          <div className="rounded-md border p-4 flex flex-row text-gray-200 cursor-default items-center">
            <div>Posta Kodu:</div>
            <input
            className=" text-black p-1 rounded-l ml-2"
              type="text"
              name="zipCode"
              value={userInfo?.contact.address.zipCode}
              onChange={(e) =>
                setUserInfo({
                  ...userInfo,
                  contact: {
                    ...userInfo?.contact,
                    address: {
                      ...userInfo?.contact.address,
                      zipCode: e.target.value,
                    },
                  },
                })
              }
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-white mb-2">Okul Bilgileri</h1>
        <div className="mb-4 bg-gray-800 border gap-2 border-gray-800 shadow-lg grid grid-cols-2 text-white rounded-2xl p-2">
          <div className="rounded-md border p-4 flex flex-row text-gray-200 cursor-default items-center">
            <div>Sınıf:</div>
            <input
            className=" text-black p-1 rounded-l ml-2"
              type="text"
              name="class"
              value={userInfo?.educationDetails.class}
              onChange={(e) =>
                setUserInfo({
                  ...userInfo,
                  educationDetails: {
                    ...userInfo?.educationDetails,
                    class: e.target.value,
                  },
                })
              }
            />
          </div>
          <div className="rounded-md border p-4 flex flex-row text-gray-200 cursor-default items-center">
            <div>Okul Adı:</div>
            <input
            className=" text-black p-1 rounded-l ml-2"
              type="text"
              name="schoolName"
              value={userInfo?.educationDetails.schoolName}
              onChange={(e) =>
                setUserInfo({
                  ...userInfo,
                  educationDetails: {
                    ...userInfo?.educationDetails,
                    schoolName: e.target.value,
                  },
                })
              }
            />
          </div>
          <div className="rounded-md border p-4 flex flex-row text-gray-200 cursor-default items-center">
            <div>Öğretmen Adı:</div>
            <input
            className=" text-black p-1 rounded-l ml-2"
              type="text"
              name="teacherName"
              value={userInfo?.educationDetails.teacherName}
              onChange={(e) =>
                setUserInfo({
                  ...userInfo,
                  educationDetails: {
                    ...userInfo?.educationDetails,
                    teacherName: e.target.value,
                  },
                })
              }
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-white mb-2">Veli Bilgileri</h1>
        <div className="mb-4 bg-gray-800 border gap-2 border-gray-800 shadow-lg grid grid-cols-2 text-white rounded-2xl p-2">
          <div className="rounded-md border p-4 flex flex-row text-gray-200 cursor-default items-center">
            <div>Sıfatı:</div>
            <input
            className=" text-black p-1 rounded-l ml-2"
              type="text"
              name="gender"
              value={userInfo?.parent.gender}
              onChange={(e) =>
                setUserInfo({
                  ...userInfo,
                  parent: {
                    ...userInfo?.parent,
                    gender: e.target.value,
                  },
                })
              }
            />
          </div>
          <div className="rounded-md border p-4 flex flex-row text-gray-200 cursor-default items-center">
            <div>Adı:</div>
            <input
            className=" text-black p-1 rounded-l ml-2"
              type="text"
              name="firstName"
              value={userInfo?.parent.firstName}
              onChange={(e) =>
                setUserInfo({
                  ...userInfo,
                  parent: {
                    ...userInfo?.parent,
                    firstName: e.target.value,
                  },
                })
              }
            />
          </div>
          <div className="rounded-md border p-4 flex flex-row text-gray-200 cursor-default items-center">
            <div>Soyadı:</div>
            <input
            className=" text-black p-1 rounded-l ml-2"
              type="text"
              name="lastName"
              value={userInfo?.parent.lastName}
              onChange={(e) =>
                setUserInfo({
                  ...userInfo,
                  parent: {
                    ...userInfo?.parent,
                    lastName: e.target.value,
                  },
                })
              }
            />
          </div>
          <div className="rounded-md border p-4 flex flex-row text-gray-200 cursor-default items-center">
            <div>Mesleği:</div>
            <input
            className=" text-black p-1 rounded-l ml-2"
              type="text"
              name="occupation"
              value={userInfo?.parent.occupation}
              onChange={(e) =>
                setUserInfo({
                  ...userInfo,
                  parent: {
                    ...userInfo?.parent,
                    occupation: e.target.value,
                  },
                })
              }
            />
          </div>
          <div className="rounded-md border p-4 flex flex-row text-gray-200 cursor-default items-center">
            <div>Telefon:</div>
            <input
            className=" text-black p-1 rounded-l ml-2"
              type="text"
              name="phone"
              value={userInfo?.parent.phone}
              onChange={(e) =>
                setUserInfo({
                  ...userInfo,
                  parent: {
                    ...userInfo?.parent,
                    phone: e.target.value,
                  },
                })
              }
            />
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-2 gap-4">
          <div className=" border-s p-2 text-center bg-gray-200 rounded-lg cursor-pointer" onClick={()=>setCancel(true)}>Vazgeç</div>
          <div className=" border-s p-2 text-center bg-gray-200 rounded-lg cursor-pointer" onClick={handleSubmit}>Güncelle</div>
        </div>
    </div>
  );
};

export default EditInfo;

