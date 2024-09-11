import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-gray-800 md:px-48">
      <div className="w-full p-4 md:flex md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <Link to={"https://www.esmaogretmen.com/"} className="hover:underline">
            Esma Öğretmen™
          </Link>
          . Tüm hakları saklıdır.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link to={"/about"} className="hover:underline me-4 md:me-6">
              Hakkımda
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline me-4 md:me-6">
              Gizlilik Politikası
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className="hover:underline">
              İletişim
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
