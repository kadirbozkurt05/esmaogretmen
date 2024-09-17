import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Info = () => {
  const imageSrc = "/info-pic.png";

  return (
    <div className="flex px-6 md:px-0  md:ml-32 md:mr-48 flex-col justify-center lg:mt-8 lg:flex-row items-center">
      <div className="order-2 bg-blue-gray-200 p-6 lg:p-12 rounded-3xl shadow-3xl md:order-1 mt-8 lg:mt-0 w-full lg:w-1/2 pb-8">
        <h1 className="text-center text-2xl font-trebuchet font-bold text-black mb-4">
          Özel Ders Neden Gereklidir?
        </h1>
        <p className="mb-4 text-justify">
          Öğrenciler, kalabalık sınıflarda kendilerini ifade etmekte ve
          potansiyellerini ortaya koymakta zorlanır. İletişim, özel derslerde
          daha güçlü kurulur ve bu dersler, öğrencilerin başarılarını artırarak
          özgüven kazanmalarını sağlar. Öğretmenlerin birebir ilgisi,
          öğrencilerin potansiyelini ortaya çıkarır. Bu yüzden, özel ders artık
          bir lüks değil, ihtiyaç olarak görülmektedir.{" "}
        </p>
        <div className="flex justify-center">
          <Link to={`/basvur/try`}>
          <Button>ÜCRETSİZ DENEMNE DERSİ AL</Button>

          </Link>
        </div>
      </div>
      <div className=" order-1 md:order-2 sm:mr-8 lg:ml-12 lg:w-1/3 mx-12 mt-2 lg:mt-0 lg:flex justify-center relative">
        <div className="absolute transform translate-x-28 translate-y-8 w-9/12 z-0">
          <img
            src={imageSrc}
            alt="Language Tutor"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="absolute transform translate-x-16 translate-y-6 w-10/12 z-10">
          <img
            src={imageSrc}
            alt="Language Tutor"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="relative w-full z-10">
          <img
            src={imageSrc}
            alt="Language Tutor"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Info;
