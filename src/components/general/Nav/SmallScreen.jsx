// SmallScreen.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SmallScreen() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="block sm:hidden p-2 focus:outline-none"
        aria-label="Toggle menu"
      >
        {/* Hamburger Icon */}
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

      {/* Menu */}
      {menuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50">

          <Link
            className="block px-4 py-2 text-sm hover:bg-gray-100"
            to={`/giris`}
            onClick={toggleMenu}
          >
            Giriş Yap
          </Link>
          <Link
            className="block px-4 py-2 text-sm hover:bg-gray-100"
            to={`/kayit`}
            onClick={toggleMenu}
          >
            Kayıt Ol
          </Link>
          <hr />
          <Link
            className="block px-4 py-2 text-sm hover:bg-gray-100"
            to={`/basvur/try`}
            onClick={toggleMenu}
          >
            Özel Ders Talep Et
          </Link>
        </div>
      )}
    </div>
  );
}
