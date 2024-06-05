import { useState } from "react";
import EditInfo from "./EditInfo";

const Info = ({ user }) => {
  const [isEdit, setIsEdit] = useState(false);

  if (isEdit) {
    return <EditInfo user={user} />;
  }

  return (
    <div className="">
      <div className="flex flex-col">
        <h1 className=" mb-2">Kişisel Bilgiler</h1>
        <div className="mb-4  gap-2 shadow-lg bg-gray-300 grid grid-cols-2  rounded-2xl p-2">
          <div className="rounded-md  p-4 flex flex-row  cursor-default">
            <div>İsim:</div>
            <div className=" ml-2">{user?.firstName}</div>
          </div>
          <div className="rounded-md  p-4 flex flex-row  cursor-default">
            <div>Soy İsim:</div>
            <div className=" ml-2">{user?.lastName}</div>
          </div>

        </div>
      </div>
      <div className="flex flex-col">
        <h1 className=" mb-2">Hakkımda</h1>
        <div className="mb-4  gap-2 shadow-lg bg-gray-300 grid grid-cols-2  rounded-2xl p-2">
          <div className=" rounded-md  p-4 flex flex-row  cursor-default w-full">
            {user?.aboutMe}
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className=" mb-2">İletişim</h1>
        <div className="mb-4  gap-2 shadow-lg bg-gray-300 grid grid-cols-2  rounded-2xl p-2">
          <div className="rounded-md  p-4 flex flex-row  cursor-default">
            <div>Telefon:</div>
            <div className=" ml-2">{user?.contact?.phone}</div>
          </div>
          <div className="rounded-md  p-4 flex flex-row  cursor-default">
            <div>E-posta:</div>
            <div className=" ml-2">{user?.email}</div>
          </div>
          <div className="rounded-md  p-4 flex flex-row  cursor-default">
            <div>Şehir:</div>
            <div className=" ml-2">{user?.contact?.address?.province}</div>
          </div>
          <div className="rounded-md  p-4 flex flex-row  cursor-default">
            <div>İlçe:</div>
            <div className=" ml-2">{user?.contact?.address?.district}</div>
          </div>
          <div className="rounded-md  p-4 flex flex-row  cursor-default">
            <div>Adres:</div>
            <div className=" ml-2">{user?.contact?.address?.streetAddress}</div>
          </div>

          <div className="rounded-md  p-4 flex flex-row  cursor-default">
            <div>Posta Kodu:</div>
            <div className=" ml-2">{user?.contact?.address?.zipCode}</div>
          </div>
        </div>
      </div>



      <div
        className=" w-full border-s p-2 text-center bg-gray-200 rounded-lg cursor-pointer"
        onClick={() => setIsEdit(true)}
      >
        {" "}
        Düzenle
      </div>
    </div>
  );
};

export default Info;
