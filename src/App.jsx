import Footer from "./components/general/Footer/Footer";
import Nav from "./components/general/Nav/Nav";
import MainPage from "./pages/general/MainPage";
import { useEffect } from "react";
import { useUser } from "./context/userContext";
import useFetch from "./hooks/useFetch";

function App() {
  const {user, setUser } = useUser(sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")) :localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null);


  useEffect(()=>{
    if(user){
      performFetch();
    }
  },[])

  const onSuccess = (data) => {
    setUser(data);
  }

  const {performFetch} = useFetch(`/user/${user?.id}`,onSuccess);


  return (
    
    <div className=" back-ground">
      <Nav user={user} />
      <MainPage user={user}/> 
      
      <Footer/>
    </div>
  );

  
}

export default App;
