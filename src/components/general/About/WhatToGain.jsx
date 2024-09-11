const WhatToGain = () => {
  return (
    <div className="flex flex-row p-4 items-center shadow-xl">
      <div className="md:w-1/4 md:p-6 hidden md:flex">
        <img
          src="https://i.ibb.co/prMYsS5/logo-no-background.png"
          className="bg-orange-300 rounded-full"
          alt="Logo"
        />
      </div>
      <div className="md:w-3/4 p-6">
        <div className=" text-lg font-bold italic mb-6">
          SİZE NELER KAZANDIRABİLİRİM?
        </div>
        Öğrencilerime öncelikle kendine güven kazanmaları konusunda yardımcı
        olurum. <br /> Tek rakibinin kendisi olduğunu fark eden öğrenciler,
        diğerleriyle yarışıp, onlardan başarısız hissettiğinde demotive olmak
        yerine, her gün kendi gelişimini takip edip, gayret ve motivasyonla
        başarıyı yakalayacaktır. <br /> Öğrencilerime verdiğim en büyük kazanımın bu
        olduğunu düşünüyorum.
      </div>
    </div>
  );
};

export default WhatToGain;
