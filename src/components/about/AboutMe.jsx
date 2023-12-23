import Footer from "../generic/Footer";
import Navbar from "../generic/Navbar";
import "./aboutme.css";
import "../../../index.css";


export default function AboutMe() {
  return (
    <>
    <Navbar />
      <section class="about-me-section">
        <div class="about-me-content">
          <div>
            <div className="content-left-1">
              <h1>Merhaba, Ben Esma..</h1>
              <p>
                Dinamik ve tecrübeli, çağın gerektirdiği yaklaşımlarla eğitim
                veren bir öğretmenle tanışmak üzeresiniz...
              </p>
            </div>
            <div className="content-right-1">
              <img src="picture.jpeg" alt="photo" />
            </div>
          </div>


          <div><div className="content-left">
              <h2>Özel Ders Tecrübesi</h2>
            </div>
            <div className="content-right">
              <p>
​
*6 yıllık özel okul öğretmenliğimin yanında her yıl 2 ila 5 arasında özel ders verdiğim öğrenci olmuştur. <br /><br />

*İlkokul seviyesinde her sınıfa ders verdim, şu an her kademede öğrencilerim bulunmaktadır. <br /><br />

*Mesleğime aşık olduğum için okuldan kalan zamanlarda özel ders vermek benim için bir iş değil hobi haline geldi ve dersim olmadığı zamanlarda kendimi rahatsız hissettiğim zamanlar oldu.</p>
            </div></div>
          <div><div className="content-left">
              <h2>
Eğitim</h2>
            </div>
            <div className="content-right">
              <p>
*Lisans:
İbrahim Çeçen Üniversitesi, Sınıf Öğretmenliği Bölümü, 2016 <br /><br />
*Lise:
Cumhuriyet Lisesi, 2011</p>
            </div></div>
          <div><div className="content-left">
              <h2>Referanslar</h2>

            </div>
            <div className="content-right">
              <p>*Çalıştığım kurumlardaki yöneticilerim ve çalışma arkadaşlarım ve velilerim <br /><br />
*Özel ders verdiğim öğrencilerimin velileri <br /><br />
*Ve tabiki öğrencilerim en büyük referansımdır. İstenildiği takdirde görüşme sağlayabilirim.</p>
            </div></div>
        </div>
      </section>
      <Footer />
    </>
  );
}
