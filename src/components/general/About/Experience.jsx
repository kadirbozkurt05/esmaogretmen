const Experience = () => {
  return (
    <div className="flex flex-row p-4 items-center shadow-xl">
      <div className="md:w-3/4 p-6">
        <div className=" text-lg font-bold italic mb-6">TECRÜBELERİM</div>
        7 yıldır okulda öğretmenlik yapmaktayım. <br /> Bunun yanı sıra 20'den fazla öğrenciye
        özel ders verdim. Gerek okumayı sökmekte zorlanan 1. sınıf
        öğrencilerine, gerekse ileriki safhalarda öğrenimine devam eden ilkokul
        öğrencilerine özel ders verdim ve hepsinde de gözle görülür başarılar
        yakaladım. <br /> Pek çok öğrencimin velisinden bu yönde takdirler aldım ve bu
        motivasyonla okulu tamamen bırakıp kariyerime sadece özel ders vererek
        devam etme kararı aldım. 
      </div>
      <div className="md:w-1/4 md:p-6 md:flex hidden">
        <img
          src="https://i.ibb.co/prMYsS5/logo-no-background.png"
          className=" bg-orange-300 rounded-full"
          alt="Logo"
        />
      </div>
    </div>
  );
};

export default Experience;
