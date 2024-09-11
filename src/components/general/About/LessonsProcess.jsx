const LessonsProcess = () => {
  return (
    <div className="flex flex-row p-4 items-center shadow-xl">
      <div className="md:w-3/4 p-6">
        <div className=" text-lg font-bold italic mb-6">
          DERSLERİ NASIL İŞLERİM?
        </div>
        Derslerimize başlamadan önce öğrencimizin eksil olduğu konuları
        anlayabilmek adına bir seviye tespit sınavı yaparım. <br /> Öğrencinin ve
        velinin de görüşlerini alarak okul derslerine paralel bir şekilde veya
        eksik olunan konulara yoğunlaşarak derslerimi yaparım. <br /> Öğrenci merkezli
        bir yaklaşım benimsediğimden, öğrenci dersi işlerken konuyu öğrenmenin
        yanı sıra, öğrenme becerisini de geliştireceğinden, ilerleyen zamanlarda
        konuları kavraması daha hızlı olacaktır. <br /> Dönem dönem gelişim takibi
        amacıyla yeni sınavlar yaparak öğrencinin gelişimini dinamik bir şekilde
        takip ederim.
      </div>
      <div className="hidden md:flex md:w-1/4 md:p-6">
        <img
          src="https://i.ibb.co/prMYsS5/logo-no-background.png"
          className=" bg-orange-300 rounded-full"
          alt="Logo"
        />
      </div>
    </div>
  );
};

export default LessonsProcess;
