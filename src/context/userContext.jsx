import {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";
import useFetch from "../hooks/useFetch";

const UserContext = createContext(null);

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  const url =import.meta.env.VITE_HOST_URL;
  const onSuccess = (data) => {
    setUser(data);
  }

  const {performFetch, error} = useFetch('/auth/profile',onSuccess);

  if(error){
    setUser(null);
  }



  const getUser = useCallback(async () => {
    try {

      performFetch({
        credentials: "include",
      })

    } catch (error) {
      console.error("Failed to fetch user", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const refreshUser = useCallback(() => {
    setLoading(true);
    setRefresh((prev) => !prev);
  }, []);

  useEffect(() => {
    getUser();
  }, [getUser, refresh]);

  return (
    <UserContext.Provider value={{ user, setUser, refreshUser }}>
      {loading ? <div>Loading...</div> : children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
