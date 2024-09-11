const AboutMe = () => {
  return (
    <div className="flex flex-row p-4 items-center shadow-xl">
      <div className="md:w-3/4 p-6">
        <div className=" text-lg font-bold italic mb-6">HAKKIMDA</div>
        *6 yıllık özel okul öğretmenliğimin yanında her yıl 2 ila 5 arasında
          özel ders verdiğim öğrenci olmuştur. <br /> *İlkokul seviyesinde her sınıfa ders
          verdim, şu an 1. sınıf, 3. sınıf, 4.sınıf,5.sınıf olmak üzere 6 faal
          öğrencim bulunmaktadır. <br /> *Mesleğime aşık olduğum için okuldan kalan
          zamanlarda özel ders vermek benim için bir iş değil hobi haline geldi ve
          dersim olmadığı zamanlarda kendimi rahatsız hissettiğim zamanlar
          oldu. <br /> *Son 4 yılı aynı kurumda olmak üzere 6 yıldır öğretmenlik
          yapıyorum. <br /> *Çalıştığım kurumlarda, önceliğim öğrencilerimin faydası
          olmuştur ancak toplu ders vermenin verdiği dezavantajlar, özel derste
          alınan verimin okullarda alınmasının önüne geçmektedir. <br /> *Yıllardır özel
          ders de veren bir eğitimci olarak, her öğrencinin az veya çok özel derse
          ihtiyacı olduğunu düşünmekteyim. <br /> *Tecrübe ne kadar önemli olsa da genç
          nesillerle iletişim için genç ve dinamik de olmanın önemli olduğunu
          düşünüyorum.
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

export default AboutMe;
