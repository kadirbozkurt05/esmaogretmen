import "./teacherbox.css";
import "../../../index.css";
import {useNavigate} from "react-router-dom";

const TeacherBox = () => {

  const  navigate = useNavigate();
  function handleOnclick(){
    navigate("/trial");
  }
  return (
    <>
    <div class="teacher-box">
        <div>
          <div className="teacher-box-left">
          <h1 className="teacher-info-heading">Çocuğunuzun tüm potansiyelini ortaya çıkarmak için bire bir eğitim</h1>
          <p class="teacher-info-paragraph">En ilham verici öğretmeninizin kendinizi nasıl hissettirdiğini hatırlıyor musunuz? Kişiye özel bire bir 
            eğitimle çocuğunuz için bu hissi yeniden yakalayın.</p>
          <button class="randevu-button" onClick={handleOnclick}>Ücretsiz deneme dersinizi ayırtın</button><br /><br />
          <div><a href="/services">Hizmetler<img src="arrow.png" alt="arrow" width={20}/></a></div>
          
          </div >
          <div className="teacher-box-right">
          <img src="students.avif" alt="students"/>
          </div>
            
        </div>
        <div class="teacher-info-img"></div>
    </div>
    <div className="stats">
      <div>20+ Öğrenci</div>
      <div>7 Yıllık Tecrübe</div>
      <div>Ücretsiz Deneme Dersi</div>
    </div>
    </>
    
  )
}

export default TeacherBox;
