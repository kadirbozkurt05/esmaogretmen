import { useEffect, useState } from "react";
import { Link, useHref } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";
import { useUser } from "../../../context/userContext";
import { auth } from "../../../../firebase";
import { onAuthStateChanged } from "firebase/auth";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const href = useHref();
  const [title, setTitle] = useState(null);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const { setUser, user } = useUser();



  useEffect(() => {
    if (href === "/") {
      if (user?.isTeacher) {
        setTitle("ÖĞRETMEN PANELİ");
      } else {
        setTitle("ÖĞRENCİ PANELİ");
      }
    } else if (href === "/profile") {
      setTitle("PROFİL");
    } else if (href === "/settings") {
      setTitle("AYARLAR");
    } else {
      if (user?.isTeacher) {
        setTitle("ÖĞRETMEN PANELİ");
      } else {
        setTitle("ÖĞRENCİ PANELİ");
      }
    }
  }, [user?.isTeacher]);

  const approved = async () => {
    setShowModal(false);
    try {
      setUser(null);
      localStorage.removeItem("user");
      navigate("/");
    } catch (error) {
      //
    }
  };

  const cancelled = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <Modal
          title={"Çıkış Yap"}
          text={
            "Çıkış yapmak istediğinize emin misiniz? Kaydedilen giriş bilgileri silinecektir."
          }
          positiveButton={"Çıkış Yap"}
          negativeButton={"Vazgeç"}
          positiveFunction={approved}
          negativeFunction={cancelled}
        />
      )}

      <nav
        className={
          user && auth.currentUser
            ? "z-50 bg-teal-100 border-gray-200"
            : "z-50 bg-teal-100 border-gray-200 sticky top-0 "
        }
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://i.ibb.co/prMYsS5/logo-no-background.png"
              className="h-8 bg bg-orange-300 rounded-full"
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Esma Öğretmen
            </span>
          </Link>

          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            
          {!user && !auth.currentUser && (
              <button
                onClick={() => {
                  setIsNavOpen(!isNavOpen);
                }}
                data-collapse-toggle="navbar-user"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                aria-controls="navbar-user"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            )}
          </div>

          <div
            className={
              isNavOpen
                ? "items-center justify-between w-full md:flex md:w-auto md:order-1"
                : "items-center hidden justify-between w-full md:flex md:w-auto md:order-1"
            }
            id="navbar-user"
          >
            {!user || !auth.currentUser ? (
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:items-center md:mt-0 md:border-0 ">
                <li>
                  <Link
                    to="/"
                    className={
                      href === "/"
                        ? "block py-2 px-3   rounded md:bg-transparent text-blue-700 md:p-0"
                        : "block py-2 px-3   rounded md:bg-transparent text-black md:p-0 md:hover:text-cyan-900"
                    }
                    aria-current="page"
                  >
                    Anasayfa
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={
                      href === "/about"
                        ? "block py-2 px-3   rounded md:bg-transparent text-blue-700 md:p-0"
                        : "block py-2 px-3   rounded md:bg-transparent text-black md:p-0 md:hover:text-cyan-900"
                    }
                  >
                    Hakkımda
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className={
                      href === "/services"
                        ? "block py-2 px-3   rounded md:bg-transparent text-blue-700 md:p-0"
                        : "block py-2 px-3   rounded md:bg-transparent text-black md:p-0 md:hover:text-cyan-900"
                    }
                  >
                    Hizmetler
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className={
                      href === "/pricing"
                        ? "block py-2 px-3   rounded md:bg-transparent text-blue-700 md:p-0"
                        : "block py-2 px-3   rounded md:bg-transparent text-black md:p-0 md:hover:text-cyan-900"
                    }
                  >
                    Ücretler
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={
                      href === "/contact"
                        ? "block py-2 px-3   rounded md:bg-transparent text-blue-700 md:p-0"
                        : "block py-2 px-3   rounded md:bg-transparent text-black md:p-0 md:hover:text-cyan-900"
                    }
                  >
                    İletişim
                  </Link>
                </li>
                {!user || !auth.currentUser ? (
                  <div className=" md:ml-10 flex flex-row">
                    {" "}
                    <li>
                      <Link
                        to="/sign-up"
                        className={
                          href === "/sign-up"
                            ? "block py-2 px-3 md:p-2 mt-4 md:mt-0  md:bg-gray-300   md:bg-transparent text-blue-700 md: border border-black rounded-2xl bg-gray-50"
                            : "block py-2 px-3 md:p-2 mt-4 md:mt-0  md:bg-gray-300  md:bg-transparent text-black md: border border-black rounded-2xl bg-gray-50"
                        }
                      >
                        Üye Ol
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/sign-in"
                        className={
                          href === "/sign-in"
                            ? "block py-2 px-3 md:p-2 mt-4 md:mt-0 ml-4 md:bg-gray-300  md:bg-transparent text-blue-700 md: border border-black rounded-2xl bg-gray-50"
                            : "block py-2 px-3 md:p-2 mt-4 md:mt-0 ml-4 md:bg-gray-300  md:bg-transparent text-black md: border border-black rounded-2xl bg-gray-50"
                        }
                      >
                        Giriş Yap
                      </Link>
                    </li>
                  </div>
                ):null}
              </ul>
            ) : (
              <div className="  border-gray-800 shadow-lg rounded-2xl  font-medium p-4 justify-center flex">
                <h6 className="text-l font-semibold  w-96 text-center">
                  {title}
                </h6>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
