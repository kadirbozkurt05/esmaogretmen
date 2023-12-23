import "./subscribe.css";
import "../../../index.css";

export default function Subscribe(){
    return(
        <>
            <section class="subscribe-section">
        <div class="subscribe-content">
            <h2 class="subscribe-title">Bültene Abone Olun ve Tüm Haberleri İlk Siz Duyun</h2>
            <form class="subscribe-form">
            <div>
            <input type="email" class="subscribe-input" placeholder="E-Posta Adresinizi Ekleyin" required />
                        <button type="submit" class="subscribe-button">Abone Ol</button>
            </div>
                        

                
                
            </form>
        </div>
    </section>
        </>
    )
}