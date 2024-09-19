import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import { useUser } from "./../../../context/userContext.jsx";
import useFetch from "../../../hooks/useFetch.js";

const SignInForm = () => {
  const { user, refreshUser } = useUser();
  const navigate = useNavigate();
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    "Giriş sırasında bir hata oluştu. Lütfen internet bağlantınızı kontrol edip yeniden deneyin."
  );
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const onSuccess = (result) => {
    setData(result);
  };

  useEffect(() => {
    if (data) {
      if (data._id) {
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
          return refreshUser();
        }, 1000);
      } else {
        if (data?.message.includes("Invalid credentials")) {
          setErrorMessage(
            "E-posta ile şifre eşleşmiyor. Lütfen şifrenizi kontrol edip yeniden deneyin."
          );
        } else if (data?.message.includes("User not found!")) {
          setErrorMessage("Bu e-posta adresiyle bir kullanıcı bulunamadı!");
        } else {
          setErrorMessage(
            "Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz."
          );
        }
        setShowErrorModal(true);
      }
    }
  }, [data]);

  const { performFetch } = useFetch("/auth/login", onSuccess);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    performFetch({
      method: "POST",
      body: JSON.stringify(formData),
      credentials: "include",
    });
  };

  return (
    <>
      {showModal && (
        <Modal
          title={"Giriş Başarılı"}
          text={"Anasayfaya yönlendiriliyorsunuz..."}
        />
      )}
      {showErrorModal && (
        <Modal
          title={"Hata"}
          text={errorMessage}
          positiveButton={"Anladım"}
          positiveFunction={() => setShowErrorModal(false)}
        />
      )}
      <div className="fixed inset-0 flex items-center justify-center  bg-black bg-opacity-50 z-40">
          <div className=" bg-white rounded-lg shadow dark:border w-3/4 md:w-2/3 lg:w-3/4 xl:w-1/4 md:mt-0 xl:p-0 ">
          <div onClick={()=>refreshUser()} className="flex justify-end cursor-pointer px-4">x</div>

            {showResetPassword ? (
              // <ResetPassword />
              <div></div>
            ) : (
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight ">
                  Giriş Yap
                </h1>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 md:space-y-6"
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium "
                    >
                      E-posta:
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email || ""}
                      onChange={handleChange}
                      className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
                      placeholder="ahmet.yilmaz@example.com"
                      required
                    />
                  </div>
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
                      value={formData.password || ""}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
                      required
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          name="remember"
                          checked={checked}
                          onChange={() => {
                            setChecked(!checked);
                          }}
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="remember" className="text-gray-500 ">
                          Beni Hatırla
                        </label>
                      </div>
                    </div>
                    <div
                      onClick={() => setShowResetPassword(true)}
                      className=" cursor-pointer text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Şifremi Unuttum
                    </div>
                  </div>
                  <div className=" text-center">
                    <button
                      className="border p-2 rounded-xl w-1/2 bg-orange-300"
                      type="submit"
                    >
                      Giriş Yap
                    </button>
                  </div>

                  <div className="text-sm font-light text-gray-500 ">
                    Henüz hesabın yok mu?{"   "}
                    <Link
                      to="/sign-up"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Kayıt Ol
                    </Link>
                  </div>
                </form>
              </div>
            )}
          </div>
      </div>
    </>
  );
};

export default SignInForm;
