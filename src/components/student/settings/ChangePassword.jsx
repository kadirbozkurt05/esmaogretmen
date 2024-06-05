import React, { useState, useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import Modal from "../../general/Modal/Modal";



const ChangePassword = () => {

const [showModal, setShowModal] = useState(false);
const [showErrorModal, setShowErrorModal] = useState(false);
  



  const [formData, setFormData] = useState({
    password: "",
    repeatPassword: "",
    remember: false,
  });

  const credential = JSON.parse(sessionStorage.getItem("credential")) || JSON.parse(localStorage.getItem("credential"));

  const {error: errorLogin, performFetch:performLogin} = useFetch(`/user/login`);

  useEffect(()=>{
    if(credential){
      performLogin({
        method:"POST",
        body: JSON.stringify(credential)
      })
    }
  },[])



  const onSuccess = () => {
    
     const credential = JSON.parse(sessionStorage.getItem("credential"));
     try {
      sessionStorage.setItem("credential",JSON.stringify({email:credential.email, password:formData.password}));
      if(localStorage.getItem("credential")){
      localStorage.setItem("credential",JSON.stringify({email:credential.email, password:formData.password}));
    }

     } catch (error) {
      //MODAL
     }

    


    setShowModal(true);

    setTimeout(()=>{
      setShowModal(false);

    },1000)
    
  };

  const { error, performFetch } = useFetch(
    "/user/change-password",
    onSuccess
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.repeatPassword) {
      alert("Parolalar eşleşmiyor!");
      return;
    } else {
      performFetch({
        method: "POST",
        body: JSON.stringify(formData),
      });
    }
  };

  if(error){
    setShowErrorModal(true);
  }

  return (
    <div className=" flex flex-col md:h-full justify-center items-center w-full">

{showModal && (
        <Modal
          title={"Parola Değiştirildi"}
          text={"Parola başarıyla değiştirildi."}
        />
      )}
      {showErrorModal && (
        <Modal
          title={"Hata"}
          text={"Şifre değiştirilirken bir hata oluştu. Lütfen daha sonra yeniden deneyiniz..."}
          positiveButton={"Anladım"}
          positiveFunction={() => setShowErrorModal(false)}
        />
      )}



      <div className="flex flex-col items-center w-full justify-center h-full lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 p-2 ">
          <div className="flex w-full flex-col">
            <h1 className=" mb-2 text-xl font-bold leading-tight tracking-tight ">
              Parolayı Değiştir
            </h1>
            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-col"
              action="#"
            >
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium "
                >
                  Şifre:
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="repeatPassword"
                  className="block mb-2 text-sm font-medium "
                >
                  Şifre (Yeniden):
                </label>
                <input
                  type="password"
                  name="repeatPassword"
                  id="repeatPassword"
                  value={formData.repeatPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
                  required
                />
              </div>

              <button type="submit">Onayla</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
