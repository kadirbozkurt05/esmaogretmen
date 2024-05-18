import Footer from "./components/general/Footer/Footer";
import Nav from "./components/general/Nav/Nav";
import MainPage from "./pages/general/MainPage";
import { useEffect } from "react";
import { useUser } from "./context/userContext";

function App() {
  const {user, setUser } = useUser();


  useEffect(()=>{
    if(sessionStorage.getItem("user")){
      const user = JSON.parse(sessionStorage.getItem("user"));
      setUser(user);
    }

    if(localStorage.getItem("user")){
      const user = JSON.parse(localStorage.getItem("user"));
      setUser(user);
    }
  },[])
  return (
    
    <div className=" bg-gray-900">
      <Nav user={user} />
      <MainPage user={user}/> 
      <Footer/>
    </div>
  );
}

export default App;
