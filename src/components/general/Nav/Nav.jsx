import { useEffect, useState } from "react";
import { Link, useHref } from "react-router-dom";
import { useUser } from "../../../context/userContext";
import Logo from "./Logo";
import Container from "../../Container";

const Nav = () => {
  const href = useHref();
  const [title, setTitle] = useState(null);
  const { user } = useUser();

  useEffect(() => {
    if (href === "/") {
      if (user) {
        if (user.role === "teacher") {
          setTitle("ÖĞRETMEN PANELİ");
        } else {
          setTitle("ÖĞRENCİ PANELİ");
        }
      }
    } else if (href === "/profile") {
      setTitle("PROFİL");
    } else if (href === "/settings") {
      setTitle("AYARLAR");
    } else if (href.includes("/draw")) {
      setTitle("ÇEKİLİŞ SAYFASI");
    }
  }, [user]);

  return (
    <nav className=" bg-light-rose px-6 2xl:px-32 md:py-2 flex flex-row items-center shadow-md justify-between">

      <div>
        <Logo/>
      </div>
{  !user  ?  <div className="flex  cursor-pointer text-sm flex-row gap-2 md:gap-6 font-trebuchet font-bold">
      <Link className="hover:text-gray-600 hidden sm:block"  to={`/basvur/try`}>Özel Ders Talep Et</Link>
        <Link  className="hover:text-gray-600"to={`/giris`}>Giriş Yap</Link>
        <Link className="hover:text-gray-600" to={`/kayit`}>Kayıt Ol</Link>
      </div>:
      <div>{title}</div>
      }

    </nav>

  );
};

export default Nav;
