import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Info = () => {
  const imageSrc = "https://i.ibb.co/dfZ62Kb/mainpage.png";
  // return (
  //   <div className="flex flex-col md:px-36 md:flex-row justify-between items-center p-6  shadow-xl ">
  //     <div className="relative rounded-lg shadow-lg md:w-2/5 max-h-96 ">
  //       <img
  //         src="https://i.ibb.co/dfZ62Kb/mainpage.png"
  //         alt="Surprised child"
  //         className=" max-h-96 md:w-full"
  //       />
  //       <div className=" absolute flex bottom-1 right-1">
  //       <div className=" pt-0"><Link className="inline-block" to="/sign-up"><button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-l py-2 px-4 rounded-lg text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20 flex items-center gap-2" type="button">Üye Ol<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-4 w-4"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path></svg></button></Link></div>
  //       <div className="pt-0"><Link className="inline-block" to="/sign-in"><button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-l py-2 px-4 rounded-lg text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20 flex items-center gap-2" type="button">Giriş Yap<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-4 w-4"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path></svg></button></Link></div>
  //       </div>

  //     </div>
  //     <div className="md:w-1/2 md:ml-6 mt-6 md:mt-0 ">
  //       <h2 className="text-3xl font-bold mb-4">Özel Ders Neden Gereklidir?</h2>
  //       <p className="mb-4">
  //         Öğrenciler, kalabalık sınıf ortamlarında kendilerini ifade etmekte ve gerçek potansiyellerini ortaya koymakta zorlanırlar. Eğitimin en önemli unsuru olan iletişim, özel derslerde daha güçlü bir şekilde kurulabilir. İyi iletişim becerilerine sahip öğretmenler tarafından verilen özel dersler, öğrencilerin başarılarını önemli ölçüde artırarak onlara özgüven kazandırır. Öğretmenlerin özel derslerde öğrencilerle birebir ilgilenmesi, onların sosyal yaşamlarına yön vermesi ve başarılarını düzenli olarak takip etmesi, birçok öğrencinin içindeki potansiyeli ortaya çıkarmaktadır. Bu nedenle, günümüzde özel ders artık bir lüks değil, bir ihtiyaç olarak görülmektedir.
  //       </p>
  //       <div className="flex flex-col mb-4">
  //         <div>
  //         <h2 className="text-3xl font-bold mb-4">Neden Esma Öğretmen?</h2>

  //         </div>

  //         <div className="flex mb-4">
  //         <div className="flex items-center mr-4">
  //           <svg className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
  //             <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707a1 1 0 00-1.414-1.414L9 11.586 7.707 10.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  //           </svg>
  //           <span>Yılların Tecrübesi</span>
  //         </div>
  //         <div className="flex items-center mr-4">
  //           <svg className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
  //             <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707a1 1 0 00-1.414-1.414L9 11.586 7.707 10.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  //           </svg>
  //           <span>Kişiye Özel Plan</span>
  //         </div>
  //         <div className="flex items-center">
  //           <svg className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
  //             <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707a1 1 0 00-1.414-1.414L9 11.586 7.707 10.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  //           </svg>
  //           <span>İlerici Yaklaşım</span>
  //         </div>

  //         </div>
  //         <Link  to={"/apply/try"}><button className=" border-2 items-center  border-black flex align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-l py-2 px-4 rounded-lg text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20 justify-center gap-2 w-full" type="button">DENEME DERSİ AYIRT<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-4 w-4"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path></svg></button></Link>

  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="flex px-6 md:px-0  md:ml-32 md:mr-48 flex-col justify-center lg:flex-row md:h-[300px] lg:h-[500px] items-center">
      <div className="order-2 md:order-1 mt-8 lg:mt-0 w-full lg:w-1/2 pb-8">
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
