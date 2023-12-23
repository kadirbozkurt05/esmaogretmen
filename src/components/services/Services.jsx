import Footer from "../generic/Footer";
import Navbar from "../generic/Navbar";
import "./services.css";
import "../../../index.css";


export default function Services(){
    return(
        <>
        <Navbar />
        <div className="services-container">
<div className="services">
    <div>
        <img src="facebook.png" alt="item-logo" />
        <h3>Planlı Abonelik</h3>
        <p>Site üzerinden alabileceğiniz en avantajlı hizmet tekrar eden aboneliklerdir. Bir abonelik aldığınızda, bu abonelik siz iptal edene kadar devam eder ve fiyat olarak en avatajlı teklifleri bu aboneliklerle yakalarsınız. Bu aboneliklerde memnun kalmazsanız para iade garantisi verilmektedir. Ayrıntılı bilgiyi abonelik paketleri içerisinde bulabilirsiniz. Ödemeler online kanaldan yapılır ve maalesef şu anda sistemimiz TL bazında ödeme kabul etmemektedir. Kredi kartıyla abonelik satın alırsınız ve aboneliğin tanımına göre sizden haftalık veya aylık olarak bu ödemeler otomatik olarak tahsil edilir. İstediğiniz zaman aboneliğinizi iptal edebilirsiniz.</p>
        
    </div>
    <button>ABONELİKLERİ GÖR</button>
</div>
<div className="services"><div>
        <img src="facebook.png" alt="item-logo" />
        <h3>Online Ödeme İle Ders Saati Satın Alma</h3>
        <p>Bu hizmetimizde abonelik değil, ders saati satın alırsınız. Ödemeleri kredi kartından tek seferde veya taksitler halinde yapabilirsiniz. Ders saatiniz bittiğinde yeniden satın almanız gerekir. Ders saati satın alırken kredi kartı ile ödeme yaparsınız ve fiyatlar TL üzerinden tahsil edilir. Bu hizmetimizde para iade garantisi yoktur. Ders saati satın almadan önce randevu talep edip ücretsiz görüşme yapabilir veya deneme dersi satın alabilirsiniz. Deneme dersini online satın alabileceğiniz gibi hesaba para transferi ile de ödeme yapabilirsiniz. Bu hizmetimizde kupon indirimleri kullanılamamaktadır.</p>
        
    </div>
    <button>DERS SAATİ SATIN AL</button></div>
<div className="services"><div>
        <img src="facebook.png" alt="item-logo" />
        <h3>Bire Bir Görüşme ve Banka Transferi</h3>
        <p>Bu hizmetimiz klasik yöntemlerle ödeme yapabilmenize imkan sağlar. Bunun için öncelikle bir görüşme ayarlamalı ve almak istediğiniz ders saatini belirtmelisiniz. İsterseniz öncesinde bir deneme dersi yapabilir ve memnun kalırsanız bire bir görüşme sonunda öğretmenimizle anlaşıp ders ücretlerini bankaya transfer yaparak ödeyebilirsiniz. Bu hizmetimizde önden bir ödeme yapılmayacağı için iade garantisi söz konusu değildir. Görüşme yapıldıktan sonra ödemenin ne zaman ve ne şekilde yapılacağı belirlenir. Bu hizmetimizde kupon indirimleri kullanılamamaktadır.</p>
        
    </div><button>GÖRÜŞME AYARLA</button></div>
        </div>
        <Footer />
        </>
    )
}