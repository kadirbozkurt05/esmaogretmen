import Footer from "./components/general/Footer/Footer";
import Nav from "./components/general/Nav/Nav";
import MainPage from "./pages/general/MainPage";
import { useEffect } from "react";
import { useUser } from "./context/userContext";

function App() {
  const {user, setUser } = useUser();


  useEffect(()=>{
    if(sessionStorage.getItem("user")){
      const user = sessionStorage.getItem("user");
      setUser(user);

    }else if(localStorage.getItem("user")){
      const user = localStorage.getItem("user");
      setUser(user);
    }else{
      setUser(null)
    }
  },[])

  return (
    
    <div>
      <Nav user={user} />
      <MainPage user={user}/> 
      
      <Footer/>
    </div>
  );

  
}

export default App;
