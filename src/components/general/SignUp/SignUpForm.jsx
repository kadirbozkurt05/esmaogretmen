import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";
import TermsAndConditions from "../TermsAndConditions.jsx/TermsAndConditions";
import useFetch from "../../../hooks/useFetch";

const SignUpForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    reference: "",
    phone: "",
    grade: "",
    school: "",
    email: "",
    password: "",
    instagram: null,
    confirmPassword: "",
    remember: false,
  });

  const onSuccess = (data) => {
    if (data.message.includes("User already exists")) {
      setErrorMessage("Bu e-posta adresi daha önce kullanılmış.");
      setShowErrorModal(true);
      return cancelFetch();
    } else {
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        navigate("/sign-in");
      }, 1000);
    }
  };

  const { isLoading, error, performFetch, cancelFetch } = useFetch(
    "/auth/register",
    onSuccess
  );

  if (error) {
    setErrorMessage(
      "Bu e-posta adresi zaten kullanılıyor. Şifrenizi unuttuysanız öğretmeninizle irtibata geçiniz."
    );

    setShowErrorModal(true);
  }

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;

    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [id]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage(
        "Şifreler uyuşmuyor. Lütfen iki şifrenin de aynı olduğundan emin olun."
      );
      setShowErrorModal(true);
      return;
    }

    performFetch({
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(formData),
    });
  };

  return (
    <>
      {showModal && (
        <Modal
          title={"Kayıt Başarılı"}
          text={"Giriş sayfasına yönlendiriliyorsunuz..."}
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

      <form
        className="bg-white max-w-screen-lg p-10 rounded-md shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]  mx-auto text-[#333] font-[sans-serif]"
        onSubmit={handleSubmit}
      >
        <div className=" text-center text-3xl mb-6">ÜYE FORMU</div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              İsim*
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="firstName"
              className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
              placeholder="Ahmet"
              required
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Soy İsim*
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="lastName"
              className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
              placeholder="Yılmaz"
              required
            />
          </div>
          <div>
            <label
              htmlFor="reference"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Referans Kodu (Opsiyonel)
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="reference"
              className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
              placeholder="x8ju97Jh"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Telefon Numarası*
            </label>
            <input
              onChange={handleChange}
              type="tell"
              required
              id="phone"
              className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
              pattern="^05[0-9]{9}$"
              placeholder="05XXXXXXXXX"
            />
          </div>
          <div>
            <label
              htmlFor="grade"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Sınıf
            </label>
            <input
              onChange={handleChange}
              type="number"
              id="grade"
              className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
              placeholder="4"
              required
            />
          </div>
          <div>
            <label
              htmlFor="school"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Okul*
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="school"
              className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
              placeholder="Cumhuriyet İlkokulu"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Instagram
          </label>
          <input
            onChange={handleChange}
            type="text"
            id="instagram"
            className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
            placeholder="Instagram Kullanıcı adınızı kaydetmediğiniz takdirde çekilişlerde gerekli şartları sağlamamış olursunuz."
          />
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            E-posta*
          </label>
          <input
            onChange={handleChange}
            type="email"
            id="email"
            className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
            placeholder="ahmet.yilmaz@example.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Şifre*
          </label>
          <input
            onChange={handleChange}
            type="password"
            id="password"
            className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
            placeholder="•••••••••"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="confirmPassword"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Şifre (Tekrar)*
          </label>
          <input
            onChange={handleChange}
            type="password"
            id="confirmPassword"
            className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
            placeholder="•••••••••"
            required
          />
          <div className=" text-black">* Zorunlu alanlar</div>
        </div>

        <div className="flex items-start">
          <div className="flex self-center mr-1 items-center h-5">
            <input
              onChange={handleChange}
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <div
            onClick={() => setShowTerms(!showTerms)}
            className="text-blue-600 mr-1 hover:underline cursor-pointer"
          >
            Şartlar ve koşulları
          </div>
          <div>kabul ediyorum.</div>
        </div>
        {showTerms && <TermsAndConditions />}
        <div className="text-center mt-6">
          <button
            type="submit"
            className="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-1/4 content-center px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Kayıt Ol
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
