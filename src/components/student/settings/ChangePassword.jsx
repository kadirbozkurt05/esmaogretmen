import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";



const ChangePassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: "",
    repeatPassword: "",
    remember: false,
  });
  useEffect(()=>{
    cancelFetch();
  },[])

  const onSuccess = () => {
    navigate("/");
  };

  const { error, loading, performFetch, cancelFetch } = useFetch(
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
        body: formData,
      });
    }
  };

  if(error){
    console.log(error.message);
  }

  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight ">
              Parolayı Değiştir
            </h1>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6"
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
    </section>
  );
};

export default ChangePassword;
