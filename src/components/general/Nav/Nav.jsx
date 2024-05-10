import { useEffect, useState } from "react";
import auth from "./../../../utils/config/firebaseConfig";
import { logOut } from "./../../../utils/auth/LoginAndLogout";
import { Link, useHref } from "react-router-dom";
import getUserInfo from "../../../utils/database/GetData/GetUserInfo";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";

const Nav = () => {
  const [user, setUser] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [positive, setPositive] = useState(false);
  const href = useHref();
  const [title, setTitle] = useState(null);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);


useEffect(()=>{
  if(href==="/"){
    setTitle("ÖĞRENCİ PANELİ")
  }else if(href==="/profile"){
    setTitle("PROFİL")
  }else if(href==="/settings"){
    setTitle("AYARLAR")
  }
},[href])

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const getUser = async () => {
        try {
          const userInfo = await getUserInfo(auth.currentUser.uid);
          setUser(userInfo);
        } catch (error) {}
      };
       getUser();
    } else {
      setUser(null)
    }
  });

  const handleLogout = async () => {
    setIsNavOpen(false)
    setIsClicked(false)
    setShowModal(true);    
  };

  const approved = async () => {
    setShowModal(false);
    try {
      await logOut();
      navigate("/homepage")
      
    } catch (error) {
      console.log(error);
    }
  }

  const cancelled = () =>{
    setShowModal(false);
  }



  return (
    <>
          {showModal && <Modal title={"Çıkış Yap"} text={"Çıkış yapmak istediğinize emin misiniz? Kaydedilen giriş bilgileri silinecektir."} positiveButton = {"Çıkış Yap"} negativeButton = {"Vazgeç"} positiveFunction = {approved} negativeFunction = {cancelled} />}

<nav className="bg-white border-gray-200 dark:bg-gray-900">
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
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        Esma Öğretmen
      </span>
    </Link>




{

user &&
(        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      {user && (
        <button
          onClick={() => {
            setIsClicked(!isClicked);
            setIsNavOpen(false);
          }}
          type="button"
          className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          id="user-menu-button"
          aria-expanded="false"
          data-dropdown-toggle="user-dropdown"
          data-dropdown-placement="bottom"
        >
          <span className="sr-only">Open user menu</span>
          <img
            className="w-8 h-8 rounded-full"
            src={user?.picture}
            alt="user photo"
          />
        </button>
      )}
      {isClicked ? (
        <div
          className="absolute z-50 top-10 transition right-0 xl:right-36 my-4 w-48 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
          id="user-dropdown"
        >
          <div className="px-4 py-3">
            <span className="block text-sm text-gray-900 dark:text-white">
              {auth.currentUser?.displayName}
            </span>
            <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
              {auth.currentUser?.email}
            </span>
          </div>
          <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
              <Link
                to="/"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Öğrenci Paneli
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Profil
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Ayarlar
              </Link>
            </li>

            <li>
              <div
                onClick={handleLogout}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Çıkış Yap
              </div>
            </li>
          </ul>
        </div>
      ) : null}
      <button
        onClick={() => {
          setIsClicked(false);
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
    </div>)

}




    <div
      className={
        isNavOpen
          ? "items-center justify-between w-full md:flex md:w-auto md:order-1"
          : "items-center hidden justify-between w-full md:flex md:w-auto md:order-1"
      }
      id="navbar-user"
    >
      {!user ? (
        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 ">
          <li>
            <Link
              to="/"
              className={
                href === "/"
                  ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                  : "block py-2 px-3 text-white bg-black rounded md:bg-transparent md:text-white md:p-0"
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
                  ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                  : "block py-2 px-3 text-white bg-black rounded md:bg-transparent md:text-white md:p-0"
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
                  ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                  : "block py-2 px-3 text-white bg-black rounded md:bg-transparent md:text-white md:p-0"
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
                  ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                  : "block py-2 px-3 text-white bg-black rounded md:bg-transparent md:text-white md:p-0"
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
                  ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                  : "block py-2 px-3 text-white bg-black rounded md:bg-transparent md:text-white md:p-0"
              }
            >
              İletişim
            </Link>
          </li>
          {!user && (
            <>
              {" "}
              <li>
                <Link
                  to="/sign-up"
                  className={
                    href === "/sign-up"
                      ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                      : "block py-2 px-3 text-white bg-black rounded md:bg-transparent md:text-white md:p-0"
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
                      ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                      : "block py-2 px-3 text-white bg-black rounded md:bg-transparent md:text-white md:p-0"
                  }
                >
                  Giriş Yap
                </Link>
              </li>
            </>
          )}
        </ul>
      ) : (
        <div className=" bg-gray-800 border border-gray-800 shadow-lg rounded-2xl text-gray-100 font-medium p-4 justify-center flex">
        <h6 className="text-l font-semibold text-white w-96 text-center">{title}</h6> 
      </div>
      )}
    </div>
  </div>
</nav>
    </>

  );
};

export default Nav;
