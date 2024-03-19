import { HiArrowSmallRight } from "react-icons/hi2";

const Info = () => {
  return (
    <div className="bg-orange-300 sm:grid sm:gap-4 sm:grid-cols-2">
      <div className="hidden sm:flex sm:items-center sm:place-content-center p-10">
        <div className="max-w-sm p-6 border rounded-3xl shadow bg-gray-300 ">
          <p className="mb-3 font-normal ">
            Esma Öğretmen sitesine üye değilsen çok şey kaçırıyorsun demektir.
            Şimdi üye ol veya giriş yap. Ayrıcalıklardan faydalanmaya başla.
          </p>
          <div className="flex justify-between mt-20">
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Giriş Yap
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Üye Ol
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="p-10">
        <div className="rounded-3xl bg-white p-10">
          <div className=" text-lg font-bold mb-4">
            ÖZEL DERS NEDEN GEREKLİDİR?
          </div>
          <div>
            Öğrenciler eğitim hayatlarında kalabalık sınıflı derslerde ön plana
            çıkmakta ve gerçek seviyelerini göstermekte zorlanmaktadır.Eğitimin
            en önemli faktörü iletişimdir. İletişimi yüksek olan öğretmenlerden
            alınan özel dersler, öğrencilerin başarı seviyelerini çok daha fazla
            artırıp, onlara öz güven katmaktadır. Öğretmenlerin verdiği özel
            derslerde, öğrencilerle birebir ilgilenmesi, sosyal hayatlarında
            onlara vizyon olması, öğrencinin başarı takibini raporlaması birçok
            öğrencinin içindeki devi uyandırmaktadır. O yüzden özel ders eğitim
            hayatında artık bir lüks değil, bir ihtiyaçtır.
          </div>
          <div className=" border-solid border-2 border-black p-2 w-4/6 cursor-pointer hover:bg-orange-200 transition mx-auto rounded-3xl text-center mt-4">
            <a href="/">Özel Ders Talep Et</a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Info;
