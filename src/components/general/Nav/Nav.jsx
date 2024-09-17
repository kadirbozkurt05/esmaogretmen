import { useEffect, useState } from "react";
import { Link, useHref } from "react-router-dom";
import { useUser } from "../../../context/userContext";
import Logo from "./Logo";
import BigScreen from "./BigScreen";
import SmallScreen from "./SmallScreen"; // Import SmallScreen

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
    <nav className="bg-light-rose px-6 2xl:px-32 md:py-2 flex flex-row sm:h-16 lg:h-20 items-center shadow-md justify-between">
      <div>
        <Logo />
      </div>
      {!user ? (
        <div className="flex items-center">
          <div className="hidden sm:flex">
            <BigScreen />
          </div>
          <div className="flex md:hidden">
            <SmallScreen />
          </div>
        </div>
      ) : (
        <div>{title}</div>
      )}
    </nav>
  );
};

export default Nav;
