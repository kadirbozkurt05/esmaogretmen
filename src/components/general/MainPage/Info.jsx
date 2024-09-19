import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Info = () => {
  const imageSrc = "/info-pic.png";

  return (
<div className="flex flex-col 2xl:flex-row items-center justify-center px-4 md:px-6 2xl:px-32 2xl:mt-8">
<div className="order-2 2xl:order-1 w-full 2xl:w-1/2 bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 p-6 2xl:p-12 rounded-3xl shadow-xl mt-6 2xl:mt-0">
  <h1 className="text-center text-2xl 2xl:text-3xl font-bold text-gray-800 mb-6">
    Özel Ders Neden Gereklidir?
  </h1>
  <p className="text-justify text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
    Öğrenciler, kalabalık sınıflarda kendilerini ifade etmekte ve potansiyellerini ortaya koymakta zorlanır. İletişim, özel derslerde daha güçlü kurulur ve bu dersler, öğrencilerin başarılarını artırarak özgüven kazanmalarını sağlar. Öğretmenlerin birebir ilgisi, öğrencilerin potansiyelini ortaya çıkarır. Bu yüzden, özel ders artık bir lüks değil, ihtiyaç olarak görülmektedir.
  </p>
  <div className="flex justify-center">
    <Link to={`/basvur/try`}>
      <button className="bg-gradient-to-r from-blue-500 to-green-400 text-white py-2 px-6 rounded-lg shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-green-500 transform hover:scale-105 transition duration-300 ease-in-out">
        ÜCRETSİZ DENEME DERSİ AL
      </button>
    </Link>
  </div>
</div>

  <div className="order-1 2xl:order-2 w-full 2xl:w-1/3 flex justify-center 2xl:ml-12 mt-6 2xl:mt-0 relative">
    <div className="absolute transform translate-x-10 translate-y-6 w-9/12 2xl:w-full z-0">
      <img
        src={imageSrc}
        alt="Language Tutor"
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>
    <div className="absolute transform translate-x-6 translate-y-4 w-10/12 2xl:w-full z-10">
      <img
        src={imageSrc}
        alt="Language Tutor"
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>
    <div className="relative w-full z-20">
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
