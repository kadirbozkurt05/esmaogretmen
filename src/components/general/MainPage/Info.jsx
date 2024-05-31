import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";

const Info = () => {
  return (
    <div className="sm:grid md:h-[36rem] sm:gap-4 sm:grid-cols-2 md:flex md:flex-row md:px-36 md:bg-gray-200 md:items-center">
      <div className="rounded-2xl md:flex-none  md:h-[24rem] hidden md:flex">
        
        <img className=" rounded-3xl "  src="https://i.ibb.co/dfZ62Kb/mainpage.png" alt="student" />
      </div>

      <div className="md:flex-1">
        
    <Card className="flex md:h-[24rem] ml:h-[24rem] static">
      <CardBody>
        
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Hemen Yerinizi Ayırtın
        </Typography>
        <Typography>
          Çocuğunuza özel ders aldırmak için servet ödemenize gerek yok. Diğer platformların aksine burada benimle doğrudan iletişime geçin ve hiç bir komisyon ücreti ödemeden uygun fiyatlı ve yüksek kaliteli özel derslere başlayın. <br /><br /> <div className=" font-bold">ÜSTELİK HİÇ BİR PLATFORMDA OLMAYAN <Link to={"/pricing"} className=" text-black hover:underline">ÜCRETSİZ DENEME DERSİ</Link> HİZMETİ SAYESİNDE HİÇ BİR ÜCRET ÖDEMEDEN ÇOCUĞUNUZ İÇİN EN DOĞRU KARARI VEREBİLİRSİNİZ.</div><br />
          Ayrıca yıllık, dönemlik gibi uzun süreli abonelikler almadan, dilediğiniz zaman derslere ara verebilir, istediğiniz zaman ders almayı bırakabilirsiniz.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link to={"http://localhost:5173/apply/try"} className="inline-block">
          <Button size="sm" variant="text" className="flex items-center gap-2">
            Deneme Dersi Talebi Oluştur
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </Link>
      </CardFooter>
    </Card>
      </div>
    </div>
  );
};
export default Info;
