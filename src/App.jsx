import Footer from "./components/general/Footer/Footer";
import Nav from "./components/general/Nav/Nav";
import MainPage from "./pages/general/MainPage";
import { useEffect } from "react";
import { signIn } from "./utils/auth/LoginAndLogout";

function App() {
  useEffect(()=>{

    if(localStorage.getItem("remember")==="true"){

      const credentials = JSON.parse(localStorage.getItem("credential"));

      console.log(credentials);
       (async ()=>{
        await signIn(credentials.email, credentials.password)
       })()
    }
  },[])
  return (
    <div className=" bg-gray-900">
      <Nav />
      <MainPage/>
      <Footer/>
    </div>
  );
}

export default App;
