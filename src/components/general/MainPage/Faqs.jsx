import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const Faqs = () => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="md:px-36 p-6">
      <h1 className=" text-4xl text-center">SIK SORULAN SORULAR</h1>
      <Accordion className="static" open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          Fiyatlar neden diğer sitelere göre daha ucuz?
        </AccordionHeader>
        <AccordionBody>
          Diğer siteler genellikle ticari şirketler olup, öğretmenler bu
          platformlarda çalışmaktadır. Ödediğiniz ücretin büyük bir kısmı
          şirketin komisyonu olarak kesilmekte ve öğretmene yalnızca küçük bir
          kısmı ulaşmaktadır. Ben ise doğrudan, aracı olmadan hizmet verdiğim
          için bu komisyon maliyetlerinden kaçınarak daha uygun fiyatlar
          sunabiliyorum. Bu sayede kaliteli eğitimi daha erişilebilir hale
          getirmeyi amaçlıyorum.
        </AccordionBody>
      </Accordion>
      <Accordion className="static" open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          En az kaç aylık abonelik satın almam gerekir?
        </AccordionHeader>
        <AccordionBody>
          Hiç bir abonelik satın almanız gerekmez. Ben velilerimle bire bir
          iletişimde olurum ve isteyen istediği zaman ders almayı bırakabilir.
        </AccordionBody>
      </Accordion>
      <Accordion className="static" open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          Derslere ara vermek istediğimizde daha sonra yeniden başlayabilir
          miyiz?
        </AccordionHeader>
        <AccordionBody>
          Her ne kadar öğrencinin gelişimi için tatiller dışınnda ara vermeyi
          önermesem de, istediğiniz zaman dersi bırakabileceğiniz gibi, ara da
          verebilirsiniz.
        </AccordionBody>
      </Accordion>
      <Accordion className="static" open={open === 4}>
        <AccordionHeader onClick={() => handleOpen(4)}>
          Ders materyalleri için ekstra ücret ödemem gerekiyor mu?
        </AccordionHeader>
        <AccordionBody>
          Benim hazırladığım hiç bir materyale ücret ödemeniz gerekmiyor. Ancak
          öğrencinin gelişimine katkıda bulunacağını düşündüğüm kaynaklar satın
          alınması gerektiğinde bunu size bildiriyorum ve almak isterseniz
          alıyorsunuz.
        </AccordionBody>
      </Accordion>
      <Accordion className="static" open={open === 5}>
        <AccordionHeader onClick={() => handleOpen(5)}>
          Deneme dersi ücreti ne kadar?
        </AccordionHeader>
        <AccordionBody>Deneme dersi tamamen ücretsizdir. </AccordionBody>
      </Accordion>
    </div>
  );
};

export default Faqs;
