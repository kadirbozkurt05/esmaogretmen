import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const localUser = sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")) : JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(localUser);

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
