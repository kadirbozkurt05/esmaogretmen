import React, { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const id = sessionStorage.getItem("user");

  useEffect(()=>{
    if(id){
      setUser(id);
    }
  },[id])



  return (
    <UserContext.Provider value={{ user, setUser }}>
      { children}
    </UserContext.Provider>
  );
};


export const useUser = () => {
  const context = useContext(UserContext);
  return context;
};
