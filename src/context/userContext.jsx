// context/userContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { getAuth } from "firebase/auth";
export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [uid, setUid] = useState("");
  const auth = getAuth();

  const persistenceType =
    localStorage.getItem("rememberMe") === "true"
      ? browserLocalPersistence
      : browserSessionPersistence;

  useEffect(() => {
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          if (currentUser) {
            setUid(currentUser.uid);
          } else {
            setUid("");
            setUser(null);
          }
        });
        return () => unsubscribe();
      })
      .catch((error) => {
        console.error("Error setting persistence:", error);
      });
  }, []);

  useEffect(() => {
    const getUser = async () => {
      if (uid !== "") {
        try {
          const isProduction = process.env.NODE_ENV === "production";
          const url = isProduction
            ? `https://esma-c.netlify.app/.netlify/functions/api`
            : `/api`;

          const idToken = await auth.currentUser.getIdToken();
          const response = await fetch(`${url}/user/${uid}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${idToken}`,
            },
          });
          const data = await response.json();
          if (data?.firstName) {
            setUser(data);
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
    getUser();
  }, [uid]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

// context/userContext.js
// import React, { createContext, useContext, useEffect, useState } from "react";
// import { onAuthStateChanged, setPersistence, browserLocalPersistence, browserSessionPersistence } from "firebase/auth";
// import { getAuth } from "firebase/auth";

// export const UserContext = createContext({});

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [uid, setUid] = useState("");

//   useEffect(() => {
//     const firebaseAuth = getAuth();
//     const rememberMe = localStorage.getItem("rememberMe") === "true";

//     const persistenceType = rememberMe ? browserLocalPersistence : browserSessionPersistence;

//     setPersistence(firebaseAuth, persistenceType)
//       .then(() => {
//         const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
//           if (currentUser) {
//             setUid(currentUser.uid);
//           } else {
//             setUid("");
//             setUser(null);
//           }
//         });
//         return () => unsubscribe();
//       })
//       .catch((error) => {
//         console.error("Error setting persistence:", error);
//       });
//   }, []);

//   useEffect(() => {
//     const getUser = async () => {
//       if (uid !== "") {
//         try {
//           const response = await fetch(`http://localhost:5000/api/user/${uid}`);
//           const data = await response.json();
//           setUser(data);
//         } catch (error) {
//           console.error("Error fetching user data:", error);
//         }
//       }
//     };
//     getUser();
//   }, [uid]);

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUser = () => {
//   const context = useContext(UserContext);
//   if (!context) {
//     throw new Error("useUser must be used within a UserProvider");
//   }
//   return context;
// };
