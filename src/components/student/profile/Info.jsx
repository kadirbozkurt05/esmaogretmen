import { useState } from "react";

const Info = ({user}) => {
  const [text, setText] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sit repudiandae eaque neque nostrum quidem quis accusamus, totam enim sequi ab veritatis maiores consectetur soluta, nulla fugit perspiciatis odit unde?Nisi, facilis eveniet sit tempore ab fugit suscipit temporibus. Magni eum commodi debitis eligendi non? Quis molestias, tenetur eos qui totam aliquid commodi odio dolor nisi reprehenderit eveniet, earum debitis.Optio cumque eum facilis dolorem quae ipsam vitae exercitationem harum eius at. Placeat, ipsa aliquam qui laboriosam nulla quo cum. Sapiente saepe quos consequatur asperiores, libero et officia tempore. Provident!"
  );
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
          
            <div className=" rounded-md border p-4 flex flex-row text-gray-200 cursor-default">{text}</div>
          
          
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
    </div>
  );
};

export default Info;
