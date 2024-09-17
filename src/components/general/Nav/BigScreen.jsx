import { Link } from "react-router-dom";

export default function BigScreen(){
    return(
        <div className="flex cursor-pointer text-sm flex-row gap-6 font-trebuchet font-bold">
      <Link className="hover:text-gray-600 hidden sm:block"  to={`/basvur/try`}>Özel Ders Talep Et</Link>
        <Link  className="hover:text-gray-600"to={`/giris`}>Giriş Yap</Link>
        <Link className="hover:text-gray-600" to={`/kayit`}>Kayıt Ol</Link>
      </div>
    )
}