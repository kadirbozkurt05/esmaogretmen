const WhyLesson = () => {
  return (
    <div className="flex flex-row p-4 items-center shadow-xl">
      <div className="md:w-1/4 md:p-6 md:flex hidden">
        <img
          src="https://i.ibb.co/prMYsS5/logo-no-background.png"
          className="bg-orange-300 rounded-full"
          alt="Logo"
        />
      </div>
      <div className="md:w-3/4 p-6">
        <div className=" text-lg font-bold italic mb-6">
          NEDEN ÖZEL DERS VERİYORUM?
        </div>
        6 yıllık okul tecrübemin yanı sıra, bu süreçte verdiğim özel dersleri
        gözlemlediğimde, öğrenciyle bire bir iletişim kurulduğunda başarının ve
        gelişimin çok daha fazla olduğunu gözlemledim. <br /> Özel ders verdiğim
        öğrencilerin okulda ve sınavlarda kazandığı başarıları görmek, kendimi
        özel ders konusunda daha motive olmuş hissetmemi sağladı. <br /> Bu yüzden
        kariyerime özel ders vererek devam etme kararı aldım.
      </div>
    </div>
  );
};

export default WhyLesson;
