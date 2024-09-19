import { useState } from "react";
import { Link } from "react-router-dom";
import SignInForm from "../SignIn/SignInForm";
import SignUpForm from "../SignUp/SignUpForm";

export default function SmallScreen() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginForm, setLoginForm] = useState(false);
  const [signUp, setSignUpForm] = useState(false);

  return (
    <>
      {loginForm && <SignInForm />}
      {signUp && <SignUpForm />}
      <div className="relative">
        <button
          onClick={()=>setMenuOpen(!menuOpen)}
          className="block sm:hidden p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {menuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50">
            <div
              className="block px-4 py-2 text-sm hover:bg-gray-100"
              onClick={() => {
                setLoginForm(true);
                setMenuOpen(!menuOpen);
              }}
            >
              Giriş Yap
            </div>
            <div
              className="block px-4 py-2 text-sm hover:bg-gray-100"
              onClick={() => {
                setSignUpForm(true);
                setMenuOpen(!menuOpen);
              }}
            >
              Kayıt Ol
            </div>
            <hr />
            <Link
              className="block px-4 py-2 text-sm hover:bg-gray-100"
              to={`/basvur/try`}
              onClick={()=>setMenuOpen(!menuOpen)}
            >
              Özel Ders Talep Et
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
