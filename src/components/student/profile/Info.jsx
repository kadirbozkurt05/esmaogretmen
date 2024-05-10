import { useState } from "react";
import EditInfo from "./EditInfo";

const Info = ({user}) => {
  const [isEdit, setIsEdit] = useState(false);

  if(isEdit){
    return(
      <EditInfo user={user} />
    )
  }

  return (
    <div className="">
            <div className="flex flex-col">
        <h1 className=" text-white mb-2">Kişisel Bilgiler</h1>
        <div className="mb-4 bg-gray-800 border gap-2 border-gray-800 shadow-lg grid grid-cols-2 text-white rounded-2xl p-2">
          
              <div className="rounded-md border p-4 flex flex-row text-gray-200 cursor-default">



                
              <div>İsim:</div><div className=" ml-2" >{user?.firstName}</div>






              </div>
              <div className="rounded-md border p-4 flex flex-row text-gray-200 cursor-default">
              <div>Soy İsim:</div><div className=" ml-2">{user?.lastName}</div>
              </div>
              <div className="rounded-md border p-4 flex flex-row text-gray-200 cursor-default">
              <div>Referans Numarası:</div><div className=" ml-2">{user?.referenceNumber}</div>
              </div>
             
          

          
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className=" text-white mb-2">Hakkımda</h1>
        <div className="mb-4 bg-gray-800 border border-gray-800 shadow-lg flex flex-row justify-between rounded-2xl p-2">
          
            <div className=" rounded-md border p-4 flex flex-row text-gray-200 cursor-default w-full">{user?.aboutMe}</div>
          
          
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className=" text-white mb-2">İletişim</h1>
        <div className="mb-4 bg-gray-800 border gap-2 border-gray-800 shadow-lg grid grid-cols-2 text-white rounded-2xl p-2">
          
              <div className="rounded-md border p-4 flex flex-row text-gray-200 cursor-default">
              <div>Telefon:</div><div className=" ml-2">{user?.contact?.phone}</div>
              </div>
              <div className="rounded-md border p-4 flex flex-row text-gray-200 cursor-default">
              <div>E-posta:</div><div className=" ml-2">{user?.email}</div>
              </div>
              <div className="rounded-md border p-4 flex flex-row text-gray-200 cursor-default">
              <div>Şehir:</div><div className=" ml-2">{user?.contact?.address?.province}</div>
              </div>
              <div className="rounded-md border p-4 flex flex-row text-gray-200 cursor-default">
              <div>İlçe:</div><div className=" ml-2">{user?.contact?.address?.district}</div>
              </div>  
              <div className="rounded-md border p-4 flex flex-row text-gray-200 cursor-default">
              <div>Adres:</div><div className=" ml-2">{user?.contact?.address?.streetAddress}</div>
              </div>  

              <div className="rounded-md border p-4 flex flex-row text-gray-200 cursor-default">
              <div>Posta Kodu:</div><div className=" ml-2">{user?.contact?.address?.zipCode}</div>
              
              </div> 
              
          

          
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className=" text-white mb-2">Okul Bilgileri</h1>
        <div className="mb-4 bg-gray-800 border gap-2 border-gray-800 shadow-lg grid grid-cols-2 text-white rounded-2xl p-2">
          
              <div className="rounded-md border p-4 flex flex-row text-gray-200 cursor-default">
              <div>Sınıf:</div><div className=" ml-2">{user?.educationDetails?.class}</div>
              </div>
              <div className="rounded-md border p-4 flex flex-row text-gray-200 cursor-default">
              <div>Okul Adı:</div><div className=" ml-2">{user?.educationDetails?.schoolName}</div>
              </div>
              <div className="rounded-md border p-4 flex flex-row text-gray-200 cursor-default">
              <div>Öğretmen Adı:</div><div className=" ml-2">{user?.educationDetails?.teacherName}</div>
              </div>
              
          

          
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className=" text-white mb-2">Veli Bilgileri</h1>
        <div className="mb-4 bg-gray-800 border gap-2 border-gray-800 shadow-lg grid grid-cols-2 text-white rounded-2xl p-2">
          
              <div className="rounded-md border p-4 flex flex-row text-gray-200 cursor-default">
              <div>Sıfatı:</div><div className=" ml-2">{user?.parent?.gender}</div>
              </div>
              <div className="rounded-md border p-4 flex flex-row text-gray-200 cursor-default">
              <div>Adı:</div><div className=" ml-2">{user?.parent?.firstName}</div>
              </div>
              <div className="rounded-md border p-4 flex flex-row text-gray-200 cursor-default">
              <div>Soyadı:</div><div className=" ml-2">{user?.parent?.lastName}</div>
              </div>
              <div className="rounded-md border p-4 flex flex-row text-gray-200 cursor-default">
              <div>Mesleği:</div><div className=" ml-2">{user?.parent?.occupation}</div>
              </div>
              <div className="rounded-md border p-4 flex flex-row text-gray-200 cursor-default">
              <div>Telefon:</div><div className=" ml-2">{user?.parent?.phone}</div>
              </div>
          

          
        </div>
      </div>
      <div className=" w-full border-s p-2 text-center bg-gray-200 rounded-lg cursor-pointer" onClick={()=>setIsEdit(true)}> Düzenle</div>
    </div>
  );
};

export default Info;
