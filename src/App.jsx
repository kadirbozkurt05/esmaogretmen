import React, { useEffect, useState } from "react";
import Footer from "./components/general/Footer/Footer";
import Nav from "./components/general/Nav/Nav";
import MainPage from "./pages/general/MainPage";
import { useUser } from "./context/userContext";
import { auth } from "../firebase";
import { browserLocalPersistence, onAuthStateChanged, setPersistence } from "firebase/auth";

function App() {
  const { user, setUser } = useUser();
  useEffect(()=>{
    setPersistence(auth, browserLocalPersistence)
    .then(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if(currentUser){
          setUser(JSON.parse(localStorage.getItem("user")));
        }
       
      });
      return () => unsubscribe();
    })
    .catch((error) => {
      console.error("Error setting persistence:", error);
    });
  },[auth.currentUser])
  

  return (
    <div className="back-ground">
      <Nav user={user} />
      <MainPage user={user} />
      <Footer />
    </div>
  );
}

export default App;
