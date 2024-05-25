const Info = () => {
  return (
    <div className="sm:grid sm:gap-4 sm:grid-cols-2 md:flex md:flex-row md:px-32 md:bg-gray-200 md:w-screen md:items-center">
      <div className="rounded-2xl md:flex-none hidden md:flex md:w-1/3">
        {/* <div className="flex flex-col justify-around rounded-3xl bg-cover bg-white bg-opacity-60 p-10 md:min-h-[424px]">
          <div className=" md:text-2xl font-serif">
            Hala üye değil misin? Hemen Üye Ol ve Ayrıcalıklardan faydalanmaya
            başla.
          </div>

          <div className="flex flex-row justify-between">
            <div className=" border-solid border-2 border-black p-2 w-1/3 cursor-pointer hover:bg-red-300 transition mx-auto rounded-3xl text-center mt-4">
              <Link
                className="flex flex-row justify-between items-center"
                to="/sign-up"
              >
                Üye Ol <HiArrowSmallRight />{" "}
              </Link>{" "}
            </div>
            <div className=" border-solid border-2 border-black p-2 w-1/3 cursor-pointer hover:bg-red-300 transition mx-auto rounded-3xl text-center mt-4">
              <Link
                className="flex flex-row justify-between items-center"
                to="/sign-in"
              >
                Giriş Yap <HiArrowSmallRight />{" "}
              </Link>{" "}
            </div>
          </div>
        </div> */}
        <img className=" rounded-3xl "  src="/student.png" alt="student" />
      </div>

      <div className="py-10 px-6 md:flex-1 md:w-1/3">
        <div className="rounded-3xl p-10">
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
            <a href="/">Ücretsiz Deneme Dersi Talep Et</a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Info;
