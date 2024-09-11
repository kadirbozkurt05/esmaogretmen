import { useState } from "react";
import Details from "./Details";

const ServicesComponent = () => {
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  return (
    <>
    {showDetails && (
          <Details
            title={title}
            body={body}
            close={() => setShowDetails(false)}
          />
        )}
      <div className="flex flex-col md:grid md:grid-cols-3 gap-12 pt-6">
        

        <div className=" flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className=" mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <img
            src="https://i.ibb.co/Z68rzRh/one-to-one.jpg"
              alt="img-blur-shadow"
              layout="fill"
            />
          </div>
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Birebir Online Canlı Ders
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Birebir online canlı derslerle öğrencilerimin ihtiyaçlarına ve
              hızına göre bireysel destek sunuyorum.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
              onClick={() => {
                setTitle("Birebir Online Canlı Ders");
                setBody(
                  "Birebir online canlı derslerle öğrencilerimin ihtiyaçlarına ve hızına göre bireysel destek sunuyorum. Öğrencilerimin konuları daha iyi anlayabilmeleri için interaktif bir öğrenme ortamı oluşturuyorum. Görsel ve işitsel materyaller kullanarak dersleri daha eğlenceli ve verimli hale getiriyorum. Öğrencilerim, evlerinin konforunda kişiselleştirilmiş bir eğitim alırken, ders esnasında sorularını anında sorarak öğrenme süreçlerini hızlandırabiliyorlar."
                );
                setShowDetails(true);
              }}
            >
              Daha Fazla Bilgi
            </button>
          </div>
        </div>
        <div className=" flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className=" mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <img
            src="https://i.ibb.co/4V4MQkH/free-material.jpg"
              alt="img-blur-shadow"
              layout="fill"
            />
          </div>
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Ücretsiz Materyal Paylaşımı
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Öğrencilerime dersleri destekleyici notlar, testler ve ek
              kaynaklar gibi ücretsiz materyaller sağlıyorum.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
              onClick={() => {
                setTitle("Ücretsiz Materyal Paylaşımı");
                setBody(
                  "                  Öğrencilerime dersleri destekleyici notlar, testler ve ek kaynaklar gibi ücretsiz materyaller sağlıyorum. Bu materyaller, öğrencilerimin ders dışında da konuları pekiştirmesine yardımcı oluyor. Özenle seçilmiş ve sürekli güncellenen kaynaklarla, öğrencilerimin ihtiyaç duydukları her türlü bilgiye kolayca ulaşmalarını sağlıyorum. Öğrenme sürecini destekleyen bu materyaller sayesinde, öğrencilerim konuları daha derinlemesine anlayabiliyor."
                );
                setShowDetails(true);
              }}
            >
              Daha Fazla Bilgi
            </button>
          </div>
        </div>
        <div className=" flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className=" mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <img
            src="https://i.ibb.co/QDf7MF5/weekli-feedbacks.jpg"
              alt="img-blur-shadow"
              layout="fill"
            />
          </div>
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Haftalık Geri Bildirim
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Her hafta öğrencilerime güçlü ve zayıf yönlerini belirten kişisel
              geri bildirimler veriyorum.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
              onClick={() => {
                setTitle("Haftalık Geri Bildirim");
                setBody(
                  "                 Her hafta öğrencilerime güçlü ve zayıf yönlerini belirten kişisel geri bildirimler veriyorum. Bu geri bildirimler sayesinde öğrencilerim, hangi konularda başarılı olduklarını ve hangi alanlarda daha fazla çalışmaları gerektiğini net bir şekilde görebiliyorlar. Öğrencilerimin gelişimini sürekli takip ederek, onlara başarıya giden yolda rehberlik ediyorum ve motivasyonlarını yüksek tutuyorum. Ayrıca, bu süreçte ailelerle de düzenli olarak iletişim kurarak, öğrenci ilerlemesi hakkında bilgilendirme yapıyorum."
                );
                setShowDetails(true);
              }}
            >
              Daha Fazla Bilgi
            </button>
          </div>
        </div>
        <div className=" flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className=" mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <img
src="https://i.ibb.co/TktP2kn/homework-check.jpg"
alt="img-blur-shadow"
              layout="fill"
            />
          </div>
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Haftalık Ödev Kontrolü
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Öğrencilerimin ödevlerini haftalık olarak kontrol edip detaylı bir
              şekilde değerlendiriyorum.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
              onClick={() => {
                setTitle("Haftalık Ödev Kontrolü");
                setBody(
                  "                 Öğrencilerimin ödevlerini haftalık olarak kontrol edip eksiklerini ve doğrularını detaylı bir şekilde değerlendiriyorum. Bu sayede öğrencilerim, yaptıkları hataları fark ederek, doğru çözümler üzerinde çalışabiliyorlar. Ödev kontrolleri, öğrencilerimin sorumluluk bilincini geliştirmelerine ve derslere daha disiplinli bir şekilde hazırlanmalarına yardımcı oluyor. Ayrıca, ödevler üzerinden verdiğim geri bildirimlerle, öğrencilerimin öğrenme sürecini destekliyorum."
                );
                setShowDetails(true);
              }}
            >
              Daha Fazla Bilgi
            </button>
          </div>
        </div>
        <div className=" flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className=" mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <img
            src="https://i.ibb.co/R0gzrvh/answer-questions.jpg"
              alt="img-blur-shadow"
              layout="fill"
            />
          </div>
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Ders Saati Dışında Soru Cevaplama
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Ders saatleri dışında da öğrencilerimin sorularını yanıtlıyor ve
              ihtiyaç duydukları desteği sağlıyorum.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
              onClick={() => {
                setTitle("Ders Saati Dışında Soru Cevaplama");
                setBody(
                  "                 Ders saatleri dışında da öğrencilerimin sorularını yanıtlıyor ve ihtiyaç duydukları desteği sağlıyorum. Belirli saatlerde online olarak ulaşılabilir durumda olup, öğrencilerimin anlamadıkları konularda anında yardımcı oluyorum. Bu esneklik sayesinde, öğrencilerim öğrenme süreçlerinde karşılaştıkları engelleri hızla aşabiliyorlar. Ders dışında da yanlarında olduğumu bilmek, öğrencilerime ekstra güven ve motivasyon sağlıyor."
                );
                setShowDetails(true);
              }}
            >
              Daha Fazla Bilgi
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesComponent;
