import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import ResetPassword from "../ResetPassword/ResetPassword";
import useFetch from "../../../hooks/useFetch";
import { useUser } from "./../../../context/userContext.jsx";
import { auth } from "./../../../../firebase.js";
import {
  browserLocalPersistence,
  browserSessionPersistence,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getAuth } from "firebase/auth";
const SignInForm = () => {
  const [uid, setUid] = useState("");
  const { setUser, user } = useUser();
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

  useEffect(() => {
    if (auth.currentUser && user) {
      navigate("/");
    }
  }, []);

  const [persistenceType, setPersistenceType] = useState(null);

  // useEffect(()=>{
  //   if(checked){
  //     setPersistenceType(browserLocalPersistence);
  //   }else{
  //     setPersistenceType(browserLocalPersistence);
  //   }

  // },[checked])

  useEffect(() => {
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {});
        return () => unsubscribe();
      })
      .catch((error) => {
        console.error("Error setting persistence:", error);
      });
  }, []);

  useEffect(() => {
    const getUser = async () => {
      if (uid !== "") {
        try {
          const isProduction = process.env.NODE_ENV === "production";
          const url = isProduction
            ? `https://esma-c.netlify.app/.netlify/functions/api`
            : `/api`;

          const idToken = await auth.currentUser.getIdToken();
          const response = await fetch(`${url}/user/${uid}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${idToken}`,
            },
          });
          const data = await response.json();

          if (data?.firstName) {
            localStorage.setItem("user", JSON.stringify(data));

            setUser(data);
            setShowModal(true);
            setTimeout(() => {
              setShowModal(false);
              navigate("/");
            }, 1500);
          } else {
            setErrorMessage(
              "Giriş esnasında bir hata oluştu. Lütfen daha sonra yeniden deneyin."
            );
            setShowErrorModal(true);
          }
        } catch (error) {
          await auth.signOut();
        }
      }
    };

    getUser();
  }, [uid]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      setUid(auth.currentUser?.uid);
    } catch (error) {
      if (error.message.includes("auth/invalid-credential")) {
        setErrorMessage(
          "E-posta ile şifre eşleşmiyor. Lütfen şifrenizi kontrol edip yeniden deneyin."
        );
        setShowErrorModal(true);
      } else if (error.message.includes("has been temporarily disabled")) {
        setErrorMessage(
          "Çok fazla başarısız giriş denemesi nedeniyle bu hesaba erişim geçici süre ile engellenmiştir. Lütfen daha sonra tekrar deneyiniz."
        );
      }
    }
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
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            {showResetPassword ? (
              <ResetPassword />
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
      </section>
    </>
  );
};

export default SignInForm;
