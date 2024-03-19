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
    <form onSubmit={handleSubmit}>
      <div className=" text-center text-3xl mb-6">ÜYE FORMU</div>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            İsim*
          </label>
          <input
            onChange={handleChange}
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Ahmet"
            required
          />
        </div>
        <div>
          <label
            htmlFor="last_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Soy İsim*
          </label>
          <input
            onChange={handleChange}
            type="text"
            id="last_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Yılmaz"
            required
          />
        </div>
        <div>
          <label
            htmlFor="reference"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Referans Kodu (Opsiyonel)
          </label>
          <input
            onChange={handleChange}
            type="text"
            id="reference"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="x8ju97Jh"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Telefon Numarası (Opsiyonel)
          </label>
          <input
            onChange={handleChange}
            type="tel"
            id="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="555-211-12-12"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
          />
        </div>
        <div>
          <label
            htmlFor="class"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Sınıf (Opsiyonel)
          </label>
          <input
            onChange={handleChange}
            type="number"
            id="class"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="4"
          />
        </div>
        <div>
          <label
            htmlFor="school"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Okul (Opsiyonel)
          </label>
          <input
            onChange={handleChange}
            type="number"
            id="school"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Cumhuriyet İlkokulu"
          />
        </div>
      </div>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          E-posta*
        </label>
        <input
          onChange={handleChange}
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="ahmet.yilmaz@example.com"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Şifre*
        </label>
        <input
          onChange={handleChange}
          type="password"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="•••••••••"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="confirm_password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Şifre (Tekrar)*
        </label>
        <input
          onChange={handleChange}
          type="password"
          id="confirm_password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="•••••••••"
          required
        />
        <div className=" text-white">* Zorunlu alanlar</div>
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
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          <a
            href="#"
            className="text-blue-600 hover:underline dark:text-blue-500"
          >
            Şartlar ve koşulları{" "}
          </a>
          kabul ediyorum.
        </label>
      </div>
      <div className="text-center mt-6">
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-1/4 content-center px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Kayıt Ol
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
