import { Link } from "react-router-dom";

const PricingComponent = () => {
  return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="flex flex-col">
          <div className="text-center font-semibold flex flex-col">
            <h1 className="text-5xl">
              <span className="text-blue-700 tracking-wide">
                Her Bütçeye Uygun Özel Ders{" "}
              </span>
            </h1>
            <p className="pt-6 text-xl text-gray-400 font-normal w-full px-8 md:w-full">
              Detaylı bilgi için iletişime geçebilirsiniz. Aşağıdaki fiyatlar
              öğrencinin durumuna göre ve yapılacak görüşmelere göre değişkenlik
              gösterir. <br /> Fiyatlar sadece bilgilendiem amaçlıdır.
            </p>
          </div>
          <div className="md:pt-24 pt-10 flex flex-col md:flex-row items-center self-center">
            <div className="w-96 h-[28rem] p-8 bg-white text-center rounded-3xl mb-16 pr-16 shadow-xl">
              <h1 className="text-black font-semibold text-2xl">Temel</h1>
              <p className="pt-2 tracking-wide">
                <span className="text-gray-400 align-top">TL </span>
                <span className="text-3xl font-semibold">400</span>
                <span className="text-gray-400 font-medium">/ 45 dakika</span>
              </p>
              <hr className="mt-4 border-1" />
              <div className="pt-8">
                <p className="font-semibold text-gray-400 text-left">
                  <span className="pl-2">
                    45 dakikalık <span className="text-black">online ders</span>
                  </span>
                </p>
                <p className="font-semibold text-gray-400 text-left pt-5">
                  <span className="pl-2">
                    Öğrenci Odaklı{" "}
                    <span className="text-black">Bire Bir Ders</span>
                  </span>
                </p>
                <p className="font-semibold text-gray-400 text-left pt-5">
                  <span className="pl-2">
                    <span className="text-black">Ücretsiz</span> materyal
                    paylaşımı
                  </span>
                </p>
                <p className="font-semibold text-gray-400 text-left pt-5">
                  <span className="pl-2">
                    <span className="text-black">Haftalık</span> Geri Bildirim
                  </span>
                </p>

                <Link to={`/apply/basic`} className="">
                  <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                    <span className="font-medium">Görüş</span>
                  </p>
                </Link>
              </div>
            </div>
            <div className="w-80 p-8 h-[28rem] h-172 bg-gray-900 text-center mb-16 rounded-3xl text-white border-4 shadow-xl border-white transform scale-125">
              <h1 className="text-white font-semibold text-2xl">
                DENEME DERSİ
              </h1>
              <p className="pt-2 tracking-wide">
                <span className="text-gray-400 align-top">TL </span>
                <span className="text-3xl font-semibold">0</span>
                <span className="text-gray-400 font-medium">/ 30 dakika</span>
              </p>
              <hr className="mt-4 border-1 border-gray-600" />
              <div className="pt-8">
                <p className="font-semibold text-gray-400 text-left">
                  <span className="pl-2">
                    30 dakika <span className="text-white"> Online Ders</span>
                  </span>
                </p>
                <p className="font-semibold text-gray-400 text-left pt-5">
                  <span className="pl-2">
                    Ders Sonu <span className="text-white">Geri Bildirim</span>
                  </span>
                </p>

                <Link to={`/apply/try`} className="">
                  <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                    <span className="font-medium">Görüş</span>
                  </p>
                </Link>
              </div>
              <div className="absolute top-1 right-4">
                <p className="bg-blue-700 font-semibold px-4 py-1 rounded-full uppercase text-xs">
                  ÜCRETSİZ
                </p>
              </div>
            </div>
            <div className="w-96 p-8 h-[28rem] h-128 bg-white text-center rounded-3xl pl-16 shadow-xl">
              <h1 className="text-black font-semibold text-2xl">Özel</h1>
              <p className="pt-2 tracking-wide">
                <span className="text-gray-400 align-top">TL </span>
                <span className="text-3xl font-semibold">550</span>
                <span className="text-gray-400 font-medium">/ 45 dakika</span>
              </p>
              <hr className="mt-4 border-1" />
              <div className="pt-8">
                <p className="font-semibold text-gray-400 text-left">
                  <span className="pl-2">
                    Temel Plandaki <span className="text-black">her şey</span>
                  </span>
                </p>
                <p className="font-semibold text-gray-400 text-left pt-5">
                  <span className="pl-2">
                    <span className="text-black">Haftalık</span> Ödev Kontrolü
                  </span>
                </p>
                <p className="font-semibold text-gray-400 text-left pt-5">
                  <span className="pl-2">
                    <span className="text-black">Ders dışında</span> soru
                    cevaplama
                  </span>
                </p>

                <Link to={`/apply/advanced`} className="">
                  <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                    <span className="font-medium">Görüş</span>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default PricingComponent;
