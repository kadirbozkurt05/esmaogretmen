import { useState } from "react";
import { useNavigate } from "react-router-dom";
import signUp from "../../../utils/auth/SignUp";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    reference: "",
    phone: "",
    class: "",
    school: "",
    email: "",
    password: "",
    confirm_password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [id]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("aaaa");
    try {
      await signUp(
        formData.email,
        formData.password,
        formData.first_name,
        formData.last_name,
        formData.reference,
        formData.class,
        formData.school,
        formData.phone
      );
      //TODO: BURAYA POPUP EKLE
      navigate("/");
    } catch (error) {
      //TODO: BURAYA POPUP EKLE
    }
  };

  return (
    <form
      className="bg-white max-w-screen-lg p-10 rounded-md shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]  mx-auto text-[#333] font-[sans-serif]"
      onSubmit={handleSubmit}
    >
      <div className=" text-center text-3xl mb-6">ÜYE FORMU</div>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            İsim*
          </label>
          <input
            onChange={handleChange}
            type="text"
            id="first_name"
            className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
            placeholder="Ahmet"
            required
          />
        </div>
        <div>
          <label
            htmlFor="last_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Soy İsim*
          </label>
          <input
            onChange={handleChange}
            type="text"
            id="last_name"
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
            Telefon Numarası (Opsiyonel)
          </label>
          <input
            onChange={handleChange}
            type="tel"
            id="phone"
            className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
            placeholder="555-211-12-12"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
          />
        </div>
        <div>
          <label
            htmlFor="class"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Sınıf (Opsiyonel)
          </label>
          <input
            onChange={handleChange}
            type="number"
            id="class"
            className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
            placeholder="4"
          />
        </div>
        <div>
          <label
            htmlFor="school"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Okul (Opsiyonel)
          </label>
          <input
            onChange={handleChange}
            type="number"
            id="school"
            className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
            placeholder="Cumhuriyet İlkokulu"
          />
        </div>
      </div>
      <div className="mb-6">
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
          htmlFor="confirm_password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
        >
          Şifre (Tekrar)*
        </label>
        <input
          onChange={handleChange}
          type="password"
          id="confirm_password"
          className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
          placeholder="•••••••••"
          required
        />
        <div className=" text-black">* Zorunlu alanlar</div>
      </div>

      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            onChange={handleChange}
            id="remember"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            required
          />
        </div>
        <label
          htmlFor="remember"
          className="ms-2 text-sm font-medium text-gray-900 "
        >
          <a href="#" className="text-blue-600 hover:underline ">
            Şartlar ve koşulları{" "}
          </a>
          kabul ediyorum.
        </label>
      </div>
      <div className="text-center mt-6">
        <button
          type="submit"
          className="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-1/4 content-center px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Kayıt Ol
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
