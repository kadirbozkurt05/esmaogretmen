import { useState } from "react";
import Info from "./Info";
import useFetch from "../../../hooks/useFetch";
import { useUser } from "../../../context/userContext";

const EditInfo = () => {
  const { user, setUser } = useUser();
  const [cancel, setCancel] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const onSuccess = () => {
    localStorage.setItem("user", JSON.stringify(user));

    setIsUpdated(true);
    setCancel(true);
  };

  const { error, isLoading, performFetch } = useFetch(
    `/user/${user._id}`,
    onSuccess
  );

  const handleSubmit = async () => {
    performFetch({
      method: "PUT",
      body: JSON.stringify(user),
    });
  };

  if (isUpdated) {
    return <Info user={user} />;
  }

  if (cancel) {
    return <Info user={user} />;
  }

  return (
    <div className="">
      <div className="flex flex-col">
        <h1 className=" mb-2">Kişisel Bilgiler</h1>
        <div className="mb-4   gap-2 shadow-lg grid grid-cols-1 md:grid-cols-2  rounded-2xl p-2">
          <div className="rounded-md  p-4 flex w-full flex-row  cursor-default items-center">
            <div className="flex flex-1">İsim:</div>
            <input
              className=" text-gray-400 bg-yellow-100 p-1 italic flex-1 ml-2"
              type="text"
              name="firstName"
              value={user?.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="rounded-md  p-4 flex flex-row  cursor-default items-center">
            <div className="flex flex-1">Soy İsim:</div>
            <input
              className=" text-gray-400 bg-yellow-100 p-1 italic flex-1 ml-2"
              type="text"
              name="lastName"
              value={user?.lastName}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className=" mb-2">Hakkımda</h1>
        <div className="mb-4 w-full  shadow-lg flex flex-row justify-between rounded-2xl p-2">
          <div className="rounded-md  p-4 w-full flex flex-row  cursor-default items-center">
            <textarea
              className="text-gray-400 bg-yellow-100 p-1 italic flex-1 ml-2"
              type="input"
              name="aboutMe"
              value={user?.aboutMe}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className=" mb-2">İletişim</h1>
        <div className="mb-4   gap-2 shadow-lg grid md:grid-cols-2 grid-cols-1  rounded-2xl p-2">
          <div className="rounded-md  p-4 flex w-full flex-row  cursor-default items-center">
            <div className="flex-1">Telefon:</div>
            <input
              className=" text-gray-400 bg-yellow-100 p-1 italic flex-1 ml-2"
              type="text"
              name="phone"
              value={user?.contact?.phone}
              onChange={(e) => {
                setUser({
                  ...user,
                  contact: {
                    ...user?.contact,
                    phone: e.target.value,
                  },
                });
              }}
            />
          </div>
          <div className="rounded-md  p-4 flex w-full flex-row  cursor-default items-center">
            <div className="flex-1">E-posta:</div>
            <input
              className=" text-gray-400 bg-yellow-100 p-1 italic flex-1 ml-2"
              type="text"
              disabled
              name="email"
              value={user?.email}
            />
          </div>
          <div className="rounded-md  p-4 flex w-full flex-row  cursor-default items-center">
            <div className="flex-1">Şehir:</div>
            <input
              className=" text-gray-400 bg-yellow-100 p-1 italic flex-1 ml-2"
              type="text"
              name="province"
              value={user?.contact.address.province}
              onChange={(e) =>
                setUser({
                  ...user,
                  contact: {
                    ...user?.contact,
                    address: {
                      ...user?.contact.address,
                      province: e.target.value,
                    },
                  },
                })
              }
            />
          </div>
          <div className="rounded-md  p-4 flex w-full flex-row  cursor-default items-center">
            <div className="flex-1">İlçe:</div>
            <input
              className=" text-gray-400 bg-yellow-100 p-1 italic flex-1 ml-2"
              type="text"
              name="district"
              value={user?.contact.address.district}
              onChange={(e) =>
                setUser({
                  ...user,
                  contact: {
                    ...user?.contact,
                    address: {
                      ...user?.contact.address,
                      district: e.target.value,
                    },
                  },
                })
              }
            />
          </div>
          <div className="rounded-md  p-4 flex w-full flex-row  cursor-default items-center">
            <div className="flex-1">Adres:</div>
            <input
              className=" text-gray-400 bg-yellow-100 p-1 italic flex-1 ml-2"
              type="text"
              name="streetAddress"
              value={user?.contact.address.streetAddress}
              onChange={(e) =>
                setUser({
                  ...user,
                  contact: {
                    ...user?.contact,
                    address: {
                      ...user?.contact.address,
                      streetAddress: e.target.value,
                    },
                  },
                })
              }
            />
          </div>
          <div className="rounded-md  p-4 flex w-full flex-row  cursor-default items-center">
            <div className="flex-1">Posta Kodu:</div>
            <input
              className=" text-gray-400 bg-yellow-100 p-1 italic flex-1 ml-2"
              type="text"
              name="zipCode"
              value={user?.contact.address.zipCode}
              onChange={(e) =>
                setUser({
                  ...user,
                  contact: {
                    ...user?.contact,
                    address: {
                      ...user?.contact.address,
                      zipCode: e.target.value,
                    },
                  },
                })
              }
            />
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-2 gap-4">
        <div
          className=" border-s p-2 text-center bg-gray-200 rounded-lg cursor-pointer"
          onClick={() => setCancel(true)}
        >
          Vazgeç
        </div>
        <div
          className=" border-s p-2 text-center bg-gray-200 rounded-lg cursor-pointer"
          onClick={handleSubmit}
        >
          Güncelle
        </div>
      </div>
    </div>
  );
};

export default EditInfo;
