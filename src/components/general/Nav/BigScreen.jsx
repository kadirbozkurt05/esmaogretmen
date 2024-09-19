import { useState } from "react";
import { Link } from "react-router-dom";
import SignInForm from "../SignIn/SignInForm";
import SignUpForm from "../SignUp/SignUpForm";

export default function BigScreen(){
  const [loginForm, setLoginForm] = useState(false);
  const [signUp, setSignUpForm] = useState(false);

    return(<>
      {loginForm && <SignInForm/>}
      {signUp && <SignUpForm/>}
        <div className="flex cursor-pointer text-sm flex-row gap-6 font-trebuchet font-bold">
      <Link className="hover:text-gray-600 hidden sm:block"  to={`/basvur/try`}>Özel Ders Talep Et</Link>
        <div  className="hover:text-gray-600" onClick={()=>{
          setLoginForm(true);
        }}>Giriş Yap</div>
        <div className="hover:text-gray-600" onClick={()=>setSignUpForm(true)} >Kayıt Ol</div>
      </div>
      </>
    )
}